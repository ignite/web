import { computed, onBeforeUpdate } from "vue";

import useCosmosBankV1Beta1 from "@/composables/useCosmosBankV1Beta1";

import { useAddress } from "./useAddress";
import { useDenom } from "./useDenom";

export const useAssets = (perPage: number) => {
  // composables
  const { address } = useAddress();
  const { QueryAllBalances } = useCosmosBankV1Beta1();
  const enabled = address.value != ""; // if useAssets is called with no wallet connected/no address actual query will be registered but never ran
  const query = QueryAllBalances(address.value, {} as Parameters<typeof QueryAllBalances>[1], { enabled }, perPage);
  type Flatten<T> = T extends any[] ? T[number] : T;
  type HelperBalances = NonNullable<Required<typeof query.data>["value"]>["pages"][number]['balances'];

  const balancesRaw = computed(() => {
    let bals = [] as HelperBalances;
    if (query.data && query.data.value) {
      for (let i=0; i < query.data.value.pages.length; i++) {
        const page = query.data.value.pages[i];
        bals = bals.concat(page.balances)
      }
    }
    return bals;
  });
  const balances = computed(() => {
    return {
      assets: balancesRaw.value,
      isLoading: query.isLoading.value,
    };
  });
  const isLoading = computed(() => {
    return query.isLoading.value;
  });

  onBeforeUpdate(() => {
    if (balancesRaw.value && balancesRaw.value.length > 0) {
      balancesRaw.value.forEach((x) => {
        if (x.denom) useDenom(x.denom);
      });
    }
  });

  return {
    balancesRaw,
    balances,
    isLoading,
    fetch: query.fetchNextPage,
    hasMore: query.hasNextPage,
  };
};
