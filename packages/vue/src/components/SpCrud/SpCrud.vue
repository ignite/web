<template>
  <div v-if="moduleAvailable" class="container crud--position">
    <div class="row">
      <div class="col-6">
        <SpTypography modifier="highlight" size="md" style="font-weight: 700">
          {{ moduleNameNormalized }} items
        </SpTypography>
      </div>
      <div class="col-6 text-align--right">
        <SpButton
          type="primary"
          :disabled="!address"
          @click="visibleModal = 'create-item'"
        >
          Create {{ moduleNameNormalized }}
        </SpButton>
      </div>
    </div>

    <SpCrudRead
      :store-name="storeName"
      :item-name="moduleNameNormalized"
      :command-name="`query${moduleNameNormalized}All`"
      :fields="fields"
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
      :item-name="moduleNameNormalized"
      :command-name="`sendMsgCreate${moduleNameNormalized}`"
      :fields="fields"
      @close="visibleModal = ''"
    />
    <SpCrudUpdate
      v-if="visibleModal === 'edit-item'"
      :store-name="storeName"
      :item-name="moduleNameNormalized"
      :item-data="activeItem"
      :command-name="`sendMsgUpdate${moduleNameNormalized}`"
      :fields="fields"
      @close="visibleModal = ''"
    />
    <SpCrudDelete
      v-if="visibleModal === 'delete-item'"
      :store-name="storeName"
      :item-name="moduleNameNormalized"
      :item-data="activeItem"
      :command-name="`sendMsgDelete${moduleNameNormalized}`"
      @close="visibleModal = ''"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  reactive,
  ref,
  toRefs
} from 'vue'

import { useAddress } from '../../composables'
import SpButton from '../SpButton'
import SpCrudCreate from '../SpCrudCreate'
import SpCrudDelete from '../SpCrudDelete'
import SpCrudRead from '../SpCrudRead'
import SpCrudUpdate from '../SpCrudUpdate'
import SpTypography from '../SpTypography'
import { useGaia } from 'cosmos-gaia-vue-client'

export interface State {
  visibleModal: string
  activeItem: any
  moduleAvailable: boolean
}

export let initialState: State = {
  visibleModal: '',
  activeItem: {},
  moduleAvailable: false
}
export default defineComponent({
  name: 'SpCrud',

  components: {
    SpTypography,
    SpButton,
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
    // gaia
    let { gaia } = useGaia()

    // composables
    let { address } = useAddress()

    // computed
    let moduleNameNormalized = computed(() =>
      props.itemName.replace(/^\w/, (c) => c.toUpperCase())
    )

    // state
    let storeNameCamelCased = props.storeName
      .charAt(0)
      .toUpperCase()
      .concat(props.storeName.slice(1))
      .split('.')
      .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1))
    let m = gaia[storeNameCamelCased].value
    let items = ref([])
    let fields = ref<Array<string>>([])
    let state: State = reactive({ ...initialState, moduleAvailable: !!m })

    // lh
    onBeforeMount(async () => {
      if (state.moduleAvailable) {
        items.value = (
          await m[`query${moduleNameNormalized.value}All`]()
        )?.data[props.itemName]
        fields.value = Object.keys(items.value[0])
      }
    })

    return {
      ...toRefs(state),
      fields,
      address,
      moduleNameNormalized
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
