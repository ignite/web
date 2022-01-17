/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { InitialGenesis } from "../launch/chain";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { VestingOptions } from "../launch/vesting_account";

export const protobufPackage = "tendermint.spn.launch";

export interface MsgCreateChain {
  coordinator: string;
  genesisChainID: string;
  sourceURL: string;
  sourceHash: string;
  genesisURL: string;
  genesisHash: string;
  hasCampaign: boolean;
  campaignID: number;
}

export interface MsgCreateChainResponse {
  launchID: number;
}

export interface MsgEditChain {
  coordinator: string;
  launchID: number;
  genesisChainID: string;
  sourceURL: string;
  sourceHash: string;
  initialGenesis: InitialGenesis | undefined;
}

export interface MsgEditChainResponse {}

export interface MsgRequestAddAccount {
  creator: string;
  launchID: number;
  address: string;
  coins: Coin[];
}

export interface MsgRequestAddAccountResponse {
  requestID: number;
  autoApproved: boolean;
}

export interface MsgRequestAddVestingAccount {
  creator: string;
  launchID: number;
  address: string;
  options: VestingOptions | undefined;
}

export interface MsgRequestAddVestingAccountResponse {
  requestID: number;
  autoApproved: boolean;
}

export interface MsgRequestRemoveAccount {
  creator: string;
  launchID: number;
  address: string;
}

export interface MsgRequestRemoveAccountResponse {
  requestID: number;
  autoApproved: boolean;
}

export interface MsgRequestAddValidator {
  creator: string;
  launchID: number;
  valAddress: string;
  genTx: Uint8Array;
  consPubKey: Uint8Array;
  selfDelegation: Coin | undefined;
  peer: string;
}

export interface MsgRequestAddValidatorResponse {
  requestID: number;
  autoApproved: boolean;
}

export interface MsgRequestRemoveValidator {
  creator: string;
  launchID: number;
  validatorAddress: string;
}

export interface MsgRequestRemoveValidatorResponse {
  requestID: number;
  autoApproved: boolean;
}

export interface MsgSettleRequest {
  coordinator: string;
  launchID: number;
  requestID: number;
  approve: boolean;
}

export interface MsgSettleRequestResponse {}

export interface MsgTriggerLaunch {
  coordinator: string;
  launchID: number;
  remainingTime: number;
}

export interface MsgTriggerLaunchResponse {}

export interface MsgRevertLaunch {
  coordinator: string;
  launchID: number;
}

export interface MsgRevertLaunchResponse {}

const baseMsgCreateChain: object = {
  coordinator: "",
  genesisChainID: "",
  sourceURL: "",
  sourceHash: "",
  genesisURL: "",
  genesisHash: "",
  hasCampaign: false,
  campaignID: 0,
};

