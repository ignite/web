import axios from 'axios'

export default {
	namespaced: true,
	state() {
		return {
			blocks: [],
			size: 20
		}
	},
	getters: {
		getBlocks: (state) => (howmany) => {
			return [...state.blocks]
				.sort((a, b) => b.height - a.height)
				.slice(0, howmany)
		},
		getBlockByHeight: (state) => (height) => {
			return state.blocks.find((x) => x.height == height) || {}
		}
	},
	mutations: {
		ADD_BLOCK(state, block) {
			state.blocks.push(block)
			if (state.blocks.length > state.size) {
				state.blocks.shift()
			}
		},
		RESET_STATE(state) {
			state.blocks = []
		},
		SET_SIZE(state, size) {
			state.size = size
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			if (rootGetters['chain/common/env/wsClient']) {
				rootGetters['chain/common/env/wsClient'].on('newblock', (data) => {
					dispatch('addBlock', data)
				})
			}
		},
		async addBlock({ commit, rootGetters }, blockData) {
			try {
				const blockDetails = await axios.get(
					rootGetters['chain/common/env/apiTendermint'] +
						'/block?height=' +
						blockData.data.value.block.header.height
				)
				const txDecoded = blockData.data.value.block.data.txs.map(
					async (tx) => {
						const dec = await rootGetters[
							'chain/common/env/apiClient'
						].decodeTx(tx)
						return dec
					}
				)
				const txs = await Promise.all(txDecoded)

				const block = {
					height: blockData.data.value.block.header.height,
					timestamp: blockData.data.value.block.header.time,
					hash: blockDetails.data.result.block_id.hash,
					details: blockData.data.value.block,
					txDecoded: txs
				}

				commit('ADD_BLOCK', block)
			} catch (e) {
				console.log('Cannot add new block. RPC node unavailable')
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		}
	}
}
