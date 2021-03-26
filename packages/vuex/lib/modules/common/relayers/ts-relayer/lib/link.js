"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.otherSide = void 0;

var utils_1 = require("@cosmjs/utils");

var channel_1 = require("../codec/ibc/core/channel/v1/channel");

var endpoint_1 = require("./endpoint");

var ibcclient_1 = require("./ibcclient");

var logger_1 = require("./logger");

var utils_2 = require("./utils");

function otherSide(side) {
  if (side === 'A') {
    return 'B';
  } else {
    return 'A';
  }
}

exports.otherSide = otherSide; // measured in seconds
// Note: client parameter is checked against the actual keeper - must use real values from genesis.json
// TODO: make this more adaptable for chains (query from staking?)

var genesisUnbondingTime = 1814400;
/**
 * Link represents a Connection between a pair of blockchains (Nodes).
 * An initialized Link requires a both sides to have a Client for the remote side
 * as well as an established Connection using those Clients. Channels can be added
 * and removed to a Link. There are constructors to find/create the basic requirements
 * if you don't know the client/connection IDs a priori.
 */

var Link = /*#__PURE__*/function () {
  // you can use this if you already have the info out of bounds
  // FIXME: check the validity of that data?
  function Link(endA, endB, logger) {
    _classCallCheck(this, Link);

    this.endA = endA;
    this.endB = endB;
    this.logger = logger !== null && logger !== void 0 ? logger : new logger_1.NoopLogger();
    this.chainA = endA.client.chainId;
    this.chainB = endB.client.chainId;
  }

  _createClass(Link, [{
    key: "chain",
    value: function chain(side) {
      if (side === 'A') {
        return this.chainA;
      } else {
        return this.chainB;
      }
    }
  }, {
    key: "otherChain",
    value: function otherChain(side) {
      if (side === 'A') {
        return this.chainB;
      } else {
        return this.chainA;
      }
    }
    /**
     * findConnection attempts to reuse an existing Client/Connection.
     * If none exists, then it returns an error.
     *
     * @param nodeA
     * @param nodeB
     */

  }, {
    key: "assertHeadersMatchConsensusState",
    value:
    /**
     * we do this assert inside createWithExistingConnections, but it could be a useful check
     * for submitting double-sign evidence later
     *
     * @param proofSide the side holding the consensus proof, we check the header from the other side
     * @param height the height of the consensus state and header we wish to compare
     */
    function () {
      var _assertHeadersMatchConsensusState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(proofSide, clientId, height) {
        var _a, _this$getEnds, src, dest, _yield$Promise$all, _yield$Promise$all2, consensusState, header, hash;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$getEnds = this.getEnds(proofSide), src = _this$getEnds.src, dest = _this$getEnds.dest; // Check headers match consensus state (at least validators)

                _context.next = 3;
                return Promise.all([src.client.query.ibc.client.consensusStateTm(clientId, height), dest.client.header(utils_2.toIntHeight(height))]);

              case 3:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                consensusState = _yield$Promise$all2[0];
                header = _yield$Promise$all2[1];

                if (utils_1.arrayContentEquals(consensusState.nextValidatorsHash, header.nextValidatorsHash)) {
                  _context.next = 9;
                  break;
                }

                throw new Error("NextValidatorHash doesn't match ConsensusState.");

              case 9:
                // ensure the committed apphash matches the actual node we have
                hash = (_a = consensusState.root) === null || _a === void 0 ? void 0 : _a.hash;

                if (hash) {
                  _context.next = 12;
                  break;
                }

                throw new Error("ConsensusState.root.hash missing.");

              case 12:
                if (utils_1.arrayContentEquals(hash, header.appHash)) {
                  _context.next = 14;
                  break;
                }

                throw new Error("AppHash doesn't match ConsensusState.");

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function assertHeadersMatchConsensusState(_x, _x2, _x3) {
        return _assertHeadersMatchConsensusState.apply(this, arguments);
      }

      return assertHeadersMatchConsensusState;
    }()
    /**
     * createConnection will always create a new pair of clients and a Connection between the
     * two sides
     *
     * @param nodeA
     * @param nodeB
     */

  }, {
    key: "updateClient",
    value:
    /**
     * Writes the latest header from the sender chain to the other endpoint
     *
     * @param sender Which side we get the header/commit from
     * @returns header height (from sender) that is now known on dest
     *
     * Relayer binary should call this from a heartbeat which checks if needed and updates.
     * Just needs trusting period on both side
     */
    function () {
      var _updateClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sender) {
        var _this$getEnds2, src, dest, height;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.logger.info("Update Client on ".concat(this.otherChain(sender)));
                _this$getEnds2 = this.getEnds(sender), src = _this$getEnds2.src, dest = _this$getEnds2.dest;
                _context2.next = 4;
                return dest.client.doUpdateClient(dest.clientID, src.client);

              case 4:
                height = _context2.sent;
                return _context2.abrupt("return", height);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateClient(_x4) {
        return _updateClient.apply(this, arguments);
      }

      return updateClient;
    }()
    /**
     * Checks if the last proven header on the destination is older than maxAge,
     * and if so, update the client. Returns the new client height if updated,
     * or null if no update needed
     *
     * @param sender
     * @param maxAge
     */

  }, {
    key: "updateClientIfStale",
    value: function () {
      var _updateClientIfStale = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sender, maxAge) {
        var _a, _b, _this$getEnds3, src, dest, knownHeader, currentHeader, knownSeconds, curSeconds;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.logger.verbose("Checking if ".concat(this.otherChain(sender), " has recent header of ").concat(this.chain(sender)));
                _this$getEnds3 = this.getEnds(sender), src = _this$getEnds3.src, dest = _this$getEnds3.dest;
                _context3.next = 4;
                return dest.client.query.ibc.client.consensusStateTm(dest.clientID);

              case 4:
                knownHeader = _context3.sent;
                _context3.next = 7;
                return src.client.latestHeader();

              case 7:
                currentHeader = _context3.sent;
                // quit now if we don't need to update
                knownSeconds = (_b = (_a = knownHeader.timestamp) === null || _a === void 0 ? void 0 : _a.seconds) === null || _b === void 0 ? void 0 : _b.toNumber();

                if (!knownSeconds) {
                  _context3.next = 13;
                  break;
                }

                curSeconds = utils_2.timestampFromDateNanos(currentHeader.time).seconds.toNumber();

                if (!(curSeconds - knownSeconds < maxAge)) {
                  _context3.next = 13;
                  break;
                }

                return _context3.abrupt("return", null);

              case 13:
                return _context3.abrupt("return", this.updateClient(sender));

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateClientIfStale(_x5, _x6) {
        return _updateClientIfStale.apply(this, arguments);
      }

      return updateClientIfStale;
    }()
    /**
     * Ensures the dest has a proof of at least minHeight from source.
     * Will not execute any tx if not needed.
     * Will wait a block if needed until the header is available.
     *
     * Returns the latest header height now available on dest
     */

  }, {
    key: "updateClientToHeight",
    value: function () {
      var _updateClientToHeight = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(source, minHeight) {
        var _a, _b, _c, _this$getEnds4, src, dest, client, knownHeight, curHeight;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.logger.info("Check whether client on ".concat(this.otherChain(source), " >= height ").concat(minHeight));
                _this$getEnds4 = this.getEnds(source), src = _this$getEnds4.src, dest = _this$getEnds4.dest;
                _context4.next = 4;
                return dest.client.query.ibc.client.stateTm(dest.clientID);

              case 4:
                client = _context4.sent;
                // TODO: revisit where revision number comes from - this must be the number from the source chain
                knownHeight = (_c = (_b = (_a = client.latestHeight) === null || _a === void 0 ? void 0 : _a.revisionHeight) === null || _b === void 0 ? void 0 : _b.toNumber()) !== null && _c !== void 0 ? _c : 0;

                if (!(knownHeight >= minHeight && client.latestHeight !== undefined)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", client.latestHeight);

              case 8:
                _context4.next = 10;
                return src.client.latestHeader();

              case 10:
                curHeight = _context4.sent.height;

                if (!(curHeight < minHeight)) {
                  _context4.next = 14;
                  break;
                }

                _context4.next = 14;
                return src.client.waitOneBlock();

              case 14:
                return _context4.abrupt("return", this.updateClient(source));

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateClientToHeight(_x7, _x8) {
        return _updateClientToHeight.apply(this, arguments);
      }

      return updateClientToHeight;
    }()
  }, {
    key: "createChannel",
    value: function () {
      var _createChannel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(sender, srcPort, destPort, ordering, version) {
        var _this$getEnds5, src, dest, _yield$src$client$cha, channelIdSrc, proof, _yield$dest$client$ch, channelIdDest, proofAck, proofConfirm;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.logger.info("Create channel with sender ".concat(this.chain(sender), ": ").concat(srcPort, " => ").concat(destPort));
                _this$getEnds5 = this.getEnds(sender), src = _this$getEnds5.src, dest = _this$getEnds5.dest; // init on src

                _context5.next = 4;
                return src.client.channelOpenInit(srcPort, destPort, ordering, src.connectionID, version);

              case 4:
                _yield$src$client$cha = _context5.sent;
                channelIdSrc = _yield$src$client$cha.channelId;
                _context5.next = 8;
                return ibcclient_1.prepareChannelHandshake(src.client, dest.client, dest.clientID, srcPort, channelIdSrc);

              case 8:
                proof = _context5.sent;
                _context5.next = 11;
                return dest.client.channelOpenTry(destPort, {
                  portId: srcPort,
                  channelId: channelIdSrc
                }, ordering, dest.connectionID, version, version, proof);

              case 11:
                _yield$dest$client$ch = _context5.sent;
                channelIdDest = _yield$dest$client$ch.channelId;
                _context5.next = 15;
                return ibcclient_1.prepareChannelHandshake(dest.client, src.client, src.clientID, destPort, channelIdDest);

              case 15:
                proofAck = _context5.sent;
                _context5.next = 18;
                return src.client.channelOpenAck(srcPort, channelIdSrc, channelIdDest, version, proofAck);

              case 18:
                _context5.next = 20;
                return ibcclient_1.prepareChannelHandshake(src.client, dest.client, dest.clientID, srcPort, channelIdSrc);

              case 20:
                proofConfirm = _context5.sent;
                _context5.next = 23;
                return dest.client.channelOpenConfirm(destPort, channelIdDest, proofConfirm);

              case 23:
                return _context5.abrupt("return", {
                  src: {
                    portId: srcPort,
                    channelId: channelIdSrc
                  },
                  dest: {
                    portId: destPort,
                    channelId: channelIdDest
                  }
                });

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createChannel(_x9, _x10, _x11, _x12, _x13) {
        return _createChannel.apply(this, arguments);
      }

      return createChannel;
    }()
    /**
     * This will check both sides for pending packets and relay them.
     * It will then relay all acks (previous and generated by the just-submitted packets).
     * If pending packets have timed out, it will submit a timeout instead of attempting to relay them.
     *
     * Returns the most recent heights it relay, which can be used as a start for the next round
     */

  }, {
    key: "checkAndRelayPacketsAndAcks",
    value: function () {
      var _checkAndRelayPacketsAndAcks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(relayFrom) {
        var timedoutThresholdBlocks,
            timedoutThresholdSeconds,
            _yield$Promise$all3,
            _yield$Promise$all4,
            packetHeightA,
            packetHeightB,
            packetsA,
            packetsB,
            cutoffHeightA,
            cutoffTimeA,
            _utils_2$splitPending,
            submitA,
            timeoutA,
            cutoffHeightB,
            cutoffTimeB,
            _utils_2$splitPending2,
            submitB,
            timeoutB,
            _yield$Promise$all5,
            _yield$Promise$all6,
            ackHeightA,
            ackHeightB,
            acksA,
            acksB,
            nextRelay,
            _args6 = arguments;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                timedoutThresholdBlocks = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 0;
                timedoutThresholdSeconds = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : 0;
                _context6.next = 4;
                return Promise.all([this.endA.client.currentHeight(), this.endB.client.currentHeight(), this.getPendingPackets('A', {
                  minHeight: relayFrom.packetHeightA
                }), this.getPendingPackets('B', {
                  minHeight: relayFrom.packetHeightB
                })]);

              case 4:
                _yield$Promise$all3 = _context6.sent;
                _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 4);
                packetHeightA = _yield$Promise$all4[0];
                packetHeightB = _yield$Promise$all4[1];
                packetsA = _yield$Promise$all4[2];
                packetsB = _yield$Promise$all4[3];
                _context6.next = 12;
                return this.endB.client.timeoutHeight(timedoutThresholdBlocks);

              case 12:
                cutoffHeightA = _context6.sent;
                _context6.t0 = utils_2;
                _context6.next = 16;
                return this.endB.client.currentTime();

              case 16:
                _context6.t1 = _context6.sent;
                _context6.t2 = _context6.t0.secondsFromDateNanos.call(_context6.t0, _context6.t1);
                _context6.t3 = timedoutThresholdSeconds;
                cutoffTimeA = _context6.t2 + _context6.t3;
                _utils_2$splitPending = utils_2.splitPendingPackets(cutoffHeightA, cutoffTimeA, packetsA), submitA = _utils_2$splitPending.toSubmit, timeoutA = _utils_2$splitPending.toTimeout;
                _context6.next = 23;
                return this.endA.client.timeoutHeight(timedoutThresholdBlocks);

              case 23:
                cutoffHeightB = _context6.sent;
                _context6.t4 = utils_2;
                _context6.next = 27;
                return this.endA.client.currentTime();

              case 27:
                _context6.t5 = _context6.sent;
                _context6.t6 = _context6.t4.secondsFromDateNanos.call(_context6.t4, _context6.t5);
                _context6.t7 = timedoutThresholdSeconds;
                cutoffTimeB = _context6.t6 + _context6.t7;
                _utils_2$splitPending2 = utils_2.splitPendingPackets(cutoffHeightB, cutoffTimeB, packetsB), submitB = _utils_2$splitPending2.toSubmit, timeoutB = _utils_2$splitPending2.toTimeout; // FIXME: use the returned acks first? Then query for others?

                _context6.next = 34;
                return Promise.all([this.relayPackets('A', submitA), this.relayPackets('B', submitB)]);

              case 34:
                _context6.next = 36;
                return Promise.all([this.endA.client.waitOneBlock(), this.endB.client.waitOneBlock()]);

              case 36:
                _context6.next = 38;
                return Promise.all([this.endA.client.currentHeight(), this.endB.client.currentHeight(), this.getPendingAcks('A', {
                  minHeight: relayFrom.ackHeightA
                }), this.getPendingAcks('B', {
                  minHeight: relayFrom.ackHeightB
                })]);

              case 38:
                _yield$Promise$all5 = _context6.sent;
                _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 4);
                ackHeightA = _yield$Promise$all6[0];
                ackHeightB = _yield$Promise$all6[1];
                acksA = _yield$Promise$all6[2];
                acksB = _yield$Promise$all6[3];
                _context6.next = 46;
                return Promise.all([this.relayAcks('A', acksA), this.relayAcks('B', acksB)]);

              case 46:
                _context6.next = 48;
                return Promise.all([this.timeoutPackets('A', timeoutA), this.timeoutPackets('B', timeoutB)]);

              case 48:
                nextRelay = {
                  packetHeightA: packetHeightA,
                  packetHeightB: packetHeightB,
                  ackHeightA: ackHeightA,
                  ackHeightB: ackHeightB
                };
                this.logger.verbose('next heights to relay', nextRelay);
                return _context6.abrupt("return", nextRelay);

              case 51:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkAndRelayPacketsAndAcks(_x14) {
        return _checkAndRelayPacketsAndAcks.apply(this, arguments);
      }

      return checkAndRelayPacketsAndAcks;
    }()
  }, {
    key: "getPendingPackets",
    value: function () {
      var _getPendingPackets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(source) {
        var opts,
            _this$getEnds6,
            src,
            dest,
            allPackets,
            toFilter,
            query,
            unreceived,
            unreceivedPackets,
            valid,
            _args9 = arguments;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                opts = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
                this.logger.verbose("Get pending packets on ".concat(this.chain(source)));
                _this$getEnds6 = this.getEnds(source), src = _this$getEnds6.src, dest = _this$getEnds6.dest;
                _context9.next = 5;
                return src.querySentPackets(opts);

              case 5:
                allPackets = _context9.sent;
                toFilter = allPackets.map(function (_ref) {
                  var packet = _ref.packet;
                  return packet;
                });

                query = /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(port, channel, sequences) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return dest.client.query.ibc.channel.unreceivedPackets(port, channel, sequences);

                          case 2:
                            res = _context7.sent;
                            return _context7.abrupt("return", res.sequences.map(function (seq) {
                              return seq.toNumber();
                            }));

                          case 4:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function query(_x16, _x17, _x18) {
                    return _ref2.apply(this, arguments);
                  };
                }(); // This gets the subset of packets that were already processed on the receiving chain


                _context9.next = 10;
                return this.filterUnreceived(toFilter, query, packetId);

              case 10:
                unreceived = _context9.sent;
                unreceivedPackets = allPackets.filter(function (_ref3) {
                  var packet = _ref3.packet;
                  return unreceived[packetId(packet)].has(packet.sequence.toNumber());
                }); // However, some of these may have already been submitted as timeouts on the source chain. Check and filter

                _context9.next = 14;
                return Promise.all(unreceivedPackets.map( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(packet) {
                    var _packet$packet, sourcePort, sourceChannel, sequence;

                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _packet$packet = packet.packet, sourcePort = _packet$packet.sourcePort, sourceChannel = _packet$packet.sourceChannel, sequence = _packet$packet.sequence;
                            _context8.prev = 1;
                            _context8.next = 4;
                            return src.client.query.ibc.channel.packetCommitment(sourcePort, sourceChannel, sequence);

                          case 4:
                            return _context8.abrupt("return", packet);

                          case 7:
                            _context8.prev = 7;
                            _context8.t0 = _context8["catch"](1);
                            return _context8.abrupt("return", undefined);

                          case 10:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8, null, [[1, 7]]);
                  }));

                  return function (_x19) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 14:
                valid = _context9.sent;
                return _context9.abrupt("return", valid.filter(function (x) {
                  return x !== undefined;
                }));

              case 16:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getPendingPackets(_x15) {
        return _getPendingPackets.apply(this, arguments);
      }

      return getPendingPackets;
    }()
  }, {
    key: "getPendingAcks",
    value: function () {
      var _getPendingAcks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(source) {
        var opts,
            _this$getEnds7,
            src,
            dest,
            allAcks,
            toFilter,
            query,
            unreceived,
            _args11 = arguments;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                opts = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                this.logger.verbose("Get pending acks on ".concat(this.chain(source)));
                _this$getEnds7 = this.getEnds(source), src = _this$getEnds7.src, dest = _this$getEnds7.dest;
                _context11.next = 5;
                return src.queryWrittenAcks(opts);

              case 5:
                allAcks = _context11.sent;
                toFilter = allAcks.map(function (_ref5) {
                  var originalPacket = _ref5.originalPacket;
                  return originalPacket;
                });

                query = /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(port, channel, sequences) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            _context10.next = 2;
                            return dest.client.query.ibc.channel.unreceivedAcks(port, channel, sequences);

                          case 2:
                            res = _context10.sent;
                            return _context10.abrupt("return", res.sequences.map(function (seq) {
                              return seq.toNumber();
                            }));

                          case 4:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10);
                  }));

                  return function query(_x21, _x22, _x23) {
                    return _ref6.apply(this, arguments);
                  };
                }();

                _context11.next = 10;
                return this.filterUnreceived(toFilter, query, ackId);

              case 10:
                unreceived = _context11.sent;
                return _context11.abrupt("return", allAcks.filter(function (_ref7) {
                  var packet = _ref7.originalPacket;
                  return unreceived[ackId(packet)].has(packet.sequence.toNumber());
                }));

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getPendingAcks(_x20) {
        return _getPendingAcks.apply(this, arguments);
      }

      return getPendingAcks;
    }()
  }, {
    key: "filterUnreceived",
    value: function () {
      var _filterUnreceived = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(packets, unreceivedQuery, idFunc) {
        var packetsPerDestination, unreceivedResponses, unreceived;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!(packets.length === 0)) {
                  _context13.next = 2;
                  break;
                }

                return _context13.abrupt("return", {});

              case 2:
                packetsPerDestination = packets.reduce(function (sorted, packet) {
                  var _a;

                  var key = idFunc(packet);
                  return Object.assign(Object.assign({}, sorted), _defineProperty({}, key, [].concat(_toConsumableArray((_a = sorted[key]) !== null && _a !== void 0 ? _a : []), [packet.sequence.toNumber()])));
                }, {});
                _context13.next = 5;
                return Promise.all(Object.entries(packetsPerDestination).map( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(_ref8) {
                    var _ref10, destination, sequences, _destination$split, _destination$split2, port, channel, notfound;

                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            _ref10 = _slicedToArray(_ref8, 2), destination = _ref10[0], sequences = _ref10[1];
                            _destination$split = destination.split(idDelim), _destination$split2 = _slicedToArray(_destination$split, 2), port = _destination$split2[0], channel = _destination$split2[1];
                            _context12.next = 4;
                            return unreceivedQuery(port, channel, sequences);

                          case 4:
                            notfound = _context12.sent;
                            return _context12.abrupt("return", {
                              key: destination,
                              sequences: notfound
                            });

                          case 6:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12);
                  }));

                  return function (_x27) {
                    return _ref9.apply(this, arguments);
                  };
                }()));

              case 5:
                unreceivedResponses = _context13.sent;
                unreceived = unreceivedResponses.reduce(function (nested, _ref11) {
                  var key = _ref11.key,
                      sequences = _ref11.sequences;
                  return Object.assign(Object.assign({}, nested), _defineProperty({}, key, new Set(sequences)));
                }, {});
                return _context13.abrupt("return", unreceived);

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function filterUnreceived(_x24, _x25, _x26) {
        return _filterUnreceived.apply(this, arguments);
      }

      return filterUnreceived;
    }() // Returns the last height that this side knows of the other blockchain

  }, {
    key: "lastKnownHeader",
    value: function () {
      var _lastKnownHeader = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(side) {
        var _a, _b, _c, _this$getEnds8, src, client;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this.logger.verbose("Get last known header on ".concat(this.chain(side)));
                _this$getEnds8 = this.getEnds(side), src = _this$getEnds8.src;
                _context14.next = 4;
                return src.client.query.ibc.client.stateTm(src.clientID);

              case 4:
                client = _context14.sent;
                return _context14.abrupt("return", (_c = (_b = (_a = client.latestHeight) === null || _a === void 0 ? void 0 : _a.revisionHeight) === null || _b === void 0 ? void 0 : _b.toNumber()) !== null && _c !== void 0 ? _c : 0);

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function lastKnownHeader(_x28) {
        return _lastKnownHeader.apply(this, arguments);
      }

      return lastKnownHeader;
    }() // this will update the client if needed and relay all provided packets from src -> dest
    // if packets are all older than the last consensusHeight, then we don't update the client.
    //
    // Returns all the acks that are associated with the just submitted packets

  }, {
    key: "relayPackets",
    value: function () {
      var _relayPackets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(source, packets) {
        var _this$getEnds9, src, dest, neededHeight, headerHeight, submit, proofs, _yield$dest$client$re, logs, height, acks;

        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                this.logger.info("Relay ".concat(packets.length, " packets from ").concat(this.chain(source), " => ").concat(this.otherChain(source)));

                if (!(packets.length === 0)) {
                  _context15.next = 3;
                  break;
                }

                return _context15.abrupt("return", []);

              case 3:
                _this$getEnds9 = this.getEnds(source), src = _this$getEnds9.src, dest = _this$getEnds9.dest; // check if we need to update client at all

                neededHeight = Math.max.apply(Math, _toConsumableArray(packets.map(function (x) {
                  return x.height;
                }))) + 1;
                _context15.next = 7;
                return this.updateClientToHeight(source, neededHeight);

              case 7:
                headerHeight = _context15.sent;
                submit = packets.map(function (_ref12) {
                  var packet = _ref12.packet;
                  return packet;
                });
                _context15.next = 11;
                return Promise.all(submit.map(function (packet) {
                  return src.client.getPacketProof(packet, headerHeight);
                }));

              case 11:
                proofs = _context15.sent;
                _context15.next = 14;
                return dest.client.receivePackets(submit, proofs, headerHeight);

              case 14:
                _yield$dest$client$re = _context15.sent;
                logs = _yield$dest$client$re.logs;
                height = _yield$dest$client$re.height;
                acks = utils_2.parseAcksFromLogs(logs);
                return _context15.abrupt("return", acks.map(function (ack) {
                  return Object.assign({
                    height: height
                  }, ack);
                }));

              case 19:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function relayPackets(_x29, _x30) {
        return _relayPackets.apply(this, arguments);
      }

      return relayPackets;
    }() // this will update the client if needed and relay all provided acks from src -> dest
    // (yes, dest is where the packet was sent, but the ack was written on src).
    // if acks are all older than the last consensusHeight, then we don't update the client.
    //
    // Returns the block height the acks were included in, or null if no acks sent

  }, {
    key: "relayAcks",
    value: function () {
      var _relayAcks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(source, acks) {
        var _this$getEnds10, src, dest, neededHeight, headerHeight, proofs, _yield$dest$client$ac, height;

        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this.logger.info("Relay ".concat(acks.length, " acks from ").concat(this.chain(source), " => ").concat(this.otherChain(source)));

                if (!(acks.length === 0)) {
                  _context16.next = 3;
                  break;
                }

                return _context16.abrupt("return", null);

              case 3:
                _this$getEnds10 = this.getEnds(source), src = _this$getEnds10.src, dest = _this$getEnds10.dest; // check if we need to update client at all

                neededHeight = Math.max.apply(Math, _toConsumableArray(acks.map(function (x) {
                  return x.height;
                }))) + 1;
                _context16.next = 7;
                return this.updateClientToHeight(source, neededHeight);

              case 7:
                headerHeight = _context16.sent;
                _context16.next = 10;
                return Promise.all(acks.map(function (ack) {
                  return src.client.getAckProof(ack, headerHeight);
                }));

              case 10:
                proofs = _context16.sent;
                _context16.next = 13;
                return dest.client.acknowledgePackets(acks, proofs, headerHeight);

              case 13:
                _yield$dest$client$ac = _context16.sent;
                height = _yield$dest$client$ac.height;
                return _context16.abrupt("return", height);

              case 16:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function relayAcks(_x31, _x32) {
        return _relayAcks.apply(this, arguments);
      }

      return relayAcks;
    }() // Source: the side that originally sent the packet
    // We need to relay a proof from dest -> source

  }, {
    key: "timeoutPackets",
    value: function () {
      var _timeoutPackets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(source, packets) {
        var _this$getEnds11, src, dest, destSide, headerHeight, rawPackets, proofAndSeqs, proofs, seqs, _yield$src$client$tim, height;

        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.logger.info("Timeout ".concat(packets.length, " packets sent from ").concat(this.chain(source)));

                if (!(packets.length === 0)) {
                  _context18.next = 3;
                  break;
                }

                return _context18.abrupt("return", null);

              case 3:
                _this$getEnds11 = this.getEnds(source), src = _this$getEnds11.src, dest = _this$getEnds11.dest;
                destSide = otherSide(source); // We need a header that is after the timeout, not after the packet was committed
                // This can get complex with timeout timestamps. Let's just update to latest

                _context18.next = 7;
                return dest.client.waitOneBlock();

              case 7:
                _context18.next = 9;
                return this.updateClient(destSide);

              case 9:
                headerHeight = _context18.sent;
                rawPackets = packets.map(function (_ref13) {
                  var packet = _ref13.packet;
                  return packet;
                });
                _context18.next = 13;
                return Promise.all(rawPackets.map( /*#__PURE__*/function () {
                  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(packet) {
                    var fakeAck, _yield$dest$client$qu, sequence, proof;

                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                      while (1) {
                        switch (_context17.prev = _context17.next) {
                          case 0:
                            fakeAck = {
                              originalPacket: packet,
                              acknowledgement: new Uint8Array()
                            };
                            _context17.next = 3;
                            return dest.client.query.ibc.channel.nextSequenceReceive(packet.destinationPort, packet.destinationChannel);

                          case 3:
                            _yield$dest$client$qu = _context17.sent;
                            sequence = _yield$dest$client$qu.nextSequenceReceive;
                            _context17.next = 7;
                            return dest.client.getTimeoutProof(fakeAck, headerHeight);

                          case 7:
                            proof = _context17.sent;
                            return _context17.abrupt("return", {
                              proof: proof,
                              sequence: sequence
                            });

                          case 9:
                          case "end":
                            return _context17.stop();
                        }
                      }
                    }, _callee17);
                  }));

                  return function (_x35) {
                    return _ref14.apply(this, arguments);
                  };
                }()));

              case 13:
                proofAndSeqs = _context18.sent;
                proofs = proofAndSeqs.map(function (_ref15) {
                  var proof = _ref15.proof;
                  return proof;
                });
                seqs = proofAndSeqs.map(function (_ref16) {
                  var sequence = _ref16.sequence;
                  return sequence;
                });
                _context18.next = 18;
                return src.client.timeoutPackets(rawPackets, proofs, seqs, headerHeight);

              case 18:
                _yield$src$client$tim = _context18.sent;
                height = _yield$src$client$tim.height;
                return _context18.abrupt("return", height);

              case 21:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function timeoutPackets(_x33, _x34) {
        return _timeoutPackets.apply(this, arguments);
      }

      return timeoutPackets;
    }()
  }, {
    key: "getEnds",
    value: function getEnds(src) {
      if (src === 'A') {
        return {
          src: this.endA,
          dest: this.endB
        };
      } else {
        return {
          src: this.endB,
          dest: this.endA
        };
      }
    }
  }], [{
    key: "createWithExistingConnections",
    value: function () {
      var _createWithExistingConnections = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(nodeA, nodeB, connA, connB, logger) {
        var _ref17, chainA, chainB, _yield$Promise$all7, _yield$Promise$all8, connectionA, connectionB, _ref18, clientIdA, clientIdB, _yield$Promise$all9, _yield$Promise$all10, clientStateA, clientStateB, endA, endB, link;

        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _ref17 = [nodeA.chainId, nodeB.chainId], chainA = _ref17[0], chainB = _ref17[1];
                _context19.next = 3;
                return Promise.all([nodeA.query.ibc.connection.connection(connA), nodeB.query.ibc.connection.connection(connB)]);

              case 3:
                _yield$Promise$all7 = _context19.sent;
                _yield$Promise$all8 = _slicedToArray(_yield$Promise$all7, 2);
                connectionA = _yield$Promise$all8[0].connection;
                connectionB = _yield$Promise$all8[1].connection;

                if (connectionA) {
                  _context19.next = 9;
                  break;
                }

                throw new Error("[".concat(chainA, "] Connection not found for ID ").concat(connA));

              case 9:
                if (connectionB) {
                  _context19.next = 11;
                  break;
                }

                throw new Error("[".concat(chainB, "] Connection not found for ID ").concat(connB));

              case 11:
                if (connectionA.counterparty) {
                  _context19.next = 13;
                  break;
                }

                throw new Error("[".concat(chainA, "] Counterparty not found for connection with ID ").concat(connA));

              case 13:
                if (connectionB.counterparty) {
                  _context19.next = 15;
                  break;
                }

                throw new Error("[".concat(chainB, "] Counterparty not found for connection with ID ").concat(connB));

              case 15:
                if (!(connectionA.state != channel_1.State.STATE_OPEN)) {
                  _context19.next = 17;
                  break;
                }

                throw new Error("Connection on ".concat(chainA, " must be in state open, it has state ").concat(connectionA.state));

              case 17:
                if (!(connectionB.state != channel_1.State.STATE_OPEN)) {
                  _context19.next = 19;
                  break;
                }

                throw new Error("Connection on ".concat(chainB, " must be in state open, it has state ").concat(connectionB.state));

              case 19:
                _ref18 = [connectionA.clientId, connectionB.clientId], clientIdA = _ref18[0], clientIdB = _ref18[1];

                if (!(clientIdA !== connectionB.counterparty.clientId)) {
                  _context19.next = 22;
                  break;
                }

                throw new Error("Client ID ".concat(connectionA.clientId, " for connection with ID ").concat(connA, " does not match counterparty client ID ").concat(connectionB.counterparty.clientId, " for connection with ID ").concat(connB));

              case 22:
                if (!(clientIdB !== connectionA.counterparty.clientId)) {
                  _context19.next = 24;
                  break;
                }

                throw new Error("Client ID ".concat(connectionB.clientId, " for connection with ID ").concat(connB, " does not match counterparty client ID ").concat(connectionA.counterparty.clientId, " for connection with ID ").concat(connA));

              case 24:
                _context19.next = 26;
                return Promise.all([nodeA.query.ibc.client.stateTm(clientIdA), nodeB.query.ibc.client.stateTm(clientIdB)]);

              case 26:
                _yield$Promise$all9 = _context19.sent;
                _yield$Promise$all10 = _slicedToArray(_yield$Promise$all9, 2);
                clientStateA = _yield$Promise$all10[0];
                clientStateB = _yield$Promise$all10[1];

                if (!(nodeA.chainId !== clientStateB.chainId)) {
                  _context19.next = 32;
                  break;
                }

                throw new Error("Chain ID ".concat(nodeA.chainId, " for connection with ID ").concat(connA, " does not match remote chain ID ").concat(clientStateA.chainId));

              case 32:
                if (!(nodeB.chainId !== clientStateA.chainId)) {
                  _context19.next = 34;
                  break;
                }

                throw new Error("Chain ID ".concat(nodeB.chainId, " for connection with ID ").concat(connB, " does not match remote chain ID ").concat(clientStateB.chainId));

              case 34:
                endA = new endpoint_1.Endpoint(nodeA, clientIdA, connA);
                endB = new endpoint_1.Endpoint(nodeB, clientIdB, connB);
                link = new Link(endA, endB, logger);
                _context19.next = 39;
                return Promise.all([link.assertHeadersMatchConsensusState('A', clientIdA, clientStateA.latestHeight), link.assertHeadersMatchConsensusState('B', clientIdB, clientStateB.latestHeight)]);

              case 39:
                return _context19.abrupt("return", link);

              case 40:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));

      function createWithExistingConnections(_x36, _x37, _x38, _x39, _x40) {
        return _createWithExistingConnections.apply(this, arguments);
      }

      return createWithExistingConnections;
    }()
  }, {
    key: "createWithNewConnections",
    value: function () {
      var _createWithNewConnections = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(nodeA, nodeB, logger, // number of seconds the client (on B pointing to A) is valid without update
      trustPeriodA, // number of seconds the client (on A pointing to B) is valid without update
      trustPeriodB) {
        var _yield$createClients, _yield$createClients2, clientIdA, clientIdB, _yield$nodeA$connOpen, connIdA, proof, _yield$nodeB$connOpen, connIdB, proofAck, proofConfirm, endA, endB;

        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return createClients(nodeA, nodeB, trustPeriodA, trustPeriodB);

              case 2:
                _yield$createClients = _context20.sent;
                _yield$createClients2 = _slicedToArray(_yield$createClients, 2);
                clientIdA = _yield$createClients2[0];
                clientIdB = _yield$createClients2[1];
                _context20.next = 8;
                return Promise.all([nodeA.waitOneBlock(), nodeB.waitOneBlock()]);

              case 8:
                _context20.next = 10;
                return nodeA.connOpenInit(clientIdA, clientIdB);

              case 10:
                _yield$nodeA$connOpen = _context20.sent;
                connIdA = _yield$nodeA$connOpen.connectionId;
                _context20.next = 14;
                return ibcclient_1.prepareConnectionHandshake(nodeA, nodeB, clientIdA, clientIdB, connIdA);

              case 14:
                proof = _context20.sent;
                _context20.next = 17;
                return nodeB.connOpenTry(clientIdB, proof);

              case 17:
                _yield$nodeB$connOpen = _context20.sent;
                connIdB = _yield$nodeB$connOpen.connectionId;
                _context20.next = 21;
                return ibcclient_1.prepareConnectionHandshake(nodeB, nodeA, clientIdB, clientIdA, connIdB);

              case 21:
                proofAck = _context20.sent;
                _context20.next = 24;
                return nodeA.connOpenAck(connIdA, proofAck);

              case 24:
                _context20.next = 26;
                return ibcclient_1.prepareConnectionHandshake(nodeA, nodeB, clientIdA, clientIdB, connIdA);

              case 26:
                proofConfirm = _context20.sent;
                _context20.next = 29;
                return nodeB.connOpenConfirm(connIdB, proofConfirm);

              case 29:
                endA = new endpoint_1.Endpoint(nodeA, clientIdA, connIdA);
                endB = new endpoint_1.Endpoint(nodeB, clientIdB, connIdB);
                return _context20.abrupt("return", new Link(endA, endB, logger));

              case 32:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      function createWithNewConnections(_x41, _x42, _x43, _x44, _x45) {
        return _createWithNewConnections.apply(this, arguments);
      }

      return createWithNewConnections;
    }()
  }]);

  return Link;
}();

