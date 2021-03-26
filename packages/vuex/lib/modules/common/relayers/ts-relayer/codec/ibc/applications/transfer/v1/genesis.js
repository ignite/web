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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */

var transfer_1 = require("../../../../ibc/applications/transfer/v1/transfer");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.applications.transfer.v1';
var baseGenesisState = {
  portId: ''
};
exports.GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    var _iterator = _createForOfIteratorHelper(message.denomTraces),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        transfer_1.DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.params !== undefined) {
      transfer_1.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseGenesisState);
    message.denomTraces = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.denomTraces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
          break;

        case 3:
          message.params = transfer_1.Params.decode(reader, reader.uint32());
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
    message.denomTraces = [];

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.denomTraces !== undefined && object.denomTraces !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.denomTraces),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.denomTraces.push(transfer_1.DenomTrace.fromJSON(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    if (object.params !== undefined && object.params !== null) {
      message.params = transfer_1.Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);

    if (message.denomTraces) {
      obj.denomTraces = message.denomTraces.map(function (e) {
        return e ? transfer_1.DenomTrace.toJSON(e) : undefined;
      });
    } else {
      obj.denomTraces = [];
    }

    message.params !== undefined && (obj.params = message.params ? transfer_1.Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseGenesisState);
    message.denomTraces = [];

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.denomTraces !== undefined && object.denomTraces !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.denomTraces),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.denomTraces.push(transfer_1.DenomTrace.fromPartial(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.params !== undefined && object.params !== null) {
      message.params = transfer_1.Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }

    return message;
  }
};
//# sourceMappingURL=genesis.js.map