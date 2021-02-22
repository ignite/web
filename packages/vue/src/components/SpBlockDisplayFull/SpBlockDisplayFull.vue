<template>
	<div class="SpBlockDisplayFull">
		<pre>{{ block }}</pre>
	</div>
</template>
<script>
export default {
	name: 'SpBlockDisplayFull',
	props: {
		block: Object
	},
	data() {
		return {
			txs: []
		}
	}
}
</script>
