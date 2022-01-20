<template>
  <div class="container">

    <SpSpacer size="md" />

    <div style="display: flex; justify-content: space-between">
      <SpTypography
          modifier="highlight"
          size="md"
          style="font-weight: 700"
      >
        Post items
      </SpTypography>
      <SpButton
          aria-label="Create post"
          type="primary"
          @click="visibleModal = 'create-post'"
      >
        Create post
      </SpButton>
    </div>

    <SpSpacer size="sm" />
    <SpCrudRead
      :storeName="storeName"
      :itemName="itemName"
      @createPost="visibleModal = 'create-post'"
      @editPost="visibleModal = 'edit-post'"
      @deletePost="visibleModal = 'delete-post'"
    />

    <SpCrudCreate
      v-if="visibleModal === 'create-post'"
      @close="visibleModal = ''"
    />
    <SpCrudUpdate
      v-if="visibleModal === 'edit-post'"
      @close="visibleModal = ''"
    />
    <SpCrudDelete
      v-if="visibleModal === 'delete-post'"
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
import { ref, defineComponent } from 'vue'


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

    return {
      visibleModal,
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
