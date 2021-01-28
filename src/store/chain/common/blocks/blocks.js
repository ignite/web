export default {
	namespaced: true,
	state() {
		return {
			blocks: [],
			size: 20
		}
	},
	getters: {
		getBlocks: state => {
			return [...state.blocks].sort( (a,b) => b.height - a.height)
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
		addBlock({ commit }, blockData) {
			const block = {
				height: blockData.data.value.block.header.height,
				timestamp: blockData.data.value.block.header.time,
				hash: "Unconfirmed",
				data: blockData.data.value.block
			}
			commit('ADD_BLOCK', block)
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		}
	}
}
