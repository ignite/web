<template>
	<div class="sp-status-rpc">
		<SpStatusLED
			:status="nodeStatus"
			:alt="'RPC ' + rpcNode"
			:title="'RPC ' + rpcNode"
		/>
		<div
			class="sp-status-rpc__text"
			v-if="showText"
			:alt="'RPC ' + rpcNode"
			:title="'RPC ' + rpcNode"
		>
			RPC
		</div>
	</div>
</template>
<script>
import SpStatusLED from '../SpStatusLED'

export default {
	name: 'SpStatusRPC',
	components: {
		SpStatusLED
	},
	props: {
		showText: {
			type: Boolean
		}
	},
	computed: {
		rpcNode() {
			return this.$store.getters['common/env/apiTendermint']
		},
		nodeStatus() {
			return this.$store.getters['common/env/rpcConnected']
		}
	}
}
</script>
