"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _protoSigning = require("@cosmjs/proto-signing");

var _stargate = require("@cosmjs/stargate");

var _crypto = require("@cosmjs/crypto");

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

var _keys = require("../../../helpers/keys");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* START TODO: Integrate closure below for additional security */
function getDecryptor(password) {
  var secret = password;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(encryptedMnemonic, HDpath) {
      var mnemonic;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              mnemonic = _cryptoJs["default"].AES.decrypt(encryptedMnemonic, secret).toString(_cryptoJs["default"].enc.Utf8);
              _context.next = 3;
              return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, HDpath);

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}
/* END TODO */


var _default = {
  namespaced: true,
  state: function state() {
    return {
      wallets: JSON.parse(window.localStorage.getItem('wallets')) || [],
      activeWallet: null,
      activeClient: null,
      selectedAddress: '',
      authorized: false,
      gasPrice: '0.0000025token'
    };
  },
  getters: {
    client: function client(state) {
      return state.activeClient;
    },
    gasPrice: function gasPrice(state) {
      return state.gasPrice;
    },
    wallet: function wallet(state) {
      return state.activeWallet;
    },
    address: function address(state) {
      return state.selectedAddress;
    },
    getMnemonic: function getMnemonic(state) {
      return state.activeWallet.mnemonic;
    },
    getPath: function getPath(state) {
      return state.activeWallet.HDpath + state.activeWallet.accounts.find(function (x) {
        return x.address == state.selectedAddress;
      }).pathIncrement;
    },
    relayers: function relayers(state) {
      var _state$activeWallet$a;

      return (_state$activeWallet$a = state.activeWallet.accounts.find(function (x) {
        return x.address == state.selectedAddress;
      }).relayers) !== null && _state$activeWallet$a !== void 0 ? _state$activeWallet$a : [];
    },
    nameAvailable: function nameAvailable(state) {
      return function (name) {
        return state.wallets.findIndex(function (x) {
          return x.name == name;
        }) == -1;
      };
    },
    lastWallet: function lastWallet(state) {
      if (state.activeWallet) {
        return state.activeWallet.name;
      } else {
        return window.localStorage.getItem('lastWallet');
      }
    },
    loggedIn: function loggedIn(state) {
      return state.activeClient !== null;
    },
    signer: function signer(state) {
      if (state.activeClient) {
        return state.activeClient.signer;
      } else {
        return null;
      }
    },
    walletName: function walletName(state) {
      return state.activeWallet ? state.activeWallet.name : null;
    },
    privKey: function privKey(state) {
      if (state.activeClient) {
        return (0, _keys.keyToWif)(state.activeClient.signer.privkey);
      } else {
        return null;
      }
    }
  },
  mutations: {
    SET_ACTIVE_WALLET: function SET_ACTIVE_WALLET(state, wallet) {
      state.activeWallet = wallet;
      window.localStorage.setItem('lastWallet', wallet.name);
    },
    SET_ACTIVE_CLIENT: function SET_ACTIVE_CLIENT(state, client) {
      state.activeClient = client;
      state.authorized = true;
    },
    ADD_WALLET: function ADD_WALLET(state, wallet) {
      state.activeWallet = wallet;
      window.localStorage.setItem('lastWallet', wallet.name);

      if (state.activeWallet.name && state.activeWallet.password) {
        state.wallets.push({
          name: state.activeWallet.name,
          wallet: _cryptoJs["default"].AES.encrypt(JSON.stringify(state.activeWallet), state.activeWallet.password).toString()
        });
      }
    },
    PATH_INCREMENT: function PATH_INCREMENT(state) {
      state.activeWallet.pathIncrement = state.activeWallet.pathIncrement + 1;
    },
    ADD_ACCOUNT: function ADD_ACCOUNT(state, account) {
      state.activeWallet.accounts.push(account);

      if (state.activeWallet.name && state.activeWallet.password) {
        state.wallets[state.wallets.findIndex(function (x) {
          return x.name === state.activeWallet.name;
        })].wallet = _cryptoJs["default"].AES.encrypt(JSON.stringify(state.activeWallet), state.activeWallet.password).toString();
      }
    },
    SET_RELAYERS: function SET_RELAYERS(state, relayers) {
      state.activeWallet.accounts.find(function (x) {
        return x.address == state.selectedAddress;
      }).relayers = relayers;

      if (state.activeWallet.name && state.activeWallet.password) {
        state.wallets[state.wallets.findIndex(function (x) {
          return x.name === state.activeWallet.name;
        })].wallet = _cryptoJs["default"].AES.encrypt(JSON.stringify(state.activeWallet), state.activeWallet.password).toString();
      }
    },
    SET_SELECTED_ADDRESS: function SET_SELECTED_ADDRESS(state, address) {
      state.selectedAddress = address;
    },
    SET_BACKUP_STATE: function SET_BACKUP_STATE(state, backupState) {
      state.backupState = backupState;
    },
    ADD_MESSAGE_TYPE: function ADD_MESSAGE_TYPE(state, _ref2) {
      var typeUrl = _ref2.typeUrl,
          type = _ref2.type;
      state.activeClient.registry.register(typeUrl, type);
    },
    SIGN_OUT: function SIGN_OUT(state) {
      state.selectedAddress = '';
      state.activeClient = null;
      state.activeWallet = null;
      state.authorized = false;
    }
  },
  actions: {
    signOut: function signOut(_ref3) {
      var commit = _ref3.commit;
      commit('SIGN_OUT');
    },
    unlockWallet: function unlockWallet(_ref4, _ref5) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit, state, dispatch, rootGetters, name, password, encryptedWallet, wallet, accountSigner, client, _yield$accountSigner$, _yield$accountSigner$2, account;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref4.commit, state = _ref4.state, dispatch = _ref4.dispatch, rootGetters = _ref4.rootGetters;
                name = _ref5.name, password = _ref5.password;
                encryptedWallet = state.wallets[state.wallets.findIndex(function (x) {
                  return x.name === name;
                })].wallet;
                wallet = JSON.parse(_cryptoJs["default"].AES.decrypt(encryptedWallet, password).toString(_cryptoJs["default"].enc.Utf8));
                commit('SET_ACTIVE_WALLET', wallet);

                if (!(wallet.accounts.length > 0)) {
                  _context2.next = 25;
                  break;
                }

                _context2.next = 8;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(wallet.mnemonic, (0, _crypto.stringToPath)(wallet.HDpath + wallet.accounts[0].pathIncrement), wallet.prefix);

              case 8:
                accountSigner = _context2.sent;
                _context2.prev = 9;
                _context2.next = 12;
                return dispatch('common/env/signIn', accountSigner, {
                  root: true
                });

              case 12:
                client = rootGetters['common/env/signingClient'];
                commit('SET_ACTIVE_CLIENT', client);
                _context2.next = 16;
                return accountSigner.getAccounts();

              case 16:
                _yield$accountSigner$ = _context2.sent;
                _yield$accountSigner$2 = _slicedToArray(_yield$accountSigner$, 1);
                account = _yield$accountSigner$2[0];
                commit('SET_SELECTED_ADDRESS', account.address);
                _context2.next = 25;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](9);
                console.log(_context2.t0);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[9, 22]]);
      }))();
    },
    updateRelayers: function updateRelayers(_ref6, relayers) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var commit, dispatch;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref6.commit, dispatch = _ref6.dispatch;
                commit('SET_RELAYERS', relayers);
                dispatch('storeWallets');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    switchAccount: function switchAccount(_ref7, address) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var commit, state, rootGetters, dispatch, accountIndex, accountSigner, client, _yield$accountSigner$3, _yield$accountSigner$4, account;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref7.commit, state = _ref7.state, rootGetters = _ref7.rootGetters, dispatch = _ref7.dispatch;
                accountIndex = state.activeWallet.accounts.findIndex(function (acc) {
                  return acc.address == address;
                });
                _context4.next = 4;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(state.activeWallet.mnemonic, (0, _crypto.stringToPath)(state.activeWallet.HDpath + state.activeWallet.accounts[accountIndex].pathIncrement), state.activeWallet.prefix);

              case 4:
                accountSigner = _context4.sent;
                _context4.prev = 5;
                _context4.next = 8;
                return dispatch('common/env/signIn', accountSigner, {
                  root: true
                });

              case 8:
                client = rootGetters['common/env/signingClient'];
                commit('SET_ACTIVE_CLIENT', client);
                _context4.next = 12;
                return accountSigner.getAccounts();

              case 12:
                _yield$accountSigner$3 = _context4.sent;
                _yield$accountSigner$4 = _slicedToArray(_yield$accountSigner$3, 1);
                account = _yield$accountSigner$4[0];
                commit('SET_SELECTED_ADDRESS', account.address);
                _context4.next = 21;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](5);
                console.log(_context4.t0);

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[5, 18]]);
      }))();
    },
    addAccount: function addAccount(_ref8, pathIncrement) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var commit, state, dispatch, accountSigner, _yield$accountSigner$5, _yield$accountSigner$6, acc, account;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref8.commit, state = _ref8.state, dispatch = _ref8.dispatch;

                if (!pathIncrement) {
                  pathIncrement = state.activeWallet.pathIncrement + 1;
                  commit('PATH_INCREMENT');
                }

                _context5.next = 4;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(state.activeWallet.mnemonic, (0, _crypto.stringToPath)(state.activeWallet.HDpath + pathIncrement), state.activeWallet.prefix);

              case 4:
                accountSigner = _context5.sent;
                _context5.next = 7;
                return accountSigner.getAccounts();

              case 7:
                _yield$accountSigner$5 = _context5.sent;
                _yield$accountSigner$6 = _slicedToArray(_yield$accountSigner$5, 1);
                acc = _yield$accountSigner$6[0];
                account = {
                  address: acc.address,
                  pathIncrement: parseInt(pathIncrement)
                };

                if (!(state.activeWallet.accounts.findIndex(function (acc) {
                  return acc.address == account.address;
                }) == -1)) {
                  _context5.next = 16;
                  break;
                }

                commit('ADD_ACCOUNT', account);
                dispatch('storeWallets');
                _context5.next = 17;
                break;

              case 16:
                throw 'Account already in store.';

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    storeWallets: function storeWallets(_ref9) {
      var commit = _ref9.commit,
          state = _ref9.state;
      window.localStorage.setItem('wallets', JSON.stringify(state.wallets));
      commit('SET_BACKUP_STATE', false);
    },
    signInWithPrivateKey: function signInWithPrivateKey(_ref10, _ref11) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var commit, rootGetters, dispatch, _ref11$prefix, prefix, privKey, pKey, accountSigner, _yield$accountSigner$7, _yield$accountSigner$8, firstAccount, client;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref10.commit, rootGetters = _ref10.rootGetters, dispatch = _ref10.dispatch;
                _ref11$prefix = _ref11.prefix, prefix = _ref11$prefix === void 0 ? 'cosmos' : _ref11$prefix, privKey = _ref11.privKey;
                pKey = (0, _keys.keyFromWif)(privKey.trim());
                _context6.next = 5;
                return _protoSigning.DirectSecp256k1Wallet.fromKey(pKey, prefix);

              case 5:
                accountSigner = _context6.sent;
                _context6.next = 8;
                return accountSigner.getAccounts();

              case 8:
                _yield$accountSigner$7 = _context6.sent;
                _yield$accountSigner$8 = _slicedToArray(_yield$accountSigner$7, 1);
                firstAccount = _yield$accountSigner$8[0];
                _context6.prev = 11;
                _context6.next = 14;
                return dispatch('common/env/signIn', accountSigner, {
                  root: true
                });

              case 14:
                client = rootGetters['common/env/signingClient'];
                commit('SET_ACTIVE_CLIENT', client);
                commit('SET_SELECTED_ADDRESS', firstAccount.address);
                _context6.next = 22;
                break;

              case 19:
                _context6.prev = 19;
                _context6.t0 = _context6["catch"](11);
                console.log(_context6.t0);

              case 22:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[11, 19]]);
      }))();
    },
    restoreWallet: function restoreWallet(_ref12, _ref13) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var commit, dispatch, rootGetters, state, encrypted, password, wallet, newName, incr, accountSigner, _yield$accountSigner$9, _yield$accountSigner$10, firstAccount, client;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                commit = _ref12.commit, dispatch = _ref12.dispatch, rootGetters = _ref12.rootGetters, state = _ref12.state;
                encrypted = _ref13.encrypted, password = _ref13.password;
                wallet = JSON.parse(_cryptoJs["default"].AES.decrypt(encrypted, password).toString(_cryptoJs["default"].enc.Utf8));
                newName = wallet.name;
                incr = 1;

                while (state.wallets.findIndex(function (x) {
                  return x.name == newName;
                }) != -1) {
                  newName = wallet.name + '_' + incr;
                  incr++;
                }

                wallet.name = newName;
                _context7.next = 9;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(wallet.mnemonic, (0, _crypto.stringToPath)(wallet.HDpath + '0'), wallet.prefix);

              case 9:
                accountSigner = _context7.sent;
                _context7.next = 12;
                return accountSigner.getAccounts();

              case 12:
                _yield$accountSigner$9 = _context7.sent;
                _yield$accountSigner$10 = _slicedToArray(_yield$accountSigner$9, 1);
                firstAccount = _yield$accountSigner$10[0];
                commit('ADD_WALLET', wallet);
                _context7.prev = 16;
                _context7.next = 19;
                return dispatch('common/env/signIn', accountSigner, {
                  root: true
                });

              case 19:
                client = rootGetters['common/env/signingClient'];
                commit('SET_ACTIVE_CLIENT', client);
                commit('SET_SELECTED_ADDRESS', firstAccount.address);
                _context7.next = 27;
                break;

              case 24:
                _context7.prev = 24;
                _context7.t0 = _context7["catch"](16);
                console.log(_context7.t0);

              case 27:
                dispatch('storeWallets');

              case 28:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[16, 24]]);
      }))();
    },
    createWalletWithMnemonic: function createWalletWithMnemonic(_ref14, _ref15) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var commit, dispatch, rootGetters, _ref15$name, name, mnemonic, _ref15$HDpath, HDpath, _ref15$prefix, prefix, _ref15$password, password, wallet, accountSigner, _yield$accountSigner$11, _yield$accountSigner$12, firstAccount, account, client;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                commit = _ref14.commit, dispatch = _ref14.dispatch, rootGetters = _ref14.rootGetters;
                _ref15$name = _ref15.name, name = _ref15$name === void 0 ? null : _ref15$name, mnemonic = _ref15.mnemonic, _ref15$HDpath = _ref15.HDpath, HDpath = _ref15$HDpath === void 0 ? "m/44'/118'/0'/0/" : _ref15$HDpath, _ref15$prefix = _ref15.prefix, prefix = _ref15$prefix === void 0 ? 'cosmos' : _ref15$prefix, _ref15$password = _ref15.password, password = _ref15$password === void 0 ? null : _ref15$password;
                wallet = {
                  name: name,
                  mnemonic: mnemonic,
                  HDpath: HDpath,
                  password: password,
                  prefix: prefix,
                  pathIncrement: 0,
                  accounts: []
                };
                _context8.next = 5;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, (0, _crypto.stringToPath)(HDpath + '0'), prefix);

              case 5:
                accountSigner = _context8.sent;
                _context8.next = 8;
                return accountSigner.getAccounts();

              case 8:
                _yield$accountSigner$11 = _context8.sent;
                _yield$accountSigner$12 = _slicedToArray(_yield$accountSigner$11, 1);
                firstAccount = _yield$accountSigner$12[0];
                account = {
                  address: firstAccount.address,
                  pathIncrement: 0
                };
                wallet.accounts.push(account);
                commit('ADD_WALLET', wallet);
                _context8.prev = 14;
                _context8.next = 17;
                return dispatch('common/env/signIn', accountSigner, {
                  root: true
                });

              case 17:
                client = rootGetters['common/env/signingClient'];
                commit('SET_ACTIVE_CLIENT', client);
                commit('SET_SELECTED_ADDRESS', firstAccount.address);
                _context8.next = 25;
                break;

              case 22:
                _context8.prev = 22;
                _context8.t0 = _context8["catch"](14);
                console.log(_context8.t0);

              case 25:
                dispatch('storeWallets');

              case 26:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[14, 22]]);
      }))();
    },
    sendTransaction: function sendTransaction(_ref16, _ref17) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var state, message, memo, denom, fee, result;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                state = _ref16.state;
                message = _ref17.message, memo = _ref17.memo, denom = _ref17.denom;
                fee = {
                  amount: [{
                    amount: '0',
                    denom: denom
                  }],
                  gas: '200000'
                };
                _context9.prev = 3;
                console.log({
                  add: state.selectedAddress,
                  msg: [message],
                  fee: fee,
                  memo: memo
                });
                _context9.next = 7;
                return state.activeClient.signAndBroadcast(state.selectedAddress, [message], fee, memo);

              case 7:
                result = _context9.sent;
                (0, _stargate.assertIsBroadcastTxSuccess)(result);
                _context9.next = 15;
                break;

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](3);
                console.log(_context9.t0);
                throw 'Failed to broadcast transaction.' + _context9.t0;

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[3, 11]]);
      }))();
    }
  }
};
exports["default"] = _default;
//# sourceMappingURL=wallet.js.map