import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "tendermint.spn.launch";
export interface GenesisValidator {
    launchID: number;
    address: string;
    genTx: Uint8Array;
    consPubKey: Uint8Array;
    selfDelegation: Coin | undefined;
    peer: string;
}
export declare const GenesisValidator: {
    encode(message: GenesisValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisValidator;
    fromJSON(object: any): GenesisValidator;
    toJSON(message: GenesisValidator): unknown;
    fromPartial(object: DeepPartial<GenesisValidator>): GenesisValidator;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
