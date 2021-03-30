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

var ava_1 = __importDefault(require("ava"));

var link_1 = require("./link");

var testutils_1 = require("./testutils");

var utils_1 = require("./utils");

ava_1["default"].serial('submit multiple tx, query all packets', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
    var _yield$testutils_1$se, _yield$testutils_1$se2, nodeA, nodeB, link, channels, packets1, recipient, destHeight, amounts, txHeights, _i2, _amounts, amount, token, _yield$nodeA$transfer, height, packets2, packets3, packets4, packets5, packets6, acksA1, acksB1, headerHeight, sendPackets, proofs, _yield$nodeB$receiveP, relayLog, txAcks, acksA2, acksB2;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return testutils_1.setup();

          case 2:
            _yield$testutils_1$se = _context.sent;
            _yield$testutils_1$se2 = _slicedToArray(_yield$testutils_1$se, 2);
            nodeA = _yield$testutils_1$se2[0];
            nodeB = _yield$testutils_1$se2[1];
            _context.next = 8;
            return link_1.Link.createWithNewConnections(nodeA, nodeB);

          case 8:
            link = _context.sent;
            _context.next = 11;
            return link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);

          case 11:
            channels = _context.sent;
            _context.next = 14;
            return link.endA.querySentPackets();

          case 14:
            packets1 = _context.sent;
            t.is(packets1.length, 0); // some basic setup for the transfers

            recipient = testutils_1.randomAddress(testutils_1.wasmd.prefix);
            _context.next = 19;
            return nodeB.timeoutHeight(500);

          case 19:
            destHeight = _context.sent;
            // valid for 500 blocks
            amounts = [1000, 2222, 3456]; // const totalSent = amounts.reduce((a, b) => a + b, 0);
            // let's make 3 transfer tx at different heights

            txHeights = [];
            _i2 = 0, _amounts = amounts;

          case 23:
            if (!(_i2 < _amounts.length)) {
              _context.next = 34;
              break;
            }

            amount = _amounts[_i2];
            token = {
              amount: amount.toString(),
              denom: testutils_1.simapp.denomFee
            };
            _context.next = 28;
            return nodeA.transferTokens(channels.src.portId, channels.src.channelId, token, recipient, destHeight);

          case 28:
            _yield$nodeA$transfer = _context.sent;
            height = _yield$nodeA$transfer.height;
            // console.log(JSON.stringify(logs[0].events, undefined, 2));
            txHeights.push(height);

          case 31:
            _i2++;
            _context.next = 23;
            break;

          case 34:
            // ensure these are different
            t.assert(txHeights[1] > txHeights[0], txHeights.toString());
            t.assert(txHeights[2] > txHeights[1], txHeights.toString()); // wait for this to get indexed

            _context.next = 38;
            return nodeA.waitOneBlock();

          case 38:
            _context.next = 40;
            return link.endA.querySentPackets();

          case 40:
            packets2 = _context.sent;
            t.is(packets2.length, 3);
            t.deepEqual(packets2.map(function (_ref2) {
              var height = _ref2.height;
              return height;
            }), txHeights); // filter by minimum height

            _context.next = 45;
            return link.endA.querySentPackets({
              minHeight: txHeights[1]
            });

          case 45:
            packets3 = _context.sent;
            t.is(packets3.length, 2);
            _context.next = 49;
            return link.endA.querySentPackets({
              minHeight: txHeights[2] + 1
            });

          case 49:
            packets4 = _context.sent;
            t.is(packets4.length, 0); // filter by maximum height

            _context.next = 53;
            return link.endA.querySentPackets({
              maxHeight: txHeights[1]
            });

          case 53:
            packets5 = _context.sent;
            t.is(packets5.length, 2);
            _context.next = 57;
            return link.endA.querySentPackets({
              minHeight: txHeights[1],
              maxHeight: txHeights[1]
            });

          case 57:
            packets6 = _context.sent;
            t.is(packets6.length, 1); // ensure no acks on either chain

            _context.next = 61;
            return link.endA.queryWrittenAcks();

          case 61:
            acksA1 = _context.sent;
            t.is(acksA1.length, 0);
            _context.next = 65;
            return link.endB.queryWrittenAcks();

          case 65:
            acksB1 = _context.sent;
            t.is(acksB1.length, 0); // relay 2 packets to the other side

            _context.next = 69;
            return nodeA.waitOneBlock();

          case 69:
            _context.next = 71;
            return nodeB.doUpdateClient(link.endB.clientID, nodeA);

          case 71:
            headerHeight = _context.sent;
            sendPackets = packets3.map(function (_ref3) {
              var packet = _ref3.packet;
              return packet;
            });
            _context.next = 75;
            return Promise.all(sendPackets.map(function (packet) {
              return nodeA.getPacketProof(packet, headerHeight);
            }));

          case 75:
            proofs = _context.sent;
            _context.next = 78;
            return nodeB.receivePackets(sendPackets, proofs, headerHeight);

          case 78:
            _yield$nodeB$receiveP = _context.sent;
            relayLog = _yield$nodeB$receiveP.logs;
            txAcks = utils_1.parseAcksFromLogs(relayLog);
            t.is(txAcks.length, 2); // do we always need to sleep for the indexer?

            _context.next = 84;
            return link.endB.client.waitForIndexer();

          case 84:
            _context.next = 86;
            return link.endA.queryWrittenAcks();

          case 86:
            acksA2 = _context.sent;
            t.is(acksA2.length, 0);
            _context.next = 90;
            return link.endB.queryWrittenAcks();

          case 90:
            acksB2 = _context.sent;
            t.is(acksB2.length, 2);

          case 92:
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
//# sourceMappingURL=endpoint.spec.js.map