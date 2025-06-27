<template>
  <div v-if="moduleAvailable" class="container mx-auto">
    <div class="flex justify-between pt-10 pb-4">
      <div class="font-bold text-4xl">{{ moduleNameNormalized }} items</div>
      <div class="col-6 text-align--right">
        <IgntButton
          type="primary"
          :disabled="!address"
          @click="visibleModal = 'create-item'"
        >
          Create {{ moduleNameNormalized }}
        </IgntButton>
      </div>
    </div>
    <Suspense>
      <IgntCrudRead
        :store-name="storeName"
        :item-name="moduleNameNormalized"
        :command-name="`query${moduleNameNormalized}All`"
        ref="reader"
        @createItem="visibleModal = 'create-item'"
        @editItem="
          (item) => {
            activeItem = item;
            visibleModal = 'edit-item';
          }
        "
        @deleteItem="
          (item) => {
            activeItem = item;
            visibleModal = 'delete-item';
          }
        "
      />
    </Suspense>
    <IgntCrudCreate
      v-if="visibleModal === 'create-item'"
      :store-name="storeName"
      :item-name="moduleNameNormalized"
      :command-name="`sendMsgCreate${moduleNameNormalized}`"
      @close="
        visibleModal = '';
        reader?.refetch();
      "
    />
    <IgntCrudUpdate
      v-if="visibleModal === 'edit-item'"
      :store-name="storeName"
      :item-name="moduleNameNormalized"
      :item-data="activeItem"
      :command-name="`sendMsgUpdate${moduleNameNormalized}`"
      @close="
        visibleModal = '';
        reader?.refetch();
      "
    />
    <IgntCrudDelete
      v-if="visibleModal === 'delete-item'"
      :store-name="storeName"
      :item-name="moduleNameNormalized"
      :item-data="activeItem"
      :command-name="`sendMsgDelete${moduleNameNormalized}`"
      @close="
        visibleModal = '';
        reader?.refetch();
      "
    />
  </div>
</template>

<script setup lang="ts">
import { IgntButton } from "@ignt/vue-library";
import { computed, reactive, ref, toRefs } from "vue";

import { useClient } from "@/composables/useClient";
import { useAddress } from "@/def-composables/useAddress";

import IgntCrudCreate from "./IgntCrudCreate.vue";
import IgntCrudDelete from "./IgntCrudDelete.vue";
import IgntCrudRead from "./IgntCrudRead.vue";
import IgntCrudUpdate from "./IgntCrudUpdate.vue";

export interface State {
  visibleModal: string;
  activeItem: any;
  moduleAvailable: boolean;
}

const initialState: State = {
  visibleModal: "",
  activeItem: {},
  moduleAvailable: false,
};
const reader = ref<any>(null);
const props = defineProps({
  storeName: {
    type: String,
    required: true,
  },

  itemName: {
    type: String,
    required: true,
  },
});

// composables
const { address } = useAddress();
const client = useClient();
// state
const state: State = reactive(initialState);

// computed
const moduleNameNormalized = computed(() =>
  props.itemName.replace(/^\w/, (c) => c.toUpperCase())
);

state.moduleAvailable = !!(client as any)[props.storeName];
const { activeItem, moduleAvailable, visibleModal } = toRefs(state);
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
