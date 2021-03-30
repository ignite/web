"use strict";
/*
This file is designed to be run to fund accounts and send packets when manually
testing ibc-setup and ibc-relayer on localhost.

Please configure the global variables to match the accounts displayed by
`ibc-setup keys list` before running.

Execute via:

yarn build && yarn test:unit ./src/lib/manual/create-packets.spec.ts
*/

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

var testutils_1 = require("../testutils");

var consts_1 = require("./consts");

ava_1["default"].serial.skip('send valid packets on existing channel', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
    var logger, _yield$testutils_1$se, _yield$testutils_1$se2, src, dest, srcAmounts, srcPackets, destAmounts, destPackets;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // create the basic clients
            logger = new testutils_1.TestLogger();
            _context.next = 3;
            return testutils_1.setup(logger);

          case 3:
            _yield$testutils_1$se = _context.sent;
            _yield$testutils_1$se2 = _slicedToArray(_yield$testutils_1$se, 2);
            src = _yield$testutils_1$se2[0];
            dest = _yield$testutils_1$se2[1];
            // send some from src to dest
            srcAmounts = [1200, 32222, 3456];
            _context.next = 10;
            return testutils_1.transferTokens(src, testutils_1.simapp.denomFee, dest, testutils_1.wasmd.prefix, consts_1.channels.src, srcAmounts);

          case 10:
            srcPackets = _context.sent;
            t.is(srcAmounts.length, srcPackets.length); // send some from dest to src

            destAmounts = [426238, 321989];
            _context.next = 15;
            return testutils_1.transferTokens(dest, testutils_1.wasmd.denomFee, src, testutils_1.simapp.prefix, consts_1.channels.dest, destAmounts);

          case 15:
            destPackets = _context.sent;
            t.is(destAmounts.length, destPackets.length);

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
//# sourceMappingURL=create-packets.spec.js.map