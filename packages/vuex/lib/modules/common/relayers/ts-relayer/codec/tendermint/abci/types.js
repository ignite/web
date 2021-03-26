"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e5) { throw _e5; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e6) { didErr = true; err = _e6; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = exports.LastCommitInfo = exports.BlockParams = exports.ConsensusParams = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseEndBlock = exports.ResponseDeliverTx = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseSetOption = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestEndBlock = exports.RequestDeliverTx = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestQuery = exports.RequestInitChain = exports.RequestSetOption = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.responseApplySnapshotChunk_ResultToJSON = exports.responseApplySnapshotChunk_ResultFromJSON = exports.ResponseApplySnapshotChunk_Result = exports.responseOfferSnapshot_ResultToJSON = exports.responseOfferSnapshot_ResultFromJSON = exports.ResponseOfferSnapshot_Result = exports.evidenceTypeToJSON = exports.evidenceTypeFromJSON = exports.EvidenceType = exports.checkTxTypeToJSON = exports.checkTxTypeFromJSON = exports.CheckTxType = exports.protobufPackage = void 0;
exports.ABCIApplicationClientImpl = exports.Snapshot = exports.Evidence = exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.EventAttribute = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var timestamp_1 = require("../../google/protobuf/timestamp");

var types_1 = require("../../tendermint/types/types");

var proof_1 = require("../../tendermint/crypto/proof");

var params_1 = require("../../tendermint/types/params");

