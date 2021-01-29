<template>
	<div>
		<div class="SpHeader" v-if="hasWallet">
			<SpWallet />
			<SpWalletList />
		</div>
		<router-view />
	</div>
</template>

<style>
body {
	margin: 0;
}
</style>

<script>
import "./scss/app.scss";
import SpWallet from './components/SpWallet'
import SpWalletList from './components/wallet/SpWalletList'

export default {
	components: {
		SpWallet,
		SpWalletList
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['chain', 'common', 'wallet'])
		}
	},
	async created() {
		await this.$store.dispatch('chain/common/env/init')
	}
}
</script>
