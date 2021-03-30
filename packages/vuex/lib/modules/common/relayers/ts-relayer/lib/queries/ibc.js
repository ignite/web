"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupIbcExtension = exports.heightQueryString = void 0;

var encoding_1 = require("@cosmjs/encoding");

var stargate_1 = require("@cosmjs/stargate");

var long_1 = __importDefault(require("long"));

var proofs_1 = require("../../codec/confio/proofs");

var any_1 = require("../../codec/google/protobuf/any");

var channel_1 = require("../../codec/ibc/core/channel/v1/channel");

var query_1 = require("../../codec/ibc/core/channel/v1/query");

var query_2 = require("../../codec/ibc/core/client/v1/query");

var commitment_1 = require("../../codec/ibc/core/commitment/v1/commitment");

var connection_1 = require("../../codec/ibc/core/connection/v1/connection");

var query_3 = require("../../codec/ibc/core/connection/v1/query");

var tendermint_1 = require("../../codec/ibc/lightclients/tendermint/v1/tendermint");

function decodeTendermintClientStateAny(clientState) {
  if ((clientState === null || clientState === void 0 ? void 0 : clientState.typeUrl) !== '/ibc.lightclients.tendermint.v1.ClientState') {
    throw new Error("Unexpected client state type: ".concat(clientState === null || clientState === void 0 ? void 0 : clientState.typeUrl));
  }

  return tendermint_1.ClientState.decode(clientState.value);
}

function decodeTendermintConsensusStateAny(clientState) {
  if ((clientState === null || clientState === void 0 ? void 0 : clientState.typeUrl) !== '/ibc.lightclients.tendermint.v1.ConsensusState') {
    throw new Error("Unexpected client state type: ".concat(clientState === null || clientState === void 0 ? void 0 : clientState.typeUrl));
  }

  return tendermint_1.ConsensusState.decode(clientState.value);
}

function heightQueryString(height) {
  return "".concat(height.revisionNumber, "-").concat(height.revisionHeight);
}

exports.heightQueryString = heightQueryString;

