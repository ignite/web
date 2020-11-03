import axios from 'axios'
import { sha256 } from 'js-sha256'

const state = {
	stack: []
}

const getters = {
	txsStack: state => state.stack,
	txByHash: state => hash => state.stack.filter(tx => tx.txhash === hash),
	txByEncodedHash: state => hash =>
		state.stack.filter(tx => tx.txEncoded && tx.txEncoded === hash)
}

const mutations = {
	addTxEntry(state, { tx }) {
		/**
		 *
		 // 1. No txs in stack yet
		 *
		 */
		if (state.stack.length === 0) {
			state.stack.push(tx)
			return
		}

		/**
		 *
		 // 2. Txs already exist in the stack
		 *
		 */
		for (let txIndex = 0; txIndex < state.stack.length; txIndex++) {
			const currentTxVal = state.stack[txIndex]
			const nextTxVal = state.stack[txIndex + 1]

			// Push tx to the end of the stack
			if (!nextTxVal) {
				state.stack.push(tx)
				break
			}

			const txHeight = parseInt(tx.height)
			const currentTxValHeight = parseInt(currentTxVal.height)
			const nextTxValHeight = parseInt(nextTxVal.height)
			// Add tx to the start of the stack
			if (txHeight > currentTxValHeight && txIndex === 0) {
				state.stack.unshift(tx)
				break
			}
			// Insert tx to the stack
			if (currentTxValHeight > txHeight && txHeight > nextTxValHeight) {
				state.stack.splice(txIndex + 1, 0, tx)
				break
			}
		}
	}
}

const actions = {
	/**
	 *
	 *
	 * @param {string} lcdUrl
	 * @param {string} txEncoded
	 * @param {function} errCallback
	 *
	 *
	 */
	async getDecodedTx({ rootGetters }, { txEncoded, errCallback }) {
		const hashedTx = sha256(Buffer.from(txEncoded, 'base64'))
		const { API } = rootGetters['cosmos/appEnv']
		try {
			// return await axios.post(`${API}/txs/decode`, { tx: txEncoded })
			return await axios.get(`${API}/txs/${hashedTx}`)
		} catch (err) {
			console.error(txEncoded, err)
			if (errCallback) errCallback(txEncoded, err)
		}
	},
	/**
	 * Add tx into txsStack
	 *
	 * @param {object} store
	 * @param {object} payload
	 * @param {object} payload.txData
	 *
	 *
	 */
	addTxEntry({ commit, getters }, txData) {
		/*
		 *
		 // If tx is null, it's not decoded successfully,
		 // and triggered from `addErrorTx` in `blocks` store mutations.
		 *
		 */
		const fmtTxData =
			txData.tx === null
				? {
						height: txData.height,
						txEncoded: txData.txEncoded
				  }
				: txData.data.tx

		const isTxInStack =
			txData.tx === null
				? getters.txByEncodedHash(txData.txEncoded).length > 0
				: getters.txByHash(txData.data.tx.txhash).length > 0

		if (!isTxInStack) commit('addTxEntry', { tx: fmtTxData })
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
