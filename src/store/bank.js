import axios from 'axios'

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
			const account = rootGetters['cosmos/account']
			const from_address = account.address
			const fee = {
				amount: [{ amount: '0', denom }],
				gas: '200000'
			}
			const msg = {
				typeUrl: '/cosmos.bank.v1beta1.MsgSend',
				value: {
					amount: [{ amount, denom }],
					fromAddress: from_address,
					toAddress: to_address
				}
			}
			try {
				return await client.signAndBroadcast(from_address, [msg], fee, memo)
			} catch (e) {
				console.log(e)
			}
		},
		async bankBalancesGet({ commit, rootState, rootGetters }) {
			const API = rootState.cosmos.env.env.API
			const { address } = rootGetters['cosmos/account']
			const url = `${API}/bank/balances/${address}`
			const value = (await axios.get(url)).data.result
			commit('set', { key: 'bankBalances', value })
		}
	}
}
