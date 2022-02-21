<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-backdrop" @click="$emit('close')">
      <div
        class="modal sp-box sp-shadow"
        role="dialog"
        tabindex="0"
        @click.stop
      >
        <header id="modalTitle" class="modal-header">
          <slot name="header">
            <h3>{{ title || 'Default title' }}</h3>
          </slot>
        </header>

        <section id="modalDescription" class="modal-body">
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
              Save changes
            </SpButton>
            <SpButton
              v-if="cancelButton"
              aria-label="Close modal"
              type="secondary"
              @click="$emit('close')"
            >
              Cancel
            </SpButton>
          </slot>
        </footer>

        <SpTimesIcon
          v-if="closeIcon"
          style="position: absolute; top: 26px; right: 20px; cursor: pointer"
          @click="$emit('close')"
        >
          Close
        </SpTimesIcon>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue'

import SpButton from '../SpButton'
import SpTimesIcon from '../SpTimesIcon'

export default defineComponent({
  name: 'SpModal',

  components: { SpButton, SpTimesIcon },

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

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.33);
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
  min-width: 416px;
  min-height: 300px;
  padding: 32px;
}

.modal-header,
.modal-footer {
  display: flex;
  flex-direction: column;
}

.modal-header {
  h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 133%;
    /* identical to box height, or 28px */

    text-align: center;
    letter-spacing: -0.007em;

    /* light/text */

    color: #000000;
  }
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

.sp-button {
  &.sp-button-secondary {
    border: 0;
    color: #000;
  }
}
</style>
