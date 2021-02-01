<template>
	<tr class="SpBlockDisplayLine">
		<td class="blockHeight">
			{{ block.height }}
		</td>
		<td class="blockHash">
			{{ block.hash }}
		</td>
		<td class="blockTime">
			{{ block.timestamp }}
		</td>
		<td class="blockTxs">
			{{ block.details.num_txs }}
		</td>
	</tr>
</template>

<script>
export default {
	name: 'SpBlockDisplayLine',
	props: {
		block: Object
	}
}
</script>
