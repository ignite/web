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
 * DepositMsgState defines the state of deposit message that contains state information as it is processed in the next batch or batches.
 */
export interface V1Beta1DepositMsgState {
  /**
   * @format int64
   * @example 1000
   */
  msgHeight?: string;

  /**
   * @format uint64
   * @example 1
   */
  msgIndex?: string;

  /** @example true */
  executed?: boolean;

  /** @example true */
  succeeded?: boolean;

  /** @example true */
  toBeDeleted?: boolean;

  /**
   * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
   * a deposit request to the batch of the liquidity pool.
   * Deposit is submitted to the batch of the Liquidity pool with the specified
   * `pool_id`, `deposit_coins` for reserve.
   * This request is stacked in the batch of the liquidity pool, is not processed
   * immediately, and is processed in the `endblock` at the same time as other requests.
   *
   * See: https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
   */
  msg?: V1Beta1MsgDepositWithinBatch;
}

/**
 * MsgCreatePoolResponse defines the Msg/CreatePool response type.
 */
export type V1Beta1MsgCreatePoolResponse = object;

/**
* `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting 
a deposit request to the batch of the liquidity pool.
Deposit is submitted to the batch of the Liquidity pool with the specified 
`pool_id`, `deposit_coins` for reserve.
This request is stacked in the batch of the liquidity pool, is not processed 
immediately, and is processed in the `endblock` at the same time as other requests.

See: https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
*/
export interface V1Beta1MsgDepositWithinBatch {
  /**
   * account address of the origin of this message
   * @format sdk.AccAddress
   * @example cosmos1e35y69rhrt7y4yce5l5u73sjnxu0l33wvznyun
   */
  depositorAddress?: string;

  /**
   * @format uint64
   * @example 1
   */
  poolId?: string;

  /**
   * @format sdk.Coins
   * @example [{"denom":"denomX","amount":"1000000"},{"denom":"denomY","amount":"2000000"}]
   */
  depositCoins?: V1Beta1Coin[];
}

/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response type.
 */
export type V1Beta1MsgDepositWithinBatchResponse = object;

/**
* `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap offer request to the batch of the liquidity pool.
Submit swap offer to the liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
`demand_coin_denom` with the coin and the price you're offering
and `offer_coin_fee` must be half of offer coin amount * current `params.swap_fee_rate` and ceil for reservation to pay fees.
This request is stacked in the batch of the liquidity pool, is not processed 
immediately, and is processed in the `endblock` at the same time as other requests.
You must request the same fields as the pool.
Only the default `swap_type_id` 1 is supported.

See: https://github.com/gravity-devs/liquidity/tree/develop/doc
https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
*/
export interface V1Beta1MsgSwapWithinBatch {
  /**
   * account address of the origin of this message
   * @format sdk.AccAddress
   * @example cosmos1e35y69rhrt7y4yce5l5u73sjnxu0l33wvznyun
   */
  swapRequesterAddress?: string;

  /**
   * id of swap type, must match the value in the pool. Only `swap_type_id` 1 is supported.
   * @format uint64
   * @example 1
   */
  poolId?: string;

  /**
   * id of swap type. Must match the value in the pool.
   * @format uint32
   * @example 1
   */
  swapTypeId?: number;

  /**
   * offer sdk.coin for the swap request, must match the denom in the pool.
   * @format sdk.Coin
   * @example {"denom":"denomX","amount":"1000000"}
   */
  offerCoin?: V1Beta1Coin;

  /**
   * denom of demand coin to be exchanged on the swap request, must match the denom in the pool.
   * @example denomB
   */
  demandCoinDenom?: string;

  /**
   * half of offer coin amount * params.swap_fee_rate and ceil for reservation to pay fees.
   * @format sdk.Coin
   * @example {"denom":"denomX","amount":"5000"}
   */
  offerCoinFee?: V1Beta1Coin;

  /**
   * limit order price for the order, the price is the exchange ratio of X/Y
   * where X is the amount of the first coin and Y is the amount
   * of the second coin when their denoms are sorted alphabetically.
   * @format sdk.Dec
   * @example 1.1
   */
  orderPrice?: string;
}

/**
 * MsgSwapWithinBatchResponse defines the Msg/Swap response type.
 */
