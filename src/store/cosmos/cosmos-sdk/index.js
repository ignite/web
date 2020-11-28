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
				init({ dispatch }) {
					dispatch('tendermint/tendermint/init', null, { root: true })
				}
			}
		}
	}
}
