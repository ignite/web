import axios from 'axios'
import { Secp256k1HdWallet, makeCosmoshubPath } from '@cosmjs/launchpad'
import { SigningStargateClient } from '@cosmjs/stargate'
import {
	Registry,
	Coin,
	DirectSecp256k1HdWallet,
	MsgSend
} from '@cosmjs/proto-signing'

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
			const { API, ADDR_PREFIX } = rootGetters['chain/appEnv']
			const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic)
			localStorage.setItem('mnemonic', mnemonic)
			const address = wallet.address
			const url = `${API}/auth/accounts/${address}`
			const acc = (await axios.get(url)).data
			const account = acc.result.value
			commit('set', { key: 'account', value: account })
			const registry = new Registry()
			registry.register('/cosmos.base.v1beta.Coin', Coin)
			registry.register('/cosmos.base.v1beta.Coin', MsgSend)
			const options = { registry }
			const client = await SigningStargateClient.connectWithWallet(
				'http://localhost:26657',
				wallet,
				options
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