var keys_1 = require("../../tendermint/crypto/keys");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

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
var baseRequest = {};
exports.Request = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequest);

    if (object.echo !== undefined && object.echo !== null) {
      message.echo = exports.RequestEcho.fromJSON(object.echo);
    } else {
      message.echo = undefined;
    }

    if (object.flush !== undefined && object.flush !== null) {
      message.flush = exports.RequestFlush.fromJSON(object.flush);
    } else {
      message.flush = undefined;
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = exports.RequestInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }

    if (object.setOption !== undefined && object.setOption !== null) {
      message.setOption = exports.RequestSetOption.fromJSON(object.setOption);
    } else {
      message.setOption = undefined;
    }

    if (object.initChain !== undefined && object.initChain !== null) {
      message.initChain = exports.RequestInitChain.fromJSON(object.initChain);
    } else {
      message.initChain = undefined;
    }

    if (object.query !== undefined && object.query !== null) {
      message.query = exports.RequestQuery.fromJSON(object.query);
    } else {
      message.query = undefined;
    }

    if (object.beginBlock !== undefined && object.beginBlock !== null) {
      message.beginBlock = exports.RequestBeginBlock.fromJSON(object.beginBlock);
    } else {
      message.beginBlock = undefined;
    }

    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = exports.RequestCheckTx.fromJSON(object.checkTx);
    } else {
      message.checkTx = undefined;
    }

    if (object.deliverTx !== undefined && object.deliverTx !== null) {
      message.deliverTx = exports.RequestDeliverTx.fromJSON(object.deliverTx);
    } else {
      message.deliverTx = undefined;
    }

    if (object.endBlock !== undefined && object.endBlock !== null) {
      message.endBlock = exports.RequestEndBlock.fromJSON(object.endBlock);
    } else {
      message.endBlock = undefined;
    }

    if (object.commit !== undefined && object.commit !== null) {
      message.commit = exports.RequestCommit.fromJSON(object.commit);
    } else {
      message.commit = undefined;
    }

    if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
      message.listSnapshots = exports.RequestListSnapshots.fromJSON(object.listSnapshots);
    } else {
      message.listSnapshots = undefined;
    }

    if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
      message.offerSnapshot = exports.RequestOfferSnapshot.fromJSON(object.offerSnapshot);
    } else {
      message.offerSnapshot = undefined;
    }

    if (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null) {
      message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk);
    } else {
      message.loadSnapshotChunk = undefined;
    }

    if (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null) {
      message.applySnapshotChunk = exports.RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk);
    } else {
      message.applySnapshotChunk = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.echo !== undefined && (obj.echo = message.echo ? exports.RequestEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined && (obj.flush = message.flush ? exports.RequestFlush.toJSON(message.flush) : undefined);
    message.info !== undefined && (obj.info = message.info ? exports.RequestInfo.toJSON(message.info) : undefined);
    message.setOption !== undefined && (obj.setOption = message.setOption ? exports.RequestSetOption.toJSON(message.setOption) : undefined);
    message.initChain !== undefined && (obj.initChain = message.initChain ? exports.RequestInitChain.toJSON(message.initChain) : undefined);
    message.query !== undefined && (obj.query = message.query ? exports.RequestQuery.toJSON(message.query) : undefined);
    message.beginBlock !== undefined && (obj.beginBlock = message.beginBlock ? exports.RequestBeginBlock.toJSON(message.beginBlock) : undefined);
    message.checkTx !== undefined && (obj.checkTx = message.checkTx ? exports.RequestCheckTx.toJSON(message.checkTx) : undefined);
    message.deliverTx !== undefined && (obj.deliverTx = message.deliverTx ? exports.RequestDeliverTx.toJSON(message.deliverTx) : undefined);
    message.endBlock !== undefined && (obj.endBlock = message.endBlock ? exports.RequestEndBlock.toJSON(message.endBlock) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? exports.RequestCommit.toJSON(message.commit) : undefined);
    message.listSnapshots !== undefined && (obj.listSnapshots = message.listSnapshots ? exports.RequestListSnapshots.toJSON(message.listSnapshots) : undefined);
    message.offerSnapshot !== undefined && (obj.offerSnapshot = message.offerSnapshot ? exports.RequestOfferSnapshot.toJSON(message.offerSnapshot) : undefined);
    message.loadSnapshotChunk !== undefined && (obj.loadSnapshotChunk = message.loadSnapshotChunk ? exports.RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk) : undefined);
    message.applySnapshotChunk !== undefined && (obj.applySnapshotChunk = message.applySnapshotChunk ? exports.RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequest);

    if (object.echo !== undefined && object.echo !== null) {
      message.echo = exports.RequestEcho.fromPartial(object.echo);
    } else {
      message.echo = undefined;
    }

    if (object.flush !== undefined && object.flush !== null) {
      message.flush = exports.RequestFlush.fromPartial(object.flush);
    } else {
      message.flush = undefined;
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = exports.RequestInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }

    if (object.setOption !== undefined && object.setOption !== null) {
      message.setOption = exports.RequestSetOption.fromPartial(object.setOption);
    } else {
      message.setOption = undefined;
    }

    if (object.initChain !== undefined && object.initChain !== null) {
      message.initChain = exports.RequestInitChain.fromPartial(object.initChain);
    } else {
      message.initChain = undefined;
    }

    if (object.query !== undefined && object.query !== null) {
      message.query = exports.RequestQuery.fromPartial(object.query);
    } else {
      message.query = undefined;
    }

    if (object.beginBlock !== undefined && object.beginBlock !== null) {
      message.beginBlock = exports.RequestBeginBlock.fromPartial(object.beginBlock);
    } else {
      message.beginBlock = undefined;
    }

    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = exports.RequestCheckTx.fromPartial(object.checkTx);
    } else {
      message.checkTx = undefined;
    }

    if (object.deliverTx !== undefined && object.deliverTx !== null) {
      message.deliverTx = exports.RequestDeliverTx.fromPartial(object.deliverTx);
    } else {
      message.deliverTx = undefined;
    }

    if (object.endBlock !== undefined && object.endBlock !== null) {
      message.endBlock = exports.RequestEndBlock.fromPartial(object.endBlock);
    } else {
      message.endBlock = undefined;
    }

    if (object.commit !== undefined && object.commit !== null) {
      message.commit = exports.RequestCommit.fromPartial(object.commit);
    } else {
      message.commit = undefined;
    }

    if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
      message.listSnapshots = exports.RequestListSnapshots.fromPartial(object.listSnapshots);
    } else {
      message.listSnapshots = undefined;
    }

    if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
      message.offerSnapshot = exports.RequestOfferSnapshot.fromPartial(object.offerSnapshot);
    } else {
      message.offerSnapshot = undefined;
    }

    if (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null) {
      message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk);
    } else {
      message.loadSnapshotChunk = undefined;
    }

    if (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null) {
      message.applySnapshotChunk = exports.RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk);
    } else {
      message.applySnapshotChunk = undefined;
    }

    return message;
  }
};
var baseRequestEcho = {
  message: ''
};
exports.RequestEcho = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestEcho);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestEcho);

    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestEcho);

    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = '';
    }

    return message;
  }
};
var baseRequestFlush = {};
exports.RequestFlush = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestFlush);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(_) {
    var message = Object.assign({}, baseRequestFlush);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseRequestFlush);
    return message;
  }
};
var baseRequestInfo = {
  version: '',
  blockVersion: long_1["default"].UZERO,
  p2pVersion: long_1["default"].UZERO
};
exports.RequestInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestInfo);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestInfo);

    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = '';
    }

    if (object.blockVersion !== undefined && object.blockVersion !== null) {
      message.blockVersion = long_1["default"].fromString(object.blockVersion);
    } else {
      message.blockVersion = long_1["default"].UZERO;
    }

    if (object.p2pVersion !== undefined && object.p2pVersion !== null) {
      message.p2pVersion = long_1["default"].fromString(object.p2pVersion);
    } else {
      message.p2pVersion = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.version !== undefined && (obj.version = message.version);
    message.blockVersion !== undefined && (obj.blockVersion = (message.blockVersion || long_1["default"].UZERO).toString());
    message.p2pVersion !== undefined && (obj.p2pVersion = (message.p2pVersion || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestInfo);

    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = '';
    }

    if (object.blockVersion !== undefined && object.blockVersion !== null) {
      message.blockVersion = object.blockVersion;
    } else {
      message.blockVersion = long_1["default"].UZERO;
    }

    if (object.p2pVersion !== undefined && object.p2pVersion !== null) {
      message.p2pVersion = object.p2pVersion;
    } else {
      message.p2pVersion = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseRequestSetOption = {
  key: '',
  value: ''
};
exports.RequestSetOption = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestSetOption);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestSetOption);

    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = '';
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestSetOption);

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = '';
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = '';
    }

    return message;
  }
};
var baseRequestInitChain = {
  chainId: '',
  initialHeight: long_1["default"].ZERO
};
exports.RequestInitChain = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.time !== undefined) {
      timestamp_1.Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== '') {
      writer.uint32(18).string(message.chainId);
    }

    if (message.consensusParams !== undefined) {
      exports.ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }

    var _iterator = _createForOfIteratorHelper(message.validators),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }

    if (!message.initialHeight.isZero()) {
      writer.uint32(48).int64(message.initialHeight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestInitChain);
    message.validators = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestInitChain);
    message.validators = [];

    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time);
    } else {
      message.time = undefined;
    }

    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = '';
    }

    if (object.consensusParams !== undefined && object.consensusParams !== null) {
      message.consensusParams = exports.ConsensusParams.fromJSON(object.consensusParams);
    } else {
      message.consensusParams = undefined;
    }

    if (object.validators !== undefined && object.validators !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.validators),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.validators.push(exports.ValidatorUpdate.fromJSON(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    if (object.appStateBytes !== undefined && object.appStateBytes !== null) {
      message.appStateBytes = bytesFromBase64(object.appStateBytes);
    }

    if (object.initialHeight !== undefined && object.initialHeight !== null) {
      message.initialHeight = long_1["default"].fromString(object.initialHeight);
    } else {
      message.initialHeight = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.time !== undefined && (obj.time = message.time !== undefined ? fromTimestamp(message.time).toISOString() : null);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? exports.ConsensusParams.toJSON(message.consensusParams) : undefined);

    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? exports.ValidatorUpdate.toJSON(e) : undefined;
      });
    } else {
      obj.validators = [];
    }

    message.appStateBytes !== undefined && (obj.appStateBytes = base64FromBytes(message.appStateBytes !== undefined ? message.appStateBytes : new Uint8Array()));
    message.initialHeight !== undefined && (obj.initialHeight = (message.initialHeight || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestInitChain);
    message.validators = [];

    if (object.time !== undefined && object.time !== null) {
      message.time = timestamp_1.Timestamp.fromPartial(object.time);
    } else {
      message.time = undefined;
    }

    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = '';
    }

    if (object.consensusParams !== undefined && object.consensusParams !== null) {
      message.consensusParams = exports.ConsensusParams.fromPartial(object.consensusParams);
    } else {
      message.consensusParams = undefined;
    }

    if (object.validators !== undefined && object.validators !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.validators),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.validators.push(exports.ValidatorUpdate.fromPartial(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.appStateBytes !== undefined && object.appStateBytes !== null) {
      message.appStateBytes = object.appStateBytes;
    } else {
      message.appStateBytes = new Uint8Array();
    }

    if (object.initialHeight !== undefined && object.initialHeight !== null) {
      message.initialHeight = object.initialHeight;
    } else {
      message.initialHeight = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseRequestQuery = {
  path: '',
  height: long_1["default"].ZERO,
  prove: false
};
exports.RequestQuery = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestQuery);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestQuery);

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }

    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = '';
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.prove !== undefined && object.prove !== null) {
      message.prove = Boolean(object.prove);
    } else {
      message.prove = false;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.path !== undefined && (obj.path = message.path);
    message.height !== undefined && (obj.height = (message.height || long_1["default"].ZERO).toString());
    message.prove !== undefined && (obj.prove = message.prove);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestQuery);

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = '';
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.prove !== undefined && object.prove !== null) {
      message.prove = object.prove;
    } else {
      message.prove = false;
    }

    return message;
  }
};
var baseRequestBeginBlock = {};
exports.RequestBeginBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }

    if (message.header !== undefined) {
      types_1.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }

    if (message.lastCommitInfo !== undefined) {
      exports.LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }

    var _iterator4 = _createForOfIteratorHelper(message.byzantineValidators),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        exports.Evidence.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestBeginBlock);
    message.byzantineValidators = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestBeginBlock);
    message.byzantineValidators = [];

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }

    if (object.header !== undefined && object.header !== null) {
      message.header = types_1.Header.fromJSON(object.header);
    } else {
      message.header = undefined;
    }

    if (object.lastCommitInfo !== undefined && object.lastCommitInfo !== null) {
      message.lastCommitInfo = exports.LastCommitInfo.fromJSON(object.lastCommitInfo);
    } else {
      message.lastCommitInfo = undefined;
    }

    if (object.byzantineValidators !== undefined && object.byzantineValidators !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.byzantineValidators),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.byzantineValidators.push(exports.Evidence.fromJSON(e));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.header !== undefined && (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
    message.lastCommitInfo !== undefined && (obj.lastCommitInfo = message.lastCommitInfo ? exports.LastCommitInfo.toJSON(message.lastCommitInfo) : undefined);

    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map(function (e) {
        return e ? exports.Evidence.toJSON(e) : undefined;
      });
    } else {
      obj.byzantineValidators = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestBeginBlock);
    message.byzantineValidators = [];

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }

    if (object.header !== undefined && object.header !== null) {
      message.header = types_1.Header.fromPartial(object.header);
    } else {
      message.header = undefined;
    }

    if (object.lastCommitInfo !== undefined && object.lastCommitInfo !== null) {
      message.lastCommitInfo = exports.LastCommitInfo.fromPartial(object.lastCommitInfo);
    } else {
      message.lastCommitInfo = undefined;
    }

    if (object.byzantineValidators !== undefined && object.byzantineValidators !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.byzantineValidators),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.byzantineValidators.push(exports.Evidence.fromPartial(e));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    return message;
  }
};
var baseRequestCheckTx = {
  type: 0
};
exports.RequestCheckTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }

    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestCheckTx);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestCheckTx);

    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }

    if (object.type !== undefined && object.type !== null) {
      message.type = checkTxTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
    message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestCheckTx);

    if (object.tx !== undefined && object.tx !== null) {
      message.tx = object.tx;
    } else {
      message.tx = new Uint8Array();
    }

    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }

    return message;
  }
};
var baseRequestDeliverTx = {};
exports.RequestDeliverTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestDeliverTx);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestDeliverTx);

    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestDeliverTx);

    if (object.tx !== undefined && object.tx !== null) {
      message.tx = object.tx;
    } else {
      message.tx = new Uint8Array();
    }

    return message;
  }
};
var baseRequestEndBlock = {
  height: long_1["default"].ZERO
};
exports.RequestEndBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestEndBlock);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestEndBlock);

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestEndBlock);

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseRequestCommit = {};
exports.RequestCommit = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestCommit);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(_) {
    var message = Object.assign({}, baseRequestCommit);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseRequestCommit);
    return message;
  }
};
var baseRequestListSnapshots = {};
exports.RequestListSnapshots = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestListSnapshots);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(_) {
    var message = Object.assign({}, baseRequestListSnapshots);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseRequestListSnapshots);
    return message;
  }
};
var baseRequestOfferSnapshot = {};
exports.RequestOfferSnapshot = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.snapshot !== undefined) {
      exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }

    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestOfferSnapshot);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestOfferSnapshot);

    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = exports.Snapshot.fromJSON(object.snapshot);
    } else {
      message.snapshot = undefined;
    }

    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = bytesFromBase64(object.appHash);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.snapshot !== undefined && (obj.snapshot = message.snapshot ? exports.Snapshot.toJSON(message.snapshot) : undefined);
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestOfferSnapshot);

    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = exports.Snapshot.fromPartial(object.snapshot);
    } else {
      message.snapshot = undefined;
    }

    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = object.appHash;
    } else {
      message.appHash = new Uint8Array();
    }

    return message;
  }
};
var baseRequestLoadSnapshotChunk = {
  height: long_1["default"].UZERO,
  format: 0,
  chunk: 0
};
exports.RequestLoadSnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestLoadSnapshotChunk);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestLoadSnapshotChunk);

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].UZERO;
    }

    if (object.format !== undefined && object.format !== null) {
      message.format = Number(object.format);
    } else {
      message.format = 0;
    }

    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = Number(object.chunk);
    } else {
      message.chunk = 0;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || long_1["default"].UZERO).toString());
    message.format !== undefined && (obj.format = message.format);
    message.chunk !== undefined && (obj.chunk = message.chunk);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestLoadSnapshotChunk);

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].UZERO;
    }

    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    } else {
      message.format = 0;
    }

    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = object.chunk;
    } else {
      message.chunk = 0;
    }

    return message;
  }
};
var baseRequestApplySnapshotChunk = {
  index: 0,
  sender: ''
};
exports.RequestApplySnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseRequestApplySnapshotChunk);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseRequestApplySnapshotChunk);

    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }

    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }

    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.chunk !== undefined && (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseRequestApplySnapshotChunk);

    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }

    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = object.chunk;
    } else {
      message.chunk = new Uint8Array();
    }

    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = '';
    }

    return message;
  }
};
var baseResponse = {};
exports.Response = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponse);

    if (object.exception !== undefined && object.exception !== null) {
      message.exception = exports.ResponseException.fromJSON(object.exception);
    } else {
      message.exception = undefined;
    }

    if (object.echo !== undefined && object.echo !== null) {
      message.echo = exports.ResponseEcho.fromJSON(object.echo);
    } else {
      message.echo = undefined;
    }

    if (object.flush !== undefined && object.flush !== null) {
      message.flush = exports.ResponseFlush.fromJSON(object.flush);
    } else {
      message.flush = undefined;
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = exports.ResponseInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }

    if (object.setOption !== undefined && object.setOption !== null) {
      message.setOption = exports.ResponseSetOption.fromJSON(object.setOption);
    } else {
      message.setOption = undefined;
    }

    if (object.initChain !== undefined && object.initChain !== null) {
      message.initChain = exports.ResponseInitChain.fromJSON(object.initChain);
    } else {
      message.initChain = undefined;
    }

    if (object.query !== undefined && object.query !== null) {
      message.query = exports.ResponseQuery.fromJSON(object.query);
    } else {
      message.query = undefined;
    }

    if (object.beginBlock !== undefined && object.beginBlock !== null) {
      message.beginBlock = exports.ResponseBeginBlock.fromJSON(object.beginBlock);
    } else {
      message.beginBlock = undefined;
    }

    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = exports.ResponseCheckTx.fromJSON(object.checkTx);
    } else {
      message.checkTx = undefined;
    }

    if (object.deliverTx !== undefined && object.deliverTx !== null) {
      message.deliverTx = exports.ResponseDeliverTx.fromJSON(object.deliverTx);
    } else {
      message.deliverTx = undefined;
    }

    if (object.endBlock !== undefined && object.endBlock !== null) {
      message.endBlock = exports.ResponseEndBlock.fromJSON(object.endBlock);
    } else {
      message.endBlock = undefined;
    }

    if (object.commit !== undefined && object.commit !== null) {
      message.commit = exports.ResponseCommit.fromJSON(object.commit);
    } else {
      message.commit = undefined;
    }

    if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
      message.listSnapshots = exports.ResponseListSnapshots.fromJSON(object.listSnapshots);
    } else {
      message.listSnapshots = undefined;
    }

    if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
      message.offerSnapshot = exports.ResponseOfferSnapshot.fromJSON(object.offerSnapshot);
    } else {
      message.offerSnapshot = undefined;
    }

    if (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null) {
      message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk);
    } else {
      message.loadSnapshotChunk = undefined;
    }

    if (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null) {
      message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk);
    } else {
      message.applySnapshotChunk = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.exception !== undefined && (obj.exception = message.exception ? exports.ResponseException.toJSON(message.exception) : undefined);
    message.echo !== undefined && (obj.echo = message.echo ? exports.ResponseEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined && (obj.flush = message.flush ? exports.ResponseFlush.toJSON(message.flush) : undefined);
    message.info !== undefined && (obj.info = message.info ? exports.ResponseInfo.toJSON(message.info) : undefined);
    message.setOption !== undefined && (obj.setOption = message.setOption ? exports.ResponseSetOption.toJSON(message.setOption) : undefined);
    message.initChain !== undefined && (obj.initChain = message.initChain ? exports.ResponseInitChain.toJSON(message.initChain) : undefined);
    message.query !== undefined && (obj.query = message.query ? exports.ResponseQuery.toJSON(message.query) : undefined);
    message.beginBlock !== undefined && (obj.beginBlock = message.beginBlock ? exports.ResponseBeginBlock.toJSON(message.beginBlock) : undefined);
    message.checkTx !== undefined && (obj.checkTx = message.checkTx ? exports.ResponseCheckTx.toJSON(message.checkTx) : undefined);
    message.deliverTx !== undefined && (obj.deliverTx = message.deliverTx ? exports.ResponseDeliverTx.toJSON(message.deliverTx) : undefined);
    message.endBlock !== undefined && (obj.endBlock = message.endBlock ? exports.ResponseEndBlock.toJSON(message.endBlock) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? exports.ResponseCommit.toJSON(message.commit) : undefined);
    message.listSnapshots !== undefined && (obj.listSnapshots = message.listSnapshots ? exports.ResponseListSnapshots.toJSON(message.listSnapshots) : undefined);
    message.offerSnapshot !== undefined && (obj.offerSnapshot = message.offerSnapshot ? exports.ResponseOfferSnapshot.toJSON(message.offerSnapshot) : undefined);
    message.loadSnapshotChunk !== undefined && (obj.loadSnapshotChunk = message.loadSnapshotChunk ? exports.ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk) : undefined);
    message.applySnapshotChunk !== undefined && (obj.applySnapshotChunk = message.applySnapshotChunk ? exports.ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponse);

    if (object.exception !== undefined && object.exception !== null) {
      message.exception = exports.ResponseException.fromPartial(object.exception);
    } else {
      message.exception = undefined;
    }

    if (object.echo !== undefined && object.echo !== null) {
      message.echo = exports.ResponseEcho.fromPartial(object.echo);
    } else {
      message.echo = undefined;
    }

    if (object.flush !== undefined && object.flush !== null) {
      message.flush = exports.ResponseFlush.fromPartial(object.flush);
    } else {
      message.flush = undefined;
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = exports.ResponseInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }

    if (object.setOption !== undefined && object.setOption !== null) {
      message.setOption = exports.ResponseSetOption.fromPartial(object.setOption);
    } else {
      message.setOption = undefined;
    }

    if (object.initChain !== undefined && object.initChain !== null) {
      message.initChain = exports.ResponseInitChain.fromPartial(object.initChain);
    } else {
      message.initChain = undefined;
    }

    if (object.query !== undefined && object.query !== null) {
      message.query = exports.ResponseQuery.fromPartial(object.query);
    } else {
      message.query = undefined;
    }

    if (object.beginBlock !== undefined && object.beginBlock !== null) {
      message.beginBlock = exports.ResponseBeginBlock.fromPartial(object.beginBlock);
    } else {
      message.beginBlock = undefined;
    }

    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = exports.ResponseCheckTx.fromPartial(object.checkTx);
    } else {
      message.checkTx = undefined;
    }

    if (object.deliverTx !== undefined && object.deliverTx !== null) {
      message.deliverTx = exports.ResponseDeliverTx.fromPartial(object.deliverTx);
    } else {
      message.deliverTx = undefined;
    }

    if (object.endBlock !== undefined && object.endBlock !== null) {
      message.endBlock = exports.ResponseEndBlock.fromPartial(object.endBlock);
    } else {
      message.endBlock = undefined;
    }

    if (object.commit !== undefined && object.commit !== null) {
      message.commit = exports.ResponseCommit.fromPartial(object.commit);
    } else {
      message.commit = undefined;
    }

    if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
      message.listSnapshots = exports.ResponseListSnapshots.fromPartial(object.listSnapshots);
    } else {
      message.listSnapshots = undefined;
    }

    if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
      message.offerSnapshot = exports.ResponseOfferSnapshot.fromPartial(object.offerSnapshot);
    } else {
      message.offerSnapshot = undefined;
    }

    if (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null) {
      message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk);
    } else {
      message.loadSnapshotChunk = undefined;
    }

    if (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null) {
      message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk);
    } else {
      message.applySnapshotChunk = undefined;
    }

    return message;
  }
};
var baseResponseException = {
  error: ''
};
exports.ResponseException = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.error !== '') {
      writer.uint32(10).string(message.error);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseException);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseException);

    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseException);

    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = '';
    }

    return message;
  }
};
var baseResponseEcho = {
  message: ''
};
exports.ResponseEcho = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseEcho);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseEcho);

    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseEcho);

    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = '';
    }

    return message;
  }
};
var baseResponseFlush = {};
exports.ResponseFlush = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseFlush);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(_) {
    var message = Object.assign({}, baseResponseFlush);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseResponseFlush);
    return message;
  }
};
var baseResponseInfo = {
  data: '',
  version: '',
  appVersion: long_1["default"].UZERO,
  lastBlockHeight: long_1["default"].ZERO
};
exports.ResponseInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseInfo);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseInfo);

    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = '';
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = '';
    }

    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = long_1["default"].fromString(object.appVersion);
    } else {
      message.appVersion = long_1["default"].UZERO;
    }

    if (object.lastBlockHeight !== undefined && object.lastBlockHeight !== null) {
      message.lastBlockHeight = long_1["default"].fromString(object.lastBlockHeight);
    } else {
      message.lastBlockHeight = long_1["default"].ZERO;
    }

    if (object.lastBlockAppHash !== undefined && object.lastBlockAppHash !== null) {
      message.lastBlockAppHash = bytesFromBase64(object.lastBlockAppHash);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.data !== undefined && (obj.data = message.data);
    message.version !== undefined && (obj.version = message.version);
    message.appVersion !== undefined && (obj.appVersion = (message.appVersion || long_1["default"].UZERO).toString());
    message.lastBlockHeight !== undefined && (obj.lastBlockHeight = (message.lastBlockHeight || long_1["default"].ZERO).toString());
    message.lastBlockAppHash !== undefined && (obj.lastBlockAppHash = base64FromBytes(message.lastBlockAppHash !== undefined ? message.lastBlockAppHash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseInfo);

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = '';
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = '';
    }

    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = object.appVersion;
    } else {
      message.appVersion = long_1["default"].UZERO;
    }

    if (object.lastBlockHeight !== undefined && object.lastBlockHeight !== null) {
      message.lastBlockHeight = object.lastBlockHeight;
    } else {
      message.lastBlockHeight = long_1["default"].ZERO;
    }

    if (object.lastBlockAppHash !== undefined && object.lastBlockAppHash !== null) {
      message.lastBlockAppHash = object.lastBlockAppHash;
    } else {
      message.lastBlockAppHash = new Uint8Array();
    }

    return message;
  }
};
var baseResponseSetOption = {
  code: 0,
  log: '',
  info: ''
};
exports.ResponseSetOption = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseSetOption);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseSetOption);

    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }

    if (object.log !== undefined && object.log !== null) {
      message.log = String(object.log);
    } else {
      message.log = '';
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info);
    } else {
      message.info = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.code !== undefined && (obj.code = message.code);
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseSetOption);

    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }

    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    } else {
      message.log = '';
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    } else {
      message.info = '';
    }

    return message;
  }
};
var baseResponseInitChain = {};
exports.ResponseInitChain = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.consensusParams !== undefined) {
      exports.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }

    var _iterator7 = _createForOfIteratorHelper(message.validators),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseInitChain);
    message.validators = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseInitChain);
    message.validators = [];

    if (object.consensusParams !== undefined && object.consensusParams !== null) {
      message.consensusParams = exports.ConsensusParams.fromJSON(object.consensusParams);
    } else {
      message.consensusParams = undefined;
    }

    if (object.validators !== undefined && object.validators !== null) {
      var _iterator8 = _createForOfIteratorHelper(object.validators),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var e = _step8.value;
          message.validators.push(exports.ValidatorUpdate.fromJSON(e));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }

    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = bytesFromBase64(object.appHash);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? exports.ConsensusParams.toJSON(message.consensusParams) : undefined);

    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? exports.ValidatorUpdate.toJSON(e) : undefined;
      });
    } else {
      obj.validators = [];
    }

    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseInitChain);
    message.validators = [];

    if (object.consensusParams !== undefined && object.consensusParams !== null) {
      message.consensusParams = exports.ConsensusParams.fromPartial(object.consensusParams);
    } else {
      message.consensusParams = undefined;
    }

    if (object.validators !== undefined && object.validators !== null) {
      var _iterator9 = _createForOfIteratorHelper(object.validators),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var e = _step9.value;
          message.validators.push(exports.ValidatorUpdate.fromPartial(e));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }

    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = object.appHash;
    } else {
      message.appHash = new Uint8Array();
    }

    return message;
  }
};
var baseResponseQuery = {
  code: 0,
  log: '',
  info: '',
  index: long_1["default"].ZERO,
  height: long_1["default"].ZERO,
  codespace: ''
};
exports.ResponseQuery = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseQuery);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseQuery);

    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }

    if (object.log !== undefined && object.log !== null) {
      message.log = String(object.log);
    } else {
      message.log = '';
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info);
    } else {
      message.info = '';
    }

    if (object.index !== undefined && object.index !== null) {
      message.index = long_1["default"].fromString(object.index);
    } else {
      message.index = long_1["default"].ZERO;
    }

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }

    if (object.proofOps !== undefined && object.proofOps !== null) {
      message.proofOps = proof_1.ProofOps.fromJSON(object.proofOps);
    } else {
      message.proofOps = undefined;
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = String(object.codespace);
    } else {
      message.codespace = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.code !== undefined && (obj.code = message.code);
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.index !== undefined && (obj.index = (message.index || long_1["default"].ZERO).toString());
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.proofOps !== undefined && (obj.proofOps = message.proofOps ? proof_1.ProofOps.toJSON(message.proofOps) : undefined);
    message.height !== undefined && (obj.height = (message.height || long_1["default"].ZERO).toString());
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseQuery);

    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }

    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    } else {
      message.log = '';
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    } else {
      message.info = '';
    }

    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = long_1["default"].ZERO;
    }

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }

    if (object.proofOps !== undefined && object.proofOps !== null) {
      message.proofOps = proof_1.ProofOps.fromPartial(object.proofOps);
    } else {
      message.proofOps = undefined;
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    } else {
      message.codespace = '';
    }

    return message;
  }
};
var baseResponseBeginBlock = {};
exports.ResponseBeginBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator10 = _createForOfIteratorHelper(message.events),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseBeginBlock);
    message.events = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseBeginBlock);
    message.events = [];

    if (object.events !== undefined && object.events !== null) {
      var _iterator11 = _createForOfIteratorHelper(object.events),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var e = _step11.value;
          message.events.push(exports.Event.fromJSON(e));
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? exports.Event.toJSON(e) : undefined;
      });
    } else {
      obj.events = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseBeginBlock);
    message.events = [];

    if (object.events !== undefined && object.events !== null) {
      var _iterator12 = _createForOfIteratorHelper(object.events),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var e = _step12.value;
          message.events.push(exports.Event.fromPartial(e));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }

    return message;
  }
};
var baseResponseCheckTx = {
  code: 0,
  log: '',
  info: '',
  gasWanted: long_1["default"].ZERO,
  gasUsed: long_1["default"].ZERO,
  codespace: ''
};
exports.ResponseCheckTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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

    var _iterator13 = _createForOfIteratorHelper(message.events),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var v = _step13.value;
        exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    if (message.codespace !== '') {
      writer.uint32(66).string(message.codespace);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseCheckTx);
    message.events = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseCheckTx);
    message.events = [];

    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }

    if (object.log !== undefined && object.log !== null) {
      message.log = String(object.log);
    } else {
      message.log = '';
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info);
    } else {
      message.info = '';
    }

    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = long_1["default"].fromString(object.gasWanted);
    } else {
      message.gasWanted = long_1["default"].ZERO;
    }

    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = long_1["default"].fromString(object.gasUsed);
    } else {
      message.gasUsed = long_1["default"].ZERO;
    }

    if (object.events !== undefined && object.events !== null) {
      var _iterator14 = _createForOfIteratorHelper(object.events),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var e = _step14.value;
          message.events.push(exports.Event.fromJSON(e));
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }

    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = String(object.codespace);
    } else {
      message.codespace = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.code !== undefined && (obj.code = message.code);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || long_1["default"].ZERO).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || long_1["default"].ZERO).toString());

    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? exports.Event.toJSON(e) : undefined;
      });
    } else {
      obj.events = [];
    }

    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseCheckTx);
    message.events = [];

    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }

    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    } else {
      message.log = '';
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    } else {
      message.info = '';
    }

    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = object.gasWanted;
    } else {
      message.gasWanted = long_1["default"].ZERO;
    }

    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = object.gasUsed;
    } else {
      message.gasUsed = long_1["default"].ZERO;
    }

    if (object.events !== undefined && object.events !== null) {
      var _iterator15 = _createForOfIteratorHelper(object.events),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var e = _step15.value;
          message.events.push(exports.Event.fromPartial(e));
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }

    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    } else {
      message.codespace = '';
    }

    return message;
  }
};
var baseResponseDeliverTx = {
  code: 0,
  log: '',
  info: '',
  gasWanted: long_1["default"].ZERO,
  gasUsed: long_1["default"].ZERO,
  codespace: ''
};
exports.ResponseDeliverTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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

    var _iterator16 = _createForOfIteratorHelper(message.events),
        _step16;

    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var v = _step16.value;
        exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }

    if (message.codespace !== '') {
      writer.uint32(66).string(message.codespace);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseDeliverTx);
    message.events = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseDeliverTx);
    message.events = [];

    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }

    if (object.log !== undefined && object.log !== null) {
      message.log = String(object.log);
    } else {
      message.log = '';
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info);
    } else {
      message.info = '';
    }

    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = long_1["default"].fromString(object.gasWanted);
    } else {
      message.gasWanted = long_1["default"].ZERO;
    }

    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = long_1["default"].fromString(object.gasUsed);
    } else {
      message.gasUsed = long_1["default"].ZERO;
    }

    if (object.events !== undefined && object.events !== null) {
      var _iterator17 = _createForOfIteratorHelper(object.events),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var e = _step17.value;
          message.events.push(exports.Event.fromJSON(e));
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    }

    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = String(object.codespace);
    } else {
      message.codespace = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.code !== undefined && (obj.code = message.code);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || long_1["default"].ZERO).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || long_1["default"].ZERO).toString());

    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? exports.Event.toJSON(e) : undefined;
      });
    } else {
      obj.events = [];
    }

    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseDeliverTx);
    message.events = [];

    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }

    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    } else {
      message.log = '';
    }

    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    } else {
      message.info = '';
    }

    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = object.gasWanted;
    } else {
      message.gasWanted = long_1["default"].ZERO;
    }

    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = object.gasUsed;
    } else {
      message.gasUsed = long_1["default"].ZERO;
    }

    if (object.events !== undefined && object.events !== null) {
      var _iterator18 = _createForOfIteratorHelper(object.events),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var e = _step18.value;
          message.events.push(exports.Event.fromPartial(e));
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }

    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    } else {
      message.codespace = '';
    }

    return message;
  }
};
var baseResponseEndBlock = {};
exports.ResponseEndBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator19 = _createForOfIteratorHelper(message.validatorUpdates),
        _step19;

    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var v = _step19.value;
        exports.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }

    if (message.consensusParamUpdates !== undefined) {
      exports.ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }

    var _iterator20 = _createForOfIteratorHelper(message.events),
        _step20;

    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var _v = _step20.value;
        exports.Event.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseEndBlock);
    message.validatorUpdates = [];
    message.events = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseEndBlock);
    message.validatorUpdates = [];
    message.events = [];

    if (object.validatorUpdates !== undefined && object.validatorUpdates !== null) {
      var _iterator21 = _createForOfIteratorHelper(object.validatorUpdates),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var e = _step21.value;
          message.validatorUpdates.push(exports.ValidatorUpdate.fromJSON(e));
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
    }

    if (object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null) {
      message.consensusParamUpdates = exports.ConsensusParams.fromJSON(object.consensusParamUpdates);
    } else {
      message.consensusParamUpdates = undefined;
    }

    if (object.events !== undefined && object.events !== null) {
      var _iterator22 = _createForOfIteratorHelper(object.events),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var _e = _step22.value;
          message.events.push(exports.Event.fromJSON(_e));
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.validatorUpdates) {
      obj.validatorUpdates = message.validatorUpdates.map(function (e) {
        return e ? exports.ValidatorUpdate.toJSON(e) : undefined;
      });
    } else {
      obj.validatorUpdates = [];
    }

    message.consensusParamUpdates !== undefined && (obj.consensusParamUpdates = message.consensusParamUpdates ? exports.ConsensusParams.toJSON(message.consensusParamUpdates) : undefined);

    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? exports.Event.toJSON(e) : undefined;
      });
    } else {
      obj.events = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseEndBlock);
    message.validatorUpdates = [];
    message.events = [];

    if (object.validatorUpdates !== undefined && object.validatorUpdates !== null) {
      var _iterator23 = _createForOfIteratorHelper(object.validatorUpdates),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var e = _step23.value;
          message.validatorUpdates.push(exports.ValidatorUpdate.fromPartial(e));
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
    }

    if (object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null) {
      message.consensusParamUpdates = exports.ConsensusParams.fromPartial(object.consensusParamUpdates);
    } else {
      message.consensusParamUpdates = undefined;
    }

    if (object.events !== undefined && object.events !== null) {
      var _iterator24 = _createForOfIteratorHelper(object.events),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var _e2 = _step24.value;
          message.events.push(exports.Event.fromPartial(_e2));
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }

    return message;
  }
};
var baseResponseCommit = {
  retainHeight: long_1["default"].ZERO
};
exports.ResponseCommit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (!message.retainHeight.isZero()) {
      writer.uint32(24).int64(message.retainHeight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseCommit);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseCommit);

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }

    if (object.retainHeight !== undefined && object.retainHeight !== null) {
      message.retainHeight = long_1["default"].fromString(object.retainHeight);
    } else {
      message.retainHeight = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.retainHeight !== undefined && (obj.retainHeight = (message.retainHeight || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseCommit);

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }

    if (object.retainHeight !== undefined && object.retainHeight !== null) {
      message.retainHeight = object.retainHeight;
    } else {
      message.retainHeight = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseResponseListSnapshots = {};
exports.ResponseListSnapshots = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator25 = _createForOfIteratorHelper(message.snapshots),
        _step25;

    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
        var v = _step25.value;
        exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseListSnapshots);
    message.snapshots = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseListSnapshots);
    message.snapshots = [];

    if (object.snapshots !== undefined && object.snapshots !== null) {
      var _iterator26 = _createForOfIteratorHelper(object.snapshots),
          _step26;

      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var e = _step26.value;
          message.snapshots.push(exports.Snapshot.fromJSON(e));
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.snapshots) {
      obj.snapshots = message.snapshots.map(function (e) {
        return e ? exports.Snapshot.toJSON(e) : undefined;
      });
    } else {
      obj.snapshots = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseListSnapshots);
    message.snapshots = [];

    if (object.snapshots !== undefined && object.snapshots !== null) {
      var _iterator27 = _createForOfIteratorHelper(object.snapshots),
          _step27;

      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var e = _step27.value;
          message.snapshots.push(exports.Snapshot.fromPartial(e));
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    }

    return message;
  }
};
var baseResponseOfferSnapshot = {
  result: 0
};
exports.ResponseOfferSnapshot = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseOfferSnapshot);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseOfferSnapshot);

    if (object.result !== undefined && object.result !== null) {
      message.result = responseOfferSnapshot_ResultFromJSON(object.result);
    } else {
      message.result = 0;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseOfferSnapshot);

    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = 0;
    }

    return message;
  }
};
var baseResponseLoadSnapshotChunk = {};
exports.ResponseLoadSnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseLoadSnapshotChunk);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseLoadSnapshotChunk);

    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.chunk !== undefined && (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseLoadSnapshotChunk);

    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = object.chunk;
    } else {
      message.chunk = new Uint8Array();
    }

    return message;
  }
};
var baseResponseApplySnapshotChunk = {
  result: 0,
  refetchChunks: 0,
  rejectSenders: ''
};
exports.ResponseApplySnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }

    writer.uint32(18).fork();

    var _iterator28 = _createForOfIteratorHelper(message.refetchChunks),
        _step28;

    try {
      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
        var v = _step28.value;
        writer.uint32(v);
      }
    } catch (err) {
      _iterator28.e(err);
    } finally {
      _iterator28.f();
    }

    writer.ldelim();

    var _iterator29 = _createForOfIteratorHelper(message.rejectSenders),
        _step29;

    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var _v2 = _step29.value;
        writer.uint32(26).string(_v2);
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseResponseApplySnapshotChunk);
    message.refetchChunks = [];
    message.rejectSenders = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        case 2:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseResponseApplySnapshotChunk);
    message.refetchChunks = [];
    message.rejectSenders = [];

    if (object.result !== undefined && object.result !== null) {
      message.result = responseApplySnapshotChunk_ResultFromJSON(object.result);
    } else {
      message.result = 0;
    }

    if (object.refetchChunks !== undefined && object.refetchChunks !== null) {
      var _iterator30 = _createForOfIteratorHelper(object.refetchChunks),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var e = _step30.value;
          message.refetchChunks.push(Number(e));
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
    }

    if (object.rejectSenders !== undefined && object.rejectSenders !== null) {
      var _iterator31 = _createForOfIteratorHelper(object.rejectSenders),
          _step31;

      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
          var _e3 = _step31.value;
          message.rejectSenders.push(String(_e3));
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));

    if (message.refetchChunks) {
      obj.refetchChunks = message.refetchChunks.map(function (e) {
        return e;
      });
    } else {
      obj.refetchChunks = [];
    }

    if (message.rejectSenders) {
      obj.rejectSenders = message.rejectSenders.map(function (e) {
        return e;
      });
    } else {
      obj.rejectSenders = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseResponseApplySnapshotChunk);
    message.refetchChunks = [];
    message.rejectSenders = [];

    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = 0;
    }

    if (object.refetchChunks !== undefined && object.refetchChunks !== null) {
      var _iterator32 = _createForOfIteratorHelper(object.refetchChunks),
          _step32;

      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var e = _step32.value;
          message.refetchChunks.push(e);
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
    }

    if (object.rejectSenders !== undefined && object.rejectSenders !== null) {
      var _iterator33 = _createForOfIteratorHelper(object.rejectSenders),
          _step33;

      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var _e4 = _step33.value;
          message.rejectSenders.push(_e4);
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
    }

    return message;
  }
};
var baseConsensusParams = {};
exports.ConsensusParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseConsensusParams);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseConsensusParams);

    if (object.block !== undefined && object.block !== null) {
      message.block = exports.BlockParams.fromJSON(object.block);
    } else {
      message.block = undefined;
    }

    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = params_1.EvidenceParams.fromJSON(object.evidence);
    } else {
      message.evidence = undefined;
    }

    if (object.validator !== undefined && object.validator !== null) {
      message.validator = params_1.ValidatorParams.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = params_1.VersionParams.fromJSON(object.version);
    } else {
      message.version = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toJSON(message.block) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? params_1.EvidenceParams.toJSON(message.evidence) : undefined);
    message.validator !== undefined && (obj.validator = message.validator ? params_1.ValidatorParams.toJSON(message.validator) : undefined);
    message.version !== undefined && (obj.version = message.version ? params_1.VersionParams.toJSON(message.version) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseConsensusParams);

    if (object.block !== undefined && object.block !== null) {
      message.block = exports.BlockParams.fromPartial(object.block);
    } else {
      message.block = undefined;
    }

    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = params_1.EvidenceParams.fromPartial(object.evidence);
    } else {
      message.evidence = undefined;
    }

    if (object.validator !== undefined && object.validator !== null) {
      message.validator = params_1.ValidatorParams.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = params_1.VersionParams.fromPartial(object.version);
    } else {
      message.version = undefined;
    }

    return message;
  }
};
var baseBlockParams = {
  maxBytes: long_1["default"].ZERO,
  maxGas: long_1["default"].ZERO
};
exports.BlockParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.maxBytes.isZero()) {
      writer.uint32(8).int64(message.maxBytes);
    }

    if (!message.maxGas.isZero()) {
      writer.uint32(16).int64(message.maxGas);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseBlockParams);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseBlockParams);

    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = long_1["default"].fromString(object.maxBytes);
    } else {
      message.maxBytes = long_1["default"].ZERO;
    }

    if (object.maxGas !== undefined && object.maxGas !== null) {
      message.maxGas = long_1["default"].fromString(object.maxGas);
    } else {
      message.maxGas = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || long_1["default"].ZERO).toString());
    message.maxGas !== undefined && (obj.maxGas = (message.maxGas || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseBlockParams);

    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = object.maxBytes;
    } else {
      message.maxBytes = long_1["default"].ZERO;
    }

    if (object.maxGas !== undefined && object.maxGas !== null) {
      message.maxGas = object.maxGas;
    } else {
      message.maxGas = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseLastCommitInfo = {
  round: 0
};
exports.LastCommitInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }

    var _iterator34 = _createForOfIteratorHelper(message.votes),
        _step34;

    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var v = _step34.value;
        exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseLastCommitInfo);
    message.votes = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseLastCommitInfo);
    message.votes = [];

    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }

    if (object.votes !== undefined && object.votes !== null) {
      var _iterator35 = _createForOfIteratorHelper(object.votes),
          _step35;

      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var e = _step35.value;
          message.votes.push(exports.VoteInfo.fromJSON(e));
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.round !== undefined && (obj.round = message.round);

    if (message.votes) {
      obj.votes = message.votes.map(function (e) {
        return e ? exports.VoteInfo.toJSON(e) : undefined;
      });
    } else {
      obj.votes = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseLastCommitInfo);
    message.votes = [];

    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }

    if (object.votes !== undefined && object.votes !== null) {
      var _iterator36 = _createForOfIteratorHelper(object.votes),
          _step36;

      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var e = _step36.value;
          message.votes.push(exports.VoteInfo.fromPartial(e));
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
    }

    return message;
  }
};
var baseEvent = {
  type: ''
};
exports.Event = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.type !== '') {
      writer.uint32(10).string(message.type);
    }

    var _iterator37 = _createForOfIteratorHelper(message.attributes),
        _step37;

    try {
      for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
        var v = _step37.value;
        exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator37.e(err);
    } finally {
      _iterator37.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseEvent);
    message.attributes = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseEvent);
    message.attributes = [];

    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = '';
    }

    if (object.attributes !== undefined && object.attributes !== null) {
      var _iterator38 = _createForOfIteratorHelper(object.attributes),
          _step38;

      try {
        for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
          var e = _step38.value;
          message.attributes.push(exports.EventAttribute.fromJSON(e));
        }
      } catch (err) {
        _iterator38.e(err);
      } finally {
        _iterator38.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.type !== undefined && (obj.type = message.type);

    if (message.attributes) {
      obj.attributes = message.attributes.map(function (e) {
        return e ? exports.EventAttribute.toJSON(e) : undefined;
      });
    } else {
      obj.attributes = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseEvent);
    message.attributes = [];

    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = '';
    }

    if (object.attributes !== undefined && object.attributes !== null) {
      var _iterator39 = _createForOfIteratorHelper(object.attributes),
          _step39;

      try {
        for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
          var e = _step39.value;
          message.attributes.push(exports.EventAttribute.fromPartial(e));
        }
      } catch (err) {
        _iterator39.e(err);
      } finally {
        _iterator39.f();
      }
    }

    return message;
  }
};
var baseEventAttribute = {
  index: false
};
exports.EventAttribute = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseEventAttribute);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseEventAttribute);

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }

    if (object.index !== undefined && object.index !== null) {
      message.index = Boolean(object.index);
    } else {
      message.index = false;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseEventAttribute);

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }

    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = false;
    }

    return message;
  }
};
var baseTxResult = {
  height: long_1["default"].ZERO,
  index: 0
};
exports.TxResult = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseTxResult);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseTxResult);

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }

    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }

    if (object.result !== undefined && object.result !== null) {
      message.result = exports.ResponseDeliverTx.fromJSON(object.result);
    } else {
      message.result = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || long_1["default"].ZERO).toString());
    message.index !== undefined && (obj.index = message.index);
    message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
    message.result !== undefined && (obj.result = message.result ? exports.ResponseDeliverTx.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseTxResult);

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }

    if (object.tx !== undefined && object.tx !== null) {
      message.tx = object.tx;
    } else {
      message.tx = new Uint8Array();
    }

    if (object.result !== undefined && object.result !== null) {
      message.result = exports.ResponseDeliverTx.fromPartial(object.result);
    } else {
      message.result = undefined;
    }

    return message;
  }
};
var baseValidator = {
  power: long_1["default"].ZERO
};
exports.Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseValidator);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseValidator);

    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }

    if (object.power !== undefined && object.power !== null) {
      message.power = long_1["default"].fromString(object.power);
    } else {
      message.power = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.power !== undefined && (obj.power = (message.power || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseValidator);

    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = new Uint8Array();
    }

    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    } else {
      message.power = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseValidatorUpdate = {
  power: long_1["default"].ZERO
};
exports.ValidatorUpdate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.pubKey !== undefined) {
      keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseValidatorUpdate);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseValidatorUpdate);

    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = keys_1.PublicKey.fromJSON(object.pubKey);
    } else {
      message.pubKey = undefined;
    }

    if (object.power !== undefined && object.power !== null) {
      message.power = long_1["default"].fromString(object.power);
    } else {
      message.power = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? keys_1.PublicKey.toJSON(message.pubKey) : undefined);
    message.power !== undefined && (obj.power = (message.power || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseValidatorUpdate);

    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = keys_1.PublicKey.fromPartial(object.pubKey);
    } else {
      message.pubKey = undefined;
    }

    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    } else {
      message.power = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseVoteInfo = {
  signedLastBlock: false
};
exports.VoteInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.validator !== undefined) {
      exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }

    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseVoteInfo);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseVoteInfo);

    if (object.validator !== undefined && object.validator !== null) {
      message.validator = exports.Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }

    if (object.signedLastBlock !== undefined && object.signedLastBlock !== null) {
      message.signedLastBlock = Boolean(object.signedLastBlock);
    } else {
      message.signedLastBlock = false;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
    message.signedLastBlock !== undefined && (obj.signedLastBlock = message.signedLastBlock);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseVoteInfo);

    if (object.validator !== undefined && object.validator !== null) {
      message.validator = exports.Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }

    if (object.signedLastBlock !== undefined && object.signedLastBlock !== null) {
      message.signedLastBlock = object.signedLastBlock;
    } else {
      message.signedLastBlock = false;
    }

    return message;
  }
};
var baseEvidence = {
  type: 0,
  height: long_1["default"].ZERO,
  totalVotingPower: long_1["default"].ZERO
};
exports.Evidence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseEvidence);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseEvidence);

    if (object.type !== undefined && object.type !== null) {
      message.type = evidenceTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }

    if (object.validator !== undefined && object.validator !== null) {
      message.validator = exports.Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time);
    } else {
      message.time = undefined;
    }

    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = long_1["default"].fromString(object.totalVotingPower);
    } else {
      message.totalVotingPower = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
    message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
    message.height !== undefined && (obj.height = (message.height || long_1["default"].ZERO).toString());
    message.time !== undefined && (obj.time = message.time !== undefined ? fromTimestamp(message.time).toISOString() : null);
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseEvidence);

    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }

    if (object.validator !== undefined && object.validator !== null) {
      message.validator = exports.Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.time !== undefined && object.time !== null) {
      message.time = timestamp_1.Timestamp.fromPartial(object.time);
    } else {
      message.time = undefined;
    }

    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = object.totalVotingPower;
    } else {
      message.totalVotingPower = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseSnapshot = {
  height: long_1["default"].UZERO,
  format: 0,
  chunks: 0
};
exports.Snapshot = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseSnapshot);

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseSnapshot);

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].UZERO;
    }

    if (object.format !== undefined && object.format !== null) {
      message.format = Number(object.format);
    } else {
      message.format = 0;
    }

    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = Number(object.chunks);
    } else {
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
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || long_1["default"].UZERO).toString());
    message.format !== undefined && (obj.format = message.format);
    message.chunks !== undefined && (obj.chunks = message.chunks);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseSnapshot);

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].UZERO;
    }

    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    } else {
      message.format = 0;
    }

    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    } else {
      message.chunks = 0;
    }

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }

    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }

    return message;
  }
};