export type V1Beta1MsgSwapWithinBatchResponse = object;

/**
* `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting 
a withdraw request to the batch of the liquidity pool.
Withdraw is submitted to the batch from the Liquidity pool with the 
specified `pool_id`, `pool_coin` of the pool.
This request is stacked in the batch of the liquidity pool, is not processed 
immediately, and is processed in the `endblock` at the same time as other requests.

See: https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
*/
export interface V1Beta1MsgWithdrawWithinBatch {
  /**
   * account address of the origin of this message
   * @format sdk.AccAddress
   * @example cosmos1e35y69rhrt7y4yce5l5u73sjnxu0l33wvznyun
   */
  withdrawerAddress?: string;

  /**
   * @format uint64
   * @example 1
   */
  poolId?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   * @format sdk.Coin
   * @example {"denom":"poolD35A0CC16EE598F90B044CE296A405BA9C381E38837599D96F2F70C2F02A23A4","amount":"1000"}
   */
  poolCoin?: V1Beta1Coin;
}

/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response type.
 */
export type V1Beta1MsgWithdrawWithinBatchResponse = object;

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

/**
 * Params defines the parameters for the liquidity module.
 */
export interface V1Beta1Params {
  poolTypes?: V1Beta1PoolType[];

  /**
   * Minimum number of coins to be deposited to the liquidity pool on pool creation.
   * @format sdk.Int
   * @example 1000000
   */
  minInitDepositAmount?: string;

  /**
   * Initial mint amount of pool coins upon pool creation.
   * @format sdk.Int
   * @example 1000000
   */
  initPoolCoinMintAmount?: string;

  /**
   * Limit the size of each liquidity pool to minimize risk. In development, set to 0 for no limit. In production, set a limit.
   * @format sdk.Int
   * @example 1000000000000
   */
  maxReserveCoinAmount?: string;

  /**
   * Fee paid to create a Liquidity Pool. Set a fee to prevent spamming.
   * @format sdk.Coins
   * @example [{"denom":"uatom","amount":"100000000"}]
   */
  poolCreationFee?: V1Beta1Coin[];

  /**
   * Swap fee rate for every executed swap.
   * @format sdk.Dec
   * @example 0.003
   */
  swapFeeRate?: string;

  /**
   * Reserve coin withdrawal with less proportion by withdrawFeeRate.
   * @format sdk.Dec
   * @example 0.003
   */
  withdrawFeeRate?: string;

  /**
   * Maximum ratio of reserve coins that can be ordered at a swap order.
   * @format sdk.Dec
   * @example 0.003
   */
  maxOrderAmountRatio?: string;

  /**
   * The smallest unit batch height for every liquidity pool.
   * @format uint32
   * @example 1
   */
  unitBatchHeight?: number;

  /**
   * Circuit breaker enables or disables transaction messages in liquidity module.
   * @format bool
   * @example false
   */
  circuitBreakerEnabled?: boolean;
}

/**
 * Pool defines the liquidity pool that contains pool information.
 */
export interface V1Beta1Pool {
  /**
   * @format uint64
   * @example 1
   */
  id?: string;

  /**
   * @format uint32
   * @example 1
   */
  typeId?: number;

  /** @example ["denomX","denomY"] */
  reserveCoinDenoms?: string[];

  /**
   * @format sdk.AccAddress
   * @example cosmos16ddqestwukv0jzcyfn3fdfq9h2wrs83cr4rfm3
   */
  reserveAccountAddress?: string;

  /** @example poolD35A0CC16EE598F90B044CE296A405BA9C381E38837599D96F2F70C2F02A23A4 */
  poolCoinDenom?: string;
}

/**
* PoolBatch defines the batch or batches of a given liquidity pool that contains indexes of deposit, withdraw, and swap messages. 
Index param increments by 1 if the pool id is same.
*/
export interface V1Beta1PoolBatch {
  /**
   * @format uint64
   * @example 1
   */
  poolId?: string;

  /**
   * @format uint64
   * @example 1
   */
  index?: string;

  /**
   * @format int64
   * @example 1000
   */
  beginHeight?: string;

  /**
   * @format uint64
   * @example 1
   */
  depositMsgIndex?: string;

