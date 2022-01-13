import { Reader, Writer } from "protobufjs/minimal";
import { Chain } from "../launch/chain";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { GenesisAccount } from "../launch/genesis_account";
import { VestingAccount } from "../launch/vesting_account";
import { GenesisValidator } from "../launch/genesis_validator";
import { Request } from "../launch/request";
import { Params } from "../launch/params";
export declare const protobufPackage = "tendermint.spn.launch";
export interface QueryGetChainRequest {
    launchID: number;
}
export interface QueryGetChainResponse {
    chain: Chain | undefined;
}
export interface QueryAllChainRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllChainResponse {
    chain: Chain[];
    pagination: PageResponse | undefined;
}
export interface QueryGetGenesisAccountRequest {
    launchID: number;
    address: string;
}
export interface QueryGetGenesisAccountResponse {
    genesisAccount: GenesisAccount | undefined;
}
export interface QueryAllGenesisAccountRequest {
    launchID: number;
    pagination: PageRequest | undefined;
}
export interface QueryAllGenesisAccountResponse {
    genesisAccount: GenesisAccount[];
    pagination: PageResponse | undefined;
}
export interface QueryGetVestingAccountRequest {
    launchID: number;
    address: string;
}
export interface QueryGetVestingAccountResponse {
    vestingAccount: VestingAccount | undefined;
}
export interface QueryAllVestingAccountRequest {
    launchID: number;
    pagination: PageRequest | undefined;
}
export interface QueryAllVestingAccountResponse {
    vestingAccount: VestingAccount[];
    pagination: PageResponse | undefined;
}
export interface QueryGetGenesisValidatorRequest {
    launchID: number;
    address: string;
}
export interface QueryGetGenesisValidatorResponse {
    genesisValidator: GenesisValidator | undefined;
}
export interface QueryAllGenesisValidatorRequest {
    launchID: number;
    pagination: PageRequest | undefined;
}
export interface QueryAllGenesisValidatorResponse {
    genesisValidator: GenesisValidator[];
    pagination: PageResponse | undefined;
}
export interface QueryGetRequestRequest {
    launchID: number;
    requestID: number;
}
export interface QueryGetRequestResponse {
    request: Request | undefined;
}
export interface QueryAllRequestRequest {
    launchID: number;
    pagination: PageRequest | undefined;
}
export interface QueryAllRequestResponse {
    request: Request[];
    pagination: PageResponse | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export declare const QueryGetChainRequest: {
    encode(message: QueryGetChainRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetChainRequest;
    fromJSON(object: any): QueryGetChainRequest;
    toJSON(message: QueryGetChainRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetChainRequest>): QueryGetChainRequest;
};
export declare const QueryGetChainResponse: {
    encode(message: QueryGetChainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetChainResponse;
    fromJSON(object: any): QueryGetChainResponse;
    toJSON(message: QueryGetChainResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetChainResponse>): QueryGetChainResponse;
};
export declare const QueryAllChainRequest: {
    encode(message: QueryAllChainRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllChainRequest;
    fromJSON(object: any): QueryAllChainRequest;
    toJSON(message: QueryAllChainRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllChainRequest>): QueryAllChainRequest;
};
export declare const QueryAllChainResponse: {
    encode(message: QueryAllChainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllChainResponse;
    fromJSON(object: any): QueryAllChainResponse;
    toJSON(message: QueryAllChainResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllChainResponse>): QueryAllChainResponse;
};
export declare const QueryGetGenesisAccountRequest: {
    encode(message: QueryGetGenesisAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetGenesisAccountRequest;
    fromJSON(object: any): QueryGetGenesisAccountRequest;
    toJSON(message: QueryGetGenesisAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetGenesisAccountRequest>): QueryGetGenesisAccountRequest;
};
export declare const QueryGetGenesisAccountResponse: {
    encode(message: QueryGetGenesisAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetGenesisAccountResponse;
    fromJSON(object: any): QueryGetGenesisAccountResponse;
    toJSON(message: QueryGetGenesisAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetGenesisAccountResponse>): QueryGetGenesisAccountResponse;
};
export declare const QueryAllGenesisAccountRequest: {
    encode(message: QueryAllGenesisAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllGenesisAccountRequest;
    fromJSON(object: any): QueryAllGenesisAccountRequest;
    toJSON(message: QueryAllGenesisAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllGenesisAccountRequest>): QueryAllGenesisAccountRequest;
};
export declare const QueryAllGenesisAccountResponse: {
    encode(message: QueryAllGenesisAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllGenesisAccountResponse;
    fromJSON(object: any): QueryAllGenesisAccountResponse;
    toJSON(message: QueryAllGenesisAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllGenesisAccountResponse>): QueryAllGenesisAccountResponse;
};
export declare const QueryGetVestingAccountRequest: {
    encode(message: QueryGetVestingAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetVestingAccountRequest;
    fromJSON(object: any): QueryGetVestingAccountRequest;
    toJSON(message: QueryGetVestingAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetVestingAccountRequest>): QueryGetVestingAccountRequest;
};
export declare const QueryGetVestingAccountResponse: {
    encode(message: QueryGetVestingAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetVestingAccountResponse;
    fromJSON(object: any): QueryGetVestingAccountResponse;
    toJSON(message: QueryGetVestingAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetVestingAccountResponse>): QueryGetVestingAccountResponse;
};
export declare const QueryAllVestingAccountRequest: {
    encode(message: QueryAllVestingAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllVestingAccountRequest;
    fromJSON(object: any): QueryAllVestingAccountRequest;
    toJSON(message: QueryAllVestingAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllVestingAccountRequest>): QueryAllVestingAccountRequest;
};
export declare const QueryAllVestingAccountResponse: {
    encode(message: QueryAllVestingAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllVestingAccountResponse;
    fromJSON(object: any): QueryAllVestingAccountResponse;
    toJSON(message: QueryAllVestingAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllVestingAccountResponse>): QueryAllVestingAccountResponse;
};
export declare const QueryGetGenesisValidatorRequest: {
    encode(message: QueryGetGenesisValidatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetGenesisValidatorRequest;
    fromJSON(object: any): QueryGetGenesisValidatorRequest;
    toJSON(message: QueryGetGenesisValidatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetGenesisValidatorRequest>): QueryGetGenesisValidatorRequest;
};
export declare const QueryGetGenesisValidatorResponse: {
    encode(message: QueryGetGenesisValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetGenesisValidatorResponse;
    fromJSON(object: any): QueryGetGenesisValidatorResponse;
    toJSON(message: QueryGetGenesisValidatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetGenesisValidatorResponse>): QueryGetGenesisValidatorResponse;
};
export declare const QueryAllGenesisValidatorRequest: {
    encode(message: QueryAllGenesisValidatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllGenesisValidatorRequest;
    fromJSON(object: any): QueryAllGenesisValidatorRequest;
    toJSON(message: QueryAllGenesisValidatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllGenesisValidatorRequest>): QueryAllGenesisValidatorRequest;
};
export declare const QueryAllGenesisValidatorResponse: {
    encode(message: QueryAllGenesisValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllGenesisValidatorResponse;
    fromJSON(object: any): QueryAllGenesisValidatorResponse;
    toJSON(message: QueryAllGenesisValidatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllGenesisValidatorResponse>): QueryAllGenesisValidatorResponse;
};
export declare const QueryGetRequestRequest: {
    encode(message: QueryGetRequestRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRequestRequest;
    fromJSON(object: any): QueryGetRequestRequest;
    toJSON(message: QueryGetRequestRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRequestRequest>): QueryGetRequestRequest;
};
export declare const QueryGetRequestResponse: {
    encode(message: QueryGetRequestResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRequestResponse;
    fromJSON(object: any): QueryGetRequestResponse;
    toJSON(message: QueryGetRequestResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRequestResponse>): QueryGetRequestResponse;
};
export declare const QueryAllRequestRequest: {
    encode(message: QueryAllRequestRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRequestRequest;
    fromJSON(object: any): QueryAllRequestRequest;
    toJSON(message: QueryAllRequestRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllRequestRequest>): QueryAllRequestRequest;
};
export declare const QueryAllRequestResponse: {
    encode(message: QueryAllRequestResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRequestResponse;
    fromJSON(object: any): QueryAllRequestResponse;
    toJSON(message: QueryAllRequestResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllRequestResponse>): QueryAllRequestResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a chain by index. */
    Chain(request: QueryGetChainRequest): Promise<QueryGetChainResponse>;
    /** Queries a list of chain items. */
    ChainAll(request: QueryAllChainRequest): Promise<QueryAllChainResponse>;
    /** Queries a genesisAccount by index. */
    GenesisAccount(request: QueryGetGenesisAccountRequest): Promise<QueryGetGenesisAccountResponse>;
    /** Queries a list of genesisAccount items. */
    GenesisAccountAll(request: QueryAllGenesisAccountRequest): Promise<QueryAllGenesisAccountResponse>;
    /** Queries a vestingAccount by index. */
    VestingAccount(request: QueryGetVestingAccountRequest): Promise<QueryGetVestingAccountResponse>;
    /** Queries a list of vestingAccount items. */
    VestingAccountAll(request: QueryAllVestingAccountRequest): Promise<QueryAllVestingAccountResponse>;
    /** Queries a genesisValidator by index. */
    GenesisValidator(request: QueryGetGenesisValidatorRequest): Promise<QueryGetGenesisValidatorResponse>;
    /** Queries a list of genesisValidator items. */
    GenesisValidatorAll(request: QueryAllGenesisValidatorRequest): Promise<QueryAllGenesisValidatorResponse>;
    /** Queries a request by index. */
    Request(request: QueryGetRequestRequest): Promise<QueryGetRequestResponse>;
    /** Queries a list of request for a chain. */
    RequestAll(request: QueryAllRequestRequest): Promise<QueryAllRequestResponse>;
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Chain(request: QueryGetChainRequest): Promise<QueryGetChainResponse>;
    ChainAll(request: QueryAllChainRequest): Promise<QueryAllChainResponse>;
    GenesisAccount(request: QueryGetGenesisAccountRequest): Promise<QueryGetGenesisAccountResponse>;
    GenesisAccountAll(request: QueryAllGenesisAccountRequest): Promise<QueryAllGenesisAccountResponse>;
    VestingAccount(request: QueryGetVestingAccountRequest): Promise<QueryGetVestingAccountResponse>;
    VestingAccountAll(request: QueryAllVestingAccountRequest): Promise<QueryAllVestingAccountResponse>;
    GenesisValidator(request: QueryGetGenesisValidatorRequest): Promise<QueryGetGenesisValidatorResponse>;
    GenesisValidatorAll(request: QueryAllGenesisValidatorRequest): Promise<QueryAllGenesisValidatorResponse>;
    Request(request: QueryGetRequestRequest): Promise<QueryGetRequestResponse>;
    RequestAll(request: QueryAllRequestRequest): Promise<QueryAllRequestResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
