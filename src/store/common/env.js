const env = process.env

export default {
	namespaced: true,
	state: {
		api: {
			cosmos: env.VUE_APP_API_COSMOS || 'http://localhost:1317',
			tendermint: env.VUE_APP_API_TENDERMINT || 'http://localhost:26657',
			ws: env.VUE_APP_API_WS || 'ws://localhost:26657/websocket'
		},
		address_prefix: env.VUE_APP_ADDRESS_PREFIX || 'cosmos'
	}
}