  /**
   * @format uint64
   * @example 1
   */
  withdrawMsgIndex?: string;

  /**
   * @format uint64
   * @example 1
   */
  swapMsgIndex?: string;

  /** @example true */
  executed?: boolean;
}

/**
 * Structure for the pool type to distinguish the characteristics of the reserve pools.
 */
export interface V1Beta1PoolType {
  /**
   * @format uint32
   * @example 1
   */
  id?: number;

  /**
   * name of the pool type.
   * @example ConstantProductLiquidityPool
   */
  name?: string;

  /**
   * minimum number of reserveCoins for LiquidityPoolType, only 2 reserve coins are supported.
   * @format uint32
   * @example 2
   */
  minReserveCoinNum?: number;

  /**
   * maximum number of reserveCoins for LiquidityPoolType, only 2 reserve coins are supported.
   * @format uint32
   * @example 2
   */
  maxReserveCoinNum?: number;

  /** description of the pool type. */
  description?: string;
}

/**
 * the response type for the QueryLiquidityPoolBatchResponse RPC method. Returns the liquidity pool batch that corresponds to the requested pool_id.
 */
export interface V1Beta1QueryLiquidityPoolBatchResponse {
  /**
   * PoolBatch defines the batch or batches of a given liquidity pool that contains indexes of deposit, withdraw, and swap messages.
   * Index param increments by 1 if the pool id is same.
   */
  batch?: V1Beta1PoolBatch;
}

/**
 * the response type for the QueryLiquidityPoolResponse RPC method. Returns the liquidity pool that corresponds to the requested pool_id.
 */
export interface V1Beta1QueryLiquidityPoolResponse {
  /** Pool defines the liquidity pool that contains pool information. */
  pool?: V1Beta1Pool;
}

/**
 * the response type for the QueryLiquidityPoolsResponse RPC method. This includes a list of all existing liquidity pools and paging results that contain next_key and total count.
 */
export interface V1Beta1QueryLiquidityPoolsResponse {
  pools?: V1Beta1Pool[];

  /** pagination defines the pagination in the response. not working on this version. */
  pagination?: V1Beta1PageResponse;
}

/**
 * the response type for the QueryParamsResponse RPC method. This includes current parameter of the liquidity module.
 */
export interface V1Beta1QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: V1Beta1Params;
}

/**
 * the response type for the QueryPoolBatchDepositMsg RPC method. This includes a batch swap message of the batch.
 */
export interface V1Beta1QueryPoolBatchDepositMsgResponse {
  /** DepositMsgState defines the state of deposit message that contains state information as it is processed in the next batch or batches. */
  deposit?: V1Beta1DepositMsgState;
}

/**
 * the response type for the QueryPoolBatchDeposit RPC method. This includes a list of all currently existing deposit messages of the batch and paging results that contain next_key and total count.
 */
export interface V1Beta1QueryPoolBatchDepositMsgsResponse {
  deposits?: V1Beta1DepositMsgState[];

  /** pagination defines the pagination in the response. not working on this version. */
  pagination?: V1Beta1PageResponse;
}

/**
 * the response type for the QueryPoolBatchSwapMsg RPC method. This includes a batch swap message of the batch.
 */
export interface V1Beta1QueryPoolBatchSwapMsgResponse {
  /** SwapMsgState defines the state of the swap message that contains state information as the message is processed in the next batch or batches. */
  swap?: V1Beta1SwapMsgState;
}

/**
 * the response type for the QueryPoolBatchSwapMsgs RPC method. This includes list of all currently existing swap messages of the batch and paging results that contain next_key and total count.
 */
export interface V1Beta1QueryPoolBatchSwapMsgsResponse {
  swaps?: V1Beta1SwapMsgState[];

  /** pagination defines the pagination in the response. not working on this version. */
  pagination?: V1Beta1PageResponse;
}

/**
 * the response type for the QueryPoolBatchWithdrawMsg RPC method. This includes a batch swap message of the batch.
 */
export interface V1Beta1QueryPoolBatchWithdrawMsgResponse {
  /** WithdrawMsgState defines the state of the withdraw message that contains state information as the message is processed in the next batch or batches. */
  withdraw?: V1Beta1WithdrawMsgState;
}

