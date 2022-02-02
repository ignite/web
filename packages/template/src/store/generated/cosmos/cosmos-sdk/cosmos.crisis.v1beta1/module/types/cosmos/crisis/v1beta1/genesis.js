"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "cosmos.crisis.v1beta1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.constantFee !== undefined) {
            coin_1.Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.constantFee = coin_1.Coin.decode(reader, reader.uint32());
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
        if (object.constantFee !== undefined && object.constantFee !== null) {
            message.constantFee = coin_1.Coin.fromJSON(object.constantFee);
        }
        else {
            message.constantFee = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.constantFee !== undefined &&
            (obj.constantFee = message.constantFee
                ? coin_1.Coin.toJSON(message.constantFee)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        if (object.constantFee !== undefined && object.constantFee !== null) {
            message.constantFee = coin_1.Coin.fromPartial(object.constantFee);
        }
        else {
            message.constantFee = undefined;
        }
        return message;
    },
};
