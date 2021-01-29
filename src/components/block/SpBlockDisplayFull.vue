<template>
	<div class="SpBlockDisplayFull">
		<pre>{{ JSON.stringify(block, null, 2) }}</pre>
	</div>
</template>
<script>
export default {
	name: 'SpBlockDisplayFull',
	props: {
		block: Object
	}
}
</script>
