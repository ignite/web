import axios from 'axios'
import EventEmitter from 'events'
import { sha256 } from 'js-sha256'
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
	formatTx({
		txHash = '',
		messages = [],
		memo = '',
		signer_infos = [],
		fee = {},
		gas_used = null,
		gas_wanted = null,
		height = null,
		code = 0,
		log = null
	}) {
		return {
			txHash,
			body: {
				messages,
				memo
			},
			auth_info: {
				signer_infos,
				fee
			},
			meta: {
				gas_used,
				gas_wanted,
				height,
				code,
				log
			}
		}
	}
	async getTx(encodedTx) {
		const txHash = sha256(Buffer.from(encodedTx, 'base64'))
		try {
			const rpcRes = await axios.get(
				this.apiTendermint + '/tx?hash=0x' + txHash
			)
			const apiRes = await axios.get(
				this.apiCosmos + '/cosmos/tx/v1beta1/tx/' + txHash
			)
			return { rpcRes, apiRes, txHash: txHash.toUpperCase() }
		} catch (e) {
			throw 'Error fetching TX data'
		}
	}
	async decodeTx(encodedTx) {
		const fullTx = await this.getTx(encodedTx)
		const { data } = fullTx.rpcRes
		const { height, tx_result } = data.result
		const { code, log, gas_used, gas_wanted } = tx_result
		const { body, auth_info } = fullTx.apiRes.data.tx
		const { messages, memo } = body

		return this.formatTx({
			txHash: fullTx.txHash,
			messages,
			memo,
			signer_infos: auth_info.signer_infos,
			fee: auth_info.fee,
			gas_used,
			gas_wanted,
			height,
			code,
			log
		})
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
