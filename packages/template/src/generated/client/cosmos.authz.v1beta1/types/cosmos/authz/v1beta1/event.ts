/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmos.authz.v1beta1";

/** Since: cosmos-sdk 0.43 */

/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
  /** Msg type URL for which an autorization is granted */
  msg_type_url: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}

/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
  /** Msg type URL for which an autorization is revoked */
  msg_type_url: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}

const baseEventGrant: object = { msg_type_url: "", granter: "", grantee: "" };

export const EventGrant = {
  encode(message: EventGrant, writer: Writer = Writer.create()): Writer {
    if (message.msg_type_url !== "") {
      writer.uint32(18).string(message.msg_type_url);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventGrant {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventGrant } as EventGrant;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msg_type_url = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventGrant {
    const message = { ...baseEventGrant } as EventGrant;
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msg_type_url = String(object.msg_type_url);
    } else {
      message.msg_type_url = "";
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = String(object.granter);
    } else {
      message.granter = "";
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = String(object.grantee);
    } else {
      message.grantee = "";
    }
    return message;
  },

  toJSON(message: EventGrant): unknown {
    const obj: any = {};
    message.msg_type_url !== undefined &&
      (obj.msg_type_url = message.msg_type_url);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  fromPartial(object: DeepPartial<EventGrant>): EventGrant {
    const message = { ...baseEventGrant } as EventGrant;
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msg_type_url = object.msg_type_url;
    } else {
      message.msg_type_url = "";
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    } else {
      message.granter = "";
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    } else {
      message.grantee = "";
    }
    return message;
  },
};

const baseEventRevoke: object = { msg_type_url: "", granter: "", grantee: "" };

export const EventRevoke = {
  encode(message: EventRevoke, writer: Writer = Writer.create()): Writer {
    if (message.msg_type_url !== "") {
      writer.uint32(18).string(message.msg_type_url);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventRevoke {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventRevoke } as EventRevoke;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msg_type_url = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRevoke {
    const message = { ...baseEventRevoke } as EventRevoke;
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msg_type_url = String(object.msg_type_url);
    } else {
      message.msg_type_url = "";
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = String(object.granter);
    } else {
      message.granter = "";
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = String(object.grantee);
    } else {
      message.grantee = "";
    }
    return message;
  },

  toJSON(message: EventRevoke): unknown {
    const obj: any = {};
    message.msg_type_url !== undefined &&
      (obj.msg_type_url = message.msg_type_url);
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  fromPartial(object: DeepPartial<EventRevoke>): EventRevoke {
    const message = { ...baseEventRevoke } as EventRevoke;
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msg_type_url = object.msg_type_url;
    } else {
      message.msg_type_url = "";
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    } else {
      message.granter = "";
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    } else {
      message.grantee = "";
    }
    return message;
  },
};

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
