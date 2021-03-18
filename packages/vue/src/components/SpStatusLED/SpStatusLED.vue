<template>
	<div class="sp-status-led" :class="{ 'sp-active': status }">
		<!-- <span class="sp-icon sp-icon-Status" /> -->
	</div>
</template>
<script>
export default {
	name: 'SpStatusLED',
	props: ['status']
}
</script>
