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
exports.Params = exports.Height = exports.ClientUpdateProposal = exports.ClientConsensusStates = exports.ConsensusStateWithHeight = exports.IdentifiedClientState = exports.protobufPackage = void 0;
/* eslint-disable */

var any_1 = require("../../../../google/protobuf/any");

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.client.v1';
var baseIdentifiedClientState = {
  clientId: ''
};
exports.IdentifiedClientState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (message.clientState !== undefined) {
      any_1.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseIdentifiedClientState);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.clientState = any_1.Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseIdentifiedClientState);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromJSON(object.clientState);
    } else {
      message.clientState = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseIdentifiedClientState);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromPartial(object.clientState);
    } else {
      message.clientState = undefined;
    }

    return message;
  }
};
var baseConsensusStateWithHeight = {};
exports.ConsensusStateWithHeight = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.height !== undefined) {
      exports.Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }

    if (message.consensusState !== undefined) {
      any_1.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseConsensusStateWithHeight);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = exports.Height.decode(reader, reader.uint32());
          break;

        case 2:
          message.consensusState = any_1.Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseConsensusStateWithHeight);

    if (object.height !== undefined && object.height !== null) {
      message.height = exports.Height.fromJSON(object.height);
    } else {
      message.height = undefined;
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = message.height ? exports.Height.toJSON(message.height) : undefined);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? any_1.Any.toJSON(message.consensusState) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseConsensusStateWithHeight);

    if (object.height !== undefined && object.height !== null) {
      message.height = exports.Height.fromPartial(object.height);
    } else {
      message.height = undefined;
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    return message;
  }
};
var baseClientConsensusStates = {
  clientId: ''
};
exports.ClientConsensusStates = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    var _iterator = _createForOfIteratorHelper(message.consensusStates),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        exports.ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = Object.assign({}, baseClientConsensusStates);
    message.consensusStates = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.consensusStates.push(exports.ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseClientConsensusStates);
    message.consensusStates = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.consensusStates !== undefined && object.consensusStates !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.consensusStates),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.consensusStates.push(exports.ConsensusStateWithHeight.fromJSON(e));
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
    message.clientId !== undefined && (obj.clientId = message.clientId);

    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map(function (e) {
        return e ? exports.ConsensusStateWithHeight.toJSON(e) : undefined;
      });
    } else {
      obj.consensusStates = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseClientConsensusStates);
    message.consensusStates = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.consensusStates !== undefined && object.consensusStates !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.consensusStates),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.consensusStates.push(exports.ConsensusStateWithHeight.fromPartial(e));
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
var baseClientUpdateProposal = {
  title: '',
  description: '',
  clientId: ''
};
exports.ClientUpdateProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }

    if (message.clientId !== '') {
      writer.uint32(26).string(message.clientId);
    }

    if (message.header !== undefined) {
      any_1.Any.encode(message.header, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseClientUpdateProposal);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.clientId = reader.string();
          break;

        case 4:
          message.header = any_1.Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseClientUpdateProposal);

    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = '';
    }

    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = '';
    }

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.header !== undefined && object.header !== null) {
      message.header = any_1.Any.fromJSON(object.header);
    } else {
      message.header = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.header !== undefined && (obj.header = message.header ? any_1.Any.toJSON(message.header) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseClientUpdateProposal);

    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = '';
    }

    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = '';
    }

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.header !== undefined && object.header !== null) {
      message.header = any_1.Any.fromPartial(object.header);
    } else {
      message.header = undefined;
    }

    return message;
  }
};
var baseHeight = {
  revisionNumber: long_1["default"].UZERO,
  revisionHeight: long_1["default"].UZERO
};
exports.Height = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.revisionNumber.isZero()) {
      writer.uint32(8).uint64(message.revisionNumber);
    }

    if (!message.revisionHeight.isZero()) {
      writer.uint32(16).uint64(message.revisionHeight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseHeight);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = reader.uint64();
          break;

        case 2:
          message.revisionHeight = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseHeight);

    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = long_1["default"].fromString(object.revisionNumber);
    } else {
      message.revisionNumber = long_1["default"].UZERO;
    }

    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = long_1["default"].fromString(object.revisionHeight);
    } else {
      message.revisionHeight = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || long_1["default"].UZERO).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseHeight);

    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = object.revisionNumber;
    } else {
      message.revisionNumber = long_1["default"].UZERO;
    }

    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = object.revisionHeight;
    } else {
      message.revisionHeight = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseParams = {
  allowedClients: ''
};
exports.Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator4 = _createForOfIteratorHelper(message.allowedClients),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint32(10).string(v);
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
    var message = Object.assign({}, baseParams);
    message.allowedClients = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowedClients.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseParams);
    message.allowedClients = [];

    if (object.allowedClients !== undefined && object.allowedClients !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.allowedClients),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.allowedClients.push(String(e));
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

    if (message.allowedClients) {
      obj.allowedClients = message.allowedClients.map(function (e) {
        return e;
      });
    } else {
      obj.allowedClients = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseParams);
    message.allowedClients = [];

    if (object.allowedClients !== undefined && object.allowedClients !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.allowedClients),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.allowedClients.push(e);
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
//# sourceMappingURL=client.js.map