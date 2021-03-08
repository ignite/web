<template>
	<div class="SpBlockHeight" v-if="depsLoaded">
		Block Height: <strong>{{ blockHeight }}</strong>
	</div>
</template>
<script>
export default {
	name: 'SpBlockHeight',
	computed: {
		blocks() {
			if (this._depsLoaded) {
				return this.$store.getters[common/blocks/getBlocks'](10)
			} else {
				return []
			}
		},
		blockHeight() {
			if (this.blocks.length > 0) {
				return this.blocks[0].height
			} else {
				return 'N/A'
			}
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	beforeCreate() {
		const module = [ 'common', 'blocks']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module `chain.common.blocks` has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	}
}
</script>
