import axios from 'axios'

export default class Api {
	constructor(apiCosmos) {
		this.apiCosmos = apiCosmos
	}
	changeUrl(apiCosmos) {
		this.apiCosmos = apiCosmos
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
