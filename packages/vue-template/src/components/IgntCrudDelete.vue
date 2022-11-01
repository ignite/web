<template>
  <IgntModal
    :visible="true"
    :closeIcon="true"
    @close="$emit('close')"
    @submit="$emit('close')"
  >
    <template v-slot:header>
      <div class="flex flex-col items-center w-96">
        <IgntTrashIcon class="my-6 text-[48px]" />
        <div class="text-2xl font-bold">Delete this item?</div>
      </div>
    </template>
    <template v-slot:body>
      <div class="text-center my-8">
        <div>This item will be deleted.</div>
        <div>You can’t undo this action.</div>
      </div>
      <div class="text-center my-8">
        <div class="flex justify-center gap-3">
          <IgntButton
            type="secondary"
            @click="$emit('close')"
            style="width: 40%"
          >
            Cancel
          </IgntButton>
          <IgntButton type="primary" @click="deleteItem" style="width: 40%">
            Delete
          </IgntButton>
        </div>
      </div>
    </template>
  </IgntModal>
</template>

<script setup lang="ts">
import { IgntButton } from "@ignt/vue-library";
import { IgntModal } from "@ignt/vue-library";
import { IgntTrashIcon } from "@ignt/vue-library";
import { useAddress } from "@/def-composables/useAddress";
import { useClient } from "@/composables/useClient";
const props = defineProps({
  storeName: {
    type: String,
    required: true,
  },

  itemName: {
    type: String,
    required: true,
  },

  itemData: {
    type: Object,
    required: true,
  },

  commandName: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["close"]);
const { address } = useAddress();

const client = useClient();

let deleteItem = async () => {
  await (
    client[
      props.storeName as keyof Omit<
        typeof client,
        | "plugins"
        | "env"
        | "signer"
        | "registry"
        | "plugin"
        | "signAndBroadcast"
        | "useSigner"
        | "useKeplr"
      >
    ] as any
  ).tx[props.commandName]({
    value: { creator: address.value, id: props.itemData.id },
  });
  emit("close");
};
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
