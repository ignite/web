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
exports.SimpleValidator = exports.Validator = exports.ValidatorSet = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var keys_1 = require("../../tendermint/crypto/keys");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'tendermint.types';
var baseValidatorSet = {
  totalVotingPower: long_1["default"].ZERO
};
exports.ValidatorSet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator = _createForOfIteratorHelper(message.validators),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.proposer !== undefined) {
      exports.Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }

    if (!message.totalVotingPower.isZero()) {
      writer.uint32(24).int64(message.totalVotingPower);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseValidatorSet);
    message.validators = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(exports.Validator.decode(reader, reader.uint32()));
          break;

        case 2:
          message.proposer = exports.Validator.decode(reader, reader.uint32());
          break;

        case 3:
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
    var message = Object.assign({}, baseValidatorSet);
    message.validators = [];

    if (object.validators !== undefined && object.validators !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.validators),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.validators.push(exports.Validator.fromJSON(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = exports.Validator.fromJSON(object.proposer);
    } else {
      message.proposer = undefined;
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

    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? exports.Validator.toJSON(e) : undefined;
      });
    } else {
      obj.validators = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer ? exports.Validator.toJSON(message.proposer) : undefined);
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseValidatorSet);
    message.validators = [];

    if (object.validators !== undefined && object.validators !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.validators),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.validators.push(exports.Validator.fromPartial(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = exports.Validator.fromPartial(object.proposer);
    } else {
      message.proposer = undefined;
    }

    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = object.totalVotingPower;
    } else {
      message.totalVotingPower = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseValidator = {
  votingPower: long_1["default"].ZERO,
  proposerPriority: long_1["default"].ZERO
};
exports.Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.pubKey !== undefined) {
      keys_1.PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }

    if (!message.votingPower.isZero()) {
      writer.uint32(24).int64(message.votingPower);
    }

    if (!message.proposerPriority.isZero()) {
      writer.uint32(32).int64(message.proposerPriority);
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

        case 2:
          message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
          break;

        case 3:
          message.votingPower = reader.int64();
          break;

        case 4:
          message.proposerPriority = reader.int64();
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

    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = keys_1.PublicKey.fromJSON(object.pubKey);
    } else {
      message.pubKey = undefined;
    }

    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = long_1["default"].fromString(object.votingPower);
    } else {
      message.votingPower = long_1["default"].ZERO;
    }

    if (object.proposerPriority !== undefined && object.proposerPriority !== null) {
      message.proposerPriority = long_1["default"].fromString(object.proposerPriority);
    } else {
      message.proposerPriority = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? keys_1.PublicKey.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || long_1["default"].ZERO).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseValidator);

    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = new Uint8Array();
    }

    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = keys_1.PublicKey.fromPartial(object.pubKey);
    } else {
      message.pubKey = undefined;
    }

    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = object.votingPower;
    } else {
      message.votingPower = long_1["default"].ZERO;
    }

    if (object.proposerPriority !== undefined && object.proposerPriority !== null) {
      message.proposerPriority = object.proposerPriority;
    } else {
      message.proposerPriority = long_1["default"].ZERO;
    }

    return message;
  }
};
var baseSimpleValidator = {
  votingPower: long_1["default"].ZERO
};
exports.SimpleValidator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.pubKey !== undefined) {
      keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (!message.votingPower.isZero()) {
      writer.uint32(16).int64(message.votingPower);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseSimpleValidator);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.votingPower = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseSimpleValidator);

    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = keys_1.PublicKey.fromJSON(object.pubKey);
    } else {
      message.pubKey = undefined;
    }

    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = long_1["default"].fromString(object.votingPower);
    } else {
      message.votingPower = long_1["default"].ZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? keys_1.PublicKey.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || long_1["default"].ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseSimpleValidator);

    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = keys_1.PublicKey.fromPartial(object.pubKey);
    } else {
      message.pubKey = undefined;
    }

    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = object.votingPower;
    } else {
      message.votingPower = long_1["default"].ZERO;
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
//# sourceMappingURL=validator.js.map