exports.Link = Link;
var idDelim = ':';

var packetId = function packetId(packet) {
  return "".concat(packet.destinationPort).concat(idDelim).concat(packet.destinationChannel);
};

var ackId = function ackId(packet) {
  return "".concat(packet.sourcePort).concat(idDelim).concat(packet.sourceChannel);
}; // 2 weeks of trust


var defaultTrustPeriod = 14 * 86400;

function createClients(_x46, _x47, _x48, _x49) {
  return _createClients.apply(this, arguments);
}

function _createClients() {
  _createClients = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(nodeA, nodeB, // number of seconds the client (on B pointing to A) is valid without update
  trustPeriodA, // number of seconds the client (on A pointing to B) is valid without update
  trustPeriodB) {
    var args, _yield$nodeB$createTe, clientIdB, args2, _yield$nodeA$createTe, clientIdA;

    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return ibcclient_1.buildCreateClientArgs(nodeA, genesisUnbondingTime, trustPeriodA !== null && trustPeriodA !== void 0 ? trustPeriodA : defaultTrustPeriod);

          case 2:
            args = _context21.sent;
            _context21.next = 5;
            return nodeB.createTendermintClient(args.clientState, args.consensusState);

          case 5:
            _yield$nodeB$createTe = _context21.sent;
            clientIdB = _yield$nodeB$createTe.clientId;
            _context21.next = 9;
            return ibcclient_1.buildCreateClientArgs(nodeB, genesisUnbondingTime, trustPeriodB !== null && trustPeriodB !== void 0 ? trustPeriodB : defaultTrustPeriod);

          case 9:
            args2 = _context21.sent;
            _context21.next = 12;
            return nodeA.createTendermintClient(args2.clientState, args2.consensusState);

          case 12:
            _yield$nodeA$createTe = _context21.sent;
            clientIdA = _yield$nodeA$createTe.clientId;
            return _context21.abrupt("return", [clientIdA, clientIdB]);

          case 15:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));
  return _createClients.apply(this, arguments);
}
//# sourceMappingURL=link.js.map