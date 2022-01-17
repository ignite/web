import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintVouchers } from "./types/campaign/tx";
import { MsgCreateCampaign } from "./types/campaign/tx";
import { MsgUpdateCampaignName } from "./types/campaign/tx";
import { MsgUpdateTotalSupply } from "./types/campaign/tx";
import { MsgUpdateTotalShares } from "./types/campaign/tx";
import { MsgInitializeMainnet } from "./types/campaign/tx";
import { MsgAddVestingOptions } from "./types/campaign/tx";
import { MsgAddShares } from "./types/campaign/tx";
import { MsgBurnVouchers } from "./types/campaign/tx";
import { MsgUnredeemVouchers } from "./types/campaign/tx";
import { MsgRedeemVouchers } from "./types/campaign/tx";
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
    msgMintVouchers: (data: MsgMintVouchers) => EncodeObject;
    msgCreateCampaign: (data: MsgCreateCampaign) => EncodeObject;
    msgUpdateCampaignName: (data: MsgUpdateCampaignName) => EncodeObject;
    msgUpdateTotalSupply: (data: MsgUpdateTotalSupply) => EncodeObject;
    msgUpdateTotalShares: (data: MsgUpdateTotalShares) => EncodeObject;
    msgInitializeMainnet: (data: MsgInitializeMainnet) => EncodeObject;
    msgAddVestingOptions: (data: MsgAddVestingOptions) => EncodeObject;
    msgAddShares: (data: MsgAddShares) => EncodeObject;
    msgBurnVouchers: (data: MsgBurnVouchers) => EncodeObject;
    msgUnredeemVouchers: (data: MsgUnredeemVouchers) => EncodeObject;
    msgRedeemVouchers: (data: MsgRedeemVouchers) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
