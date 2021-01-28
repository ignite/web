<template>
	<div>
		<div class="sp-container">
			<sp-sign-in />
			<sp-bank-balances :address="address" :refresh="true" />
			<sp-token-send :address="address" />
			<sp-blocks/>
			<!-- this line is used by starport scaffolding # 4 -->
		</div>
	</div>
</template>

<style scoped>
.container {
	max-width: 800px;
	margin: 2rem auto;
	padding: 1rem;
}
</style>
<script>
import * as sp from '../index.js'

export default {
	components: { ...sp },
	computed: {
		address() {
			return this.$store.state.chain.common.wallet.selectedAddress
		}
	}
}
</script>
