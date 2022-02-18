<template>

  <div v-if="moduleAvailable" class="container crud--position">
    <div class="row">
      <div class="col-6">
        <SpTypography modifier="highlight" size="md" style="font-weight: 700">
          {{ moduleName }} items
        </SpTypography>
      </div>
      <div class="col-6 text-align--right">
        <SpButton type="primary" @click="visibleModal = 'create-item'">
          Create post
        </SpButton>
      </div>
    </div>

    <SpCrudRead
      :store-name="storeName"
      :item-name="moduleName"
      :command-name="`/Query${moduleName}All`"
      @createItem="visibleModal = 'create-item'"
      @editItem="
        (item) => {
          activeItem = item
          visibleModal = 'edit-item'
        }
      "
      @deleteItem="
        (item) => {
          activeItem = item
          visibleModal = 'delete-item'
        }
      "
    />

    <SpCrudCreate
      v-if="visibleModal === 'create-item'"
      :store-name="storeName"
      :item-name="moduleName"
      :command-name="`/sendMsgCreate${moduleName}`"
      @close="visibleModal = ''"
    />
    <SpCrudUpdate
      v-if="visibleModal === 'edit-item'"
      :store-name="storeName"
      :item-name="moduleName"
      :item-data="activeItem"
      :command-name="`/sendMsgUpdate${moduleName}`"
      @close="visibleModal = ''"
    />
    <SpCrudDelete
      v-if="visibleModal === 'delete-item'"
      :store-name="storeName"
      :item-name="moduleName"
      :item-data="activeItem"
      :command-name="`/sendMsgDelete${moduleName}`"
      @close="visibleModal = ''"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
import { useStore } from 'vuex'

import SpButton from '../SpButton'
import SpCrudCreate from '../SpCrudCreate'
import SpCrudDelete from '../SpCrudDelete'
import SpCrudRead from '../SpCrudRead'
import SpCrudUpdate from '../SpCrudUpdate'
import SpDropdown from '../SpDropdown'
import SpModal from '../SpModal'
import SpSpacer from '../SpSpacer'
import SpTypography from '../SpTypography'

export interface State {
  visibleModal: string
  activeItem: any
  moduleAvailable: boolean
}

export let initialState: State = {
  visibleModal: '',
  activeItem: {},
  moduleAvailable: true
}

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
    }
  },

  setup(props) {
    // store
    let $s = useStore()

    // state
    let state: State = reactive(initialState)
    let moduleName = computed (() =>
      props.itemName.replace(/^\w/, (c) => c.toUpperCase())
    )

    console.log(moduleName.value)

    state.moduleAvailable = $s.hasModule(props.storeName)

    return {
      ...toRefs(state),
      moduleName
    }
  }
})
</script>

<style scoped lang="scss">
.crud {
  &--position {
    margin-top: 48px;
  }
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
}
</style>
