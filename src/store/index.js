import Vue from 'vue'
import Vuex from 'vuex'
import auth from './cosmos/cosmos-sdk/auth'
import wallet from './tendermint/starport/wallet'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		cosmos: {
			namespaced: true,
			modules: {
				'cosmos-sdk': {
					namespaced: true,
					modules: {
						auth
					}
				}
			}
		},
		tendermint: {
			namespaced: true,
			modules: {
				starport: {
					namespaced: true,
					modules: {
						wallet
					}
				}
			}
		}
	}
})

export default store
