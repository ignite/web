/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tendermint.spn.launch";

export interface Chain {
  launchID: number;
  coordinatorID: number;
  genesisChainID: string;
  createdAt: number;
  sourceURL: string;
  sourceHash: string;
  initialGenesis: InitialGenesis | undefined;
  hasCampaign: boolean;
  campaignID: number;
  isMainnet: boolean;
  launchTriggered: boolean;
  launchTimestamp: number;
}

export interface InitialGenesis {
  defaultInitialGenesis: DefaultInitialGenesis | undefined;
  genesisURL: GenesisURL | undefined;
}

/**
 * DefaultInitialGenesis specifies using the default CLI-generated genesis as an
 * initial genesis
 */
export interface DefaultInitialGenesis {}

/** GenesisURL specifies using a custom genesis from a URL as the initial genesis */
export interface GenesisURL {
  url: string;
  hash: string;
}

const baseChain: object = {
  launchID: 0,
  coordinatorID: 0,
  genesisChainID: "",
  createdAt: 0,
  sourceURL: "",
  sourceHash: "",
  hasCampaign: false,
  campaignID: 0,
  isMainnet: false,
  launchTriggered: false,
  launchTimestamp: 0,
};

export const Chain = {
  encode(message: Chain, writer: Writer = Writer.create()): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.coordinatorID !== 0) {
      writer.uint32(16).uint64(message.coordinatorID);
    }
    if (message.genesisChainID !== "") {
      writer.uint32(26).string(message.genesisChainID);
    }
    if (message.createdAt !== 0) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (message.sourceURL !== "") {
      writer.uint32(42).string(message.sourceURL);
    }
    if (message.sourceHash !== "") {
      writer.uint32(50).string(message.sourceHash);
    }
    if (message.initialGenesis !== undefined) {
      InitialGenesis.encode(
        message.initialGenesis,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.hasCampaign === true) {
      writer.uint32(64).bool(message.hasCampaign);
    }
    if (message.campaignID !== 0) {
      writer.uint32(72).uint64(message.campaignID);
    }
    if (message.isMainnet === true) {
      writer.uint32(80).bool(message.isMainnet);
    }
    if (message.launchTriggered === true) {
      writer.uint32(88).bool(message.launchTriggered);
    }
    if (message.launchTimestamp !== 0) {
      writer.uint32(96).int64(message.launchTimestamp);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Chain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChain } as Chain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.coordinatorID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.genesisChainID = reader.string();
          break;
        case 4:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.sourceURL = reader.string();
          break;
        case 6:
          message.sourceHash = reader.string();
          break;
        case 7:
          message.initialGenesis = InitialGenesis.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.hasCampaign = reader.bool();
          break;
        case 9:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.isMainnet = reader.bool();
          break;
        case 11:
          message.launchTriggered = reader.bool();
          break;
        case 12:
          message.launchTimestamp = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chain {
    const message = { ...baseChain } as Chain;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID);
    } else {
      message.coordinatorID = 0;
    }
    if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
      message.genesisChainID = String(object.genesisChainID);
    } else {
      message.genesisChainID = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.sourceURL !== undefined && object.sourceURL !== null) {
      message.sourceURL = String(object.sourceURL);
    } else {
      message.sourceURL = "";
    }
    if (object.sourceHash !== undefined && object.sourceHash !== null) {
      message.sourceHash = String(object.sourceHash);
    } else {
      message.sourceHash = "";
    }
    if (object.initialGenesis !== undefined && object.initialGenesis !== null) {
      message.initialGenesis = InitialGenesis.fromJSON(object.initialGenesis);
    } else {
      message.initialGenesis = undefined;
    }
    if (object.hasCampaign !== undefined && object.hasCampaign !== null) {
      message.hasCampaign = Boolean(object.hasCampaign);
    } else {
      message.hasCampaign = false;
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.isMainnet !== undefined && object.isMainnet !== null) {
      message.isMainnet = Boolean(object.isMainnet);
    } else {
      message.isMainnet = false;
    }
    if (
      object.launchTriggered !== undefined &&
      object.launchTriggered !== null
    ) {
      message.launchTriggered = Boolean(object.launchTriggered);
    } else {
      message.launchTriggered = false;
    }
    if (
      object.launchTimestamp !== undefined &&
      object.launchTimestamp !== null
    ) {
      message.launchTimestamp = Number(object.launchTimestamp);
    } else {
      message.launchTimestamp = 0;
    }
    return message;
  },

  toJSON(message: Chain): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID);
    message.genesisChainID !== undefined &&
      (obj.genesisChainID = message.genesisChainID);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.sourceURL !== undefined && (obj.sourceURL = message.sourceURL);
    message.sourceHash !== undefined && (obj.sourceHash = message.sourceHash);
    message.initialGenesis !== undefined &&
      (obj.initialGenesis = message.initialGenesis
        ? InitialGenesis.toJSON(message.initialGenesis)
        : undefined);
    message.hasCampaign !== undefined &&
      (obj.hasCampaign = message.hasCampaign);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.isMainnet !== undefined && (obj.isMainnet = message.isMainnet);
    message.launchTriggered !== undefined &&
      (obj.launchTriggered = message.launchTriggered);
    message.launchTimestamp !== undefined &&
      (obj.launchTimestamp = message.launchTimestamp);
    return obj;
  },

  fromPartial(object: DeepPartial<Chain>): Chain {
    const message = { ...baseChain } as Chain;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID;
    } else {
      message.coordinatorID = 0;
    }
    if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
      message.genesisChainID = object.genesisChainID;
    } else {
      message.genesisChainID = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.sourceURL !== undefined && object.sourceURL !== null) {
      message.sourceURL = object.sourceURL;
    } else {
      message.sourceURL = "";
    }
    if (object.sourceHash !== undefined && object.sourceHash !== null) {
      message.sourceHash = object.sourceHash;
    } else {
      message.sourceHash = "";
    }
    if (object.initialGenesis !== undefined && object.initialGenesis !== null) {
      message.initialGenesis = InitialGenesis.fromPartial(
        object.initialGenesis
      );
    } else {
      message.initialGenesis = undefined;
    }
    if (object.hasCampaign !== undefined && object.hasCampaign !== null) {
      message.hasCampaign = object.hasCampaign;
    } else {
      message.hasCampaign = false;
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.isMainnet !== undefined && object.isMainnet !== null) {
      message.isMainnet = object.isMainnet;
    } else {
      message.isMainnet = false;
    }
    if (
      object.launchTriggered !== undefined &&
      object.launchTriggered !== null
    ) {
      message.launchTriggered = object.launchTriggered;
    } else {
      message.launchTriggered = false;
    }
    if (
      object.launchTimestamp !== undefined &&
      object.launchTimestamp !== null
    ) {
      message.launchTimestamp = object.launchTimestamp;
    } else {
      message.launchTimestamp = 0;
    }
    return message;
  },
};

