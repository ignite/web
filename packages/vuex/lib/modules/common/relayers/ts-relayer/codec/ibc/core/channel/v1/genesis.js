"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e13) { throw _e13; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e14) { didErr = true; err = _e14; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
exports.PacketSequence = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var channel_1 = require("../../../../ibc/core/channel/v1/channel");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.core.channel.v1';
var baseGenesisState = {
  nextChannelSequence: long_1["default"].UZERO
};
exports.GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator = _createForOfIteratorHelper(message.channels),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(message.acknowledgements),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        channel_1.PacketState.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var _iterator3 = _createForOfIteratorHelper(message.commitments),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        channel_1.PacketState.encode(_v2, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var _iterator4 = _createForOfIteratorHelper(message.receipts),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        channel_1.PacketState.encode(_v3, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var _iterator5 = _createForOfIteratorHelper(message.sendSequences),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v4 = _step5.value;
        exports.PacketSequence.encode(_v4, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    var _iterator6 = _createForOfIteratorHelper(message.recvSequences),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v5 = _step6.value;
        exports.PacketSequence.encode(_v5, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    var _iterator7 = _createForOfIteratorHelper(message.ackSequences),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _v6 = _step7.value;
        exports.PacketSequence.encode(_v6, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    if (!message.nextChannelSequence.isZero()) {
      writer.uint32(64).uint64(message.nextChannelSequence);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseGenesisState);
    message.channels = [];
    message.acknowledgements = [];
    message.commitments = [];
    message.receipts = [];
    message.sendSequences = [];
    message.recvSequences = [];
    message.ackSequences = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
          break;

        case 3:
          message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
          break;

        case 4:
          message.receipts.push(channel_1.PacketState.decode(reader, reader.uint32()));
          break;

        case 5:
          message.sendSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
          break;

        case 6:
          message.recvSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
          break;

        case 7:
          message.ackSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
          break;

        case 8:
          message.nextChannelSequence = reader.uint64();
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
    message.channels = [];
    message.acknowledgements = [];
    message.commitments = [];
    message.receipts = [];
    message.sendSequences = [];
    message.recvSequences = [];
    message.ackSequences = [];

    if (object.channels !== undefined && object.channels !== null) {
      var _iterator8 = _createForOfIteratorHelper(object.channels),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var e = _step8.value;
          message.channels.push(channel_1.IdentifiedChannel.fromJSON(e));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }

    if (object.acknowledgements !== undefined && object.acknowledgements !== null) {
      var _iterator9 = _createForOfIteratorHelper(object.acknowledgements),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _e = _step9.value;
          message.acknowledgements.push(channel_1.PacketState.fromJSON(_e));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }

    if (object.commitments !== undefined && object.commitments !== null) {
      var _iterator10 = _createForOfIteratorHelper(object.commitments),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _e2 = _step10.value;
          message.commitments.push(channel_1.PacketState.fromJSON(_e2));
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }

    if (object.receipts !== undefined && object.receipts !== null) {
      var _iterator11 = _createForOfIteratorHelper(object.receipts),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _e3 = _step11.value;
          message.receipts.push(channel_1.PacketState.fromJSON(_e3));
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }

    if (object.sendSequences !== undefined && object.sendSequences !== null) {
      var _iterator12 = _createForOfIteratorHelper(object.sendSequences),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _e4 = _step12.value;
          message.sendSequences.push(exports.PacketSequence.fromJSON(_e4));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }

    if (object.recvSequences !== undefined && object.recvSequences !== null) {
      var _iterator13 = _createForOfIteratorHelper(object.recvSequences),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _e5 = _step13.value;
          message.recvSequences.push(exports.PacketSequence.fromJSON(_e5));
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }

    if (object.ackSequences !== undefined && object.ackSequences !== null) {
      var _iterator14 = _createForOfIteratorHelper(object.ackSequences),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var _e6 = _step14.value;
          message.ackSequences.push(exports.PacketSequence.fromJSON(_e6));
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }

    if (object.nextChannelSequence !== undefined && object.nextChannelSequence !== null) {
      message.nextChannelSequence = long_1["default"].fromString(object.nextChannelSequence);
    } else {
      message.nextChannelSequence = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.channels) {
      obj.channels = message.channels.map(function (e) {
        return e ? channel_1.IdentifiedChannel.toJSON(e) : undefined;
      });
    } else {
      obj.channels = [];
    }

    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(function (e) {
        return e ? channel_1.PacketState.toJSON(e) : undefined;
      });
    } else {
      obj.acknowledgements = [];
    }

    if (message.commitments) {
      obj.commitments = message.commitments.map(function (e) {
        return e ? channel_1.PacketState.toJSON(e) : undefined;
      });
    } else {
      obj.commitments = [];
    }

    if (message.receipts) {
      obj.receipts = message.receipts.map(function (e) {
        return e ? channel_1.PacketState.toJSON(e) : undefined;
      });
    } else {
      obj.receipts = [];
    }

    if (message.sendSequences) {
      obj.sendSequences = message.sendSequences.map(function (e) {
        return e ? exports.PacketSequence.toJSON(e) : undefined;
      });
    } else {
      obj.sendSequences = [];
    }

    if (message.recvSequences) {
      obj.recvSequences = message.recvSequences.map(function (e) {
        return e ? exports.PacketSequence.toJSON(e) : undefined;
      });
    } else {
      obj.recvSequences = [];
    }

    if (message.ackSequences) {
      obj.ackSequences = message.ackSequences.map(function (e) {
        return e ? exports.PacketSequence.toJSON(e) : undefined;
      });
    } else {
      obj.ackSequences = [];
    }

    message.nextChannelSequence !== undefined && (obj.nextChannelSequence = (message.nextChannelSequence || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseGenesisState);
    message.channels = [];
    message.acknowledgements = [];
    message.commitments = [];
    message.receipts = [];
    message.sendSequences = [];
    message.recvSequences = [];
    message.ackSequences = [];

    if (object.channels !== undefined && object.channels !== null) {
      var _iterator15 = _createForOfIteratorHelper(object.channels),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var e = _step15.value;
          message.channels.push(channel_1.IdentifiedChannel.fromPartial(e));
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }

    if (object.acknowledgements !== undefined && object.acknowledgements !== null) {
      var _iterator16 = _createForOfIteratorHelper(object.acknowledgements),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _e7 = _step16.value;
          message.acknowledgements.push(channel_1.PacketState.fromPartial(_e7));
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }

    if (object.commitments !== undefined && object.commitments !== null) {
      var _iterator17 = _createForOfIteratorHelper(object.commitments),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var _e8 = _step17.value;
          message.commitments.push(channel_1.PacketState.fromPartial(_e8));
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    }

    if (object.receipts !== undefined && object.receipts !== null) {
      var _iterator18 = _createForOfIteratorHelper(object.receipts),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var _e9 = _step18.value;
          message.receipts.push(channel_1.PacketState.fromPartial(_e9));
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }

    if (object.sendSequences !== undefined && object.sendSequences !== null) {
      var _iterator19 = _createForOfIteratorHelper(object.sendSequences),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var _e10 = _step19.value;
          message.sendSequences.push(exports.PacketSequence.fromPartial(_e10));
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
    }

    if (object.recvSequences !== undefined && object.recvSequences !== null) {
      var _iterator20 = _createForOfIteratorHelper(object.recvSequences),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var _e11 = _step20.value;
          message.recvSequences.push(exports.PacketSequence.fromPartial(_e11));
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }

    if (object.ackSequences !== undefined && object.ackSequences !== null) {
      var _iterator21 = _createForOfIteratorHelper(object.ackSequences),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var _e12 = _step21.value;
          message.ackSequences.push(exports.PacketSequence.fromPartial(_e12));
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
    }

    if (object.nextChannelSequence !== undefined && object.nextChannelSequence !== null) {
      message.nextChannelSequence = object.nextChannelSequence;
    } else {
      message.nextChannelSequence = long_1["default"].UZERO;
    }

    return message;
  }
};
var basePacketSequence = {
  portId: '',
  channelId: '',
  sequence: long_1["default"].UZERO
};
exports.PacketSequence = {
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

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePacketSequence);

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, basePacketSequence);

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

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePacketSequence);

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

    return message;
  }
};
//# sourceMappingURL=genesis.js.map