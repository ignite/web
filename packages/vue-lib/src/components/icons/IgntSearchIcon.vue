<template>
  <span class="search-icon">
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="width: 1em; height: 1em"
    >
      <path
        d="M6.5 12.5C9.81371 12.5 12.5 9.81371 12.5 6.5C12.5 3.18629 9.81371 0.5 6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5C0.5 9.81371 3.18629 12.5 6.5 12.5Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5002 14.5002L10.7422 10.7422"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IgntSearchIcon",
});
</script>
