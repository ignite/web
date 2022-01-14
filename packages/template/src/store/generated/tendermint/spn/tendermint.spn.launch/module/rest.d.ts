export interface LaunchAccountRemoval {
    address?: string;
}
export interface LaunchChain {
    /** @format uint64 */
    launchID?: string;
    /** @format uint64 */
    coordinatorID?: string;
    genesisChainID?: string;
    /** @format int64 */
    createdAt?: string;
    sourceURL?: string;
    sourceHash?: string;
    initialGenesis?: LaunchInitialGenesis;
    hasCampaign?: boolean;
    /** @format uint64 */
    campaignID?: string;
    isMainnet?: boolean;
    launchTriggered?: boolean;
    /** @format int64 */
    launchTimestamp?: string;
}
export declare type LaunchDefaultInitialGenesis = object;
export interface LaunchDelayedVesting {
    totalBalance?: V1Beta1Coin[];
    vesting?: V1Beta1Coin[];
    /** @format int64 */
    endTime?: string;
}
export interface LaunchGenesisAccount {
    /** @format uint64 */
    launchID?: string;
    address?: string;
    coins?: V1Beta1Coin[];
}
export interface LaunchGenesisURL {
    url?: string;
    hash?: string;
}
export interface LaunchGenesisValidator {
    /** @format uint64 */
    launchID?: string;
    address?: string;
    /** @format byte */
    genTx?: string;
    /** @format byte */
    consPubKey?: string;
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    selfDelegation?: V1Beta1Coin;
    peer?: string;
}
export interface LaunchInitialGenesis {
    defaultInitialGenesis?: LaunchDefaultInitialGenesis;
    genesisURL?: LaunchGenesisURL;
}
export interface LaunchMsgCreateChainResponse {
    /** @format uint64 */
    launchID?: string;
}
export declare type LaunchMsgEditChainResponse = object;
export interface LaunchMsgRequestAddAccountResponse {
    /** @format uint64 */
    requestID?: string;
    autoApproved?: boolean;
}
export interface LaunchMsgRequestAddValidatorResponse {
    /** @format uint64 */
    requestID?: string;
    autoApproved?: boolean;
}
export interface LaunchMsgRequestAddVestingAccountResponse {
    /** @format uint64 */
    requestID?: string;
    autoApproved?: boolean;
}
export interface LaunchMsgRequestRemoveAccountResponse {
    /** @format uint64 */
    requestID?: string;
    autoApproved?: boolean;
}
export interface LaunchMsgRequestRemoveValidatorResponse {
    /** @format uint64 */
    requestID?: string;
    autoApproved?: boolean;
}
export declare type LaunchMsgRevertLaunchResponse = object;
export declare type LaunchMsgSettleRequestResponse = object;
export declare type LaunchMsgTriggerLaunchResponse = object;
/**
 * Params defines the parameters for the staking module.
 */
