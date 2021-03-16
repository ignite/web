"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jsSha = require("js-sha256");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function formatTx(_ref) {
  var _ref$txHash = _ref.txHash,
      txHash = _ref$txHash === void 0 ? '' : _ref$txHash,
      _ref$messages = _ref.messages,
      messages = _ref$messages === void 0 ? [] : _ref$messages,
      _ref$memo = _ref.memo,
      memo = _ref$memo === void 0 ? '' : _ref$memo,
      _ref$signer_infos = _ref.signer_infos,
      signer_infos = _ref$signer_infos === void 0 ? [] : _ref$signer_infos,
      _ref$fee = _ref.fee,
      fee = _ref$fee === void 0 ? {} : _ref$fee,
      _ref$gas_used = _ref.gas_used,
      gas_used = _ref$gas_used === void 0 ? null : _ref$gas_used,
      _ref$gas_wanted = _ref.gas_wanted,
      gas_wanted = _ref$gas_wanted === void 0 ? null : _ref$gas_wanted,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$code = _ref.code,
      code = _ref$code === void 0 ? 0 : _ref$code,
      _ref$log = _ref.log,
      log = _ref$log === void 0 ? null : _ref$log;
  return {
    txHash: txHash,
    body: {
      messages: messages,
      memo: memo
    },
    auth_info: {
      signer_infos: signer_infos,
      fee: fee
    },
    meta: {
      gas_used: gas_used,
      gas_wanted: gas_wanted,
      height: height,
      code: code,
      log: log
    }
  };
}

function getTx(_x, _x2, _x3) {
  return _getTx.apply(this, arguments);
}

function _getTx() {
  _getTx = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(apiCosmos, apiTendermint, encodedTx) {
    var txHash, rpcRes, apiRes;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            txHash = (0, _jsSha.sha256)(Buffer.from(encodedTx, 'base64'));
            _context3.prev = 1;
            _context3.next = 4;
            return _axios["default"].get(apiTendermint + '/tx?hash=0x' + txHash);

          case 4:
            rpcRes = _context3.sent;
            _context3.next = 7;
            return _axios["default"].get(apiCosmos + '/cosmos/tx/v1beta1/txs/' + txHash);

          case 7:
            apiRes = _context3.sent;
            return _context3.abrupt("return", {
              rpcRes: rpcRes,
              apiRes: apiRes,
              txHash: txHash.toUpperCase()
            });

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);
            throw 'Error fetching TX data';

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 11]]);
  }));
  return _getTx.apply(this, arguments);
}

function decodeTx(_x4, _x5, _x6) {
  return _decodeTx.apply(this, arguments);
}

function _decodeTx() {
  _decodeTx = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(apiCosmos, apiTendermint, encodedTx) {
    var fullTx, data, _data$result, height, tx_result, code, log, gas_used, gas_wanted, _fullTx$apiRes$data$t, body, auth_info, messages, memo;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getTx(apiCosmos, apiTendermint, encodedTx);

          case 2:
            fullTx = _context4.sent;
            data = fullTx.rpcRes.data;
            _data$result = data.result, height = _data$result.height, tx_result = _data$result.tx_result;
            code = tx_result.code, log = tx_result.log, gas_used = tx_result.gas_used, gas_wanted = tx_result.gas_wanted;
            _fullTx$apiRes$data$t = fullTx.apiRes.data.tx, body = _fullTx$apiRes$data$t.body, auth_info = _fullTx$apiRes$data$t.auth_info;
            messages = body.messages, memo = body.memo;
            return _context4.abrupt("return", formatTx({
              txHash: fullTx.txHash,
              messages: messages,
              memo: memo,
              signer_infos: auth_info.signer_infos,
              fee: auth_info.fee,
              gas_used: gas_used,
              gas_wanted: gas_wanted,
              height: height,
              code: code,
              log: log
            }));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _decodeTx.apply(this, arguments);
}

var _default = {
  namespaced: true,
  state: function state() {
    return {
      blocks: [],
      size: 20
    };
  },
  getters: {
    getBlocks: function getBlocks(state) {
      return function (howmany) {
        return _toConsumableArray(state.blocks).sort(function (a, b) {
          return b.height - a.height;
        }).slice(0, howmany);
      };
    },
    getBlockByHeight: function getBlockByHeight(state) {
      return function (height) {
        return state.blocks.find(function (x) {
          return x.height == height;
        }) || {};
      };
    }
  },
  mutations: {
    ADD_BLOCK: function ADD_BLOCK(state, block) {
      state.blocks.push(block);

      if (state.blocks.length > state.size) {
        state.blocks.shift();
      }
    },
    RESET_STATE: function RESET_STATE(state) {
      state.blocks = [];
    },
    SET_SIZE: function SET_SIZE(state, size) {
      state.size = size;
    }
  },
  actions: {
    init: function init(_ref2) {
      var dispatch = _ref2.dispatch,
          rootGetters = _ref2.rootGetters;

      if (rootGetters['common/env/client']) {
        rootGetters['common/env/client'].on('newblock', function (data) {
          dispatch('addBlock', data);
        });
      }
    },
    addBlock: function addBlock(_ref3, blockData) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit, rootGetters, blockDetails, txDecoded, txs, block;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref3.commit, rootGetters = _ref3.rootGetters;
                _context2.prev = 1;
                _context2.next = 4;
                return _axios["default"].get(rootGetters['common/env/apiTendermint'] + '/block?height=' + blockData.data.value.block.header.height);

              case 4:
                blockDetails = _context2.sent;
                txDecoded = blockData.data.value.block.data.txs.map( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(tx) {
                    var dec;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return decodeTx(rootGetters['common/env/apiCosmos'], rootGetters['common/env/apiTendermint'], tx);

                          case 2:
                            dec = _context.sent;
                            return _context.abrupt("return", dec);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x7) {
                    return _ref4.apply(this, arguments);
                  };
                }());
                _context2.next = 8;
                return Promise.all(txDecoded);

              case 8:
                txs = _context2.sent;
                block = {
                  height: blockData.data.value.block.header.height,
                  timestamp: blockData.data.value.block.header.time,
                  hash: blockDetails.data.result.block_id.hash,
                  details: blockData.data.value.block,
                  txDecoded: txs
                };
                commit('ADD_BLOCK', block);
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](1);
                throw new SpVuexError('Blocks:AddBlock', 'Could not add block. RPC node unavailable');

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 13]]);
      }))();
    },
    resetState: function resetState(_ref5) {
      var commit = _ref5.commit;
      commit('RESET_STATE');
    }
  }
};
exports["default"] = _default;
//# sourceMappingURL=blocks.js.map