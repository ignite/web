import axios from 'axios'
import { coins } from '@cosmjs/launchpad'

export default {
	state: {
		bankBalances: []
	},
	getters: {},
	mutations: {
		set(state, { key, value }) {
			state[key] = value
		}
	},
	actions: {
		async tokenSend({ rootGetters }, { amount, denom, to_address, memo = '' }) {
			const client = rootGetters['cosmos/client']
			const from_address = client.senderAddress
			const msg = {
				type: 'cosmos-sdk/MsgSend',
				value: {
					amount: [
						{
							amount,
							denom
						}
					],
					from_address,
					to_address
				}
			}
			const fee = {
				amount: coins(0, denom),
				gas: '200000'
			}
			return await client.signAndBroadcast([msg], fee, memo)
		},
		async bankBalancesGet({ commit, rootGetters }) {
			const { API } = rootGetters['cosmos/appEnv']
			const { address } = rootGetters['cosmos/account']
			const url = `${API}/bank/balances/${address}`
			const value = (await axios.get(url)).data.result
			commit('set', { key: 'bankBalances', value })
		}
	}
}
