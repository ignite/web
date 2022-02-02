"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const duration_1 = require("../../../google/protobuf/duration");
const any_1 = require("../../../google/protobuf/any");
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "cosmos.feegrant.v1beta1";
const baseBasicAllowance = {};
exports.BasicAllowance = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.spendLimit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBasicAllowance };
        message.spendLimit = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiration = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBasicAllowance };
        message.spendLimit = [];
        if (object.spendLimit !== undefined && object.spendLimit !== null) {
            for (const e of object.spendLimit) {
                message.spendLimit.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = fromJsonTimestamp(object.expiration);
        }
        else {
            message.expiration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spendLimit = message.spendLimit.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.spendLimit = [];
        }
        message.expiration !== undefined &&
            (obj.expiration =
                message.expiration !== undefined
                    ? message.expiration.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBasicAllowance };
        message.spendLimit = [];
        if (object.spendLimit !== undefined && object.spendLimit !== null) {
            for (const e of object.spendLimit) {
                message.spendLimit.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = object.expiration;
        }
        else {
            message.expiration = undefined;
        }
        return message;
    },
};
const basePeriodicAllowance = {};
exports.PeriodicAllowance = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.basic !== undefined) {
            exports.BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            duration_1.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.periodSpendLimit) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.periodCanSpend) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.periodReset !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePeriodicAllowance };
        message.periodSpendLimit = [];
        message.periodCanSpend = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = exports.BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.periodSpendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.periodCanSpend.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.periodReset = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePeriodicAllowance };
        message.periodSpendLimit = [];
        message.periodCanSpend = [];
        if (object.basic !== undefined && object.basic !== null) {
            message.basic = exports.BasicAllowance.fromJSON(object.basic);
        }
        else {
            message.basic = undefined;
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = duration_1.Duration.fromJSON(object.period);
        }
        else {
            message.period = undefined;
        }
        if (object.periodSpendLimit !== undefined &&
            object.periodSpendLimit !== null) {
            for (const e of object.periodSpendLimit) {
                message.periodSpendLimit.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.periodCanSpend !== undefined && object.periodCanSpend !== null) {
            for (const e of object.periodCanSpend) {
                message.periodCanSpend.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.periodReset !== undefined && object.periodReset !== null) {
            message.periodReset = fromJsonTimestamp(object.periodReset);
        }
        else {
            message.periodReset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.basic !== undefined &&
            (obj.basic = message.basic
                ? exports.BasicAllowance.toJSON(message.basic)
                : undefined);
        message.period !== undefined &&
            (obj.period = message.period
                ? duration_1.Duration.toJSON(message.period)
                : undefined);
        if (message.periodSpendLimit) {
            obj.periodSpendLimit = message.periodSpendLimit.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.periodSpendLimit = [];
        }
        if (message.periodCanSpend) {
            obj.periodCanSpend = message.periodCanSpend.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.periodCanSpend = [];
        }
        message.periodReset !== undefined &&
            (obj.periodReset =
                message.periodReset !== undefined
                    ? message.periodReset.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePeriodicAllowance };
        message.periodSpendLimit = [];
        message.periodCanSpend = [];
        if (object.basic !== undefined && object.basic !== null) {
            message.basic = exports.BasicAllowance.fromPartial(object.basic);
        }
        else {
            message.basic = undefined;
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = duration_1.Duration.fromPartial(object.period);
        }
        else {
            message.period = undefined;
        }
        if (object.periodSpendLimit !== undefined &&
            object.periodSpendLimit !== null) {
            for (const e of object.periodSpendLimit) {
                message.periodSpendLimit.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.periodCanSpend !== undefined && object.periodCanSpend !== null) {
            for (const e of object.periodCanSpend) {
                message.periodCanSpend.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.periodReset !== undefined && object.periodReset !== null) {
            message.periodReset = object.periodReset;
        }
        else {
            message.periodReset = undefined;
        }
        return message;
    },
};
const baseAllowedMsgAllowance = { allowedMessages: "" };
exports.AllowedMsgAllowance = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allowedMessages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAllowedMsgAllowance };
        message.allowedMessages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allowedMessages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAllowedMsgAllowance };
        message.allowedMessages = [];
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = any_1.Any.fromJSON(object.allowance);
        }
        else {
            message.allowance = undefined;
        }
        if (object.allowedMessages !== undefined &&
            object.allowedMessages !== null) {
            for (const e of object.allowedMessages) {
                message.allowedMessages.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined &&
            (obj.allowance = message.allowance
                ? any_1.Any.toJSON(message.allowance)
                : undefined);
        if (message.allowedMessages) {
            obj.allowedMessages = message.allowedMessages.map((e) => e);
        }
        else {
            obj.allowedMessages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAllowedMsgAllowance };
        message.allowedMessages = [];
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = any_1.Any.fromPartial(object.allowance);
        }
        else {
            message.allowance = undefined;
        }
        if (object.allowedMessages !== undefined &&
            object.allowedMessages !== null) {
            for (const e of object.allowedMessages) {
                message.allowedMessages.push(e);
            }
        }
        return message;
    },
};
const baseGrant = { granter: "", grantee: "" };
exports.Grant = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrant };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGrant };
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = String(object.granter);
        }
        else {
            message.granter = "";
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = String(object.grantee);
        }
        else {
            message.grantee = "";
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = any_1.Any.fromJSON(object.allowance);
        }
        else {
            message.allowance = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined &&
            (obj.allowance = message.allowance
                ? any_1.Any.toJSON(message.allowance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGrant };
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        else {
            message.granter = "";
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        else {
            message.grantee = "";
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = any_1.Any.fromPartial(object.allowance);
        }
        else {
            message.allowance = undefined;
        }
        return message;
    },
};
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
