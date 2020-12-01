import env from './env'
import blocks from './blocks'
import tx from './tx'

export default {
	namespaced: true,
	state: {},
	mutations: {},
	actions: {
		async init(
			{ dispatch },
			{ blockExplorer, account } = {
				blockExplorer: true,
				account: true
			}
		) {
			await dispatch('initEnv')
			if (blockExplorer !== false) await dispatch('initBlockConnection')
		}
	},
	modules: {
		env,
		blocks,
		tx
	}
}
