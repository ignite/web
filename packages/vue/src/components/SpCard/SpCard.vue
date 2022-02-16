<template>
  <div class="sp-card-wrapper">
    <div class="sp-card-top">
      <slot name="top"></slot>
    </div>
    <div class="sp-card-bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SpCard'
})
</script>

<style scoped>
.sp-card-top {
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
}

.sp-card-bottom {
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  border-radius: 0px 0px 10px 10px;
}
</style>
