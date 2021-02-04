<template>
	<div class="SpWalletList">
		<div v-if="!newWallet.show && !unlockWallet.show && !keyWallet.show">
			<strong>AVAILABLE WALLETS:</strong>
			<ul v-if="walletList.length > 0">
				<li v-for="wallet in walletList" v-bind:key="wallet.name">
					<button @click="unlockWalletForm(wallet.name)" class="SpButton">
						<div class="SpButtonText">
							{{ wallet.name }}
						</div>
					</button>
				</li>
			</ul>
			<div class="SpWalletListEmpty" v-else>
				<em>No wallets available</em>
			</div>
			<hr />
			<div class="SpWalletNew">
				<button @click="newWalletForm()" class="SpButton SpWalletButton">
					<div class="SpButtonText">CREATE NEW WALLET</div>
				</button>
			</div>
			<div class="SpWalletKey">
				<button @click="keyWalletForm()" class="SpButton SpWalletButton">
					<div class="SpButtonText">SIGN IN WITH PRIVATE KEY</div>
				</button>
			</div>
		</div>
		<div
			class="SpWalletForm SpForm"
			v-if="newWallet.show && newWallet.step === 1"
		>
			<div class="SpWalletInputName">
				<input type="text" placeholder="Wallet name" v-model="newWallet.name" />
			</div>
			<div class="SpWalletInputMnemonic">
				<textarea
					v-model="newWallet.mnemonic"
					placeholder="Mnemonic..."
				></textarea>
			</div>
			<div class="SpWalletNext">
				<button @click="cancel()" class="SpButton">
					<div class="SpButtonText">CANCEL</div>
				</button>
				<button
					@click="newWalletStep2()"
					class="SpButton"
					:disabled="!validStep1"
				>
					<div class="SpButtonText">NEXT</div>
				</button>
			</div>
		</div>
		<div
			class="SpWalletForm SpForm"
			v-if="newWallet.show && newWallet.step === 2"
		>
			<div class="SpWalletInputPassword">
				<input
					type="password"
					placeholder="Wallet password"
					v-model="newWallet.password"
				/>
			</div>
			<div class="SpWalletInputConfirm">
				<input
					type="password"
					placeholder="Confirm password"
					v-model="newWallet.confirm"
				/>
			</div>
			<div class="SpWalletCreate">
				<button
					@click="createWallet()"
					class="SpButton"
					:disabled="!validStep2"
				>
					<div class="SpButtonText">CREATE WALLET</div>
				</button>
			</div>
		</div>
		<div class="SpWalletForm SpForm" v-if="unlockWallet.show">
			<div class="SpFormTitle">
				<strong>UNLOCKING: </strong> {{ unlockWallet.name }}
			</div>
			<div class="SpWalletInputPassword">
				<input
					type="password"
					placeholder="Enter password"
					v-model="unlockWallet.password"
				/>
			</div>
			<div class="SpWalletUnlock">
				<button @click="cancel()" class="SpButton">
					<div class="SpButtonText">CANCEL</div>
				</button>
				<button
					@click="unlockStoreWallet()"
					class="SpButton"
					:disabled="!validUnlock"
				>
					<div class="SpButtonText">UNLOCK WALLET</div>
				</button>
			</div>
		</div>
		<div class="SpWalletForm SpForm" v-if="keyWallet.show">
			<div class="SpFormTitle">
				<strong>SIGN IN WITH PRIVATE KEY</strong>
			</div>
			<div class="SpWalletInputPassword">
				<input
					type="name"
					placeholder="Enter private key (WIF)"
					v-model="keyWallet.privKey"
				/>
			</div>
			<div class="SpWalletUnlock">
				<button @click="cancel()" class="SpButton">
					<div class="SpButtonText">CANCEL</div>
				</button>
				<button @click="signInWithKey()" class="SpButton">
					<div class="SpButtonText">SIGN IN</div>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import { validateMnemonic } from 'bip39'
export default {
	name: 'SpWalletList',
	data() {
		return this.defaultState()
	},
	computed: {
		walletList() {
			return this.$store.state.chain.common.wallet.wallets
		},
		validStep1() {
			return (
				this.newWallet.name.trim() !== '' &&
				validateMnemonic(this.newWallet.mnemonic)
			)
		},
		validStep2() {
			return (
				this.newWallet.password.trim() !== '' &&
				this.newWallet.password == this.newWallet.confirm
			)
		},
		validUnlock() {
			return this.unlockWallet.password.trim() !== ''
		}
	},
	methods: {
		newWalletForm() {
			this.newWallet.show = true
			this.newWallet.step = 1
			this.newWallet.name = ''
			this.newWallet.mnemonic = ''
		},
		keyWalletForm() {
			this.keyWallet.show = true
			this.keyWallet.privKey = ''
		},
		unlockWalletForm(name) {
			this.unlockWallet.show = true
			this.unlockWallet.name = name
			this.unlockWallet.password = ''
		},
		newWalletStep2() {
			this.newWallet.step = 2
		},
		cancel() {
			this.newWallet.show = false
			this.newWallet.step = 1
			this.newWallet.name = ''
			this.newWallet.mnemonic = ''
			this.unlockWallet.show = false
			this.unlockWallet.name = name
			this.unlockWallet.password = ''
		},
		async signInWithKey() {
			await this.$store.dispatch('chain/common/wallet/signInWithPrivateKey', {
				privKey: this.keyWallet.privKey
			})
			this.reset()
			this.$emit('wallet-selected')
		},
		async unlockStoreWallet() {
			await this.$store.dispatch('chain/common/wallet/unlockWallet', {
				name: this.unlockWallet.name,
				password: this.unlockWallet.password
			})
			this.reset()
			this.$emit('wallet-selected')
		},
		reset() {
			Object.assign(this.$data, this.defaultState())
		},
		defaultState() {
			return {
				newWallet: {
					show: false,
					step: 1,
					name: '',
					mnemonic: '',
					password: '',
					confirm: ''
				},
				unlockWallet: {
					show: false,
					name: '',
					password: ''
				},
				keyWallet: {
					show: false,
					privKey: ''
				}
			}
		},
		async createWallet() {
			await this.$store.dispatch(
				'chain/common/wallet/createWalletWithMnemonic',
				{
					name: this.newWallet.name,
					mnemonic: this.newWallet.mnemonic,
					password: this.newWallet.password
				}
			)
			this.reset()
		}
	}
}
</script>
