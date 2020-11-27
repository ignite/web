export default {
	tendermint: {
		namespaced: true,
		modules: {
			tendermint: {
				namespaced: true,
				state: {
					x: 1
				},
				actions: {
					init() {
						console.log('hello from tendermint')
					}
				}
			}
		}
	}
}
