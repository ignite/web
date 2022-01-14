<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 1L1 15"
      stroke="black"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M15 15L1 1"
      stroke="black"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SpTimesIcon'
})
</script>
