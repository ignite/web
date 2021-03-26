"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageResponse = exports.PageRequest = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'cosmos.base.query.v1beta1';
var basePageRequest = {
  offset: long_1["default"].UZERO,
  limit: long_1["default"].UZERO,
  countTotal: false
};
exports.PageRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (!message.offset.isZero()) {
      writer.uint32(16).uint64(message.offset);
    }

    if (!message.limit.isZero()) {
      writer.uint32(24).uint64(message.limit);
    }

    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePageRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.offset = reader.uint64();
          break;

        case 3:
          message.limit = reader.uint64();
          break;

        case 4:
          message.countTotal = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, basePageRequest);

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.offset !== undefined && object.offset !== null) {
      message.offset = long_1["default"].fromString(object.offset);
    } else {
      message.offset = long_1["default"].UZERO;
    }

    if (object.limit !== undefined && object.limit !== null) {
      message.limit = long_1["default"].fromString(object.limit);
    } else {
      message.limit = long_1["default"].UZERO;
    }

    if (object.countTotal !== undefined && object.countTotal !== null) {
      message.countTotal = Boolean(object.countTotal);
    } else {
      message.countTotal = false;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.offset !== undefined && (obj.offset = (message.offset || long_1["default"].UZERO).toString());
    message.limit !== undefined && (obj.limit = (message.limit || long_1["default"].UZERO).toString());
    message.countTotal !== undefined && (obj.countTotal = message.countTotal);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePageRequest);

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }

    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    } else {
      message.offset = long_1["default"].UZERO;
    }

    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = long_1["default"].UZERO;
    }

    if (object.countTotal !== undefined && object.countTotal !== null) {
      message.countTotal = object.countTotal;
    } else {
      message.countTotal = false;
    }

    return message;
  }
};
var basePageResponse = {
  total: long_1["default"].UZERO
};
exports.PageResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }

    if (!message.total.isZero()) {
      writer.uint32(16).uint64(message.total);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePageResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextKey = reader.bytes();
          break;

        case 2:
          message.total = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, basePageResponse);

    if (object.nextKey !== undefined && object.nextKey !== null) {
      message.nextKey = bytesFromBase64(object.nextKey);
    }

    if (object.total !== undefined && object.total !== null) {
      message.total = long_1["default"].fromString(object.total);
    } else {
      message.total = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.nextKey !== undefined && (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
    message.total !== undefined && (obj.total = (message.total || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePageResponse);

    if (object.nextKey !== undefined && object.nextKey !== null) {
      message.nextKey = object.nextKey;
    } else {
      message.nextKey = new Uint8Array();
    }

    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = long_1["default"].UZERO;
    }

    return message;
  }
};

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
//# sourceMappingURL=pagination.js.map