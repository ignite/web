"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
exports.CompressedNonExistenceProof = exports.CompressedExistenceProof = exports.CompressedBatchEntry = exports.CompressedBatchProof = exports.BatchEntry = exports.BatchProof = exports.InnerSpec = exports.ProofSpec = exports.InnerOp = exports.LeafOp = exports.CommitmentProof = exports.NonExistenceProof = exports.ExistenceProof = exports.lengthOpToJSON = exports.lengthOpFromJSON = exports.LengthOp = exports.hashOpToJSON = exports.hashOpFromJSON = exports.HashOp = exports.protobufPackage = void 0;

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ics23';
var HashOp;

(function (HashOp) {
  /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
  HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
  HashOp[HashOp["SHA256"] = 1] = "SHA256";
  HashOp[HashOp["SHA512"] = 2] = "SHA512";
  HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
  HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
  /** BITCOIN - ripemd160(sha256(x)) */

  HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
  HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOp = exports.HashOp || (exports.HashOp = {}));

function hashOpFromJSON(object) {
  switch (object) {
    case 0:
    case 'NO_HASH':
      return HashOp.NO_HASH;

    case 1:
    case 'SHA256':
      return HashOp.SHA256;

    case 2:
    case 'SHA512':
      return HashOp.SHA512;

    case 3:
    case 'KECCAK':
      return HashOp.KECCAK;

    case 4:
    case 'RIPEMD160':
      return HashOp.RIPEMD160;

    case 5:
    case 'BITCOIN':
      return HashOp.BITCOIN;

    case -1:
    case 'UNRECOGNIZED':
    default:
      return HashOp.UNRECOGNIZED;
  }
}

exports.hashOpFromJSON = hashOpFromJSON;

function hashOpToJSON(object) {
  switch (object) {
    case HashOp.NO_HASH:
      return 'NO_HASH';

    case HashOp.SHA256:
      return 'SHA256';

    case HashOp.SHA512:
      return 'SHA512';

    case HashOp.KECCAK:
      return 'KECCAK';

    case HashOp.RIPEMD160:
      return 'RIPEMD160';

    case HashOp.BITCOIN:
      return 'BITCOIN';

    default:
      return 'UNKNOWN';
  }
}

exports.hashOpToJSON = hashOpToJSON;
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */

var LengthOp;

(function (LengthOp) {
  /** NO_PREFIX - NO_PREFIX don't include any length info */
  LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
  /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */

  LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
  /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */

  LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
  /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */

  LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
  /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */

  LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
  /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */

  LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
  /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */

  LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
  /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */

  LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
  /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */

  LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
  LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOp = exports.LengthOp || (exports.LengthOp = {}));

function lengthOpFromJSON(object) {
  switch (object) {
    case 0:
    case 'NO_PREFIX':
      return LengthOp.NO_PREFIX;

    case 1:
    case 'VAR_PROTO':
      return LengthOp.VAR_PROTO;

    case 2:
    case 'VAR_RLP':
      return LengthOp.VAR_RLP;

    case 3:
    case 'FIXED32_BIG':
      return LengthOp.FIXED32_BIG;

    case 4:
    case 'FIXED32_LITTLE':
      return LengthOp.FIXED32_LITTLE;

    case 5:
    case 'FIXED64_BIG':
      return LengthOp.FIXED64_BIG;

    case 6:
    case 'FIXED64_LITTLE':
      return LengthOp.FIXED64_LITTLE;

    case 7:
    case 'REQUIRE_32_BYTES':
      return LengthOp.REQUIRE_32_BYTES;

    case 8:
    case 'REQUIRE_64_BYTES':
      return LengthOp.REQUIRE_64_BYTES;

    case -1:
    case 'UNRECOGNIZED':
    default:
      return LengthOp.UNRECOGNIZED;
  }
}

exports.lengthOpFromJSON = lengthOpFromJSON;

function lengthOpToJSON(object) {
  switch (object) {
    case LengthOp.NO_PREFIX:
      return 'NO_PREFIX';

    case LengthOp.VAR_PROTO:
      return 'VAR_PROTO';

    case LengthOp.VAR_RLP:
      return 'VAR_RLP';

    case LengthOp.FIXED32_BIG:
      return 'FIXED32_BIG';

    case LengthOp.FIXED32_LITTLE:
      return 'FIXED32_LITTLE';

    case LengthOp.FIXED64_BIG:
      return 'FIXED64_BIG';

    case LengthOp.FIXED64_LITTLE:
      return 'FIXED64_LITTLE';

    case LengthOp.REQUIRE_32_BYTES:
      return 'REQUIRE_32_BYTES';

    case LengthOp.REQUIRE_64_BYTES:
      return 'REQUIRE_64_BYTES';

    default:
      return 'UNKNOWN';
  }
}

exports.lengthOpToJSON = lengthOpToJSON;
var baseExistenceProof = {};
exports.ExistenceProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    if (message.leaf !== undefined) {
      exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }

    var _iterator = _createForOfIteratorHelper(message.path),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        exports.InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseExistenceProof);
    message.path = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.leaf = exports.LeafOp.decode(reader, reader.uint32());
          break;

        case 4:
          message.path.push(exports.InnerOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseExistenceProof);
    message.path = [];

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }

    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = exports.LeafOp.fromJSON(object.leaf);
    } else {
      message.leaf = undefined;
    }

    if (object.path !== undefined && object.path !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.path),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.path.push(exports.InnerOp.fromJSON(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.leaf !== undefined && (obj.leaf = message.leaf ? exports.LeafOp.toJSON(message.leaf) : undefined);

    if (message.path) {
      obj.path = message.path.map(function (e) {
        return e ? exports.InnerOp.toJSON(e) : undefined;
      });
    } else {
      obj.path = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseExistenceProof);
    message.path = [];

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

    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = exports.LeafOp.fromPartial(object.leaf);
    } else {
      message.leaf = undefined;
    }

    if (object.path !== undefined && object.path !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.path),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.path.push(exports.InnerOp.fromPartial(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    return message;
  }
};
var baseNonExistenceProof = {};
exports.NonExistenceProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.left !== undefined) {
      exports.ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }

    if (message.right !== undefined) {
      exports.ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseNonExistenceProof);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.left = exports.ExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.right = exports.ExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseNonExistenceProof);

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.left !== undefined && object.left !== null) {
      message.left = exports.ExistenceProof.fromJSON(object.left);
    } else {
      message.left = undefined;
    }

    if (object.right !== undefined && object.right !== null) {
      message.right = exports.ExistenceProof.fromJSON(object.right);
    } else {
      message.right = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.left !== undefined && (obj.left = message.left ? exports.ExistenceProof.toJSON(message.left) : undefined);
    message.right !== undefined && (obj.right = message.right ? exports.ExistenceProof.toJSON(message.right) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseNonExistenceProof);

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }

    if (object.left !== undefined && object.left !== null) {
      message.left = exports.ExistenceProof.fromPartial(object.left);
    } else {
      message.left = undefined;
    }

    if (object.right !== undefined && object.right !== null) {
      message.right = exports.ExistenceProof.fromPartial(object.right);
    } else {
      message.right = undefined;
    }

    return message;
  }
};
var baseCommitmentProof = {};
exports.CommitmentProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.exist !== undefined) {
      exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }

    if (message.nonexist !== undefined) {
      exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }

    if (message.batch !== undefined) {
      exports.BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }

    if (message.compressed !== undefined) {
      exports.CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseCommitmentProof);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.batch = exports.BatchProof.decode(reader, reader.uint32());
          break;

        case 4:
          message.compressed = exports.CompressedBatchProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseCommitmentProof);

    if (object.exist !== undefined && object.exist !== null) {
      message.exist = exports.ExistenceProof.fromJSON(object.exist);
    } else {
      message.exist = undefined;
    }

    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = exports.NonExistenceProof.fromJSON(object.nonexist);
    } else {
      message.nonexist = undefined;
    }

    if (object.batch !== undefined && object.batch !== null) {
      message.batch = exports.BatchProof.fromJSON(object.batch);
    } else {
      message.batch = undefined;
    }

    if (object.compressed !== undefined && object.compressed !== null) {
      message.compressed = exports.CompressedBatchProof.fromJSON(object.compressed);
    } else {
      message.compressed = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.exist !== undefined && (obj.exist = message.exist ? exports.ExistenceProof.toJSON(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? exports.NonExistenceProof.toJSON(message.nonexist) : undefined);
    message.batch !== undefined && (obj.batch = message.batch ? exports.BatchProof.toJSON(message.batch) : undefined);
    message.compressed !== undefined && (obj.compressed = message.compressed ? exports.CompressedBatchProof.toJSON(message.compressed) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCommitmentProof);

    if (object.exist !== undefined && object.exist !== null) {
      message.exist = exports.ExistenceProof.fromPartial(object.exist);
    } else {
      message.exist = undefined;
    }

    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = exports.NonExistenceProof.fromPartial(object.nonexist);
    } else {
      message.nonexist = undefined;
    }

    if (object.batch !== undefined && object.batch !== null) {
      message.batch = exports.BatchProof.fromPartial(object.batch);
    } else {
      message.batch = undefined;
    }

    if (object.compressed !== undefined && object.compressed !== null) {
      message.compressed = exports.CompressedBatchProof.fromPartial(object.compressed);
    } else {
      message.compressed = undefined;
    }

    return message;
  }
};
var baseLeafOp = {
  hash: 0,
  prehashKey: 0,
  prehashValue: 0,
  length: 0
};
exports.LeafOp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }

    if (message.prehashKey !== 0) {
      writer.uint32(16).int32(message.prehashKey);
    }

    if (message.prehashValue !== 0) {
      writer.uint32(24).int32(message.prehashValue);
    }

    if (message.length !== 0) {
      writer.uint32(32).int32(message.length);
    }

    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseLeafOp);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;

        case 2:
          message.prehashKey = reader.int32();
          break;

        case 3:
          message.prehashValue = reader.int32();
          break;

        case 4:
          message.length = reader.int32();
          break;

        case 5:
          message.prefix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseLeafOp);

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = hashOpFromJSON(object.hash);
    } else {
      message.hash = 0;
    }

    if (object.prehashKey !== undefined && object.prehashKey !== null) {
      message.prehashKey = hashOpFromJSON(object.prehashKey);
    } else {
      message.prehashKey = 0;
    }

    if (object.prehashValue !== undefined && object.prehashValue !== null) {
      message.prehashValue = hashOpFromJSON(object.prehashValue);
    } else {
      message.prehashValue = 0;
    }

    if (object.length !== undefined && object.length !== null) {
      message.length = lengthOpFromJSON(object.length);
    } else {
      message.length = 0;
    }

    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = bytesFromBase64(object.prefix);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    message.prehashKey !== undefined && (obj.prehashKey = hashOpToJSON(message.prehashKey));
    message.prehashValue !== undefined && (obj.prehashValue = hashOpToJSON(message.prehashValue));
    message.length !== undefined && (obj.length = lengthOpToJSON(message.length));
    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseLeafOp);

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = 0;
    }

    if (object.prehashKey !== undefined && object.prehashKey !== null) {
      message.prehashKey = object.prehashKey;
    } else {
      message.prehashKey = 0;
    }

    if (object.prehashValue !== undefined && object.prehashValue !== null) {
      message.prehashValue = object.prehashValue;
    } else {
      message.prehashValue = 0;
    }

    if (object.length !== undefined && object.length !== null) {
      message.length = object.length;
    } else {
      message.length = 0;
    }

    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = new Uint8Array();
    }

    return message;
  }
};
var baseInnerOp = {
  hash: 0
};
exports.InnerOp = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }

    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }

    if (message.suffix.length !== 0) {
      writer.uint32(26).bytes(message.suffix);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseInnerOp);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;

        case 2:
          message.prefix = reader.bytes();
          break;

        case 3:
          message.suffix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseInnerOp);

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = hashOpFromJSON(object.hash);
    } else {
      message.hash = 0;
    }

    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = bytesFromBase64(object.prefix);
    }

    if (object.suffix !== undefined && object.suffix !== null) {
      message.suffix = bytesFromBase64(object.suffix);
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    message.suffix !== undefined && (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseInnerOp);

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = 0;
    }

    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    } else {
      message.prefix = new Uint8Array();
    }

    if (object.suffix !== undefined && object.suffix !== null) {
      message.suffix = object.suffix;
    } else {
      message.suffix = new Uint8Array();
    }

    return message;
  }
};
var baseProofSpec = {
  maxDepth: 0,
  minDepth: 0
};
exports.ProofSpec = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.leafSpec !== undefined) {
      exports.LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
    }

    if (message.innerSpec !== undefined) {
      exports.InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
    }

    if (message.maxDepth !== 0) {
      writer.uint32(24).int32(message.maxDepth);
    }

    if (message.minDepth !== 0) {
      writer.uint32(32).int32(message.minDepth);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseProofSpec);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.leafSpec = exports.LeafOp.decode(reader, reader.uint32());
          break;

        case 2:
          message.innerSpec = exports.InnerSpec.decode(reader, reader.uint32());
          break;

        case 3:
          message.maxDepth = reader.int32();
          break;

        case 4:
          message.minDepth = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseProofSpec);

    if (object.leafSpec !== undefined && object.leafSpec !== null) {
      message.leafSpec = exports.LeafOp.fromJSON(object.leafSpec);
    } else {
      message.leafSpec = undefined;
    }

    if (object.innerSpec !== undefined && object.innerSpec !== null) {
      message.innerSpec = exports.InnerSpec.fromJSON(object.innerSpec);
    } else {
      message.innerSpec = undefined;
    }

    if (object.maxDepth !== undefined && object.maxDepth !== null) {
      message.maxDepth = Number(object.maxDepth);
    } else {
      message.maxDepth = 0;
    }

    if (object.minDepth !== undefined && object.minDepth !== null) {
      message.minDepth = Number(object.minDepth);
    } else {
      message.minDepth = 0;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.leafSpec !== undefined && (obj.leafSpec = message.leafSpec ? exports.LeafOp.toJSON(message.leafSpec) : undefined);
    message.innerSpec !== undefined && (obj.innerSpec = message.innerSpec ? exports.InnerSpec.toJSON(message.innerSpec) : undefined);
    message.maxDepth !== undefined && (obj.maxDepth = message.maxDepth);
    message.minDepth !== undefined && (obj.minDepth = message.minDepth);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseProofSpec);

    if (object.leafSpec !== undefined && object.leafSpec !== null) {
      message.leafSpec = exports.LeafOp.fromPartial(object.leafSpec);
    } else {
      message.leafSpec = undefined;
    }

    if (object.innerSpec !== undefined && object.innerSpec !== null) {
      message.innerSpec = exports.InnerSpec.fromPartial(object.innerSpec);
    } else {
      message.innerSpec = undefined;
    }

    if (object.maxDepth !== undefined && object.maxDepth !== null) {
      message.maxDepth = object.maxDepth;
    } else {
      message.maxDepth = 0;
    }

    if (object.minDepth !== undefined && object.minDepth !== null) {
      message.minDepth = object.minDepth;
    } else {
      message.minDepth = 0;
    }

    return message;
  }
};
var baseInnerSpec = {
  childOrder: 0,
  childSize: 0,
  minPrefixLength: 0,
  maxPrefixLength: 0,
  hash: 0
};
exports.InnerSpec = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    writer.uint32(10).fork();

    var _iterator4 = _createForOfIteratorHelper(message.childOrder),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    writer.ldelim();

    if (message.childSize !== 0) {
      writer.uint32(16).int32(message.childSize);
    }

    if (message.minPrefixLength !== 0) {
      writer.uint32(24).int32(message.minPrefixLength);
    }

    if (message.maxPrefixLength !== 0) {
      writer.uint32(32).int32(message.maxPrefixLength);
    }

    if (message.emptyChild.length !== 0) {
      writer.uint32(42).bytes(message.emptyChild);
    }

    if (message.hash !== 0) {
      writer.uint32(48).int32(message.hash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseInnerSpec);
    message.childOrder = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.childOrder.push(reader.int32());
            }
          } else {
            message.childOrder.push(reader.int32());
          }

          break;

        case 2:
          message.childSize = reader.int32();
          break;

        case 3:
          message.minPrefixLength = reader.int32();
          break;

        case 4:
          message.maxPrefixLength = reader.int32();
          break;

        case 5:
          message.emptyChild = reader.bytes();
          break;

        case 6:
          message.hash = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseInnerSpec);
    message.childOrder = [];

    if (object.childOrder !== undefined && object.childOrder !== null) {
      var _iterator5 = _createForOfIteratorHelper(object.childOrder),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          message.childOrder.push(Number(e));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    if (object.childSize !== undefined && object.childSize !== null) {
      message.childSize = Number(object.childSize);
    } else {
      message.childSize = 0;
    }

    if (object.minPrefixLength !== undefined && object.minPrefixLength !== null) {
      message.minPrefixLength = Number(object.minPrefixLength);
    } else {
      message.minPrefixLength = 0;
    }

    if (object.maxPrefixLength !== undefined && object.maxPrefixLength !== null) {
      message.maxPrefixLength = Number(object.maxPrefixLength);
    } else {
      message.maxPrefixLength = 0;
    }

    if (object.emptyChild !== undefined && object.emptyChild !== null) {
      message.emptyChild = bytesFromBase64(object.emptyChild);
    }

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = hashOpFromJSON(object.hash);
    } else {
      message.hash = 0;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.childOrder) {
      obj.childOrder = message.childOrder.map(function (e) {
        return e;
      });
    } else {
      obj.childOrder = [];
    }

    message.childSize !== undefined && (obj.childSize = message.childSize);
    message.minPrefixLength !== undefined && (obj.minPrefixLength = message.minPrefixLength);
    message.maxPrefixLength !== undefined && (obj.maxPrefixLength = message.maxPrefixLength);
    message.emptyChild !== undefined && (obj.emptyChild = base64FromBytes(message.emptyChild !== undefined ? message.emptyChild : new Uint8Array()));
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseInnerSpec);
    message.childOrder = [];

    if (object.childOrder !== undefined && object.childOrder !== null) {
      var _iterator6 = _createForOfIteratorHelper(object.childOrder),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var e = _step6.value;
          message.childOrder.push(e);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    if (object.childSize !== undefined && object.childSize !== null) {
      message.childSize = object.childSize;
    } else {
      message.childSize = 0;
    }

    if (object.minPrefixLength !== undefined && object.minPrefixLength !== null) {
      message.minPrefixLength = object.minPrefixLength;
    } else {
      message.minPrefixLength = 0;
    }

    if (object.maxPrefixLength !== undefined && object.maxPrefixLength !== null) {
      message.maxPrefixLength = object.maxPrefixLength;
    } else {
      message.maxPrefixLength = 0;
    }

    if (object.emptyChild !== undefined && object.emptyChild !== null) {
      message.emptyChild = object.emptyChild;
    } else {
      message.emptyChild = new Uint8Array();
    }

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = 0;
    }

    return message;
  }
};
var baseBatchProof = {};
exports.BatchProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator7 = _createForOfIteratorHelper(message.entries),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        exports.BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = Object.assign({}, baseBatchProof);
    message.entries = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(exports.BatchEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseBatchProof);
    message.entries = [];

    if (object.entries !== undefined && object.entries !== null) {
      var _iterator8 = _createForOfIteratorHelper(object.entries),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var e = _step8.value;
          message.entries.push(exports.BatchEntry.fromJSON(e));
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

    if (message.entries) {
      obj.entries = message.entries.map(function (e) {
        return e ? exports.BatchEntry.toJSON(e) : undefined;
      });
    } else {
      obj.entries = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseBatchProof);
    message.entries = [];

    if (object.entries !== undefined && object.entries !== null) {
      var _iterator9 = _createForOfIteratorHelper(object.entries),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var e = _step9.value;
          message.entries.push(exports.BatchEntry.fromPartial(e));
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
var baseBatchEntry = {};
exports.BatchEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.exist !== undefined) {
      exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }

    if (message.nonexist !== undefined) {
      exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseBatchEntry);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseBatchEntry);

    if (object.exist !== undefined && object.exist !== null) {
      message.exist = exports.ExistenceProof.fromJSON(object.exist);
    } else {
      message.exist = undefined;
    }

    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = exports.NonExistenceProof.fromJSON(object.nonexist);
    } else {
      message.nonexist = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.exist !== undefined && (obj.exist = message.exist ? exports.ExistenceProof.toJSON(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? exports.NonExistenceProof.toJSON(message.nonexist) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseBatchEntry);

    if (object.exist !== undefined && object.exist !== null) {
      message.exist = exports.ExistenceProof.fromPartial(object.exist);
    } else {
      message.exist = undefined;
    }

    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = exports.NonExistenceProof.fromPartial(object.nonexist);
    } else {
      message.nonexist = undefined;
    }

    return message;
  }
};
var baseCompressedBatchProof = {};
exports.CompressedBatchProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator10 = _createForOfIteratorHelper(message.entries),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        exports.CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }

    var _iterator11 = _createForOfIteratorHelper(message.lookupInners),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _v = _step11.value;
        exports.InnerOp.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseCompressedBatchProof);
    message.entries = [];
    message.lookupInners = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(exports.CompressedBatchEntry.decode(reader, reader.uint32()));
          break;

        case 2:
          message.lookupInners.push(exports.InnerOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseCompressedBatchProof);
    message.entries = [];
    message.lookupInners = [];

    if (object.entries !== undefined && object.entries !== null) {
      var _iterator12 = _createForOfIteratorHelper(object.entries),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var e = _step12.value;
          message.entries.push(exports.CompressedBatchEntry.fromJSON(e));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }

    if (object.lookupInners !== undefined && object.lookupInners !== null) {
      var _iterator13 = _createForOfIteratorHelper(object.lookupInners),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _e = _step13.value;
          message.lookupInners.push(exports.InnerOp.fromJSON(_e));
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.entries) {
      obj.entries = message.entries.map(function (e) {
        return e ? exports.CompressedBatchEntry.toJSON(e) : undefined;
      });
    } else {
      obj.entries = [];
    }

    if (message.lookupInners) {
      obj.lookupInners = message.lookupInners.map(function (e) {
        return e ? exports.InnerOp.toJSON(e) : undefined;
      });
    } else {
      obj.lookupInners = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCompressedBatchProof);
    message.entries = [];
    message.lookupInners = [];

    if (object.entries !== undefined && object.entries !== null) {
      var _iterator14 = _createForOfIteratorHelper(object.entries),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var e = _step14.value;
          message.entries.push(exports.CompressedBatchEntry.fromPartial(e));
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }

    if (object.lookupInners !== undefined && object.lookupInners !== null) {
      var _iterator15 = _createForOfIteratorHelper(object.lookupInners),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _e2 = _step15.value;
          message.lookupInners.push(exports.InnerOp.fromPartial(_e2));
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
var baseCompressedBatchEntry = {};
exports.CompressedBatchEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.exist !== undefined) {
      exports.CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }

    if (message.nonexist !== undefined) {
      exports.CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseCompressedBatchEntry);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exist = exports.CompressedExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = exports.CompressedNonExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseCompressedBatchEntry);

    if (object.exist !== undefined && object.exist !== null) {
      message.exist = exports.CompressedExistenceProof.fromJSON(object.exist);
    } else {
      message.exist = undefined;
    }

    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = exports.CompressedNonExistenceProof.fromJSON(object.nonexist);
    } else {
      message.nonexist = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.exist !== undefined && (obj.exist = message.exist ? exports.CompressedExistenceProof.toJSON(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? exports.CompressedNonExistenceProof.toJSON(message.nonexist) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCompressedBatchEntry);

    if (object.exist !== undefined && object.exist !== null) {
      message.exist = exports.CompressedExistenceProof.fromPartial(object.exist);
    } else {
      message.exist = undefined;
    }

    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = exports.CompressedNonExistenceProof.fromPartial(object.nonexist);
    } else {
      message.nonexist = undefined;
    }

    return message;
  }
};
var baseCompressedExistenceProof = {
  path: 0
};
exports.CompressedExistenceProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    if (message.leaf !== undefined) {
      exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }

    writer.uint32(34).fork();

    var _iterator16 = _createForOfIteratorHelper(message.path),
        _step16;

    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var v = _step16.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }

    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseCompressedExistenceProof);
    message.path = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.leaf = exports.LeafOp.decode(reader, reader.uint32());
          break;

        case 4:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseCompressedExistenceProof);
    message.path = [];

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }

    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = exports.LeafOp.fromJSON(object.leaf);
    } else {
      message.leaf = undefined;
    }

    if (object.path !== undefined && object.path !== null) {
      var _iterator17 = _createForOfIteratorHelper(object.path),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var e = _step17.value;
          message.path.push(Number(e));
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.leaf !== undefined && (obj.leaf = message.leaf ? exports.LeafOp.toJSON(message.leaf) : undefined);

    if (message.path) {
      obj.path = message.path.map(function (e) {
        return e;
      });
    } else {
      obj.path = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCompressedExistenceProof);
    message.path = [];

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

    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = exports.LeafOp.fromPartial(object.leaf);
    } else {
      message.leaf = undefined;
    }

    if (object.path !== undefined && object.path !== null) {
      var _iterator18 = _createForOfIteratorHelper(object.path),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var e = _step18.value;
          message.path.push(e);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }

    return message;
  }
};
var baseCompressedNonExistenceProof = {};
exports.CompressedNonExistenceProof = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.left !== undefined) {
      exports.CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }

    if (message.right !== undefined) {
      exports.CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseCompressedNonExistenceProof);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.left = exports.CompressedExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.right = exports.CompressedExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseCompressedNonExistenceProof);

    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }

    if (object.left !== undefined && object.left !== null) {
      message.left = exports.CompressedExistenceProof.fromJSON(object.left);
    } else {
      message.left = undefined;
    }

    if (object.right !== undefined && object.right !== null) {
      message.right = exports.CompressedExistenceProof.fromJSON(object.right);
    } else {
      message.right = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.left !== undefined && (obj.left = message.left ? exports.CompressedExistenceProof.toJSON(message.left) : undefined);
    message.right !== undefined && (obj.right = message.right ? exports.CompressedExistenceProof.toJSON(message.right) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseCompressedNonExistenceProof);

    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }

    if (object.left !== undefined && object.left !== null) {
      message.left = exports.CompressedExistenceProof.fromPartial(object.left);
    } else {
      message.left = undefined;
    }

    if (object.right !== undefined && object.right !== null) {
      message.right = exports.CompressedExistenceProof.fromPartial(object.right);
    } else {
      message.right = undefined;
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
//# sourceMappingURL=proofs.js.map