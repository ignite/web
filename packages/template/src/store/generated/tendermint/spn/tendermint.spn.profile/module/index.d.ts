import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCoordinator } from "./types/profile/tx";
import { MsgCreateCoordinator } from "./types/profile/tx";
import { MsgUpdateCoordinatorDescription } from "./types/profile/tx";
import { MsgUpdateCoordinatorAddress } from "./types/profile/tx";
import { MsgUpdateValidatorDescription } from "./types/profile/tx";
import { MsgDeleteValidator } from "./types/profile/tx";
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
    msgDeleteCoordinator: (data: MsgDeleteCoordinator) => EncodeObject;
    msgCreateCoordinator: (data: MsgCreateCoordinator) => EncodeObject;
    msgUpdateCoordinatorDescription: (data: MsgUpdateCoordinatorDescription) => EncodeObject;
    msgUpdateCoordinatorAddress: (data: MsgUpdateCoordinatorAddress) => EncodeObject;
    msgUpdateValidatorDescription: (data: MsgUpdateValidatorDescription) => EncodeObject;
    msgDeleteValidator: (data: MsgDeleteValidator) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
