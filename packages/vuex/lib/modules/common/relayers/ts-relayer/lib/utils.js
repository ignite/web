"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.presentPacketData = exports.splitPendingPackets = exports.timeGreater = exports.heightGreater = exports.multiplyCoin = exports.multiplyFees = exports.parseAck = exports.parseAcksFromLogs = exports.parsePacket = exports.parseHeightAttribute = exports.parsePacketsFromLogs = exports.buildClientState = exports.buildConsensusState = exports.secondsFromDateNanos = exports.timestampFromDateNanos = exports.mapRpcPubKeyToProto = exports.may = exports.parseRevisionNumber = exports.subtractBlock = exports.ensureIntHeight = exports.toIntHeight = exports.createBroadcastTxErrorMessage = void 0;

var encoding_1 = require("@cosmjs/encoding");

var long_1 = __importDefault(require("long"));

var proofs_1 = require("../codec/confio/proofs");

var timestamp_1 = require("../codec/google/protobuf/timestamp");

var channel_1 = require("../codec/ibc/core/channel/v1/channel");

var tendermint_1 = require("../codec/ibc/lightclients/tendermint/v1/tendermint");

function createBroadcastTxErrorMessage(result) {
  return "Error when broadcasting tx ".concat(result.transactionHash, " at height ").concat(result.height, ". Code: ").concat(result.code, "; Raw log: ").concat(result.rawLog);
}

exports.createBroadcastTxErrorMessage = createBroadcastTxErrorMessage;

function toIntHeight(height) {
  var _a, _b;

  return (_b = (_a = height === null || height === void 0 ? void 0 : height.revisionHeight) === null || _a === void 0 ? void 0 : _a.toNumber()) !== null && _b !== void 0 ? _b : 0;
}

exports.toIntHeight = toIntHeight;

function ensureIntHeight(height) {
  if (typeof height === 'number') {
    return height;
  }

  return toIntHeight(height);
}

exports.ensureIntHeight = ensureIntHeight;

function subtractBlock(height) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    revisionNumber: height.revisionNumber,
    revisionHeight: height.revisionHeight.subtract(count)
  };
}

exports.subtractBlock = subtractBlock;
var regexRevNum = new RegExp('-([1-9][0-9]*)$');

function parseRevisionNumber(chainId) {
  var match = chainId.match(regexRevNum);

  if (match && match.length >= 2) {
    return long_1["default"].fromString(match[1]);
  }

  return new long_1["default"](0);
}

exports.parseRevisionNumber = parseRevisionNumber; // may will run the transform if value is defined, otherwise returns undefined

function may(transform, value) {
  return value === undefined || value === null ? undefined : transform(value);
}

exports.may = may;

function mapRpcPubKeyToProto(pubkey) {
  if (pubkey === undefined) {
    return undefined;
  }

  if (pubkey.algorithm == 'ed25519') {
    return {
      ed25519: pubkey.data,
      secp256k1: undefined
    };
  } else if (pubkey.algorithm == 'secp256k1') {
    return {
      ed25519: undefined,
      secp256k1: pubkey.data
    };
  } else {
    throw new Error("Unknown validator pubkey type: ".concat(pubkey.algorithm));
  }
}

exports.mapRpcPubKeyToProto = mapRpcPubKeyToProto;

function timestampFromDateNanos(date) {
  var _a;

  var nanos = date.getTime() % 1000 * 1000000 + ((_a = date.nanoseconds) !== null && _a !== void 0 ? _a : 0);
  return timestamp_1.Timestamp.fromPartial({
    seconds: new long_1["default"](date.getTime() / 1000),
    nanos: nanos
  });
}

exports.timestampFromDateNanos = timestampFromDateNanos;

function secondsFromDateNanos(date) {
  return Math.floor(date.getTime() / 1000);
}

exports.secondsFromDateNanos = secondsFromDateNanos;

function buildConsensusState(header) {
  return tendermint_1.ConsensusState.fromPartial({
    timestamp: timestampFromDateNanos(header.time),
    root: {
      hash: header.appHash
    },
    nextValidatorsHash: header.nextValidatorsHash
  });
}

exports.buildConsensusState = buildConsensusState; // Note: we hardcode a number of assumptions, like trust level, clock drift, and assume revisionNumber is 1

