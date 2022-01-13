import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "tendermint.spn.campaign";
export interface MainnetVestingAccount {
    campaignID: number;
    address: string;
    vestingOptions: ShareVestingOptions | undefined;
}
export interface ShareVestingOptions {
    delayedVesting: ShareDelayedVesting | undefined;
}
/**
 * ShareDelayedVesting represents options for share delayed vesting
 * Delayed vesting is the type of vesting where all vesting coins are vested
 * once end time is reached
 */
export interface ShareDelayedVesting {
    totalShares: Coin[];
    vesting: Coin[];
    endTime: number;
}
export declare const MainnetVestingAccount: {
    encode(message: MainnetVestingAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MainnetVestingAccount;
    fromJSON(object: any): MainnetVestingAccount;
    toJSON(message: MainnetVestingAccount): unknown;
    fromPartial(object: DeepPartial<MainnetVestingAccount>): MainnetVestingAccount;
};
export declare const ShareVestingOptions: {
    encode(message: ShareVestingOptions, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ShareVestingOptions;
    fromJSON(object: any): ShareVestingOptions;
    toJSON(message: ShareVestingOptions): unknown;
    fromPartial(object: DeepPartial<ShareVestingOptions>): ShareVestingOptions;
};
export declare const ShareDelayedVesting: {
    encode(message: ShareDelayedVesting, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ShareDelayedVesting;
    fromJSON(object: any): ShareDelayedVesting;
    toJSON(message: ShareDelayedVesting): unknown;
    fromPartial(object: DeepPartial<ShareDelayedVesting>): ShareDelayedVesting;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
