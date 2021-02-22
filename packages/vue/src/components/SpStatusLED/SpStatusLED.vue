<template>
	<div class="SpStatusLED" :class="{ active: status }" />
</template>
<script>
export default {
	name: 'SpStatusLED',
	props: ['status']
}
</script>
