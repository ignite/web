/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Chain } from "../launch/chain";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { GenesisAccount } from "../launch/genesis_account";
import { VestingAccount } from "../launch/vesting_account";
import { GenesisValidator } from "../launch/genesis_validator";
import { Request } from "../launch/request";
import { Params } from "../launch/params";
export const protobufPackage = "tendermint.spn.launch";
const baseQueryGetChainRequest = { launchID: 0 };
export const QueryGetChainRequest = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetChainRequest };
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
        const message = { ...baseQueryGetChainRequest };
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
        const message = { ...baseQueryGetChainRequest };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        return message;
    },
};
const baseQueryGetChainResponse = {};
export const QueryGetChainResponse = {
    encode(message, writer = Writer.create()) {
        if (message.chain !== undefined) {
            Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetChainResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = Chain.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetChainResponse };
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = Chain.fromJSON(object.chain);
        }
        else {
            message.chain = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined &&
            (obj.chain = message.chain ? Chain.toJSON(message.chain) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetChainResponse };
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = Chain.fromPartial(object.chain);
        }
        else {
            message.chain = undefined;
        }
        return message;
    },
};
const baseQueryAllChainRequest = {};
export const QueryAllChainRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllChainRequest };
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
        const message = { ...baseQueryAllChainRequest };
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
        const message = { ...baseQueryAllChainRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllChainResponse = {};
export const QueryAllChainResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.chain) {
            Chain.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllChainResponse };
        message.chain = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain.push(Chain.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllChainResponse };
        message.chain = [];
        if (object.chain !== undefined && object.chain !== null) {
            for (const e of object.chain) {
                message.chain.push(Chain.fromJSON(e));
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
        if (message.chain) {
            obj.chain = message.chain.map((e) => (e ? Chain.toJSON(e) : undefined));
        }
        else {
            obj.chain = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllChainResponse };
        message.chain = [];
        if (object.chain !== undefined && object.chain !== null) {
            for (const e of object.chain) {
                message.chain.push(Chain.fromPartial(e));
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
const baseQueryGetGenesisAccountRequest = { launchID: 0, address: "" };
export const QueryGetGenesisAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
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
            ...baseQueryGetGenesisAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
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
            ...baseQueryGetGenesisAccountRequest,
        };
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
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetGenesisAccountRequest,
        };
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
const baseQueryGetGenesisAccountResponse = {};
export const QueryGetGenesisAccountResponse = {
    encode(message, writer = Writer.create()) {
        if (message.genesisAccount !== undefined) {
            GenesisAccount.encode(message.genesisAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetGenesisAccountResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.genesisAccount = GenesisAccount.decode(reader, reader.uint32());
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
            ...baseQueryGetGenesisAccountResponse,
        };
        if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
            message.genesisAccount = GenesisAccount.fromJSON(object.genesisAccount);
        }
        else {
            message.genesisAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.genesisAccount !== undefined &&
            (obj.genesisAccount = message.genesisAccount
                ? GenesisAccount.toJSON(message.genesisAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetGenesisAccountResponse,
        };
        if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
            message.genesisAccount = GenesisAccount.fromPartial(object.genesisAccount);
        }
        else {
            message.genesisAccount = undefined;
        }
        return message;
    },
};
const baseQueryAllGenesisAccountRequest = { launchID: 0 };
export const QueryAllGenesisAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
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
            ...baseQueryAllGenesisAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
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
            ...baseQueryAllGenesisAccountRequest,
        };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
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
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllGenesisAccountRequest,
        };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
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
const baseQueryAllGenesisAccountResponse = {};
export const QueryAllGenesisAccountResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.genesisAccount) {
            GenesisAccount.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllGenesisAccountResponse,
        };
        message.genesisAccount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.genesisAccount.push(GenesisAccount.decode(reader, reader.uint32()));
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
            ...baseQueryAllGenesisAccountResponse,
        };
        message.genesisAccount = [];
        if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
            for (const e of object.genesisAccount) {
                message.genesisAccount.push(GenesisAccount.fromJSON(e));
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
        if (message.genesisAccount) {
            obj.genesisAccount = message.genesisAccount.map((e) => e ? GenesisAccount.toJSON(e) : undefined);
        }
        else {
            obj.genesisAccount = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllGenesisAccountResponse,
        };
        message.genesisAccount = [];
        if (object.genesisAccount !== undefined && object.genesisAccount !== null) {
            for (const e of object.genesisAccount) {
                message.genesisAccount.push(GenesisAccount.fromPartial(e));
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
const baseQueryGetVestingAccountRequest = { launchID: 0, address: "" };
export const QueryGetVestingAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
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
            ...baseQueryGetVestingAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
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
            ...baseQueryGetVestingAccountRequest,
        };
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
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetVestingAccountRequest,
        };
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
const baseQueryGetVestingAccountResponse = {};
export const QueryGetVestingAccountResponse = {
    encode(message, writer = Writer.create()) {
        if (message.vestingAccount !== undefined) {
            VestingAccount.encode(message.vestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetVestingAccountResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vestingAccount = VestingAccount.decode(reader, reader.uint32());
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
            ...baseQueryGetVestingAccountResponse,
        };
        if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
            message.vestingAccount = VestingAccount.fromJSON(object.vestingAccount);
        }
        else {
            message.vestingAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.vestingAccount !== undefined &&
            (obj.vestingAccount = message.vestingAccount
                ? VestingAccount.toJSON(message.vestingAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetVestingAccountResponse,
        };
        if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
            message.vestingAccount = VestingAccount.fromPartial(object.vestingAccount);
        }
        else {
            message.vestingAccount = undefined;
        }
        return message;
    },
};
const baseQueryAllVestingAccountRequest = { launchID: 0 };
export const QueryAllVestingAccountRequest = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
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
            ...baseQueryAllVestingAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
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
            ...baseQueryAllVestingAccountRequest,
        };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
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
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllVestingAccountRequest,
        };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
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
const baseQueryAllVestingAccountResponse = {};
export const QueryAllVestingAccountResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.vestingAccount) {
            VestingAccount.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllVestingAccountResponse,
        };
        message.vestingAccount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vestingAccount.push(VestingAccount.decode(reader, reader.uint32()));
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
            ...baseQueryAllVestingAccountResponse,
        };
        message.vestingAccount = [];
        if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
            for (const e of object.vestingAccount) {
                message.vestingAccount.push(VestingAccount.fromJSON(e));
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
        if (message.vestingAccount) {
            obj.vestingAccount = message.vestingAccount.map((e) => e ? VestingAccount.toJSON(e) : undefined);
        }
        else {
            obj.vestingAccount = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllVestingAccountResponse,
        };
        message.vestingAccount = [];
        if (object.vestingAccount !== undefined && object.vestingAccount !== null) {
            for (const e of object.vestingAccount) {
                message.vestingAccount.push(VestingAccount.fromPartial(e));
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
const baseQueryGetGenesisValidatorRequest = {
    launchID: 0,
    address: "",
};
export const QueryGetGenesisValidatorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
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
            ...baseQueryGetGenesisValidatorRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
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
            ...baseQueryGetGenesisValidatorRequest,
        };
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
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetGenesisValidatorRequest,
        };
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
const baseQueryGetGenesisValidatorResponse = {};
export const QueryGetGenesisValidatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.genesisValidator !== undefined) {
            GenesisValidator.encode(message.genesisValidator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetGenesisValidatorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.genesisValidator = GenesisValidator.decode(reader, reader.uint32());
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
            ...baseQueryGetGenesisValidatorResponse,
        };
        if (object.genesisValidator !== undefined &&
            object.genesisValidator !== null) {
            message.genesisValidator = GenesisValidator.fromJSON(object.genesisValidator);
        }
        else {
            message.genesisValidator = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.genesisValidator !== undefined &&
            (obj.genesisValidator = message.genesisValidator
                ? GenesisValidator.toJSON(message.genesisValidator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetGenesisValidatorResponse,
        };
        if (object.genesisValidator !== undefined &&
            object.genesisValidator !== null) {
            message.genesisValidator = GenesisValidator.fromPartial(object.genesisValidator);
        }
        else {
            message.genesisValidator = undefined;
        }
        return message;
    },
};
const baseQueryAllGenesisValidatorRequest = { launchID: 0 };
export const QueryAllGenesisValidatorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
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
            ...baseQueryAllGenesisValidatorRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
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
            ...baseQueryAllGenesisValidatorRequest,
        };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
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
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllGenesisValidatorRequest,
        };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
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
const baseQueryAllGenesisValidatorResponse = {};
export const QueryAllGenesisValidatorResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.genesisValidator) {
            GenesisValidator.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllGenesisValidatorResponse,
        };
        message.genesisValidator = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.genesisValidator.push(GenesisValidator.decode(reader, reader.uint32()));
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
            ...baseQueryAllGenesisValidatorResponse,
        };
        message.genesisValidator = [];
        if (object.genesisValidator !== undefined &&
            object.genesisValidator !== null) {
            for (const e of object.genesisValidator) {
                message.genesisValidator.push(GenesisValidator.fromJSON(e));
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
        if (message.genesisValidator) {
            obj.genesisValidator = message.genesisValidator.map((e) => e ? GenesisValidator.toJSON(e) : undefined);
        }
        else {
            obj.genesisValidator = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllGenesisValidatorResponse,
        };
        message.genesisValidator = [];
        if (object.genesisValidator !== undefined &&
            object.genesisValidator !== null) {
            for (const e of object.genesisValidator) {
                message.genesisValidator.push(GenesisValidator.fromPartial(e));
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
const baseQueryGetRequestRequest = { launchID: 0, requestID: 0 };
export const QueryGetRequestRequest = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
        }
        if (message.requestID !== 0) {
            writer.uint32(16).uint64(message.requestID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetRequestRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.requestID = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetRequestRequest };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.requestID !== undefined && (obj.requestID = message.requestID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetRequestRequest };
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
        return message;
    },
};
const baseQueryGetRequestResponse = {};
export const QueryGetRequestResponse = {
    encode(message, writer = Writer.create()) {
        if (message.request !== undefined) {
            Request.encode(message.request, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetRequestResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.request = Request.decode(reader, reader.uint32());
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
            ...baseQueryGetRequestResponse,
        };
        if (object.request !== undefined && object.request !== null) {
            message.request = Request.fromJSON(object.request);
        }
        else {
            message.request = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.request !== undefined &&
            (obj.request = message.request
                ? Request.toJSON(message.request)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetRequestResponse,
        };
        if (object.request !== undefined && object.request !== null) {
            message.request = Request.fromPartial(object.request);
        }
        else {
            message.request = undefined;
        }
        return message;
    },
};
const baseQueryAllRequestRequest = { launchID: 0 };
export const QueryAllRequestRequest = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllRequestRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
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
        const message = { ...baseQueryAllRequestRequest };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
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
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllRequestRequest };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
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
const baseQueryAllRequestResponse = {};
export const QueryAllRequestResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.request) {
            Request.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllRequestResponse,
        };
        message.request = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.request.push(Request.decode(reader, reader.uint32()));
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
            ...baseQueryAllRequestResponse,
        };
        message.request = [];
        if (object.request !== undefined && object.request !== null) {
            for (const e of object.request) {
                message.request.push(Request.fromJSON(e));
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
        if (message.request) {
            obj.request = message.request.map((e) => e ? Request.toJSON(e) : undefined);
        }
        else {
            obj.request = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllRequestResponse,
        };
        message.request = [];
        if (object.request !== undefined && object.request !== null) {
            for (const e of object.request) {
                message.request.push(Request.fromPartial(e));
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
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Chain(request) {
        const data = QueryGetChainRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "Chain", data);
        return promise.then((data) => QueryGetChainResponse.decode(new Reader(data)));
    }
    ChainAll(request) {
        const data = QueryAllChainRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "ChainAll", data);
        return promise.then((data) => QueryAllChainResponse.decode(new Reader(data)));
    }
    GenesisAccount(request) {
        const data = QueryGetGenesisAccountRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "GenesisAccount", data);
        return promise.then((data) => QueryGetGenesisAccountResponse.decode(new Reader(data)));
    }
    GenesisAccountAll(request) {
        const data = QueryAllGenesisAccountRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "GenesisAccountAll", data);
        return promise.then((data) => QueryAllGenesisAccountResponse.decode(new Reader(data)));
    }
    VestingAccount(request) {
        const data = QueryGetVestingAccountRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "VestingAccount", data);
        return promise.then((data) => QueryGetVestingAccountResponse.decode(new Reader(data)));
    }
    VestingAccountAll(request) {
        const data = QueryAllVestingAccountRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "VestingAccountAll", data);
        return promise.then((data) => QueryAllVestingAccountResponse.decode(new Reader(data)));
    }
    GenesisValidator(request) {
        const data = QueryGetGenesisValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "GenesisValidator", data);
        return promise.then((data) => QueryGetGenesisValidatorResponse.decode(new Reader(data)));
    }
    GenesisValidatorAll(request) {
        const data = QueryAllGenesisValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "GenesisValidatorAll", data);
        return promise.then((data) => QueryAllGenesisValidatorResponse.decode(new Reader(data)));
    }
    Request(request) {
        const data = QueryGetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "Request", data);
        return promise.then((data) => QueryGetRequestResponse.decode(new Reader(data)));
    }
    RequestAll(request) {
        const data = QueryAllRequestRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "RequestAll", data);
        return promise.then((data) => QueryAllRequestResponse.decode(new Reader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.launch.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
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
