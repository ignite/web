import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "tendermint.spn.campaign";
export interface Campaign {
    campaignID: number;
    campaignName: string;
    coordinatorID: number;
    mainnetID: number;
    mainnetInitialized: boolean;
    totalSupply: Coin[];
    allocatedShares: Coin[];
    dynamicShares: boolean;
    totalShares: Coin[];
}
export declare const Campaign: {
    encode(message: Campaign, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Campaign;
    fromJSON(object: any): Campaign;
    toJSON(message: Campaign): unknown;
    fromPartial(object: DeepPartial<Campaign>): Campaign;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
