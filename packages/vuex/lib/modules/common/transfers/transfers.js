"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SpVuexError = _interopRequireDefault(require("../../../errors/SpVuexError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDefaultState = function getDefaultState() {
  return {
    GetTxsEvent: {},
    _Subscriptions: new Set()
  };
}; // initial state


var state = getDefaultState();
var _default = {
  namespaced: true,
  state: state,
  mutations: {
    RESET_STATE: function RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    },
    QUERY: function QUERY(state, _ref) {
      var query = _ref.query,
          key = _ref.key,
          value = _ref.value;
      state[query][JSON.stringify(key)] = value;
    },
    SUBSCRIBE: function SUBSCRIBE(state, subscription) {
      state._Subscriptions.add(subscription);
    },
    UNSUBSCRIBE: function UNSUBSCRIBE(state, subscription) {
      state._Subscriptions["delete"](subscription);
    }
  },
  getters: {
    getGetTxsEvent: function getGetTxsEvent(state) {
      return function () {
        var _state$GetTxsEvent$JS;

        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return (_state$GetTxsEvent$JS = state.GetTxsEvent[JSON.stringify(params)]) !== null && _state$GetTxsEvent$JS !== void 0 ? _state$GetTxsEvent$JS : {};
      };
    }
  },
  actions: {
    init: function init(_ref2) {
      var dispatch = _ref2.dispatch,
          rootGetters = _ref2.rootGetters;
      console.log('init');

      if (rootGetters['common/env/client']) {
        rootGetters['common/env/client'].on('newblock', function () {
          dispatch('StoreUpdate');
        });
      }
    },
    resetState: function resetState(_ref3) {
      var commit = _ref3.commit;
      commit('RESET_STATE');
    },
    unsubscribe: function unsubscribe(_ref4, subscription) {
      var commit = _ref4.commit;
      commit('UNSUBSCRIBE', subscription);
    },
    StoreUpdate: function StoreUpdate(_ref5) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var state, dispatch;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _ref5.state, dispatch = _ref5.dispatch;

                state._Subscriptions.forEach(function (subscription) {
                  dispatch(subscription.action, subscription.payload);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    ServiceGetTxsEvent: function ServiceGetTxsEvent(_ref6, _ref7) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit, rootGetters, _ref7$subscribe, subscribe, _ref7$all, all, key, params, value;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref6.commit, rootGetters = _ref6.rootGetters;
                _ref7$subscribe = _ref7.subscribe, subscribe = _ref7$subscribe === void 0 ? false : _ref7$subscribe, _ref7$all = _ref7.all, all = _ref7$all === void 0 ? true : _ref7$all, key = _objectWithoutProperties(_ref7, ["subscribe", "all"]);
                _context2.prev = 2;
                params = Object.values(key);
                _context2.next = 6;
                return _axios["default"].get(rootGetters['common/env/apiCosmos'] + '/cosmos/tx/v1beta1/txs?events=' + key.event);

              case 6:
                value = _context2.sent.data;

                /*
                while (all && value.pagination && value.pagination.next_key!=null) {
                    let next_values=(await (await initQueryClient(rootGetters)).queryPostAll.apply(null,[...params, {'pagination.key':value.pagination.next_key}] )).data;
                    
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop]=[...value[prop], ...next_values[prop]]
                        }else{
                            value[prop]=next_values[prop]
                        }
                    }
                    console.log(value)
                }
                */
                commit('QUERY', {
                  query: 'GetTxsEvent',
                  key: key,
                  value: value
                });
                if (subscribe) commit('SUBSCRIBE', {
                  action: 'ServiceGetTxsEvent',
                  payload: key
                });
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](2);
                console.error(new _SpVuexError["default"]('QueryClient:ServiceGetTxsEvent', 'API Node Unavailable. Could not perform query.'));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 11]]);
      }))();
    }
  }
};
exports["default"] = _default;
//# sourceMappingURL=transfers.js.map