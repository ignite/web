<template>
  <input
    ref="inputRef"
    v-model="model"
    :placeholder="placeholder"
    type="text"
    inputmode="decimal"
    pattern="^[0-9]*[.,]?[0-9]*$"
    autocomplete="off"
    minlength="1"
    spellcheck="false"
  />
</template>
<script setup lang="ts">
import { computed, type PropType, ref } from "vue";
import BigNumber from "bignumber.js";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  maxDecimals: {
    type: Number as PropType<number>,
    default: 0,
  },
  placeholder: {
    type: String as PropType<string>,
    default: "0",
  },
});
const emit = defineEmits(["update"]);
let inputRef = ref(null);

let format = (value: string): string => {
  let newValue: string = value;

  // Replace commas
  newValue = newValue.replace(",", ".");

  // Disallow decimals if wished for
  newValue = props.maxDecimals > 0 ? newValue : newValue.replace(".", "");

  // Only numbers
  newValue = newValue.replace(/[^0-9.]/g, "");

  if (newValue.startsWith(".")) {
    newValue = "0" + newValue;
  }

  if (newValue.split("").filter((char) => char === ".").length > 1) {
    // Remove subsequent separators
    newValue = newValue.replace(/(?<=\..*)\./g, "");
  }

  let [integerDigits, fractionDigits] = newValue.split(".");

  if (fractionDigits?.length > props.maxDecimals) {
    newValue = `${integerDigits}.${fractionDigits.slice(0, props.maxDecimals)}`;
  }

  return newValue;
};

let model = computed({
  get: () => (props.modelValue || "").toString(),
  set: (value) => {
    if (!inputRef.value) {
      return;
    }

    let currentValue = value;

    while (parseFloat(currentValue) > Number.MAX_SAFE_INTEGER) {
      currentValue = currentValue.slice(0, -1);
    }

    let formatted = format(currentValue);

    emit("update", new BigNumber(formatted));

    let inputHTMLEl = inputRef.value as HTMLInputElement;

    inputHTMLEl.value = formatted;
  },
});
</script>
