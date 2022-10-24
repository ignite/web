<template>
  <RouterLink
    :class="{ 'opacity-50': !isActive }"
    activeClass="opacity-100 font-medium"
    v-if="item.to"
    :to="item.to"
    >{{ item.label }}</RouterLink
  >
  <a v-else :href="item.href">{{ item.label }}</a>
</template>
<script setup lang="ts">
import { ref, watch, type PropType } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
type MenuItem = {
  label: string;
  to?: string;
  href?: string;
};
const props = defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    required: true,
  },
});
const item = ref(props.item);
const isActive = ref(false);
watch(
  () => router.currentRoute.value.path,
  () => {
    if (item.value.to && item.value.to === router.currentRoute.value.path) {
      isActive.value = true;
    } else {
      isActive.value = false;
    }
  }
);
</script>
