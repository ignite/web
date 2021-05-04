<template>
	<tr class="SpBlockDisplayLine">
		<td class="blockHeight">
			<router-link :to="'/block/' + block.height">{{ block.height }} </router-link>
		</td>
		<td class="blockHash">
			{{ block.hash }}
		</td>
		<td class="blockTime">
			{{ formatTS(block.timestamp) }}
		</td>
		<td class="blockTxs">
			{{ block.details.num_txs }}
		</td>
	</tr>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
	name: 'SpBlockDisplayLine',
	props: {
		block: Object,
		tsFormat: String,
	},
	methods: {
		formatTS(timestamp) {
			const momentTime = dayjs(timestamp)
			return momentTime.format(this.tsFormat)
		},
	},
})
</script>
