<template>
  <transition name="modal-fade">
    <div
      v-if="visible"
      class="fixed inset-0 flex justify-center items-center bg-gray-330 z-50"
      @click="emit('close')"
    >
      <div
        class="shadow-std relative max-h-screen"
        role="dialog"
        tabindex="0"
        @click.stop
      >
        <IgntCard class="px-6 py-4 max-h-screen overflow-y-auto scroll-smooth">
          <template #header>
            <slot name="header">
              <h3 class="text-center text-2xl font-semibold my-4 mb-6">
                {{ title || "Default title" }}
              </h3>
            </slot>
          </template>

          <template #default>
            <slot name="body"></slot>
          </template>

          <template #footer>
            <slot name="footer">
              <div class="flex flex-col">
                <IgntButton
                  v-if="submitButton"
                  aria-label="Submit"
                  class="mb-2"
                  type="primary"
                  @click="emit('submit')"
                >
                  Save changes
                </IgntButton>
                <IgntButton
                  v-if="cancelButton"
                  aria-label="Close modal"
                  type="secondary"
                  @click="emit('close')"
                >
                  Cancel
                </IgntButton>
              </div>
            </slot>
          </template>
        </IgntCard>

        <IgntTimesIcon
          v-if="closeIcon"
          class="absolute right-8 top-10 cursor-pointer"
          @click="emit('close')"
        >
          Close
        </IgntTimesIcon>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import IgntButton from "./IgntButton.vue";
import { watch } from "vue";
import IgntTimesIcon from "./icons/IgntTimesIcon.vue";
import IgntCard from "./IgntCard.vue";
const emit = defineEmits(["close", "submit"]);
const props = defineProps({
  visible: {
    type: Boolean,
    defaultsTo: false,
  },
  title: {
    type: String,
    defaultsTo: null,
  },
  submitButton: {
    type: Boolean,
    defaultsTo: true,
  },
  closeIcon: {
    type: Boolean,
    defaultsTo: true,
  },
  cancelButton: {
    type: Boolean,
    defaultsTo: true,
  },
});
const escapeHandler = (evt: { key: string }) => {
  if (evt.key === "Escape") emit("close");
};
watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      document.addEventListener("keyup", escapeHandler);
    } else {
      document.removeEventListener("keyup", escapeHandler);
    }
  }
);
</script>
