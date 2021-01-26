import starport from './starport.js'

export default function init(store) {
	store.registerModule(['modules', 'starport'], starport)
}
