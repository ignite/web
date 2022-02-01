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
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'

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
      buttonEl,
    }
  }
})
</script>

<style>
.dropdown-dropdown {
  position: absolute;
  box-sizing: border-box;
  top: 2rem;
  right: 0;
  z-index: 90;
  overflow: hidden;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
  border-radius: 10px;
}

.dropdown-button {
  cursor: pointer;
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
