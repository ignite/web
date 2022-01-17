/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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

export type LaunchDefaultInitialGenesis = object;

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

export type LaunchMsgEditChainResponse = object;

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

export type LaunchMsgRevertLaunchResponse = object;

export type LaunchMsgSettleRequestResponse = object;

export type LaunchMsgTriggerLaunchResponse = object;

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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title launch/chain.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryChainAll
   * @summary Queries a list of chain items.
   * @request GET:/tendermint/spn/launch/chain
   */
  queryChainAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LaunchQueryAllChainResponse, RpcStatus>({
      path: `/tendermint/spn/launch/chain`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryChain
   * @summary Queries a chain by index.
   * @request GET:/tendermint/spn/launch/chain/{launchID}
   */
  queryChain = (launchID: string, params: RequestParams = {}) =>
    this.request<LaunchQueryGetChainResponse, RpcStatus>({
      path: `/tendermint/spn/launch/chain/${launchID}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGenesisAccountAll
   * @summary Queries a list of genesisAccount items.
   * @request GET:/tendermint/spn/launch/genesis_account/{launchID}
   */
  queryGenesisAccountAll = (
    launchID: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LaunchQueryAllGenesisAccountResponse, RpcStatus>({
      path: `/tendermint/spn/launch/genesis_account/${launchID}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGenesisAccount
   * @summary Queries a genesisAccount by index.
   * @request GET:/tendermint/spn/launch/genesis_account/{launchID}/{address}
   */
  queryGenesisAccount = (launchID: string, address: string, params: RequestParams = {}) =>
    this.request<LaunchQueryGetGenesisAccountResponse, RpcStatus>({
      path: `/tendermint/spn/launch/genesis_account/${launchID}/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGenesisValidatorAll
   * @summary Queries a list of genesisValidator items.
   * @request GET:/tendermint/spn/launch/genesis_validator/{launchID}
   */
  queryGenesisValidatorAll = (
    launchID: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LaunchQueryAllGenesisValidatorResponse, RpcStatus>({
      path: `/tendermint/spn/launch/genesis_validator/${launchID}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGenesisValidator
   * @summary Queries a genesisValidator by index.
   * @request GET:/tendermint/spn/launch/genesis_validator/{launchID}/{address}
   */
  queryGenesisValidator = (launchID: string, address: string, params: RequestParams = {}) =>
    this.request<LaunchQueryGetGenesisValidatorResponse, RpcStatus>({
      path: `/tendermint/spn/launch/genesis_validator/${launchID}/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/tendermint/spn/launch/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<LaunchQueryParamsResponse, RpcStatus>({
      path: `/tendermint/spn/launch/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRequestAll
   * @summary Queries a list of request for a chain.
   * @request GET:/tendermint/spn/launch/request/{launchID}
   */
  queryRequestAll = (
    launchID: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LaunchQueryAllRequestResponse, RpcStatus>({
      path: `/tendermint/spn/launch/request/${launchID}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRequest
   * @summary Queries a request by index.
   * @request GET:/tendermint/spn/launch/request/{launchID}/{requestID}
   */
  queryRequest = (launchID: string, requestID: string, params: RequestParams = {}) =>
    this.request<LaunchQueryGetRequestResponse, RpcStatus>({
      path: `/tendermint/spn/launch/request/${launchID}/${requestID}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVestingAccountAll
   * @summary Queries a list of vestingAccount items.
   * @request GET:/tendermint/spn/launch/vesting_account/{launchID}
   */
  queryVestingAccountAll = (
    launchID: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LaunchQueryAllVestingAccountResponse, RpcStatus>({
      path: `/tendermint/spn/launch/vesting_account/${launchID}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVestingAccount
   * @summary Queries a vestingAccount by index.
   * @request GET:/tendermint/spn/launch/vesting_account/{launchID}/{address}
   */
  queryVestingAccount = (launchID: string, address: string, params: RequestParams = {}) =>
    this.request<LaunchQueryGetVestingAccountResponse, RpcStatus>({
      path: `/tendermint/spn/launch/vesting_account/${launchID}/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
