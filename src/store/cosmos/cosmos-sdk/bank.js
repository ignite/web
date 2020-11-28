import axios from 'axios'

export default {
	namespaced: true,
	state: {
		balance: [],
		allBalances: [],
		totalSupply: [],
		supplyOf: [],
		params: []
	},
	mutations: {
		setBalance(state, { data }) {
			state['balance'] = data
		},
		setAllBalances(state, { data }) {
			state['alBalances'] = data
		},
		setTotalSupply(state, { data }) {
			state['totalSupply'] = data
		},
		setSupplyOf(state, { data }) {
			state['supplyOf'] = data
		},
		setParams(state, { data }) {
			state['params'] = data
		}
	},
	actions: {
		async Balance({ commit, rootState }, { address }) {
			const api = rootState.common.env.api.cosmos
			const param_address = address
			const param_denom = denom
			const url = `${api}"/cosmos/bank/v1beta1/balances/${param_address}/${param_denom}"`
			const data = (await axios.get(url)).data
			commit('setBalance', data)
		},
		async AllBalances({ commit, rootState }, { address }) {
			const api = rootState.common.env.api.cosmos
			const param_address = address
			const url = `${api}/cosmos/bank/v1beta1/balances/${param_address}`
			const data = (await axios.get(url)).data
			commit('setAllBalances', data)
		},
		async TotalSupply({ commit, rootState }) {
			const api = rootState.common.env.api.cosmos
			const url = `${api}/cosmos/bank/v1beta1/supply`
			const data = (await axios.get(url)).data
			commit('setTotalSupply', data)
		},
		async SupplyOf({ commit, rootState }, { denom }) {
			const api = rootState.common.env.api.cosmos
			const param_denom = denom
			const url = `${API}/cosmos/bank/v1beta1/supply/${param_denom}`
			const data = (await axios.get(url)).data
			commit('setSupplyOf', data)
		},
		async Params({ commit, rootState }) {
			const api = rootState.common.env.api.cosmos
			const url = `${api}/cosmos/bank/v1beta1/params`
			const data = (await axios.get(url)).data
			commit('setParams', data)
		}
	}
}
