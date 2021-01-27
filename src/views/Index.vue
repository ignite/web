<template>
	<div>
		<div class="sp-container">
			<sp-sign-in />
			<sp-bank-balances :address="address" :refresh="true" />
			<sp-token-send :address="address" />
			<!-- this line is used by starport scaffolding # 4 -->
		</div>
	</div>
</template>

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
