<template>
  <canvas ref="canvas" class="qr-code">
    <slot />
  </canvas>
</template>

<script lang="ts">
import { toCanvas } from 'qrcode'
import { defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({
  name: 'SpQrCode',

  props: {
    value: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 100
    },
    background: {
      type: String,
      default: '#0000' // Transparent
    },
    color: {
      type: String,
      default: '#000000ff'
    }
  },

  setup(props: any) {
    // state
    let canvas = ref(null)

    // methods
    let generate = () => {
      const options = {
        margin: 0,
        width: props.width,
        color: {
          dark: props.color,
          light: props.background
        }
      }

      toCanvas(canvas.value, props.value, options)
    }

    // lh
    onMounted(generate)

    // watch
    watch(props, generate)

    return { canvas }
  }
})
</script>

<style scoped lang="scss"></style>
