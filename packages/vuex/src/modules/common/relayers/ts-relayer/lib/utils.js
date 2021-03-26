"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.presentPacketData = exports.splitPendingPackets = exports.timeGreater = exports.heightGreater = exports.multiplyCoin = exports.multiplyFees = exports.parseAck = exports.parseAcksFromLogs = exports.parsePacket = exports.parseHeightAttribute = exports.parsePacketsFromLogs = exports.buildClientState = exports.buildConsensusState = exports.secondsFromDateNanos = exports.timestampFromDateNanos = exports.mapRpcPubKeyToProto = exports.may = exports.parseRevisionNumber = exports.subtractBlock = exports.ensureIntHeight = exports.toIntHeight = exports.createBroadcastTxErrorMessage = void 0;
const encoding_1 = require("@cosmjs/encoding");
const long_1 = __importDefault(require("long"));
const proofs_1 = require("../codec/confio/proofs");
const timestamp_1 = require("../codec/google/protobuf/timestamp");
const channel_1 = require("../codec/ibc/core/channel/v1/channel");
const tendermint_1 = require("../codec/ibc/lightclients/tendermint/v1/tendermint");
function createBroadcastTxErrorMessage(result) {
    return `Error when broadcasting tx ${result.transactionHash} at height ${result.height}. Code: ${result.code}; Raw log: ${result.rawLog}`;
}
exports.createBroadcastTxErrorMessage = createBroadcastTxErrorMessage;
function toIntHeight(height) {
    var _a, _b;
    return (_b = (_a = height === null || height === void 0 ? void 0 : height.revisionHeight) === null || _a === void 0 ? void 0 : _a.toNumber()) !== null && _b !== void 0 ? _b : 0;
}
exports.toIntHeight = toIntHeight;
function ensureIntHeight(height) {
    if (typeof height === 'number') {
        return height;
    }
    return toIntHeight(height);
}
exports.ensureIntHeight = ensureIntHeight;
function subtractBlock(height, count = 1) {
    return {
        revisionNumber: height.revisionNumber,
        revisionHeight: height.revisionHeight.subtract(count),
    };
}
exports.subtractBlock = subtractBlock;
const regexRevNum = new RegExp('-([1-9][0-9]*)$');
function parseRevisionNumber(chainId) {
    const match = chainId.match(regexRevNum);
    if (match && match.length >= 2) {
        return long_1.default.fromString(match[1]);
    }
    return new long_1.default(0);
}
exports.parseRevisionNumber = parseRevisionNumber;
// may will run the transform if value is defined, otherwise returns undefined
function may(transform, value) {
    return value === undefined || value === null ? undefined : transform(value);
}
exports.may = may;
function mapRpcPubKeyToProto(pubkey) {
    if (pubkey === undefined) {
        return undefined;
    }
    if (pubkey.algorithm == 'ed25519') {
        return {
            ed25519: pubkey.data,
            secp256k1: undefined,
        };
    }
    else if (pubkey.algorithm == 'secp256k1') {
        return {
            ed25519: undefined,
            secp256k1: pubkey.data,
        };
    }
    else {
        throw new Error(`Unknown validator pubkey type: ${pubkey.algorithm}`);
    }
}
exports.mapRpcPubKeyToProto = mapRpcPubKeyToProto;
function timestampFromDateNanos(date) {
    var _a;
    const nanos = (date.getTime() % 1000) * 1000000 + ((_a = date.nanoseconds) !== null && _a !== void 0 ? _a : 0);
    return timestamp_1.Timestamp.fromPartial({
        seconds: new long_1.default(date.getTime() / 1000),
        nanos,
    });
}
exports.timestampFromDateNanos = timestampFromDateNanos;
function secondsFromDateNanos(date) {
    return Math.floor(date.getTime() / 1000);
}
exports.secondsFromDateNanos = secondsFromDateNanos;
function buildConsensusState(header) {
    return tendermint_1.ConsensusState.fromPartial({
        timestamp: timestampFromDateNanos(header.time),
        root: {
            hash: header.appHash,
        },
        nextValidatorsHash: header.nextValidatorsHash,
    });
}
exports.buildConsensusState = buildConsensusState;
// Note: we hardcode a number of assumptions, like trust level, clock drift, and assume revisionNumber is 1
function buildClientState(chainId, unbondingPeriodSec, trustPeriodSec, height) {
    // Copied here until https://github.com/confio/ics23/issues/36 is resolved
    // https://github.com/confio/ics23/blob/master/js/src/proofs.ts#L11-L26
    const iavlSpec = {
        leafSpec: {
            prefix: Uint8Array.from([0]),
            hash: proofs_1.HashOp.SHA256,
            prehashValue: proofs_1.HashOp.SHA256,
            prehashKey: proofs_1.HashOp.NO_HASH,
            length: proofs_1.LengthOp.VAR_PROTO,
        },
        innerSpec: {
            childOrder: [0, 1],
            minPrefixLength: 4,
            maxPrefixLength: 12,
            childSize: 33,
            hash: proofs_1.HashOp.SHA256,
        },
    };
    const tendermintSpec = {
        leafSpec: {
            prefix: Uint8Array.from([0]),
            hash: proofs_1.HashOp.SHA256,
            prehashValue: proofs_1.HashOp.SHA256,
            prehashKey: proofs_1.HashOp.NO_HASH,
            length: proofs_1.LengthOp.VAR_PROTO,
        },
        innerSpec: {
            childOrder: [0, 1],
            minPrefixLength: 1,
            maxPrefixLength: 1,
            childSize: 32,
            hash: proofs_1.HashOp.SHA256,
        },
    };
    return tendermint_1.ClientState.fromPartial({
        chainId,
        trustLevel: {
            numerator: long_1.default.fromInt(1),
            denominator: long_1.default.fromInt(3),
        },
        unbondingPeriod: {
            seconds: new long_1.default(unbondingPeriodSec),
        },
        trustingPeriod: {
            seconds: new long_1.default(trustPeriodSec),
        },
        maxClockDrift: {
            seconds: new long_1.default(20),
        },
        latestHeight: height,
        proofSpecs: [iavlSpec, tendermintSpec],
        upgradePath: ['upgrade', 'upgradedIBCState'],
        allowUpdateAfterExpiry: false,
        allowUpdateAfterMisbehaviour: false,
    });
}
exports.buildClientState = buildClientState;
function parsePacketsFromLogs(logs) {
    // grab all send_packet events from the logs
    const allEvents = logs.map((log) => log.events.filter(({ type }) => type === 'send_packet'));
    const flatEvents = [].concat(...allEvents);
    return flatEvents.map(parsePacket);
}
exports.parsePacketsFromLogs = parsePacketsFromLogs;
function parseHeightAttribute(attribute) {
    var _a;
    const [timeoutRevisionNumber, timeoutRevisionHeight] = (_a = attribute === null || attribute === void 0 ? void 0 : attribute.split('-')) !== null && _a !== void 0 ? _a : [];
    if (!timeoutRevisionHeight || !timeoutRevisionNumber) {
        return undefined;
    }
    const revisionNumber = long_1.default.fromString(timeoutRevisionNumber);
    const revisionHeight = long_1.default.fromString(timeoutRevisionHeight);
    // note: 0 revisionNumber is allowed. If there is bad data, '' or '0-0', we will get 0 for the height
    if (revisionHeight.isZero()) {
        return undefined;
    }
    return { revisionHeight, revisionNumber };
}
exports.parseHeightAttribute = parseHeightAttribute;
function parsePacket({ type, attributes }) {
    if (type !== 'send_packet') {
        throw new Error(`Cannot parse event of type ${type}`);
    }
    const attributesObj = attributes.reduce((acc, { key, value }) => (Object.assign(Object.assign({}, acc), { [key]: value })), {});
    return channel_1.Packet.fromPartial({
        sequence: may(long_1.default.fromString, attributesObj.packet_sequence),
        /** identifies the port on the sending chain. */
        sourcePort: attributesObj.packet_src_port,
        /** identifies the channel end on the sending chain. */
        sourceChannel: attributesObj.packet_src_channel,
        /** identifies the port on the receiving chain. */
        destinationPort: attributesObj.packet_dst_port,
        /** identifies the channel end on the receiving chain. */
        destinationChannel: attributesObj.packet_dst_channel,
        /** actual opaque bytes transferred directly to the application module */
        data: attributesObj.packet_data
            ? encoding_1.toUtf8(attributesObj.packet_data)
            : undefined,
        /** block height after which the packet times out */
        timeoutHeight: parseHeightAttribute(attributesObj.packet_timeout_height),
        /** block timestamp (in nanoseconds) after which the packet times out */
        timeoutTimestamp: may(long_1.default.fromString, attributesObj.packet_timeout_timestamp),
    });
}
exports.parsePacket = parsePacket;
function parseAcksFromLogs(logs) {
    // grab all send_packet events from the logs
    const allEvents = logs.map((log) => log.events.filter(({ type }) => type === 'write_acknowledgement'));
    const flatEvents = [].concat(...allEvents);
    return flatEvents.map(parseAck);
}
exports.parseAcksFromLogs = parseAcksFromLogs;
function parseAck({ type, attributes }) {
    var _a, _b;
    if (type !== 'write_acknowledgement') {
        throw new Error(`Cannot parse event of type ${type}`);
    }
    const attributesObj = attributes.reduce((acc, { key, value }) => (Object.assign(Object.assign({}, acc), { [key]: value })), {});
    const originalPacket = channel_1.Packet.fromPartial({
        sequence: may(long_1.default.fromString, attributesObj.packet_sequence),
        /** identifies the port on the sending chain. */
        sourcePort: attributesObj.packet_src_port,
        /** identifies the channel end on the sending chain. */
        sourceChannel: attributesObj.packet_src_channel,
        /** identifies the port on the receiving chain. */
        destinationPort: attributesObj.packet_dst_port,
        /** identifies the channel end on the receiving chain. */
        destinationChannel: attributesObj.packet_dst_channel,
        /** actual opaque bytes transferred directly to the application module */
        data: encoding_1.toUtf8((_a = attributesObj.packet_data) !== null && _a !== void 0 ? _a : ''),
        /** block height after which the packet times out */
        timeoutHeight: parseHeightAttribute(attributesObj.packet_timeout_height),
        /** block timestamp (in nanoseconds) after which the packet times out */
        timeoutTimestamp: may(long_1.default.fromString, attributesObj.packet_timeout_timestamp),
    });
    const acknowledgement = encoding_1.toUtf8((_b = attributesObj.packet_ack) !== null && _b !== void 0 ? _b : '');
    return {
        acknowledgement,
        originalPacket,
    };
}
exports.parseAck = parseAck;
function multiplyFees({ gas, amount }, mult) {
    const multGas = Number.parseInt(gas, 10) * mult;
    const multAmount = amount.map((c) => multiplyCoin(c, mult));
    const result = {
        gas: multGas.toString(),
        amount: multAmount,
    };
    return result;
}
exports.multiplyFees = multiplyFees;
function multiplyCoin({ amount, denom }, mult) {
    const multAmount = Number.parseInt(amount, 10) * mult;
    return { amount: multAmount.toString(), denom };
}
exports.multiplyCoin = multiplyCoin;
// return true if a > b, or a undefined
function heightGreater(a, b) {
    if (a === undefined) {
        return true;
    }
    // comparing longs made some weird issues (maybe signed/unsigned)?
    // convert to numbers to compare safely
    const [numA, heightA, numB, heightB] = [
        a.revisionNumber.toNumber(),
        a.revisionHeight.toNumber(),
        b.revisionNumber.toNumber(),
        b.revisionHeight.toNumber(),
    ];
    const valid = numA > numB || (numA == numB && heightA > heightB);
    return valid;
}
exports.heightGreater = heightGreater;
// return true if a > b, or a 0
// note a is nanoseconds, while b is seconds
function timeGreater(a, b) {
    if (a === undefined || a.isZero()) {
        return true;
    }
    const valid = a.toNumber() > b * 1000000000;
    return valid;
}
exports.timeGreater = timeGreater;
// take height and time from receiving chain to see which packets have timed out
// return [toSubmit, toTimeout].
// you can advance height, time a block or two into the future if you wish a margin of error
function splitPendingPackets(currentHeight, currentTime, // in seconds
packets) {
    return packets.reduce((acc, packet) => {
        const validPacket = heightGreater(packet.packet.timeoutHeight, currentHeight) &&
            timeGreater(packet.packet.timeoutTimestamp, currentTime);
        return validPacket
            ? Object.assign(Object.assign({}, acc), { toSubmit: [...acc.toSubmit, packet] }) : Object.assign(Object.assign({}, acc), { toTimeout: [...acc.toTimeout, packet] });
    }, {
        toSubmit: [],
        toTimeout: [],
    });
}
exports.splitPendingPackets = splitPendingPackets;
function presentPacketData(data) {
    try {
        return JSON.parse(encoding_1.fromUtf8(data));
    }
    catch (_a) {
        return { hex: encoding_1.toHex(data) };
    }
}
exports.presentPacketData = presentPacketData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtDQUEyRDtBQVEzRCxnREFBd0I7QUFFeEIsbURBQTBEO0FBQzFELGtFQUErRDtBQUMvRCxrRUFBOEQ7QUFFOUQsbUZBRzREO0FBVTVELFNBQWdCLDZCQUE2QixDQUMzQyxNQUEwQjtJQUUxQixPQUFPLDhCQUE4QixNQUFNLENBQUMsZUFBZSxjQUFjLE1BQU0sQ0FBQyxNQUFNLFdBQVcsTUFBTSxDQUFDLElBQUksY0FBYyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDNUksQ0FBQztBQUpELHNFQUlDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLE1BQWU7O0lBQ3pDLG1CQUFPLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxjQUFjLDBDQUFFLFFBQVEscUNBQU0sQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxNQUF1QjtJQUNyRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUM5QixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUxELDBDQUtDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLE1BQWMsRUFBRSxLQUFLLEdBQUcsQ0FBQztJQUNyRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLE1BQU0sQ0FBQyxjQUFjO1FBQ3JDLGNBQWMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7S0FDdEQsQ0FBQztBQUNKLENBQUM7QUFMRCxzQ0FLQztBQUVELE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFbEQsU0FBZ0IsbUJBQW1CLENBQUMsT0FBZTtJQUNqRCxNQUFNLEtBQUssR0FBRyxPQUFP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