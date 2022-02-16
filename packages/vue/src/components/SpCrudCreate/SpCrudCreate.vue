<template>
  <SpModal
    :visible="true"
    :title="`Create ${itemName}`"
    :close-icon="true"
    :submit-button="true"
    :cancel-button="true"
    style="text-align: center"
    @close="$emit('close')"
    @submit="submitItem"
  >
    <template #body>
      <SpSpacer size="sm" />
      <div v-for="field in itemFieldsFiltered">
        <label :for="`p${field.name}`" class="sp-label capitalize-first-letter">
          {{ field.name }}
        </label>
        <input
          :id="`p${field.name}`"
          v-model="formData[field.name]"
          :placeholder="`Enter ${field.name}`"
          type="text"
          :name="`p${field.name}`"
          class="sp-input"
        />
        <SpSpacer size="xs" />
      </div>
    </template>
  </SpModal>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

import SpButton from '../SpButton'
import SpDropdown from '../SpDropdown'
import SpModal from '../SpModal'
import SpSpacer from '../SpSpacer'
import SpTypography from '../SpTypography'

export default defineComponent({
  name: 'SpCrudCreate',

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

    commandName: {
      type: String,
      required: true
    }
  },

  setup(props, { emit }) {
    // store
    let $s = useStore()
    let formData = reactive({})

    // computed
    let itemFields = computed(() =>
      $s.getters[props.storeName + '/getTypeStructure'](props.itemName)
    )
    let itemFieldsFiltered = computed(() =>
      itemFields.value.filter((f) => f.name !== 'id' && f.name !== 'creator')
    )
    let creator = $s.getters['common/wallet/address']

    let submitItem = async () => {
      $s.dispatch(props.storeName + props.commandName, {
        value: { ...formData, creator }
      })
      emit('close')
    }

    return {
      itemFieldsFiltered,
      formData,
      submitItem
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

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 153.8%;
  /* identical to box height, or 20px */

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
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
  border: 0;
}

.capitalize-first-letter:first-letter {
  text-transform: uppercase;
}
</style>
