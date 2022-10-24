import useCosmosBaseTendermintV1Beta1 from "@/composables/useCosmosBaseTendermintV1Beta1";
import { env } from "@/env";
import { computed, ref } from "vue";

export const useConnectionStatus = () => {
  const query = useCosmosBaseTendermintV1Beta1();
  const nodeInfo = query.ServiceGetNodeInfo();
  const apiConnected = computed(() => !nodeInfo.error.value);
  const rpcConnected = ref(false);
  const rpcCheck = async () => {
    try {
      await fetch(env.rpcURL);
      rpcConnected.value = true;
    } catch (e) {
      console.error(e);
      rpcConnected.value = false;
    } finally {
      setTimeout(rpcCheck, 10000);
    }
  };
  const wsConnected = computed(() => rpcConnected.value);
  rpcCheck();
  return { apiConnected, rpcConnected, wsConnected };
};
