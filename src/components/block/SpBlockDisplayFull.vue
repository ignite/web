<template>
	<div class="SpBlockDisplayFull">
		<div v-for="tx in txs" v-bind:key="tx.txHash">
			{{ tx }}
		</div>
	</div>
</template>
<script>
export default {
	name: 'SpBlockDisplayFull',
	props: {
		block: Object
	},
	data() {
		return {
			txs: []
		}
	},
	async created() {
		for (let tx of this.block.details.data.txs) {
			const fullTx = await this.$store.getters[
				'chain/common/env/apiClient'
			].decodeTx(tx)
			this.txs.push(fullTx)
		}
	}
}
</script>
