<template>
  <header class="flex p-5">
    <IgntLogo class="mx-2.5" />
    <nav class="flex flex-1 justify-between">
      <ul class="flex items-center">
        <li
          class="text-3 px-4 font-normal"
          v-for="item in navItems"
          :key="item.label"
        >
          <IgntLink :item="item"></IgntLink>
        </li>
      </ul>
      <div><IgntAcc /></div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { IgntLink } from "@ignt/vue-library";
import { IgntLogo } from "@ignt/vue-library";
import { type PropType, ref } from "vue";

import IgntAcc from "@/components/IgntAcc.vue";

type MenuItem = {
  label: string;
  to?: string;
  href?: string;
};
const props = defineProps({
  navItems: {
    type: Array as PropType<Array<MenuItem>>,
    required: true,
  },
});
const navItems = ref(props.navItems);
</script>
