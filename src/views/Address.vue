<template>
	<div>
		<div class="container">
			<SpBankBalances :address="address" :refresh="true" v-if="address"/>
		</div>
	</div>
</template>

<script>
import SpBankBalances from '@/components/SpBankBalances'

export default {
	components: { SpBankBalances },
	computed: {
		address() {
			return this.$route.params.address
		}
	}
}
</script>
