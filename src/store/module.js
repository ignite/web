import axios from 'axios'
import { makeStdTx, makeSignDoc } from '@cosmjs/launchpad'

export default {
	state: {
		data: []
	},
	mutations: {
		entitySet(state, { type, body, module }) {
			const updated = {}
			updated[`${module}/${type}`] = body
			state.data = { ...state.data, ...updated }
		}
	},
	actions: {
		async entityFetch({ commit, dispatch, rootGetters }, { type, module }) {
			const { API } = rootGetters['cosmos/appEnv']
			const CHAIN_ID = rootGetters['cosmos/chainId']

			if (!CHAIN_ID) {
				await dispatch('cosmos/setStatusState', {}, { root: true })
			}
			const module_name = module || CHAIN_ID
			const url = `${API}/${module_name}/${type}s`
			const body = (await axios.get(url)).data.result
			commit('entitySet', { type, body, module })
		},
		async entitySubmit({ rootGetters }, { type, body, module }) {
			const { API } = rootGetters['cosmos/appEnv']
			const CHAIN_ID = rootGetters['cosmos/chainId']
			const client = rootGetters['cosmos/client']

			const creator = client.senderAddress
			const base_req = { chain_id: CHAIN_ID, from: creator }
			const req = { base_req, creator, ...body }
			const module_name = module || CHAIN_ID
			const { data } = await axios.post(`${API}/${module_name}/${type}s`, req)
			const { msg, fee, memo } = data.value

			const signer = client.signer
			const from_address = creator
			const acc_url = `${API}/auth/accounts/${from_address}`
			const acc = (await axios.get(acc_url)).data.result.value
			const chain_id = await client.getChainId()
			const acc_seq = acc.sequence || '0'
			const acc_num = acc.account_number || '0'
			const signDoc = makeSignDoc(msg, fee, chain_id, memo, acc_num, acc_seq)
			const { signed, signature } = await signer.sign(from_address, signDoc)
			const signedTx = makeStdTx(signed, signature)
			const broadcastBody = {
				tx: signedTx,
				mode: 'sync'
			}
			axios.post(`${API}/txs`, broadcastBody)

			// return await client.signAndBroadcast(msg, fee, memo)
		}
	}
}
