import ws from './ws'

export default {
	namespaced: true,
	modules: {
		tendermint: {
			namespaced: true,
			modules: {
				ws
			},
			actions: {
				init({ dispatch, rootState }) {
					dispatch('ws/subscribe')
				}
			}
		}
	}
}
