"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const Long = require("long");
const minimal_1 = require("protobufjs/minimal");
const gov_1 = require("../../../cosmos/gov/v1beta1/gov");
exports.protobufPackage = "cosmos.gov.v1beta1";
const baseGenesisState = { startingProposalId: 0 };
exports.GenesisState = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.startingProposalId !== 0) {
            writer.uint32(8).uint64(message.startingProposalId);
        }
        for (const v of message.deposits) {
            gov_1.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            gov_1.Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            gov_1.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            gov_1.DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
        }
        if (message.votingParams !== undefined) {
            gov_1.VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            gov_1.TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.deposits = [];
        message.votes = [];
        message.proposals = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startingProposalId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.depositParams = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.votingParams = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tallyParams = gov_1.TallyParams.decode(reader, reader.uint32());
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
        message.deposits = [];
        message.votes = [];
        message.proposals = [];
        if (object.startingProposalId !== undefined &&
            object.startingProposalId !== null) {
            message.startingProposalId = Number(object.startingProposalId);
        }
        else {
            message.startingProposalId = 0;
        }
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(gov_1.Deposit.fromJSON(e));
            }
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(gov_1.Vote.fromJSON(e));
            }
        }
        if (object.proposals !== undefined && object.proposals !== null) {
            for (const e of object.proposals) {
                message.proposals.push(gov_1.Proposal.fromJSON(e));
            }
        }
        if (object.depositParams !== undefined && object.depositParams !== null) {
            message.depositParams = gov_1.DepositParams.fromJSON(object.depositParams);
        }
        else {
            message.depositParams = undefined;
        }
        if (object.votingParams !== undefined && object.votingParams !== null) {
            message.votingParams = gov_1.VotingParams.fromJSON(object.votingParams);
        }
        else {
            message.votingParams = undefined;
        }
        if (object.tallyParams !== undefined && object.tallyParams !== null) {
            message.tallyParams = gov_1.TallyParams.fromJSON(object.tallyParams);
        }
        else {
            message.tallyParams = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startingProposalId !== undefined &&
            (obj.startingProposalId = message.startingProposalId);
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => e ? gov_1.Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map((e) => (e ? gov_1.Vote.toJSON(e) : undefined));
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? gov_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.depositParams !== undefined &&
            (obj.depositParams = message.depositParams
                ? gov_1.DepositParams.toJSON(message.depositParams)
                : undefined);
        message.votingParams !== undefined &&
            (obj.votingParams = message.votingParams
                ? gov_1.VotingParams.toJSON(message.votingParams)
                : undefined);
        message.tallyParams !== undefined &&
            (obj.tallyParams = message.tallyParams
                ? gov_1.TallyParams.toJSON(message.tallyParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.deposits = [];
        message.votes = [];
        message.proposals = [];
        if (object.startingProposalId !== undefined &&
            object.startingProposalId !== null) {
            message.startingProposalId = object.startingProposalId;
        }
        else {
            message.startingProposalId = 0;
        }
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(gov_1.Deposit.fromPartial(e));
            }
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(gov_1.Vote.fromPartial(e));
            }
        }
        if (object.proposals !== undefined && object.proposals !== null) {
            for (const e of object.proposals) {
                message.proposals.push(gov_1.Proposal.fromPartial(e));
            }
        }
        if (object.depositParams !== undefined && object.depositParams !== null) {
            message.depositParams = gov_1.DepositParams.fromPartial(object.depositParams);
        }
        else {
            message.depositParams = undefined;
        }
        if (object.votingParams !== undefined && object.votingParams !== null) {
            message.votingParams = gov_1.VotingParams.fromPartial(object.votingParams);
        }
        else {
            message.votingParams = undefined;
        }
        if (object.tallyParams !== undefined && object.tallyParams !== null) {
            message.tallyParams = gov_1.TallyParams.fromPartial(object.tallyParams);
        }
        else {
            message.tallyParams = undefined;
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
if (minimal_1.util.Long !== Long) {
    minimal_1.util.Long = Long;
    minimal_1.configure();
}
