import { computed, ref } from "vue";

import useIbcApplicationsTransferV1 from "@/composables/useIbcApplicationsTransferV1";

const useDenomInstances = {} as Record<
  string,
  ReturnType<typeof useDenomInstance>
>;
const traceToPath = (trace: { port_id: string; channel_id: string }[] | undefined) => {
  if (!trace || trace.length === 0) {
    return "";
  }else{
    return trace.map((t) => `${t.port_id}/${t.channel_id}`).join("/");
  }
};
const useDenomInstance = (denom: string) => {
  const isIBC = denom.indexOf("ibc/") == 0;
  const hash = denom.split("/")[1];
  const { QueryDenom } = useIbcApplicationsTransferV1();
  const denomTrace = QueryDenom(hash, { enabled: ref(isIBC) }).data;
  const normalized = computed(() => {
    if (isIBC) {
      return denomTrace.value?.denom?.base?.toUpperCase() ?? "";
    } else {
      return denom.toUpperCase();
    }
  });
  const path = computed(() => {
    if (isIBC) {
      return traceToPath(denomTrace.value?.denom?.trace);
    } else {
      return "";
    }
  });

  const pathExtracted = computed(() => {
    if (isIBC) {
      return (
        traceToPath(denomTrace.value?.denom?.trace).match(/\d+/g)?.reverse() ?? ""
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
