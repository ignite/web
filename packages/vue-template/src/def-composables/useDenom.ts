import useIbcApplicationsTransferV1 from "@/composables/useIbcApplicationsTransferV1";
import { computed, ref } from "vue";

const useDenomInstances = {} as Record<
  string,
  ReturnType<typeof useDenomInstance>
>;
const useDenomInstance = (denom: string) => {
  const isIBC = denom.indexOf("ibc/") == 0;
  const hash = denom.split("/")[1];
  const { QueryDenomTrace } = useIbcApplicationsTransferV1();
  const denomTrace = QueryDenomTrace(hash, { enabled: ref(isIBC) }).data;
  const normalized = computed(() => {
    if (isIBC) {
      return denomTrace.value?.denom_trace?.base_denom?.toUpperCase() ?? "";
    } else {
      return denom.toUpperCase();
    }
  });
  const path = computed(() => {
    if (isIBC) {
      return denomTrace.value?.denom_trace?.path ?? "";
    } else {
      return "";
    }
  });

  const pathExtracted = computed(() => {
    if (isIBC) {
      return (
        denomTrace.value?.denom_trace?.path?.match(/\d+/g)?.reverse() ?? ""
      );
    } else {
      return "";
    }
  });
  return { isIBC, denomTrace, normalized, path, pathExtracted };
};
export const useDenom = (denom: string) => {
  if (!useDenomInstances[denom]) {
    useDenomInstances[denom] = useDenomInstance(denom);
  }
  return useDenomInstances[denom];
};
