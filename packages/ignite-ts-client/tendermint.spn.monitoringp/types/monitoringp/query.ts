/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { ConsumerClientID } from '../monitoringp/consumer_client_id'
import { ConnectionChannelID } from '../monitoringp/connection_channel_id'
import { MonitoringInfo } from '../monitoringp/monitoring_info'
import { Params } from '../monitoringp/params'

export const protobufPackage = 'tendermint.spn.monitoringp'

export interface QueryGetConsumerClientIDRequest {}

export interface QueryGetConsumerClientIDResponse {
  ConsumerClientID: ConsumerClientID | undefined
}

export interface QueryGetConnectionChannelIDRequest {}

export interface QueryGetConnectionChannelIDResponse {
  ConnectionChannelID: ConnectionChannelID | undefined
}

export interface QueryGetMonitoringInfoRequest {}

export interface QueryGetMonitoringInfoResponse {
  MonitoringInfo: MonitoringInfo | undefined
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params | undefined
}

const baseQueryGetConsumerClientIDRequest: object = {}

export const QueryGetConsumerClientIDRequest = {
  encode(
    _: QueryGetConsumerClientIDRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetConsumerClientIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetConsumerClientIDRequest
    } as QueryGetConsumerClientIDRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryGetConsumerClientIDRequest {
    const message = {
      ...baseQueryGetConsumerClientIDRequest
    } as QueryGetConsumerClientIDRequest
    return message
  },

  toJSON(_: QueryGetConsumerClientIDRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<QueryGetConsumerClientIDRequest>
  ): QueryGetConsumerClientIDRequest {
    const message = {
      ...baseQueryGetConsumerClientIDRequest
    } as QueryGetConsumerClientIDRequest
    return message
  }
}

const baseQueryGetConsumerClientIDResponse: object = {}

