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
exports.MsgClientImpl = exports.MsgSubmitMisbehaviourResponse = exports.MsgSubmitMisbehaviour = exports.MsgUpgradeClientResponse = exports.MsgUpgradeClient = exports.MsgUpdateClientResponse = exports.MsgUpdateClient = exports.MsgCreateClientResponse = exports.MsgCreateClient = exports.protobufPackage = void 0;
/* eslint-disable */

var any_1 = require("../../../../google/protobuf/any");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.client.v1';
var baseMsgCreateClient = {
  signer: ''
};
exports.MsgCreateClient = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientState !== undefined) {
      any_1.Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }

    if (message.consensusState !== undefined) {
      any_1.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgCreateClient);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientState = any_1.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.consensusState = any_1.Any.decode(reader, reader.uint32());
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
    var message = Object.assign({}, baseMsgCreateClient);

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromJSON(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
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
    message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? any_1.Any.toJSON(message.consensusState) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgCreateClient);

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromPartial(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgCreateClientResponse = {};
exports.MsgCreateClientResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgCreateClientResponse);

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
    var message = Object.assign({}, baseMsgCreateClientResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgCreateClientResponse);
    return message;
  }
};
var baseMsgUpdateClient = {
  clientId: '',
  signer: ''
};
exports.MsgUpdateClient = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (message.header !== undefined) {
      any_1.Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgUpdateClient);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.header = any_1.Any.decode(reader, reader.uint32());
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
    var message = Object.assign({}, baseMsgUpdateClient);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.header !== undefined && object.header !== null) {
      message.header = any_1.Any.fromJSON(object.header);
    } else {
      message.header = undefined;
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
    message.header !== undefined && (obj.header = message.header ? any_1.Any.toJSON(message.header) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgUpdateClient);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.header !== undefined && object.header !== null) {
      message.header = any_1.Any.fromPartial(object.header);
    } else {
      message.header = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgUpdateClientResponse = {};
exports.MsgUpdateClientResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgUpdateClientResponse);

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
    var message = Object.assign({}, baseMsgUpdateClientResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgUpdateClientResponse);
    return message;
  }
};
var baseMsgUpgradeClient = {
  clientId: '',
  signer: ''
};
exports.MsgUpgradeClient = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (message.clientState !== undefined) {
      any_1.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }

    if (message.consensusState !== undefined) {
      any_1.Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }

    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }

    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }

    if (message.signer !== '') {
      writer.uint32(50).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgUpgradeClient);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.clientState = any_1.Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.consensusState = any_1.Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;

        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
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
    var message = Object.assign({}, baseMsgUpgradeClient);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromJSON(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    if (object.proofUpgradeClient !== undefined && object.proofUpgradeClient !== null) {
      message.proofUpgradeClient = bytesFromBase64(object.proofUpgradeClient);
    }

    if (object.proofUpgradeConsensusState !== undefined && object.proofUpgradeConsensusState !== null) {
      message.proofUpgradeConsensusState = bytesFromBase64(object.proofUpgradeConsensusState);
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
    message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? any_1.Any.toJSON(message.consensusState) : undefined);
    message.proofUpgradeClient !== undefined && (obj.proofUpgradeClient = base64FromBytes(message.proofUpgradeClient !== undefined ? message.proofUpgradeClient : new Uint8Array()));
    message.proofUpgradeConsensusState !== undefined && (obj.proofUpgradeConsensusState = base64FromBytes(message.proofUpgradeConsensusState !== undefined ? message.proofUpgradeConsensusState : new Uint8Array()));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgUpgradeClient);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromPartial(object.clientState);
    } else {
      message.clientState = undefined;
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    if (object.proofUpgradeClient !== undefined && object.proofUpgradeClient !== null) {
      message.proofUpgradeClient = object.proofUpgradeClient;
    } else {
      message.proofUpgradeClient = new Uint8Array();
    }

    if (object.proofUpgradeConsensusState !== undefined && object.proofUpgradeConsensusState !== null) {
      message.proofUpgradeConsensusState = object.proofUpgradeConsensusState;
    } else {
      message.proofUpgradeConsensusState = new Uint8Array();
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgUpgradeClientResponse = {};
exports.MsgUpgradeClientResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgUpgradeClientResponse);

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
    var message = Object.assign({}, baseMsgUpgradeClientResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgUpgradeClientResponse);
    return message;
  }
};
var baseMsgSubmitMisbehaviour = {
  clientId: '',
  signer: ''
};
exports.MsgSubmitMisbehaviour = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (message.misbehaviour !== undefined) {
      any_1.Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgSubmitMisbehaviour);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.misbehaviour = any_1.Any.decode(reader, reader.uint32());
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
    var message = Object.assign({}, baseMsgSubmitMisbehaviour);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
      message.misbehaviour = any_1.Any.fromJSON(object.misbehaviour);
    } else {
      message.misbehaviour = undefined;
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
    message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? any_1.Any.toJSON(message.misbehaviour) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMsgSubmitMisbehaviour);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
      message.misbehaviour = any_1.Any.fromPartial(object.misbehaviour);
    } else {
      message.misbehaviour = undefined;
    }

    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = '';
    }

    return message;
  }
};
var baseMsgSubmitMisbehaviourResponse = {};
exports.MsgSubmitMisbehaviourResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMsgSubmitMisbehaviourResponse);

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
    var message = Object.assign({}, baseMsgSubmitMisbehaviourResponse);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseMsgSubmitMisbehaviourResponse);
    return message;
  }
};

var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    _classCallCheck(this, MsgClientImpl);

    this.rpc = rpc;
  }

  _createClass(MsgClientImpl, [{
    key: "CreateClient",
    value: function CreateClient(request) {
      var data = exports.MsgCreateClient.encode(request).finish();
      var promise = this.rpc.request('ibc.core.client.v1.Msg', 'CreateClient', data);
      return promise.then(function (data) {
        return exports.MsgCreateClientResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "UpdateClient",
    value: function UpdateClient(request) {
      var data = exports.MsgUpdateClient.encode(request).finish();
      var promise = this.rpc.request('ibc.core.client.v1.Msg', 'UpdateClient', data);
      return promise.then(function (data) {
        return exports.MsgUpdateClientResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "UpgradeClient",
    value: function UpgradeClient(request) {
      var data = exports.MsgUpgradeClient.encode(request).finish();
      var promise = this.rpc.request('ibc.core.client.v1.Msg', 'UpgradeClient', data);
      return promise.then(function (data) {
        return exports.MsgUpgradeClientResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "SubmitMisbehaviour",
    value: function SubmitMisbehaviour(request) {
      var data = exports.MsgSubmitMisbehaviour.encode(request).finish();
      var promise = this.rpc.request('ibc.core.client.v1.Msg', 'SubmitMisbehaviour', data);
      return promise.then(function (data) {
        return exports.MsgSubmitMisbehaviourResponse.decode(new minimal_1["default"].Reader(data));
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