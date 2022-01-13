<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-backdrop" @click="$emit('close')">
      <div
        class="modal sp-box sp-shadow"
        role="dialog"
        @click.stop
        tabindex="0"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h3>{{ title || 'Default title' }}</h3>
          </slot>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body"> Default body </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <SpButton
              v-if="submitButton"
              aria-label="Submit"
              type="primary"
              @click="$emit('submit')"
            >
              Submit
            </SpButton>
            <SpButton
              v-if="cancelButton"
              aria-label="Close modal"
              type="secondary"
              @click="$emit('close')"
            >
              Close
            </SpButton>
          </slot>
        </footer>

        <SpTimes
          v-if="closeIcon"
          style="position: absolute; top: 26px; right: 20px; cursor: pointer"
          @click="$emit('close')"
        >
          Close
        </SpTimes>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue'

import SpButton from '../SpButton'
import SpTimes from '../SpTimes'

export default defineComponent({
  name: 'SpModal',

  components: { SpButton, SpTimes },

  props: {
    visible: {
      type: Boolean,
      defaultsTo: false
    },
    title: {
      type: String,
      defaultsTo: null
    },
    submitButton: {
      type: Boolean,
      defaultsTo: true
    },
    closeIcon: {
      type: Boolean,
      defaultsTo: true
    },
    cancelButton: {
      type: Boolean,
      defaultsTo: true
    }
  },
  watch: {
    visible: function (newVal) {
      if (newVal) {
        document.addEventListener('keyup', this.escapeHandler)
      } else {
        document.removeEventListener('keyup', this.escapeHandler)
      }
    }
  },
  methods: {
    escapeHandler(evt) {
      if (evt.key === 'Escape') this.$emit('close')
    }
  }
})
</script>

<style>
.modal-backdrop {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  box-sizing: border-box;
  position: relative;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 400px;
  min-height: 300px;
}

.modal-header,
.modal-footer {
  display: flex;
  flex-direction: column;
}
.modal-body {
  position: relative;
  padding: 10px 0;
}

@media (max-width: 600px) {
  .modal-backdrop {
    background-color: white;
  }
  .modal {
    box-shadow: none !important;
  }
}

.close-icon {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  background: transparent;
}

.modal-fade-enter-active {
}
</style>
