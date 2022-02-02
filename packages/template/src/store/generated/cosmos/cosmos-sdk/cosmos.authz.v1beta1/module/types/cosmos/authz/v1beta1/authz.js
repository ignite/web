"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grant = exports.GenericAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../google/protobuf/timestamp");
const any_1 = require("../../../google/protobuf/any");
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "cosmos.authz.v1beta1";
const baseGenericAuthorization = { msg: "" };
exports.GenericAuthorization = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenericAuthorization };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenericAuthorization };
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenericAuthorization };
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseGrant = {};
exports.Grant = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.authorization !== undefined) {
            any_1.Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
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
                    message.authorization = any_1.Any.decode(reader, reader.uint32());
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
        const message = { ...baseGrant };
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = any_1.Any.fromJSON(object.authorization);
        }
        else {
            message.authorization = undefined;
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
        message.authorization !== undefined &&
            (obj.authorization = message.authorization
                ? any_1.Any.toJSON(message.authorization)
                : undefined);
        message.expiration !== undefined &&
            (obj.expiration =
                message.expiration !== undefined
                    ? message.expiration.toISOString()
                    : null);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGrant };
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = any_1.Any.fromPartial(object.authorization);
        }
        else {
            message.authorization = undefined;
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
