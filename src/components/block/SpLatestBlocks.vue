<template>
	<div class="SpLatestBlocksWrapper">
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
				<IconBox />
				<p>Generating blocks</p>
			</div>
		</div>
		<router-link to="/blocks/" class="SpButton">
			<div class="SpButtonText">
				VIEW ALL BLOCKS
			</div>
		</router-link>
	</div>
</template>
<script>
import SpBlockDisplaySmall from '@/components/block/SpBlockDisplaySmall'
import IconBox from '@/components/icons/Box'

export default {
	name: 'SpLatestBlocks',
	components: {
		SpBlockDisplaySmall,
		IconBox
	},
	computed: {
		blocks() {
			return this.$store.getters['chain/common/blocks/getBlocks'](10)
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
