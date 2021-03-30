"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
exports.QueryClientImpl = exports.QueryClientParamsResponse = exports.QueryClientParamsRequest = exports.QueryConsensusStatesResponse = exports.QueryConsensusStatesRequest = exports.QueryConsensusStateResponse = exports.QueryConsensusStateRequest = exports.QueryClientStatesResponse = exports.QueryClientStatesRequest = exports.QueryClientStateResponse = exports.QueryClientStateRequest = exports.protobufPackage = void 0;
/* eslint-disable */

var any_1 = require("../../../../google/protobuf/any");

var client_1 = require("../../../../ibc/core/client/v1/client");

var pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.client.v1';
var baseQueryClientStateRequest = {
  clientId: ''
};
exports.QueryClientStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryClientStateRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryClientStateRequest);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryClientStateRequest);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    return message;
  }
};
var baseQueryClientStateResponse = {};
exports.QueryClientStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientState !== undefined) {
      any_1.Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryClientStateResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientState = any_1.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryClientStateResponse);

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromJSON(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryClientStateResponse);

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromPartial(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof;
    } else {
      message.proof = new Uint8Array();
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    return message;
  }
};
var baseQueryClientStatesRequest = {};
exports.QueryClientStatesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryClientStatesRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryClientStatesRequest);

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryClientStatesRequest);

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryClientStatesResponse = {};
exports.QueryClientStatesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator = _createForOfIteratorHelper(message.clientStates),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryClientStatesResponse);
    message.clientStates = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientStates.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryClientStatesResponse);
    message.clientStates = [];

    if (object.clientStates !== undefined && object.clientStates !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.clientStates),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.clientStates.push(client_1.IdentifiedClientState.fromJSON(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.clientStates) {
      obj.clientStates = message.clientStates.map(function (e) {
        return e ? client_1.IdentifiedClientState.toJSON(e) : undefined;
      });
    } else {
      obj.clientStates = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryClientStatesResponse);
    message.clientStates = [];

    if (object.clientStates !== undefined && object.clientStates !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.clientStates),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.clientStates.push(client_1.IdentifiedClientState.fromPartial(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryConsensusStateRequest = {
  clientId: '',
  revisionNumber: long_1["default"].UZERO,
  revisionHeight: long_1["default"].UZERO,
  latestHeight: false
};
exports.QueryConsensusStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (!message.revisionNumber.isZero()) {
      writer.uint32(16).uint64(message.revisionNumber);
    }

    if (!message.revisionHeight.isZero()) {
      writer.uint32(24).uint64(message.revisionHeight);
    }

    if (message.latestHeight === true) {
      writer.uint32(32).bool(message.latestHeight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConsensusStateRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.revisionNumber = reader.uint64();
          break;

        case 3:
          message.revisionHeight = reader.uint64();
          break;

        case 4:
          message.latestHeight = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryConsensusStateRequest);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

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

    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = Boolean(object.latestHeight);
    } else {
      message.latestHeight = false;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || long_1["default"].UZERO).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || long_1["default"].UZERO).toString());
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConsensusStateRequest);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

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

    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = object.latestHeight;
    } else {
      message.latestHeight = false;
    }

    return message;
  }
};
var baseQueryConsensusStateResponse = {};
exports.QueryConsensusStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.consensusState !== undefined) {
      any_1.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConsensusStateResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensusState = any_1.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryConsensusStateResponse);

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? any_1.Any.toJSON(message.consensusState) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConsensusStateResponse);

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof;
    } else {
      message.proof = new Uint8Array();
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    return message;
  }
};
var baseQueryConsensusStatesRequest = {
  clientId: ''
};
exports.QueryConsensusStatesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConsensusStatesRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryConsensusStatesRequest);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConsensusStatesRequest);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryConsensusStatesResponse = {};
exports.QueryConsensusStatesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator4 = _createForOfIteratorHelper(message.consensusStates),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        client_1.ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConsensusStatesResponse);
    message.consensusStates = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensusStates.push(client_1.ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryConsensusStatesResponse);
    message.consensusStates = [];

    if (object.consensusStates !== undefined && object.consensusStates !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.consensusStates),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.consensusStates.push(client_1.ConsensusStateWithHeight.fromJSON(e));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map(function (e) {
        return e ? client_1.ConsensusStateWithHeight.toJSON(e) : undefined;
      });
    } else {
      obj.consensusStates = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConsensusStatesResponse);
    message.consensusStates = [];

    if (object.consensusStates !== undefined && object.consensusStates !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.consensusStates),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.consensusStates.push(client_1.ConsensusStateWithHeight.fromPartial(e));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryClientParamsRequest = {};
exports.QueryClientParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryClientParamsRequest);

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
    var message = Object.assign({}, baseQueryClientParamsRequest);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseQueryClientParamsRequest);
    return message;
  }
};
var baseQueryClientParamsResponse = {};
exports.QueryClientParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.params !== undefined) {
      client_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryClientParamsResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = client_1.Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryClientParamsResponse);

    if (object.params !== undefined && object.params !== null) {
      message.params = client_1.Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.params !== undefined && (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryClientParamsResponse);

    if (object.params !== undefined && object.params !== null) {
      message.params = client_1.Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }

    return message;
  }
};

var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    _classCallCheck(this, QueryClientImpl);

    this.rpc = rpc;
  }

  _createClass(QueryClientImpl, [{
    key: "ClientState",
    value: function ClientState(request) {
      var data = exports.QueryClientStateRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.client.v1.Query', 'ClientState', data);
      return promise.then(function (data) {
        return exports.QueryClientStateResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ClientStates",
    value: function ClientStates(request) {
      var data = exports.QueryClientStatesRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.client.v1.Query', 'ClientStates', data);
      return promise.then(function (data) {
        return exports.QueryClientStatesResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ConsensusState",
    value: function ConsensusState(request) {
      var data = exports.QueryConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.client.v1.Query', 'ConsensusState', data);
      return promise.then(function (data) {
        return exports.QueryConsensusStateResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ConsensusStates",
    value: function ConsensusStates(request) {
      var data = exports.QueryConsensusStatesRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.client.v1.Query', 'ConsensusStates', data);
      return promise.then(function (data) {
        return exports.QueryConsensusStatesResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ClientParams",
    value: function ClientParams(request) {
      var data = exports.QueryClientParamsRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.client.v1.Query', 'ClientParams', data);
      return promise.then(function (data) {
        return exports.QueryClientParamsResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }]);

  return QueryClientImpl;
}();

exports.QueryClientImpl = QueryClientImpl;

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
//# sourceMappingURL=query.js.map