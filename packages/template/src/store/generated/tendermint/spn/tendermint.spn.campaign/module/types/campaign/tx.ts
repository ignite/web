/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { ShareVestingOptions } from "../campaign/mainnet_vesting_account";

export const protobufPackage = "tendermint.spn.campaign";

export interface MsgCreateCampaign {
  coordinator: string;
  campaignName: string;
  totalSupply: Coin[];
}

export interface MsgCreateCampaignResponse {
  campaignID: number;
}

export interface MsgUpdateCampaignName {
  coordinator: string;
  campaignID: number;
  name: string;
}

export interface MsgUpdateCampaignNameResponse {}

export interface MsgUpdateTotalSupply {
  coordinator: string;
  campaignID: number;
  totalSupplyUpdate: Coin[];
}

export interface MsgUpdateTotalSupplyResponse {}

export interface MsgUpdateTotalShares {
  coordinator: string;
  campaignID: number;
  totalShares: Coin[];
}

export interface MsgUpdateTotalSharesResponse {}

export interface MsgInitializeMainnet {
  coordinator: string;
  campaignID: number;
  sourceURL: string;
  sourceHash: string;
  mainnetChainID: string;
}

export interface MsgInitializeMainnetResponse {
  mainnetID: number;
}

export interface MsgAddShares {
  coordinator: string;
  campaignID: number;
  address: string;
  shares: Coin[];
}

export interface MsgAddSharesResponse {}

export interface MsgAddVestingOptions {
  coordinator: string;
  campaignID: number;
  address: string;
  vestingOptions: ShareVestingOptions | undefined;
}

export interface MsgAddVestingOptionsResponse {}

export interface MsgMintVouchers {
  coordinator: string;
  campaignID: number;
  shares: Coin[];
}

export interface MsgMintVouchersResponse {}

export interface MsgBurnVouchers {
  sender: string;
  campaignID: number;
  vouchers: Coin[];
}

export interface MsgBurnVouchersResponse {}

export interface MsgRedeemVouchers {
  sender: string;
  campaignID: number;
  account: string;
  vouchers: Coin[];
}

export interface MsgRedeemVouchersResponse {}

export interface MsgUnredeemVouchers {
  sender: string;
  campaignID: number;
  shares: Coin[];
}

export interface MsgUnredeemVouchersResponse {}

const baseMsgCreateCampaign: object = { coordinator: "", campaignName: "" };

