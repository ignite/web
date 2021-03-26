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
exports.MsgClientImpl = exports.MsgConnectionOpenConfirmResponse = exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAckResponse = exports.MsgConnectionOpenAck = exports.MsgConnectionOpenTryResponse = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInitResponse = exports.MsgConnectionOpenInit = exports.protobufPackage = void 0;
/* eslint-disable */

var connection_1 = require("../../../../ibc/core/connection/v1/connection");

var long_1 = __importDefault(require("long"));

var any_1 = require("../../../../google/protobuf/any");

var client_1 = require("../../../../ibc/core/client/v1/client");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.connection.v1';
var baseMsgConnectionOpenInit = {
  clientId: '',
  delayPeriod: long_1["default"].UZERO,
  signer: ''
};
exports.MsgConnectionOpenInit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (message.counterparty !== undefined) {
      connection_1.Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }

    if (message.version !== undefined) {
      connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }

    if (!message.delayPeriod.isZero()) {
      writer.uint32(32).uint64(message.delayPeriod);
    }

    if (message.signer !== '') {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgConnectionOpenInit);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
          break;

        case 3:
          message.version = connection_1.Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.delayPeriod = reader.uint64();
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseMsgConnectionOpenInit);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = connection_1.Counterparty.fromJSON(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = connection_1.Version.fromJSON(object.version);
    } else {
      message.version = undefined;
    }

    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = long_1["default"].fromString(object.delayPeriod);
    } else {
      message.delayPeriod = long_1["default"].UZERO;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? connection_1.Counterparty.toJSON(message.counterparty) : undefined);
    message.version !== undefined && (obj.version = message.version ? connection_1.Version.toJSON(message.version) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || long_1["default"].UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgConnectionOpenInit);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = connection_1.Counterparty.fromPartial(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = connection_1.Version.fromPartial(object.version);
    } else {
      message.version = undefined;
    }

    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = object.delayPeriod;
    } else {
      message.delayPeriod = long_1["default"].UZERO;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgConnectionOpenInitResponse = {};
exports.MsgConnectionOpenInitResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgConnectionOpenInitResponse);

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
    var message = Object.assign({}, baseMsgConnectionOpenInitResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgConnectionOpenInitResponse);
    return message;
  }
};
var baseMsgConnectionOpenTry = {
  clientId: '',
  previousConnectionId: '',
  delayPeriod: long_1["default"].UZERO,
  signer: ''
};
exports.MsgConnectionOpenTry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (message.previousConnectionId !== '') {
      writer.uint32(18).string(message.previousConnectionId);
    }

    if (message.clientState !== undefined) {
      any_1.Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }

    if (message.counterparty !== undefined) {
      connection_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }

    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }

    var _iterator = _createForOfIteratorHelper(message.counterpartyVersions),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        connection_1.Version.encode(v, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }

    if (message.proofInit.length !== 0) {
      writer.uint32(66).bytes(message.proofInit);
    }

    if (message.proofClient.length !== 0) {
      writer.uint32(74).bytes(message.proofClient);
    }

    if (message.proofConsensus.length !== 0) {
      writer.uint32(82).bytes(message.proofConsensus);
    }

    if (message.consensusHeight !== undefined) {
      client_1.Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(98).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgConnectionOpenTry);
    message.counterpartyVersions = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.previousConnectionId = reader.string();
          break;

        case 3:
          message.clientState = any_1.Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.delayPeriod = reader.uint64();
          break;

        case 6:
          message.counterpartyVersions.push(connection_1.Version.decode(reader, reader.uint32()));
          break;

        case 7:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.proofInit = reader.bytes();
          break;

        case 9:
          message.proofClient = reader.bytes();
          break;

        case 10:
          message.proofConsensus = reader.bytes();
          break;

        case 11:
          message.consensusHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 12:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseMsgConnectionOpenTry);
    message.counterpartyVersions = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.previousConnectionId !== undefined && object.previousConnectionId !== null) {
      message.previousConnectionId = String(object.previousConnectionId);
    } else {
      message.previousConnectionId = '';
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromJSON(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = connection_1.Counterparty.fromJSON(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = long_1["default"].fromString(object.delayPeriod);
    } else {
      message.delayPeriod = long_1["default"].UZERO;
    }

    if (object.counterpartyVersions !== undefined && object.counterpartyVersions !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.counterpartyVersions),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.counterpartyVersions.push(connection_1.Version.fromJSON(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = bytesFromBase64(object.proofInit);
    }

    if (object.proofClient !== undefined && object.proofClient !== null) {
      message.proofClient = bytesFromBase64(object.proofClient);
    }

    if (object.proofConsensus !== undefined && object.proofConsensus !== null) {
      message.proofConsensus = bytesFromBase64(object.proofConsensus);
    }

    if (object.consensusHeight !== undefined && object.consensusHeight !== null) {
      message.consensusHeight = client_1.Height.fromJSON(object.consensusHeight);
    } else {
      message.consensusHeight = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.previousConnectionId !== undefined && (obj.previousConnectionId = message.previousConnectionId);
    message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? connection_1.Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || long_1["default"].UZERO).toString());

    if (message.counterpartyVersions) {
      obj.counterpartyVersions = message.counterpartyVersions.map(function (e) {
        return e ? connection_1.Version.toJSON(e) : undefined;
      });
    } else {
      obj.counterpartyVersions = [];
    }

    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.proofInit !== undefined && (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
    message.proofClient !== undefined && (obj.proofClient = base64FromBytes(message.proofClient !== undefined ? message.proofClient : new Uint8Array()));
    message.proofConsensus !== undefined && (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array()));
    message.consensusHeight !== undefined && (obj.consensusHeight = message.consensusHeight ? client_1.Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgConnectionOpenTry);
    message.counterpartyVersions = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.previousConnectionId !== undefined && object.previousConnectionId !== null) {
      message.previousConnectionId = object.previousConnectionId;
    } else {
      message.previousConnectionId = '';
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromPartial(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = connection_1.Counterparty.fromPartial(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = object.delayPeriod;
    } else {
      message.delayPeriod = long_1["default"].UZERO;
    }

    if (object.counterpartyVersions !== undefined && object.counterpartyVersions !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.counterpartyVersions),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.counterpartyVersions.push(connection_1.Version.fromPartial(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = object.proofInit;
    } else {
      message.proofInit = new Uint8Array();
    }

    if (object.proofClient !== undefined && object.proofClient !== null) {
      message.proofClient = object.proofClient;
    } else {
      message.proofClient = new Uint8Array();
    }

    if (object.proofConsensus !== undefined && object.proofConsensus !== null) {
      message.proofConsensus = object.proofConsensus;
    } else {
      message.proofConsensus = new Uint8Array();
    }

    if (object.consensusHeight !== undefined && object.consensusHeight !== null) {
      message.consensusHeight = client_1.Height.fromPartial(object.consensusHeight);
    } else {
      message.consensusHeight = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgConnectionOpenTryResponse = {};
exports.MsgConnectionOpenTryResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgConnectionOpenTryResponse);

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
    var message = Object.assign({}, baseMsgConnectionOpenTryResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgConnectionOpenTryResponse);
    return message;
  }
};
var baseMsgConnectionOpenAck = {
  connectionId: '',
  counterpartyConnectionId: '',
  signer: ''
};
exports.MsgConnectionOpenAck = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.connectionId !== '') {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.counterpartyConnectionId !== '') {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }

    if (message.version !== undefined) {
      connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }

    if (message.clientState !== undefined) {
      any_1.Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }

    if (message.proofTry.length !== 0) {
      writer.uint32(50).bytes(message.proofTry);
    }

    if (message.proofClient.length !== 0) {
      writer.uint32(58).bytes(message.proofClient);
    }

    if (message.proofConsensus.length !== 0) {
      writer.uint32(66).bytes(message.proofConsensus);
    }

    if (message.consensusHeight !== undefined) {
      client_1.Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(82).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgConnectionOpenAck);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.counterpartyConnectionId = reader.string();
          break;

        case 3:
          message.version = connection_1.Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.clientState = any_1.Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 6:
          message.proofTry = reader.bytes();
          break;

        case 7:
          message.proofClient = reader.bytes();
          break;

        case 8:
          message.proofConsensus = reader.bytes();
          break;

        case 9:
          message.consensusHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 10:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseMsgConnectionOpenAck);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = '';
    }

    if (object.counterpartyConnectionId !== undefined && object.counterpartyConnectionId !== null) {
      message.counterpartyConnectionId = String(object.counterpartyConnectionId);
    } else {
      message.counterpartyConnectionId = '';
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = connection_1.Version.fromJSON(object.version);
    } else {
      message.version = undefined;
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromJSON(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.proofTry !== undefined && object.proofTry !== null) {
      message.proofTry = bytesFromBase64(object.proofTry);
    }

    if (object.proofClient !== undefined && object.proofClient !== null) {
      message.proofClient = bytesFromBase64(object.proofClient);
    }

    if (object.proofConsensus !== undefined && object.proofConsensus !== null) {
      message.proofConsensus = bytesFromBase64(object.proofConsensus);
    }

    if (object.consensusHeight !== undefined && object.consensusHeight !== null) {
      message.consensusHeight = client_1.Height.fromJSON(object.consensusHeight);
    } else {
      message.consensusHeight = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.counterpartyConnectionId !== undefined && (obj.counterpartyConnectionId = message.counterpartyConnectionId);
    message.version !== undefined && (obj.version = message.version ? connection_1.Version.toJSON(message.version) : undefined);
    message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.proofTry !== undefined && (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
    message.proofClient !== undefined && (obj.proofClient = base64FromBytes(message.proofClient !== undefined ? message.proofClient : new Uint8Array()));
    message.proofConsensus !== undefined && (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array()));
    message.consensusHeight !== undefined && (obj.consensusHeight = message.consensusHeight ? client_1.Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgConnectionOpenAck);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = '';
    }

    if (object.counterpartyConnectionId !== undefined && object.counterpartyConnectionId !== null) {
      message.counterpartyConnectionId = object.counterpartyConnectionId;
    } else {
      message.counterpartyConnectionId = '';
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = connection_1.Version.fromPartial(object.version);
    } else {
      message.version = undefined;
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromPartial(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.proofTry !== undefined && object.proofTry !== null) {
      message.proofTry = object.proofTry;
    } else {
      message.proofTry = new Uint8Array();
    }

    if (object.proofClient !== undefined && object.proofClient !== null) {
      message.proofClient = object.proofClient;
    } else {
      message.proofClient = new Uint8Array();
    }

    if (object.proofConsensus !== undefined && object.proofConsensus !== null) {
      message.proofConsensus = object.proofConsensus;
    } else {
      message.proofConsensus = new Uint8Array();
    }

    if (object.consensusHeight !== undefined && object.consensusHeight !== null) {
      message.consensusHeight = client_1.Height.fromPartial(object.consensusHeight);
    } else {
      message.consensusHeight = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgConnectionOpenAckResponse = {};
exports.MsgConnectionOpenAckResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgConnectionOpenAckResponse);

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
    var message = Object.assign({}, baseMsgConnectionOpenAckResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgConnectionOpenAckResponse);
    return message;
  }
};
var baseMsgConnectionOpenConfirm = {
  connectionId: '',
  signer: ''
};
exports.MsgConnectionOpenConfirm = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.connectionId !== '') {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgConnectionOpenConfirm);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.proofAck = reader.bytes();
          break;

        case 3:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseMsgConnectionOpenConfirm);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = '';
    }

    if (object.proofAck !== undefined && object.proofAck !== null) {
      message.proofAck = bytesFromBase64(object.proofAck);
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.proofAck !== undefined && (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgConnectionOpenConfirm);

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = '';
    }

    if (object.proofAck !== undefined && object.proofAck !== null) {
      message.proofAck = object.proofAck;
    } else {
      message.proofAck = new Uint8Array();
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgConnectionOpenConfirmResponse = {};
exports.MsgConnectionOpenConfirmResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgConnectionOpenConfirmResponse);

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
    var message = Object.assign({}, baseMsgConnectionOpenConfirmResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgConnectionOpenConfirmResponse);
    return message;
  }
};

