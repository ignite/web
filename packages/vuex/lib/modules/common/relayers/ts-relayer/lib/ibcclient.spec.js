"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var utils_1 = require("@cosmjs/utils");

var ava_1 = __importDefault(require("ava"));

var tx_1 = require("../codec/ibc/applications/transfer/v1/tx");

var ibcclient_1 = require("./ibcclient");

var link_1 = require("./link");

var testutils_1 = require("./testutils");

var utils_2 = require("./utils");

ava_1["default"].serial('create simapp client on wasmd', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
    var logger, _yield$testutils_1$se, _yield$testutils_1$se2, src, dest, preClients, preLen, header, conState, cliState, res, postClients;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logger = new testutils_1.TestLogger();
            _context.next = 3;
            return testutils_1.setup(logger);

          case 3:
            _yield$testutils_1$se = _context.sent;
            _yield$testutils_1$se2 = _slicedToArray(_yield$testutils_1$se, 2);
            src = _yield$testutils_1$se2[0];
            dest = _yield$testutils_1$se2[1];
            _context.next = 9;
            return dest.query.ibc.client.allStates();

          case 9:
            preClients = _context.sent;
            preLen = preClients.clientStates.length;
            _context.next = 13;
            return src.latestHeader();

          case 13:
            header = _context.sent;
            conState = utils_2.buildConsensusState(header);
            _context.t0 = utils_2;
            _context.next = 18;
            return src.getChainId();

          case 18:
            _context.t1 = _context.sent;
            _context.t2 = src.revisionHeight(header.height);
            cliState = _context.t0.buildClientState.call(_context.t0, _context.t1, 1000, 500, _context.t2);
            _context.next = 23;
            return dest.createTendermintClient(cliState, conState);

          case 23:
            res = _context.sent;
            t.assert(res.clientId.startsWith('07-tendermint-'));
            _context.next = 27;
            return dest.waitOneBlock();

          case 27:
            _context.next = 29;
            return dest.query.ibc.client.allStates();

          case 29:
            postClients = _context.sent;
            t.is(postClients.clientStates.length, preLen + 1);

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
ava_1["default"].serial('create and update wasmd client on simapp', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
    var _a, _b, _c, _d, _yield$testutils_1$se3, _yield$testutils_1$se4, src, dest, header, conState, cliState, _yield$dest$createTen, clientId, state, newHeader, newHeight, upstate;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se3 = _context2.sent;
            _yield$testutils_1$se4 = _slicedToArray(_yield$testutils_1$se3, 2);
            src = _yield$testutils_1$se4[0];
            dest = _yield$testutils_1$se4[1];
            _context2.next = 8;
            return src.latestHeader();

          case 8:
            header = _context2.sent;
            conState = utils_2.buildConsensusState(header);
            _context2.t0 = utils_2;
            _context2.next = 13;
            return src.getChainId();

          case 13:
            _context2.t1 = _context2.sent;
            _context2.t2 = src.revisionHeight(header.height);
            cliState = _context2.t0.buildClientState.call(_context2.t0, _context2.t1, 1000, 500, _context2.t2);
            _context2.next = 18;
            return dest.createTendermintClient(cliState, conState);

          case 18:
            _yield$dest$createTen = _context2.sent;
            clientId = _yield$dest$createTen.clientId;
            _context2.next = 22;
            return dest.query.ibc.client.stateTm(clientId);

          case 22:
            state = _context2.sent;
            // console.error(state);
            // TODO: check more details?
            t.is((_a = state.latestHeight) === null || _a === void 0 ? void 0 : _a.revisionHeight.toNumber(), header.height);
            _context2.t3 = t;
            _context2.t4 = state.chainId;
            _context2.next = 28;
            return src.getChainId();

          case 28:
            _context2.t5 = _context2.sent;

            _context2.t3.deepEqual.call(_context2.t3, _context2.t4, _context2.t5);

            _context2.next = 32;
            return utils_1.sleep(1000);

          case 32:
            _context2.next = 34;
            return src.buildHeader(header.height);

          case 34:
            newHeader = _context2.sent;
            newHeight = (_c = (_b = newHeader.signedHeader) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.height;
            t.not(newHeight === null || newHeight === void 0 ? void 0 : newHeight.toNumber(), header.height);
            _context2.next = 39;
            return dest.updateTendermintClient(clientId, newHeader);

          case 39:
            _context2.next = 41;
            return dest.query.ibc.client.stateTm(clientId);

          case 41:
            upstate = _context2.sent;
            t.assert(sameLong((_d = upstate.latestHeight) === null || _d === void 0 ? void 0 : _d.revisionHeight, newHeight));

          case 43:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}()); // handles both as optional fields, does Long.equal to ignore signed/unsigned difference

function sameLong(a, b) {
  if (a === undefined) {
    return false;
  }

  if (b === undefined) {
    return false;
  }

  return a.equals(b);
} // measured in seconds
// Note: client parameter is checked against the actual keeper - must use real values from genesis.json


var genesisUnbondingTime = 1814400; // make 2 clients, and try to establish a connection

ava_1["default"].serial('perform connection handshake', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t) {
    var _yield$testutils_1$se5, _yield$testutils_1$se6, src, dest, args, _yield$dest$createTen2, destClientId, args2, _yield$src$createTend, srcClientId, _yield$src$connOpenIn, srcConnId, proof, _yield$dest$connOpenT, destConnId, proofAck, proofConfirm;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se5 = _context3.sent;
            _yield$testutils_1$se6 = _slicedToArray(_yield$testutils_1$se5, 2);
            src = _yield$testutils_1$se6[0];
            dest = _yield$testutils_1$se6[1];
            _context3.next = 8;
            return ibcclient_1.buildCreateClientArgs(src, genesisUnbondingTime, 5000);

          case 8:
            args = _context3.sent;
            _context3.next = 11;
            return dest.createTendermintClient(args.clientState, args.consensusState);

          case 11:
            _yield$dest$createTen2 = _context3.sent;
            destClientId = _yield$dest$createTen2.clientId;
            t.assert(destClientId.startsWith('07-tendermint-')); // client on src -> dest

            _context3.next = 16;
            return ibcclient_1.buildCreateClientArgs(dest, genesisUnbondingTime, 5000);

          case 16:
            args2 = _context3.sent;
            _context3.next = 19;
            return src.createTendermintClient(args2.clientState, args2.consensusState);

          case 19:
            _yield$src$createTend = _context3.sent;
            srcClientId = _yield$src$createTend.clientId;
            t.assert(srcClientId.startsWith('07-tendermint-')); // connectionInit on src

            _context3.next = 24;
            return src.connOpenInit(srcClientId, destClientId);

          case 24:
            _yield$src$connOpenIn = _context3.sent;
            srcConnId = _yield$src$connOpenIn.connectionId;
            t.assert(srcConnId.startsWith('connection-'), srcConnId); // connectionTry on dest

            _context3.next = 29;
            return ibcclient_1.prepareConnectionHandshake(src, dest, srcClientId, destClientId, srcConnId);

          case 29:
            proof = _context3.sent;
            _context3.next = 32;
            return dest.connOpenTry(destClientId, proof);

          case 32:
            _yield$dest$connOpenT = _context3.sent;
            destConnId = _yield$dest$connOpenT.connectionId;
            t.assert(destConnId.startsWith('connection-'), destConnId); // connectionAck on src

            _context3.next = 37;
            return ibcclient_1.prepareConnectionHandshake(dest, src, destClientId, srcClientId, destConnId);

          case 37:
            proofAck = _context3.sent;
            _context3.next = 40;
            return src.connOpenAck(srcConnId, proofAck);

          case 40:
            _context3.next = 42;
            return ibcclient_1.prepareConnectionHandshake(src, dest, srcClientId, destClientId, srcConnId);

          case 42:
            proofConfirm = _context3.sent;
            _context3.next = 45;
            return dest.connOpenConfirm(destConnId, proofConfirm);

          case 45:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}());
