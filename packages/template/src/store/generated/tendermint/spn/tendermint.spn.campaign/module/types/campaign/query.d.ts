import { Reader, Writer } from "protobufjs/minimal";
import { Campaign } from "../campaign/campaign";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { CampaignChains } from "../campaign/campaign_chains";
import { MainnetAccount } from "../campaign/mainnet_account";
import { MainnetVestingAccount } from "../campaign/mainnet_vesting_account";
export declare const protobufPackage = "tendermint.spn.campaign";
export interface QueryGetCampaignRequest {
    campaignID: number;
}
export interface QueryGetCampaignResponse {
    campaign: Campaign | undefined;
}
export interface QueryAllCampaignRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCampaignResponse {
    campaign: Campaign[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCampaignChainsRequest {
    campaignID: number;
}
export interface QueryGetCampaignChainsResponse {
    campaignChains: CampaignChains | undefined;
}
export interface QueryGetMainnetAccountRequest {
    campaignID: number;
    address: string;
}
export interface QueryGetMainnetAccountResponse {
    mainnetAccount: MainnetAccount | undefined;
}
export interface QueryAllMainnetAccountRequest {
    campaignID: number;
    pagination: PageRequest | undefined;
}
export interface QueryAllMainnetAccountResponse {
    mainnetAccount: MainnetAccount[];
    pagination: PageResponse | undefined;
}
export interface QueryGetMainnetVestingAccountRequest {
    campaignID: number;
    address: string;
}
export interface QueryGetMainnetVestingAccountResponse {
    mainnetVestingAccount: MainnetVestingAccount | undefined;
}
export interface QueryAllMainnetVestingAccountRequest {
    campaignID: number;
    pagination: PageRequest | undefined;
}
export interface QueryAllMainnetVestingAccountResponse {
    mainnetVestingAccount: MainnetVestingAccount[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetCampaignRequest: {
    encode(message: QueryGetCampaignRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCampaignRequest;
    fromJSON(object: any): QueryGetCampaignRequest;
    toJSON(message: QueryGetCampaignRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCampaignRequest>): QueryGetCampaignRequest;
};
export declare const QueryGetCampaignResponse: {
    encode(message: QueryGetCampaignResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCampaignResponse;
    fromJSON(object: any): QueryGetCampaignResponse;
    toJSON(message: QueryGetCampaignResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCampaignResponse>): QueryGetCampaignResponse;
};
export declare const QueryAllCampaignRequest: {
    encode(message: QueryAllCampaignRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCampaignRequest;
    fromJSON(object: any): QueryAllCampaignRequest;
    toJSON(message: QueryAllCampaignRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCampaignRequest>): QueryAllCampaignRequest;
};
export declare const QueryAllCampaignResponse: {
    encode(message: QueryAllCampaignResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCampaignResponse;
    fromJSON(object: any): QueryAllCampaignResponse;
    toJSON(message: QueryAllCampaignResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCampaignResponse>): QueryAllCampaignResponse;
};
export declare const QueryGetCampaignChainsRequest: {
    encode(message: QueryGetCampaignChainsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCampaignChainsRequest;
    fromJSON(object: any): QueryGetCampaignChainsRequest;
    toJSON(message: QueryGetCampaignChainsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCampaignChainsRequest>): QueryGetCampaignChainsRequest;
};
export declare const QueryGetCampaignChainsResponse: {
    encode(message: QueryGetCampaignChainsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCampaignChainsResponse;
    fromJSON(object: any): QueryGetCampaignChainsResponse;
    toJSON(message: QueryGetCampaignChainsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCampaignChainsResponse>): QueryGetCampaignChainsResponse;
};
export declare const QueryGetMainnetAccountRequest: {
    encode(message: QueryGetMainnetAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMainnetAccountRequest;
    fromJSON(object: any): QueryGetMainnetAccountRequest;
    toJSON(message: QueryGetMainnetAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMainnetAccountRequest>): QueryGetMainnetAccountRequest;
};
export declare const QueryGetMainnetAccountResponse: {
    encode(message: QueryGetMainnetAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMainnetAccountResponse;
    fromJSON(object: any): QueryGetMainnetAccountResponse;
    toJSON(message: QueryGetMainnetAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMainnetAccountResponse>): QueryGetMainnetAccountResponse;
};
export declare const QueryAllMainnetAccountRequest: {
    encode(message: QueryAllMainnetAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMainnetAccountRequest;
    fromJSON(object: any): QueryAllMainnetAccountRequest;
    toJSON(message: QueryAllMainnetAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMainnetAccountRequest>): QueryAllMainnetAccountRequest;
};
export declare const QueryAllMainnetAccountResponse: {
    encode(message: QueryAllMainnetAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMainnetAccountResponse;
    fromJSON(object: any): QueryAllMainnetAccountResponse;
    toJSON(message: QueryAllMainnetAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMainnetAccountResponse>): QueryAllMainnetAccountResponse;
};
export declare const QueryGetMainnetVestingAccountRequest: {
    encode(message: QueryGetMainnetVestingAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMainnetVestingAccountRequest;
    fromJSON(object: any): QueryGetMainnetVestingAccountRequest;
    toJSON(message: QueryGetMainnetVestingAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMainnetVestingAccountRequest>): QueryGetMainnetVestingAccountRequest;
};
export declare const QueryGetMainnetVestingAccountResponse: {
    encode(message: QueryGetMainnetVestingAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMainnetVestingAccountResponse;
    fromJSON(object: any): QueryGetMainnetVestingAccountResponse;
    toJSON(message: QueryGetMainnetVestingAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMainnetVestingAccountResponse>): QueryGetMainnetVestingAccountResponse;
};
export declare const QueryAllMainnetVestingAccountRequest: {
    encode(message: QueryAllMainnetVestingAccountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMainnetVestingAccountRequest;
    fromJSON(object: any): QueryAllMainnetVestingAccountRequest;
    toJSON(message: QueryAllMainnetVestingAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMainnetVestingAccountRequest>): QueryAllMainnetVestingAccountRequest;
};
export declare const QueryAllMainnetVestingAccountResponse: {
    encode(message: QueryAllMainnetVestingAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMainnetVestingAccountResponse;
    fromJSON(object: any): QueryAllMainnetVestingAccountResponse;
    toJSON(message: QueryAllMainnetVestingAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMainnetVestingAccountResponse>): QueryAllMainnetVestingAccountResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a campaign by id. */
    Campaign(request: QueryGetCampaignRequest): Promise<QueryGetCampaignResponse>;
    /** Queries a list of campaign items. */
    CampaignAll(request: QueryAllCampaignRequest): Promise<QueryAllCampaignResponse>;
    /** Queries a campaignChains by index. */
    CampaignChains(request: QueryGetCampaignChainsRequest): Promise<QueryGetCampaignChainsResponse>;
    /** Queries a mainnetAccount by index. */
    MainnetAccount(request: QueryGetMainnetAccountRequest): Promise<QueryGetMainnetAccountResponse>;
    /** Queries a list of mainnetAccount items. */
    MainnetAccountAll(request: QueryAllMainnetAccountRequest): Promise<QueryAllMainnetAccountResponse>;
    /** Queries a mainnetVestingAccount by index. */
    MainnetVestingAccount(request: QueryGetMainnetVestingAccountRequest): Promise<QueryGetMainnetVestingAccountResponse>;
    /** Queries a list of mainnetVestingAccount items. */
    MainnetVestingAccountAll(request: QueryAllMainnetVestingAccountRequest): Promise<QueryAllMainnetVestingAccountResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Campaign(request: QueryGetCampaignRequest): Promise<QueryGetCampaignResponse>;
    CampaignAll(request: QueryAllCampaignRequest): Promise<QueryAllCampaignResponse>;
    CampaignChains(request: QueryGetCampaignChainsRequest): Promise<QueryGetCampaignChainsResponse>;
    MainnetAccount(request: QueryGetMainnetAccountRequest): Promise<QueryGetMainnetAccountResponse>;
    MainnetAccountAll(request: QueryAllMainnetAccountRequest): Promise<QueryAllMainnetAccountResponse>;
    MainnetVestingAccount(request: QueryGetMainnetVestingAccountRequest): Promise<QueryGetMainnetVestingAccountResponse>;
    MainnetVestingAccountAll(request: QueryAllMainnetVestingAccountRequest): Promise<QueryAllMainnetVestingAccountResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
