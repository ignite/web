<template>
  <div class="clipboard">
    <SpButton @click="() => copy(text)">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1.33325H1.33331V11.9999H12V1.33325Z"
          stroke="#094EFD"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.7273 4H14.6667V14.6667H4V12.7273"
          stroke="#094EFD"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SpButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import useClipboard from '../../composables/useClipboard'
import SpButton from '../SpButton'

export default defineComponent({
  name: 'SpClipboard',

  components: {
    SpButton
  },

  props: {
    text: {
      type: String,
      default: ''
    }
  },

  setup() {
    let { copy } = useClipboard()

    return { copy }
  }
})
</script>

<style lang="scss" scoped>
.clipboard {
  display: flex;
  justify-content: end;

  > .sp-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
    width: 40px;
    height: 40px;

    background: #ffffff;
    box-shadow: 3px 9px 32px -4px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    border: 0;
  }
  &::v-deep(.sp-button__text) {
    display: flex;
  }
}
</style>
