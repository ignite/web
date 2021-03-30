"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = init;

var _relayers = _interopRequireDefault(require("./relayers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function init(store) {
  if (!store.hasModule(['common'])) {
    store.registerModule(['common'], {
      namespaced: true
    });
  }

  store.registerModule(['common', 'relayers'], _relayers["default"]);
  store.subscribe(function (mutation) {
    if (mutation.type == 'common/wallet/SET_SELECTED_ADDRESS') {
      store.dispatch('common/relayers/init', null, {
        root: true
      });
    }
  });
}
//# sourceMappingURL=index.js.map