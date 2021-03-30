"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = exports.LastCommitInfo = exports.BlockParams = exports.ConsensusParams = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseEndBlock = exports.ResponseDeliverTx = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseSetOption = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestEndBlock = exports.RequestDeliverTx = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestQuery = exports.RequestInitChain = exports.RequestSetOption = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.responseApplySnapshotChunk_ResultToJSON = exports.responseApplySnapshotChunk_ResultFromJSON = exports.ResponseApplySnapshotChunk_Result = exports.responseOfferSnapshot_ResultToJSON = exports.responseOfferSnapshot_ResultFromJSON = exports.ResponseOfferSnapshot_Result = exports.evidenceTypeToJSON = exports.evidenceTypeFromJSON = exports.EvidenceType = exports.checkTxTypeToJSON = exports.checkTxTypeFromJSON = exports.CheckTxType = exports.protobufPackage = void 0;
exports.ABCIApplicationClientImpl = exports.Snapshot = exports.Evidence = exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.EventAttribute = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const timestamp_1 = require("../../google/protobuf/timestamp");
const types_1 = require("../../tendermint/types/types");
const proof_1 = require("../../tendermint/crypto/proof");
const params_1 = require("../../tendermint/types/params");
const keys_1 = require("../../tendermint/crypto/keys");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'tendermint.abci';
var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType = exports.CheckTxType || (exports.CheckTxType = {}));
function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'NEW':
            return CheckTxType.NEW;
        case 1:
        case 'RECHECK':
            return CheckTxType.RECHECK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return 'NEW';
        case CheckTxType.RECHECK:
            return 'RECHECK';
        default:
            return 'UNKNOWN';
    }
}
exports.checkTxTypeToJSON = checkTxTypeToJSON;
var EvidenceType;
(function (EvidenceType) {
    EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
    EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    EvidenceType[EvidenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EvidenceType = exports.EvidenceType || (exports.EvidenceType = {}));
function evidenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'UNKNOWN':
            return EvidenceType.UNKNOWN;
        case 1:
        case 'DUPLICATE_VOTE':
            return EvidenceType.DUPLICATE_VOTE;
        case 2:
        case 'LIGHT_CLIENT_ATTACK':
            return EvidenceType.LIGHT_CLIENT_ATTACK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return EvidenceType.UNRECOGNIZED;
    }
}
exports.evidenceTypeFromJSON = evidenceTypeFromJSON;
function evidenceTypeToJSON(object) {
    switch (object) {
        case EvidenceType.UNKNOWN:
            return 'UNKNOWN';
        case EvidenceType.DUPLICATE_VOTE:
            return 'DUPLICATE_VOTE';
        case EvidenceType.LIGHT_CLIENT_ATTACK:
            return 'LIGHT_CLIENT_ATTACK';
        default:
            return 'UNKNOWN';
    }
}
exports.evidenceTypeToJSON = evidenceTypeToJSON;
var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result = exports.ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = {}));
function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case 'UNKNOWN':
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case 'ACCEPT':
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case 'ABORT':
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case 'REJECT':
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case 'REJECT_FORMAT':
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case 'REJECT_SENDER':
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return 'UNKNOWN';
        case ResponseOfferSnapshot_Result.ACCEPT:
            return 'ACCEPT';
        case ResponseOfferSnapshot_Result.ABORT:
            return 'ABORT';
        case ResponseOfferSnapshot_Result.REJECT:
            return 'REJECT';
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return 'REJECT_FORMAT';
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return 'REJECT_SENDER';
        default:
            return 'UNKNOWN';
    }
}
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result = exports.ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = {}));
function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case 'UNKNOWN':
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case 'ACCEPT':
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case 'ABORT':
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case 'RETRY':
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case 'RETRY_SNAPSHOT':
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case 'REJECT_SNAPSHOT':
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return 'UNKNOWN';
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return 'ACCEPT';
        case ResponseApplySnapshotChunk_Result.ABORT:
            return 'ABORT';
        case ResponseApplySnapshotChunk_Result.RETRY:
            return 'RETRY';
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return 'RETRY_SNAPSHOT';
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return 'REJECT_SNAPSHOT';
        default:
            return 'UNKNOWN';
    }
}
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
const baseRequest = {};
exports.Request = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.setOption !== undefined) {
            exports.RequestSetOption.encode(message.setOption, writer.uint32(34).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            exports.RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            exports.RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            exports.RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.setOption = exports.RequestSetOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.initChain = exports.RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.beginBlock = exports.RequestBeginBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.checkTx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deliverTx = exports.RequestDeliverTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.endBlock = exports.RequestEndBlock.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.listSnapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offerSnapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.applySnapshotChunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequest);
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.RequestEcho.fromJSON(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.RequestFlush.fromJSON(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.RequestInfo.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.setOption !== undefined && object.setOption !== null) {
            message.setOption = exports.RequestSetOption.fromJSON(object.setOption);
        }
        else {
            message.setOption = undefined;
        }
        if (object.initChain !== undefined && object.initChain !== null) {
            message.initChain = exports.RequestInitChain.fromJSON(object.initChain);
        }
        else {
            message.initChain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.RequestQuery.fromJSON(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.beginBlock !== undefined && object.beginBlock !== null) {
            message.beginBlock = exports.RequestBeginBlock.fromJSON(object.beginBlock);
        }
        else {
            message.beginBlock = undefined;
        }
        if (object.checkTx !== undefined && object.checkTx !== null) {
            message.checkTx = exports.RequestCheckTx.fromJSON(object.checkTx);
        }
        else {
            message.checkTx = undefined;
        }
        if (object.deliverTx !== undefined && object.deliverTx !== null) {
            message.deliverTx = exports.RequestDeliverTx.fromJSON(object.deliverTx);
        }
        else {
            message.deliverTx = undefined;
        }
        if (object.endBlock !== undefined && object.endBlock !== null) {
            message.endBlock = exports.RequestEndBlock.fromJSON(object.endBlock);
        }
        else {
            message.endBlock = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.RequestCommit.fromJSON(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
            message.listSnapshots = exports.RequestListSnapshots.fromJSON(object.listSnapshots);
        }
        else {
            message.listSnapshots = undefined;
        }
        if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
            message.offerSnapshot = exports.RequestOfferSnapshot.fromJSON(object.offerSnapshot);
        }
        else {
            message.offerSnapshot = undefined;
        }
        if (object.loadSnapshotChunk !== undefined &&
            object.loadSnapshotChunk !== null) {
            message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk);
        }
        else {
            message.loadSnapshotChunk = undefined;
        }
        if (object.applySnapshotChunk !== undefined &&
            object.applySnapshotChunk !== null) {
            message.applySnapshotChunk = exports.RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk);
        }
        else {
            message.applySnapshotChunk = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.echo !== undefined &&
            (obj.echo = message.echo ? exports.RequestEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined &&
            (obj.flush = message.flush
                ? exports.RequestFlush.toJSON(message.flush)
                : undefined);
        message.info !== undefined &&
            (obj.info = message.info ? exports.RequestInfo.toJSON(message.info) : undefined);
        message.setOption !== undefined &&
            (obj.setOption = message.setOption
                ? exports.RequestSetOption.toJSON(message.setOption)
                : undefined);
        message.initChain !== undefined &&
            (obj.initChain = message.initChain
                ? exports.RequestInitChain.toJSON(message.initChain)
                : undefined);
        message.query !== undefined &&
            (obj.query = message.query
                ? exports.RequestQuery.toJSON(message.query)
                : undefined);
        message.beginBlock !== undefined &&
            (obj.beginBlock = message.beginBlock
                ? exports.RequestBeginBlock.toJSON(message.beginBlock)
                : undefined);
        message.checkTx !== undefined &&
            (obj.checkTx = message.checkTx
                ? exports.RequestCheckTx.toJSON(message.checkTx)
                : undefined);
        message.deliverTx !== undefined &&
            (obj.deliverTx = message.deliverTx
                ? exports.RequestDeliverTx.toJSON(message.deliverTx)
                : undefined);
        message.endBlock !== undefined &&
            (obj.endBlock = message.endBlock
                ? exports.RequestEndBlock.toJSON(message.endBlock)
                : undefined);
        message.commit !== undefined &&
            (obj.commit = message.commit
                ? exports.RequestCommit.toJSON(message.commit)
                : undefined);
        message.listSnapshots !== undefined &&
            (obj.listSnapshots = message.listSnapshots
                ? exports.RequestListSnapshots.toJSON(message.listSnapshots)
                : undefined);
        message.offerSnapshot !== undefined &&
            (obj.offerSnapshot = message.offerSnapshot
                ? exports.RequestOfferSnapshot.toJSON(message.offerSnapshot)
                : undefined);
        message.loadSnapshotChunk !== undefined &&
            (obj.loadSnapshotChunk = message.loadSnapshotChunk
                ? exports.RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
                : undefined);
        message.applySnapshotChunk !== undefined &&
            (obj.applySnapshotChunk = message.applySnapshotChunk
                ? exports.RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequest);
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.RequestEcho.fromPartial(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.RequestFlush.fromPartial(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.RequestInfo.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.setOption !== undefined && object.setOption !== null) {
            message.setOption = exports.RequestSetOption.fromPartial(object.setOption);
        }
        else {
            message.setOption = undefined;
        }
        if (object.initChain !== undefined && object.initChain !== null) {
            message.initChain = exports.RequestInitChain.fromPartial(object.initChain);
        }
        else {
            message.initChain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.RequestQuery.fromPartial(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.beginBlock !== undefined && object.beginBlock !== null) {
            message.beginBlock = exports.RequestBeginBlock.fromPartial(object.beginBlock);
        }
        else {
            message.beginBlock = undefined;
        }
        if (object.checkTx !== undefined && object.checkTx !== null) {
            message.checkTx = exports.RequestCheckTx.fromPartial(object.checkTx);
        }
        else {
            message.checkTx = undefined;
        }
        if (object.deliverTx !== undefined && object.deliverTx !== null) {
            message.deliverTx = exports.RequestDeliverTx.fromPartial(object.deliverTx);
        }
        else {
            message.deliverTx = undefined;
        }
        if (object.endBlock !== undefined && object.endBlock !== null) {
            message.endBlock = exports.RequestEndBlock.fromPartial(object.endBlock);
        }
        else {
            message.endBlock = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.RequestCommit.fromPartial(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
            message.listSnapshots = exports.RequestListSnapshots.fromPartial(object.listSnapshots);
        }
        else {
            message.listSnapshots = undefined;
        }
        if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
            message.offerSnapshot = exports.RequestOfferSnapshot.fromPartial(object.offerSnapshot);
        }
        else {
            message.offerSnapshot = undefined;
        }
        if (object.loadSnapshotChunk !== undefined &&
            object.loadSnapshotChunk !== null) {
            message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk);
        }
        else {
            message.loadSnapshotChunk = undefined;
        }
        if (object.applySnapshotChunk !== undefined &&
            object.applySnapshotChunk !== null) {
            message.applySnapshotChunk = exports.RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk);
        }
        else {
            message.applySnapshotChunk = undefined;
        }
        return message;
    },
};
const baseRequestEcho = { message: '' };
exports.RequestEcho = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.message !== '') {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestEcho);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestEcho);
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestEcho);
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = '';
        }
        return message;
    },
};
const baseRequestFlush = {};
exports.RequestFlush = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestFlush);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseRequestFlush);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseRequestFlush);
        return message;
    },
};
const baseRequestInfo = {
    version: '',
    blockVersion: long_1.default.UZERO,
    p2pVersion: long_1.default.UZERO,
};
exports.RequestInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (!message.blockVersion.isZero()) {
            writer.uint32(16).uint64(message.blockVersion);
        }
        if (!message.p2pVersion.isZero()) {
            writer.uint32(24).uint64(message.p2pVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.blockVersion = reader.uint64();
                    break;
                case 3:
                    message.p2pVersion = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestInfo);
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.blockVersion !== undefined && object.blockVersion !== null) {
            message.blockVersion = long_1.default.fromString(object.blockVersion);
        }
        else {
            message.blockVersion = long_1.default.UZERO;
        }
        if (object.p2pVersion !== undefined && object.p2pVersion !== null) {
            message.p2pVersion = long_1.default.fromString(object.p2pVersion);
        }
        else {
            message.p2pVersion = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.blockVersion !== undefined &&
            (obj.blockVersion = (message.blockVersion || long_1.default.UZERO).toString());
        message.p2pVersion !== undefined &&
            (obj.p2pVersion = (message.p2pVersion || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestInfo);
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.blockVersion !== undefined && object.blockVersion !== null) {
            message.blockVersion = object.blockVersion;
        }
        else {
            message.blockVersion = long_1.default.UZERO;
        }
        if (object.p2pVersion !== undefined && object.p2pVersion !== null) {
            message.p2pVersion = object.p2pVersion;
        }
        else {
            message.p2pVersion = long_1.default.UZERO;
        }
        return message;
    },
};
const baseRequestSetOption = { key: '', value: '' };
exports.RequestSetOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestSetOption);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestSetOption);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestSetOption);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseRequestInitChain = { chainId: '', initialHeight: long_1.default.ZERO };
exports.RequestInitChain = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== '') {
            writer.uint32(18).string(message.chainId);
        }
        if (message.consensusParams !== undefined) {
            exports.ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.appStateBytes.length !== 0) {
            writer.uint32(42).bytes(message.appStateBytes);
        }
        if (!message.initialHeight.isZero()) {
            writer.uint32(48).int64(message.initialHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestInitChain);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.consensusParams = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.appStateBytes = reader.bytes();
                    break;
                case 6:
                    message.initialHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestInitChain);
        message.validators = [];
        if (object.time !== undefined && object.time !== null) {
            message.time = fromJsonTimestamp(object.time);
        }
        else {
            message.time = undefined;
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        }
        else {
            message.chainId = '';
        }
        if (object.consensusParams !== undefined &&
            object.consensusParams !== null) {
            message.consensusParams = exports.ConsensusParams.fromJSON(object.consensusParams);
        }
        else {
            message.consensusParams = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.ValidatorUpdate.fromJSON(e));
            }
        }
        if (object.appStateBytes !== undefined && object.appStateBytes !== null) {
            message.appStateBytes = bytesFromBase64(object.appStateBytes);
        }
        if (object.initialHeight !== undefined && object.initialHeight !== null) {
            message.initialHeight = long_1.default.fromString(object.initialHeight);
        }
        else {
            message.initialHeight = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined &&
            (obj.time =
                message.time !== undefined
                    ? fromTimestamp(message.time).toISOString()
                    : null);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.consensusParams !== undefined &&
            (obj.consensusParams = message.consensusParams
                ? exports.ConsensusParams.toJSON(message.consensusParams)
                : undefined);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.appStateBytes !== undefined &&
            (obj.appStateBytes = base64FromBytes(message.appStateBytes !== undefined
                ? message.appStateBytes
                : new Uint8Array()));
        message.initialHeight !== undefined &&
            (obj.initialHeight = (message.initialHeight || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestInitChain);
        message.validators = [];
        if (object.time !== undefined && object.time !== null) {
            message.time = timestamp_1.Timestamp.fromPartial(object.time);
        }
        else {
            message.time = undefined;
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = '';
        }
        if (object.consensusParams !== undefined &&
            object.consensusParams !== null) {
            message.consensusParams = exports.ConsensusParams.fromPartial(object.consensusParams);
        }
        else {
            message.consensusParams = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.ValidatorUpdate.fromPartial(e));
            }
        }
        if (object.appStateBytes !== undefined && object.appStateBytes !== null) {
            message.appStateBytes = object.appStateBytes;
        }
        else {
            message.appStateBytes = new Uint8Array();
        }
        if (object.initialHeight !== undefined && object.initialHeight !== null) {
            message.initialHeight = object.initialHeight;
        }
        else {
            message.initialHeight = long_1.default.ZERO;
        }
        return message;
    },
};
const baseRequestQuery = { path: '', height: long_1.default.ZERO, prove: false };
exports.RequestQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestQuery);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestQuery);
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        }
        else {
            message.path = '';
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = long_1.default.fromString(object.height);
        }
        else {
            message.height = long_1.default.ZERO;
        }
        if (object.prove !== undefined && object.prove !== null) {
            message.prove = Boolean(object.prove);
        }
        else {
            message.prove = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestQuery);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        else {
            message.path = '';
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = long_1.default.ZERO;
        }
        if (object.prove !== undefined && object.prove !== null) {
            message.prove = object.prove;
        }
        else {
            message.prove = false;
        }
        return message;
    },
};
const baseRequestBeginBlock = {};
exports.RequestBeginBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastCommitInfo !== undefined) {
            exports.LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.byzantineValidators) {
            exports.Evidence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestBeginBlock);
        message.byzantineValidators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lastCommitInfo = exports.LastCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.byzantineValidators.push(exports.Evidence.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestBeginBlock);
        message.byzantineValidators = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.lastCommitInfo !== undefined && object.lastCommitInfo !== null) {
            message.lastCommitInfo = exports.LastCommitInfo.fromJSON(object.lastCommitInfo);
        }
        else {
            message.lastCommitInfo = undefined;
        }
        if (object.byzantineValidators !== undefined &&
            object.byzantineValidators !== null) {
            for (const e of object.byzantineValidators) {
                message.byzantineValidators.push(exports.Evidence.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.header !== undefined &&
            (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        message.lastCommitInfo !== undefined &&
            (obj.lastCommitInfo = message.lastCommitInfo
                ? exports.LastCommitInfo.toJSON(message.lastCommitInfo)
                : undefined);
        if (message.byzantineValidators) {
            obj.byzantineValidators = message.byzantineValidators.map((e) => e ? exports.Evidence.toJSON(e) : undefined);
        }
        else {
            obj.byzantineValidators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestBeginBlock);
        message.byzantineValidators = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.lastCommitInfo !== undefined && object.lastCommitInfo !== null) {
            message.lastCommitInfo = exports.LastCommitInfo.fromPartial(object.lastCommitInfo);
        }
        else {
            message.lastCommitInfo = undefined;
        }
        if (object.byzantineValidators !== undefined &&
            object.byzantineValidators !== null) {
            for (const e of object.byzantineValidators) {
                message.byzantineValidators.push(exports.Evidence.fromPartial(e));
            }
        }
        return message;
    },
};
const baseRequestCheckTx = { type: 0 };
exports.RequestCheckTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestCheckTx);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestCheckTx);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = bytesFromBase64(object.tx);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = checkTxTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestCheckTx);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = object.tx;
        }
        else {
            message.tx = new Uint8Array();
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        return message;
    },
};
const baseRequestDeliverTx = {};
exports.RequestDeliverTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestDeliverTx);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestDeliverTx);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = bytesFromBase64(object.tx);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestDeliverTx);
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = object.tx;
        }
        else {
            message.tx = new Uint8Array();
        }
        return message;
    },
};
const baseRequestEndBlock = { height: long_1.default.ZERO };
exports.RequestEndBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestEndBlock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestEndBlock);
        if (object.height !== undefined && object.height !== null) {
            message.height = long_1.default.fromString(object.height);
        }
        else {
            message.height = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestEndBlock);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = long_1.default.ZERO;
        }
        return message;
    },
};
const baseRequestCommit = {};
exports.RequestCommit = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestCommit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseRequestCommit);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseRequestCommit);
        return message;
    },
};
const baseRequestListSnapshots = {};
exports.RequestListSnapshots = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestListSnapshots);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseRequestListSnapshots);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseRequestListSnapshots);
        return message;
    },
};
const baseRequestOfferSnapshot = {};
exports.RequestOfferSnapshot = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(18).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestOfferSnapshot);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.appHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestOfferSnapshot);
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = exports.Snapshot.fromJSON(object.snapshot);
        }
        else {
            message.snapshot = undefined;
        }
        if (object.appHash !== undefined && object.appHash !== null) {
            message.appHash = bytesFromBase64(object.appHash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshot !== undefined &&
            (obj.snapshot = message.snapshot
                ? exports.Snapshot.toJSON(message.snapshot)
                : undefined);
        message.appHash !== undefined &&
            (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestOfferSnapshot);
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = exports.Snapshot.fromPartial(object.snapshot);
        }
        else {
            message.snapshot = undefined;
        }
        if (object.appHash !== undefined && object.appHash !== null) {
            message.appHash = object.appHash;
        }
        else {
            message.appHash = new Uint8Array();
        }
        return message;
    },
};
const baseRequestLoadSnapshotChunk = {
    height: long_1.default.UZERO,
    format: 0,
    chunk: 0,
};
exports.RequestLoadSnapshotChunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestLoadSnapshotChunk);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestLoadSnapshotChunk);
        if (object.height !== undefined && object.height !== null) {
            message.height = long_1.default.fromString(object.height);
        }
        else {
            message.height = long_1.default.UZERO;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = Number(object.format);
        }
        else {
            message.format = 0;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = Number(object.chunk);
        }
        else {
            message.chunk = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.UZERO).toString());
        message.format !== undefined && (obj.format = message.format);
        message.chunk !== undefined && (obj.chunk = message.chunk);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestLoadSnapshotChunk);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = long_1.default.UZERO;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = 0;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = object.chunk;
        }
        else {
            message.chunk = 0;
        }
        return message;
    },
};
const baseRequestApplySnapshotChunk = { index: 0, sender: '' };
exports.RequestApplySnapshotChunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== '') {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestApplySnapshotChunk);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestApplySnapshotChunk);
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = bytesFromBase64(object.chunk);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.chunk !== undefined &&
            (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestApplySnapshotChunk);
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = object.chunk;
        }
        else {
            message.chunk = new Uint8Array();
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        return message;
    },
};
const baseResponse = {};
exports.Response = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.setOption !== undefined) {
            exports.ResponseSetOption.encode(message.setOption, writer.uint32(42).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            exports.ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            exports.ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            exports.ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.setOption = exports.ResponseSetOption.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.initChain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.beginBlock = exports.ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.checkTx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deliverTx = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.endBlock = exports.ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.listSnapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offerSnapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponse);
        if (object.exception !== undefined && object.exception !== null) {
            message.exception = exports.ResponseException.fromJSON(object.exception);
        }
        else {
            message.exception = undefined;
        }
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.ResponseEcho.fromJSON(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.ResponseFlush.fromJSON(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ResponseInfo.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.setOption !== undefined && object.setOption !== null) {
            message.setOption = exports.ResponseSetOption.fromJSON(object.setOption);
        }
        else {
            message.setOption = undefined;
        }
        if (object.initChain !== undefined && object.initChain !== null) {
            message.initChain = exports.ResponseInitChain.fromJSON(object.initChain);
        }
        else {
            message.initChain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.ResponseQuery.fromJSON(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.beginBlock !== undefined && object.beginBlock !== null) {
            message.beginBlock = exports.ResponseBeginBlock.fromJSON(object.beginBlock);
        }
        else {
            message.beginBlock = undefined;
        }
        if (object.checkTx !== undefined && object.checkTx !== null) {
            message.checkTx = exports.ResponseCheckTx.fromJSON(object.checkTx);
        }
        else {
            message.checkTx = undefined;
        }
        if (object.deliverTx !== undefined && object.deliverTx !== null) {
            message.deliverTx = exports.ResponseDeliverTx.fromJSON(object.deliverTx);
        }
        else {
            message.deliverTx = undefined;
        }
        if (object.endBlock !== undefined && object.endBlock !== null) {
            message.endBlock = exports.ResponseEndBlock.fromJSON(object.endBlock);
        }
        else {
            message.endBlock = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.ResponseCommit.fromJSON(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
            message.listSnapshots = exports.ResponseListSnapshots.fromJSON(object.listSnapshots);
        }
        else {
            message.listSnapshots = undefined;
        }
        if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
            message.offerSnapshot = exports.ResponseOfferSnapshot.fromJSON(object.offerSnapshot);
        }
        else {
            message.offerSnapshot = undefined;
        }
        if (object.loadSnapshotChunk !== undefined &&
            object.loadSnapshotChunk !== null) {
            message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk);
        }
        else {
            message.loadSnapshotChunk = undefined;
        }
        if (object.applySnapshotChunk !== undefined &&
            object.applySnapshotChunk !== null) {
            message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk);
        }
        else {
            message.applySnapshotChunk = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.exception !== undefined &&
            (obj.exception = message.exception
                ? exports.ResponseException.toJSON(message.exception)
                : undefined);
        message.echo !== undefined &&
            (obj.echo = message.echo ? exports.ResponseEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined &&
            (obj.flush = message.flush
                ? exports.ResponseFlush.toJSON(message.flush)
                : undefined);
        message.info !== undefined &&
            (obj.info = message.info ? exports.ResponseInfo.toJSON(message.info) : undefined);
        message.setOption !== undefined &&
            (obj.setOption = message.setOption
                ? exports.ResponseSetOption.toJSON(message.setOption)
                : undefined);
        message.initChain !== undefined &&
            (obj.initChain = message.initChain
                ? exports.ResponseInitChain.toJSON(message.initChain)
                : undefined);
        message.query !== undefined &&
            (obj.query = message.query
                ? exports.ResponseQuery.toJSON(message.query)
                : undefined);
        message.beginBlock !== undefined &&
            (obj.beginBlock = message.beginBlock
                ? exports.ResponseBeginBlock.toJSON(message.beginBlock)
                : undefined);
        message.checkTx !== undefined &&
            (obj.checkTx = message.checkTx
                ? exports.ResponseCheckTx.toJSON(message.checkTx)
                : undefined);
        message.deliverTx !== undefined &&
            (obj.deliverTx = message.deliverTx
                ? exports.ResponseDeliverTx.toJSON(message.deliverTx)
                : undefined);
        message.endBlock !== undefined &&
            (obj.endBlock = message.endBlock
                ? exports.ResponseEndBlock.toJSON(message.endBlock)
                : undefined);
        message.commit !== undefined &&
            (obj.commit = message.commit
                ? exports.ResponseCommit.toJSON(message.commit)
                : undefined);
        message.listSnapshots !== undefined &&
            (obj.listSnapshots = message.listSnapshots
                ? exports.ResponseListSnapshots.toJSON(message.listSnapshots)
                : undefined);
        message.offerSnapshot !== undefined &&
            (obj.offerSnapshot = message.offerSnapshot
                ? exports.ResponseOfferSnapshot.toJSON(message.offerSnapshot)
                : undefined);
        message.loadSnapshotChunk !== undefined &&
            (obj.loadSnapshotChunk = message.loadSnapshotChunk
                ? exports.ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
                : undefined);
        message.applySnapshotChunk !== undefined &&
            (obj.applySnapshotChunk = message.applySnapshotChunk
                ? exports.ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponse);
        if (object.exception !== undefined && object.exception !== null) {
            message.exception = exports.ResponseException.fromPartial(object.exception);
        }
        else {
            message.exception = undefined;
        }
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.ResponseEcho.fromPartial(object.echo);
        }
        else {
            message.echo = undefined;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.ResponseFlush.fromPartial(object.flush);
        }
        else {
            message.flush = undefined;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ResponseInfo.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.setOption !== undefined && object.setOption !== null) {
            message.setOption = exports.ResponseSetOption.fromPartial(object.setOption);
        }
        else {
            message.setOption = undefined;
        }
        if (object.initChain !== undefined && object.initChain !== null) {
            message.initChain = exports.ResponseInitChain.fromPartial(object.initChain);
        }
        else {
            message.initChain = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.ResponseQuery.fromPartial(object.query);
        }
        else {
            message.query = undefined;
        }
        if (object.beginBlock !== undefined && object.beginBlock !== null) {
            message.beginBlock = exports.ResponseBeginBlock.fromPartial(object.beginBlock);
        }
        else {
            message.beginBlock = undefined;
        }
        if (object.checkTx !== undefined && object.checkTx !== null) {
            message.checkTx = exports.ResponseCheckTx.fromPartial(object.checkTx);
        }
        else {
            message.checkTx = undefined;
        }
        if (object.deliverTx !== undefined && object.deliverTx !== null) {
            message.deliverTx = exports.ResponseDeliverTx.fromPartial(object.deliverTx);
        }
        else {
            message.deliverTx = undefined;
        }
        if (object.endBlock !== undefined && object.endBlock !== null) {
            message.endBlock = exports.ResponseEndBlock.fromPartial(object.endBlock);
        }
        else {
            message.endBlock = undefined;
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.ResponseCommit.fromPartial(object.commit);
        }
        else {
            message.commit = undefined;
        }
        if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
            message.listSnapshots = exports.ResponseListSnapshots.fromPartial(object.listSnapshots);
        }
        else {
            message.listSnapshots = undefined;
        }
        if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
            message.offerSnapshot = exports.ResponseOfferSnapshot.fromPartial(object.offerSnapshot);
        }
        else {
            message.offerSnapshot = undefined;
        }
        if (object.loadSnapshotChunk !== undefined &&
            object.loadSnapshotChunk !== null) {
            message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk);
        }
        else {
            message.loadSnapshotChunk = undefined;
        }
        if (object.applySnapshotChunk !== undefined &&
            object.applySnapshotChunk !== null) {
            message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk);
        }
        else {
            message.applySnapshotChunk = undefined;
        }
        return message;
    },
};
const baseResponseException = { error: '' };
exports.ResponseException = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.error !== '') {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseException);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseException);
        if (object.error !== undefined && object.error !== null) {
            message.error = String(object.error);
        }
        else {
            message.error = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseException);
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        else {
            message.error = '';
        }
        return message;
    },
};
const baseResponseEcho = { message: '' };
exports.ResponseEcho = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.message !== '') {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseEcho);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseEcho);
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseEcho);
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = '';
        }
        return message;
    },
};
const baseResponseFlush = {};
exports.ResponseFlush = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseFlush);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseResponseFlush);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseResponseFlush);
        return message;
    },
};
const baseResponseInfo = {
    data: '',
    version: '',
    appVersion: long_1.default.UZERO,
    lastBlockHeight: long_1.default.ZERO,
};
exports.ResponseInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data !== '') {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        if (!message.appVersion.isZero()) {
            writer.uint32(24).uint64(message.appVersion);
        }
        if (!message.lastBlockHeight.isZero()) {
            writer.uint32(32).int64(message.lastBlockHeight);
        }
        if (message.lastBlockAppHash.length !== 0) {
            writer.uint32(42).bytes(message.lastBlockAppHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.appVersion = reader.uint64();
                    break;
                case 4:
                    message.lastBlockHeight = reader.int64();
                    break;
                case 5:
                    message.lastBlockAppHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseInfo);
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.appVersion !== undefined && object.appVersion !== null) {
            message.appVersion = long_1.default.fromString(object.appVersion);
        }
        else {
            message.appVersion = long_1.default.UZERO;
        }
        if (object.lastBlockHeight !== undefined &&
            object.lastBlockHeight !== null) {
            message.lastBlockHeight = long_1.default.fromString(object.lastBlockHeight);
        }
        else {
            message.lastBlockHeight = long_1.default.ZERO;
        }
        if (object.lastBlockAppHash !== undefined &&
            object.lastBlockAppHash !== null) {
            message.lastBlockAppHash = bytesFromBase64(object.lastBlockAppHash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.version !== undefined && (obj.version = message.version);
        message.appVersion !== undefined &&
            (obj.appVersion = (message.appVersion || long_1.default.UZERO).toString());
        message.lastBlockHeight !== undefined &&
            (obj.lastBlockHeight = (message.lastBlockHeight || long_1.default.ZERO).toString());
        message.lastBlockAppHash !== undefined &&
            (obj.lastBlockAppHash = base64FromBytes(message.lastBlockAppHash !== undefined
                ? message.lastBlockAppHash
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseInfo);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.appVersion !== undefined && object.appVersion !== null) {
            message.appVersion = object.appVersion;
        }
        else {
            message.appVersion = long_1.default.UZERO;
        }
        if (object.lastBlockHeight !== undefined &&
            object.lastBlockHeight !== null) {
            message.lastBlockHeight = object.lastBlockHeight;
        }
        else {
            message.lastBlockHeight = long_1.default.ZERO;
        }
        if (object.lastBlockAppHash !== undefined &&
            object.lastBlockAppHash !== null) {
            message.lastBlockAppHash = object.lastBlockAppHash;
        }
        else {
            message.lastBlockAppHash = new Uint8Array();
        }
        return message;
    },
};
const baseResponseSetOption = { code: 0, log: '', info: '' };
exports.ResponseSetOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== '') {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== '') {
            writer.uint32(34).string(message.info);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseSetOption);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseSetOption);
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        }
        else {
            message.info = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseSetOption);
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        else {
            message.info = '';
        }
        return message;
    },
};
const baseResponseInitChain = {};
exports.ResponseInitChain = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.consensusParams !== undefined) {
            exports.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(26).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseInitChain);
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusParams = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.appHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseInitChain);
        message.validators = [];
        if (object.consensusParams !== undefined &&
            object.consensusParams !== null) {
            message.consensusParams = exports.ConsensusParams.fromJSON(object.consensusParams);
        }
        else {
            message.consensusParams = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.ValidatorUpdate.fromJSON(e));
            }
        }
        if (object.appHash !== undefined && object.appHash !== null) {
            message.appHash = bytesFromBase64(object.appHash);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.consensusParams !== undefined &&
            (obj.consensusParams = message.consensusParams
                ? exports.ConsensusParams.toJSON(message.consensusParams)
                : undefined);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.appHash !== undefined &&
            (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseInitChain);
        message.validators = [];
        if (object.consensusParams !== undefined &&
            object.consensusParams !== null) {
            message.consensusParams = exports.ConsensusParams.fromPartial(object.consensusParams);
        }
        else {
            message.consensusParams = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(exports.ValidatorUpdate.fromPartial(e));
            }
        }
        if (object.appHash !== undefined && object.appHash !== null) {
            message.appHash = object.appHash;
        }
        else {
            message.appHash = new Uint8Array();
        }
        return message;
    },
};
const baseResponseQuery = {
    code: 0,
    log: '',
    info: '',
    index: long_1.default.ZERO,
    height: long_1.default.ZERO,
    codespace: '',
};
exports.ResponseQuery = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== '') {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== '') {
            writer.uint32(34).string(message.info);
        }
        if (!message.index.isZero()) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proofOps !== undefined) {
            proof_1.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== '') {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseQuery);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proofOps = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseQuery);
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        }
        else {
            message.info = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = long_1.default.fromString(object.index);
        }
        else {
            message.index = long_1.default.ZERO;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.proofOps !== undefined && object.proofOps !== null) {
            message.proofOps = proof_1.ProofOps.fromJSON(object.proofOps);
        }
        else {
            message.proofOps = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = long_1.default.fromString(object.height);
        }
        else {
            message.height = long_1.default.ZERO;
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = String(object.codespace);
        }
        else {
            message.codespace = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined &&
            (obj.index = (message.index || long_1.default.ZERO).toString());
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.proofOps !== undefined &&
            (obj.proofOps = message.proofOps
                ? proof_1.ProofOps.toJSON(message.proofOps)
                : undefined);
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseQuery);
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = 0;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        else {
            message.info = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = long_1.default.ZERO;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        if (object.proofOps !== undefined && object.proofOps !== null) {
            message.proofOps = proof_1.ProofOps.fromPartial(object.proofOps);
        }
        else {
            message.proofOps = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = long_1.default.ZERO;
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        else {
            message.codespace = '';
        }
        return message;
    },
};
const baseResponseBeginBlock = {};
exports.ResponseBeginBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseBeginBlock);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseBeginBlock);
        message.events = [];
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map((e) => (e ? exports.Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseBeginBlock);
        message.events = [];
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromPartial(e));
            }
        }
        return message;
    },
};
const baseResponseCheckTx = {
    code: 0,
    log: '',
    info: '',
    gasWanted: long_1.default.ZERO,
    gasUsed: long_1.default.ZERO,
    codespace: '',
};
exports.ResponseCheckTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== '') {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== '') {
            writer.uint32(34).string(message.info);
        }
        if (!message.gasWanted.isZero()) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== '') {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseCheckTx);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseCheckTx);
        message.events = [];
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        }
        else {
            message.info = '';
        }
        if (object.gasWanted !== undefined && object.gasWanted !== null) {
            message.gasWanted = long_1.default.fromString(object.gasWanted);
        }
        else {
            message.gasWanted = long_1.default.ZERO;
        }
        if (object.gasUsed !== undefined && object.gasUsed !== null) {
            message.gasUsed = long_1.default.fromString(object.gasUsed);
        }
        else {
            message.gasUsed = long_1.default.ZERO;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromJSON(e));
            }
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = String(object.codespace);
        }
        else {
            message.codespace = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gasWanted !== undefined &&
            (obj.gasWanted = (message.gasWanted || long_1.default.ZERO).toString());
        message.gasUsed !== undefined &&
            (obj.gasUsed = (message.gasUsed || long_1.default.ZERO).toString());
        if (message.events) {
            obj.events = message.events.map((e) => (e ? exports.Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseCheckTx);
        message.events = [];
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        else {
            message.info = '';
        }
        if (object.gasWanted !== undefined && object.gasWanted !== null) {
            message.gasWanted = object.gasWanted;
        }
        else {
            message.gasWanted = long_1.default.ZERO;
        }
        if (object.gasUsed !== undefined && object.gasUsed !== null) {
            message.gasUsed = object.gasUsed;
        }
        else {
            message.gasUsed = long_1.default.ZERO;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromPartial(e));
            }
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        else {
            message.codespace = '';
        }
        return message;
    },
};
const baseResponseDeliverTx = {
    code: 0,
    log: '',
    info: '',
    gasWanted: long_1.default.ZERO,
    gasUsed: long_1.default.ZERO,
    codespace: '',
};
exports.ResponseDeliverTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== '') {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== '') {
            writer.uint32(34).string(message.info);
        }
        if (!message.gasWanted.isZero()) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== '') {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseDeliverTx);
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseDeliverTx);
        message.events = [];
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = String(object.log);
        }
        else {
            message.log = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        }
        else {
            message.info = '';
        }
        if (object.gasWanted !== undefined && object.gasWanted !== null) {
            message.gasWanted = long_1.default.fromString(object.gasWanted);
        }
        else {
            message.gasWanted = long_1.default.ZERO;
        }
        if (object.gasUsed !== undefined && object.gasUsed !== null) {
            message.gasUsed = long_1.default.fromString(object.gasUsed);
        }
        else {
            message.gasUsed = long_1.default.ZERO;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromJSON(e));
            }
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = String(object.codespace);
        }
        else {
            message.codespace = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gasWanted !== undefined &&
            (obj.gasWanted = (message.gasWanted || long_1.default.ZERO).toString());
        message.gasUsed !== undefined &&
            (obj.gasUsed = (message.gasUsed || long_1.default.ZERO).toString());
        if (message.events) {
            obj.events = message.events.map((e) => (e ? exports.Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseDeliverTx);
        message.events = [];
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        else {
            message.log = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        else {
            message.info = '';
        }
        if (object.gasWanted !== undefined && object.gasWanted !== null) {
            message.gasWanted = object.gasWanted;
        }
        else {
            message.gasWanted = long_1.default.ZERO;
        }
        if (object.gasUsed !== undefined && object.gasUsed !== null) {
            message.gasUsed = object.gasUsed;
        }
        else {
            message.gasUsed = long_1.default.ZERO;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromPartial(e));
            }
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        else {
            message.codespace = '';
        }
        return message;
    },
};
const baseResponseEndBlock = {};
exports.ResponseEndBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.validatorUpdates) {
            exports.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensusParamUpdates !== undefined) {
            exports.ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseEndBlock);
        message.validatorUpdates = [];
        message.events = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorUpdates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.consensusParamUpdates = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseEndBlock);
        message.validatorUpdates = [];
        message.events = [];
        if (object.validatorUpdates !== undefined &&
            object.validatorUpdates !== null) {
            for (const e of object.validatorUpdates) {
                message.validatorUpdates.push(exports.ValidatorUpdate.fromJSON(e));
            }
        }
        if (object.consensusParamUpdates !== undefined &&
            object.consensusParamUpdates !== null) {
            message.consensusParamUpdates = exports.ConsensusParams.fromJSON(object.consensusParamUpdates);
        }
        else {
            message.consensusParamUpdates = undefined;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorUpdates) {
            obj.validatorUpdates = message.validatorUpdates.map((e) => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validatorUpdates = [];
        }
        message.consensusParamUpdates !== undefined &&
            (obj.consensusParamUpdates = message.consensusParamUpdates
                ? exports.ConsensusParams.toJSON(message.consensusParamUpdates)
                : undefined);
        if (message.events) {
            obj.events = message.events.map((e) => (e ? exports.Event.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseEndBlock);
        message.validatorUpdates = [];
        message.events = [];
        if (object.validatorUpdates !== undefined &&
            object.validatorUpdates !== null) {
            for (const e of object.validatorUpdates) {
                message.validatorUpdates.push(exports.ValidatorUpdate.fromPartial(e));
            }
        }
        if (object.consensusParamUpdates !== undefined &&
            object.consensusParamUpdates !== null) {
            message.consensusParamUpdates = exports.ConsensusParams.fromPartial(object.consensusParamUpdates);
        }
        else {
            message.consensusParamUpdates = undefined;
        }
        if (object.events !== undefined && object.events !== null) {
            for (const e of object.events) {
                message.events.push(exports.Event.fromPartial(e));
            }
        }
        return message;
    },
};
const baseResponseCommit = { retainHeight: long_1.default.ZERO };
exports.ResponseCommit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (!message.retainHeight.isZero()) {
            writer.uint32(24).int64(message.retainHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseCommit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.retainHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseCommit);
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.retainHeight !== undefined && object.retainHeight !== null) {
            message.retainHeight = long_1.default.fromString(object.retainHeight);
        }
        else {
            message.retainHeight = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.retainHeight !== undefined &&
            (obj.retainHeight = (message.retainHeight || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseCommit);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.retainHeight !== undefined && object.retainHeight !== null) {
            message.retainHeight = object.retainHeight;
        }
        else {
            message.retainHeight = long_1.default.ZERO;
        }
        return message;
    },
};
const baseResponseListSnapshots = {};
exports.ResponseListSnapshots = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.snapshots) {
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseListSnapshots);
        message.snapshots = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseListSnapshots);
        message.snapshots = [];
        if (object.snapshots !== undefined && object.snapshots !== null) {
            for (const e of object.snapshots) {
                message.snapshots.push(exports.Snapshot.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map((e) => e ? exports.Snapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseListSnapshots);
        message.snapshots = [];
        if (object.snapshots !== undefined && object.snapshots !== null) {
            for (const e of object.snapshots) {
                message.snapshots.push(exports.Snapshot.fromPartial(e));
            }
        }
        return message;
    },
};
const baseResponseOfferSnapshot = { result: 0 };
exports.ResponseOfferSnapshot = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseOfferSnapshot);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseOfferSnapshot);
        if (object.result !== undefined && object.result !== null) {
            message.result = responseOfferSnapshot_ResultFromJSON(object.result);
        }
        else {
            message.result = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseOfferSnapshot);
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = 0;
        }
        return message;
    },
};
const baseResponseLoadSnapshotChunk = {};
exports.ResponseLoadSnapshotChunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseLoadSnapshotChunk);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseLoadSnapshotChunk);
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = bytesFromBase64(object.chunk);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.chunk !== undefined &&
            (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseLoadSnapshotChunk);
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = object.chunk;
        }
        else {
            message.chunk = new Uint8Array();
        }
        return message;
    },
};
const baseResponseApplySnapshotChunk = {
    result: 0,
    refetchChunks: 0,
    rejectSenders: '',
};
exports.ResponseApplySnapshotChunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (const v of message.refetchChunks) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.rejectSenders) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResponseApplySnapshotChunk);
        message.refetchChunks = [];
        message.rejectSenders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetchChunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetchChunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.rejectSenders.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResponseApplySnapshotChunk);
        message.refetchChunks = [];
        message.rejectSenders = [];
        if (object.result !== undefined && object.result !== null) {
            message.result = responseApplySnapshotChunk_ResultFromJSON(object.result);
        }
        else {
            message.result = 0;
        }
        if (object.refetchChunks !== undefined && object.refetchChunks !== null) {
            for (const e of object.refetchChunks) {
                message.refetchChunks.push(Number(e));
            }
        }
        if (object.rejectSenders !== undefined && object.rejectSenders !== null) {
            for (const e of object.rejectSenders) {
                message.rejectSenders.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
        if (message.refetchChunks) {
            obj.refetchChunks = message.refetchChunks.map((e) => e);
        }
        else {
            obj.refetchChunks = [];
        }
        if (message.rejectSenders) {
            obj.rejectSenders = message.rejectSenders.map((e) => e);
        }
        else {
            obj.rejectSenders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResponseApplySnapshotChunk);
        message.refetchChunks = [];
        message.rejectSenders = [];
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = 0;
        }
        if (object.refetchChunks !== undefined && object.refetchChunks !== null) {
            for (const e of object.refetchChunks) {
                message.refetchChunks.push(e);
            }
        }
        if (object.rejectSenders !== undefined && object.rejectSenders !== null) {
            for (const e of object.rejectSenders) {
                message.rejectSenders.push(e);
            }
        }
        return message;
    },
};
const baseConsensusParams = {};
exports.ConsensusParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            params_1.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            params_1.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            params_1.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConsensusParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = params_1.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = params_1.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = params_1.VersionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConsensusParams);
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.BlockParams.fromJSON(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = params_1.EvidenceParams.fromJSON(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = params_1.ValidatorParams.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = params_1.VersionParams.fromJSON(object.version);
        }
        else {
            message.version = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined &&
            (obj.block = message.block
                ? exports.BlockParams.toJSON(message.block)
                : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? params_1.EvidenceParams.toJSON(message.evidence)
                : undefined);
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? params_1.ValidatorParams.toJSON(message.validator)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? params_1.VersionParams.toJSON(message.version)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConsensusParams);
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.BlockParams.fromPartial(object.block);
        }
        else {
            message.block = undefined;
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = params_1.EvidenceParams.fromPartial(object.evidence);
        }
        else {
            message.evidence = undefined;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = params_1.ValidatorParams.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = params_1.VersionParams.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        return message;
    },
};
const baseBlockParams = { maxBytes: long_1.default.ZERO, maxGas: long_1.default.ZERO };
exports.BlockParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.maxBytes.isZero()) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (!message.maxGas.isZero()) {
            writer.uint32(16).int64(message.maxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBlockParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBytes = reader.int64();
                    break;
                case 2:
                    message.maxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBlockParams);
        if (object.maxBytes !== undefined && object.maxBytes !== null) {
            message.maxBytes = long_1.default.fromString(object.maxBytes);
        }
        else {
            message.maxBytes = long_1.default.ZERO;
        }
        if (object.maxGas !== undefined && object.maxGas !== null) {
            message.maxGas = long_1.default.fromString(object.maxGas);
        }
        else {
            message.maxGas = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxBytes !== undefined &&
            (obj.maxBytes = (message.maxBytes || long_1.default.ZERO).toString());
        message.maxGas !== undefined &&
            (obj.maxGas = (message.maxGas || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBlockParams);
        if (object.maxBytes !== undefined && object.maxBytes !== null) {
            message.maxBytes = object.maxBytes;
        }
        else {
            message.maxBytes = long_1.default.ZERO;
        }
        if (object.maxGas !== undefined && object.maxGas !== null) {
            message.maxGas = object.maxGas;
        }
        else {
            message.maxGas = long_1.default.ZERO;
        }
        return message;
    },
};
const baseLastCommitInfo = { round: 0 };
exports.LastCommitInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLastCommitInfo);
        message.votes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLastCommitInfo);
        message.votes = [];
        if (object.round !== undefined && object.round !== null) {
            message.round = Number(object.round);
        }
        else {
            message.round = 0;
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(exports.VoteInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = message.round);
        if (message.votes) {
            obj.votes = message.votes.map((e) => e ? exports.VoteInfo.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseLastCommitInfo);
        message.votes = [];
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        else {
            message.round = 0;
        }
        if (object.votes !== undefined && object.votes !== null) {
            for (const e of object.votes) {
                message.votes.push(exports.VoteInfo.fromPartial(e));
            }
        }
        return message;
    },
};
const baseEvent = { type: '' };
exports.Event = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEvent);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEvent);
        message.attributes = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(exports.EventAttribute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? exports.EventAttribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEvent);
        message.attributes = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(exports.EventAttribute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseEventAttribute = { index: false };
exports.EventAttribute = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEventAttribute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.index = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEventAttribute);
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = Boolean(object.index);
        }
        else {
            message.index = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEventAttribute);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = new Uint8Array();
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = false;
        }
        return message;
    },
};
const baseTxResult = { height: long_1.default.ZERO, index: 0 };
exports.TxResult = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            exports.ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTxResult);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTxResult);
        if (object.height !== undefined && object.height !== null) {
            message.height = long_1.default.fromString(object.height);
        }
        else {
            message.height = long_1.default.ZERO;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = bytesFromBase64(object.tx);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.ResponseDeliverTx.fromJSON(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.index !== undefined && (obj.index = message.index);
        message.tx !== undefined &&
            (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.result !== undefined &&
            (obj.result = message.result
                ? exports.ResponseDeliverTx.toJSON(message.result)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTxResult);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = long_1.default.ZERO;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = object.tx;
        }
        else {
            message.tx = new Uint8Array();
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.ResponseDeliverTx.fromPartial(object.result);
        }
        else {
            message.result = undefined;
        }
        return message;
    },
};
const baseValidator = { power: long_1.default.ZERO };
exports.Validator = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (!message.power.isZero()) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidator);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidator);
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = long_1.default.fromString(object.power);
        }
        else {
            message.power = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.power !== undefined &&
            (obj.power = (message.power || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidator);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = new Uint8Array();
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = object.power;
        }
        else {
            message.power = long_1.default.ZERO;
        }
        return message;
    },
};
const baseValidatorUpdate = { power: long_1.default.ZERO };
exports.ValidatorUpdate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (!message.power.isZero()) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseValidatorUpdate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseValidatorUpdate);
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = keys_1.PublicKey.fromJSON(object.pubKey);
        }
        else {
            message.pubKey = undefined;
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = long_1.default.fromString(object.power);
        }
        else {
            message.power = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined &&
            (obj.pubKey = message.pubKey
                ? keys_1.PublicKey.toJSON(message.pubKey)
                : undefined);
        message.power !== undefined &&
            (obj.power = (message.power || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseValidatorUpdate);
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = keys_1.PublicKey.fromPartial(object.pubKey);
        }
        else {
            message.pubKey = undefined;
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = object.power;
        }
        else {
            message.power = long_1.default.ZERO;
        }
        return message;
    },
};
const baseVoteInfo = { signedLastBlock: false };
exports.VoteInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signedLastBlock === true) {
            writer.uint32(16).bool(message.signedLastBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVoteInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signedLastBlock = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVoteInfo);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.signedLastBlock !== undefined &&
            object.signedLastBlock !== null) {
            message.signedLastBlock = Boolean(object.signedLastBlock);
        }
        else {
            message.signedLastBlock = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? exports.Validator.toJSON(message.validator)
                : undefined);
        message.signedLastBlock !== undefined &&
            (obj.signedLastBlock = message.signedLastBlock);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVoteInfo);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.signedLastBlock !== undefined &&
            object.signedLastBlock !== null) {
            message.signedLastBlock = object.signedLastBlock;
        }
        else {
            message.signedLastBlock = false;
        }
        return message;
    },
};
const baseEvidence = {
    type: 0,
    height: long_1.default.ZERO,
    totalVotingPower: long_1.default.ZERO,
};
exports.Evidence = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
        }
        if (!message.totalVotingPower.isZero()) {
            writer.uint32(40).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEvidence);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.totalVotingPower = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEvidence);
        if (object.type !== undefined && object.type !== null) {
            message.type = evidenceTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromJSON(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = long_1.default.fromString(object.height);
        }
        else {
            message.height = long_1.default.ZERO;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromJsonTimestamp(object.time);
        }
        else {
            message.time = undefined;
        }
        if (object.totalVotingPower !== undefined &&
            object.totalVotingPower !== null) {
            message.totalVotingPower = long_1.default.fromString(object.totalVotingPower);
        }
        else {
            message.totalVotingPower = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? exports.Validator.toJSON(message.validator)
                : undefined);
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.time !== undefined &&
            (obj.time =
                message.time !== undefined
                    ? fromTimestamp(message.time).toISOString()
                    : null);
        message.totalVotingPower !== undefined &&
            (obj.totalVotingPower = (message.totalVotingPower || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEvidence);
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromPartial(object.validator);
        }
        else {
            message.validator = undefined;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = long_1.default.ZERO;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = timestamp_1.Timestamp.fromPartial(object.time);
        }
        else {
            message.time = undefined;
        }
        if (object.totalVotingPower !== undefined &&
            object.totalVotingPower !== null) {
            message.totalVotingPower = object.totalVotingPower;
        }
        else {
            message.totalVotingPower = long_1.default.ZERO;
        }
        return message;
    },
};
const baseSnapshot = { height: long_1.default.UZERO, format: 0, chunks: 0 };
exports.Snapshot = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSnapshot);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSnapshot);
        if (object.height !== undefined && object.height !== null) {
            message.height = long_1.default.fromString(object.height);
        }
        else {
            message.height = long_1.default.UZERO;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = Number(object.format);
        }
        else {
            message.format = 0;
        }
        if (object.chunks !== undefined && object.chunks !== null) {
            message.chunks = Number(object.chunks);
        }
        else {
            message.chunks = 0;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.UZERO).toString());
        message.format !== undefined && (obj.format = message.format);
        message.chunks !== undefined && (obj.chunks = message.chunks);
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined &&
            (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSnapshot);
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = long_1.default.UZERO;
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = 0;
        }
        if (object.chunks !== undefined && object.chunks !== null) {
            message.chunks = object.chunks;
        }
        else {
            message.chunks = 0;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        else {
            message.metadata = new Uint8Array();
        }
        return message;
    },
};
class ABCIApplicationClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Echo(request) {
        const data = exports.RequestEcho.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Echo', data);
        return promise.then((data) => exports.ResponseEcho.decode(new minimal_1.default.Reader(data)));
    }
    Flush(request) {
        const data = exports.RequestFlush.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Flush', data);
        return promise.then((data) => exports.ResponseFlush.decode(new minimal_1.default.Reader(data)));
    }
    Info(request) {
        const data = exports.RequestInfo.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Info', data);
        return promise.then((data) => exports.ResponseInfo.decode(new minimal_1.default.Reader(data)));
    }
    SetOption(request) {
        const data = exports.RequestSetOption.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'SetOption', data);
        return promise.then((data) => exports.ResponseSetOption.decode(new minimal_1.default.Reader(data)));
    }
    DeliverTx(request) {
        const data = exports.RequestDeliverTx.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'DeliverTx', data);
        return promise.then((data) => exports.ResponseDeliverTx.decode(new minimal_1.default.Reader(data)));
    }
    CheckTx(request) {
        const data = exports.RequestCheckTx.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'CheckTx', data);
        return promise.then((data) => exports.ResponseCheckTx.decode(new minimal_1.default.Reader(data)));
    }
    Query(request) {
        const data = exports.RequestQuery.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Query', data);
        return promise.then((data) => exports.ResponseQuery.decode(new minimal_1.default.Reader(data)));
    }
    Commit(request) {
        const data = exports.RequestCommit.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Commit', data);
        return promise.then((data) => exports.ResponseCommit.decode(new minimal_1.default.Reader(data)));
    }
    InitChain(request) {
        const data = exports.RequestInitChain.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'InitChain', data);
        return promise.then((data) => exports.ResponseInitChain.decode(new minimal_1.default.Reader(data)));
    }
    BeginBlock(request) {
        const data = exports.RequestBeginBlock.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'BeginBlock', data);
        return promise.then((data) => exports.ResponseBeginBlock.decode(new minimal_1.default.Reader(data)));
    }
    EndBlock(request) {
        const data = exports.RequestEndBlock.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'EndBlock', data);
        return promise.then((data) => exports.ResponseEndBlock.decode(new minimal_1.default.Reader(data)));
    }
    ListSnapshots(request) {
        const data = exports.RequestListSnapshots.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'ListSnapshots', data);
        return promise.then((data) => exports.ResponseListSnapshots.decode(new minimal_1.default.Reader(data)));
    }
    OfferSnapshot(request) {
        const data = exports.RequestOfferSnapshot.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'OfferSnapshot', data);
        return promise.then((data) => exports.ResponseOfferSnapshot.decode(new minimal_1.default.Reader(data)));
    }
    LoadSnapshotChunk(request) {
        const data = exports.RequestLoadSnapshotChunk.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'LoadSnapshotChunk', data);
        return promise.then((data) => exports.ResponseLoadSnapshotChunk.decode(new minimal_1.default.Reader(data)));
    }
    ApplySnapshotChunk(request) {
        const data = exports.RequestApplySnapshotChunk.encode(request).finish();
        const promise = this.rpc.request('tendermint.abci.ABCIApplication', 'ApplySnapshotChunk', data);
        return promise.then((data) => exports.ResponseApplySnapshotChunk.decode(new minimal_1.default.Reader(data)));
    }
}
exports.ABCIApplicationClientImpl = ABCIApplicationClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(''));
}
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return toTimestamp(o);
    }
    else if (typeof o === 'string') {
        return toTimestamp(new Date(o));
    }
    else {
        return timestamp_1.Timestamp.fromJSON(o);
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29kZWMvdGVuZGVybWludC9hYmNpL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsZ0RBQXdCO0FBQ3hCLCtEQUE0RDtBQUM1RCx3REFBc0Q7QUFDdEQseURBQXlEO0FBQ3pELDBEQUl1QztBQUN2Qyx1REFBeUQ7QUFDekQsaUVBQXFDO0FBRXhCLFFBQUEsZUFBZSxHQUFHLGlCQUFpQixDQUFDO0FBRWpELElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNyQiwyQ0FBTyxDQUFBO0lBQ1AsbURBQVcsQ0FBQTtJQUNYLDhEQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQUVELFNBQWdCLG1CQUFtQixDQUFDLE1BQVc7SUFDN0MsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssS0FBSztZQUNSLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN6QixLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssU0FBUztZQUNaLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUM3QixLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1IsS0FBSyxjQUFjLENBQUM7UUFDcEI7WUFDRSxPQUFPLFdBQVcsQ0FBQyxZQUFZLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBYkQsa0RBYUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxNQUFtQjtJQUNuRCxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssV0FBVyxDQUFDLEdBQUc7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFDZixLQUFLLFdBQVcsQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sU0FBUyxDQUFDO1FBQ25CO1lBQ0UsT0FBTyxTQUFTLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBVEQsOENBU0M7QUFFRCxJQUFZ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Q0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELEtBQUssTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUM5QixhQUFLLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFBSyxtQkFBbUIsQ0FBcUIsQ0FBQztRQUM5RCxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDL0IsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzlCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDL0IsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBVSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsa0JBQUssbUJBQW1CLENBQXFCLENBQUM7UUFDOUQsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyRCxPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyRCxPQUFPLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQy9ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUMvQjtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDM0QsT0FBTyxDQUFDLE9BQU8sR0FBRyxjQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsT0FBTyxDQUFDLE9BQU8sR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztTQUNGO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMvRCxPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUF3QjtRQUM3QixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFDeEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FDekIsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQzdELENBQUMsQ0FBQztRQUNMLE9BQU8sQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFDN0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFDM0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNMLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBb0M7UUFDOUMsTUFBTSxPQUFPLEdBQUcsa0JBQUssbUJBQW1CLENBQXFCLENBQUM7UUFDOUQsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyRCxPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDNUI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyRCxPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDNUI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDbkQsT0FBTyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQzFCO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckQsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDL0QsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBaUIsQ0FBQztTQUM5QzthQUFNO1lBQ0wsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUMzRCxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFlLENBQUM7U0FDMUM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxPQUFPLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUM3QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0M7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDL0QsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxxQkFBcUIsR0FBVztJQUNwQyxJQUFJLEVBQUUsQ0FBQztJQUNQLEdBQUcsRUFBRSxFQUFFO0lBQ1AsSUFBSSxFQUFFLEVBQUU7SUFDUixTQUFTLEVBQUUsY0FBSSxDQUFDLElBQUk7SUFDcEIsT0FBTyxFQUFFLGNBQUksQ0FBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBRSxFQUFFO0NBQ2QsQ0FBQztBQUVXLFFBQUEsaUJBQWlCLEdBQUc7SUFDL0IsTUFBTSxDQUNKLE9BQTBCLEVBQzFCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7UUFDRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDOUIsYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQThCLEVBQUUsTUFBZTtRQUNwRCxNQUFNLE1BQU0sR0FBRyxLQUFLLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0UsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDbEUsTUFBTSxPQUFPLEdBQUcsa0JBQUsscUJBQXFCLENBQXVCLENBQUM7UUFDbEUsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDcEIsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDOUIsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBVSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDM0QsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07YUFDVDtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLGtCQUFLLHFCQUFxQixDQUF1QixDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckQsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckQsT0FBTyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRTtZQUNuRCxPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyRCxPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMvRCxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDL0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzNELE9BQU8sQ0FBQyxPQUFPLEdBQUcsY0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxPQUFPLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUM3QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEM7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDL0QsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBMEI7UUFDL0IsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTO1lBQ3hCLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxlQUFlLENBQ3pCLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUM3RCxDQUFDLENBQUM7UUFDTCxPQUFPLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQzdCLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQzNCLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkUsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQXNDO1FBQ2hELE1BQU0sT0FBTyxHQUFHLGtCQUFLLHFCQUFxQixDQUF1QixDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckQsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckQsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztTQUMxQjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUM1QjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQy9ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQWlCLENBQUM7U0FDOUM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUMvQjtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDM0QsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBZSxDQUFDO1NBQzFDO2FBQU07WUFDTCxPQUFPLENBQUMsT0FBTyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDN0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pELEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNDO1NBQ0Y7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQy9ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDeEI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sb0JBQW9CLEdBQVcsRUFBRSxDQUFDO0FBRTNCLFFBQUEsZ0JBQWdCLEdBQUc7SUFDOUIsTUFBTSxDQUNKLE9BQXlCLEVBQ3pCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUN4Qyx1QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxPQUFPLENBQUMscUJBQXFCLEtBQUssU0FBUyxFQUFFO1lBQy9DLHVCQUFlLENBQUMsTUFBTSxDQUNwQixPQUFPLENBQUMscUJBQXFCLEVBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQ3pCLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUNELEtBQUssTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUM5QixhQUFLLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDckQ7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQThCLEVBQUUsTUFBZTtRQUNwRCxNQUFNLE1BQU0sR0FBRyxLQUFLLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0UsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDbEUsTUFBTSxPQUFPLEdBQUcsa0JBQUssb0JBQW9CLENBQXNCLENBQUM7UUFDaEUsT0FBTyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUMzQix1QkFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQ2hELENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLHFCQUFxQixHQUFHLHVCQUFlLENBQUMsTUFBTSxDQUNwRCxNQUFNLEVBQ04sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUNoQixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzNELE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07YUFDVDtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLGtCQUFLLG9CQUFvQixDQUFzQixDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFDRSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssU0FBUztZQUNyQyxNQUFNLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUNoQztZQUNBLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFO2dCQUN2QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHVCQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUQ7U0FDRjtRQUNELElBQ0UsTUFBTSxDQUFDLHFCQUFxQixLQUFLLFNBQVM7WUFDMUMsTUFBTSxDQUFDLHFCQUFxQixLQUFLLElBQUksRUFDckM7WUFDQSxPQUFPLENBQUMscUJBQXFCLEdBQUcsdUJBQWUsQ0FBQyxRQUFRLENBQ3RELE1BQU0sQ0FBQyxxQkFBcUIsQ0FDN0IsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUF5QjtRQUM5QixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDNUIsR0FBRyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUN4RCxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQzFDLENBQUM7U0FDSDthQUFNO1lBQ0wsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztTQUMzQjtRQUNELE9BQU8sQ0FBQyxxQkFBcUIsS0FBSyxTQUFTO1lBQ3pDLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUI7Z0JBQ3hELENBQUMsQ0FBQyx1QkFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNMLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQXFDO1FBQy9DLE1BQU0sT0FBTyxHQUFHLGtCQUFLLG9CQUFvQixDQUFzQixDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFDRSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssU0FBUztZQUNyQyxNQUFNLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUNoQztZQUNBLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFO2dCQUN2QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHVCQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0Q7U0FDRjtRQUNELElBQ0UsTUFBTSxDQUFDLHFCQUFxQixLQUFLLFNBQVM7WUFDMUMsTUFBTSxDQUFDLHFCQUFxQixLQUFLLElBQUksRUFDckM7WUFDQSxPQUFPLENBQUMscUJBQXFCLEdBQUcsdUJBQWUsQ0FBQyxXQUFXLENBQ3pELE1BQU0sQ0FBQyxxQkFBcUIsQ0FDN0IsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQztTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLGtCQUFrQixHQUFXLEVBQUUsWUFBWSxFQUFFLGNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUVsRCxRQUFBLGNBQWMsR0FBRztJQUM1QixNQUFNLENBQ0osT0FBdUIsRUFDdkIsU0FBcUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBRXhDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFBSyxrQkFBa0IsQ0FBb0IsQ0FBQztRQUM1RCxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDOUIsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUM7b0JBQzlDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07YUFDVDtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLGtCQUFLLGtCQUFrQixDQUFvQixDQUFDO1FBQzVELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckQsT0FBTyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUNyRSxPQUFPLENBQUMsWUFBWSxHQUFHLGNBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxPQUFPLENBQUMsWUFBWSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQXVCO1FBQzVCLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFDeEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FDekIsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQzdELENBQUMsQ0FBQztRQUNMLE9BQU8sQ0FBQyxZQUFZLEtBQUssU0FBUztZQUNoQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFtQztRQUM3QyxNQUFNLE9BQU8sR0FBRyxrQkFBSyxrQkFBa0IsQ0FBb0IsQ0FBQztRQUM1RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUM1QjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUNyRSxPQUFPLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFvQixDQUFDO1NBQ3BEO2FBQU07WUFDTCxPQUFPLENBQUMsWUFBWSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0seUJBQXlCLEdBQVcsRUFBRSxDQUFDO0FBRWhDLFFBQUEscUJBQXFCLEdBQUc7SUFDbkMsTUFBTSxDQUNKLE9BQThCLEVBQzlCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDakMsZ0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4RDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQ0osS0FBOEIsRUFDOUIsTUFBZTtRQUVmLE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFBSyx5QkFBeUIsQ0FBMkIsQ0FBQztRQUMxRSxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN2QixPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakUsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsa0JBQUsseUJBQXlCLENBQTJCLENBQUM7UUFDMUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMvRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUM7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBOEI7UUFDbkMsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNyQixHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNuQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUNULE1BQTBDO1FBRTFDLE1BQU0sT0FBTyxHQUFHLGtCQUFLLHlCQUF5QixDQUEyQixDQUFDO1FBQzFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDL0QsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0seUJBQXlCLEdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFFM0MsUUFBQSxxQkFBcUIsR0FBRztJQUNuQyxNQUFNLENBQ0osT0FBOEIsRUFDOUIsU0FBcUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBRXhDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FDSixLQUE4QixFQUM5QixNQUFlO1FBRWYsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUFLLHlCQUF5QixDQUEyQixDQUFDO1FBQzFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBUyxDQUFDO29CQUN2QyxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLE9BQU8sR0FBRyxrQkFBSyx5QkFBeUIsQ0FBMkIsQ0FBQztRQUMxRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxNQUFNLEdBQUcsb0NBQW9DLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RFO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBOEI7UUFDbkMsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUztZQUMxQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsa0NBQWtDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEUsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUNULE1BQTBDO1FBRTFDLE1BQU0sT0FBTyxHQUFHLGtCQUFLLHlCQUF5QixDQUEyQixDQUFDO1FBQzFFLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2hDO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSw2QkFBNkIsR0FBVyxFQUFFLENBQUM7QUFFcEMsUUFBQSx5QkFBeUIsR0FBRztJQUN2QyxNQUFNLENBQ0osT0FBa0MsRUFDbEMsU0FBcUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBRXhDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQ0osS0FBOEIsRUFDOUIsTUFBZTtRQUVmLE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFDWCw2QkFBNkIsQ0FDSixDQUFDO1FBQy9CLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMvQixNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLE9BQU8sR0FBRyxrQkFDWCw2QkFBNkIsQ0FDSixDQUFDO1FBQy9CLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDdkQsT0FBTyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFrQztRQUN2QyxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTO1lBQ3pCLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQzFCLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUMvRCxDQUFDLENBQUM7UUFDTCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXLENBQ1QsTUFBOEM7UUFFOUMsTUFBTSxPQUFPLEdBQUcsa0JBQ1gsNkJBQTZCLENBQ0osQ0FBQztRQUMvQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM5QjthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLDhCQUE4QixHQUFXO0lBQzdDLE1BQU0sRUFBRSxDQUFDO0lBQ1QsYUFBYSxFQUFFLENBQUM7SUFDaEIsYUFBYSxFQUFFLEVBQUU7Q0FDbEIsQ0FBQztBQUVXLFFBQUEsMEJBQTBCLEdBQUc7SUFDeEMsTUFBTSxDQUNKLE9BQW1DLEVBQ25DLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7UUFDRCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUUsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FDSixLQUE4QixFQUM5QixNQUFlO1FBRWYsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUNYLDhCQUE4QixDQUNKLENBQUM7UUFDaEMsT0FBTyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDM0IsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFTLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNuQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFDMUMsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRTs0QkFDeEIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7eUJBQzdDO3FCQUNGO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO3FCQUM3QztvQkFDRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsa0JBQ1gsOEJBQThCLENBQ0osQ0FBQztRQUNoQyxPQUFPLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUMzQixPQUFPLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxNQUFNLEdBQUcseUNBQXlDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUNELElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDdkUsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO2dCQUNwQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtZQUN2RSxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQW1DO1FBQ3hDLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDMUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLHVDQUF1QyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUN6QixHQUFHLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsR0FBRyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsR0FBRyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLEdBQUcsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUNULE1BQStDO1FBRS9DLE1BQU0sT0FBTyxHQUFHLGtCQUNYLDhCQUE4QixDQUNKLENBQUM7UUFDaEMsT0FBTyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDaEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtZQUN2RSxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQ3ZFLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxtQkFBbUIsR0FBVyxFQUFFLENBQUM7QUFFMUIsUUFBQSxlQUFlLEdBQUc7SUFDN0IsTUFBTSxDQUNKLE9BQXdCLEVBQ3hCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQy9CLG1CQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUNsQyx1QkFBYyxDQUFDLE1BQU0sQ0FDbkIsT0FBTyxDQUFDLFFBQVEsRUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDekIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNuQyx3QkFBZSxDQUFDLE1BQU0sQ0FDcEIsT0FBTyxDQUFDLFNBQVMsRUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDekIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNqQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMxRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFBSyxtQkFBbUIsQ0FBcUIsQ0FBQztRQUM5RCxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsS0FBSyxHQUFHLG1CQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDNUQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLFFBQVEsR0FBRyx1QkFBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ2xFLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxTQUFTLEdBQUcsd0JBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUNwRSxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDaEUsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsa0JBQUssbUJBQW1CLENBQXFCLENBQUM7UUFDOUQsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxPQUFPLENBQUMsS0FBSyxHQUFHLG1CQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDM0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzdELE9BQU8sQ0FBQyxRQUFRLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxPQUFPLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDL0QsT0FBTyxDQUFDLFNBQVMsR0FBRyx3QkFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUMzRCxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0wsT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7U0FDN0I7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQXdCO1FBQzdCLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVM7WUFDekIsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLO2dCQUN4QixDQUFDLENBQUMsbUJBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxRQUFRLEtBQUssU0FBUztZQUM1QixDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVE7Z0JBQzlCLENBQUMsQ0FBQyx1QkFBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN6QyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakIsT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQzdCLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUztnQkFDaEMsQ0FBQyxDQUFDLHdCQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFDM0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO2dCQUM1QixDQUFDLENBQUMsc0JBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFvQztRQUM5QyxNQUFNLE9BQU8sR0FBRyxrQkFBSyxtQkFBbUIsQ0FBcUIsQ0FBQztRQUM5RCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLEdBQUcsbUJBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUMzQjtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDN0QsT0FBTyxDQUFDLFFBQVEsR0FBRyx1QkFBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLE9BQU8sQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMvRCxPQUFPLENBQUMsU0FBUyxHQUFHLHdCQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0wsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDL0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzNELE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxPQUFPLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUM3QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsY0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBRTlELFFBQUEsV0FBVyxHQUFHO0lBQ3pCLE1BQU0sQ0FDSixPQUFvQixFQUNwQixTQUFxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFFeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE4QixFQUFFLE1BQWU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUFLLGVBQWUsQ0FBaUIsQ0FBQztRQUN0RCxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUM7b0JBQ3hDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07YUFDVDtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLGtCQUFLLGVBQWUsQ0FBaUIsQ0FBQztRQUN0RCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzdELE9BQU8sQ0FBQyxRQUFRLEdBQUcsY0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxRQUFRLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsT0FBTyxDQUFDLE1BQU0sR0FBRyxjQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsT0FBTyxDQUFDLE1BQU0sR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFvQjtRQUN6QixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTO1lBQzVCLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQzFCLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQWdDO1FBQzFDLE1BQU0sT0FBTyxHQUFHLGtCQUFLLGVBQWUsQ0FBaUIsQ0FBQztRQUN0RCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzdELE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQWdCLENBQUM7U0FDNUM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxRQUFRLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBYyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDNUI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLEdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFFbkMsUUFBQSxjQUFjLEdBQUc7SUFDNUIsTUFBTSxDQUNKLE9BQXVCLEVBQ3ZCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELEtBQUssTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUM3QixnQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE4QixFQUFFLE1BQWU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUFLLGtCQUFrQixDQUFvQixDQUFDO1FBQzVELE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMvQixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDN0QsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsa0JBQUssa0JBQWtCLENBQW9CLENBQUM7UUFDNUQsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUM7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBdUI7UUFDNUIsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ25DLENBQUM7U0FDSDthQUFNO1lBQ0wsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDaEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBbUM7UUFDN0MsTUFBTSxPQUFPLEdBQUcsa0JBQUssa0JBQWtCLENBQW9CLENBQUM7UUFDNUQsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDOUI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFFMUIsUUFBQSxLQUFLLEdBQUc7SUFDbkIsTUFBTSxDQUFDLE9BQWMsRUFBRSxTQUFxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDN0QsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFDRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDbEMsc0JBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM5RDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFBSyxTQUFTLENBQVcsQ0FBQztRQUMxQyxPQUFPLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN4QixPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDL0IsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3JCLHNCQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FDL0MsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLE9BQU8sR0FBRyxrQkFBSyxTQUFTLENBQVcsQ0FBQztRQUMxQyxPQUFPLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ2pFLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDakMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsc0JBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFjO1FBQ25CLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDNUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN6QyxDQUFDO1NBQ0g7YUFBTTtZQUNMLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQTBCO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLGtCQUFLLFNBQVMsQ0FBVyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckQsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDakUsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUNqQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxzQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLEdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFFdkMsUUFBQSxjQUFjLEdBQUc7SUFDNUIsTUFBTSxDQUNKLE9BQXVCLEVBQ3ZCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFBSyxrQkFBa0IsQ0FBb0IsQ0FBQztRQUM1RCxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDN0IsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUM5QixNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLE9BQU8sR0FBRyxrQkFBSyxrQkFBa0IsQ0FBb0IsQ0FBQztRQUM1RCxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDdkQsT0FBTyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUF1QjtRQUM1QixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsS0FBSyxTQUFTO1lBQ3ZCLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQ3hCLE9BQU8sQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUMzRCxDQUFDLENBQUM7UUFDTCxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVM7WUFDekIsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FDMUIsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQy9ELENBQUMsQ0FBQztRQUNMLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQW1DO1FBQzdDLE1BQU0sT0FBTyxHQUFHLGtCQUFLLGtCQUFrQixDQUFvQixDQUFDO1FBQzVELElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDbkQsT0FBTyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQzFCO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7U0FDaEM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM5QjthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDOUI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLFlBQVksR0FBVyxFQUFFLE1BQU0sRUFBRSxjQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUVoRCxRQUFBLFFBQVEsR0FBRztJQUN0QixNQUFNLENBQ0osT0FBaUIsRUFDakIsU0FBcUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBRXhDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUNoQyx5QkFBaUIsQ0FBQyxNQUFNLENBQ3RCLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDekIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE4QixFQUFFLE1BQWU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUFLLFlBQVksQ0FBYyxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBVSxDQUFDO29CQUN4QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDaEMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxNQUFNLEdBQUcseUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDbkUsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsa0JBQUssWUFBWSxDQUFjLENBQUM7UUFDaEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxPQUFPLENBQUMsTUFBTSxHQUFHLGNBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsT0FBTyxDQUFDLE1BQU0sR0FBRyx5QkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUM1QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBaUI7UUFDdEIsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUztZQUMxQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEVBQUUsS0FBSyxTQUFTO1lBQ3RCLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxlQUFlLENBQ3ZCLE9BQU8sQ0FBQyxFQUFFLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUN6RCxDQUFDLENBQUM7UUFDTCxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDMUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNO2dCQUMxQixDQUFDLENBQUMseUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBNkI7UUFDdkMsTUFBTSxPQUFPLEdBQUcsa0JBQUssWUFBWSxDQUFjLENBQUM7UUFDaEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFjLENBQUM7U0FDeEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxNQUFNLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUM1QjtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDdkQsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzlCO2FBQU07WUFDTCxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNuQjtRQUNELElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDakQsT0FBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7U0FDL0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxNQUFNLEdBQUcseUJBQWlCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0wsT0FBTyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFXLEVBQUUsS0FBSyxFQUFFLGNBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUV0QyxRQUFBLFNBQVMsR0FBRztJQUN2QixNQUFNLENBQ0osT0FBa0IsRUFDbEIsU0FBcUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBRXhDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxrQkFBSyxhQUFhLENBQWUsQ0FBQztRQUNsRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDakMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU07YUFDVDtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLGtCQUFLLGFBQWEsQ0FBZSxDQUFDO1FBQ2xELElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDM0QsT0FBTyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxPQUFPLENBQUMsS0FBSyxHQUFHLGNBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxPQUFPLENBQUMsS0FBSyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDM0I7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWtCO1FBQ3ZCLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFDM0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FDNUIsT0FBTyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQ25FLENBQUMsQ0FBQztRQUNMLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUztZQUN6QixDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUE4QjtRQUN4QyxNQUFNLE9BQU8sR0FBRyxrQkFBSyxhQUFhLENBQWUsQ0FBQztRQUNsRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQzNELE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNsQzthQUFNO1lBQ0wsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFhLENBQUM7U0FDdEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUMzQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxtQkFBbUIsR0FBVyxFQUFFLEtBQUssRUFBRSxjQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFNUMsUUFBQSxlQUFlLEdBQUc7SUFDN0IsTUFBTSxDQUNKLE9BQXdCLEVBQ3hCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ2hDLGdCQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE4QixFQUFFLE1BQWU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUFLLG1CQUFtQixDQUFxQixDQUFDO1FBQzlELE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZ0JBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsa0JBQUssbUJBQW1CLENBQXFCLENBQUM7UUFDOUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxPQUFPLENBQUMsTUFBTSxHQUFHLGdCQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsT0FBTyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLEdBQUcsY0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUMzQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBd0I7UUFDN0IsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUztZQUMxQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07Z0JBQzFCLENBQUMsQ0FBQyxnQkFBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUNsQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakIsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTO1lBQ3pCLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQW9DO1FBQzlDLE1BQU0sT0FBTyxHQUFHLGtCQUFLLG1CQUFtQixDQUFxQixDQUFDO1FBQzlELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsT0FBTyxDQUFDLE1BQU0sR0FBRyxnQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2RCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFhLENBQUM7U0FDdEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQztTQUMzQjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQVcsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFFM0MsUUFBQSxRQUFRLEdBQUc7SUFDdEIsTUFBTSxDQUNKLE9BQWlCLEVBQ2pCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ25DLGlCQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxPQUFPLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtZQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQThCLEVBQUUsTUFBZTtRQUNwRCxNQUFNLE1BQU0sR0FBRyxLQUFLLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0UsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDbEUsTUFBTSxPQUFPLEdBQUcsa0JBQUssWUFBWSxDQUFjLENBQUM7UUFDaEQsT0FBTyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLFNBQVMsR0FBRyxpQkFBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzlELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QyxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLE9BQU8sR0FBRyxrQkFBSyxZQUFZLENBQWMsQ0FBQztRQUNoRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQy9ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsaUJBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUMvQjtRQUNELElBQ0UsTUFBTSxDQUFDLGVBQWUsS0FBSyxTQUFTO1lBQ3BDLE1BQU0sQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUMvQjtZQUNBLE9BQU8sQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMzRDthQUFNO1lBQ0wsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDakM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWlCO1FBQ3RCLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVM7WUFDN0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTO2dCQUNoQyxDQUFDLENBQUMsaUJBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxlQUFlLEtBQUssU0FBUztZQUNuQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUE2QjtRQUN2QyxNQUFNLE9BQU8sR0FBRyxrQkFBSyxZQUFZLENBQWMsQ0FBQztRQUNoRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQy9ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsaUJBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUMvQjtRQUNELElBQ0UsTUFBTSxDQUFDLGVBQWUsS0FBSyxTQUFTO1lBQ3BDLE1BQU0sQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUMvQjtZQUNBLE9BQU8sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztTQUNsRDthQUFNO1lBQ0wsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDakM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFXO0lBQzNCLElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxFQUFFLGNBQUksQ0FBQyxJQUFJO0lBQ2pCLGdCQUFnQixFQUFFLGNBQUksQ0FBQyxJQUFJO0NBQzVCLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRztJQUN0QixNQUFNLENBQ0osT0FBaUIsRUFDakIsU0FBcUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBRXhDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNuQyxpQkFBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4RTtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDOUIscUJBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDbkU7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE4QixFQUFFLE1BQWU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUFLLFlBQVksQ0FBYyxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBUyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsU0FBUyxHQUFHLGlCQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDOUQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUM7b0JBQ3hDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUN6RCxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBVSxDQUFDO29CQUNsRCxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO2FBQ1Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLE9BQU8sR0FBRyxrQkFBSyxZQUFZLENBQWMsQ0FBQztRQUNoRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDL0QsT0FBTyxDQUFDLFNBQVMsR0FBRyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxPQUFPLENBQUMsTUFBTSxHQUFHLGNBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUMxQjtRQUNELElBQ0UsTUFBTSxDQUFDLGdCQUFnQixLQUFLLFNBQVM7WUFDckMsTUFBTSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFDaEM7WUFDQSxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsY0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsT0FBTyxDQUFDLGdCQUFnQixHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDdEM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWlCO1FBQ3RCLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQzdCLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUztnQkFDaEMsQ0FBQyxDQUFDLGlCQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDMUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFDeEIsQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFDUCxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVM7b0JBQ3hCLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtvQkFDM0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLGdCQUFnQixLQUFLLFNBQVM7WUFDcEMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsQ0FDdEIsT0FBTyxDQUFDLGdCQUFnQixJQUFJLGNBQUksQ0FBQyxJQUFJLENBQ3RDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBNkI7UUFDdkMsTUFBTSxPQUFPLEdBQUcsa0JBQUssWUFBWSxDQUFjLENBQUM7UUFDaEQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyRCxPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDNUI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMvRCxPQUFPLENBQUMsU0FBUyxHQUFHLGlCQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDL0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQWMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBTyxDQUFDLE1BQU0sR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyRCxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDMUI7UUFDRCxJQUNFLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTO1lBQ3JDLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQ2hDO1lBQ0EsT0FBTyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBd0IsQ0FBQztTQUM1RDthQUFNO1lBQ0wsT0FBTyxDQUFDLGdCQUFnQixHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUM7U0FDdEM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFXLEVBQUUsTUFBTSxFQUFFLGNBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFFN0QsUUFBQSxRQUFRLEdBQUc7SUFDdEIsTUFBTSxDQUNKLE9BQWlCLEVBQ2pCLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUV4QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE4QixFQUFFLE1BQWU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xFLE1BQU0sT0FBTyxHQUFHLGtCQUFLLFlBQVksQ0FBYyxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDakIsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBVSxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDakMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2pDLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDbEMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsa0JBQUssWUFBWSxDQUFjLENBQUM7UUFDaEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxPQUFPLENBQUMsTUFBTSxHQUFHLGNBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDN0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFpQjtRQUN0QixNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQzFCLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUztZQUN4QixDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUN6QixPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FDN0QsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTO1lBQzVCLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQzdCLE9BQU8sQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUNyRSxDQUFDLENBQUM7UUFDTCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBNkI7UUFDdkMsTUFBTSxPQUFPLEdBQUcsa0JBQUssWUFBWSxDQUFjLENBQUM7UUFDaEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6RCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFjLENBQUM7U0FDeEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxNQUFNLEdBQUcsY0FBSSxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2hDO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekQsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2hDO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUNELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckQsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzdELE9BQU8sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUM7QUF3QkYsTUFBYSx5QkFBeUI7SUFFcEMsWUFBWSxHQUFRO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJLENBQUMsT0FBb0I7UUFDdkIsTUFBTSxJQUFJLEdBQUcsbUJBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLGlDQUFpQyxFQUNqQyxNQUFNLEVBQ04sSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLG9CQUFZLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBcUI7UUFDekIsTUFBTSxJQUFJLEdBQUcsb0JBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLGlDQUFpQyxFQUNqQyxPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLHFCQUFhLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBb0I7UUFDdkIsTUFBTSxJQUFJLEdBQUcsbUJBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLGlDQUFpQyxFQUNqQyxNQUFNLEVBQ04sSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLG9CQUFZLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxTQUFTLENBQUMsT0FBeUI7UUFDakMsTUFBTSxJQUFJLEdBQUcsd0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUM5QixpQ0FBaUMsRUFDakMsV0FBVyxFQUNYLElBQUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDM0IseUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLENBQUMsT0FBeUI7UUFDakMsTUFBTSxJQUFJLEdBQUcsd0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUM5QixpQ0FBaUMsRUFDakMsV0FBVyxFQUNYLElBQUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDM0IseUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBdUI7UUFDN0IsTUFBTSxJQUFJLEdBQUcsc0JBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLGlDQUFpQyxFQUNqQyxTQUFTLEVBQ1QsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLHVCQUFlLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBcUI7UUFDekIsTUFBTSxJQUFJLEdBQUcsb0JBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLGlDQUFpQyxFQUNqQyxPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLHFCQUFhLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBc0I7UUFDM0IsTUFBTSxJQUFJLEdBQUcscUJBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLGlDQUFpQyxFQUNqQyxRQUFRLEVBQ1IsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLHNCQUFjLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxTQUFTLENBQUMsT0FBeUI7UUFDakMsTUFBTSxJQUFJLEdBQUcsd0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUM5QixpQ0FBaUMsRUFDakMsV0FBVyxFQUNYLElBQUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDM0IseUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBMEI7UUFDbkMsTUFBTSxJQUFJLEdBQUcseUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUM5QixpQ0FBaUMsRUFDakMsWUFBWSxFQUNaLElBQUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDM0IsMEJBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDaEQsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRLENBQUMsT0FBd0I7UUFDL0IsTUFBTSxJQUFJLEdBQUcsdUJBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLGlDQUFpQyxFQUNqQyxVQUFVLEVBQ1YsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUMzQix3QkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUM5QyxDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUE2QjtRQUN6QyxNQUFNLElBQUksR0FBRyw0QkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLGlDQUFpQyxFQUNqQyxlQUFlLEVBQ2YsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUMzQiw2QkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUE2QjtRQUN6QyxNQUFNLElBQUksR0FBRyw0QkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQzlCLGlDQUFpQyxFQUNqQyxlQUFlLEVBQ2YsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUMzQiw2QkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQixDQUNmLE9BQWlDO1FBRWpDLE1BQU0sSUFBSSxHQUFHLGdDQUF3QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FDOUIsaUNBQWlDLEVBQ2pDLG1CQUFtQixFQUNuQixJQUFJLENBQ0wsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQzNCLGlDQUF5QixDQUFDLE1BQU0sQ0FBQyxJQUFJLGlCQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3ZELENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQ2hCLE9BQWtDO1FBRWxDLE1BQU0sSUFBSSxHQUFHLGlDQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FDOUIsaUNBQWlDLEVBQ2pDLG9CQUFvQixFQUNwQixJQUFJLENBQ0wsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQzNCLGtDQUEwQixDQUFDLE1BQU0sQ0FBQyxJQUFJLGlCQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFoTEQsOERBZ0xDO0FBWUQsSUFBSSxVQUFVLEdBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDMUIsSUFBSSxPQUFPLFVBQVUsS0FBSyxXQUFXO1FBQUUsT0FBTyxVQUFVLENBQUM7SUFDekQsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDN0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXO1FBQUUsT0FBTyxNQUFNLENBQUM7SUFDakQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXO1FBQUUsT0FBTyxNQUFNLENBQUM7SUFDakQsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsTUFBTSxJQUFJLEdBQ1IsVUFBVSxDQUFDLElBQUk7SUFDZixDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDdEUsU0FBUyxlQUFlLENBQUMsR0FBVztJQUNsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxJQUFJLEdBQ1IsVUFBVSxDQUFDLElBQUk7SUFDZixDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDdEUsU0FBUyxlQUFlLENBQUMsR0FBZTtJQUN0QyxNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7SUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQW9CRCxTQUFTLFdBQVcsQ0FBQyxJQUFVO0lBQzdCLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSyxDQUFDLENBQUM7SUFDckQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSyxDQUFDLEdBQUcsT0FBUyxDQUFDO0lBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDNUIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLENBQVk7SUFDakMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFLLENBQUM7SUFDMUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsT0FBUyxDQUFDO0lBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsQ0FBTTtJQUMvQixJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUU7UUFDckIsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkI7U0FBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNoQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pDO1NBQU07UUFDTCxPQUFPLHFCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlCO0FBQ0gsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLE1BQWM7SUFDbEMsT0FBTyxjQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFFRCxJQUFJLGlCQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxjQUFJLEVBQUU7SUFDMUIsaUJBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQVcsQ0FBQztJQUM1QixpQkFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0NBQ2pCIn0=