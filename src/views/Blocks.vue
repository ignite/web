<template>
	<ul>
		<li v-for="block in blocks" v-bind:key="block.hash">
			<SpBlockDisplayLine :block="block" />
		</li>
	</ul>
</template>

<script>
import SpBlockDisplayLine from '@/components/block/SpBlockDisplayLine'
import axios from 'axios'

export default {
	components: { SpBlockDisplayLine },
	data() {
		return {
			blocks: [],
			page: 1,
			pages: 1
		}
	},
	async mounted() {
		if (this.$route.params.page) {
			this.page = this.$route.params.page
		} else {
			this.page = 1
		}
		const chain = await axios.get(
			this.$store.getters['chain/common/env/apiTendermint'] +
				'/blockchain?minHeight=1&maxHeight=20'
		)
		const lowest = parseInt(
			chain.data.result.block_metas[chain.data.result.block_metas.length - 1]
				.header.height
		)

		const highest = parseInt(chain.data.result.last_height)
		this.pages = Math.ceil((highest - lowest) / 20)
		const page = await axios.get(
			this.$store.getters['chain/common/env/apiTendermint'] +
				'/blockchain?minHeight=' +
				(highest + 1 - this.page * 20)
		)
		for (let block_meta of page.data.result.block_metas) {
			const block = {
				height: block_meta.header.height,
				timestamp: block_meta.header.time,
				hash: block_meta.block_id.hash,
				details: { num_txs: block_meta.num_txs }
			}
			this.blocks.push(block)
		}
	}
}
</script>
