"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUndelegateResponse = exports.MsgUndelegate = exports.MsgBeginRedelegateResponse = exports.MsgBeginRedelegate = exports.MsgDelegateResponse = exports.MsgDelegate = exports.MsgEditValidatorResponse = exports.MsgEditValidator = exports.MsgCreateValidatorResponse = exports.MsgCreateValidator = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const staking_1 = require("../../../cosmos/staking/v1beta1/staking");
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "cosmos.staking.v1beta1";
const baseMsgCreateValidator = {
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
};
exports.MsgCreateValidator = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            staking_1.CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(26).string(message.minSelfDelegation);
        }
        if (message.delegatorAddress !== "") {
            writer.uint32(34).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(42).string(message.validatorAddress);
        }
        if (message.pubkey !== undefined) {
            any_1.Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateValidator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = staking_1.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.minSelfDelegation = reader.string();
                    break;
                case 4:
                    message.delegatorAddress = reader.string();
                    break;
                case 5:
                    message.validatorAddress = reader.string();
                    break;
                case 6:
                    message.pubkey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.value = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateValidator };
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = staking_1.CommissionRates.fromJSON(object.commission);
        }
        else {
            message.commission = undefined;
        }
        if (object.minSelfDelegation !== undefined &&
            object.minSelfDelegation !== null) {
            message.minSelfDelegation = String(object.minSelfDelegation);
        }
        else {
            message.minSelfDelegation = "";
        }
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = any_1.Any.fromJSON(object.pubkey);
        }
        else {
            message.pubkey = undefined;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = coin_1.Coin.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description
                ? staking_1.Description.toJSON(message.description)
                : undefined);
        message.commission !== undefined &&
            (obj.commission = message.commission
                ? staking_1.CommissionRates.toJSON(message.commission)
                : undefined);
        message.minSelfDelegation !== undefined &&
            (obj.minSelfDelegation = message.minSelfDelegation);
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.pubkey !== undefined &&
            (obj.pubkey = message.pubkey ? any_1.Any.toJSON(message.pubkey) : undefined);
        message.value !== undefined &&
            (obj.value = message.value ? coin_1.Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateValidator };
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = staking_1.CommissionRates.fromPartial(object.commission);
        }
        else {
            message.commission = undefined;
        }
        if (object.minSelfDelegation !== undefined &&
            object.minSelfDelegation !== null) {
            message.minSelfDelegation = object.minSelfDelegation;
        }
        else {
            message.minSelfDelegation = "";
        }
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = any_1.Any.fromPartial(object.pubkey);
        }
        else {
            message.pubkey = undefined;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = coin_1.Coin.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseMsgCreateValidatorResponse = {};
exports.MsgCreateValidatorResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateValidatorResponse,
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
            ...baseMsgCreateValidatorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCreateValidatorResponse,
        };
        return message;
    },
};
const baseMsgEditValidator = {
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: "",
};
exports.MsgEditValidator = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.commissionRate !== "") {
            writer.uint32(26).string(message.commissionRate);
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(34).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgEditValidator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.commissionRate = reader.string();
                    break;
                case 4:
                    message.minSelfDelegation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgEditValidator };
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.commissionRate !== undefined && object.commissionRate !== null) {
            message.commissionRate = String(object.commissionRate);
        }
        else {
            message.commissionRate = "";
        }
        if (object.minSelfDelegation !== undefined &&
            object.minSelfDelegation !== null) {
            message.minSelfDelegation = String(object.minSelfDelegation);
        }
        else {
            message.minSelfDelegation = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description
                ? staking_1.Description.toJSON(message.description)
                : undefined);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.commissionRate !== undefined &&
            (obj.commissionRate = message.commissionRate);
        message.minSelfDelegation !== undefined &&
            (obj.minSelfDelegation = message.minSelfDelegation);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgEditValidator };
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.commissionRate !== undefined && object.commissionRate !== null) {
            message.commissionRate = object.commissionRate;
        }
        else {
            message.commissionRate = "";
        }
        if (object.minSelfDelegation !== undefined &&
            object.minSelfDelegation !== null) {
            message.minSelfDelegation = object.minSelfDelegation;
        }
        else {
            message.minSelfDelegation = "";
        }
        return message;
    },
};
const baseMsgEditValidatorResponse = {};
exports.MsgEditValidatorResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgEditValidatorResponse,
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
            ...baseMsgEditValidatorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgEditValidatorResponse,
        };
        return message;
    },
};
const baseMsgDelegate = { delegatorAddress: "", validatorAddress: "" };
exports.MsgDelegate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDelegate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDelegate };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDelegate };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgDelegateResponse = {};
exports.MsgDelegateResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDelegateResponse };
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
        const message = { ...baseMsgDelegateResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDelegateResponse };
        return message;
    },
};
const baseMsgBeginRedelegate = {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
};
exports.MsgBeginRedelegate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBeginRedelegate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgBeginRedelegate };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorSrcAddress !== undefined &&
            object.validatorSrcAddress !== null) {
            message.validatorSrcAddress = String(object.validatorSrcAddress);
        }
        else {
            message.validatorSrcAddress = "";
        }
        if (object.validatorDstAddress !== undefined &&
            object.validatorDstAddress !== null) {
            message.validatorDstAddress = String(object.validatorDstAddress);
        }
        else {
            message.validatorDstAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorSrcAddress !== undefined &&
            (obj.validatorSrcAddress = message.validatorSrcAddress);
        message.validatorDstAddress !== undefined &&
            (obj.validatorDstAddress = message.validatorDstAddress);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBeginRedelegate };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorSrcAddress !== undefined &&
            object.validatorSrcAddress !== null) {
            message.validatorSrcAddress = object.validatorSrcAddress;
        }
        else {
            message.validatorSrcAddress = "";
        }
        if (object.validatorDstAddress !== undefined &&
            object.validatorDstAddress !== null) {
            message.validatorDstAddress = object.validatorDstAddress;
        }
        else {
            message.validatorDstAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgBeginRedelegateResponse = {};
exports.MsgBeginRedelegateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgBeginRedelegateResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            ...baseMsgBeginRedelegateResponse,
        };
        if (object.completionTime !== undefined && object.completionTime !== null) {
            message.completionTime = fromJsonTimestamp(object.completionTime);
        }
        else {
            message.completionTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.completionTime !== undefined &&
            (obj.completionTime =
                message.completionTime !== undefined
                    ? message.completionTime.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgBeginRedelegateResponse,
        };
        if (object.completionTime !== undefined && object.completionTime !== null) {
            message.completionTime = object.completionTime;
        }
        else {
            message.completionTime = undefined;
        }
        return message;
    },
};
const baseMsgUndelegate = {
    delegatorAddress: "",
    validatorAddress: "",
};
exports.MsgUndelegate = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUndelegate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUndelegate };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = String(object.delegatorAddress);
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromJSON(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUndelegate };
        if (object.delegatorAddress !== undefined &&
            object.delegatorAddress !== null) {
            message.delegatorAddress = object.delegatorAddress;
        }
        else {
            message.delegatorAddress = "";
        }
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        else {
            message.amount = undefined;
        }
        return message;
    },
};
const baseMsgUndelegateResponse = {};
exports.MsgUndelegateResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUndelegateResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUndelegateResponse };
        if (object.completionTime !== undefined && object.completionTime !== null) {
            message.completionTime = fromJsonTimestamp(object.completionTime);
        }
        else {
            message.completionTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.completionTime !== undefined &&
            (obj.completionTime =
                message.completionTime !== undefined
                    ? message.completionTime.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUndelegateResponse };
        if (object.completionTime !== undefined && object.completionTime !== null) {
            message.completionTime = object.completionTime;
        }
        else {
            message.completionTime = undefined;
        }
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateValidator(request) {
        const data = exports.MsgCreateValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
        return promise.then((data) => exports.MsgCreateValidatorResponse.decode(new minimal_1.Reader(data)));
    }
    EditValidator(request) {
        const data = exports.MsgEditValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
        return promise.then((data) => exports.MsgEditValidatorResponse.decode(new minimal_1.Reader(data)));
    }
    Delegate(request) {
        const data = exports.MsgDelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
        return promise.then((data) => exports.MsgDelegateResponse.decode(new minimal_1.Reader(data)));
    }
    BeginRedelegate(request) {
        const data = exports.MsgBeginRedelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
        return promise.then((data) => exports.MsgBeginRedelegateResponse.decode(new minimal_1.Reader(data)));
    }
    Undelegate(request) {
        const data = exports.MsgUndelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
        return promise.then((data) => exports.MsgUndelegateResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
