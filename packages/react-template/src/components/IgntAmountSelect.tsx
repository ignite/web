/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useMemo, useState } from "react";
import { useDenomContext } from "../def-hooks/denomContext";
import { Amount } from "../utils/interfaces";
import { IgntAddIcon, IgntSearchIcon, IgntModal } from "@ignt/react-library";
import IgntAmountInputRow from "./IgntAmountInputRow";
import IgntDenom from "./IgntDenom";

interface IgntAmountSelectProps {
  className?: string;
  selected: Amount[];
  balances: Amount[];
  update: (amounts: Amount[]) => void;
}
export interface State {
  tokenSearch: string;
  modalOpen: boolean;
}

const initialState: State = {
  tokenSearch: "",
  modalOpen: false,
};
export default function IgntAmountSelect(props: IgntAmountSelectProps) {
  const { selected, balances, update } = props;
  const [state, setState] = useState(initialState);

  const { denoms } = useDenomContext();
  const ableToBeSelected = useMemo(() => {
    const notSelected = (x: Amount) =>
      (props.selected as Array<Amount>).every((y: Amount) => {
        return x.denom !== y.denom;
      });

    const searchFilter = (x: Amount) => {
      const base = denoms[x.denom].normalized;
      if (base.toLowerCase().includes(state.tokenSearch.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    };
    return props.balances?.filter(notSelected).filter(searchFilter) ?? [];
  }, [selected, balances, state.tokenSearch]);

  const handleInputChange = (val: Amount) => {
    const newSelected: Array<Amount> = [...(selected ?? [])];
    const index = newSelected.findIndex((x) => x.denom == val.denom);
    newSelected[index].amount = val.amount;
    update(newSelected);
  };
  const handleTokenSelect = (x: Amount) => {
    const newSelected: Array<Amount> = [
      ...(selected ?? []),
      {
        amount: "",
        denom: x.denom,
      },
    ];

    update(newSelected);
    setState((oldState) => ({ ...oldState, modalOpen: false }));
  };
  return (
    <div className={`flex flex-col ${props.className ?? ""}`}>
      {selected.map((x, i) => (
        <IgntAmountInputRow
          key={`${x.denom}-${i}`}
          amount={x}
          onChange={(val) => {
            handleInputChange({ amount: val, denom: x.denom });
          }}
          className="flex justify-between items-center my-1 py-3 rounded-xl relative -mx-2 px-4"
        />
      ))}

      {ableToBeSelected.length > 0 && (
        <div
          className="flex items-center text-xs font-medium text-gray-600 mt-2 px-2"
          onClick={() => {
            setState((oldState) => ({ ...oldState, modalOpen: true }));
          }}
        >
          <IgntAddIcon />
          <div className="ml-3 mt-0.5">Add asset</div>
        </div>
      )}

      <IgntModal
        visible={state.modalOpen}
        close-icon="true"
        title="Select asset"
        close={() => {
          setState((oldState) => ({ ...oldState, modalOpen: false }));
        }}
        body={
          <>
            <div className="relative mb-4">
              <IgntSearchIcon className="absolute py-3 h-12 mt-2 left-3" />
              <input
                className="mt-1 py-3 px-4 pl-8 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0"
                placeholder="Search assets"
                onChange={(evt) => {
                  setState((oldState) => ({ ...oldState, tokenSearch: evt.target.value }));
                }}
              />
            </div>
            <div className="relative">
              {ableToBeSelected.map((x) => (
                <div
                  key={"balance_select_" + x.denom}
                  className="flex justify-start w-full items-center my-1 py-3 rounded-xl hover:bg-gray-100 px-2"
                  onClick={() => {
                    handleTokenSelect(x);
                  }}
                >
                  <IgntDenom denom={x.denom} modifier="avatar" />

                  <div className="flex flex-col justify-between ml-4">
                    <div className="font-semibold">
                      <IgntDenom denom={x.denom} shorten={false} />
                    </div>

                    <div className="text-xs">{x.amount} available</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
}