export const MsgCreateChain = {
  encode(message: MsgCreateChain, writer: Writer = Writer.create()): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.genesisChainID !== "") {
      writer.uint32(18).string(message.genesisChainID);
    }
    if (message.sourceURL !== "") {
      writer.uint32(26).string(message.sourceURL);
    }
    if (message.sourceHash !== "") {
      writer.uint32(34).string(message.sourceHash);
    }
    if (message.genesisURL !== "") {
      writer.uint32(42).string(message.genesisURL);
    }
    if (message.genesisHash !== "") {
      writer.uint32(50).string(message.genesisHash);
    }
    if (message.hasCampaign === true) {
      writer.uint32(56).bool(message.hasCampaign);
    }
    if (message.campaignID !== 0) {
      writer.uint32(64).uint64(message.campaignID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateChain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateChain } as MsgCreateChain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.genesisChainID = reader.string();
          break;
        case 3:
          message.sourceURL = reader.string();
          break;
        case 4:
          message.sourceHash = reader.string();
          break;
        case 5:
          message.genesisURL = reader.string();
          break;
        case 6:
          message.genesisHash = reader.string();
          break;
        case 7:
          message.hasCampaign = reader.bool();
          break;
        case 8:
          message.campaignID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateChain {
    const message = { ...baseMsgCreateChain } as MsgCreateChain;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
      message.genesisChainID = String(object.genesisChainID);
    } else {
      message.genesisChainID = "";
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
    if (object.genesisURL !== undefined && object.genesisURL !== null) {
      message.genesisURL = String(object.genesisURL);
    } else {
      message.genesisURL = "";
    }
    if (object.genesisHash !== undefined && object.genesisHash !== null) {
      message.genesisHash = String(object.genesisHash);
    } else {
      message.genesisHash = "";
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
    return message;
  },

  toJSON(message: MsgCreateChain): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.genesisChainID !== undefined &&
      (obj.genesisChainID = message.genesisChainID);
    message.sourceURL !== undefined && (obj.sourceURL = message.sourceURL);
    message.sourceHash !== undefined && (obj.sourceHash = message.sourceHash);
    message.genesisURL !== undefined && (obj.genesisURL = message.genesisURL);
    message.genesisHash !== undefined &&
      (obj.genesisHash = message.genesisHash);
    message.hasCampaign !== undefined &&
      (obj.hasCampaign = message.hasCampaign);
    message.campaignID !== undefined && (obj.campaignID = message.campaignID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateChain>): MsgCreateChain {
    const message = { ...baseMsgCreateChain } as MsgCreateChain;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
      message.genesisChainID = object.genesisChainID;
    } else {
      message.genesisChainID = "";
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
    if (object.genesisURL !== undefined && object.genesisURL !== null) {
      message.genesisURL = object.genesisURL;
    } else {
      message.genesisURL = "";
    }
    if (object.genesisHash !== undefined && object.genesisHash !== null) {
      message.genesisHash = object.genesisHash;
    } else {
      message.genesisHash = "";
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
    return message;
  },
};

const baseMsgCreateChainResponse: object = { launchID: 0 };

export const MsgCreateChainResponse = {
  encode(
    message: MsgCreateChainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateChainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateChainResponse } as MsgCreateChainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateChainResponse {
    const message = { ...baseMsgCreateChainResponse } as MsgCreateChainResponse;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateChainResponse): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateChainResponse>
  ): MsgCreateChainResponse {
    const message = { ...baseMsgCreateChainResponse } as MsgCreateChainResponse;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    return message;
  },
};

const baseMsgEditChain: object = {
  coordinator: "",
  launchID: 0,
  genesisChainID: "",
  sourceURL: "",
  sourceHash: "",
};

export const MsgEditChain = {
  encode(message: MsgEditChain, writer: Writer = Writer.create()): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    if (message.genesisChainID !== "") {
      writer.uint32(26).string(message.genesisChainID);
    }
    if (message.sourceURL !== "") {
      writer.uint32(34).string(message.sourceURL);
    }
    if (message.sourceHash !== "") {
      writer.uint32(42).string(message.sourceHash);
    }
    if (message.initialGenesis !== undefined) {
      InitialGenesis.encode(
        message.initialGenesis,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgEditChain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEditChain } as MsgEditChain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.genesisChainID = reader.string();
          break;
        case 4:
          message.sourceURL = reader.string();
          break;
        case 5:
          message.sourceHash = reader.string();
          break;
        case 6:
          message.initialGenesis = InitialGenesis.decode(
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

  fromJSON(object: any): MsgEditChain {
    const message = { ...baseMsgEditChain } as MsgEditChain;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
      message.genesisChainID = String(object.genesisChainID);
    } else {
      message.genesisChainID = "";
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
    return message;
  },

  toJSON(message: MsgEditChain): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.genesisChainID !== undefined &&
      (obj.genesisChainID = message.genesisChainID);
    message.sourceURL !== undefined && (obj.sourceURL = message.sourceURL);
    message.sourceHash !== undefined && (obj.sourceHash = message.sourceHash);
    message.initialGenesis !== undefined &&
      (obj.initialGenesis = message.initialGenesis
        ? InitialGenesis.toJSON(message.initialGenesis)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditChain>): MsgEditChain {
    const message = { ...baseMsgEditChain } as MsgEditChain;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
      message.genesisChainID = object.genesisChainID;
    } else {
      message.genesisChainID = "";
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
    return message;
  },
};

const baseMsgEditChainResponse: object = {};

export const MsgEditChainResponse = {
  encode(_: MsgEditChainResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgEditChainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEditChainResponse } as MsgEditChainResponse;
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

  fromJSON(_: any): MsgEditChainResponse {
    const message = { ...baseMsgEditChainResponse } as MsgEditChainResponse;
    return message;
  },

  toJSON(_: MsgEditChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEditChainResponse>): MsgEditChainResponse {
    const message = { ...baseMsgEditChainResponse } as MsgEditChainResponse;
    return message;
  },
};

const baseMsgRequestAddAccount: object = {
  creator: "",
  launchID: 0,
  address: "",
};

export const MsgRequestAddAccount = {
  encode(
    message: MsgRequestAddAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestAddAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestAddAccount } as MsgRequestAddAccount;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestAddAccount {
    const message = { ...baseMsgRequestAddAccount } as MsgRequestAddAccount;
    message.coins = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgRequestAddAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.address !== undefined && (obj.address = message.address);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRequestAddAccount>): MsgRequestAddAccount {
    const message = { ...baseMsgRequestAddAccount } as MsgRequestAddAccount;
    message.coins = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgRequestAddAccountResponse: object = {
  requestID: 0,
  autoApproved: false,
};

export const MsgRequestAddAccountResponse = {
  encode(
    message: MsgRequestAddAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestID !== 0) {
      writer.uint32(8).uint64(message.requestID);
    }
    if (message.autoApproved === true) {
      writer.uint32(16).bool(message.autoApproved);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestAddAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestAddAccountResponse,
    } as MsgRequestAddAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.autoApproved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestAddAccountResponse {
    const message = {
      ...baseMsgRequestAddAccountResponse,
    } as MsgRequestAddAccountResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = Number(object.requestID);
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = Boolean(object.autoApproved);
    } else {
      message.autoApproved = false;
    }
    return message;
  },

  toJSON(message: MsgRequestAddAccountResponse): unknown {
    const obj: any = {};
    message.requestID !== undefined && (obj.requestID = message.requestID);
    message.autoApproved !== undefined &&
      (obj.autoApproved = message.autoApproved);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestAddAccountResponse>
  ): MsgRequestAddAccountResponse {
    const message = {
      ...baseMsgRequestAddAccountResponse,
    } as MsgRequestAddAccountResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = object.requestID;
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = object.autoApproved;
    } else {
      message.autoApproved = false;
    }
    return message;
  },
};

const baseMsgRequestAddVestingAccount: object = {
  creator: "",
  launchID: 0,
  address: "",
};

export const MsgRequestAddVestingAccount = {
  encode(
    message: MsgRequestAddVestingAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.options !== undefined) {
      VestingOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestAddVestingAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestAddVestingAccount,
    } as MsgRequestAddVestingAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.options = VestingOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestAddVestingAccount {
    const message = {
      ...baseMsgRequestAddVestingAccount,
    } as MsgRequestAddVestingAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = VestingOptions.fromJSON(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },

  toJSON(message: MsgRequestAddVestingAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.address !== undefined && (obj.address = message.address);
    message.options !== undefined &&
      (obj.options = message.options
        ? VestingOptions.toJSON(message.options)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestAddVestingAccount>
  ): MsgRequestAddVestingAccount {
    const message = {
      ...baseMsgRequestAddVestingAccount,
    } as MsgRequestAddVestingAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = VestingOptions.fromPartial(object.options);
    } else {
      message.options = undefined;
    }
    return message;
  },
};

const baseMsgRequestAddVestingAccountResponse: object = {
  requestID: 0,
  autoApproved: false,
};

export const MsgRequestAddVestingAccountResponse = {
  encode(
    message: MsgRequestAddVestingAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestID !== 0) {
      writer.uint32(8).uint64(message.requestID);
    }
    if (message.autoApproved === true) {
      writer.uint32(16).bool(message.autoApproved);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestAddVestingAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestAddVestingAccountResponse,
    } as MsgRequestAddVestingAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.autoApproved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestAddVestingAccountResponse {
    const message = {
      ...baseMsgRequestAddVestingAccountResponse,
    } as MsgRequestAddVestingAccountResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = Number(object.requestID);
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = Boolean(object.autoApproved);
    } else {
      message.autoApproved = false;
    }
    return message;
  },

  toJSON(message: MsgRequestAddVestingAccountResponse): unknown {
    const obj: any = {};
    message.requestID !== undefined && (obj.requestID = message.requestID);
    message.autoApproved !== undefined &&
      (obj.autoApproved = message.autoApproved);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestAddVestingAccountResponse>
  ): MsgRequestAddVestingAccountResponse {
    const message = {
      ...baseMsgRequestAddVestingAccountResponse,
    } as MsgRequestAddVestingAccountResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = object.requestID;
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = object.autoApproved;
    } else {
      message.autoApproved = false;
    }
    return message;
  },
};

const baseMsgRequestRemoveAccount: object = {
  creator: "",
  launchID: 0,
  address: "",
};

export const MsgRequestRemoveAccount = {
  encode(
    message: MsgRequestRemoveAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestRemoveAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestRemoveAccount,
    } as MsgRequestRemoveAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestRemoveAccount {
    const message = {
      ...baseMsgRequestRemoveAccount,
    } as MsgRequestRemoveAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgRequestRemoveAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestRemoveAccount>
  ): MsgRequestRemoveAccount {
    const message = {
      ...baseMsgRequestRemoveAccount,
    } as MsgRequestRemoveAccount;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgRequestRemoveAccountResponse: object = {
  requestID: 0,
  autoApproved: false,
};

export const MsgRequestRemoveAccountResponse = {
  encode(
    message: MsgRequestRemoveAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestID !== 0) {
      writer.uint32(8).uint64(message.requestID);
    }
    if (message.autoApproved === true) {
      writer.uint32(16).bool(message.autoApproved);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestRemoveAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestRemoveAccountResponse,
    } as MsgRequestRemoveAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.autoApproved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestRemoveAccountResponse {
    const message = {
      ...baseMsgRequestRemoveAccountResponse,
    } as MsgRequestRemoveAccountResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = Number(object.requestID);
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = Boolean(object.autoApproved);
    } else {
      message.autoApproved = false;
    }
    return message;
  },

  toJSON(message: MsgRequestRemoveAccountResponse): unknown {
    const obj: any = {};
    message.requestID !== undefined && (obj.requestID = message.requestID);
    message.autoApproved !== undefined &&
      (obj.autoApproved = message.autoApproved);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestRemoveAccountResponse>
  ): MsgRequestRemoveAccountResponse {
    const message = {
      ...baseMsgRequestRemoveAccountResponse,
    } as MsgRequestRemoveAccountResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = object.requestID;
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = object.autoApproved;
    } else {
      message.autoApproved = false;
    }
    return message;
  },
};

const baseMsgRequestAddValidator: object = {
  creator: "",
  launchID: 0,
  valAddress: "",
  peer: "",
};

export const MsgRequestAddValidator = {
  encode(
    message: MsgRequestAddValidator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    if (message.valAddress !== "") {
      writer.uint32(26).string(message.valAddress);
    }
    if (message.genTx.length !== 0) {
      writer.uint32(34).bytes(message.genTx);
    }
    if (message.consPubKey.length !== 0) {
      writer.uint32(42).bytes(message.consPubKey);
    }
    if (message.selfDelegation !== undefined) {
      Coin.encode(message.selfDelegation, writer.uint32(50).fork()).ldelim();
    }
    if (message.peer !== "") {
      writer.uint32(58).string(message.peer);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestAddValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestAddValidator } as MsgRequestAddValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.valAddress = reader.string();
          break;
        case 4:
          message.genTx = reader.bytes();
          break;
        case 5:
          message.consPubKey = reader.bytes();
          break;
        case 6:
          message.selfDelegation = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.peer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestAddValidator {
    const message = { ...baseMsgRequestAddValidator } as MsgRequestAddValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.valAddress !== undefined && object.valAddress !== null) {
      message.valAddress = String(object.valAddress);
    } else {
      message.valAddress = "";
    }
    if (object.genTx !== undefined && object.genTx !== null) {
      message.genTx = bytesFromBase64(object.genTx);
    }
    if (object.consPubKey !== undefined && object.consPubKey !== null) {
      message.consPubKey = bytesFromBase64(object.consPubKey);
    }
    if (object.selfDelegation !== undefined && object.selfDelegation !== null) {
      message.selfDelegation = Coin.fromJSON(object.selfDelegation);
    } else {
      message.selfDelegation = undefined;
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = String(object.peer);
    } else {
      message.peer = "";
    }
    return message;
  },

  toJSON(message: MsgRequestAddValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.valAddress !== undefined && (obj.valAddress = message.valAddress);
    message.genTx !== undefined &&
      (obj.genTx = base64FromBytes(
        message.genTx !== undefined ? message.genTx : new Uint8Array()
      ));
    message.consPubKey !== undefined &&
      (obj.consPubKey = base64FromBytes(
        message.consPubKey !== undefined ? message.consPubKey : new Uint8Array()
      ));
    message.selfDelegation !== undefined &&
      (obj.selfDelegation = message.selfDelegation
        ? Coin.toJSON(message.selfDelegation)
        : undefined);
    message.peer !== undefined && (obj.peer = message.peer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestAddValidator>
  ): MsgRequestAddValidator {
    const message = { ...baseMsgRequestAddValidator } as MsgRequestAddValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.valAddress !== undefined && object.valAddress !== null) {
      message.valAddress = object.valAddress;
    } else {
      message.valAddress = "";
    }
    if (object.genTx !== undefined && object.genTx !== null) {
      message.genTx = object.genTx;
    } else {
      message.genTx = new Uint8Array();
    }
    if (object.consPubKey !== undefined && object.consPubKey !== null) {
      message.consPubKey = object.consPubKey;
    } else {
      message.consPubKey = new Uint8Array();
    }
    if (object.selfDelegation !== undefined && object.selfDelegation !== null) {
      message.selfDelegation = Coin.fromPartial(object.selfDelegation);
    } else {
      message.selfDelegation = undefined;
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = object.peer;
    } else {
      message.peer = "";
    }
    return message;
  },
};

const baseMsgRequestAddValidatorResponse: object = {
  requestID: 0,
  autoApproved: false,
};

export const MsgRequestAddValidatorResponse = {
  encode(
    message: MsgRequestAddValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestID !== 0) {
      writer.uint32(8).uint64(message.requestID);
    }
    if (message.autoApproved === true) {
      writer.uint32(16).bool(message.autoApproved);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestAddValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestAddValidatorResponse,
    } as MsgRequestAddValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.autoApproved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestAddValidatorResponse {
    const message = {
      ...baseMsgRequestAddValidatorResponse,
    } as MsgRequestAddValidatorResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = Number(object.requestID);
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = Boolean(object.autoApproved);
    } else {
      message.autoApproved = false;
    }
    return message;
  },

  toJSON(message: MsgRequestAddValidatorResponse): unknown {
    const obj: any = {};
    message.requestID !== undefined && (obj.requestID = message.requestID);
    message.autoApproved !== undefined &&
      (obj.autoApproved = message.autoApproved);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestAddValidatorResponse>
  ): MsgRequestAddValidatorResponse {
    const message = {
      ...baseMsgRequestAddValidatorResponse,
    } as MsgRequestAddValidatorResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = object.requestID;
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = object.autoApproved;
    } else {
      message.autoApproved = false;
    }
    return message;
  },
};

