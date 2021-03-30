"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stargate = require("@cosmjs/stargate");

var _jsSha = require("js-sha256");

var _utils = require("@cosmjs/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var fromHexString = function fromHexString(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map(function (_byte) {
    return parseInt(_byte, 16);
  }));
}; // This is a wrapper around SigningStargateClient that waits up to an additional 1 minute for a Tx to be committed regardless of rpc endpoint timeout response


var StarportSigningClient = /*#__PURE__*/function (_SigningStargateClien) {
  _inherits(StarportSigningClient, _SigningStargateClien);

  var _super = _createSuper(StarportSigningClient);

  function StarportSigningClient() {
    _classCallCheck(this, StarportSigningClient);

    return _super.apply(this, arguments);
  }

  _createClass(StarportSigningClient, [{
    key: "signAndBroadcast",
    value: function () {
      var _signAndBroadcast = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(signerAddress, messages, fee) {
        var memo,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                memo = _args.length > 3 && _args[3] !== undefined ? _args[3] : "";
                return _context.abrupt("return", _get(_getPrototypeOf(StarportSigningClient.prototype), "signAndBroadcast", this).call(this, signerAddress, messages, fee, memo));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function signAndBroadcast(_x, _x2, _x3) {
        return _signAndBroadcast.apply(this, arguments);
      }

      return signAndBroadcast;
    }()
  }, {
    key: "broadcastTx",
    value: function () {
      var _broadcastTx = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tx) {
        var result, error, txHash, i, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _get(_getPrototypeOf(StarportSigningClient.prototype), "broadcastTx", this).call(this, tx);

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                _context2.prev = 9;
                error = JSON.parse(_context2.t0.message);

                if (!(error.code == -32603 && error.data == "timed out waiting for tx to be included in a block")) {
                  _context2.next = 32;
                  break;
                }

                txHash = (0, _jsSha.sha256)(Buffer.from(tx));
                i = 0;

              case 14:
                if (!(i < 20)) {
                  _context2.next = 29;
                  break;
                }

                _context2.prev = 15;
                _context2.next = 18;
                return this.tmClient.tx({
                  hash: fromHexString(txHash),
                  prove: true
                });

              case 18:
                res = _context2.sent;
                return _context2.abrupt("return", {
                  height: res.height,
                  code: res.result.code,
                  rawLog: res.result.log
                });

              case 22:
                _context2.prev = 22;
                _context2.t1 = _context2["catch"](15);

              case 24:
                i++;
                _context2.next = 27;
                return (0, _utils.sleep)(3000);

              case 27:
                _context2.next = 14;
                break;

              case 29:
                throw _context2.t0;

              case 32:
                throw _context2.t0;

              case 33:
                _context2.next = 38;
                break;

              case 35:
                _context2.prev = 35;
                _context2.t2 = _context2["catch"](9);
                throw _context2.t0;

              case 38:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7], [9, 35], [15, 22]]);
      }));

      function broadcastTx(_x4) {
        return _broadcastTx.apply(this, arguments);
      }

      return broadcastTx;
    }()
  }]);

  return StarportSigningClient;
}(_stargate.SigningStargateClient);

exports["default"] = StarportSigningClient;
//# sourceMappingURL=starportSigningClient.js.map