<template>
	<div class="SpWalletList" v-if="depsLoaded">
		<div
			v-if="
				!newWallet.show &&
				!unlockWallet.show &&
				!keyWallet.show &&
				!importWallet.show
			"
		>
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
			<div class="SpWalletImport">
				<button @click="importWalletForm()" class="SpButton SpWalletButton">
					<div class="SpButtonText">IMPORT EXISTING WALLET</div>
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
					placeholder="Mnemonic (enter or click below to generate)"
				></textarea>
			</div>
			<div class="SpWalletGenerateMnemonic">
				<button @click="generateMnemonic()" class="SpButton">
					<div class="SpButtonText">GENERATE MNEMONIC</div>
				</button>
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
			<div class="SpWalletKey">
				<button @click="cancel()" class="SpButton">
					<div class="SpButtonText">CANCEL</div>
				</button>
				<button @click="signInWithKey()" class="SpButton">
					<div class="SpButtonText">SIGN IN</div>
				</button>
			</div>
		</div>
		<div class="SpWalletForm SpForm" v-if="importWallet.show">
			<div class="SpFormTitle">
				<strong>IMPORT EXISTING WALLET</strong>
			</div>
			<div class="SpWalletInputPassword">
				<input
					type="file"
					placeholder="Select backup .bin file"
					ref="backupFile"
				/>
			</div>
			<div class="SpWalletInputPassword">
				<input
					type="password"
					placeholder="Enter password"
					v-model="importWallet.password"
				/>
			</div>
			<div class="SpWalletImport">
				<button @click="cancel()" class="SpButton">
					<div class="SpButtonText">CANCEL</div>
				</button>
				<button @click="restoreBackup()" class="SpButton">
					<div class="SpButtonText">RESTORE</div>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import * as bip39 from 'bip39'

export default {
	name: 'SpWalletList',
	data() {
		return this.defaultState()
	},
	computed: {
		walletList() {
			if (this._depsLoaded) {
				return this.$store.state.chain.common.wallet.wallets
			} else {
				return []
			}
		},
		validStep1() {
			return (
				this.newWallet.name.trim() !== '' &&
				bip39.validateMnemonic(this.newWallet.mnemonic)
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
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	beforeCreate() {
		const module = ['chain', 'common', 'wallet']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module ' + this.module + ' has not been registered!')
				this._depsLoaded = false
				break
			}
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
		importWalletForm() {
			this.importWallet.show = true
			this.importWallet.backup = ''
			this.importWallet.password = ''
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
			this.keyWallet.show = false
			this.keyWallet.privKey = ''
			this.importWallet.show = false
			this.importWallet.backup = ''
			this.importWallet.password = ''
		},
		async restoreBackup() {
			if (this._depsLoaded) {
				let file = this.$refs.backupFile.files[0]
				if (!file) return
				let reader = new FileReader()
				reader.readAsText(file)
				reader.onload = (evt) => {
					this.$store.dispatch('chain/common/wallet/restoreWallet', {
						encrypted: evt.target.result,
						password: this.importWallet.password
					})
				}
			}
		},
		async signInWithKey() {
			if (this._depsLoaded) {
				await this.$store.dispatch('chain/common/wallet/signInWithPrivateKey', {
					privKey: this.keyWallet.privKey
				})
				this.reset()
				this.$emit('wallet-selected')
			}
		},
		async unlockStoreWallet() {
			if (this._depsLoaded) {
				await this.$store.dispatch('chain/common/wallet/unlockWallet', {
					name: this.unlockWallet.name,
					password: this.unlockWallet.password
				})
				this.reset()
				this.$emit('wallet-selected')
			}
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
				},
				importWallet: {
					show: false,
					backup: '',
					password: ''
				}
			}
		},
		generateMnemonic() {
			const mnemonic = bip39.generateMnemonic(256)
			this.newWallet.mnemonic = mnemonic
		},
		async createWallet() {
			if (this._depsLoaded) {
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
}
</script>
