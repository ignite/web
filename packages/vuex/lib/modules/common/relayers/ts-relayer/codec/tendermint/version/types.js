"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consensus = exports.App = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'tendermint.version';
var baseApp = {
  protocol: long_1["default"].UZERO,
  software: ''
};
exports.App = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.protocol.isZero()) {
      writer.uint32(8).uint64(message.protocol);
    }

    if (message.software !== '') {
      writer.uint32(18).string(message.software);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseApp);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.uint64();
          break;

        case 2:
          message.software = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseApp);

    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = long_1["default"].fromString(object.protocol);
    } else {
      message.protocol = long_1["default"].UZERO;
    }

    if (object.software !== undefined && object.software !== null) {
      message.software = String(object.software);
    } else {
      message.software = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.protocol !== undefined && (obj.protocol = (message.protocol || long_1["default"].UZERO).toString());
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseApp);

    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = object.protocol;
    } else {
      message.protocol = long_1["default"].UZERO;
    }

    if (object.software !== undefined && object.software !== null) {
      message.software = object.software;
    } else {
      message.software = '';
    }

    return message;
  }
};
var baseConsensus = {
  block: long_1["default"].UZERO,
  app: long_1["default"].UZERO
};
exports.Consensus = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }

    if (!message.app.isZero()) {
      writer.uint32(16).uint64(message.app);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseConsensus);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;

        case 2:
          message.app = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseConsensus);

    if (object.block !== undefined && object.block !== null) {
      message.block = long_1["default"].fromString(object.block);
    } else {
      message.block = long_1["default"].UZERO;
    }

    if (object.app !== undefined && object.app !== null) {
      message.app = long_1["default"].fromString(object.app);
    } else {
      message.app = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.block !== undefined && (obj.block = (message.block || long_1["default"].UZERO).toString());
    message.app !== undefined && (obj.app = (message.app || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseConsensus);

    if (object.block !== undefined && object.block !== null) {
      message.block = object.block;
    } else {
      message.block = long_1["default"].UZERO;
    }

    if (object.app !== undefined && object.app !== null) {
      message.app = object.app;
    } else {
      message.app = long_1["default"].UZERO;
    }

    return message;
  }
};
//# sourceMappingURL=types.js.map