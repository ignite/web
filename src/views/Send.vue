<template>
	<div>
		<div class="container">
			<SpBankBalances :address="address" :refresh="true" />
			<SpTokenSend :address="address" />
		</div>
	</div>
</template>

<script>
import SpTokenSend from '@/components/SpTokenSend'
import SpBankBalances from '@/components/SpBankBalances'

export default {
	components: { SpTokenSend, SpBankBalances },
	computed: {
		address() {
			return this.$store.getters['chain/common/wallet/address']
		}
	}
}
</script>
