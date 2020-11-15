import env from './env'
import auth from './auth'
import bank from './bank'
import module from './module'
import blocks from './blocks'
import tx from './tx'

export default {
	namespaced: true,
	state: {},
	mutations: {},
	actions: {
		/**
		 *
		 *
		 * @param {object} store
		 * @param {object} payload
		 * @param {boolean} payload.blockExplorer - Option to run bundle for visualize block explorer. Default is True.
		 * @param {boolean} payload.account - Option to run bundle for interact with bank module. Default is True.
		 *
		 *
		 */
		async init(
			{ dispatch },
			{ blockExplorer, account } = {
				blockExplorer: true,
				account: true
			}
		) {
			await dispatch('initEnv')
			if (blockExplorer !== false) await dispatch('initBlockConnection')
			if (account !== false) await dispatch('accountSignInTry')

			// dispatch("stakingPoolFetch");
			// dispatch("validatorsFetch");
		}
	},
	modules: {
		env,
		auth,
		bank,
		module,
		blocks,
		tx
	}
}