function buildClientState(chainId, unbondingPeriodSec, trustPeriodSec, height) {
  // Copied here until https://github.com/confio/ics23/issues/36 is resolved
  // https://github.com/confio/ics23/blob/master/js/src/proofs.ts#L11-L26
  var iavlSpec = {
    leafSpec: {
      prefix: Uint8Array.from([0]),
      hash: proofs_1.HashOp.SHA256,
      prehashValue: proofs_1.HashOp.SHA256,
      prehashKey: proofs_1.HashOp.NO_HASH,
      length: proofs_1.LengthOp.VAR_PROTO
    },
    innerSpec: {
      childOrder: [0, 1],
      minPrefixLength: 4,
      maxPrefixLength: 12,
      childSize: 33,
      hash: proofs_1.HashOp.SHA256
    }
  };
  var tendermintSpec = {
    leafSpec: {
      prefix: Uint8Array.from([0]),
      hash: proofs_1.HashOp.SHA256,
      prehashValue: proofs_1.HashOp.SHA256,
      prehashKey: proofs_1.HashOp.NO_HASH,
      length: proofs_1.LengthOp.VAR_PROTO
    },
    innerSpec: {
      childOrder: [0, 1],
      minPrefixLength: 1,
      maxPrefixLength: 1,
      childSize: 32,
      hash: proofs_1.HashOp.SHA256
    }
  };
  return tendermint_1.ClientState.fromPartial({
    chainId: chainId,
    trustLevel: {
      numerator: long_1["default"].fromInt(1),
      denominator: long_1["default"].fromInt(3)
    },
    unbondingPeriod: {
      seconds: new long_1["default"](unbondingPeriodSec)
    },
    trustingPeriod: {
      seconds: new long_1["default"](trustPeriodSec)
    },
    maxClockDrift: {
      seconds: new long_1["default"](20)
    },
    latestHeight: height,
    proofSpecs: [iavlSpec, tendermintSpec],
    upgradePath: ['upgrade', 'upgradedIBCState'],
    allowUpdateAfterExpiry: false,
    allowUpdateAfterMisbehaviour: false
  });
}

exports.buildClientState = buildClientState;

function parsePacketsFromLogs(logs) {
  var _ref2;

  // grab all send_packet events from the logs
  var allEvents = logs.map(function (log) {
    return log.events.filter(function (_ref) {
      var type = _ref.type;
      return type === 'send_packet';
    });
  });

  var flatEvents = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(allEvents));

  return flatEvents.map(parsePacket);
}

exports.parsePacketsFromLogs = parsePacketsFromLogs;

function parseHeightAttribute(attribute) {
  var _a;

  var _ref3 = (_a = attribute === null || attribute === void 0 ? void 0 : attribute.split('-')) !== null && _a !== void 0 ? _a : [],
      _ref4 = _slicedToArray(_ref3, 2),
      timeoutRevisionNumber = _ref4[0],
      timeoutRevisionHeight = _ref4[1];

  if (!timeoutRevisionHeight || !timeoutRevisionNumber) {
    return undefined;
  }

  var revisionNumber = long_1["default"].fromString(timeoutRevisionNumber);
  var revisionHeight = long_1["default"].fromString(timeoutRevisionHeight); // note: 0 revisionNumber is allowed. If there is bad data, '' or '0-0', we will get 0 for the height

  if (revisionHeight.isZero()) {
    return undefined;
  }

  return {
    revisionHeight: revisionHeight,
    revisionNumber: revisionNumber
  };
}

exports.parseHeightAttribute = parseHeightAttribute;

function parsePacket(_ref5) {
  var type = _ref5.type,
      attributes = _ref5.attributes;

  if (type !== 'send_packet') {
    throw new Error("Cannot parse event of type ".concat(type));
  }

  var attributesObj = attributes.reduce(function (acc, _ref6) {
    var key = _ref6.key,
        value = _ref6.value;
    return Object.assign(Object.assign({}, acc), _defineProperty({}, key, value));
  }, {});
  return channel_1.Packet.fromPartial({
    sequence: may(long_1["default"].fromString, attributesObj.packet_sequence),

    /** identifies the port on the sending chain. */
    sourcePort: attributesObj.packet_src_port,

    /** identifies the channel end on the sending chain. */
    sourceChannel: attributesObj.packet_src_channel,

    /** identifies the port on the receiving chain. */
    destinationPort: attributesObj.packet_dst_port,

    /** identifies the channel end on the receiving chain. */
    destinationChannel: attributesObj.packet_dst_channel,

    /** actual opaque bytes transferred directly to the application module */
    data: attributesObj.packet_data ? encoding_1.toUtf8(attributesObj.packet_data) : undefined,

    /** block height after which the packet times out */
    timeoutHeight: parseHeightAttribute(attributesObj.packet_timeout_height),

    /** block timestamp (in nanoseconds) after which the packet times out */
    timeoutTimestamp: may(long_1["default"].fromString, attributesObj.packet_timeout_timestamp)
  });
}

exports.parsePacket = parsePacket;

function parseAcksFromLogs(logs) {
  var _ref8;

  // grab all send_packet events from the logs
  var allEvents = logs.map(function (log) {
    return log.events.filter(function (_ref7) {
      var type = _ref7.type;
      return type === 'write_acknowledgement';
    });
  });

  var flatEvents = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(allEvents));

  return flatEvents.map(parseAck);
}

