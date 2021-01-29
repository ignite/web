<template>
	<div class="SpBlockHeight">
		Block Height: <strong>{{ blockHeight }}</strong>
	</div>
</template>
<script>
export default {
	name: 'SpBlockHeight',
	computed: {
		blocks() {
			return this.$store.getters['chain/common/blocks/getBlocks']
		},
		blockHeight() {
			if (this.blocks.length > 0) {
				return this.blocks[0].height
			} else {
				return 'N/A'
			}
		}
	}
}
</script>
