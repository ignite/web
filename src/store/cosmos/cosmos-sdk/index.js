export default {
	cosmos: {
		namespaced: true,
		modules: {
			'cosmos-sdk': {
				namespaced: true,
				state: {
					y: 2
				},
				actions: {
					init({ dispatch }) {
						dispatch('tendermint/tendermint/init', null, { root: true })
						console.log('hello from cosmos')
					}
				}
			}
		}
	}
}