const baseInitialGenesis: object = {};

export const InitialGenesis = {
  encode(message: InitialGenesis, writer: Writer = Writer.create()): Writer {
    if (message.defaultInitialGenesis !== undefined) {
      DefaultInitialGenesis.encode(
        message.defaultInitialGenesis,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.genesisURL !== undefined) {
      GenesisURL.encode(message.genesisURL, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InitialGenesis {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInitialGenesis } as InitialGenesis;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultInitialGenesis = DefaultInitialGenesis.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.genesisURL = GenesisURL.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitialGenesis {
    const message = { ...baseInitialGenesis } as InitialGenesis;
    if (
      object.defaultInitialGenesis !== undefined &&
      object.defaultInitialGenesis !== null
    ) {
      message.defaultInitialGenesis = DefaultInitialGenesis.fromJSON(
        object.defaultInitialGenesis
      );
    } else {
      message.defaultInitialGenesis = undefined;
    }
    if (object.genesisURL !== undefined && object.genesisURL !== null) {
      message.genesisURL = GenesisURL.fromJSON(object.genesisURL);
    } else {
      message.genesisURL = undefined;
    }
    return message;
  },

  toJSON(message: InitialGenesis): unknown {
    const obj: any = {};
    message.defaultInitialGenesis !== undefined &&
      (obj.defaultInitialGenesis = message.defaultInitialGenesis
        ? DefaultInitialGenesis.toJSON(message.defaultInitialGenesis)
        : undefined);
    message.genesisURL !== undefined &&
      (obj.genesisURL = message.genesisURL
        ? GenesisURL.toJSON(message.genesisURL)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<InitialGenesis>): InitialGenesis {
    const message = { ...baseInitialGenesis } as InitialGenesis;
    if (
      object.defaultInitialGenesis !== undefined &&
      object.defaultInitialGenesis !== null
    ) {
      message.defaultInitialGenesis = DefaultInitialGenesis.fromPartial(
        object.defaultInitialGenesis
      );
    } else {
      message.defaultInitialGenesis = undefined;
    }
    if (object.genesisURL !== undefined && object.genesisURL !== null) {
      message.genesisURL = GenesisURL.fromPartial(object.genesisURL);
    } else {
      message.genesisURL = undefined;
    }
    return message;
  },
};

const baseDefaultInitialGenesis: object = {};

export const DefaultInitialGenesis = {
  encode(_: DefaultInitialGenesis, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DefaultInitialGenesis {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDefaultInitialGenesis } as DefaultInitialGenesis;
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

  fromJSON(_: any): DefaultInitialGenesis {
    const message = { ...baseDefaultInitialGenesis } as DefaultInitialGenesis;
    return message;
  },

  toJSON(_: DefaultInitialGenesis): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DefaultInitialGenesis>): DefaultInitialGenesis {
    const message = { ...baseDefaultInitialGenesis } as DefaultInitialGenesis;
    return message;
  },
};

const baseGenesisURL: object = { url: "", hash: "" };

export const GenesisURL = {
  encode(message: GenesisURL, writer: Writer = Writer.create()): Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisURL {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisURL } as GenesisURL;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisURL {
    const message = { ...baseGenesisURL } as GenesisURL;
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: GenesisURL): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisURL>): GenesisURL {
    const message = { ...baseGenesisURL } as GenesisURL;
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
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
