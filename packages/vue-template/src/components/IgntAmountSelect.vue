<template>
  <div class="flex flex-col">
    <div
      v-for="(x, i) in selected"
      :key="`${x.denom}-${i}`"
      class="flex justify-between items-center my-1 py-3 rounded-xl relative -mx-2 px-4"
    >
      <IgntDenom :denom="x.denom" modifier="avatar" class="z-10" />
      <div class="flex flex-col justify-between ml-4 z-10">
        <div class="font-semibold">
          <IgntDenom :denom="x.denom" />
        </div>

        <div
          class="text-xs"
          :class="{
            error: !hasEnoughBalance(x, x.amount),
          }"
        >
          {{ getBalanceAmount(x) }} available
        </div>
      </div>

      <div class="flex-1 w-full h-full">
        <IgntAmountInput
          class="absolute w-full left-0 text-right h-full top-0 outline-0 focus:bg-gray-100 text-3xl font-medium rounded-lg px-4"
          @update="(amount: string) => handleAmountInput(amount, x)"
        />

        <div class="focus-background"></div>
      </div>
    </div>

    <div
      v-if="ableToBeSelected.length > 0"
      class="flex items-center text-xs font-medium text-gray-600 mt-2 px-2"
      @click="
        () => {
          state.modalOpen = true;
        }
      "
    >
      <IgntAddIcon />
      <div class="ml-3 mt-0.5">Add asset</div>
    </div>

    <IgntModal
      :visible="state.modalOpen"
      :close-icon="true"
      :title="'Select asset'"
      @close="state.modalOpen = false"
    >
      <template #body>
        <div class="relative mb-4">
          <IgntSearchIcon class="absolute py-3 h-12 mt-2 left-3" />
          <input
            v-model="state.tokenSearch"
            class="mt-1 py-3 px-4 pl-8 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0"
            placeholder="Search assets"
          />
        </div>
        <div class="relative">
          <div
            v-for="(x, i) in ableToBeSelected"
            :key="'balance_select_' + x.denom"
            class="flex justify-start w-full items-center my-1 py-3 rounded-xl hover:bg-gray-100 px-2"
            :index="i"
            @click="
              () => {
                handleTokenSelect(x);
              }
            "
          >
            <IgntDenom :denom="x.denom" modifier="avatar" />

            <div class="flex flex-col justify-between ml-4">
              <div class="font-semibold">
                <IgntDenom :denom="x.denom" :shorten="false" />
              </div>

              <div class="text-xs">{{ parseAmount(x.amount) }} available</div>
            </div>
          </div>
        </div>
      </template>
    </IgntModal>
  </div>
</template>

<script setup lang="ts">
import { useDenom } from "@/def-composables/useDenom";
import type { Amount } from "@/utils/interfaces";
import BigNumber from "bignumber.js";
import { computed, type PropType, reactive } from "vue";

import IgntDenom from "./IgntDenom.vue";
import { IgntModal } from "@ignt/vue-library";
import { IgntSearchIcon } from "@ignt/vue-library";
import { IgntAddIcon } from "@ignt/vue-library";
import { IgntAmountInput } from "@ignt/vue-library";

export interface State {
  tokenSearch: string;
  modalOpen: boolean;
}

const initialState: State = {
  tokenSearch: "",
  modalOpen: false,
};

const emit = defineEmits(["update"]);

const props = defineProps({
  selected: {
    type: Array as PropType<Array<Amount>>,
  },
  balances: {
    type: Array as PropType<Array<Amount>>,
  },
});

// state
let state: State = reactive(initialState);

// computed
let ableToBeSelected = computed(() => {
  const notSelected = (x: Amount) =>
    (props.selected as Array<Amount>).every((y: Amount) => {
      return x.denom !== y.denom;
    });

  const searchFilter = (x: Amount) => {
    const base = useDenom(x.denom).normalized.value;
    if (base.toLowerCase().includes(state.tokenSearch.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };
  return props.balances?.filter(notSelected).filter(searchFilter) ?? [];
});

// methods
let findAsset = (x: Amount, y: Amount): boolean => x.denom === y.denom;
let parseAmount = (amount: string): BigNumber => {
  return amount == "" ? new BigNumber(0) : new BigNumber(amount);
};
let handleAmountInput = (amount: string, x: Amount) => {
  let amountAsBigNumber = new BigNumber(amount);

  let newSelected: Array<Amount> = [...(props.selected ?? [])];

  let index = newSelected.findIndex((y: Amount) => findAsset(x, y));

  newSelected[index].amount = amountAsBigNumber.toString();

  emit("update", { selected: newSelected });
};
let handleTokenSelect = (x: Amount) => {
  let newSelected: Array<Amount> = [
    ...(props.selected ?? []),
    {
      amount: "",
      denom: x.denom,
    },
  ];

  emit("update", { selected: newSelected });

  state.modalOpen = false;
};
let getBalanceAmount = (x: Amount): string =>
  props.balances?.find((y) => findAsset(x, y))?.amount ?? "";
let hasEnoughBalance = (x: Amount, amountDesired: string) =>
  parseAmount(getBalanceAmount(x)).gte(parseAmount(amountDesired));
</script>
