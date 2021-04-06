<template>
	<div class="sp-wallet-create sp-shadow">
		<div class="sp-wallet-create__close" v-if="!createform && !importform">
			<a class="sp-icon sp-icon-Close" v-on:click="close" />
		</div>
		<div class="sp-wallet-create__back" v-else>
			<a class="sp-icon sp-icon-Lock" v-on:click="goBack" v-if="create.step2" />
			<a
				class="sp-icon sp-icon-LeftArrow"
				v-on:click="goBack"
				v-if="!create.step2"
			/>
		</div>
		<template v-if="!createform && !importform">
			<h3>{{ title }}</h3>
			<div class="sp-wallet-create__text">
				<slot></slot>
			</div>
			<div class="sp-wallet-create__cards">
				<SpCard type="primary" icon="Add" v-on:click="createform = true"
					>Create new wallet</SpCard
				>
				<SpCard type="secondary" icon="Upload" v-on:click="importform = true"
					>Import existing wallet</SpCard
				>
			</div>
			<div class="sp-wallet-create__keplr" v-if="keplrAvailable">
				<SpButton type="primary" v-on:click="useKeplr">Use Keplr</SpButton>
			</div>
		</template>
		<template v-if="createform && create.step1">
			<h3>Create wallet</h3>
			<div class="sp-wallet-create__text">
				Generate your own unique wallet. Receive a public address (0x...) and
				choose a method for access and recovery.
			</div>
			<div class="sp-wallet-create__form">
				<div class="sp-form-group">
					<input
						class="sp-input"
						:class="{ 'sp-error': !walletNameAvailable && !creating }"
						v-model="create.name"
						type="text"
						name="walletname"
						placeholder="Wallet name"
					/>
				</div>
				<div class="sp-error-message" v-if="!walletNameAvailable && !creating">
					A wallet by this name already exist. Please choose a different one.
				</div>
				<div class="sp-form-group">
					<input
						class="sp-input"
						v-model="create.password"
						name="password"
						type="password"
						placeholder="Password"
					/>
					<input
						class="sp-input"
						v-model="create.confirm"
						name="confirm"
						type="password"
						placeholder="Confirm password"
					/>
				</div>
				<div
					class="sp-error-message"
					v-if="create.password != '' && create.password != create.confirm"
				>
					Passwords do not match
				</div>
				<SpButton v-on:click="createStep2" type="primary">Create</SpButton>
			</div>
		</template>
		<template v-if="createform && create.step2">
			<h3>Here is your<br />recovery phrase</h3>
			<div class="sp-wallet-create__text">
				You can restore your wallet using your recovery phrase.
			</div>
			<div class="sp-wallet-create__text">
				Write it down on paper. Resist temptation to email it to yourself or
				sceenshot it.
			</div>
			<SpMnemonic :mnemonic="create.mnemonic" />
			<SpButton type="secondary" v-on:click="downloadBackup"
				>Download Backup</SpButton
			>
			<SpButton type="primary" v-on:click="done">Done</SpButton>
		</template>
		<template v-if="importform && imported.step1">
			<h3>
				Import<br />
				existing wallet
			</h3>
			<div class="sp-wallet-create__text">
				Paste your recovery phrase or private key below to import your wallet.
			</div>
			<textarea
				class="sp-key-area sp-textarea"
				v-model="imported.mnemonicOrKey"
			></textarea>
			<!--
			<SpMnemonicInput
				class="sp-key-area sp-textarea"
				v-model="imported.mnemonicOrKey"
			></SpMnemonicInput>
			//-->
			<div
				class="sp-error-message"
				v-if="imported.mnemonicOrKey != '' && !validMnemonic"
			>
				You have not entered a valid mnemonic or private key.
			</div>
			<SpButton
				type="primary"
				v-on:click="importStep2"
				:disabled="imported.mnemonicOrKey == '' || !validMnemonic"
				>Next</SpButton
			>
		</template>
		<template v-if="importform && imported.step2">
			<h3>Import existing wallet</h3>
			<div class="sp-wallet-create__text">
				Please name your wallet and choose a password
			</div>
			<div class="sp-wallet-create__form">
				<div class="sp-form-group">
					<input
						class="sp-input"
						:class="{ 'sp-error': !walletNameAvailable && !creating }"
						v-model="imported.name"
						type="text"
						name="walletname"
						placeholder="Wallet name"
					/>
				</div>
				<div class="sp-form-group">
					<input
						class="sp-input"
						v-model="imported.password"
						name="password"
						type="password"
						placeholder="Password"
					/>
					<input
						class="sp-input"
						v-model="imported.confirm"
						name="confirm"
						type="password"
						placeholder="Confirm password"
					/>
				</div>
				<SpButton
					v-on:click="doneImport"
					:disabled="
						imported.name == '' ||
						imported.password == '' ||
						imported.password != imported.confirm
					"
					>Done</SpButton
				>
			</div>
		</template>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import * as bip39 from 'bip39'
