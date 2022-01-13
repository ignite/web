/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { InitialGenesis } from "../launch/chain";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { VestingOptions } from "../launch/vesting_account";
export const protobufPackage = "tendermint.spn.launch";
const baseMsgCreateChain = {
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
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateChain };
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
        const message = { ...baseMsgCreateChain };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
            message.genesisChainID = String(object.genesisChainID);
        }
        else {
            message.genesisChainID = "";
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
        if (object.genesisURL !== undefined && object.genesisURL !== null) {
            message.genesisURL = String(object.genesisURL);
        }
        else {
            message.genesisURL = "";
        }
        if (object.genesisHash !== undefined && object.genesisHash !== null) {
            message.genesisHash = String(object.genesisHash);
        }
        else {
            message.genesisHash = "";
        }
        if (object.hasCampaign !== undefined && object.hasCampaign !== null) {
            message.hasCampaign = Boolean(object.hasCampaign);
        }
        else {
            message.hasCampaign = false;
        }
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
    fromPartial(object) {
        const message = { ...baseMsgCreateChain };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
            message.genesisChainID = object.genesisChainID;
        }
        else {
            message.genesisChainID = "";
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
        if (object.genesisURL !== undefined && object.genesisURL !== null) {
            message.genesisURL = object.genesisURL;
        }
        else {
            message.genesisURL = "";
        }
        if (object.genesisHash !== undefined && object.genesisHash !== null) {
            message.genesisHash = object.genesisHash;
        }
        else {
            message.genesisHash = "";
        }
        if (object.hasCampaign !== undefined && object.hasCampaign !== null) {
            message.hasCampaign = object.hasCampaign;
        }
        else {
            message.hasCampaign = false;
        }
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        return message;
    },
};
const baseMsgCreateChainResponse = { launchID: 0 };
export const MsgCreateChainResponse = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateChainResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateChainResponse };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.launchID !== undefined && (obj.launchID = message.launchID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateChainResponse };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        return message;
    },
};
const baseMsgEditChain = {
    coordinator: "",
    launchID: 0,
    genesisChainID: "",
    sourceURL: "",
    sourceHash: "",
};
export const MsgEditChain = {
    encode(message, writer = Writer.create()) {
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
            InitialGenesis.encode(message.initialGenesis, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgEditChain };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.launchID = longToNumber(reader.uint64());
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
                    message.initialGenesis = InitialGenesis.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgEditChain };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
            message.genesisChainID = String(object.genesisChainID);
        }
        else {
            message.genesisChainID = "";
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
        if (object.initialGenesis !== undefined && object.initialGenesis !== null) {
            message.initialGenesis = InitialGenesis.fromJSON(object.initialGenesis);
        }
        else {
            message.initialGenesis = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseMsgEditChain };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        if (object.genesisChainID !== undefined && object.genesisChainID !== null) {
            message.genesisChainID = object.genesisChainID;
        }
        else {
            message.genesisChainID = "";
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
        if (object.initialGenesis !== undefined && object.initialGenesis !== null) {
            message.initialGenesis = InitialGenesis.fromPartial(object.initialGenesis);
        }
        else {
            message.initialGenesis = undefined;
        }
        return message;
    },
};
const baseMsgEditChainResponse = {};
export const MsgEditChainResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgEditChainResponse };
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
        const message = { ...baseMsgEditChainResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgEditChainResponse };
        return message;
    },
};
const baseMsgRequestAddAccount = {
    creator: "",
    launchID: 0,
    address: "",
};
export const MsgRequestAddAccount = {
    encode(message, writer = Writer.create()) {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRequestAddAccount };
        message.coins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.launchID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgRequestAddAccount };
        message.coins = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRequestAddAccount };
        message.coins = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
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
const baseMsgRequestAddAccountResponse = {
    requestID: 0,
    autoApproved: false,
};
export const MsgRequestAddAccountResponse = {
    encode(message, writer = Writer.create()) {
        if (message.requestID !== 0) {
            writer.uint32(8).uint64(message.requestID);
        }
        if (message.autoApproved === true) {
            writer.uint32(16).bool(message.autoApproved);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestAddAccountResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseMsgRequestAddAccountResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = Number(object.requestID);
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = Boolean(object.autoApproved);
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestID !== undefined && (obj.requestID = message.requestID);
        message.autoApproved !== undefined &&
            (obj.autoApproved = message.autoApproved);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRequestAddAccountResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = object.requestID;
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = object.autoApproved;
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
};
const baseMsgRequestAddVestingAccount = {
    creator: "",
    launchID: 0,
    address: "",
};
export const MsgRequestAddVestingAccount = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestAddVestingAccount,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.launchID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseMsgRequestAddVestingAccount,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = VestingOptions.fromJSON(object.options);
        }
        else {
            message.options = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.address !== undefined && (obj.address = message.address);
        message.options !== undefined &&
            (obj.options = message.options
                ? VestingOptions.toJSON(message.options)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRequestAddVestingAccount,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = VestingOptions.fromPartial(object.options);
        }
        else {
            message.options = undefined;
        }
        return message;
    },
};
const baseMsgRequestAddVestingAccountResponse = {
    requestID: 0,
    autoApproved: false,
};
export const MsgRequestAddVestingAccountResponse = {
    encode(message, writer = Writer.create()) {
        if (message.requestID !== 0) {
            writer.uint32(8).uint64(message.requestID);
        }
        if (message.autoApproved === true) {
            writer.uint32(16).bool(message.autoApproved);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestAddVestingAccountResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseMsgRequestAddVestingAccountResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = Number(object.requestID);
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = Boolean(object.autoApproved);
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestID !== undefined && (obj.requestID = message.requestID);
        message.autoApproved !== undefined &&
            (obj.autoApproved = message.autoApproved);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRequestAddVestingAccountResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = object.requestID;
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = object.autoApproved;
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
};
const baseMsgRequestRemoveAccount = {
    creator: "",
    launchID: 0,
    address: "",
};
export const MsgRequestRemoveAccount = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestRemoveAccount,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.launchID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseMsgRequestRemoveAccount,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRequestRemoveAccount,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
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
const baseMsgRequestRemoveAccountResponse = {
    requestID: 0,
    autoApproved: false,
};
export const MsgRequestRemoveAccountResponse = {
    encode(message, writer = Writer.create()) {
        if (message.requestID !== 0) {
            writer.uint32(8).uint64(message.requestID);
        }
        if (message.autoApproved === true) {
            writer.uint32(16).bool(message.autoApproved);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestRemoveAccountResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseMsgRequestRemoveAccountResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = Number(object.requestID);
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = Boolean(object.autoApproved);
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestID !== undefined && (obj.requestID = message.requestID);
        message.autoApproved !== undefined &&
            (obj.autoApproved = message.autoApproved);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRequestRemoveAccountResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = object.requestID;
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = object.autoApproved;
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
};
const baseMsgRequestAddValidator = {
    creator: "",
    launchID: 0,
    valAddress: "",
    peer: "",
};
export const MsgRequestAddValidator = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRequestAddValidator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.launchID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgRequestAddValidator };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        if (object.valAddress !== undefined && object.valAddress !== null) {
            message.valAddress = String(object.valAddress);
        }
        else {
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
        }
        else {
            message.selfDelegation = undefined;
        }
        if (object.peer !== undefined && object.peer !== null) {
            message.peer = String(object.peer);
        }
        else {
            message.peer = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.valAddress !== undefined && (obj.valAddress = message.valAddress);
        message.genTx !== undefined &&
            (obj.genTx = base64FromBytes(message.genTx !== undefined ? message.genTx : new Uint8Array()));
        message.consPubKey !== undefined &&
            (obj.consPubKey = base64FromBytes(message.consPubKey !== undefined ? message.consPubKey : new Uint8Array()));
        message.selfDelegation !== undefined &&
            (obj.selfDelegation = message.selfDelegation
                ? Coin.toJSON(message.selfDelegation)
                : undefined);
        message.peer !== undefined && (obj.peer = message.peer);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRequestAddValidator };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        if (object.valAddress !== undefined && object.valAddress !== null) {
            message.valAddress = object.valAddress;
        }
        else {
            message.valAddress = "";
        }
        if (object.genTx !== undefined && object.genTx !== null) {
            message.genTx = object.genTx;
        }
        else {
            message.genTx = new Uint8Array();
        }
        if (object.consPubKey !== undefined && object.consPubKey !== null) {
            message.consPubKey = object.consPubKey;
        }
        else {
            message.consPubKey = new Uint8Array();
        }
        if (object.selfDelegation !== undefined && object.selfDelegation !== null) {
            message.selfDelegation = Coin.fromPartial(object.selfDelegation);
        }
        else {
            message.selfDelegation = undefined;
        }
        if (object.peer !== undefined && object.peer !== null) {
            message.peer = object.peer;
        }
        else {
            message.peer = "";
        }
        return message;
    },
};
const baseMsgRequestAddValidatorResponse = {
    requestID: 0,
    autoApproved: false,
};
export const MsgRequestAddValidatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.requestID !== 0) {
            writer.uint32(8).uint64(message.requestID);
        }
        if (message.autoApproved === true) {
            writer.uint32(16).bool(message.autoApproved);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestAddValidatorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseMsgRequestAddValidatorResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = Number(object.requestID);
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = Boolean(object.autoApproved);
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestID !== undefined && (obj.requestID = message.requestID);
        message.autoApproved !== undefined &&
            (obj.autoApproved = message.autoApproved);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRequestAddValidatorResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = object.requestID;
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = object.autoApproved;
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
};
const baseMsgRequestRemoveValidator = {
    creator: "",
    launchID: 0,
    validatorAddress: "",
};
export const MsgRequestRemoveValidator = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestRemoveValidator,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.launchID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseMsgRequestRemoveValidator,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRequestRemoveValidator,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
};
const baseMsgRequestRemoveValidatorResponse = {
    requestID: 0,
    autoApproved: false,
};
export const MsgRequestRemoveValidatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.requestID !== 0) {
            writer.uint32(8).uint64(message.requestID);
        }
        if (message.autoApproved === true) {
            writer.uint32(16).bool(message.autoApproved);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestRemoveValidatorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseMsgRequestRemoveValidatorResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = Number(object.requestID);
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = Boolean(object.autoApproved);
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestID !== undefined && (obj.requestID = message.requestID);
        message.autoApproved !== undefined &&
            (obj.autoApproved = message.autoApproved);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRequestRemoveValidatorResponse,
        };
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = object.requestID;
        }
        else {
            message.requestID = 0;
        }
        if (object.autoApproved !== undefined && object.autoApproved !== null) {
            message.autoApproved = object.autoApproved;
        }
        else {
            message.autoApproved = false;
        }
        return message;
    },
};
const baseMsgSettleRequest = {
    coordinator: "",
    launchID: 0,
    requestID: 0,
    approve: false,
};
export const MsgSettleRequest = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSettleRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.launchID = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.requestID = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgSettleRequest };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = Number(object.requestID);
        }
        else {
            message.requestID = 0;
        }
        if (object.approve !== undefined && object.approve !== null) {
            message.approve = Boolean(object.approve);
        }
        else {
            message.approve = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.requestID !== undefined && (obj.requestID = message.requestID);
        message.approve !== undefined && (obj.approve = message.approve);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSettleRequest };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        if (object.requestID !== undefined && object.requestID !== null) {
            message.requestID = object.requestID;
        }
        else {
            message.requestID = 0;
        }
        if (object.approve !== undefined && object.approve !== null) {
            message.approve = object.approve;
        }
        else {
            message.approve = false;
        }
        return message;
    },
};
const baseMsgSettleRequestResponse = {};
export const MsgSettleRequestResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSettleRequestResponse,
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
            ...baseMsgSettleRequestResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSettleRequestResponse,
        };
        return message;
    },
};
const baseMsgTriggerLaunch = {
    coordinator: "",
    launchID: 0,
    remainingTime: 0,
};
export const MsgTriggerLaunch = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgTriggerLaunch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.launchID = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.remainingTime = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgTriggerLaunch };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        if (object.remainingTime !== undefined && object.remainingTime !== null) {
            message.remainingTime = Number(object.remainingTime);
        }
        else {
            message.remainingTime = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.remainingTime !== undefined &&
            (obj.remainingTime = message.remainingTime);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgTriggerLaunch };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        if (object.remainingTime !== undefined && object.remainingTime !== null) {
            message.remainingTime = object.remainingTime;
        }
        else {
            message.remainingTime = 0;
        }
        return message;
    },
};
const baseMsgTriggerLaunchResponse = {};
export const MsgTriggerLaunchResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgTriggerLaunchResponse,
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
            ...baseMsgTriggerLaunchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgTriggerLaunchResponse,
        };
        return message;
    },
};
const baseMsgRevertLaunch = { coordinator: "", launchID: 0 };
export const MsgRevertLaunch = {
    encode(message, writer = Writer.create()) {
        if (message.coordinator !== "") {
            writer.uint32(10).string(message.coordinator);
        }
        if (message.launchID !== 0) {
            writer.uint32(16).uint64(message.launchID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRevertLaunch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = reader.string();
                    break;
                case 2:
                    message.launchID = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRevertLaunch };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = String(object.coordinator);
        }
        else {
            message.coordinator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator);
        message.launchID !== undefined && (obj.launchID = message.launchID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRevertLaunch };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = object.coordinator;
        }
        else {
            message.coordinator = "";
        }
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        return message;
    },
};
const baseMsgRevertLaunchResponse = {};
export const MsgRevertLaunchResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRevertLaunchResponse,
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
            ...baseMsgRevertLaunchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRevertLaunchResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateChain(request) {
        const data = MsgCreateChain.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "CreateChain", data);
        return promise.then((data) => MsgCreateChainResponse.decode(new Reader(data)));
    }
    EditChain(request) {
        const data = MsgEditChain.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "EditChain", data);
        return promise.then((data) => MsgEditChainResponse.decode(new Reader(data)));
    }
    RequestAddAccount(request) {
        const data = MsgRequestAddAccount.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "RequestAddAccount", data);
        return promise.then((data) => MsgRequestAddAccountResponse.decode(new Reader(data)));
    }
    RequestAddVestingAccount(request) {
        const data = MsgRequestAddVestingAccount.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "RequestAddVestingAccount", data);
        return promise.then((data) => MsgRequestAddVestingAccountResponse.decode(new Reader(data)));
    }
    RequestRemoveAccount(request) {
        const data = MsgRequestRemoveAccount.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "RequestRemoveAccount", data);
        return promise.then((data) => MsgRequestRemoveAccountResponse.decode(new Reader(data)));
    }
    RequestAddValidator(request) {
        const data = MsgRequestAddValidator.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "RequestAddValidator", data);
        return promise.then((data) => MsgRequestAddValidatorResponse.decode(new Reader(data)));
    }
    RequestRemoveValidator(request) {
        const data = MsgRequestRemoveValidator.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "RequestRemoveValidator", data);
        return promise.then((data) => MsgRequestRemoveValidatorResponse.decode(new Reader(data)));
    }
    SettleRequest(request) {
        const data = MsgSettleRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "SettleRequest", data);
        return promise.then((data) => MsgSettleRequestResponse.decode(new Reader(data)));
    }
    TriggerLaunch(request) {
        const data = MsgTriggerLaunch.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "TriggerLaunch", data);
        return promise.then((data) => MsgTriggerLaunchResponse.decode(new Reader(data)));
    }
    RevertLaunch(request) {
        const data = MsgRevertLaunch.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Msg", "RevertLaunch", data);
        return promise.then((data) => MsgRevertLaunchResponse.decode(new Reader(data)));
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
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
