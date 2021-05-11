<template>
	<div class="sp-blockdisplayfull">
		<pre>{{ block }}</pre>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface SpBlockDisplayFullState {
	txs: Array<unknown>
}
export default defineComponent({
	name: 'SpBlockDisplayFull',
	props: {
		block: {
			type: Object as PropType<unknown>,
		},
	},
	data: function (): SpBlockDisplayFullState {
		return {
			txs: [],
		}
	},
})
</script>
