/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { ValidatorDescription } from "../profile/validator";
import { CoordinatorDescription } from "../profile/coordinator";
export const protobufPackage = "tendermint.spn.profile";
const baseMsgUpdateValidatorDescription = { address: "" };
export const MsgUpdateValidatorDescription = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.description !== undefined) {
            ValidatorDescription.encode(message.description, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateValidatorDescription,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.description = ValidatorDescription.decode(reader, reader.uint32());
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
            ...baseMsgUpdateValidatorDescription,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = ValidatorDescription.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.description !== undefined &&
            (obj.description = message.description
                ? ValidatorDescription.toJSON(message.description)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateValidatorDescription,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = ValidatorDescription.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        return message;
    },
};
const baseMsgUpdateValidatorDescriptionResponse = {};
export const MsgUpdateValidatorDescriptionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateValidatorDescriptionResponse,
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
            ...baseMsgUpdateValidatorDescriptionResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateValidatorDescriptionResponse,
        };
        return message;
    },
};
const baseMsgDeleteValidator = { address: "" };
export const MsgDeleteValidator = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteValidator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = { ...baseMsgDeleteValidator };
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
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteValidator };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseMsgDeleteValidatorResponse = {};
export const MsgDeleteValidatorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteValidatorResponse,
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
            ...baseMsgDeleteValidatorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteValidatorResponse,
        };
        return message;
    },
};
const baseMsgCreateCoordinator = { address: "" };
export const MsgCreateCoordinator = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.description !== undefined) {
            CoordinatorDescription.encode(message.description, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCoordinator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.description = CoordinatorDescription.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCoordinator };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = CoordinatorDescription.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.description !== undefined &&
            (obj.description = message.description
                ? CoordinatorDescription.toJSON(message.description)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCoordinator };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = CoordinatorDescription.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        return message;
    },
};
const baseMsgCreateCoordinatorResponse = { coordinatorID: 0 };
export const MsgCreateCoordinatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.coordinatorID !== 0) {
            writer.uint32(8).uint64(message.coordinatorID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateCoordinatorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinatorID = longToNumber(reader.uint64());
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
            ...baseMsgCreateCoordinatorResponse,
        };
        if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
            message.coordinatorID = Number(object.coordinatorID);
        }
        else {
            message.coordinatorID = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinatorID !== undefined &&
            (obj.coordinatorID = message.coordinatorID);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateCoordinatorResponse,
        };
        if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
            message.coordinatorID = object.coordinatorID;
        }
        else {
            message.coordinatorID = 0;
        }
        return message;
    },
};
const baseMsgUpdateCoordinatorDescription = { address: "" };
export const MsgUpdateCoordinatorDescription = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.description !== undefined) {
            CoordinatorDescription.encode(message.description, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateCoordinatorDescription,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.description = CoordinatorDescription.decode(reader, reader.uint32());
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
            ...baseMsgUpdateCoordinatorDescription,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = CoordinatorDescription.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.description !== undefined &&
            (obj.description = message.description
                ? CoordinatorDescription.toJSON(message.description)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateCoordinatorDescription,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = CoordinatorDescription.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        return message;
    },
};
const baseMsgUpdateCoordinatorDescriptionResponse = {};
export const MsgUpdateCoordinatorDescriptionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateCoordinatorDescriptionResponse,
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
            ...baseMsgUpdateCoordinatorDescriptionResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateCoordinatorDescriptionResponse,
        };
        return message;
    },
};
const baseMsgUpdateCoordinatorAddress = { address: "", newAddress: "" };
export const MsgUpdateCoordinatorAddress = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.newAddress !== "") {
            writer.uint32(18).string(message.newAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateCoordinatorAddress,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.newAddress = reader.string();
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
            ...baseMsgUpdateCoordinatorAddress,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.newAddress !== undefined && object.newAddress !== null) {
            message.newAddress = String(object.newAddress);
        }
        else {
            message.newAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.newAddress !== undefined && (obj.newAddress = message.newAddress);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateCoordinatorAddress,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.newAddress !== undefined && object.newAddress !== null) {
            message.newAddress = object.newAddress;
        }
        else {
            message.newAddress = "";
        }
        return message;
    },
};
const baseMsgUpdateCoordinatorAddressResponse = {};
export const MsgUpdateCoordinatorAddressResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateCoordinatorAddressResponse,
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
            ...baseMsgUpdateCoordinatorAddressResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateCoordinatorAddressResponse,
        };
        return message;
    },
};
const baseMsgDeleteCoordinator = { address: "" };
export const MsgDeleteCoordinator = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCoordinator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = { ...baseMsgDeleteCoordinator };
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
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteCoordinator };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseMsgDeleteCoordinatorResponse = { coordinatorID: 0 };
export const MsgDeleteCoordinatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.coordinatorID !== 0) {
            writer.uint32(8).uint64(message.coordinatorID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteCoordinatorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinatorID = longToNumber(reader.uint64());
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
            ...baseMsgDeleteCoordinatorResponse,
        };
        if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
            message.coordinatorID = Number(object.coordinatorID);
        }
        else {
            message.coordinatorID = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinatorID !== undefined &&
            (obj.coordinatorID = message.coordinatorID);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgDeleteCoordinatorResponse,
        };
        if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
            message.coordinatorID = object.coordinatorID;
        }
        else {
            message.coordinatorID = 0;
        }
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    UpdateValidatorDescription(request) {
        const data = MsgUpdateValidatorDescription.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Msg", "UpdateValidatorDescription", data);
        return promise.then((data) => MsgUpdateValidatorDescriptionResponse.decode(new Reader(data)));
    }
    DeleteValidator(request) {
        const data = MsgDeleteValidator.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Msg", "DeleteValidator", data);
        return promise.then((data) => MsgDeleteValidatorResponse.decode(new Reader(data)));
    }
    CreateCoordinator(request) {
        const data = MsgCreateCoordinator.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Msg", "CreateCoordinator", data);
        return promise.then((data) => MsgCreateCoordinatorResponse.decode(new Reader(data)));
    }
    UpdateCoordinatorDescription(request) {
        const data = MsgUpdateCoordinatorDescription.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Msg", "UpdateCoordinatorDescription", data);
        return promise.then((data) => MsgUpdateCoordinatorDescriptionResponse.decode(new Reader(data)));
    }
    UpdateCoordinatorAddress(request) {
        const data = MsgUpdateCoordinatorAddress.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Msg", "UpdateCoordinatorAddress", data);
        return promise.then((data) => MsgUpdateCoordinatorAddressResponse.decode(new Reader(data)));
    }
    DeleteCoordinator(request) {
        const data = MsgDeleteCoordinator.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Msg", "DeleteCoordinator", data);
        return promise.then((data) => MsgDeleteCoordinatorResponse.decode(new Reader(data)));
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