/**
 * the response type for the QueryPoolBatchWithdraw RPC method. This includes a list of all currently existing withdraw messages of the batch and paging results that contain next_key and total count.
 */
export interface V1Beta1QueryPoolBatchWithdrawMsgsResponse {
  withdraws?: V1Beta1WithdrawMsgState[];

  /** pagination defines the pagination in the response. Not supported on this version. */
  pagination?: V1Beta1PageResponse;
}

/**
 * SwapMsgState defines the state of the swap message that contains state information as the message is processed in the next batch or batches.
 */
export interface V1Beta1SwapMsgState {
  /**
   * @format int64
   * @example 1000
   */
  msgHeight?: string;

  /**
   * @format uint64
   * @example 1
   */
  msgIndex?: string;

  /** @example true */
  executed?: boolean;

  /** @example true */
  succeeded?: boolean;

  /** @example true */
  toBeDeleted?: boolean;

  /**
   * @format int64
   * @example 1000
   */
  orderExpiryHeight?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   * @format sdk.Coin
   * @example {"denom":"denomX","amount":"600000"}
   */
  exchangedOfferCoin?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   * @format sdk.Coin
   * @example {"denom":"denomX","amount":"400000"}
   */
  remainingOfferCoin?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   * @format sdk.Coin
   * @example {"denom":"denomX","amount":"5000"}
   */
  reservedOfferCoinFee?: V1Beta1Coin;

  /**
   * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap offer request to the batch of the liquidity pool.
   * Submit swap offer to the liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
   * `demand_coin_denom` with the coin and the price you're offering
   * and `offer_coin_fee` must be half of offer coin amount * current `params.swap_fee_rate` and ceil for reservation to pay fees.
   * This request is stacked in the batch of the liquidity pool, is not processed
   * immediately, and is processed in the `endblock` at the same time as other requests.
   * You must request the same fields as the pool.
   * Only the default `swap_type_id` 1 is supported.
   *
   * See: https://github.com/gravity-devs/liquidity/tree/develop/doc
   * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
   */
  msg?: V1Beta1MsgSwapWithinBatch;
}

/**
 * WithdrawMsgState defines the state of the withdraw message that contains state information as the message is processed in the next batch or batches.
 */
export interface V1Beta1WithdrawMsgState {
  /**
   * @format int64
   * @example 1000
   */
  msgHeight?: string;

  /**
   * @format uint64
   * @example 1
   */
  msgIndex?: string;

  /** @example true */
  executed?: boolean;

  /** @example true */
  succeeded?: boolean;

  /** @example true */
  toBeDeleted?: boolean;

