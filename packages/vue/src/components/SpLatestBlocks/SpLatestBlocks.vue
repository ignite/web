<template>
	<div class="SpLatestBlocksWrapper" v-if="depsLoaded">
		<div class="SpLatestBlocks" ref="blockList">
			<h2>LATEST BLOCKS</h2>
			<div v-if="blocks.length >= 10" class="SpLatestBlockList">
				<SpBlockDisplaySmall
					v-for="block in blocks"
					:id="'block-' + block.height"
					:key="block.hash"
					:block="block"
					tsFormat="MMM D YYYY, HH:mm:ss"
				>
				</SpBlockDisplaySmall>
			</div>
			<div v-else class="SpLatestBlockListEmpty">
				<SpBox />
				<p>Generating blocks</p>
			</div>
		</div>
		<router-link to="/blocks/" class="SpButton">
			<div class="SpButtonText">VIEW ALL BLOCKS</div>
		</router-link>
	</div>
</template>
<script>
import SpBlockDisplaySmall from '../SpBlockDisplaySmall'
import SpBox from '../SpBox'

export default {
	name: 'SpLatestBlocks',
	components: {
		SpBlockDisplaySmall,
		SpBox
	},
	computed: {
		blocks() {
			if (this._depsLoaded) {
				return this.$store.getters[common/blocks/getBlocks'](10)
			} else {
				return []
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
	},
	watch: {
		blocks() {
			let initialPos = window.scrollY
			let vm = this
			vm.$nextTick(() => {
				window.scrollTo(0, initialPos)
			})
		}
	}
}
</script>
