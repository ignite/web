import axios from 'axios'

const API = process.env.VUE_APP_API_COSMOS || 'http://localhost:1317'

export default {
	namespaced: true,
	state: {
		Balance: [],
		AllBalances: [],
		TotalSupply: [],
		SupplyOf: [],
		Params: []
	},
	mutations: {
		setBalance(state, { data }) {
			state['setBalance'] = data
		},
		setAllBalances(state, { data }) {
			state['setAlBalances'] = data
		},
		setTotalSupply(state, { data }) {
			state['setTotalSupply'] = data
		},
		setSupplyOf(state, { data }) {
			state['setSupplyOf'] = data
		},
		setParams(state, { data }) {
			state['setParams'] = data
		}
	},
	actions: {
		async Balance({ commit }, { address }) {
			const param_address = address
			const param_denom = denom
			const url = `${API}"/cosmos/bank/v1beta1/balances/${param_address}/${param_denom}"`
			const data = (await axios.get(url)).data
			commit('setBalance', data)
		},
		async AllBalances({ commit }, { address }) {
			const param_address = address
			const url = `${API}/cosmos/bank/v1beta1/balances/${param_address}`
			const data = (await axios.get(url)).data
			commit('setAllBalances', data)
		},
		async TotalSupply({ commit }) {
			const url = `${API}/cosmos/bank/v1beta1/supply`
			const data = (await axios.get(url)).data
			commit('setTotalSupply', data)
		},
		async SupplyOf({ commit }, { denom }) {
			const param_denom = denom
			const url = `${API}/cosmos/bank/v1beta1/supply/${param_denom}`
			const data = (await axios.get(url)).data
			commit('setSupplyOf', data)
		},
		async Params({ commit }) {
			const url = `${API}/cosmos/bank/v1beta1/params`
			const data = (await axios.get(url)).data
			commit('setParams', data)
		}
	}
}
