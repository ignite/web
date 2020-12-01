import ReconnectingWebSocket from 'reconnecting-websocket'

export default {
	namespaced: true,
	actions: {
		init({ rootState }) {
			const url = rootState.common.env.api.ws
			const ws = new ReconnectingWebSocket(url)
			const subscribe = {
				jsonrpc: '2.0',
				method: 'subscribe',
				id: '1',
				params: ["tm.event = 'NewBlock'"]
			}
			// ws.onopen = function() {
			// 	ws.send(JSON.stringify(subscribe))
			// }
			ws.onmessage = async msg => {
				console.log(JSON.parse(msg.data).result)
			}
		}
	}
}
