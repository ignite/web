/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export const protobufPackage = "tendermint.spn.launch";
const baseVestingAccount = { launchID: 0, address: "" };
export const VestingAccount = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.vestingOptions !== undefined) {
            VestingOptions.encode(message.vestingOptions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVestingAccount };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.vestingOptions = VestingOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVestingAccount };
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
        if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
            message.vestingOptions = VestingOptions.fromJSON(object.vestingOptions);
        }
        else {
            message.vestingOptions = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.address !== undefined && (obj.address = message.address);
        message.vestingOptions !== undefined &&
            (obj.vestingOptions = message.vestingOptions
                ? VestingOptions.toJSON(message.vestingOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVestingAccount };
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
        if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
            message.vestingOptions = VestingOptions.fromPartial(object.vestingOptions);
        }
        else {
            message.vestingOptions = undefined;
        }
        return message;
    },
};
const baseVestingOptions = {};
export const VestingOptions = {
    encode(message, writer = Writer.create()) {
        if (message.delayedVesting !== undefined) {
            DelayedVesting.encode(message.delayedVesting, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVestingOptions };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delayedVesting = DelayedVesting.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVestingOptions };
        if (object.delayedVesting !== undefined && object.delayedVesting !== null) {
            message.delayedVesting = DelayedVesting.fromJSON(object.delayedVesting);
        }
        else {
            message.delayedVesting = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.delayedVesting !== undefined &&
            (obj.delayedVesting = message.delayedVesting
                ? DelayedVesting.toJSON(message.delayedVesting)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVestingOptions };
        if (object.delayedVesting !== undefined && object.delayedVesting !== null) {
            message.delayedVesting = DelayedVesting.fromPartial(object.delayedVesting);
        }
        else {
            message.delayedVesting = undefined;
        }
        return message;
    },
};
const baseDelayedVesting = { endTime: 0 };
export const DelayedVesting = {
    encode(message, writer = Writer.create()) {
        for (const v of message.totalBalance) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.vesting) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.endTime !== 0) {
            writer.uint32(24).int64(message.endTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDelayedVesting };
        message.totalBalance = [];
        message.vesting = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalBalance.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.vesting.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
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
        const message = { ...baseDelayedVesting };
        message.totalBalance = [];
        message.vesting = [];
        if (object.totalBalance !== undefined && object.totalBalance !== null) {
            for (const e of object.totalBalance) {
                message.totalBalance.push(Coin.fromJSON(e));
            }
        }
        if (object.vesting !== undefined && object.vesting !== null) {
            for (const e of object.vesting) {
                message.vesting.push(Coin.fromJSON(e));
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
        if (message.totalBalance) {
            obj.totalBalance = message.totalBalance.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalBalance = [];
        }
        if (message.vesting) {
            obj.vesting = message.vesting.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.vesting = [];
        }
        message.endTime !== undefined && (obj.endTime = message.endTime);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDelayedVesting };
        message.totalBalance = [];
        message.vesting = [];
        if (object.totalBalance !== undefined && object.totalBalance !== null) {
            for (const e of object.totalBalance) {
                message.totalBalance.push(Coin.fromPartial(e));
            }
        }
        if (object.vesting !== undefined && object.vesting !== null) {
            for (const e of object.vesting) {
                message.vesting.push(Coin.fromPartial(e));
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
