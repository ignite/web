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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var connection_1 = require("../../../../ibc/core/connection/v1/connection");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.connection.v1';
var baseGenesisState = {
  nextConnectionSequence: long_1["default"].UZERO
};
exports.GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator = _createForOfIteratorHelper(message.connections),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(message.clientConnectionPaths),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        connection_1.ConnectionPaths.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (!message.nextConnectionSequence.isZero()) {
      writer.uint32(24).uint64(message.nextConnectionSequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseGenesisState);
    message.connections = [];
    message.clientConnectionPaths = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
          break;

        case 2:
          message.clientConnectionPaths.push(connection_1.ConnectionPaths.decode(reader, reader.uint32()));
          break;

        case 3:
          message.nextConnectionSequence = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseGenesisState);
    message.connections = [];
    message.clientConnectionPaths = [];

    if (object.connections !== undefined && object.connections !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.connections),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.connections.push(connection_1.IdentifiedConnection.fromJSON(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.clientConnectionPaths !== undefined && object.clientConnectionPaths !== null) {
      var _iterator4 = _createForOfIteratorHelper(object.clientConnectionPaths),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _e = _step4.value;
          message.clientConnectionPaths.push(connection_1.ConnectionPaths.fromJSON(_e));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    if (object.nextConnectionSequence !== undefined && object.nextConnectionSequence !== null) {
      message.nextConnectionSequence = long_1["default"].fromString(object.nextConnectionSequence);
    } else {
      message.nextConnectionSequence = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.connections) {
      obj.connections = message.connections.map(function (e) {
        return e ? connection_1.IdentifiedConnection.toJSON(e) : undefined;
      });
    } else {
      obj.connections = [];
    }

    if (message.clientConnectionPaths) {
      obj.clientConnectionPaths = message.clientConnectionPaths.map(function (e) {
        return e ? connection_1.ConnectionPaths.toJSON(e) : undefined;
      });
    } else {
      obj.clientConnectionPaths = [];
    }

    message.nextConnectionSequence !== undefined && (obj.nextConnectionSequence = (message.nextConnectionSequence || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseGenesisState);
    message.connections = [];
    message.clientConnectionPaths = [];

    if (object.connections !== undefined && object.connections !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.connections),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.connections.push(connection_1.IdentifiedConnection.fromPartial(e));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    if (object.clientConnectionPaths !== undefined && object.clientConnectionPaths !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.clientConnectionPaths),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _e2 = _step6.value;
          message.clientConnectionPaths.push(connection_1.ConnectionPaths.fromPartial(_e2));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    if (object.nextConnectionSequence !== undefined && object.nextConnectionSequence !== null) {
      message.nextConnectionSequence = object.nextConnectionSequence;
    } else {
      message.nextConnectionSequence = long_1["default"].UZERO;
    }

    return message;
  }
};
//# sourceMappingURL=genesis.js.map