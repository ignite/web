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
exports.MsgClientImpl = exports.MsgTransferResponse = exports.MsgTransfer = exports.protobufPackage = void 0;
/* eslint-disable */

var coin_1 = require("../../../../cosmos/base/v1beta1/coin");

var client_1 = require("../../../../ibc/core/client/v1/client");

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.applications.transfer.v1';
var baseMsgTransfer = {
  sourcePort: '',
  sourceChannel: '',
  sender: '',
  receiver: '',
  timeoutTimestamp: long_1["default"].UZERO
};
exports.MsgTransfer = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.sourcePort !== '') {
      writer.uint32(10).string(message.sourcePort);
    }

    if (message.sourceChannel !== '') {
      writer.uint32(18).string(message.sourceChannel);
    }

    if (message.token !== undefined) {
      coin_1.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }

    if (message.sender !== '') {
      writer.uint32(34).string(message.sender);
    }

    if (message.receiver !== '') {
      writer.uint32(42).string(message.receiver);
    }

    if (message.timeoutHeight !== undefined) {
      client_1.Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
    }

    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(56).uint64(message.timeoutTimestamp);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgTransfer);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;

        case 2:
          message.sourceChannel = reader.string();
          break;

        case 3:
          message.token = coin_1.Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.sender = reader.string();
          break;

        case 5:
          message.receiver = reader.string();
          break;

        case 6:
          message.timeoutHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 7:
          message.timeoutTimestamp = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseMsgTransfer);

    if (object.sourcePort !== undefined && object.sourcePort !== null) {
      message.sourcePort = String(object.sourcePort);
    } else {
      message.sourcePort = '';
    }

    if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
      message.sourceChannel = String(object.sourceChannel);
    } else {
      message.sourceChannel = '';
    }

    if (object.token !== undefined && object.token !== null) {
      message.token = coin_1.Coin.fromJSON(object.token);
    } else {
      message.token = undefined;
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

    if (object.timeoutHeight !== undefined && object.timeoutHeight !== null) {
      message.timeoutHeight = client_1.Height.fromJSON(object.timeoutHeight);
    } else {
      message.timeoutHeight = undefined;
    }

    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = long_1["default"].fromString(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    message.token !== undefined && (obj.token = message.token ? coin_1.Coin.toJSON(message.token) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight ? client_1.Height.toJSON(message.timeoutHeight) : undefined);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgTransfer);

    if (object.sourcePort !== undefined && object.sourcePort !== null) {
      message.sourcePort = object.sourcePort;
    } else {
      message.sourcePort = '';
    }

    if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
      message.sourceChannel = object.sourceChannel;
    } else {
      message.sourceChannel = '';
    }

    if (object.token !== undefined && object.token !== null) {
      message.token = coin_1.Coin.fromPartial(object.token);
    } else {
      message.token = undefined;
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

    if (object.timeoutHeight !== undefined && object.timeoutHeight !== null) {
      message.timeoutHeight = client_1.Height.fromPartial(object.timeoutHeight);
    } else {
      message.timeoutHeight = undefined;
    }

    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseMsgTransferResponse = {};
exports.MsgTransferResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgTransferResponse);

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
    var message = Object.assign({}, baseMsgTransferResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgTransferResponse);
    return message;
  }
};

var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    _classCallCheck(this, MsgClientImpl);

    this.rpc = rpc;
  }

  _createClass(MsgClientImpl, [{
    key: "Transfer",
    value: function Transfer(request) {
      var data = exports.MsgTransfer.encode(request).finish();
      var promise = this.rpc.request('ibc.applications.transfer.v1.Msg', 'Transfer', data);
      return promise.then(function (data) {
        return exports.MsgTransferResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }]);

  return MsgClientImpl;
}();

exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map