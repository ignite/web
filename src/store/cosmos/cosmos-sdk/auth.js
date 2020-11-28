import axios from 'axios'

export default {
	namespaced: true,
	state: {
		account: [],
		params: []
	},
	mutations: {
		setAccount(state, { data }) {
			state['account'] = data
		},
		setParams(state, { data }) {
			state['params'] = data
		}
	},
	actions: {
		async queryAccount({ commit, rootState }, { address }) {
			const api = rootState.common.env.api.cosmos
			const param_address = address
			const url = `${api}/cosmos/auth/v1beta1/accounts/${param_address}`
			const data = await axios.get(url).account
			commit('setAccount', data)
		},
		async queryParams({ commit, rootState }) {
			const api = rootState.common.env.api.cosmos
			const url = `${api}/cosmos/auth/v1beta1/params`
			const data = (await axios.get(url)).data
			commit('setParams', data)
		}
	}
}
