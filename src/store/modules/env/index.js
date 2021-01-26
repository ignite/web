import env from './env.js'

export default function init(store) {
	store.registerModule(['modules', 'env'], env)
}
