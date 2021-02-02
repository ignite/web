import axios from 'axios'

export default {
	namespaced: true,
	state() {
		return {
			blocks: [],
			size: 10
		}
	},
	getters: {
		getBlocks: state => {
			return [...state.blocks].sort((a, b) => b.height - a.height)
		},
		getBlockByHeight: state => height => {
			return state.blocks.find(x => x.height == height) || {}
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
				rootGetters['chain/common/env/wsClient'].on('newblock', data => {
					dispatch('addBlock', data)
				})
			}
		},
		async addBlock({ commit, rootGetters }, blockData) {
			const blockDetails = await axios.get(
				rootGetters['chain/common/env/apiTendermint'] +
					'/block?height=' +
					blockData.data.value.block.header.height
			)
			const block = {
				height: blockData.data.value.block.header.height,
				timestamp: blockData.data.value.block.header.time,
				hash: blockDetails.data.result.block_id.hash,
				details: blockData.data.value.block
			}

			commit('ADD_BLOCK', block)
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		}
	}
}
