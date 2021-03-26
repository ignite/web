"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channels = exports.wasmdAddress = exports.simappAddress = void 0;
const testutils_1 = require("../testutils");
// TODO: use env vars
// copy these values from `ibc-setup keys list`
exports.simappAddress = 'cosmos1th0wrczcl2zatnku20zdmmctmdrwh22t89r4s0';
exports.wasmdAddress = 'wasm1x8ztrc7zqj2t5jvtyr6ncv7fwp62z2y22alpwu';
// TODO: use env vars
// we assume src is simapp for all these tests
exports.channels = {
    src: {
        channelId: 'channel-17',
        portId: testutils_1.ics20.srcPortId,
    },
    dest: {
        channelId: 'channel-15',
        portId: testutils_1.ics20.destPortId,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW51YWwvY29uc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDRDQUFxQztBQUVyQyxxQkFBcUI7QUFDckIsK0NBQStDO0FBQ2xDLFFBQUEsYUFBYSxHQUFHLCtDQUErQyxDQUFDO0FBQ2hFLFFBQUEsWUFBWSxHQUFHLDZDQUE2QyxDQUFDO0FBRTFFLHFCQUFxQjtBQUNyQiw4Q0FBOEM7QUFDakMsUUFBQSxRQUFRLEdBQWdCO0lBQ25DLEdBQUcsRUFBRTtRQUNILFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLE1BQU0sRUFBRSxpQkFBSyxDQUFDLFNBQVM7S0FDeEI7SUFDRCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsWUFBWTtRQUN2QixNQUFNLEVBQUUsaUJBQUssQ0FBQyxVQUFVO0tBQ3pCO0NBQ0YsQ0FBQyJ9