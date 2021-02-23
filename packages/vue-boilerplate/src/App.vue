<template>
	<div v-if="initialized">
		<div class="SpHeader" v-if="hasWallet">
			<SpWallet
				ref="wallet"
				v-on:dropdown-opened="$refs.menu.closeDropdown()"
			/>
			<SpMenu v-on:menu-opened="$refs.wallet.closeDropdowns()" ref="menu" />
		</div>
		<router-view />
		<div class="SpFooter">
			<SpBlockHeight />
			<div class="SpStatuses">
				<SpStatusAPI />
				<SpStatusRPC />
				<SpStatusWS />
			</div>
		</div>
	</div>
</template>

<style>
body {
	margin: 0;
}
</style>

<script>
import './scss/app.scss'
import '@starport/vue/lib/starport-vue.css'
import SpMenu from './components/SpMenu'

export default {
	components: {
		SpMenu
	},
	data() {
		return {
			initialized: false
		}
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['chain', 'common', 'wallet'])
		}
	},
	async created() {
		await this.$store.dispatch('chain/common/env/init')
		this.initialized = true
	},
	errorCaptured(err) {
		console.log(err)
		return false
	}
}
</script>
