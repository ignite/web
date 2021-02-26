<template>
	<div class="sp-status-api">
		<SpStatusLED
			:status="nodeStatus"
			:alt="'API ' + apiNode"
			:title="'API ' + apiNode"
		/>
		<div
			class="sp-status-api__text"
			v-if="showText"
			:alt="'API ' + apiNode"
			:title="'API ' + apiNode"
		>
			API
		</div>
	</div>
</template>
<script>
import SpStatusLED from '../SpStatusLED'

export default {
	name: 'SpStatusAPI',
	components: {
		SpStatusLED
	},
	props: {
		showText: {
			type: Boolean
		}
	},
	computed: {
		apiNode() {
			return this.$store.state.chain.common.env.apiCosmos
		},
		nodeStatus() {
			return this.$store.state.chain.common.env.apiConnected
		}
	}
}
</script>
