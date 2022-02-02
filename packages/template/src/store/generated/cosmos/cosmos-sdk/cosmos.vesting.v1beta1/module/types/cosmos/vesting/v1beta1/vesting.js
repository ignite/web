"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const auth_1 = require("../../../cosmos/auth/v1beta1/auth");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "cosmos.vesting.v1beta1";
const baseBaseVestingAccount = { endTime: 0 };
exports.BaseVestingAccount = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.baseAccount !== undefined) {
            auth_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.originalVesting) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatedFree) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegatedVesting) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== 0) {
            writer.uint32(40).int64(message.endTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBaseVestingAccount };
        message.originalVesting = [];
        message.delegatedFree = [];
        message.delegatedVesting = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.originalVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegatedFree.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegatedVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBaseVestingAccount };
        message.originalVesting = [];
        message.delegatedFree = [];
        message.delegatedVesting = [];
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = auth_1.BaseAccount.fromJSON(object.baseAccount);
        }
        else {
            message.baseAccount = undefined;
        }
        if (object.originalVesting !== undefined &&
            object.originalVesting !== null) {
            for (const e of object.originalVesting) {
                message.originalVesting.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.delegatedFree !== undefined && object.delegatedFree !== null) {
            for (const e of object.delegatedFree) {
                message.delegatedFree.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.delegatedVesting !== undefined &&
            object.delegatedVesting !== null) {
            for (const e of object.delegatedVesting) {
                message.delegatedVesting.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = Number(object.endTime);
        }
        else {
            message.endTime = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount
                ? auth_1.BaseAccount.toJSON(message.baseAccount)
                : undefined);
        if (message.originalVesting) {
            obj.originalVesting = message.originalVesting.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.originalVesting = [];
        }
        if (message.delegatedFree) {
            obj.delegatedFree = message.delegatedFree.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegatedFree = [];
        }
        if (message.delegatedVesting) {
            obj.delegatedVesting = message.delegatedVesting.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegatedVesting = [];
        }
        message.endTime !== undefined && (obj.endTime = message.endTime);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBaseVestingAccount };
        message.originalVesting = [];
        message.delegatedFree = [];
        message.delegatedVesting = [];
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = auth_1.BaseAccount.fromPartial(object.baseAccount);
        }
        else {
            message.baseAccount = undefined;
        }
        if (object.originalVesting !== undefined &&
            object.originalVesting !== null) {
            for (const e of object.originalVesting) {
                message.originalVesting.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.delegatedFree !== undefined && object.delegatedFree !== null) {
            for (const e of object.delegatedFree) {
                message.delegatedFree.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.delegatedVesting !== undefined &&
            object.delegatedVesting !== null) {
            for (const e of object.delegatedVesting) {
                message.delegatedVesting.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = object.endTime;
        }
        else {
            message.endTime = 0;
        }
        return message;
    },
};
const baseContinuousVestingAccount = { startTime: 0 };
exports.ContinuousVestingAccount = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== 0) {
            writer.uint32(16).int64(message.startTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseContinuousVestingAccount,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = longToNumber(reader.int64());
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
            ...baseContinuousVestingAccount,
        };
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromJSON(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = Number(object.startTime);
        }
        else {
            message.startTime = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseContinuousVestingAccount,
        };
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = 0;
        }
        return message;
    },
};
const baseDelayedVestingAccount = {};
exports.DelayedVestingAccount = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDelayedVestingAccount };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDelayedVestingAccount };
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromJSON(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDelayedVestingAccount };
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        return message;
    },
};
const basePeriod = { length: 0 };
exports.Period = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.length !== 0) {
            writer.uint32(8).int64(message.length);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePeriod };
        message.amount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = longToNumber(reader.int64());
                    break;
                case 2:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePeriod };
        message.amount = [];
        if (object.length !== undefined && object.length !== null) {
            message.length = Number(object.length);
        }
        else {
            message.length = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.length !== undefined && (obj.length = message.length);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePeriod };
        message.amount = [];
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        }
        else {
            message.length = 0;
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const basePeriodicVestingAccount = { startTime: 0 };
exports.PeriodicVestingAccount = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== 0) {
            writer.uint32(16).int64(message.startTime);
        }
        for (const v of message.vestingPeriods) {
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePeriodicVestingAccount };
        message.vestingPeriods = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = longToNumber(reader.int64());
                    break;
                case 3:
                    message.vestingPeriods.push(exports.Period.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePeriodicVestingAccount };
        message.vestingPeriods = [];
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromJSON(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = Number(object.startTime);
        }
        else {
            message.startTime = 0;
        }
        if (object.vestingPeriods !== undefined && object.vestingPeriods !== null) {
            for (const e of object.vestingPeriods) {
                message.vestingPeriods.push(exports.Period.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        if (message.vestingPeriods) {
            obj.vestingPeriods = message.vestingPeriods.map((e) => e ? exports.Period.toJSON(e) : undefined);
        }
        else {
            obj.vestingPeriods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePeriodicVestingAccount };
        message.vestingPeriods = [];
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = 0;
        }
        if (object.vestingPeriods !== undefined && object.vestingPeriods !== null) {
            for (const e of object.vestingPeriods) {
                message.vestingPeriods.push(exports.Period.fromPartial(e));
            }
        }
        return message;
    },
};
const basePermanentLockedAccount = {};
exports.PermanentLockedAccount = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermanentLockedAccount };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePermanentLockedAccount };
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromJSON(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePermanentLockedAccount };
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
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
