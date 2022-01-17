/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export const protobufPackage = "tendermint.spn.campaign";
const baseCampaign = {
    campaignID: 0,
    campaignName: "",
    coordinatorID: 0,
    mainnetID: 0,
    mainnetInitialized: false,
    dynamicShares: false,
};
export const Campaign = {
    encode(message, writer = Writer.create()) {
        if (message.campaignID !== 0) {
            writer.uint32(8).uint64(message.campaignID);
        }
        if (message.campaignName !== "") {
            writer.uint32(18).string(message.campaignName);
        }
        if (message.coordinatorID !== 0) {
            writer.uint32(24).uint64(message.coordinatorID);
        }
        if (message.mainnetID !== 0) {
            writer.uint32(32).uint64(message.mainnetID);
        }
        if (message.mainnetInitialized === true) {
            writer.uint32(40).bool(message.mainnetInitialized);
        }
        for (const v of message.totalSupply) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.allocatedShares) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.dynamicShares === true) {
            writer.uint32(64).bool(message.dynamicShares);
        }
        for (const v of message.totalShares) {
            Coin.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCampaign };
        message.totalSupply = [];
        message.allocatedShares = [];
        message.totalShares = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignID = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.campaignName = reader.string();
                    break;
                case 3:
                    message.coordinatorID = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.mainnetID = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.mainnetInitialized = reader.bool();
                    break;
                case 6:
                    message.totalSupply.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.allocatedShares.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.dynamicShares = reader.bool();
                    break;
                case 9:
                    message.totalShares.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCampaign };
        message.totalSupply = [];
        message.allocatedShares = [];
        message.totalShares = [];
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.campaignName !== undefined && object.campaignName !== null) {
            message.campaignName = String(object.campaignName);
        }
        else {
            message.campaignName = "";
        }
        if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
            message.coordinatorID = Number(object.coordinatorID);
        }
        else {
            message.coordinatorID = 0;
        }
        if (object.mainnetID !== undefined && object.mainnetID !== null) {
            message.mainnetID = Number(object.mainnetID);
        }
        else {
            message.mainnetID = 0;
        }
        if (object.mainnetInitialized !== undefined &&
            object.mainnetInitialized !== null) {
            message.mainnetInitialized = Boolean(object.mainnetInitialized);
        }
        else {
            message.mainnetInitialized = false;
        }
        if (object.totalSupply !== undefined && object.totalSupply !== null) {
            for (const e of object.totalSupply) {
                message.totalSupply.push(Coin.fromJSON(e));
            }
        }
        if (object.allocatedShares !== undefined &&
            object.allocatedShares !== null) {
            for (const e of object.allocatedShares) {
                message.allocatedShares.push(Coin.fromJSON(e));
            }
        }
        if (object.dynamicShares !== undefined && object.dynamicShares !== null) {
            message.dynamicShares = Boolean(object.dynamicShares);
        }
        else {
            message.dynamicShares = false;
        }
        if (object.totalShares !== undefined && object.totalShares !== null) {
            for (const e of object.totalShares) {
                message.totalShares.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        message.campaignName !== undefined &&
            (obj.campaignName = message.campaignName);
        message.coordinatorID !== undefined &&
            (obj.coordinatorID = message.coordinatorID);
        message.mainnetID !== undefined && (obj.mainnetID = message.mainnetID);
        message.mainnetInitialized !== undefined &&
            (obj.mainnetInitialized = message.mainnetInitialized);
        if (message.totalSupply) {
            obj.totalSupply = message.totalSupply.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalSupply = [];
        }
        if (message.allocatedShares) {
            obj.allocatedShares = message.allocatedShares.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.allocatedShares = [];
        }
        message.dynamicShares !== undefined &&
            (obj.dynamicShares = message.dynamicShares);
        if (message.totalShares) {
            obj.totalShares = message.totalShares.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.totalShares = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCampaign };
        message.totalSupply = [];
        message.allocatedShares = [];
        message.totalShares = [];
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.campaignName !== undefined && object.campaignName !== null) {
            message.campaignName = object.campaignName;
        }
        else {
            message.campaignName = "";
        }
        if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
            message.coordinatorID = object.coordinatorID;
        }
        else {
            message.coordinatorID = 0;
        }
        if (object.mainnetID !== undefined && object.mainnetID !== null) {
            message.mainnetID = object.mainnetID;
        }
        else {
            message.mainnetID = 0;
        }
        if (object.mainnetInitialized !== undefined &&
            object.mainnetInitialized !== null) {
            message.mainnetInitialized = object.mainnetInitialized;
        }
        else {
            message.mainnetInitialized = false;
        }
        if (object.totalSupply !== undefined && object.totalSupply !== null) {
            for (const e of object.totalSupply) {
                message.totalSupply.push(Coin.fromPartial(e));
            }
        }
        if (object.allocatedShares !== undefined &&
            object.allocatedShares !== null) {
            for (const e of object.allocatedShares) {
                message.allocatedShares.push(Coin.fromPartial(e));
            }
        }
        if (object.dynamicShares !== undefined && object.dynamicShares !== null) {
            message.dynamicShares = object.dynamicShares;
        }
        else {
            message.dynamicShares = false;
        }
        if (object.totalShares !== undefined && object.totalShares !== null) {
            for (const e of object.totalShares) {
                message.totalShares.push(Coin.fromPartial(e));
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
