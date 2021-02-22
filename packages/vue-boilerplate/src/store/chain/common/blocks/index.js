import blocks from './blocks.js'

export default function init(store) {
	if (!store.hasModule(['chain', 'common'])) {
		store.registerModule(['chain', 'common'], { namespaced: true })
	}
	store.registerModule(['chain', 'common', 'blocks'], blocks)
	store.subscribe((mutation) => {
		if (mutation.type == 'chain/common/env/INITIALIZE_WS_COMPLETE') {
			store.dispatch('chain/common/blocks/init', null, { root: true })
		}
	})
}