function setupIbcExtension(base) {
  var rpc = stargate_1.createRpc(base); // Use these services to get easy typed access to query methods
  // These cannot be used for proof verification

  var channelQueryService = new query_1.QueryClientImpl(rpc);
  var clientQueryService = new query_2.QueryClientImpl(rpc);
  var connectionQueryService = new query_3.QueryClientImpl(rpc);
  return {
    ibc: {
      channel: {
        channel: function () {
          var _channel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(portId, channelId) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", channelQueryService.Channel({
                      portId: portId,
                      channelId: channelId
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function channel(_x, _x2) {
            return _channel.apply(this, arguments);
          }

          return channel;
        }(),
        channels: function () {
          var _channels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(paginationKey) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", channelQueryService.Channels({
                      pagination: stargate_1.createPagination(paginationKey)
                    }));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function channels(_x3) {
            return _channels.apply(this, arguments);
          }

          return channels;
        }(),
        allChannels: function () {
          var _allChannels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _a, channels, response, key;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    channels = [];

                  case 1:
                    _context3.next = 3;
                    return channelQueryService.Channels({
                      pagination: stargate_1.createPagination(key)
                    });

                  case 3:
                    response = _context3.sent;
                    channels.push.apply(channels, _toConsumableArray(response.channels));
                    key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;

                  case 6:
                    if (key) {
                      _context3.next = 1;
                      break;
                    }

                  case 7:
                    return _context3.abrupt("return", {
                      channels: channels,
                      height: response.height
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function allChannels() {
            return _allChannels.apply(this, arguments);
          }

          return allChannels;
        }(),
        connectionChannels: function () {
          var _connectionChannels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(connection, paginationKey) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", channelQueryService.ConnectionChannels({
                      connection: connection,
                      pagination: stargate_1.createPagination(paginationKey)
                    }));

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function connectionChannels(_x4, _x5) {
            return _connectionChannels.apply(this, arguments);
          }

          return connectionChannels;
        }(),
        allConnectionChannels: function () {
          var _allConnectionChannels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(connection) {
            var _a, channels, response, key;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    channels = [];

                  case 1:
                    _context5.next = 3;
                    return channelQueryService.ConnectionChannels({
                      connection: connection,
                      pagination: stargate_1.createPagination(key)
                    });

                  case 3:
                    response = _context5.sent;
                    channels.push.apply(channels, _toConsumableArray(response.channels));
                    key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;

                  case 6:
                    if (key) {
                      _context5.next = 1;
                      break;
                    }

                  case 7:
                    return _context5.abrupt("return", {
                      channels: channels,
                      height: response.height
                    });

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function allConnectionChannels(_x6) {
            return _allConnectionChannels.apply(this, arguments);
          }

          return allConnectionChannels;
        }(),
        clientState: function () {
          var _clientState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(portId, channelId) {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    return _context6.abrupt("return", channelQueryService.ChannelClientState({
                      portId: portId,
                      channelId: channelId
                    }));

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));

          function clientState(_x7, _x8) {
            return _clientState.apply(this, arguments);
          }

          return clientState;
        }(),
        consensusState: function () {
          var _consensusState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(portId, channelId, revisionNumber, revisionHeight) {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", channelQueryService.ChannelConsensusState({
                      portId: portId,
                      channelId: channelId,
                      revisionNumber: long_1["default"].fromNumber(revisionNumber, true),
                      revisionHeight: long_1["default"].fromNumber(revisionHeight, true)
                    }));

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          function consensusState(_x9, _x10, _x11, _x12) {
            return _consensusState.apply(this, arguments);
          }

          return consensusState;
        }(),
        packetCommitment: function () {
          var _packetCommitment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(portId, channelId, sequence) {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    return _context8.abrupt("return", channelQueryService.PacketCommitment({
                      portId: portId,
                      channelId: channelId,
                      sequence: sequence
                    }));

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));

          function packetCommitment(_x13, _x14, _x15) {
            return _packetCommitment.apply(this, arguments);
          }

          return packetCommitment;
        }(),
        packetCommitments: function () {
          var _packetCommitments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(portId, channelId, paginationKey) {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    return _context9.abrupt("return", channelQueryService.PacketCommitments({
                      channelId: channelId,
                      portId: portId,
                      pagination: stargate_1.createPagination(paginationKey)
                    }));

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));

          function packetCommitments(_x16, _x17, _x18) {
            return _packetCommitments.apply(this, arguments);
          }

          return packetCommitments;
        }(),
        allPacketCommitments: function () {
          var _allPacketCommitments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(portId, channelId) {
            var _a, commitments, response, key;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    commitments = [];

                  case 1:
                    _context10.next = 3;
                    return channelQueryService.PacketCommitments({
                      channelId: channelId,
                      portId: portId,
                      pagination: stargate_1.createPagination(key)
                    });

                  case 3:
                    response = _context10.sent;
                    commitments.push.apply(commitments, _toConsumableArray(response.commitments));
                    key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;

                  case 6:
                    if (key) {
                      _context10.next = 1;
                      break;
                    }

                  case 7:
                    return _context10.abrupt("return", {
                      commitments: commitments,
                      height: response.height
                    });

                  case 8:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));

          function allPacketCommitments(_x19, _x20) {
            return _allPacketCommitments.apply(this, arguments);
          }

          return allPacketCommitments;
        }(),
        packetReceipt: function () {
          var _packetReceipt = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(portId, channelId, sequence) {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    return _context11.abrupt("return", channelQueryService.PacketReceipt({
                      portId: portId,
                      channelId: channelId,
                      sequence: long_1["default"].fromNumber(sequence, true)
                    }));

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));

          function packetReceipt(_x21, _x22, _x23) {
            return _packetReceipt.apply(this, arguments);
          }

          return packetReceipt;
        }(),
        packetAcknowledgement: function () {
          var _packetAcknowledgement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(portId, channelId, sequence) {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    return _context12.abrupt("return", channelQueryService.PacketAcknowledgement({
                      portId: portId,
                      channelId: channelId,
                      sequence: long_1["default"].fromNumber(sequence, true)
                    }));

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));

          function packetAcknowledgement(_x24, _x25, _x26) {
            return _packetAcknowledgement.apply(this, arguments);
          }

          return packetAcknowledgement;
        }(),
        packetAcknowledgements: function () {
          var _packetAcknowledgements = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(portId, channelId, paginationKey) {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    return _context13.abrupt("return", channelQueryService.PacketAcknowledgements({
                      portId: portId,
                      channelId: channelId,
                      pagination: stargate_1.createPagination(paginationKey)
                    }));

                  case 1:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));

          function packetAcknowledgements(_x27, _x28, _x29) {
            return _packetAcknowledgements.apply(this, arguments);
          }

          return packetAcknowledgements;
        }(),
        allPacketAcknowledgements: function () {
          var _allPacketAcknowledgements = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(portId, channelId) {
            var _a, acknowledgements, response, key;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    acknowledgements = [];

                  case 1:
                    _context14.next = 3;
                    return channelQueryService.PacketAcknowledgements({
                      channelId: channelId,
                      portId: portId,
                      pagination: stargate_1.createPagination(key)
                    });

                  case 3:
                    response = _context14.sent;
                    acknowledgements.push.apply(acknowledgements, _toConsumableArray(response.acknowledgements));
                    key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;

                  case 6:
                    if (key) {
                      _context14.next = 1;
                      break;
                    }

                  case 7:
                    return _context14.abrupt("return", {
                      acknowledgements: acknowledgements,
                      height: response.height
                    });

                  case 8:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));

          function allPacketAcknowledgements(_x30, _x31) {
            return _allPacketAcknowledgements.apply(this, arguments);
          }

          return allPacketAcknowledgements;
        }(),
        unreceivedPackets: function () {
          var _unreceivedPackets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(portId, channelId, packetCommitmentSequences) {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    return _context15.abrupt("return", channelQueryService.UnreceivedPackets({
                      portId: portId,
                      channelId: channelId,
                      packetCommitmentSequences: packetCommitmentSequences.map(function (s) {
                        return long_1["default"].fromNumber(s, true);
                      })
                    }));

                  case 1:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          }));

          function unreceivedPackets(_x32, _x33, _x34) {
            return _unreceivedPackets.apply(this, arguments);
          }

          return unreceivedPackets;
        }(),
        unreceivedAcks: function () {
          var _unreceivedAcks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(portId, channelId, packetAckSequences) {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    return _context16.abrupt("return", channelQueryService.UnreceivedAcks({
                      portId: portId,
                      channelId: channelId,
                      packetAckSequences: packetAckSequences.map(function (s) {
                        return long_1["default"].fromNumber(s, true);
                      })
                    }));

                  case 1:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16);
          }));

          function unreceivedAcks(_x35, _x36, _x37) {
            return _unreceivedAcks.apply(this, arguments);
          }

          return unreceivedAcks;
        }(),
        nextSequenceReceive: function () {
          var _nextSequenceReceive = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(portId, channelId) {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    return _context17.abrupt("return", channelQueryService.NextSequenceReceive({
                      portId: portId,
                      channelId: channelId
                    }));

                  case 1:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17);
          }));

          function nextSequenceReceive(_x38, _x39) {
            return _nextSequenceReceive.apply(this, arguments);
          }

          return nextSequenceReceive;
        }()
      },
      client: {
        state: function state(clientId) {
          return clientQueryService.ClientState({
            clientId: clientId
          });
        },
        states: function states(paginationKey) {
          return clientQueryService.ClientStates({
            pagination: stargate_1.createPagination(paginationKey)
          });
        },
        allStates: function () {
          var _allStates = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _a, clientStates, response, key;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    clientStates = [];

                  case 1:
                    _context18.next = 3;
                    return clientQueryService.ClientStates({
                      pagination: stargate_1.createPagination(key)
                    });

                  case 3:
                    response = _context18.sent;
                    clientStates.push.apply(clientStates, _toConsumableArray(response.clientStates));
                    key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;

                  case 6:
                    if (key) {
                      _context18.next = 1;
                      break;
                    }

                  case 7:
                    return _context18.abrupt("return", {
                      clientStates: clientStates
                    });

                  case 8:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18);
          }));

          function allStates() {
            return _allStates.apply(this, arguments);
          }

          return allStates;
        }(),
        consensusState: function consensusState(clientId, consensusHeight) {
          return clientQueryService.ConsensusState(query_2.QueryConsensusStateRequest.fromPartial({
            clientId: clientId,
            revisionHeight: consensusHeight !== undefined ? long_1["default"].fromNumber(consensusHeight, true) : undefined,
            latestHeight: consensusHeight === undefined
          }));
        },
        consensusStates: function consensusStates(clientId, paginationKey) {
          return clientQueryService.ConsensusStates({
            clientId: clientId,
            pagination: stargate_1.createPagination(paginationKey)
          });
        },
        allConsensusStates: function () {
          var _allConsensusStates = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(clientId) {
            var _a, consensusStates, response, key;

            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    consensusStates = [];

                  case 1:
                    _context19.next = 3;
                    return clientQueryService.ConsensusStates({
                      clientId: clientId,
                      pagination: stargate_1.createPagination(key)
                    });

                  case 3:
                    response = _context19.sent;
                    consensusStates.push.apply(consensusStates, _toConsumableArray(response.consensusStates));
                    key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;

                  case 6:
                    if (key) {
                      _context19.next = 1;
                      break;
                    }

                  case 7:
                    return _context19.abrupt("return", {
                      consensusStates: consensusStates
                    });

                  case 8:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19);
          }));

          function allConsensusStates(_x40) {
            return _allConsensusStates.apply(this, arguments);
          }

          return allConsensusStates;
        }(),
        params: function params() {
          return clientQueryService.ClientParams({});
        },
        stateTm: function () {
          var _stateTm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(clientId) {
            var response;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return clientQueryService.ClientState({
                      clientId: clientId
                    });

                  case 2:
                    response = _context20.sent;
                    return _context20.abrupt("return", decodeTendermintClientStateAny(response.clientState));

                  case 4:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20);
          }));

          function stateTm(_x41) {
            return _stateTm.apply(this, arguments);
          }

          return stateTm;
        }(),
        statesTm: function () {
          var _statesTm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(paginationKey) {
            var _yield$clientQuerySer, clientStates;

            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return clientQueryService.ClientStates({
                      pagination: stargate_1.createPagination(paginationKey)
                    });

                  case 2:
                    _yield$clientQuerySer = _context21.sent;
                    clientStates = _yield$clientQuerySer.clientStates;
                    return _context21.abrupt("return", clientStates.map(function (_ref) {
                      var clientState = _ref.clientState;
                      return decodeTendermintClientStateAny(clientState);
                    }));

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21);
          }));

          function statesTm(_x42) {
            return _statesTm.apply(this, arguments);
          }

          return statesTm;
        }(),
        allStatesTm: function () {
          var _allStatesTm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _a, clientStates, response, key;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    clientStates = [];

                  case 1:
                    _context22.next = 3;
                    return clientQueryService.ClientStates({
                      pagination: stargate_1.createPagination(key)
                    });

                  case 3:
                    response = _context22.sent;
                    clientStates.push.apply(clientStates, _toConsumableArray(response.clientStates));
                    key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;

                  case 6:
                    if (key) {
                      _context22.next = 1;
                      break;
                    }

                  case 7:
                    return _context22.abrupt("return", clientStates.map(function (_ref2) {
                      var clientState = _ref2.clientState;
                      return decodeTendermintClientStateAny(clientState);
                    }));

                  case 8:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22);
          }));

          function allStatesTm() {
            return _allStatesTm.apply(this, arguments);
          }

          return allStatesTm;
        }(),
        consensusStateTm: function () {
          var _consensusStateTm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(clientId, consensusHeight) {
            var response;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return clientQueryService.ConsensusState(query_2.QueryConsensusStateRequest.fromPartial({
                      clientId: clientId,
                      revisionHeight: consensusHeight === null || consensusHeight === void 0 ? void 0 : consensusHeight.revisionHeight,
                      revisionNumber: consensusHeight === null || consensusHeight === void 0 ? void 0 : consensusHeight.revisionNumber,
                      latestHeight: consensusHeight === undefined
                    }));

                  case 2:
                    response = _context23.sent;
                    return _context23.abrupt("return", decodeTendermintConsensusStateAny(response.consensusState));

                  case 4:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23);
          }));

          function consensusStateTm(_x43, _x44) {
            return _consensusStateTm.apply(this, arguments);
          }

          return consensusStateTm;
        }()
      },
      connection: {
        connection: function () {
          var _connection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(connectionId) {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    return _context24.abrupt("return", connectionQueryService.Connection({
                      connectionId: connectionId
                    }));

                  case 1:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24);
          }));

          function connection(_x45) {
            return _connection.apply(this, arguments);
          }

          return connection;
        }(),
        connections: function () {
          var _connections = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(paginationKey) {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    return _context25.abrupt("return", connectionQueryService.Connections({
                      pagination: stargate_1.createPagination(paginationKey)
                    }));

                  case 1:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25);
          }));

          function connections(_x46) {
            return _connections.apply(this, arguments);
          }

          return connections;
        }(),
        allConnections: function () {
          var _allConnections = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _a, connections, response, key;

            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    connections = [];

                  case 1:
                    _context26.next = 3;
                    return connectionQueryService.Connections({
                      pagination: stargate_1.createPagination(key)
                    });

                  case 3:
                    response = _context26.sent;
                    connections.push.apply(connections, _toConsumableArray(response.connections));
                    key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;

                  case 6:
                    if (key) {
                      _context26.next = 1;
                      break;
                    }

                  case 7:
                    return _context26.abrupt("return", {
                      connections: connections,
                      height: response.height
                    });

                  case 8:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26);
          }));

          function allConnections() {
            return _allConnections.apply(this, arguments);
          }

          return allConnections;
        }(),
        clientConnections: function () {
          var _clientConnections = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(clientId) {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    return _context27.abrupt("return", connectionQueryService.ClientConnections({
                      clientId: clientId
                    }));

                  case 1:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27);
          }));

          function clientConnections(_x47) {
            return _clientConnections.apply(this, arguments);
          }

          return clientConnections;
        }(),
        clientState: function () {
          var _clientState2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(connectionId) {
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    return _context28.abrupt("return", connectionQueryService.ConnectionClientState({
                      connectionId: connectionId
                    }));

                  case 1:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28);
          }));

          function clientState(_x48) {
            return _clientState2.apply(this, arguments);
          }

          return clientState;
        }(),
        consensusState: function () {
          var _consensusState2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(connectionId, revisionHeight) {
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    return _context29.abrupt("return", connectionQueryService.ConnectionConsensusState(query_3.QueryConnectionConsensusStateRequest.fromPartial({
                      connectionId: connectionId,
                      revisionHeight: long_1["default"].fromNumber(revisionHeight, true)
                    })));

                  case 1:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29);
          }));

          function consensusState(_x49, _x50) {
            return _consensusState2.apply(this, arguments);
          }

          return consensusState;
        }()
      },
      proof: {
        // these keys can all be found here: https://github.com/cosmos/cosmos-sdk/blob/v0.41.1/x/ibc/core/24-host/keys.go
        // note some have changed since the v0.40 pre-release this code was based on
        channel: {
          channel: function () {
            var _channel2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(portId, channelId, proofHeight) {
              var key, proven, channel, proof;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      // key: https://github.com/cosmos/cosmos-sdk/blob/ef0a7344af345882729598bc2958a21143930a6b/x/ibc/24-host/keys.go#L117-L120
                      key = encoding_1.toAscii("channelEnds/ports/".concat(portId, "/channels/").concat(channelId));
                      _context30.next = 3;
                      return base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());

                    case 3:
                      proven = _context30.sent;
                      channel = channel_1.Channel.decode(proven.value);
                      proof = convertProofsToIcs23(proven.proof);
                      return _context30.abrupt("return", {
                        channel: channel,
                        proof: proof,
                        proofHeight: proofHeight
                      });

                    case 7:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30);
            }));

            function channel(_x51, _x52, _x53) {
              return _channel2.apply(this, arguments);
            }

            return channel;
          }(),
          // designed only for timeout, modify if we need actual value not just proof
          // could not verify absence of key receipts/ports/transfer/channels/channel-5/sequences/2
          receiptProof: function () {
            var _receiptProof = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(portId, channelId, sequence, proofHeight) {
              var key, proven, proof;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      key = encoding_1.toAscii("receipts/ports/".concat(portId, "/channels/").concat(channelId, "/sequences/").concat(sequence));
                      _context31.next = 3;
                      return base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());

                    case 3:
                      proven = _context31.sent;
                      proof = convertProofsToIcs23(proven.proof);
                      return _context31.abrupt("return", proof);

                    case 6:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31);
            }));

            function receiptProof(_x54, _x55, _x56, _x57) {
              return _receiptProof.apply(this, arguments);
            }

            return receiptProof;
          }(),
          packetCommitment: function () {
            var _packetCommitment2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(portId, channelId, sequence, proofHeight) {
              var key, proven, commitment, proof;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      key = encoding_1.toAscii("commitments/ports/".concat(portId, "/channels/").concat(channelId, "/sequences/").concat(sequence.toNumber()));
                      _context32.next = 3;
                      return base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());

                    case 3:
                      proven = _context32.sent;
                      commitment = proven.value;
                      proof = convertProofsToIcs23(proven.proof);
                      return _context32.abrupt("return", {
                        commitment: commitment,
                        proof: proof,
                        proofHeight: proofHeight
                      });

                    case 7:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32);
            }));

            function packetCommitment(_x58, _x59, _x60, _x61) {
              return _packetCommitment2.apply(this, arguments);
            }

            return packetCommitment;
          }(),
          packetAcknowledgement: function () {
            var _packetAcknowledgement2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(portId, channelId, sequence, proofHeight) {
              var key, proven, acknowledgement, proof;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      key = encoding_1.toAscii("acks/ports/".concat(portId, "/channels/").concat(channelId, "/sequences/").concat(sequence));
                      _context33.next = 3;
                      return base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());

                    case 3:
                      proven = _context33.sent;
                      acknowledgement = proven.value;
                      proof = convertProofsToIcs23(proven.proof);
                      return _context33.abrupt("return", {
                        acknowledgement: acknowledgement,
                        proof: proof,
                        proofHeight: proofHeight
                      });

                    case 7:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33);
            }));

            function packetAcknowledgement(_x62, _x63, _x64, _x65) {
              return _packetAcknowledgement2.apply(this, arguments);
            }

            return packetAcknowledgement;
          }(),
          nextSequenceReceive: function () {
            var _nextSequenceReceive2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(portId, channelId, proofHeight) {
              var key, proven, nextSequenceReceive, proof;
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      key = encoding_1.toAscii("nextSequenceRecv/ports/".concat(portId, "/channels/").concat(channelId));
                      _context34.next = 3;
                      return base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());

                    case 3:
                      proven = _context34.sent;
                      nextSequenceReceive = long_1["default"].fromBytesBE(_toConsumableArray(proven.value));
                      proof = convertProofsToIcs23(proven.proof);
                      return _context34.abrupt("return", {
                        nextSequenceReceive: nextSequenceReceive,
                        proof: proof,
                        proofHeight: proofHeight
                      });

                    case 7:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34);
            }));

            function nextSequenceReceive(_x66, _x67, _x68) {
              return _nextSequenceReceive2.apply(this, arguments);
            }

            return nextSequenceReceive;
          }()
        },
        client: {
          state: function () {
            var _state = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(clientId, proofHeight) {
              var key, proven, clientState, proof;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      key = "clients/".concat(clientId, "/clientState");
                      _context35.next = 3;
                      return base.queryRawProof('ibc', encoding_1.toAscii(key), proofHeight.revisionHeight.toNumber());

                    case 3:
                      proven = _context35.sent;
                      clientState = any_1.Any.decode(proven.value);
                      proof = convertProofsToIcs23(proven.proof);
                      return _context35.abrupt("return", {
                        clientState: clientState,
                        proof: proof,
                        proofHeight: proofHeight
                      });

                    case 7:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35);
            }));

            function state(_x69, _x70) {
              return _state.apply(this, arguments);
            }

            return state;
          }(),
          consensusState: function () {
            var _consensusState3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(clientId, consensusHeight, proofHeight) {
              var height, key, proven, consensusState, proof;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      height = heightQueryString(consensusHeight);
                      key = "clients/".concat(clientId, "/consensusStates/").concat(height);
                      _context36.next = 4;
                      return base.queryRawProof('ibc', encoding_1.toAscii(key), proofHeight.revisionHeight.toNumber());

                    case 4:
                      proven = _context36.sent;
                      consensusState = any_1.Any.decode(proven.value);
                      proof = convertProofsToIcs23(proven.proof);
                      return _context36.abrupt("return", {
                        consensusState: consensusState,
                        proof: proof,
                        proofHeight: proofHeight
                      });

                    case 8:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36);
            }));

            function consensusState(_x71, _x72, _x73) {
              return _consensusState3.apply(this, arguments);
            }

            return consensusState;
          }()
        },
        connection: {
          connection: function () {
            var _connection2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(connectionId, proofHeight) {
              var key, proven, connection, proof;
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      key = "connections/".concat(connectionId);
                      _context37.next = 3;
                      return base.queryRawProof('ibc', encoding_1.toAscii(key), proofHeight.revisionHeight.toNumber());

                    case 3:
                      proven = _context37.sent;
                      connection = connection_1.ConnectionEnd.decode(proven.value);
                      proof = convertProofsToIcs23(proven.proof);
                      return _context37.abrupt("return", {
                        connection: connection,
                        proof: proof,
                        proofHeight: proofHeight
                      });

                    case 7:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37);
            }));

            function connection(_x74, _x75) {
              return _connection2.apply(this, arguments);
            }

            return connection;
          }()
        }
      }
    }
  };
}

exports.setupIbcExtension = setupIbcExtension;

function convertProofsToIcs23(ops) {
  var proofs = ops.ops.map(function (op) {
    return proofs_1.CommitmentProof.decode(op.data);
  });
  var resp = commitment_1.MerkleProof.fromPartial({
    proofs: proofs
  });
  return commitment_1.MerkleProof.encode(resp).finish();
}
//# sourceMappingURL=ibc.js.map