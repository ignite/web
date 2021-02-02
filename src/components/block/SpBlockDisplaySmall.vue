<template>
	<router-link class="SpBlockDisplaySmall" :to="'/block/' + block.height">
		<div class="SpBlockDisplaySmallHeight">
			{{ block.height }}
		</div>
		<div class="SpBlockDisplaySmallHash">
			{{ block.hash }}
		</div>
		<div class="SpBlockDisplaySmallTime">
			{{ formatTS(block.timestamp) }}
		</div>
		<div class="SpBlockDisplaySmallTxs">
			No of Txs: {{ block.details.data.txs.length }}
		</div>
	</router-link>
</template>

<script>
import moment from 'moment'

export default {
	name: 'SpBlockDisplaySmall',
	props: {
		block: Object,
		tsFormat: String
	},
	methods: {
		formatTS(timestamp) {
			const momentTime = moment(timestamp)
			return momentTime.format(this.tsFormat)
		}
	}
}
</script>
