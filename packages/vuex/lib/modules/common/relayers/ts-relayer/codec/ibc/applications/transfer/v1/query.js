"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDenomTracesResponse = exports.QueryDenomTracesRequest = exports.QueryDenomTraceResponse = exports.QueryDenomTraceRequest = exports.protobufPackage = void 0;
/* eslint-disable */

var transfer_1 = require("../../../../ibc/applications/transfer/v1/transfer");

var pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");

var minimal_1 = __importDefault(require("protobufjs/minimal"));

exports.protobufPackage = 'ibc.applications.transfer.v1';
var baseQueryDenomTraceRequest = {
  hash: ''
};
exports.QueryDenomTraceRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.hash !== '') {
      writer.uint32(10).string(message.hash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryDenomTraceRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryDenomTraceRequest);

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = '';
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryDenomTraceRequest);

    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = '';
    }

    return message;
  }
};
var baseQueryDenomTraceResponse = {};
exports.QueryDenomTraceResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.denomTrace !== undefined) {
      transfer_1.DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryDenomTraceResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denomTrace = transfer_1.DenomTrace.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryDenomTraceResponse);

    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      message.denomTrace = transfer_1.DenomTrace.fromJSON(object.denomTrace);
    } else {
      message.denomTrace = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denomTrace !== undefined && (obj.denomTrace = message.denomTrace ? transfer_1.DenomTrace.toJSON(message.denomTrace) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryDenomTraceResponse);

    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      message.denomTrace = transfer_1.DenomTrace.fromPartial(object.denomTrace);
    } else {
      message.denomTrace = undefined;
    }

    return message;
  }
};
var baseQueryDenomTracesRequest = {};
exports.QueryDenomTracesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryDenomTracesRequest);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryDenomTracesRequest);

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryDenomTracesRequest);

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryDenomTracesResponse = {};
exports.QueryDenomTracesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    var _iterator = _createForOfIteratorHelper(message.denomTraces),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        transfer_1.DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryDenomTracesResponse);
    message.denomTraces = [];

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denomTraces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryDenomTracesResponse);
    message.denomTraces = [];

    if (object.denomTraces !== undefined && object.denomTraces !== null) {
      var _iterator2 = _createForOfIteratorHelper(object.denomTraces),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          message.denomTraces.push(transfer_1.DenomTrace.fromJSON(e));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.denomTraces) {
      obj.denomTraces = message.denomTraces.map(function (e) {
        return e ? transfer_1.DenomTrace.toJSON(e) : undefined;
      });
    } else {
      obj.denomTraces = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryDenomTracesResponse);
    message.denomTraces = [];

    if (object.denomTraces !== undefined && object.denomTraces !== null) {
      var _iterator3 = _createForOfIteratorHelper(object.denomTraces),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var e = _step3.value;
          message.denomTraces.push(transfer_1.DenomTrace.fromPartial(e));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }

    return message;
  }
};
var baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryParamsRequest);

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
    var message = Object.assign({}, baseQueryParamsRequest);
    return message;
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = Object.assign({}, baseQueryParamsRequest);
    return message;
  }
};
var baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minimal_1["default"].Writer.create();

    if (message.params !== undefined) {
      transfer_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof Uint8Array ? new minimal_1["default"].Reader(input) : input;
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = Object.assign({}, baseQueryParamsResponse);

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = transfer_1.Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    var message = Object.assign({}, baseQueryParamsResponse);

    if (object.params !== undefined && object.params !== null) {
      message.params = transfer_1.Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }

    return message;
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.params !== undefined && (obj.params = message.params ? transfer_1.Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = Object.assign({}, baseQueryParamsResponse);

    if (object.params !== undefined && object.params !== null) {
      message.params = transfer_1.Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }

    return message;
  }
};

var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    _classCallCheck(this, QueryClientImpl);

    this.rpc = rpc;
  }

  _createClass(QueryClientImpl, [{
    key: "DenomTrace",
    value: function DenomTrace(request) {
      var data = exports.QueryDenomTraceRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.applications.transfer.v1.Query', 'DenomTrace', data);
      return promise.then(function (data) {
        return exports.QueryDenomTraceResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "DenomTraces",
    value: function DenomTraces(request) {
      var data = exports.QueryDenomTracesRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.applications.transfer.v1.Query', 'DenomTraces', data);
      return promise.then(function (data) {
        return exports.QueryDenomTracesResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }, {
    key: "Params",
    value: function Params(request) {
      var data = exports.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request('ibc.applications.transfer.v1.Query', 'Params', data);
      return promise.then(function (data) {
        return exports.QueryParamsResponse.decode(new minimal_1["default"].Reader(data));
      });
    }
  }]);

  return QueryClientImpl;
}();

exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.js.map