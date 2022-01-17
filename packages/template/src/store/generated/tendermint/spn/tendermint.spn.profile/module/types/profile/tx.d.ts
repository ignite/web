import { Reader, Writer } from "protobufjs/minimal";
import { ValidatorDescription } from "../profile/validator";
import { CoordinatorDescription } from "../profile/coordinator";
export declare const protobufPackage = "tendermint.spn.profile";
export interface MsgUpdateValidatorDescription {
    address: string;
    description: ValidatorDescription | undefined;
}
export interface MsgUpdateValidatorDescriptionResponse {
}
export interface MsgDeleteValidator {
    address: string;
}
export interface MsgDeleteValidatorResponse {
}
export interface MsgCreateCoordinator {
    address: string;
    description: CoordinatorDescription | undefined;
}
export interface MsgCreateCoordinatorResponse {
    coordinatorID: number;
}
export interface MsgUpdateCoordinatorDescription {
    address: string;
    description: CoordinatorDescription | undefined;
}
export interface MsgUpdateCoordinatorDescriptionResponse {
}
export interface MsgUpdateCoordinatorAddress {
    address: string;
    newAddress: string;
}
export interface MsgUpdateCoordinatorAddressResponse {
}
export interface MsgDeleteCoordinator {
    address: string;
}
export interface MsgDeleteCoordinatorResponse {
    coordinatorID: number;
}
export declare const MsgUpdateValidatorDescription: {
    encode(message: MsgUpdateValidatorDescription, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidatorDescription;
    fromJSON(object: any): MsgUpdateValidatorDescription;
    toJSON(message: MsgUpdateValidatorDescription): unknown;
    fromPartial(object: DeepPartial<MsgUpdateValidatorDescription>): MsgUpdateValidatorDescription;
};
export declare const MsgUpdateValidatorDescriptionResponse: {
    encode(_: MsgUpdateValidatorDescriptionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidatorDescriptionResponse;
    fromJSON(_: any): MsgUpdateValidatorDescriptionResponse;
    toJSON(_: MsgUpdateValidatorDescriptionResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateValidatorDescriptionResponse>): MsgUpdateValidatorDescriptionResponse;
};
export declare const MsgDeleteValidator: {
    encode(message: MsgDeleteValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidator;
    fromJSON(object: any): MsgDeleteValidator;
    toJSON(message: MsgDeleteValidator): unknown;
    fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator;
};
export declare const MsgDeleteValidatorResponse: {
    encode(_: MsgDeleteValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidatorResponse;
    fromJSON(_: any): MsgDeleteValidatorResponse;
    toJSON(_: MsgDeleteValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse;
};
export declare const MsgCreateCoordinator: {
    encode(message: MsgCreateCoordinator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCoordinator;
    fromJSON(object: any): MsgCreateCoordinator;
    toJSON(message: MsgCreateCoordinator): unknown;
    fromPartial(object: DeepPartial<MsgCreateCoordinator>): MsgCreateCoordinator;
};
export declare const MsgCreateCoordinatorResponse: {
    encode(message: MsgCreateCoordinatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCoordinatorResponse;
    fromJSON(object: any): MsgCreateCoordinatorResponse;
    toJSON(message: MsgCreateCoordinatorResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCoordinatorResponse>): MsgCreateCoordinatorResponse;
};
export declare const MsgUpdateCoordinatorDescription: {
    encode(message: MsgUpdateCoordinatorDescription, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCoordinatorDescription;
    fromJSON(object: any): MsgUpdateCoordinatorDescription;
    toJSON(message: MsgUpdateCoordinatorDescription): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCoordinatorDescription>): MsgUpdateCoordinatorDescription;
};
export declare const MsgUpdateCoordinatorDescriptionResponse: {
    encode(_: MsgUpdateCoordinatorDescriptionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCoordinatorDescriptionResponse;
    fromJSON(_: any): MsgUpdateCoordinatorDescriptionResponse;
    toJSON(_: MsgUpdateCoordinatorDescriptionResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCoordinatorDescriptionResponse>): MsgUpdateCoordinatorDescriptionResponse;
};
export declare const MsgUpdateCoordinatorAddress: {
    encode(message: MsgUpdateCoordinatorAddress, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCoordinatorAddress;
    fromJSON(object: any): MsgUpdateCoordinatorAddress;
    toJSON(message: MsgUpdateCoordinatorAddress): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCoordinatorAddress>): MsgUpdateCoordinatorAddress;
};
export declare const MsgUpdateCoordinatorAddressResponse: {
    encode(_: MsgUpdateCoordinatorAddressResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCoordinatorAddressResponse;
    fromJSON(_: any): MsgUpdateCoordinatorAddressResponse;
    toJSON(_: MsgUpdateCoordinatorAddressResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCoordinatorAddressResponse>): MsgUpdateCoordinatorAddressResponse;
};
export declare const MsgDeleteCoordinator: {
    encode(message: MsgDeleteCoordinator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCoordinator;
    fromJSON(object: any): MsgDeleteCoordinator;
    toJSON(message: MsgDeleteCoordinator): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCoordinator>): MsgDeleteCoordinator;
};
export declare const MsgDeleteCoordinatorResponse: {
    encode(message: MsgDeleteCoordinatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCoordinatorResponse;
    fromJSON(object: any): MsgDeleteCoordinatorResponse;
    toJSON(message: MsgDeleteCoordinatorResponse): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCoordinatorResponse>): MsgDeleteCoordinatorResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    UpdateValidatorDescription(request: MsgUpdateValidatorDescription): Promise<MsgUpdateValidatorDescriptionResponse>;
    DeleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
    CreateCoordinator(request: MsgCreateCoordinator): Promise<MsgCreateCoordinatorResponse>;
    UpdateCoordinatorDescription(request: MsgUpdateCoordinatorDescription): Promise<MsgUpdateCoordinatorDescriptionResponse>;
    UpdateCoordinatorAddress(request: MsgUpdateCoordinatorAddress): Promise<MsgUpdateCoordinatorAddressResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteCoordinator(request: MsgDeleteCoordinator): Promise<MsgDeleteCoordinatorResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateValidatorDescription(request: MsgUpdateValidatorDescription): Promise<MsgUpdateValidatorDescriptionResponse>;
    DeleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
    CreateCoordinator(request: MsgCreateCoordinator): Promise<MsgCreateCoordinatorResponse>;
    UpdateCoordinatorDescription(request: MsgUpdateCoordinatorDescription): Promise<MsgUpdateCoordinatorDescriptionResponse>;
    UpdateCoordinatorAddress(request: MsgUpdateCoordinatorAddress): Promise<MsgUpdateCoordinatorAddressResponse>;
    DeleteCoordinator(request: MsgDeleteCoordinator): Promise<MsgDeleteCoordinatorResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