import dayjs from 'dayjs'
import { saveAs } from 'file-saver'
import CryptoJS from 'crypto-js'
import SpCard from '../SpCard'
import SpButton from '../SpButton'
import SpMnemonic from '../SpMnemonic'

//import SpMnemonicInput from '../SpMnemonicInput'

export default defineComponent({
	name: 'SpWalletCreate',
	components: {
		SpCard,
		SpButton,
		SpMnemonic
		//SpMnemonicInput
	},
	props: {
		title: {
			type: String
		}
	},
	data() {
		return this.defaultState()
	},
	computed: {
		keplrAvailable() {
			return window.keplr ? true : false
		},
		nameToCreate() {
			return this.createform ? this.create.name : this.imported.name
		},
		walletNameAvailable() {
			return this.$store.getters['common/wallet/nameAvailable'](
				this.nameToCreate
			)
		},
		wallet() {
			return this.$store.getters['common/wallet/wallet']
		},
		validMnemonic() {
			return bip39.validateMnemonic(this.imported.mnemonicOrKey)
		}
	},
	methods: {
		downloadBackup() {
			const backup = CryptoJS.AES.encrypt(
				JSON.stringify(this.wallet),
				this.wallet.password
			)

			const blob = new Blob([backup.toString()], {
				type: 'application/octet-stream; charset=us-ascii'
			})
			saveAs(blob, this.backupName())
		},
		backupName() {
			return (
				this.wallet.name + '_Backup_' + dayjs().format('YYYY-MM-DD') + '.bin'
			)
		},
		close() {
			this.$emit('close')
		},
		reset() {
			Object.assign(this.$data, this.defaultState())
		},
		goBack() {
			if (this.createform) {
				if (this.create.step1) {
					this.reset()
					return
				}
				if (this.create.step2) {
					this.create.step2 = false
					this.create.step1 = true
					return
				}
			}

			if (this.importform) {
				if (this.imported.step1) {
					this.reset()
					return
				}
				if (this.imported.step2) {
					this.imported.step2 = false
					this.imported.step1 = true
					return
				}
			}
		},
		defaultState() {
			return {
				createform: false,
				importform: false,
				creating: false,
				create: {
					step1: true,
					step2: false,
					name: '',
					password: '',
					confirm: '',
					mnemonic: ''
				},
				imported: {
					step1: true,
					step2: false,
					name: '',
					password: '',
					confirm: '',
					mnemonicOrKey: ''
				}
			}
		},
		generateMnemonic() {
			const mnemonic = bip39.generateMnemonic(256)
			this.create.mnemonic = mnemonic
		},
		async createStep2() {
			this.creating = true
			if (this.walletNameAvailable) {
				this.create.step1 = false
				this.create.step2 = true
				this.generateMnemonic()
				await this.createWallet()
				this.creating = false
			}
			//this.downloadBackup()
		},
		importStep2() {
			this.imported.step1 = false
			this.imported.step2 = true
		},
		done() {
			this.reset()
			this.close()
		},
		async doneImport() {
			this.creating = true
			if (this.walletNameAvailable) {
				await this.importWallet()
				this.creating = false
				this.reset()
				this.close()
			}
		},

		async importWallet() {
			if (this._depsLoaded) {
				await this.$store.dispatch('common/wallet/createWalletWithMnemonic', {
					name: this.imported.name,
					mnemonic: this.imported.mnemonicOrKey,
					password: this.imported.password,
					prefix: this.$store.state.common.env.addrPrefix
				})
				//this.reset()
			}
		},
		async useKeplr() {
			if (this._depsLoaded) {
				let staking = this.$store.getters['cosmos.staking.v1beta1/getParams']({
					params: {}
				})
				let tokens = this.$store.getters['cosmos.bank.v1beta1/getTotalSupply']({
					params: {}
				})
				const chainId = this.$store.getters['common/env/chainId']

				try {
					await window.keplr.experimentalSuggestChain({
						// Chain-id of the Cosmos SDK chain.
						chainId: chainId,
						// The name of the chain to be displayed to the user.
						chainName: this.$store.getters['common/env/chainName'],
						// RPC endpoint of the chain.
						rpc: this.$store.getters['common/env/apiTendermint'],
						// REST endpoint of the chain.
						rest: this.$store.getters['common/env/apiCosmos'],
						// Staking coin information
						stakeCurrency: {
							// Coin denomination to be displayed to the user.
							coinDenom: staking.params.bond_denom.toUpperCase(),
							// Actual denom (i.e. uatom, uscrt) used by the blockchain.
							coinMinimalDenom: staking.params.bond_denom,
							// # of decimal points to convert minimal denomination to user-facing denomination.
							coinDecimals: 0
							// (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
							// You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
							// coinGeckoId: ""
						},
						// (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
						// The 'stake' button in Keplr extension will link to the webpage.
						// walletUrlForStaking: "",
						// The BIP44 path.
						bip44: {
							// You can only set the coin type of BIP44.
							// 'Purpose' is fixed to 44.
							coinType: 118
						},
						// Bech32 configuration to show the address to user.
						// This field is the interface of
						// {
						//   bech32PrefixAccAddr: string;
						//   bech32PrefixAccPub: string;
						//   bech32PrefixValAddr: string;
						//   bech32PrefixValPub: string;
						//   bech32PrefixConsAddr: string;
						//   bech32PrefixConsPub: string;
						// }
						bech32Config: {
							bech32PrefixAccAddr: this.$store.getters['common/env/addrPrefix'],
							bech32PrefixAccPub:
								this.$store.getters['common/env/addrPrefix'] + 'pub',
							bech32PrefixValAddr:
								this.$store.getters['common/env/addrPrefix'] + 'valoper',
							bech32PrefixValPub:
								this.$store.getters['common/env/addrPrefix'] + 'valoperpub',
							bech32PrefixConsAddr:
								this.$store.getters['common/env/addrPrefix'] + 'valcons',
							bech32PrefixConsPub:
								this.$store.getters['common/env/addrPrefix'] + 'valconspub'
						},
						// List of all coin/tokens used in this chain.
						currencies: tokens.supply.map((x) => {
							x.coinDenom = x.denom.toUpperCase()
							x.coinMinimalDenom = x.denom
							x.coinDecimals = 0
							return x
						}),
						// List of coin/tokens used as a fee token in this chain.
						feeCurrencies: tokens.supply.map((x) => {
							x.coinDenom = x.denom.toUpperCase()
							x.coinMinimalDenom = x.denom
							x.coinDecimals = 0
							return x
						}),
						// (Optional) The number of the coin type.
						// This field is only used to fetch the address from ENS.
						// Ideally, it is recommended to be the same with BIP44 path's coin type.
						// However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
						// So, this is separated to support such chains.
						coinType: 118,
						// (Optional) This is used to set the fee of the transaction.
						// If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
						// Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
						// Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
						gasPriceStep: {
							low: 0.01,
							average: 0.025,
							high: 0.04
						}
					})
					await window.keplr.enable(chainId)
					const offlineSigner = window.getOfflineSigner(chainId)
					await this.$store.dispatch(
						'common/wallet/connectWithKeplr',
						offlineSigner
					)
					this.done()
				} catch (e) {
					console.error(e)
				}
			}
		},
		async createWallet() {
			if (this._depsLoaded) {
				await this.$store.dispatch('common/wallet/createWalletWithMnemonic', {
					name: this.create.name,
					mnemonic: this.create.mnemonic,
					password: this.create.password,
					prefix: this.$store.state.common.env.addrPrefix
				})
				//this.reset()
			}
		}
	}
})
</script>
