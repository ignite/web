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
@import '../../styles/app.scss';
</style>
