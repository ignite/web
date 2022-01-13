/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Validator } from "../profile/validator";
import { Coordinator, CoordinatorByAddress } from "../profile/coordinator";
export const protobufPackage = "tendermint.spn.profile";
const baseGenesisState = { coordinatorCounter: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.validatorList) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.coordinatorList) {
            Coordinator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.coordinatorCounter !== 0) {
            writer.uint32(24).uint64(message.coordinatorCounter);
        }
        for (const v of message.coordinatorByAddressList) {
            CoordinatorByAddress.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.validatorList = [];
        message.coordinatorList = [];
        message.coordinatorByAddressList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorList.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.coordinatorList.push(Coordinator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.coordinatorCounter = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.coordinatorByAddressList.push(CoordinatorByAddress.decode(reader, reader.uint32()));
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
        message.validatorList = [];
        message.coordinatorList = [];
        message.coordinatorByAddressList = [];
        if (object.validatorList !== undefined && object.validatorList !== null) {
            for (const e of object.validatorList) {
                message.validatorList.push(Validator.fromJSON(e));
            }
        }
        if (object.coordinatorList !== undefined &&
            object.coordinatorList !== null) {
            for (const e of object.coordinatorList) {
                message.coordinatorList.push(Coordinator.fromJSON(e));
            }
        }
        if (object.coordinatorCounter !== undefined &&
            object.coordinatorCounter !== null) {
            message.coordinatorCounter = Number(object.coordinatorCounter);
        }
        else {
            message.coordinatorCounter = 0;
        }
        if (object.coordinatorByAddressList !== undefined &&
            object.coordinatorByAddressList !== null) {
            for (const e of object.coordinatorByAddressList) {
                message.coordinatorByAddressList.push(CoordinatorByAddress.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorList) {
            obj.validatorList = message.validatorList.map((e) => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validatorList = [];
        }
        if (message.coordinatorList) {
            obj.coordinatorList = message.coordinatorList.map((e) => e ? Coordinator.toJSON(e) : undefined);
        }
        else {
            obj.coordinatorList = [];
        }
        message.coordinatorCounter !== undefined &&
            (obj.coordinatorCounter = message.coordinatorCounter);
        if (message.coordinatorByAddressList) {
            obj.coordinatorByAddressList = message.coordinatorByAddressList.map((e) => e ? CoordinatorByAddress.toJSON(e) : undefined);
        }
        else {
            obj.coordinatorByAddressList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.validatorList = [];
        message.coordinatorList = [];
        message.coordinatorByAddressList = [];
        if (object.validatorList !== undefined && object.validatorList !== null) {
            for (const e of object.validatorList) {
                message.validatorList.push(Validator.fromPartial(e));
            }
        }
        if (object.coordinatorList !== undefined &&
            object.coordinatorList !== null) {
            for (const e of object.coordinatorList) {
                message.coordinatorList.push(Coordinator.fromPartial(e));
            }
        }
        if (object.coordinatorCounter !== undefined &&
            object.coordinatorCounter !== null) {
            message.coordinatorCounter = object.coordinatorCounter;
        }
        else {
            message.coordinatorCounter = 0;
        }
        if (object.coordinatorByAddressList !== undefined &&
            object.coordinatorByAddressList !== null) {
            for (const e of object.coordinatorByAddressList) {
                message.coordinatorByAddressList.push(CoordinatorByAddress.fromPartial(e));
            }
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
