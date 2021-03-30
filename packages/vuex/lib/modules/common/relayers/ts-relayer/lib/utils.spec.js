"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");

var ava_1 = __importDefault(require("ava"));

var long_1 = __importDefault(require("long"));

var utils_1 = require("./utils");

ava_1["default"]('can parse revision numbers', function (t) {
  var musselnet = utils_1.parseRevisionNumber('musselnet-4');
  t.is(musselnet.toNumber(), 4);
  var numerific = utils_1.parseRevisionNumber('numers-123-456');
  t.is(numerific.toNumber(), 456);
  var nonums = utils_1.parseRevisionNumber('hello');
  t.is(nonums.toNumber(), 0);
  var nonums2 = utils_1.parseRevisionNumber('hello-world');
  t.is(nonums2.toNumber(), 0);
});
ava_1["default"]('can parse strange revision numbers', function (t) {
  // all of these should give 0
  var strangers = ['', '-', 'hello-', 'hello-123-', 'hello-0123', 'hello-00123', 'hello-1.23'];

  for (var _i = 0, _strangers = strangers; _i < _strangers.length; _i++) {
    var strange = _strangers[_i];
    var rev = utils_1.parseRevisionNumber(strange);
    t.is(rev.toNumber(), 0, strange);
  }
});

function nanosFromDateTime(time) {
  var stamp = utils_1.timestampFromDateNanos(time);
  return stamp.seconds.multiply(1000000000).add(stamp.nanos);
}

ava_1["default"]('time-based timeouts properly', function (t) {
  var time1 = tendermint_rpc_1.fromRfc3339WithNanoseconds('2021-03-12T12:34:56.123456789Z');
  var time2 = tendermint_rpc_1.fromRfc3339WithNanoseconds('2021-03-12T12:36:56.543543543Z');
  var time3 = tendermint_rpc_1.fromRfc3339WithNanoseconds('2021-03-12T12:36:13Z');
  var sec1 = utils_1.secondsFromDateNanos(time1);
  var nanos1 = nanosFromDateTime(time1);
  var sec2 = utils_1.secondsFromDateNanos(time2);
  var nanos2 = nanosFromDateTime(time2);
  var greaterThanNull = utils_1.timeGreater(undefined, utils_1.secondsFromDateNanos(time1));
  t.is(greaterThanNull, true);
  var greaterThanPast = utils_1.timeGreater(nanos2, sec1);
  t.is(greaterThanPast, true);
  var greaterThanFuture = utils_1.timeGreater(nanos1, sec2);
  t.is(greaterThanFuture, false); // nanos seconds beat seconds if present

  var greaterThanSelfWithNanos = utils_1.timeGreater(nanos1, sec1);
  t.is(greaterThanSelfWithNanos, true);
  var greaterThanSelf = utils_1.timeGreater(nanosFromDateTime(time3), utils_1.secondsFromDateNanos(time3));
  t.is(greaterThanSelf, false);
});
ava_1["default"]('height based timeouts properly', function (t) {
  var height1a = {
    revisionHeight: long_1["default"].fromNumber(12345),
    revisionNumber: long_1["default"].fromNumber(1)
  };
  var height1b = {
    revisionHeight: long_1["default"].fromNumber(14000),
    revisionNumber: long_1["default"].fromNumber(1)
  };
  var height2a = {
    revisionHeight: long_1["default"].fromNumber(600),
    revisionNumber: long_1["default"].fromNumber(2)
  };
  t.assert(utils_1.heightGreater(height1b, height1a));
  t.assert(utils_1.heightGreater(height2a, height1b));
  t.assert(utils_1.heightGreater(undefined, height2a));
  t["false"](utils_1.heightGreater(height1b, height1b));
  t["false"](utils_1.heightGreater(height1a, height1b));
});
ava_1["default"]('properly multiplies coin', function (t) {
  var input = {
    amount: '1212',
    denom: 'foo'
  };
  var output = utils_1.multiplyCoin(input, 3);
  t.deepEqual(output, {
    amount: '3636',
    denom: 'foo'
  });
  var input2 = {
    amount: '654321',
    denom: 'umuon'
  };
  var output2 = utils_1.multiplyCoin(input2, 2);
  t.deepEqual(output2, {
    amount: '1308642',
    denom: 'umuon'
  });
});
ava_1["default"]('properly multiplies fees', function (t) {
  var input = {
    gas: '12345',
    amount: [{
      amount: '654321',
      denom: 'umuon'
    }]
  };
  var out = utils_1.multiplyFees(input, 2);
  t.deepEqual(out.gas, '24690');
  t.deepEqual(out.amount, [{
    amount: '1308642',
    denom: 'umuon'
  }]);
});
ava_1["default"]('Properly determines height-based timeouts', function (t) {
  // proper heights
  t.deepEqual(utils_1.parseHeightAttribute('1-34'), {
    revisionNumber: new long_1["default"](1),
    revisionHeight: new long_1["default"](34)
  });
  t.deepEqual(utils_1.parseHeightAttribute('17-3456'), {
    revisionNumber: new long_1["default"](17),
    revisionHeight: new long_1["default"](3456)
  }); // handles revision number 0 properly (this is allowed)

  t.deepEqual(utils_1.parseHeightAttribute('0-1724'), {
    revisionNumber: new long_1["default"](0),
    revisionHeight: new long_1["default"](1724)
  }); // missing heights

  t.is(utils_1.parseHeightAttribute(''), undefined);
  t.is(utils_1.parseHeightAttribute(), undefined); // bad format

  t.is(utils_1.parseHeightAttribute('some-random-string'), undefined); // zero value is defined as missing

  t.is(utils_1.parseHeightAttribute('0-0'), undefined);
});
//# sourceMappingURL=utils.spec.js.map