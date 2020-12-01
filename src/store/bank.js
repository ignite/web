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
			const client = rootGetters['chain/client']
			const from_address = client.signer.address
			const fee = {
				amount: coins(0, 'ucosm'),
				gas: '200000'
			}
			const message = {
				typeUrl: '/cosmos.bank.v1beta1.MsgSend',
				value: {
					amount: coins(10, 'ucosm'),
					fromAddress: from_address,
					toAddress: to_address
				}
			}

			// const message = {
			// 	typeUrl: '/foo.foo.MsgCreatePost',
			// 	value: {
			// 		creator: from_address,
			// 		title: '213',
			// 		body: '123123'
			// 	}
			// }
			// const { accountNumber, sequence } = await client.getSequence(
			// 	'cosmos1kmdu6vwc6vgsj3arhewvj5mnxcmpafymc7rs6h'
			// )
			// console.log([message], fee, 'foo', memo, accountNumber, sequence)
			// const signDoc = makeSignDoc(
			// 	[message],
			// 	fee,
			// 	'foo',
			// 	memo,
			// 	accountNumber,
			// 	sequence
			// )
			console.log(
				await client.signAndBroadcast(
					'cosmos1kmdu6vwc6vgsj3arhewvj5mnxcmpafymc7rs6h',
					[message],
					fee
				)
			)
			// console.log(signDoc)
			// const { signed, signature } = await client.sign(from_address, signDoc)
			//       const signedTx = makeStdTx(signed, signature)
			//       console.log(signedTx)
			// const broadcastBody = {
			// 	tx: signedTx,
			// 	mode: 'sync'
			// }
			// axios.post(`${API}/txs`, broadcastBody)
			// const signDoc = makeSignDoc([message], fee, chain_id, memo, acc_num, acc_seq)
			// console.log(
			// 	await client.signAndBroadcast(
			// 		'cosmos1rdpjy7aa6wcsdy0qzc0hgh4hd3waftht6aj67f',
			// 		[message],
			// 		fee
			// 	)
			// )
			// const msg = {
			//   typeUrl: "/cosmos.staking.v1beta1.MsgSend",
			//   value: {

			//   }
			// }

			// console.log(
			// 	await client.sendTokens(
			// 		'cosmos108xe4rs0xrr0h2k39fch5eay9em4katcrysukc',
			// 		'cosmos1qw34sfkzzlutm5ewpk3w92a4h63el7myczyqnh',
			// 		coins(2, 'token')
			// 	)
			// )
			// const signer = client.signer
			// const acc_url = `${API}/auth/accounts/${from_address}`
			// const acc = (await axios.get(acc_url)).data.result.value
			// const chain_id = await client.getChainId()
			// const acc_seq = acc.sequence || '0'
			// const acc_num = acc.account_number || '0'
			// const signDoc = makeSignDoc([msg], fee, chain_id, memo, acc_num, acc_seq)
			// const { signed, signature } = await signer.sign(from_address, signDoc)
			// const signedTx = makeStdTx(signed, signature)
			// const broadcastBody = {
			// 	tx: signedTx,
			// 	mode: 'sync'
			// }
			// axios.post(`${API}/txs`, broadcastBody)
		},
		async bankBalancesGet({ commit, rootGetters }) {
			const { API } = rootGetters['chain/appEnv']
			const { address } = rootGetters['chain/account']
			const url = `${API}/bank/balances/${address}`
			const value = (await axios.get(url)).data.result
			commit('set', { key: 'bankBalances', value })
		}
	}
}
