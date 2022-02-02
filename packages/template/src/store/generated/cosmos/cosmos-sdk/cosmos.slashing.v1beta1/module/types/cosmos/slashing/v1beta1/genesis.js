"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const slashing_1 = require("../../../cosmos/slashing/v1beta1/slashing");
exports.protobufPackage = "cosmos.slashing.v1beta1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signingInfos) {
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missedBlocks) {
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.signingInfos = [];
        message.missedBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signingInfos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missedBlocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.signingInfos = [];
        message.missedBlocks = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = slashing_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.signingInfos !== undefined && object.signingInfos !== null) {
            for (const e of object.signingInfos) {
                message.signingInfos.push(exports.SigningInfo.fromJSON(e));
            }
        }
        if (object.missedBlocks !== undefined && object.missedBlocks !== null) {
            for (const e of object.missedBlocks) {
                message.missedBlocks.push(exports.ValidatorMissedBlocks.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        if (message.signingInfos) {
            obj.signingInfos = message.signingInfos.map((e) => e ? exports.SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signingInfos = [];
        }
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map((e) => e ? exports.ValidatorMissedBlocks.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.signingInfos = [];
        message.missedBlocks = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = slashing_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.signingInfos !== undefined && object.signingInfos !== null) {
            for (const e of object.signingInfos) {
                message.signingInfos.push(exports.SigningInfo.fromPartial(e));
            }
        }
        if (object.missedBlocks !== undefined && object.missedBlocks !== null) {
            for (const e of object.missedBlocks) {
                message.missedBlocks.push(exports.ValidatorMissedBlocks.fromPartial(e));
            }
        }
        return message;
    },
};
const baseSigningInfo = { address: "" };
exports.SigningInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSigningInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validatorSigningInfo = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSigningInfo };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.validatorSigningInfo !== undefined &&
            object.validatorSigningInfo !== null) {
            message.validatorSigningInfo = slashing_1.ValidatorSigningInfo.fromJSON(object.validatorSigningInfo);
        }
        else {
            message.validatorSigningInfo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validatorSigningInfo !== undefined &&
            (obj.validatorSigningInfo = message.validatorSigningInfo
                ? slashing_1.ValidatorSigningInfo.toJSON(message.validatorSigningInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSigningInfo };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.validatorSigningInfo !== undefined &&
            object.validatorSigningInfo !== null) {
            message.validatorSigningInfo = slashing_1.ValidatorSigningInfo.fromPartial(object.validatorSigningInfo);
        }
        else {
            message.validatorSigningInfo = undefined;
        }
        return message;
    },
};
const baseValidatorMissedBlocks = { address: "" };
exports.ValidatorMissedBlocks = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missedBlocks) {
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidatorMissedBlocks };
        message.missedBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missedBlocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseValidatorMissedBlocks };
        message.missedBlocks = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.missedBlocks !== undefined && object.missedBlocks !== null) {
            for (const e of object.missedBlocks) {
                message.missedBlocks.push(exports.MissedBlock.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map((e) => e ? exports.MissedBlock.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseValidatorMissedBlocks };
        message.missedBlocks = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.missedBlocks !== undefined && object.missedBlocks !== null) {
            for (const e of object.missedBlocks) {
                message.missedBlocks.push(exports.MissedBlock.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMissedBlock = { index: 0, missed: false };
exports.MissedBlock = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMissedBlock };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToNumber(reader.int64());
                    break;
                case 2:
                    message.missed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMissedBlock };
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = Boolean(object.missed);
        }
        else {
            message.missed = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMissedBlock };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = object.missed;
        }
        else {
            message.missed = false;
        }
        return message;
    },
};
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
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    minimal_1.configure();
}
