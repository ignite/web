"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
exports.Version = exports.ConnectionPaths = exports.ClientPaths = exports.Counterparty = exports.IdentifiedConnection = exports.ConnectionEnd = exports.stateToJSON = exports.stateFromJSON = exports.State = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var commitment_1 = require("../../../../ibc/core/commitment/v1/commitment");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.connection.v1';
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */

var State;

(function (State) {
  /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
  State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  /** STATE_INIT - A connection end has just started the opening handshake. */

  State[State["STATE_INIT"] = 1] = "STATE_INIT";
  /**
   * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
   * chain.
   */

  State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  /** STATE_OPEN - A connection end has completed the handshake. */

  State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
  State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State = exports.State || (exports.State = {}));

function stateFromJSON(object) {
  switch (object) {
    case 0:
    case 'STATE_UNINITIALIZED_UNSPECIFIED':
      return State.STATE_UNINITIALIZED_UNSPECIFIED;

    case 1:
    case 'STATE_INIT':
      return State.STATE_INIT;

    case 2:
    case 'STATE_TRYOPEN':
      return State.STATE_TRYOPEN;

    case 3:
    case 'STATE_OPEN':
      return State.STATE_OPEN;

    case -1:
    case 'UNRECOGNIZED':
    default:
      return State.UNRECOGNIZED;
  }
}

exports.stateFromJSON = stateFromJSON;

function stateToJSON(object) {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return 'STATE_UNINITIALIZED_UNSPECIFIED';

    case State.STATE_INIT:
      return 'STATE_INIT';

    case State.STATE_TRYOPEN:
      return 'STATE_TRYOPEN';

    case State.STATE_OPEN:
      return 'STATE_OPEN';

    default:
      return 'UNKNOWN';
  }
}