const baseMsgRequestRemoveValidator: object = {
  creator: "",
  launchID: 0,
  validatorAddress: "",
};

export const MsgRequestRemoveValidator = {
  encode(
    message: MsgRequestRemoveValidator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(26).string(message.validatorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestRemoveValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestRemoveValidator,
    } as MsgRequestRemoveValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestRemoveValidator {
    const message = {
      ...baseMsgRequestRemoveValidator,
    } as MsgRequestRemoveValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgRequestRemoveValidator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestRemoveValidator>
  ): MsgRequestRemoveValidator {
    const message = {
      ...baseMsgRequestRemoveValidator,
    } as MsgRequestRemoveValidator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
};

const baseMsgRequestRemoveValidatorResponse: object = {
  requestID: 0,
  autoApproved: false,
};

export const MsgRequestRemoveValidatorResponse = {
  encode(
    message: MsgRequestRemoveValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestID !== 0) {
      writer.uint32(8).uint64(message.requestID);
    }
    if (message.autoApproved === true) {
      writer.uint32(16).bool(message.autoApproved);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestRemoveValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestRemoveValidatorResponse,
    } as MsgRequestRemoveValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.autoApproved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestRemoveValidatorResponse {
    const message = {
      ...baseMsgRequestRemoveValidatorResponse,
    } as MsgRequestRemoveValidatorResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = Number(object.requestID);
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = Boolean(object.autoApproved);
    } else {
      message.autoApproved = false;
    }
    return message;
  },

  toJSON(message: MsgRequestRemoveValidatorResponse): unknown {
    const obj: any = {};
    message.requestID !== undefined && (obj.requestID = message.requestID);
    message.autoApproved !== undefined &&
      (obj.autoApproved = message.autoApproved);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestRemoveValidatorResponse>
  ): MsgRequestRemoveValidatorResponse {
    const message = {
      ...baseMsgRequestRemoveValidatorResponse,
    } as MsgRequestRemoveValidatorResponse;
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = object.requestID;
    } else {
      message.requestID = 0;
    }
    if (object.autoApproved !== undefined && object.autoApproved !== null) {
      message.autoApproved = object.autoApproved;
    } else {
      message.autoApproved = false;
    }
    return message;
  },
};

