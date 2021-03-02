<template>
	<div class="sp-wallet" v-if="depsLoaded">
		<SpWalletMenu
			v-if="walletList.length > 0 && !create"
			v-on:createNew="create = true"
		/>
		<SpButton
			v-else-if="walletList.length == 0 && !create"
			v-on:click="create = true"
			>Get Started</SpButton
		>
		<SpWalletCreate title="Get Started" v-else v-on:close="create = false">
			Create or import an existing wallet to manage your DeFi portfolio.
		</SpWalletCreate>
	</div>
</template>
<script>
export default {
	name: 'SpWallet',
	data() {
		return {
			create: false
		}
	},
	computed: {
		walletList() {
			if (this._depsLoaded) {
				return this.$store.state.chain.common.wallet.wallets
			} else {
				return []
			}
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
	methods: {}
}
</script>
