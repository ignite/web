// import axios from 'axios'
import {
	Secp256k1HdWallet,
	// SigningCosmosClient,
	makeCosmoshubPath
} from '@cosmjs/launchpad'

// const API = process.env.VUE_APP_API_COSMOS || 'http://localhost:1317'
const ADDRESS_PREFIX = process.env.VUE_APP_ADDRESS_PREFIX || 'cosmos'

export default {
	namespaced: true,
	state: {
		Wallet: []
	},
	mutations: {
		setWallet(state, { data }) {
			state['Wallet'] = data
		}
	},
	actions: {
		async signIn({ dispatch }, { mnemonic }) {
			const wallet = await Secp256k1HdWallet.fromMnemonic(
				mnemonic,
				makeCosmoshubPath(0),
				ADDRESS_PREFIX
			)
			localStorage.setItem('mnemonic', mnemonic)
			const [{ address }] = await wallet.getAccounts()
			const action = 'cosmos/cosmos-sdk/auth/Account'
			await dispatch(action, { address }, { root: true })
			// const acc = (await axios.get(url)).data
			// const account = acc.result.value
			// commit('set', { key: 'account', value: account })
			// const client = new SigningCosmosClient(API, address, wallet)
			// commit('set', { key: 'client', value: client })
			// try {
			// 	await dispatch('bankBalancesGet')
			// } catch {
			// 	console.log('Error in getting a bank balance.')
			// }
		},
		async signOut() {
			localStorage.removeItem('mnemonic')
			window.location.reload()
		}
	}
}
