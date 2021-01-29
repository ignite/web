<template>
	<div class="SpWallet">
		<div v-if="loggedIn">
			{{address}}
		</div>
		<div v-else>
			Sign In
		</div>
	</div>
</template>
<script>
export default {
	name: 'SpWallet',
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
			}else{
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