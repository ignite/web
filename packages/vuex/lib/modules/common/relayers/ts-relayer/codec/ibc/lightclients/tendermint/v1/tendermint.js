"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
exports.Fraction = exports.Header = exports.Misbehaviour = exports.ConsensusState = exports.ClientState = exports.protobufPackage = void 0;
/* eslint-disable */

var duration_1 = require("../../../../google/protobuf/duration");

var client_1 = require("../../../../ibc/core/client/v1/client");

var timestamp_1 = require("../../../../google/protobuf/timestamp");

var commitment_1 = require("../../../../ibc/core/commitment/v1/commitment");

var types_1 = require("../../../../tendermint/types/types");

var validator_1 = require("../../../../tendermint/types/validator");

var long_1 = __importDefault(require("long"));

var proofs_1 = require("../../../../confio/proofs");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.lightclients.tendermint.v1';
var baseClientState = {
  chainId: '',
  upgradePath: '',
  allowUpdateAfterExpiry: false,
  allowUpdateAfterMisbehaviour: false
};
exports.ClientState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.chainId !== '') {
      writer.uint32(10).string(message.chainId);
    }

    if (message.trustLevel !== undefined) {
      exports.Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
    }

    if (message.trustingPeriod !== undefined) {
      duration_1.Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
    }

    if (message.unbondingPeriod !== undefined) {
      duration_1.Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
    }

    if (message.maxClockDrift !== undefined) {
      duration_1.Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
    }

    if (message.frozenHeight !== undefined) {
      client_1.Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
    }

    if (message.latestHeight !== undefined) {
      client_1.Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
    }

    var _iterator = _createForOfIteratorHelper(message.proofSpecs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        proofs_1.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(message.upgradePath),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        writer.uint32(74).string(_v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (message.allowUpdateAfterExpiry === true) {
      writer.uint32(80).bool(message.allowUpdateAfterExpiry);
    }

    if (message.allowUpdateAfterMisbehaviour === true) {
      writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseClientState);
    message.proofSpecs = [];
    message.upgradePath = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.trustLevel = exports.Fraction.decode(reader, reader.uint32());
          break;

        case 3:
          message.trustingPeriod = duration_1.Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.unbondingPeriod = duration_1.Duration.decode(reader, reader.uint32());
          break;

        case 5:
          message.maxClockDrift = duration_1.Duration.decode(reader, reader.uint32());
          break;

        case 6:
          message.frozenHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 7:
          message.latestHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.proofSpecs.push(proofs_1.ProofSpec.decode(reader, reader.uint32()));
          break;

        case 9:
          message.upgradePath.push(reader.string());
          break;

        case 10:
          message.allowUpdateAfterExpiry = reader.bool();
          break;

        case 11:
          message.allowUpdateAfterMisbehaviour = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseClientState);
    message.proofSpecs = [];
    message.upgradePath = [];

    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = '';
    }

    if (object.trustLevel !== undefined && object.trustLevel !== null) {
      message.trustLevel = exports.Fraction.fromJSON(object.trustLevel);
    } else {
      message.trustLevel = undefined;
    }

    if (object.trustingPeriod !== undefined && object.trustingPeriod !== null) {
      message.trustingPeriod = duration_1.Duration.fromJSON(object.trustingPeriod);
    } else {
      message.trustingPeriod = undefined;
    }

    if (object.unbondingPeriod !== undefined && object.unbondingPeriod !== null) {
      message.unbondingPeriod = duration_1.Duration.fromJSON(object.unbondingPeriod);
    } else {
      message.unbondingPeriod = undefined;
    }

    if (object.maxClockDrift !== undefined && object.maxClockDrift !== null) {
      message.maxClockDrift = duration_1.Duration.fromJSON(object.maxClockDrift);
    } else {
      message.maxClockDrift = undefined;
    }

    if (object.frozenHeight !== undefined && object.frozenHeight !== null) {
      message.frozenHeight = client_1.Height.fromJSON(object.frozenHeight);
    } else {
      message.frozenHeight = undefined;
    }

    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = client_1.Height.fromJSON(object.latestHeight);
    } else {
      message.latestHeight = undefined;
    }

    if (object.proofSpecs !== undefined && object.proofSpecs !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.proofSpecs),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.proofSpecs.push(proofs_1.ProofSpec.fromJSON(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.upgradePath !== undefined && object.upgradePath !== null) {
      var _iterator4 = _createForOfIteratorHelper(object.upgradePath),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _e = _step4.value;
          message.upgradePath.push(String(_e));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    if (object.allowUpdateAfterExpiry !== undefined && object.allowUpdateAfterExpiry !== null) {
      message.allowUpdateAfterExpiry = Boolean(object.allowUpdateAfterExpiry);
    } else {
      message.allowUpdateAfterExpiry = false;
    }

    if (object.allowUpdateAfterMisbehaviour !== undefined && object.allowUpdateAfterMisbehaviour !== null) {
      message.allowUpdateAfterMisbehaviour = Boolean(object.allowUpdateAfterMisbehaviour);
    } else {
      message.allowUpdateAfterMisbehaviour = false;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.trustLevel !== undefined && (obj.trustLevel = message.trustLevel ? exports.Fraction.toJSON(message.trustLevel) : undefined);
    message.trustingPeriod !== undefined && (obj.trustingPeriod = message.trustingPeriod ? duration_1.Duration.toJSON(message.trustingPeriod) : undefined);
    message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod ? duration_1.Duration.toJSON(message.unbondingPeriod) : undefined);
    message.maxClockDrift !== undefined && (obj.maxClockDrift = message.maxClockDrift ? duration_1.Duration.toJSON(message.maxClockDrift) : undefined);
    message.frozenHeight !== undefined && (obj.frozenHeight = message.frozenHeight ? client_1.Height.toJSON(message.frozenHeight) : undefined);
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight ? client_1.Height.toJSON(message.latestHeight) : undefined);

    if (message.proofSpecs) {
      obj.proofSpecs = message.proofSpecs.map(function (e) {
        return e ? proofs_1.ProofSpec.toJSON(e) : undefined;
      });
    } else {
      obj.proofSpecs = [];
    }

    if (message.upgradePath) {
      obj.upgradePath = message.upgradePath.map(function (e) {
        return e;
      });
    } else {
      obj.upgradePath = [];
    }

    message.allowUpdateAfterExpiry !== undefined && (obj.allowUpdateAfterExpiry = message.allowUpdateAfterExpiry);
    message.allowUpdateAfterMisbehaviour !== undefined && (obj.allowUpdateAfterMisbehaviour = message.allowUpdateAfterMisbehaviour);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseClientState);
    message.proofSpecs = [];
    message.upgradePath = [];

    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = '';
    }

    if (object.trustLevel !== undefined && object.trustLevel !== null) {
      message.trustLevel = exports.Fraction.fromPartial(object.trustLevel);
    } else {
      message.trustLevel = undefined;
    }

    if (object.trustingPeriod !== undefined && object.trustingPeriod !== null) {
      message.trustingPeriod = duration_1.Duration.fromPartial(object.trustingPeriod);
    } else {
      message.trustingPeriod = undefined;
    }

    if (object.unbondingPeriod !== undefined && object.unbondingPeriod !== null) {
      message.unbondingPeriod = duration_1.Duration.fromPartial(object.unbondingPeriod);
    } else {
      message.unbondingPeriod = undefined;
    }

    if (object.maxClockDrift !== undefined && object.maxClockDrift !== null) {
      message.maxClockDrift = duration_1.Duration.fromPartial(object.maxClockDrift);
    } else {
      message.maxClockDrift = undefined;
    }

    if (object.frozenHeight !== undefined && object.frozenHeight !== null) {
      message.frozenHeight = client_1.Height.fromPartial(object.frozenHeight);
    } else {
      message.frozenHeight = undefined;
    }

    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = client_1.Height.fromPartial(object.latestHeight);
    } else {
      message.latestHeight = undefined;
    }

    if (object.proofSpecs !== undefined && object.proofSpecs !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.proofSpecs),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.proofSpecs.push(proofs_1.ProofSpec.fromPartial(e));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    if (object.upgradePath !== undefined && object.upgradePath !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.upgradePath),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _e2 = _step6.value;
          message.upgradePath.push(_e2);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    if (object.allowUpdateAfterExpiry !== undefined && object.allowUpdateAfterExpiry !== null) {
      message.allowUpdateAfterExpiry = object.allowUpdateAfterExpiry;
    } else {
      message.allowUpdateAfterExpiry = false;
    }

    if (object.allowUpdateAfterMisbehaviour !== undefined && object.allowUpdateAfterMisbehaviour !== null) {
      message.allowUpdateAfterMisbehaviour = object.allowUpdateAfterMisbehaviour;
    } else {
      message.allowUpdateAfterMisbehaviour = false;
    }

    return message;
  }
};
var baseConsensusState = {};
exports.ConsensusState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.timestamp !== undefined) {
      timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
    }

    if (message.root !== undefined) {
      commitment_1.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
    }

    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(26).bytes(message.nextValidatorsHash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseConsensusState);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
          break;

        case 2:
          message.root = commitment_1.MerkleRoot.decode(reader, reader.uint32());
          break;

        case 3:
          message.nextValidatorsHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseConsensusState);

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }

    if (object.root !== undefined && object.root !== null) {
      message.root = commitment_1.MerkleRoot.fromJSON(object.root);
    } else {
      message.root = undefined;
    }

    if (object.nextValidatorsHash !== undefined && object.nextValidatorsHash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp !== undefined ? fromTimestamp(message.timestamp).toISOString() : null);
    message.root !== undefined && (obj.root = message.root ? commitment_1.MerkleRoot.toJSON(message.root) : undefined);
    message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseConsensusState);

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = timestamp_1.Timestamp.fromPartial(object.timestamp);
    } else {
      message.timestamp = undefined;
    }

    if (object.root !== undefined && object.root !== null) {
      message.root = commitment_1.MerkleRoot.fromPartial(object.root);
    } else {
      message.root = undefined;
    }

    if (object.nextValidatorsHash !== undefined && object.nextValidatorsHash !== null) {
      message.nextValidatorsHash = object.nextValidatorsHash;
    } else {
      message.nextValidatorsHash = new Uint8Array();
    }

    return message;
  }
};
var baseMisbehaviour = {
  clientId: ''
};
exports.Misbehaviour = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (message.header1 !== undefined) {
      exports.Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
    }

    if (message.header2 !== undefined) {
      exports.Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMisbehaviour);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.header1 = exports.Header.decode(reader, reader.uint32());
          break;

        case 3:
          message.header2 = exports.Header.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseMisbehaviour);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.header1 !== undefined && object.header1 !== null) {
      message.header1 = exports.Header.fromJSON(object.header1);
    } else {
      message.header1 = undefined;
    }

    if (object.header2 !== undefined && object.header2 !== null) {
      message.header2 = exports.Header.fromJSON(object.header2);
    } else {
      message.header2 = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.header1 !== undefined && (obj.header1 = message.header1 ? exports.Header.toJSON(message.header1) : undefined);
    message.header2 !== undefined && (obj.header2 = message.header2 ? exports.Header.toJSON(message.header2) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMisbehaviour);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.header1 !== undefined && object.header1 !== null) {
      message.header1 = exports.Header.fromPartial(object.header1);
    } else {
      message.header1 = undefined;
    }

    if (object.header2 !== undefined && object.header2 !== null) {
      message.header2 = exports.Header.fromPartial(object.header2);
    } else {
      message.header2 = undefined;
    }

    return message;
  }
};
var baseHeader = {};
exports.Header = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.signedHeader !== undefined) {
      types_1.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorSet !== undefined) {
      validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }

    if (message.trustedHeight !== undefined) {
      client_1.Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
    }

    if (message.trustedValidators !== undefined) {
      validator_1.ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
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
          message.signedHeader = types_1.SignedHeader.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
          break;

        case 3:
          message.trustedHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.trustedValidators = validator_1.ValidatorSet.decode(reader, reader.uint32());
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

    if (object.signedHeader !== undefined && object.signedHeader !== null) {
      message.signedHeader = types_1.SignedHeader.fromJSON(object.signedHeader);
    } else {
      message.signedHeader = undefined;
    }

    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = validator_1.ValidatorSet.fromJSON(object.validatorSet);
    } else {
      message.validatorSet = undefined;
    }

    if (object.trustedHeight !== undefined && object.trustedHeight !== null) {
      message.trustedHeight = client_1.Height.fromJSON(object.trustedHeight);
    } else {
      message.trustedHeight = undefined;
    }

    if (object.trustedValidators !== undefined && object.trustedValidators !== null) {
      message.trustedValidators = validator_1.ValidatorSet.fromJSON(object.trustedValidators);
    } else {
      message.trustedValidators = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? types_1.SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? validator_1.ValidatorSet.toJSON(message.validatorSet) : undefined);
    message.trustedHeight !== undefined && (obj.trustedHeight = message.trustedHeight ? client_1.Height.toJSON(message.trustedHeight) : undefined);
    message.trustedValidators !== undefined && (obj.trustedValidators = message.trustedValidators ? validator_1.ValidatorSet.toJSON(message.trustedValidators) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseHeader);

    if (object.signedHeader !== undefined && object.signedHeader !== null) {
      message.signedHeader = types_1.SignedHeader.fromPartial(object.signedHeader);
    } else {
      message.signedHeader = undefined;
    }

    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = validator_1.ValidatorSet.fromPartial(object.validatorSet);
    } else {
      message.validatorSet = undefined;
    }

    if (object.trustedHeight !== undefined && object.trustedHeight !== null) {
      message.trustedHeight = client_1.Height.fromPartial(object.trustedHeight);
    } else {
      message.trustedHeight = undefined;
    }

    if (object.trustedValidators !== undefined && object.trustedValidators !== null) {
      message.trustedValidators = validator_1.ValidatorSet.fromPartial(object.trustedValidators);
    } else {
      message.trustedValidators = undefined;
    }

    return message;
  }
};
var baseFraction = {
  numerator: long_1["default"].UZERO,
  denominator: long_1["default"].UZERO
};
exports.Fraction = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.numerator.isZero()) {
      writer.uint32(8).uint64(message.numerator);
    }

    if (!message.denominator.isZero()) {
      writer.uint32(16).uint64(message.denominator);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseFraction);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numerator = reader.uint64();
          break;

        case 2:
          message.denominator = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseFraction);

    if (object.numerator !== undefined && object.numerator !== null) {
      message.numerator = long_1["default"].fromString(object.numerator);
    } else {
      message.numerator = long_1["default"].UZERO;
    }

    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = long_1["default"].fromString(object.denominator);
    } else {
      message.denominator = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.numerator !== undefined && (obj.numerator = (message.numerator || long_1["default"].UZERO).toString());
    message.denominator !== undefined && (obj.denominator = (message.denominator || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseFraction);

    if (object.numerator !== undefined && object.numerator !== null) {
      message.numerator = object.numerator;
    } else {
      message.numerator = long_1["default"].UZERO;
    }

    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = object.denominator;
    } else {
      message.denominator = long_1["default"].UZERO;
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
//# sourceMappingURL=tendermint.js.map