import axios from 'axios'

export default {
  namespaced: true,
  state: {
    balance: {},
    allBalances: {},
    totalSupply: {},
    supplyOf: {},
    params: {}
  },
  mutations: {
    setBalance(state, data) {
      state['balance'] = { ...state['balance'], ...data }
    },
    setAllBalances(state, data) {
      state['allBalances'] = { ...state['allBalances'], ...data }
    },
    setTotalSupply(state, data) {
      state['totalSupply'] = { ...data }
    },
    setSupplyOf(state, data) {
      state['supplyOf'] = data
    },
    setParams(state, data) {
      state['params'] = data
    }
  },
  getters: {
    allBalances: ({ allBalances }) => ({ address }) => {
      return allBalances[address]
    }
  },
  actions: {
    async queryBalance({ commit, rootState }, { address, denom }) {
      const api = rootState.common.env.api.cosmos
      const param_address = address
      const param_denom = denom
      const url = `${api}/cosmos/bank/v1beta1/balances/${param_address}/${param_denom}`
      try {
        const key = `${param_address}-${param_denom}`
        const value = (await axios.get(url)).data
        const data = { [key]: value }
        commit('setBalance', data)
        return value
      } catch (e) {
        console.error(e)
      }
    },
    async queryAllBalances({ commit, rootState }, { address }) {
      const api = rootState.common.env.api.cosmos
      const param_address = address
      const url = `${api}/cosmos/bank/v1beta1/balances/${param_address}`
      const key = `${param_address}`
      const value = (await axios.get(url)).data
      const data = { [key]: value }
      commit('setAllBalances', data)
      return value
    },
    async queryTotalSupply({ commit, rootState }) {
      const api = rootState.common.env.api.cosmos
      const url = `${api}/cosmos/bank/v1beta1/supply`
      const value = (await axios.get(url)).data
      const data = value
      commit('setTotalSupply', data)
      return value
    },
    async querySupplyOf({ commit, rootState }, { denom }) {
      const api = rootState.common.env.api.cosmos
      const param_denom = denom
      const url = `${api}/cosmos/bank/v1beta1/supply/${param_denom}`
      const value = (await axios.get(url)).data
      const data = value
      commit('setSupplyOf', data)
      return value
    },
    async queryParams({ commit, rootState }) {
      const api = rootState.common.env.api.cosmos
      const url = `${api}/cosmos/bank/v1beta1/params`
      const data = (await axios.get(url)).data
      commit('setParams', data)
    }
  }
}
