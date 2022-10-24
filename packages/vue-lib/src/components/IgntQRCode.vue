<template>
  <canvas ref="canvas" class="qr-code" />
</template>

<script setup lang="ts">
import { toCanvas } from "qrcode";
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 100,
  },
  background: {
    type: String,
    default: "#0000", // Transparent
  },
  color: {
    type: String,
    default: "#000000ff",
  },
});
// state
const canvas = ref(null);

// methods
const generate = () => {
  const options = {
    margin: 0,
    width: props.width,
    color: {
      dark: props.color,
      light: props.background,
    },
  };

  toCanvas(canvas.value, props.value, options);
};

// lh
onMounted(generate);

// watch
watch(props, generate);
</script>

<style scoped lang="scss"></style>
