<template>
  <IgntButton @click="() => copy(text)" type="plain">
    <IgntCopyIcon
  /></IgntButton>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

import { useClipboard } from "@/def-composables/useClipboard";

import IgntCopyIcon from "./icons/IgntCopyIcon.vue";
import IgntButton from "./IgntButton.vue";

defineProps({
  text: {
    type: String as PropType<string>,
    default: () => "",
  },
});
const { copy } = useClipboard();
</script>
