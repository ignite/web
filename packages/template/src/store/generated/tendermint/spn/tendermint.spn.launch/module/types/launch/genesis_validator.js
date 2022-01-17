/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export const protobufPackage = "tendermint.spn.launch";
const baseGenesisValidator = { launchID: 0, address: "", peer: "" };
export const GenesisValidator = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.genTx.length !== 0) {
            writer.uint32(26).bytes(message.genTx);
        }
        if (message.consPubKey.length !== 0) {
            writer.uint32(34).bytes(message.consPubKey);
        }
        if (message.selfDelegation !== undefined) {
            Coin.encode(message.selfDelegation, writer.uint32(42).fork()).ldelim();
        }
        if (message.peer !== "") {
            writer.uint32(50).string(message.peer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisValidator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.genTx = reader.bytes();
                    break;
                case 4:
                    message.consPubKey = reader.bytes();
                    break;
                case 5:
                    message.selfDelegation = Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.peer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisValidator };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.genTx !== undefined && object.genTx !== null) {
            message.genTx = bytesFromBase64(object.genTx);
        }
        if (object.consPubKey !== undefined && object.consPubKey !== null) {
            message.consPubKey = bytesFromBase64(object.consPubKey);
        }
        if (object.selfDelegation !== undefined && object.selfDelegation !== null) {
            message.selfDelegation = Coin.fromJSON(object.selfDelegation);
        }
        else {
            message.selfDelegation = undefined;
        }
        if (object.peer !== undefined && object.peer !== null) {
            message.peer = String(object.peer);
        }
        else {
            message.peer = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.address !== undefined && (obj.address = message.address);
        message.genTx !== undefined &&
            (obj.genTx = base64FromBytes(message.genTx !== undefined ? message.genTx : new Uint8Array()));
        message.consPubKey !== undefined &&
            (obj.consPubKey = base64FromBytes(message.consPubKey !== undefined ? message.consPubKey : new Uint8Array()));
        message.selfDelegation !== undefined &&
            (obj.selfDelegation = message.selfDelegation
                ? Coin.toJSON(message.selfDelegation)
                : undefined);
        message.peer !== undefined && (obj.peer = message.peer);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisValidator };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.genTx !== undefined && object.genTx !== null) {
            message.genTx = object.genTx;
        }
        else {
            message.genTx = new Uint8Array();
        }
        if (object.consPubKey !== undefined && object.consPubKey !== null) {
            message.consPubKey = object.consPubKey;
        }
        else {
            message.consPubKey = new Uint8Array();
        }
        if (object.selfDelegation !== undefined && object.selfDelegation !== null) {
            message.selfDelegation = Coin.fromPartial(object.selfDelegation);
        }
        else {
            message.selfDelegation = undefined;
        }
        if (object.peer !== undefined && object.peer !== null) {
            message.peer = object.peer;
        }
        else {
            message.peer = "";
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
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
