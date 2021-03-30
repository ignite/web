"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgClientImpl = exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeoutResponse = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = exports.protobufPackage = void 0;
/* eslint-disable */

var channel_1 = require("../../../../ibc/core/channel/v1/channel");

var client_1 = require("../../../../ibc/core/client/v1/client");

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.channel.v1';
var baseMsgChannelOpenInit = {
  portId: '',
  signer: ''
};
exports.MsgChannelOpenInit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channel !== undefined) {
      channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelOpenInit);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channel = channel_1.Channel.decode(reader, reader.uint32());
          break;

        case 3:
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
    var message = Object.assign({}, baseMsgChannelOpenInit);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channel !== undefined && object.channel !== null) {
      message.channel = channel_1.Channel.fromJSON(object.channel);
    } else {
      message.channel = undefined;
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
    message.portId !== undefined && (obj.portId = message.portId);
    message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgChannelOpenInit);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channel !== undefined && object.channel !== null) {
      message.channel = channel_1.Channel.fromPartial(object.channel);
    } else {
      message.channel = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgChannelOpenInitResponse = {};
exports.MsgChannelOpenInitResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelOpenInitResponse);

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
    var message = Object.assign({}, baseMsgChannelOpenInitResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgChannelOpenInitResponse);
    return message;
  }
};
var baseMsgChannelOpenTry = {
  portId: '',
  previousChannelId: '',
  counterpartyVersion: '',
  signer: ''
};
exports.MsgChannelOpenTry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.previousChannelId !== '') {
      writer.uint32(18).string(message.previousChannelId);
    }

    if (message.channel !== undefined) {
      channel_1.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }

    if (message.counterpartyVersion !== '') {
      writer.uint32(34).string(message.counterpartyVersion);
    }

    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(58).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelOpenTry);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.previousChannelId = reader.string();
          break;

        case 3:
          message.channel = channel_1.Channel.decode(reader, reader.uint32());
          break;

        case 4:
          message.counterpartyVersion = reader.string();
          break;

        case 5:
          message.proofInit = reader.bytes();
          break;

        case 6:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 7:
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
    var message = Object.assign({}, baseMsgChannelOpenTry);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.previousChannelId !== undefined && object.previousChannelId !== null) {
      message.previousChannelId = String(object.previousChannelId);
    } else {
      message.previousChannelId = '';
    }

    if (object.channel !== undefined && object.channel !== null) {
      message.channel = channel_1.Channel.fromJSON(object.channel);
    } else {
      message.channel = undefined;
    }

    if (object.counterpartyVersion !== undefined && object.counterpartyVersion !== null) {
      message.counterpartyVersion = String(object.counterpartyVersion);
    } else {
      message.counterpartyVersion = '';
    }

    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = bytesFromBase64(object.proofInit);
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
    message.portId !== undefined && (obj.portId = message.portId);
    message.previousChannelId !== undefined && (obj.previousChannelId = message.previousChannelId);
    message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofInit !== undefined && (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgChannelOpenTry);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.previousChannelId !== undefined && object.previousChannelId !== null) {
      message.previousChannelId = object.previousChannelId;
    } else {
      message.previousChannelId = '';
    }

    if (object.channel !== undefined && object.channel !== null) {
      message.channel = channel_1.Channel.fromPartial(object.channel);
    } else {
      message.channel = undefined;
    }

    if (object.counterpartyVersion !== undefined && object.counterpartyVersion !== null) {
      message.counterpartyVersion = object.counterpartyVersion;
    } else {
      message.counterpartyVersion = '';
    }

    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = object.proofInit;
    } else {
      message.proofInit = new Uint8Array();
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
var baseMsgChannelOpenTryResponse = {};
exports.MsgChannelOpenTryResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelOpenTryResponse);

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
    var message = Object.assign({}, baseMsgChannelOpenTryResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgChannelOpenTryResponse);
    return message;
  }
};
var baseMsgChannelOpenAck = {
  portId: '',
  channelId: '',
  counterpartyChannelId: '',
  counterpartyVersion: '',
  signer: ''
};
exports.MsgChannelOpenAck = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (message.counterpartyChannelId !== '') {
      writer.uint32(26).string(message.counterpartyChannelId);
    }

    if (message.counterpartyVersion !== '') {
      writer.uint32(34).string(message.counterpartyVersion);
    }

    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(58).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelOpenAck);

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
          message.counterpartyChannelId = reader.string();
          break;

        case 4:
          message.counterpartyVersion = reader.string();
          break;

        case 5:
          message.proofTry = reader.bytes();
          break;

        case 6:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 7:
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
    var message = Object.assign({}, baseMsgChannelOpenAck);

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

    if (object.counterpartyChannelId !== undefined && object.counterpartyChannelId !== null) {
      message.counterpartyChannelId = String(object.counterpartyChannelId);
    } else {
      message.counterpartyChannelId = '';
    }

    if (object.counterpartyVersion !== undefined && object.counterpartyVersion !== null) {
      message.counterpartyVersion = String(object.counterpartyVersion);
    } else {
      message.counterpartyVersion = '';
    }

    if (object.proofTry !== undefined && object.proofTry !== null) {
      message.proofTry = bytesFromBase64(object.proofTry);
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
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelId !== undefined && (obj.counterpartyChannelId = message.counterpartyChannelId);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofTry !== undefined && (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgChannelOpenAck);

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

    if (object.counterpartyChannelId !== undefined && object.counterpartyChannelId !== null) {
      message.counterpartyChannelId = object.counterpartyChannelId;
    } else {
      message.counterpartyChannelId = '';
    }

    if (object.counterpartyVersion !== undefined && object.counterpartyVersion !== null) {
      message.counterpartyVersion = object.counterpartyVersion;
    } else {
      message.counterpartyVersion = '';
    }

    if (object.proofTry !== undefined && object.proofTry !== null) {
      message.proofTry = object.proofTry;
    } else {
      message.proofTry = new Uint8Array();
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
var baseMsgChannelOpenAckResponse = {};
exports.MsgChannelOpenAckResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelOpenAckResponse);

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
    var message = Object.assign({}, baseMsgChannelOpenAckResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgChannelOpenAckResponse);
    return message;
  }
};
var baseMsgChannelOpenConfirm = {
  portId: '',
  channelId: '',
  signer: ''
};
exports.MsgChannelOpenConfirm = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelOpenConfirm);

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
          message.proofAck = reader.bytes();
          break;

        case 4:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
    var message = Object.assign({}, baseMsgChannelOpenConfirm);

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
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofAck !== undefined && (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgChannelOpenConfirm);

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
var baseMsgChannelOpenConfirmResponse = {};
exports.MsgChannelOpenConfirmResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelOpenConfirmResponse);

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
    var message = Object.assign({}, baseMsgChannelOpenConfirmResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgChannelOpenConfirmResponse);
    return message;
  }
};
var baseMsgChannelCloseInit = {
  portId: '',
  channelId: '',
  signer: ''
};
exports.MsgChannelCloseInit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelCloseInit);

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
    var message = Object.assign({}, baseMsgChannelCloseInit);

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

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgChannelCloseInit);

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

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgChannelCloseInitResponse = {};
exports.MsgChannelCloseInitResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelCloseInitResponse);

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
    var message = Object.assign({}, baseMsgChannelCloseInitResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgChannelCloseInitResponse);
    return message;
  }
};
var baseMsgChannelCloseConfirm = {
  portId: '',
  channelId: '',
  signer: ''
};
exports.MsgChannelCloseConfirm = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelCloseConfirm);

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
          message.proofInit = reader.bytes();
          break;

        case 4:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
    var message = Object.assign({}, baseMsgChannelCloseConfirm);

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

    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = bytesFromBase64(object.proofInit);
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
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofInit !== undefined && (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgChannelCloseConfirm);

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

    if (object.proofInit !== undefined && object.proofInit !== null) {
      message.proofInit = object.proofInit;
    } else {
      message.proofInit = new Uint8Array();
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
var baseMsgChannelCloseConfirmResponse = {};
exports.MsgChannelCloseConfirmResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgChannelCloseConfirmResponse);

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
    var message = Object.assign({}, baseMsgChannelCloseConfirmResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgChannelCloseConfirmResponse);
    return message;
  }
};
var baseMsgRecvPacket = {
  signer: ''
};
exports.MsgRecvPacket = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.packet !== undefined) {
      channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }

    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
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
    var message = Object.assign({}, baseMsgRecvPacket);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packet = channel_1.Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proofCommitment = reader.bytes();
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
    var message = Object.assign({}, baseMsgRecvPacket);

    if (object.packet !== undefined && object.packet !== null) {
      message.packet = channel_1.Packet.fromJSON(object.packet);
    } else {
      message.packet = undefined;
    }

    if (object.proofCommitment !== undefined && object.proofCommitment !== null) {
      message.proofCommitment = bytesFromBase64(object.proofCommitment);
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
    message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined && (obj.proofCommitment = base64FromBytes(message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgRecvPacket);

    if (object.packet !== undefined && object.packet !== null) {
      message.packet = channel_1.Packet.fromPartial(object.packet);
    } else {
      message.packet = undefined;
    }

    if (object.proofCommitment !== undefined && object.proofCommitment !== null) {
      message.proofCommitment = object.proofCommitment;
    } else {
      message.proofCommitment = new Uint8Array();
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
var baseMsgRecvPacketResponse = {};
exports.MsgRecvPacketResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgRecvPacketResponse);

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
    var message = Object.assign({}, baseMsgRecvPacketResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgRecvPacketResponse);
    return message;
  }
};
var baseMsgTimeout = {
  nextSequenceRecv: long_1["default"].UZERO,
  signer: ''
};
exports.MsgTimeout = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.packet !== undefined) {
      channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }

    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }

    if (message.signer !== '') {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgTimeout);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packet = channel_1.Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proofUnreceived = reader.bytes();
          break;

        case 3:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.nextSequenceRecv = reader.uint64();
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
    var message = Object.assign({}, baseMsgTimeout);

    if (object.packet !== undefined && object.packet !== null) {
      message.packet = channel_1.Packet.fromJSON(object.packet);
    } else {
      message.packet = undefined;
    }

    if (object.proofUnreceived !== undefined && object.proofUnreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proofUnreceived);
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = long_1["default"].fromString(object.nextSequenceRecv);
    } else {
      message.nextSequenceRecv = long_1["default"].UZERO;
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
    message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = (message.nextSequenceRecv || long_1["default"].UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgTimeout);

    if (object.packet !== undefined && object.packet !== null) {
      message.packet = channel_1.Packet.fromPartial(object.packet);
    } else {
      message.packet = undefined;
    }

    if (object.proofUnreceived !== undefined && object.proofUnreceived !== null) {
      message.proofUnreceived = object.proofUnreceived;
    } else {
      message.proofUnreceived = new Uint8Array();
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = object.nextSequenceRecv;
    } else {
      message.nextSequenceRecv = long_1["default"].UZERO;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgTimeoutResponse = {};
exports.MsgTimeoutResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgTimeoutResponse);

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
    var message = Object.assign({}, baseMsgTimeoutResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgTimeoutResponse);
    return message;
  }
};
var baseMsgTimeoutOnClose = {
  nextSequenceRecv: long_1["default"].UZERO,
  signer: ''
};
exports.MsgTimeoutOnClose = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.packet !== undefined) {
      channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }

    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }

    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }

    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }

    if (message.signer !== '') {
      writer.uint32(50).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgTimeoutOnClose);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packet = channel_1.Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proofUnreceived = reader.bytes();
          break;

        case 3:
          message.proofClose = reader.bytes();
          break;

        case 4:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.nextSequenceRecv = reader.uint64();
          break;

        case 6:
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
    var message = Object.assign({}, baseMsgTimeoutOnClose);

    if (object.packet !== undefined && object.packet !== null) {
      message.packet = channel_1.Packet.fromJSON(object.packet);
    } else {
      message.packet = undefined;
    }

    if (object.proofUnreceived !== undefined && object.proofUnreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proofUnreceived);
    }

    if (object.proofClose !== undefined && object.proofClose !== null) {
      message.proofClose = bytesFromBase64(object.proofClose);
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = long_1["default"].fromString(object.nextSequenceRecv);
    } else {
      message.nextSequenceRecv = long_1["default"].UZERO;
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
    message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
    message.proofClose !== undefined && (obj.proofClose = base64FromBytes(message.proofClose !== undefined ? message.proofClose : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = (message.nextSequenceRecv || long_1["default"].UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgTimeoutOnClose);

    if (object.packet !== undefined && object.packet !== null) {
      message.packet = channel_1.Packet.fromPartial(object.packet);
    } else {
      message.packet = undefined;
    }

    if (object.proofUnreceived !== undefined && object.proofUnreceived !== null) {
      message.proofUnreceived = object.proofUnreceived;
    } else {
      message.proofUnreceived = new Uint8Array();
    }

    if (object.proofClose !== undefined && object.proofClose !== null) {
      message.proofClose = object.proofClose;
    } else {
      message.proofClose = new Uint8Array();
    }

    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = client_1.Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }

    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = object.nextSequenceRecv;
    } else {
      message.nextSequenceRecv = long_1["default"].UZERO;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgTimeoutOnCloseResponse = {};
exports.MsgTimeoutOnCloseResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgTimeoutOnCloseResponse);

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
    var message = Object.assign({}, baseMsgTimeoutOnCloseResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgTimeoutOnCloseResponse);
    return message;
  }
};
var baseMsgAcknowledgement = {
  signer: ''
};
exports.MsgAcknowledgement = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.packet !== undefined) {
      channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }

    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }

    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }

    if (message.proofHeight !== undefined) {
      client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgAcknowledgement);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packet = channel_1.Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.acknowledgement = reader.bytes();
          break;

        case 3:
          message.proofAcked = reader.bytes();
          break;

        case 4:
          message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
    var message = Object.assign({}, baseMsgAcknowledgement);

    if (object.packet !== undefined && object.packet !== null) {
      message.packet = channel_1.Packet.fromJSON(object.packet);
    } else {
      message.packet = undefined;
    }

    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }

    if (object.proofAcked !== undefined && object.proofAcked !== null) {
      message.proofAcked = bytesFromBase64(object.proofAcked);
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
    message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    message.proofAcked !== undefined && (obj.proofAcked = base64FromBytes(message.proofAcked !== undefined ? message.proofAcked : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? client_1.Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgAcknowledgement);

    if (object.packet !== undefined && object.packet !== null) {
      message.packet = channel_1.Packet.fromPartial(object.packet);
    } else {
      message.packet = undefined;
    }

    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = object.acknowledgement;
    } else {
      message.acknowledgement = new Uint8Array();
    }

    if (object.proofAcked !== undefined && object.proofAcked !== null) {
      message.proofAcked = object.proofAcked;
    } else {
      message.proofAcked = new Uint8Array();
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
var baseMsgAcknowledgementResponse = {};
exports.MsgAcknowledgementResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgAcknowledgementResponse);

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
    var message = Object.assign({}, baseMsgAcknowledgementResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgAcknowledgementResponse);
    return message;
  }
};

