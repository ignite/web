"use strict";
/*
This file is designed to be run to fund accounts and send packets when manually
testing ibc-setup and ibc-relayer on localhost.

Please configure the global variables to match the accounts displayed by
`ibc-setup keys list` before running.

Execute via:

yarn build && yarn test:unit ./src/lib/manual/create-packets.spec.ts
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const testutils_1 = require("../testutils");
const consts_1 = require("./consts");
ava_1.default.serial.skip('send valid packets on existing channel', async (t) => {
    // create the basic clients
    const logger = new testutils_1.TestLogger();
    const [src, dest] = await testutils_1.setup(logger);
    // send some from src to dest
    const srcAmounts = [1200, 32222, 3456];
    const srcPackets = await testutils_1.transferTokens(src, testutils_1.simapp.denomFee, dest, testutils_1.wasmd.prefix, consts_1.channels.src, srcAmounts);
    t.is(srcAmounts.length, srcPackets.length);
    // send some from dest to src
    const destAmounts = [426238, 321989];
    const destPackets = await testutils_1.transferTokens(dest, testutils_1.wasmd.denomFee, src, testutils_1.simapp.prefix, consts_1.channels.dest, destAmounts);
    t.is(destAmounts.length, destPackets.length);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhY2tldHMuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFudWFsL2NyZWF0ZS1wYWNrZXRzLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0VBVUU7Ozs7O0FBRUYsOENBQXVCO0FBRXZCLDRDQUFnRjtBQUVoRixxQ0FBb0M7QUFFcEMsYUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0NBQXdDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3JFLDJCQUEyQjtJQUMzQixNQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFVLEVBQUUsQ0FBQztJQUNoQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLE1BQU0saUJBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV4Qyw2QkFBNkI7SUFDN0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sVUFBVSxHQUFHLE1BQU0sMEJBQWMsQ0FDckMsR0FBRyxFQUNILGtCQUFNLENBQUMsUUFBUSxFQUNmLElBQUksRUFDSixpQkFBSyxDQUFDLE1BQU0sRUFDWixpQkFBUSxDQUFDLEdBQUcsRUFDWixVQUFVLENBQ1gsQ0FBQztJQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0MsNkJBQTZCO0lBQzdCLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sV0FBVyxHQUFHLE1BQU0sMEJBQWMsQ0FDdEMsSUFBSSxFQUNKLGlCQUFLLENBQUMsUUFBUSxFQUNkLEdBQUcsRUFDSCxrQkFBTSxDQUFDLE1BQU0sRUFDYixpQkFBUSxDQUFDLElBQUksRUFDYixXQUFXLENBQ1osQ0FBQztJQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUMifQ==