<template>
	<div class="SpStatusAPI">
		API <em>{{ apiNode }}</em
		>: <SpStatusLED :status="nodeStatus" />
	</div>
</template>
<script>
import SpStatusLED from '@/components/env/SpStatusLED'

export default {
	name: 'SpStatusAPI',
	components: {
		SpStatusLED
	},
	computed: {
		apiNode() {
			return this.$store.state.chain.common.env.apiCosmos
		},
		nodeStatus() {
			return this.$store.state.chain.common.env.clients.api.apiConnected
		}
	}
}
</script>
