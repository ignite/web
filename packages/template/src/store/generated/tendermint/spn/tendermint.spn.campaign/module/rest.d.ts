export interface CampaignCampaign {
    /** @format uint64 */
    campaignID?: string;
    campaignName?: string;
    /** @format uint64 */
    coordinatorID?: string;
    /** @format uint64 */
    mainnetID?: string;
    mainnetInitialized?: boolean;
    totalSupply?: V1Beta1Coin[];
    allocatedShares?: V1Beta1Coin[];
    dynamicShares?: boolean;
    totalShares?: V1Beta1Coin[];
}
export interface CampaignCampaignChains {
    /** @format uint64 */
    campaignID?: string;
    chains?: string[];
}
export interface CampaignMainnetAccount {
    /** @format uint64 */
    campaignID?: string;
    address?: string;
    shares?: V1Beta1Coin[];
}
export interface CampaignMainnetVestingAccount {
    /** @format uint64 */
    campaignID?: string;
    address?: string;
    vestingOptions?: CampaignShareVestingOptions;
}
export declare type CampaignMsgAddSharesResponse = object;
export declare type CampaignMsgAddVestingOptionsResponse = object;
export declare type CampaignMsgBurnVouchersResponse = object;
export interface CampaignMsgCreateCampaignResponse {
    /** @format uint64 */
    campaignID?: string;
}
export interface CampaignMsgInitializeMainnetResponse {
    /** @format uint64 */
    mainnetID?: string;
}
export declare type CampaignMsgMintVouchersResponse = object;
export declare type CampaignMsgRedeemVouchersResponse = object;
export declare type CampaignMsgUnredeemVouchersResponse = object;
export declare type CampaignMsgUpdateCampaignNameResponse = object;
export declare type CampaignMsgUpdateTotalSharesResponse = object;
export declare type CampaignMsgUpdateTotalSupplyResponse = object;
export interface CampaignQueryAllCampaignResponse {
    campaign?: CampaignCampaign[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface CampaignQueryAllMainnetAccountResponse {
    mainnetAccount?: CampaignMainnetAccount[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface CampaignQueryAllMainnetVestingAccountResponse {
    mainnetVestingAccount?: CampaignMainnetVestingAccount[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface CampaignQueryGetCampaignChainsResponse {
    campaignChains?: CampaignCampaignChains;
}
export interface CampaignQueryGetCampaignResponse {
    campaign?: CampaignCampaign;
}
export interface CampaignQueryGetMainnetAccountResponse {
    mainnetAccount?: CampaignMainnetAccount;
}
export interface CampaignQueryGetMainnetVestingAccountResponse {
    mainnetVestingAccount?: CampaignMainnetVestingAccount;
}
export interface CampaignShareDelayedVesting {
    totalShares?: V1Beta1Coin[];
    vesting?: V1Beta1Coin[];
    /** @format int64 */
    endTime?: string;
}
export interface CampaignShareVestingOptions {
    delayedVesting?: CampaignShareDelayedVesting;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
    denom?: string;
    amount?: string;
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /**
     * reverse is set to true if results are to be returned in the descending order.
     *
     * Since: cosmos-sdk 0.43
     */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title campaign/campaign.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryCampaignAll
     * @summary Queries a list of campaign items.
     * @request GET:/tendermint/spn/campaign/campaign
     */
    queryCampaignAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<CampaignQueryAllCampaignResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryCampaign
     * @summary Queries a campaign by id.
     * @request GET:/tendermint/spn/campaign/campaign/{campaignID}
     */
    queryCampaign: (campaignID: string, params?: RequestParams) => Promise<HttpResponse<CampaignQueryGetCampaignResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryCampaignChains
     * @summary Queries a campaignChains by index.
     * @request GET:/tendermint/spn/campaign/campaign_chains/{campaignID}
     */
    queryCampaignChains: (campaignID: string, params?: RequestParams) => Promise<HttpResponse<CampaignQueryGetCampaignChainsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMainnetAccountAll
     * @summary Queries a list of mainnetAccount items.
     * @request GET:/tendermint/spn/campaign/mainnet_account
     */
    queryMainnetAccountAll: (query?: {
        campaignID?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<CampaignQueryAllMainnetAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMainnetAccount
     * @summary Queries a mainnetAccount by index.
     * @request GET:/tendermint/spn/campaign/mainnet_account/{campaignID}/{address}
     */
    queryMainnetAccount: (campaignID: string, address: string, params?: RequestParams) => Promise<HttpResponse<CampaignQueryGetMainnetAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMainnetVestingAccountAll
     * @summary Queries a list of mainnetVestingAccount items.
     * @request GET:/tendermint/spn/campaign/mainnet_vesting_account
     */
    queryMainnetVestingAccountAll: (query?: {
        campaignID?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<CampaignQueryAllMainnetVestingAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMainnetVestingAccount
     * @summary Queries a mainnetVestingAccount by index.
     * @request GET:/tendermint/spn/campaign/mainnet_vesting_account/{campaignID}/{address}
     */
    queryMainnetVestingAccount: (campaignID: string, address: string, params?: RequestParams) => Promise<HttpResponse<CampaignQueryGetMainnetVestingAccountResponse, RpcStatus>>;
}
export {};
