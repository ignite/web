<template>
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 1em; height: 1em"
  >
    <circle cx="16" cy="16" r="15.5" stroke="currentColor" />
    <g clip-path="url(#clip0_721_8528)">
      <path
        d="M16 8.5L16 24.5"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <path
        d="M24 16.5L8 16.5"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_721_8528">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(8 8.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IgntAddIcon",
});
</script>
