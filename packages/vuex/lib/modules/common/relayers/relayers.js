"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _starportSigningClient = _interopRequireDefault(require("./lib/starportSigningClient"));

var _SpVuexError = _interopRequireDefault(require("../../../errors/SpVuexError"));

var _tsRelayer = require("./ts-relayer");

var _protoSigning = require("@cosmjs/proto-signing");

var _crypto = require("@cosmjs/crypto");

var _utils = require("@cosmjs/utils");

var _launchpad = require("@cosmjs/launchpad");

var _stargate = require("@cosmjs/stargate");

var _tendermintRpc = require("@cosmjs/tendermint-rpc");

var _tx = require("./ts-relayer/codec/ibc/applications/transfer/v1/tx");

var _tx2 = require("./ts-relayer/codec/ibc/core/channel/v1/tx");

var _tx3 = require("./ts-relayer/codec/ibc/core/client/v1/tx");

var _tx4 = require("./ts-relayer/codec/ibc/core/connection/v1/tx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ibcRegistry() {
  return new _protoSigning.Registry([].concat(_toConsumableArray(_stargate.defaultRegistryTypes), [["/ibc.core.client.v1.MsgCreateClient", _tx3.MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", _tx3.MsgUpdateClient], ["/ibc.core.connection.v1.MsgConnectionOpenInit", _tx4.MsgConnectionOpenInit], ["/ibc.core.connection.v1.MsgConnectionOpenTry", _tx4.MsgConnectionOpenTry], ["/ibc.core.connection.v1.MsgConnectionOpenAck", _tx4.MsgConnectionOpenAck], ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", _tx4.MsgConnectionOpenConfirm], ["/ibc.core.channel.v1.MsgChannelOpenInit", _tx2.MsgChannelOpenInit], ["/ibc.core.channel.v1.MsgChannelOpenTry", _tx2.MsgChannelOpenTry], ["/ibc.core.channel.v1.MsgChannelOpenAck", _tx2.MsgChannelOpenAck], ["/ibc.core.channel.v1.MsgChannelOpenConfirm", _tx2.MsgChannelOpenConfirm], ["/ibc.core.channel.v1.MsgRecvPacket", _tx2.MsgRecvPacket], ["/ibc.core.channel.v1.MsgAcknowledgement", _tx2.MsgAcknowledgement], ["/ibc.core.channel.v1.MsgTimeout", _tx2.MsgTimeout], ["/ibc.applications.transfer.v1.MsgTransfer", _tx.MsgTransfer]]));
}

var getDefaultState = function getDefaultState() {
  return {
    relayers: [],
    transientLog: {
      msg: ''
    },
    relayerLinks: {}
  };
}; // initial state


