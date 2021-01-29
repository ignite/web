<template>
	<div class="SpWallet">
		<div v-if="loggedIn">
			<button @click="selectAccount()">{{ currentAccount }}</button>
			<SpAccountList />
		</div>
		<div v-else>
			<button @click="showWalletList()">Sign In</button>
			<SpWalletList v-if="showWallets" />
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
			showWallets: false
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
		loggedIn() {
			if (this.hasWallet) {
				return this.$store.getters['chain/common/wallet/loggedIn']
			} else {
				return false
			}
		}
	},
	methods: {
		showWalletList() {
			this.showWallets = true
		}
	}
}
</script>
