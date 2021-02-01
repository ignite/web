<template>
	<div class="SpWallet">
		<div v-if="loggedIn">
			<button @click="toggleAccountList()" class="SpButton">
				<div class="SpButtonText">{{ walletName }}:{{ currentAccount }}</div>
			</button>
			<SpAccountList
				v-if="showAccounts"
				v-on:account-selected="showAccounts = false"
			/>
		</div>
		<div v-else>
			<button @click="toggleWalletList()" class="SpButton">
				<div class="SpButtonText">SIGN IN</div>
			</button>
			<SpWalletList
				v-if="showWallets"
				v-on:wallet-selected="showWallets = false"
			/>
		</div>
	</div>
</template>
<script>
import SpAccountList from './wallet/SpAccountList'
import SpWalletList from './wallet/SpWalletList'
export default {
	name: 'SpWallet',
	components: {
		SpAccountList,
		SpWalletList
	},
	data() {
		return {
			showWallets: false,
			showAccounts: false
		}
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['chain', 'common', 'wallet'])
		},
		currentAccount() {
			if (this.loggedIn) {
				return this.$store.getters['chain/common/wallet/address']
			} else {
				return null
			}
		},
		walletName() {
			return this.$store.getters['chain/common/wallet/walletName']
		},
		loggedIn() {
			if (this.hasWallet) {
				return this.$store.getters['chain/common/wallet/loggedIn']
			} else {
				return false
			}
		}
	},
	methods: {
		toggleWalletList() {
			this.showWallets = !this.showWallets
			if (this.showWallets) {
				this.showAccounts = false
				this.$emit('dropdown-opened')
			}
		},
		closeDropdowns() {
			this.showAccounts = false
			this.showWallets = false
		},
		toggleAccountList() {
			this.showAccounts = !this.showAccounts
			if (this.showAccounts) {
				this.showWallets = false
				this.$emit('dropdown-opened')
			}
		}
	}
}
</script>
