<template>
	<div class="sp-wallet" v-if="depsLoaded">
		<SpWalletMenu
			v-if="walletList.length > 0 && !create"
			v-on:createNew="create = true"
		/>
		<SpButton
			v-else-if="walletList.length == 0 && !create"
			v-on:click="create = true"
			>Access wallet</SpButton
		>
		<SpWalletCreate title="Access wallet" v-else v-on:close="create = false">
			Create or import an existing wallet to manage your DeFi portfolio.
		</SpWalletCreate>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SpWalletMenu from '../SpWalletMenu'
import SpButton from '../SpButton'
import SpWalletCreate from '../SpWalletCreate'

export default defineComponent({
	name: 'SpWallet',
	components: {
		SpWalletMenu,
		SpButton,
		SpWalletCreate
	},
	data() {
		return {
			create: false
		}
	},
	computed: {
		walletList() {
			if (this._depsLoaded) {
				return this.$store.state.common.wallet.wallets
			} else {
				return []
			}
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	beforeCreate() {
		const module = ['common', 'wallet']
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
})
</script>
