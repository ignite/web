<template>
	<div v-if="initialized">
		<SpTheme>
			<SpNavbar />
		</SpTheme>
	</div>
</template>

<script>
import { SpTheme, SpNavbar } from '@starport/vue'

export default {
	data() {
		return {
			initialized: false
		}
	},
	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		},
		hasWallet() {
			return this.$store.hasModule(['common', 'wallet'])
		}
	},
	async created() {
		await this.$store.dispatch('common/env/init')
		this.initialized = true
	},
	errorCaptured(err) {
		console.log(err)
		return false
	},
	components: { SpTheme, SpNavbar }
}
</script>

<style scoped lang="scss">
body {
	margin: 0;
}
</style>
