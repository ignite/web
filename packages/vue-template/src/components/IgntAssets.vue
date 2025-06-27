<template>
  <section>
    <header class="flex items-center justify-between">
      <h2 class="text-3xl text-black font-semibold p-0 m-0 mb-2.5 flex-1">
        Assets
      </h2>
      <div
        v-if="balances.assets.length"
        class="flex items-center justify-end mb-2.5"
      >
        <div class="z-50">
          <IgntSearchIcon />
        </div>
        <input
          ref="searchInput"
          v-model="searchQuery"
          type="search"
          autocomplete="off"
          placeholder="Search assets"
          class="w-48 -ml-8 pl-10 pr-10 leading-12 h-12 appearance-none outline-none border-none rounded-xl focus:shadow-outline"
          @input="(evt: Event) => {
            resetDisplayLimit();
            return evt;
          }"
        />
        <div
          v-if="searchQuery"
          class="z-50 absolute mr-4"
          @click.prevent="resetSearch"
        >
          <IgntClearIcon />
        </div>
      </div>
    </header>
    <table class="table-auto w-full">
      <thead v-if="balances.assets.length">
        <tr>
          <td class="text-left text-xs text-black opacity-70">Asset</td>
          <td></td>
          <td class="text-right text-xs text-black opacity-70">
            Available balance
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(balance, index) in filteredBalanceList.slice(0, chosenDisplayLimit)"
          :key="index"
          class="py-2"
        >
          <td class="flex items-center py-5 font-semibold">
            <IgntDenom
              :denom="balance?.denom ?? ''"
              modifier="avatar"
              class="mr-6"
              :key="balance?.denom"
            />
            <IgntDenom :denom="balance?.denom ?? ''" :key="balance?.denom" />
          </td>
          <td>
            <IgntDenom
              :denom="balance?.denom ?? ''"
              modifier="path"
              class="text-normal opacity-50"
              :key="balance?.denom"
            />
          </td>
          <td class="text-right font-bold py-5 text-black text-lg">
            {{ new Intl.NumberFormat("en-GB").format(Number(balance?.amount)) }}
          </td>
        </tr>
        <tr v-if="noSearchResults">
          <td
            class="text-center text-black text-md font-bold py-10"
            colspan="3"
          >
            <h4>No results for '{{ searchQuery }}'</h4>
            <p class="text-sm font-normal">Try again with another search</p>
          </td>
        </tr>
      </tbody>
    </table>
    <template v-if="address && balances.isLoading">
      <div role="status" class="w-100 animate-pulse flex flex-col">
        <div
          class="flex flex-row justify-between py-7 items-center flex-1"
          v-for="n in 3"
          :key="'loading-skel-' + n"
        >
          <div class="flex flex-1 items-center">
            <div
              class="w-8 h-8 mr-4 bg-gray-200 rounded-full dark:bg-gray-700"
            ></div>
            <div class="h-6 bg-gray-200 rounded-lg dark:bg-gray-700 w-20"></div>
          </div>
          <div
            class="h-6 bg-gray-200 rounded-lg dark:bg-gray-700 w-40 -mr-2"
          ></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </template>
    <div
      v-if="!address || (!balances.isLoading && !balances.assets.length)"
      class="text-left text-black opacity-75 text-md font-normal py-8"
    >
      You have no assets
    </div>
    <div
      v-if="(!balances.isLoading && hasMore) || isShowMore"
      class="shadow-std flex items-center justify-center w-40 rounded-full text-sm font-medium mx-auto inset-x-0 py-2"
      @click="onShowMore"
    >
      Show more

      <IgntArrowIcon class="ml-2" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { IgntSearchIcon } from "@ignt/vue-library";
import { IgntClearIcon } from "@ignt/vue-library";
import { IgntArrowIcon } from "@ignt/vue-library";
import { computed, nextTick, ref, toRefs } from "vue";

import { useAddress } from "../def-composables/useAddress";
import { useAssets } from "../def-composables/useAssets";
import { useDenom } from "../def-composables/useDenom";
import IgntDenom from "./IgntDenom.vue";

const props = defineProps({
  displayLimit: {
    type: Number,
    default: 1,
    required: false,
  },
});

// state
const state = ref({
  searchQuery: "",
  balanceList: [],
  chosenDisplayLimit: props.displayLimit,
  searchInput: ref<null | { focus: () => null }>(null),
});

// composables
const { address } = useAddress();
const { balances, fetch, hasMore } = useAssets(props.displayLimit);

const filteredBalanceList = computed(() => {
  if (!state.value.searchQuery) {
    return balances.value.assets.slice(0, state.value.chosenDisplayLimit);
  }

  return balances.value.assets.filter((item) => {
    if (item.denom) {
      // Ugly as all hell hack.
      // This only works because function is called on user input and we're 99.999999% certain
      // useDenom for that denom has already been called on the root level through onUpdated in useAssets()
      // Will only fail if a component calls useAssets() but does not display anything related to the balances/does not redraw when balances are ready
      const base_denom = useDenom(item.denom).normalized.value;
      return base_denom
        .toLowerCase()
        .includes(state.value.searchQuery.toLowerCase());
    } else {
      return false;
    }
  });
});

const noSearchResults = computed(() => {
  return (
    !filteredBalanceList.value.length &&
    state.value.searchQuery.length &&
    !balances.value.isLoading
  );
});

const isShowMore = computed(() => {
  if (state.value.searchQuery) {
    return filteredBalanceList.value.length > state.value.chosenDisplayLimit;
  }

  return (
    filteredBalanceList.value.length < balances.value.assets.length &&
    !noSearchResults.value
  );
});

const onShowMore = () => {
  fetch();
  state.value.chosenDisplayLimit = state.value.chosenDisplayLimit + props.displayLimit;
};

const resetDisplayLimit = () => {
  state.value.chosenDisplayLimit = props.displayLimit;
};

const resetSearch = () => {
  state.value.searchQuery = "";
  nextTick(() => state.value.searchInput?.focus());
};
const { searchQuery, searchInput, chosenDisplayLimit, balanceList } = toRefs(state.value);
</script>

<style lang="scss" scoped>
input[type="search"] {
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
    -webkit-appearance: none;
  }
}
</style>
