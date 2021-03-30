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
exports.Acknowledgement = exports.PacketState = exports.Packet = exports.Counterparty = exports.IdentifiedChannel = exports.Channel = exports.orderToJSON = exports.orderFromJSON = exports.Order = exports.stateToJSON = exports.stateFromJSON = exports.State = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var client_1 = require("../../../../ibc/core/client/v1/client");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.channel.v1';
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */

var State;

(function (State) {
  /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
  State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  /** STATE_INIT - A channel has just started the opening handshake. */

  State[State["STATE_INIT"] = 1] = "STATE_INIT";
  /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */

  State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  /**
   * STATE_OPEN - A channel has completed the handshake. Open channels are
   * ready to send and receive packets.
   */

  State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
  /**
   * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
   * packets.
   */

  State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
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

    case 4:
    case 'STATE_CLOSED':
      return State.STATE_CLOSED;

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

    case State.STATE_CLOSED:
      return 'STATE_CLOSED';

    default:
      return 'UNKNOWN';
  }
}

exports.stateToJSON = stateToJSON;
/** Order defines if a channel is ORDERED or UNORDERED */

var Order;

(function (Order) {
  /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
  Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
  /**
   * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
   * which they were sent.
   */

  Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
  /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */

  Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
  Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order = exports.Order || (exports.Order = {}));

function orderFromJSON(object) {
  switch (object) {
    case 0:
    case 'ORDER_NONE_UNSPECIFIED':
      return Order.ORDER_NONE_UNSPECIFIED;

    case 1:
    case 'ORDER_UNORDERED':
      return Order.ORDER_UNORDERED;

    case 2:
    case 'ORDER_ORDERED':
      return Order.ORDER_ORDERED;

    case -1:
    case 'UNRECOGNIZED':
    default:
      return Order.UNRECOGNIZED;
  }
}

exports.orderFromJSON = orderFromJSON;

function orderToJSON(object) {
  switch (object) {
    case Order.ORDER_NONE_UNSPECIFIED:
      return 'ORDER_NONE_UNSPECIFIED';

    case Order.ORDER_UNORDERED:
      return 'ORDER_UNORDERED';

    case Order.ORDER_ORDERED:
      return 'ORDER_ORDERED';

    default:
      return 'UNKNOWN';
  }
}

exports.orderToJSON = orderToJSON;
var baseChannel = {
  state: 0,
  ordering: 0,
  connectionHops: '',
  version: ''
};
exports.Channel = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }

    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }

    if (message.counterparty !== undefined) {
      exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }

    var _iterator = _createForOfIteratorHelper(message.connectionHops),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(34).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.version !== '') {
      writer.uint32(42).string(message.version);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseChannel);
    message.connectionHops = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;

        case 2:
          message.ordering = reader.int32();
          break;

        case 3:
          message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
          break;

        case 4:
          message.connectionHops.push(reader.string());
          break;

        case 5:
          message.version = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseChannel);
    message.connectionHops = [];

    if (object.state !== undefined && object.state !== null) {
      message.state = stateFromJSON(object.state);
    } else {
      message.state = 0;
    }

    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = orderFromJSON(object.ordering);
    } else {
      message.ordering = 0;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = exports.Counterparty.fromJSON(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.connectionHops !== undefined && object.connectionHops !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.connectionHops),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.connectionHops.push(String(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);

    if (message.connectionHops) {
      obj.connectionHops = message.connectionHops.map(function (e) {
        return e;
      });
    } else {
      obj.connectionHops = [];
    }

    message.version !== undefined && (obj.version = message.version);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseChannel);
    message.connectionHops = [];

    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }

    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = object.ordering;
    } else {
      message.ordering = 0;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = exports.Counterparty.fromPartial(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.connectionHops !== undefined && object.connectionHops !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.connectionHops),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.connectionHops.push(e);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = '';
    }

    return message;
  }
};
var baseIdentifiedChannel = {
  state: 0,
  ordering: 0,
  connectionHops: '',
  version: '',
  portId: '',
  channelId: ''
};
exports.IdentifiedChannel = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }

    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }

    if (message.counterparty !== undefined) {
      exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }

    var _iterator4 = _createForOfIteratorHelper(message.connectionHops),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint32(34).string(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (message.version !== '') {
      writer.uint32(42).string(message.version);
    }

    if (message.portId !== '') {
      writer.uint32(50).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(58).string(message.channelId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseIdentifiedChannel);
    message.connectionHops = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;

        case 2:
          message.ordering = reader.int32();
          break;

        case 3:
          message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
          break;

        case 4:
          message.connectionHops.push(reader.string());
          break;

        case 5:
          message.version = reader.string();
          break;

        case 6:
          message.portId = reader.string();
          break;

        case 7:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseIdentifiedChannel);
    message.connectionHops = [];

    if (object.state !== undefined && object.state !== null) {
      message.state = stateFromJSON(object.state);
    } else {
      message.state = 0;
    }

    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = orderFromJSON(object.ordering);
    } else {
      message.ordering = 0;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = exports.Counterparty.fromJSON(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.connectionHops !== undefined && object.connectionHops !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.connectionHops),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.connectionHops.push(String(e));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    } else {
      message.version = '';
    }

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);

    if (message.connectionHops) {
      obj.connectionHops = message.connectionHops.map(function (e) {
        return e;
      });
    } else {
      obj.connectionHops = [];
    }

    message.version !== undefined && (obj.version = message.version);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseIdentifiedChannel);
    message.connectionHops = [];

    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }

    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = object.ordering;
    } else {
      message.ordering = 0;
    }

    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = exports.Counterparty.fromPartial(object.counterparty);
    } else {
      message.counterparty = undefined;
    }

    if (object.connectionHops !== undefined && object.connectionHops !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.connectionHops),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.connectionHops.push(e);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = '';
    }

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    return message;
  }
};
var baseCounterparty = {
  portId: '',
  channelId: ''
};
exports.Counterparty = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
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
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
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

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCounterparty);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    return message;
  }
};
var basePacket = {
  sequence: long_1["default"].UZERO,
  sourcePort: '',
  sourceChannel: '',
  destinationPort: '',
  destinationChannel: '',
  timeoutTimestamp: long_1["default"].UZERO
};
exports.Packet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (message.sourcePort !== '') {
      writer.uint32(18).string(message.sourcePort);
    }

    if (message.sourceChannel !== '') {
      writer.uint32(26).string(message.sourceChannel);
    }

    if (message.destinationPort !== '') {
      writer.uint32(34).string(message.destinationPort);
    }

    if (message.destinationChannel !== '') {
      writer.uint32(42).string(message.destinationChannel);
    }

    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }

    if (message.timeoutHeight !== undefined) {
      client_1.Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
    }

    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(64).uint64(message.timeoutTimestamp);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePacket);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.sourcePort = reader.string();
          break;

        case 3:
          message.sourceChannel = reader.string();
          break;

        case 4:
          message.destinationPort = reader.string();
          break;

        case 5:
          message.destinationChannel = reader.string();
          break;

        case 6:
          message.data = reader.bytes();
          break;

        case 7:
          message.timeoutHeight = client_1.Height.decode(reader, reader.uint32());
          break;

        case 8:
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
    var message = Object.assign({}, basePacket);

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = long_1["default"].fromString(object.sequence);
    } else {
      message.sequence = long_1["default"].UZERO;
    }

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

    if (object.destinationPort !== undefined && object.destinationPort !== null) {
      message.destinationPort = String(object.destinationPort);
    } else {
      message.destinationPort = '';
    }

    if (object.destinationChannel !== undefined && object.destinationChannel !== null) {
      message.destinationChannel = String(object.destinationChannel);
    } else {
      message.destinationChannel = '';
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
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
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    message.destinationPort !== undefined && (obj.destinationPort = message.destinationPort);
    message.destinationChannel !== undefined && (obj.destinationChannel = message.destinationChannel);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight ? client_1.Height.toJSON(message.timeoutHeight) : undefined);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePacket);

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = long_1["default"].UZERO;
    }

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

    if (object.destinationPort !== undefined && object.destinationPort !== null) {
      message.destinationPort = object.destinationPort;
    } else {
      message.destinationPort = '';
    }

    if (object.destinationChannel !== undefined && object.destinationChannel !== null) {
      message.destinationChannel = object.destinationChannel;
    } else {
      message.destinationChannel = '';
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
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
var basePacketState = {
  portId: '',
  channelId: '',
  sequence: long_1["default"].UZERO
};
exports.PacketState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePacketState);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.sequence = reader.uint64();
          break;

        case 4:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, basePacketState);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = long_1["default"].fromString(object.sequence);
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePacketState);

    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = '';
    }

    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    } else {
      message.channelId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }

    return message;
  }
};
var baseAcknowledgement = {};
exports.Acknowledgement = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.result !== undefined) {
      writer.uint32(170).bytes(message.result);
    }

    if (message.error !== undefined) {
      writer.uint32(178).string(message.error);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseAcknowledgement);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;

        case 22:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseAcknowledgement);

    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }

    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.result !== undefined && (obj.result = message.result !== undefined ? base64FromBytes(message.result) : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseAcknowledgement);

    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = undefined;
    }

    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = undefined;
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
//# sourceMappingURL=channel.js.map