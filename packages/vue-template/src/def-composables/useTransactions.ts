import { computed } from "vue";

import useCosmosTxV1Beta1 from "@/composables/useCosmosTxV1Beta1";

import { useAddress } from "./useAddress";

export const useTransactions = () => {
  const { address } = useAddress();
  const { ServiceGetTxsEvent } = useCosmosTxV1Beta1();
  const SENT_EVENT = computed<string>(
    () => `transfer.sender='${address.value}'`
  );
  const RECEIVED_EVENT = computed<string>(
    () => `transfer.recipient='${address.value}'`
  );
  const sentQuery = ServiceGetTxsEvent({ query: SENT_EVENT.value } as Parameters<typeof ServiceGetTxsEvent>[0], {}, 100);
  const receivedQuery = ServiceGetTxsEvent(
    { query: RECEIVED_EVENT.value } as Parameters<typeof ServiceGetTxsEvent>[0],
    {},
    100
  );
  type HelperTxs = NonNullable<
    NonNullable<
      Required<typeof sentQuery.data>["value"]
    >["pages"][0]["tx_responses"]
  >;
  const allSent = computed(() => {
    return (
      sentQuery.data.value?.pages.reduce((txs, page) => {
        if (page.tx_responses) {
          return txs.concat(page.tx_responses);
        } else {
          return txs;
        }
      }, [] as HelperTxs) ?? ([] as HelperTxs)
    );
  });
  const allReceived = computed(() => {
    return (
      receivedQuery.data.value?.pages.reduce((txs, page) => {
        if (page.tx_responses) {
          return txs.concat(page.tx_responses);
        } else {
          return txs;
        }
      }, [] as HelperTxs) ?? ([] as HelperTxs)
    );
  });
  const txs = computed(() => {
    return allSent.value
      .map((x) => ({ type: "sent", ...x }))
      .concat(
        allReceived.value.map((x) => ({
          type: "received",
          ...x,
        })) ?? []
      )
      .sort((a, b) => {
        return (Number(a.height) ?? 0) < (Number(b.height) ?? 0) ? 1 : -1;
      });
  });
  const transferTxs = computed(() => {
    return txs.value?.filter((x) =>
      ((x.tx as any)?.body.messages as any[]).some(
        (x) =>
          x["@type"] == "/cosmos.bank.v1beta1.MsgSend" ||
          x["@type"] == "/ibc.applications.transfer.v1.MsgTransfer"
      )
    );
  });
  return {
    txs,
    transferTxs,
    hasMoreSent: sentQuery.hasNextPage,
    hasMoreReceived: receivedQuery.hasNextPage,
    fetchSent: sentQuery.fetchNextPage,
    fetchReceived: receivedQuery.fetchNextPage,
  };
};
