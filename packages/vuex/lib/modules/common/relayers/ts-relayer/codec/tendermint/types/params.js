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
exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var duration_1 = require("../../google/protobuf/duration");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'tendermint.types';
var baseConsensusParams = {};
exports.ConsensusParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.block !== undefined) {
      exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }

    if (message.evidence !== undefined) {
      exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }

    if (message.validator !== undefined) {
      exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }

    if (message.version !== undefined) {
      exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
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
          message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.version = exports.VersionParams.decode(reader, reader.uint32());
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
      message.evidence = exports.EvidenceParams.fromJSON(object.evidence);
    } else {
      message.evidence = undefined;
    }

    if (object.validator !== undefined && object.validator !== null) {
      message.validator = exports.ValidatorParams.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = exports.VersionParams.fromJSON(object.version);
    } else {
      message.version = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toJSON(message.block) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? exports.EvidenceParams.toJSON(message.evidence) : undefined);
    message.validator !== undefined && (obj.validator = message.validator ? exports.ValidatorParams.toJSON(message.validator) : undefined);
    message.version !== undefined && (obj.version = message.version ? exports.VersionParams.toJSON(message.version) : undefined);
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
      message.evidence = exports.EvidenceParams.fromPartial(object.evidence);
    } else {
      message.evidence = undefined;
    }

    if (object.validator !== undefined && object.validator !== null) {
      message.validator = exports.ValidatorParams.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = exports.VersionParams.fromPartial(object.version);
    } else {
      message.version = undefined;
    }

    return message;
  }
};
var baseBlockParams = {
  maxBytes: long_1["default"].ZERO,
  maxGas: long_1["default"].ZERO,
  timeIotaMs: long_1["default"].ZERO
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

    if (!message.timeIotaMs.isZero()) {
      writer.uint32(24).int64(message.timeIotaMs);
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

        case 3:
          message.timeIotaMs = reader.int64();
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

    if (object.timeIotaMs !== undefined && object.timeIotaMs !== null) {
      message.timeIotaMs = long_1["default"].fromString(object.timeIotaMs);
    } else {
      message.timeIotaMs = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || long_1["default"].ZERO).toString());
    message.maxGas !== undefined && (obj.maxGas = (message.maxGas || long_1["default"].ZERO).toString());
    message.timeIotaMs !== undefined && (obj.timeIotaMs = (message.timeIotaMs || long_1["default"].ZERO).toString());
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

    if (object.timeIotaMs !== undefined && object.timeIotaMs !== null) {
      message.timeIotaMs = object.timeIotaMs;
    } else {
      message.timeIotaMs = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseEvidenceParams = {
  maxAgeNumBlocks: long_1["default"].ZERO,
  maxBytes: long_1["default"].ZERO
};
exports.EvidenceParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.maxAgeNumBlocks.isZero()) {
      writer.uint32(8).int64(message.maxAgeNumBlocks);
    }

    if (message.maxAgeDuration !== undefined) {
      duration_1.Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }

    if (!message.maxBytes.isZero()) {
      writer.uint32(24).int64(message.maxBytes);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseEvidenceParams);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = reader.int64();
          break;

        case 2:
          message.maxAgeDuration = duration_1.Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.maxBytes = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseEvidenceParams);

    if (object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null) {
      message.maxAgeNumBlocks = long_1["default"].fromString(object.maxAgeNumBlocks);
    } else {
      message.maxAgeNumBlocks = long_1["default"].ZERO;
    }

    if (object.maxAgeDuration !== undefined && object.maxAgeDuration !== null) {
      message.maxAgeDuration = duration_1.Duration.fromJSON(object.maxAgeDuration);
    } else {
      message.maxAgeDuration = undefined;
    }

    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = long_1["default"].fromString(object.maxBytes);
    } else {
      message.maxBytes = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.maxAgeNumBlocks !== undefined && (obj.maxAgeNumBlocks = (message.maxAgeNumBlocks || long_1["default"].ZERO).toString());
    message.maxAgeDuration !== undefined && (obj.maxAgeDuration = message.maxAgeDuration ? duration_1.Duration.toJSON(message.maxAgeDuration) : undefined);
    message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseEvidenceParams);

    if (object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null) {
      message.maxAgeNumBlocks = object.maxAgeNumBlocks;
    } else {
      message.maxAgeNumBlocks = long_1["default"].ZERO;
    }

    if (object.maxAgeDuration !== undefined && object.maxAgeDuration !== null) {
      message.maxAgeDuration = duration_1.Duration.fromPartial(object.maxAgeDuration);
    } else {
      message.maxAgeDuration = undefined;
    }

    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = object.maxBytes;
    } else {
      message.maxBytes = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseValidatorParams = {
  pubKeyTypes: ''
};
exports.ValidatorParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator = _createForOfIteratorHelper(message.pubKeyTypes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).string(v);
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
    var message = Object.assign({}, baseValidatorParams);
    message.pubKeyTypes = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseValidatorParams);
    message.pubKeyTypes = [];

    if (object.pubKeyTypes !== undefined && object.pubKeyTypes !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.pubKeyTypes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.pubKeyTypes.push(String(e));
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

    if (message.pubKeyTypes) {
      obj.pubKeyTypes = message.pubKeyTypes.map(function (e) {
        return e;
      });
    } else {
      obj.pubKeyTypes = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseValidatorParams);
    message.pubKeyTypes = [];

    if (object.pubKeyTypes !== undefined && object.pubKeyTypes !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.pubKeyTypes),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.pubKeyTypes.push(e);
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
var baseVersionParams = {
  appVersion: long_1["default"].UZERO
};
exports.VersionParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.appVersion.isZero()) {
      writer.uint32(8).uint64(message.appVersion);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseVersionParams);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.appVersion = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseVersionParams);

    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = long_1["default"].fromString(object.appVersion);
    } else {
      message.appVersion = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.appVersion !== undefined && (obj.appVersion = (message.appVersion || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseVersionParams);

    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = object.appVersion;
    } else {
      message.appVersion = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseHashedParams = {
  blockMaxBytes: long_1["default"].ZERO,
  blockMaxGas: long_1["default"].ZERO
};
exports.HashedParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.blockMaxBytes.isZero()) {
      writer.uint32(8).int64(message.blockMaxBytes);
    }

    if (!message.blockMaxGas.isZero()) {
      writer.uint32(16).int64(message.blockMaxGas);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseHashedParams);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = reader.int64();
          break;

        case 2:
          message.blockMaxGas = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseHashedParams);

    if (object.blockMaxBytes !== undefined && object.blockMaxBytes !== null) {
      message.blockMaxBytes = long_1["default"].fromString(object.blockMaxBytes);
    } else {
      message.blockMaxBytes = long_1["default"].ZERO;
    }

    if (object.blockMaxGas !== undefined && object.blockMaxGas !== null) {
      message.blockMaxGas = long_1["default"].fromString(object.blockMaxGas);
    } else {
      message.blockMaxGas = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.blockMaxBytes !== undefined && (obj.blockMaxBytes = (message.blockMaxBytes || long_1["default"].ZERO).toString());
    message.blockMaxGas !== undefined && (obj.blockMaxGas = (message.blockMaxGas || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseHashedParams);

    if (object.blockMaxBytes !== undefined && object.blockMaxBytes !== null) {
      message.blockMaxBytes = object.blockMaxBytes;
    } else {
      message.blockMaxBytes = long_1["default"].ZERO;
    }

    if (object.blockMaxGas !== undefined && object.blockMaxGas !== null) {
      message.blockMaxGas = object.blockMaxGas;
    } else {
      message.blockMaxGas = long_1["default"].ZERO;
    }

    return message;
  }
};
//# sourceMappingURL=params.js.map