exports.parseAcksFromLogs = parseAcksFromLogs;

function parseAck(_ref9) {
  var type = _ref9.type,
      attributes = _ref9.attributes;

  var _a, _b;

  if (type !== 'write_acknowledgement') {
    throw new Error("Cannot parse event of type ".concat(type));
  }

  var attributesObj = attributes.reduce(function (acc, _ref10) {
    var key = _ref10.key,
        value = _ref10.value;
    return Object.assign(Object.assign({}, acc), _defineProperty({}, key, value));
  }, {});
  var originalPacket = channel_1.Packet.fromPartial({
    sequence: may(long_1["default"].fromString, attributesObj.packet_sequence),

    /** identifies the port on the sending chain. */
    sourcePort: attributesObj.packet_src_port,

    /** identifies the channel end on the sending chain. */
    sourceChannel: attributesObj.packet_src_channel,

    /** identifies the port on the receiving chain. */
    destinationPort: attributesObj.packet_dst_port,

    /** identifies the channel end on the receiving chain. */
    destinationChannel: attributesObj.packet_dst_channel,

    /** actual opaque bytes transferred directly to the application module */
    data: encoding_1.toUtf8((_a = attributesObj.packet_data) !== null && _a !== void 0 ? _a : ''),

    /** block height after which the packet times out */
    timeoutHeight: parseHeightAttribute(attributesObj.packet_timeout_height),

    /** block timestamp (in nanoseconds) after which the packet times out */
    timeoutTimestamp: may(long_1["default"].fromString, attributesObj.packet_timeout_timestamp)
  });
  var acknowledgement = encoding_1.toUtf8((_b = attributesObj.packet_ack) !== null && _b !== void 0 ? _b : '');
  return {
    acknowledgement: acknowledgement,
    originalPacket: originalPacket
  };
}

exports.parseAck = parseAck;

function multiplyFees(_ref11, mult) {
  var gas = _ref11.gas,
      amount = _ref11.amount;
  var multGas = Number.parseInt(gas, 10) * mult;
  var multAmount = amount.map(function (c) {
    return multiplyCoin(c, mult);
  });
  var result = {
    gas: multGas.toString(),
    amount: multAmount
  };
  return result;
}

exports.multiplyFees = multiplyFees;

function multiplyCoin(_ref12, mult) {
  var amount = _ref12.amount,
      denom = _ref12.denom;
  var multAmount = Number.parseInt(amount, 10) * mult;
  return {
    amount: multAmount.toString(),
    denom: denom
  };
}

exports.multiplyCoin = multiplyCoin; // return true if a > b, or a undefined

function heightGreater(a, b) {
  if (a === undefined) {
    return true;
  } // comparing longs made some weird issues (maybe signed/unsigned)?
  // convert to numbers to compare safely


  var _ref13 = [a.revisionNumber.toNumber(), a.revisionHeight.toNumber(), b.revisionNumber.toNumber(), b.revisionHeight.toNumber()],
      numA = _ref13[0],
      heightA = _ref13[1],
      numB = _ref13[2],
      heightB = _ref13[3];
  var valid = numA > numB || numA == numB && heightA > heightB;
  return valid;
}

exports.heightGreater = heightGreater; // return true if a > b, or a 0
// note a is nanoseconds, while b is seconds

function timeGreater(a, b) {
  if (a === undefined || a.isZero()) {
    return true;
  }

  var valid = a.toNumber() > b * 1000000000;
  return valid;
}

exports.timeGreater = timeGreater; // take height and time from receiving chain to see which packets have timed out
// return [toSubmit, toTimeout].
// you can advance height, time a block or two into the future if you wish a margin of error

function splitPendingPackets(currentHeight, currentTime, // in seconds
packets) {
  return packets.reduce(function (acc, packet) {
    var validPacket = heightGreater(packet.packet.timeoutHeight, currentHeight) && timeGreater(packet.packet.timeoutTimestamp, currentTime);
    return validPacket ? Object.assign(Object.assign({}, acc), {
      toSubmit: [].concat(_toConsumableArray(acc.toSubmit), [packet])
    }) : Object.assign(Object.assign({}, acc), {
      toTimeout: [].concat(_toConsumableArray(acc.toTimeout), [packet])
    });
  }, {
    toSubmit: [],
    toTimeout: []
  });
}

exports.splitPendingPackets = splitPendingPackets;

function presentPacketData(data) {
  try {
    return JSON.parse(encoding_1.fromUtf8(data));
  } catch (_a) {
    return {
      hex: encoding_1.toHex(data)
    };
  }
}

exports.presentPacketData = presentPacketData;
//# sourceMappingURL=utils.js.map