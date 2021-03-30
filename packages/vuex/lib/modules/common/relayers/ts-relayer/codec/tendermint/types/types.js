"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
exports.TxProof = exports.BlockMeta = exports.LightBlock = exports.SignedHeader = exports.Proposal = exports.CommitSig = exports.Commit = exports.Vote = exports.Data = exports.Header = exports.BlockID = exports.Part = exports.PartSetHeader = exports.signedMsgTypeToJSON = exports.signedMsgTypeFromJSON = exports.SignedMsgType = exports.blockIDFlagToJSON = exports.blockIDFlagFromJSON = exports.BlockIDFlag = exports.protobufPackage = void 0;
/* eslint-disable */

var proof_1 = require("../../tendermint/crypto/proof");

var types_1 = require("../../tendermint/version/types");

var long_1 = __importDefault(require("long"));

var timestamp_1 = require("../../google/protobuf/timestamp");

var validator_1 = require("../../tendermint/types/validator");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'tendermint.types';
/** BlockIdFlag indicates which BlcokID the signature is for */

var BlockIDFlag;

(function (BlockIDFlag) {
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
  BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag = exports.BlockIDFlag || (exports.BlockIDFlag = {}));

function blockIDFlagFromJSON(object) {
  switch (object) {
    case 0:
    case 'BLOCK_ID_FLAG_UNKNOWN':
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;

    case 1:
    case 'BLOCK_ID_FLAG_ABSENT':
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;

    case 2:
    case 'BLOCK_ID_FLAG_COMMIT':
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;

    case 3:
    case 'BLOCK_ID_FLAG_NIL':
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;

    case -1:
    case 'UNRECOGNIZED':
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}

exports.blockIDFlagFromJSON = blockIDFlagFromJSON;

function blockIDFlagToJSON(object) {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return 'BLOCK_ID_FLAG_UNKNOWN';

    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return 'BLOCK_ID_FLAG_ABSENT';

    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return 'BLOCK_ID_FLAG_COMMIT';

    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return 'BLOCK_ID_FLAG_NIL';

    default:
      return 'UNKNOWN';
  }
}

exports.blockIDFlagToJSON = blockIDFlagToJSON;
/** SignedMsgType is a type of signed message in the consensus. */

var SignedMsgType;

(function (SignedMsgType) {
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
  /** SIGNED_MSG_TYPE_PREVOTE - Votes */

  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */

  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
  SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType = exports.SignedMsgType || (exports.SignedMsgType = {}));

function signedMsgTypeFromJSON(object) {
  switch (object) {
    case 0:
    case 'SIGNED_MSG_TYPE_UNKNOWN':
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;

    case 1:
    case 'SIGNED_MSG_TYPE_PREVOTE':
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;

    case 2:
    case 'SIGNED_MSG_TYPE_PRECOMMIT':
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;

    case 32:
    case 'SIGNED_MSG_TYPE_PROPOSAL':
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;

    case -1:
    case 'UNRECOGNIZED':
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}

exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;

function signedMsgTypeToJSON(object) {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return 'SIGNED_MSG_TYPE_UNKNOWN';

    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return 'SIGNED_MSG_TYPE_PREVOTE';

    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return 'SIGNED_MSG_TYPE_PRECOMMIT';

    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return 'SIGNED_MSG_TYPE_PROPOSAL';

    default:
      return 'UNKNOWN';
  }
}

exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
var basePartSetHeader = {
  total: 0
};
exports.PartSetHeader = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }

    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePartSetHeader);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;

        case 2:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, basePartSetHeader);

    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.total !== undefined && (obj.total = message.total);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePartSetHeader);

    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }

    return message;
  }
};
var basePart = {
  index: 0
};
exports.Part = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }

    if (message.proof !== undefined) {
      proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePart);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.bytes = reader.bytes();
          break;

        case 3:
          message.proof = proof_1.Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, basePart);

    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }

    if (object.bytes !== undefined && object.bytes !== null) {
      message.bytes = bytesFromBase64(object.bytes);
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = proof_1.Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.bytes !== undefined && (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePart);

    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }

    if (object.bytes !== undefined && object.bytes !== null) {
      message.bytes = object.bytes;
    } else {
      message.bytes = new Uint8Array();
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = proof_1.Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }

    return message;
  }
};
var baseBlockID = {};
exports.BlockID = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }

    if (message.partSetHeader !== undefined) {
      exports.PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseBlockID);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        case 2:
          message.partSetHeader = exports.PartSetHeader.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseBlockID);

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }

    if (object.partSetHeader !== undefined && object.partSetHeader !== null) {
      message.partSetHeader = exports.PartSetHeader.fromJSON(object.partSetHeader);
    } else {
      message.partSetHeader = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.partSetHeader !== undefined && (obj.partSetHeader = message.partSetHeader ? exports.PartSetHeader.toJSON(message.partSetHeader) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseBlockID);

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }

    if (object.partSetHeader !== undefined && object.partSetHeader !== null) {
      message.partSetHeader = exports.PartSetHeader.fromPartial(object.partSetHeader);
    } else {
      message.partSetHeader = undefined;
    }

    return message;
  }
};
var baseHeader = {
  chainId: '',
  height: long_1["default"].ZERO
};
exports.Header = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.version !== undefined) {
      types_1.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== '') {
      writer.uint32(18).string(message.chainId);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    if (message.time !== undefined) {
      timestamp_1.Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }

    if (message.lastBlockId !== undefined) {
      exports.BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }

    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }

    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }

    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }

    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }

    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }

    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }

    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }

    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }

    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseHeader);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = types_1.Consensus.decode(reader, reader.uint32());
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.height = reader.int64();
          break;

        case 4:
          message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.lastBlockId = exports.BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.lastCommitHash = reader.bytes();
          break;

        case 7:
          message.dataHash = reader.bytes();
          break;

        case 8:
          message.validatorsHash = reader.bytes();
          break;

        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;

        case 10:
          message.consensusHash = reader.bytes();
          break;

        case 11:
          message.appHash = reader.bytes();
          break;

        case 12:
          message.lastResultsHash = reader.bytes();
          break;

        case 13:
          message.evidenceHash = reader.bytes();
          break;

        case 14:
          message.proposerAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseHeader);

    if (object.version !== undefined && object.version !== null) {
      message.version = types_1.Consensus.fromJSON(object.version);
    } else {
      message.version = undefined;
    }

    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = '';
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

    if (object.lastBlockId !== undefined && object.lastBlockId !== null) {
      message.lastBlockId = exports.BlockID.fromJSON(object.lastBlockId);
    } else {
      message.lastBlockId = undefined;
    }

    if (object.lastCommitHash !== undefined && object.lastCommitHash !== null) {
      message.lastCommitHash = bytesFromBase64(object.lastCommitHash);
    }

    if (object.dataHash !== undefined && object.dataHash !== null) {
      message.dataHash = bytesFromBase64(object.dataHash);
    }

    if (object.validatorsHash !== undefined && object.validatorsHash !== null) {
      message.validatorsHash = bytesFromBase64(object.validatorsHash);
    }

    if (object.nextValidatorsHash !== undefined && object.nextValidatorsHash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    }

    if (object.consensusHash !== undefined && object.consensusHash !== null) {
      message.consensusHash = bytesFromBase64(object.consensusHash);
    }

    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = bytesFromBase64(object.appHash);
    }

    if (object.lastResultsHash !== undefined && object.lastResultsHash !== null) {
      message.lastResultsHash = bytesFromBase64(object.lastResultsHash);
    }

    if (object.evidenceHash !== undefined && object.evidenceHash !== null) {
      message.evidenceHash = bytesFromBase64(object.evidenceHash);
    }

    if (object.proposerAddress !== undefined && object.proposerAddress !== null) {
      message.proposerAddress = bytesFromBase64(object.proposerAddress);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.version !== undefined && (obj.version = message.version ? types_1.Consensus.toJSON(message.version) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = (message.height || long_1["default"].ZERO).toString());
    message.time !== undefined && (obj.time = message.time !== undefined ? fromTimestamp(message.time).toISOString() : null);
    message.lastBlockId !== undefined && (obj.lastBlockId = message.lastBlockId ? exports.BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastCommitHash !== undefined && (obj.lastCommitHash = base64FromBytes(message.lastCommitHash !== undefined ? message.lastCommitHash : new Uint8Array()));
    message.dataHash !== undefined && (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.validatorsHash !== undefined && (obj.validatorsHash = base64FromBytes(message.validatorsHash !== undefined ? message.validatorsHash : new Uint8Array()));
    message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
    message.consensusHash !== undefined && (obj.consensusHash = base64FromBytes(message.consensusHash !== undefined ? message.consensusHash : new Uint8Array()));
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.lastResultsHash !== undefined && (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array()));
    message.evidenceHash !== undefined && (obj.evidenceHash = base64FromBytes(message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array()));
    message.proposerAddress !== undefined && (obj.proposerAddress = base64FromBytes(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseHeader);

    if (object.version !== undefined && object.version !== null) {
      message.version = types_1.Consensus.fromPartial(object.version);
    } else {
      message.version = undefined;
    }

    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = '';
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

    if (object.lastBlockId !== undefined && object.lastBlockId !== null) {
      message.lastBlockId = exports.BlockID.fromPartial(object.lastBlockId);
    } else {
      message.lastBlockId = undefined;
    }

    if (object.lastCommitHash !== undefined && object.lastCommitHash !== null) {
      message.lastCommitHash = object.lastCommitHash;
    } else {
      message.lastCommitHash = new Uint8Array();
    }

    if (object.dataHash !== undefined && object.dataHash !== null) {
      message.dataHash = object.dataHash;
    } else {
      message.dataHash = new Uint8Array();
    }

    if (object.validatorsHash !== undefined && object.validatorsHash !== null) {
      message.validatorsHash = object.validatorsHash;
    } else {
      message.validatorsHash = new Uint8Array();
    }

    if (object.nextValidatorsHash !== undefined && object.nextValidatorsHash !== null) {
      message.nextValidatorsHash = object.nextValidatorsHash;
    } else {
      message.nextValidatorsHash = new Uint8Array();
    }

    if (object.consensusHash !== undefined && object.consensusHash !== null) {
      message.consensusHash = object.consensusHash;
    } else {
      message.consensusHash = new Uint8Array();
    }

    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = object.appHash;
    } else {
      message.appHash = new Uint8Array();
    }

    if (object.lastResultsHash !== undefined && object.lastResultsHash !== null) {
      message.lastResultsHash = object.lastResultsHash;
    } else {
      message.lastResultsHash = new Uint8Array();
    }

    if (object.evidenceHash !== undefined && object.evidenceHash !== null) {
      message.evidenceHash = object.evidenceHash;
    } else {
      message.evidenceHash = new Uint8Array();
    }

    if (object.proposerAddress !== undefined && object.proposerAddress !== null) {
      message.proposerAddress = object.proposerAddress;
    } else {
      message.proposerAddress = new Uint8Array();
    }

    return message;
  }
};
var baseData = {};
exports.Data = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator = _createForOfIteratorHelper(message.txs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).bytes(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseData);
    message.txs = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseData);
    message.txs = [];

    if (object.txs !== undefined && object.txs !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.txs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.txs.push(bytesFromBase64(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.txs) {
      obj.txs = message.txs.map(function (e) {
        return base64FromBytes(e !== undefined ? e : new Uint8Array());
      });
    } else {
      obj.txs = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseData);
    message.txs = [];

    if (object.txs !== undefined && object.txs !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.txs),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.txs.push(e);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    return message;
  }
};
var baseVote = {
  type: 0,
  height: long_1["default"].ZERO,
  round: 0,
  validatorIndex: 0
};
exports.Vote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }

    if (message.blockId !== undefined) {
      exports.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }

    if (message.validatorAddress.length !== 0) {
      writer.uint32(50).bytes(message.validatorAddress);
    }

    if (message.validatorIndex !== 0) {
      writer.uint32(56).int32(message.validatorIndex);
    }

    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseVote);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;

        case 2:
          message.height = reader.int64();
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.blockId = exports.BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
          break;

        case 6:
          message.validatorAddress = reader.bytes();
          break;

        case 7:
          message.validatorIndex = reader.int32();
          break;

        case 8:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseVote);

    if (object.type !== undefined && object.type !== null) {
      message.type = signedMsgTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }

    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = exports.BlockID.fromJSON(object.blockId);
    } else {
      message.blockId = undefined;
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }

    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = bytesFromBase64(object.validatorAddress);
    }

    if (object.validatorIndex !== undefined && object.validatorIndex !== null) {
      message.validatorIndex = Number(object.validatorIndex);
    } else {
      message.validatorIndex = 0;
    }

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || long_1["default"].ZERO).toString());
    message.round !== undefined && (obj.round = message.round);
    message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp !== undefined ? fromTimestamp(message.timestamp).toISOString() : null);
    message.validatorAddress !== undefined && (obj.validatorAddress = base64FromBytes(message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array()));
    message.validatorIndex !== undefined && (obj.validatorIndex = message.validatorIndex);
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseVote);

    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }

    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = exports.BlockID.fromPartial(object.blockId);
    } else {
      message.blockId = undefined;
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = timestamp_1.Timestamp.fromPartial(object.timestamp);
    } else {
      message.timestamp = undefined;
    }

    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = new Uint8Array();
    }

    if (object.validatorIndex !== undefined && object.validatorIndex !== null) {
      message.validatorIndex = object.validatorIndex;
    } else {
      message.validatorIndex = 0;
    }

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = new Uint8Array();
    }

    return message;
  }
};
var baseCommit = {
  height: long_1["default"].ZERO,
  round: 0
};
exports.Commit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.blockId !== undefined) {
      exports.BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }

    var _iterator4 = _createForOfIteratorHelper(message.signatures),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        exports.CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
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
    var message = Object.assign({}, baseCommit);
    message.signatures = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.blockId = exports.BlockID.decode(reader, reader.uint32());
          break;

        case 4:
          message.signatures.push(exports.CommitSig.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseCommit);
    message.signatures = [];

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }

    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = exports.BlockID.fromJSON(object.blockId);
    } else {
      message.blockId = undefined;
    }

    if (object.signatures !== undefined && object.signatures !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.signatures),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.signatures.push(exports.CommitSig.fromJSON(e));
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
    message.height !== undefined && (obj.height = (message.height || long_1["default"].ZERO).toString());
    message.round !== undefined && (obj.round = message.round);
    message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);

    if (message.signatures) {
      obj.signatures = message.signatures.map(function (e) {
        return e ? exports.CommitSig.toJSON(e) : undefined;
      });
    } else {
      obj.signatures = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCommit);
    message.signatures = [];

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }

    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = exports.BlockID.fromPartial(object.blockId);
    } else {
      message.blockId = undefined;
    }

    if (object.signatures !== undefined && object.signatures !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.signatures),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.signatures.push(exports.CommitSig.fromPartial(e));
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
var baseCommitSig = {
  blockIdFlag: 0
};
exports.CommitSig = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }

    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }

    if (message.timestamp !== undefined) {
      timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }

    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseCommitSig);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = reader.int32();
          break;

        case 2:
          message.validatorAddress = reader.bytes();
          break;

        case 3:
          message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseCommitSig);

    if (object.blockIdFlag !== undefined && object.blockIdFlag !== null) {
      message.blockIdFlag = blockIDFlagFromJSON(object.blockIdFlag);
    } else {
      message.blockIdFlag = 0;
    }

    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = bytesFromBase64(object.validatorAddress);
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    message.validatorAddress !== undefined && (obj.validatorAddress = base64FromBytes(message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp !== undefined ? fromTimestamp(message.timestamp).toISOString() : null);
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCommitSig);

    if (object.blockIdFlag !== undefined && object.blockIdFlag !== null) {
      message.blockIdFlag = object.blockIdFlag;
    } else {
      message.blockIdFlag = 0;
    }

    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = new Uint8Array();
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = timestamp_1.Timestamp.fromPartial(object.timestamp);
    } else {
      message.timestamp = undefined;
    }

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = new Uint8Array();
    }

    return message;
  }
};
var baseProposal = {
  type: 0,
  height: long_1["default"].ZERO,
  round: 0,
  polRound: 0
};
exports.Proposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }

    if (message.polRound !== 0) {
      writer.uint32(32).int32(message.polRound);
    }

    if (message.blockId !== undefined) {
      exports.BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(50).fork()).ldelim();
    }

    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseProposal);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;

        case 2:
          message.height = reader.int64();
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.polRound = reader.int32();
          break;

        case 5:
          message.blockId = exports.BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
          break;

        case 7:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseProposal);

    if (object.type !== undefined && object.type !== null) {
      message.type = signedMsgTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = long_1["default"].fromString(object.height);
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.round !== undefined && object.round !== null) {
      message.round = Number(object.round);
    } else {
      message.round = 0;
    }

    if (object.polRound !== undefined && object.polRound !== null) {
      message.polRound = Number(object.polRound);
    } else {
      message.polRound = 0;
    }

    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = exports.BlockID.fromJSON(object.blockId);
    } else {
      message.blockId = undefined;
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || long_1["default"].ZERO).toString());
    message.round !== undefined && (obj.round = message.round);
    message.polRound !== undefined && (obj.polRound = message.polRound);
    message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp !== undefined ? fromTimestamp(message.timestamp).toISOString() : null);
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseProposal);

    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = long_1["default"].ZERO;
    }

    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    } else {
      message.round = 0;
    }

    if (object.polRound !== undefined && object.polRound !== null) {
      message.polRound = object.polRound;
    } else {
      message.polRound = 0;
    }

    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = exports.BlockID.fromPartial(object.blockId);
    } else {
      message.blockId = undefined;
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = timestamp_1.Timestamp.fromPartial(object.timestamp);
    } else {
      message.timestamp = undefined;
    }

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = new Uint8Array();
    }

    return message;
  }
};
var baseSignedHeader = {};
exports.SignedHeader = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.header !== undefined) {
      exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }

    if (message.commit !== undefined) {
      exports.Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseSignedHeader);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = exports.Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.commit = exports.Commit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseSignedHeader);

    if (object.header !== undefined && object.header !== null) {
      message.header = exports.Header.fromJSON(object.header);
    } else {
      message.header = undefined;
    }

    if (object.commit !== undefined && object.commit !== null) {
      message.commit = exports.Commit.fromJSON(object.commit);
    } else {
      message.commit = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? exports.Commit.toJSON(message.commit) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseSignedHeader);

    if (object.header !== undefined && object.header !== null) {
      message.header = exports.Header.fromPartial(object.header);
    } else {
      message.header = undefined;
    }

    if (object.commit !== undefined && object.commit !== null) {
      message.commit = exports.Commit.fromPartial(object.commit);
    } else {
      message.commit = undefined;
    }

    return message;
  }
};
var baseLightBlock = {};
exports.LightBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.signedHeader !== undefined) {
      exports.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorSet !== undefined) {
      validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseLightBlock);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signedHeader = exports.SignedHeader.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseLightBlock);

    if (object.signedHeader !== undefined && object.signedHeader !== null) {
      message.signedHeader = exports.SignedHeader.fromJSON(object.signedHeader);
    } else {
      message.signedHeader = undefined;
    }

    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = validator_1.ValidatorSet.fromJSON(object.validatorSet);
    } else {
      message.validatorSet = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? exports.SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? validator_1.ValidatorSet.toJSON(message.validatorSet) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseLightBlock);

    if (object.signedHeader !== undefined && object.signedHeader !== null) {
      message.signedHeader = exports.SignedHeader.fromPartial(object.signedHeader);
    } else {
      message.signedHeader = undefined;
    }

    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = validator_1.ValidatorSet.fromPartial(object.validatorSet);
    } else {
      message.validatorSet = undefined;
    }

    return message;
  }
};
var baseBlockMeta = {
  blockSize: long_1["default"].ZERO,
  numTxs: long_1["default"].ZERO
};
exports.BlockMeta = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.blockId !== undefined) {
      exports.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }

    if (!message.blockSize.isZero()) {
      writer.uint32(16).int64(message.blockSize);
    }

    if (message.header !== undefined) {
      exports.Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }

    if (!message.numTxs.isZero()) {
      writer.uint32(32).int64(message.numTxs);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseBlockMeta);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockId = exports.BlockID.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockSize = reader.int64();
          break;

        case 3:
          message.header = exports.Header.decode(reader, reader.uint32());
          break;

        case 4:
          message.numTxs = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseBlockMeta);

    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = exports.BlockID.fromJSON(object.blockId);
    } else {
      message.blockId = undefined;
    }

    if (object.blockSize !== undefined && object.blockSize !== null) {
      message.blockSize = long_1["default"].fromString(object.blockSize);
    } else {
      message.blockSize = long_1["default"].ZERO;
    }

    if (object.header !== undefined && object.header !== null) {
      message.header = exports.Header.fromJSON(object.header);
    } else {
      message.header = undefined;
    }

    if (object.numTxs !== undefined && object.numTxs !== null) {
      message.numTxs = long_1["default"].fromString(object.numTxs);
    } else {
      message.numTxs = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
    message.blockSize !== undefined && (obj.blockSize = (message.blockSize || long_1["default"].ZERO).toString());
    message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
    message.numTxs !== undefined && (obj.numTxs = (message.numTxs || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseBlockMeta);

    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = exports.BlockID.fromPartial(object.blockId);
    } else {
      message.blockId = undefined;
    }

    if (object.blockSize !== undefined && object.blockSize !== null) {
      message.blockSize = object.blockSize;
    } else {
      message.blockSize = long_1["default"].ZERO;
    }

    if (object.header !== undefined && object.header !== null) {
      message.header = exports.Header.fromPartial(object.header);
    } else {
      message.header = undefined;
    }

    if (object.numTxs !== undefined && object.numTxs !== null) {
      message.numTxs = object.numTxs;
    } else {
      message.numTxs = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseTxProof = {};
exports.TxProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.proof !== undefined) {
      proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseTxProof);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rootHash = reader.bytes();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.proof = proof_1.Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseTxProof);

    if (object.rootHash !== undefined && object.rootHash !== null) {
      message.rootHash = bytesFromBase64(object.rootHash);
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = proof_1.Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.rootHash !== undefined && (obj.rootHash = base64FromBytes(message.rootHash !== undefined ? message.rootHash : new Uint8Array()));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseTxProof);

    if (object.rootHash !== undefined && object.rootHash !== null) {
      message.rootHash = object.rootHash;
    } else {
      message.rootHash = new Uint8Array();
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = proof_1.Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }

    return message;
  }
};

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