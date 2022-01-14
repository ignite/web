import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "tendermint.spn.launch";
export interface VestingAccount {
    launchID: number;
    address: string;
    vestingOptions: VestingOptions | undefined;
}
export interface VestingOptions {
    delayedVesting: DelayedVesting | undefined;
}
/**
 * DelayedVesting represents options for delayed vesting
 * Delayed vesting is the type of vesting where all vesting coins are vested
 * once end time is reached
 */
export interface DelayedVesting {
    totalBalance: Coin[];
    vesting: Coin[];
    endTime: number;
}
export declare const VestingAccount: {
    encode(message: VestingAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): VestingAccount;
    fromJSON(object: any): VestingAccount;
    toJSON(message: VestingAccount): unknown;
    fromPartial(object: DeepPartial<VestingAccount>): VestingAccount;
};
export declare const VestingOptions: {
    encode(message: VestingOptions, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): VestingOptions;
    fromJSON(object: any): VestingOptions;
    toJSON(message: VestingOptions): unknown;
    fromPartial(object: DeepPartial<VestingOptions>): VestingOptions;
};
export declare const DelayedVesting: {
    encode(message: DelayedVesting, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DelayedVesting;
    fromJSON(object: any): DelayedVesting;
    toJSON(message: DelayedVesting): unknown;
    fromPartial(object: DeepPartial<DelayedVesting>): DelayedVesting;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
