import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { ShareVestingOptions } from "../campaign/mainnet_vesting_account";
export declare const protobufPackage = "tendermint.spn.campaign";
export interface MsgCreateCampaign {
    coordinator: string;
    campaignName: string;
    totalSupply: Coin[];
}
export interface MsgCreateCampaignResponse {
    campaignID: number;
}
export interface MsgUpdateCampaignName {
    coordinator: string;
    campaignID: number;
    name: string;
}
export interface MsgUpdateCampaignNameResponse {
}
export interface MsgUpdateTotalSupply {
    coordinator: string;
    campaignID: number;
    totalSupplyUpdate: Coin[];
}
export interface MsgUpdateTotalSupplyResponse {
}
export interface MsgUpdateTotalShares {
    coordinator: string;
    campaignID: number;
    totalShares: Coin[];
}
export interface MsgUpdateTotalSharesResponse {
}
export interface MsgInitializeMainnet {
    coordinator: string;
    campaignID: number;
    sourceURL: string;
    sourceHash: string;
    mainnetChainID: string;
}
export interface MsgInitializeMainnetResponse {
    mainnetID: number;
}
export interface MsgAddShares {
    coordinator: string;
    campaignID: number;
    address: string;
    shares: Coin[];
}
export interface MsgAddSharesResponse {
}
export interface MsgAddVestingOptions {
    coordinator: string;
    campaignID: number;
    address: string;
    vestingOptions: ShareVestingOptions | undefined;
}
export interface MsgAddVestingOptionsResponse {
}
export interface MsgMintVouchers {
    coordinator: string;
    campaignID: number;
    shares: Coin[];
}
export interface MsgMintVouchersResponse {
}
export interface MsgBurnVouchers {
    sender: string;
    campaignID: number;
    vouchers: Coin[];
}
export interface MsgBurnVouchersResponse {
}
export interface MsgRedeemVouchers {
    sender: string;
    campaignID: number;
    account: string;
    vouchers: Coin[];
}
export interface MsgRedeemVouchersResponse {
}
export interface MsgUnredeemVouchers {
    sender: string;
    campaignID: number;
    shares: Coin[];
}
export interface MsgUnredeemVouchersResponse {
}
export declare const MsgCreateCampaign: {
    encode(message: MsgCreateCampaign, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCampaign;
    fromJSON(object: any): MsgCreateCampaign;
    toJSON(message: MsgCreateCampaign): unknown;
    fromPartial(object: DeepPartial<MsgCreateCampaign>): MsgCreateCampaign;
};
export declare const MsgCreateCampaignResponse: {
    encode(message: MsgCreateCampaignResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCampaignResponse;
    fromJSON(object: any): MsgCreateCampaignResponse;
    toJSON(message: MsgCreateCampaignResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCampaignResponse>): MsgCreateCampaignResponse;
};
export declare const MsgUpdateCampaignName: {
    encode(message: MsgUpdateCampaignName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCampaignName;
    fromJSON(object: any): MsgUpdateCampaignName;
    toJSON(message: MsgUpdateCampaignName): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCampaignName>): MsgUpdateCampaignName;
};
export declare const MsgUpdateCampaignNameResponse: {
    encode(_: MsgUpdateCampaignNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCampaignNameResponse;
    fromJSON(_: any): MsgUpdateCampaignNameResponse;
    toJSON(_: MsgUpdateCampaignNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCampaignNameResponse>): MsgUpdateCampaignNameResponse;
};
export declare const MsgUpdateTotalSupply: {
    encode(message: MsgUpdateTotalSupply, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTotalSupply;
    fromJSON(object: any): MsgUpdateTotalSupply;
    toJSON(message: MsgUpdateTotalSupply): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTotalSupply>): MsgUpdateTotalSupply;
};
export declare const MsgUpdateTotalSupplyResponse: {
    encode(_: MsgUpdateTotalSupplyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTotalSupplyResponse;
    fromJSON(_: any): MsgUpdateTotalSupplyResponse;
    toJSON(_: MsgUpdateTotalSupplyResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTotalSupplyResponse>): MsgUpdateTotalSupplyResponse;
};
export declare const MsgUpdateTotalShares: {
    encode(message: MsgUpdateTotalShares, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTotalShares;
    fromJSON(object: any): MsgUpdateTotalShares;
    toJSON(message: MsgUpdateTotalShares): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTotalShares>): MsgUpdateTotalShares;
};
export declare const MsgUpdateTotalSharesResponse: {
    encode(_: MsgUpdateTotalSharesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTotalSharesResponse;
    fromJSON(_: any): MsgUpdateTotalSharesResponse;
    toJSON(_: MsgUpdateTotalSharesResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTotalSharesResponse>): MsgUpdateTotalSharesResponse;
};
export declare const MsgInitializeMainnet: {
    encode(message: MsgInitializeMainnet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitializeMainnet;
    fromJSON(object: any): MsgInitializeMainnet;
    toJSON(message: MsgInitializeMainnet): unknown;
    fromPartial(object: DeepPartial<MsgInitializeMainnet>): MsgInitializeMainnet;
};
export declare const MsgInitializeMainnetResponse: {
    encode(message: MsgInitializeMainnetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitializeMainnetResponse;
    fromJSON(object: any): MsgInitializeMainnetResponse;
    toJSON(message: MsgInitializeMainnetResponse): unknown;
    fromPartial(object: DeepPartial<MsgInitializeMainnetResponse>): MsgInitializeMainnetResponse;
};
export declare const MsgAddShares: {
    encode(message: MsgAddShares, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddShares;
    fromJSON(object: any): MsgAddShares;
    toJSON(message: MsgAddShares): unknown;
    fromPartial(object: DeepPartial<MsgAddShares>): MsgAddShares;
};
export declare const MsgAddSharesResponse: {
    encode(_: MsgAddSharesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddSharesResponse;
    fromJSON(_: any): MsgAddSharesResponse;
    toJSON(_: MsgAddSharesResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddSharesResponse>): MsgAddSharesResponse;
};
export declare const MsgAddVestingOptions: {
    encode(message: MsgAddVestingOptions, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddVestingOptions;
    fromJSON(object: any): MsgAddVestingOptions;
    toJSON(message: MsgAddVestingOptions): unknown;
    fromPartial(object: DeepPartial<MsgAddVestingOptions>): MsgAddVestingOptions;
};
export declare const MsgAddVestingOptionsResponse: {
    encode(_: MsgAddVestingOptionsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddVestingOptionsResponse;
    fromJSON(_: any): MsgAddVestingOptionsResponse;
    toJSON(_: MsgAddVestingOptionsResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddVestingOptionsResponse>): MsgAddVestingOptionsResponse;
};
export declare const MsgMintVouchers: {
    encode(message: MsgMintVouchers, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintVouchers;
    fromJSON(object: any): MsgMintVouchers;
    toJSON(message: MsgMintVouchers): unknown;
    fromPartial(object: DeepPartial<MsgMintVouchers>): MsgMintVouchers;
};
export declare const MsgMintVouchersResponse: {
    encode(_: MsgMintVouchersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintVouchersResponse;
    fromJSON(_: any): MsgMintVouchersResponse;
    toJSON(_: MsgMintVouchersResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintVouchersResponse>): MsgMintVouchersResponse;
};
export declare const MsgBurnVouchers: {
    encode(message: MsgBurnVouchers, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurnVouchers;
    fromJSON(object: any): MsgBurnVouchers;
    toJSON(message: MsgBurnVouchers): unknown;
    fromPartial(object: DeepPartial<MsgBurnVouchers>): MsgBurnVouchers;
};
export declare const MsgBurnVouchersResponse: {
    encode(_: MsgBurnVouchersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurnVouchersResponse;
    fromJSON(_: any): MsgBurnVouchersResponse;
    toJSON(_: MsgBurnVouchersResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnVouchersResponse>): MsgBurnVouchersResponse;
};
export declare const MsgRedeemVouchers: {
    encode(message: MsgRedeemVouchers, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRedeemVouchers;
    fromJSON(object: any): MsgRedeemVouchers;
    toJSON(message: MsgRedeemVouchers): unknown;
    fromPartial(object: DeepPartial<MsgRedeemVouchers>): MsgRedeemVouchers;
};
export declare const MsgRedeemVouchersResponse: {
    encode(_: MsgRedeemVouchersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRedeemVouchersResponse;
    fromJSON(_: any): MsgRedeemVouchersResponse;
    toJSON(_: MsgRedeemVouchersResponse): unknown;
    fromPartial(_: DeepPartial<MsgRedeemVouchersResponse>): MsgRedeemVouchersResponse;
};
export declare const MsgUnredeemVouchers: {
    encode(message: MsgUnredeemVouchers, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnredeemVouchers;
    fromJSON(object: any): MsgUnredeemVouchers;
    toJSON(message: MsgUnredeemVouchers): unknown;
    fromPartial(object: DeepPartial<MsgUnredeemVouchers>): MsgUnredeemVouchers;
};
export declare const MsgUnredeemVouchersResponse: {
    encode(_: MsgUnredeemVouchersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnredeemVouchersResponse;
    fromJSON(_: any): MsgUnredeemVouchersResponse;
    toJSON(_: MsgUnredeemVouchersResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnredeemVouchersResponse>): MsgUnredeemVouchersResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
    UpdateCampaignName(request: MsgUpdateCampaignName): Promise<MsgUpdateCampaignNameResponse>;
    UpdateTotalSupply(request: MsgUpdateTotalSupply): Promise<MsgUpdateTotalSupplyResponse>;
    UpdateTotalShares(request: MsgUpdateTotalShares): Promise<MsgUpdateTotalSharesResponse>;
    InitializeMainnet(request: MsgInitializeMainnet): Promise<MsgInitializeMainnetResponse>;
    AddShares(request: MsgAddShares): Promise<MsgAddSharesResponse>;
    AddVestingOptions(request: MsgAddVestingOptions): Promise<MsgAddVestingOptionsResponse>;
    MintVouchers(request: MsgMintVouchers): Promise<MsgMintVouchersResponse>;
    BurnVouchers(request: MsgBurnVouchers): Promise<MsgBurnVouchersResponse>;
    RedeemVouchers(request: MsgRedeemVouchers): Promise<MsgRedeemVouchersResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    UnredeemVouchers(request: MsgUnredeemVouchers): Promise<MsgUnredeemVouchersResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
    UpdateCampaignName(request: MsgUpdateCampaignName): Promise<MsgUpdateCampaignNameResponse>;
    UpdateTotalSupply(request: MsgUpdateTotalSupply): Promise<MsgUpdateTotalSupplyResponse>;
    UpdateTotalShares(request: MsgUpdateTotalShares): Promise<MsgUpdateTotalSharesResponse>;
    InitializeMainnet(request: MsgInitializeMainnet): Promise<MsgInitializeMainnetResponse>;
    AddShares(request: MsgAddShares): Promise<MsgAddSharesResponse>;
    AddVestingOptions(request: MsgAddVestingOptions): Promise<MsgAddVestingOptionsResponse>;
    MintVouchers(request: MsgMintVouchers): Promise<MsgMintVouchersResponse>;
    BurnVouchers(request: MsgBurnVouchers): Promise<MsgBurnVouchersResponse>;
    RedeemVouchers(request: MsgRedeemVouchers): Promise<MsgRedeemVouchersResponse>;
    UnredeemVouchers(request: MsgUnredeemVouchers): Promise<MsgUnredeemVouchersResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
