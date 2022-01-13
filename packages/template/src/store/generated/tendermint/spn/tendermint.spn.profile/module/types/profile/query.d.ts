import { Reader, Writer } from "protobufjs/minimal";
import { Validator } from "../profile/validator";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Coordinator, CoordinatorByAddress } from "../profile/coordinator";
export declare const protobufPackage = "tendermint.spn.profile";
export interface QueryGetValidatorRequest {
    address: string;
}
export interface QueryGetValidatorResponse {
    validator: Validator | undefined;
}
export interface QueryAllValidatorRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllValidatorResponse {
    validator: Validator[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCoordinatorRequest {
    coordinatorID: number;
}
export interface QueryGetCoordinatorResponse {
    coordinator: Coordinator | undefined;
}
export interface QueryAllCoordinatorRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCoordinatorResponse {
    coordinator: Coordinator[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCoordinatorByAddressRequest {
    address: string;
}
export interface QueryGetCoordinatorByAddressResponse {
    coordinatorByAddress: CoordinatorByAddress | undefined;
}
export declare const QueryGetValidatorRequest: {
    encode(message: QueryGetValidatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetValidatorRequest;
    fromJSON(object: any): QueryGetValidatorRequest;
    toJSON(message: QueryGetValidatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetValidatorRequest>): QueryGetValidatorRequest;
};
export declare const QueryGetValidatorResponse: {
    encode(message: QueryGetValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetValidatorResponse;
    fromJSON(object: any): QueryGetValidatorResponse;
    toJSON(message: QueryGetValidatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetValidatorResponse>): QueryGetValidatorResponse;
};
export declare const QueryAllValidatorRequest: {
    encode(message: QueryAllValidatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllValidatorRequest;
    fromJSON(object: any): QueryAllValidatorRequest;
    toJSON(message: QueryAllValidatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllValidatorRequest>): QueryAllValidatorRequest;
};
export declare const QueryAllValidatorResponse: {
    encode(message: QueryAllValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllValidatorResponse;
    fromJSON(object: any): QueryAllValidatorResponse;
    toJSON(message: QueryAllValidatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllValidatorResponse>): QueryAllValidatorResponse;
};
export declare const QueryGetCoordinatorRequest: {
    encode(message: QueryGetCoordinatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCoordinatorRequest;
    fromJSON(object: any): QueryGetCoordinatorRequest;
    toJSON(message: QueryGetCoordinatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCoordinatorRequest>): QueryGetCoordinatorRequest;
};
export declare const QueryGetCoordinatorResponse: {
    encode(message: QueryGetCoordinatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCoordinatorResponse;
    fromJSON(object: any): QueryGetCoordinatorResponse;
    toJSON(message: QueryGetCoordinatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCoordinatorResponse>): QueryGetCoordinatorResponse;
};
export declare const QueryAllCoordinatorRequest: {
    encode(message: QueryAllCoordinatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCoordinatorRequest;
    fromJSON(object: any): QueryAllCoordinatorRequest;
    toJSON(message: QueryAllCoordinatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCoordinatorRequest>): QueryAllCoordinatorRequest;
};
export declare const QueryAllCoordinatorResponse: {
    encode(message: QueryAllCoordinatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCoordinatorResponse;
    fromJSON(object: any): QueryAllCoordinatorResponse;
    toJSON(message: QueryAllCoordinatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCoordinatorResponse>): QueryAllCoordinatorResponse;
};
export declare const QueryGetCoordinatorByAddressRequest: {
    encode(message: QueryGetCoordinatorByAddressRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCoordinatorByAddressRequest;
    fromJSON(object: any): QueryGetCoordinatorByAddressRequest;
    toJSON(message: QueryGetCoordinatorByAddressRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCoordinatorByAddressRequest>): QueryGetCoordinatorByAddressRequest;
};
export declare const QueryGetCoordinatorByAddressResponse: {
    encode(message: QueryGetCoordinatorByAddressResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCoordinatorByAddressResponse;
    fromJSON(object: any): QueryGetCoordinatorByAddressResponse;
    toJSON(message: QueryGetCoordinatorByAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCoordinatorByAddressResponse>): QueryGetCoordinatorByAddressResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * this line is used by starport scaffolding # 2
     * Queries a validator by index.
     */
    Validator(request: QueryGetValidatorRequest): Promise<QueryGetValidatorResponse>;
    /** Queries a list of validator items. */
    ValidatorAll(request: QueryAllValidatorRequest): Promise<QueryAllValidatorResponse>;
    /** Queries a coordinator by id. */
    Coordinator(request: QueryGetCoordinatorRequest): Promise<QueryGetCoordinatorResponse>;
    /** Queries a list of coordinator items. */
    CoordinatorAll(request: QueryAllCoordinatorRequest): Promise<QueryAllCoordinatorResponse>;
    /** Queries a coordinatorByAddress by index. */
    CoordinatorByAddress(request: QueryGetCoordinatorByAddressRequest): Promise<QueryGetCoordinatorByAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Validator(request: QueryGetValidatorRequest): Promise<QueryGetValidatorResponse>;
    ValidatorAll(request: QueryAllValidatorRequest): Promise<QueryAllValidatorResponse>;
    Coordinator(request: QueryGetCoordinatorRequest): Promise<QueryGetCoordinatorResponse>;
    CoordinatorAll(request: QueryAllCoordinatorRequest): Promise<QueryAllCoordinatorResponse>;
    CoordinatorByAddress(request: QueryGetCoordinatorByAddressRequest): Promise<QueryGetCoordinatorByAddressResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
