import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.spn.profile";
export interface Validator {
    address: string;
    description: ValidatorDescription | undefined;
}
export interface ValidatorDescription {
    identity: string;
    moniker: string;
    website: string;
    securityContact: string;
    details: string;
}
export declare const Validator: {
    encode(message: Validator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const ValidatorDescription: {
    encode(message: ValidatorDescription, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ValidatorDescription;
    fromJSON(object: any): ValidatorDescription;
    toJSON(message: ValidatorDescription): unknown;
    fromPartial(object: DeepPartial<ValidatorDescription>): ValidatorDescription;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
