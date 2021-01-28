<template>
	<div>
		<div v-for="block in blocks" v-bind:key="block.height">
			{{ block.height }}
		</div>
	</div>
</template>
<script>
export default {
	computed: {
		blocks() {
			return this.$store.getters['chain/common/blocks/getBlocks']
		}
	}
}
</script>
