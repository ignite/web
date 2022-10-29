/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import BigNumber from "bignumber.js";
import { fromBech32 } from "@cosmjs/encoding";
import cx from "classnames";
import { useMemo, useState } from "react";
import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import { Amount } from "../utils/interfaces";
import { IgntChevronDownIcon, IgntButton } from "@ignt/react-library";
import IgntAmountSelect from "./IgntAmountSelect";
import { useAssets } from "../def-hooks/useAssets";
import Long from "long";

interface IgntSendProps {
  className?: string;
}
interface TxData {
  receiver: string;
  ch: string;
  amounts: Array<Amount>;
  memo: string;
  fees: Array<Amount>;
}

enum UI_STATE {
  "FRESH" = 1,

  "BOOTSTRAPED" = 2,

  "WALLET_LOCKED" = 3,

  "SEND" = 100,
  "SEND_ADD_TOKEN" = 101,

  "TX_SIGNING" = 300,
  "TX_SUCCESS" = 301,
  "TX_ERROR" = 302,
}

interface State {
  tx: TxData;
  currentUIState: UI_STATE;
  advancedOpen: boolean;
}

const initialState: State = {
  tx: {
    receiver: "",
    ch: "",
    amounts: [],
    memo: "",
    fees: [],
  },
  currentUIState: UI_STATE.SEND,
  advancedOpen: false,
};
export default function IgntSend(props: IgntSendProps) {
  const [state, setState] = useState(initialState);
  const client = useClient();
  const sendMsgSend = client.CosmosBankV1Beta1.tx.sendMsgSend;
  const sendMsgTransfer = client.IbcApplicationsTransferV1.tx.sendMsgTransfer;
  const { address } = useAddressContext();
  const { balances } = useAssets(100);

  const parseAmount = (amount: string): BigNumber => {
    return amount == "" ? new BigNumber(0) : new BigNumber(amount);
  };
  const showWalletLocked = useMemo(() => state.currentUIState === UI_STATE.WALLET_LOCKED, [state.currentUIState]);
  const hasAnyBalance = useMemo(
    () => balances.assets.length > 0 && balances.assets.some((x) => parseAmount(x.amount ?? "0").isPositive()),
    [balances],
  );
  const isTxOngoing = useMemo(() => state.currentUIState === UI_STATE.TX_SIGNING, [state.currentUIState]);
  const isTxSuccess = useMemo(() => state.currentUIState === UI_STATE.TX_SUCCESS, [state.currentUIState]);
  const isTxError = useMemo(() => state.currentUIState === UI_STATE.TX_ERROR, [state.currentUIState]);
  const validTxFees = useMemo(
    () =>
      state.tx.fees.every((x) => {
        const parsedAmount = parseAmount(x.amount);
        return !parsedAmount.isNaN() && parsedAmount.isPositive();
      }),
    [state.tx.fees],
  );
  const validTxAmount = useMemo(
    () =>
      state.tx.amounts.length > 0 &&
      state.tx.amounts.every((x) => {
        const parsedAmount = parseAmount(x.amount);
        return !parsedAmount.isNaN() && parsedAmount.isPositive();
      }),
    [state.tx.amounts],
  );
  const validReceiver = useMemo(() => {
    let valid: boolean;

    try {
      valid = !!fromBech32(state.tx.receiver);
    } catch {
      valid = false;
    }

    return valid;
  }, [state.tx.receiver]);
  const ableToTx = useMemo<boolean>(
    () => validTxAmount && validReceiver && validTxFees && !!address,
    [validTxAmount, validReceiver, validTxFees, address],
  );
  const resetTx = (): void => {
    setState({ ...initialState });
  };
  const sendTx = async (): Promise<void> => {
    const fee: Array<Amount> = state.tx.fees.map((x) => ({
      denom: x.denom,
      amount: x.amount == "" ? "0" : x.amount,
    }));

    const amount: Array<Amount> = state.tx.amounts.map((x) => ({
      denom: x.denom,
      amount: x.amount == "" ? "0" : x.amount,
    }));

    const memo = state.tx.memo;

    const isIBC = state.tx.ch !== "";

    let send;

    let payload: any = {
      amount,
      toAddress: state.tx.receiver,
      fromAddress: address,
    };
    setState((oldState) => ({ ...oldState, currentUIState: UI_STATE.TX_SIGNING }));
    try {
      if (isIBC) {
        payload = {
          ...payload,
          sourcePort: "transfer",
          sourceChannel: state.tx.ch,
          sender: address,
          receiver: state.tx.receiver,
          timeoutHeight: 0,
          timeoutTimestamp: Long.fromNumber(new Date().getTime() + 60000).multiply(1000000),
          token: state.tx.amounts[0],
        };

        send = () =>
          sendMsgTransfer({
            value: payload,
            fee: { amount: fee as Readonly<Amount>[], gas: "200000" },
            memo,
          });
      } else {
        send = () =>
          sendMsgSend({
            value: payload,
            fee: { amount: fee as Readonly<Amount[]>, gas: "200000" },
            memo,
          });
      }

      const txResult = await send();

      if (txResult.code) {
        throw new Error();
      }
      setState((oldState) => ({ ...oldState, currentUIState: UI_STATE.TX_SUCCESS }));
    } catch (e) {
      console.error(e);
      setState((oldState) => ({ ...oldState, currentUIState: UI_STATE.TX_ERROR }));
    }
  };
  const resetFees = (): void => {
    state.tx.fees = [];
  };
  const toggleAdvanced = () => {
    if (hasAnyBalance) {
      setState((oldState) => ({ ...oldState, advancedOpen: !oldState.advancedOpen }));
    }
  };
  const handleTxAmountUpdate = (selected: Amount[]) => {
    console.log(selected);
    setState((oldState) => {
      const tx = oldState.tx;
      tx.amounts = selected;
      return { ...oldState, tx };
    });
  };
  const handleTxFeesUpdate = (selected: Amount[]) => {
    setState((oldState) => {
      const tx = oldState.tx;
      tx.fees = selected;
      return { ...oldState, tx };
    });
  };
  const bootstrapTxAmount = () => {
    if (hasAnyBalance) {
      const firstBalance = balances.assets[0];

      state.tx.amounts[0] = {
        denom: "",
        ...firstBalance,
        amount: "",
      };
    }
  };

  return (
    <div className={props.className ?? ""}>
      <div className="pt-8">
        <div className="text-xs text-gray-600">Send to</div>

        <div>
          <input
            value={state.tx.receiver}
            className={cx({
              "mt-1 py-2 px-4 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0": true,
              "border border-red-400": state.tx.receiver.length > 0 && !validReceiver,
            })}
            placeholder="Recipient address"
            disabled={!hasAnyBalance}
            onChange={(evt) => {
              setState((oldState) => {
                const tx = oldState.tx;
                tx.receiver = evt.target.value;
                return { ...oldState, tx };
              });
            }}
          />
          {state.tx.receiver.length > 0 && !validReceiver && (
            <div className="text-xs text-red-400 mt-1">Invalid address</div>
          )}
        </div>
      </div>
      {hasAnyBalance && (
        <div>
          <IgntAmountSelect
            className="token-selector--main"
            selected={state.tx.amounts}
            balances={balances.assets as Amount[]}
            update={handleTxAmountUpdate}
          />
        </div>
      )}

      <div
        className={cx({
          "flex text-xs font-semibold items-center mt-8 advanced-label": true,
          "advanced-label--disabled": !hasAnyBalance,
        })}
        onClick={(evt) => {
          toggleAdvanced();
          return evt;
        }}
      >
        Advanced
        {hasAnyBalance && <IgntChevronDownIcon className={cx({ "rotate-180": state.advancedOpen, "ml-1": true })} />}
      </div>
      {state.advancedOpen && hasAnyBalance && (
        <>
          <div style={{ width: "100%", height: "24px" }} />

          <div className="advanced">
            <div className="text-xs pb-2">Fees</div>

            <IgntAmountSelect
              className="token-selector"
              selected={state.tx.fees}
              balances={balances.assets as Amount[]}
              update={handleTxFeesUpdate}
            />

            <div className="text-xs pb-2 mt-8 text-gray-600">Reference (memo)</div>

            <div className="mb-4">
              <input
                className="input"
                placeholder="Enter a reference"
                onChange={(evt) => {
                  setState((oldState) => {
                    const tx = oldState.tx;
                    tx.memo = evt.target.value;
                    return { ...oldState, tx };
                  });
                }}
              />
            </div>

            <div className="text-xs pb-2 text-gray-600">Channel</div>

            <div className="input-wrapper">
              <input
                className="input"
                placeholder="Enter a channel"
                onChange={(evt) => {
                  setState((oldState) => {
                    const tx = oldState.tx;
                    tx.ch = evt.target.value;
                    return { ...oldState, tx };
                  });
                }}
              />
            </div>
          </div>
        </>
      )}

      <div style={{ width: "100%", height: "24px" }} />

      <div>
        <IgntButton className="w-full" disabled={!ableToTx} onClick={sendTx}>
          Send
        </IgntButton>
      </div>
    </div>
  );
}
/*
<script setup lang="ts">
import { fromBech32 } from "@cosmjs/encoding";
import { useAddress } from "@/def-composables/useAddress";
import { useAssets } from "@/def-composables/useAssets";
import type { Amount } from "@/utils/interfaces";
import { reactive } from "vue";
import Long from "long";
import BigNumber from "bignumber.js";
import { useClient } from "@/composables/useClient";
import { computed } from "vue";
import { IgntButton } from "@ignt/vue-library";
import IgntAmountSelect from "./IgntAmountSelect.tsx";
import { IgntChevronDownIcon } from "@ignt/vue-library";
interface TxData {
  receiver: string;
  ch: string;
  amount: Array<Amount>;
  memo: string;
  fees: Array<Amount>;
}

enum UI_STATE {
  "FRESH" = 1,

  "BOOTSTRAPED" = 2,

  "WALLET_LOCKED" = 3,

  "SEND" = 100,
  "SEND_ADD_TOKEN" = 101,

  "TX_SIGNING" = 300,
  "TX_SUCCESS" = 301,
  "TX_ERROR" = 302,
}

interface State {
  tx: TxData;
  currentUIState: UI_STATE;
  advancedOpen: boolean;
}

const initialState: State = {
  tx: {
    receiver: "",
    ch: "",
    amount: [],
    memo: "",
    fees: [],
  },
  currentUIState: UI_STATE.SEND,
  advancedOpen: false,
};
</script>
*/