var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    _classCallCheck(this, MsgClientImpl);

    this.rpc = rpc;
  }

  _createClass(MsgClientImpl, [{
    key: "ConnectionOpenInit",
    value: function ConnectionOpenInit(request) {
      var data = exports.MsgConnectionOpenInit.encode(request).finish();
      var promise = this.rpc.request('ibc.core.connection.v1.Msg', 'ConnectionOpenInit', data);
      return promise.then(function (data) {
        return exports.MsgConnectionOpenInitResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ConnectionOpenTry",
    value: function ConnectionOpenTry(request) {
      var data = exports.MsgConnectionOpenTry.encode(request).finish();
      var promise = this.rpc.request('ibc.core.connection.v1.Msg', 'ConnectionOpenTry', data);
      return promise.then(function (data) {
        return exports.MsgConnectionOpenTryResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ConnectionOpenAck",
    value: function ConnectionOpenAck(request) {
      var data = exports.MsgConnectionOpenAck.encode(request).finish();
      var promise = this.rpc.request('ibc.core.connection.v1.Msg', 'ConnectionOpenAck', data);
      return promise.then(function (data) {
        return exports.MsgConnectionOpenAckResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ConnectionOpenConfirm",
    value: function ConnectionOpenConfirm(request) {
      var data = exports.MsgConnectionOpenConfirm.encode(request).finish();
      var promise = this.rpc.request('ibc.core.connection.v1.Msg', 'ConnectionOpenConfirm', data);
      return promise.then(function (data) {
        return exports.MsgConnectionOpenConfirmResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }]);

  return MsgClientImpl;
}();

exports.MsgClientImpl = MsgClientImpl;

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
//# sourceMappingURL=tx.js.map