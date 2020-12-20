import axios from 'axios'

export default {
	state: {
		data: []
	},
	mutations: {
		entitySet(state, { type, body, path }) {
			const updated = {}
			updated[`${path}/${type}`] = body
			state.data = { ...state.data, ...updated }
		}
	},
	actions: {
		async entityFetch({ commit, rootState }, { type, path }) {
			const { API } = rootState.cosmos.env.env
			const url = `${API}/${path}/${type}`
			const body = (await axios.get(url)).data
			const uppercase = type.charAt(0).toUpperCase() + type.slice(1)
			if (body && body[uppercase]) {
				commit('entitySet', { type, body: body[uppercase], path })
			}
		},
		async entitySubmit({ rootGetters, rootState }, { type, body, module }) {
			const { API } = rootState.cosmos.env
			const CHAIN_ID = rootGetters['cosmos/chainId']
			const client = rootGetters['cosmos/client']
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
