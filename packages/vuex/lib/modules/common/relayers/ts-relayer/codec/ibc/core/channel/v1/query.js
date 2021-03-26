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
exports.QueryClientImpl = exports.QueryNextSequenceReceiveResponse = exports.QueryNextSequenceReceiveRequest = exports.QueryUnreceivedAcksResponse = exports.QueryUnreceivedAcksRequest = exports.QueryUnreceivedPacketsResponse = exports.QueryUnreceivedPacketsRequest = exports.QueryPacketAcknowledgementsResponse = exports.QueryPacketAcknowledgementsRequest = exports.QueryPacketAcknowledgementResponse = exports.QueryPacketAcknowledgementRequest = exports.QueryPacketReceiptResponse = exports.QueryPacketReceiptRequest = exports.QueryPacketCommitmentsResponse = exports.QueryPacketCommitmentsRequest = exports.QueryPacketCommitmentResponse = exports.QueryPacketCommitmentRequest = exports.QueryChannelConsensusStateResponse = exports.QueryChannelConsensusStateRequest = exports.QueryChannelClientStateResponse = exports.QueryChannelClientStateRequest = exports.QueryConnectionChannelsResponse = exports.QueryConnectionChannelsRequest = exports.QueryChannelsResponse = exports.QueryChannelsRequest = exports.QueryChannelResponse = exports.QueryChannelRequest = exports.protobufPackage = void 0;
/* eslint-disable */

var channel_1 = require("../../../../ibc/core/channel/v1/channel");

var client_1 = require("../../../../ibc/core/client/v1/client");

var pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");

var long_1 = __importDefault(require("long"));

