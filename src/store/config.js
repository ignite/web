import env from './modules/env'
import starport from './modules/starport'
import bank from './modules/cosmos/bank'
import wallet from './modules/wallet'

export default function init(store) {
	store.registerModule(['modules'], { namespaced: true })
	bank(store)
	starport(store)
	env(store)
	wallet(store)
}
