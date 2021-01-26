import bank from './bank.js'

export default function init(store) {
	if (!store.hasModule('modules/cosmos')) {
		store.registerModule(['modules', 'cosmos'], { namespaced: true })
	}
	store.registerModule(['modules', 'cosmos', 'bank'], bank)
	store.subscribe(mutation => {
		if (mutation.type == 'modules/env/initializeWSComplete') {
			store.dispatch('modules/cosmos/bank/init', null, { root: true })
		}
		if (mutation.type == 'modules/wallet/setActiveClient') {
			store.dispatch('modules/cosmos/bank/registerTypes', null, { root: true })
		}
	})
}
