import { env, starport, blocks, bank, wallet } from '@starport/vuex'
//import blog from './chain/foo/bar/blog'

export default function init(store) {
	store.registerModule(['chain'], { namespaced: true })
	bank(store)
	starport(store)
	blocks(store)
	//	blog(store)
	env(store)
	wallet(store)
}
