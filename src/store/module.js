import axios from 'axios'

export default {
	namespaced: true,
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
			const { API } = rootGetters['cosmos/env/appEnv']
			const CHAIN_ID = rootGetters['cosmos/env/chainId']

			if (!CHAIN_ID) {
				await dispatch('cosmos/env/setStatusState', {}, { root: true })
			}
			const module_name = module || CHAIN_ID
			const url = `${API}/${module_name}/${type}`
			const body = (await axios.get(url)).data.result
			commit('entitySet', { type, body, module })
		},
		async entitySubmit({ rootGetters }, { type, body, module }) {
			const { API } = rootGetters['cosmos/env/appEnv']
			const CHAIN_ID = rootGetters['cosmos/env/chainId']
			const client = rootGetters['cosmos/bank/client']

			const creator = client.senderAddress
			const base_req = { chain_id: CHAIN_ID, from: creator }
			const req = { base_req, creator, ...body }
			const module_name = module || CHAIN_ID
			const { data } = await axios.post(`${API}/${module_name}/${type}`, req)
			const { msg, fee, memo } = data.value
			return await client.signAndBroadcast(msg, fee, memo)
		}
	}
}
