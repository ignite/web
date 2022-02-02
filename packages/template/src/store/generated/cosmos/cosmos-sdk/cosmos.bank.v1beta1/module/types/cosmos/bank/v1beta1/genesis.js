"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const bank_1 = require("../../../cosmos/bank/v1beta1/bank");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "cosmos.bank.v1beta1";
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.params !== undefined) {
            bank_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            exports.Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denomMetadata) {
            bank_1.Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.balances = [];
        message.supply = [];
        message.denomMetadata = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = bank_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balances.push(exports.Balance.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.supply.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.denomMetadata.push(bank_1.Metadata.decode(reader, reader.uint32()));
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
        message.balances = [];
        message.supply = [];
        message.denomMetadata = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = bank_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.balances !== undefined && object.balances !== null) {
            for (const e of object.balances) {
                message.balances.push(exports.Balance.fromJSON(e));
            }
        }
        if (object.supply !== undefined && object.supply !== null) {
            for (const e of object.supply) {
                message.supply.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.denomMetadata !== undefined && object.denomMetadata !== null) {
            for (const e of object.denomMetadata) {
                message.denomMetadata.push(bank_1.Metadata.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? bank_1.Params.toJSON(message.params) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? exports.Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.supply = [];
        }
        if (message.denomMetadata) {
            obj.denomMetadata = message.denomMetadata.map((e) => e ? bank_1.Metadata.toJSON(e) : undefined);
        }
        else {
            obj.denomMetadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.balances = [];
        message.supply = [];
        message.denomMetadata = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = bank_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.balances !== undefined && object.balances !== null) {
            for (const e of object.balances) {
                message.balances.push(exports.Balance.fromPartial(e));
            }
        }
        if (object.supply !== undefined && object.supply !== null) {
            for (const e of object.supply) {
                message.supply.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.denomMetadata !== undefined && object.denomMetadata !== null) {
            for (const e of object.denomMetadata) {
                message.denomMetadata.push(bank_1.Metadata.fromPartial(e));
            }
        }
        return message;
    },
};
const baseBalance = { address: "" };
exports.Balance = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBalance };
        message.coins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBalance };
        message.coins = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBalance };
        message.coins = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
