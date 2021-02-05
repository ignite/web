import starport from './starport.js'

export default function init(store) {
	if (!store.hasModule(['chain', 'common'])) {
		store.registerModule(['chain', 'common'], { namespaced: true })
	}
	store.registerModule(['chain', 'common', 'starport'], starport)
}
