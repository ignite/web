<template>
	<tr class="SpBlockDisplayLine">
		<td class="blockHeight">
			{{ block.height }}
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

<script>
import moment from 'moment'

export default {
	name: 'SpBlockDisplayLine',
	props: {
		block: Object,
		tsFormat: String
	},
	methods: {
		formatTS(timestamp) {
			const momentTime = moment(timestamp)
			return momentTime.format(this.tsFormat)
		}
	}
}
</script>
