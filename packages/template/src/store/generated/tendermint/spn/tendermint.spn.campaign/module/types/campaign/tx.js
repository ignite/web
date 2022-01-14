/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { ShareVestingOptions } from "../campaign/mainnet_vesting_account";
export const protobufPackage = "tendermint.spn.campaign";
const baseMsgCreateCampaign = { coordinator: "", campaignName: "" };
export const MsgCreateCampaign = {
    encode(message, writer = Writer.create()) {
        if (message.coordinator !== "") {
            writer.uint32(10).string(message.coordinator);
        }
        if (message.campaignName !== "") {
            writer.uint32(18).string(message.campaignName);
        }
        for (const v of message.totalSupply) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCampaign };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateCampaign };
        message.totalSupply = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignName !== undefined && object.campaignName !== null) {
            message.campaignName = String(object.campaignName);
        }
        else {
            message.campaignName = "";
        }
        if (object.totalSupply !== undefined && object.totalSupply !== null) {
            for (const e of object.totalSupply) {
                message.totalSupply.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.campaignName !== undefined &&
            (obj.campaignName = message.campaignName);
        if (message.totalSupply) {
            obj.totalSupply = message.totalSupply.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalSupply = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCampaign };
        message.totalSupply = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignName !== undefined && object.campaignName !== null) {
            message.campaignName = object.campaignName;
        }
        else {
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
const baseMsgCreateCampaignResponse = { campaignID: 0 };
export const MsgCreateCampaignResponse = {
    encode(message, writer = Writer.create()) {
        if (message.campaignID !== 0) {
            writer.uint32(8).uint64(message.campaignID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateCampaignResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignID = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateCampaignResponse,
        };
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateCampaignResponse,
        };
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        return message;
    },
};
const baseMsgUpdateCampaignName = {
    coordinator: "",
    campaignID: 0,
    name: "",
};
export const MsgUpdateCampaignName = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCampaignName };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateCampaignName };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCampaignName };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        return message;
    },
};
const baseMsgUpdateCampaignNameResponse = {};
export const MsgUpdateCampaignNameResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateCampaignNameResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateCampaignNameResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateCampaignNameResponse,
        };
        return message;
    },
};
const baseMsgUpdateTotalSupply = { coordinator: "", campaignID: 0 };
export const MsgUpdateTotalSupply = {
    encode(message, writer = Writer.create()) {
        if (message.coordinator !== "") {
            writer.uint32(10).string(message.coordinator);
        }
        if (message.campaignID !== 0) {
            writer.uint32(16).uint64(message.campaignID);
        }
        for (const v of message.totalSupplyUpdate) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTotalSupply };
        message.totalSupplyUpdate = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateTotalSupply };
        message.totalSupplyUpdate = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.totalSupplyUpdate !== undefined &&
            object.totalSupplyUpdate !== null) {
            for (const e of object.totalSupplyUpdate) {
                message.totalSupplyUpdate.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        if (message.totalSupplyUpdate) {
            obj.totalSupplyUpdate = message.totalSupplyUpdate.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalSupplyUpdate = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTotalSupply };
        message.totalSupplyUpdate = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.totalSupplyUpdate !== undefined &&
            object.totalSupplyUpdate !== null) {
            for (const e of object.totalSupplyUpdate) {
                message.totalSupplyUpdate.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgUpdateTotalSupplyResponse = {};
export const MsgUpdateTotalSupplyResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateTotalSupplyResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateTotalSupplyResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateTotalSupplyResponse,
        };
        return message;
    },
};
const baseMsgUpdateTotalShares = { coordinator: "", campaignID: 0 };
export const MsgUpdateTotalShares = {
    encode(message, writer = Writer.create()) {
        if (message.coordinator !== "") {
            writer.uint32(10).string(message.coordinator);
        }
        if (message.campaignID !== 0) {
            writer.uint32(16).uint64(message.campaignID);
        }
        for (const v of message.totalShares) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTotalShares };
        message.totalShares = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateTotalShares };
        message.totalShares = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.totalShares !== undefined && object.totalShares !== null) {
            for (const e of object.totalShares) {
                message.totalShares.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        if (message.totalShares) {
            obj.totalShares = message.totalShares.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalShares = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTotalShares };
        message.totalShares = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
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
const baseMsgUpdateTotalSharesResponse = {};
export const MsgUpdateTotalSharesResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateTotalSharesResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateTotalSharesResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateTotalSharesResponse,
        };
        return message;
    },
};
const baseMsgInitializeMainnet = {
    coordinator: "",
    campaignID: 0,
    sourceURL: "",
    sourceHash: "",
    mainnetChainID: "",
};
export const MsgInitializeMainnet = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgInitializeMainnet };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgInitializeMainnet };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.sourceURL !== undefined && object.sourceURL !== null) {
            message.sourceURL = String(object.sourceURL);
        }
        else {
            message.sourceURL = "";
        }
        if (object.sourceHash !== undefined && object.sourceHash !== null) {
            message.sourceHash = String(object.sourceHash);
        }
        else {
            message.sourceHash = "";
        }
        if (object.mainnetChainID !== undefined && object.mainnetChainID !== null) {
            message.mainnetChainID = String(object.mainnetChainID);
        }
        else {
            message.mainnetChainID = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        message.sourceURL !== undefined && (obj.sourceURL = message.sourceURL);
        message.sourceHash !== undefined && (obj.sourceHash = message.sourceHash);
        message.mainnetChainID !== undefined &&
            (obj.mainnetChainID = message.mainnetChainID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgInitializeMainnet };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.sourceURL !== undefined && object.sourceURL !== null) {
            message.sourceURL = object.sourceURL;
        }
        else {
            message.sourceURL = "";
        }
        if (object.sourceHash !== undefined && object.sourceHash !== null) {
            message.sourceHash = object.sourceHash;
        }
        else {
            message.sourceHash = "";
        }
        if (object.mainnetChainID !== undefined && object.mainnetChainID !== null) {
            message.mainnetChainID = object.mainnetChainID;
        }
        else {
            message.mainnetChainID = "";
        }
        return message;
    },
};
const baseMsgInitializeMainnetResponse = { mainnetID: 0 };
export const MsgInitializeMainnetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.mainnetID !== 0) {
            writer.uint32(8).uint64(message.mainnetID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitializeMainnetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mainnetID = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgInitializeMainnetResponse,
        };
        if (object.mainnetID !== undefined && object.mainnetID !== null) {
            message.mainnetID = Number(object.mainnetID);
        }
        else {
            message.mainnetID = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mainnetID !== undefined && (obj.mainnetID = message.mainnetID);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitializeMainnetResponse,
        };
        if (object.mainnetID !== undefined && object.mainnetID !== null) {
            message.mainnetID = object.mainnetID;
        }
        else {
            message.mainnetID = 0;
        }
        return message;
    },
};
const baseMsgAddShares = {
    coordinator: "",
    campaignID: 0,
    address: "",
};
export const MsgAddShares = {
    encode(message, writer = Writer.create()) {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddShares };
        message.shares = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgAddShares };
        message.shares = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.shares !== undefined && object.shares !== null) {
            for (const e of object.shares) {
                message.shares.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        message.address !== undefined && (obj.address = message.address);
        if (message.shares) {
            obj.shares = message.shares.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.shares = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddShares };
        message.shares = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
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
const baseMsgAddSharesResponse = {};
export const MsgAddSharesResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddSharesResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgAddSharesResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAddSharesResponse };
        return message;
    },
};
const baseMsgAddVestingOptions = {
    coordinator: "",
    campaignID: 0,
    address: "",
};
export const MsgAddVestingOptions = {
    encode(message, writer = Writer.create()) {
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
            ShareVestingOptions.encode(message.vestingOptions, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddVestingOptions };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.vestingOptions = ShareVestingOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgAddVestingOptions };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
            message.vestingOptions = ShareVestingOptions.fromJSON(object.vestingOptions);
        }
        else {
            message.vestingOptions = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseMsgAddVestingOptions };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
            message.vestingOptions = ShareVestingOptions.fromPartial(object.vestingOptions);
        }
        else {
            message.vestingOptions = undefined;
        }
        return message;
    },
};
const baseMsgAddVestingOptionsResponse = {};
export const MsgAddVestingOptionsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgAddVestingOptionsResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgAddVestingOptionsResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgAddVestingOptionsResponse,
        };
        return message;
    },
};
const baseMsgMintVouchers = { coordinator: "", campaignID: 0 };
export const MsgMintVouchers = {
    encode(message, writer = Writer.create()) {
        if (message.coordinator !== "") {
            writer.uint32(10).string(message.coordinator);
        }
        if (message.campaignID !== 0) {
            writer.uint32(16).uint64(message.campaignID);
        }
        for (const v of message.shares) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintVouchers };
        message.shares = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgMintVouchers };
        message.shares = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.shares !== undefined && object.shares !== null) {
            for (const e of object.shares) {
                message.shares.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        if (message.shares) {
            obj.shares = message.shares.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.shares = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMintVouchers };
        message.shares = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
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
const baseMsgMintVouchersResponse = {};
export const MsgMintVouchersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgMintVouchersResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgMintVouchersResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgMintVouchersResponse,
        };
        return message;
    },
};
const baseMsgBurnVouchers = { sender: "", campaignID: 0 };
export const MsgBurnVouchers = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.campaignID !== 0) {
            writer.uint32(16).uint64(message.campaignID);
        }
        for (const v of message.vouchers) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBurnVouchers };
        message.vouchers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgBurnVouchers };
        message.vouchers = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.vouchers !== undefined && object.vouchers !== null) {
            for (const e of object.vouchers) {
                message.vouchers.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        if (message.vouchers) {
            obj.vouchers = message.vouchers.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.vouchers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBurnVouchers };
        message.vouchers = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
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
const baseMsgBurnVouchersResponse = {};
export const MsgBurnVouchersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgBurnVouchersResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgBurnVouchersResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgBurnVouchersResponse,
        };
        return message;
    },
};
const baseMsgRedeemVouchers = {
    sender: "",
    campaignID: 0,
    account: "",
};
export const MsgRedeemVouchers = {
    encode(message, writer = Writer.create()) {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRedeemVouchers };
        message.vouchers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgRedeemVouchers };
        message.vouchers = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = String(object.account);
        }
        else {
            message.account = "";
        }
        if (object.vouchers !== undefined && object.vouchers !== null) {
            for (const e of object.vouchers) {
                message.vouchers.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        message.account !== undefined && (obj.account = message.account);
        if (message.vouchers) {
            obj.vouchers = message.vouchers.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.vouchers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRedeemVouchers };
        message.vouchers = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        else {
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
const baseMsgRedeemVouchersResponse = {};
export const MsgRedeemVouchersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRedeemVouchersResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgRedeemVouchersResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRedeemVouchersResponse,
        };
        return message;
    },
};
const baseMsgUnredeemVouchers = { sender: "", campaignID: 0 };
export const MsgUnredeemVouchers = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.campaignID !== 0) {
            writer.uint32(16).uint64(message.campaignID);
        }
        for (const v of message.shares) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUnredeemVouchers };
        message.shares = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUnredeemVouchers };
        message.shares = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.shares !== undefined && object.shares !== null) {
            for (const e of object.shares) {
                message.shares.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        if (message.shares) {
            obj.shares = message.shares.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.shares = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUnredeemVouchers };
        message.shares = [];
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
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
const baseMsgUnredeemVouchersResponse = {};
export const MsgUnredeemVouchersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUnredeemVouchersResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgUnredeemVouchersResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUnredeemVouchersResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateCampaign(request) {
        const data = MsgCreateCampaign.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "CreateCampaign", data);
        return promise.then((data) => MsgCreateCampaignResponse.decode(new Reader(data)));
    }
    UpdateCampaignName(request) {
        const data = MsgUpdateCampaignName.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "UpdateCampaignName", data);
        return promise.then((data) => MsgUpdateCampaignNameResponse.decode(new Reader(data)));
    }
    UpdateTotalSupply(request) {
        const data = MsgUpdateTotalSupply.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "UpdateTotalSupply", data);
        return promise.then((data) => MsgUpdateTotalSupplyResponse.decode(new Reader(data)));
    }
    UpdateTotalShares(request) {
        const data = MsgUpdateTotalShares.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "UpdateTotalShares", data);
        return promise.then((data) => MsgUpdateTotalSharesResponse.decode(new Reader(data)));
    }
    InitializeMainnet(request) {
        const data = MsgInitializeMainnet.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "InitializeMainnet", data);
        return promise.then((data) => MsgInitializeMainnetResponse.decode(new Reader(data)));
    }
    AddShares(request) {
        const data = MsgAddShares.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "AddShares", data);
        return promise.then((data) => MsgAddSharesResponse.decode(new Reader(data)));
    }
    AddVestingOptions(request) {
        const data = MsgAddVestingOptions.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "AddVestingOptions", data);
        return promise.then((data) => MsgAddVestingOptionsResponse.decode(new Reader(data)));
    }
    MintVouchers(request) {
        const data = MsgMintVouchers.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "MintVouchers", data);
        return promise.then((data) => MsgMintVouchersResponse.decode(new Reader(data)));
    }
    BurnVouchers(request) {
        const data = MsgBurnVouchers.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "BurnVouchers", data);
        return promise.then((data) => MsgBurnVouchersResponse.decode(new Reader(data)));
    }
    RedeemVouchers(request) {
        const data = MsgRedeemVouchers.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "RedeemVouchers", data);
        return promise.then((data) => MsgRedeemVouchersResponse.decode(new Reader(data)));
    }
    UnredeemVouchers(request) {
        const data = MsgUnredeemVouchers.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Msg", "UnredeemVouchers", data);
        return promise.then((data) => MsgUnredeemVouchersResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
