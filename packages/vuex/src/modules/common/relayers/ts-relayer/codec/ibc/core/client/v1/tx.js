"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgSubmitMisbehaviourResponse = exports.MsgSubmitMisbehaviour = exports.MsgUpgradeClientResponse = exports.MsgUpgradeClient = exports.MsgUpdateClientResponse = exports.MsgUpdateClient = exports.MsgCreateClientResponse = exports.MsgCreateClient = exports.protobufPackage = void 0;
/* eslint-disable */
const any_1 = require("../../../../google/protobuf/any");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'ibc.core.client.v1';
const baseMsgCreateClient = { signer: '' };
exports.MsgCreateClient = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== '') {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateClient);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateClient);
        if (object.clientState !== undefined && object.clientState !== null) {
            message.clientState = any_1.Any.fromJSON(object.clientState);
        }
        else {
            message.clientState = undefined;
        }
        if (object.consensusState !== undefined && object.consensusState !== null) {
            message.consensusState = any_1.Any.fromJSON(object.consensusState);
        }
        else {
            message.consensusState = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = String(object.signer);
        }
        else {
            message.signer = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clientState !== undefined &&
            (obj.clientState = message.clientState
                ? any_1.Any.toJSON(message.clientState)
                : undefined);
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState
                ? any_1.Any.toJSON(message.consensusState)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateClient);
        if (object.clientState !== undefined && object.clientState !== null) {
            message.clientState = any_1.Any.fromPartial(object.clientState);
        }
        else {
            message.clientState = undefined;
        }
        if (object.consensusState !== undefined && object.consensusState !== null) {
            message.consensusState = any_1.Any.fromPartial(object.consensusState);
        }
        else {
            message.consensusState = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        else {
            message.signer = '';
        }
        return message;
    },
};
const baseMsgCreateClientResponse = {};
exports.MsgCreateClientResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateClientResponse);
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
        const message = Object.assign({}, baseMsgCreateClientResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateClientResponse);
        return message;
    },
};
const baseMsgUpdateClient = { clientId: '', signer: '' };
exports.MsgUpdateClient = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== '') {
            writer.uint32(10).string(message.clientId);
        }
        if (message.header !== undefined) {
            any_1.Any.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== '') {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateClient);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.header = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpdateClient);
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = String(object.clientId);
        }
        else {
            message.clientId = '';
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = any_1.Any.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = String(object.signer);
        }
        else {
            message.signer = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.header !== undefined &&
            (obj.header = message.header ? any_1.Any.toJSON(message.header) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpdateClient);
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = object.clientId;
        }
        else {
            message.clientId = '';
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = any_1.Any.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        else {
            message.signer = '';
        }
        return message;
    },
};
const baseMsgUpdateClientResponse = {};
exports.MsgUpdateClientResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpdateClientResponse);
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
        const message = Object.assign({}, baseMsgUpdateClientResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpdateClientResponse);
        return message;
    },
};
const baseMsgUpgradeClient = { clientId: '', signer: '' };
exports.MsgUpgradeClient = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== '') {
            writer.uint32(10).string(message.clientId);
        }
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
        }
        if (message.proofUpgradeClient.length !== 0) {
            writer.uint32(34).bytes(message.proofUpgradeClient);
        }
        if (message.proofUpgradeConsensusState.length !== 0) {
            writer.uint32(42).bytes(message.proofUpgradeConsensusState);
        }
        if (message.signer !== '') {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpgradeClient);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proofUpgradeClient = reader.bytes();
                    break;
                case 5:
                    message.proofUpgradeConsensusState = reader.bytes();
                    break;
                case 6:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgUpgradeClient);
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = String(object.clientId);
        }
        else {
            message.clientId = '';
        }
        if (object.clientState !== undefined && object.clientState !== null) {
            message.clientState = any_1.Any.fromJSON(object.clientState);
        }
        else {
            message.clientState = undefined;
        }
        if (object.consensusState !== undefined && object.consensusState !== null) {
            message.consensusState = any_1.Any.fromJSON(object.consensusState);
        }
        else {
            message.consensusState = undefined;
        }
        if (object.proofUpgradeClient !== undefined &&
            object.proofUpgradeClient !== null) {
            message.proofUpgradeClient = bytesFromBase64(object.proofUpgradeClient);
        }
        if (object.proofUpgradeConsensusState !== undefined &&
            object.proofUpgradeConsensusState !== null) {
            message.proofUpgradeConsensusState = bytesFromBase64(object.proofUpgradeConsensusState);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = String(object.signer);
        }
        else {
            message.signer = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.clientState !== undefined &&
            (obj.clientState = message.clientState
                ? any_1.Any.toJSON(message.clientState)
                : undefined);
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState
                ? any_1.Any.toJSON(message.consensusState)
                : undefined);
        message.proofUpgradeClient !== undefined &&
            (obj.proofUpgradeClient = base64FromBytes(message.proofUpgradeClient !== undefined
                ? message.proofUpgradeClient
                : new Uint8Array()));
        message.proofUpgradeConsensusState !== undefined &&
            (obj.proofUpgradeConsensusState = base64FromBytes(message.proofUpgradeConsensusState !== undefined
                ? message.proofUpgradeConsensusState
                : new Uint8Array()));
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgUpgradeClient);
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = object.clientId;
        }
        else {
            message.clientId = '';
        }
        if (object.clientState !== undefined && object.clientState !== null) {
            message.clientState = any_1.Any.fromPartial(object.clientState);
        }
        else {
            message.clientState = undefined;
        }
        if (object.consensusState !== undefined && object.consensusState !== null) {
            message.consensusState = any_1.Any.fromPartial(object.consensusState);
        }
        else {
            message.consensusState = undefined;
        }
        if (object.proofUpgradeClient !== undefined &&
            object.proofUpgradeClient !== null) {
            message.proofUpgradeClient = object.proofUpgradeClient;
        }
        else {
            message.proofUpgradeClient = new Uint8Array();
        }
        if (object.proofUpgradeConsensusState !== undefined &&
            object.proofUpgradeConsensusState !== null) {
            message.proofUpgradeConsensusState = object.proofUpgradeConsensusState;
        }
        else {
            message.proofUpgradeConsensusState = new Uint8Array();
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        else {
            message.signer = '';
        }
        return message;
    },
};
const baseMsgUpgradeClientResponse = {};
exports.MsgUpgradeClientResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgUpgradeClientResponse);
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
        const message = Object.assign({}, baseMsgUpgradeClientResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgUpgradeClientResponse);
        return message;
    },
};
const baseMsgSubmitMisbehaviour = { clientId: '', signer: '' };
exports.MsgSubmitMisbehaviour = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== '') {
            writer.uint32(10).string(message.clientId);
        }
        if (message.misbehaviour !== undefined) {
            any_1.Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== '') {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSubmitMisbehaviour);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.misbehaviour = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgSubmitMisbehaviour);
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = String(object.clientId);
        }
        else {
            message.clientId = '';
        }
        if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
            message.misbehaviour = any_1.Any.fromJSON(object.misbehaviour);
        }
        else {
            message.misbehaviour = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = String(object.signer);
        }
        else {
            message.signer = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.misbehaviour !== undefined &&
            (obj.misbehaviour = message.misbehaviour
                ? any_1.Any.toJSON(message.misbehaviour)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgSubmitMisbehaviour);
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = object.clientId;
        }
        else {
            message.clientId = '';
        }
        if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
            message.misbehaviour = any_1.Any.fromPartial(object.misbehaviour);
        }
        else {
            message.misbehaviour = undefined;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        else {
            message.signer = '';
        }
        return message;
    },
};
const baseMsgSubmitMisbehaviourResponse = {};
exports.MsgSubmitMisbehaviourResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSubmitMisbehaviourResponse);
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
        const message = Object.assign({}, baseMsgSubmitMisbehaviourResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgSubmitMisbehaviourResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateClient(request) {
        const data = exports.MsgCreateClient.encode(request).finish();
        const promise = this.rpc.request('ibc.core.client.v1.Msg', 'CreateClient', data);
        return promise.then((data) => exports.MsgCreateClientResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateClient(request) {
        const data = exports.MsgUpdateClient.encode(request).finish();
        const promise = this.rpc.request('ibc.core.client.v1.Msg', 'UpdateClient', data);
        return promise.then((data) => exports.MsgUpdateClientResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpgradeClient(request) {
        const data = exports.MsgUpgradeClient.encode(request).finish();
        const promise = this.rpc.request('ibc.core.client.v1.Msg', 'UpgradeClient', data);
        return promise.then((data) => exports.MsgUpgradeClientResponse.decode(new minimal_1.default.Reader(data)));
    }
    SubmitMisbehaviour(request) {
        const data = exports.MsgSubmitMisbehaviour.encode(request).finish();
        const promise = this.rpc.request('ibc.core.client.v1.Msg', 'SubmitMisbehaviour', data);
        return promise.then((data) => exports.MsgSubmitMisbehaviourResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(''));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29kZWMvaWJjL2NvcmUvY2xpZW50L3YxL3R4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix5REFBc0Q7QUFDdEQsaUVBQXFDO0FBR3hCLFFBQUEsZUFBZSxHQUFHLG9CQUFvQixDQUFDO0FBcUVwRCxNQUFNLG1CQUFtQixHQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBRXRDLFFBQUEsZUFBZSxHQUFHO0lBQzdCLE1BQU0sQ0FDSixPQUF3QixFQUN4QixTQUFxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFFeEMsSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNyQyxTQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxPQUFPLENBQUMsY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUN4QyxTQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQThCLEVBQUUsTUFBZTtRQUNwRCxNQUFNLE1BQU0sR0FBRyxLQUFLLFlBQVksVUFBVSxD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