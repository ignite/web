import bank from './cosmos.bank.v1beta1.js'

export default function init(store) {
	if (!store.hasModule(['chain', 'cosmos'])) {
		store.registerModule(['chain', 'cosmos'], { namespaced: true })
	}
	if (!store.hasModule(['chain', 'cosmos', 'cosmos-sdk'])) {
		store.registerModule(['chain', 'cosmos', 'cosmos-sdk'], {
			namespaced: true
		})
	}
	store.registerModule(['chain', 'cosmos', 'cosmos-sdk', 'cosmos.bank.v1beta1'], bank)
	store.subscribe(mutation => {
		if (mutation.type == 'chain/common/env/INITIALIZE_WS_COMPLETE') {
			store.dispatch('chain/cosmos/cosmos-sdk/cosmos.bank.v1beta1/init', null, { root: true })
		}
	})
}
