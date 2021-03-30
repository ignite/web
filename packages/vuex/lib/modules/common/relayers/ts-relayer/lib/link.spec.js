"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

var channel_1 = require("../codec/ibc/core/channel/v1/channel");

var ibcclient_1 = require("./ibcclient");

var link_1 = require("./link");

var testutils_1 = require("./testutils");

var utils_2 = require("./utils");

ava_1["default"].serial('establish new client-connection', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
    var logger, _yield$testutils_1$se, _yield$testutils_1$se2, src, dest, link;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logger = new testutils_1.TestLogger();
            _context.next = 3;
            return testutils_1.setup();

          case 3:
            _yield$testutils_1$se = _context.sent;
            _yield$testutils_1$se2 = _slicedToArray(_yield$testutils_1$se, 2);
            src = _yield$testutils_1$se2[0];
            dest = _yield$testutils_1$se2[1];
            _context.next = 9;
            return link_1.Link.createWithNewConnections(src, dest, logger);

          case 9:
            link = _context.sent;
            // ensure the data makes sense (TODO: more?)
            t.assert(link.endA.clientID.startsWith('07-tendermint-'), link.endA.clientID);
            t.assert(link.endB.clientID.startsWith('07-tendermint-'), link.endB.clientID); // try to update both clients, ensuring this connection is stable

            _context.next = 14;
            return link.updateClient('A');

          case 14:
            _context.next = 16;
            return link.updateClient('B');

          case 16:
            // TODO: ensure it is updated
            t.assert(logger.info.calledTwice, logger.info.callCount.toString());

          case 17:
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
ava_1["default"].serial('initialized connection and start channel handshake', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
    var _yield$testutils_1$se3, _yield$testutils_1$se4, src, dest, link, _yield$src$channelOpe, channelIdSrc;

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
            return link_1.Link.createWithNewConnections(src, dest);

          case 8:
            link = _context2.sent;
            _context2.next = 11;
            return t.throwsAsync(function () {
              return src.channelOpenInit(testutils_1.ics20.destPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, link.endA.connectionID, testutils_1.ics20.version);
            });

          case 11:
            _context2.next = 13;
            return src.waitOneBlock();

          case 13:
            _context2.next = 15;
            return t.throwsAsync(function () {
              return src.channelOpenInit(testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, link.endA.connectionID, 'ics27');
            });

          case 15:
            _context2.next = 17;
            return src.waitOneBlock();

          case 17:
            _context2.next = 19;
            return src.channelOpenInit(testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, link.endA.connectionID, testutils_1.ics20.version);

          case 19:
            _yield$src$channelOpe = _context2.sent;
            channelIdSrc = _yield$src$channelOpe.channelId;
            t.assert(channelIdSrc.startsWith('channel-'), channelIdSrc);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());
ava_1["default"].serial('automated channel handshake on initialized connection', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t) {
    var _a, _yield$testutils_1$se5, _yield$testutils_1$se6, nodeA, nodeB, link, channels, _yield$link$endB$clie, channel;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se5 = _context3.sent;
            _yield$testutils_1$se6 = _slicedToArray(_yield$testutils_1$se5, 2);
            nodeA = _yield$testutils_1$se6[0];
            nodeB = _yield$testutils_1$se6[1];
            _context3.next = 8;
            return link_1.Link.createWithNewConnections(nodeA, nodeB);

          case 8:
            link = _context3.sent;
            _context3.next = 11;
            return nodeA.channelOpenInit(testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, link.endA.connectionID, testutils_1.ics20.version);

          case 11:
            _context3.next = 13;
            return link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 13:
            channels = _context3.sent;
            // ensure we bound expected ports
            t.is(channels.src.portId, testutils_1.ics20.srcPortId);
            t.is(channels.dest.portId, testutils_1.ics20.destPortId); // and have different channel ids (this depends on the increment above)

            t.not(channels.src.channelId, channels.dest.channelId); // query data

            _context3.next = 19;
            return link.endB.client.query.ibc.channel.channel(testutils_1.ics20.destPortId, channels.dest.channelId);

          case 19:
            _yield$link$endB$clie = _context3.sent;
            channel = _yield$link$endB$clie.channel;
            t.is(channel === null || channel === void 0 ? void 0 : channel.state, channel_1.State.STATE_OPEN);
            t.is(channel === null || channel === void 0 ? void 0 : channel.ordering, testutils_1.ics20.ordering);
            t.is((_a = channel === null || channel === void 0 ? void 0 : channel.counterparty) === null || _a === void 0 ? void 0 : _a.channelId, channels.src.channelId);

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}()); // createWithExistingConnections

