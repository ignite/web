<template>
  <IgntModal
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
      <div class="my-4" />
      <div v-for="field in itemFieldsFiltered" :key="'field_' + field">
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
        <div class="my-4" />
      </div>
    </template>
  </IgntModal>
</template>

<script setup lang="ts">
import { IgntModal } from "@ignt/vue-library";
import { computed, reactive } from "vue";

import { useClient } from "@/composables/useClient";
import { useAddress } from "@/def-composables/useAddress";

const props = defineProps({
  storeName: {
    type: String,
    required: true,
  },

  itemName: {
    type: String,
    required: true,
  },

  commandName: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["close"]);
const formData = reactive<any>({});
const { address } = useAddress();
const client = useClient();
// computed
const itemFields = (
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
).structure[props.itemName];

const itemFieldsFiltered = computed(() =>
  itemFields.fields.filter((f: any) => f.name !== "id" && f.name !== "creator")
);
const creator = address.value;

const submitItem = async () => {
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
    value: { ...formData, creator },
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
