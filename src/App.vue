<template>
	<div v-if="initialized">
		<div class="SpHeader" v-if="hasWallet">
			<SpWallet />
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
import SpWallet from './components/SpWallet'
import SpBlockHeight from '@/components/block/SpBlockHeight'
import SpStatusAPI from '@/components/env/SpStatusAPI'
import SpStatusRPC from '@/components/env/SpStatusRPC'
import SpStatusWS from '@/components/env/SpStatusWS'

export default {
	components: {
		SpWallet,
		SpBlockHeight,
		SpStatusAPI,
		SpStatusRPC,
		SpStatusWS
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
	}
}
</script>
