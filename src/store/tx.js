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
		const txHolder = {
			txHash: '',
			body: {
				messages: [],
				memo: ''
			},
			auth_info: {
				signer_infos: [],
				fee: {}
			}
		}

		if (rootGetters['cosmos/sdkVersion'] === 'Stargate') {
			const { txHash } = txDecoded
			const { body, auth_info } = txDecoded.data.tx
			const { messages, memo } = body
			txHolder.txHash = txHash
			txHolder.body = { messages, memo }
			txHolder.auth_info = auth_info
		} else {
			const { txHash, data } = txDecoded
			const { tx } = data
			txHolder.txHash = txHash
			txHolder.body = {
				messages: tx.value.msg,
				memo: tx.value.memo
			}
			txHolder.auth_info = {
				signer_infos: tx.value.signatures,
				fee: tx.value.fee
			}
		}

		return txHolder
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
		const { GET_TX_API } = rootGetters['cosmos/appEnv']
		try {
			// return await axios.post(`${API}/txs/decode`, { tx: txEncoded })
			// return await axios.get(`${API}/txs/${hashedTx}`)
			return await axios.get(`${GET_TX_API}${hashedTx}`)
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
