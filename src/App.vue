<template>
	<div>
		<router-view />
	</div>
</template>

<style>
body {
	margin: 0;
}
</style>

<script>
export default {
	async created() {
		await this.$store.dispatch('chain/init')
		setTimeout(() => {
			this.$store.dispatch('cosmos/cosmos-sdk/bank/init')
			this.$store.dispatch('cosmos/cosmos-sdk/auth/init')
		}, 1000)
	}
}
</script>
