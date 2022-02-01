import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgWithdrawWithinBatch } from "./types/tendermint/liquidity/v1beta1/tx";
import { MsgCreatePool } from "./types/tendermint/liquidity/v1beta1/tx";
import { MsgDepositWithinBatch } from "./types/tendermint/liquidity/v1beta1/tx";
import { MsgSwapWithinBatch } from "./types/tendermint/liquidity/v1beta1/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgWithdrawWithinBatch: (data: MsgWithdrawWithinBatch) => EncodeObject;
    msgCreatePool: (data: MsgCreatePool) => EncodeObject;
    msgDepositWithinBatch: (data: MsgDepositWithinBatch) => EncodeObject;
    msgSwapWithinBatch: (data: MsgSwapWithinBatch) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
