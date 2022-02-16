<template>
  <div class='sp-system-bar'>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import SpAcc from '../SpAcc'
import SpButton from '../SpButton'
import SpModal from '../SpModal'

export interface SpSystemBar {
  name: string
  url: string
}

export default defineComponent({
  name: 'SpSystemBar',
  props: {
  }
})
</script>

<style scoped lang="scss">
.sp-system-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
}
</style>
