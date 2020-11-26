import axios from 'axios'
import { coins, makeStdTx, makeSignDoc } from '@cosmjs/launchpad'

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
			const { API } = rootGetters['cosmos/appEnv']
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
			const signer = client.signer
			const acc_url = `${API}/auth/accounts/${from_address}`
			const acc = (await axios.get(acc_url)).data.result.value
			const chain_id = await client.getChainId()
			const acc_seq = acc.sequence || '0'
			const acc_num = acc.account_number || '0'
			const signDoc = makeSignDoc([msg], fee, chain_id, memo, acc_num, acc_seq)
			const { signed, signature } = await signer.sign(from_address, signDoc)
			const signedTx = makeStdTx(signed, signature)
			const broadcastBody = {
				tx: signedTx,
				mode: 'sync'
			}
			axios.post(`${API}/txs`, broadcastBody)
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
