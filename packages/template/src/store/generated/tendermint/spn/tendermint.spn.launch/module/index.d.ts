import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSettleRequest } from "./types/launch/tx";
import { MsgEditChain } from "./types/launch/tx";
import { MsgRevertLaunch } from "./types/launch/tx";
import { MsgRequestAddAccount } from "./types/launch/tx";
import { MsgRequestRemoveAccount } from "./types/launch/tx";
import { MsgTriggerLaunch } from "./types/launch/tx";
import { MsgCreateChain } from "./types/launch/tx";
import { MsgRequestRemoveValidator } from "./types/launch/tx";
import { MsgRequestAddVestingAccount } from "./types/launch/tx";
import { MsgRequestAddValidator } from "./types/launch/tx";
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
    msgSettleRequest: (data: MsgSettleRequest) => EncodeObject;
    msgEditChain: (data: MsgEditChain) => EncodeObject;
    msgRevertLaunch: (data: MsgRevertLaunch) => EncodeObject;
    msgRequestAddAccount: (data: MsgRequestAddAccount) => EncodeObject;
    msgRequestRemoveAccount: (data: MsgRequestRemoveAccount) => EncodeObject;
    msgTriggerLaunch: (data: MsgTriggerLaunch) => EncodeObject;
    msgCreateChain: (data: MsgCreateChain) => EncodeObject;
    msgRequestRemoveValidator: (data: MsgRequestRemoveValidator) => EncodeObject;
    msgRequestAddVestingAccount: (data: MsgRequestAddVestingAccount) => EncodeObject;
    msgRequestAddValidator: (data: MsgRequestAddValidator) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
