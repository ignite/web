import { useEffect, useState } from "react";
import useKeplr from "../def-hooks/useKeplr";
import { useDispatchWalletContext, useWalletContext } from "../def-hooks/walletContext";
import { useClient } from "../hooks/useClient";

import useCosmosBaseTendermintV1Beta1 from "../hooks/useCosmosBaseTendermintV1Beta1";
import IgntProfileIcon from "./for_react_lib/icons/IgntProfileIcon";

export interface State {
  modalPage: string;
  connectWalletModal: boolean;
  accountDropdown: boolean;
  keplrParams: { name: string; bech32Address: string };
}

export default function IgntAcc() {

  const { connectToKeplr, isKeplrAvailable, getKeplrAccParams } = useKeplr();

  const client = useClient()
  const walletStore = useWalletContext()
  const walletActions = useDispatchWalletContext();
  // methods
  const wallet = walletStore.activeWallet;
  const query = useCosmosBaseTendermintV1Beta1();
  const nodeInfo = query.ServiceGetNodeInfo({});
  const chainId = nodeInfo.data?.default_node_info?.network ?? ""
  
  const initialState: State = {
    modalPage: "connect",
    connectWalletModal: false,
    accountDropdown: false,
    keplrParams: { name: "", bech32Address: "" },
  };

  const [state, setState] = useState(initialState);
  useEffect(()=> {
    const  getKeplrData = async () => {
        const { name, bech32Address } = await getKeplrAccParams(chainId);
        const keplrParams = { name, bech32Address };
        
        setState((oldState) => ({...oldState, keplrParams }));
    };
    if (chainId!="") {
      getKeplrData().catch(console.error);
    }
  
  }, [chainId])
  const tryToConnectToKeplr = (): void => {
    setState((oldState) => ({...oldState, modalPage: 'connecting' }));
  
    const onKeplrConnect = (): void => {
      setState((oldState) => ({...oldState, connectWalletModal:false, modalPage: 'connect' }));
    };
  
    const onKeplrError = (): void => {
      setState((oldState) => ({...oldState, modalPage: 'error' }));
    };
  
    connectToKeplr(onKeplrConnect, onKeplrError);
  }

  const getAccName = (): string => {
    if (client.signer) {
      return state.keplrParams.name;
    } else {
      return "";
    }
  };
  const disconnect = (): void => {
    setState((oldState) => ({...oldState, accountDropdown: false }));
    walletActions.signOut();
  };
  if (client.signer) {
    try {
      tryToConnectToKeplr();
    } catch (e) {
      console.warn("Keplr not connected");
    }
  }
  return (
  <div className="sp-acc">
    {wallet 
    ?  (<div
      
      className={"shadow-std acc-dd-btn flex items-center p-3 rounded-lg mr-3 hover:bg-gray-100 text-sm font-bold " + (state.accountDropdown ? 'active' : '' )}      
      onClick={() => {state.accountDropdown = !state.accountDropdown}}
    >
      <div className="flex items-center">
        <IgntProfileIcon address={state.keplrParams?.bech32Address} />
        <span className="mx-2">{ getAccName() }</span>
      </div>
    </div>)
    : (<IgntButton
      v-else
      aria-label="Connect wallet"
      type="primary"
      @click="state.connectWalletModal = true"
    >
      Connect wallet
    </IgntButton>)
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
          <IgntKeplrIcon />
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
)
  }