var state = getDefaultState();
var _default = {
  namespaced: true,
  state: state,
  getters: {
    getRelayer: function getRelayer(state) {
      return function (name) {
        return state.relayers.find(function (x) {
          return x.name == name;
        });
      };
    },
    getRelayers: function getRelayers(state) {
      return state.relayers;
    },
    getRelayerLink: function getRelayerLink(state) {
      return function (name) {
        return state.relayerLinks[name];
      };
    }
  },
  mutations: {
    RESET_STATE: function RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    },
    SET_RELAYERS: function SET_RELAYERS(state, relayers) {
      state.relayers = relayers;
    },
    CREATE_RELAYER: function CREATE_RELAYER(state, relayer) {
      state.relayers = [].concat(_toConsumableArray(state.relayers), [relayer]);
    },
    LINK_RELAYER: function LINK_RELAYER(state, _ref) {
      var name = _ref.name,
          link = _ref.link,
          linkDetails = _objectWithoutProperties(_ref, ["name", "link"]);

      var relayerIndex = state.relayers.findIndex(function (x) {
        return x.name == name;
      });
      state.relayers[relayerIndex] = _objectSpread(_objectSpread({
        status: 'linked'
      }, state.relayers[relayerIndex]), linkDetails);
      state.relayerLinks[name] = link;
    },
    CONNECT_RELAYER: function CONNECT_RELAYER(state, _ref2) {
      var name = _ref2.name,
          channelDetails = _objectWithoutProperties(_ref2, ["name"]);

      var relayerIndex = state.relayers.findIndex(function (x) {
        return x.name == name;
      });
      state.relayers[relayerIndex] = _objectSpread(_objectSpread({
        status: 'connected'
      }, state.relayers[relayerIndex]), channelDetails);
    },
    RUN_RELAYER: function RUN_RELAYER(state, name) {
      state.relayers.find(function (x) {
        return x.name == name;
      }).running = true;
    },
    STOP_RELAYER: function STOP_RELAYER(state, name) {
      state.relayers.find(function (x) {
        return x.name == name;
      }).running = false;
    },
    SET_LOG_MSG: function SET_LOG_MSG(state, msg) {
      state.transientLog.message = msg;
    },
    LAST_QUERIED_HEIGHTS: function LAST_QUERIED_HEIGHTS(state, _ref3) {
      var name = _ref3.name,
          heights = _ref3.heights;
      state.relayers.find(function (x) {
        return x.name == name;
      }).heights = heights;
    }
  },
  actions: {
    init: function init(_ref4) {
      var commit = _ref4.commit,
          rootGetters = _ref4.rootGetters,
          dispatch = _ref4.dispatch;
      commit('RESET_STATE');
      var relayers = rootGetters['common/wallet/relayers'];
      commit('SET_RELAYERS', relayers);
      relayers.forEach(function (relayer) {
        if (relayer.status == 'linked' || relayer.status == 'connected') {
          dispatch('loadRelayer', relayer.name);
        }
      });
    },
    createRelayer: function createRelayer(_ref5, _ref6) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var commit, rootGetters, dispatch, name, prefix, endpoint, gasPrice, relayer, signerB, _yield$signerB$getAcc, _yield$signerB$getAcc2, accountB;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref5.commit, rootGetters = _ref5.rootGetters, dispatch = _ref5.dispatch;
                name = _ref6.name, prefix = _ref6.prefix, endpoint = _ref6.endpoint, gasPrice = _ref6.gasPrice;
                relayer = {
                  name: name,
                  prefix: prefix,
                  endpoint: endpoint,
                  gasPrice: gasPrice,
                  status: "created",
                  heights: {},
                  running: false
                };
                _context.next = 5;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(rootGetters['common/wallet/getMnemonic'], (0, _crypto.stringToPath)(rootGetters['common/wallet/getPath']), prefix);

              case 5:
                signerB = _context.sent;
                _context.next = 8;
                return signerB.getAccounts();

              case 8:
                _yield$signerB$getAcc = _context.sent;
                _yield$signerB$getAcc2 = _slicedToArray(_yield$signerB$getAcc, 1);
                accountB = _yield$signerB$getAcc2[0];
                relayer.targetAddress = accountB.address;
                commit('CREATE_RELAYER', relayer);
                dispatch('common/wallet/updateRelayers', getters['getRelayers'], {
                  root: true
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadRelayer: function loadRelayer(_ref7, _ref8) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit, rootGetters, getters, dispatch, name, relayer, signerA, signerB, _yield$signerA$getAcc, _yield$signerA$getAcc2, accountA, _yield$signerB$getAcc3, _yield$signerB$getAcc4, accountB, transientLog, optionsA, tmClientA, signingClientA, chainIdA, optionsB, tmClientB, signingClientB, chainIdB, clientA, clientB, link, linkData;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref7.commit, rootGetters = _ref7.rootGetters, getters = _ref7.getters, dispatch = _ref7.dispatch;
                name = _ref8.name;
                relayer = getters['getRelayer'](name);

                if (!(relayer.status !== 'linked' && relayer.status !== 'connected')) {
                  _context2.next = 5;
                  break;
                }

                throw new _SpVuexError["default"]('relayers:connectRelayer', 'Relayer already connected.');

              case 5:
                _context2.prev = 5;
                _context2.next = 8;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(rootGetters['common/wallet/getMnemonic'], (0, _crypto.stringToPath)(rootGetters['common/wallet/getPath']), rootGetters['common/env/addrPrefix']);

              case 8:
                signerA = _context2.sent;
                _context2.next = 11;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(rootGetters['common/wallet/getMnemonic'], (0, _crypto.stringToPath)(rootGetters['common/wallet/getPath']), relayer.prefix);

              case 11:
                signerB = _context2.sent;
                _context2.next = 14;
                return signerA.getAccounts();

              case 14:
                _yield$signerA$getAcc = _context2.sent;
                _yield$signerA$getAcc2 = _slicedToArray(_yield$signerA$getAcc, 1);
                accountA = _yield$signerA$getAcc2[0];
                _context2.next = 19;
                return signerB.getAccounts();

              case 19:
                _yield$signerB$getAcc3 = _context2.sent;
                _yield$signerB$getAcc4 = _slicedToArray(_yield$signerB$getAcc3, 1);
                accountB = _yield$signerB$getAcc4[0];
                transientLog = {
                  info: function info(msg) {
                    commit('SET_LOG_MSG', msg);
                  },
                  error: function error() {},
                  warn: function warn() {},
                  verbose: function verbose() {},
                  debug: function debug() {}
                };
                optionsA = {
                  prefix: rootGetters['common/env/addrPrefix'],
                  logger: transientLog,
                  gasPrice: _launchpad.GasPrice.fromString("0.00000025token"),
                  registry: ibcRegistry()
                };
                _context2.next = 26;
                return _tendermintRpc.Tendermint34Client.connect(rootGetters['common/env/apiTendermint']);

              case 26:
                tmClientA = _context2.sent;
                signingClientA = new _starportSigningClient["default"](tmClientA, signerA, optionsA);
                _context2.next = 30;
                return signingClientA.getChainId();

              case 30:
                chainIdA = _context2.sent;
                optionsB = {
                  prefix: relayer.prefix,
                  logger: transientLog,
                  gasPrice: _launchpad.GasPrice.fromString(relayer.gasPrice),
                  registry: ibcRegistry()
                };
                _context2.next = 34;
                return _tendermintRpc.Tendermint34Client.connect(relayer.endpoint);

              case 34:
                tmClientB = _context2.sent;
                signingClientB = new _starportSigningClient["default"](tmClientB, signerB, optionsB);
                _context2.next = 38;
                return signingClientB.getChainId();

              case 38:
                chainIdB = _context2.sent;
                clientA = new _tsRelayer.IbcClient(signingClientA, tmClientA, accountA.address, chainIdA, optionsA);
                clientB = new _tsRelayer.IbcClient(signingClientB, tmClientB, accountB.address, chainIdB, optionsB);
                _context2.next = 43;
                return _tsRelayer.Link.createWithExistingConnections(clientA, clientB, relayer.endA.connectionID, relayer.endB.connectionID);

              case 43:
                link = _context2.sent;
                linkData = {
                  name: name,
                  link: link,
                  chainIdA: chainIdA,
                  chainIdB: chainIdB,
                  endA: {
                    clientID: link.endA.clientID,
                    connectionID: link.endA.connectionID
                  },
                  endB: {
                    clientID: link.endB.clientID,
                    connectionID: link.endB.connectionID
                  }
                };
                commit('LINK_RELAYER', linkData);
                dispatch('common/wallet/updateRelayers', getters['getRelayers'], {
                  root: true
                });

                if (!(relayer.status != 'connected')) {
                  _context2.next = 52;
                  break;
                }

                _context2.next = 50;
                return dispatch('connectRelayer', relayer.name);

              case 50:
                _context2.next = 53;
                break;

              case 52:
                if (relayer.running) {
                  dispatch('runRelayer', relayer.name);
                }

              case 53:
                _context2.next = 57;
                break;

              case 55:
                _context2.prev = 55;
                _context2.t0 = _context2["catch"](5);

              case 57:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 55]]);
      }))();
    },
    linkRelayer: function linkRelayer(_ref9, _ref10) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var commit, rootGetters, getters, dispatch, name, relayer, signerA, signerB, _yield$signerA$getAcc3, _yield$signerA$getAcc4, accountA, _yield$signerB$getAcc5, _yield$signerB$getAcc6, accountB, transientLog, optionsA, tmClientA, signingClientA, chainIdA, optionsB, tmClientB, signingClientB, chainIdB, clientA, clientB, link, linkData;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref9.commit, rootGetters = _ref9.rootGetters, getters = _ref9.getters, dispatch = _ref9.dispatch;
                name = _ref10.name;
                relayer = getters['getRelayer'](name);

                if (!(relayer.status !== 'created')) {
                  _context3.next = 5;
                  break;
                }

                throw new _SpVuexError["default"]('relayers:connectRelayer', 'Relayer already connected.');

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(rootGetters['common/wallet/getMnemonic'], (0, _crypto.stringToPath)(rootGetters['common/wallet/getPath']), rootGetters['common/env/addrPrefix']);

              case 8:
                signerA = _context3.sent;
                _context3.next = 11;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(rootGetters['common/wallet/getMnemonic'], (0, _crypto.stringToPath)(rootGetters['common/wallet/getPath']), relayer.prefix);

              case 11:
                signerB = _context3.sent;
                _context3.next = 14;
                return signerA.getAccounts();

              case 14:
                _yield$signerA$getAcc3 = _context3.sent;
                _yield$signerA$getAcc4 = _slicedToArray(_yield$signerA$getAcc3, 1);
                accountA = _yield$signerA$getAcc4[0];
                _context3.next = 19;
                return signerB.getAccounts();

              case 19:
                _yield$signerB$getAcc5 = _context3.sent;
                _yield$signerB$getAcc6 = _slicedToArray(_yield$signerB$getAcc5, 1);
                accountB = _yield$signerB$getAcc6[0];
                transientLog = {
                  info: function info(msg) {
                    commit('SET_LOG_MSG', msg);
                  },
                  error: function error() {},
                  warn: function warn() {},
                  verbose: function verbose() {},
                  debug: function debug() {}
                };
                optionsA = {
                  prefix: rootGetters['common/env/addrPrefix'],
                  logger: transientLog,
                  gasPrice: _launchpad.GasPrice.fromString("0.00000025token"),
                  registry: ibcRegistry()
                };
                _context3.next = 26;
                return _tendermintRpc.Tendermint34Client.connect(rootGetters['common/env/apiTendermint']);

              case 26:
                tmClientA = _context3.sent;
                signingClientA = new _starportSigningClient["default"](tmClientA, signerA, optionsA);
                _context3.next = 30;
                return signingClientA.getChainId();

              case 30:
                chainIdA = _context3.sent;
                optionsB = {
                  prefix: relayer.prefix,
                  logger: transientLog,
                  gasPrice: _launchpad.GasPrice.fromString(relayer.gasPrice),
                  registry: ibcRegistry()
                };
                _context3.next = 34;
                return _tendermintRpc.Tendermint34Client.connect(relayer.endpoint);

              case 34:
                tmClientB = _context3.sent;
                signingClientB = new _starportSigningClient["default"](tmClientB, signerB, optionsB);
                _context3.next = 38;
                return signingClientB.getChainId();

              case 38:
                chainIdB = _context3.sent;
                clientA = new _tsRelayer.IbcClient(signingClientA, tmClientA, accountA.address, chainIdA, optionsA);
                clientB = new _tsRelayer.IbcClient(signingClientB, tmClientB, accountB.address, chainIdB, optionsB);
                _context3.next = 43;
                return _tsRelayer.Link.createWithNewConnections(clientA, clientB);

              case 43:
                link = _context3.sent;
                linkData = {
                  name: name,
                  link: link,
                  chainIdA: chainIdA,
                  chainIdB: chainIdB,
                  endA: {
                    clientID: link.endA.clientID,
                    connectionID: link.endA.connectionID
                  },
                  endB: {
                    clientID: link.endB.clientID,
                    connectionID: link.endB.connectionID
                  }
                };
                commit('LINK_RELAYER', linkData);
                dispatch('common/wallet/updateRelayers', getters['getRelayers'], {
                  root: true
                });
                _context3.next = 49;
                return dispatch('connectRelayer', name);

              case 49:
                _context3.next = 53;
                break;

              case 51:
                _context3.prev = 51;
                _context3.t0 = _context3["catch"](5);

              case 53:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 51]]);
      }))();
    },
    connectRelayer: function connectRelayer(_ref11, name) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var commit, getters, dispatch, relayerLink, channels, channelData;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref11.commit, getters = _ref11.getters, dispatch = _ref11.dispatch;
                relayerLink = getters['getRelayerLink'](name);
                _context4.next = 4;
                return relayerLink.createChannel("A", "transfer", "transfer", 1, "ics20-1");

              case 4:
                channels = _context4.sent;
                channelData = _objectSpread({
                  name: name
                }, channels);
                commit("CONNECT_RELAYER", channelData);
                dispatch('common/wallet/updateRelayers', getters['getRelayers'], {
                  root: true
                });
                dispatch('runRelayer', name);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    runRelayer: function runRelayer(_ref12, name) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var commit, getters, dispatch, relayerLink;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref12.commit, getters = _ref12.getters, dispatch = _ref12.dispatch;
                relayerLink = getters['getRelayerLink'](name);
                commit("RUN_RELAYER", name);
                dispatch('common/wallet/updateRelayers', getters['getRelayers'], {
                  root: true
                });
                dispatch('relayerLoop', name, relayerLink, {
                  poll: 1,
                  maxAgeDest: 86400,
                  maxAgeSrc: 86400
                });

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    stopRelayer: function stopRelayer(_ref13, name) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var commit;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref13.commit;
                commit("STOP_RELAYER", name);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    relayerLoop: function relayerLoop(_ref14, _ref15) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _relayer$heights;

        var getters, commit, dispatch, name, link, options, relayer, nextRelay;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                getters = _ref14.getters, commit = _ref14.commit, dispatch = _ref14.dispatch;
                name = _ref15.name, link = _ref15.link, options = _ref15.options;
                relayer = getters['getRelayer'](name);
                nextRelay = (_relayer$heights = relayer.heights) !== null && _relayer$heights !== void 0 ? _relayer$heights : {};

              case 4:
                if (!getters['getRelayer'](name).running) {
                  _context7.next = 24;
                  break;
                }

                _context7.prev = 5;
                _context7.next = 8;
                return link.checkAndRelayPacketsAndAcks(nextRelay, 2, 6);

              case 8:
                nextRelay = _context7.sent;
                commit("LAST_QUERIED_HEIGHTS", {
                  name: name,
                  heights: nextRelay
                });
                dispatch('common/wallet/updateRelayers', getters['getRelayers'], {
                  root: true
                });
                _context7.next = 13;
                return link.updateClientIfStale("A", options.maxAgeDest);

              case 13:
                _context7.next = 15;
                return link.updateClientIfStale("B", options.maxAgeSrc);

              case 15:
                _context7.next = 20;
                break;

              case 17:
                _context7.prev = 17;
                _context7.t0 = _context7["catch"](5);
                console.error("Caught error: ", _context7.t0);

              case 20:
                _context7.next = 22;
                return (0, _utils.sleep)(options.poll * 1000);

              case 22:
                _context7.next = 4;
                break;

              case 24:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[5, 17]]);
      }))();
    }
  }
};
exports["default"] = _default;
//# sourceMappingURL=relayers.js.map