export const MsgCreateCampaign = {
  encode(message: MsgCreateCampaign, writer: Writer = Writer.create()): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.campaignName !== "") {
      writer.uint32(18).string(message.campaignName);
    }
    for (const v of message.totalSupply) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCampaign {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCampaign } as MsgCreateCampaign;
    message.totalSupply = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.campaignName = reader.string();
          break;
        case 3:
          message.totalSupply.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCampaign {
    const message = { ...baseMsgCreateCampaign } as MsgCreateCampaign;
    message.totalSupply = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.campaignName !== undefined && object.campaignName !== null) {
      message.campaignName = String(object.campaignName);
    } else {
      message.campaignName = "";
    }
    if (object.totalSupply !== undefined && object.totalSupply !== null) {
      for (const e of object.totalSupply) {
        message.totalSupply.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateCampaign): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.campaignName !== undefined &&
      (obj.campaignName = message.campaignName);
    if (message.totalSupply) {
      obj.totalSupply = message.totalSupply.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalSupply = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCampaign>): MsgCreateCampaign {
    const message = { ...baseMsgCreateCampaign } as MsgCreateCampaign;
    message.totalSupply = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.campaignName !== undefined && object.campaignName !== null) {
      message.campaignName = object.campaignName;
    } else {
      message.campaignName = "";
    }
    if (object.totalSupply !== undefined && object.totalSupply !== null) {
      for (const e of object.totalSupply) {
        message.totalSupply.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreateCampaignResponse: object = { campaignID: 0 };

export const MsgCreateCampaignResponse = {
  encode(
    message: MsgCreateCampaignResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCampaignResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCampaignResponse,
    } as MsgCreateCampaignResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCampaignResponse {
    const message = {
      ...baseMsgCreateCampaignResponse,
    } as MsgCreateCampaignResponse;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCampaignResponse): unknown {
    const obj: any = {};
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCampaignResponse>
  ): MsgCreateCampaignResponse {
    const message = {
      ...baseMsgCreateCampaignResponse,
    } as MsgCreateCampaignResponse;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    return message;
  },
};

const baseMsgUpdateCampaignName: object = {
  coordinator: "",
  campaignID: 0,
  name: "",
};

export const MsgUpdateCampaignName = {
  encode(
    message: MsgUpdateCampaignName,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCampaignName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCampaignName } as MsgUpdateCampaignName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCampaignName {
    const message = { ...baseMsgUpdateCampaignName } as MsgUpdateCampaignName;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCampaignName): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCampaignName>
  ): MsgUpdateCampaignName {
    const message = { ...baseMsgUpdateCampaignName } as MsgUpdateCampaignName;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateCampaignNameResponse: object = {};

export const MsgUpdateCampaignNameResponse = {
  encode(
    _: MsgUpdateCampaignNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCampaignNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCampaignNameResponse,
    } as MsgUpdateCampaignNameResponse;
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

  fromJSON(_: any): MsgUpdateCampaignNameResponse {
    const message = {
      ...baseMsgUpdateCampaignNameResponse,
    } as MsgUpdateCampaignNameResponse;
    return message;
  },

  toJSON(_: MsgUpdateCampaignNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCampaignNameResponse>
  ): MsgUpdateCampaignNameResponse {
    const message = {
      ...baseMsgUpdateCampaignNameResponse,
    } as MsgUpdateCampaignNameResponse;
    return message;
  },
};

const baseMsgUpdateTotalSupply: object = { coordinator: "", campaignID: 0 };

export const MsgUpdateTotalSupply = {
  encode(
    message: MsgUpdateTotalSupply,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    for (const v of message.totalSupplyUpdate) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTotalSupply {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTotalSupply } as MsgUpdateTotalSupply;
    message.totalSupplyUpdate = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.totalSupplyUpdate.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTotalSupply {
    const message = { ...baseMsgUpdateTotalSupply } as MsgUpdateTotalSupply;
    message.totalSupplyUpdate = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (
      object.totalSupplyUpdate !== undefined &&
      object.totalSupplyUpdate !== null
    ) {
      for (const e of object.totalSupplyUpdate) {
        message.totalSupplyUpdate.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateTotalSupply): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    if (message.totalSupplyUpdate) {
      obj.totalSupplyUpdate = message.totalSupplyUpdate.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalSupplyUpdate = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateTotalSupply>): MsgUpdateTotalSupply {
    const message = { ...baseMsgUpdateTotalSupply } as MsgUpdateTotalSupply;
    message.totalSupplyUpdate = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (
      object.totalSupplyUpdate !== undefined &&
      object.totalSupplyUpdate !== null
    ) {
      for (const e of object.totalSupplyUpdate) {
        message.totalSupplyUpdate.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgUpdateTotalSupplyResponse: object = {};

export const MsgUpdateTotalSupplyResponse = {
  encode(
    _: MsgUpdateTotalSupplyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTotalSupplyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTotalSupplyResponse,
    } as MsgUpdateTotalSupplyResponse;
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

  fromJSON(_: any): MsgUpdateTotalSupplyResponse {
    const message = {
      ...baseMsgUpdateTotalSupplyResponse,
    } as MsgUpdateTotalSupplyResponse;
    return message;
  },

  toJSON(_: MsgUpdateTotalSupplyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTotalSupplyResponse>
  ): MsgUpdateTotalSupplyResponse {
    const message = {
      ...baseMsgUpdateTotalSupplyResponse,
    } as MsgUpdateTotalSupplyResponse;
    return message;
  },
};

const baseMsgUpdateTotalShares: object = { coordinator: "", campaignID: 0 };

export const MsgUpdateTotalShares = {
  encode(
    message: MsgUpdateTotalShares,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    for (const v of message.totalShares) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTotalShares {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTotalShares } as MsgUpdateTotalShares;
    message.totalShares = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.totalShares.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTotalShares {
    const message = { ...baseMsgUpdateTotalShares } as MsgUpdateTotalShares;
    message.totalShares = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.totalShares !== undefined && object.totalShares !== null) {
      for (const e of object.totalShares) {
        message.totalShares.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateTotalShares): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    if (message.totalShares) {
      obj.totalShares = message.totalShares.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalShares = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateTotalShares>): MsgUpdateTotalShares {
    const message = { ...baseMsgUpdateTotalShares } as MsgUpdateTotalShares;
    message.totalShares = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.totalShares !== undefined && object.totalShares !== null) {
      for (const e of object.totalShares) {
        message.totalShares.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgUpdateTotalSharesResponse: object = {};

export const MsgUpdateTotalSharesResponse = {
  encode(
    _: MsgUpdateTotalSharesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTotalSharesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTotalSharesResponse,
    } as MsgUpdateTotalSharesResponse;
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

  fromJSON(_: any): MsgUpdateTotalSharesResponse {
    const message = {
      ...baseMsgUpdateTotalSharesResponse,
    } as MsgUpdateTotalSharesResponse;
    return message;
  },

  toJSON(_: MsgUpdateTotalSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTotalSharesResponse>
  ): MsgUpdateTotalSharesResponse {
    const message = {
      ...baseMsgUpdateTotalSharesResponse,
    } as MsgUpdateTotalSharesResponse;
    return message;
  },
};

const baseMsgInitializeMainnet: object = {
  coordinator: "",
  campaignID: 0,
  sourceURL: "",
  sourceHash: "",
  mainnetChainID: "",
};

export const MsgInitializeMainnet = {
  encode(
    message: MsgInitializeMainnet,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    if (message.sourceURL !== "") {
      writer.uint32(26).string(message.sourceURL);
    }
    if (message.sourceHash !== "") {
      writer.uint32(34).string(message.sourceHash);
    }
    if (message.mainnetChainID !== "") {
      writer.uint32(42).string(message.mainnetChainID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInitializeMainnet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInitializeMainnet } as MsgInitializeMainnet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.sourceURL = reader.string();
          break;
        case 4:
          message.sourceHash = reader.string();
          break;
        case 5:
          message.mainnetChainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitializeMainnet {
    const message = { ...baseMsgInitializeMainnet } as MsgInitializeMainnet;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
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
    if (object.mainnetChainID !== undefined && object.mainnetChainID !== null) {
      message.mainnetChainID = String(object.mainnetChainID);
    } else {
      message.mainnetChainID = "";
    }
    return message;
  },

  toJSON(message: MsgInitializeMainnet): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.sourceURL !== undefined && (obj.sourceURL = message.sourceURL);
    message.sourceHash !== undefined && (obj.sourceHash = message.sourceHash);
    message.mainnetChainID !== undefined &&
      (obj.mainnetChainID = message.mainnetChainID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInitializeMainnet>): MsgInitializeMainnet {
    const message = { ...baseMsgInitializeMainnet } as MsgInitializeMainnet;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
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
    if (object.mainnetChainID !== undefined && object.mainnetChainID !== null) {
      message.mainnetChainID = object.mainnetChainID;
    } else {
      message.mainnetChainID = "";
    }
    return message;
  },
};

const baseMsgInitializeMainnetResponse: object = { mainnetID: 0 };

export const MsgInitializeMainnetResponse = {
  encode(
    message: MsgInitializeMainnetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mainnetID !== 0) {
      writer.uint32(8).uint64(message.mainnetID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitializeMainnetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitializeMainnetResponse,
    } as MsgInitializeMainnetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainnetID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitializeMainnetResponse {
    const message = {
      ...baseMsgInitializeMainnetResponse,
    } as MsgInitializeMainnetResponse;
    if (object.mainnetID !== undefined && object.mainnetID !== null) {
      message.mainnetID = Number(object.mainnetID);
    } else {
      message.mainnetID = 0;
    }
    return message;
  },

  toJSON(message: MsgInitializeMainnetResponse): unknown {
    const obj: any = {};
    message.mainnetID !== undefined && (obj.mainnetID = message.mainnetID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitializeMainnetResponse>
  ): MsgInitializeMainnetResponse {
    const message = {
      ...baseMsgInitializeMainnetResponse,
    } as MsgInitializeMainnetResponse;
    if (object.mainnetID !== undefined && object.mainnetID !== null) {
      message.mainnetID = object.mainnetID;
    } else {
      message.mainnetID = 0;
    }
    return message;
  },
};

const baseMsgAddShares: object = {
  coordinator: "",
  campaignID: 0,
  address: "",
};

export const MsgAddShares = {
  encode(message: MsgAddShares, writer: Writer = Writer.create()): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    for (const v of message.shares) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddShares {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddShares } as MsgAddShares;
    message.shares = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.shares.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddShares {
    const message = { ...baseMsgAddShares } as MsgAddShares;
    message.shares = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
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

  toJSON(message: MsgAddShares): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.address !== undefined && (obj.address = message.address);
    if (message.shares) {
      obj.shares = message.shares.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.shares = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddShares>): MsgAddShares {
    const message = { ...baseMsgAddShares } as MsgAddShares;
    message.shares = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
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

const baseMsgAddSharesResponse: object = {};

export const MsgAddSharesResponse = {
  encode(_: MsgAddSharesResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddSharesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddSharesResponse } as MsgAddSharesResponse;
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

  fromJSON(_: any): MsgAddSharesResponse {
    const message = { ...baseMsgAddSharesResponse } as MsgAddSharesResponse;
    return message;
  },

  toJSON(_: MsgAddSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddSharesResponse>): MsgAddSharesResponse {
    const message = { ...baseMsgAddSharesResponse } as MsgAddSharesResponse;
    return message;
  },
};

const baseMsgAddVestingOptions: object = {
  coordinator: "",
  campaignID: 0,
  address: "",
};

export const MsgAddVestingOptions = {
  encode(
    message: MsgAddVestingOptions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.vestingOptions !== undefined) {
      ShareVestingOptions.encode(
        message.vestingOptions,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddVestingOptions {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddVestingOptions } as MsgAddVestingOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
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

  fromJSON(object: any): MsgAddVestingOptions {
    const message = { ...baseMsgAddVestingOptions } as MsgAddVestingOptions;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
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

  toJSON(message: MsgAddVestingOptions): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.address !== undefined && (obj.address = message.address);
    message.vestingOptions !== undefined &&
      (obj.vestingOptions = message.vestingOptions
        ? ShareVestingOptions.toJSON(message.vestingOptions)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddVestingOptions>): MsgAddVestingOptions {
    const message = { ...baseMsgAddVestingOptions } as MsgAddVestingOptions;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
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

const baseMsgAddVestingOptionsResponse: object = {};

export const MsgAddVestingOptionsResponse = {
  encode(
    _: MsgAddVestingOptionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddVestingOptionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddVestingOptionsResponse,
    } as MsgAddVestingOptionsResponse;
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

  fromJSON(_: any): MsgAddVestingOptionsResponse {
    const message = {
      ...baseMsgAddVestingOptionsResponse,
    } as MsgAddVestingOptionsResponse;
    return message;
  },

  toJSON(_: MsgAddVestingOptionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddVestingOptionsResponse>
  ): MsgAddVestingOptionsResponse {
    const message = {
      ...baseMsgAddVestingOptionsResponse,
    } as MsgAddVestingOptionsResponse;
    return message;
  },
};

const baseMsgMintVouchers: object = { coordinator: "", campaignID: 0 };

export const MsgMintVouchers = {
  encode(message: MsgMintVouchers, writer: Writer = Writer.create()): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    for (const v of message.shares) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintVouchers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintVouchers } as MsgMintVouchers;
    message.shares = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgMintVouchers {
    const message = { ...baseMsgMintVouchers } as MsgMintVouchers;
    message.shares = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgMintVouchers): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    if (message.shares) {
      obj.shares = message.shares.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.shares = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintVouchers>): MsgMintVouchers {
    const message = { ...baseMsgMintVouchers } as MsgMintVouchers;
    message.shares = [];
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgMintVouchersResponse: object = {};

export const MsgMintVouchersResponse = {
  encode(_: MsgMintVouchersResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintVouchersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMintVouchersResponse,
    } as MsgMintVouchersResponse;
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

  fromJSON(_: any): MsgMintVouchersResponse {
    const message = {
      ...baseMsgMintVouchersResponse,
    } as MsgMintVouchersResponse;
    return message;
  },

  toJSON(_: MsgMintVouchersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgMintVouchersResponse>
  ): MsgMintVouchersResponse {
    const message = {
      ...baseMsgMintVouchersResponse,
    } as MsgMintVouchersResponse;
    return message;
  },
};

const baseMsgBurnVouchers: object = { sender: "", campaignID: 0 };

export const MsgBurnVouchers = {
  encode(message: MsgBurnVouchers, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    for (const v of message.vouchers) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnVouchers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnVouchers } as MsgBurnVouchers;
    message.vouchers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.vouchers.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnVouchers {
    const message = { ...baseMsgBurnVouchers } as MsgBurnVouchers;
    message.vouchers = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.vouchers !== undefined && object.vouchers !== null) {
      for (const e of object.vouchers) {
        message.vouchers.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgBurnVouchers): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    if (message.vouchers) {
      obj.vouchers = message.vouchers.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.vouchers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnVouchers>): MsgBurnVouchers {
    const message = { ...baseMsgBurnVouchers } as MsgBurnVouchers;
    message.vouchers = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.vouchers !== undefined && object.vouchers !== null) {
      for (const e of object.vouchers) {
        message.vouchers.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgBurnVouchersResponse: object = {};

export const MsgBurnVouchersResponse = {
  encode(_: MsgBurnVouchersResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnVouchersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgBurnVouchersResponse,
    } as MsgBurnVouchersResponse;
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

  fromJSON(_: any): MsgBurnVouchersResponse {
    const message = {
      ...baseMsgBurnVouchersResponse,
    } as MsgBurnVouchersResponse;
    return message;
  },

  toJSON(_: MsgBurnVouchersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgBurnVouchersResponse>
  ): MsgBurnVouchersResponse {
    const message = {
      ...baseMsgBurnVouchersResponse,
    } as MsgBurnVouchersResponse;
    return message;
  },
};

const baseMsgRedeemVouchers: object = {
  sender: "",
  campaignID: 0,
  account: "",
};

export const MsgRedeemVouchers = {
  encode(message: MsgRedeemVouchers, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    for (const v of message.vouchers) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRedeemVouchers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedeemVouchers } as MsgRedeemVouchers;
    message.vouchers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.account = reader.string();
          break;
        case 4:
          message.vouchers.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemVouchers {
    const message = { ...baseMsgRedeemVouchers } as MsgRedeemVouchers;
    message.vouchers = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.vouchers !== undefined && object.vouchers !== null) {
      for (const e of object.vouchers) {
        message.vouchers.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgRedeemVouchers): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.account !== undefined && (obj.account = message.account);
    if (message.vouchers) {
      obj.vouchers = message.vouchers.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.vouchers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedeemVouchers>): MsgRedeemVouchers {
    const message = { ...baseMsgRedeemVouchers } as MsgRedeemVouchers;
    message.vouchers = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.vouchers !== undefined && object.vouchers !== null) {
      for (const e of object.vouchers) {
        message.vouchers.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgRedeemVouchersResponse: object = {};

export const MsgRedeemVouchersResponse = {
  encode(
    _: MsgRedeemVouchersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRedeemVouchersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRedeemVouchersResponse,
    } as MsgRedeemVouchersResponse;
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

  fromJSON(_: any): MsgRedeemVouchersResponse {
    const message = {
      ...baseMsgRedeemVouchersResponse,
    } as MsgRedeemVouchersResponse;
    return message;
  },

  toJSON(_: MsgRedeemVouchersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRedeemVouchersResponse>
  ): MsgRedeemVouchersResponse {
    const message = {
      ...baseMsgRedeemVouchersResponse,
    } as MsgRedeemVouchersResponse;
    return message;
  },
};

const baseMsgUnredeemVouchers: object = { sender: "", campaignID: 0 };

export const MsgUnredeemVouchers = {
  encode(
    message: MsgUnredeemVouchers,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.campaignID !== 0) {
      writer.uint32(16).uint64(message.campaignID);
    }
    for (const v of message.shares) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnredeemVouchers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnredeemVouchers } as MsgUnredeemVouchers;
    message.shares = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.shares.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnredeemVouchers {
    const message = { ...baseMsgUnredeemVouchers } as MsgUnredeemVouchers;
    message.shares = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUnredeemVouchers): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    if (message.shares) {
      obj.shares = message.shares.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.shares = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnredeemVouchers>): MsgUnredeemVouchers {
    const message = { ...baseMsgUnredeemVouchers } as MsgUnredeemVouchers;
    message.shares = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgUnredeemVouchersResponse: object = {};

export const MsgUnredeemVouchersResponse = {
  encode(
    _: MsgUnredeemVouchersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUnredeemVouchersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUnredeemVouchersResponse,
    } as MsgUnredeemVouchersResponse;
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

  fromJSON(_: any): MsgUnredeemVouchersResponse {
    const message = {
      ...baseMsgUnredeemVouchersResponse,
    } as MsgUnredeemVouchersResponse;
    return message;
  },

  toJSON(_: MsgUnredeemVouchersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUnredeemVouchersResponse>
  ): MsgUnredeemVouchersResponse {
    const message = {
      ...baseMsgUnredeemVouchersResponse,
    } as MsgUnredeemVouchersResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateCampaign(
    request: MsgCreateCampaign
  ): Promise<MsgCreateCampaignResponse>;
  UpdateCampaignName(
    request: MsgUpdateCampaignName
  ): Promise<MsgUpdateCampaignNameResponse>;
  UpdateTotalSupply(
    request: MsgUpdateTotalSupply
  ): Promise<MsgUpdateTotalSupplyResponse>;
  UpdateTotalShares(
    request: MsgUpdateTotalShares
  ): Promise<MsgUpdateTotalSharesResponse>;
  InitializeMainnet(
    request: MsgInitializeMainnet
  ): Promise<MsgInitializeMainnetResponse>;
  AddShares(request: MsgAddShares): Promise<MsgAddSharesResponse>;
  AddVestingOptions(
    request: MsgAddVestingOptions
  ): Promise<MsgAddVestingOptionsResponse>;
  MintVouchers(request: MsgMintVouchers): Promise<MsgMintVouchersResponse>;
  BurnVouchers(request: MsgBurnVouchers): Promise<MsgBurnVouchersResponse>;
  RedeemVouchers(
    request: MsgRedeemVouchers
  ): Promise<MsgRedeemVouchersResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UnredeemVouchers(
    request: MsgUnredeemVouchers
  ): Promise<MsgUnredeemVouchersResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateCampaign(
    request: MsgCreateCampaign
  ): Promise<MsgCreateCampaignResponse> {
    const data = MsgCreateCampaign.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "CreateCampaign",
      data
    );
    return promise.then((data) =>
      MsgCreateCampaignResponse.decode(new Reader(data))
    );
  }

  UpdateCampaignName(
    request: MsgUpdateCampaignName
  ): Promise<MsgUpdateCampaignNameResponse> {
    const data = MsgUpdateCampaignName.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "UpdateCampaignName",
      data
    );
    return promise.then((data) =>
      MsgUpdateCampaignNameResponse.decode(new Reader(data))
    );
  }

  UpdateTotalSupply(
    request: MsgUpdateTotalSupply
  ): Promise<MsgUpdateTotalSupplyResponse> {
    const data = MsgUpdateTotalSupply.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "UpdateTotalSupply",
      data
    );
    return promise.then((data) =>
      MsgUpdateTotalSupplyResponse.decode(new Reader(data))
    );
  }

  UpdateTotalShares(
    request: MsgUpdateTotalShares
  ): Promise<MsgUpdateTotalSharesResponse> {
    const data = MsgUpdateTotalShares.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "UpdateTotalShares",
      data
    );
    return promise.then((data) =>
      MsgUpdateTotalSharesResponse.decode(new Reader(data))
    );
  }

  InitializeMainnet(
    request: MsgInitializeMainnet
  ): Promise<MsgInitializeMainnetResponse> {
    const data = MsgInitializeMainnet.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "InitializeMainnet",
      data
    );
    return promise.then((data) =>
      MsgInitializeMainnetResponse.decode(new Reader(data))
    );
  }

  AddShares(request: MsgAddShares): Promise<MsgAddSharesResponse> {
    const data = MsgAddShares.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "AddShares",
      data
    );
    return promise.then((data) =>
      MsgAddSharesResponse.decode(new Reader(data))
    );
  }

  AddVestingOptions(
    request: MsgAddVestingOptions
  ): Promise<MsgAddVestingOptionsResponse> {
    const data = MsgAddVestingOptions.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "AddVestingOptions",
      data
    );
    return promise.then((data) =>
      MsgAddVestingOptionsResponse.decode(new Reader(data))
    );
  }

  MintVouchers(request: MsgMintVouchers): Promise<MsgMintVouchersResponse> {
    const data = MsgMintVouchers.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "MintVouchers",
      data
    );
    return promise.then((data) =>
      MsgMintVouchersResponse.decode(new Reader(data))
    );
  }

  BurnVouchers(request: MsgBurnVouchers): Promise<MsgBurnVouchersResponse> {
    const data = MsgBurnVouchers.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "BurnVouchers",
      data
    );
    return promise.then((data) =>
      MsgBurnVouchersResponse.decode(new Reader(data))
    );
  }

  RedeemVouchers(
    request: MsgRedeemVouchers
  ): Promise<MsgRedeemVouchersResponse> {
    const data = MsgRedeemVouchers.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "RedeemVouchers",
      data
    );
    return promise.then((data) =>
      MsgRedeemVouchersResponse.decode(new Reader(data))
    );
  }

  UnredeemVouchers(
    request: MsgUnredeemVouchers
  ): Promise<MsgUnredeemVouchersResponse> {
    const data = MsgUnredeemVouchers.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Msg",
      "UnredeemVouchers",
      data
    );
    return promise.then((data) =>
      MsgUnredeemVouchersResponse.decode(new Reader(data))
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
