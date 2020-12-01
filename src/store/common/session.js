import { makeCosmoshubPath } from '@cosmjs/launchpad'
import { SigningStargateClient } from '@cosmjs/stargate'
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'

export default {
  namespaced: true,
  state: {
    wallet: null,
    client: null
  },
  mutations: {
    setWallet(state, { wallet }) {
      state.wallet = wallet
    },
    setClient(state, { client }) {
      state.client = client
    }
  },
  getters: {
    address({ wallet }) {
      return wallet && wallet.address
    }
  },
  actions: {
    async init({ dispatch }) {
      dispatch('login')
    },
    async importMnemonic({ dispatch }, { mnemonic }) {
      localStorage.setItem('mnemonic', mnemonic)
      dispatch('login')
    },
    async login({ rootState, commit, dispatch }) {
      const prefix = rootState.common.env.address_prefix
      const mnemonic = localStorage.getItem('mnemonic')
      if (mnemonic) {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
          mnemonic,
          makeCosmoshubPath(0),
          prefix
        )
        commit('setWallet', { wallet })
        dispatch('createClient', { wallet })
      }
    },
    async createClient({ rootState, commit }, { wallet }) {
      const api = rootState.common.env.api.tendermint
      const stargate = SigningStargateClient
      const client = await stargate.connectWithWallet(api, wallet, {})
      commit('setClient', { client })
    },
    async logout() {
      localStorage.removeItem('mnemonic')
      window.location.reload()
    }
  }
}