exports.stateToJSON = stateToJSON;
var baseConnectionEnd = {
  clientId: '',
  state: 0,
  delayPeriod: long_1["default"].UZERO
};
exports.ConnectionEnd = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    var _iterator = _createForOfIteratorHelper(message.versions),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        exports.Version.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }

    if (message.counterparty !== undefined) {
      exports.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }

    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseConnectionEnd);
    message.versions = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.versions.push(exports.Version.decode(reader, reader.uint32()));
          break;

        case 3:
          message.state = reader.int32();
          break;

        case 4:
          message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.delayPeriod = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseConnectionEnd);
    message.versions = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.versions !== undefined && object.versions !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.versions),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.versions.push(exports.Version.fromJSON(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    if (object.state !== undefined && object.state !== null) {
      message.state = stateFromJSON(object.state);
    } else {
      message.state = 0;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = exports.Counterparty.fromJSON(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = long_1["default"].fromString(object.delayPeriod);
    } else {
      message.delayPeriod = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);

    if (message.versions) {
      obj.versions = message.versions.map(function (e) {
        return e ? exports.Version.toJSON(e) : undefined;
      });
    } else {
      obj.versions = [];
    }

    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseConnectionEnd);
    message.versions = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.versions !== undefined && object.versions !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.versions),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.versions.push(exports.Version.fromPartial(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = exports.Counterparty.fromPartial(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = object.delayPeriod;
    } else {
      message.delayPeriod = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseIdentifiedConnection = {
  id: '',
  clientId: '',
  state: 0,
  delayPeriod: long_1["default"].UZERO
};
exports.IdentifiedConnection = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }

    if (message.clientId !== '') {
      writer.uint32(18).string(message.clientId);
    }

    var _iterator4 = _createForOfIteratorHelper(message.versions),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        exports.Version.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }

    if (message.counterparty !== undefined) {
      exports.Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
    }

    if (!message.delayPeriod.isZero()) {
      writer.uint32(48).uint64(message.delayPeriod);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseIdentifiedConnection);
    message.versions = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.clientId = reader.string();
          break;

        case 3:
          message.versions.push(exports.Version.decode(reader, reader.uint32()));
          break;

        case 4:
          message.state = reader.int32();
          break;

        case 5:
          message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
          break;

        case 6:
          message.delayPeriod = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseIdentifiedConnection);
    message.versions = [];

    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.versions !== undefined && object.versions !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.versions),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.versions.push(exports.Version.fromJSON(e));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    if (object.state !== undefined && object.state !== null) {
      message.state = stateFromJSON(object.state);
    } else {
      message.state = 0;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = exports.Counterparty.fromJSON(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = long_1["default"].fromString(object.delayPeriod);
    } else {
      message.delayPeriod = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.id !== undefined && (obj.id = message.id);
    message.clientId !== undefined && (obj.clientId = message.clientId);

    if (message.versions) {
      obj.versions = message.versions.map(function (e) {
        return e ? exports.Version.toJSON(e) : undefined;
      });
    } else {
      obj.versions = [];
    }

    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseIdentifiedConnection);
    message.versions = [];

    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.versions !== undefined && object.versions !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.versions),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.versions.push(exports.Version.fromPartial(e));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = exports.Counterparty.fromPartial(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = object.delayPeriod;
    } else {
      message.delayPeriod = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseCounterparty = {
  clientId: '',
  connectionId: ''
};
exports.Counterparty = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (message.connectionId !== '') {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.prefix !== undefined) {
      commitment_1.MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseCounterparty);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 3:
          message.prefix = commitment_1.MerklePrefix.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseCounterparty);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = '';
    }

    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = commitment_1.MerklePrefix.fromJSON(object.prefix);
    } else {
      message.prefix = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.prefix !== undefined && (obj.prefix = message.prefix ? commitment_1.MerklePrefix.toJSON(message.prefix) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCounterparty);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = object.connectionId;
    } else {
      message.connectionId = '';
    }

    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = commitment_1.MerklePrefix.fromPartial(object.prefix);
    } else {
      message.prefix = undefined;
    }

    return message;
  }
};
var baseClientPaths = {
  paths: ''
};
exports.ClientPaths = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator7 = _createForOfIteratorHelper(message.paths),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseClientPaths);
    message.paths = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseClientPaths);
    message.paths = [];

    if (object.paths !== undefined && object.paths !== null) {
      var _iterator8 = _createForOfIteratorHelper(object.paths),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var e = _step8.value;
          message.paths.push(String(e));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.paths) {
      obj.paths = message.paths.map(function (e) {
        return e;
      });
    } else {
      obj.paths = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseClientPaths);
    message.paths = [];

    if (object.paths !== undefined && object.paths !== null) {
      var _iterator9 = _createForOfIteratorHelper(object.paths),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var e = _step9.value;
          message.paths.push(e);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }

    return message;
  }
};
var baseConnectionPaths = {
  clientId: '',
  paths: ''
};
exports.ConnectionPaths = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    var _iterator10 = _createForOfIteratorHelper(message.paths),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        writer.uint32(18).string(v);
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
    var message = Object.assign({}, baseConnectionPaths);
    message.paths = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.paths.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseConnectionPaths);
    message.paths = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.paths !== undefined && object.paths !== null) {
      var _iterator11 = _createForOfIteratorHelper(object.paths),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var e = _step11.value;
          message.paths.push(String(e));
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

    if (message.paths) {
      obj.paths = message.paths.map(function (e) {
        return e;
      });
    } else {
      obj.paths = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseConnectionPaths);
    message.paths = [];

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.paths !== undefined && object.paths !== null) {
      var _iterator12 = _createForOfIteratorHelper(object.paths),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var e = _step12.value;
          message.paths.push(e);
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
var baseVersion = {
  identifier: '',
  features: ''
};
exports.Version = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.identifier !== '') {
      writer.uint32(10).string(message.identifier);
    }

    var _iterator13 = _createForOfIteratorHelper(message.features),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var v = _step13.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseVersion);
    message.features = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;

        case 2:
          message.features.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseVersion);
    message.features = [];

    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = '';
    }

    if (object.features !== undefined && object.features !== null) {
      var _iterator14 = _createForOfIteratorHelper(object.features),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var e = _step14.value;
          message.features.push(String(e));
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);

    if (message.features) {
      obj.features = message.features.map(function (e) {
        return e;
      });
    } else {
      obj.features = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseVersion);
    message.features = [];

    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = '';
    }

    if (object.features !== undefined && object.features !== null) {
      var _iterator15 = _createForOfIteratorHelper(object.features),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var e = _step15.value;
          message.features.push(e);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }

    return message;
  }
};
//# sourceMappingURL=connection.js.map