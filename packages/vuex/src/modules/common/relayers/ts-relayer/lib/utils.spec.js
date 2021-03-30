"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const ava_1 = __importDefault(require("ava"));
const long_1 = __importDefault(require("long"));
const utils_1 = require("./utils");
ava_1.default('can parse revision numbers', (t) => {
    const musselnet = utils_1.parseRevisionNumber('musselnet-4');
    t.is(musselnet.toNumber(), 4);
    const numerific = utils_1.parseRevisionNumber('numers-123-456');
    t.is(numerific.toNumber(), 456);
    const nonums = utils_1.parseRevisionNumber('hello');
    t.is(nonums.toNumber(), 0);
    const nonums2 = utils_1.parseRevisionNumber('hello-world');
    t.is(nonums2.toNumber(), 0);
});
ava_1.default('can parse strange revision numbers', (t) => {
    // all of these should give 0
    const strangers = [
        '',
        '-',
        'hello-',
        'hello-123-',
        'hello-0123',
        'hello-00123',
        'hello-1.23',
    ];
    for (const strange of strangers) {
        const rev = utils_1.parseRevisionNumber(strange);
        t.is(rev.toNumber(), 0, strange);
    }
});
function nanosFromDateTime(time) {
    const stamp = utils_1.timestampFromDateNanos(time);
    return stamp.seconds.multiply(1000000000).add(stamp.nanos);
}
ava_1.default('time-based timeouts properly', (t) => {
    const time1 = tendermint_rpc_1.fromRfc3339WithNanoseconds('2021-03-12T12:34:56.123456789Z');
    const time2 = tendermint_rpc_1.fromRfc3339WithNanoseconds('2021-03-12T12:36:56.543543543Z');
    const time3 = tendermint_rpc_1.fromRfc3339WithNanoseconds('2021-03-12T12:36:13Z');
    const sec1 = utils_1.secondsFromDateNanos(time1);
    const nanos1 = nanosFromDateTime(time1);
    const sec2 = utils_1.secondsFromDateNanos(time2);
    const nanos2 = nanosFromDateTime(time2);
    const greaterThanNull = utils_1.timeGreater(undefined, utils_1.secondsFromDateNanos(time1));
    t.is(greaterThanNull, true);
    const greaterThanPast = utils_1.timeGreater(nanos2, sec1);
    t.is(greaterThanPast, true);
    const greaterThanFuture = utils_1.timeGreater(nanos1, sec2);
    t.is(greaterThanFuture, false);
    // nanos seconds beat seconds if present
    const greaterThanSelfWithNanos = utils_1.timeGreater(nanos1, sec1);
    t.is(greaterThanSelfWithNanos, true);
    const greaterThanSelf = utils_1.timeGreater(nanosFromDateTime(time3), utils_1.secondsFromDateNanos(time3));
    t.is(greaterThanSelf, false);
});
ava_1.default('height based timeouts properly', (t) => {
    const height1a = {
        revisionHeight: long_1.default.fromNumber(12345),
        revisionNumber: long_1.default.fromNumber(1),
    };
    const height1b = {
        revisionHeight: long_1.default.fromNumber(14000),
        revisionNumber: long_1.default.fromNumber(1),
    };
    const height2a = {
        revisionHeight: long_1.default.fromNumber(600),
        revisionNumber: long_1.default.fromNumber(2),
    };
    t.assert(utils_1.heightGreater(height1b, height1a));
    t.assert(utils_1.heightGreater(height2a, height1b));
    t.assert(utils_1.heightGreater(undefined, height2a));
    t.false(utils_1.heightGreater(height1b, height1b));
    t.false(utils_1.heightGreater(height1a, height1b));
});
ava_1.default('properly multiplies coin', (t) => {
    const input = { amount: '1212', denom: 'foo' };
    const output = utils_1.multiplyCoin(input, 3);
    t.deepEqual(output, { amount: '3636', denom: 'foo' });
    const input2 = { amount: '654321', denom: 'umuon' };
    const output2 = utils_1.multiplyCoin(input2, 2);
    t.deepEqual(output2, { amount: '1308642', denom: 'umuon' });
});
ava_1.default('properly multiplies fees', (t) => {
    const input = {
        gas: '12345',
        amount: [
            {
                amount: '654321',
                denom: 'umuon',
            },
        ],
    };
    const out = utils_1.multiplyFees(input, 2);
    t.deepEqual(out.gas, '24690');
    t.deepEqual(out.amount, [{ amount: '1308642', denom: 'umuon' }]);
});
ava_1.default('Properly determines height-based timeouts', (t) => {
    // proper heights
    t.deepEqual(utils_1.parseHeightAttribute('1-34'), {
        revisionNumber: new long_1.default(1),
        revisionHeight: new long_1.default(34),
    });
    t.deepEqual(utils_1.parseHeightAttribute('17-3456'), {
        revisionNumber: new long_1.default(17),
        revisionHeight: new long_1.default(3456),
    });
    // handles revision number 0 properly (this is allowed)
    t.deepEqual(utils_1.parseHeightAttribute('0-1724'), {
        revisionNumber: new long_1.default(0),
        revisionHeight: new long_1.default(1724),
    });
    // missing heights
    t.is(utils_1.parseHeightAttribute(''), undefined);
    t.is(utils_1.parseHeightAttribute(), undefined);
    // bad format
    t.is(utils_1.parseHeightAttribute('some-random-string'), undefined);
    // zero value is defined as missing
    t.is(utils_1.parseHeightAttribute('0-0'), undefined);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdXRpbHMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUdnQztBQUNoQyw4Q0FBdUI7QUFDdkIsZ0RBQXdCO0FBRXhCLG1DQVNpQjtBQUVqQixhQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUN2QyxNQUFNLFNBQVMsR0FBRywyQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU5QixNQUFNLFNBQVMsR0FBRywyQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRWhDLE1BQU0sTUFBTSxHQUFHLDJCQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTNCLE1BQU0sT0FBTyxHQUFHLDJCQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLG9DQUFvQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDL0MsNkJBQTZCO0lBQzdCLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLEVBQUU7UUFDRixHQUFHO1FBQ0gsUUFBUTtRQUNSLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7S0FDYixDQUFDO0lBQ0YsS0FBSyxNQUFNLE9BQU8sSUFBSSxTQUFTLEVBQUU7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