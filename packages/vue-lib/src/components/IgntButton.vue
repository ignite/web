<template>
  <router-link
    :to="link"
    v-if="link"
    class="font-normal text-md rounded-lg"
    :class="{
      'bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2':
        type == 'primary' && !busy && !disabled,
      'bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2':
        type == 'secondary' && !busy && !disabled,
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100':
        type == 'plain' && !busy && !disabled,
      'bg-gray-300 border-gray-300 text-gray-600 px-5 h-12 border-2 opacity-50':
        type == 'primary' && (busy || disabled),
      'bg-white-1000 border-gray-300 text-gray-300 px-5 h-12 border-2 opacity-50':
        type == 'secondary' && (busy || disabled),
      'shadow-std text-center rounded-full text-sm text-gray-200 font-medium mx-auto inset-x-0 p-2 opacity-50':
        type == 'plain' && (busy || disabled),
    }"
    :disabled="disabled || busy"
  >
    <span v-if="!busy"><slot></slot></span>

    <div v-else class="flex items-center justify-center">
      <IgntLoadingIcon />
    </div>
  </router-link>
  <a
    :href="href"
    v-else-if="href"
    class="font-normal text-md rounded-lg"
    :class="{
      'bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2':
        type == 'primary' && !busy && !disabled,
      'bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2':
        type == 'secondary' && !busy && !disabled,
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100':
        type == 'plain' && !busy && !disabled,
      'bg-gray-300 border-gray-300 text-gray-600 px-5 h-12 border-2 opacity-50':
        type == 'primary' && (busy || disabled),
      'bg-white-1000 border-gray-300 text-gray-300 px-5 h-12 border-2 opacity-50':
        type == 'secondary' && (busy || disabled),
      'shadow-std text-center rounded-full text-sm text-gray-200 font-medium mx-auto inset-x-0 p-2 opacity-50':
        type == 'plain' && (busy || disabled),
    }"
    :disabled="disabled || busy"
    :target="target"
  >
    <span v-if="!busy"><slot></slot></span>

    <div v-else class="flex items-center justify-center">
      <IgntLoadingIcon />
    </div>
  </a>
  <button
    type="button"
    v-else
    class="font-normal text-md rounded-lg"
    :class="{
      'bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2':
        type == 'primary' && !busy && !disabled,
      'bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2':
        type == 'secondary' && !busy && !disabled,
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100':
        type == 'plain' && !busy && !disabled,
      'bg-gray-300 border-gray-300 text-gray-600 px-5 h-12 border-2 opacity-50':
        type == 'primary' && (busy || disabled),
      'bg-white-1000 border-gray-300 text-gray-300 px-5 h-12 border-2 opacity-50':
        type == 'secondary' && (busy || disabled),
      'shadow-std text-center rounded-full text-sm text-gray-200 font-medium mx-auto inset-x-0 p-2 opacity-50':
        type == 'plain' && (busy || disabled),
    }"
    :disabled="disabled || busy"
  >
    <span v-if="!busy"><slot></slot></span>

    <div v-else class="flex items-center justify-center">
      <IgntLoadingIcon />
    </div>
  </button>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import IgntLoadingIcon from "./icons/IgntLoadingIcon.vue";

defineProps({
  busy: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  link: {
    type: String as PropType<string>,
  },
  href: {
    type: String as PropType<string>,
  },
  target: {
    type: String as PropType<string>,
  },
  type: {
    type: String as PropType<string>,
    default: () => "primary",
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
</script>
