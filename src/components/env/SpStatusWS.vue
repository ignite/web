<template>
	<div class="SpStatusWS">
		WS <em>{{ wsNode }}</em
		>: <SpStatusLED :status="nodeStatus" />
	</div>
</template>
<script>
import SpStatusLED from '@/components/env/SpStatusLED'

export default {
	name: 'SpStatusWS',
	components: {
		SpStatusLED
	},
	computed: {
		wsNode() {
			return this.$store.state.chain.common.env.apiWS
		},
		nodeStatus() {
			return this.$store.state.chain.common.env.wsConnected
		}
	}
}
</script>
