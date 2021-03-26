"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextSequenceRecvData = exports.PacketReceiptAbsenceData = exports.PacketAcknowledgementData = exports.PacketCommitmentData = exports.ChannelStateData = exports.ConnectionStateData = exports.ConsensusStateData = exports.ClientStateData = exports.HeaderData = exports.SignBytes = exports.TimestampedSignatureData = exports.SignatureAndData = exports.Misbehaviour = exports.Header = exports.ConsensusState = exports.ClientState = exports.dataTypeToJSON = exports.dataTypeFromJSON = exports.DataType = exports.protobufPackage = void 0;
/* eslint-disable */

var long_1 = __importDefault(require("long"));

var any_1 = require("../../../../google/protobuf/any");

var connection_1 = require("../../../../ibc/core/connection/v1/connection");

var channel_1 = require("../../../../ibc/core/channel/v1/channel");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.lightclients.solomachine.v1';
/**
 * DataType defines the type of solo machine proof being created. This is done to preserve uniqueness of different
 * data sign byte encodings.
 */

var DataType;

(function (DataType) {
  /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
  DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
  /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */

  DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
  /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */

  DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
  /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */

  DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
  /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */

  DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
  /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */

  DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
  /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */

  DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
  /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */

  DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
  /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */

  DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
  /** DATA_TYPE_HEADER - Data type for header verification */

  DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
  DataType[DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataType = exports.DataType || (exports.DataType = {}));

function dataTypeFromJSON(object) {
  switch (object) {
    case 0:
    case 'DATA_TYPE_UNINITIALIZED_UNSPECIFIED':
      return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;

    case 1:
    case 'DATA_TYPE_CLIENT_STATE':
      return DataType.DATA_TYPE_CLIENT_STATE;

    case 2:
    case 'DATA_TYPE_CONSENSUS_STATE':
      return DataType.DATA_TYPE_CONSENSUS_STATE;

    case 3:
    case 'DATA_TYPE_CONNECTION_STATE':
      return DataType.DATA_TYPE_CONNECTION_STATE;

    case 4:
    case 'DATA_TYPE_CHANNEL_STATE':
      return DataType.DATA_TYPE_CHANNEL_STATE;

    case 5:
    case 'DATA_TYPE_PACKET_COMMITMENT':
      return DataType.DATA_TYPE_PACKET_COMMITMENT;

    case 6:
    case 'DATA_TYPE_PACKET_ACKNOWLEDGEMENT':
      return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;

    case 7:
    case 'DATA_TYPE_PACKET_RECEIPT_ABSENCE':
      return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;

    case 8:
    case 'DATA_TYPE_NEXT_SEQUENCE_RECV':
      return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;

    case 9:
    case 'DATA_TYPE_HEADER':
      return DataType.DATA_TYPE_HEADER;

    case -1:
    case 'UNRECOGNIZED':
    default:
      return DataType.UNRECOGNIZED;
  }
}

exports.dataTypeFromJSON = dataTypeFromJSON;

function dataTypeToJSON(object) {
  switch (object) {
    case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
      return 'DATA_TYPE_UNINITIALIZED_UNSPECIFIED';

    case DataType.DATA_TYPE_CLIENT_STATE:
      return 'DATA_TYPE_CLIENT_STATE';

    case DataType.DATA_TYPE_CONSENSUS_STATE:
      return 'DATA_TYPE_CONSENSUS_STATE';

    case DataType.DATA_TYPE_CONNECTION_STATE:
      return 'DATA_TYPE_CONNECTION_STATE';

    case DataType.DATA_TYPE_CHANNEL_STATE:
      return 'DATA_TYPE_CHANNEL_STATE';

    case DataType.DATA_TYPE_PACKET_COMMITMENT:
      return 'DATA_TYPE_PACKET_COMMITMENT';

    case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
      return 'DATA_TYPE_PACKET_ACKNOWLEDGEMENT';

    case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
      return 'DATA_TYPE_PACKET_RECEIPT_ABSENCE';

    case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
      return 'DATA_TYPE_NEXT_SEQUENCE_RECV';

    case DataType.DATA_TYPE_HEADER:
      return 'DATA_TYPE_HEADER';

    default:
      return 'UNKNOWN';
  }
}

exports.dataTypeToJSON = dataTypeToJSON;
var baseClientState = {
  sequence: long_1["default"].UZERO,
  frozenSequence: long_1["default"].UZERO,
  allowUpdateAfterProposal: false
};
exports.ClientState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (!message.frozenSequence.isZero()) {
      writer.uint32(16).uint64(message.frozenSequence);
    }

    if (message.consensusState !== undefined) {
      exports.ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }

    if (message.allowUpdateAfterProposal === true) {
      writer.uint32(32).bool(message.allowUpdateAfterProposal);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseClientState);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.frozenSequence = reader.uint64();
          break;

        case 3:
          message.consensusState = exports.ConsensusState.decode(reader, reader.uint32());
          break;

        case 4:
          message.allowUpdateAfterProposal = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseClientState);

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = long_1["default"].fromString(object.sequence);
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.frozenSequence !== undefined && object.frozenSequence !== null) {
      message.frozenSequence = long_1["default"].fromString(object.frozenSequence);
    } else {
      message.frozenSequence = long_1["default"].UZERO;
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = exports.ConsensusState.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    if (object.allowUpdateAfterProposal !== undefined && object.allowUpdateAfterProposal !== null) {
      message.allowUpdateAfterProposal = Boolean(object.allowUpdateAfterProposal);
    } else {
      message.allowUpdateAfterProposal = false;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    message.frozenSequence !== undefined && (obj.frozenSequence = (message.frozenSequence || long_1["default"].UZERO).toString());
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? exports.ConsensusState.toJSON(message.consensusState) : undefined);
    message.allowUpdateAfterProposal !== undefined && (obj.allowUpdateAfterProposal = message.allowUpdateAfterProposal);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseClientState);

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.frozenSequence !== undefined && object.frozenSequence !== null) {
      message.frozenSequence = object.frozenSequence;
    } else {
      message.frozenSequence = long_1["default"].UZERO;
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = exports.ConsensusState.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    if (object.allowUpdateAfterProposal !== undefined && object.allowUpdateAfterProposal !== null) {
      message.allowUpdateAfterProposal = object.allowUpdateAfterProposal;
    } else {
      message.allowUpdateAfterProposal = false;
    }

    return message;
  }
};
var baseConsensusState = {
  diversifier: '',
  timestamp: long_1["default"].UZERO
};
exports.ConsensusState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.publicKey !== undefined) {
      any_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.diversifier !== '') {
      writer.uint32(18).string(message.diversifier);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseConsensusState);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.publicKey = any_1.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.diversifier = reader.string();
          break;

        case 3:
          message.timestamp = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseConsensusState);

    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = any_1.Any.fromJSON(object.publicKey);
    } else {
      message.publicKey = undefined;
    }

    if (object.diversifier !== undefined && object.diversifier !== null) {
      message.diversifier = String(object.diversifier);
    } else {
      message.diversifier = '';
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = long_1["default"].fromString(object.timestamp);
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? any_1.Any.toJSON(message.publicKey) : undefined);
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseConsensusState);

    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = any_1.Any.fromPartial(object.publicKey);
    } else {
      message.publicKey = undefined;
    }

    if (object.diversifier !== undefined && object.diversifier !== null) {
      message.diversifier = object.diversifier;
    } else {
      message.diversifier = '';
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseHeader = {
  sequence: long_1["default"].UZERO,
  timestamp: long_1["default"].UZERO,
  newDiversifier: ''
};
exports.Header = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }

    if (message.newPublicKey !== undefined) {
      any_1.Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
    }

    if (message.newDiversifier !== '') {
      writer.uint32(42).string(message.newDiversifier);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseHeader);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.timestamp = reader.uint64();
          break;

        case 3:
          message.signature = reader.bytes();
          break;

        case 4:
          message.newPublicKey = any_1.Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.newDiversifier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseHeader);

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = long_1["default"].fromString(object.sequence);
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = long_1["default"].fromString(object.timestamp);
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }

    if (object.newPublicKey !== undefined && object.newPublicKey !== null) {
      message.newPublicKey = any_1.Any.fromJSON(object.newPublicKey);
    } else {
      message.newPublicKey = undefined;
    }

    if (object.newDiversifier !== undefined && object.newDiversifier !== null) {
      message.newDiversifier = String(object.newDiversifier);
    } else {
      message.newDiversifier = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || long_1["default"].UZERO).toString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.newPublicKey !== undefined && (obj.newPublicKey = message.newPublicKey ? any_1.Any.toJSON(message.newPublicKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseHeader);

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = new Uint8Array();
    }

    if (object.newPublicKey !== undefined && object.newPublicKey !== null) {
      message.newPublicKey = any_1.Any.fromPartial(object.newPublicKey);
    } else {
      message.newPublicKey = undefined;
    }

    if (object.newDiversifier !== undefined && object.newDiversifier !== null) {
      message.newDiversifier = object.newDiversifier;
    } else {
      message.newDiversifier = '';
    }

    return message;
  }
};
var baseMisbehaviour = {
  clientId: '',
  sequence: long_1["default"].UZERO
};
exports.Misbehaviour = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }

    if (message.signatureOne !== undefined) {
      exports.SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
    }

    if (message.signatureTwo !== undefined) {
      exports.SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseMisbehaviour);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.sequence = reader.uint64();
          break;

        case 3:
          message.signatureOne = exports.SignatureAndData.decode(reader, reader.uint32());
          break;

        case 4:
          message.signatureTwo = exports.SignatureAndData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseMisbehaviour);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = long_1["default"].fromString(object.sequence);
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.signatureOne !== undefined && object.signatureOne !== null) {
      message.signatureOne = exports.SignatureAndData.fromJSON(object.signatureOne);
    } else {
      message.signatureOne = undefined;
    }

    if (object.signatureTwo !== undefined && object.signatureTwo !== null) {
      message.signatureTwo = exports.SignatureAndData.fromJSON(object.signatureTwo);
    } else {
      message.signatureTwo = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    message.signatureOne !== undefined && (obj.signatureOne = message.signatureOne ? exports.SignatureAndData.toJSON(message.signatureOne) : undefined);
    message.signatureTwo !== undefined && (obj.signatureTwo = message.signatureTwo ? exports.SignatureAndData.toJSON(message.signatureTwo) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseMisbehaviour);

    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = object.clientId;
    } else {
      message.clientId = '';
    }

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.signatureOne !== undefined && object.signatureOne !== null) {
      message.signatureOne = exports.SignatureAndData.fromPartial(object.signatureOne);
    } else {
      message.signatureOne = undefined;
    }

    if (object.signatureTwo !== undefined && object.signatureTwo !== null) {
      message.signatureTwo = exports.SignatureAndData.fromPartial(object.signatureTwo);
    } else {
      message.signatureTwo = undefined;
    }

    return message;
  }
};
var baseSignatureAndData = {
  dataType: 0,
  timestamp: long_1["default"].UZERO
};
exports.SignatureAndData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }

    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
    }

    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(32).uint64(message.timestamp);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseSignatureAndData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;

        case 2:
          message.dataType = reader.int32();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        case 4:
          message.timestamp = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseSignatureAndData);

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }

    if (object.dataType !== undefined && object.dataType !== null) {
      message.dataType = dataTypeFromJSON(object.dataType);
    } else {
      message.dataType = 0;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = long_1["default"].fromString(object.timestamp);
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseSignatureAndData);

    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = new Uint8Array();
    }

    if (object.dataType !== undefined && object.dataType !== null) {
      message.dataType = object.dataType;
    } else {
      message.dataType = 0;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseTimestampedSignatureData = {
  timestamp: long_1["default"].UZERO
};
exports.TimestampedSignatureData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseTimestampedSignatureData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
          break;

        case 2:
          message.timestamp = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseTimestampedSignatureData);

    if (object.signatureData !== undefined && object.signatureData !== null) {
      message.signatureData = bytesFromBase64(object.signatureData);
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = long_1["default"].fromString(object.timestamp);
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.signatureData !== undefined && (obj.signatureData = base64FromBytes(message.signatureData !== undefined ? message.signatureData : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseTimestampedSignatureData);

    if (object.signatureData !== undefined && object.signatureData !== null) {
      message.signatureData = object.signatureData;
    } else {
      message.signatureData = new Uint8Array();
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    return message;
  }
};
var baseSignBytes = {
  sequence: long_1["default"].UZERO,
  timestamp: long_1["default"].UZERO,
  diversifier: '',
  dataType: 0
};
exports.SignBytes = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }

    if (message.diversifier !== '') {
      writer.uint32(26).string(message.diversifier);
    }

    if (message.dataType !== 0) {
      writer.uint32(32).int32(message.dataType);
    }

    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseSignBytes);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.timestamp = reader.uint64();
          break;

        case 3:
          message.diversifier = reader.string();
          break;

        case 4:
          message.dataType = reader.int32();
          break;

        case 5:
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
    var message = Object.assign({}, baseSignBytes);

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = long_1["default"].fromString(object.sequence);
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = long_1["default"].fromString(object.timestamp);
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    if (object.diversifier !== undefined && object.diversifier !== null) {
      message.diversifier = String(object.diversifier);
    } else {
      message.diversifier = '';
    }

    if (object.dataType !== undefined && object.dataType !== null) {
      message.dataType = dataTypeFromJSON(object.dataType);
    } else {
      message.dataType = 0;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || long_1["default"].UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || long_1["default"].UZERO).toString());
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseSignBytes);

    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = long_1["default"].UZERO;
    }

    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = long_1["default"].UZERO;
    }

    if (object.diversifier !== undefined && object.diversifier !== null) {
      message.diversifier = object.diversifier;
    } else {
      message.diversifier = '';
    }

    if (object.dataType !== undefined && object.dataType !== null) {
      message.dataType = object.dataType;
    } else {
      message.dataType = 0;
    }

    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }

    return message;
  }
};
var baseHeaderData = {
  newDiversifier: ''
};
exports.HeaderData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.newPubKey !== undefined) {
      any_1.Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.newDiversifier !== '') {
      writer.uint32(18).string(message.newDiversifier);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseHeaderData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.newPubKey = any_1.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.newDiversifier = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseHeaderData);

    if (object.newPubKey !== undefined && object.newPubKey !== null) {
      message.newPubKey = any_1.Any.fromJSON(object.newPubKey);
    } else {
      message.newPubKey = undefined;
    }

    if (object.newDiversifier !== undefined && object.newDiversifier !== null) {
      message.newDiversifier = String(object.newDiversifier);
    } else {
      message.newDiversifier = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey ? any_1.Any.toJSON(message.newPubKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseHeaderData);

    if (object.newPubKey !== undefined && object.newPubKey !== null) {
      message.newPubKey = any_1.Any.fromPartial(object.newPubKey);
    } else {
      message.newPubKey = undefined;
    }

    if (object.newDiversifier !== undefined && object.newDiversifier !== null) {
      message.newDiversifier = object.newDiversifier;
    } else {
      message.newDiversifier = '';
    }

    return message;
  }
};
var baseClientStateData = {};
exports.ClientStateData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.clientState !== undefined) {
      any_1.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseClientStateData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.clientState = any_1.Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseClientStateData);

    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromJSON(object.clientState);
    } else {
      message.clientState = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseClientStateData);

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = new Uint8Array();
    }

    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = any_1.Any.fromPartial(object.clientState);
    } else {
      message.clientState = undefined;
    }

    return message;
  }
};
var baseConsensusStateData = {};
exports.ConsensusStateData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.consensusState !== undefined) {
      any_1.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseConsensusStateData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.consensusState = any_1.Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseConsensusStateData);

    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? any_1.Any.toJSON(message.consensusState) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseConsensusStateData);

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = new Uint8Array();
    }

    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = any_1.Any.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }

    return message;
  }
};
var baseConnectionStateData = {};
exports.ConnectionStateData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.connection !== undefined) {
      connection_1.ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseConnectionStateData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseConnectionStateData);

    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }

    if (object.connection !== undefined && object.connection !== null) {
      message.connection = connection_1.ConnectionEnd.fromJSON(object.connection);
    } else {
      message.connection = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.connection !== undefined && (obj.connection = message.connection ? connection_1.ConnectionEnd.toJSON(message.connection) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseConnectionStateData);

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = new Uint8Array();
    }

    if (object.connection !== undefined && object.connection !== null) {
      message.connection = connection_1.ConnectionEnd.fromPartial(object.connection);
    } else {
      message.connection = undefined;
    }

    return message;
  }
};
var baseChannelStateData = {};
exports.ChannelStateData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.channel !== undefined) {
      channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseChannelStateData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.channel = channel_1.Channel.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseChannelStateData);

    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }

    if (object.channel !== undefined && object.channel !== null) {
      message.channel = channel_1.Channel.fromJSON(object.channel);
    } else {
      message.channel = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseChannelStateData);

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = new Uint8Array();
    }

    if (object.channel !== undefined && object.channel !== null) {
      message.channel = channel_1.Channel.fromPartial(object.channel);
    } else {
      message.channel = undefined;
    }

    return message;
  }
};
var basePacketCommitmentData = {};
exports.PacketCommitmentData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePacketCommitmentData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.commitment = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, basePacketCommitmentData);

    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }

    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = bytesFromBase64(object.commitment);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePacketCommitmentData);

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = new Uint8Array();
    }

    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = object.commitment;
    } else {
      message.commitment = new Uint8Array();
    }

    return message;
  }
};
var basePacketAcknowledgementData = {};
exports.PacketAcknowledgementData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePacketAcknowledgementData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.acknowledgement = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, basePacketAcknowledgementData);

    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }

    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePacketAcknowledgementData);

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = new Uint8Array();
    }

    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = object.acknowledgement;
    } else {
      message.acknowledgement = new Uint8Array();
    }

    return message;
  }
};
var basePacketReceiptAbsenceData = {};
exports.PacketReceiptAbsenceData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, basePacketReceiptAbsenceData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, basePacketReceiptAbsenceData);

    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, basePacketReceiptAbsenceData);

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = new Uint8Array();
    }

    return message;
  }
};
var baseNextSequenceRecvData = {
  nextSeqRecv: long_1["default"].UZERO
};
exports.NextSequenceRecvData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }

    if (!message.nextSeqRecv.isZero()) {
      writer.uint32(16).uint64(message.nextSeqRecv);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseNextSequenceRecvData);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;

        case 2:
          message.nextSeqRecv = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseNextSequenceRecvData);

    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }

    if (object.nextSeqRecv !== undefined && object.nextSeqRecv !== null) {
      message.nextSeqRecv = long_1["default"].fromString(object.nextSeqRecv);
    } else {
      message.nextSeqRecv = long_1["default"].UZERO;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.nextSeqRecv !== undefined && (obj.nextSeqRecv = (message.nextSeqRecv || long_1["default"].UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseNextSequenceRecvData);

    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = new Uint8Array();
    }

    if (object.nextSeqRecv !== undefined && object.nextSeqRecv !== null) {
      message.nextSeqRecv = object.nextSeqRecv;
    } else {
      message.nextSeqRecv = long_1["default"].UZERO;
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
//# sourceMappingURL=solomachine.js.map