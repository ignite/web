"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifiedGenesisMetadata = exports.GenesisMetadata = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const client_1 = require("../../../../ibc/core/client/v1/client");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'ibc.core.client.v1';
const baseGenesisState = {
    createLocalhost: false,
    nextClientSequence: long_1.default.UZERO,
};
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.clients) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientsConsensus) {
            client_1.ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.clientsMetadata) {
            exports.IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.createLocalhost === true) {
            writer.uint32(40).bool(message.createLocalhost);
        }
        if (!message.nextClientSequence.isZero()) {
            writer.uint32(48).uint64(message.nextClientSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.clients = [];
        message.clientsConsensus = [];
        message.clientsMetadata = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clients.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientsConsensus.push(client_1.ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clientsMetadata.push(exports.IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = client_1.Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.createLocalhost = reader.bool();
                    break;
                case 6:
                    message.nextClientSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisState);
        message.clients = [];
        message.clientsConsensus = [];
        message.clientsMetadata = [];
        if (object.clients !== undefined && object.clients !== null) {
            for (const e of object.clients) {
                message.clients.push(client_1.IdentifiedClientState.fromJSON(e));
            }
        }
        if (object.clientsConsensus !== undefined &&
            object.clientsConsensus !== null) {
            for (const e of object.clientsConsensus) {
                message.clientsConsensus.push(client_1.ClientConsensusStates.fromJSON(e));
            }
        }
        if (object.clientsMetadata !== undefined &&
            object.clientsMetadata !== null) {
            for (const e of object.clientsMetadata) {
                message.clientsMetadata.push(exports.IdentifiedGenesisMetadata.fromJSON(e));
            }
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.createLocalhost !== undefined &&
            object.createLocalhost !== null) {
            message.createLocalhost = Boolean(object.createLocalhost);
        }
        else {
            message.createLocalhost = false;
        }
        if (object.nextClientSequence !== undefined &&
            object.nextClientSequence !== null) {
            message.nextClientSequence = long_1.default.fromString(object.nextClientSequence);
        }
        else {
            message.nextClientSequence = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map((e) => e ? client_1.IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clientsConsensus) {
            obj.clientsConsensus = message.clientsConsensus.map((e) => e ? client_1.ClientConsensusStates.toJSON(e) : undefined);
        }
        else {
            obj.clientsConsensus = [];
        }
        if (message.clientsMetadata) {
            obj.clientsMetadata = message.clientsMetadata.map((e) => e ? exports.IdentifiedGenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.clientsMetadata = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        message.createLocalhost !== undefined &&
            (obj.createLocalhost = message.createLocalhost);
        message.nextClientSequence !== undefined &&
            (obj.nextClientSequence = (message.nextClientSequence || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.clients = [];
        message.clientsConsensus = [];
        message.clientsMetadata = [];
        if (object.clients !== undefined && object.clients !== null) {
            for (const e of object.clients) {
                message.clients.push(client_1.IdentifiedClientState.fromPartial(e));
            }
        }
        if (object.clientsConsensus !== undefined &&
            object.clientsConsensus !== null) {
            for (const e of object.clientsConsensus) {
                message.clientsConsensus.push(client_1.ClientConsensusStates.fromPartial(e));
            }
        }
        if (object.clientsMetadata !== undefined &&
            object.clientsMetadata !== null) {
            for (const e of object.clientsMetadata) {
                message.clientsMetadata.push(exports.IdentifiedGenesisMetadata.fromPartial(e));
            }
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.createLocalhost !== undefined &&
            object.createLocalhost !== null) {
            message.createLocalhost = object.createLocalhost;
        }
        else {
            message.createLocalhost = false;
        }
        if (object.nextClientSequence !== undefined &&
            object.nextClientSequence !== null) {
            message.nextClientSequence = object.nextClientSequence;
        }
        else {
            message.nextClientSequence = long_1.default.UZERO;
        }
        return message;
    },
};
const baseGenesisMetadata = {};
exports.GenesisMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenesisMetadata);
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisMetadata);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        return message;
    },
};
const baseIdentifiedGenesisMetadata = { clientId: '' };
exports.IdentifiedGenesisMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== '') {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.clientMetadata) {
            exports.GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseIdentifiedGenesisMetadata);
        message.clientMetadata = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientMetadata.push(exports.GenesisMetadata.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseIdentifiedGenesisMetadata);
        message.clientMetadata = [];
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = String(object.clientId);
        }
        else {
            message.clientId = '';
        }
        if (object.clientMetadata !== undefined && object.clientMetadata !== null) {
            for (const e of object.clientMetadata) {
                message.clientMetadata.push(exports.GenesisMetadata.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.clientMetadata) {
            obj.clientMetadata = message.clientMetadata.map((e) => e ? exports.GenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.clientMetadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseIdentifiedGenesisMetadata);
        message.clientMetadata = [];
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = object.clientId;
        }
        else {
            message.clientId = '';
        }
        if (object.clientMetadata !== undefined && object.clientMetadata !== null) {
            for (const e of object.clientMetadata) {
                message.clientMetadata.push(exports.GenesisMetadata.fromPartial(e));
            }
        }
        return message;
    },
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXNpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb2RlYy9pYmMvY29yZS9jbGllbnQvdjEvZ2VuZXNpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0VBSStDO0FBQy9DLGdEQUF3QjtBQUN4QixpRUFBcUM7QUFFeEIsUUFBQSxlQUFlLEdBQUcsb0JBQW9CLENBQUM7QUFrQ3BELE1BQU0sZ0JBQWdCLEdBQVc7SUFDL0IsZUFBZSxFQUFFLEtBQUs7SUFDdEIsa0JBQWtCLEVBQUUsY0FBSSxDQUFDLEtBQUs7Q0FDL0IsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFHO0lBQzFCLE1BQU0sQ0FDSixPQUFxQixFQUNyQixTQUFxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFFeEMsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQy9CLDhCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEMsOEJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDckU7UUFDRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDdkMsaUNBQXlCLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDekU7UUFDRCxJQUFJ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