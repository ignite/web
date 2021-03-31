"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SpVuexError = _interopRequireDefault(require("../../../errors/SpVuexError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _process$env = process.env,
    VUE_APP_CUSTOM_URL = _process$env.VUE_APP_CUSTOM_URL,
    VUE_APP_API_COSMOS = _process$env.VUE_APP_API_COSMOS,
    VUE_APP_API_TENDERMINT = _process$env.VUE_APP_API_TENDERMINT,
    VUE_APP_WS_TENDERMINT = _process$env.VUE_APP_WS_TENDERMINT,
    VUE_APP_ADDRESS_PREFIX = _process$env.VUE_APP_ADDRESS_PREFIX,
    VUE_APP_STARPORT_URL = _process$env.VUE_APP_STARPORT_URL;
var GITPOD = process.env.VUE_APP_CUSTOM_URL && new URL(process.env.VUE_APP_CUSTOM_URL);
var apiNode = GITPOD && "".concat(GITPOD.protocol, "//1317-").concat(GITPOD.hostname) || process.env.VUE_APP_API_COSMOS && process.env.VUE_APP_API_COSMOS.replace('0.0.0.0', 'localhost') || 'http://localhost:1317';
var rpcNode = GITPOD && "".concat(GITPOD.protocol, "//26657-").concat(GITPOD.hostname) || process.env.VUE_APP_API_TENDERMINT && process.env.VUE_APP_API_TENDERMINT.replace('0.0.0.0', 'localhost') || 'http://localhost:26657';
var addrPrefix = process.env.VUE_APP_ADDRESS_PREFIX || 'cosmos';
var wsNode = GITPOD && "wss://26657-".concat(GITPOD.hostname, "/websocket") || process.env.VUE_APP_WS_TENDERMINT && process.env.VUE_APP_WS_TENDERMINT.replace('0.0.0.0', 'localhost') || 'ws://localhost:26657/websocket';
var starportUrl = process.env.VUE_APP_STARPORT_URL && process.env.VUE_APP_STARPORT_URL.replace('0.0.0.0', 'localhost') || 'http://localhost:12345';
var _default = {
  namespaced: true,
  state: function state() {
    return {
      _timer: null,
      starportUrl: VUE_APP_CUSTOM_URL ? '' : starportUrl,
      frontendUrl: '',
      backend: {
        env: {
          node_js: false,
          vue_app_custom_url: process.env.VUE_APP_CUSTOM_URL
        },
        running: {
          frontend: false,
          rpc: false,
          api: false
        },
        prevStates: {
          frontend: null,
          rpc: null,
          api: null
        }
      }
    };
  },
  getters: {
    backendEnv: function backendEnv(state) {
      return state.backend.env;
    },
    frontendUrl: function frontendUrl(state) {
      return state.frontendUrl;
    },
    backendRunningStates: function backendRunningStates(state) {
      return state.backend.running;
    },
    wasAppRestarted: function wasAppRestarted(state) {
      return function (status) {
        return state.backend.prevStates.rpc !== null && state.backend.prevStates.api !== null && !state.backend.prevStates.rpc && !state.backend.prevStates.api && status.is_consensus_engine_alive && status.is_my_app_backend_alive;
      };
    }
  },
  mutations: {
    SET_STARPORT_ENV: function SET_STARPORT_ENV(state, _ref) {
      var starportUrl = _ref.starportUrl,
          frontendUrl = _ref.frontendUrl;
      state.starportUrl = starportUrl;
      state.frontendUrl = frontendUrl;
    },
    SET_BACKEND_RUNNING_STATES: function SET_BACKEND_RUNNING_STATES(state, _ref2) {
      var frontend = _ref2.frontend,
          rpc = _ref2.rpc,
          api = _ref2.api;
      state.backend.running = {
        frontend: frontend,
        rpc: rpc,
        api: api
      };
    },

    /**
     *
     *
     * @param {object} state
     * @param {object} env
     * @param {boolean} states.node_js
     * @param {string} states.vue_app_custom_url
     *
     *
     */
    SET_BACKEND_ENV: function SET_BACKEND_ENV(state, _ref3) {
      var node_js = _ref3.node_js,
          vue_app_custom_url = _ref3.vue_app_custom_url;
      state.backend.env = {
        node_js: node_js,
        vue_app_custom_url: vue_app_custom_url
      };
    },

    /**
     *
     *
     * @param {object} state
     * @param {object} payload
     * @param {object} payload.status
     *
     *
     */
    SET_PREV_STATES: function SET_PREV_STATES(state, _ref4) {
      var status = _ref4.status;
      state.backend.prevStates = {
        frontend: status ? status.is_my_app_frontend_alive : false,
        rpc: status ? status.is_consensus_engine_alive : false,
        api: status ? status.is_my_app_backend_alive : false
      };
    },
    SET_TIMER: function SET_TIMER(state, _ref5) {
      var timer = _ref5.timer;
      state._timer = timer;
    },
    CLEAR_TIMER: function CLEAR_TIMER(state) {
      clearInterval(state._timer);
    }
  },
  actions: {
    setStatusState: function setStatusState(_ref6) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var state, getters, commit, dispatch, rootGetters, _yield$axios$get, data, status, env, addrs, _GITPOD, _starportUrl, frontendUrl, chainId, sdkVersion, _apiNode, _rpcNode, _wsNode, _addrPrefix, getTXApi;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _ref6.state, getters = _ref6.getters, commit = _ref6.commit, dispatch = _ref6.dispatch, rootGetters = _ref6.rootGetters;
                _context.prev = 1;

                if (!(state.starportUrl != '')) {
                  _context.next = 24;
                  break;
                }

                _context.next = 5;
                return _axios["default"].get("".concat(state.starportUrl, "/status"));

              case 5:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                status = data.status, env = data.env, addrs = data.addrs;
                _GITPOD = env.vue_app_custom_url && new URL(env.vue_app_custom_url);
                _starportUrl = state.starportUrl || _GITPOD && "".concat(_GITPOD.protocol, "//12345-").concat(_GITPOD.hostname) || 'http://localhost:12345';
                frontendUrl = addrs.app_frontend || _GITPOD && "".concat(_GITPOD.protocol, "//8080-").concat(_GITPOD.hostname) || 'http://localhost:8080';
                commit('SET_STARPORT_ENV', {
                  starportUrl: _starportUrl,
                  frontendUrl: frontendUrl
                });
                chainId = env.chain_id;
                sdkVersion = status.sdk_version;
                _apiNode = addrs.app_backend || VUE_APP_API_COSMOS && VUE_APP_API_COSMOS.replace('0.0.0.0', 'localhost') || _GITPOD && "".concat(_GITPOD.protocol, "//1317-").concat(_GITPOD.hostname) || 'http://localhost:1317';
                _rpcNode = addrs.consensus_engine || VUE_APP_API_TENDERMINT && VUE_APP_API_TENDERMINT.replace('0.0.0.0', 'localhost') || _GITPOD && "".concat(_GITPOD.protocol, "//26657-").concat(_GITPOD.hostname) || 'http://localhost:26657';
                _wsNode = addrs.consensus_engine.replace('http', 'ws') + '/websocket' || VUE_APP_WS_TENDERMINT && VUE_APP_WS_TENDERMINT.replace('0.0.0.0', 'localhost') || _GITPOD && "wss://26657-".concat(_GITPOD.hostname, "/websocket") || 'ws://localhost:26657/websocket';
                _addrPrefix = VUE_APP_ADDRESS_PREFIX || 'cosmos';
                getTXApi = rootGetters['common/env/sdkVersion'] === 'Stargate' ? dispatch('common/env/setTxAPI', rootGetters['common/env/apiTendermint'] + '/tx?hash=0x', {
                  root: true
                }) : dispatch('common/env/setTxAPI', rootGetters['common/env/apiCosmos'] + '/txs/', {
                  root: true
                });
                dispatch('common/env/config', {
                  chainId: chainId,
                  sdkVersion: sdkVersion,
                  apiNode: _apiNode,
                  rpcNode: _rpcNode,
                  wsNode: _wsNode,
                  addrPrefix: _addrPrefix,
                  getTXApi: getTXApi
                }, {
                  root: true
                });
                commit('SET_BACKEND_RUNNING_STATES', {
                  frontend: status.is_my_app_frontend_alive,
                  rpc: status.is_consensus_engine_alive,
                  api: status.is_my_app_backend_alive
                });
                commit('SET_BACKEND_ENV', {
                  node_js: env.node_js,
                  vue_app_custom_url: env.vue_app_custom_url
                });
                /**
                 *
                 // If backend was down, but alive now,
                 // it indicates the app is restarting.
                 // Forcing browser to reload in this case to reset blockchain data.
                 *
                 */

                if (getters.wasAppRestarted(status)) {
                  window.location.reload(false);
                }

                commit('SET_PREV_STATES', {
                  status: status
                });

              case 24:
                _context.next = 31;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](1);
                commit('SET_BACKEND_RUNNING_STATES', {
                  frontend: false,
                  rpc: false,
                  api: false
                });
                commit('SET_PREV_STATES', {
                  status: null
                });
                throw new _SpVuexError["default"]('Starport:Status', 'Could not set status from starport');

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 26]]);
      }))();
    },
    init: function init(_ref7) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var commit, dispatch;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref7.commit, dispatch = _ref7.dispatch;

                /*
                *
                // Fetch backend status regularly
                *
                */
                commit('SET_TIMER', {
                  timer: setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return dispatch('setStatusState');

                          case 3:
                            _context2.next = 8;
                            break;

                          case 5:
                            _context2.prev = 5;
                            _context2.t0 = _context2["catch"](0);
                            console.error(_context2.t0);

                          case 8:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[0, 5]]);
                  })), 5000)
                });
                _context3.next = 4;
                return dispatch('setStatusState');

              case 4:
                console.log('Vuex nodule: common.starport initialized!');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
};
exports["default"] = _default;
//# sourceMappingURL=starport.js.map