var ABCIApplicationClientImpl = /*#__PURE__*/function () {
  function ABCIApplicationClientImpl(rpc) {
    _classCallCheck(this, ABCIApplicationClientImpl);

    this.rpc = rpc;
  }

  _createClass(ABCIApplicationClientImpl, [{
    key: "Echo",
    value: function Echo(request) {
      var data = exports.RequestEcho.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Echo', data);
      return promise.then(function (data) {
        return exports.ResponseEcho.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "Flush",
    value: function Flush(request) {
      var data = exports.RequestFlush.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Flush', data);
      return promise.then(function (data) {
        return exports.ResponseFlush.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "Info",
    value: function Info(request) {
      var data = exports.RequestInfo.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Info', data);
      return promise.then(function (data) {
        return exports.ResponseInfo.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "SetOption",
    value: function SetOption(request) {
      var data = exports.RequestSetOption.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'SetOption', data);
      return promise.then(function (data) {
        return exports.ResponseSetOption.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "DeliverTx",
    value: function DeliverTx(request) {
      var data = exports.RequestDeliverTx.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'DeliverTx', data);
      return promise.then(function (data) {
        return exports.ResponseDeliverTx.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "CheckTx",
    value: function CheckTx(request) {
      var data = exports.RequestCheckTx.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'CheckTx', data);
      return promise.then(function (data) {
        return exports.ResponseCheckTx.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "Query",
    value: function Query(request) {
      var data = exports.RequestQuery.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Query', data);
      return promise.then(function (data) {
        return exports.ResponseQuery.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "Commit",
    value: function Commit(request) {
      var data = exports.RequestCommit.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'Commit', data);
      return promise.then(function (data) {
        return exports.ResponseCommit.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "InitChain",
    value: function InitChain(request) {
      var data = exports.RequestInitChain.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'InitChain', data);
      return promise.then(function (data) {
        return exports.ResponseInitChain.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "BeginBlock",
    value: function BeginBlock(request) {
      var data = exports.RequestBeginBlock.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'BeginBlock', data);
      return promise.then(function (data) {
        return exports.ResponseBeginBlock.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "EndBlock",
    value: function EndBlock(request) {
      var data = exports.RequestEndBlock.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'EndBlock', data);
      return promise.then(function (data) {
        return exports.ResponseEndBlock.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ListSnapshots",
    value: function ListSnapshots(request) {
      var data = exports.RequestListSnapshots.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'ListSnapshots', data);
      return promise.then(function (data) {
        return exports.ResponseListSnapshots.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "OfferSnapshot",
    value: function OfferSnapshot(request) {
      var data = exports.RequestOfferSnapshot.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'OfferSnapshot', data);
      return promise.then(function (data) {
        return exports.ResponseOfferSnapshot.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "LoadSnapshotChunk",
    value: function LoadSnapshotChunk(request) {
      var data = exports.RequestLoadSnapshotChunk.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'LoadSnapshotChunk', data);
      return promise.then(function (data) {
        return exports.ResponseLoadSnapshotChunk.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ApplySnapshotChunk",
    value: function ApplySnapshotChunk(request) {
      var data = exports.RequestApplySnapshotChunk.encode(request).finish();
      var promise = this.rpc.request('tendermint.abci.ABCIApplication', 'ApplySnapshotChunk', data);
      return promise.then(function (data) {
        return exports.ResponseApplySnapshotChunk.decode(new minimal_1["default"].Reader(data));
      });
    }
  }]);

  return ABCIApplicationClientImpl;
}();

exports.ABCIApplicationClientImpl = ABCIApplicationClientImpl;

var globalThis = function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
}();

var atob = globalThis.atob || function (b64) {
  return globalThis.Buffer.from(b64, 'base64').toString('binary');
};

function bytesFromBase64(b64) {
  var bin = atob(b64);
  var arr = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

var btoa = globalThis.btoa || function (bin) {
  return globalThis.Buffer.from(bin, 'binary').toString('base64');
};

function base64FromBytes(arr) {
  var bin = [];

  for (var i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }

  return btoa(bin.join(''));
}

function toTimestamp(date) {
  var seconds = numberToLong(date.getTime() / 1000);
  var nanos = date.getTime() % 1000 * 1000000;
  return {
    seconds: seconds,
    nanos: nanos
  };
}

function fromTimestamp(t) {
  var millis = t.seconds.toNumber() * 1000;
  millis += t.nanos / 1000000;
  return new Date(millis);
}

function fromJsonTimestamp(o) {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === 'string') {
    return toTimestamp(new Date(o));
  } else {
    return timestamp_1.Timestamp.fromJSON(o);
  }
}

function numberToLong(number) {
  return long_1["default"].fromNumber(number);
}

if (minimal_1["default"].util.Long !== long_1["default"]) {
  minimal_1["default"].util.Long = long_1["default"];
  minimal_1["default"].configure();
}
//# sourceMappingURL=types.js.map