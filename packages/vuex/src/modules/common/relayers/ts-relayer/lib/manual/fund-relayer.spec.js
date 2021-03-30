"use strict";
/*
This file is designed to be run to fund accounts and send packets when manually
testing ibc-setup and ibc-relayer on localhost.

Please configure the global variables to match the accounts displayed by
`ibc-setup keys list` before running.

Execute via:

yarn build && yarn test:unit ./src/lib/manual/fund-relayer.spec.ts
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const testutils_1 = require("../testutils");
const consts_1 = require("./consts");
ava_1.default.serial('fund relayer', async (t) => {
    await testutils_1.fundAccount(testutils_1.simapp, consts_1.simappAddress, '50000000');
    await testutils_1.fundAccount(testutils_1.wasmd, consts_1.wasmdAddress, '50000000');
    // to make ava happy
    t.is(1, 1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuZC1yZWxheWVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbnVhbC9mdW5kLXJlbGF5ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7RUFVRTs7Ozs7QUFFRiw4Q0FBdUI7QUFFdkIsNENBQTBEO0FBRTFELHFDQUF1RDtBQUV2RCxhQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdEMsTUFBTSx1QkFBVyxDQUFDLGtCQUFNLEVBQUUsc0JBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRCxNQUFNLHVCQUFXLENBQUMsaUJBQUssRUFBRSxxQkFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRW5ELG9CQUFvQjtJQUNwQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyxDQUFDIn0=