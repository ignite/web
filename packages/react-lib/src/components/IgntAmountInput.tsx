import BigNumber from "bignumber.js";
import { ChangeEvent, useRef } from "react";

interface IgntAmountInputProps {
  className: string;
  maxDecimals: number;
  placeholder?: string;
  value?: BigNumber;
  onChange: (val: BigNumber) => void;
}
const defaultProps = {
  maxDecimals: 0,
};
export default function IgntAmountInput(props: IgntAmountInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const format = (value: string): BigNumber => {
    let newValue: string = value;

    // Replace commas
    newValue = newValue.replace(",", ".");

    // Disallow decimals if wished for
    newValue = props.maxDecimals > 0 ? newValue : newValue.replace(".", "");

    // Only numbers
    newValue = newValue.replace(/[^0-9.]/g, "");

    if (newValue.startsWith(".")) {
      newValue = "0" + newValue;
    }

    if (newValue.split("").filter((char) => char === ".").length > 1) {
      // Remove subsequent separators
      newValue = newValue.replace(/(?<=\..*)\./g, "");
    }

    const [integerDigits, fractionDigits] = newValue.split(".");

    if (fractionDigits?.length > props.maxDecimals) {
      newValue = `${integerDigits}.${fractionDigits.slice(0, props.maxDecimals)}`;
    }
    console.log(newValue);
    return new BigNumber(newValue);
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(format(event.target.value));
    }
  };
  return (
    <input
      ref={inputRef}
      placeholder={props.placeholder}
      type="text"
      value={props.value?.toString()}
      inputMode="decimal"
      pattern="^[0-9]*[.,]?[0-9]*$"
      autoComplete="off"
      minLength={1}
      spellCheck="false"
      onChange={onChange}
      className={props.className ?? ""}
    />
  );
}
IgntAmountInput.defaultProps = defaultProps;
