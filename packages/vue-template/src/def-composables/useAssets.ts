import { computed, onBeforeUpdate } from "vue";
import useCosmosBankV1Beta1 from "@/composables/useCosmosBankV1Beta1";
import { useAddress } from "./useAddress";
import { useDenom } from "./useDenom";

export const useAssets = (perPage: number) => {
  // composables
  const { address } = useAddress();
  const { QueryAllBalances } = useCosmosBankV1Beta1();
  const enabled = address.value != ""; // if useAssets is called with no wallet connected/no address actual query will be registered but never ran
  const query = QueryAllBalances(address.value, {}, { enabled }, perPage);
  type HelperBalances = NonNullable<
    NonNullable<Required<typeof query.data>["value"]>["pages"][0]["balances"]
  >;
  const balancesRaw = computed(() => {
    return query.data?.value?.pages.reduce((bals, page) => {
      if (page.balances) {
        return bals.concat(page.balances);
      } else {
        return bals;
      }
    }, [] as HelperBalances);
  });
  const balances = computed(() => {
    return {
      assets: balancesRaw.value ?? [],
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
