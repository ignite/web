<template>
  <router-link
    :to="link"
    v-if="link"
    class="font-normal text-md rounded-lg"
    :class="{
      'bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2':
        type == 'primary' && !busy,
      'bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2':
        type == 'secondary' && !busy,
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100':
        type == 'plain' && !busy,
      'bg-black border-black text-white-1000 px-5 h-12 border-2 opacity-50':
        type == 'primary' && busy,
      'bg-white-1000 border-black text-black px-5 h-12 border-2 opacity-50':
        type == 'secondary' && busy,
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 opacity-50':
        type == 'plain' && busy,
    }"
    :disabled="disabled || busy"
  >
    <span v-if="!busy"><slot></slot></span>
    <div v-else>
      {{ dots }}
    </div>
  </router-link>
  <a
    :href="href"
    v-else-if="href"
    class="font-normal text-md rounded-lg"
    :class="{
      'bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2':
        type == 'primary' && !busy,
      'bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2':
        type == 'secondary' && !busy,
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100':
        type == 'plain' && !busy,
      'bg-black border-black text-white-1000 px-5 h-12 border-2 opacity-50':
        type == 'primary' && busy,
      'bg-white-1000 border-black text-black px-5 h-12 border-2 opacity-50':
        type == 'secondary' && busy,
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 opacity-50':
        type == 'plain' && busy,
    }"
    :disabled="disabled || busy"
    :target="target"
  >
    <span v-if="!busy"><slot></slot></span>
    <div v-else>
      {{ dots }}
    </div>
  </a>
  <button
    type="button"
    v-else
    class="font-normal text-md rounded-lg"
    :class="{
      'bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2':
        type == 'primary' && !busy,
      'bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2':
        type == 'secondary' && !busy,
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100':
        type == 'plain' && !busy,
      'bg-black border-black text-white-1000 px-5 h-12 border-2 opacity-50':
        type == 'primary' && busy,
      'bg-white-1000 border-black text-black px-5 h-12 border-2 opacity-50':
        type == 'secondary' && busy,
      'shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 opacity-50':
        type == 'plain' && busy,
    }"
    :disabled="disabled || busy"
  >
    <span v-if="!busy"><slot></slot></span>
    <div v-else>
      {{ dots }}
    </div>
  </button>
</template>
<script setup lang="ts">
import { ref, type PropType } from "vue";

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
const dots = ref("");
const waiting = () => {
  if (dots.value == "...") {
    dots.value = "";
  } else {
    dots.value += ".";
  }
  setTimeout(waiting, 750);
};
waiting();
</script>
