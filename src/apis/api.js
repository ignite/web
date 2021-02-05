import axios from 'axios'

export default class Api {
	apiConnected = false
	rpcConnected = false
	constructor(apiCosmos, apiTendermint) {
		this.apiCosmos = apiCosmos
		this.apiTendermint = apiTendermint
		this.apiConnected = false
		this.rpcConnected = false
		const poll = this.connectivityTest.bind(this)
		this._timer = setInterval(poll, 5000)
		this.connectivityTest()
	}
	async connectivityTest() {
		try {
			await axios.get(this.apiCosmos)
			this.apiConnected = true
		} catch (error) {
			if (!error.response) {
				this.apiConnected = false
			} else {
				this.apiConnected = true
			}
		}
		try {
			await axios.get(this.apiTendermint)
			this.rpcConnected = true
		} catch (error) {
			if (!error.response) {
				this.apiConnected = false
			} else {
				this.apiConnected = true
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
