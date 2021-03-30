"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecProto = exports.IntProto = exports.DecCoin = exports.Coin = exports.protobufPackage = void 0;

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'cosmos.base.v1beta1';
var baseCoin = {
  denom: '',
  amount: ''
};
exports.Coin = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }

    if (message.amount !== '') {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseCoin);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseCoin);

    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = '';
    }

    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCoin);

    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = '';
    }

    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = '';
    }

    return message;
  }
};
var baseDecCoin = {
  denom: '',
  amount: ''
};
exports.DecCoin = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }

    if (message.amount !== '') {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseDecCoin);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseDecCoin);

    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = '';
    }

    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseDecCoin);

    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = '';
    }

    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = '';
    }

    return message;
  }
};
var baseIntProto = {
  "int": ''
};
exports.IntProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message["int"] !== '') {
      writer.uint32(10).string(message["int"]);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseIntProto);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message["int"] = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseIntProto);

    if (object["int"] !== undefined && object["int"] !== null) {
      message["int"] = String(object["int"]);
    } else {
      message["int"] = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message["int"] !== undefined && (obj["int"] = message["int"]);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseIntProto);

    if (object["int"] !== undefined && object["int"] !== null) {
      message["int"] = object["int"];
    } else {
      message["int"] = '';
    }

    return message;
  }
};
var baseDecProto = {
  dec: ''
};
exports.DecProto = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.dec !== '') {
      writer.uint32(10).string(message.dec);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseDecProto);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.dec = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseDecProto);

    if (object.dec !== undefined && object.dec !== null) {
      message.dec = String(object.dec);
    } else {
      message.dec = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.dec !== undefined && (obj.dec = message.dec);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseDecProto);

    if (object.dec !== undefined && object.dec !== null) {
      message.dec = object.dec;
    } else {
      message.dec = '';
    }

    return message;
  }
};
//# sourceMappingURL=coin.js.map