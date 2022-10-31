import { computed } from "vue";
import useCosmosBankV1Beta1 from "../composables/useCosmosBankV1Beta1";
import { useAddress } from "./useAddress";

export const useAsset = (denom: string) => {
  const { address } = useAddress();
  const { QueryBalance } = useCosmosBankV1Beta1();
  const query = QueryBalance(address.value, { denom }, {});
  const balance = computed(() => {
    return query.data?.value?.balance;
  });
  return { balance, isLoading: query.isLoading };
};
