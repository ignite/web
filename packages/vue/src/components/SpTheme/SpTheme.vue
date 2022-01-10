<template>
	<slot />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'SpTheme'
})
</script>

<style lang="scss">
/** @import './src/styles/app.scss'; */
@import './src/styles/main.scss';
</style>
