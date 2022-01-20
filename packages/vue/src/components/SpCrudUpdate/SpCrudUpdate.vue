<template>
  <SpModal
    :visible="true"
    title="Edit post"
    :closeIcon="true"
    :submitButton="true"
    :cancelButton="true"
    @close="$emit('close')"
    @submit="$emit('close')"
    style="text-align: center"
  >
    <template v-slot:body>
      <SpSpacer size="sm" />
      <div
        v-for="field in itemStructure"
      >
        <label :for="`p${field.name}`" class="sp-label capitalize-first-letter">{{ field.name }}</label>
        <input :placeholder="`Enter ${field.name}`" type="text" :id="`p${field.name}`" :name="`p${field.name}`" class="sp-input">
        <SpSpacer size="xs" />
      </div>
    </template>
  </SpModal>
</template>

<script lang="ts">
import { SpSpacer, SpTypography, SpButton, SpDropdown, SpModal } from '../'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SpCrudUpdate',

  components: {
    SpSpacer,
    SpTypography,
    SpButton,
    SpDropdown,
    SpModal
  },

  props: {
    storeName: {
      type: String,
      required: true
    },

    itemName: {
      type: String,
      required: true
    },
  },

  setup(props) {
    // store
    let $s = useStore()

    // computed
    let itemStructure = computed(() => $s.getters[props.storeName + '/getTypeStructure'](props.itemName))

    return {
      itemStructure
    }
  }
})
</script>

<style scoped lang="scss">
.page-background {
  background: white;
}

.item-title {
  font-size: 13px;
  line-height: 153.8%;
  color: rgba(0, 0, 0, 0.667);
}

.item-value {
  font-size: 16px;
  line-height: 150%;
  color: #000000;
}

.dropdown-option {
  padding: 1rem 1.4rem;
}

.sp-label {
  display: block;
  text-align: left;
  width: 100%;
  margin: 0 4px;
}
.sp-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin: 4px 0px;
}

.capitalize-first-letter:first-letter {
  text-transform: uppercase;
}
</style>
