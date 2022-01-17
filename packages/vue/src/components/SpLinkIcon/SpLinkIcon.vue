<template>
  <div class="sp-link-icon">
    <a
      class="sp-link-icon-wrapper"
      v-if="href"
      :alt="text"
      :title="text"
      :href="href"
      :target="target"
    >
      <div class="sp-link-icon__icon">
        <span class="sp-icon" :class="'sp-icon-' + icon" v-if="icon" />
      </div>
      <div class="sp-link-icon__text">
        {{ text }}
      </div>
    </a>
    <a class="sp-link-icon-wrapper" v-else :alt="text" :title="text">
      <div class="sp-link-icon__icon">
        <span class="sp-icon" :class="'sp-icon-' + icon" v-if="icon" />
      </div>
      <div class="sp-link-icon__text">
        {{ text }}
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'SpLinkIcon',
  props: {
    link: {
      type: String as PropType<string>
    },
    href: {
      type: String as PropType<string>
    },
    target: {
      type: String as PropType<string>
    },
    icon: {
      type: String as PropType<string>
    },
    text: {
      type: String as PropType<string>,
      required: true
    }
  }
})
</script>