var any_1 = require("../../../../google/protobuf/any");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.channel.v1';
var baseQueryChannelRequest = {
  portId: '',
  channelId: ''
};
exports.QueryChannelRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryChannelRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryChannelRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryChannelRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    return message;
  }
};
var baseQueryChannelResponse = {};
exports.QueryChannelResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.channel !== undefined) {
      channel_1.Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
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
    var message = Object.assign({}, baseQueryChannelResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channel = channel_1.Channel.decode(reader, reader.uint32());
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
    var message = Object.assign({}, baseQueryChannelResponse);

    if (object.channel !== undefined && object.channel !== null) {
      message.channel = channel_1.Channel.fromJSON(object.channel);
    } else {
      message.channel = undefined;
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
    message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryChannelResponse);

    if (object.channel !== undefined && object.channel !== null) {
      message.channel = channel_1.Channel.fromPartial(object.channel);
    } else {
      message.channel = undefined;
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
var baseQueryChannelsRequest = {};
exports.QueryChannelsRequest = {
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
    var message = Object.assign({}, baseQueryChannelsRequest);

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
    var message = Object.assign({}, baseQueryChannelsRequest);

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
    var message = Object.assign({}, baseQueryChannelsRequest);

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryChannelsResponse = {};
exports.QueryChannelsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator = _createForOfIteratorHelper(message.channels),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = Object.assign({}, baseQueryChannelsResponse);
    message.channels = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
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
    var message = Object.assign({}, baseQueryChannelsResponse);
    message.channels = [];

    if (object.channels !== undefined && object.channels !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.channels),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.channels.push(channel_1.IdentifiedChannel.fromJSON(e));
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

    if (message.channels) {
      obj.channels = message.channels.map(function (e) {
        return e ? channel_1.IdentifiedChannel.toJSON(e) : undefined;
      });
    } else {
      obj.channels = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryChannelsResponse);
    message.channels = [];

    if (object.channels !== undefined && object.channels !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.channels),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.channels.push(channel_1.IdentifiedChannel.fromPartial(e));
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
var baseQueryConnectionChannelsRequest = {
  connection: ''
};
exports.QueryConnectionChannelsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.connection !== '') {
      writer.uint32(10).string(message.connection);
    }

    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryConnectionChannelsRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
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
    var message = Object.assign({}, baseQueryConnectionChannelsRequest);

    if (object.connection !== undefined && object.connection !== null) {
      message.connection = String(object.connection);
    } else {
      message.connection = '';
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
    message.connection !== undefined && (obj.connection = message.connection);
    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConnectionChannelsRequest);

    if (object.connection !== undefined && object.connection !== null) {
      message.connection = object.connection;
    } else {
      message.connection = '';
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryConnectionChannelsResponse = {};
exports.QueryConnectionChannelsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator4 = _createForOfIteratorHelper(message.channels),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
    var message = Object.assign({}, baseQueryConnectionChannelsResponse);
    message.channels = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
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
    var message = Object.assign({}, baseQueryConnectionChannelsResponse);
    message.channels = [];

    if (object.channels !== undefined && object.channels !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.channels),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.channels.push(channel_1.IdentifiedChannel.fromJSON(e));
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

    if (object.height !== undefined && object.height !== null) {
      message.height = client_1.Height.fromJSON(object.height);
    } else {
      message.height = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.channels) {
      obj.channels = message.channels.map(function (e) {
        return e ? channel_1.IdentifiedChannel.toJSON(e) : undefined;
      });
    } else {
      obj.channels = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryConnectionChannelsResponse);
    message.channels = [];

    if (object.channels !== undefined && object.channels !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.channels),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.channels.push(channel_1.IdentifiedChannel.fromPartial(e));
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

    if (object.height !== undefined && object.height !== null) {
      message.height = client_1.Height.fromPartial(object.height);
    } else {
      message.height = undefined;
    }

    return message;
  }
};
var baseQueryChannelClientStateRequest = {
  portId: '',
  channelId: ''
};
exports.QueryChannelClientStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryChannelClientStateRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryChannelClientStateRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryChannelClientStateRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    return message;
  }
};
var baseQueryChannelClientStateResponse = {};
exports.QueryChannelClientStateResponse = {
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
    var message = Object.assign({}, baseQueryChannelClientStateResponse);

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
    var message = Object.assign({}, baseQueryChannelClientStateResponse);

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
    var message = Object.assign({}, baseQueryChannelClientStateResponse);

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
var baseQueryChannelConsensusStateRequest = {
  portId: '',
  channelId: '',
  revisionNumber: long_1["default"].UZERO,
  revisionHeight: long_1["default"].UZERO
};
exports.QueryChannelConsensusStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.revisionNumber.isZero()) {
      writer.uint32(24).uint64(message.revisionNumber);
    }

    if (!message.revisionHeight.isZero()) {
      writer.uint32(32).uint64(message.revisionHeight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryChannelConsensusStateRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.revisionNumber = reader.uint64();
          break;

        case 4:
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
    var message = Object.assign({}, baseQueryChannelConsensusStateRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
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
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || long_1["default"].UZERO).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryChannelConsensusStateRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
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
var baseQueryChannelConsensusStateResponse = {
  clientId: ''
};
exports.QueryChannelConsensusStateResponse = {
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
    var message = Object.assign({}, baseQueryChannelConsensusStateResponse);

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
    var message = Object.assign({}, baseQueryChannelConsensusStateResponse);

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
    var message = Object.assign({}, baseQueryChannelConsensusStateResponse);

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
var baseQueryPacketCommitmentRequest = {
  portId: '',
  channelId: '',
  sequence: long_1["default"].UZERO
};
exports.QueryPacketCommitmentRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryPacketCommitmentRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.sequence = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryPacketCommitmentRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = long_1["default"].fromString(object.sequence);
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketCommitmentRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseQueryPacketCommitmentResponse = {};
exports.QueryPacketCommitmentResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
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
    var message = Object.assign({}, baseQueryPacketCommitmentResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
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
    var message = Object.assign({}, baseQueryPacketCommitmentResponse);

    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = bytesFromBase64(object.commitment);
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
    message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketCommitmentResponse);

    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = object.commitment;
    } else {
      message.commitment = new Uint8Array();
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
var baseQueryPacketCommitmentsRequest = {
  portId: '',
  channelId: ''
};
exports.QueryPacketCommitmentsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryPacketCommitmentsRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
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
    var message = Object.assign({}, baseQueryPacketCommitmentsRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
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
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketCommitmentsRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryPacketCommitmentsResponse = {};
exports.QueryPacketCommitmentsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator7 = _createForOfIteratorHelper(message.commitments),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
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
    var message = Object.assign({}, baseQueryPacketCommitmentsResponse);
    message.commitments = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
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
    var message = Object.assign({}, baseQueryPacketCommitmentsResponse);
    message.commitments = [];

    if (object.commitments !== undefined && object.commitments !== null) {
      var _iterator8 = _createForOfIteratorHelper(object.commitments),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var e = _step8.value;
          message.commitments.push(channel_1.PacketState.fromJSON(e));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
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

    if (message.commitments) {
      obj.commitments = message.commitments.map(function (e) {
        return e ? channel_1.PacketState.toJSON(e) : undefined;
      });
    } else {
      obj.commitments = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketCommitmentsResponse);
    message.commitments = [];

    if (object.commitments !== undefined && object.commitments !== null) {
      var _iterator9 = _createForOfIteratorHelper(object.commitments),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var e = _step9.value;
          message.commitments.push(channel_1.PacketState.fromPartial(e));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
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
var baseQueryPacketReceiptRequest = {
  portId: '',
  channelId: '',
  sequence: long_1["default"].UZERO
};
exports.QueryPacketReceiptRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryPacketReceiptRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.sequence = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryPacketReceiptRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = long_1["default"].fromString(object.sequence);
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketReceiptRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseQueryPacketReceiptResponse = {
  received: false
};
exports.QueryPacketReceiptResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.received === true) {
      writer.uint32(16).bool(message.received);
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
    var message = Object.assign({}, baseQueryPacketReceiptResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
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
    var message = Object.assign({}, baseQueryPacketReceiptResponse);

    if (object.received !== undefined && object.received !== null) {
      message.received = Boolean(object.received);
    } else {
      message.received = false;
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
    message.received !== undefined && (obj.received = message.received);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketReceiptResponse);

    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    } else {
      message.received = false;
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
var baseQueryPacketAcknowledgementRequest = {
  portId: '',
  channelId: '',
  sequence: long_1["default"].UZERO
};
exports.QueryPacketAcknowledgementRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryPacketAcknowledgementRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.sequence = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryPacketAcknowledgementRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = long_1["default"].fromString(object.sequence);
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketAcknowledgementRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseQueryPacketAcknowledgementResponse = {};
exports.QueryPacketAcknowledgementResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
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
    var message = Object.assign({}, baseQueryPacketAcknowledgementResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
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
    var message = Object.assign({}, baseQueryPacketAcknowledgementResponse);

    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
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
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketAcknowledgementResponse);

    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = object.acknowledgement;
    } else {
      message.acknowledgement = new Uint8Array();
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
var baseQueryPacketAcknowledgementsRequest = {
  portId: '',
  channelId: ''
};
exports.QueryPacketAcknowledgementsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryPacketAcknowledgementsRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
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
    var message = Object.assign({}, baseQueryPacketAcknowledgementsRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
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
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketAcknowledgementsRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryPacketAcknowledgementsResponse = {};
exports.QueryPacketAcknowledgementsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator10 = _createForOfIteratorHelper(message.acknowledgements),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
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
    var message = Object.assign({}, baseQueryPacketAcknowledgementsResponse);
    message.acknowledgements = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
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
    var message = Object.assign({}, baseQueryPacketAcknowledgementsResponse);
    message.acknowledgements = [];

    if (object.acknowledgements !== undefined && object.acknowledgements !== null) {
      var _iterator11 = _createForOfIteratorHelper(object.acknowledgements),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var e = _step11.value;
          message.acknowledgements.push(channel_1.PacketState.fromJSON(e));
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
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

    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(function (e) {
        return e ? channel_1.PacketState.toJSON(e) : undefined;
      });
    } else {
      obj.acknowledgements = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryPacketAcknowledgementsResponse);
    message.acknowledgements = [];

    if (object.acknowledgements !== undefined && object.acknowledgements !== null) {
      var _iterator12 = _createForOfIteratorHelper(object.acknowledgements),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var e = _step12.value;
          message.acknowledgements.push(channel_1.PacketState.fromPartial(e));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
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
var baseQueryUnreceivedPacketsRequest = {
  portId: '',
  channelId: '',
  packetCommitmentSequences: long_1["default"].UZERO
};
exports.QueryUnreceivedPacketsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    writer.uint32(26).fork();

    var _iterator13 = _createForOfIteratorHelper(message.packetCommitmentSequences),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var v = _step13.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryUnreceivedPacketsRequest);
    message.packetCommitmentSequences = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(reader.uint64());
            }
          } else {
            message.packetCommitmentSequences.push(reader.uint64());
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
    var message = Object.assign({}, baseQueryUnreceivedPacketsRequest);
    message.packetCommitmentSequences = [];

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    if (object.packetCommitmentSequences !== undefined && object.packetCommitmentSequences !== null) {
      var _iterator14 = _createForOfIteratorHelper(object.packetCommitmentSequences),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var e = _step14.value;
          message.packetCommitmentSequences.push(long_1["default"].fromString(e));
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);

    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map(function (e) {
        return (e || long_1["default"].UZERO).toString();
      });
    } else {
      obj.packetCommitmentSequences = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryUnreceivedPacketsRequest);
    message.packetCommitmentSequences = [];

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    if (object.packetCommitmentSequences !== undefined && object.packetCommitmentSequences !== null) {
      var _iterator15 = _createForOfIteratorHelper(object.packetCommitmentSequences),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var e = _step15.value;
          message.packetCommitmentSequences.push(e);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }

    return message;
  }
};
var baseQueryUnreceivedPacketsResponse = {
  sequences: long_1["default"].UZERO
};
exports.QueryUnreceivedPacketsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    writer.uint32(10).fork();

    var _iterator16 = _createForOfIteratorHelper(message.sequences),
        _step16;

    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var v = _step16.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }

    writer.ldelim();

    if (message.height !== undefined) {
      client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryUnreceivedPacketsResponse);
    message.sequences = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }

          break;

        case 2:
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
    var message = Object.assign({}, baseQueryUnreceivedPacketsResponse);
    message.sequences = [];

    if (object.sequences !== undefined && object.sequences !== null) {
      var _iterator17 = _createForOfIteratorHelper(object.sequences),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var e = _step17.value;
          message.sequences.push(long_1["default"].fromString(e));
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
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

    if (message.sequences) {
      obj.sequences = message.sequences.map(function (e) {
        return (e || long_1["default"].UZERO).toString();
      });
    } else {
      obj.sequences = [];
    }

    message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryUnreceivedPacketsResponse);
    message.sequences = [];

    if (object.sequences !== undefined && object.sequences !== null) {
      var _iterator18 = _createForOfIteratorHelper(object.sequences),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var e = _step18.value;
          message.sequences.push(e);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = client_1.Height.fromPartial(object.height);
    } else {
      message.height = undefined;
    }

    return message;
  }
};
var baseQueryUnreceivedAcksRequest = {
  portId: '',
  channelId: '',
  packetAckSequences: long_1["default"].UZERO
};
exports.QueryUnreceivedAcksRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    writer.uint32(26).fork();

    var _iterator19 = _createForOfIteratorHelper(message.packetAckSequences),
        _step19;

    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var v = _step19.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }

    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryUnreceivedAcksRequest);
    message.packetAckSequences = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packetAckSequences.push(reader.uint64());
            }
          } else {
            message.packetAckSequences.push(reader.uint64());
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
    var message = Object.assign({}, baseQueryUnreceivedAcksRequest);
    message.packetAckSequences = [];

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    if (object.packetAckSequences !== undefined && object.packetAckSequences !== null) {
      var _iterator20 = _createForOfIteratorHelper(object.packetAckSequences),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var e = _step20.value;
          message.packetAckSequences.push(long_1["default"].fromString(e));
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);

    if (message.packetAckSequences) {
      obj.packetAckSequences = message.packetAckSequences.map(function (e) {
        return (e || long_1["default"].UZERO).toString();
      });
    } else {
      obj.packetAckSequences = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryUnreceivedAcksRequest);
    message.packetAckSequences = [];

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    if (object.packetAckSequences !== undefined && object.packetAckSequences !== null) {
      var _iterator21 = _createForOfIteratorHelper(object.packetAckSequences),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var e = _step21.value;
          message.packetAckSequences.push(e);
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
    }

    return message;
  }
};
var baseQueryUnreceivedAcksResponse = {
  sequences: long_1["default"].UZERO
};
exports.QueryUnreceivedAcksResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    writer.uint32(10).fork();

    var _iterator22 = _createForOfIteratorHelper(message.sequences),
        _step22;

    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var v = _step22.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }

    writer.ldelim();

    if (message.height !== undefined) {
      client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryUnreceivedAcksResponse);
    message.sequences = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }

          break;

        case 2:
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
    var message = Object.assign({}, baseQueryUnreceivedAcksResponse);
    message.sequences = [];

    if (object.sequences !== undefined && object.sequences !== null) {
      var _iterator23 = _createForOfIteratorHelper(object.sequences),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var e = _step23.value;
          message.sequences.push(long_1["default"].fromString(e));
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
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

    if (message.sequences) {
      obj.sequences = message.sequences.map(function (e) {
        return (e || long_1["default"].UZERO).toString();
      });
    } else {
      obj.sequences = [];
    }

    message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryUnreceivedAcksResponse);
    message.sequences = [];

    if (object.sequences !== undefined && object.sequences !== null) {
      var _iterator24 = _createForOfIteratorHelper(object.sequences),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var e = _step24.value;
          message.sequences.push(e);
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = client_1.Height.fromPartial(object.height);
    } else {
      message.height = undefined;
    }

    return message;
  }
};
var baseQueryNextSequenceReceiveRequest = {
  portId: '',
  channelId: ''
};
exports.QueryNextSequenceReceiveRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryNextSequenceReceiveRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryNextSequenceReceiveRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryNextSequenceReceiveRequest);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    return message;
  }
};
var baseQueryNextSequenceReceiveResponse = {
  nextSequenceReceive: long_1["default"].UZERO
};
exports.QueryNextSequenceReceiveResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.nextSequenceReceive.isZero()) {
      writer.uint32(8).uint64(message.nextSequenceReceive);
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
    var message = Object.assign({}, baseQueryNextSequenceReceiveResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextSequenceReceive = reader.uint64();
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
    var message = Object.assign({}, baseQueryNextSequenceReceiveResponse);

    if (object.nextSequenceReceive !== undefined && object.nextSequenceReceive !== null) {
      message.nextSequenceReceive = long_1["default"].fromString(object.nextSequenceReceive);
    } else {
      message.nextSequenceReceive = long_1["default"].UZERO;
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
    message.nextSequenceReceive !== undefined && (obj.nextSequenceReceive = (message.nextSequenceReceive || long_1["default"].UZERO).toString());
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryNextSequenceReceiveResponse);

    if (object.nextSequenceReceive !== undefined && object.nextSequenceReceive !== null) {
      message.nextSequenceReceive = object.nextSequenceReceive;
    } else {
      message.nextSequenceReceive = long_1["default"].UZERO;
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
    key: "Channel",
    value: function Channel(request) {
      var data = exports.QueryChannelRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'Channel', data);
      return promise.then(function (data) {
        return exports.QueryChannelResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "Channels",
    value: function Channels(request) {
      var data = exports.QueryChannelsRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'Channels', data);
      return promise.then(function (data) {
        return exports.QueryChannelsResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ConnectionChannels",
    value: function ConnectionChannels(request) {
      var data = exports.QueryConnectionChannelsRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'ConnectionChannels', data);
      return promise.then(function (data) {
        return exports.QueryConnectionChannelsResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ChannelClientState",
    value: function ChannelClientState(request) {
      var data = exports.QueryChannelClientStateRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'ChannelClientState', data);
      return promise.then(function (data) {
        return exports.QueryChannelClientStateResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ChannelConsensusState",
    value: function ChannelConsensusState(request) {
      var data = exports.QueryChannelConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'ChannelConsensusState', data);
      return promise.then(function (data) {
        return exports.QueryChannelConsensusStateResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "PacketCommitment",
    value: function PacketCommitment(request) {
      var data = exports.QueryPacketCommitmentRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'PacketCommitment', data);
      return promise.then(function (data) {
        return exports.QueryPacketCommitmentResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "PacketCommitments",
    value: function PacketCommitments(request) {
      var data = exports.QueryPacketCommitmentsRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'PacketCommitments', data);
      return promise.then(function (data) {
        return exports.QueryPacketCommitmentsResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "PacketReceipt",
    value: function PacketReceipt(request) {
      var data = exports.QueryPacketReceiptRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'PacketReceipt', data);
      return promise.then(function (data) {
        return exports.QueryPacketReceiptResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "PacketAcknowledgement",
    value: function PacketAcknowledgement(request) {
      var data = exports.QueryPacketAcknowledgementRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'PacketAcknowledgement', data);
      return promise.then(function (data) {
        return exports.QueryPacketAcknowledgementResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "PacketAcknowledgements",
    value: function PacketAcknowledgements(request) {
      var data = exports.QueryPacketAcknowledgementsRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'PacketAcknowledgements', data);
      return promise.then(function (data) {
        return exports.QueryPacketAcknowledgementsResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "UnreceivedPackets",
    value: function UnreceivedPackets(request) {
      var data = exports.QueryUnreceivedPacketsRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'UnreceivedPackets', data);
      return promise.then(function (data) {
        return exports.QueryUnreceivedPacketsResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "UnreceivedAcks",
    value: function UnreceivedAcks(request) {
      var data = exports.QueryUnreceivedAcksRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'UnreceivedAcks', data);
      return promise.then(function (data) {
        return exports.QueryUnreceivedAcksResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "NextSequenceReceive",
    value: function NextSequenceReceive(request) {
      var data = exports.QueryNextSequenceReceiveRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Query', 'NextSequenceReceive', data);
      return promise.then(function (data) {
        return exports.QueryNextSequenceReceiveResponse.decode(new minimal_1["default"].Reader(data));
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