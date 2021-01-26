import Vue from 'vue'
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import {
	assertIsBroadcastTxSuccess,
	SigningStargateClient
} from '@cosmjs/stargate'
import { stringToPath } from '@cosmjs/crypto'
import CryptoJS from 'crypto-js'

export default {
	namespaced: true,
	state() {
		return {
			wallets: JSON.parse(window.localStorage.getItem('wallets')),
			activeWallet: null,
			activeClient: null,
			selectedAddress: '',
			authorized: false
		}
	},
	getters: {
		client: state => state.activeClient,
		address: state => state.selectedAddress
	},
	mutations: {
		setActiveWallet(state, wallet) {
			state.activeWallet = wallet
		},
		setActiveClient(state, client) {
			state.activeClient = client
			state.authorized = true
		},
		addWallet(state, wallet) {
			state.activeWallet = wallet
			if (state.activeWallet.name && state.activeWallet.password) {
				if (!state.wallets) {
					Vue.set(state, 'wallets', {})
				}
				state.wallets[state.activeWallet.name] = CryptoJS.AES.encrypt(
					JSON.stringify(state.activeWallet),
					state.activeWallet.password
				)
			}
		},
		addAccount(state, account) {
			state.activeWallet.accounts.push(account)
			if (state.activeWallet.name && state.activeWallet.password) {
				state.wallets[state.activeWallet.name] = CryptoJS.AES.encrypt(
					JSON.stringify(state.activeWallet),
					state.activeWallet.password
				)
			}
		},
		setSelectedAddress(state, address) {
			state.selectedAddress = address
		},
		setBackupState(state, backupState) {
			state.backupState = backupState
		},
		signOut(state) {
			state.selectedAddress = ''
			state.activeClient = null
			state.activeWallet = null
			state.authorized = false
		}
	},
	actions: {
		signOut({ commit }) {
			commit('signOut')
		},
		async unlockWallet({ commit, state, rootGetters }, { name, password }) {
			const encryptedWallet = state.wallets[name]
			const wallet = JSON.parse(
				CryptoJS.AES.decrypt(encryptedWallet, password).toString(
					CryptoJS.enc.Utf8
				)
			)
			commit('setActiveWallet', wallet)
			if (wallet.accounts.length > 0) {
				const accountSigner = await DirectSecp256k1HdWallet.fromMnemonic(
					wallet.mnemonic,
					stringToPath(wallet.HDpath + wallet.accounts[0].pathIncrement),
					wallet.prefix
				)
				const client = SigningStargateClient.connectWithSigner(
					rootGetters['modules/env/apiTendermint'],
					accountSigner
				)
				commit('setActiveClient', client)
				const [account] = await wallet.getAccounts()
				commit('setSelectedAddress', account.address)
			}
		},
		async switchAccount({ commit, state, rootGetters }, address) {
			const accountIndex = state.activeWallet.accounts.findIndex(
				acc => acc.address == address
			)
			const accountSigner = await DirectSecp256k1HdWallet.fromMnemonic(
				state.activeWallet.mnemonic,
				stringToPath(
					state.activeWallet.HDpath +
						state.activeWallet.accounts[accountIndex].pathIncrement
				),
				state.activeWallet.prefix
			)
			const client = await SigningStargateClient.connectWithSigner(
				rootGetters['modules/env/apiTendermint'],
				accountSigner
			)
			commit('setActiveClient', client)
			const [account] = await accountSigner.getAccounts()
			commit('setSelectedAddress', account.address)
		},
		async addAccount({ commit, state, dispatch }, pathIncrement) {
			if (!pathIncrement) {
				pathIncrement = state.activeWallet.pathIncrement + 1
			}
			const accountSigner = await DirectSecp256k1HdWallet.fromMnemonic(
				state.activeWallet.mnemonic,
				stringToPath(state.activeWallet.HDpath + pathIncrement),
				state.activeWallet.prefix
			)
			const [acc] = await accountSigner.getAccounts()
			const account = { address: acc.address, pathIncrement: pathIncrement }
			if (
				state.activeWallet.accounts.findIndex(
					acc => acc.address == account.address
				) == -1
			) {
				commit('addAccount', account)
				dispatch('storeWallets')
			} else {
				throw 'Account already in store.'
			}
		},
		storeWallets({ commit, state }) {
			window.localStorage.setItem('wallets', state.wallets)
			commit('setBackupState', false)
		},
		async switchAPI({ commit, state, rootGetters }) {
			if (state.activeWallet && state.activeClient) {
				const accountIndex = state.activeWallet.accounts.findIndex(
					acc => acc.address == state.selectedAddress
				)
				const accountSigner = await DirectSecp256k1HdWallet.fromMnemonic(
					state.wallet.mnemonic,
					stringToPath(
						state.activeWallet.HDpath +
							state.activeWallet.accounts[accountIndex].pathIncrement
					),
					state.activeWallet.prefix
				)
				const client = await SigningStargateClient.connectWithSigner(
					rootGetters['modules/env/apiTendermint'],
					accountSigner
				)
				commit('setActiveClient', client)
			}
		},
		async createWalletWithMnemonic(
			{ commit, dispatch, rootGetters },
			{
				name = null,
				mnemonic,
				HDpath = "m/44'/118'/0'/0/",
				prefix = 'cosmos',
				password = null
			}
		) {
			const wallet = {
				name,
				mnemonic,
				HDpath,
				password,
				prefix,
				pathIncrement: 0,
				accounts: []
			}
			const accountSigner = await DirectSecp256k1HdWallet.fromMnemonic(
				mnemonic,
				stringToPath(HDpath + '0'),
				prefix
			)
			const [firstAccount] = await accountSigner.getAccounts()
			const account = { address: firstAccount.address, pathIncrement: 0 }
			wallet.accounts.push(account)
			commit('addWallet', wallet)
			const client = await SigningStargateClient.connectWithSigner(
				rootGetters['modules/env/apiTendermint'],
				accountSigner
			)

			commit('setActiveClient', client)
			commit('setSelectedAddress', firstAccount.address)
			dispatch('storeWallets')
		},
		async sendTransaction({ state }, { message, memo, denom }) {
			const fee = {
				amount: [{ amount: '0', denom }],
				gas: '200000'
			}
			try {
				console.log({
					add: state.selectedAddress,
					msg: [message],
					fee,
					memo
				})
				const result = await state.activeClient.signAndBroadcast(
					state.selectedAddress,
					[message],
					fee,
					memo
				)
				assertIsBroadcastTxSuccess(result)
			} catch (e) {
				throw 'Failed to broadcast transaction.'
			}
		}
	}
}
