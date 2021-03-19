<template>
	<div class="sp-status-rpc">
		<SpStatusLED
			:status="nodeStatus"
			:alt="'RPCTendermint RPC' + rpcNode"
			:title="'Tendermint RPC ' + rpcNode"
		/>
		<div
			class="sp-status-rpc__text"
			v-if="showText"
			:alt="'Tendermint RPC ' + rpcNode"
			:title="'Tendermint RPC ' + rpcNode"
		>
			Tendermint RPC
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
