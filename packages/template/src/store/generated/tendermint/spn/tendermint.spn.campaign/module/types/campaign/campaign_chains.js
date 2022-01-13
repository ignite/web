/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "tendermint.spn.campaign";
const baseCampaignChains = { campaignID: 0, chains: 0 };
export const CampaignChains = {
    encode(message, writer = Writer.create()) {
        if (message.campaignID !== 0) {
            writer.uint32(8).uint64(message.campaignID);
        }
        writer.uint32(18).fork();
        for (const v of message.chains) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCampaignChains };
        message.chains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignID = longToNumber(reader.uint64());
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.chains.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.chains.push(longToNumber(reader.uint64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCampaignChains };
        message.chains = [];
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = Number(object.campaignID);
        }
        else {
            message.campaignID = 0;
        }
        if (object.chains !== undefined && object.chains !== null) {
            for (const e of object.chains) {
                message.chains.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.campaignID !== undefined && (obj.campaignID = message.campaignID);
        if (message.chains) {
            obj.chains = message.chains.map((e) => e);
        }
        else {
            obj.chains = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCampaignChains };
        message.chains = [];
        if (object.campaignID !== undefined && object.campaignID !== null) {
            message.campaignID = object.campaignID;
        }
        else {
            message.campaignID = 0;
        }
        if (object.chains !== undefined && object.chains !== null) {
            for (const e of object.chains) {
                message.chains.push(e);
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