const baseMsgSettleRequest: object = {
  coordinator: "",
  launchID: 0,
  requestID: 0,
  approve: false,
};

export const MsgSettleRequest = {
  encode(message: MsgSettleRequest, writer: Writer = Writer.create()): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    if (message.requestID !== 0) {
      writer.uint32(24).uint64(message.requestID);
    }
    if (message.approve === true) {
      writer.uint32(32).bool(message.approve);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSettleRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSettleRequest } as MsgSettleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.requestID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.approve = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSettleRequest {
    const message = { ...baseMsgSettleRequest } as MsgSettleRequest;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = Number(object.requestID);
    } else {
      message.requestID = 0;
    }
    if (object.approve !== undefined && object.approve !== null) {
      message.approve = Boolean(object.approve);
    } else {
      message.approve = false;
    }
    return message;
  },

  toJSON(message: MsgSettleRequest): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.requestID !== undefined && (obj.requestID = message.requestID);
    message.approve !== undefined && (obj.approve = message.approve);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSettleRequest>): MsgSettleRequest {
    const message = { ...baseMsgSettleRequest } as MsgSettleRequest;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = object.requestID;
    } else {
      message.requestID = 0;
    }
    if (object.approve !== undefined && object.approve !== null) {
      message.approve = object.approve;
    } else {
      message.approve = false;
    }
    return message;
  },
};

