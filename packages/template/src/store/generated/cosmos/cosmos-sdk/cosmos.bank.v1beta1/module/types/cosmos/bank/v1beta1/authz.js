"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "cosmos.bank.v1beta1";
const baseSendAuthorization = {};
exports.SendAuthorization = {
    encode(message, writer = minimal_1.Writer.create()) {
        for (const v of message.spendLimit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSendAuthorization };
        message.spendLimit = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSendAuthorization };
        message.spendLimit = [];
        if (object.spendLimit !== undefined && object.spendLimit !== null) {
            for (const e of object.spendLimit) {
                message.spendLimit.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spendLimit = message.spendLimit.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.spendLimit = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSendAuthorization };
        message.spendLimit = [];
        if (object.spendLimit !== undefined && object.spendLimit !== null) {
            for (const e of object.spendLimit) {
                message.spendLimit.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
