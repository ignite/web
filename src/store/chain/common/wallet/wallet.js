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
			wallets: JSON.parse(window.localStorage.getItem('wallets')) || [],
			activeWallet: null,
			activeClient: null,
			selectedAddress: '',
			authorized: false
		}
	},
	getters: {
		client: state => state.activeClient,
		address: state => state.selectedAddress,
		loggedIn: state => state.activeClient !== null,
		walletName: state => state.activeWallet.name
	},
	mutations: {
		SET_ACTIVE_WALLET(state, wallet) {
			state.activeWallet = wallet
		},
		SET_ACTIVE_CLIENT(state, client) {
			state.activeClient = client
			state.authorized = true
		},
		ADD_WALLET(state, wallet) {
			state.activeWallet = wallet
			if (state.activeWallet.name && state.activeWallet.password) {
				state.wallets.push({
					name: state.activeWallet.name,
					wallet: CryptoJS.AES.encrypt(
						JSON.stringify(state.activeWallet),
						state.activeWallet.password
					).toString()
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
					state.wallets.findIndex(x => x.name === state.activeWallet.name)
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
		async unlockWallet({ commit, state, rootGetters }, { name, password }) {
			const encryptedWallet =
				state.wallets[state.wallets.findIndex(x => x.name === name)].wallet
			const wallet = JSON.parse(
				CryptoJS.AES.decrypt(encryptedWallet, password).toString(
					CryptoJS.enc.Utf8
				)
			)
			commit('SET_ACTIVE_WALLET', wallet)
			if (wallet.accounts.length > 0) {
				const accountSigner = await DirectSecp256k1HdWallet.fromMnemonic(
					wallet.mnemonic,
					stringToPath(wallet.HDpath + wallet.accounts[0].pathIncrement),
					wallet.prefix
				)
				const client = SigningStargateClient.connectWithSigner(
					rootGetters['chain/common/env/apiTendermint'],
					accountSigner
				)
				commit('SET_ACTIVE_CLIENT', client)
				const [account] = await accountSigner.getAccounts()
				commit('SET_SELECTED_ADDRESS', account.address)
			}
		},
		registerType({ commit, state }, payload) {
			if (state.activeClient) {
				if (
					state.activeClient.registry.lookupType(payload.typeUrl) === undefined
				) {
					commit('ADD_MESSAGE_TYPE', payload)
				} else {
					throw 'Message Type already registered!'
				}
			} else {
				throw 'Signing client not initialized!'
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
				rootGetters['chain/common/env/apiTendermint'],
				accountSigner
			)
			commit('SET_ACTIVE_CLIENT', client)
			const [account] = await accountSigner.getAccounts()
			commit('SET_SELECTED_ADDRESS', account.address)
		},
		async addAccount({ commit, state, dispatch }, pathIncrement) {
			if (!pathIncrement) {
				pathIncrement = state.activeWallet.pathIncrement + 1
				commit('PATH_INCREMENT')
			}
			const accountSigner = await DirectSecp256k1HdWallet.fromMnemonic(
				state.activeWallet.mnemonic,
				stringToPath(state.activeWallet.HDpath + pathIncrement),
				state.activeWallet.prefix
			)
			const [acc] = await accountSigner.getAccounts()
			const account = {
				address: acc.address,
				pathIncrement: parseInt(pathIncrement)
			}
			if (
				state.activeWallet.accounts.findIndex(
					acc => acc.address == account.address
				) == -1
			) {
				commit('ADD_ACCOUNT', account)
				dispatch('storeWallets')
			} else {
				throw 'Account already in store.'
			}
		},
		storeWallets({ commit, state }) {
			window.localStorage.setItem('wallets', JSON.stringify(state.wallets))
			commit('SET_BACKUP_STATE', false)
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
					rootGetters['chain/common/env/apiTendermint'],
					accountSigner
				)
				commit('SET_ACTIVE_CLIENT', client)
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
			commit('ADD_WALLET', wallet)
			const client = await SigningStargateClient.connectWithSigner(
				rootGetters['chain/common/env/apiTendermint'],
				accountSigner
			)

			commit('SET_ACTIVE_CLIENT', client)
			commit('SET_SELECTED_ADDRESS', firstAccount.address)
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
