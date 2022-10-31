<template>
  <IgntModal
    :visible="true"
    :title="`Edit ${itemName.toLowerCase()}`"
    :close-icon="true"
    :submit-button="true"
    :cancel-button="true"
    style="text-align: center"
    @close="$emit('close')"
    @submit="editItem"
  >
    <template #body>
      <div class="flex flex-col text-left w-96">
        <div v-for="field in itemFieldsFiltered" :key="'field_' + field">
          <label :for="`p${field.name}`" class="text-sm capitalize">
            {{ field.name }}
          </label>
          <input
            :id="`p${field.name}`"
            v-model="formData[field.name]"
            :placeholder="`Enter ${field.name}`"
            type="text"
            :name="`p${field.name}`"
            class="mt-1 py-3 px-4 mb-6 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0"
          />
        </div>
      </div>
    </template>
  </IgntModal>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { IgntModal } from "@ignt/vue-library";
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
let formData = reactive<any>({ ...props.itemData });

// computed
let itemFields = (
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

let itemFieldsFiltered = computed(() =>
  itemFields.fields.filter((f: any) => f.name !== "id" && f.name !== "creator")
);
let creator = address.value;

let editItem = async () => {
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
    value: { ...formData, creator, id: props.itemData.id },
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
  border: 0;
}

.capitalize-first-letter:first-letter {
  text-transform: uppercase;
}
</style>
