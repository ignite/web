<template>
	<div>
		<div class="container">
			<SpBlockDisplayFull :block="block" v-if="block" tsFormat="MMM D YYYY, HH:mm:ss" />
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			block: null
		}
	},
	async created() {
		this.block = await this.$store.dispatch('common/blocks/getShiftedBlock', this.$route.params.block)
	}
}
</script>
