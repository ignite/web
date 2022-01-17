/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Validator } from "../profile/validator";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Coordinator, CoordinatorByAddress } from "../profile/coordinator";

export const protobufPackage = "tendermint.spn.profile";

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

const baseQueryGetValidatorRequest: object = { address: "" };

export const QueryGetValidatorRequest = {
  encode(
    message: QueryGetValidatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidatorRequest,
    } as QueryGetValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidatorRequest {
    const message = {
      ...baseQueryGetValidatorRequest,
    } as QueryGetValidatorRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetValidatorRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidatorRequest>
  ): QueryGetValidatorRequest {
    const message = {
      ...baseQueryGetValidatorRequest,
    } as QueryGetValidatorRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetValidatorResponse: object = {};

export const QueryGetValidatorResponse = {
  encode(
    message: QueryGetValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidatorResponse,
    } as QueryGetValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidatorResponse {
    const message = {
      ...baseQueryGetValidatorResponse,
    } as QueryGetValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidatorResponse>
  ): QueryGetValidatorResponse {
    const message = {
      ...baseQueryGetValidatorResponse,
    } as QueryGetValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },
};

const baseQueryAllValidatorRequest: object = {};

export const QueryAllValidatorRequest = {
  encode(
    message: QueryAllValidatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidatorRequest,
    } as QueryAllValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidatorRequest {
    const message = {
      ...baseQueryAllValidatorRequest,
    } as QueryAllValidatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidatorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidatorRequest>
  ): QueryAllValidatorRequest {
    const message = {
      ...baseQueryAllValidatorRequest,
    } as QueryAllValidatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllValidatorResponse: object = {};

export const QueryAllValidatorResponse = {
  encode(
    message: QueryAllValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.validator) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidatorResponse,
    } as QueryAllValidatorResponse;
    message.validator = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidatorResponse {
    const message = {
      ...baseQueryAllValidatorResponse,
    } as QueryAllValidatorResponse;
    message.validator = [];
    if (object.validator !== undefined && object.validator !== null) {
      for (const e of object.validator) {
        message.validator.push(Validator.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidatorResponse): unknown {
    const obj: any = {};
    if (message.validator) {
      obj.validator = message.validator.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.validator = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidatorResponse>
  ): QueryAllValidatorResponse {
    const message = {
      ...baseQueryAllValidatorResponse,
    } as QueryAllValidatorResponse;
    message.validator = [];
    if (object.validator !== undefined && object.validator !== null) {
      for (const e of object.validator) {
        message.validator.push(Validator.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCoordinatorRequest: object = { coordinatorID: 0 };

export const QueryGetCoordinatorRequest = {
  encode(
    message: QueryGetCoordinatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinatorID !== 0) {
      writer.uint32(8).uint64(message.coordinatorID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCoordinatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCoordinatorRequest,
    } as QueryGetCoordinatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinatorID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCoordinatorRequest {
    const message = {
      ...baseQueryGetCoordinatorRequest,
    } as QueryGetCoordinatorRequest;
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID);
    } else {
      message.coordinatorID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCoordinatorRequest): unknown {
    const obj: any = {};
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCoordinatorRequest>
  ): QueryGetCoordinatorRequest {
    const message = {
      ...baseQueryGetCoordinatorRequest,
    } as QueryGetCoordinatorRequest;
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID;
    } else {
      message.coordinatorID = 0;
    }
    return message;
  },
};

const baseQueryGetCoordinatorResponse: object = {};

export const QueryGetCoordinatorResponse = {
  encode(
    message: QueryGetCoordinatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinator !== undefined) {
      Coordinator.encode(
        message.coordinator,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCoordinatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCoordinatorResponse,
    } as QueryGetCoordinatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = Coordinator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCoordinatorResponse {
    const message = {
      ...baseQueryGetCoordinatorResponse,
    } as QueryGetCoordinatorResponse;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = Coordinator.fromJSON(object.coordinator);
    } else {
      message.coordinator = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCoordinatorResponse): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator
        ? Coordinator.toJSON(message.coordinator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCoordinatorResponse>
  ): QueryGetCoordinatorResponse {
    const message = {
      ...baseQueryGetCoordinatorResponse,
    } as QueryGetCoordinatorResponse;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = Coordinator.fromPartial(object.coordinator);
    } else {
      message.coordinator = undefined;
    }
    return message;
  },
};

const baseQueryAllCoordinatorRequest: object = {};

export const QueryAllCoordinatorRequest = {
  encode(
    message: QueryAllCoordinatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCoordinatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCoordinatorRequest,
    } as QueryAllCoordinatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCoordinatorRequest {
    const message = {
      ...baseQueryAllCoordinatorRequest,
    } as QueryAllCoordinatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCoordinatorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCoordinatorRequest>
  ): QueryAllCoordinatorRequest {
    const message = {
      ...baseQueryAllCoordinatorRequest,
    } as QueryAllCoordinatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCoordinatorResponse: object = {};

export const QueryAllCoordinatorResponse = {
  encode(
    message: QueryAllCoordinatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.coordinator) {
      Coordinator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCoordinatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCoordinatorResponse,
    } as QueryAllCoordinatorResponse;
    message.coordinator = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator.push(Coordinator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCoordinatorResponse {
    const message = {
      ...baseQueryAllCoordinatorResponse,
    } as QueryAllCoordinatorResponse;
    message.coordinator = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      for (const e of object.coordinator) {
        message.coordinator.push(Coordinator.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCoordinatorResponse): unknown {
    const obj: any = {};
    if (message.coordinator) {
      obj.coordinator = message.coordinator.map((e) =>
        e ? Coordinator.toJSON(e) : undefined
      );
    } else {
      obj.coordinator = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCoordinatorResponse>
  ): QueryAllCoordinatorResponse {
    const message = {
      ...baseQueryAllCoordinatorResponse,
    } as QueryAllCoordinatorResponse;
    message.coordinator = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      for (const e of object.coordinator) {
        message.coordinator.push(Coordinator.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCoordinatorByAddressRequest: object = { address: "" };

export const QueryGetCoordinatorByAddressRequest = {
  encode(
    message: QueryGetCoordinatorByAddressRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCoordinatorByAddressRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCoordinatorByAddressRequest,
    } as QueryGetCoordinatorByAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCoordinatorByAddressRequest {
    const message = {
      ...baseQueryGetCoordinatorByAddressRequest,
    } as QueryGetCoordinatorByAddressRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetCoordinatorByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCoordinatorByAddressRequest>
  ): QueryGetCoordinatorByAddressRequest {
    const message = {
      ...baseQueryGetCoordinatorByAddressRequest,
    } as QueryGetCoordinatorByAddressRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetCoordinatorByAddressResponse: object = {};

export const QueryGetCoordinatorByAddressResponse = {
  encode(
    message: QueryGetCoordinatorByAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinatorByAddress !== undefined) {
      CoordinatorByAddress.encode(
        message.coordinatorByAddress,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCoordinatorByAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCoordinatorByAddressResponse,
    } as QueryGetCoordinatorByAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinatorByAddress = CoordinatorByAddress.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCoordinatorByAddressResponse {
    const message = {
      ...baseQueryGetCoordinatorByAddressResponse,
    } as QueryGetCoordinatorByAddressResponse;
    if (
      object.coordinatorByAddress !== undefined &&
      object.coordinatorByAddress !== null
    ) {
      message.coordinatorByAddress = CoordinatorByAddress.fromJSON(
        object.coordinatorByAddress
      );
    } else {
      message.coordinatorByAddress = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCoordinatorByAddressResponse): unknown {
    const obj: any = {};
    message.coordinatorByAddress !== undefined &&
      (obj.coordinatorByAddress = message.coordinatorByAddress
        ? CoordinatorByAddress.toJSON(message.coordinatorByAddress)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCoordinatorByAddressResponse>
  ): QueryGetCoordinatorByAddressResponse {
    const message = {
      ...baseQueryGetCoordinatorByAddressResponse,
    } as QueryGetCoordinatorByAddressResponse;
    if (
      object.coordinatorByAddress !== undefined &&
      object.coordinatorByAddress !== null
    ) {
      message.coordinatorByAddress = CoordinatorByAddress.fromPartial(
        object.coordinatorByAddress
      );
    } else {
      message.coordinatorByAddress = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * this line is used by starport scaffolding # 2
   * Queries a validator by index.
   */
  Validator(
    request: QueryGetValidatorRequest
  ): Promise<QueryGetValidatorResponse>;
  /** Queries a list of validator items. */
  ValidatorAll(
    request: QueryAllValidatorRequest
  ): Promise<QueryAllValidatorResponse>;
  /** Queries a coordinator by id. */
  Coordinator(
    request: QueryGetCoordinatorRequest
  ): Promise<QueryGetCoordinatorResponse>;
  /** Queries a list of coordinator items. */
  CoordinatorAll(
    request: QueryAllCoordinatorRequest
  ): Promise<QueryAllCoordinatorResponse>;
  /** Queries a coordinatorByAddress by index. */
  CoordinatorByAddress(
    request: QueryGetCoordinatorByAddressRequest
  ): Promise<QueryGetCoordinatorByAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Validator(
    request: QueryGetValidatorRequest
  ): Promise<QueryGetValidatorResponse> {
    const data = QueryGetValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Query",
      "Validator",
      data
    );
    return promise.then((data) =>
      QueryGetValidatorResponse.decode(new Reader(data))
    );
  }

  ValidatorAll(
    request: QueryAllValidatorRequest
  ): Promise<QueryAllValidatorResponse> {
    const data = QueryAllValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Query",
      "ValidatorAll",
      data
    );
    return promise.then((data) =>
      QueryAllValidatorResponse.decode(new Reader(data))
    );
  }

  Coordinator(
    request: QueryGetCoordinatorRequest
  ): Promise<QueryGetCoordinatorResponse> {
    const data = QueryGetCoordinatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Query",
      "Coordinator",
      data
    );
    return promise.then((data) =>
      QueryGetCoordinatorResponse.decode(new Reader(data))
    );
  }

  CoordinatorAll(
    request: QueryAllCoordinatorRequest
  ): Promise<QueryAllCoordinatorResponse> {
    const data = QueryAllCoordinatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Query",
      "CoordinatorAll",
      data
    );
    return promise.then((data) =>
      QueryAllCoordinatorResponse.decode(new Reader(data))
    );
  }

  CoordinatorByAddress(
    request: QueryGetCoordinatorByAddressRequest
  ): Promise<QueryGetCoordinatorByAddressResponse> {
    const data = QueryGetCoordinatorByAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.profile.Query",
      "CoordinatorByAddress",
      data
    );
    return promise.then((data) =>
      QueryGetCoordinatorByAddressResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
