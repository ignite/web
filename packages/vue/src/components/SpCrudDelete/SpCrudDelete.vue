<template>
  <SpModal
    :visible="true"
    :closeIcon="true"
    @close="$emit('close')"
    @submit="$emit('close')"
    style="text-align: center"
  >
    <template v-slot:header>
      <SpSpacer size="sm" />
      <div style="text-align: center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H10H42"
            stroke="#D80228"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 12V8C16 6.93913 16.4214 5.92172 17.1716 5.17157C17.9217 4.42143 18.9391 4 20 4H28C29.0609 4 30.0783 4.42143 30.8284 5.17157C31.5786 5.92172 32 6.93913 32 8V12M38 12V40C38 41.0609 37.5786 42.0783 36.8284 42.8284C36.0783 43.5786 35.0609 44 34 44H14C12.9391 44 11.9217 43.5786 11.1716 42.8284C10.4214 42.0783 10 41.0609 10 40V12H38Z"
            stroke="#D80228"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 22V34"
            stroke="#D80228"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 22V34"
            stroke="#D80228"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <SpSpacer size="xs" />
      <SpTypography size="sm" modifier="highlight" style="font-weight: 700">
        Delete this item?
      </SpTypography>
    </template>
    <template v-slot:body>
      <SpSpacer size="sm" />
      <SpTypography size="md"> This item will be deleted. </SpTypography>
      <SpTypography size="md"> You can’t undo this action. </SpTypography>
      <SpSpacer size="md" />
      <div style="display: flex; gap: 10px; justify-content: center">
        <SpButton type="secondary" @click="$emit('close')" style="width: 40%">
          Cancel
        </SpButton>
        <SpButton type="primary" @click="deleteItem" style="width: 40%">
          Delete
        </SpButton>
      </div>
    </template>
  </SpModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import SpSpacer from '../SpSpacer'
import SpTypography from '../SpTypography'
import SpButton from '../SpButton'
import SpDropdown from '../SpDropdown'
import SpModal from '../SpModal'

export default defineComponent({
  name: 'SpCrudDelete',

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

    itemData: {
      type: Object,
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

    // computed
    let creator = $s.getters['common/wallet/address']

    let deleteItem = async () => {
      $s.dispatch(props.storeName + props.commandName, {
        value: { creator, id: props.itemData.id }
      })
      emit('close')
    }

    return {
      deleteItem
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
</style>
