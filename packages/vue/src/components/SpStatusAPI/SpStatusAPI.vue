<template>
	<div class="sp-status-api">
		<SpStatusLED
			:status="nodeStatus"
			:alt="'Cosmos SDK API ' + apiNode"
			:title="'Cosmos SDK API ' + apiNode"
		/>
		<div
			class="sp-status-api__text"
			v-if="showText"
			:alt="'Cosmos SDK API ' + apiNode"
			:title="'Cosmos SDK API ' + apiNode"
		>
			Cosmos SDK API
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
			return this.$store.getters['common/env/apiCosmos']
		},
		nodeStatus() {
			return this.$store.getters['common/env/apiConnected']
		}
	}
}
</script>
