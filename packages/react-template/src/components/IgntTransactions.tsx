/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useTransactions } from "../def-hooks/useTransactions";
import { IgntTxArrowIcon, IgntArrowIcon } from "@ignt/react-library";
import dayjs from "dayjs";
import IgntDenom from "./IgntDenom";
import { useMemo } from "react";
import cx from "classnames";

interface IgntTransactionsProps {
  className?: string;
}
export default function IgntTransactions(props: IgntTransactionsProps) {
  const { transferTxs, hasMoreReceived, hasMoreSent, fetchReceived, fetchSent } = useTransactions();
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
    const isIBC = (tx.tx.body.messages[0]["@type"] as string).includes("ibc.applications.transfer.v1.MsgTransfer");
    const isBankTransfer = (tx.tx.body.messages[0]["@type"] as string).includes("cosmos.bank.v1beta1.MsgSend");
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
  const txs = useMemo(() => {
    return transferTxs?.map((x) => normalizeTX(x)) ?? [];
  }, [transferTxs]);
  const onShowMore = () => {
    if (hasMoreSent) {
      fetchSent();
    }
    if (hasMoreReceived) {
      fetchReceived();
    }
  };
  const shortenHash = (hash: string) => {
    return hash.slice(0, 6) + "..." + hash.slice(-6);
  };
  return (
    <section className={props.className ?? ""}>
      <header className="flex items-center justify-between">
        <h2 className="text-3xl text-black font-semibold p-0 m-0 mb-2.5 flex-1">Transactions</h2>
      </header>
      {txs.length > 0 ? (
        <table className="table-auto w-full">
          <tbody>
            {txs.map((tx, i) => (
              <tr key={tx.txhash + "_" + i}>
                <td className="flex text-xs py-2">
                  <div
                    className={cx({
                      "text-2xl w-10 h-10 rounded-sm bg-gray-200 flex items-center justify-center mr-2": true,
                      "rotate-180 text-green-500": tx.type == "received",
                      "text-error": tx.type == "sent",
                    })}
                  >
                    <IgntTxArrowIcon />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="font-medium">
                      {shortenHash(tx.txhash ?? "")}
                      <span className="font-bold text-warning">{tx.ibc ? "IBC" : ""}</span>
                    </div>
                    <div className="opacity-60">{dayjs(tx.timestamp).format("MMMM D YYYY, h:mma")}</div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="font-medium text-right text-xs text-gray-600 inline">
                      {tx.amount.map((amount, index) => (
                        <span
                          key={tx.txhash + "_" + i + "_" + index}
                          className={cx({
                            "p-1 rounded-md": true,
                            "bg-green-200": tx.type == "received",
                            "bg-red-200": tx.type == "sent",
                          })}
                        >
                          {tx.type == "received" ? "+" + amount.amount : -amount.amount}
                          <IgntDenom denom={amount.denom ?? ""} />
                        </span>
                      ))}
                    </div>
                    <div className="opacity-60">
                      {tx.type == "received" ? "from: " + tx.sender : "to: " + tx.receiver}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-left text-black opacity-75 text-md font-normal py-8">Transaction history is empty</div>
      )}
      {(hasMoreReceived || hasMoreSent) && (
        <div
          className="shadow-std flex items-center justify-center w-40 rounded-full text-sm font-medium mx-auto inset-x-0 py-2"
          onClick={onShowMore}
        >
          Show more
          <IgntArrowIcon className="ml-2" />
        </div>
      )}
    </section>
  );
}
