"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyFromWif = keyFromWif;
exports.keyToWif = keyToWif;

var _bs = require("bs58");

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function keyFromWif(wif) {
  return (0, _bs.decode)(wif).slice(1, 33);
}

function keyToWif(key) {
  var versionedkey = new Uint8Array(33);
  versionedkey.set([128], 0);
  versionedkey.set(key, 1);

  var words = _cryptoJs["default"].lib.WordArray.create(versionedkey);

  var checksum = Buffer.from(_cryptoJs["default"].SHA256(_cryptoJs["default"].SHA256(words)).toString().substr(0, 8), 'hex');
  var wif = new Uint8Array(37);
  wif.set(versionedkey, 0);
  wif.set(checksum, 33);
  return (0, _bs.encode)(wif);
}
//# sourceMappingURL=keys.js.map