ava_1["default"].serial('reuse existing connections', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _yield$testutils_1$se7, _yield$testutils_1$se8, src, dest, oldLink, connA, connB, oldChannels, newLink, channelSrc, channelDest, newChannels;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se7 = _context4.sent;
            _yield$testutils_1$se8 = _slicedToArray(_yield$testutils_1$se7, 2);
            src = _yield$testutils_1$se8[0];
            dest = _yield$testutils_1$se8[1];
            _context4.next = 8;
            return link_1.Link.createWithNewConnections(src, dest);

          case 8:
            oldLink = _context4.sent;
            connA = oldLink.endA.connectionID;
            connB = oldLink.endB.connectionID;
            _context4.next = 13;
            return oldLink.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 13:
            oldChannels = _context4.sent;
            _context4.next = 16;
            return link_1.Link.createWithExistingConnections(src, dest, connA, connB);

          case 16:
            newLink = _context4.sent;
            _context4.next = 19;
            return newLink.endA.client.query.ibc.channel.channel(testutils_1.ics20.srcPortId, oldChannels.src.channelId);

          case 19:
            channelSrc = _context4.sent;
            t.is((_a = channelSrc.channel) === null || _a === void 0 ? void 0 : _a.state, channel_1.State.STATE_OPEN);
            t.is((_b = channelSrc.channel) === null || _b === void 0 ? void 0 : _b.ordering, testutils_1.ics20.ordering);
            t.is((_d = (_c = channelSrc.channel) === null || _c === void 0 ? void 0 : _c.counterparty) === null || _d === void 0 ? void 0 : _d.channelId, oldChannels.dest.channelId);
            _context4.next = 25;
            return newLink.endB.client.query.ibc.channel.channel(testutils_1.ics20.destPortId, oldChannels.dest.channelId);

          case 25:
            channelDest = _context4.sent;
            t.is((_e = channelDest.channel) === null || _e === void 0 ? void 0 : _e.state, channel_1.State.STATE_OPEN);
            t.is((_f = channelDest.channel) === null || _f === void 0 ? void 0 : _f.ordering, testutils_1.ics20.ordering);
            t.is((_h = (_g = channelDest.channel) === null || _g === void 0 ? void 0 : _g.counterparty) === null || _h === void 0 ? void 0 : _h.channelId, oldChannels.src.channelId); // Check everything is fine by creating a new channel
            // switch src and dest just to test another path

            _context4.next = 31;
            return newLink.createChannel('B', testutils_1.ics20.destPortId, testutils_1.ics20.srcPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 31:
            newChannels = _context4.sent;
            t.notDeepEqual(newChannels.dest, oldChannels.src);

          case 33:
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
ava_1["default"].serial('reuse existing connections with partially open channel', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _yield$testutils_1$se9, _yield$testutils_1$se10, src, dest, oldLink, connA, connB, _yield$src$channelOpe2, srcChannelId, proof, _yield$dest$channelOp, destChannelId, newLink, channelSrc, channelDest, newChannels;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se9 = _context5.sent;
            _yield$testutils_1$se10 = _slicedToArray(_yield$testutils_1$se9, 2);
            src = _yield$testutils_1$se10[0];
            dest = _yield$testutils_1$se10[1];
            _context5.next = 8;
            return link_1.Link.createWithNewConnections(src, dest);

          case 8:
            oldLink = _context5.sent;
            connA = oldLink.endA.connectionID;
            connB = oldLink.endB.connectionID;
            _context5.next = 13;
            return src.channelOpenInit(testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, connA, testutils_1.ics20.version);

          case 13:
            _yield$src$channelOpe2 = _context5.sent;
            srcChannelId = _yield$src$channelOpe2.channelId;
            _context5.next = 17;
            return ibcclient_1.prepareChannelHandshake(src, dest, oldLink.endB.clientID, testutils_1.ics20.srcPortId, srcChannelId);

          case 17:
            proof = _context5.sent;
            _context5.next = 20;
            return dest.channelOpenTry(testutils_1.ics20.destPortId, {
              portId: testutils_1.ics20.srcPortId,
              channelId: srcChannelId
            }, testutils_1.ics20.ordering, connB, testutils_1.ics20.version, testutils_1.ics20.version, proof);

          case 20:
            _yield$dest$channelOp = _context5.sent;
            destChannelId = _yield$dest$channelOp.channelId;
            _context5.next = 24;
            return link_1.Link.createWithExistingConnections(src, dest, connA, connB);

          case 24:
            newLink = _context5.sent;
            _context5.next = 27;
            return newLink.endA.client.query.ibc.channel.channel(testutils_1.ics20.srcPortId, srcChannelId);

          case 27:
            channelSrc = _context5.sent;
            t.is((_a = channelSrc.channel) === null || _a === void 0 ? void 0 : _a.state, channel_1.State.STATE_INIT);
            t.is((_b = channelSrc.channel) === null || _b === void 0 ? void 0 : _b.ordering, testutils_1.ics20.ordering); // Counterparty channel ID not yet known

            t.is((_d = (_c = channelSrc.channel) === null || _c === void 0 ? void 0 : _c.counterparty) === null || _d === void 0 ? void 0 : _d.channelId, '');
            _context5.next = 33;
            return newLink.endB.client.query.ibc.channel.channel(testutils_1.ics20.destPortId, destChannelId);

          case 33:
            channelDest = _context5.sent;
            t.is((_e = channelDest.channel) === null || _e === void 0 ? void 0 : _e.state, channel_1.State.STATE_TRYOPEN);
            t.is((_f = channelDest.channel) === null || _f === void 0 ? void 0 : _f.ordering, testutils_1.ics20.ordering);
            t.is((_h = (_g = channelDest.channel) === null || _g === void 0 ? void 0 : _g.counterparty) === null || _h === void 0 ? void 0 : _h.channelId, srcChannelId); // Check everything is fine by creating a new channel
            // switch src and dest just to test another path

            _context5.next = 39;
            return newLink.createChannel('B', testutils_1.ics20.destPortId, testutils_1.ics20.srcPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 39:
            newChannels = _context5.sent;
            t.notDeepEqual(newChannels.dest, {
              portId: testutils_1.ics20.srcPortId,
              channelId: srcChannelId
            });

          case 41:
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
ava_1["default"].serial('errors when reusing an invalid connection', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(t) {
    var _yield$testutils_1$se11, _yield$testutils_1$se12, src, dest, connA, connB;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se11 = _context6.sent;
            _yield$testutils_1$se12 = _slicedToArray(_yield$testutils_1$se11, 2);
            src = _yield$testutils_1$se12[0];
            dest = _yield$testutils_1$se12[1];
            _context6.next = 8;
            return link_1.Link.createWithNewConnections(src, dest);

          case 8:
            connA = 'whatever';
            connB = 'unreal';
            _context6.next = 12;
            return t.throwsAsync(function () {
              return link_1.Link.createWithExistingConnections(src, dest, connA, connB);
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x6) {
    return _ref6.apply(this, arguments);
  };
}());
ava_1["default"].serial("errors when reusing connections on the same node", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t) {
    var _yield$testutils_1$se13, _yield$testutils_1$se14, src, dest, oldLink, connA;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se13 = _context7.sent;
            _yield$testutils_1$se14 = _slicedToArray(_yield$testutils_1$se13, 2);
            src = _yield$testutils_1$se14[0];
            dest = _yield$testutils_1$se14[1];
            _context7.next = 8;
            return link_1.Link.createWithNewConnections(src, dest);

          case 8:
            oldLink = _context7.sent;
            connA = oldLink.endA.connectionID;
            _context7.next = 12;
            return t.throwsAsync(function () {
              return link_1.Link.createWithExistingConnections(src, src, connA, connA);
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x7) {
    return _ref7.apply(this, arguments);
  };
}());
ava_1["default"].serial("errors when reusing connections which don\u2019t match", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(t) {
    var _yield$testutils_1$se15, _yield$testutils_1$se16, src, dest, oldLink1, connA, oldLink2, connB;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se15 = _context8.sent;
            _yield$testutils_1$se16 = _slicedToArray(_yield$testutils_1$se15, 2);
            src = _yield$testutils_1$se16[0];
            dest = _yield$testutils_1$se16[1];
            _context8.next = 8;
            return link_1.Link.createWithNewConnections(src, dest);

          case 8:
            oldLink1 = _context8.sent;
            connA = oldLink1.endA.connectionID;
            _context8.next = 12;
            return link_1.Link.createWithNewConnections(src, dest);

          case 12:
            oldLink2 = _context8.sent;
            connB = oldLink2.endB.connectionID;
            _context8.next = 16;
            return t.throwsAsync(function () {
              return link_1.Link.createWithExistingConnections(src, dest, connA, connB);
            });

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x8) {
    return _ref8.apply(this, arguments);
  };
}());
ava_1["default"].serial('submit multiple tx, get unreceived packets', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(t) {
    var _yield$testutils_1$se17, _yield$testutils_1$se18, nodeA, nodeB, link, channels, noPackets, amounts, txHeights, packets, _iterator, _step, packet, preAcks, submit, txAcks, postPackets, acks, postAcks;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se17 = _context9.sent;
            _yield$testutils_1$se18 = _slicedToArray(_yield$testutils_1$se17, 2);
            nodeA = _yield$testutils_1$se18[0];
            nodeB = _yield$testutils_1$se18[1];
            _context9.next = 8;
            return link_1.Link.createWithNewConnections(nodeA, nodeB);

          case 8:
            link = _context9.sent;
            _context9.next = 11;
            return link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 11:
            channels = _context9.sent;
            _context9.next = 14;
            return link.endA.querySentPackets();

          case 14:
            noPackets = _context9.sent;
            t.is(noPackets.length, 0); // let's make 3 transfer tx at different heights

            amounts = [1000, 2222, 3456];
            _context9.next = 19;
            return testutils_1.transferTokens(nodeA, testutils_1.simapp.denomFee, nodeB, testutils_1.wasmd.prefix, channels.src, amounts);

          case 19:
            txHeights = _context9.sent;
            // ensure these are different
            t.assert(txHeights[1] > txHeights[0], txHeights.toString());
            t.assert(txHeights[2] > txHeights[1], txHeights.toString()); // need to wait briefly for it to be indexed

            _context9.next = 24;
            return nodeA.waitOneBlock();

          case 24:
            _context9.next = 26;
            return link.getPendingPackets('A');

          case 26:
            packets = _context9.sent;
            t.is(packets.length, 3);
            t.deepEqual(packets.map(function (_ref10) {
              var height = _ref10.height;
              return height;
            }), txHeights); // ensure the sender is set properly

            _iterator = _createForOfIteratorHelper(packets);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                packet = _step.value;
                t.is(packet.sender, nodeA.senderAddress);
              } // ensure no acks yet

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _context9.next = 33;
            return link.getPendingAcks('B');

          case 33:
            preAcks = _context9.sent;
            t.is(preAcks.length, 0); // let's pre-update to test conditional logic (no need to update below)

            _context9.next = 37;
            return nodeA.waitOneBlock();

          case 37:
            _context9.next = 39;
            return link.updateClient('A');

          case 39:
            // submit 2 of them (out of order)
            submit = [packets[0], packets[2]];
            _context9.next = 42;
            return link.relayPackets('A', submit);

          case 42:
            txAcks = _context9.sent;
            t.is(txAcks.length, 2); // need to wait briefly for it to be indexed

            _context9.next = 46;
            return nodeA.waitOneBlock();

          case 46:
            _context9.next = 48;
            return link.getPendingPackets('A');

          case 48:
            postPackets = _context9.sent;
            t.is(postPackets.length, 1);
            t.is(postPackets[0].height, txHeights[1]); // ensure acks can be queried

            _context9.next = 53;
            return link.getPendingAcks('B');

          case 53:
            acks = _context9.sent;
            t.is(acks.length, 2); // submit one of the acks, without waiting (it must update client)

            _context9.next = 57;
            return link.relayAcks('B', acks.slice(0, 1));

          case 57:
            _context9.next = 59;
            return link.getPendingAcks('B');

          case 59:
            postAcks = _context9.sent;
            t.is(postAcks.length, 1); // and it matches the one we did not send

            t.deepEqual(postAcks[0], acks[1]);

          case 62:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x9) {
    return _ref9.apply(this, arguments);
  };
}());
ava_1["default"].serial('submit multiple tx on multiple channels, get unreceived packets', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(t) {
    var logger, _yield$testutils_1$se19, _yield$testutils_1$se20, nodeA, nodeB, link, channels1, channels2, noPackets, amounts, tx1, tx2, txHeights, packets, _iterator2, _step2, packet, preAcks, packetsToSubmit, txAcks, postPackets, acks, postAcks;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            logger = new testutils_1.TestLogger(); // setup a channel

            _context10.next = 3;
            return testutils_1.setup(logger);

          case 3:
            _yield$testutils_1$se19 = _context10.sent;
            _yield$testutils_1$se20 = _slicedToArray(_yield$testutils_1$se19, 2);
            nodeA = _yield$testutils_1$se20[0];
            nodeB = _yield$testutils_1$se20[1];
            _context10.next = 9;
            return link_1.Link.createWithNewConnections(nodeA, nodeB, logger);

          case 9:
            link = _context10.sent;
            _context10.next = 12;
            return link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 12:
            channels1 = _context10.sent;
            _context10.next = 15;
            return link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 15:
            channels2 = _context10.sent;
            t.not(channels1.src.channelId, channels2.src.channelId); // no packets here

            _context10.next = 19;
            return link.endA.querySentPackets();

          case 19:
            noPackets = _context10.sent;
            t.is(noPackets.length, 0); // let's make 3 transfer tx at different heights on each channel pair

            amounts = [1000, 2222, 3456];
            _context10.next = 24;
            return testutils_1.transferTokens(nodeA, testutils_1.simapp.denomFee, nodeB, testutils_1.wasmd.prefix, channels1.src, amounts);

          case 24:
            tx1 = _context10.sent;
            _context10.next = 27;
            return testutils_1.transferTokens(nodeA, testutils_1.simapp.denomFee, nodeB, testutils_1.wasmd.prefix, channels2.src, amounts);

          case 27:
            tx2 = _context10.sent;
            txHeights = {
              channels1: tx1.map(function (height) {
                return {
                  height: height,
                  channelId: channels1.src.channelId
                };
              }),
              channels2: tx2.map(function (height) {
                return {
                  height: height,
                  channelId: channels2.src.channelId
                };
              })
            }; // need to wait briefly for it to be indexed

            _context10.next = 31;
            return utils_1.sleep(100);

          case 31:
            _context10.next = 33;
            return link.getPendingPackets('A');

          case 33:
            packets = _context10.sent;
            t.is(packets.length, 6);
            t.deepEqual(packets.map(function (_ref12) {
              var height = _ref12.height,
                  packet = _ref12.packet;
              return {
                height: height,
                channelId: packet.sourceChannel
              };
            }), [].concat(_toConsumableArray(txHeights.channels1), _toConsumableArray(txHeights.channels2))); // ensure the sender is set properly

            _iterator2 = _createForOfIteratorHelper(packets);

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                packet = _step2.value;
                t.is(packet.sender, nodeA.senderAddress);
              } // ensure no acks yet

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _context10.next = 40;
            return link.getPendingAcks('B');

          case 40:
            preAcks = _context10.sent;
            t.is(preAcks.length, 0); // submit 4 of them (out of order) - make sure not to use same sequences on both sides

            packetsToSubmit = [packets[0], packets[1], packets[4], packets[5]];
            _context10.next = 45;
            return link.relayPackets('A', packetsToSubmit);

          case 45:
            txAcks = _context10.sent;
            t.is(txAcks.length, 4);
            _context10.next = 49;
            return nodeA.waitOneBlock();

          case 49:
            _context10.next = 51;
            return link.getPendingPackets('A');

          case 51:
            postPackets = _context10.sent;
            t.is(postPackets.length, 2);
            t.is(postPackets[0].height, txHeights.channels1[2].height);
            t.is(postPackets[1].height, txHeights.channels2[0].height); // ensure acks can be queried

            _context10.next = 57;
            return link.getPendingAcks('B');

          case 57:
            acks = _context10.sent;
            t.is(acks.length, 4); // make sure we ack on different channels (and different sequences)

            t.not(acks[0].originalPacket.sourceChannel, acks[3].originalPacket.sourceChannel);
            t.not(acks[0].originalPacket.sequence, acks[3].originalPacket.sequence);
            _context10.next = 63;
            return link.relayAcks('B', [acks[0], acks[3]]);

          case 63:
            _context10.next = 65;
            return nodeA.waitOneBlock();

          case 65:
            _context10.next = 67;
            return link.getPendingAcks('B');

          case 67:
            postAcks = _context10.sent;
            t.is(postAcks.length, 2); // and it matches the ones we did not send

            t.deepEqual(postAcks[0], acks[1]);
            t.deepEqual(postAcks[1], acks[2]);

          case 71:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function (_x10) {
    return _ref11.apply(this, arguments);
  };
}());
ava_1["default"].serial('updateClientIfStale only runs if it is too long since an update', /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(t) {
    var logger, _yield$testutils_1$se21, _yield$testutils_1$se22, nodeA, nodeB, link, heightA, heightB, noUpdateA, noUpdateB, updateA, updateB;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            // setup
            logger = new testutils_1.TestLogger();
            _context11.next = 3;
            return testutils_1.setup(logger);

          case 3:
            _yield$testutils_1$se21 = _context11.sent;
            _yield$testutils_1$se22 = _slicedToArray(_yield$testutils_1$se21, 2);
            nodeA = _yield$testutils_1$se22[0];
            nodeB = _yield$testutils_1$se22[1];
            _context11.next = 9;
            return link_1.Link.createWithNewConnections(nodeA, nodeB, logger);

          case 9:
            link = _context11.sent;
            _context11.next = 12;
            return nodeA.latestHeader();

          case 12:
            heightA = _context11.sent.height;
            _context11.next = 15;
            return nodeB.latestHeader();

          case 15:
            heightB = _context11.sent.height;
            _context11.next = 18;
            return utils_1.sleep(3000);

          case 18:
            _context11.next = 20;
            return link.updateClientIfStale('A', 1000);

          case 20:
            noUpdateA = _context11.sent;
            t.is(noUpdateA, null);
            _context11.next = 24;
            return link.updateClientIfStale('B', 1000);

          case 24:
            noUpdateB = _context11.sent;
            t.is(noUpdateB, null); // we haven't updated in the last 2 seconds, this should trigger the update

            _context11.next = 28;
            return link.updateClientIfStale('A', 2);

          case 28:
            updateA = _context11.sent;
            utils_1.assert(updateA);
            t.assert(updateA.revisionHeight.toNumber() > heightA);
            _context11.next = 33;
            return link.updateClientIfStale('B', 2);

          case 33:
            updateB = _context11.sent;
            utils_1.assert(updateB);
            t.assert(updateB.revisionHeight.toNumber() > heightB);

          case 36:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function (_x11) {
    return _ref13.apply(this, arguments);
  };
}());
ava_1["default"].serial('checkAndRelayPacketsAndAcks relays packets properly', /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(t) {
    var logger, _yield$testutils_1$se23, _yield$testutils_1$se24, nodeA, nodeB, link, channels, checkPending, amountsA, txHeightsA, amountsB, txHeightsB, relayFrom, nextRelay;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            logger = new testutils_1.TestLogger();
            _context13.next = 3;
            return testutils_1.setup(logger);

          case 3:
            _yield$testutils_1$se23 = _context13.sent;
            _yield$testutils_1$se24 = _slicedToArray(_yield$testutils_1$se23, 2);
            nodeA = _yield$testutils_1$se24[0];
            nodeB = _yield$testutils_1$se24[1];
            _context13.next = 9;
            return link_1.Link.createWithNewConnections(nodeA, nodeB, logger);

          case 9:
            link = _context13.sent;
            _context13.next = 12;
            return link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 12:
            channels = _context13.sent;

            checkPending = /*#__PURE__*/function () {
              var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(packA, packB, ackA, ackB) {
                var packetsA, packetsB, acksA, acksB;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return link.getPendingPackets('A');

                      case 2:
                        packetsA = _context12.sent;
                        t.is(packetsA.length, packA);
                        _context12.next = 6;
                        return link.getPendingPackets('B');

                      case 6:
                        packetsB = _context12.sent;
                        t.is(packetsB.length, packB);
                        _context12.next = 10;
                        return link.getPendingAcks('A');

                      case 10:
                        acksA = _context12.sent;
                        t.is(acksA.length, ackA);
                        _context12.next = 14;
                        return link.getPendingAcks('B');

                      case 14:
                        acksB = _context12.sent;
                        t.is(acksB.length, ackB);

                      case 16:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));

              return function checkPending(_x13, _x14, _x15, _x16) {
                return _ref15.apply(this, arguments);
              };
            }(); // no packets here


            _context13.next = 16;
            return checkPending(0, 0, 0, 0);

          case 16:
            _context13.next = 18;
            return link.checkAndRelayPacketsAndAcks({});

          case 18:
            // send 3 from A -> B
            amountsA = [1000, 2222, 3456];
            _context13.next = 21;
            return testutils_1.transferTokens(nodeA, testutils_1.simapp.denomFee, nodeB, testutils_1.wasmd.prefix, channels.src, amountsA, 5000 // never time out
            );

          case 21:
            txHeightsA = _context13.sent;
            // send 2 from B -> A
            amountsB = [76543, 12345];
            _context13.next = 25;
            return testutils_1.transferTokens(nodeB, testutils_1.wasmd.denomFee, nodeA, testutils_1.simapp.prefix, channels.dest, amountsB, 5000 // never time out
            );

          case 25:
            txHeightsB = _context13.sent;
            _context13.next = 28;
            return nodeA.waitOneBlock();

          case 28:
            _context13.next = 30;
            return checkPending(3, 2, 0, 0);

          case 30:
            // let's one on each side (should filter only the last == minHeight)
            relayFrom = {
              packetHeightA: txHeightsA[2],
              packetHeightB: txHeightsB[1]
            }; // check the result here and ensure it is after the latest height

            _context13.next = 33;
            return link.checkAndRelayPacketsAndAcks(relayFrom);

          case 33:
            nextRelay = _context13.sent;
            // next acket is more recent than the transactions
            utils_1.assert(nextRelay.packetHeightA);
            t.assert(nextRelay.packetHeightA > txHeightsA[2]);
            utils_1.assert(nextRelay.packetHeightB); // since we don't wait a block after this transfer, it may be the same

            t.assert(nextRelay.packetHeightB >= txHeightsB[1]); // next ack queries is more recent than the packet queries

            utils_1.assert(nextRelay.ackHeightA);
            t.assert(nextRelay.ackHeightA > nextRelay.packetHeightA);
            utils_1.assert(nextRelay.ackHeightB);
            t.assert(nextRelay.ackHeightB > nextRelay.packetHeightB); // ensure those packets were sent, and their acks as well

            _context13.next = 44;
            return checkPending(2, 1, 0, 0);

          case 44:
            _context13.next = 46;
            return link.checkAndRelayPacketsAndAcks(nextRelay);

          case 46:
            _context13.next = 48;
            return checkPending(2, 1, 0, 0);

          case 48:
            _context13.next = 50;
            return link.checkAndRelayPacketsAndAcks({});

          case 50:
            _context13.next = 52;
            return checkPending(0, 0, 0, 0);

          case 52:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x12) {
    return _ref14.apply(this, arguments);
  };
}());
ava_1["default"].serial('timeout expired packets', /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(t) {
    var logger, _yield$testutils_1$se25, _yield$testutils_1$se26, nodeA, nodeB, link, channels, noPackets, recipient, timeoutDestHeight, submitDestHeight, amounts, timeoutHeights, timedOut, plentyTime, timeoutTimes, txHeights, i, token, _yield$nodeA$transfer, height, packets, preAcks, currentHeight, currentTime, _utils_2$splitPending, toSubmit, toTimeout, txAcks, afterRelay, afterTimeout;

    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            logger = new testutils_1.TestLogger();
            _context14.next = 3;
            return testutils_1.setup(logger);

          case 3:
            _yield$testutils_1$se25 = _context14.sent;
            _yield$testutils_1$se26 = _slicedToArray(_yield$testutils_1$se25, 2);
            nodeA = _yield$testutils_1$se26[0];
            nodeB = _yield$testutils_1$se26[1];
            _context14.next = 9;
            return link_1.Link.createWithNewConnections(nodeA, nodeB, logger);

          case 9:
            link = _context14.sent;
            _context14.next = 12;
            return link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 12:
            channels = _context14.sent;
            _context14.next = 15;
            return link.endA.querySentPackets();

          case 15:
            noPackets = _context14.sent;
            t.is(noPackets.length, 0); // some basic setup for the transfers

            recipient = testutils_1.randomAddress(testutils_1.wasmd.prefix);
            _context14.next = 20;
            return nodeB.timeoutHeight(2);

          case 20:
            timeoutDestHeight = _context14.sent;
            _context14.next = 23;
            return nodeB.timeoutHeight(500);

          case 23:
            submitDestHeight = _context14.sent;
            amounts = [1000, 2222, 3456];
            timeoutHeights = [submitDestHeight, timeoutDestHeight, submitDestHeight];
            _context14.t0 = utils_2;
            _context14.next = 29;
            return nodeB.currentTime();

          case 29:
            _context14.t1 = _context14.sent;
            _context14.t2 = _context14.t0.secondsFromDateNanos.call(_context14.t0, _context14.t1);
            timedOut = _context14.t2 + 1;
            plentyTime = timedOut + 3000;
            timeoutTimes = [timedOut, plentyTime, plentyTime]; // Note: 1st times out with time, 2nd with height, 3rd is valid
            // let's make 3 transfer tx at different heights

            txHeights = [];
            i = 0;

          case 36:
            if (!(i < amounts.length)) {
              _context14.next = 46;
              break;
            }

            token = {
              amount: amounts[i].toString(),
              denom: testutils_1.simapp.denomFee
            };
            _context14.next = 40;
            return nodeA.transferTokens(channels.src.portId, channels.src.channelId, token, recipient, timeoutHeights[i], timeoutTimes[i]);

          case 40:
            _yield$nodeA$transfer = _context14.sent;
            height = _yield$nodeA$transfer.height;
            txHeights.push(height);

          case 43:
            ++i;
            _context14.next = 36;
            break;

          case 46:
            // ensure these are different
            t.assert(txHeights[1] > txHeights[0], txHeights.toString());
            t.assert(txHeights[2] > txHeights[1], txHeights.toString()); // need to wait briefly for it to be indexed

            _context14.next = 50;
            return utils_1.sleep(100);

          case 50:
            _context14.next = 52;
            return link.getPendingPackets('A');

          case 52:
            packets = _context14.sent;
            t.is(packets.length, 3);
            t.deepEqual(packets.map(function (_ref17) {
              var height = _ref17.height;
              return height;
            }), txHeights); // ensure no acks yet

            _context14.next = 57;
            return link.getPendingAcks('B');

          case 57:
            preAcks = _context14.sent;
            t.is(preAcks.length, 0); // wait to trigger timeout

            _context14.next = 61;
            return nodeA.waitOneBlock();

          case 61:
            _context14.next = 63;
            return nodeA.waitOneBlock();

          case 63:
            _context14.next = 65;
            return nodeA.waitOneBlock();

          case 65:
            _context14.next = 67;
            return link.endB.client.timeoutHeight(2);

          case 67:
            currentHeight = _context14.sent;
            _context14.t3 = utils_2;
            _context14.next = 71;
            return link.endB.client.currentTime();

          case 71:
            _context14.t4 = _context14.sent;
            _context14.t5 = _context14.t3.secondsFromDateNanos.call(_context14.t3, _context14.t4);
            currentTime = _context14.t5 + 1;
            _utils_2$splitPending = utils_2.splitPendingPackets(currentHeight, currentTime, packets), toSubmit = _utils_2$splitPending.toSubmit, toTimeout = _utils_2$splitPending.toTimeout;
            t.is(toSubmit.length, 1);
            t.is(toTimeout.length, 2); // submit the ones which didn't timeout

            _context14.next = 79;
            return link.relayPackets('A', toSubmit);

          case 79:
            txAcks = _context14.sent;
            t.is(txAcks.length, 1); // one completed after relay

            _context14.next = 83;
            return link.getPendingPackets('A');

          case 83:
            afterRelay = _context14.sent;
            t.is(afterRelay.length, 2); // try to submit the one which did timeout

            _context14.next = 87;
            return t.throwsAsync(function () {
              return link.relayPackets('A', toTimeout);
            });

          case 87:
            _context14.next = 89;
            return link.timeoutPackets('A', toTimeout);

          case 89:
            _context14.next = 91;
            return link.getPendingPackets('A');

          case 91:
            afterTimeout = _context14.sent;
            t.is(afterTimeout.length, 0);

          case 93:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function (_x17) {
    return _ref16.apply(this, arguments);
  };
}());
//# sourceMappingURL=link.spec.js.map