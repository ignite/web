<template>
  <div class="sp-acc">
    <div
      v-if="wallet"
      class="shadow-std acc-dd-btn flex items-center p-3 rounded-lg mr-3 hover:bg-gray-100 text-sm font-bold"
      :class="[state.accountDropdown ? 'active' : '']"
      style="display: flex; align-items: center"
      @click="state.accountDropdown = !state.accountDropdown"
    >
      <div class="flex items-center">
        <IgntProfileIcon :address="state.keplrParams?.bech32Address" />
        <span class="mx-2">
          {{ getAccName() }}
        </span>
      </div>
    </div>
    <IgntButton
      v-else
      aria-label="Connect wallet"
      type="primary"
      @click="state.connectWalletModal = true"
    >
      Connect wallet
    </IgntButton>
    <IgntAccDropdown
      v-if="state.accountDropdown && wallet"
      :wallet="wallet"
      :acc-name="getAccName()"
      @disconnect="disconnect"
      @close="state.accountDropdown = false"
    />
    <IgntModal
      :visible="state.connectWalletModal"
      :close-icon="false"
      :cancel-button="false"
      :submit-button="false"
      style="text-align: center"
      @close="state.connectWalletModal = false"
      @submit="state.connectWalletModal = false"
    >
      <template #header>
        <div
          v-if="state.modalPage === 'connect'"
          class="flex items-center flex-col my-3"
        >
          <IgntKeplrIcon class="text-[48px]" />
          <h3 v-if="isKeplrAvailable" class="text-2xl font-bold">
            Connect your wallet
          </h3>
          <h3 v-else>Install Keplr</h3>
        </div>
        <div v-else-if="state.modalPage === 'connecting'">
          <div class="description-grey">Opening Keplr</div>
          <h3>Connecting</h3>
        </div>
        <div v-else-if="state.modalPage === 'error'">
          <IgntWarningIcon style="margin-bottom: 20px" />
          <h3>Keplr cannot launch</h3>
        </div>
      </template>
      <template #body>
        <div class="max-w-xs text-center text-sm my-4 mx-auto">
          <div v-if="state.modalPage === 'connect'">
            <p v-if="isKeplrAvailable">
              Connect your Keplr wallet via the Keplr browser extension to use
              this app.
            </p>
            <p v-else>
              Install & connect your Keplr wallet via the Keplr browser
              extension to use this app.
            </p>
          </div>
          <div v-else-if="state.modalPage === 'connecting'">
            <div class="mt-8">
              <IgntSpinner />
            </div>
            <IgntButton
              aria-label="Cancel"
              type="secondary"
              style="margin-top: 3rem"
              @click="state.modalPage = 'connect'"
            >
              Cancel
            </IgntButton>
            <div class="external-link mt-8">Having trouble opening Keplr?</div>
          </div>
          <div v-else-if="state.modalPage === 'error'" style="padding: 20px 0">
            <div class="external-link">
              <span>Keplr troubleshooting</span>
              <IgntExternalArrowIcon style="margin-left: 0.5rem" />
            </div>
          </div>
        </div>
      </template>
      <template v-if="isKeplrAvailable" #footer>
        <div v-if="state.modalPage === 'connect'" class="my-3">
          <IgntButton
            aria-label="Connect Keplr"
            type="primary"
            @click="tryToConnectToKeplr"
          >
            Connect Keplr
          </IgntButton>
        </div>
        <div
          v-if="state.modalPage === 'error'"
          style="gap: 10px; display: flex; justify-content: center"
        >
          <IgntButton
            aria-label="Connect Keplr"
            type="secondary"
            @click="state.connectWalletModal = false"
          >
            Cancel
          </IgntButton>
          <IgntButton
            aria-label="Connect Keplr"
            type="primary"
            @click="state.modalPage = 'connect'"
          >
            Try again
          </IgntButton>
        </div>
      </template>
    </IgntModal>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, watch } from "vue";
import useKeplr from "@/def-composables/useKeplr";
import IgntAccDropdown from "./IgntAccDropdown.vue";
import { IgntButton } from "@ignt/vue-library";
import { IgntExternalArrowIcon } from "@ignt/vue-library";
import { IgntKeplrIcon } from "@ignt/vue-library";
import { IgntModal } from "@ignt/vue-library";
import { IgntProfileIcon } from "@ignt/vue-library";
import { IgntSpinner } from "@ignt/vue-library";
import { IgntWarningIcon } from "@ignt/vue-library";
import { useClient } from "@/composables/useClient";
import { useWalletStore } from "@/stores/useWalletStore";
import useCosmosBaseTendermintV1Beta1 from "@/composables/useCosmosBaseTendermintV1Beta1";

export interface State {
  modalPage: string;
  connectWalletModal: boolean;
  accountDropdown: boolean;
  keplrParams: { name: string; bech32Address: string };
}

const initialState: State = {
  modalPage: "connect",
  connectWalletModal: false,
  accountDropdown: false,
  keplrParams: { name: "", bech32Address: "" },
};

// state
const state = reactive(initialState);

// composables
const { connectToKeplr, isKeplrAvailable, getKeplrAccParams } = useKeplr();

const client = useClient();
const walletStore = useWalletStore();
// methods
const wallet = computed(() => walletStore.getWallet);
const query = useCosmosBaseTendermintV1Beta1();
const nodeInfo = query.ServiceGetNodeInfo({});
const chainId = computed(
  () => nodeInfo.data?.value?.default_node_info?.network ?? ""
);
watch(
  () => chainId.value,
  async (newVal) => {
    if (newVal != "") {
      let { name, bech32Address } = await getKeplrAccParams(newVal);
      state.keplrParams.name = name;
      state.keplrParams.bech32Address = bech32Address;
    }
  }
);

let tryToConnectToKeplr = (): void => {
  state.modalPage = "connecting";

  let onKeplrConnect = async () => {
    state.connectWalletModal = false;
    state.modalPage = "connect";
  };

  let onKeplrError = (): void => {
    state.modalPage = "error";
  };

  connectToKeplr(onKeplrConnect, onKeplrError);
};
let getAccName = (): string => {
  if (client.signer) {
    return state.keplrParams.name;
  } else {
    return "";
  }
};
let disconnect = (): void => {
  state.accountDropdown = false;
  walletStore.signOut();
};

// check if already connected
onMounted(async () => {
  if (client.signer) {
    try {
      await tryToConnectToKeplr();
    } catch (e) {
      console.warn("Keplr not connected");
    }
  }
});
</script>
