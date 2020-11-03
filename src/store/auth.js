import axios from 'axios'
import {
	Secp256k1HdWallet,
	SigningCosmosClient,
	makeCosmoshubPath
} from '@cosmjs/launchpad'

export default {
	state: {
		account: {},
		client: null
	},
	getters: {
		client: state => state.client,
		account: state => state.account
	},
	mutations: {
		set(state, { key, value }) {
			state[key] = value
		}
	},
	actions: {
		async accountSignInTry({ dispatch }) {
			const mnemonic = localStorage.getItem('mnemonic')
			if (mnemonic) {
				await dispatch('accountSignIn', { mnemonic })
			}
		},
		async accountSignIn({ commit, dispatch, rootGetters }, { mnemonic }) {
			const { API, ADDR_PREFIX } = rootGetters['cosmos/appEnv']

			const wallet = await Secp256k1HdWallet.fromMnemonic(
				mnemonic,
				makeCosmoshubPath(0),
				ADDR_PREFIX
			)
			localStorage.setItem('mnemonic', mnemonic)
			const [{ address }] = await wallet.getAccounts()
			const url = `${API}/auth/accounts/${address}`
			const acc = (await axios.get(url)).data
			const account = acc.result.value
			commit('set', { key: 'account', value: account })
			const client = new SigningCosmosClient(API, address, wallet)
			commit('set', { key: 'client', value: client })
			try {
				await dispatch('bankBalancesGet')
			} catch {
				console.log('Error in getting a bank balance.')
			}
		},
		async accountSignOut() {
			localStorage.removeItem('mnemonic')
			window.location.reload()
		}
	}
}
