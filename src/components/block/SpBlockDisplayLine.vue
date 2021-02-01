<template>
	<div class="SpBlockDisplayLine">
		<div class="blockHeight">
			{{ block.height }}
		</div>
		<div class="blockHash">
			{{ block.hash }}
		</div>
		<div class="blockTime">
			{{ block.time }}
		</div>
		<div class="blockTxs">
			{{ block.num_txs }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'SpBlockDisplayLine',
	props: {
		block: Object
	}
}
</script>
