/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useAssets } from "../def-hooks/useAssets";
import { useDenomContext } from "../def-hooks/denomContext";
import IgntDenom from "./IgntDenom";
import { useAddressContext } from "../def-hooks/addressContext";
import { IgntSearchIcon, IgntClearIcon, IgntArrowIcon } from "@ignt/react-library";
import { ChangeEvent, useRef, useState } from "react";

interface IgntAssetsProps {
  className?: string;
  displayLimit?: number;
}
export default function IgntAssets(props: IgntAssetsProps) {
  const { className, displayLimit } = props;
  const searchInput = useRef<HTMLInputElement>(null);
  const [state, setState] = useState({
    searchQuery: "",
    balanceList: [],
    displayLimit: props.displayLimit,
  });
  const { address } = useAddressContext();
  const { balances, fetch, hasMore } = useAssets(3);
  const { denoms } = useDenomContext();
  const filteredBalanceList = !state.searchQuery
    ? balances.assets.slice(0, state.displayLimit)
    : balances.assets.filter((item) => {
        if (item.denom) {
          // Ugly as all hell hack.
          // This only works because function is called on user input and we're 99.999999% certain
          // useDenom for that denom has already been called on the root level through onUpdated in useAssets()
          // Will only fail if a component calls useAssets() but does not display anything related to the balances/does not redraw when balances are ready
          const base_denom = denoms[item.denom].normalized;
          return base_denom.toLowerCase().includes(state.searchQuery.toLowerCase());
        } else {
          return false;
        }
      });

  const noSearchResults = !filteredBalanceList.length && state.searchQuery.length && !balances.isLoading;

  const isShowMore = state.searchQuery
    ? filteredBalanceList.length > (state.displayLimit as number)
    : filteredBalanceList.length < balances.assets.length && !noSearchResults;

  const onShowMore = () => {
    fetch();
    setState((oldState) => ({
      ...oldState,
      displayLimit: (oldState.displayLimit as number) + (displayLimit as number),
    }));
  };

  const resetDisplayLimit = (evt: ChangeEvent<HTMLInputElement>) => {
    setState((oldState) => ({ ...oldState, displayLimit: displayLimit, searchQuery: evt.target.value }));
  };

  const resetSearch = () => {
    setState((oldState) => ({ ...oldState, searchQuery: "" }));
    searchInput.current?.focus();
  };
  return (
    <section className={className ?? ""}>
      <header className="flex items-center justify-between">
        <h2 className="text-3xl text-black font-semibold p-0 m-0 mb-2.5 flex-1">Assets</h2>
        {balances.assets.length > 0 && (
          <div className="flex items-center justify-end mb-2.5">
            <div className="z-50">
              <IgntSearchIcon />
            </div>
            <input
              ref={searchInput}
              type="search"
              autoComplete="off"
              placeholder="Search assets"
              value={state.searchQuery}
              className="w-48 -ml-8 pl-10 pr-10 leading-12 h-12 appearance-none outline-none border-none rounded-xl focus:shadow-outline"
              onChange={(evt) => {
                resetDisplayLimit(evt);
                return evt;
              }}
            />
            {state.searchQuery && (
              <div
                className="z-50 absolute mr-4"
                onClick={() => {
                  resetSearch();
                }}
              >
                <IgntClearIcon />
              </div>
            )}
          </div>
        )}
      </header>
      <table className="table-auto w-full">
        {balances.assets.length ? (
          <thead>
            <tr>
              <td className="text-left text-xs text-black opacity-70">Asset</td>
              <td></td>
              <td className="text-right text-xs text-black opacity-70">Available balance</td>
            </tr>
          </thead>
        ) : null}
        <tbody>
          {filteredBalanceList.slice(0, state.displayLimit).map((balance) => (
            <tr className="py-2" key={balance?.denom}>
              <td className="flex items-center py-5 font-semibold">
                <IgntDenom denom={balance?.denom ?? ""} modifier="avatar" className="mr-6" />
                <IgntDenom denom={balance?.denom ?? ""} />
              </td>
              <td>
                <IgntDenom denom={balance?.denom ?? ""} modifier="path" className="text-normal opacity-50" />
              </td>
              <td className="text-right font-bold py-5 text-black text-lg">
                {new Intl.NumberFormat("en-GB").format(Number(balance?.amount))}
              </td>
            </tr>
          ))}
          {noSearchResults ? (
            <tr>
              <td className="text-center text-black text-md font-bold py-10" colSpan={3}>
                <h4>No results for &lsquo;{state.searchQuery}&rsquo;</h4>
                <p className="text-sm font-normal">Try again with another search</p>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      {address && balances.isLoading && (
        <div role="status" className="w-100 animate-pulse flex flex-col">
          {[...Array(3)].map((_, index) => (
            <div className="flex flex-row justify-between py-7 items-center flex-1" key={"skel-" + index}>
              <div className="flex flex-1 items-center">
                <div className="w-8 h-8 mr-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-700 w-20"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-700 w-40 -mr-2"></div>
            </div>
          ))}
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {(!address || (!balances.isLoading && !balances.assets.length)) && (
        <div className="text-left text-black opacity-75 text-md font-normal py-8">You have no assets</div>
      )}
      {((!balances.isLoading && hasMore) || isShowMore) && (
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

IgntAssets.defaultProps = {
  displayLimit: 1,
};
