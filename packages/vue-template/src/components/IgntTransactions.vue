<template>
  <section>
    <header class="flex items-center justify-between">
      <h2 class="text-3xl text-black font-semibold p-0 m-0 mb-2.5 flex-1">
        Transactions
      </h2>
    </header>
    <table class="table-auto w-full" v-if="txs.length > 0">
      <tr v-for="(tx, i) in txs" :key="tx.txhash + '_' + i">
        <td class="flex text-xs py-2">
          <div
            :class="{
              'rotate-180 text-green-500': tx.type == 'received',
              'text-error': tx.type == 'sent',
            }"
            class="text-2xl w-10 h-10 rounded-sm bg-gray-200 flex items-center justify-center mr-2"
          >
            <IgntTxArrowIcon />
          </div>
          <div class="flex flex-col justify-between flex-1">
            <div class="font-medium">
              {{ shortenHash(tx.txhash ?? "") }}
              <span class="font-bold text-warning">{{
                tx.ibc ? "IBC" : ""
              }}</span>
            </div>
            <div class="opacity-60">
              {{ dayjs(tx.timestamp).format("MMMM D YYYY, h:mma") }}
            </div>
          </div>
          <div class="flex flex-col justify-between items-end">
            <div class="font-medium text-right text-xs text-gray-600 inline">
              <span
                v-for="(amount, index) in tx.amount"
                :key="tx.txhash + '_' + i + '_' + index"
                :class="{
                  'bg-green-200': tx.type == 'received',
                  'bg-red-200': tx.type == 'sent',
                }"
                class="p-1 rounded-md"
              >
                {{
                  tx.type == "received" ? "+" + amount.amount : -amount.amount
                }}
                <IgntDenom :denom="amount.denom ?? ''" />
              </span>
            </div>
            <div class="opacity-60">
              <template v-if="tx.type == 'received'">
                from: {{ tx.sender }}
              </template>
              <template v-else> to: {{ tx.receiver }}</template>
            </div>
          </div>
        </td>
      </tr>
    </table>
    <div
      v-else
      class="text-left text-black opacity-75 text-md font-normal py-8"
    >
      Transaction history is empty
    </div>
    <div
      v-if="hasMoreReceived || hasMoreSent"
      class="shadow-std flex items-center justify-center w-40 rounded-full text-sm font-medium mx-auto inset-x-0 py-2"
      @click="onShowMore"
    >
      Show more

      <IgntArrowIcon class="ml-2" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTransactions } from "@/def-composables/useTransactions";
import { IgntTxArrowIcon } from "@ignt/vue-library";
import dayjs from "dayjs";
import { computed } from "vue";
import IgntDenom from "./IgntDenom.vue";
import { IgntArrowIcon } from "@ignt/vue-library";

const { transferTxs, hasMoreReceived, hasMoreSent, fetchReceived, fetchSent } =
  useTransactions();
const txs = computed(() => {
  return transferTxs.value?.map((x) => normalizeTX(x)) ?? [];
});
const onShowMore = () => {
  if (hasMoreSent?.value) {
    fetchSent();
  }
  if (hasMoreReceived?.value) {
    fetchReceived();
  }
};
const shortenHash = (hash: string) => {
  return hash.slice(0, 6) + "..." + hash.slice(-6);
};
const normalizeTX = (tx: any) => {
  const normalized = {
    ibc: false,
    sender: "",
    receiver: "",
    txhash: "",
    timestamp: "",
    type: "",
    amount: [
      {
        amount: "",
        denom: "",
      },
    ],
  };
  const isIBC = (tx.tx.body.messages[0]["@type"] as string).includes(
    "ibc.applications.transfer.v1.MsgTransfer"
  );
  const isBankTransfer = (tx.tx.body.messages[0]["@type"] as string).includes(
    "cosmos.bank.v1beta1.MsgSend"
  );
  if (isIBC) {
    normalized.ibc = true;
    normalized.sender = tx.tx.body.messages[0].sender;
    normalized.receiver = tx.tx.body.messages[0].receiver;
    normalized.amount = [tx.tx.body.messages[0].token];
  } else if (isBankTransfer) {
    normalized.sender = tx.tx.body.messages[0].from_address;
    normalized.receiver = tx.tx.body.messages[0].to_address;
    normalized.amount = tx.tx.body.messages[0].amount;
  }
  normalized.txhash = tx.txhash;
  normalized.timestamp = tx.timestamp;
  normalized.type = tx.type;

  return normalized;
};
</script>
