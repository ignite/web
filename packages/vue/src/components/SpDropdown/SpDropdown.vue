<template>
  <div style="position: relative">
    <div ref="buttonEl" class="dropdown-button" @click="visible = true">
      <slot name="button" />
    </div>
    <transition name="dropdown-fade">
      <div v-if="visible" class="dropdown-dropdown">
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'SpDropdown',

  components: {},

  props: {},

  setup() {
    let visible = ref(false)
    let buttonEl = ref(null)

    const clickOutsideHandler = (evt) => {
      if (!buttonEl.value?.contains(evt.target)) {
        visible.value = false
      }
    }

    onMounted(() => {
      document.addEventListener('click', clickOutsideHandler)
    })
    onBeforeUnmount(() => {
      document.removeEventListener('click', clickOutsideHandler)
    })

    return {
      visible,
      buttonEl
    }
  }
})
</script>

<style>
.dropdown-dropdown {
  position: absolute;
  box-sizing: border-box;
  top: 48px;
  left: 8px;
  z-index: 90;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 40px 64px 128px -8px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  padding: 16px 24px;
}

.dropdown-button {
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.dropdown-fade-enter,
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