const baseMsgSettleRequestResponse: object = {};

export const MsgSettleRequestResponse = {
  encode(
    _: MsgSettleRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSettleRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSettleRequestResponse,
    } as MsgSettleRequestResponse;
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

  fromJSON(_: any): MsgSettleRequestResponse {
    const message = {
      ...baseMsgSettleRequestResponse,
    } as MsgSettleRequestResponse;
    return message;
  },

  toJSON(_: MsgSettleRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSettleRequestResponse>
  ): MsgSettleRequestResponse {
    const message = {
      ...baseMsgSettleRequestResponse,
    } as MsgSettleRequestResponse;
    return message;
  },
};

const baseMsgTriggerLaunch: object = {
  coordinator: "",
  launchID: 0,
  remainingTime: 0,
};

export const MsgTriggerLaunch = {
  encode(message: MsgTriggerLaunch, writer: Writer = Writer.create()): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    if (message.remainingTime !== 0) {
      writer.uint32(24).uint64(message.remainingTime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTriggerLaunch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTriggerLaunch } as MsgTriggerLaunch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.remainingTime = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTriggerLaunch {
    const message = { ...baseMsgTriggerLaunch } as MsgTriggerLaunch;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.remainingTime !== undefined && object.remainingTime !== null) {
      message.remainingTime = Number(object.remainingTime);
    } else {
      message.remainingTime = 0;
    }
    return message;
  },

  toJSON(message: MsgTriggerLaunch): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.remainingTime !== undefined &&
      (obj.remainingTime = message.remainingTime);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTriggerLaunch>): MsgTriggerLaunch {
    const message = { ...baseMsgTriggerLaunch } as MsgTriggerLaunch;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.remainingTime !== undefined && object.remainingTime !== null) {
      message.remainingTime = object.remainingTime;
    } else {
      message.remainingTime = 0;
    }
    return message;
  },
};

