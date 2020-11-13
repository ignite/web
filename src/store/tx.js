import axios from 'axios'
import { sha256 } from 'js-sha256'

const state = {
	stack: []
}

const getters = {
	txByHash: state => hash => state.stack.filter(tx => tx.txhash === hash),
	txByEncodedHash: state => hash =>
		state.stack.filter(tx => tx.txEncoded && tx.txEncoded === hash)
}

const actions = {
	/**
	 *
	 *
	 */
	setDecodedTxTemplate({ rootGetters }, { txDecoded }) {
		const txHolder = ({
			txHash = '',
			messages = [],
			memo = '',
			signer_infos = [],
			fee = {},
			gas_used = null,
			gas_wanted = null,
			height = null,
			code = 0,
			log = null
		}) => ({
			txHash,
			body: {
				messages,
				memo
			},
			auth_info: {
				signer_infos,
				fee
			},
			meta: {
				gas_used,
				gas_wanted,
				height,
				code,
				log
			}
		})

		/**
		 * 
		 // Stargate 
		 *
		 */
		if (rootGetters['cosmos/sdkVersion'] === 'Stargate') {
			// const { txHash } = txDecoded
			// const { body, auth_info } = txDecoded.data.tx
			// const { messages, memo } = body
			// txHolder.txHash = txHash
			// txHolder.body = { messages, memo }
			// txHolder.auth_info = auth_info

			// ⚠️ Temporarily combining two responses to get all required info
			const { data } = txDecoded.rpcRes
			const { height, tx_result } = data.result
			const { code, log, gas_used, gas_wanted } = tx_result
			const { body, auth_info } = txDecoded.grpcRes.data.tx
			const { messages, memo } = body

			return txHolder({
				txHash: txDecoded.txHash,
				messages,
				memo,
				signer_infos: auth_info.signer_infos,
				fee: auth_info.fee,
				gas_used,
				gas_wanted,
				height,
				code,
				log
			})
		}

		/**
		 * 
		 // Launchpad
		 *
		 */
		const { txHash, data } = txDecoded
		const { tx, gas_used, gas_wanted, height, raw_log, code } = data

		return txHolder({
			txHash: txHash,
			messages: tx.value.msg,
			memo: tx.value.memo,
			signer_infos: tx.value.signatures,
			fee: tx.value.fee,
			gas_used,
			gas_wanted,
			height,
			code,
			log: raw_log
		})
	},
	/**
	 *
	 *
	 * @param {string} lcdUrl
	 * @param {string} txEncoded
	 * @param {function} errCallback
	 *
	 *
	 */
	async getRawDecodedTx({ rootGetters }, { txEncoded, errCallback }) {
		const hashedTx = sha256(Buffer.from(txEncoded, 'base64'))
		const { RPC, API } = rootGetters['cosmos/appEnv']

		/**
		 * 
		 // Stargate 
		 *
		 */
		if (rootGetters['cosmos/sdkVersion'] === 'Stargate') {
			// ⚠️ Temporarily combining two responses to get all required info
			return await axios
				.get(`${RPC}/tx?hash=0x${hashedTx}`)
				.then(
					async rpcRes =>
						await axios
							.get(`${API}/cosmos/tx/v1beta1/tx/${hashedTx}`)
							.then(grpcRes => ({ grpcRes, rpcRes }))
				)
				.catch(err => {
					console.error(txEncoded, err)
					if (errCallback) errCallback(txEncoded, err)
					throw err
				})
		}

		/**
		 * 
		 // Launchpad
		 *
		 */
		try {
			// return await axios.get(`${GET_TX_API}${hashedTx}`)
			// return await axios.post(`${API}/txs/decode`, { tx: txEncoded })
			return await axios.get(`${API}/txs/${hashedTx}`)
		} catch (err) {
			console.error(txEncoded, err)
			if (errCallback) errCallback(txEncoded, err)
			throw err
		}
	},
	/**
	 *
	 *
	 */
	async getDecodedTx({ dispatch }, { txEncoded, errCallback }) {
		return await dispatch('getRawDecodedTx', {
			txEncoded,
			errCallback
		})
			.then(txRes =>
				dispatch('setDecodedTxTemplate', {
					txDecoded: {
						...txRes,
						txHash: sha256(Buffer.from(txEncoded, 'base64')).toUpperCase()
					}
				}).then(fmtTx => fmtTx)
			)
			.catch(() => null)
	}
}

export default {
	state,
	getters,
	mutations: {},
	actions
}
