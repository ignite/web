"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _SpVuexError = _interopRequireDefault(require("../../../errors/SpVuexError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDefaultState = function getDefaultState() {
  return {
    Transactions: {},
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
    STORE_TRANSACTIONS: function STORE_TRANSACTIONS(state, _ref) {
      var address = _ref.address,
          page = _ref.page,
          txs = _ref.txs,
          total = _ref.total;

      if (!state.Transactions[address]) {
        state.Transactions[address] = {};
      }

      state.Transactions[address][page] = txs;
      state.Transactions[address]['total'] = total;
    },
    SUBSCRIBE: function SUBSCRIBE(state, subscription) {
      state._Subscriptions.add(subscription);
    },
    UNSUBSCRIBE: function UNSUBSCRIBE(state, subscription) {
      state._Subscriptions["delete"](subscription);
    }
  },
  getters: {
    getTransactions: function getTransactions(state) {
      return function (address) {
        return state.Transactions[address] ? state.Transactions[address] : null;
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
    QueryTransactions: function QueryTransactions(_ref6, _ref7) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit, rootGetters, getters, _ref7$subscribe, subscribe, address, _ref7$page, page, received, sent, total, txs;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref6.commit, rootGetters = _ref6.rootGetters, getters = _ref6.getters;
                _ref7$subscribe = _ref7.subscribe, subscribe = _ref7$subscribe === void 0 ? false : _ref7$subscribe, address = _ref7.address, _ref7$page = _ref7.page, page = _ref7$page === void 0 ? 1 : _ref7$page;
                _context2.prev = 2;
                _context2.next = 5;
                return _axios["default"].get(rootGetters['common/env/apiTendermint'] + '/tx_search?query="transfer.recipient=%27' + address + '%27"&prove=false&per_page=10&page=' + page);

              case 5:
                received = _context2.sent.data.result;
                _context2.next = 8;
                return _axios["default"].get(rootGetters['common/env/apiTendermint'] + '/tx_search?query="transfer.sender=%27' + address + '%27"&prove=false&per_page=10&page=' + page);

              case 8:
                sent = _context2.sent.data.result;
                total = Number(received.total_count) + Number(sent.total_count);
                txs = [].concat(_toConsumableArray(received.txs), _toConsumableArray(sent.txs)).sort(function (a, b) {
                  return a.height == b.height ? b.index - a.index : b.height - a.height;
                });
                commit('STORE_TRANSACTIONS', {
                  address: address,
                  page: page,
                  txs: txs,
                  total: total
                });
                if (subscribe) commit('SUBSCRIBE', {
                  action: 'QueryTransactions',
                  payload: {
                    address: address,
                    page: page
                  }
                });
                return _context2.abrupt("return", getters['getTransactions'](address, page));

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](2);
                console.error(new _SpVuexError["default"]('Common:Transfers:QueryTransactions', 'RPC Node Unavailable. Could not perform query.'));
                return _context2.abrupt("return", {});

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 16]]);
      }))();
    }
  }
};
exports["default"] = _default;
//# sourceMappingURL=transfers.js.map