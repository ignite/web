<template>
	<div class="SpWallet">
		<div v-if="loggedIn">
			<button @click="selectAccount()">{{ currentAccount }}</button>
			<SpAccountList/>
		</div>
		<div v-else>
			Sign In
		</div>
	</div>
</template>
<script>
import SpAccountList from './wallet/SpAccountList'
export default {
	name: 'SpWallet',
	components: {
		SpAccountList
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['chain', 'common', 'wallet'])
		},
		walletList() {
			return this.$store.state.chain.common.wallet.wallets
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
	}
}
</script>
