"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transferTokens = exports.randomAddress = exports.generateMnemonic = exports.fundAccount = exports.setup = exports.signingClient = exports.queryClient = exports.ics20 = exports.wasmd = exports.simapp = exports.TestLogger = void 0; // This file outputs some basic test functionality, and includes tests that they work

var crypto_1 = require("@cosmjs/crypto");

var encoding_1 = require("@cosmjs/encoding");

var launchpad_1 = require("@cosmjs/launchpad");

var proto_signing_1 = require("@cosmjs/proto-signing");

var stargate_1 = require("@cosmjs/stargate");

var sinon_1 = __importDefault(require("sinon"));

var channel_1 = require("../codec/ibc/core/channel/v1/channel");

var ibcclient_1 = require("./ibcclient");

var TestLogger = function TestLogger() {
  var _this = this;

  var shouldLog = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  _classCallCheck(this, TestLogger);

  var createSpy = function createSpy(logFn) {
    return sinon_1["default"].spy(function (message, meta) {
      logFn(message, meta ? JSON.stringify(meta) : undefined);
      return _this;
    }.bind(_this));
  };

  var createFake = function () {
    return sinon_1["default"].fake.returns(_this);
  }.bind(this);

  this.error = shouldLog ? createSpy(console.error) : createFake();
  this.warn = shouldLog ? createSpy(console.warn) : createFake();
  this.info = shouldLog ? createSpy(console.info) : createFake();
  this.verbose = shouldLog ? createSpy(console.log) : createFake();
  this.debug = createFake();
};

exports.TestLogger = TestLogger;
exports.simapp = {
  tendermintUrlWs: 'ws://localhost:26658',
  tendermintUrlHttp: 'http://localhost:26658',
  chainId: 'simd-testing',
  prefix: 'cosmos',
  denomStaking: 'umoo',
  denomFee: 'umuon',
  minFee: '0.025umuon',
  blockTime: 250,
  faucet: {
    mnemonic: 'economy stock theory fatal elder harbor betray wasp final emotion task crumble siren bottom lizard educate guess current outdoor pair theory focus wife stone',
    pubkey0: {
      type: 'tendermint/PubKeySecp256k1',
      value: 'A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ'
    },
    address0: 'cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6'
  },

  /** Unused account */
  unused: {
    pubkey: {
      type: 'tendermint/PubKeySecp256k1',
      value: 'ArkCaFUJ/IH+vKBmNRCdUVl3mCAhbopk9jjW4Ko4OfRQ'
    },
    address: 'cosmos1cjsxept9rkggzxztslae9ndgpdyt2408lk850u',
    accountNumber: 16,
    sequence: 0,
    balanceStaking: '10000000',
    balanceFee: '1000000000'
  }
};
exports.wasmd = {
  tendermintUrlWs: 'ws://localhost:26659',
  tendermintUrlHttp: 'http://localhost:26659',
  chainId: 'testing',
  prefix: 'wasm',
  denomStaking: 'ustake',
  denomFee: 'ucosm',
  minFee: '0.025ucosm',
  blockTime: 250,
  faucet: {
    mnemonic: 'enlist hip relief stomach skate base shallow young switch frequent cry park',
    pubkey0: {
      type: 'tendermint/PubKeySecp256k1',
      value: 'A9cXhWb8ZpqCzkA8dQCPV29KdeRLV3rUYxrkHudLbQtS'
    },
    address0: 'wasm14qemq0vw6y3gc3u3e0aty2e764u4gs5lndxgyk'
  },
  unused: {
    pubkey: {
      type: 'tendermint/PubKeySecp256k1',
      value: 'ArkCaFUJ/IH+vKBmNRCdUVl3mCAhbopk9jjW4Ko4OfRQ'
    },
    address: 'wasm1cjsxept9rkggzxztslae9ndgpdyt240842kpxh',
    accountNumber: 16,
    sequence: 0,
    balanceStaking: '10000000',
    balanceFee: '1000000000'
  }
}; // constants for this transport protocol
// we assume src = simapp, dest = wasmd as returned by setup()

exports.ics20 = {
  // we set a new port in genesis for simapp
  srcPortId: 'custom',
  destPortId: 'transfer',
  version: 'ics20-1',
  ordering: channel_1.Order.ORDER_UNORDERED
};

function queryClient(_x) {
  return _queryClient.apply(this, arguments);
}

function _queryClient() {
  _queryClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(opts) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", stargate_1.StargateClient.connect(opts.tendermintUrlHttp));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _queryClient.apply(this, arguments);
}

exports.queryClient = queryClient;

