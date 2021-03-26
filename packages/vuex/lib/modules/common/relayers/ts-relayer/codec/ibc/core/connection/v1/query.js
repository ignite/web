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
exports.QueryClientImpl = exports.QueryConnectionConsensusStateResponse = exports.QueryConnectionConsensusStateRequest = exports.QueryConnectionClientStateResponse = exports.QueryConnectionClientStateRequest = exports.QueryClientConnectionsResponse = exports.QueryClientConnectionsRequest = exports.QueryConnectionsResponse = exports.QueryConnectionsRequest = exports.QueryConnectionResponse = exports.QueryConnectionRequest = exports.protobufPackage = void 0;
/* eslint-disable */

var connection_1 = require("../../../../ibc/core/connection/v1/connection");

var client_1 = require("../../../../ibc/core/client/v1/client");

var pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");

var long_1 = __importDefault(require("long"));

var any_1 = require("../../../../google/protobuf/any");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.connection.v1';
var baseQueryConnectionRequest = {
  connectionId: ''
};
exports.QueryConnectionRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.connectionId !== '') {
      writer.uint32(10).string(message.connectionId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConnectionRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryConnectionRequest);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConnectionRequest);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = '';
    }

    return message;
  }
};
var baseQueryConnectionResponse = {};
exports.QueryConnectionResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.connection !== undefined) {
      connection_1.ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
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
    var message = Object.assign({}, baseQueryConnectionResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
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
    var message = Object.assign({}, baseQueryConnectionResponse);

    if (object.connection !== undefined && object.connection !== null) {
      message.connection = connection_1.ConnectionEnd.fromJSON(object.connection);
    } else {
      message.connection = undefined;
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
    message.connection !== undefined && (obj.connection = message.connection ? connection_1.ConnectionEnd.toJSON(message.connection) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConnectionResponse);

    if (object.connection !== undefined && object.connection !== null) {
      message.connection = connection_1.ConnectionEnd.fromPartial(object.connection);
    } else {
      message.connection = undefined;
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
var baseQueryConnectionsRequest = {};
exports.QueryConnectionsRequest = {
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
    var message = Object.assign({}, baseQueryConnectionsRequest);

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
    var message = Object.assign({}, baseQueryConnectionsRequest);

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
    var message = Object.assign({}, baseQueryConnectionsRequest);

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryConnectionsResponse = {};
exports.QueryConnectionsResponse = {
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

    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConnectionsResponse);
    message.connections = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = client_1.Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryConnectionsResponse);
    message.connections = [];

    if (object.connections !== undefined && object.connections !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.connections),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.connections.push(connection_1.IdentifiedConnection.fromJSON(e));
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

    if (object.height !== undefined && object.height !== null) {
      message.height = client_1.Height.fromJSON(object.height);
    } else {
      message.height = undefined;
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

    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConnectionsResponse);
    message.connections = [];

    if (object.connections !== undefined && object.connections !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.connections),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.connections.push(connection_1.IdentifiedConnection.fromPartial(e));
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

    if (object.height !== undefined && object.height !== null) {
      message.height = client_1.Height.fromPartial(object.height);
    } else {
      message.height = undefined;
    }

    return message;
  }
};
var baseQueryClientConnectionsRequest = {
  clientId: ''
};
exports.QueryClientConnectionsRequest = {
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
    var message = Object.assign({}, baseQueryClientConnectionsRequest);

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
    var message = Object.assign({}, baseQueryClientConnectionsRequest);

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
    var message = Object.assign({}, baseQueryClientConnectionsRequest);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    return message;
  }
};
var baseQueryClientConnectionsResponse = {
  connectionPaths: ''
};
exports.QueryClientConnectionsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator4 = _createForOfIteratorHelper(message.connectionPaths),
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
    var message = Object.assign({}, baseQueryClientConnectionsResponse);
    message.connectionPaths = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionPaths.push(reader.string());
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
    var message = Object.assign({}, baseQueryClientConnectionsResponse);
    message.connectionPaths = [];

    if (object.connectionPaths !== undefined && object.connectionPaths !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.connectionPaths),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.connectionPaths.push(String(e));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
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

    if (message.connectionPaths) {
      obj.connectionPaths = message.connectionPaths.map(function (e) {
        return e;
      });
    } else {
      obj.connectionPaths = [];
    }

    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryClientConnectionsResponse);
    message.connectionPaths = [];

    if (object.connectionPaths !== undefined && object.connectionPaths !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.connectionPaths),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.connectionPaths.push(e);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
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
var baseQueryConnectionClientStateRequest = {
  connectionId: ''
};
exports.QueryConnectionClientStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.connectionId !== '') {
      writer.uint32(10).string(message.connectionId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConnectionClientStateRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryConnectionClientStateRequest);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConnectionClientStateRequest);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = '';
    }

    return message;
  }
};
var baseQueryConnectionClientStateResponse = {};
exports.QueryConnectionClientStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.identifiedClientState !== undefined) {
      client_1.IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
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
    var message = Object.assign({}, baseQueryConnectionClientStateResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifiedClientState = client_1.IdentifiedClientState.decode(reader, reader.uint32());
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
    var message = Object.assign({}, baseQueryConnectionClientStateResponse);

    if (object.identifiedClientState !== undefined && object.identifiedClientState !== null) {
      message.identifiedClientState = client_1.IdentifiedClientState.fromJSON(object.identifiedClientState);
    } else {
      message.identifiedClientState = undefined;
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
    message.identifiedClientState !== undefined && (obj.identifiedClientState = message.identifiedClientState ? client_1.IdentifiedClientState.toJSON(message.identifiedClientState) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConnectionClientStateResponse);

    if (object.identifiedClientState !== undefined && object.identifiedClientState !== null) {
      message.identifiedClientState = client_1.IdentifiedClientState.fromPartial(object.identifiedClientState);
    } else {
      message.identifiedClientState = undefined;
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
var baseQueryConnectionConsensusStateRequest = {
  connectionId: '',
  revisionNumber: long_1["default"].UZERO,
  revisionHeight: long_1["default"].UZERO
};
exports.QueryConnectionConsensusStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.connectionId !== '') {
      writer.uint32(10).string(message.connectionId);
    }

    if (!message.revisionNumber.isZero()) {
      writer.uint32(16).uint64(message.revisionNumber);
    }

    if (!message.revisionHeight.isZero()) {
      writer.uint32(24).uint64(message.revisionHeight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConnectionConsensusStateRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.revisionNumber = reader.uint64();
          break;

        case 3:
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
    var message = Object.assign({}, baseQueryConnectionConsensusStateRequest);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = '';
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

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || long_1["default"].UZERO).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConnectionConsensusStateRequest);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = '';
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

    return message;
  }
};
var baseQueryConnectionConsensusStateResponse = {
  clientId: ''
};
exports.QueryConnectionConsensusStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.consensusState !== undefined) {
      any_1.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }

    if (message.clientId !== '') {
      writer.uint32(18).string(message.clientId);
    }

    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConnectionConsensusStateResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensusState = any_1.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.clientId = reader.string();
          break;

        case 3:
          message.proof = reader.bytes();
          break;

        case 4:
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
    var message = Object.assign({}, baseQueryConnectionConsensusStateResponse);

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
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
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConnectionConsensusStateResponse);

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
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

