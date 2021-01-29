<template>
	<div class="SpWalletList">
		<ul v-if="walletList.length > 0">
			<li v-for="wallet in walletList" v-bind:key="wallet.name">
				<button @click="unlockWalletForm(wallet.name)">
					{{ wallet.name }}
				</button>
			</li>
		</ul>
		<div class="SpWalletListEmpty" v-else>
			<em>No wallets available</em>
		</div>
		<div class="SpWalletNew">
			<button @click="newWalletForm()">Create new wallet</button>
		</div>
		<div class="SpWalletForm" v-if="newWallet.show && newWallet.step === 1">
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
				<button @click="newWalletStep2()">
					Next
				</button>
			</div>
		</div>
		<div class="SpWalletForm" v-if="newWallet.show && newWallet.step === 2">
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
				<button @click="createWallet()">
					Create wallet
				</button>
			</div>
		</div>
		<div class="SpWalletForm" v-if="unlockWallet.show">
			<div class="SpWalletInputPassword">
				<input
					type="password"
					placeholder="Enter password"
					v-model="unlockWallet.password"
				/>
			</div>
			<div class="SpWalletUnlock">
				<button @click="unlockStoreWallet()">
					Unlock wallet
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'SpWalletList',
	data() {
		return this.defaultState()
	},
	computed: {
		walletList() {
			return this.$store.state.chain.common.wallet.wallets
		}
	},
	methods: {
		newWalletForm() {
			this.newWallet.show = true
			this.newWallet.step = 1
			this.newWallet.name = ''
			this.newWallet.mnemonic = ''
		},
		unlockWalletForm(name) {
			this.unlockWallet.show = true
			this.unlockWallet.name = name
			this.unlockWallet.password = ''
		},
		newWalletStep2() {
			this.newWallet.step = 2
		},
		async unlockStoreWallet() {
			await this.$store.dispatch('chain/common/wallet/unlockWallet', {
				name: this.unlockWallet.name,
				password: this.unlockWallet.password
			})
			this.reset()
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
