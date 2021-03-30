"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const connection_1 = require("../../../../ibc/core/connection/v1/connection");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'ibc.core.connection.v1';
const baseGenesisState = { nextConnectionSequence: long_1.default.UZERO };
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientConnectionPaths) {
            connection_1.ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (!message.nextConnectionSequence.isZero()) {
            writer.uint32(24).uint64(message.nextConnectionSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.connections = [];
        message.clientConnectionPaths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientConnectionPaths.push(connection_1.ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nextConnectionSequence = reader.uint64();
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
        message.connections = [];
        message.clientConnectionPaths = [];
        if (object.connections !== undefined && object.connections !== null) {
            for (const e of object.connections) {
                message.connections.push(connection_1.IdentifiedConnection.fromJSON(e));
            }
        }
        if (object.clientConnectionPaths !== undefined &&
            object.clientConnectionPaths !== null) {
            for (const e of object.clientConnectionPaths) {
                message.clientConnectionPaths.push(connection_1.ConnectionPaths.fromJSON(e));
            }
        }
        if (object.nextConnectionSequence !== undefined &&
            object.nextConnectionSequence !== null) {
            message.nextConnectionSequence = long_1.default.fromString(object.nextConnectionSequence);
        }
        else {
            message.nextConnectionSequence = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map((e) => e ? connection_1.IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.clientConnectionPaths) {
            obj.clientConnectionPaths = message.clientConnectionPaths.map((e) => e ? connection_1.ConnectionPaths.toJSON(e) : undefined);
        }
        else {
            obj.clientConnectionPaths = [];
        }
        message.nextConnectionSequence !== undefined &&
            (obj.nextConnectionSequence = (message.nextConnectionSequence || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGenesisState);
        message.connections = [];
        message.clientConnectionPaths = [];
        if (object.connections !== undefined && object.connections !== null) {
            for (const e of object.connections) {
                message.connections.push(connection_1.IdentifiedConnection.fromPartial(e));
            }
        }
        if (object.clientConnectionPaths !== undefined &&
            object.clientConnectionPaths !== null) {
            for (const e of object.clientConnectionPaths) {
                message.clientConnectionPaths.push(connection_1.ConnectionPaths.fromPartial(e));
            }
        }
        if (object.nextConnectionSequence !== undefined &&
            object.nextConnectionSequence !== null) {
            message.nextConnectionSequence = object.nextConnectionSequence;
        }
        else {
            message.nextConnectionSequence = long_1.default.UZERO;
        }
        return message;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXNpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb2RlYy9pYmMvY29yZS9jb25uZWN0aW9uL3YxL2dlbmVzaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGdEQUF3QjtBQUN4Qiw4RUFHdUQ7QUFDdkQsaUVBQXFDO0FBRXhCLFFBQUEsZUFBZSxHQUFHLHdCQUF3QixDQUFDO0FBVXhELE1BQU0sZ0JBQWdCLEdBQVcsRUFBRSxzQkFBc0IsRUFBRSxjQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFM0QsUUFBQSxZQUFZLEdBQUc7SUFDMUIsTUFBTSxDQUNKLE9BQXFCLEVBQ3JCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDbkMsaUNBQW9CLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEU7UUFDRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTtZQUM3Qyw0QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIs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