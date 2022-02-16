<template>
  <div :class="['spacer', size]" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SpSpacer',

  props: {
    size: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.spacer {
  display: flex;
  width: 100%;
}

.xxs {
  height: 8px;
}

.xs {
  height: 16px;
}

.xsm {
  height: 20px;
}

.sm {
  height: 24px;
}

.md {
  height: 48px;
}

.lg {
  height: 128px;
}
</style>
