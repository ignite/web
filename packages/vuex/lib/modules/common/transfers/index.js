"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = init;

var _transfers = _interopRequireDefault(require("./transfers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function init(store) {
  if (!store.hasModule(['common'])) {
    store.registerModule(['common'], {
      namespaced: true
    });
  }

  store.registerModule(['common', 'transfers'], _transfers["default"]);
  store.subscribe(function (mutation) {
    if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
      store.dispatch('common/transfers/init', null, {
        root: true
      });
    }
  });
}
//# sourceMappingURL=index.js.map