ava_1["default"].serial('transfer message and send packets', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t) {
    var logger, _yield$testutils_1$se7, _yield$testutils_1$se8, nodeA, nodeB, link, channels, recipient, preBalance, destHeight, token, transferResult, packets, packet, headerHeight, proof, relayResult, postBalance, recvCoin, acks, ack, ackHeaderHeight, ackProof;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            logger = new testutils_1.TestLogger(); // set up ics20 channel

            _context4.next = 3;
            return testutils_1.setup();

          case 3:
            _yield$testutils_1$se7 = _context4.sent;
            _yield$testutils_1$se8 = _slicedToArray(_yield$testutils_1$se7, 2);
            nodeA = _yield$testutils_1$se8[0];
            nodeB = _yield$testutils_1$se8[1];
            _context4.next = 9;
            return link_1.Link.createWithNewConnections(nodeA, nodeB, logger);

          case 9:
            link = _context4.sent;
            _context4.next = 12;
            return link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 12:
            channels = _context4.sent;
            t.is(channels.src.portId, testutils_1.ics20.srcPortId); // make an account on remote chain, and check it is empty

            recipient = testutils_1.randomAddress(testutils_1.wasmd.prefix);
            _context4.next = 17;
            return nodeB.query.bank.unverified.allBalances(recipient);

          case 17:
            preBalance = _context4.sent;
            t.is(preBalance.length, 0); // submit a transfer message

            _context4.next = 21;
            return nodeB.timeoutHeight(500);

          case 21:
            destHeight = _context4.sent;
            // valid for 500 blocks
            token = {
              amount: '12345',
              denom: testutils_1.simapp.denomFee
            };
            _context4.next = 25;
            return nodeA.transferTokens(channels.src.portId, channels.src.channelId, token, recipient, destHeight);

          case 25:
            transferResult = _context4.sent;
            packets = utils_2.parsePacketsFromLogs(transferResult.logs);
            t.is(packets.length, 1);
            packet = packets[0]; // base the proof sequence on prepareChannelHandshake
            // update client on dest

            _context4.next = 31;
            return nodeA.waitOneBlock();

          case 31:
            _context4.next = 33;
            return nodeB.doUpdateClient(link.endB.clientID, nodeA);

          case 33:
            headerHeight = _context4.sent;
            _context4.next = 36;
            return nodeA.getPacketProof(packet, headerHeight);

          case 36:
            proof = _context4.sent;
            _context4.next = 39;
            return nodeB.receivePacket(packet, proof, headerHeight);

          case 39:
            relayResult = _context4.sent;
            _context4.next = 42;
            return nodeB.query.bank.unverified.allBalances(recipient);

          case 42:
            postBalance = _context4.sent;
            t.is(postBalance.length, 1);
            recvCoin = postBalance[0];
            t.is(recvCoin.amount, '12345');
            t.assert(recvCoin.denom.startsWith('ibc/'), recvCoin.denom); // get the acknowledgement from the receivePacket tx

            acks = utils_2.parseAcksFromLogs(relayResult.logs);
            t.is(acks.length, 1);
            ack = acks[0]; // get an ack proof and return to node A

            _context4.next = 52;
            return nodeB.waitOneBlock();

          case 52:
            _context4.next = 54;
            return nodeA.doUpdateClient(link.endA.clientID, nodeB);

          case 54:
            ackHeaderHeight = _context4.sent;
            _context4.next = 57;
            return nodeB.getAckProof(ack, ackHeaderHeight);

          case 57:
            ackProof = _context4.sent;
            _context4.next = 60;
            return nodeA.acknowledgePacket(ack, ackProof, ackHeaderHeight);

          case 60:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}());
ava_1["default"].serial('tests parsing with multi-message', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t) {
    var logger, _yield$testutils_1$se9, _yield$testutils_1$se10, nodeA, nodeB, link, channels, destAddr, srcAddr, _yield$nodeA$sendToke, sendLogs, sendPackets, sendAcks, timeoutHeight, msg, msg2, _yield$nodeA$sendMult, multiLog, multiPackets, multiAcks, headerHeight, proofs, _yield$nodeB$receiveP, relayLog, relayPackets, relayAcks, ackHeaderHeight, ackProofs;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            logger = new testutils_1.TestLogger(); // set up ics20 channel

            _context5.next = 3;
            return testutils_1.setup(logger);

          case 3:
            _yield$testutils_1$se9 = _context5.sent;
            _yield$testutils_1$se10 = _slicedToArray(_yield$testutils_1$se9, 2);
            nodeA = _yield$testutils_1$se10[0];
            nodeB = _yield$testutils_1$se10[1];
            _context5.next = 9;
            return link_1.Link.createWithNewConnections(nodeA, nodeB, logger);

          case 9:
            link = _context5.sent;
            _context5.next = 12;
            return link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 12:
            channels = _context5.sent;
            // make an account on remote chain for testing
            destAddr = testutils_1.randomAddress(testutils_1.wasmd.prefix);
            srcAddr = testutils_1.randomAddress(testutils_1.simapp.prefix); // submit a send message - no events

            _context5.next = 17;
            return nodeA.sendTokens(srcAddr, [{
              amount: '5000',
              denom: testutils_1.simapp.denomFee
            }]);

          case 17:
            _yield$nodeA$sendToke = _context5.sent;
            sendLogs = _yield$nodeA$sendToke.logs;
            t.assert(logger.verbose.calledWithMatch(/Send tokens to/), logger.verbose.callCount.toString());
            t.assert(logger.debug.calledWithMatch(/Send tokens:/), logger.debug.callCount.toString());
            sendPackets = utils_2.parsePacketsFromLogs(sendLogs);
            t.is(sendPackets.length, 0);
            sendAcks = utils_2.parseAcksFromLogs(sendLogs);
            t.is(sendAcks.length, 0); // submit 2 transfer messages

            _context5.next = 27;
            return nodeB.timeoutHeight(500);

          case 27:
            timeoutHeight = _context5.sent;
            msg = {
              typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
              value: tx_1.MsgTransfer.fromPartial({
                sourcePort: channels.src.portId,
                sourceChannel: channels.src.channelId,
                sender: nodeA.senderAddress,
                token: {
                  amount: '6000',
                  denom: testutils_1.simapp.denomFee
                },
                receiver: destAddr,
                timeoutHeight: timeoutHeight
              })
            };
            msg2 = {
              typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
              value: tx_1.MsgTransfer.fromPartial({
                sourcePort: channels.src.portId,
                sourceChannel: channels.src.channelId,
                sender: nodeA.senderAddress,
                token: {
                  amount: '9000',
                  denom: testutils_1.simapp.denomFee
                },
                receiver: destAddr,
                timeoutHeight: timeoutHeight
              })
            };
            _context5.next = 32;
            return nodeA.sendMultiMsg([msg, msg2], nodeA.fees.updateClient);

          case 32:
            _yield$nodeA$sendMult = _context5.sent;
            multiLog = _yield$nodeA$sendMult.logs;
            multiPackets = utils_2.parsePacketsFromLogs(multiLog);
            t.is(multiPackets.length, 2); // no acks here

            multiAcks = utils_2.parseAcksFromLogs(multiLog);
            t.is(multiAcks.length, 0); // post them to the other side

            _context5.next = 40;
            return nodeA.waitOneBlock();

          case 40:
            _context5.next = 42;
            return nodeB.doUpdateClient(link.endB.clientID, nodeA);

          case 42:
            headerHeight = _context5.sent;
            _context5.next = 45;
            return Promise.all(multiPackets.map(function (packet) {
              return nodeA.getPacketProof(packet, headerHeight);
            }));

          case 45:
            proofs = _context5.sent;
            _context5.next = 48;
            return nodeB.receivePackets(multiPackets, proofs, headerHeight);

          case 48:
            _yield$nodeB$receiveP = _context5.sent;
            relayLog = _yield$nodeB$receiveP.logs;
            // no recv packets here
            relayPackets = utils_2.parsePacketsFromLogs(relayLog);
            t.is(relayPackets.length, 0); // but we got 2 acks

            relayAcks = utils_2.parseAcksFromLogs(relayLog);
            t.is(relayAcks.length, 2); // relay them together

            _context5.next = 56;
            return nodeB.waitOneBlock();

          case 56:
            _context5.next = 58;
            return nodeA.doUpdateClient(link.endA.clientID, nodeB);

          case 58:
            ackHeaderHeight = _context5.sent;
            _context5.next = 61;
            return Promise.all(relayAcks.map(function (ack) {
              return nodeB.getAckProof(ack, ackHeaderHeight);
            }));

          case 61:
            ackProofs = _context5.sent;
            _context5.next = 64;
            return nodeA.acknowledgePackets(relayAcks, ackProofs, ackHeaderHeight);

          case 64:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
}());
//# sourceMappingURL=ibcclient.spec.js.map