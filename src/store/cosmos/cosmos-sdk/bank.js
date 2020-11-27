const store = {
	namespaced: true,
	state: {
		foo: 'bank'
	},
	actions: {
		init() {
			console.log('hello from bank')
		}
	}
}

export default s => {
	const r = (p, m) => (s.hasModule(p) ? null : s.registerModule(p, m))
	r('cosmos', {})
	r(['cosmos', 'cosmos-sdk'], {})
	r(['cosmos', 'cosmos-sdk', 'bank'], store)
}
