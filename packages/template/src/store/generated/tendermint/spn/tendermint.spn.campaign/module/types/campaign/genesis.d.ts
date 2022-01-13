import { Writer, Reader } from "protobufjs/minimal";
import { Campaign } from "../campaign/campaign";
import { CampaignChains } from "../campaign/campaign_chains";
import { MainnetAccount } from "../campaign/mainnet_account";
import { MainnetVestingAccount } from "../campaign/mainnet_vesting_account";
export declare const protobufPackage = "tendermint.spn.campaign";
/** GenesisState defines the campaign module's genesis state. */
export interface GenesisState {
    campaignList: Campaign[];
    campaignCounter: number;
    campaignChainsList: CampaignChains[];
    mainnetAccountList: MainnetAccount[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    mainnetVestingAccountList: MainnetVestingAccount[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
