/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Chain } from "../launch/chain";
import { GenesisAccount } from "../launch/genesis_account";
import { VestingAccount } from "../launch/vesting_account";
import { GenesisValidator } from "../launch/genesis_validator";
import { Request } from "../launch/request";
import { Params } from "../launch/params";
export const protobufPackage = "tendermint.spn.launch";
const baseGenesisState = { chainCounter: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.chainList) {
            Chain.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainCounter !== 0) {
            writer.uint32(16).uint64(message.chainCounter);
        }
        for (const v of message.genesisAccountList) {
            GenesisAccount.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.vestingAccountList) {
            VestingAccount.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.genesisValidatorList) {
            GenesisValidator.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.requestList) {
            Request.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.requestCounterList) {
            RequestCounter.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.chainList = [];
        message.genesisAccountList = [];
        message.vestingAccountList = [];
        message.genesisValidatorList = [];
        message.requestList = [];
        message.requestCounterList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainList.push(Chain.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chainCounter = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.genesisAccountList.push(GenesisAccount.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.vestingAccountList.push(VestingAccount.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.genesisValidatorList.push(GenesisValidator.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.requestList.push(Request.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.requestCounterList.push(RequestCounter.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.params = Params.decode(reader, reader.uint32());
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
        message.chainList = [];
        message.genesisAccountList = [];
        message.vestingAccountList = [];
        message.genesisValidatorList = [];
        message.requestList = [];
        message.requestCounterList = [];
        if (object.chainList !== undefined && object.chainList !== null) {
            for (const e of object.chainList) {
                message.chainList.push(Chain.fromJSON(e));
            }
        }
        if (object.chainCounter !== undefined && object.chainCounter !== null) {
            message.chainCounter = Number(object.chainCounter);
        }
        else {
            message.chainCounter = 0;
        }
        if (object.genesisAccountList !== undefined &&
            object.genesisAccountList !== null) {
            for (const e of object.genesisAccountList) {
                message.genesisAccountList.push(GenesisAccount.fromJSON(e));
            }
        }
        if (object.vestingAccountList !== undefined &&
            object.vestingAccountList !== null) {
            for (const e of object.vestingAccountList) {
                message.vestingAccountList.push(VestingAccount.fromJSON(e));
            }
        }
        if (object.genesisValidatorList !== undefined &&
            object.genesisValidatorList !== null) {
            for (const e of object.genesisValidatorList) {
                message.genesisValidatorList.push(GenesisValidator.fromJSON(e));
            }
        }
        if (object.requestList !== undefined && object.requestList !== null) {
            for (const e of object.requestList) {
                message.requestList.push(Request.fromJSON(e));
            }
        }
        if (object.requestCounterList !== undefined &&
            object.requestCounterList !== null) {
            for (const e of object.requestCounterList) {
                message.requestCounterList.push(RequestCounter.fromJSON(e));
            }
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.chainList) {
            obj.chainList = message.chainList.map((e) => e ? Chain.toJSON(e) : undefined);
        }
        else {
            obj.chainList = [];
        }
        message.chainCounter !== undefined &&
            (obj.chainCounter = message.chainCounter);
        if (message.genesisAccountList) {
            obj.genesisAccountList = message.genesisAccountList.map((e) => e ? GenesisAccount.toJSON(e) : undefined);
        }
        else {
            obj.genesisAccountList = [];
        }
        if (message.vestingAccountList) {
            obj.vestingAccountList = message.vestingAccountList.map((e) => e ? VestingAccount.toJSON(e) : undefined);
        }
        else {
            obj.vestingAccountList = [];
        }
        if (message.genesisValidatorList) {
            obj.genesisValidatorList = message.genesisValidatorList.map((e) => e ? GenesisValidator.toJSON(e) : undefined);
        }
        else {
            obj.genesisValidatorList = [];
        }
        if (message.requestList) {
            obj.requestList = message.requestList.map((e) => e ? Request.toJSON(e) : undefined);
        }
        else {
            obj.requestList = [];
        }
        if (message.requestCounterList) {
            obj.requestCounterList = message.requestCounterList.map((e) => e ? RequestCounter.toJSON(e) : undefined);
        }
        else {
            obj.requestCounterList = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.chainList = [];
        message.genesisAccountList = [];
        message.vestingAccountList = [];
        message.genesisValidatorList = [];
        message.requestList = [];
        message.requestCounterList = [];
        if (object.chainList !== undefined && object.chainList !== null) {
            for (const e of object.chainList) {
                message.chainList.push(Chain.fromPartial(e));
            }
        }
        if (object.chainCounter !== undefined && object.chainCounter !== null) {
            message.chainCounter = object.chainCounter;
        }
        else {
            message.chainCounter = 0;
        }
        if (object.genesisAccountList !== undefined &&
            object.genesisAccountList !== null) {
            for (const e of object.genesisAccountList) {
                message.genesisAccountList.push(GenesisAccount.fromPartial(e));
            }
        }
        if (object.vestingAccountList !== undefined &&
            object.vestingAccountList !== null) {
            for (const e of object.vestingAccountList) {
                message.vestingAccountList.push(VestingAccount.fromPartial(e));
            }
        }
        if (object.genesisValidatorList !== undefined &&
            object.genesisValidatorList !== null) {
            for (const e of object.genesisValidatorList) {
                message.genesisValidatorList.push(GenesisValidator.fromPartial(e));
            }
        }
        if (object.requestList !== undefined && object.requestList !== null) {
            for (const e of object.requestList) {
                message.requestList.push(Request.fromPartial(e));
            }
        }
        if (object.requestCounterList !== undefined &&
            object.requestCounterList !== null) {
            for (const e of object.requestCounterList) {
                message.requestCounterList.push(RequestCounter.fromPartial(e));
            }
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseRequestCounter = { launchID: 0, counter: 0 };
export const RequestCounter = {
    encode(message, writer = Writer.create()) {
        if (message.launchID !== 0) {
            writer.uint32(8).uint64(message.launchID);
        }
        if (message.counter !== 0) {
            writer.uint32(16).uint64(message.counter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRequestCounter };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.launchID = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.counter = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRequestCounter };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = Number(object.launchID);
        }
        else {
            message.launchID = 0;
        }
        if (object.counter !== undefined && object.counter !== null) {
            message.counter = Number(object.counter);
        }
        else {
            message.counter = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.launchID !== undefined && (obj.launchID = message.launchID);
        message.counter !== undefined && (obj.counter = message.counter);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRequestCounter };
        if (object.launchID !== undefined && object.launchID !== null) {
            message.launchID = object.launchID;
        }
        else {
            message.launchID = 0;
        }
        if (object.counter !== undefined && object.counter !== null) {
            message.counter = object.counter;
        }
        else {
            message.counter = 0;
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
