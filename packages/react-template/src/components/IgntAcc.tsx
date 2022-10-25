/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from "react";
import useKeplr from "../def-hooks/useKeplr";
import { useDispatchWalletContext, useWalletContext } from "../def-hooks/walletContext";
import { useClient } from "../hooks/useClient";

import useCosmosBaseTendermintV1Beta1 from "../hooks/useCosmosBaseTendermintV1Beta1";
import { Wallet } from "../utils/interfaces";
import IgntProfileIcon from "./for_react_lib/icons/IgntProfileIcon";
import IgntWarningIcon from "./for_react_lib/icons/IgntWarningIcon";
import IgntKeplrIcon from "./for_react_lib/icons/IgntKeplrIcon";
import IgntButton from "./for_react_lib/IgntButton";
import IgntModal from "./for_react_lib/IgntModal";
import IgntAccDropdown from "./IgntAccDropdown";
import IgntExternalArrowIcon from "./for_react_lib/icons/IgntExternalArrowIcon";
import IgntSpinner from "./for_react_lib/IgntSpinner";

export interface State {
  modalPage: string;
  connectWalletModal: boolean;
  accountDropdown: boolean;
  keplrParams: { name: string; bech32Address: string };
}

export default function IgntAcc() {
  const { connectToKeplr, isKeplrAvailable, getKeplrAccParams } = useKeplr();

  const client = useClient();
  const walletStore = useWalletContext();
  const walletActions = useDispatchWalletContext();
  // methods
  const wallet = walletStore.activeWallet;
  const query = useCosmosBaseTendermintV1Beta1();
  const nodeInfo = query.ServiceGetNodeInfo({});
  const chainId = nodeInfo.data?.default_node_info?.network ?? "";

  const initialState: State = {
    modalPage: "connect",
    connectWalletModal: false,
    accountDropdown: false,
    keplrParams: { name: "", bech32Address: "" },
  };

  const [state, setState] = useState(initialState);
  useEffect(() => {
    const getKeplrData = async () => {
      const { name, bech32Address } = await getKeplrAccParams(chainId);
      const keplrParams = { name, bech32Address };

      setState((oldState) => ({ ...oldState, keplrParams }));
    };
    if (chainId != "") {
      getKeplrData().catch(console.error);
    }
  }, [chainId]);
  const tryToConnectToKeplr = (): void => {
    setState((oldState) => ({ ...oldState, modalPage: "connecting" }));

    const onKeplrConnect = (): void => {
      setState((oldState) => ({ ...oldState, connectWalletModal: false, modalPage: "connect" }));
    };

    const onKeplrError = (): void => {
      setState((oldState) => ({ ...oldState, modalPage: "error" }));
    };

    connectToKeplr(onKeplrConnect, onKeplrError);
  };

  const getAccName = (): string => {
    if (client.signer) {
      return state.keplrParams.name;
    } else {
      return "";
    }
  };
  const disconnect = (): void => {
    setState((oldState) => ({ ...oldState, accountDropdown: false }));
    walletActions.signOut();
  };
  if (client.signer) {
    try {
      connectToKeplr(
        () => {},
        () => {},
      );
    } catch (e) {
      console.warn("Keplr not connected");
    }
  }
  return (
    <div className="sp-acc">
      {wallet ? (
        <div
          className={
            "shadow-std acc-dd-btn flex items-center p-3 rounded-lg mr-3 hover:bg-gray-100 text-sm font-bold " +
            (state.accountDropdown ? "active" : "")
          }
          onClick={() => {
            state.accountDropdown = !state.accountDropdown;
          }}
        >
          <div className="flex items-center">
            <IgntProfileIcon address={state.keplrParams?.bech32Address} />
            <span className="mx-2">{getAccName()}</span>
          </div>
        </div>
      ) : (
        <IgntButton
          aria-label="Connect wallet"
          type="primary"
          onClick={() => {
            setState((oldState) => ({ ...oldState, connectWalletModal: true }));
          }}
        >
          Connect wallet
        </IgntButton>
      )}
      {state.accountDropdown && wallet && (
        <IgntAccDropdown
          wallet={wallet as Wallet}
          accName={getAccName()}
          disconnect={disconnect}
          close={() => {
            setState((oldState) => ({ ...oldState, accountDropdown: false }));
          }}
        />
      )}
      <IgntModal
        visible={state.connectWalletModal}
        closeIcon={false}
        cancelButton={false}
        submitButton={false}
        close={() => {
          setState((oldState) => ({ ...oldState, connectWalletModal: false }));
        }}
        submit={() => {
          setState((oldState) => ({ ...oldState, connectWalletModal: false }));
        }}
        header={
          state.modalPage === "connect" ? (
            <div className="flex items-center flex-col my-3">
              <IgntKeplrIcon />
              {isKeplrAvailable ? <h3 className="text-2xl font-bold">Connect your wallet</h3> : <h3>Install Keplr</h3>}
            </div>
          ) : state.modalPage === "connecting" ? (
            <div>
              <div className="description-grey">Opening Keplr</div>
              <h3>Connecting</h3>
            </div>
          ) : (
            state.modalPage === "error" && (
              <div>
                <IgntWarningIcon className="mb-4" />
                <h3>Keplr cannot launch</h3>
              </div>
            )
          )
        }
        body={
          <div className="max-w-xs text-center text-sm my-4 mx-auto">
            {state.modalPage === "connect" ? (
              <div>
                {isKeplrAvailable ? (
                  <p>Connect your Keplr wallet via the Keplr browser extension to use this app.</p>
                ) : (
                  <p>Install & connect your Keplr wallet via the Keplr browser extension to use this app.</p>
                )}
              </div>
            ) : state.modalPage === "connecting" ? (
              <div>
                <div className="mt-8">
                  <IgntSpinner />
                </div>
                <IgntButton
                  aria-label="Cancel"
                  type="secondary"
                  className="mt-12"
                  onClick={() => setState((oldState) => ({ ...oldState, modalPage: "connect" }))}
                >
                  Cancel
                </IgntButton>
                <div className="external-link mt-8">Having trouble opening Keplr?</div>
              </div>
            ) : (
              state.modalPage === "error" && (
                <div className="py-5">
                  <div className="external-link">
                    <span>Keplr troubleshooting</span>
                    <IgntExternalArrowIcon className="ml-2" />
                  </div>
                </div>
              )
            )}
          </div>
        }
        footer={
          state.modalPage === "connect" ? (
            <div className="my-3">
              <IgntButton aria-label="Connect Keplr" type="primary" onClick={tryToConnectToKeplr}>
                Connect Keplr
              </IgntButton>
            </div>
          ) : (
            state.modalPage === "error" && (
              <div className="flex justify-center gap-[10px]">
                <IgntButton
                  aria-label="Connect Keplr"
                  type="secondary"
                  onClick={() => setState((oldState) => ({ ...oldState, connectWalletModal: false }))}
                >
                  Cancel
                </IgntButton>
                <IgntButton
                  aria-label="Connect Keplr"
                  type="primary"
                  onClick={() => setState((oldState) => ({ ...oldState, modalPage: "connect" }))}
                >
                  Try again
                </IgntButton>
              </div>
            )
          )
        }
      />
    </div>
  );
}
