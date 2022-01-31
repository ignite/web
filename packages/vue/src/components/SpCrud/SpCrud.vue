<template>
  <div class="container">

    <SpSpacer size="md" />

    <div style="display: flex; justify-content: space-between">
      <SpTypography
          modifier="highlight"
          size="md"
          style="font-weight: 700"
      >
        {{ itemName }} items
      </SpTypography>
      <SpButton
          type="primary"
          @click="visibleModal = 'create-item'"
      >
        Create {{ itemName }}
      </SpButton>
    </div>

    <SpSpacer size="sm" />
    <SpCrudRead
      :storeName="storeName"
      :itemName="itemName"
      :commandName="`/Query${itemName}All`"
      @createItem="visibleModal = 'create-item'"
      @editItem="(item) => { activeItem = item; visibleModal = 'edit-item' }"
      @deleteItem="(item) => { activeItem = item; visibleModal = 'delete-item' }"
    />

    <SpCrudCreate
      v-if="visibleModal === 'create-item'"
      :storeName="storeName"
      :itemName="itemName"
      :commandName="`/sendMsgCreate${itemName}`"
      @close="visibleModal = ''"
    />
    <SpCrudUpdate
      v-if="visibleModal === 'edit-item'"
      :storeName="storeName"
      :itemName="itemName"
      :itemData="activeItem"
      :commandName="`/sendMsgUpdate${itemName}`"
      @close="visibleModal = ''"
    />
    <SpCrudDelete
      v-if="visibleModal === 'delete-item'"
      :storeName="storeName"
      :itemName="itemName"
      :itemData="activeItem"
      :commandName="`/sendMsgDelete${itemName}`"
      @close="visibleModal = ''"
    />
  </div>
</template>

<script lang="ts">
import {
  SpSpacer,
  SpTypography,
  SpButton,
  SpDropdown,
  SpModal,
  SpCrudRead,
  SpCrudUpdate,
  SpCrudCreate,
  SpCrudDelete
} from '../'
import { ref, reactive, defineComponent } from 'vue'


export default defineComponent({
  name: 'SpCrud',

  components: {
    SpSpacer,
    SpTypography,
    SpButton,
    SpDropdown,
    SpModal,
    SpCrudRead,
    SpCrudUpdate,
    SpCrudCreate,
    SpCrudDelete
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

  setup() {
    // store
    let visibleModal = ref('')
    let activeItem = reactive({})

    return {
      visibleModal,
      activeItem,
    }
  }
})
</script>

<style scoped lang="scss">
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
