import axios from 'axios'

const API = process.env.VUE_APP_API_COSMOS || 'http://localhost:1317'

export default {
	namespaced: true,
	state: {
		Account: [],
		Params: []
	},
	mutations: {
		setAccount(state, { data }) {
			state['Account'] = data
		},
		setParams(state, { data }) {
			state['Params'] = data
		}
	},
	actions: {
		async Account({ commit }, { address }) {
			const param_address = address
			const url = `${API}/cosmos/auth/v1beta1/accounts/${param_address}`
			const data = await axios.get(url).account
			commit('setAccount', data)
		},
		async Params({ commit }) {
			const url = `${API}/cosmos/auth/v1beta1/params`
			const data = (await axios.get(url)).data
			commit('setParams', data)
		}
	}
}
