/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Campaign } from "../campaign/campaign";
import { CampaignChains } from "../campaign/campaign_chains";
import { MainnetAccount } from "../campaign/mainnet_account";
import { MainnetVestingAccount } from "../campaign/mainnet_vesting_account";

export const protobufPackage = "tendermint.spn.campaign";

/** GenesisState defines the campaign module's genesis state. */
export interface GenesisState {
  campaignList: Campaign[];
  campaignCounter: number;
  campaignChainsList: CampaignChains[];
  mainnetAccountList: MainnetAccount[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  mainnetVestingAccountList: MainnetVestingAccount[];
}

const baseGenesisState: object = { campaignCounter: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.campaignList) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.campaignCounter !== 0) {
      writer.uint32(16).uint64(message.campaignCounter);
    }
    for (const v of message.campaignChainsList) {
      CampaignChains.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.mainnetAccountList) {
      MainnetAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.mainnetVestingAccountList) {
      MainnetVestingAccount.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.campaignList = [];
    message.campaignChainsList = [];
    message.mainnetAccountList = [];
    message.mainnetVestingAccountList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignList.push(Campaign.decode(reader, reader.uint32()));
          break;
        case 2:
          message.campaignCounter = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.campaignChainsList.push(
            CampaignChains.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.mainnetAccountList.push(
            MainnetAccount.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.mainnetVestingAccountList.push(
            MainnetVestingAccount.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.campaignList = [];
    message.campaignChainsList = [];
    message.mainnetAccountList = [];
    message.mainnetVestingAccountList = [];
    if (object.campaignList !== undefined && object.campaignList !== null) {
      for (const e of object.campaignList) {
        message.campaignList.push(Campaign.fromJSON(e));
      }
    }
    if (
      object.campaignCounter !== undefined &&
      object.campaignCounter !== null
    ) {
      message.campaignCounter = Number(object.campaignCounter);
    } else {
      message.campaignCounter = 0;
    }
    if (
      object.campaignChainsList !== undefined &&
      object.campaignChainsList !== null
    ) {
      for (const e of object.campaignChainsList) {
        message.campaignChainsList.push(CampaignChains.fromJSON(e));
      }
    }
    if (
      object.mainnetAccountList !== undefined &&
      object.mainnetAccountList !== null
    ) {
      for (const e of object.mainnetAccountList) {
        message.mainnetAccountList.push(MainnetAccount.fromJSON(e));
      }
    }
    if (
      object.mainnetVestingAccountList !== undefined &&
      object.mainnetVestingAccountList !== null
    ) {
      for (const e of object.mainnetVestingAccountList) {
        message.mainnetVestingAccountList.push(
          MainnetVestingAccount.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.campaignList) {
      obj.campaignList = message.campaignList.map((e) =>
        e ? Campaign.toJSON(e) : undefined
      );
    } else {
      obj.campaignList = [];
    }
    message.campaignCounter !== undefined &&
      (obj.campaignCounter = message.campaignCounter);
    if (message.campaignChainsList) {
      obj.campaignChainsList = message.campaignChainsList.map((e) =>
        e ? CampaignChains.toJSON(e) : undefined
      );
    } else {
      obj.campaignChainsList = [];
    }
    if (message.mainnetAccountList) {
      obj.mainnetAccountList = message.mainnetAccountList.map((e) =>
        e ? MainnetAccount.toJSON(e) : undefined
      );
    } else {
      obj.mainnetAccountList = [];
    }
    if (message.mainnetVestingAccountList) {
      obj.mainnetVestingAccountList = message.mainnetVestingAccountList.map(
        (e) => (e ? MainnetVestingAccount.toJSON(e) : undefined)
      );
    } else {
      obj.mainnetVestingAccountList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.campaignList = [];
    message.campaignChainsList = [];
    message.mainnetAccountList = [];
    message.mainnetVestingAccountList = [];
    if (object.campaignList !== undefined && object.campaignList !== null) {
      for (const e of object.campaignList) {
        message.campaignList.push(Campaign.fromPartial(e));
      }
    }
    if (
      object.campaignCounter !== undefined &&
      object.campaignCounter !== null
    ) {
      message.campaignCounter = object.campaignCounter;
    } else {
      message.campaignCounter = 0;
    }
    if (
      object.campaignChainsList !== undefined &&
      object.campaignChainsList !== null
    ) {
      for (const e of object.campaignChainsList) {
        message.campaignChainsList.push(CampaignChains.fromPartial(e));
      }
    }
    if (
      object.mainnetAccountList !== undefined &&
      object.mainnetAccountList !== null
    ) {
      for (const e of object.mainnetAccountList) {
        message.mainnetAccountList.push(MainnetAccount.fromPartial(e));
      }
    }
    if (
      object.mainnetVestingAccountList !== undefined &&
      object.mainnetVestingAccountList !== null
    ) {
      for (const e of object.mainnetVestingAccountList) {
        message.mainnetVestingAccountList.push(
          MainnetVestingAccount.fromPartial(e)
        );
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
