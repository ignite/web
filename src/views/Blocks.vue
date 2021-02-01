<template>
	<table>
		<thead>
			<tr>
				<th><strong>Height</strong></th>
				<th><strong>Hash</strong></th>
				<th><strong>Time</strong></th>
				<th><strong>TXs</strong></th>
			</tr>
		</thead>
		<tbody>
			<template v-for="block in blocks" v-bind:key="block.hash">
				<SpBlockDisplayLine :block="block" />
			</template>
		</tbody>
	</table>
	<div class="pagination">
		<span
			class="page-link"
			v-for="pageLink in pages"
			v-bind:key="'page' + pageLink"
		>
			<router-link :to="'/blocks/' + pageLink">{{ pageLink }} </router-link>
		</span>
	</div>
</template>

<script>
import SpBlockDisplayLine from '@/components/block/SpBlockDisplayLine'
import axios from 'axios'

export default {
	components: { SpBlockDisplayLine },
	data() {
		return {
			blocks: [],

			pages: 1
		}
	},

	computed: {
		page() {
			return this.$route.params.page || 1
		}
	},
	watch: {
		page: async function(newPage) {
			this.blocks = []
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
					(highest + 1 - newPage * 20) +
					'&maxHeight=' +
					(highest - (newPage - 1) * 20)
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
				(highest + 1 - this.page * 20) +
				'&maxHeight=' +
				(highest - (this.page - 1) * 20)
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
