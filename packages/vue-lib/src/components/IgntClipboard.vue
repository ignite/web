<template>
  <IgntButton @click="() => copy(text)" type="plain">
    <IgntCopyIcon
  /></IgntButton>
</template>
<script setup lang="ts">
import { useClipboard } from "@/def-composables/useClipboard";
import type { PropType } from "vue";
import IgntButton from "./IgntButton.vue";
import IgntCopyIcon from "./icons/IgntCopyIcon.vue";

defineProps({
  text: {
    type: String as PropType<string>,
    default: () => "",
  },
});
const { copy } = useClipboard();
</script>
