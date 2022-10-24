/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "newvuetest.newvuetest";

export interface MsgCreateUsers {
  creator: string;
  username: string;
}

export interface MsgCreateUsersResponse {
  id: number;
}

export interface MsgUpdateUsers {
  creator: string;
  id: number;
  username: string;
}

export interface MsgUpdateUsersResponse {
}

export interface MsgDeleteUsers {
  creator: string;
  id: number;
}

export interface MsgDeleteUsersResponse {
}

function createBaseMsgCreateUsers(): MsgCreateUsers {
  return { creator: "", username: "" };
}

export const MsgCreateUsers = {
  encode(message: MsgCreateUsers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUsers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUsers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      username: isSet(object.username) ? String(object.username) : "",
    };
  },

  toJSON(message: MsgCreateUsers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUsers>, I>>(object: I): MsgCreateUsers {
    const message = createBaseMsgCreateUsers();
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseMsgCreateUsersResponse(): MsgCreateUsersResponse {
  return { id: 0 };
}

export const MsgCreateUsersResponse = {
  encode(message: MsgCreateUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUsersResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateUsersResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUsersResponse>, I>>(object: I): MsgCreateUsersResponse {
    const message = createBaseMsgCreateUsersResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateUsers(): MsgUpdateUsers {
  return { creator: "", id: 0, username: "" };
}

export const MsgUpdateUsers = {
  encode(message: MsgUpdateUsers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUsers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.username = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateUsers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      username: isSet(object.username) ? String(object.username) : "",
    };
  },

  toJSON(message: MsgUpdateUsers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUsers>, I>>(object: I): MsgUpdateUsers {
    const message = createBaseMsgUpdateUsers();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseMsgUpdateUsersResponse(): MsgUpdateUsersResponse {
  return {};
}

export const MsgUpdateUsersResponse = {
  encode(_: MsgUpdateUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateUsersResponse {
    return {};
  },

  toJSON(_: MsgUpdateUsersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUsersResponse>, I>>(_: I): MsgUpdateUsersResponse {
    const message = createBaseMsgUpdateUsersResponse();
    return message;
  },
};

function createBaseMsgDeleteUsers(): MsgDeleteUsers {
  return { creator: "", id: 0 };
}

export const MsgDeleteUsers = {
  encode(message: MsgDeleteUsers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUsers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteUsers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteUsers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUsers>, I>>(object: I): MsgDeleteUsers {
    const message = createBaseMsgDeleteUsers();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteUsersResponse(): MsgDeleteUsersResponse {
  return {};
}

export const MsgDeleteUsersResponse = {
  encode(_: MsgDeleteUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteUsersResponse {
    return {};
  },

  toJSON(_: MsgDeleteUsersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUsersResponse>, I>>(_: I): MsgDeleteUsersResponse {
    const message = createBaseMsgDeleteUsersResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateUsers(request: MsgCreateUsers): Promise<MsgCreateUsersResponse>;
  UpdateUsers(request: MsgUpdateUsers): Promise<MsgUpdateUsersResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteUsers(request: MsgDeleteUsers): Promise<MsgDeleteUsersResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateUsers = this.CreateUsers.bind(this);
    this.UpdateUsers = this.UpdateUsers.bind(this);
    this.DeleteUsers = this.DeleteUsers.bind(this);
  }
  CreateUsers(request: MsgCreateUsers): Promise<MsgCreateUsersResponse> {
    const data = MsgCreateUsers.encode(request).finish();
    const promise = this.rpc.request("newvuetest.newvuetest.Msg", "CreateUsers", data);
    return promise.then((data) => MsgCreateUsersResponse.decode(new _m0.Reader(data)));
  }

  UpdateUsers(request: MsgUpdateUsers): Promise<MsgUpdateUsersResponse> {
    const data = MsgUpdateUsers.encode(request).finish();
    const promise = this.rpc.request("newvuetest.newvuetest.Msg", "UpdateUsers", data);
    return promise.then((data) => MsgUpdateUsersResponse.decode(new _m0.Reader(data)));
  }

  DeleteUsers(request: MsgDeleteUsers): Promise<MsgDeleteUsersResponse> {
    const data = MsgDeleteUsers.encode(request).finish();
    const promise = this.rpc.request("newvuetest.newvuetest.Msg", "DeleteUsers", data);
    return promise.then((data) => MsgDeleteUsersResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
