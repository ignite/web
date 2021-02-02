import blog from './blog.js'

export default function init(store) {
	if (!store.hasModule(['tendermint'])) {
		store.registerModule(['tendermint'], { namespaced: true })
	}
	if (!store.hasModule(['tendermint', 'modules'])) {
		store.registerModule(['tendermint', 'modules'], { namespaced: true })
	}
	store.registerModule(['tendermint', 'modules', 'blog'], blog)
	store.subscribe(mutation => {
		if (mutation.type == 'chain/common/env/INITIALIZE_WS_COMPLETE') {
			store.dispatch('chain/tendermint/modules/blog/init', null, { root: true })
		}
		if (mutation.type == 'chain/common/wallet/SET_ACTIVE_CLIENT') {
			store.dispatch('chain/tendermint/modules/blog/registerTypes', null, {
				root: true
			})
		}
	})
}
