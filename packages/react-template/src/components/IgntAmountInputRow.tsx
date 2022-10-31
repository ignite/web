import { Amount } from "../utils/interfaces";
import cx from "classnames";
import { useAsset } from "../def-hooks/useAsset";
import BigNumber from "bignumber.js";
import { useEffect, useMemo, useState } from "react";
import { IgntAmountInput } from "@ignt/react-library";
import IgntDenom from "./IgntDenom";

interface IgntAmountInputRowProps {
  className?: string;
  amount: Amount;
  onChange: (val: string) => void;
}
export default function IgntAmountInputRow(props: IgntAmountInputRowProps) {
  const { balance } = useAsset(props.amount.denom);
  const [value, setValue] = useState<BigNumber>(new BigNumber(props.amount.amount != "" ? props.amount.amount : 0));
  useEffect(() => {
    setValue(new BigNumber(props.amount.amount != "" ? props.amount.amount : 0));
  }, [props.amount.amount]);
  const hasEnoughBalance = useMemo(() => {
    const balanceBN = new BigNumber(balance?.amount ?? 0);
    if (Number(value)) {
      return balanceBN.gte(value);
    } else {
      return true;
    }
  }, [value, balance]);
  const handleChange = (amount: BigNumber) => {
    if (hasEnoughBalance) {
      props.onChange(amount.toString());
    }
  };
  return (
    <div className={props.className ?? ""}>
      <IgntDenom denom={props.amount.denom} modifier="avatar" className="z-10" />
      <div className="flex flex-col justify-between ml-4 z-10">
        <div className="font-semibold">
          <IgntDenom denom={props.amount.denom} />
        </div>

        <div
          className={cx({
            "text-xs": true,
            error: !hasEnoughBalance,
          })}
        >
          {balance?.amount ?? 0} available
        </div>
      </div>

      <div className="flex-1 w-full h-full">
        <IgntAmountInput
          className="absolute w-full left-0 text-right h-full top-0 outline-0 focus:bg-gray-100 text-3xl font-medium rounded-lg px-4"
          onChange={handleChange}
          value={value}
        />

        <div className="focus-background"></div>
      </div>
    </div>
  );
}
