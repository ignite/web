/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Campaign } from "../campaign/campaign";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { CampaignChains } from "../campaign/campaign_chains";
import { MainnetAccount } from "../campaign/mainnet_account";
import { MainnetVestingAccount } from "../campaign/mainnet_vesting_account";

export const protobufPackage = "tendermint.spn.campaign";

export interface QueryGetCampaignRequest {
  campaignID: number;
}

export interface QueryGetCampaignResponse {
  campaign: Campaign | undefined;
}

export interface QueryAllCampaignRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCampaignResponse {
  campaign: Campaign[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCampaignChainsRequest {
  campaignID: number;
}

export interface QueryGetCampaignChainsResponse {
  campaignChains: CampaignChains | undefined;
}

export interface QueryGetMainnetAccountRequest {
  campaignID: number;
  address: string;
}

export interface QueryGetMainnetAccountResponse {
  mainnetAccount: MainnetAccount | undefined;
}

export interface QueryAllMainnetAccountRequest {
  campaignID: number;
  pagination: PageRequest | undefined;
}

export interface QueryAllMainnetAccountResponse {
  mainnetAccount: MainnetAccount[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMainnetVestingAccountRequest {
  campaignID: number;
  address: string;
}

export interface QueryGetMainnetVestingAccountResponse {
  mainnetVestingAccount: MainnetVestingAccount | undefined;
}

export interface QueryAllMainnetVestingAccountRequest {
  campaignID: number;
  pagination: PageRequest | undefined;
}

export interface QueryAllMainnetVestingAccountResponse {
  mainnetVestingAccount: MainnetVestingAccount[];
  pagination: PageResponse | undefined;
}

const baseQueryGetCampaignRequest: object = { campaignID: 0 };

export const QueryGetCampaignRequest = {
  encode(
    message: QueryGetCampaignRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCampaignRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCampaignRequest,
    } as QueryGetCampaignRequest;
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

  fromJSON(object: any): QueryGetCampaignRequest {
    const message = {
      ...baseQueryGetCampaignRequest,
    } as QueryGetCampaignRequest;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCampaignRequest): unknown {
    const obj: any = {};
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCampaignRequest>
  ): QueryGetCampaignRequest {
    const message = {
      ...baseQueryGetCampaignRequest,
    } as QueryGetCampaignRequest;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    return message;
  },
};

const baseQueryGetCampaignResponse: object = {};

export const QueryGetCampaignResponse = {
  encode(
    message: QueryGetCampaignResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaign !== undefined) {
      Campaign.encode(message.campaign, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCampaignResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCampaignResponse,
    } as QueryGetCampaignResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaign = Campaign.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCampaignResponse {
    const message = {
      ...baseQueryGetCampaignResponse,
    } as QueryGetCampaignResponse;
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromJSON(object.campaign);
    } else {
      message.campaign = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCampaignResponse): unknown {
    const obj: any = {};
    message.campaign !== undefined &&
      (obj.campaign = message.campaign
        ? Campaign.toJSON(message.campaign)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCampaignResponse>
  ): QueryGetCampaignResponse {
    const message = {
      ...baseQueryGetCampaignResponse,
    } as QueryGetCampaignResponse;
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromPartial(object.campaign);
    } else {
      message.campaign = undefined;
    }
    return message;
  },
};

const baseQueryAllCampaignRequest: object = {};

export const QueryAllCampaignRequest = {
  encode(
    message: QueryAllCampaignRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCampaignRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCampaignRequest,
    } as QueryAllCampaignRequest;
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

  fromJSON(object: any): QueryAllCampaignRequest {
    const message = {
      ...baseQueryAllCampaignRequest,
    } as QueryAllCampaignRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCampaignRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCampaignRequest>
  ): QueryAllCampaignRequest {
    const message = {
      ...baseQueryAllCampaignRequest,
    } as QueryAllCampaignRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCampaignResponse: object = {};

export const QueryAllCampaignResponse = {
  encode(
    message: QueryAllCampaignResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.campaign) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllCampaignResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCampaignResponse,
    } as QueryAllCampaignResponse;
    message.campaign = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaign.push(Campaign.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllCampaignResponse {
    const message = {
      ...baseQueryAllCampaignResponse,
    } as QueryAllCampaignResponse;
    message.campaign = [];
    if (object.campaign !== undefined && object.campaign !== null) {
      for (const e of object.campaign) {
        message.campaign.push(Campaign.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCampaignResponse): unknown {
    const obj: any = {};
    if (message.campaign) {
      obj.campaign = message.campaign.map((e) =>
        e ? Campaign.toJSON(e) : undefined
      );
    } else {
      obj.campaign = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCampaignResponse>
  ): QueryAllCampaignResponse {
    const message = {
      ...baseQueryAllCampaignResponse,
    } as QueryAllCampaignResponse;
    message.campaign = [];
    if (object.campaign !== undefined && object.campaign !== null) {
      for (const e of object.campaign) {
        message.campaign.push(Campaign.fromPartial(e));
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

const baseQueryGetCampaignChainsRequest: object = { campaignID: 0 };

export const QueryGetCampaignChainsRequest = {
  encode(
    message: QueryGetCampaignChainsRequest,
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
  ): QueryGetCampaignChainsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCampaignChainsRequest,
    } as QueryGetCampaignChainsRequest;
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

  fromJSON(object: any): QueryGetCampaignChainsRequest {
    const message = {
      ...baseQueryGetCampaignChainsRequest,
    } as QueryGetCampaignChainsRequest;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCampaignChainsRequest): unknown {
    const obj: any = {};
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCampaignChainsRequest>
  ): QueryGetCampaignChainsRequest {
    const message = {
      ...baseQueryGetCampaignChainsRequest,
    } as QueryGetCampaignChainsRequest;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    return message;
  },
};

const baseQueryGetCampaignChainsResponse: object = {};

export const QueryGetCampaignChainsResponse = {
  encode(
    message: QueryGetCampaignChainsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignChains !== undefined) {
      CampaignChains.encode(
        message.campaignChains,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCampaignChainsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCampaignChainsResponse,
    } as QueryGetCampaignChainsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignChains = CampaignChains.decode(
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

  fromJSON(object: any): QueryGetCampaignChainsResponse {
    const message = {
      ...baseQueryGetCampaignChainsResponse,
    } as QueryGetCampaignChainsResponse;
    if (object.campaignChains !== undefined && object.campaignChains !== null) {
      message.campaignChains = CampaignChains.fromJSON(object.campaignChains);
    } else {
      message.campaignChains = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCampaignChainsResponse): unknown {
    const obj: any = {};
    message.campaignChains !== undefined &&
      (obj.campaignChains = message.campaignChains
        ? CampaignChains.toJSON(message.campaignChains)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCampaignChainsResponse>
  ): QueryGetCampaignChainsResponse {
    const message = {
      ...baseQueryGetCampaignChainsResponse,
    } as QueryGetCampaignChainsResponse;
    if (object.campaignChains !== undefined && object.campaignChains !== null) {
      message.campaignChains = CampaignChains.fromPartial(
        object.campaignChains
      );
    } else {
      message.campaignChains = undefined;
    }
    return message;
  },
};

const baseQueryGetMainnetAccountRequest: object = {
  campaignID: 0,
  address: "",
};

export const QueryGetMainnetAccountRequest = {
  encode(
    message: QueryGetMainnetAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMainnetAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMainnetAccountRequest,
    } as QueryGetMainnetAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMainnetAccountRequest {
    const message = {
      ...baseQueryGetMainnetAccountRequest,
    } as QueryGetMainnetAccountRequest;
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
    return message;
  },

  toJSON(message: QueryGetMainnetAccountRequest): unknown {
    const obj: any = {};
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMainnetAccountRequest>
  ): QueryGetMainnetAccountRequest {
    const message = {
      ...baseQueryGetMainnetAccountRequest,
    } as QueryGetMainnetAccountRequest;
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
    return message;
  },
};

const baseQueryGetMainnetAccountResponse: object = {};

export const QueryGetMainnetAccountResponse = {
  encode(
    message: QueryGetMainnetAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mainnetAccount !== undefined) {
      MainnetAccount.encode(
        message.mainnetAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMainnetAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMainnetAccountResponse,
    } as QueryGetMainnetAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainnetAccount = MainnetAccount.decode(
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

  fromJSON(object: any): QueryGetMainnetAccountResponse {
    const message = {
      ...baseQueryGetMainnetAccountResponse,
    } as QueryGetMainnetAccountResponse;
    if (object.mainnetAccount !== undefined && object.mainnetAccount !== null) {
      message.mainnetAccount = MainnetAccount.fromJSON(object.mainnetAccount);
    } else {
      message.mainnetAccount = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMainnetAccountResponse): unknown {
    const obj: any = {};
    message.mainnetAccount !== undefined &&
      (obj.mainnetAccount = message.mainnetAccount
        ? MainnetAccount.toJSON(message.mainnetAccount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMainnetAccountResponse>
  ): QueryGetMainnetAccountResponse {
    const message = {
      ...baseQueryGetMainnetAccountResponse,
    } as QueryGetMainnetAccountResponse;
    if (object.mainnetAccount !== undefined && object.mainnetAccount !== null) {
      message.mainnetAccount = MainnetAccount.fromPartial(
        object.mainnetAccount
      );
    } else {
      message.mainnetAccount = undefined;
    }
    return message;
  },
};

const baseQueryAllMainnetAccountRequest: object = { campaignID: 0 };

export const QueryAllMainnetAccountRequest = {
  encode(
    message: QueryAllMainnetAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMainnetAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMainnetAccountRequest,
    } as QueryAllMainnetAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMainnetAccountRequest {
    const message = {
      ...baseQueryAllMainnetAccountRequest,
    } as QueryAllMainnetAccountRequest;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMainnetAccountRequest): unknown {
    const obj: any = {};
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMainnetAccountRequest>
  ): QueryAllMainnetAccountRequest {
    const message = {
      ...baseQueryAllMainnetAccountRequest,
    } as QueryAllMainnetAccountRequest;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMainnetAccountResponse: object = {};

export const QueryAllMainnetAccountResponse = {
  encode(
    message: QueryAllMainnetAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.mainnetAccount) {
      MainnetAccount.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMainnetAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMainnetAccountResponse,
    } as QueryAllMainnetAccountResponse;
    message.mainnetAccount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainnetAccount.push(
            MainnetAccount.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllMainnetAccountResponse {
    const message = {
      ...baseQueryAllMainnetAccountResponse,
    } as QueryAllMainnetAccountResponse;
    message.mainnetAccount = [];
    if (object.mainnetAccount !== undefined && object.mainnetAccount !== null) {
      for (const e of object.mainnetAccount) {
        message.mainnetAccount.push(MainnetAccount.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMainnetAccountResponse): unknown {
    const obj: any = {};
    if (message.mainnetAccount) {
      obj.mainnetAccount = message.mainnetAccount.map((e) =>
        e ? MainnetAccount.toJSON(e) : undefined
      );
    } else {
      obj.mainnetAccount = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMainnetAccountResponse>
  ): QueryAllMainnetAccountResponse {
    const message = {
      ...baseQueryAllMainnetAccountResponse,
    } as QueryAllMainnetAccountResponse;
    message.mainnetAccount = [];
    if (object.mainnetAccount !== undefined && object.mainnetAccount !== null) {
      for (const e of object.mainnetAccount) {
        message.mainnetAccount.push(MainnetAccount.fromPartial(e));
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

const baseQueryGetMainnetVestingAccountRequest: object = {
  campaignID: 0,
  address: "",
};

export const QueryGetMainnetVestingAccountRequest = {
  encode(
    message: QueryGetMainnetVestingAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMainnetVestingAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMainnetVestingAccountRequest,
    } as QueryGetMainnetVestingAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMainnetVestingAccountRequest {
    const message = {
      ...baseQueryGetMainnetVestingAccountRequest,
    } as QueryGetMainnetVestingAccountRequest;
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
    return message;
  },

  toJSON(message: QueryGetMainnetVestingAccountRequest): unknown {
    const obj: any = {};
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMainnetVestingAccountRequest>
  ): QueryGetMainnetVestingAccountRequest {
    const message = {
      ...baseQueryGetMainnetVestingAccountRequest,
    } as QueryGetMainnetVestingAccountRequest;
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
    return message;
  },
};

const baseQueryGetMainnetVestingAccountResponse: object = {};

export const QueryGetMainnetVestingAccountResponse = {
  encode(
    message: QueryGetMainnetVestingAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mainnetVestingAccount !== undefined) {
      MainnetVestingAccount.encode(
        message.mainnetVestingAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMainnetVestingAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMainnetVestingAccountResponse,
    } as QueryGetMainnetVestingAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainnetVestingAccount = MainnetVestingAccount.decode(
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

  fromJSON(object: any): QueryGetMainnetVestingAccountResponse {
    const message = {
      ...baseQueryGetMainnetVestingAccountResponse,
    } as QueryGetMainnetVestingAccountResponse;
    if (
      object.mainnetVestingAccount !== undefined &&
      object.mainnetVestingAccount !== null
    ) {
      message.mainnetVestingAccount = MainnetVestingAccount.fromJSON(
        object.mainnetVestingAccount
      );
    } else {
      message.mainnetVestingAccount = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMainnetVestingAccountResponse): unknown {
    const obj: any = {};
    message.mainnetVestingAccount !== undefined &&
      (obj.mainnetVestingAccount = message.mainnetVestingAccount
        ? MainnetVestingAccount.toJSON(message.mainnetVestingAccount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMainnetVestingAccountResponse>
  ): QueryGetMainnetVestingAccountResponse {
    const message = {
      ...baseQueryGetMainnetVestingAccountResponse,
    } as QueryGetMainnetVestingAccountResponse;
    if (
      object.mainnetVestingAccount !== undefined &&
      object.mainnetVestingAccount !== null
    ) {
      message.mainnetVestingAccount = MainnetVestingAccount.fromPartial(
        object.mainnetVestingAccount
      );
    } else {
      message.mainnetVestingAccount = undefined;
    }
    return message;
  },
};

const baseQueryAllMainnetVestingAccountRequest: object = { campaignID: 0 };

export const QueryAllMainnetVestingAccountRequest = {
  encode(
    message: QueryAllMainnetVestingAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMainnetVestingAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMainnetVestingAccountRequest,
    } as QueryAllMainnetVestingAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMainnetVestingAccountRequest {
    const message = {
      ...baseQueryAllMainnetVestingAccountRequest,
    } as QueryAllMainnetVestingAccountRequest;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID);
    } else {
      message.campaignID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMainnetVestingAccountRequest): unknown {
    const obj: any = {};
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMainnetVestingAccountRequest>
  ): QueryAllMainnetVestingAccountRequest {
    const message = {
      ...baseQueryAllMainnetVestingAccountRequest,
    } as QueryAllMainnetVestingAccountRequest;
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID;
    } else {
      message.campaignID = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMainnetVestingAccountResponse: object = {};

export const QueryAllMainnetVestingAccountResponse = {
  encode(
    message: QueryAllMainnetVestingAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.mainnetVestingAccount) {
      MainnetVestingAccount.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMainnetVestingAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMainnetVestingAccountResponse,
    } as QueryAllMainnetVestingAccountResponse;
    message.mainnetVestingAccount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainnetVestingAccount.push(
            MainnetVestingAccount.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllMainnetVestingAccountResponse {
    const message = {
      ...baseQueryAllMainnetVestingAccountResponse,
    } as QueryAllMainnetVestingAccountResponse;
    message.mainnetVestingAccount = [];
    if (
      object.mainnetVestingAccount !== undefined &&
      object.mainnetVestingAccount !== null
    ) {
      for (const e of object.mainnetVestingAccount) {
        message.mainnetVestingAccount.push(MainnetVestingAccount.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMainnetVestingAccountResponse): unknown {
    const obj: any = {};
    if (message.mainnetVestingAccount) {
      obj.mainnetVestingAccount = message.mainnetVestingAccount.map((e) =>
        e ? MainnetVestingAccount.toJSON(e) : undefined
      );
    } else {
      obj.mainnetVestingAccount = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMainnetVestingAccountResponse>
  ): QueryAllMainnetVestingAccountResponse {
    const message = {
      ...baseQueryAllMainnetVestingAccountResponse,
    } as QueryAllMainnetVestingAccountResponse;
    message.mainnetVestingAccount = [];
    if (
      object.mainnetVestingAccount !== undefined &&
      object.mainnetVestingAccount !== null
    ) {
      for (const e of object.mainnetVestingAccount) {
        message.mainnetVestingAccount.push(
          MainnetVestingAccount.fromPartial(e)
        );
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a campaign by id. */
  Campaign(request: QueryGetCampaignRequest): Promise<QueryGetCampaignResponse>;
  /** Queries a list of campaign items. */
  CampaignAll(
    request: QueryAllCampaignRequest
  ): Promise<QueryAllCampaignResponse>;
  /** Queries a campaignChains by index. */
  CampaignChains(
    request: QueryGetCampaignChainsRequest
  ): Promise<QueryGetCampaignChainsResponse>;
  /** Queries a mainnetAccount by index. */
  MainnetAccount(
    request: QueryGetMainnetAccountRequest
  ): Promise<QueryGetMainnetAccountResponse>;
  /** Queries a list of mainnetAccount items. */
  MainnetAccountAll(
    request: QueryAllMainnetAccountRequest
  ): Promise<QueryAllMainnetAccountResponse>;
  /** Queries a mainnetVestingAccount by index. */
  MainnetVestingAccount(
    request: QueryGetMainnetVestingAccountRequest
  ): Promise<QueryGetMainnetVestingAccountResponse>;
  /** Queries a list of mainnetVestingAccount items. */
  MainnetVestingAccountAll(
    request: QueryAllMainnetVestingAccountRequest
  ): Promise<QueryAllMainnetVestingAccountResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Campaign(
    request: QueryGetCampaignRequest
  ): Promise<QueryGetCampaignResponse> {
    const data = QueryGetCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Query",
      "Campaign",
      data
    );
    return promise.then((data) =>
      QueryGetCampaignResponse.decode(new Reader(data))
    );
  }

  CampaignAll(
    request: QueryAllCampaignRequest
  ): Promise<QueryAllCampaignResponse> {
    const data = QueryAllCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Query",
      "CampaignAll",
      data
    );
    return promise.then((data) =>
      QueryAllCampaignResponse.decode(new Reader(data))
    );
  }

  CampaignChains(
    request: QueryGetCampaignChainsRequest
  ): Promise<QueryGetCampaignChainsResponse> {
    const data = QueryGetCampaignChainsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Query",
      "CampaignChains",
      data
    );
    return promise.then((data) =>
      QueryGetCampaignChainsResponse.decode(new Reader(data))
    );
  }

  MainnetAccount(
    request: QueryGetMainnetAccountRequest
  ): Promise<QueryGetMainnetAccountResponse> {
    const data = QueryGetMainnetAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Query",
      "MainnetAccount",
      data
    );
    return promise.then((data) =>
      QueryGetMainnetAccountResponse.decode(new Reader(data))
    );
  }

  MainnetAccountAll(
    request: QueryAllMainnetAccountRequest
  ): Promise<QueryAllMainnetAccountResponse> {
    const data = QueryAllMainnetAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Query",
      "MainnetAccountAll",
      data
    );
    return promise.then((data) =>
      QueryAllMainnetAccountResponse.decode(new Reader(data))
    );
  }

  MainnetVestingAccount(
    request: QueryGetMainnetVestingAccountRequest
  ): Promise<QueryGetMainnetVestingAccountResponse> {
    const data = QueryGetMainnetVestingAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Query",
      "MainnetVestingAccount",
      data
    );
    return promise.then((data) =>
      QueryGetMainnetVestingAccountResponse.decode(new Reader(data))
    );
  }

  MainnetVestingAccountAll(
    request: QueryAllMainnetVestingAccountRequest
  ): Promise<QueryAllMainnetVestingAccountResponse> {
    const data = QueryAllMainnetVestingAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.campaign.Query",
      "MainnetVestingAccountAll",
      data
    );
    return promise.then((data) =>
      QueryAllMainnetVestingAccountResponse.decode(new Reader(data))
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
