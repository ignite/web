"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _clientJs = _interopRequireDefault(require("@starport/client-js"));

var _SpVuexError = _interopRequireDefault(require("../../../errors/SpVuexError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  namespaced: true,
  state: function state() {
    return {
      chainId: null,
      addrPrefix: '',
      sdkVersion: 'Stargate',
      apiNode: null,
      rpcNode: null,
      wsNode: null,
      client: null,
      apiConnected: false,
      rpcConnected: false,
      wsConnected: false,
      getTXApi: '',
      initialized: false
    };
  },
  getters: {
    client: function client(state) {
      return state.client;
    },
    signingClient: function signingClient(state) {
      return state.client.signingClient;
    },
    addrPrefix: function addrPrefix(state) {
      return state.addrPrefix;
    },
    apiTendermint: function apiTendermint(state) {
      return state.rpcNode;
    },
    apiCosmos: function apiCosmos(state) {
      return state.apiNode;
    },
    apiWS: function apiWS(state) {
      return state.wsNode;
    },
    sdkVersion: function sdkVersion(state) {
      return state.sdkVersion;
    },
    apiConnected: function apiConnected(state) {
      return state.apiConnected;
    },
    rpcConnected: function rpcConnected(state) {
      return state.rpcConnected;
    },
    wsConnected: function wsConnected(state) {
      return state.wsConnected;
    }
  },
  mutations: {
    SET_CONFIG: function SET_CONFIG(state, config) {
      state.apiNode = config.apiNode;

      if (config.rpcNode) {
        state.rpcNode = config.rpcNode;
      }

      if (config.wsNode) {
        state.wsNode = config.wsNode;
      }

      if (config.chainId) {
        state.chainId = config.chainId;
      }

      if (config.addrPrefix) {
        state.addrPrefix = config.addrPrefix;
      }

      if (config.sdkVersion) {
        state.sdkVersion = config.sdkVersion;
      }

      if (config.getTXApi) {
        state.getTXApi = config.getTXApi;
      }
    },
    CONNECT: function CONNECT(state, _ref) {
      var client = _ref.client;
      state.client = client;
    },
    INITIALIZE_WS_COMPLETE: function INITIALIZE_WS_COMPLETE(state) {
      state.initialized = true;
    },
    SET_WS_STATUS: function SET_WS_STATUS(state, status) {
      state.wsConnected = status;
    },
    SET_API_STATUS: function SET_API_STATUS(state, status) {
      state.apiConnected = status;
    },
    SET_RPC_STATUS: function SET_RPC_STATUS(state, status) {
      state.rpcConnected = status;
    },
    SET_TX_API: function SET_TX_API(state, txapi) {
      state.getTXApi = txapi;
    }
  },
  actions: {
    init: function init(_ref2) {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var dispatch, config;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = _ref2.dispatch;
                config = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {
                  starportUrl: 'http://localhost:12345',
                  apiNode: 'http://localhost:1317',
                  rpcNode: 'http://localhost:26657',
                  wsNode: 'ws://localhost:26657/websocket',
                  chainId: '',
                  addrPrefix: '',
                  sdkVersion: 'Stargate',
                  getTXApi: 'http://localhost:26657/tx?hash=0x'
                };

                if (!_this._actions['common/starport/init']) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return dispatch('common/starport/init', null, {
                  root: true
                });

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
                throw new _SpVuexError["default"]('Env:Init:Starport', 'Could not initialize common/starport module');

              case 11:
                _context.next = 21;
                break;

              case 13:
                _context.prev = 13;
                _context.next = 16;
                return dispatch('config', config);

              case 16:
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t1 = _context["catch"](13);
                throw new _SpVuexError["default"]('Env:Config', 'Could not configure environment');

              case 21:
                console.log('Vuex nodule: common.env initialized!');

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 8], [13, 18]]);
      }))();
    },
    setTxAPI: function setTxAPI(_ref3, payload) {
      var commit = _ref3.commit;
      commit('SET_TX_API', payload);
    },
    setConnectivity: function setConnectivity(_ref4, payload) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref4.commit;
                _context2.t0 = payload.connection;
                _context2.next = _context2.t0 === 'ws' ? 4 : _context2.t0 === 'api' ? 6 : _context2.t0 === 'rpc' ? 8 : 10;
                break;

              case 4:
                commit('SET_WS_STATUS', payload.status);
                return _context2.abrupt("break", 10);

              case 6:
                commit('SET_API_STATUS', payload.status);
                return _context2.abrupt("break", 10);

              case 8:
                commit('SET_RPC_STATUS', payload.status);
                return _context2.abrupt("break", 10);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    signIn: function signIn(_ref5, signer) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var commit, state;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref5.commit, state = _ref5.state;
                _context3.prev = 1;
                _context3.next = 4;
                return state.client.useSigner(signer);

              case 4:
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](1);
                throw new _SpVuexError["default"]('Env:Client:Wallet', 'Could not create signing client with signer: ' + signer);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 6]]);
      }))();
    },
    config: function config(_ref6) {
      var _arguments2 = arguments;
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var commit, rootGetters, state, dispatch, config, client, reconnectWS, reconnectSigningClient, reconnectClient;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref6.commit, rootGetters = _ref6.rootGetters, state = _ref6.state, dispatch = _ref6.dispatch;
                config = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : {
                  apiNode: 'http://localhost:1317',
                  rpcNode: 'http://localhost:26657',
                  wsNode: 'ws://localhost:26657/websocket',
                  chainId: '',
                  addrPrefix: '',
                  sdkVersion: 'Stargate',
                  getTXApi: 'http://localhost:26657/tx?hash=0x'
                };
                _context4.prev = 2;

                if (state.client) {
                  _context4.next = 14;
                  break;
                }

                client = new _clientJs["default"]({
                  apiAddr: config.apiNode,
                  rpcAddr: config.rpcNode,
                  wsAddr: config.wsNode
                });
                client.setMaxListeners(0);
                client.on('ws-status', function (status) {
                  return dispatch('setConnectivity', {
                    connection: 'ws',
                    status: status
                  });
                });
                client.on('api-status', function (status) {
                  return dispatch('setConnectivity', {
                    connection: 'api',
                    status: status
                  });
                });
                client.on('rpc-status', function (status) {
                  return dispatch('setConnectivity', {
                    connection: 'rpc',
                    status: status
                  });
                });
                commit('SET_CONFIG', config);
                commit('CONNECT', {
                  client: client
                });
                commit('INITIALIZE_WS_COMPLETE');
                _context4.next = 41;
                break;

              case 14:
                client = state.client;
                reconnectWS = false;
                reconnectSigningClient = false;
                reconnectClient = false;

                if (config.wsNode != state.wsNode) {
                  reconnectWS = true;
                }

                if (config.rpcNode != state.rpcNode) {
                  reconnectSigningClient = true;
                }

                if (config.apiNode != state.apiNode) {
                  reconnectClient = true;
                }

                commit('SET_CONFIG', config);

                if (!(reconnectWS && config.wsNode)) {
                  _context4.next = 31;
                  break;
                }

                _context4.prev = 23;
                _context4.next = 26;
                return client.switchWS(config.wsNode);

              case 26:
                _context4.next = 31;
                break;

              case 28:
                _context4.prev = 28;
                _context4.t0 = _context4["catch"](23);
                throw new _SpVuexError["default"]('Env:Client:Websocket', 'Could not switch to websocket node:' + config.wsNode);

              case 31:
                if (reconnectClient && config.apiNode) {
                  client.switchAPI(config.apiNode);
                }

                if (!(reconnectSigningClient && config.rpcNode)) {
                  _context4.next = 41;
                  break;
                }

                _context4.prev = 33;
                _context4.next = 36;
                return client.switchRPC(config.rpcNode);

              case 36:
                _context4.next = 41;
                break;

              case 38:
                _context4.prev = 38;
                _context4.t1 = _context4["catch"](33);
                throw new _SpVuexError["default"]('Env:Client:TendermintRPC', 'Could not switch to Tendermint RPC node:' + config.rpcNode);

              case 41:
                _context4.next = 46;
                break;

              case 43:
                _context4.prev = 43;
                _context4.t2 = _context4["catch"](2);
                console.error(_context4.t2);

              case 46:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 43], [23, 28], [33, 38]]);
      }))();
    }
  }
};
exports["default"] = _default;
//# sourceMappingURL=env.js.map