var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    _classCallCheck(this, QueryClientImpl);

    this.rpc = rpc;
  }

  _createClass(QueryClientImpl, [{
    key: "Connection",
    value: function Connection(request) {
      var data = exports.QueryConnectionRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.connection.v1.Query', 'Connection', data);
      return promise.then(function (data) {
        return exports.QueryConnectionResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "Connections",
    value: function Connections(request) {
      var data = exports.QueryConnectionsRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.connection.v1.Query', 'Connections', data);
      return promise.then(function (data) {
        return exports.QueryConnectionsResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ClientConnections",
    value: function ClientConnections(request) {
      var data = exports.QueryClientConnectionsRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.connection.v1.Query', 'ClientConnections', data);
      return promise.then(function (data) {
        return exports.QueryClientConnectionsResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ConnectionClientState",
    value: function ConnectionClientState(request) {
      var data = exports.QueryConnectionClientStateRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.connection.v1.Query', 'ConnectionClientState', data);
      return promise.then(function (data) {
        return exports.QueryConnectionClientStateResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ConnectionConsensusState",
    value: function ConnectionConsensusState(request) {
      var data = exports.QueryConnectionConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.connection.v1.Query', 'ConnectionConsensusState', data);
      return promise.then(function (data) {
        return exports.QueryConnectionConsensusStateResponse.decode(new minimal_1["default"].Reader(data));
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