function signingClient(_x2, _x3, _x4) {
  return _signingClient.apply(this, arguments);
}

function _signingClient() {
  _signingClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(opts, mnemonic, logger) {
    var signer, address, options, client;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, undefined, opts.prefix);

          case 2:
            signer = _context2.sent;
            _context2.next = 5;
            return signer.getAccounts();

          case 5:
            address = _context2.sent[0].address;
            options = {
              prefix: opts.prefix,
              gasPrice: launchpad_1.GasPrice.fromString(opts.minFee),
              logger: logger
            };
            _context2.next = 9;
            return ibcclient_1.IbcClient.connectWithSigner(opts.tendermintUrlHttp, signer, address, options);

          case 9:
            client = _context2.sent;
            return _context2.abrupt("return", client);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _signingClient.apply(this, arguments);
}

exports.signingClient = signingClient;

function setup(_x5) {
  return _setup.apply(this, arguments);
}

function _setup() {
  _setup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(logger) {
    var mnemonic, src, dest;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // create apps and fund an account
            mnemonic = generateMnemonic();
            _context3.next = 3;
            return signingClient(exports.simapp, mnemonic, logger);

          case 3:
            src = _context3.sent;
            _context3.next = 6;
            return signingClient(exports.wasmd, mnemonic, logger);

          case 6:
            dest = _context3.sent;
            _context3.next = 9;
            return fundAccount(exports.wasmd, dest.senderAddress, '4000000');

          case 9:
            _context3.next = 11;
            return fundAccount(exports.simapp, src.senderAddress, '4000000');

          case 11:
            return _context3.abrupt("return", [src, dest]);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _setup.apply(this, arguments);
}

exports.setup = setup;

function fundAccount(_x6, _x7, _x8) {
  return _fundAccount.apply(this, arguments);
}

function _fundAccount() {
  _fundAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(opts, rcpt, amount) {
    var client, feeTokens;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return signingClient(opts, opts.faucet.mnemonic);

          case 2:
            client = _context4.sent;
            feeTokens = {
              amount: amount,
              denom: launchpad_1.GasPrice.fromString(opts.minFee).denom
            };
            _context4.next = 6;
            return client.sendTokens(rcpt, [feeTokens]);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _fundAccount.apply(this, arguments);
}

exports.fundAccount = fundAccount;

function generateMnemonic() {
  return crypto_1.Bip39.encode(crypto_1.Random.getBytes(16)).toString();
}

exports.generateMnemonic = generateMnemonic;

function randomAddress(prefix) {
  var random = crypto_1.Random.getBytes(20);
  return encoding_1.Bech32.encode(prefix, random);
}

exports.randomAddress = randomAddress; // Makes multiple transfers, one per item in amounts.
// Return a list of the block heights the packets were committed in.

function transferTokens(_x9, _x10, _x11, _x12, _x13, _x14, _x15) {
  return _transferTokens.apply(this, arguments);
}

function _transferTokens() {
  _transferTokens = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(src, srcDenom, dest, destPrefix, channel, amounts, timeout) {
    var txHeights, destRcpt, destHeight, _iterator, _step, amount, token, _yield$src$transferTo, height;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            txHeights = [];
            destRcpt = randomAddress(destPrefix);
            _context5.next = 4;
            return dest.timeoutHeight(timeout !== null && timeout !== void 0 ? timeout : 500);

          case 4:
            destHeight = _context5.sent;
            // valid for 500 blocks or timeout if specified
            _iterator = _createForOfIteratorHelper(amounts);
            _context5.prev = 6;

            _iterator.s();

          case 8:
            if ((_step = _iterator.n()).done) {
              _context5.next = 18;
              break;
            }

            amount = _step.value;
            token = {
              amount: amount.toString(),
              denom: srcDenom
            };
            _context5.next = 13;
            return src.transferTokens(channel.portId, channel.channelId, token, destRcpt, destHeight);

          case 13:
            _yield$src$transferTo = _context5.sent;
            height = _yield$src$transferTo.height;
            txHeights.push(height);

          case 16:
            _context5.next = 8;
            break;

          case 18:
            _context5.next = 23;
            break;

          case 20:
            _context5.prev = 20;
            _context5.t0 = _context5["catch"](6);

            _iterator.e(_context5.t0);

          case 23:
            _context5.prev = 23;

            _iterator.f();

            return _context5.finish(23);

          case 26:
            return _context5.abrupt("return", txHeights);

          case 27:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[6, 20, 23, 26]]);
  }));
  return _transferTokens.apply(this, arguments);
}

exports.transferTokens = transferTokens;
//# sourceMappingURL=testutils.js.map