import ws from './ws'
import tx from './tx'

export default {
	namespaced: true,
	modules: {
		tendermint: {
			namespaced: true,
			modules: {
				ws,
				tx
			},
			actions: {
				init({ dispatch, rootState }) {
					dispatch('ws/init')
				}
			}
		}
	}
}