const baseMsgTriggerLaunchResponse: object = {};

export const MsgTriggerLaunchResponse = {
  encode(
    _: MsgTriggerLaunchResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgTriggerLaunchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTriggerLaunchResponse,
    } as MsgTriggerLaunchResponse;
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

  fromJSON(_: any): MsgTriggerLaunchResponse {
    const message = {
      ...baseMsgTriggerLaunchResponse,
    } as MsgTriggerLaunchResponse;
    return message;
  },

  toJSON(_: MsgTriggerLaunchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgTriggerLaunchResponse>
  ): MsgTriggerLaunchResponse {
    const message = {
      ...baseMsgTriggerLaunchResponse,
    } as MsgTriggerLaunchResponse;
    return message;
  },
};

const baseMsgRevertLaunch: object = { coordinator: "", launchID: 0 };

export const MsgRevertLaunch = {
  encode(message: MsgRevertLaunch, writer: Writer = Writer.create()): Writer {
    if (message.coordinator !== "") {
      writer.uint32(10).string(message.coordinator);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevertLaunch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRevertLaunch } as MsgRevertLaunch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinator = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevertLaunch {
    const message = { ...baseMsgRevertLaunch } as MsgRevertLaunch;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = String(object.coordinator);
    } else {
      message.coordinator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    return message;
  },

  toJSON(message: MsgRevertLaunch): unknown {
    const obj: any = {};
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRevertLaunch>): MsgRevertLaunch {
    const message = { ...baseMsgRevertLaunch } as MsgRevertLaunch;
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = object.coordinator;
    } else {
      message.coordinator = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    return message;
  },
};

const baseMsgRevertLaunchResponse: object = {};

export const MsgRevertLaunchResponse = {
  encode(_: MsgRevertLaunchResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevertLaunchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRevertLaunchResponse,
    } as MsgRevertLaunchResponse;
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

  fromJSON(_: any): MsgRevertLaunchResponse {
    const message = {
      ...baseMsgRevertLaunchResponse,
    } as MsgRevertLaunchResponse;
    return message;
  },

  toJSON(_: MsgRevertLaunchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRevertLaunchResponse>
  ): MsgRevertLaunchResponse {
    const message = {
      ...baseMsgRevertLaunchResponse,
    } as MsgRevertLaunchResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateChain(request: MsgCreateChain): Promise<MsgCreateChainResponse>;
  EditChain(request: MsgEditChain): Promise<MsgEditChainResponse>;
  RequestAddAccount(
    request: MsgRequestAddAccount
  ): Promise<MsgRequestAddAccountResponse>;
  RequestAddVestingAccount(
    request: MsgRequestAddVestingAccount
  ): Promise<MsgRequestAddVestingAccountResponse>;
  RequestRemoveAccount(
    request: MsgRequestRemoveAccount
  ): Promise<MsgRequestRemoveAccountResponse>;
  RequestAddValidator(
    request: MsgRequestAddValidator
  ): Promise<MsgRequestAddValidatorResponse>;
  RequestRemoveValidator(
    request: MsgRequestRemoveValidator
  ): Promise<MsgRequestRemoveValidatorResponse>;
  SettleRequest(request: MsgSettleRequest): Promise<MsgSettleRequestResponse>;
  TriggerLaunch(request: MsgTriggerLaunch): Promise<MsgTriggerLaunchResponse>;
  RevertLaunch(request: MsgRevertLaunch): Promise<MsgRevertLaunchResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateChain(request: MsgCreateChain): Promise<MsgCreateChainResponse> {
    const data = MsgCreateChain.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "CreateChain",
      data
    );
    return promise.then((data) =>
      MsgCreateChainResponse.decode(new Reader(data))
    );
  }

  EditChain(request: MsgEditChain): Promise<MsgEditChainResponse> {
    const data = MsgEditChain.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "EditChain",
      data
    );
    return promise.then((data) =>
      MsgEditChainResponse.decode(new Reader(data))
    );
  }

  RequestAddAccount(
    request: MsgRequestAddAccount
  ): Promise<MsgRequestAddAccountResponse> {
    const data = MsgRequestAddAccount.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "RequestAddAccount",
      data
    );
    return promise.then((data) =>
      MsgRequestAddAccountResponse.decode(new Reader(data))
    );
  }

  RequestAddVestingAccount(
    request: MsgRequestAddVestingAccount
  ): Promise<MsgRequestAddVestingAccountResponse> {
    const data = MsgRequestAddVestingAccount.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "RequestAddVestingAccount",
      data
    );
    return promise.then((data) =>
      MsgRequestAddVestingAccountResponse.decode(new Reader(data))
    );
  }

  RequestRemoveAccount(
    request: MsgRequestRemoveAccount
  ): Promise<MsgRequestRemoveAccountResponse> {
    const data = MsgRequestRemoveAccount.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "RequestRemoveAccount",
      data
    );
    return promise.then((data) =>
      MsgRequestRemoveAccountResponse.decode(new Reader(data))
    );
  }

  RequestAddValidator(
    request: MsgRequestAddValidator
  ): Promise<MsgRequestAddValidatorResponse> {
    const data = MsgRequestAddValidator.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "RequestAddValidator",
      data
    );
    return promise.then((data) =>
      MsgRequestAddValidatorResponse.decode(new Reader(data))
    );
  }

  RequestRemoveValidator(
    request: MsgRequestRemoveValidator
  ): Promise<MsgRequestRemoveValidatorResponse> {
    const data = MsgRequestRemoveValidator.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "RequestRemoveValidator",
      data
    );
    return promise.then((data) =>
      MsgRequestRemoveValidatorResponse.decode(new Reader(data))
    );
  }

  SettleRequest(request: MsgSettleRequest): Promise<MsgSettleRequestResponse> {
    const data = MsgSettleRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "SettleRequest",
      data
    );
    return promise.then((data) =>
      MsgSettleRequestResponse.decode(new Reader(data))
    );
  }

  TriggerLaunch(request: MsgTriggerLaunch): Promise<MsgTriggerLaunchResponse> {
    const data = MsgTriggerLaunch.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "TriggerLaunch",
      data
    );
    return promise.then((data) =>
      MsgTriggerLaunchResponse.decode(new Reader(data))
    );
  }

  RevertLaunch(request: MsgRevertLaunch): Promise<MsgRevertLaunchResponse> {
    const data = MsgRevertLaunch.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.launch.Msg",
      "RevertLaunch",
      data
    );
    return promise.then((data) =>
      MsgRevertLaunchResponse.decode(new Reader(data))
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
