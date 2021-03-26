"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoopLogger = void 0;

var NoopLogger = function NoopLogger() {
  var _this = this;

  _classCallCheck(this, NoopLogger);

  this.error = function () {
    return _this;
  };

  this.warn = function () {
    return _this;
  };

  this.info = function () {
    return _this;
  };

  this.verbose = function () {
    return _this;
  };

  this.debug = function () {
    return _this;
  };
};

exports.NoopLogger = NoopLogger;
//# sourceMappingURL=logger.js.map