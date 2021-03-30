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
exports.BitArray = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'tendermint.libs.bits';
var baseBitArray = {
  bits: long_1["default"].ZERO,
  elems: long_1["default"].UZERO
};
exports.BitArray = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.bits.isZero()) {
      writer.uint32(8).int64(message.bits);
    }

    writer.uint32(18).fork();

    var _iterator = _createForOfIteratorHelper(message.elems),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseBitArray);
    message.elems = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bits = reader.int64();
          break;

        case 2:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.elems.push(reader.uint64());
            }
          } else {
            message.elems.push(reader.uint64());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseBitArray);
    message.elems = [];

    if (object.bits !== undefined && object.bits !== null) {
      message.bits = long_1["default"].fromString(object.bits);
    } else {
      message.bits = long_1["default"].ZERO;
    }

    if (object.elems !== undefined && object.elems !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.elems),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.elems.push(long_1["default"].fromString(e));
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
    message.bits !== undefined && (obj.bits = (message.bits || long_1["default"].ZERO).toString());

    if (message.elems) {
      obj.elems = message.elems.map(function (e) {
        return (e || long_1["default"].UZERO).toString();
      });
    } else {
      obj.elems = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseBitArray);
    message.elems = [];

    if (object.bits !== undefined && object.bits !== null) {
      message.bits = object.bits;
    } else {
      message.bits = long_1["default"].ZERO;
    }

    if (object.elems !== undefined && object.elems !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.elems),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.elems.push(e);
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
//# sourceMappingURL=types.js.map