"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Endpoint = void 0;

var encoding_1 = require("@cosmjs/encoding");

var launchpad_1 = require("@cosmjs/launchpad");

var stargate_1 = require("@cosmjs/stargate");

var utils_1 = require("./utils");
/**
 * Endpoint is a wrapper around SigningStargateClient as well as ClientID
 * and ConnectionID. Two Endpoints compose a Link and this should expose all the
 * methods you need to work on one half of an IBC Connection, the higher-level
 * orchestration is handled in Link.
 */


var Endpoint = /*#__PURE__*/function () {
  function Endpoint(client, clientID, connectionID) {
    _classCallCheck(this, Endpoint);

    this.client = client;
    this.clientID = clientID;
    this.connectionID = connectionID;
  }

  _createClass(Endpoint, [{
    key: "chainId",
    value: function chainId() {
      return this.client.chainId;
    }
  }, {
    key: "getLatestCommit",
    value: function () {
      var _getLatestCommit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.client.getCommit());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLatestCommit() {
        return _getLatestCommit.apply(this, arguments);
      }

      return getLatestCommit;
    }() // returns all packets (auto-paginates, so be careful about not setting a minHeight)

  }, {
    key: "querySentPackets",
    value: function () {
      var _querySentPackets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this = this,
            _ref3;

        var _ref,
            minHeight,
            maxHeight,
            query,
            search,
            resultsNested,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, minHeight = _ref.minHeight, maxHeight = _ref.maxHeight;
                query = "send_packet.packet_connection='".concat(this.connectionID, "'");

                if (minHeight) {
                  query = "".concat(query, " AND tx.height>=").concat(minHeight);
                }

                if (maxHeight) {
                  query = "".concat(query, " AND tx.height<=").concat(maxHeight);
                }

                _context2.next = 6;
                return this.client.tm.txSearchAll({
                  query: query
                });

              case 6:
                search = _context2.sent;
                resultsNested = search.txs.map(function (_ref2) {
                  var hash = _ref2.hash,
                      height = _ref2.height,
                      result = _ref2.result;
                  var parsedLogs = stargate_1.parseRawLog(result.log); // we accept message.sender (cosmos-sdk) and message.signer (x/wasm)

                  var sender = '';

                  try {
                    sender = launchpad_1.logs.findAttribute(parsedLogs, 'message', 'sender').value;
                  } catch (_a) {
                    try {
                      sender = launchpad_1.logs.findAttribute(parsedLogs, 'message', 'signer').value;
                    } catch (_b) {
                      _this.client.logger.warn("No message.sender nor message.signer in tx ".concat(encoding_1.toHex(hash)));
                    }
                  }

                  return utils_1.parsePacketsFromLogs(parsedLogs).map(function (packet) {
                    return {
                      packet: packet,
                      height: height,
                      sender: sender
                    };
                  });
                });
                return _context2.abrupt("return", (_ref3 = []).concat.apply(_ref3, _toConsumableArray(resultsNested)));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function querySentPackets() {
        return _querySentPackets.apply(this, arguments);
      }

      return querySentPackets;
    }() // returns all acks (auto-paginates, so be careful about not setting a minHeight)

  }, {
    key: "queryWrittenAcks",
    value: function () {
      var _queryWrittenAcks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _ref6;

        var _ref4,
            minHeight,
            maxHeight,
            query,
            search,
            resultsNested,
            _args3 = arguments;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref4 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, minHeight = _ref4.minHeight, maxHeight = _ref4.maxHeight;
                query = "write_acknowledgement.packet_connection='".concat(this.connectionID, "'");

                if (minHeight) {
                  query = "".concat(query, " AND tx.height>=").concat(minHeight);
                }

                if (maxHeight) {
                  query = "".concat(query, " AND tx.height<=").concat(maxHeight);
                }

                _context3.next = 6;
                return this.client.tm.txSearchAll({
                  query: query
                });

              case 6:
                search = _context3.sent;
                resultsNested = search.txs.map(function (_ref5) {
                  var height = _ref5.height,
                      result = _ref5.result;
                  var parsedLogs = stargate_1.parseRawLog(result.log); // const sender = logs.findAttribute(parsedLogs, 'message', 'sender').value;

                  return utils_1.parseAcksFromLogs(parsedLogs).map(function (ack) {
                    return Object.assign({
                      height: height
                    }, ack);
                  });
                });
                return _context3.abrupt("return", (_ref6 = []).concat.apply(_ref6, _toConsumableArray(resultsNested)));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function queryWrittenAcks() {
        return _queryWrittenAcks.apply(this, arguments);
      }

      return queryWrittenAcks;
    }()
  }]);

  return Endpoint;
}();

exports.Endpoint = Endpoint;
//# sourceMappingURL=endpoint.js.map