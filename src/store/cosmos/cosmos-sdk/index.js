import auth from './auth'
import bank from './bank'

export default {
	namespaced: true,
	modules: {
		'cosmos-sdk': {
			namespaced: true,
			modules: {
				auth,
				bank
			},
			actions: {
				async init({ dispatch }) {
					await dispatch('common/session/init', null, { root: true })
					await dispatch('tendermint/tendermint/init', null, { root: true })
				}
			}
		}
	}
}
