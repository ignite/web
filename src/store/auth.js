import axios from 'axios'
import { makeCosmoshubPath } from '@cosmjs/launchpad'
import { SigningStargateClient } from '@cosmjs/stargate'
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
export default {
	state: {
		account: {},
		client: null,
		wallet: null
	},
	getters: {
		client: state => state.client,
		account: state => state.account,
		wallet: state => state.wallet
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
		async accountSignIn(
			{ commit, dispatch, rootGetters, rootState },
			{ mnemonic }
		) {
			const { API, RPC, ADDR_PREFIX } = rootState.cosmos.env.env
			const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
				mnemonic,
				makeCosmoshubPath(0),
				ADDR_PREFIX
			)
			localStorage.setItem('mnemonic', mnemonic)
			const { address } = wallet
			const url = `${API}/auth/accounts/${address}`
			const acc = (await axios.get(url)).data
			const account = acc.result.value
			commit('set', { key: 'wallet', value: wallet })
			commit('set', { key: 'account', value: account })
			const client = await SigningStargateClient.connectWithWallet(
				RPC,
				wallet,
				{}
			)
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
