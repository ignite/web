import ReconnectingWebSocket from 'reconnecting-websocket'
import EventEmitter from 'events'

export default class ApiWS extends EventEmitter {
	constructor(url) {
		super()
		this._connectedPromise = new Promise((res, rej) => {
			this._connectRes = res
			this._connectRej = rej
		})
		this._socket = new ReconnectingWebSocket(url)
		this._socket.onopen = this.onOpen.bind(this)
		this._socket.onmessage = this.onMessage.bind(this)
		this._socket.onerror = this.onError.bind(this)
		this.subscriptions = new Map()
	}
	connect() {
		return this._connectedPromise
	}
	onError() {
		this._connectRej()
	}
	onOpen() {
		this._connectRes()

		this._socket.send(
			JSON.stringify({
				jsonrpc: '2.0',
				method: 'subscribe',
				id: '1',
				params: ["tm.event = 'NewBlock'"]
			})
		)
	}
	async onMessage(msg) {
		this.emit('newblock', JSON.parse(msg.data).result)
	}
}
