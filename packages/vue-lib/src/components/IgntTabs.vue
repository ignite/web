<template>
  <div>
    <div :class="tabHeaderClasses">
      <a
        href="javascript:void(0)"
        :class="
          active != index
            ? [...tabLinkClasses, ...inactiveLinkClasses]
            : [...tabLinkClasses, ...activeLinkClasses]
        "
        v-for="(tab, index) in tabs"
        :key="index"
        @click="
          () => {
            setActive(index);
          }
        "
      >
        {{ tab.title }}
      </a>
    </div>
    <div class="tabsContent" :class="tabContentClasses" ref="tabElement">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Nullable } from "@/types/interfaces";
import { onMounted, ref, type PropType } from "vue";
import { useSlots } from "vue";

const slots = useSlots();

defineProps({
  tabHeaderClasses: Array as PropType<Array<string>>,
  tabLinkClasses: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  activeLinkClasses: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  inactiveLinkClasses: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
  tabContentClasses: Array as PropType<Array<string>>,
});
const tabs = ref([] as Array<{ title: string; content: unknown }>);
const tabElement = ref<Nullable<HTMLElement>>(null);
const active = ref(0);
const setActive = (slot: number) => {
  active.value = slot;
  Array.from(tabElement.value?.children ?? []).forEach((x) =>
    x.classList.remove("is-active")
  );
  tabElement.value?.children[slot].classList.add("is-active");
};
onMounted(() => {
  if (slots.default) {
    tabs.value = slots.default().map((el) => {
      return { title: el.props?.tabTitle, content: el };
    });
  }
  setActive(active.value);
});
</script>
<style>
.tabsContent > * {
  display: none;
}
.tabsContent > .is-active {
  display: block;
}
</style>
