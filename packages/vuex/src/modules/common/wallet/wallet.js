import CryptoJS from 'crypto-js'

export default {
  namespaced: true,
  state() {
    return {
      wallets: JSON.parse(window.localStorage.getItem('wallets')) || [],
      activeWallet: null,
      activeClient: null,
      selectedAddress: '',
      authorized: false,
      gasPrice: '0.0000025token'
    }
  },
  getters: {
    client: (state) => state.activeClient,
    gasPrice: (state) => state.gasPrice,
    wallet: (state) => state.activeWallet,
    address: (state) => state.selectedAddress,
    getPath: (state) =>
      state.activeWallet?.HDpath +
      state.activeWallet?.accounts.find(
        (x) => x.address == state.selectedAddress
      ).pathIncrement,
    nameAvailable: (state) => (name) => {
      return state.wallets.findIndex((x) => x.name == name) == -1
    },
    lastWallet: (state) => {
      if (state.activeWallet) {
        return state.activeWallet.name
      } else {
        return window.localStorage.getItem('lastWallet')
      }
    },
    loggedIn: (state) => state.activeClient !== null,
    signer: (state) => {
      if (state.activeClient) {
        return state.activeClient.signer
      } else {
        return null
      }
    }
  },
  mutations: {
    SET_ACTIVE_WALLET(state, wallet) {
      state.activeWallet = wallet
      window.localStorage.setItem('lastWallet', wallet.name)
    },
    SET_ACTIVE_CLIENT(state, client) {
      state.activeClient = client
      state.authorized = true
    },
    ADD_WALLET(state, wallet) {
      state.activeWallet = wallet
      window.localStorage.setItem('lastWallet', wallet.name)
      if (state.activeWallet.name && state.activeWallet.password) {
        state.wallets.push({
          name: state.activeWallet.name,
          wallet: CryptoJS.AES.encrypt(
            JSON.stringify(state.activeWallet),
            state.activeWallet.password
          ).toString()
        })
      }
      if (
        state.activeWallet.name == 'Keplr Integration' &&
        !state.activeWallet.password
      ) {
        state.wallets.push({
          name: state.activeWallet.name,
          wallet: JSON.stringify(state.activeWallet)
        })
      }
    },
    PATH_INCREMENT(state) {
      state.activeWallet.pathIncrement = state.activeWallet.pathIncrement + 1
    },
    ADD_ACCOUNT(state, account) {
      state.activeWallet.accounts.push(account)
      if (state.activeWallet.name && state.activeWallet.password) {
        state.wallets[
          state.wallets.findIndex((x) => x.name === state.activeWallet.name)
        ].wallet = CryptoJS.AES.encrypt(
          JSON.stringify(state.activeWallet),
          state.activeWallet.password
        ).toString()
      }
    },
    SET_SELECTED_ADDRESS(state, address) {
      state.selectedAddress = address
    },
    SET_BACKUP_STATE(state, backupState) {
      state.backupState = backupState
    },
    ADD_MESSAGE_TYPE(state, { typeUrl, type }) {
      state.activeClient.registry.register(typeUrl, type)
    },
    SIGN_OUT(state) {
      state.selectedAddress = ''
      state.activeClient = null
      state.activeWallet = null
      state.authorized = false
    }
  },
  actions: {
    signOut({ commit }) {
      commit('SIGN_OUT')
    },
    async connectWithKeplr({ commit, dispatch, rootGetters }, accountSigner) {
      await dispatch('common/env/signIn', accountSigner, {
        root: true
      })

      const wallet = {
        name: 'Keplr Integration',
        mnemonic: null,
        HDpath: null,
        password: null,
        prefix: rootGetters['common/env/addrPrefix'],
        pathIncrement: null,
        accounts: []
      }
      const [account] = await accountSigner.getAccounts()
      wallet.accounts.push({ address: account.address, pathIncrement: null })
      commit('ADD_WALLET', wallet)

      try {
        await dispatch('common/env/signIn', accountSigner, { root: true })

        let client = rootGetters['common/env/signingClient']
        commit('SET_ACTIVE_CLIENT', client)
        commit('SET_SELECTED_ADDRESS', account.address)
      } catch (e) {
        console.log(e)
      }
      dispatch('storeWallets')
    },
    storeWallets({ commit, state }) {
      window.localStorage.setItem('wallets', JSON.stringify(state.wallets))
      commit('SET_BACKUP_STATE', false)
    }
  }
}
