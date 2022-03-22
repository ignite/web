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
      <div v-for="f in itemFieldsFiltered">
        <label :for="`p${f}`" class="sp-label capitalize-first-letter">
          {{ f }}
        </label>
        <input
          :id="`p${f}`"
          v-model="formData[f as string]"
          :placeholder="`Enter ${f}`"
          type="text"
          :name="`p${f}`"
          class="sp-input"
        />
        <SpSpacer size="xs" />
      </div>
    </template>
  </SpModal>
</template>

<script lang="ts">
import { useIgnite } from '../../composables'
import { computed, defineComponent, onBeforeMount, reactive, ref } from 'vue'

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
    },

    fields: {
      type: Array,
      required: true
    }
  },

  setup(props, { emit }) {
    // ignite
    let { ignite } = useIgnite()

    // state
    let formData = reactive({})
    let creator = ignite.value?.addr
    let storeNameCamelCased = props.storeName
      .charAt(0)
      .toUpperCase()
      .concat(props.storeName.slice(1))
      .split('.')
      .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1))
    let m = ignite.value?.[storeNameCamelCased]

    // computed
    let itemFieldsFiltered = computed(() =>
      props.fields.filter((f) => f !== 'id' && f !== 'creator')
    )

    // methods
    let submitItem = async () => {
      m[props.commandName]({
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
