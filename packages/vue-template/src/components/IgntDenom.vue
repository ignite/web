<template>
  <span v-if="modifier === 'base'" :title="normalized">
    {{ shorten ? short : normalized }}
  </span>
  <span
    v-else-if="modifier === 'path' && pathExtracted.length > 0"
    :title="normalized"
  >
    Channels
    <span v-for="(channel, $index) in pathExtracted" :key="$index">
      {{ channel }}
    </span>
  </span>
  <div
    v-else-if="modifier === 'avatar'"
    :class="[sizeClassObject, 'token-avatar']"
    :title="normalized"
  >
    {{ short.slice(0, 1) }}
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";

import { useDenom } from "../def-composables/useDenom";

type Modifier = "avatar" | "path" | "base";
type Size = "small" | "medium" | "large";
const props = defineProps({
  denom: {
    type: String as PropType<string>,
    required: true,
  },
  modifier: {
    type: String as PropType<Modifier>,
    default: "base",
  },
  size: {
    type: String as PropType<Size>,
    default: "medium",
  },
  shorten: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
});
const { normalized, pathExtracted } = useDenom(props.denom);
// computed
const short = computed(() => {
  if (normalized.value.length > 15) {
    return normalized.value.slice(0, 4) + "..." + normalized.value.slice(-4);
  } else {
    return normalized.value;
  }
});
const sizeClassObject = computed(() => {
  return {
    "token-avatar--small": props.size === "small",
    "token-avatar--medium": props.size === "medium",
    "token-avatar--large": props.size === "large",
  };
});
</script>

<style lang="scss" scoped>
.token-avatar {
  background-image: url("data:image/png;base64,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");
  background-size: 32px 32px;
  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.007em;

  text-transform: uppercase;

  &--small {
    width: 24px;
    height: 24px;
  }
  &--medium {
    width: 32px;
    height: 32px;
  }
  &--large {
    width: 40px;
    height: 40px;
  }
}
</style>