  /**
   * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
   * a withdraw request to the batch of the liquidity pool.
   * Withdraw is submitted to the batch from the Liquidity pool with the
   * specified `pool_id`, `pool_coin` of the pool.
   * This request is stacked in the batch of the liquidity pool, is not processed
   * immediately, and is processed in the `endblock` at the same time as other requests.
   *
   * See: https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
   */
  msg?: V1Beta1MsgWithdrawWithinBatch;
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
 * @title tendermint/liquidity/v1beta1/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all parameters of the liquidity module.
   *
   * @tags Query
   * @name QueryParams
   * @summary Get all parameters of the liquidity module.
   * @request GET:/cosmos/liquidity/v1beta1/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryParamsResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description Returns a list of all liquidity pools with pagination result.
   *
   * @tags Query
   * @name QueryLiquidityPools
   * @summary Get existing liquidity pools.
   * @request GET:/cosmos/liquidity/v1beta1/pools
   */
  queryLiquidityPools = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryLiquidityPoolsResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * @description It returns the liquidity pool corresponding to the pool_coin_denom.
   *
   * @tags Query
   * @name QueryLiquidityPoolByPoolCoinDenom
   * @summary Get specific liquidity pool corresponding to the pool_coin_denom.
   * @request GET:/cosmos/liquidity/v1beta1/pools/pool_coin_denom/{poolCoinDenom}
   */
  queryLiquidityPoolByPoolCoinDenom = (poolCoinDenom: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryLiquidityPoolResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/pool_coin_denom/${poolCoinDenom}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description It returns the liquidity pool corresponding to the reserve account.
   *
   * @tags Query
   * @name QueryLiquidityPoolByReserveAcc
   * @summary Get specific liquidity pool corresponding to the reserve account.
   * @request GET:/cosmos/liquidity/v1beta1/pools/reserve_acc/{reserveAcc}
   */
  queryLiquidityPoolByReserveAcc = (reserveAcc: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryLiquidityPoolResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/reserve_acc/${reserveAcc}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description Returns the liquidity pool that corresponds to the pool_id.
   *
   * @tags Query
   * @name QueryLiquidityPool
   * @summary Get specific liquidity pool.
   * @request GET:/cosmos/liquidity/v1beta1/pools/{poolId}
   */
  queryLiquidityPool = (poolId: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryLiquidityPoolResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/${poolId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description Returns the current batch of the pool that corresponds to the pool_id.
   *
   * @tags Query
   * @name QueryLiquidityPoolBatch
   * @summary Get the pool's current batch.
   * @request GET:/cosmos/liquidity/v1beta1/pools/{poolId}/batch
   */
  queryLiquidityPoolBatch = (poolId: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryLiquidityPoolBatchResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/${poolId}/batch`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description Returns a list of all deposit messages in the current batch of the pool with pagination result.
   *
   * @tags Query
   * @name QueryPoolBatchDepositMsgs
   * @summary Get all deposit messages in the pool's current batch.
   * @request GET:/cosmos/liquidity/v1beta1/pools/{poolId}/batch/deposits
   */
  queryPoolBatchDepositMsgs = (
    poolId: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryPoolBatchDepositMsgsResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/${poolId}/batch/deposits`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * @description Returns the deposit message that corresponds to the msg_index in the pool's current batch.
   *
   * @tags Query
   * @name QueryPoolBatchDepositMsg
   * @summary Get a specific deposit message in the pool's current batch.
   * @request GET:/cosmos/liquidity/v1beta1/pools/{poolId}/batch/deposits/{msgIndex}
   */
  queryPoolBatchDepositMsg = (poolId: string, msgIndex: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryPoolBatchDepositMsgResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/${poolId}/batch/deposits/${msgIndex}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description Returns a list of all swap messages in the current batch of the pool with pagination result.
   *
   * @tags Query
   * @name QueryPoolBatchSwapMsgs
   * @summary Get all swap messages in the pool's current batch.
   * @request GET:/cosmos/liquidity/v1beta1/pools/{poolId}/batch/swaps
   */
  queryPoolBatchSwapMsgs = (
    poolId: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryPoolBatchSwapMsgsResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/${poolId}/batch/swaps`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * @description Returns the swap message that corresponds to the msg_index in the pool's current batch
   *
   * @tags Query
   * @name QueryPoolBatchSwapMsg
   * @summary Get a specific swap message in the pool's current batch.
   * @request GET:/cosmos/liquidity/v1beta1/pools/{poolId}/batch/swaps/{msgIndex}
   */
  queryPoolBatchSwapMsg = (poolId: string, msgIndex: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryPoolBatchSwapMsgResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/${poolId}/batch/swaps/${msgIndex}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * @description Returns a list of all withdraw messages in the current batch of the pool with pagination result.
   *
   * @tags Query
   * @name QueryPoolBatchWithdrawMsgs
   * @summary Get all withdraw messages in the pool's current batch.
   * @request GET:/cosmos/liquidity/v1beta1/pools/{poolId}/batch/withdraws
   */
  queryPoolBatchWithdrawMsgs = (
    poolId: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryPoolBatchWithdrawMsgsResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/${poolId}/batch/withdraws`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * @description Returns the withdraw message that corresponds to the msg_index in the pool's current batch.
   *
   * @tags Query
   * @name QueryPoolBatchWithdrawMsg
   * @summary Get a specific withdraw message in the pool's current batch.
   * @request GET:/cosmos/liquidity/v1beta1/pools/{poolId}/batch/withdraws/{msgIndex}
   */
  queryPoolBatchWithdrawMsg = (poolId: string, msgIndex: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryPoolBatchWithdrawMsgResponse, RpcStatus>({
      path: `/cosmos/liquidity/v1beta1/pools/${poolId}/batch/withdraws/${msgIndex}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