var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    _classCallCheck(this, MsgClientImpl);

    this.rpc = rpc;
  }

  _createClass(MsgClientImpl, [{
    key: "ChannelOpenInit",
    value: function ChannelOpenInit(request) {
      var data = exports.MsgChannelOpenInit.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'ChannelOpenInit', data);
      return promise.then(function (data) {
        return exports.MsgChannelOpenInitResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ChannelOpenTry",
    value: function ChannelOpenTry(request) {
      var data = exports.MsgChannelOpenTry.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'ChannelOpenTry', data);
      return promise.then(function (data) {
        return exports.MsgChannelOpenTryResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ChannelOpenAck",
    value: function ChannelOpenAck(request) {
      var data = exports.MsgChannelOpenAck.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'ChannelOpenAck', data);
      return promise.then(function (data) {
        return exports.MsgChannelOpenAckResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ChannelOpenConfirm",
    value: function ChannelOpenConfirm(request) {
      var data = exports.MsgChannelOpenConfirm.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'ChannelOpenConfirm', data);
      return promise.then(function (data) {
        return exports.MsgChannelOpenConfirmResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ChannelCloseInit",
    value: function ChannelCloseInit(request) {
      var data = exports.MsgChannelCloseInit.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'ChannelCloseInit', data);
      return promise.then(function (data) {
        return exports.MsgChannelCloseInitResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "ChannelCloseConfirm",
    value: function ChannelCloseConfirm(request) {
      var data = exports.MsgChannelCloseConfirm.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'ChannelCloseConfirm', data);
      return promise.then(function (data) {
        return exports.MsgChannelCloseConfirmResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "RecvPacket",
    value: function RecvPacket(request) {
      var data = exports.MsgRecvPacket.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'RecvPacket', data);
      return promise.then(function (data) {
        return exports.MsgRecvPacketResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "Timeout",
    value: function Timeout(request) {
      var data = exports.MsgTimeout.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'Timeout', data);
      return promise.then(function (data) {
        return exports.MsgTimeoutResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "TimeoutOnClose",
    value: function TimeoutOnClose(request) {
      var data = exports.MsgTimeoutOnClose.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'TimeoutOnClose', data);
      return promise.then(function (data) {
        return exports.MsgTimeoutOnCloseResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "Acknowledgement",
    value: function Acknowledgement(request) {
      var data = exports.MsgAcknowledgement.encode(request).finish();
      var promise = this.rpc.request('ibc.core.channel.v1.Msg', 'Acknowledgement', data);
      return promise.then(function (data) {
        return exports.MsgAcknowledgementResponse.decode(new minimal_1["default"].Reader(data));
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