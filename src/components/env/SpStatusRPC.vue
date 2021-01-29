<template>
	<div class="SpStatusRPC">
		RPC <em>{{ rpcNode }}</em>: <SpStatusLED :status="nodeStatus" />
	</div>
</template>
<script>
import SpStatusLED from '@/components/env/SpStatusLED'

export default {
	name: 'SpStatusRPC',
	components: {
		SpStatusLED
	},
	computed: {
		rpcNode() {
			return this.$store.state.chain.common.env.apiTendermint
		},
		nodeStatus() {
			if (this.rpcNode != '') {
				return true
			} else {
				return false
			}
		}
	}
}
</script>
