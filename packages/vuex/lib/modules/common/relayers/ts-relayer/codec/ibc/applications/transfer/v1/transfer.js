"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.DenomTrace = exports.FungibleTokenPacketData = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.applications.transfer.v1';
var baseFungibleTokenPacketData = {
  denom: '',
  amount: long_1["default"].UZERO,
  sender: '',
  receiver: ''
};
exports.FungibleTokenPacketData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }

    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }

    if (message.sender !== '') {
      writer.uint32(26).string(message.sender);
    }

    if (message.receiver !== '') {
      writer.uint32(34).string(message.receiver);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseFungibleTokenPacketData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.uint64();
          break;

        case 3:
          message.sender = reader.string();
          break;

        case 4:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseFungibleTokenPacketData);

    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = '';
    }

    if (object.amount !== undefined && object.amount !== null) {
      message.amount = long_1["default"].fromString(object.amount);
    } else {
      message.amount = long_1["default"].UZERO;
    }

    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = '';
    }

    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = (message.amount || long_1["default"].UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseFungibleTokenPacketData);

    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = '';
    }

    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = long_1["default"].UZERO;
    }

    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = '';
    }

    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = '';
    }

    return message;
  }
};
var baseDenomTrace = {
  path: '',
  baseDenom: ''
};
exports.DenomTrace = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.path !== '') {
      writer.uint32(10).string(message.path);
    }

    if (message.baseDenom !== '') {
      writer.uint32(18).string(message.baseDenom);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseDenomTrace);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;

        case 2:
          message.baseDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseDenomTrace);

    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = '';
    }

    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = message.path);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseDenomTrace);

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = '';
    }

    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = '';
    }

    return message;
  }
};
var baseParams = {
  sendEnabled: false,
  receiveEnabled: false
};
exports.Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.sendEnabled === true) {
      writer.uint32(8).bool(message.sendEnabled);
    }

    if (message.receiveEnabled === true) {
      writer.uint32(16).bool(message.receiveEnabled);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseParams);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sendEnabled = reader.bool();
          break;

        case 2:
          message.receiveEnabled = reader.bool();
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

    if (object.sendEnabled !== undefined && object.sendEnabled !== null) {
      message.sendEnabled = Boolean(object.sendEnabled);
    } else {
      message.sendEnabled = false;
    }

    if (object.receiveEnabled !== undefined && object.receiveEnabled !== null) {
      message.receiveEnabled = Boolean(object.receiveEnabled);
    } else {
      message.receiveEnabled = false;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.sendEnabled !== undefined && (obj.sendEnabled = message.sendEnabled);
    message.receiveEnabled !== undefined && (obj.receiveEnabled = message.receiveEnabled);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseParams);

    if (object.sendEnabled !== undefined && object.sendEnabled !== null) {
      message.sendEnabled = object.sendEnabled;
    } else {
      message.sendEnabled = false;
    }

    if (object.receiveEnabled !== undefined && object.receiveEnabled !== null) {
      message.receiveEnabled = object.receiveEnabled;
    } else {
      message.receiveEnabled = false;
    }

    return message;
  }
};
//# sourceMappingURL=transfer.js.map