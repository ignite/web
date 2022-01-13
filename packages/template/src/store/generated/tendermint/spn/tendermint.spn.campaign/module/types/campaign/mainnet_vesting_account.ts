/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "tendermint.spn.campaign";

export interface MainnetVestingAccount {
  campaignID: number;
  address: string;
  vestingOptions: ShareVestingOptions | undefined;
}

export interface ShareVestingOptions {
  delayedVesting: ShareDelayedVesting | undefined;
}

/**
 * ShareDelayedVesting represents options for share delayed vesting
 * Delayed vesting is the type of vesting where all vesting coins are vested
 * once end time is reached
 */
export interface ShareDelayedVesting {
  totalShares: Coin[];
  vesting: Coin[];
  endTime: number;
}

const baseMainnetVestingAccount: object = { campaignID: 0, address: "" };

export const MainnetVestingAccount = {
  encode(
    message: MainnetVestingAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.vestingOptions !== undefined) {
      ShareVestingOptions.encode(
        message.vestingOptions,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MainnetVestingAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMainnetVestingAccount } as MainnetVestingAccount;
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
          message.vestingOptions = ShareVestingOptions.decode(
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

  fromJSON(object: any): MainnetVestingAccount {
    const message = { ...baseMainnetVestingAccount } as MainnetVestingAccount;
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
    if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
      message.vestingOptions = ShareVestingOptions.fromJSON(
        object.vestingOptions
      );
    } else {
      message.vestingOptions = undefined;
    }
    return message;
  },

  toJSON(message: MainnetVestingAccount): unknown {
    const obj: any = {};
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.address !== undefined && (obj.address = message.address);
    message.vestingOptions !== undefined &&
      (obj.vestingOptions = message.vestingOptions
        ? ShareVestingOptions.toJSON(message.vestingOptions)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MainnetVestingAccount>
  ): MainnetVestingAccount {
    const message = { ...baseMainnetVestingAccount } as MainnetVestingAccount;
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
    if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
      message.vestingOptions = ShareVestingOptions.fromPartial(
        object.vestingOptions
      );
    } else {
      message.vestingOptions = undefined;
    }
    return message;
  },
};

const baseShareVestingOptions: object = {};

export const ShareVestingOptions = {
  encode(
    message: ShareVestingOptions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.delayedVesting !== undefined) {
      ShareDelayedVesting.encode(
        message.delayedVesting,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ShareVestingOptions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShareVestingOptions } as ShareVestingOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delayedVesting = ShareDelayedVesting.decode(
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

  fromJSON(object: any): ShareVestingOptions {
    const message = { ...baseShareVestingOptions } as ShareVestingOptions;
    if (object.delayedVesting !== undefined && object.delayedVesting !== null) {
      message.delayedVesting = ShareDelayedVesting.fromJSON(
        object.delayedVesting
      );
    } else {
      message.delayedVesting = undefined;
    }
    return message;
  },

  toJSON(message: ShareVestingOptions): unknown {
    const obj: any = {};
    message.delayedVesting !== undefined &&
      (obj.delayedVesting = message.delayedVesting
        ? ShareDelayedVesting.toJSON(message.delayedVesting)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ShareVestingOptions>): ShareVestingOptions {
    const message = { ...baseShareVestingOptions } as ShareVestingOptions;
    if (object.delayedVesting !== undefined && object.delayedVesting !== null) {
      message.delayedVesting = ShareDelayedVesting.fromPartial(
        object.delayedVesting
      );
    } else {
      message.delayedVesting = undefined;
    }
    return message;
  },
};

const baseShareDelayedVesting: object = { endTime: 0 };

export const ShareDelayedVesting = {
  encode(
    message: ShareDelayedVesting,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.totalShares) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.endTime !== 0) {
      writer.uint32(24).int64(message.endTime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ShareDelayedVesting {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShareDelayedVesting } as ShareDelayedVesting;
    message.totalShares = [];
    message.vesting = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.vesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.endTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShareDelayedVesting {
    const message = { ...baseShareDelayedVesting } as ShareDelayedVesting;
    message.totalShares = [];
    message.vesting = [];
    if (object.totalShares !== undefined && object.totalShares !== null) {
      for (const e of object.totalShares) {
        message.totalShares.push(Coin.fromJSON(e));
      }
    }
    if (object.vesting !== undefined && object.vesting !== null) {
      for (const e of object.vesting) {
        message.vesting.push(Coin.fromJSON(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Number(object.endTime);
    } else {
      message.endTime = 0;
    }
    return message;
  },

  toJSON(message: ShareDelayedVesting): unknown {
    const obj: any = {};
    if (message.totalShares) {
      obj.totalShares = message.totalShares.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalShares = [];
    }
    if (message.vesting) {
      obj.vesting = message.vesting.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.vesting = [];
    }
    message.endTime !== undefined && (obj.endTime = message.endTime);
    return obj;
  },

  fromPartial(object: DeepPartial<ShareDelayedVesting>): ShareDelayedVesting {
    const message = { ...baseShareDelayedVesting } as ShareDelayedVesting;
    message.totalShares = [];
    message.vesting = [];
    if (object.totalShares !== undefined && object.totalShares !== null) {
      for (const e of object.totalShares) {
        message.totalShares.push(Coin.fromPartial(e));
      }
    }
    if (object.vesting !== undefined && object.vesting !== null) {
      for (const e of object.vesting) {
        message.vesting.push(Coin.fromPartial(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime;
    } else {
      message.endTime = 0;
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
