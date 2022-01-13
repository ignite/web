/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Campaign } from "../campaign/campaign";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { CampaignChains } from "../campaign/campaign_chains";
import { MainnetAccount } from "../campaign/mainnet_account";
import { MainnetVestingAccount } from "../campaign/mainnet_vesting_account";
export const protobufPackage = "tendermint.spn.campaign";
const baseQueryGetCampaignRequest = { campaignID: 0 };
export const QueryGetCampaignRequest = {
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
            ...baseQueryGetCampaignRequest,
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
            ...baseQueryGetCampaignRequest,
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
            ...baseQueryGetCampaignRequest,
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
const baseQueryGetCampaignResponse = {};
export const QueryGetCampaignResponse = {
    encode(message, writer = Writer.create()) {
        if (message.campaign !== undefined) {
            Campaign.encode(message.campaign, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCampaignResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetCampaignResponse,
        };
        if (object.campaign !== undefined && object.campaign !== null) {
            message.campaign = Campaign.fromJSON(object.campaign);
        }
        else {
            message.campaign = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.campaign !== undefined &&
            (obj.campaign = message.campaign
                ? Campaign.toJSON(message.campaign)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetCampaignResponse,
        };
        if (object.campaign !== undefined && object.campaign !== null) {
            message.campaign = Campaign.fromPartial(object.campaign);
        }
        else {
            message.campaign = undefined;
        }
        return message;
    },
};
const baseQueryAllCampaignRequest = {};
export const QueryAllCampaignRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllCampaignRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllCampaignRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllCampaignRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllCampaignResponse = {};
export const QueryAllCampaignResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.campaign) {
            Campaign.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllCampaignResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllCampaignResponse,
        };
        message.campaign = [];
        if (object.campaign !== undefined && object.campaign !== null) {
            for (const e of object.campaign) {
                message.campaign.push(Campaign.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.campaign) {
            obj.campaign = message.campaign.map((e) => e ? Campaign.toJSON(e) : undefined);
        }
        else {
            obj.campaign = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllCampaignResponse,
        };
        message.campaign = [];
        if (object.campaign !== undefined && object.campaign !== null) {
            for (const e of object.campaign) {
                message.campaign.push(Campaign.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetCampaignChainsRequest = { campaignID: 0 };
export const QueryGetCampaignChainsRequest = {
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
            ...baseQueryGetCampaignChainsRequest,
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
            ...baseQueryGetCampaignChainsRequest,
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
            ...baseQueryGetCampaignChainsRequest,
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
const baseQueryGetCampaignChainsResponse = {};
export const QueryGetCampaignChainsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.campaignChains !== undefined) {
            CampaignChains.encode(message.campaignChains, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCampaignChainsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignChains = CampaignChains.decode(reader, reader.uint32());
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
            ...baseQueryGetCampaignChainsResponse,
        };
        if (object.campaignChains !== undefined && object.campaignChains !== null) {
            message.campaignChains = CampaignChains.fromJSON(object.campaignChains);
        }
        else {
            message.campaignChains = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.campaignChains !== undefined &&
            (obj.campaignChains = message.campaignChains
                ? CampaignChains.toJSON(message.campaignChains)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetCampaignChainsResponse,
        };
        if (object.campaignChains !== undefined && object.campaignChains !== null) {
            message.campaignChains = CampaignChains.fromPartial(object.campaignChains);
        }
        else {
            message.campaignChains = undefined;
        }
        return message;
    },
};
const baseQueryGetMainnetAccountRequest = {
    campaignID: 0,
    address: "",
};
export const QueryGetMainnetAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.campaignID !== 0) {
            writer.uint32(8).uint64(message.campaignID);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMainnetAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetMainnetAccountRequest,
        };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMainnetAccountRequest,
        };
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
        return message;
    },
};
const baseQueryGetMainnetAccountResponse = {};
export const QueryGetMainnetAccountResponse = {
    encode(message, writer = Writer.create()) {
        if (message.mainnetAccount !== undefined) {
            MainnetAccount.encode(message.mainnetAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMainnetAccountResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mainnetAccount = MainnetAccount.decode(reader, reader.uint32());
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
            ...baseQueryGetMainnetAccountResponse,
        };
        if (object.mainnetAccount !== undefined && object.mainnetAccount !== null) {
            message.mainnetAccount = MainnetAccount.fromJSON(object.mainnetAccount);
        }
        else {
            message.mainnetAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mainnetAccount !== undefined &&
            (obj.mainnetAccount = message.mainnetAccount
                ? MainnetAccount.toJSON(message.mainnetAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMainnetAccountResponse,
        };
        if (object.mainnetAccount !== undefined && object.mainnetAccount !== null) {
            message.mainnetAccount = MainnetAccount.fromPartial(object.mainnetAccount);
        }
        else {
            message.mainnetAccount = undefined;
        }
        return message;
    },
};
const baseQueryAllMainnetAccountRequest = { campaignID: 0 };
export const QueryAllMainnetAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.campaignID !== 0) {
            writer.uint32(8).uint64(message.campaignID);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMainnetAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllMainnetAccountRequest,
        };
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMainnetAccountRequest,
        };
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllMainnetAccountResponse = {};
export const QueryAllMainnetAccountResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.mainnetAccount) {
            MainnetAccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMainnetAccountResponse,
        };
        message.mainnetAccount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mainnetAccount.push(MainnetAccount.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllMainnetAccountResponse,
        };
        message.mainnetAccount = [];
        if (object.mainnetAccount !== undefined && object.mainnetAccount !== null) {
            for (const e of object.mainnetAccount) {
                message.mainnetAccount.push(MainnetAccount.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.mainnetAccount) {
            obj.mainnetAccount = message.mainnetAccount.map((e) => e ? MainnetAccount.toJSON(e) : undefined);
        }
        else {
            obj.mainnetAccount = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMainnetAccountResponse,
        };
        message.mainnetAccount = [];
        if (object.mainnetAccount !== undefined && object.mainnetAccount !== null) {
            for (const e of object.mainnetAccount) {
                message.mainnetAccount.push(MainnetAccount.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetMainnetVestingAccountRequest = {
    campaignID: 0,
    address: "",
};
export const QueryGetMainnetVestingAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.campaignID !== 0) {
            writer.uint32(8).uint64(message.campaignID);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMainnetVestingAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetMainnetVestingAccountRequest,
        };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMainnetVestingAccountRequest,
        };
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
        return message;
    },
};
const baseQueryGetMainnetVestingAccountResponse = {};
export const QueryGetMainnetVestingAccountResponse = {
    encode(message, writer = Writer.create()) {
        if (message.mainnetVestingAccount !== undefined) {
            MainnetVestingAccount.encode(message.mainnetVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMainnetVestingAccountResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mainnetVestingAccount = MainnetVestingAccount.decode(reader, reader.uint32());
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
            ...baseQueryGetMainnetVestingAccountResponse,
        };
        if (object.mainnetVestingAccount !== undefined &&
            object.mainnetVestingAccount !== null) {
            message.mainnetVestingAccount = MainnetVestingAccount.fromJSON(object.mainnetVestingAccount);
        }
        else {
            message.mainnetVestingAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mainnetVestingAccount !== undefined &&
            (obj.mainnetVestingAccount = message.mainnetVestingAccount
                ? MainnetVestingAccount.toJSON(message.mainnetVestingAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMainnetVestingAccountResponse,
        };
        if (object.mainnetVestingAccount !== undefined &&
            object.mainnetVestingAccount !== null) {
            message.mainnetVestingAccount = MainnetVestingAccount.fromPartial(object.mainnetVestingAccount);
        }
        else {
            message.mainnetVestingAccount = undefined;
        }
        return message;
    },
};
const baseQueryAllMainnetVestingAccountRequest = { campaignID: 0 };
export const QueryAllMainnetVestingAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.campaignID !== 0) {
            writer.uint32(8).uint64(message.campaignID);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMainnetVestingAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllMainnetVestingAccountRequest,
        };
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMainnetVestingAccountRequest,
        };
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllMainnetVestingAccountResponse = {};
export const QueryAllMainnetVestingAccountResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.mainnetVestingAccount) {
            MainnetVestingAccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMainnetVestingAccountResponse,
        };
        message.mainnetVestingAccount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mainnetVestingAccount.push(MainnetVestingAccount.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllMainnetVestingAccountResponse,
        };
        message.mainnetVestingAccount = [];
        if (object.mainnetVestingAccount !== undefined &&
            object.mainnetVestingAccount !== null) {
            for (const e of object.mainnetVestingAccount) {
                message.mainnetVestingAccount.push(MainnetVestingAccount.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.mainnetVestingAccount) {
            obj.mainnetVestingAccount = message.mainnetVestingAccount.map((e) => e ? MainnetVestingAccount.toJSON(e) : undefined);
        }
        else {
            obj.mainnetVestingAccount = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMainnetVestingAccountResponse,
        };
        message.mainnetVestingAccount = [];
        if (object.mainnetVestingAccount !== undefined &&
            object.mainnetVestingAccount !== null) {
            for (const e of object.mainnetVestingAccount) {
                message.mainnetVestingAccount.push(MainnetVestingAccount.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Campaign(request) {
        const data = QueryGetCampaignRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Query", "Campaign", data);
        return promise.then((data) => QueryGetCampaignResponse.decode(new Reader(data)));
    }
    CampaignAll(request) {
        const data = QueryAllCampaignRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Query", "CampaignAll", data);
        return promise.then((data) => QueryAllCampaignResponse.decode(new Reader(data)));
    }
    CampaignChains(request) {
        const data = QueryGetCampaignChainsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Query", "CampaignChains", data);
        return promise.then((data) => QueryGetCampaignChainsResponse.decode(new Reader(data)));
    }
    MainnetAccount(request) {
        const data = QueryGetMainnetAccountRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Query", "MainnetAccount", data);
        return promise.then((data) => QueryGetMainnetAccountResponse.decode(new Reader(data)));
    }
    MainnetAccountAll(request) {
        const data = QueryAllMainnetAccountRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Query", "MainnetAccountAll", data);
        return promise.then((data) => QueryAllMainnetAccountResponse.decode(new Reader(data)));
    }
    MainnetVestingAccount(request) {
        const data = QueryGetMainnetVestingAccountRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Query", "MainnetVestingAccount", data);
        return promise.then((data) => QueryGetMainnetVestingAccountResponse.decode(new Reader(data)));
    }
    MainnetVestingAccountAll(request) {
        const data = QueryAllMainnetVestingAccountRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.campaign.Query", "MainnetVestingAccountAll", data);
        return promise.then((data) => QueryAllMainnetVestingAccountResponse.decode(new Reader(data)));
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