export interface LaunchParams {
    /** @format uint64 */
    minLaunchTime?: string;
    /** @format uint64 */
    maxLaunchTime?: string;
}
export interface LaunchQueryAllChainResponse {
    chain?: LaunchChain[];
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
export interface LaunchQueryAllGenesisAccountResponse {
    genesisAccount?: LaunchGenesisAccount[];
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
export interface LaunchQueryAllGenesisValidatorResponse {
    genesisValidator?: LaunchGenesisValidator[];
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
export interface LaunchQueryAllRequestResponse {
    request?: LaunchRequest[];
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
export interface LaunchQueryAllVestingAccountResponse {
    vestingAccount?: LaunchVestingAccount[];
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
export interface LaunchQueryGetChainResponse {
    chain?: LaunchChain;
}
export interface LaunchQueryGetGenesisAccountResponse {
    genesisAccount?: LaunchGenesisAccount;
}
export interface LaunchQueryGetGenesisValidatorResponse {
    genesisValidator?: LaunchGenesisValidator;
}
export interface LaunchQueryGetRequestResponse {
    request?: LaunchRequest;
}
export interface LaunchQueryGetVestingAccountResponse {
    vestingAccount?: LaunchVestingAccount;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface LaunchQueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: LaunchParams;
}
export interface LaunchRequest {
    /** @format uint64 */
    launchID?: string;
    /** @format uint64 */
    requestID?: string;
    creator?: string;
    /** @format int64 */
    createdAt?: string;
    content?: LaunchRequestContent;
}
export interface LaunchRequestContent {
    genesisAccount?: LaunchGenesisAccount;
    vestingAccount?: LaunchVestingAccount;
    genesisValidator?: LaunchGenesisValidator;
    accountRemoval?: LaunchAccountRemoval;
    validatorRemoval?: LaunchValidatorRemoval;
}
export interface LaunchValidatorRemoval {
    valAddress?: string;
}
export interface LaunchVestingAccount {
    /** @format uint64 */
    launchID?: string;
    address?: string;
    vestingOptions?: LaunchVestingOptions;
}
export interface LaunchVestingOptions {
    delayedVesting?: LaunchDelayedVesting;
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
 * @title launch/chain.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryChainAll
     * @summary Queries a list of chain items.
     * @request GET:/tendermint/spn/launch/chain
     */
    queryChainAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LaunchQueryAllChainResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryChain
     * @summary Queries a chain by index.
     * @request GET:/tendermint/spn/launch/chain/{launchID}
     */
    queryChain: (launchID: string, params?: RequestParams) => Promise<HttpResponse<LaunchQueryGetChainResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGenesisAccountAll
     * @summary Queries a list of genesisAccount items.
     * @request GET:/tendermint/spn/launch/genesis_account/{launchID}
     */
    queryGenesisAccountAll: (launchID: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LaunchQueryAllGenesisAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGenesisAccount
     * @summary Queries a genesisAccount by index.
     * @request GET:/tendermint/spn/launch/genesis_account/{launchID}/{address}
     */
    queryGenesisAccount: (launchID: string, address: string, params?: RequestParams) => Promise<HttpResponse<LaunchQueryGetGenesisAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGenesisValidatorAll
     * @summary Queries a list of genesisValidator items.
     * @request GET:/tendermint/spn/launch/genesis_validator/{launchID}
     */
    queryGenesisValidatorAll: (launchID: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LaunchQueryAllGenesisValidatorResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGenesisValidator
     * @summary Queries a genesisValidator by index.
     * @request GET:/tendermint/spn/launch/genesis_validator/{launchID}/{address}
     */
    queryGenesisValidator: (launchID: string, address: string, params?: RequestParams) => Promise<HttpResponse<LaunchQueryGetGenesisValidatorResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Parameters queries the parameters of the module.
     * @request GET:/tendermint/spn/launch/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<LaunchQueryParamsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRequestAll
     * @summary Queries a list of request for a chain.
     * @request GET:/tendermint/spn/launch/request/{launchID}
     */
    queryRequestAll: (launchID: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LaunchQueryAllRequestResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRequest
     * @summary Queries a request by index.
     * @request GET:/tendermint/spn/launch/request/{launchID}/{requestID}
     */
    queryRequest: (launchID: string, requestID: string, params?: RequestParams) => Promise<HttpResponse<LaunchQueryGetRequestResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryVestingAccountAll
     * @summary Queries a list of vestingAccount items.
     * @request GET:/tendermint/spn/launch/vesting_account/{launchID}
     */
    queryVestingAccountAll: (launchID: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LaunchQueryAllVestingAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryVestingAccount
     * @summary Queries a vestingAccount by index.
     * @request GET:/tendermint/spn/launch/vesting_account/{launchID}/{address}
     */
    queryVestingAccount: (launchID: string, address: string, params?: RequestParams) => Promise<HttpResponse<LaunchQueryGetVestingAccountResponse, RpcStatus>>;
}
export {};
