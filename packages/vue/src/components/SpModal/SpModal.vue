<template>
  <div v-if="visible" class="modal-backdrop" @click="$emit('close')">
    <div class="modal sp-box sp-shadow" role="dialog" @click.stop tabindex="0">
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
          <button
            v-if="submitButton"
            aria-label="Submit"
            @click="$emit('submit')"
          >
            Submit
          </button>
          <button
            v-if="cancelButton"
            aria-label="Close modal"
            @click="$emit('close')"
          >
            Close
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SpModal',

  props: {
    visible: {
      type: Boolean,
      defaultsTo: true
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
  }
}
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
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 400px;
  min-height: 300px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  justify-content: center;
}

.modal-footer {
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  min-height: 70px;
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

.modal-fade-enter,
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
