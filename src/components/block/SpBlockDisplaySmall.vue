<template>
	<div class="SpBlockDisplaySmall">
		<div class="blockHeight" v-if="block.height">
			{{ block.height }}
		</div>
		<div class="blockHash">
			{{ block.hash }}
		</div>
		<div class="blockTime">
			{{ block.time }}
		</div>
		<div class="blockTxs">
			{{ block.details.data.txs.length }}
		</div>
	</div>
</template>
<style lang="scss" scoped>
.SpBlockDisplaySmall {
	line-height: 36px;
	vertical-align: center;
	text-align: center;
	.blockHeight {
		font-weight: bold;
		font-size: 22px;
		display: inline-block;
		line-height: 32px;
		vertical-align: center;
		height: 32px;
		padding-left: 10px;
		padding-right: 10px;
	}
	.blockHash {
		font-size: 20px;
		display: inline-block;
		line-height: 32px;
		vertical-align: center;
		height: 32px;
		padding-left: 10px;
		padding-right: 10px;
	}
	.blockTime {
		font-size: 16px;
		display: inline-block;
		line-height: 32px;
		vertical-align: center;
		height: 32px;
		padding-left: 10px;
		padding-right: 10px;
	}
	.blockTxs {
		font-style: italic;
		font-size: 18px;
		display: inline-block;
		line-height: 32px;
		vertical-align: center;
		height: 32px;
		padding-left: 10px;
		padding-right: 10px;
	}
}
</style>
<script>
export default {
	name: 'SpBlockDisplaySmall',
	props: {
		block: Object
	}
}
</script>