export const QueryGetConsumerClientIDResponse = {
  encode(
    message: QueryGetConsumerClientIDResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ConsumerClientID !== undefined) {
      ConsumerClientID.encode(
        message.ConsumerClientID,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetConsumerClientIDResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetConsumerClientIDResponse
    } as QueryGetConsumerClientIDResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ConsumerClientID = ConsumerClientID.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetConsumerClientIDResponse {
    const message = {
      ...baseQueryGetConsumerClientIDResponse
    } as QueryGetConsumerClientIDResponse
    if (
      object.ConsumerClientID !== undefined &&
      object.ConsumerClientID !== null
    ) {
      message.ConsumerClientID = ConsumerClientID.fromJSON(
        object.ConsumerClientID
      )
    } else {
      message.ConsumerClientID = undefined
    }
    return message
  },

  toJSON(message: QueryGetConsumerClientIDResponse): unknown {
    const obj: any = {}
    message.ConsumerClientID !== undefined &&
      (obj.ConsumerClientID = message.ConsumerClientID
        ? ConsumerClientID.toJSON(message.ConsumerClientID)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetConsumerClientIDResponse>
  ): QueryGetConsumerClientIDResponse {
    const message = {
      ...baseQueryGetConsumerClientIDResponse
    } as QueryGetConsumerClientIDResponse
    if (
      object.ConsumerClientID !== undefined &&
      object.ConsumerClientID !== null
    ) {
      message.ConsumerClientID = ConsumerClientID.fromPartial(
        object.ConsumerClientID
      )
    } else {
      message.ConsumerClientID = undefined
    }
    return message
  }
}

const baseQueryGetConnectionChannelIDRequest: object = {}

export const QueryGetConnectionChannelIDRequest = {
  encode(
    _: QueryGetConnectionChannelIDRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetConnectionChannelIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetConnectionChannelIDRequest
    } as QueryGetConnectionChannelIDRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryGetConnectionChannelIDRequest {
    const message = {
      ...baseQueryGetConnectionChannelIDRequest
    } as QueryGetConnectionChannelIDRequest
    return message
  },

  toJSON(_: QueryGetConnectionChannelIDRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<QueryGetConnectionChannelIDRequest>
  ): QueryGetConnectionChannelIDRequest {
    const message = {
      ...baseQueryGetConnectionChannelIDRequest
    } as QueryGetConnectionChannelIDRequest
    return message
  }
}

const baseQueryGetConnectionChannelIDResponse: object = {}

export const QueryGetConnectionChannelIDResponse = {
  encode(
    message: QueryGetConnectionChannelIDResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ConnectionChannelID !== undefined) {
      ConnectionChannelID.encode(
        message.ConnectionChannelID,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetConnectionChannelIDResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetConnectionChannelIDResponse
    } as QueryGetConnectionChannelIDResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ConnectionChannelID = ConnectionChannelID.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetConnectionChannelIDResponse {
    const message = {
      ...baseQueryGetConnectionChannelIDResponse
    } as QueryGetConnectionChannelIDResponse
    if (
      object.ConnectionChannelID !== undefined &&
      object.ConnectionChannelID !== null
    ) {
      message.ConnectionChannelID = ConnectionChannelID.fromJSON(
        object.ConnectionChannelID
      )
    } else {
      message.ConnectionChannelID = undefined
    }
    return message
  },

  toJSON(message: QueryGetConnectionChannelIDResponse): unknown {
    const obj: any = {}
    message.ConnectionChannelID !== undefined &&
      (obj.ConnectionChannelID = message.ConnectionChannelID
        ? ConnectionChannelID.toJSON(message.ConnectionChannelID)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetConnectionChannelIDResponse>
  ): QueryGetConnectionChannelIDResponse {
    const message = {
      ...baseQueryGetConnectionChannelIDResponse
    } as QueryGetConnectionChannelIDResponse
    if (
      object.ConnectionChannelID !== undefined &&
      object.ConnectionChannelID !== null
    ) {
      message.ConnectionChannelID = ConnectionChannelID.fromPartial(
        object.ConnectionChannelID
      )
    } else {
      message.ConnectionChannelID = undefined
    }
    return message
  }
}

const baseQueryGetMonitoringInfoRequest: object = {}

export const QueryGetMonitoringInfoRequest = {
  encode(
    _: QueryGetMonitoringInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonitoringInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetMonitoringInfoRequest
    } as QueryGetMonitoringInfoRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryGetMonitoringInfoRequest {
    const message = {
      ...baseQueryGetMonitoringInfoRequest
    } as QueryGetMonitoringInfoRequest
    return message
  },

  toJSON(_: QueryGetMonitoringInfoRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<QueryGetMonitoringInfoRequest>
  ): QueryGetMonitoringInfoRequest {
    const message = {
      ...baseQueryGetMonitoringInfoRequest
    } as QueryGetMonitoringInfoRequest
    return message
  }
}

const baseQueryGetMonitoringInfoResponse: object = {}

export const QueryGetMonitoringInfoResponse = {
  encode(
    message: QueryGetMonitoringInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.MonitoringInfo !== undefined) {
      MonitoringInfo.encode(
        message.MonitoringInfo,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonitoringInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetMonitoringInfoResponse
    } as QueryGetMonitoringInfoResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.MonitoringInfo = MonitoringInfo.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetMonitoringInfoResponse {
    const message = {
      ...baseQueryGetMonitoringInfoResponse
    } as QueryGetMonitoringInfoResponse
    if (object.MonitoringInfo !== undefined && object.MonitoringInfo !== null) {
      message.MonitoringInfo = MonitoringInfo.fromJSON(object.MonitoringInfo)
    } else {
      message.MonitoringInfo = undefined
    }
    return message
  },

  toJSON(message: QueryGetMonitoringInfoResponse): unknown {
    const obj: any = {}
    message.MonitoringInfo !== undefined &&
      (obj.MonitoringInfo = message.MonitoringInfo
        ? MonitoringInfo.toJSON(message.MonitoringInfo)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetMonitoringInfoResponse>
  ): QueryGetMonitoringInfoResponse {
    const message = {
      ...baseQueryGetMonitoringInfoResponse
    } as QueryGetMonitoringInfoResponse
    if (object.MonitoringInfo !== undefined && object.MonitoringInfo !== null) {
      message.MonitoringInfo = MonitoringInfo.fromPartial(object.MonitoringInfo)
    } else {
      message.MonitoringInfo = undefined
    }
    return message
  }
}

const baseQueryParamsRequest: object = {}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  }
}

const baseQueryParamsResponse: object = {}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    return message
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a ConsumerClientID by index. */
  ConsumerClientID(
    request: QueryGetConsumerClientIDRequest
  ): Promise<QueryGetConsumerClientIDResponse>
  /** Queries a ConnectionChannelID by index. */
  ConnectionChannelID(
    request: QueryGetConnectionChannelIDRequest
  ): Promise<QueryGetConnectionChannelIDResponse>
  /** Queries a MonitoringInfo by index. */
  MonitoringInfo(
    request: QueryGetMonitoringInfoRequest
  ): Promise<QueryGetMonitoringInfoResponse>
  /** Params queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  ConsumerClientID(
    request: QueryGetConsumerClientIDRequest
  ): Promise<QueryGetConsumerClientIDResponse> {
    const data = QueryGetConsumerClientIDRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringp.Query',
      'ConsumerClientID',
      data
    )
    return promise.then((data) =>
      QueryGetConsumerClientIDResponse.decode(new Reader(data))
    )
  }

  ConnectionChannelID(
    request: QueryGetConnectionChannelIDRequest
  ): Promise<QueryGetConnectionChannelIDResponse> {
    const data = QueryGetConnectionChannelIDRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringp.Query',
      'ConnectionChannelID',
      data
    )
    return promise.then((data) =>
      QueryGetConnectionChannelIDResponse.decode(new Reader(data))
    )
  }

  MonitoringInfo(
    request: QueryGetMonitoringInfoRequest
  ): Promise<QueryGetMonitoringInfoResponse> {
    const data = QueryGetMonitoringInfoRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringp.Query',
      'MonitoringInfo',
      data
    )
    return promise.then((data) =>
      QueryGetMonitoringInfoResponse.decode(new Reader(data))
    )
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringp.Query',
      'Params',
      data
    )
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
