/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "tendermint.spn.campaign";

export interface MainnetAccount {
  campaignID: number;
  address: string;
  shares: Coin[];
}

const baseMainnetAccount: object = { campaignID: 0, address: "" };

export const MainnetAccount = {
  encode(message: MainnetAccount, writer: Writer = Writer.create()): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.shares) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MainnetAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMainnetAccount } as MainnetAccount;
    message.shares = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.shares.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MainnetAccount {
    const message = { ...baseMainnetAccount } as MainnetAccount;
    message.shares = [];
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MainnetAccount): unknown {
    const obj: any = {};
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.address !== undefined && (obj.address = message.address);
    if (message.shares) {
      obj.shares = message.shares.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.shares = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MainnetAccount>): MainnetAccount {
    const message = { ...baseMainnetAccount } as MainnetAccount;
    message.shares = [];
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

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
