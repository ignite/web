import blog from './foo.bar.blog.js'

export default function init(store) {
	if (!store.hasModule(['chain', 'foo'])) {
		store.registerModule(['chain', 'foo'], { namespaced: true })
	}
	if (!store.hasModule(['chain', 'foo', 'bar'])) {
		store.registerModule(['chain', 'foo', 'bar'], {
			namespaced: true
		})
	}
	store.registerModule(['chain', 'foo', 'bar', 'foo.bar.blog'], blog)
	store.subscribe(mutation => {
		if (mutation.type == 'chain/common/env/INITIALIZE_WS_COMPLETE') {
			store.dispatch('chain/foo/bar/foo.bar.blog/init', null, { root: true })
		}
	})
}
