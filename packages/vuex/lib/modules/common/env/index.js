"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = init;

var _env = _interopRequireDefault(require("./env.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function init(store) {
  if (!store.hasModule(['common'])) {
    store.registerModule(['common'], {
      namespaced: true
    });
  }

  store.registerModule(['common', 'env'], _env["default"]);
}
//# sourceMappingURL=index.js.map