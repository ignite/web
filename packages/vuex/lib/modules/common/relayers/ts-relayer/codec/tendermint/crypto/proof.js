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
exports.ProofOps = exports.ProofOp = exports.DominoOp = exports.ValueOp = exports.Proof = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'tendermint.crypto';
var baseProof = {
  total: long_1["default"].ZERO,
  index: long_1["default"].ZERO
};
exports.Proof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.total.isZero()) {
      writer.uint32(8).int64(message.total);
    }

    if (!message.index.isZero()) {
      writer.uint32(16).int64(message.index);
    }

    if (message.leafHash.length !== 0) {
      writer.uint32(26).bytes(message.leafHash);
    }

    var _iterator = _createForOfIteratorHelper(message.aunts),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(34).bytes(v);
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
    var message = Object.assign({}, baseProof);
    message.aunts = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.total = reader.int64();
          break;

        case 2:
          message.index = reader.int64();
          break;

        case 3:
          message.leafHash = reader.bytes();
          break;

        case 4:
          message.aunts.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseProof);
    message.aunts = [];

    if (object.total !== undefined && object.total !== null) {
      message.total = long_1["default"].fromString(object.total);
    } else {
      message.total = long_1["default"].ZERO;
    }

    if (object.index !== undefined && object.index !== null) {
      message.index = long_1["default"].fromString(object.index);
    } else {
      message.index = long_1["default"].ZERO;
    }

    if (object.leafHash !== undefined && object.leafHash !== null) {
      message.leafHash = bytesFromBase64(object.leafHash);
    }

    if (object.aunts !== undefined && object.aunts !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.aunts),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.aunts.push(bytesFromBase64(e));
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
    message.total !== undefined && (obj.total = (message.total || long_1["default"].ZERO).toString());
    message.index !== undefined && (obj.index = (message.index || long_1["default"].ZERO).toString());
    message.leafHash !== undefined && (obj.leafHash = base64FromBytes(message.leafHash !== undefined ? message.leafHash : new Uint8Array()));

    if (message.aunts) {
      obj.aunts = message.aunts.map(function (e) {
        return base64FromBytes(e !== undefined ? e : new Uint8Array());
      });
    } else {
      obj.aunts = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseProof);
    message.aunts = [];

    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = long_1["default"].ZERO;
    }

    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = long_1["default"].ZERO;
    }

    if (object.leafHash !== undefined && object.leafHash !== null) {
      message.leafHash = object.leafHash;
    } else {
      message.leafHash = new Uint8Array();
    }

    if (object.aunts !== undefined && object.aunts !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.aunts),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.aunts.push(e);
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
var baseValueOp = {};
exports.ValueOp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.proof !== undefined) {
      exports.Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseValueOp);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.proof = exports.Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseValueOp);

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = exports.Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? exports.Proof.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseValueOp);

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = exports.Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }

    return message;
  }
};
var baseDominoOp = {
  key: '',
  input: '',
  output: ''
};
exports.DominoOp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }

    if (message.input !== '') {
      writer.uint32(18).string(message.input);
    }

    if (message.output !== '') {
      writer.uint32(26).string(message.output);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseDominoOp);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.input = reader.string();
          break;

        case 3:
          message.output = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseDominoOp);

    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = '';
    }

    if (object.input !== undefined && object.input !== null) {
      message.input = String(object.input);
    } else {
      message.input = '';
    }

    if (object.output !== undefined && object.output !== null) {
      message.output = String(object.output);
    } else {
      message.output = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = message.key);
    message.input !== undefined && (obj.input = message.input);
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseDominoOp);

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = '';
    }

    if (object.input !== undefined && object.input !== null) {
      message.input = object.input;
    } else {
      message.input = '';
    }

    if (object.output !== undefined && object.output !== null) {
      message.output = object.output;
    } else {
      message.output = '';
    }

    return message;
  }
};
var baseProofOp = {
  type: ''
};
exports.ProofOp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.type !== '') {
      writer.uint32(10).string(message.type);
    }

    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }

    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseProofOp);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.key = reader.bytes();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseProofOp);

    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = '';
    }

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.type !== undefined && (obj.type = message.type);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseProofOp);

    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = '';
    }

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }

    return message;
  }
};
var baseProofOps = {};
exports.ProofOps = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator4 = _createForOfIteratorHelper(message.ops),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        exports.ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = Object.assign({}, baseProofOps);
    message.ops = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ops.push(exports.ProofOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseProofOps);
    message.ops = [];

    if (object.ops !== undefined && object.ops !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.ops),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.ops.push(exports.ProofOp.fromJSON(e));
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

    if (message.ops) {
      obj.ops = message.ops.map(function (e) {
        return e ? exports.ProofOp.toJSON(e) : undefined;
      });
    } else {
      obj.ops = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseProofOps);
    message.ops = [];

    if (object.ops !== undefined && object.ops !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.ops),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.ops.push(exports.ProofOp.fromPartial(e));
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
//# sourceMappingURL=proof.js.map