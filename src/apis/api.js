import axios from 'axios'
import EventEmitter from 'events'

export default class Api extends EventEmitter {
	constructor(apiCosmos, apiTendermint) {
		super()
		this.apiCosmos = apiCosmos
		this.apiTendermint = apiTendermint

		const poll = this.connectivityTest.bind(this)
		this._timer = setInterval(poll, 5000)
		this.connectivityTest()
	}
	async connectivityTest() {
		try {
			await axios.get(this.apiCosmos)
			this.emit('api-status', true)
		} catch (error) {
			if (!error.response) {
				this.emit('api-status', false)
			} else {
				this.emit('api-status', true)
			}
		}
		try {
			await axios.get(this.apiTendermint)
			this.emit('rpc-status', true)
		} catch (error) {
			if (!error.response) {
				this.emit('rpc-status', false)
			} else {
				this.emit('api-status', true)
			}
		}
	}
	async query(url, params = '') {
		try {
			const response = await axios.get(this.apiCosmos + url + params)
			return response.data
		} catch (e) {
			throw 'Could not access API: ' + this.apiCosmos + url + params
		}
	}
}
