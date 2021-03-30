"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e5) { throw _e5; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e6) { didErr = true; err = _e6; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
exports.IdentifiedGenesisMetadata = exports.GenesisMetadata = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */

var client_1 = require("../../../../ibc/core/client/v1/client");

var long_1 = __importDefault(require("long"));

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.client.v1';
var baseGenesisState = {
  createLocalhost: false,
  nextClientSequence: long_1["default"].UZERO
};
exports.GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator = _createForOfIteratorHelper(message.clients),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(message.clientsConsensus),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        client_1.ClientConsensusStates.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var _iterator3 = _createForOfIteratorHelper(message.clientsMetadata),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        exports.IdentifiedGenesisMetadata.encode(_v2, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (message.params !== undefined) {
      client_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }

    if (message.createLocalhost === true) {
      writer.uint32(40).bool(message.createLocalhost);
    }

    if (!message.nextClientSequence.isZero()) {
      writer.uint32(48).uint64(message.nextClientSequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseGenesisState);
    message.clients = [];
    message.clientsConsensus = [];
    message.clientsMetadata = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clients.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.clientsConsensus.push(client_1.ClientConsensusStates.decode(reader, reader.uint32()));
          break;

        case 3:
          message.clientsMetadata.push(exports.IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          break;

        case 4:
          message.params = client_1.Params.decode(reader, reader.uint32());
          break;

        case 5:
          message.createLocalhost = reader.bool();
          break;

        case 6:
          message.nextClientSequence = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseGenesisState);
    message.clients = [];
    message.clientsConsensus = [];
    message.clientsMetadata = [];

    if (object.clients !== undefined && object.clients !== null) {
      var _iterator4 = _createForOfIteratorHelper(object.clients),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var e = _step4.value;
          message.clients.push(client_1.IdentifiedClientState.fromJSON(e));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    if (object.clientsConsensus !== undefined && object.clientsConsensus !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.clientsConsensus),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _e = _step5.value;
          message.clientsConsensus.push(client_1.ClientConsensusStates.fromJSON(_e));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    if (object.clientsMetadata !== undefined && object.clientsMetadata !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.clientsMetadata),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _e2 = _step6.value;
          message.clientsMetadata.push(exports.IdentifiedGenesisMetadata.fromJSON(_e2));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    if (object.params !== undefined && object.params !== null) {
      message.params = client_1.Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }

    if (object.createLocalhost !== undefined && object.createLocalhost !== null) {
      message.createLocalhost = Boolean(object.createLocalhost);
    } else {
      message.createLocalhost = false;
    }

    if (object.nextClientSequence !== undefined && object.nextClientSequence !== null) {
      message.nextClientSequence = long_1["default"].fromString(object.nextClientSequence);
    } else {
      message.nextClientSequence = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.clients) {
      obj.clients = message.clients.map(function (e) {
        return e ? client_1.IdentifiedClientState.toJSON(e) : undefined;
      });
    } else {
      obj.clients = [];
    }

    if (message.clientsConsensus) {
      obj.clientsConsensus = message.clientsConsensus.map(function (e) {
        return e ? client_1.ClientConsensusStates.toJSON(e) : undefined;
      });
    } else {
      obj.clientsConsensus = [];
    }

    if (message.clientsMetadata) {
      obj.clientsMetadata = message.clientsMetadata.map(function (e) {
        return e ? exports.IdentifiedGenesisMetadata.toJSON(e) : undefined;
      });
    } else {
      obj.clientsMetadata = [];
    }

    message.params !== undefined && (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
    message.createLocalhost !== undefined && (obj.createLocalhost = message.createLocalhost);
    message.nextClientSequence !== undefined && (obj.nextClientSequence = (message.nextClientSequence || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseGenesisState);
    message.clients = [];
    message.clientsConsensus = [];
    message.clientsMetadata = [];

    if (object.clients !== undefined && object.clients !== null) {
      var _iterator7 = _createForOfIteratorHelper(object.clients),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var e = _step7.value;
          message.clients.push(client_1.IdentifiedClientState.fromPartial(e));
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }

    if (object.clientsConsensus !== undefined && object.clientsConsensus !== null) {
      var _iterator8 = _createForOfIteratorHelper(object.clientsConsensus),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _e3 = _step8.value;
          message.clientsConsensus.push(client_1.ClientConsensusStates.fromPartial(_e3));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }

    if (object.clientsMetadata !== undefined && object.clientsMetadata !== null) {
      var _iterator9 = _createForOfIteratorHelper(object.clientsMetadata),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _e4 = _step9.value;
          message.clientsMetadata.push(exports.IdentifiedGenesisMetadata.fromPartial(_e4));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }

    if (object.params !== undefined && object.params !== null) {
      message.params = client_1.Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }

    if (object.createLocalhost !== undefined && object.createLocalhost !== null) {
      message.createLocalhost = object.createLocalhost;
    } else {
      message.createLocalhost = false;
    }

    if (object.nextClientSequence !== undefined && object.nextClientSequence !== null) {
      message.nextClientSequence = object.nextClientSequence;
    } else {
      message.nextClientSequence = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseGenesisMetadata = {};
exports.GenesisMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseGenesisMetadata);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseGenesisMetadata);

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseGenesisMetadata);

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }

    return message;
  }
};
var baseIdentifiedGenesisMetadata = {
  clientId: ''
};
exports.IdentifiedGenesisMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    var _iterator10 = _createForOfIteratorHelper(message.clientMetadata),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        exports.GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseIdentifiedGenesisMetadata);
    message.clientMetadata = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.clientMetadata.push(exports.GenesisMetadata.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseIdentifiedGenesisMetadata);
    message.clientMetadata = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.clientMetadata !== undefined && object.clientMetadata !== null) {
      var _iterator11 = _createForOfIteratorHelper(object.clientMetadata),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var e = _step11.value;
          message.clientMetadata.push(exports.GenesisMetadata.fromJSON(e));
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);

    if (message.clientMetadata) {
      obj.clientMetadata = message.clientMetadata.map(function (e) {
        return e ? exports.GenesisMetadata.toJSON(e) : undefined;
      });
    } else {
      obj.clientMetadata = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseIdentifiedGenesisMetadata);
    message.clientMetadata = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.clientMetadata !== undefined && object.clientMetadata !== null) {
      var _iterator12 = _createForOfIteratorHelper(object.clientMetadata),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var e = _step12.value;
          message.clientMetadata.push(exports.GenesisMetadata.fromPartial(e));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
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
//# sourceMappingURL=genesis.js.map