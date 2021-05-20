<template>
	<router-link class="sp-box sp-blockdisplaysmall sp-shadow" :to="'/block/' + block.height">
		<div class="SpBlockDisplaySmallHeight">
			{{ block.height }}
		</div>
		<div class="SpBlockDisplaySmallHash">
			{{ block.hash }}
		</div>
		<div class="SpBlockDisplaySmallTime">
			{{ formatTS(block.timestamp) }}
		</div>
		<div class="SpBlockDisplaySmallTxs">No of Txs: {{ block.details.data.txs.length }}</div>
	</router-link>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
	name: 'SpBlockDisplaySmall',
	props: {
		block: {
			type: Object as PropType<unknown>,
		},
		tsFormat: {
			type: String as PropType<string>,
		},
	},
	methods: {
		formatTS: function (timestamp: number): string {
			const momentTime = dayjs(timestamp)
			return momentTime.format(this.tsFormat)
		},
	},
})
</script>
