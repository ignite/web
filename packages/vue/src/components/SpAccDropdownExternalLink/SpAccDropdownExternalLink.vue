<template>
  <a class="dropdown-option mb-3" :href='link' :target='target'>
    <span v-text='title'></span>
    <SpExternalArrowIcon v-if='hasIcon' />
  </a>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'

import SpExternalArrowIcon from '../SpExternalArrow'

export default defineComponent({
  name: 'SpAccDropdownExternalLink',

  components: {
    SpExternalArrowIcon,
  },

  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    target: {
      type: String,
      default: '_blank'
    },
    hasIcon: {
      type: Boolean,
      default: true
    },
  },
})
</script>

<style lang='scss' scoped>
.dropdown-option {
  color: #111111;
  text-decoration: none;
}
</style>
