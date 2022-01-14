/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Validator } from "../profile/validator";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Coordinator, CoordinatorByAddress } from "../profile/coordinator";
export const protobufPackage = "tendermint.spn.profile";
const baseQueryGetValidatorRequest = { address: "" };
export const QueryGetValidatorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetValidatorRequest,
        };
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
        const message = {
            ...baseQueryGetValidatorRequest,
        };
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
        const message = {
            ...baseQueryGetValidatorRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryGetValidatorResponse = {};
export const QueryGetValidatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetValidatorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
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
            ...baseQueryGetValidatorResponse,
        };
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? Validator.toJSON(message.validator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetValidatorResponse,
        };
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        return message;
    },
};
const baseQueryAllValidatorRequest = {};
export const QueryAllValidatorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllValidatorRequest,
        };
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
        const message = {
            ...baseQueryAllValidatorRequest,
        };
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
        const message = {
            ...baseQueryAllValidatorRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllValidatorResponse = {};
export const QueryAllValidatorResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.validator) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllValidatorResponse,
        };
        message.validator = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator.push(Validator.decode(reader, reader.uint32()));
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
            ...baseQueryAllValidatorResponse,
        };
        message.validator = [];
        if (object.validator !== undefined && object.validator !== null) {
            for (const e of object.validator) {
                message.validator.push(Validator.fromJSON(e));
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
        if (message.validator) {
            obj.validator = message.validator.map((e) => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validator = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllValidatorResponse,
        };
        message.validator = [];
        if (object.validator !== undefined && object.validator !== null) {
            for (const e of object.validator) {
                message.validator.push(Validator.fromPartial(e));
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
const baseQueryGetCoordinatorRequest = { coordinatorID: 0 };
export const QueryGetCoordinatorRequest = {
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
            ...baseQueryGetCoordinatorRequest,
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
            ...baseQueryGetCoordinatorRequest,
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
            ...baseQueryGetCoordinatorRequest,
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
const baseQueryGetCoordinatorResponse = {};
export const QueryGetCoordinatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.coordinator !== undefined) {
            Coordinator.encode(message.coordinator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCoordinatorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator = Coordinator.decode(reader, reader.uint32());
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
            ...baseQueryGetCoordinatorResponse,
        };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = Coordinator.fromJSON(object.coordinator);
        }
        else {
            message.coordinator = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinator !== undefined &&
            (obj.coordinator = message.coordinator
                ? Coordinator.toJSON(message.coordinator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetCoordinatorResponse,
        };
        if (object.coordinator !== undefined && object.coordinator !== null) {
            message.coordinator = Coordinator.fromPartial(object.coordinator);
        }
        else {
            message.coordinator = undefined;
        }
        return message;
    },
};
const baseQueryAllCoordinatorRequest = {};
export const QueryAllCoordinatorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllCoordinatorRequest,
        };
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
        const message = {
            ...baseQueryAllCoordinatorRequest,
        };
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
        const message = {
            ...baseQueryAllCoordinatorRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllCoordinatorResponse = {};
export const QueryAllCoordinatorResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.coordinator) {
            Coordinator.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllCoordinatorResponse,
        };
        message.coordinator = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinator.push(Coordinator.decode(reader, reader.uint32()));
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
            ...baseQueryAllCoordinatorResponse,
        };
        message.coordinator = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            for (const e of object.coordinator) {
                message.coordinator.push(Coordinator.fromJSON(e));
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
        if (message.coordinator) {
            obj.coordinator = message.coordinator.map((e) => e ? Coordinator.toJSON(e) : undefined);
        }
        else {
            obj.coordinator = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllCoordinatorResponse,
        };
        message.coordinator = [];
        if (object.coordinator !== undefined && object.coordinator !== null) {
            for (const e of object.coordinator) {
                message.coordinator.push(Coordinator.fromPartial(e));
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
const baseQueryGetCoordinatorByAddressRequest = { address: "" };
export const QueryGetCoordinatorByAddressRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCoordinatorByAddressRequest,
        };
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
        const message = {
            ...baseQueryGetCoordinatorByAddressRequest,
        };
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
        const message = {
            ...baseQueryGetCoordinatorByAddressRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryGetCoordinatorByAddressResponse = {};
export const QueryGetCoordinatorByAddressResponse = {
    encode(message, writer = Writer.create()) {
        if (message.coordinatorByAddress !== undefined) {
            CoordinatorByAddress.encode(message.coordinatorByAddress, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCoordinatorByAddressResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coordinatorByAddress = CoordinatorByAddress.decode(reader, reader.uint32());
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
            ...baseQueryGetCoordinatorByAddressResponse,
        };
        if (object.coordinatorByAddress !== undefined &&
            object.coordinatorByAddress !== null) {
            message.coordinatorByAddress = CoordinatorByAddress.fromJSON(object.coordinatorByAddress);
        }
        else {
            message.coordinatorByAddress = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.coordinatorByAddress !== undefined &&
            (obj.coordinatorByAddress = message.coordinatorByAddress
                ? CoordinatorByAddress.toJSON(message.coordinatorByAddress)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetCoordinatorByAddressResponse,
        };
        if (object.coordinatorByAddress !== undefined &&
            object.coordinatorByAddress !== null) {
            message.coordinatorByAddress = CoordinatorByAddress.fromPartial(object.coordinatorByAddress);
        }
        else {
            message.coordinatorByAddress = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Validator(request) {
        const data = QueryGetValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Query", "Validator", data);
        return promise.then((data) => QueryGetValidatorResponse.decode(new Reader(data)));
    }
    ValidatorAll(request) {
        const data = QueryAllValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Query", "ValidatorAll", data);
        return promise.then((data) => QueryAllValidatorResponse.decode(new Reader(data)));
    }
    Coordinator(request) {
        const data = QueryGetCoordinatorRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Query", "Coordinator", data);
        return promise.then((data) => QueryGetCoordinatorResponse.decode(new Reader(data)));
    }
    CoordinatorAll(request) {
        const data = QueryAllCoordinatorRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Query", "CoordinatorAll", data);
        return promise.then((data) => QueryAllCoordinatorResponse.decode(new Reader(data)));
    }
    CoordinatorByAddress(request) {
        const data = QueryGetCoordinatorByAddressRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.spn.profile.Query", "CoordinatorByAddress", data);
        return promise.then((data) => QueryGetCoordinatorByAddressResponse.decode(new Reader(data)));
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
