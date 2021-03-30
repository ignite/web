"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.channels = exports.wasmdAddress = exports.simappAddress = void 0;

var testutils_1 = require("../testutils"); // TODO: use env vars
// copy these values from `ibc-setup keys list`


exports.simappAddress = 'cosmos1th0wrczcl2zatnku20zdmmctmdrwh22t89r4s0';
exports.wasmdAddress = 'wasm1x8ztrc7zqj2t5jvtyr6ncv7fwp62z2y22alpwu'; // TODO: use env vars
// we assume src is simapp for all these tests

exports.channels = {
  src: {
    channelId: 'channel-17',
    portId: testutils_1.ics20.srcPortId
  },
  dest: {
    channelId: 'channel-15',
    portId: testutils_1.ics20.destPortId
  }
};
//# sourceMappingURL=consts.js.map