"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientState = exports.protobufPackage = void 0;
/* eslint-disable */

var client_1 = require("../../../../ibc/core/client/v1/client");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.lightclients.localhost.v1';
var baseClientState = {
  chainId: ''
};
exports.ClientState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.chainId !== '') {
      writer.uint32(10).string(message.chainId);
    }

    if (message.height !== undefined) {
      client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseClientState);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
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
    var message = Object.assign({}, baseClientState);

    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = '';
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
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseClientState);

    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = '';
    }

    if (object.height !== undefined && object.height !== null) {
      message.height = client_1.Height.fromPartial(object.height);
    } else {
      message.height = undefined;
    }

    return message;
  }
};
//# sourceMappingURL=localhost.js.map