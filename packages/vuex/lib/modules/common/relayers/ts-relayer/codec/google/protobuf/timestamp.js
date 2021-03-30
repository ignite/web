"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timestamp = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'google.protobuf';
var baseTimestamp = {
  seconds: long_1["default"].ZERO,
  nanos: 0
};
exports.Timestamp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.seconds.isZero()) {
      writer.uint32(8).int64(message.seconds);
    }

    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseTimestamp);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;

        case 2:
          message.nanos = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseTimestamp);

    if (object.seconds !== undefined && object.seconds !== null) {
      message.seconds = long_1["default"].fromString(object.seconds);
    } else {
      message.seconds = long_1["default"].ZERO;
    }

    if (object.nanos !== undefined && object.nanos !== null) {
      message.nanos = Number(object.nanos);
    } else {
      message.nanos = 0;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.seconds !== undefined && (obj.seconds = (message.seconds || long_1["default"].ZERO).toString());
    message.nanos !== undefined && (obj.nanos = message.nanos);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseTimestamp);

    if (object.seconds !== undefined && object.seconds !== null) {
      message.seconds = object.seconds;
    } else {
      message.seconds = long_1["default"].ZERO;
    }

    if (object.nanos !== undefined && object.nanos !== null) {
      message.nanos = object.nanos;
    } else {
      message.nanos = 0;
    }

    return message;
  }
};
//# sourceMappingURL=timestamp.js.map