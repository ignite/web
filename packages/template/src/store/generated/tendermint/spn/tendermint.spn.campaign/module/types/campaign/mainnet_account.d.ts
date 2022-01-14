import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "tendermint.spn.campaign";
export interface MainnetAccount {
    campaignID: number;
    address: string;
    shares: Coin[];
}
export declare const MainnetAccount: {
    encode(message: MainnetAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MainnetAccount;
    fromJSON(object: any): MainnetAccount;
    toJSON(message: MainnetAccount): unknown;
    fromPartial(object: DeepPartial<MainnetAccount>): MainnetAccount;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
