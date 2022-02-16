<template>
  <div :class='["sp-system-bar", classObject]'>
    <span class='sp-system-bar__icon'>
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1442_621)">
          <path d="M8.5 15.5C12.6421 15.5 16 12.1421 16 8C16 3.85786 12.6421 0.5 8.5 0.5C4.35786 0.5 1 3.85786 1 8C1 12.1421 4.35786 15.5 8.5 15.5Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.19727 13.3028L13.8033 2.69678" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_1442_621">
            <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
          </clipPath>
        </defs>
      </svg>
    </span>
    <span class='sp-system-bar__msg'>
      Account number must be 1 or higher to send transactions. Account number 0 is unable to send transactions as identified in issue.
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

import { useAccount } from '../../composables'

export default defineComponent({
  name: 'SpSystemBar',

  async setup() {
    let $s = useStore()
    let { acc } = await useAccount({$s})

    const classObject = reactive({
      'sp-system-bar--warning': true
    })

    return { acc, classObject }
  }
})
</script>

<style scoped lang="scss">
.sp-system-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: #000000;
  height: 36px;

  font-family: Inter, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 153.8%;

  &--warning {
    background: #FC8C0B;
  }

  &__icon {
    display: flex;
    margin-right: 12px;
  }
}
</style>
