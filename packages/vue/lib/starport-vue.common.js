module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "0085":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBlockChain_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("442c");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBlockChain', _SpBlockChain_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBlockChain_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "00df":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "028a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "0632":
/***/ (function(module, exports, __webpack_require__) {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__("b639")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "06c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a630");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6b75");







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "087f":
/***/ (function(module, exports, __webpack_require__) {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
 * in FIPS PUB 180-1
 * This source code is derived from sha1.js of the same repository.
 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
 * operation was added.
 */

var inherits = __webpack_require__("3fb5")
var Hash = __webpack_require__("b672")
var Buffer = __webpack_require__("8707").Buffer

var K = [
  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
]

var W = new Array(80)

function Sha () {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha, Hash)

Sha.prototype.init = function () {
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
  this._e = 0xc3d2e1f0

  return this
}

function rotl5 (num) {
  return (num << 5) | (num >>> 27)
}

function rotl30 (num) {
  return (num << 30) | (num >>> 2)
}

function ft (s, b, c, d) {
  if (s === 0) return (b & c) | ((~b) & d)
  if (s === 2) return (b & c) | (b & d) | (c & d)
  return b ^ c ^ d
}

Sha.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 80; ++i) W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]

  for (var j = 0; j < 80; ++j) {
    var s = ~~(j / 20)
    var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0

    e = d
    d = c
    c = rotl30(b)
    b = a
    a = t
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha.prototype._hash = function () {
  var H = Buffer.allocUnsafe(20)

  H.writeInt32BE(this._a | 0, 0)
  H.writeInt32BE(this._b | 0, 4)
  H.writeInt32BE(this._c | 0, 8)
  H.writeInt32BE(this._d | 0, 12)
  H.writeInt32BE(this._e | 0, 16)

  return H
}

module.exports = Sha


/***/ }),

/***/ "0960":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("b19a");


/***/ }),

/***/ "09dc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


module.exports = Transform;

var _require$codes = __webpack_require__("9d8a").codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = __webpack_require__("e666");

__webpack_require__("3fb5")(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}

/***/ }),

/***/ "0ae3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.


module.exports = PassThrough;

var Transform = __webpack_require__("09dc");

__webpack_require__("3fb5")(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ "0c22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBlockDetailSheet_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d943");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBlockDetailSheet', _SpBlockDetailSheet_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBlockDetailSheet_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1083":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromHex = exports.toHex = void 0;
function toHex(data) {
    let out = "";
    for (const byte of data) {
        out += ("0" + byte.toString(16)).slice(-2);
    }
    return out;
}
exports.toHex = toHex;
function fromHex(hexstring) {
    if (hexstring.length % 2 !== 0) {
        throw new Error("hex string length must be a multiple of 2");
    }
    const listOfInts = [];
    for (let i = 0; i < hexstring.length; i += 2) {
        const hexByteAsString = hexstring.substr(i, 2);
        if (!hexByteAsString.match(/[0-9a-f]{2}/i)) {
            throw new Error("hex string contains invalid characters");
        }
        listOfInts.push(parseInt(hexByteAsString, 16));
    }
    return new Uint8Array(listOfInts);
}
exports.fromHex = fromHex;
//# sourceMappingURL=hex.js.map

/***/ }),

/***/ "10c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpFullWidthContainer_vue_vue_type_style_index_0_id_14097b9e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c957");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpFullWidthContainer_vue_vue_type_style_index_0_id_14097b9e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpFullWidthContainer_vue_vue_type_style_index_0_id_14097b9e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "11dc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

// limit of Crypto.getRandomValues()
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
var MAX_BYTES = 65536

// Node supports requesting up to this number of bytes
// https://github.com/nodejs/node/blob/master/lib/internal/crypto/random.js#L48
var MAX_UINT32 = 4294967295

function oldBrowser () {
  throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11')
}

var Buffer = __webpack_require__("8707").Buffer
var crypto = global.crypto || global.msCrypto

if (crypto && crypto.getRandomValues) {
  module.exports = randomBytes
} else {
  module.exports = oldBrowser
}

function randomBytes (size, cb) {
  // phantomjs needs to throw
  if (size > MAX_UINT32) throw new RangeError('requested too many random bytes')

  var bytes = Buffer.allocUnsafe(size)

  if (size > 0) {  // getRandomValues fails on IE if size == 0
    if (size > MAX_BYTES) { // this is the max bytes crypto.getRandomValues
      // can do at once see https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
      for (var generated = 0; generated < size; generated += MAX_BYTES) {
        // buffer.slice automatically checks if the end is past the end of
        // the buffer so we don't have to here
        crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES))
      }
    } else {
      crypto.getRandomValues(bytes)
    }
  }

  if (typeof cb === 'function') {
    return process.nextTick(function () {
      cb(null, bytes)
    })
  }

  return bytes
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("4362")))

/***/ }),

/***/ "11ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpArrow/SpArrow.vue?vue&type=template&id=726a387d

var _hoisted_1 = {
  width: "10",
  height: "10",
  viewBox: "0 0 10 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("g", {
  opacity: "0.8",
  "clip-path": "url(#clip0)"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("path", {
  d: "M0.8125 4.1875L1.6875 5.0625L4.375 2.375L4.375 10H5.625L5.625 2.375L8.3125 5.0625L9.1875 4.1875L5 0L0.8125 4.1875Z",
  fill: "#4251FA"
})], -1);

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("defs", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("clipPath", {
  id: "clip0"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("rect", {
  width: "10",
  height: "10",
  fill: "white"
})])], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("svg", _hoisted_1, [_hoisted_2, _hoisted_3]);
}
// CONCATENATED MODULE: ./src/components/SpArrow/SpArrow.vue?vue&type=template&id=726a387d

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpArrow/SpArrow.vue?vue&type=script&lang=js
/* harmony default export */ var SpArrowvue_type_script_lang_js = ({
  name: 'SpArrow'
});
// CONCATENATED MODULE: ./src/components/SpArrow/SpArrow.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpArrow/SpArrow.vue



SpArrowvue_type_script_lang_js.render = render

/* harmony default export */ var SpArrow = __webpack_exports__["a"] = (SpArrowvue_type_script_lang_js);

/***/ }),

/***/ "1229":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBlockDisplaySmall/SpBlockDisplaySmall.vue?vue&type=template&id=35feaeae

var _hoisted_1 = {
  class: "SpBlockDisplaySmallHeight"
};
var _hoisted_2 = {
  class: "SpBlockDisplaySmallHash"
};
var _hoisted_3 = {
  class: "SpBlockDisplaySmallTime"
};
var _hoisted_4 = {
  class: "SpBlockDisplaySmallTxs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("router-link");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_router_link, {
    class: "SpBlockDisplaySmall",
    to: '/block/' + $props.block.height
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.block.height), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.block.hash), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.formatTS($props.block.timestamp)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_4, " No of Txs: " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.block.details.data.txs.length), 1)];
    }),
    _: 1
  }, 8, ["to"]);
}
// CONCATENATED MODULE: ./src/components/SpBlockDisplaySmall/SpBlockDisplaySmall.vue?vue&type=template&id=35feaeae

// EXTERNAL MODULE: external {"commonjs":"moment","commonjs2":"moment","root":"moment","amd":"moment"}
var external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_ = __webpack_require__("c32d");
var external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBlockDisplaySmall/SpBlockDisplaySmall.vue?vue&type=script&lang=js

/* harmony default export */ var SpBlockDisplaySmallvue_type_script_lang_js = ({
  name: 'SpBlockDisplaySmall',
  props: {
    block: Object,
    tsFormat: String
  },
  methods: {
    formatTS: function formatTS(timestamp) {
      var momentTime = external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default()(timestamp);
      return momentTime.format(this.tsFormat);
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpBlockDisplaySmall/SpBlockDisplaySmall.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpBlockDisplaySmall/SpBlockDisplaySmall.vue



SpBlockDisplaySmallvue_type_script_lang_js.render = render

/* harmony default export */ var SpBlockDisplaySmall = __webpack_exports__["a"] = (SpBlockDisplaySmallvue_type_script_lang_js);

/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "171e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpTypeList/SpTypeList.vue?vue&type=template&id=28983602


var _hoisted_1 = {
  key: 0,
  class: "SpTypeList"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(" LIST OF TYPE: '");

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("' ITEMS FROM MODULE: '");

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("' ");

var _hoisted_5 = {
  key: 0,
  class: "SpTypeListEmpty"
};

var _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, "No items available", -1);

var _hoisted_7 = {
  key: 1
};
var _hoisted_8 = {
  class: "SpTable"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, [_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.type), 1), _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.module), 1), _hoisted_4])]), !$options.typeItems || $options.typeItems.length == 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_5, [_hoisted_6])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("table", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("tr", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])(_ctx.fieldList, function (field) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("td", {
      key: field
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(field.name), 1)]);
  }), 128))])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("tbody", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.typeItems, function (item) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("tr", {
      class: "SpTypeListItem",
      key: item.id
    }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])(_ctx.fieldList, function (field) {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("td", {
        key: field
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(item[field.name]), 1);
    }), 128))]);
  }), 128))])])]))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpTypeList/SpTypeList.vue?vue&type=template&id=28983602

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("2909");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpTypeList/SpTypeList.vue?vue&type=script&lang=js







/* harmony default export */ var SpTypeListvue_type_script_lang_js = ({
  name: 'SpTypeList',
  props: {
    type: {
      type: String,
      default: ''
    },
    module: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      fieldList: []
    };
  },
  computed: {
    typeItems: function typeItems() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/' + this.module + '/get' + this.type + 'All']();
      } else {
        return [];
      }
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain'].concat(Object(toConsumableArray["a" /* default */])(this.module.split('/')));

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module ' + this.module + ' has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  created: function created() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this._depsLoaded) {
                _context.next = 4;
                break;
              }

              _this.fieldList = _this.$store.getters['chain/' + _this.module + '/getTypeStructure'](_this.type);
              _context.next = 4;
              return _this.$store.dispatch('chain/' + _this.module + '/Query' + _this.type + 'All', {
                subscribe: true
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./src/components/SpTypeList/SpTypeList.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpTypeList/SpTypeList.vue



SpTypeListvue_type_script_lang_js.render = render

/* harmony default export */ var SpTypeList = __webpack_exports__["a"] = (SpTypeListvue_type_script_lang_js);

/***/ }),

/***/ "178d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBlockHeight_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ced");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBlockHeight', _SpBlockHeight_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBlockHeight_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "19ea":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: __webpack_require__("b7d1")
};
/*</replacement>*/

/*<replacement>*/

var Stream = __webpack_require__("5bbb");
/*</replacement>*/


var Buffer = __webpack_require__("b639").Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = __webpack_require__("493f");

var _require = __webpack_require__("b9b5"),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__("9d8a").codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

__webpack_require__("3fb5")(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__("e666");
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__("e666"); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("4362")))

/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c66":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpIconText_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3b47");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpIconText', _SpIconText_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpIconText_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1da1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1fb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "203b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpCopy_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("63ca");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpCopy', _SpCopy_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpCopy_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "206d":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var Buffer = __webpack_require__("8707").Buffer

var checkParameters = __webpack_require__("7d2a")
var defaultEncoding = __webpack_require__("9f9d")
var sync = __webpack_require__("e07b")
var toBuffer = __webpack_require__("8be6")

var ZERO_BUF
var subtle = global.crypto && global.crypto.subtle
var toBrowser = {
  sha: 'SHA-1',
  'sha-1': 'SHA-1',
  sha1: 'SHA-1',
  sha256: 'SHA-256',
  'sha-256': 'SHA-256',
  sha384: 'SHA-384',
  'sha-384': 'SHA-384',
  'sha-512': 'SHA-512',
  sha512: 'SHA-512'
}
var checks = []
function checkNative (algo) {
  if (global.process && !global.process.browser) {
    return Promise.resolve(false)
  }
  if (!subtle || !subtle.importKey || !subtle.deriveBits) {
    return Promise.resolve(false)
  }
  if (checks[algo] !== undefined) {
    return checks[algo]
  }
  ZERO_BUF = ZERO_BUF || Buffer.alloc(8)
  var prom = browserPbkdf2(ZERO_BUF, ZERO_BUF, 10, 128, algo)
    .then(function () {
      return true
    }).catch(function () {
      return false
    })
  checks[algo] = prom
  return prom
}

function browserPbkdf2 (password, salt, iterations, length, algo) {
  return subtle.importKey(
    'raw', password, { name: 'PBKDF2' }, false, ['deriveBits']
  ).then(function (key) {
    return subtle.deriveBits({
      name: 'PBKDF2',
      salt: salt,
      iterations: iterations,
      hash: {
        name: algo
      }
    }, key, length << 3)
  }).then(function (res) {
    return Buffer.from(res)
  })
}

function resolvePromise (promise, callback) {
  promise.then(function (out) {
    process.nextTick(function () {
      callback(null, out)
    })
  }, function (e) {
    process.nextTick(function () {
      callback(e)
    })
  })
}
module.exports = function (password, salt, iterations, keylen, digest, callback) {
  if (typeof digest === 'function') {
    callback = digest
    digest = undefined
  }

  digest = digest || 'sha1'
  var algo = toBrowser[digest.toLowerCase()]

  if (!algo || typeof global.Promise !== 'function') {
    return process.nextTick(function () {
      var out
      try {
        out = sync(password, salt, iterations, keylen, digest)
      } catch (e) {
        return callback(e)
      }
      callback(null, out)
    })
  }

  checkParameters(iterations, keylen)
  password = toBuffer(password, defaultEncoding, 'Password')
  salt = toBuffer(salt, defaultEncoding, 'Salt')
  if (typeof callback !== 'function') throw new Error('No callback provided to pbkdf2')

  resolvePromise(checkNative(algo).then(function (resp) {
    if (resp) return browserPbkdf2(password, salt, iterations, keylen, algo)

    return sync(password, salt, iterations, keylen, digest)
  }), callback)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("4362")))

/***/ }),

/***/ "21ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpIconSynchronization1_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcf4");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpIconSynchronization1', _SpIconSynchronization1_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpIconSynchronization1_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "234e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpWalletMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("da4d6");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpWalletMenu', _SpWalletMenu_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpWalletMenu_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2560":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpStatusRPC_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("720b");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpStatusRPC', _SpStatusRPC_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpStatusRPC_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "27bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__("b19a");

/*<replacement>*/
var util = Object.create(__webpack_require__("3a7c"));
util.inherits = __webpack_require__("3fb5");
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),

/***/ "2909":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__("6b75");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("06c5");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "292e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpYamlCards_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5f1f");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpYamlCards', _SpYamlCards_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpYamlCards_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "29c9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
const createHash = __webpack_require__("98e6");
const pbkdf2_1 = __webpack_require__("a099");
const randomBytes = __webpack_require__("11dc");
const _wordlists_1 = __webpack_require__("9088");
let DEFAULT_WORDLIST = _wordlists_1._default;
const INVALID_MNEMONIC = 'Invalid mnemonic';
const INVALID_ENTROPY = 'Invalid entropy';
const INVALID_CHECKSUM = 'Invalid mnemonic checksum';
const WORDLIST_REQUIRED = 'A wordlist is required but a default could not be found.\n' +
    'Please explicitly pass a 2048 word array explicitly.';
function pbkdf2Promise(password, saltMixin, iterations, keylen, digest) {
    return Promise.resolve().then(() => new Promise((resolve, reject) => {
        const callback = (err, derivedKey) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(derivedKey);
            }
        };
        pbkdf2_1.pbkdf2(password, saltMixin, iterations, keylen, digest, callback);
    }));
}
function normalize(str) {
    return (str || '').normalize('NFKD');
}
function lpad(str, padString, length) {
    while (str.length < length) {
        str = padString + str;
    }
    return str;
}
function binaryToByte(bin) {
    return parseInt(bin, 2);
}
function bytesToBinary(bytes) {
    return bytes.map((x) => lpad(x.toString(2), '0', 8)).join('');
}
function deriveChecksumBits(entropyBuffer) {
    const ENT = entropyBuffer.length * 8;
    const CS = ENT / 32;
    const hash = createHash('sha256')
        .update(entropyBuffer)
        .digest();
    return bytesToBinary(Array.from(hash)).slice(0, CS);
}
function salt(password) {
    return 'mnemonic' + (password || '');
}
function mnemonicToSeedSync(mnemonic, password) {
    const mnemonicBuffer = Buffer.from(normalize(mnemonic), 'utf8');
    const saltBuffer = Buffer.from(salt(normalize(password)), 'utf8');
    return pbkdf2_1.pbkdf2Sync(mnemonicBuffer, saltBuffer, 2048, 64, 'sha512');
}
exports.mnemonicToSeedSync = mnemonicToSeedSync;
function mnemonicToSeed(mnemonic, password) {
    return Promise.resolve().then(() => {
        const mnemonicBuffer = Buffer.from(normalize(mnemonic), 'utf8');
        const saltBuffer = Buffer.from(salt(normalize(password)), 'utf8');
        return pbkdf2Promise(mnemonicBuffer, saltBuffer, 2048, 64, 'sha512');
    });
}
exports.mnemonicToSeed = mnemonicToSeed;
function mnemonicToEntropy(mnemonic, wordlist) {
    wordlist = wordlist || DEFAULT_WORDLIST;
    if (!wordlist) {
        throw new Error(WORDLIST_REQUIRED);
    }
    const words = normalize(mnemonic).split(' ');
    if (words.length % 3 !== 0) {
        throw new Error(INVALID_MNEMONIC);
    }
    // convert word indices to 11 bit binary strings
    const bits = words
        .map((word) => {
        const index = wordlist.indexOf(word);
        if (index === -1) {
            throw new Error(INVALID_MNEMONIC);
        }
        return lpad(index.toString(2), '0', 11);
    })
        .join('');
    // split the binary string into ENT/CS
    const dividerIndex = Math.floor(bits.length / 33) * 32;
    const entropyBits = bits.slice(0, dividerIndex);
    const checksumBits = bits.slice(dividerIndex);
    // calculate the checksum and compare
    const entropyBytes = entropyBits.match(/(.{1,8})/g).map(binaryToByte);
    if (entropyBytes.length < 16) {
        throw new Error(INVALID_ENTROPY);
    }
    if (entropyBytes.length > 32) {
        throw new Error(INVALID_ENTROPY);
    }
    if (entropyBytes.length % 4 !== 0) {
        throw new Error(INVALID_ENTROPY);
    }
    const entropy = Buffer.from(entropyBytes);
    const newChecksum = deriveChecksumBits(entropy);
    if (newChecksum !== checksumBits) {
        throw new Error(INVALID_CHECKSUM);
    }
    return entropy.toString('hex');
}
exports.mnemonicToEntropy = mnemonicToEntropy;
function entropyToMnemonic(entropy, wordlist) {
    if (!Buffer.isBuffer(entropy)) {
        entropy = Buffer.from(entropy, 'hex');
    }
    wordlist = wordlist || DEFAULT_WORDLIST;
    if (!wordlist) {
        throw new Error(WORDLIST_REQUIRED);
    }
    // 128 <= ENT <= 256
    if (entropy.length < 16) {
        throw new TypeError(INVALID_ENTROPY);
    }
    if (entropy.length > 32) {
        throw new TypeError(INVALID_ENTROPY);
    }
    if (entropy.length % 4 !== 0) {
        throw new TypeError(INVALID_ENTROPY);
    }
    const entropyBits = bytesToBinary(Array.from(entropy));
    const checksumBits = deriveChecksumBits(entropy);
    const bits = entropyBits + checksumBits;
    const chunks = bits.match(/(.{1,11})/g);
    const words = chunks.map((binary) => {
        const index = binaryToByte(binary);
        return wordlist[index];
    });
    return wordlist[0] === '\u3042\u3044\u3053\u304f\u3057\u3093' // Japanese wordlist
        ? words.join('\u3000')
        : words.join(' ');
}
exports.entropyToMnemonic = entropyToMnemonic;
function generateMnemonic(strength, rng, wordlist) {
    strength = strength || 128;
    if (strength % 32 !== 0) {
        throw new TypeError(INVALID_ENTROPY);
    }
    rng = rng || randomBytes;
    return entropyToMnemonic(rng(strength / 8), wordlist);
}
exports.generateMnemonic = generateMnemonic;
function validateMnemonic(mnemonic, wordlist) {
    try {
        mnemonicToEntropy(mnemonic, wordlist);
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.validateMnemonic = validateMnemonic;
function setDefaultWordlist(language) {
    const result = _wordlists_1.wordlists[language];
    if (result) {
        DEFAULT_WORDLIST = result;
    }
    else {
        throw new Error('Could not find wordlist for language "' + language + '"');
    }
}
exports.setDefaultWordlist = setDefaultWordlist;
function getDefaultWordlist() {
    if (!DEFAULT_WORDLIST) {
        throw new Error('No Default Wordlist set');
    }
    return Object.keys(_wordlists_1.wordlists).filter((lang) => {
        if (lang === 'JA' || lang === 'EN') {
            return false;
        }
        return _wordlists_1.wordlists[lang].every((word, index) => word === DEFAULT_WORDLIST[index]);
    })[0];
}
exports.getDefaultWordlist = getDefaultWordlist;
var _wordlists_2 = __webpack_require__("9088");
exports.wordlists = _wordlists_2.wordlists;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2b35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpLatestBlocks_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3a9d");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpArrow', _SpLatestBlocks_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpLatestBlocks_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "2be8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusAPI/SpStatusAPI.vue?vue&type=template&id=78aacdc5

var _hoisted_1 = {
  class: "SpStatusAPI"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(" API ");

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(": ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpStatusLED = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpStatusLED");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.apiNode), 1), _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpStatusLED, {
    status: $options.nodeStatus
  }, null, 8, ["status"])]);
}
// CONCATENATED MODULE: ./src/components/SpStatusAPI/SpStatusAPI.vue?vue&type=template&id=78aacdc5

// EXTERNAL MODULE: ./src/components/SpStatusLED/index.js
var SpStatusLED = __webpack_require__("ae78");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusAPI/SpStatusAPI.vue?vue&type=script&lang=js

/* harmony default export */ var SpStatusAPIvue_type_script_lang_js = ({
  name: 'SpStatusAPI',
  components: {
    SpStatusLED: SpStatusLED["a" /* default */]
  },
  computed: {
    apiNode: function apiNode() {
      return this.$store.state.chain.common.env.apiCosmos;
    },
    nodeStatus: function nodeStatus() {
      return this.$store.state.chain.common.env.apiConnected;
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpStatusAPI/SpStatusAPI.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpStatusAPI/SpStatusAPI.vue



SpStatusAPIvue_type_script_lang_js.render = render

/* harmony default export */ var SpStatusAPI = __webpack_exports__["a"] = (SpStatusAPIvue_type_script_lang_js);

/***/ }),

/***/ "2c63":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dc14");


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");
var IS_NODE = __webpack_require__("605d");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2ead":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bech32 = void 0;
const bech32 = __importStar(__webpack_require__("bf2b"));
class Bech32 {
    static encode(prefix, data, limit) {
        const address = bech32.encode(prefix, bech32.toWords(data), limit);
        return address;
    }
    static decode(address, limit = Infinity) {
        const decodedAddress = bech32.decode(address, limit);
        return {
            prefix: decodedAddress.prefix,
            data: new Uint8Array(bech32.fromWords(decodedAddress.words)),
        };
    }
}
exports.Bech32 = Bech32;
//# sourceMappingURL=bech32.js.map

/***/ }),

/***/ "2f47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpCheck_vue_vue_type_style_index_0_id_14e94c8b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b26f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpCheck_vue_vue_type_style_index_0_id_14e94c8b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpCheck_vue_vue_type_style_index_0_id_14e94c8b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2fa6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBlockCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("51db");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBlockCard', _SpBlockCard_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBlockCard_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "2fcb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpStatusWS_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("41f0");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpStatusWS', _SpStatusWS_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpStatusWS_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "31e7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "334a":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("4250");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__("19ea");
exports.Duplex = __webpack_require__("e666");
exports.Transform = __webpack_require__("09dc");
exports.PassThrough = __webpack_require__("0ae3");
exports.finished = __webpack_require__("ee93");
exports.pipeline = __webpack_require__("fbd5");


/***/ }),

/***/ "33e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpLoaderIconText_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("57cb");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpLoaderIconText', _SpLoaderIconText_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpLoaderIconText_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "36b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpWalletList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bd31");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpWalletList', _SpWalletList_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpWalletList_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "3729":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpTokenSend_vue_vue_type_style_index_0_id_0bfbfc8b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("96ab");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpTokenSend_vue_vue_type_style_index_0_id_0bfbfc8b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpTokenSend_vue_vue_type_style_index_0_id_0bfbfc8b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3a7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ "3a9d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpLatestBlocks/SpLatestBlocks.vue?vue&type=template&id=0d714c96

var _hoisted_1 = {
  key: 0,
  class: "SpLatestBlocksWrapper"
};
var _hoisted_2 = {
  class: "SpLatestBlocks",
  ref: "blockList"
};

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("h2", null, "LATEST BLOCKS", -1);

var _hoisted_4 = {
  key: 0,
  class: "SpLatestBlockList"
};
var _hoisted_5 = {
  key: 1,
  class: "SpLatestBlockListEmpty"
};

var _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", null, "Generating blocks", -1);

var _hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "VIEW ALL BLOCKS", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpBlockDisplaySmall = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpBlockDisplaySmall");

  var _component_SpBox = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpBox");

  var _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("router-link");

  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_2, [_hoisted_3, $options.blocks.length >= 10 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_4, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.blocks, function (block) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpBlockDisplaySmall, {
      id: 'block-' + block.height,
      key: block.hash,
      block: block,
      tsFormat: "MMM D YYYY, HH:mm:ss"
    }, null, 8, ["id", "block"]);
  }), 128))])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpBox), _hoisted_6]))], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_router_link, {
    to: "/blocks/",
    class: "SpButton"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withCtx"])(function () {
      return [_hoisted_7];
    }),
    _: 1
  })])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpLatestBlocks/SpLatestBlocks.vue?vue&type=template&id=0d714c96

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./src/components/SpBlockDisplaySmall/index.js
var SpBlockDisplaySmall = __webpack_require__("d612");

// EXTERNAL MODULE: ./src/components/SpBox/index.js
var SpBox = __webpack_require__("b907");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpLatestBlocks/SpLatestBlocks.vue?vue&type=script&lang=js



/* harmony default export */ var SpLatestBlocksvue_type_script_lang_js = ({
  name: 'SpLatestBlocks',
  components: {
    SpBlockDisplaySmall: SpBlockDisplaySmall["a" /* default */],
    SpBox: SpBox["a" /* default */]
  },
  computed: {
    blocks: function blocks() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/common/blocks/getBlocks'](10);
      } else {
        return [];
      }
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'common', 'blocks'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `chain.common.blocks` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  watch: {
    blocks: function blocks() {
      var initialPos = window.scrollY;
      var vm = this;
      vm.$nextTick(function () {
        window.scrollTo(0, initialPos);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpLatestBlocks/SpLatestBlocks.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpLatestBlocks/SpLatestBlocks.vue



SpLatestBlocksvue_type_script_lang_js.render = render

/* harmony default export */ var SpLatestBlocks = __webpack_exports__["a"] = (SpLatestBlocksvue_type_script_lang_js);

/***/ }),

/***/ "3b47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: ./src/components/SpCopy/index.js
var SpCopy = __webpack_require__("203b");

// EXTERNAL MODULE: ./src/components/SpCheck/index.js
var SpCheck = __webpack_require__("4452");

// EXTERNAL MODULE: ./src/components/SpSpinner/index.js
var SpSpinner = __webpack_require__("8ce3");

// EXTERNAL MODULE: ./src/components/SpSuccessDot/index.js
var SpSuccessDot = __webpack_require__("9e86");

// EXTERNAL MODULE: ./src/components/SpTooltip/index.js
var SpTooltip = __webpack_require__("6216");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconText/SpIconText.vue?vue&type=script&lang=js










function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["isVNode"])(s);
}

/* harmony default export */ var SpIconTextvue_type_script_lang_js = ({
  name: 'SpIconText',
  components: {
    SpCopy: SpCopy["a" /* default */]
  },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    },
    isIconClickable: {
      type: Boolean,
      default: false
    },
    isIconFirst: {
      type: Boolean,
      default: false
    },
    tooltipStates: {
      type: Object,
      default: null
    },
    tooltipDirection: {
      type: String,
      default: 'right'
    },
    iconType: {
      type: String,
      required: true,
      default: 'copy',
      validator: function validator(value) {
        return ['copy', 'successDot', 'spinner', 'check'].indexOf(value) >= 0;
      }
    },
    tooltipOption: {
      type: String,
      default: 'none',
      validator: function validator(value) {
        return ['none', 'iconWrapper', 'textWrapper', 'compWrapper'].indexOf(value) >= 0;
      }
    }
  },
  methods: {
    getIconType: function getIconType() {
      switch (this.iconType) {
        case 'copy':
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(SpCopy["a" /* default */], null, null);

        case 'successDot':
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(SpSuccessDot["a" /* default */], null, null);

        case 'spinner':
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(SpSpinner["a" /* default */], null, null);

        case 'check':
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(SpCheck["a" /* default */], null, null);

        default:
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(SpCopy["a" /* default */], null, null);
      }
    },
    getIconContent: function getIconContent() {
      var _this = this;

      return !this.isIconClickable ? this.getIconType() : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
        "onClick": function onClick() {
          return _this.$emit('iconClicked');
        }
      }, [this.getIconType()]);
    },
    getIconComp: function getIconComp() {
      var IconContent = this.getIconContent();

      switch (this.tooltipOption) {
        case 'iconWrapper':
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(SpTooltip["a" /* default */], {
            "content": this.tooltipStates.text,
            "isEventTriggerType": {
              triggerActiveState: this.tooltipStates.state
            },
            "direction": this.tooltipDirection
          }, _isSlot(IconContent) ? IconContent : {
            default: function _default() {
              return [IconContent];
            }
          });

        default:
          return IconContent;
      }
    }
  },
  render: function render() {
    var _this$$props = this.$props,
        text = _this$$props.text,
        link = _this$$props.link;
    var textContent = !link ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", null, [text]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("router-link"), {
      "to": link
    }, _isSlot(text) ? text : {
      default: function _default() {
        return [text];
      }
    });
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", {
      "class": "icon-text"
    }, [this.isIconFirst && Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
      "class": "icon-text__icon -is-".concat(this.iconType)
    }, [this.getIconComp()]), textContent, !this.isIconFirst && Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
      "class": "icon-text__icon -is-".concat(this.iconType)
    }, [this.getIconComp()])]);
  }
});
// CONCATENATED MODULE: ./src/components/SpIconText/SpIconText.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpIconText/SpIconText.vue?vue&type=style&index=0&id=15f0a243&scoped=true&lang=css
var SpIconTextvue_type_style_index_0_id_15f0a243_scoped_true_lang_css = __webpack_require__("ee58");

// CONCATENATED MODULE: ./src/components/SpIconText/SpIconText.vue




SpIconTextvue_type_script_lang_js.__scopeId = "data-v-15f0a243"

/* harmony default export */ var SpIconText = __webpack_exports__["a"] = (SpIconTextvue_type_script_lang_js);

/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3ec2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpSpinner/SpSpinner.vue?vue&type=template&id=7cd9d5c1&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-7cd9d5c1");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-7cd9d5c1");

var _hoisted_1 = {
  class: "lds-ring"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", null, null, -1);

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", null, null, -1);

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", null, null, -1);

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", null, null, -1);

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5]);
});
// CONCATENATED MODULE: ./src/components/SpSpinner/SpSpinner.vue?vue&type=template&id=7cd9d5c1&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpSpinner/SpSpinner.vue?vue&type=script&lang=js
/* harmony default export */ var SpSpinnervue_type_script_lang_js = ({
  name: 'SpSpinner'
});
// CONCATENATED MODULE: ./src/components/SpSpinner/SpSpinner.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpSpinner/SpSpinner.vue?vue&type=style&index=0&id=7cd9d5c1&scoped=true&lang=css
var SpSpinnervue_type_style_index_0_id_7cd9d5c1_scoped_true_lang_css = __webpack_require__("ac8a");

// CONCATENATED MODULE: ./src/components/SpSpinner/SpSpinner.vue





SpSpinnervue_type_script_lang_js.render = render
SpSpinnervue_type_script_lang_js.__scopeId = "data-v-7cd9d5c1"

/* harmony default export */ var SpSpinner = __webpack_exports__["a"] = (SpSpinnervue_type_script_lang_js);

/***/ }),

/***/ "3f43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpTokenSend_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("515a");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpTokenSend', _SpTokenSend_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpTokenSend_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "3f4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconLoading2/SpIconLoading2.vue?vue&type=template&id=314fcabc


var _hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("path", {
  d: "M8.175 7.377l-3.042-5.27 1.732-1 3.045 5.273c-.635.238-1.222.573-1.735.997zm-.799.8l-5.27-3.042-1 1.732 5.274 3.045c.237-.635.572-1.223.996-1.735zm-1.376 3.823c0-.341.035-.673.09-.999h-6.09v1.999h6.09c-.055-.326-.09-.659-.09-1zm11.351-2.705l5.208-3.007-.333-.577-5.206 3.007c.121.185.23.379.331.577zm-5.351-3.295c.341 0 .673.035.999.09v-6.09h-1.999v6.09c.326-.055.659-.09 1-.09zm3.14.894l3.004-5.204-.288-.166-3 5.197.284.173zm1.685 8.662l5.234 3.022.666-1.154-5.229-3.019c-.181.41-.408.794-.671 1.151zm-10.444-1.467l-5.274 3.046 1 1.732 5.27-3.042c-.424-.513-.759-1.1-.996-1.736zm11.594-2.589l.025.5-.025.5h6.025v-1h-6.025zm-3.727 6.061l3.03 5.249 1.442-.833-3.031-5.25c-.437.34-.92.623-1.441.834zm-2.248.439c-.341 0-.674-.035-1-.09v6.09h1.999v-6.09c-.326.055-.658.09-.999.09zm-3.824-1.376l-3.042 5.27 1.732 1 3.045-5.274c-.635-.237-1.222-.572-1.735-.996z"
})], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", null, [_hoisted_1]);
}
// CONCATENATED MODULE: ./src/components/SpIconLoading2/SpIconLoading2.vue?vue&type=template&id=314fcabc

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconLoading2/SpIconLoading2.vue?vue&type=script&lang=js
/* harmony default export */ var SpIconLoading2vue_type_script_lang_js = ({
  name: 'SpIconLoading2'
});
// CONCATENATED MODULE: ./src/components/SpIconLoading2/SpIconLoading2.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpIconLoading2/SpIconLoading2.vue



SpIconLoading2vue_type_script_lang_js.render = render

/* harmony default export */ var SpIconLoading2 = __webpack_exports__["a"] = (SpIconLoading2vue_type_script_lang_js);

/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "3fb5":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "4186":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _Object$setPrototypeO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var finished = __webpack_require__("ee93");

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "41bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpYamlCards_vue_vue_type_style_index_0_id_ce370480_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4cb4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpYamlCards_vue_vue_type_style_index_0_id_ce370480_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpYamlCards_vue_vue_type_style_index_0_id_ce370480_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "41f0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusWS/SpStatusWS.vue?vue&type=template&id=9fd3b37e

var _hoisted_1 = {
  class: "SpStatusWS"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(" WS ");

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(": ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpStatusLED = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpStatusLED");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.wsNode), 1), _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpStatusLED, {
    status: $options.nodeStatus
  }, null, 8, ["status"])]);
}
// CONCATENATED MODULE: ./src/components/SpStatusWS/SpStatusWS.vue?vue&type=template&id=9fd3b37e

// EXTERNAL MODULE: ./src/components/SpStatusLED/index.js
var SpStatusLED = __webpack_require__("ae78");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusWS/SpStatusWS.vue?vue&type=script&lang=js

/* harmony default export */ var SpStatusWSvue_type_script_lang_js = ({
  name: 'SpStatusWS',
  components: {
    SpStatusLED: SpStatusLED["a" /* default */]
  },
  computed: {
    wsNode: function wsNode() {
      return this.$store.state.chain.common.env.apiWS;
    },
    nodeStatus: function nodeStatus() {
      return this.$store.state.chain.common.env.wsConnected;
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpStatusWS/SpStatusWS.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpStatusWS/SpStatusWS.vue



SpStatusWSvue_type_script_lang_js.render = render

/* harmony default export */ var SpStatusWS = __webpack_exports__["a"] = (SpStatusWSvue_type_script_lang_js);

/***/ }),

/***/ "4224":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockCopyIconText_vue_vue_type_style_index_0_id_c94dedde_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d8bf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockCopyIconText_vue_vue_type_style_index_0_id_c94dedde_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockCopyIconText_vue_vue_type_style_index_0_id_c94dedde_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4250":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = __webpack_require__("faa1").EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = __webpack_require__("5bbb");
/*</replacement>*/


var Buffer = __webpack_require__("b639").Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = __webpack_require__(0);

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = __webpack_require__("96a5");

var destroyImpl = __webpack_require__("493f");

var _require = __webpack_require__("b9b5"),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__("9d8a").codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

__webpack_require__("3fb5")(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__("e666");
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__("7d72").StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__("e666");
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__("7d72").StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = __webpack_require__("4186");
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = __webpack_require__("919c");
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("4362")))

/***/ }),

/***/ "4287":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpSignIn_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e13d");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpSignIn', _SpSignIn_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpSignIn_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "429b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("faa1").EventEmitter;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "442c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockChain/SpBlockChain.vue?vue&type=template&id=6ef24e8a&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-6ef24e8a");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-6ef24e8a");

var _hoisted_1 = {
  key: 0,
  class: "chain__blocks"
};
var _hoisted_2 = {
  key: 0,
  class: "block-info"
};
var _hoisted_3 = {
  key: 0,
  class: "block-info__indicator"
};
var _hoisted_4 = {
  class: "block-info__text"
};

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(" · ");

var _hoisted_6 = {
  class: "block-info__text"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpBlockCard = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpBlockCard");

  var _component_SpArrow = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpArrow");

  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
    key: 0,
    class: ['chain-container', {
      '-is-loading': $data.isLoading,
      '-has-higher': $data.hasHigherBlocks,
      '-has-lower': $data.hasLowerBlocks
    }]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    ref: "chain",
    class: ['chain'],
    onScroll: _cache[2] || (_cache[2] = function () {
      return $options.handleTableScroll && $options.handleTableScroll.apply($options, arguments);
    })
  }, [$options.viewedBlocks ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.viewedBlocks, function (block) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("button", {
      id: block.hash,
      key: block.hash,
      class: ['chain__block', {
        '-has-txs': block.details.data.txs.length > 0,
        '-is-active': block.hash === $options.highlightedBlock.hash
      }],
      onClick: _cache[1] || (_cache[1] = function () {
        return $options.handleCardClicked && $options.handleCardClicked.apply($options, arguments);
      })
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpBlockCard, {
      title: block.height,
      note: $options.getFmtTime(block.timestamp),
      "is-active": block.hash === $options.highlightedBlock.hash
    }, {
      default: _withId(function () {
        return [block.details.data.txs.length > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_2, [$options.getFailedTxsCount(block.txDecoded) > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("span", _hoisted_3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.getBlockNoteCopy(block.txDecoded.length, 'transaction')), 1), _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.getBlockNoteCopy($options.getMsgsAmount(block.txDecoded), 'message')), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)];
      }),
      _: 2
    }, 1032, ["title", "note", "is-active"])], 10, ["id"]);
  }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)], 544), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    class: "util-btn -top",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.handleNavClick('top');
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpArrow)])], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockChain/SpBlockChain.vue?vue&type=template&id=6ef24e8a&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: external {"commonjs":"moment","commonjs2":"moment","root":"moment","amd":"moment"}
var external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_ = __webpack_require__("c32d");
var external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_);

// EXTERNAL MODULE: external {"commonjs":"axios","commonjs2":"axios","root":"axios","amd":"axios"}
var external_commonjs_axios_commonjs2_axios_root_axios_amd_axios_ = __webpack_require__("cebe");
var external_commonjs_axios_commonjs2_axios_root_axios_amd_axios_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_axios_commonjs2_axios_root_axios_amd_axios_);

// EXTERNAL MODULE: ./src/components/legacy/SpBlockCard/index.js
var SpBlockCard = __webpack_require__("2fa6");

// EXTERNAL MODULE: ./src/components/SpArrow/index.js
var SpArrow = __webpack_require__("d5de");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockChain/SpBlockChain.vue?vue&type=script&lang=js













function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/* harmony default export */ var SpBlockChainvue_type_script_lang_js = ({
  name: 'SpBlockchain',
  components: {
    SpBlockCard: SpBlockCard["a" /* default */],
    SpArrow: SpArrow["a" /* default */]
  },
  props: {
    blocks: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      lastScrolledHeight: 0,
      lastScrolledTop: 0,
      isScrolledTop: false,
      isScrolledBottom: false,
      isScrolledAwayFromTop: false,
      isLoading: false,
      hasHigherBlocks: false,
      hasLowerBlocks: false,
      olderBlocks: [],
      localHighlightedBlock: null
    };
  },
  computed: {
    viewedBlocks: function viewedBlocks() {
      return this.blocks.concat(this.olderBlocks);
    },
    latestBlock: function latestBlock() {
      return this.viewedBlocks[0];
    },
    highlightedBlock: function highlightedBlock() {
      return this.localHighlightedBlock || this.viewedBlocks[0];
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  watch: {
    blocks: function blocks(newList, oldList) {
      if (oldList.length >= 20) {
        this.olderBlocks.unshift(oldList[oldList.length - 1]);
      }
    },
    highlightedBlock: function highlightedBlock(newBlock, oldBlock) {
      if (newBlock != oldBlock) {
        this.$emit('block-selected', newBlock);
      }
    },
    hasLowerBlocks: function hasLowerBlocks(newVal) {
      console.log(newVal);

      if (!newVal) {
        var start = this.olderBlocks[this.olderBlocks.length - 1].height;

        if (!this.isLoading) {
          this.getLowerBlocks(start);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'common', 'env'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `chain.common.env` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  methods: {
    getFmtTime: function getFmtTime(time) {
      var momentTime = external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default()(time);
      var duration = external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default.a.duration(external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default()().diff(momentTime));

      if (duration.as('years') >= 1) {
        return momentTime.format('MMM D YYYY, HH:mm:ss');
      } else if (duration.as('days') >= 1) {
        return momentTime.format('MMM D, HH:mm:ss');
      }

      return momentTime.format('HH:mm:ss');
    },
    getMsgsAmount: function getMsgsAmount(txs) {
      return txs.map(function (tx) {
        return tx.body.messages.length;
      }).reduce(function (accu, curr) {
        return accu + curr;
      });
    },
    getBlockNoteCopy: function getBlockNoteCopy(count, singularUnit) {
      return "".concat(count, " ").concat(singularUnit).concat(count > 1 ? 's' : '');
    },
    getFailedTxsCount: function getFailedTxsCount(txs) {
      return txs.filter(function (tx) {
        return tx.meta.code > 0;
      }).length;
    },
    getFormattedBlock: function getFormattedBlock(block) {
      return {
        blockMsg: {
          time_formatted: external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default()(block.timestamp).fromNow(true),
          time: block.timestamp,
          height: parseInt(block.height),
          proposer: "".concat(block.details.header.proposer_address.slice(0, 10), "..."),
          blockHash_sliced: "".concat(block.hash.slice(0, 15), "..."),
          blockHash: block.hash,
          txs: block.details.data.txs ? block.details.data.txs.length : 0
        },
        tableData: {
          id: block.height,
          isActive: false
        },
        txs: block.txsDecoded
      };
    },
    handleCardClicked: function handleCardClicked(event) {
      var blockHash = event.currentTarget.id;
      var blockPayload = this.viewedBlocks.find(function (x) {
        return x.hash == blockHash;
      });
      this.localHighlightedBlock = blockPayload;
    },
    handleTableScroll: debounce(function (event) {
      var $table = event.target;
      var scrolledHeight = $table.scrollTop + $table.offsetHeight;
      var tableScrollHeight = $table.scrollHeight;
      var isScrolledToTop = scrolledHeight <= $table.offsetHeight;
      var isScrolledToBottom = scrolledHeight + 100 >= tableScrollHeight;
      this.hasHigherBlocks = !isScrolledToTop;
      this.hasLowerBlocks = !isScrolledToBottom; // const isOnTopHalf = $table.scrollTop < (tableScrollHeight - $table.offsetHeight) / 2

      /*
      const isScrollAwayFromTop = scrolledHeight / tableScrollHeight > 0.2
      		const isCallableScrolledDistance =
      	$table.offsetHeight /
      		Math.abs(scrolledHeight - this.lastScrolledHeight) >
      	25
      		if (isCallableScrolledDistance) {
      	this.isScrolledAwayFromTop = isScrollAwayFromTop
      			if (isScrolledToBottom) {
      		this.isScrolledTop = false
      		this.isScrolledBottom = true
      		this.handleScrollBottom()
      	}
      	if (isScrolledToTop) {
      		this.isScrolledTop = true
      		this.isScrolledBottom = false
      		this.handleScrollTop()
      	}
      }
      */
    }, 250),

    /*
       *
       // Pop overloaded blocks (over maxStackCount)
       // only when scrolling to upperhalf of the table
       *
       */
    getHigherBlocks: function getHigherBlocks() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var isShowingLatestBlock;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.latestBlock) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                isShowingLatestBlock = parseInt(_this.latestBlock.height) === _this.stackChainRange.highestHeight;

                if (!(!isShowingLatestBlock && !_this.isLoading)) {
                  _context.next = 8;
                  break;
                }

                _this.isLoading = true;

                if (!_this._depsLoaded) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return _this.getBlockchain({
                  blockHeight: _this.stackChainRange.highestHeight,
                  toGetLowerBlocks: false
                }).then(function () {
                  _this.isLoading = false;

                  _this.setHasHigherBlocksState();

                  setTimeout(function () {
                    _this.$refs.chain.scrollBy({
                      top: 24,
                      left: 0,
                      behavior: 'smooth'
                    });
                  }, 100);
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /*
       *
       // Load extra 20 blocks
       // only when scrolling to bottom of the table
       *
       */
    getLowerBlocks: function getLowerBlocks(start) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var i, resp, block;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2._depsLoaded) {
                  _context2.next = 14;
                  break;
                }

                _this2.isLoading = true;
                i = 1;

              case 3:
                if (!(i <= 20 && start - i > 0)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 6;
                return external_commonjs_axios_commonjs2_axios_root_axios_amd_axios_default.a.get(_this2.$store.getters['chain/common/env/apiTendermint'] + '/block?height=' + (start - i));

              case 6:
                resp = _context2.sent;
                block = {
                  height: resp.data.result.block.header.height,
                  timestamp: resp.data.result.block.header.time,
                  hash: resp.data.result.block_id.hash,
                  details: resp.data.result.block
                };

                _this2.olderBlocks.push(block);

                i++;
                _context2.next = 3;
                break;

              case 12:
                _this2.isLoading = false;

                _this2.$refs.chain.scrollBy({
                  bottom: 24,
                  left: 0,
                  behavior: 'smooth'
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleScrollTop: function handleScrollTop() {
      this.getHigherBlocks();
    },
    handleScrollBottom: function handleScrollBottom() {
      this.getLowerBlocks();
    },
    handleNavClick: function handleNavClick(dir) {
      if (dir === 'top' && this.hasHigherBlocks) {
        this.getHigherBlocks();
        this.$refs.chain.scrollTo(0, 0);
      }
    },
    setHasHigherBlocksState: function setHasHigherBlocksState() {
      /*
      if (
      	(this.isScrolledAwayFromTop && !this.isScrolledTop)
      ) {
      	this.hasHigherBlocks = true
      } else {
      	this.hasHigherBlocks = false
      }
      */
    },
    setHasLowerBlocksState: function setHasLowerBlocksState() {
      /*
      if (this.stackChainRange.highestHeight !== 1) {
      	this.hasLowerBlocks = true
      } else {
      	this.hasLowerBlocks = false
      }
      */
    }
  }
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockChain/SpBlockChain.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/legacy/SpBlockChain/SpBlockChain.vue?vue&type=style&index=0&id=6ef24e8a&scoped=true&lang=css
var SpBlockChainvue_type_style_index_0_id_6ef24e8a_scoped_true_lang_css = __webpack_require__("d65c");

// CONCATENATED MODULE: ./src/components/legacy/SpBlockChain/SpBlockChain.vue





SpBlockChainvue_type_script_lang_js.render = render
SpBlockChainvue_type_script_lang_js.__scopeId = "data-v-6ef24e8a"

/* harmony default export */ var SpBlockChain = __webpack_exports__["a"] = (SpBlockChainvue_type_script_lang_js);

/***/ }),

/***/ "4452":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpCheck_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aca0");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpCheck', _SpCheck_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpCheck_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4681":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var pna = __webpack_require__("966d");
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  /* global Symbol -- required for testing */
  return !String(Symbol());
});


/***/ }),

/***/ "493f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) { // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4aa2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpAutoSidebar_vue_vue_type_style_index_0_id_a54e1bd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fe30");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpAutoSidebar_vue_vue_type_style_index_0_id_a54e1bd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpAutoSidebar_vue_vue_type_style_index_0_id_a54e1bd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4c44":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockCard_vue_vue_type_style_index_0_id_d683356a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bd6b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockCard_vue_vue_type_style_index_0_id_d683356a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockCard_vue_vue_type_style_index_0_id_d683356a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4cb4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4ced":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBlockHeight/SpBlockHeight.vue?vue&type=template&id=1325053c

var _hoisted_1 = {
  key: 0,
  class: "SpBlockHeight"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(" Block Height: ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.blockHeight), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpBlockHeight/SpBlockHeight.vue?vue&type=template&id=1325053c

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBlockHeight/SpBlockHeight.vue?vue&type=script&lang=js

/* harmony default export */ var SpBlockHeightvue_type_script_lang_js = ({
  name: 'SpBlockHeight',
  computed: {
    blocks: function blocks() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/common/blocks/getBlocks'](10);
      } else {
        return [];
      }
    },
    blockHeight: function blockHeight() {
      if (this.blocks.length > 0) {
        return this.blocks[0].height;
      } else {
        return 'N/A';
      }
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'common', 'blocks'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `chain.common.blocks` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpBlockHeight/SpBlockHeight.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpBlockHeight/SpBlockHeight.vue



SpBlockHeightvue_type_script_lang_js.render = render

/* harmony default export */ var SpBlockHeight = __webpack_exports__["a"] = (SpBlockHeightvue_type_script_lang_js);

/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4fd1":
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__("3fb5")
var Hash = __webpack_require__("b672")
var Buffer = __webpack_require__("8707").Buffer

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
]

var W = new Array(160)

function Sha512 () {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha512, Hash)

Sha512.prototype.init = function () {
  this._ah = 0x6a09e667
  this._bh = 0xbb67ae85
  this._ch = 0x3c6ef372
  this._dh = 0xa54ff53a
  this._eh = 0x510e527f
  this._fh = 0x9b05688c
  this._gh = 0x1f83d9ab
  this._hh = 0x5be0cd19

  this._al = 0xf3bcc908
  this._bl = 0x84caa73b
  this._cl = 0xfe94f82b
  this._dl = 0x5f1d36f1
  this._el = 0xade682d1
  this._fl = 0x2b3e6c1f
  this._gl = 0xfb41bd6b
  this._hl = 0x137e2179

  return this
}

function Ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function sigma0 (x, xl) {
  return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25)
}

function sigma1 (x, xl) {
  return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23)
}

function Gamma0 (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7)
}

function Gamma0l (x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25)
}

function Gamma1 (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6)
}

function Gamma1l (x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26)
}

function getCarry (a, b) {
  return (a >>> 0) < (b >>> 0) ? 1 : 0
}

Sha512.prototype._update = function (M) {
  var W = this._w

  var ah = this._ah | 0
  var bh = this._bh | 0
  var ch = this._ch | 0
  var dh = this._dh | 0
  var eh = this._eh | 0
  var fh = this._fh | 0
  var gh = this._gh | 0
  var hh = this._hh | 0

  var al = this._al | 0
  var bl = this._bl | 0
  var cl = this._cl | 0
  var dl = this._dl | 0
  var el = this._el | 0
  var fl = this._fl | 0
  var gl = this._gl | 0
  var hl = this._hl | 0

  for (var i = 0; i < 32; i += 2) {
    W[i] = M.readInt32BE(i * 4)
    W[i + 1] = M.readInt32BE(i * 4 + 4)
  }
  for (; i < 160; i += 2) {
    var xh = W[i - 15 * 2]
    var xl = W[i - 15 * 2 + 1]
    var gamma0 = Gamma0(xh, xl)
    var gamma0l = Gamma0l(xl, xh)

    xh = W[i - 2 * 2]
    xl = W[i - 2 * 2 + 1]
    var gamma1 = Gamma1(xh, xl)
    var gamma1l = Gamma1l(xl, xh)

    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
    var Wi7h = W[i - 7 * 2]
    var Wi7l = W[i - 7 * 2 + 1]

    var Wi16h = W[i - 16 * 2]
    var Wi16l = W[i - 16 * 2 + 1]

    var Wil = (gamma0l + Wi7l) | 0
    var Wih = (gamma0 + Wi7h + getCarry(Wil, gamma0l)) | 0
    Wil = (Wil + gamma1l) | 0
    Wih = (Wih + gamma1 + getCarry(Wil, gamma1l)) | 0
    Wil = (Wil + Wi16l) | 0
    Wih = (Wih + Wi16h + getCarry(Wil, Wi16l)) | 0

    W[i] = Wih
    W[i + 1] = Wil
  }

  for (var j = 0; j < 160; j += 2) {
    Wih = W[j]
    Wil = W[j + 1]

    var majh = maj(ah, bh, ch)
    var majl = maj(al, bl, cl)

    var sigma0h = sigma0(ah, al)
    var sigma0l = sigma0(al, ah)
    var sigma1h = sigma1(eh, el)
    var sigma1l = sigma1(el, eh)

    // t1 = h + sigma1 + ch + K[j] + W[j]
    var Kih = K[j]
    var Kil = K[j + 1]

    var chh = Ch(eh, fh, gh)
    var chl = Ch(el, fl, gl)

    var t1l = (hl + sigma1l) | 0
    var t1h = (hh + sigma1h + getCarry(t1l, hl)) | 0
    t1l = (t1l + chl) | 0
    t1h = (t1h + chh + getCarry(t1l, chl)) | 0
    t1l = (t1l + Kil) | 0
    t1h = (t1h + Kih + getCarry(t1l, Kil)) | 0
    t1l = (t1l + Wil) | 0
    t1h = (t1h + Wih + getCarry(t1l, Wil)) | 0

    // t2 = sigma0 + maj
    var t2l = (sigma0l + majl) | 0
    var t2h = (sigma0h + majh + getCarry(t2l, sigma0l)) | 0

    hh = gh
    hl = gl
    gh = fh
    gl = fl
    fh = eh
    fl = el
    el = (dl + t1l) | 0
    eh = (dh + t1h + getCarry(el, dl)) | 0
    dh = ch
    dl = cl
    ch = bh
    cl = bl
    bh = ah
    bl = al
    al = (t1l + t2l) | 0
    ah = (t1h + t2h + getCarry(al, t1l)) | 0
  }

  this._al = (this._al + al) | 0
  this._bl = (this._bl + bl) | 0
  this._cl = (this._cl + cl) | 0
  this._dl = (this._dl + dl) | 0
  this._el = (this._el + el) | 0
  this._fl = (this._fl + fl) | 0
  this._gl = (this._gl + gl) | 0
  this._hl = (this._hl + hl) | 0

  this._ah = (this._ah + ah + getCarry(this._al, al)) | 0
  this._bh = (this._bh + bh + getCarry(this._bl, bl)) | 0
  this._ch = (this._ch + ch + getCarry(this._cl, cl)) | 0
  this._dh = (this._dh + dh + getCarry(this._dl, dl)) | 0
  this._eh = (this._eh + eh + getCarry(this._el, el)) | 0
  this._fh = (this._fh + fh + getCarry(this._fl, fl)) | 0
  this._gh = (this._gh + gh + getCarry(this._gl, gl)) | 0
  this._hh = (this._hh + hh + getCarry(this._hl, hl)) | 0
}

Sha512.prototype._hash = function () {
  var H = Buffer.allocUnsafe(64)

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._ah, this._al, 0)
  writeInt64BE(this._bh, this._bl, 8)
  writeInt64BE(this._ch, this._cl, 16)
  writeInt64BE(this._dh, this._dl, 24)
  writeInt64BE(this._eh, this._el, 32)
  writeInt64BE(this._fh, this._fl, 40)
  writeInt64BE(this._gh, this._gl, 48)
  writeInt64BE(this._hh, this._hl, 56)

  return H
}

module.exports = Sha512


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "515a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpTokenSend/SpTokenSend.vue?vue&type=template&id=0bfbfc8b&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-0bfbfc8b");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-0bfbfc8b");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 0,
  class: "container"
};

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("Send tokens");

var _hoisted_4 = {
  class: "form"
};
var _hoisted_5 = {
  class: "token"
};
var _hoisted_6 = {
  class: "card token__item"
};
var _hoisted_7 = {
  class: "card"
};

var _hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "label h3"
}, "Address", -1);

var _hoisted_9 = {
  class: "footer"
};

var _hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("Send tokens");

var _hoisted_11 = {
  class: "log"
};
var _hoisted_12 = {
  class: "log__text"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpH3 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpH3");

  var _component_SpIconCircle2 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpIconCircle2");

  var _component_SpButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpButton");

  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [$options.balances && $options.balances.length > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpH3, null, {
    default: _withId(function () {
      return [_hoisted_3];
    }),
    _: 1
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    class: "label h3 h3__button",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.denomChange && $options.denomChange.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.denom) + " ", 1), $options.denoms.length > 1 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpIconCircle2, {
    key: 0,
    class: "h3__icon"
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.amount = $event;
    }),
    class: "input",
    placeholder: "Amount of tokens",
    type: "text",
    disabled: $data.inFlight
  }, null, 8, ["disabled"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], $data.amount]])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_7, [_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.to_address = $event;
    }),
    type: "text",
    class: "input",
    disabled: $data.inFlight,
    placeholder: "To address"
  }, null, 8, ["disabled"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], $data.to_address]])])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.memo = $event;
    }),
    type: "text",
    class: "input memo",
    disabled: $data.inFlight,
    placeholder: "Add a text message..."
  }, null, 8, ["disabled"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], $data.memo]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpButton, {
    disabled: !($options.valid.amount && $options.valid.to_address && !$data.inFlight),
    loading: $data.inFlight,
    onClick: $options.send
  }, {
    default: _withId(function () {
      return [_hoisted_10];
    }),
    _: 1
  }, 8, ["disabled", "loading", "onClick"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.txResultMessage), 1)])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
});
// CONCATENATED MODULE: ./src/components/SpTokenSend/SpTokenSend.vue?vue&type=template&id=0bfbfc8b&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-integer.js
var es_number_is_integer = __webpack_require__("8ba4");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./src/components/SpH3/index.js
var SpH3 = __webpack_require__("94ae");

// EXTERNAL MODULE: ./src/components/SpIconCircle2/index.js
var SpIconCircle2 = __webpack_require__("bedb");

// EXTERNAL MODULE: ./src/components/SpButton/index.js
var SpButton = __webpack_require__("7549");

// EXTERNAL MODULE: ./node_modules/@cosmjs/encoding/build/index.js
var build = __webpack_require__("9705");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpTokenSend/SpTokenSend.vue?vue&type=script&lang=js










/* harmony default export */ var SpTokenSendvue_type_script_lang_js = ({
  name: 'SpTokenSend',
  components: {
    SpH3: SpH3["a" /* default */],
    SpIconCircle2: SpIconCircle2["a" /* default */],
    SpButton: SpButton["a" /* default */]
  },
  category: 'wallet',
  props: {
    address: String
  },
  data: function data() {
    return {
      amount: '',
      to_address: '',
      memo: '',
      denomIndex: 0,
      inFlight: false,
      txResult: '',
      bankAddress: ''
    };
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'cosmos', 'cosmos-sdk', 'bank'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `chain.cosmos.cosmos-sdk.bank` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  mounted: function mounted() {
    this.bankAddress = this.address;

    if (this._depsLoaded) {
      if (this.bankAddress != '') {
        this.$store.dispatch('chain/cosmos/cosmos-sdk/bank/QueryAllBalances', {
          address: this.address,
          subscribe: this.refresh
        });
      }
    }
  },
  watch: {
    address: function address(newAddr, oldAddr) {
      if (this._depsLoaded) {
        if (newAddr != oldAddr) {
          this.bankAddress = newAddr;

          if (this.bankAddress != '') {
            this.$store.dispatch('chain/cosmos/cosmos-sdk/bank/QueryAllBalances', {
              address: this.bankAddress,
              subscribe: this.refresh
            });
          }
        }
      }
    }
  },
  computed: {
    balances: function balances() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/cosmos/cosmos-sdk/bank/getAllBalances'](this.bankAddress);
      } else {
        return [];
      }
    },
    denoms: function denoms() {
      return this.balances.map(function (b) {
        return b.denom;
      });
    },
    denom: function denom() {
      return this.denoms[this.denomIndex];
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    },
    valid: function valid() {
      var to_address;

      try {
        to_address = !!build["Bech32"].decode(this.to_address);
      } catch (_unused) {
        to_address = false;
      }

      var amount = +this.amount > 0 && Number.isInteger(+this.amount);
      return {
        amount: amount,
        to_address: to_address
      };
    },
    txResultMessage: function txResultMessage() {
      if (this.txResult && this.txResult.code) {
        return "Error: ".concat(this.txResult.rawLog);
      }

      return '';
    }
  },
  methods: {
    denomChange: function denomChange() {
      var inBounds = this.denomIndex < this.denoms.length - 1;
      this.denomIndex = inBounds ? this.denomIndex + 1 : 0;
    },
    send: function send() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var payload;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this._depsLoaded) {
                  _context.next = 12;
                  break;
                }

                if (!(_this.valid.to_address && _this.valid.amount && !_this.inFlight)) {
                  _context.next = 12;
                  break;
                }

                payload = {
                  amount: _this.amount,
                  denom: _this.denom,
                  to_address: _this.to_address,
                  from_address: _this.address,
                  memo: _this.memo
                };
                _this.txResult = '';
                _this.inFlight = true;
                _context.next = 7;
                return _this.$store.dispatch('chain/cosmos/cosmos-sdk/bank/MsgSend', payload);

              case 7:
                _this.txResult = _context.sent;

                if (_this.txResult && !_this.txResult.code) {
                  _this.amount = '';
                  _this.to_address = '';
                  _this.memo = '';
                }

                _this.inFlight = false;
                _context.next = 12;
                return _this.$store.dispatch('chain/cosmos/cosmos-sdk/bank/QueryAllBalances', {
                  address: _this.address,
                  subscribe: false
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpTokenSend/SpTokenSend.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpTokenSend/SpTokenSend.vue?vue&type=style&index=0&id=0bfbfc8b&scoped=true&lang=css
var SpTokenSendvue_type_style_index_0_id_0bfbfc8b_scoped_true_lang_css = __webpack_require__("3729");

// CONCATENATED MODULE: ./src/components/SpTokenSend/SpTokenSend.vue





SpTokenSendvue_type_script_lang_js.render = render
SpTokenSendvue_type_script_lang_js.__scopeId = "data-v-0bfbfc8b"

/* harmony default export */ var SpTokenSend = __webpack_exports__["a"] = (SpTokenSendvue_type_script_lang_js);

/***/ }),

/***/ "51db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockCard/SpBlockCard.vue?vue&type=template&id=d683356a&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-d683356a");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-d683356a");

var _hoisted_1 = {
  class: ['card']
};
var _hoisted_2 = {
  class: "card__top"
};
var _hoisted_3 = {
  class: "card__title"
};
var _hoisted_4 = {
  class: "card__note"
};
var _hoisted_5 = {
  class: "card__bottom"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.title), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.note), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderSlot"])(_ctx.$slots, "default")])]);
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockCard/SpBlockCard.vue?vue&type=template&id=d683356a&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockCard/SpBlockCard.vue?vue&type=script&lang=js

/* harmony default export */ var SpBlockCardvue_type_script_lang_js = ({
  name: 'SpBlockCard',
  props: {
    title: {
      type: [String, Number],
      required: true
    },
    note: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockCard/SpBlockCard.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/legacy/SpBlockCard/SpBlockCard.vue?vue&type=style&index=0&id=d683356a&scoped=true&lang=css
var SpBlockCardvue_type_style_index_0_id_d683356a_scoped_true_lang_css = __webpack_require__("4c44");

// CONCATENATED MODULE: ./src/components/legacy/SpBlockCard/SpBlockCard.vue





SpBlockCardvue_type_script_lang_js.render = render
SpBlockCardvue_type_script_lang_js.__scopeId = "data-v-d683356a"

/* harmony default export */ var SpBlockCard = __webpack_exports__["a"] = (SpBlockCardvue_type_script_lang_js);

/***/ }),

/***/ "5292":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpStatusAPI_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2be8");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpStatusAPI', _SpStatusAPI_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpStatusAPI_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "53a8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "53ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d28b");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e260");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3ca3");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "57bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpIconLoading2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3f4f");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpIconLoading2', _SpIconLoading2_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpIconLoading2_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "57cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpLoaderIconText/SpLoaderIconText.vue?vue&type=template&id=5a1ec9fb&scoped=true



var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-5a1ec9fb");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpIconText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpIconText");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpIconText, {
    class: ['loader-icon-text', {
      '-is-loading': !$props.isActive
    }],
    text: $props.text,
    link: $props.link,
    "icon-type": $options.iconType,
    "is-icon-first": true
  }, null, 8, ["class", "text", "link", "icon-type"]);
});
// CONCATENATED MODULE: ./src/components/SpLoaderIconText/SpLoaderIconText.vue?vue&type=template&id=5a1ec9fb&scoped=true

// EXTERNAL MODULE: ./src/components/SpIconText/index.js
var SpIconText = __webpack_require__("1c66");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpLoaderIconText/SpLoaderIconText.vue?vue&type=script&lang=js

/* harmony default export */ var SpLoaderIconTextvue_type_script_lang_js = ({
  name: 'SpLoaderIconText',
  components: {
    SpIconText: SpIconText["a" /* default */]
  },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    },
    isActive: {
      type: Boolean,
      default: true
    },
    activeIconType: {
      type: String,
      default: 'successDot',
      validator: function validator(value) {
        return ['successDot', 'check'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    iconType: function iconType() {
      return this.isActive ? this.activeIconType : 'spinner';
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpLoaderIconText/SpLoaderIconText.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpLoaderIconText/SpLoaderIconText.vue?vue&type=style&index=0&id=5a1ec9fb&scoped=true&lang=css
var SpLoaderIconTextvue_type_style_index_0_id_5a1ec9fb_scoped_true_lang_css = __webpack_require__("d658");

// CONCATENATED MODULE: ./src/components/SpLoaderIconText/SpLoaderIconText.vue





SpLoaderIconTextvue_type_script_lang_js.render = render
SpLoaderIconTextvue_type_script_lang_js.__scopeId = "data-v-5a1ec9fb"

/* harmony default export */ var SpLoaderIconText = __webpack_exports__["a"] = (SpLoaderIconTextvue_type_script_lang_js);

/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "58da":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpButton_vue_vue_type_style_index_0_id_7f4f0899_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("31e7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpButton_vue_vue_type_style_index_0_id_7f4f0899_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpButton_vue_vue_type_style_index_0_id_7f4f0899_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "597a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpH3/SpH3.vue?vue&type=template&id=e567ccac&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-e567ccac");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-e567ccac");

var _hoisted_1 = {
  class: "container"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderSlot"])(_ctx.$slots, "default")])]);
});
// CONCATENATED MODULE: ./src/components/SpH3/SpH3.vue?vue&type=template&id=e567ccac&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpH3/SpH3.vue?vue&type=script&lang=js
/* harmony default export */ var SpH3vue_type_script_lang_js = ({
  name: 'SpH3'
});
// CONCATENATED MODULE: ./src/components/SpH3/SpH3.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpH3/SpH3.vue?vue&type=style&index=0&id=e567ccac&scoped=true&lang=css
var SpH3vue_type_style_index_0_id_e567ccac_scoped_true_lang_css = __webpack_require__("6b69");

// CONCATENATED MODULE: ./src/components/SpH3/SpH3.vue





SpH3vue_type_script_lang_js.render = render
SpH3vue_type_script_lang_js.__scopeId = "data-v-e567ccac"

/* harmony default export */ var SpH3 = __webpack_exports__["a"] = (SpH3vue_type_script_lang_js);

/***/ }),

/***/ "59e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpSuccessDot/SpSuccessDot.vue?vue&type=template&id=3d9612f2&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-3d9612f2");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-3d9612f2");

var _hoisted_1 = {
  class: "icon-success-dot"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1);
});
// CONCATENATED MODULE: ./src/components/SpSuccessDot/SpSuccessDot.vue?vue&type=template&id=3d9612f2&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpSuccessDot/SpSuccessDot.vue?vue&type=script&lang=js
/* harmony default export */ var SpSuccessDotvue_type_script_lang_js = ({
  name: 'SpSuccessDot'
});
// CONCATENATED MODULE: ./src/components/SpSuccessDot/SpSuccessDot.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpSuccessDot/SpSuccessDot.vue?vue&type=style&index=0&id=3d9612f2&scoped=true&lang=css
var SpSuccessDotvue_type_style_index_0_id_3d9612f2_scoped_true_lang_css = __webpack_require__("67de");

// CONCATENATED MODULE: ./src/components/SpSuccessDot/SpSuccessDot.vue





SpSuccessDotvue_type_script_lang_js.render = render
SpSuccessDotvue_type_script_lang_js.__scopeId = "data-v-3d9612f2"

/* harmony default export */ var SpSuccessDot = __webpack_exports__["a"] = (SpSuccessDotvue_type_script_lang_js);

/***/ }),

/***/ "5a2e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5a76":
/***/ (function(module, exports, __webpack_require__) {

var MD5 = __webpack_require__("f576")

module.exports = function (buffer) {
  return new MD5().update(buffer).digest()
}


/***/ }),

/***/ "5bbb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("faa1").EventEmitter;


/***/ }),

/***/ "5bcb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBlockDisplayLine/SpBlockDisplayLine.vue?vue&type=template&id=7f872683

var _hoisted_1 = {
  class: "SpBlockDisplayLine"
};
var _hoisted_2 = {
  class: "blockHeight"
};
var _hoisted_3 = {
  class: "blockHash"
};
var _hoisted_4 = {
  class: "blockTime"
};
var _hoisted_5 = {
  class: "blockTxs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("router-link");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("tr", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("td", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_router_link, {
    to: '/block/' + $props.block.height
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.block.height), 1)];
    }),
    _: 1
  }, 8, ["to"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("td", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.block.hash), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("td", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.formatTS($props.block.timestamp)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("td", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.block.details.num_txs), 1)]);
}
// CONCATENATED MODULE: ./src/components/SpBlockDisplayLine/SpBlockDisplayLine.vue?vue&type=template&id=7f872683

// EXTERNAL MODULE: external {"commonjs":"moment","commonjs2":"moment","root":"moment","amd":"moment"}
var external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_ = __webpack_require__("c32d");
var external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBlockDisplayLine/SpBlockDisplayLine.vue?vue&type=script&lang=js

/* harmony default export */ var SpBlockDisplayLinevue_type_script_lang_js = ({
  name: 'SpBlockDisplayLine',
  props: {
    block: Object,
    tsFormat: String
  },
  methods: {
    formatTS: function formatTS(timestamp) {
      var momentTime = external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default()(timestamp);
      return momentTime.format(this.tsFormat);
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpBlockDisplayLine/SpBlockDisplayLine.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpBlockDisplayLine/SpBlockDisplayLine.vue



SpBlockDisplayLinevue_type_script_lang_js.render = render

/* harmony default export */ var SpBlockDisplayLine = __webpack_exports__["a"] = (SpBlockDisplayLinevue_type_script_lang_js);

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5d92":
/***/ (function(module, exports) {

module.exports = {
  ReadonlyDate: Date,
}


/***/ }),

/***/ "5db7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var flattenIntoArray = __webpack_require__("a2bf");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var aFunction = __webpack_require__("1c0b");
var arraySpeciesCreate = __webpack_require__("65f0");

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ "5df4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBankBalances/SpBankBalances.vue?vue&type=template&id=772fb086&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-772fb086");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-772fb086");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  class: "container"
};

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("br", null, null, -1);

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(" Balance ");

var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = {
  key: 1,
  class: "list"
};
var _hoisted_7 = {
  class: "list__item__h3"
};
var _hoisted_8 = {
  class: "list__item__h2"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpIconSynchronization1 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpIconSynchronization1");

  var _component_SpH3 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpH3");

  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpH3, null, {
    default: _withId(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(_ctx.bankAddress), 1), _hoisted_3, _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpIconSynchronization1, {
        class: "h3__icon",
        onClick: $options.balancesUpdate
      }, null, 8, ["onClick"])];
    }),
    _: 1
  }), $options.balances && $options.balances.length < 1 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_5, " Account balance appears to be empty. ")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), $options.balances ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_6, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.balances, function (b) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
      key: b.denom,
      class: "list__item"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(b.denom), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.numberFormat(b.amount)), 1)]);
  }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
});
// CONCATENATED MODULE: ./src/components/SpBankBalances/SpBankBalances.vue?vue&type=template&id=772fb086&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./src/components/SpH3/index.js
var SpH3 = __webpack_require__("94ae");

// EXTERNAL MODULE: ./src/components/SpIconSynchronization1/index.js
var SpIconSynchronization1 = __webpack_require__("21ad");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBankBalances/SpBankBalances.vue?vue&type=script&lang=js





/* harmony default export */ var SpBankBalancesvue_type_script_lang_js = ({
  name: 'SpBankBalances',
  components: {
    SpH3: SpH3["a" /* default */],
    SpIconSynchronization1: SpIconSynchronization1["a" /* default */]
  },
  category: 'wallet',
  props: {
    address: String,
    refresh: Boolean
  },
  data: function data() {
    return {
      bankAddress: ''
    };
  },
  computed: {
    balances: function balances() {
      return this.$store.getters['chain/cosmos/cosmos-sdk/bank/getAllBalances'](this.bankAddress);
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'cosmos', 'cosmos-sdk', 'bank'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `chain.cosmos.cosmos-sdk.bank` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  mounted: function mounted() {
    if (this._depsLoaded) {
      this.bankAddress = this.address;

      if (this.bankAddress != '') {
        this.$store.dispatch('chain/cosmos/cosmos-sdk/bank/QueryAllBalances', {
          address: this.address,
          subscribe: this.refresh
        });
      }
    }
  },
  watch: {
    address: function address(newAddr, oldAddr) {
      if (newAddr != oldAddr && this._depsLoaded) {
        this.bankAddress = newAddr;

        if (this.bankAddress != '') {
          this.$store.dispatch('chain/cosmos/cosmos-sdk/bank/QueryAllBalances', {
            address: this.bankAddress,
            subscribe: this.refresh
          });
        }
      }
    }
  },
  methods: {
    numberFormat: function numberFormat(number) {
      return Intl.NumberFormat().format(number);
    },
    balancesUpdate: function balancesUpdate() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this._depsLoaded) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return _this.$store.dispatch('chain/cosmos/cosmos-sdk/bank/QueryAllBalances', {
                  address: _this.bankAddress,
                  subscribe: false
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpBankBalances/SpBankBalances.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpBankBalances/SpBankBalances.vue?vue&type=style&index=0&id=772fb086&scoped=true&lang=css
var SpBankBalancesvue_type_style_index_0_id_772fb086_scoped_true_lang_css = __webpack_require__("7ed7");

// CONCATENATED MODULE: ./src/components/SpBankBalances/SpBankBalances.vue





SpBankBalancesvue_type_script_lang_js.render = render
SpBankBalancesvue_type_script_lang_js.__scopeId = "data-v-772fb086"

/* harmony default export */ var SpBankBalances = __webpack_exports__["a"] = (SpBankBalancesvue_type_script_lang_js);

/***/ }),

/***/ "5e1a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__("8707").Buffer;
var util = __webpack_require__(3);

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}

/***/ }),

/***/ "5e89":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var floor = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.es/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "5f1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("2909");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpYamlCards/SpYamlCards.vue?vue&type=template&id=ce370480&scoped=true




var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-ce370480");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-ce370480");

var _hoisted_1 = {
  class: "cards__title"
};
var _hoisted_2 = {
  class: "cards__container"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
    class: ['cards'].concat(Object(toConsumableArray["a" /* default */])($options.wrapperState))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", _hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.contents.length) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.cardType), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_2, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($props.contents, function (content, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
      key: $options.getCardKey(index),
      class: "card"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
      class: "wrapper",
      innerHTML: $options.getCardContent(content)
    }, null, 8, ["innerHTML"])]);
  }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    class: "cards__btn",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.handleChevronClicked && $options.handleChevronClicked.apply($options, arguments);
    })
  })], 2);
});
// CONCATENATED MODULE: ./src/components/legacy/SpYamlCards/SpYamlCards.vue?vue&type=template&id=ce370480&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ var regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ var esm_browser_validate = (validate);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var stringify_i = 0; stringify_i < 256; ++stringify_i) {
  byteToHex.push((stringify_i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ var esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || esm_browser_stringify(b);
}

/* harmony default export */ var esm_browser_v1 = (v1);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/parse.js


function parse(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ var esm_browser_parse = (parse);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ var v35 = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_browser_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return esm_browser_stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/md5.js
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ var esm_browser_md5 = (md5);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v3.js


var v3 = v35('v3', 0x30, esm_browser_md5);
/* harmony default export */ var esm_browser_v3 = (v3);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ var esm_browser_v4 = (v4);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/sha1.js
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ var esm_browser_sha1 = (sha1);
// CONCATENATED MODULE: ./node_modules/vue-uuid/node_modules/uuid/dist/esm-browser/v5.js


var v5 = v35('v5', 0x50, esm_browser_sha1);
/* harmony default export */ var esm_browser_v5 = (v5);
// CONCATENATED MODULE: ./node_modules/vue-uuid/dist/index.esm.js


/**
 * @typedef {Object} UUID
 * @property {typeof v1} v1
 * @property {typeof v3} v3
 * @property {typeof v4} v4
 * @property {typeof v5} v5
 */

/**
 * An object with uuid's v1, v3, v4 and v5 functions.
 * @type {UUID}
 */

var index_esm_uuid = {
  v1: esm_browser_v1,
  v3: esm_browser_v3,
  v4: esm_browser_v4,
  v5: esm_browser_v5
};
/**
 * Installs UUID on Vue instance. It creates a property on Vue instance to
 * expose an object with uuid's v1, v3, v4 and v5 functions.
 * @example ```js
 * import Vue from 'vue';
 * import VueUUID from 'vue-uuid';
 *
 * Vue.use(VueUUID);
 *
 * new Vue({
 *   mounted () {
 *     console.log(this.$uuid.v1());
 *   }
 * });
 * ```
 * @param {import('vue').default} Vue Vue constructor.
 */

function install(Vue) {
  Vue.prototype.$uuid = index_esm_uuid;
}

/* harmony default export */ var index_esm = (install);


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpYamlCards/SpYamlCards.vue?vue&type=script&lang=js



/* harmony default export */ var SpYamlCardsvue_type_script_lang_js = ({
  name: 'SpYamlCards',
  props: {
    cardType: {
      type: String,
      default: 'Messages'
    },
    contents: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      rootElement: this.$el
    };
  },
  computed: {
    wrapperState: function wrapperState() {
      var $element = this.rootElement;

      if ($element) {
        var heightVal = $element.getBoundingClientRect().height;
        var isWrapperTooTall = heightVal / window.innerHeight > 0.4;
        return isWrapperTooTall ? ['-is-foldable', '-is-folded'] : [];
      }

      return [];
    }
  },
  mounted: function mounted() {
    this.rootElement = this.$el;
  },
  methods: {
    getCardKey: function getCardKey(index) {
      return index + index_esm_uuid.v1();
    },
    getCardContent: function getCardContent(msg) {
      var keys = [];
      var treeHolder = '';

      for (var key in msg) {
        if (Object(esm_typeof["a" /* default */])(msg[key]) === 'object') {
          treeHolder += '<div class="wrapper">';
          treeHolder += "<span class=\"wrapper__key-item\">".concat(key, ":</span>");
          treeHolder += "<div class=\"wrapper\">".concat(this.getCardContent(msg[key]), "</div>");
          treeHolder += '</div>';
        } else {
          treeHolder += "<span class=\"wrapper__item\">".concat(key, ": ").concat(msg[key], "</span>");
        }

        keys.push(key);
      }

      return treeHolder;
    },
    handleChevronClicked: function handleChevronClicked($event) {
      var $btn = $event.target;
      var $wrapper = $btn.closest('.cards');
      $wrapper.classList.remove('-is-folded');
    }
  }
});
// CONCATENATED MODULE: ./src/components/legacy/SpYamlCards/SpYamlCards.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/legacy/SpYamlCards/SpYamlCards.vue?vue&type=style&index=0&id=ce370480&scoped=true&lang=css
var SpYamlCardsvue_type_style_index_0_id_ce370480_scoped_true_lang_css = __webpack_require__("41bd");

// CONCATENATED MODULE: ./src/components/legacy/SpYamlCards/SpYamlCards.vue





SpYamlCardsvue_type_script_lang_js.render = render
SpYamlCardsvue_type_script_lang_js.__scopeId = "data-v-ce370480"

/* harmony default export */ var SpYamlCards = __webpack_exports__["a"] = (SpYamlCardsvue_type_script_lang_js);

/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  /* global Symbol -- required for testing */
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "6143":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpIconMagic1_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a989");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpIconMagic1', _SpIconMagic1_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpIconMagic1_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6216":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpTooltip_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6391");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpTooltip', _SpTooltip_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpTooltip_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6391":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpTooltip/SpTooltip.vue?vue&type=template&id=3fa92fbd

var _hoisted_1 = {
  class: "tooltip-wrapper__trigger"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
    class: ['tooltip-wrapper', {
      '-is-active': $options.isTooltipActive
    }],
    onMouseenter: _cache[1] || (_cache[1] = function () {
      return $options.handleMouseEnter && $options.handleMouseEnter.apply($options, arguments);
    }),
    onMouseleave: _cache[2] || (_cache[2] = function () {
      return $options.handleMouseLeave && $options.handleMouseLeave.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderSlot"])(_ctx.$slots, "default")]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    ref: "tooltip",
    class: ['tooltip', "-".concat($props.direction)],
    style: {
      bottom: $options.bottomOffset
    }
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
    class: "tooltip__content",
    innerHTML: $props.content
  }, null, 8, ["innerHTML"])], 6)], 34);
}
// CONCATENATED MODULE: ./src/components/SpTooltip/SpTooltip.vue?vue&type=template&id=3fa92fbd

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpTooltip/SpTooltip.vue?vue&type=script&lang=js

/* harmony default export */ var SpTooltipvue_type_script_lang_js = ({
  name: 'SpTooltip',
  props: {
    content: {
      type: String,
      required: true
    },
    isEventTriggerType: {
      type: Object,
      default: null,
      validator: function validator(value) {
        if (value == null || !value) return true;
        return Object(esm_typeof["a" /* default */])(value && value.triggerActiveState === 'boolean');
      }
    },
    direction: {
      type: String,
      default: 'right',
      validator: function validator(value) {
        return ['top', 'right', 'left'].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {
      isActive: false,
      tooltipHeight: 0
    };
  },
  computed: {
    isTooltipActive: function isTooltipActive() {
      return this.isActive;
    },
    tooltipOffsetValue: function tooltipOffsetValue() {
      return this.tooltipHeight;
    },
    bottomOffset: function bottomOffset() {
      if (this.direction === 'right' || this.direction === 'left') {
        return "calc(50% - ".concat(this.tooltipOffsetValue, "px / 2)");
      }

      return 'calc(100% + 6px)';
    }
  },
  watch: {
    isEventTriggerType: function isEventTriggerType() {
      this.isActive = this.isEventTriggerType.triggerActiveState;
    },
    content: function content() {
      this.setTooltipHeight();
    }
  },
  created: function created() {
    window.addEventListener('resize', this.setTooltipHeight);
  },
  mounted: function mounted() {
    this.setTooltipHeight();
  },
  unmounted: function unmounted() {
    window.removeEventListener('resize', this.setTooltipHeight);
  },
  methods: {
    handleMouseEnter: function handleMouseEnter() {
      if (!this.isEventTriggerType) {
        this.isActive = true;
      }
    },
    handleMouseLeave: function handleMouseLeave() {
      if (!this.isEventTriggerType) {
        this.isActive = false;
      }
    },
    setTooltipHeight: function setTooltipHeight() {
      this.tooltipHeight = this.$refs.tooltip.clientHeight;
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpTooltip/SpTooltip.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpTooltip/SpTooltip.vue?vue&type=style&index=0&id=3fa92fbd&lang=css
var SpTooltipvue_type_style_index_0_id_3fa92fbd_lang_css = __webpack_require__("f9ec");

// CONCATENATED MODULE: ./src/components/SpTooltip/SpTooltip.vue





SpTooltipvue_type_script_lang_js.render = render

/* harmony default export */ var SpTooltip = __webpack_exports__["a"] = (SpTooltipvue_type_script_lang_js);

/***/ }),

/***/ "63ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpCopy/SpCopy.vue?vue&type=template&id=2640f1a6

var _hoisted_1 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("path", {
  d: "M10.3931 1.33337H3.12032C2.45366 1.33337 1.9082 1.87883 1.9082 2.5455V11.0303H3.12032V2.5455H10.3931V1.33337ZM12.2112 3.75762H5.54457C4.8779 3.75762 4.33245 4.30307 4.33245 4.96974V13.4546C4.33245 14.1213 4.8779 14.6667 5.54457 14.6667H12.2112C12.8779 14.6667 13.4234 14.1213 13.4234 13.4546V4.96974C13.4234 4.30307 12.8779 3.75762 12.2112 3.75762ZM12.2112 13.4546H5.54457V4.96974H12.2112V13.4546Z",
  fill: "#CFD1E7"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("svg", _hoisted_1, [_hoisted_2]);
}
// CONCATENATED MODULE: ./src/components/SpCopy/SpCopy.vue?vue&type=template&id=2640f1a6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpCopy/SpCopy.vue?vue&type=script&lang=js
/* harmony default export */ var SpCopyvue_type_script_lang_js = ({
  name: 'SpCopy'
});
// CONCATENATED MODULE: ./src/components/SpCopy/SpCopy.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpCopy/SpCopy.vue



SpCopyvue_type_script_lang_js.render = render

/* harmony default export */ var SpCopy = __webpack_exports__["a"] = (SpCopyvue_type_script_lang_js);

/***/ }),

/***/ "6430":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("8707").Buffer
var Transform = __webpack_require__("d485").Transform
var StringDecoder = __webpack_require__("7d72").StringDecoder
var inherits = __webpack_require__("3fb5")

function CipherBase (hashMode) {
  Transform.call(this)
  this.hashMode = typeof hashMode === 'string'
  if (this.hashMode) {
    this[hashMode] = this._finalOrDigest
  } else {
    this.final = this._finalOrDigest
  }
  if (this._final) {
    this.__final = this._final
    this._final = null
  }
  this._decoder = null
  this._encoding = null
}
inherits(CipherBase, Transform)

CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
  if (typeof data === 'string') {
    data = Buffer.from(data, inputEnc)
  }

  var outData = this._update(data)
  if (this.hashMode) return this

  if (outputEnc) {
    outData = this._toString(outData, outputEnc)
  }

  return outData
}

CipherBase.prototype.setAutoPadding = function () {}
CipherBase.prototype.getAuthTag = function () {
  throw new Error('trying to get auth tag in unsupported state')
}

CipherBase.prototype.setAuthTag = function () {
  throw new Error('trying to set auth tag in unsupported state')
}

CipherBase.prototype.setAAD = function () {
  throw new Error('trying to set aad in unsupported state')
}

CipherBase.prototype._transform = function (data, _, next) {
  var err
  try {
    if (this.hashMode) {
      this._update(data)
    } else {
      this.push(this._update(data))
    }
  } catch (e) {
    err = e
  } finally {
    next(err)
  }
}
CipherBase.prototype._flush = function (done) {
  var err
  try {
    this.push(this.__final())
  } catch (e) {
    err = e
  }

  done(err)
}
CipherBase.prototype._finalOrDigest = function (outputEnc) {
  var outData = this.__final() || Buffer.alloc(0)
  if (outputEnc) {
    outData = this._toString(outData, outputEnc, true)
  }
  return outData
}

CipherBase.prototype._toString = function (value, enc, fin) {
  if (!this._decoder) {
    this._decoder = new StringDecoder(enc)
    this._encoding = enc
  }

  if (this._encoding !== enc) throw new Error('can\'t switch encodings')

  var out = this._decoder.write(value)
  if (fin) {
    out += this._decoder.end()
  }

  return out
}

module.exports = CipherBase


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "65f0b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "67de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpSuccessDot_vue_vue_type_style_index_0_id_3d9612f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("65f0b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpSuccessDot_vue_vue_type_style_index_0_id_3d9612f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpSuccessDot_vue_vue_type_style_index_0_id_3d9612f2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "69f2":
/***/ (function(module, exports, __webpack_require__) {

var exports = module.exports = function SHA (algorithm) {
  algorithm = algorithm.toLowerCase()

  var Algorithm = exports[algorithm]
  if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)')

  return new Algorithm()
}

exports.sha = __webpack_require__("087f")
exports.sha1 = __webpack_require__("7e78")
exports.sha224 = __webpack_require__("72aa")
exports.sha256 = __webpack_require__("a255")
exports.sha384 = __webpack_require__("b837")
exports.sha512 = __webpack_require__("4fd1")


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6ab3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockDetailSheet_vue_vue_type_style_index_0_id_0b3e37e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cbf9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockDetailSheet_vue_vue_type_style_index_0_id_0b3e37e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockDetailSheet_vue_vue_type_style_index_0_id_0b3e37e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6b69":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpH3_vue_vue_type_style_index_0_id_e567ccac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53a8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpH3_vue_vue_type_style_index_0_id_e567ccac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpH3_vue_vue_type_style_index_0_id_e567ccac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6b75":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7114":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBlockDisplayLine_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5bcb");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBlockDisplayLine', _SpBlockDisplayLine_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBlockDisplayLine_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "720b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusRPC/SpStatusRPC.vue?vue&type=template&id=dea486a2

var _hoisted_1 = {
  class: "SpStatusRPC"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(" RPC ");

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(": ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpStatusLED = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpStatusLED");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.rpcNode), 1), _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpStatusLED, {
    status: $options.nodeStatus
  }, null, 8, ["status"])]);
}
// CONCATENATED MODULE: ./src/components/SpStatusRPC/SpStatusRPC.vue?vue&type=template&id=dea486a2

// EXTERNAL MODULE: ./src/components/SpStatusLED/index.js
var SpStatusLED = __webpack_require__("ae78");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusRPC/SpStatusRPC.vue?vue&type=script&lang=js

/* harmony default export */ var SpStatusRPCvue_type_script_lang_js = ({
  name: 'SpStatusRPC',
  components: {
    SpStatusLED: SpStatusLED["a" /* default */]
  },
  computed: {
    rpcNode: function rpcNode() {
      return this.$store.state.chain.common.env.apiTendermint;
    },
    nodeStatus: function nodeStatus() {
      return this.$store.state.chain.common.env.rpcConnected;
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpStatusRPC/SpStatusRPC.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpStatusRPC/SpStatusRPC.vue



SpStatusRPCvue_type_script_lang_js.render = render

/* harmony default export */ var SpStatusRPC = __webpack_exports__["a"] = (SpStatusRPCvue_type_script_lang_js);

/***/ }),

/***/ "72aa":
/***/ (function(module, exports, __webpack_require__) {

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = __webpack_require__("3fb5")
var Sha256 = __webpack_require__("a255")
var Hash = __webpack_require__("b672")
var Buffer = __webpack_require__("8707").Buffer

var W = new Array(64)

function Sha224 () {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha224, Sha256)

Sha224.prototype.init = function () {
  this._a = 0xc1059ed8
  this._b = 0x367cd507
  this._c = 0x3070dd17
  this._d = 0xf70e5939
  this._e = 0xffc00b31
  this._f = 0x68581511
  this._g = 0x64f98fa7
  this._h = 0xbefa4fa4

  return this
}

Sha224.prototype._hash = function () {
  var H = Buffer.allocUnsafe(28)

  H.writeInt32BE(this._a, 0)
  H.writeInt32BE(this._b, 4)
  H.writeInt32BE(this._c, 8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)

  return H
}

module.exports = Sha224


/***/ }),

/***/ "738f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "73d9":
/***/ (function(module, exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__("44d2");

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "753d":
/***/ (function(module) {

module.exports = JSON.parse("[\"abandon\",\"ability\",\"able\",\"about\",\"above\",\"absent\",\"absorb\",\"abstract\",\"absurd\",\"abuse\",\"access\",\"accident\",\"account\",\"accuse\",\"achieve\",\"acid\",\"acoustic\",\"acquire\",\"across\",\"act\",\"action\",\"actor\",\"actress\",\"actual\",\"adapt\",\"add\",\"addict\",\"address\",\"adjust\",\"admit\",\"adult\",\"advance\",\"advice\",\"aerobic\",\"affair\",\"afford\",\"afraid\",\"again\",\"age\",\"agent\",\"agree\",\"ahead\",\"aim\",\"air\",\"airport\",\"aisle\",\"alarm\",\"album\",\"alcohol\",\"alert\",\"alien\",\"all\",\"alley\",\"allow\",\"almost\",\"alone\",\"alpha\",\"already\",\"also\",\"alter\",\"always\",\"amateur\",\"amazing\",\"among\",\"amount\",\"amused\",\"analyst\",\"anchor\",\"ancient\",\"anger\",\"angle\",\"angry\",\"animal\",\"ankle\",\"announce\",\"annual\",\"another\",\"answer\",\"antenna\",\"antique\",\"anxiety\",\"any\",\"apart\",\"apology\",\"appear\",\"apple\",\"approve\",\"april\",\"arch\",\"arctic\",\"area\",\"arena\",\"argue\",\"arm\",\"armed\",\"armor\",\"army\",\"around\",\"arrange\",\"arrest\",\"arrive\",\"arrow\",\"art\",\"artefact\",\"artist\",\"artwork\",\"ask\",\"aspect\",\"assault\",\"asset\",\"assist\",\"assume\",\"asthma\",\"athlete\",\"atom\",\"attack\",\"attend\",\"attitude\",\"attract\",\"auction\",\"audit\",\"august\",\"aunt\",\"author\",\"auto\",\"autumn\",\"average\",\"avocado\",\"avoid\",\"awake\",\"aware\",\"away\",\"awesome\",\"awful\",\"awkward\",\"axis\",\"baby\",\"bachelor\",\"bacon\",\"badge\",\"bag\",\"balance\",\"balcony\",\"ball\",\"bamboo\",\"banana\",\"banner\",\"bar\",\"barely\",\"bargain\",\"barrel\",\"base\",\"basic\",\"basket\",\"battle\",\"beach\",\"bean\",\"beauty\",\"because\",\"become\",\"beef\",\"before\",\"begin\",\"behave\",\"behind\",\"believe\",\"below\",\"belt\",\"bench\",\"benefit\",\"best\",\"betray\",\"better\",\"between\",\"beyond\",\"bicycle\",\"bid\",\"bike\",\"bind\",\"biology\",\"bird\",\"birth\",\"bitter\",\"black\",\"blade\",\"blame\",\"blanket\",\"blast\",\"bleak\",\"bless\",\"blind\",\"blood\",\"blossom\",\"blouse\",\"blue\",\"blur\",\"blush\",\"board\",\"boat\",\"body\",\"boil\",\"bomb\",\"bone\",\"bonus\",\"book\",\"boost\",\"border\",\"boring\",\"borrow\",\"boss\",\"bottom\",\"bounce\",\"box\",\"boy\",\"bracket\",\"brain\",\"brand\",\"brass\",\"brave\",\"bread\",\"breeze\",\"brick\",\"bridge\",\"brief\",\"bright\",\"bring\",\"brisk\",\"broccoli\",\"broken\",\"bronze\",\"broom\",\"brother\",\"brown\",\"brush\",\"bubble\",\"buddy\",\"budget\",\"buffalo\",\"build\",\"bulb\",\"bulk\",\"bullet\",\"bundle\",\"bunker\",\"burden\",\"burger\",\"burst\",\"bus\",\"business\",\"busy\",\"butter\",\"buyer\",\"buzz\",\"cabbage\",\"cabin\",\"cable\",\"cactus\",\"cage\",\"cake\",\"call\",\"calm\",\"camera\",\"camp\",\"can\",\"canal\",\"cancel\",\"candy\",\"cannon\",\"canoe\",\"canvas\",\"canyon\",\"capable\",\"capital\",\"captain\",\"car\",\"carbon\",\"card\",\"cargo\",\"carpet\",\"carry\",\"cart\",\"case\",\"cash\",\"casino\",\"castle\",\"casual\",\"cat\",\"catalog\",\"catch\",\"category\",\"cattle\",\"caught\",\"cause\",\"caution\",\"cave\",\"ceiling\",\"celery\",\"cement\",\"census\",\"century\",\"cereal\",\"certain\",\"chair\",\"chalk\",\"champion\",\"change\",\"chaos\",\"chapter\",\"charge\",\"chase\",\"chat\",\"cheap\",\"check\",\"cheese\",\"chef\",\"cherry\",\"chest\",\"chicken\",\"chief\",\"child\",\"chimney\",\"choice\",\"choose\",\"chronic\",\"chuckle\",\"chunk\",\"churn\",\"cigar\",\"cinnamon\",\"circle\",\"citizen\",\"city\",\"civil\",\"claim\",\"clap\",\"clarify\",\"claw\",\"clay\",\"clean\",\"clerk\",\"clever\",\"click\",\"client\",\"cliff\",\"climb\",\"clinic\",\"clip\",\"clock\",\"clog\",\"close\",\"cloth\",\"cloud\",\"clown\",\"club\",\"clump\",\"cluster\",\"clutch\",\"coach\",\"coast\",\"coconut\",\"code\",\"coffee\",\"coil\",\"coin\",\"collect\",\"color\",\"column\",\"combine\",\"come\",\"comfort\",\"comic\",\"common\",\"company\",\"concert\",\"conduct\",\"confirm\",\"congress\",\"connect\",\"consider\",\"control\",\"convince\",\"cook\",\"cool\",\"copper\",\"copy\",\"coral\",\"core\",\"corn\",\"correct\",\"cost\",\"cotton\",\"couch\",\"country\",\"couple\",\"course\",\"cousin\",\"cover\",\"coyote\",\"crack\",\"cradle\",\"craft\",\"cram\",\"crane\",\"crash\",\"crater\",\"crawl\",\"crazy\",\"cream\",\"credit\",\"creek\",\"crew\",\"cricket\",\"crime\",\"crisp\",\"critic\",\"crop\",\"cross\",\"crouch\",\"crowd\",\"crucial\",\"cruel\",\"cruise\",\"crumble\",\"crunch\",\"crush\",\"cry\",\"crystal\",\"cube\",\"culture\",\"cup\",\"cupboard\",\"curious\",\"current\",\"curtain\",\"curve\",\"cushion\",\"custom\",\"cute\",\"cycle\",\"dad\",\"damage\",\"damp\",\"dance\",\"danger\",\"daring\",\"dash\",\"daughter\",\"dawn\",\"day\",\"deal\",\"debate\",\"debris\",\"decade\",\"december\",\"decide\",\"decline\",\"decorate\",\"decrease\",\"deer\",\"defense\",\"define\",\"defy\",\"degree\",\"delay\",\"deliver\",\"demand\",\"demise\",\"denial\",\"dentist\",\"deny\",\"depart\",\"depend\",\"deposit\",\"depth\",\"deputy\",\"derive\",\"describe\",\"desert\",\"design\",\"desk\",\"despair\",\"destroy\",\"detail\",\"detect\",\"develop\",\"device\",\"devote\",\"diagram\",\"dial\",\"diamond\",\"diary\",\"dice\",\"diesel\",\"diet\",\"differ\",\"digital\",\"dignity\",\"dilemma\",\"dinner\",\"dinosaur\",\"direct\",\"dirt\",\"disagree\",\"discover\",\"disease\",\"dish\",\"dismiss\",\"disorder\",\"display\",\"distance\",\"divert\",\"divide\",\"divorce\",\"dizzy\",\"doctor\",\"document\",\"dog\",\"doll\",\"dolphin\",\"domain\",\"donate\",\"donkey\",\"donor\",\"door\",\"dose\",\"double\",\"dove\",\"draft\",\"dragon\",\"drama\",\"drastic\",\"draw\",\"dream\",\"dress\",\"drift\",\"drill\",\"drink\",\"drip\",\"drive\",\"drop\",\"drum\",\"dry\",\"duck\",\"dumb\",\"dune\",\"during\",\"dust\",\"dutch\",\"duty\",\"dwarf\",\"dynamic\",\"eager\",\"eagle\",\"early\",\"earn\",\"earth\",\"easily\",\"east\",\"easy\",\"echo\",\"ecology\",\"economy\",\"edge\",\"edit\",\"educate\",\"effort\",\"egg\",\"eight\",\"either\",\"elbow\",\"elder\",\"electric\",\"elegant\",\"element\",\"elephant\",\"elevator\",\"elite\",\"else\",\"embark\",\"embody\",\"embrace\",\"emerge\",\"emotion\",\"employ\",\"empower\",\"empty\",\"enable\",\"enact\",\"end\",\"endless\",\"endorse\",\"enemy\",\"energy\",\"enforce\",\"engage\",\"engine\",\"enhance\",\"enjoy\",\"enlist\",\"enough\",\"enrich\",\"enroll\",\"ensure\",\"enter\",\"entire\",\"entry\",\"envelope\",\"episode\",\"equal\",\"equip\",\"era\",\"erase\",\"erode\",\"erosion\",\"error\",\"erupt\",\"escape\",\"essay\",\"essence\",\"estate\",\"eternal\",\"ethics\",\"evidence\",\"evil\",\"evoke\",\"evolve\",\"exact\",\"example\",\"excess\",\"exchange\",\"excite\",\"exclude\",\"excuse\",\"execute\",\"exercise\",\"exhaust\",\"exhibit\",\"exile\",\"exist\",\"exit\",\"exotic\",\"expand\",\"expect\",\"expire\",\"explain\",\"expose\",\"express\",\"extend\",\"extra\",\"eye\",\"eyebrow\",\"fabric\",\"face\",\"faculty\",\"fade\",\"faint\",\"faith\",\"fall\",\"false\",\"fame\",\"family\",\"famous\",\"fan\",\"fancy\",\"fantasy\",\"farm\",\"fashion\",\"fat\",\"fatal\",\"father\",\"fatigue\",\"fault\",\"favorite\",\"feature\",\"february\",\"federal\",\"fee\",\"feed\",\"feel\",\"female\",\"fence\",\"festival\",\"fetch\",\"fever\",\"few\",\"fiber\",\"fiction\",\"field\",\"figure\",\"file\",\"film\",\"filter\",\"final\",\"find\",\"fine\",\"finger\",\"finish\",\"fire\",\"firm\",\"first\",\"fiscal\",\"fish\",\"fit\",\"fitness\",\"fix\",\"flag\",\"flame\",\"flash\",\"flat\",\"flavor\",\"flee\",\"flight\",\"flip\",\"float\",\"flock\",\"floor\",\"flower\",\"fluid\",\"flush\",\"fly\",\"foam\",\"focus\",\"fog\",\"foil\",\"fold\",\"follow\",\"food\",\"foot\",\"force\",\"forest\",\"forget\",\"fork\",\"fortune\",\"forum\",\"forward\",\"fossil\",\"foster\",\"found\",\"fox\",\"fragile\",\"frame\",\"frequent\",\"fresh\",\"friend\",\"fringe\",\"frog\",\"front\",\"frost\",\"frown\",\"frozen\",\"fruit\",\"fuel\",\"fun\",\"funny\",\"furnace\",\"fury\",\"future\",\"gadget\",\"gain\",\"galaxy\",\"gallery\",\"game\",\"gap\",\"garage\",\"garbage\",\"garden\",\"garlic\",\"garment\",\"gas\",\"gasp\",\"gate\",\"gather\",\"gauge\",\"gaze\",\"general\",\"genius\",\"genre\",\"gentle\",\"genuine\",\"gesture\",\"ghost\",\"giant\",\"gift\",\"giggle\",\"ginger\",\"giraffe\",\"girl\",\"give\",\"glad\",\"glance\",\"glare\",\"glass\",\"glide\",\"glimpse\",\"globe\",\"gloom\",\"glory\",\"glove\",\"glow\",\"glue\",\"goat\",\"goddess\",\"gold\",\"good\",\"goose\",\"gorilla\",\"gospel\",\"gossip\",\"govern\",\"gown\",\"grab\",\"grace\",\"grain\",\"grant\",\"grape\",\"grass\",\"gravity\",\"great\",\"green\",\"grid\",\"grief\",\"grit\",\"grocery\",\"group\",\"grow\",\"grunt\",\"guard\",\"guess\",\"guide\",\"guilt\",\"guitar\",\"gun\",\"gym\",\"habit\",\"hair\",\"half\",\"hammer\",\"hamster\",\"hand\",\"happy\",\"harbor\",\"hard\",\"harsh\",\"harvest\",\"hat\",\"have\",\"hawk\",\"hazard\",\"head\",\"health\",\"heart\",\"heavy\",\"hedgehog\",\"height\",\"hello\",\"helmet\",\"help\",\"hen\",\"hero\",\"hidden\",\"high\",\"hill\",\"hint\",\"hip\",\"hire\",\"history\",\"hobby\",\"hockey\",\"hold\",\"hole\",\"holiday\",\"hollow\",\"home\",\"honey\",\"hood\",\"hope\",\"horn\",\"horror\",\"horse\",\"hospital\",\"host\",\"hotel\",\"hour\",\"hover\",\"hub\",\"huge\",\"human\",\"humble\",\"humor\",\"hundred\",\"hungry\",\"hunt\",\"hurdle\",\"hurry\",\"hurt\",\"husband\",\"hybrid\",\"ice\",\"icon\",\"idea\",\"identify\",\"idle\",\"ignore\",\"ill\",\"illegal\",\"illness\",\"image\",\"imitate\",\"immense\",\"immune\",\"impact\",\"impose\",\"improve\",\"impulse\",\"inch\",\"include\",\"income\",\"increase\",\"index\",\"indicate\",\"indoor\",\"industry\",\"infant\",\"inflict\",\"inform\",\"inhale\",\"inherit\",\"initial\",\"inject\",\"injury\",\"inmate\",\"inner\",\"innocent\",\"input\",\"inquiry\",\"insane\",\"insect\",\"inside\",\"inspire\",\"install\",\"intact\",\"interest\",\"into\",\"invest\",\"invite\",\"involve\",\"iron\",\"island\",\"isolate\",\"issue\",\"item\",\"ivory\",\"jacket\",\"jaguar\",\"jar\",\"jazz\",\"jealous\",\"jeans\",\"jelly\",\"jewel\",\"job\",\"join\",\"joke\",\"journey\",\"joy\",\"judge\",\"juice\",\"jump\",\"jungle\",\"junior\",\"junk\",\"just\",\"kangaroo\",\"keen\",\"keep\",\"ketchup\",\"key\",\"kick\",\"kid\",\"kidney\",\"kind\",\"kingdom\",\"kiss\",\"kit\",\"kitchen\",\"kite\",\"kitten\",\"kiwi\",\"knee\",\"knife\",\"knock\",\"know\",\"lab\",\"label\",\"labor\",\"ladder\",\"lady\",\"lake\",\"lamp\",\"language\",\"laptop\",\"large\",\"later\",\"latin\",\"laugh\",\"laundry\",\"lava\",\"law\",\"lawn\",\"lawsuit\",\"layer\",\"lazy\",\"leader\",\"leaf\",\"learn\",\"leave\",\"lecture\",\"left\",\"leg\",\"legal\",\"legend\",\"leisure\",\"lemon\",\"lend\",\"length\",\"lens\",\"leopard\",\"lesson\",\"letter\",\"level\",\"liar\",\"liberty\",\"library\",\"license\",\"life\",\"lift\",\"light\",\"like\",\"limb\",\"limit\",\"link\",\"lion\",\"liquid\",\"list\",\"little\",\"live\",\"lizard\",\"load\",\"loan\",\"lobster\",\"local\",\"lock\",\"logic\",\"lonely\",\"long\",\"loop\",\"lottery\",\"loud\",\"lounge\",\"love\",\"loyal\",\"lucky\",\"luggage\",\"lumber\",\"lunar\",\"lunch\",\"luxury\",\"lyrics\",\"machine\",\"mad\",\"magic\",\"magnet\",\"maid\",\"mail\",\"main\",\"major\",\"make\",\"mammal\",\"man\",\"manage\",\"mandate\",\"mango\",\"mansion\",\"manual\",\"maple\",\"marble\",\"march\",\"margin\",\"marine\",\"market\",\"marriage\",\"mask\",\"mass\",\"master\",\"match\",\"material\",\"math\",\"matrix\",\"matter\",\"maximum\",\"maze\",\"meadow\",\"mean\",\"measure\",\"meat\",\"mechanic\",\"medal\",\"media\",\"melody\",\"melt\",\"member\",\"memory\",\"mention\",\"menu\",\"mercy\",\"merge\",\"merit\",\"merry\",\"mesh\",\"message\",\"metal\",\"method\",\"middle\",\"midnight\",\"milk\",\"million\",\"mimic\",\"mind\",\"minimum\",\"minor\",\"minute\",\"miracle\",\"mirror\",\"misery\",\"miss\",\"mistake\",\"mix\",\"mixed\",\"mixture\",\"mobile\",\"model\",\"modify\",\"mom\",\"moment\",\"monitor\",\"monkey\",\"monster\",\"month\",\"moon\",\"moral\",\"more\",\"morning\",\"mosquito\",\"mother\",\"motion\",\"motor\",\"mountain\",\"mouse\",\"move\",\"movie\",\"much\",\"muffin\",\"mule\",\"multiply\",\"muscle\",\"museum\",\"mushroom\",\"music\",\"must\",\"mutual\",\"myself\",\"mystery\",\"myth\",\"naive\",\"name\",\"napkin\",\"narrow\",\"nasty\",\"nation\",\"nature\",\"near\",\"neck\",\"need\",\"negative\",\"neglect\",\"neither\",\"nephew\",\"nerve\",\"nest\",\"net\",\"network\",\"neutral\",\"never\",\"news\",\"next\",\"nice\",\"night\",\"noble\",\"noise\",\"nominee\",\"noodle\",\"normal\",\"north\",\"nose\",\"notable\",\"note\",\"nothing\",\"notice\",\"novel\",\"now\",\"nuclear\",\"number\",\"nurse\",\"nut\",\"oak\",\"obey\",\"object\",\"oblige\",\"obscure\",\"observe\",\"obtain\",\"obvious\",\"occur\",\"ocean\",\"october\",\"odor\",\"off\",\"offer\",\"office\",\"often\",\"oil\",\"okay\",\"old\",\"olive\",\"olympic\",\"omit\",\"once\",\"one\",\"onion\",\"online\",\"only\",\"open\",\"opera\",\"opinion\",\"oppose\",\"option\",\"orange\",\"orbit\",\"orchard\",\"order\",\"ordinary\",\"organ\",\"orient\",\"original\",\"orphan\",\"ostrich\",\"other\",\"outdoor\",\"outer\",\"output\",\"outside\",\"oval\",\"oven\",\"over\",\"own\",\"owner\",\"oxygen\",\"oyster\",\"ozone\",\"pact\",\"paddle\",\"page\",\"pair\",\"palace\",\"palm\",\"panda\",\"panel\",\"panic\",\"panther\",\"paper\",\"parade\",\"parent\",\"park\",\"parrot\",\"party\",\"pass\",\"patch\",\"path\",\"patient\",\"patrol\",\"pattern\",\"pause\",\"pave\",\"payment\",\"peace\",\"peanut\",\"pear\",\"peasant\",\"pelican\",\"pen\",\"penalty\",\"pencil\",\"people\",\"pepper\",\"perfect\",\"permit\",\"person\",\"pet\",\"phone\",\"photo\",\"phrase\",\"physical\",\"piano\",\"picnic\",\"picture\",\"piece\",\"pig\",\"pigeon\",\"pill\",\"pilot\",\"pink\",\"pioneer\",\"pipe\",\"pistol\",\"pitch\",\"pizza\",\"place\",\"planet\",\"plastic\",\"plate\",\"play\",\"please\",\"pledge\",\"pluck\",\"plug\",\"plunge\",\"poem\",\"poet\",\"point\",\"polar\",\"pole\",\"police\",\"pond\",\"pony\",\"pool\",\"popular\",\"portion\",\"position\",\"possible\",\"post\",\"potato\",\"pottery\",\"poverty\",\"powder\",\"power\",\"practice\",\"praise\",\"predict\",\"prefer\",\"prepare\",\"present\",\"pretty\",\"prevent\",\"price\",\"pride\",\"primary\",\"print\",\"priority\",\"prison\",\"private\",\"prize\",\"problem\",\"process\",\"produce\",\"profit\",\"program\",\"project\",\"promote\",\"proof\",\"property\",\"prosper\",\"protect\",\"proud\",\"provide\",\"public\",\"pudding\",\"pull\",\"pulp\",\"pulse\",\"pumpkin\",\"punch\",\"pupil\",\"puppy\",\"purchase\",\"purity\",\"purpose\",\"purse\",\"push\",\"put\",\"puzzle\",\"pyramid\",\"quality\",\"quantum\",\"quarter\",\"question\",\"quick\",\"quit\",\"quiz\",\"quote\",\"rabbit\",\"raccoon\",\"race\",\"rack\",\"radar\",\"radio\",\"rail\",\"rain\",\"raise\",\"rally\",\"ramp\",\"ranch\",\"random\",\"range\",\"rapid\",\"rare\",\"rate\",\"rather\",\"raven\",\"raw\",\"razor\",\"ready\",\"real\",\"reason\",\"rebel\",\"rebuild\",\"recall\",\"receive\",\"recipe\",\"record\",\"recycle\",\"reduce\",\"reflect\",\"reform\",\"refuse\",\"region\",\"regret\",\"regular\",\"reject\",\"relax\",\"release\",\"relief\",\"rely\",\"remain\",\"remember\",\"remind\",\"remove\",\"render\",\"renew\",\"rent\",\"reopen\",\"repair\",\"repeat\",\"replace\",\"report\",\"require\",\"rescue\",\"resemble\",\"resist\",\"resource\",\"response\",\"result\",\"retire\",\"retreat\",\"return\",\"reunion\",\"reveal\",\"review\",\"reward\",\"rhythm\",\"rib\",\"ribbon\",\"rice\",\"rich\",\"ride\",\"ridge\",\"rifle\",\"right\",\"rigid\",\"ring\",\"riot\",\"ripple\",\"risk\",\"ritual\",\"rival\",\"river\",\"road\",\"roast\",\"robot\",\"robust\",\"rocket\",\"romance\",\"roof\",\"rookie\",\"room\",\"rose\",\"rotate\",\"rough\",\"round\",\"route\",\"royal\",\"rubber\",\"rude\",\"rug\",\"rule\",\"run\",\"runway\",\"rural\",\"sad\",\"saddle\",\"sadness\",\"safe\",\"sail\",\"salad\",\"salmon\",\"salon\",\"salt\",\"salute\",\"same\",\"sample\",\"sand\",\"satisfy\",\"satoshi\",\"sauce\",\"sausage\",\"save\",\"say\",\"scale\",\"scan\",\"scare\",\"scatter\",\"scene\",\"scheme\",\"school\",\"science\",\"scissors\",\"scorpion\",\"scout\",\"scrap\",\"screen\",\"script\",\"scrub\",\"sea\",\"search\",\"season\",\"seat\",\"second\",\"secret\",\"section\",\"security\",\"seed\",\"seek\",\"segment\",\"select\",\"sell\",\"seminar\",\"senior\",\"sense\",\"sentence\",\"series\",\"service\",\"session\",\"settle\",\"setup\",\"seven\",\"shadow\",\"shaft\",\"shallow\",\"share\",\"shed\",\"shell\",\"sheriff\",\"shield\",\"shift\",\"shine\",\"ship\",\"shiver\",\"shock\",\"shoe\",\"shoot\",\"shop\",\"short\",\"shoulder\",\"shove\",\"shrimp\",\"shrug\",\"shuffle\",\"shy\",\"sibling\",\"sick\",\"side\",\"siege\",\"sight\",\"sign\",\"silent\",\"silk\",\"silly\",\"silver\",\"similar\",\"simple\",\"since\",\"sing\",\"siren\",\"sister\",\"situate\",\"six\",\"size\",\"skate\",\"sketch\",\"ski\",\"skill\",\"skin\",\"skirt\",\"skull\",\"slab\",\"slam\",\"sleep\",\"slender\",\"slice\",\"slide\",\"slight\",\"slim\",\"slogan\",\"slot\",\"slow\",\"slush\",\"small\",\"smart\",\"smile\",\"smoke\",\"smooth\",\"snack\",\"snake\",\"snap\",\"sniff\",\"snow\",\"soap\",\"soccer\",\"social\",\"sock\",\"soda\",\"soft\",\"solar\",\"soldier\",\"solid\",\"solution\",\"solve\",\"someone\",\"song\",\"soon\",\"sorry\",\"sort\",\"soul\",\"sound\",\"soup\",\"source\",\"south\",\"space\",\"spare\",\"spatial\",\"spawn\",\"speak\",\"special\",\"speed\",\"spell\",\"spend\",\"sphere\",\"spice\",\"spider\",\"spike\",\"spin\",\"spirit\",\"split\",\"spoil\",\"sponsor\",\"spoon\",\"sport\",\"spot\",\"spray\",\"spread\",\"spring\",\"spy\",\"square\",\"squeeze\",\"squirrel\",\"stable\",\"stadium\",\"staff\",\"stage\",\"stairs\",\"stamp\",\"stand\",\"start\",\"state\",\"stay\",\"steak\",\"steel\",\"stem\",\"step\",\"stereo\",\"stick\",\"still\",\"sting\",\"stock\",\"stomach\",\"stone\",\"stool\",\"story\",\"stove\",\"strategy\",\"street\",\"strike\",\"strong\",\"struggle\",\"student\",\"stuff\",\"stumble\",\"style\",\"subject\",\"submit\",\"subway\",\"success\",\"such\",\"sudden\",\"suffer\",\"sugar\",\"suggest\",\"suit\",\"summer\",\"sun\",\"sunny\",\"sunset\",\"super\",\"supply\",\"supreme\",\"sure\",\"surface\",\"surge\",\"surprise\",\"surround\",\"survey\",\"suspect\",\"sustain\",\"swallow\",\"swamp\",\"swap\",\"swarm\",\"swear\",\"sweet\",\"swift\",\"swim\",\"swing\",\"switch\",\"sword\",\"symbol\",\"symptom\",\"syrup\",\"system\",\"table\",\"tackle\",\"tag\",\"tail\",\"talent\",\"talk\",\"tank\",\"tape\",\"target\",\"task\",\"taste\",\"tattoo\",\"taxi\",\"teach\",\"team\",\"tell\",\"ten\",\"tenant\",\"tennis\",\"tent\",\"term\",\"test\",\"text\",\"thank\",\"that\",\"theme\",\"then\",\"theory\",\"there\",\"they\",\"thing\",\"this\",\"thought\",\"three\",\"thrive\",\"throw\",\"thumb\",\"thunder\",\"ticket\",\"tide\",\"tiger\",\"tilt\",\"timber\",\"time\",\"tiny\",\"tip\",\"tired\",\"tissue\",\"title\",\"toast\",\"tobacco\",\"today\",\"toddler\",\"toe\",\"together\",\"toilet\",\"token\",\"tomato\",\"tomorrow\",\"tone\",\"tongue\",\"tonight\",\"tool\",\"tooth\",\"top\",\"topic\",\"topple\",\"torch\",\"tornado\",\"tortoise\",\"toss\",\"total\",\"tourist\",\"toward\",\"tower\",\"town\",\"toy\",\"track\",\"trade\",\"traffic\",\"tragic\",\"train\",\"transfer\",\"trap\",\"trash\",\"travel\",\"tray\",\"treat\",\"tree\",\"trend\",\"trial\",\"tribe\",\"trick\",\"trigger\",\"trim\",\"trip\",\"trophy\",\"trouble\",\"truck\",\"true\",\"truly\",\"trumpet\",\"trust\",\"truth\",\"try\",\"tube\",\"tuition\",\"tumble\",\"tuna\",\"tunnel\",\"turkey\",\"turn\",\"turtle\",\"twelve\",\"twenty\",\"twice\",\"twin\",\"twist\",\"two\",\"type\",\"typical\",\"ugly\",\"umbrella\",\"unable\",\"unaware\",\"uncle\",\"uncover\",\"under\",\"undo\",\"unfair\",\"unfold\",\"unhappy\",\"uniform\",\"unique\",\"unit\",\"universe\",\"unknown\",\"unlock\",\"until\",\"unusual\",\"unveil\",\"update\",\"upgrade\",\"uphold\",\"upon\",\"upper\",\"upset\",\"urban\",\"urge\",\"usage\",\"use\",\"used\",\"useful\",\"useless\",\"usual\",\"utility\",\"vacant\",\"vacuum\",\"vague\",\"valid\",\"valley\",\"valve\",\"van\",\"vanish\",\"vapor\",\"various\",\"vast\",\"vault\",\"vehicle\",\"velvet\",\"vendor\",\"venture\",\"venue\",\"verb\",\"verify\",\"version\",\"very\",\"vessel\",\"veteran\",\"viable\",\"vibrant\",\"vicious\",\"victory\",\"video\",\"view\",\"village\",\"vintage\",\"violin\",\"virtual\",\"virus\",\"visa\",\"visit\",\"visual\",\"vital\",\"vivid\",\"vocal\",\"voice\",\"void\",\"volcano\",\"volume\",\"vote\",\"voyage\",\"wage\",\"wagon\",\"wait\",\"walk\",\"wall\",\"walnut\",\"want\",\"warfare\",\"warm\",\"warrior\",\"wash\",\"wasp\",\"waste\",\"water\",\"wave\",\"way\",\"wealth\",\"weapon\",\"wear\",\"weasel\",\"weather\",\"web\",\"wedding\",\"weekend\",\"weird\",\"welcome\",\"west\",\"wet\",\"whale\",\"what\",\"wheat\",\"wheel\",\"when\",\"where\",\"whip\",\"whisper\",\"wide\",\"width\",\"wife\",\"wild\",\"will\",\"win\",\"window\",\"wine\",\"wing\",\"wink\",\"winner\",\"winter\",\"wire\",\"wisdom\",\"wise\",\"wish\",\"witness\",\"wolf\",\"woman\",\"wonder\",\"wood\",\"wool\",\"word\",\"work\",\"world\",\"worry\",\"worth\",\"wrap\",\"wreck\",\"wrestle\",\"wrist\",\"write\",\"wrong\",\"yard\",\"year\",\"yellow\",\"you\",\"young\",\"youth\",\"zebra\",\"zero\",\"zone\",\"zoo\"]");

/***/ }),

/***/ "7549":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fbb5");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpButton', _SpButton_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpButton_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "7724":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "780f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__("27bf");

/*<replacement>*/
var util = Object.create(__webpack_require__("3a7c"));
util.inherits = __webpack_require__("3fb5");
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "783d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpInput_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("edb6");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpInput', _SpInput_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpInput_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpAutoSidebar/SpAutoSidebar.vue?vue&type=script&lang=js

/* harmony default export */ var SpAutoSidebarvue_type_script_lang_js = ({
  name: 'SpAutoSidebar',
  data: function data() {
    return {
      categories: [],
      category: 'wallet',
      categoryCurrent: null
    };
  },
  render: function render(h) {
    var _this = this;

    // for (let i = 0; i < this.$slots.default.length; i++) {
    // 	const e = this.$slots.default[i]
    // 	const { category } = e.componentOptions.Ctor.extendOptions
    // }
    var comps = this.$slots.default().filter(function (e) {
      var category = e.componentOptions.Ctor.extendOptions.category;
      return category === _this.category;
    });
    return h('div', [h('div', {
      class: 'sidebar'
    }), h('div', {
      class: 'container'
    }, [h('div', {
      class: 'main'
    }, [comps])])]);
  }
});
// CONCATENATED MODULE: ./src/components/SpAutoSidebar/SpAutoSidebar.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpAutoSidebar/SpAutoSidebar.vue?vue&type=style&index=0&id=a54e1bd2&scoped=true&lang=css
var SpAutoSidebarvue_type_style_index_0_id_a54e1bd2_scoped_true_lang_css = __webpack_require__("4aa2");

// CONCATENATED MODULE: ./src/components/SpAutoSidebar/SpAutoSidebar.vue




SpAutoSidebarvue_type_script_lang_js.__scopeId = "data-v-a54e1bd2"

/* harmony default export */ var SpAutoSidebar = __webpack_exports__["a"] = (SpAutoSidebarvue_type_script_lang_js);

/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7d2a":
/***/ (function(module, exports) {

var MAX_ALLOC = Math.pow(2, 30) - 1 // default in iojs

module.exports = function (iterations, keylen) {
  if (typeof iterations !== 'number') {
    throw new TypeError('Iterations not a number')
  }

  if (iterations < 0) {
    throw new TypeError('Bad iterations')
  }

  if (typeof keylen !== 'number') {
    throw new TypeError('Key length not a number')
  }

  if (keylen < 0 || keylen > MAX_ALLOC || keylen !== keylen) { /* eslint no-self-compare: 0 */
    throw new TypeError('Bad key length')
  }
}


/***/ }),

/***/ "7d72":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__("8707").Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7e78":
/***/ (function(module, exports, __webpack_require__) {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

var inherits = __webpack_require__("3fb5")
var Hash = __webpack_require__("b672")
var Buffer = __webpack_require__("8707").Buffer

var K = [
  0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
]

var W = new Array(80)

function Sha1 () {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha1, Hash)

Sha1.prototype.init = function () {
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
  this._e = 0xc3d2e1f0

  return this
}

function rotl1 (num) {
  return (num << 1) | (num >>> 31)
}

function rotl5 (num) {
  return (num << 5) | (num >>> 27)
}

function rotl30 (num) {
  return (num << 30) | (num >>> 2)
}

function ft (s, b, c, d) {
  if (s === 0) return (b & c) | ((~b) & d)
  if (s === 2) return (b & c) | (b & d) | (c & d)
  return b ^ c ^ d
}

Sha1.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 80; ++i) W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16])

  for (var j = 0; j < 80; ++j) {
    var s = ~~(j / 20)
    var t = (rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s]) | 0

    e = d
    d = c
    c = rotl30(b)
    b = a
    a = t
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha1.prototype._hash = function () {
  var H = Buffer.allocUnsafe(20)

  H.writeInt32BE(this._a | 0, 0)
  H.writeInt32BE(this._b | 0, 4)
  H.writeInt32BE(this._c | 0, 8)
  H.writeInt32BE(this._d | 0, 12)
  H.writeInt32BE(this._e | 0, 16)

  return H
}

module.exports = Sha1


/***/ }),

/***/ "7ed7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBankBalances_vue_vue_type_style_index_0_id_772fb086_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("00df");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBankBalances_vue_vue_type_style_index_0_id_772fb086_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBankBalances_vue_vue_type_style_index_0_id_772fb086_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7ee7":
/***/ (function(module, exports, __webpack_require__) {

const stringHash = __webpack_require__("f64c");
const hslTriad = __webpack_require__("abb9");
const hslRgb = __webpack_require__("f5b4");

const uniqueID = () => Math.floor(Math.random() * Date.now());

const avatar = (str, size) => {
  const hash = stringHash(str);
  const colors = hslTriad(hash % 360, 1, 0.5);
  const color1 = hslRgb(colors[0][0], colors[0][1], colors[0][2]);
  const color2 = hslRgb(colors[1][0], colors[1][1], colors[1][2]);
  const color1str = `rgb(${ color1[0] }, ${ color1[1] }, ${ color1[2] })`;
  const color2str = `rgb(${ color2[0] }, ${ color2[1] }, ${ color2[2] })`;
  const id = uniqueID();

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg ${ size != undefined ? `width="${size}px" height="${size}px"` : '' } viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="${id}">
      <stop stop-color="${color1str}" offset="0%"></stop>
      <stop stop-color="${color2str}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#${id})" x="0" y="0" width="80" height="80"></rect>
  </g>
</svg>`;
};

module.exports = avatar;


/***/ }),

/***/ "7f12":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "8140":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconPaperPlane2/SpIconPaperPlane2.vue?vue&type=template&id=22395f82


var _hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("path", {
  d: "M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"
})], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", null, [_hoisted_1]);
}
// CONCATENATED MODULE: ./src/components/SpIconPaperPlane2/SpIconPaperPlane2.vue?vue&type=template&id=22395f82

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconPaperPlane2/SpIconPaperPlane2.vue?vue&type=script&lang=js
/* harmony default export */ var SpIconPaperPlane2vue_type_script_lang_js = ({
  name: 'SpIconPaperPlane2'
});
// CONCATENATED MODULE: ./src/components/SpIconPaperPlane2/SpIconPaperPlane2.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpIconPaperPlane2/SpIconPaperPlane2.vue



SpIconPaperPlane2vue_type_script_lang_js.render = render

/* harmony default export */ var SpIconPaperPlane2 = __webpack_exports__["a"] = (SpIconPaperPlane2vue_type_script_lang_js);

/***/ }),

/***/ "81f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBlockExplorer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bd43");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBlockExplorer', _SpBlockExplorer_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBlockExplorer_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "8243":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpAccountList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b97c");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpAccountList', _SpAccountList_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpAccountList_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "82435":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpIconPaperPlane2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8140");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpIconPaperPlane2', _SpIconPaperPlane2_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpIconPaperPlane2_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8409":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBlockCopyIconText_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("da4d");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBlockCopyIconText', _SpBlockCopyIconText_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBlockCopyIconText_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8707":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__("b639")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8ba4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var isInteger = __webpack_require__("5e89");

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isInteger
});


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8be6":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("8707").Buffer

module.exports = function (thing, encoding, name) {
  if (Buffer.isBuffer(thing)) {
    return thing
  } else if (typeof thing === 'string') {
    return Buffer.from(thing, encoding)
  } else if (ArrayBuffer.isView(thing)) {
    return Buffer.from(thing.buffer)
  } else {
    throw new TypeError(name + ' must be a string, a Buffer, a typed array or a DataView')
  }
}


/***/ }),

/***/ "8ce3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpSpinner_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ec2");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpSpinner', _SpSpinner_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpSpinner_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "9088":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// browserify by default only pulls in files that are hard coded in requires
// In order of last to first in this file, the default wordlist will be chosen
// based on what is present. (Bundles may remove wordlists they don't need)
const wordlists = {};
exports.wordlists = wordlists;
let _default;
exports._default = _default;
try {
    exports._default = _default = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './wordlists/czech.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    wordlists.czech = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './wordlists/chinese_simplified.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    wordlists.chinese_simplified = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './wordlists/chinese_traditional.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    wordlists.chinese_traditional = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './wordlists/korean.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    wordlists.korean = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './wordlists/french.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    wordlists.french = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './wordlists/italian.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    wordlists.italian = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './wordlists/spanish.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    wordlists.spanish = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './wordlists/japanese.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    wordlists.japanese = _default;
    wordlists.JA = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__("753d");
    wordlists.english = _default;
    wordlists.EN = _default;
}
catch (err) { }


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9152":
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "919c":
/***/ (function(module, exports) {

module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "93c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpFullWidthContainer/SpFullWidthContainer.vue?vue&type=template&id=14097b9e&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-14097b9e");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-14097b9e");

var _hoisted_1 = {
  class: "container__wrapper"
};
var _hoisted_2 = {
  class: "container__main"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
    ref: "container",
    class: ['container', {
      '-is-collapsed': $data.isSheetActive,
      '-is-loading': $props.isTableLoading
    }]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_1, [$props.hasSideSheet ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
    key: 0,
    class: ['container__sheet', {
      '-is-active': $data.isSheetActive
    }]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderSlot"])(_ctx.$slots, "sideSheet")], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderSlot"])(_ctx.$slots, "mainContent")])])], 2);
});
// CONCATENATED MODULE: ./src/components/legacy/SpFullWidthContainer/SpFullWidthContainer.vue?vue&type=template&id=14097b9e&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpFullWidthContainer/SpFullWidthContainer.vue?vue&type=script&lang=js
/* harmony default export */ var SpFullWidthContainervue_type_script_lang_js = ({
  name: 'SpFullWidthContainer',
  props: {
    hasSideSheet: {
      type: Boolean,
      default: true
    },
    isTableLoading: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isSheetActive: true
    };
  },
  methods: {
    handleSheetClose: function handleSheetClose() {
      this.$emit('sheet-closed');
    }
  }
});
// CONCATENATED MODULE: ./src/components/legacy/SpFullWidthContainer/SpFullWidthContainer.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/legacy/SpFullWidthContainer/SpFullWidthContainer.vue?vue&type=style&index=0&id=14097b9e&scoped=true&lang=css
var SpFullWidthContainervue_type_style_index_0_id_14097b9e_scoped_true_lang_css = __webpack_require__("10c7");

// CONCATENATED MODULE: ./src/components/legacy/SpFullWidthContainer/SpFullWidthContainer.vue





SpFullWidthContainervue_type_script_lang_js.render = render
SpFullWidthContainervue_type_script_lang_js.__scopeId = "data-v-14097b9e"

/* harmony default export */ var SpFullWidthContainer = __webpack_exports__["a"] = (SpFullWidthContainervue_type_script_lang_js);

/***/ }),

/***/ "93e6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__("0632").Buffer
var Transform = __webpack_require__("334a").Transform
var inherits = __webpack_require__("3fb5")

function throwIfNotStringOrBuffer (val, prefix) {
  if (!Buffer.isBuffer(val) && typeof val !== 'string') {
    throw new TypeError(prefix + ' must be a string or a buffer')
  }
}

function HashBase (blockSize) {
  Transform.call(this)

  this._block = Buffer.allocUnsafe(blockSize)
  this._blockSize = blockSize
  this._blockOffset = 0
  this._length = [0, 0, 0, 0]

  this._finalized = false
}

inherits(HashBase, Transform)

HashBase.prototype._transform = function (chunk, encoding, callback) {
  var error = null
  try {
    this.update(chunk, encoding)
  } catch (err) {
    error = err
  }

  callback(error)
}

HashBase.prototype._flush = function (callback) {
  var error = null
  try {
    this.push(this.digest())
  } catch (err) {
    error = err
  }

  callback(error)
}

HashBase.prototype.update = function (data, encoding) {
  throwIfNotStringOrBuffer(data, 'Data')
  if (this._finalized) throw new Error('Digest already called')
  if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding)

  // consume data
  var block = this._block
  var offset = 0
  while (this._blockOffset + data.length - offset >= this._blockSize) {
    for (var i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++]
    this._update()
    this._blockOffset = 0
  }
  while (offset < data.length) block[this._blockOffset++] = data[offset++]

  // update length
  for (var j = 0, carry = data.length * 8; carry > 0; ++j) {
    this._length[j] += carry
    carry = (this._length[j] / 0x0100000000) | 0
    if (carry > 0) this._length[j] -= 0x0100000000 * carry
  }

  return this
}

HashBase.prototype._update = function () {
  throw new Error('_update is not implemented')
}

HashBase.prototype.digest = function (encoding) {
  if (this._finalized) throw new Error('Digest already called')
  this._finalized = true

  var digest = this._digest()
  if (encoding !== undefined) digest = digest.toString(encoding)

  // reset state
  this._block.fill(0)
  this._blockOffset = 0
  for (var i = 0; i < 4; ++i) this._length[i] = 0

  return digest
}

HashBase.prototype._digest = function () {
  throw new Error('_digest is not implemented')
}

module.exports = HashBase


/***/ }),

/***/ "94ae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpH3_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("597a");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpH3', _SpH3_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpH3_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "966d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (typeof process === 'undefined' ||
    !process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "96a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__("b639"),
    Buffer = _require.Buffer;

var _require2 = __webpack_require__(1),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports =
/*#__PURE__*/
function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();

/***/ }),

/***/ "96ab":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "9705":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toUtf8 = exports.fromUtf8 = exports.toRfc3339 = exports.fromRfc3339 = exports.toHex = exports.fromHex = exports.Bech32 = exports.toBase64 = exports.fromBase64 = exports.toAscii = exports.fromAscii = void 0;
var ascii_1 = __webpack_require__("cee3");
Object.defineProperty(exports, "fromAscii", { enumerable: true, get: function () { return ascii_1.fromAscii; } });
Object.defineProperty(exports, "toAscii", { enumerable: true, get: function () { return ascii_1.toAscii; } });
var base64_1 = __webpack_require__("9dc8");
Object.defineProperty(exports, "fromBase64", { enumerable: true, get: function () { return base64_1.fromBase64; } });
Object.defineProperty(exports, "toBase64", { enumerable: true, get: function () { return base64_1.toBase64; } });
var bech32_1 = __webpack_require__("2ead");
Object.defineProperty(exports, "Bech32", { enumerable: true, get: function () { return bech32_1.Bech32; } });
var hex_1 = __webpack_require__("1083");
Object.defineProperty(exports, "fromHex", { enumerable: true, get: function () { return hex_1.fromHex; } });
Object.defineProperty(exports, "toHex", { enumerable: true, get: function () { return hex_1.toHex; } });
var rfc3339_1 = __webpack_require__("cdef");
Object.defineProperty(exports, "fromRfc3339", { enumerable: true, get: function () { return rfc3339_1.fromRfc3339; } });
Object.defineProperty(exports, "toRfc3339", { enumerable: true, get: function () { return rfc3339_1.toRfc3339; } });
var utf8_1 = __webpack_require__("a07a");
Object.defineProperty(exports, "fromUtf8", { enumerable: true, get: function () { return utf8_1.fromUtf8; } });
Object.defineProperty(exports, "toUtf8", { enumerable: true, get: function () { return utf8_1.toUtf8; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "98e6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var inherits = __webpack_require__("3fb5")
var MD5 = __webpack_require__("f576")
var RIPEMD160 = __webpack_require__("b5ca")
var sha = __webpack_require__("69f2")
var Base = __webpack_require__("6430")

function Hash (hash) {
  Base.call(this, 'digest')

  this._hash = hash
}

inherits(Hash, Base)

Hash.prototype._update = function (data) {
  this._hash.update(data)
}

Hash.prototype._final = function () {
  return this._hash.digest()
}

module.exports = function createHash (alg) {
  alg = alg.toLowerCase()
  if (alg === 'md5') return new MD5()
  if (alg === 'rmd160' || alg === 'ripemd160') return new RIPEMD160()

  return new Hash(sha(alg))
}


/***/ }),

/***/ "9911":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9d8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;


/***/ }),

/***/ "9dc8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase64 = exports.toBase64 = void 0;
const base64js = __importStar(__webpack_require__("1fb5"));
function toBase64(data) {
    return base64js.fromByteArray(data);
}
exports.toBase64 = toBase64;
function fromBase64(base64String) {
    if (!base64String.match(/^[a-zA-Z0-9+/]*={0,2}$/)) {
        throw new Error("Invalid base64 string format");
    }
    return base64js.toByteArray(base64String);
}
exports.fromBase64 = fromBase64;
//# sourceMappingURL=base64.js.map

/***/ }),

/***/ "9e86":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpSuccessDot_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("59e0");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpSuccessDot', _SpSuccessDot_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpSuccessDot_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "9f9d":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var defaultEncoding
/* istanbul ignore next */
if (process.browser) {
  defaultEncoding = 'utf-8'
} else if (process.version) {
  var pVersionMajor = parseInt(process.version.split('.')[0].slice(1), 10)

  defaultEncoding = pVersionMajor >= 6 ? 'utf-8' : 'binary'
} else {
  defaultEncoding = 'utf-8'
}
module.exports = defaultEncoding

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "a07a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromUtf8 = exports.toUtf8 = void 0;
function isValidUtf8(data) {
    const toStringAndBack = Buffer.from(Buffer.from(data).toString("utf8"), "utf8");
    return Buffer.compare(Buffer.from(data), toStringAndBack) === 0;
}
function toUtf8(str) {
    // Browser and future nodejs (https://github.com/nodejs/node/issues/20365)
    if (typeof TextEncoder !== "undefined") {
        return new TextEncoder().encode(str);
    }
    // Use Buffer hack instead of nodejs util.TextEncoder to ensure
    // webpack does not bundle the util module for browsers.
    return new Uint8Array(Buffer.from(str, "utf8"));
}
exports.toUtf8 = toUtf8;
function fromUtf8(data) {
    // Browser and future nodejs (https://github.com/nodejs/node/issues/20365)
    if (typeof TextDecoder !== "undefined") {
        return new TextDecoder("utf-8", { fatal: true }).decode(data);
    }
    // Use Buffer hack instead of nodejs util.TextDecoder to ensure
    // webpack does not bundle the util module for browsers.
    // Buffer.toString has no fatal option
    if (!isValidUtf8(data)) {
        throw new Error("Invalid UTF8 data");
    }
    return Buffer.from(data).toString("utf8");
}
exports.fromUtf8 = fromUtf8;
//# sourceMappingURL=utf8.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ "a099":
/***/ (function(module, exports, __webpack_require__) {

exports.pbkdf2 = __webpack_require__("206d")
exports.pbkdf2Sync = __webpack_require__("e07b")


/***/ }),

/***/ "a1a3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a255":
/***/ (function(module, exports, __webpack_require__) {

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = __webpack_require__("3fb5")
var Hash = __webpack_require__("b672")
var Buffer = __webpack_require__("8707").Buffer

var K = [
  0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
  0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
  0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
  0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
  0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
  0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
  0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
  0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
  0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
  0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
  0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
  0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
  0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
  0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
  0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
  0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
]

var W = new Array(64)

function Sha256 () {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha256, Hash)

Sha256.prototype.init = function () {
  this._a = 0x6a09e667
  this._b = 0xbb67ae85
  this._c = 0x3c6ef372
  this._d = 0xa54ff53a
  this._e = 0x510e527f
  this._f = 0x9b05688c
  this._g = 0x1f83d9ab
  this._h = 0x5be0cd19

  return this
}

function ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function sigma0 (x) {
  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)
}

function sigma1 (x) {
  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)
}

function gamma0 (x) {
  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3)
}

function gamma1 (x) {
  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10)
}

Sha256.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0
  var f = this._f | 0
  var g = this._g | 0
  var h = this._h | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 64; ++i) W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0

  for (var j = 0; j < 64; ++j) {
    var T1 = (h + sigma1(e) + ch(e, f, g) + K[j] + W[j]) | 0
    var T2 = (sigma0(a) + maj(a, b, c)) | 0

    h = g
    g = f
    f = e
    e = (d + T1) | 0
    d = c
    c = b
    b = a
    a = (T1 + T2) | 0
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
  this._f = (f + this._f) | 0
  this._g = (g + this._g) | 0
  this._h = (h + this._h) | 0
}

Sha256.prototype._hash = function () {
  var H = Buffer.allocUnsafe(32)

  H.writeInt32BE(this._a, 0)
  H.writeInt32BE(this._b, 4)
  H.writeInt32BE(this._c, 8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)
  H.writeInt32BE(this._h, 28)

  return H
}

module.exports = Sha256


/***/ }),

/***/ "a2bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__("e8b5");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "a4b4":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a581":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStandardIconText/SpStandardIconText.vue?vue&type=template&id=fe14b11a


function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpIconText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpIconText");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpIconText, {
    class: "standard-icon-text",
    text: $props.text,
    link: $props.link,
    "icon-type": $props.iconType,
    "is-icon-first": true
  }, null, 8, ["text", "link", "icon-type"]);
}
// CONCATENATED MODULE: ./src/components/SpStandardIconText/SpStandardIconText.vue?vue&type=template&id=fe14b11a

// EXTERNAL MODULE: ./src/components/SpIconText/index.js
var SpIconText = __webpack_require__("1c66");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStandardIconText/SpStandardIconText.vue?vue&type=script&lang=js

/* harmony default export */ var SpStandardIconTextvue_type_script_lang_js = ({
  name: 'SpStandardIconText',
  components: {
    SpIconText: SpIconText["a" /* default */]
  },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    },
    iconType: {
      type: String,
      default: 'check',
      validator: function validator(value) {
        return ['copy', 'check', 'successDot'].indexOf(value) !== -1;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpStandardIconText/SpStandardIconText.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpStandardIconText/SpStandardIconText.vue



SpStandardIconTextvue_type_script_lang_js.render = render

/* harmony default export */ var SpStandardIconText = __webpack_exports__["a"] = (SpStandardIconTextvue_type_script_lang_js);

/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a989":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconMagic1/SpIconMagic1.vue?vue&type=template&id=46894e1c


var _hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("path", {
  d: "M4.908 2.081l-2.828 2.828 19.092 19.091 2.828-2.828-19.092-19.091zm2.121 6.363l-3.535-3.535 1.414-1.414 3.535 3.535-1.414 1.414zm1.731-5.845c1.232.376 2.197 1.341 2.572 2.573.377-1.232 1.342-2.197 2.573-2.573-1.231-.376-2.196-1.34-2.573-2.573-.375 1.232-1.34 2.197-2.572 2.573zm-5.348 6.954c-.498 1.635-1.777 2.914-3.412 3.413 1.635.499 2.914 1.777 3.412 3.411.499-1.634 1.778-2.913 3.412-3.411-1.634-.5-2.913-1.778-3.412-3.413zm9.553-3.165c.872.266 1.553.948 1.819 1.82.266-.872.948-1.554 1.819-1.82-.871-.266-1.553-.948-1.819-1.82-.266.871-.948 1.554-1.819 1.82zm4.426-6.388c-.303.994-1.082 1.772-2.075 2.076.995.304 1.772 1.082 2.077 2.077.303-.994 1.082-1.772 2.074-2.077-.992-.303-1.772-1.082-2.076-2.076z"
})], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", null, [_hoisted_1]);
}
// CONCATENATED MODULE: ./src/components/SpIconMagic1/SpIconMagic1.vue?vue&type=template&id=46894e1c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconMagic1/SpIconMagic1.vue?vue&type=script&lang=js
/* harmony default export */ var SpIconMagic1vue_type_script_lang_js = ({
  name: 'SpIconMagic1'
});
// CONCATENATED MODULE: ./src/components/SpIconMagic1/SpIconMagic1.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpIconMagic1/SpIconMagic1.vue



SpIconMagic1vue_type_script_lang_js.render = render

/* harmony default export */ var SpIconMagic1 = __webpack_exports__["a"] = (SpIconMagic1vue_type_script_lang_js);

/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "abb9":
/***/ (function(module, exports) {

const hslTriad = (h, s, l) => {
  return [
    [h, s, l],
    [(h + 120) % 360, s, l],
    [(h + 240) % 360, s, l],
  ]
};

module.exports = hslTriad;

/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ac8a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpSpinner_vue_vue_type_style_index_0_id_7cd9d5c1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d9a0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpSpinner_vue_vue_type_style_index_0_id_7cd9d5c1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpSpinner_vue_vue_type_style_index_0_id_7cd9d5c1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "aca0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpCheck/SpCheck.vue?vue&type=template&id=14e94c8b&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-14e94c8b");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-14e94c8b");

var _hoisted_1 = {
  class: "icon-check"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1);
});
// CONCATENATED MODULE: ./src/components/SpCheck/SpCheck.vue?vue&type=template&id=14e94c8b&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpCheck/SpCheck.vue?vue&type=script&lang=js
/* harmony default export */ var SpCheckvue_type_script_lang_js = ({
  name: 'SpCheck'
});
// CONCATENATED MODULE: ./src/components/SpCheck/SpCheck.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpCheck/SpCheck.vue?vue&type=style&index=0&id=14e94c8b&scoped=true&lang=css
var SpCheckvue_type_style_index_0_id_14e94c8b_scoped_true_lang_css = __webpack_require__("2f47");

// CONCATENATED MODULE: ./src/components/SpCheck/SpCheck.vue





SpCheckvue_type_script_lang_js.render = render
SpCheckvue_type_script_lang_js.__scopeId = "data-v-14e94c8b"

/* harmony default export */ var SpCheck = __webpack_exports__["a"] = (SpCheckvue_type_script_lang_js);

/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ad71":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var pna = __webpack_require__("966d");
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__("e3db");
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__("faa1").EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__("429b");
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__("8707").Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = Object.create(__webpack_require__("3a7c"));
util.inherits = __webpack_require__("3fb5");
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(2);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__("5e1a");
var destroyImpl = __webpack_require__("4681");
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__("b19a");

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__("7d72").StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__("b19a");

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__("7d72").StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("4362")))

/***/ }),

/***/ "ae78":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpStatusLED_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eed9");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpStatusLED', _SpStatusLED_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpStatusLED_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "af4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconCircle2/SpIconCircle2.vue?vue&type=template&id=14085254


var _hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("path", {
  d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
})], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", null, [_hoisted_1]);
}
// CONCATENATED MODULE: ./src/components/SpIconCircle2/SpIconCircle2.vue?vue&type=template&id=14085254

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconCircle2/SpIconCircle2.vue?vue&type=script&lang=js
/* harmony default export */ var SpIconCircle2vue_type_script_lang_js = ({
  name: 'SpIconCircle2'
});
// CONCATENATED MODULE: ./src/components/SpIconCircle2/SpIconCircle2.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpIconCircle2/SpIconCircle2.vue



SpIconCircle2vue_type_script_lang_js.render = render

/* harmony default export */ var SpIconCircle2 = __webpack_exports__["a"] = (SpIconCircle2vue_type_script_lang_js);

/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b19a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var pna = __webpack_require__("966d");
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = Object.create(__webpack_require__("3a7c"));
util.inherits = __webpack_require__("3fb5");
/*</replacement>*/

var Readable = __webpack_require__("ad71");
var Writable = __webpack_require__("dc14");

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};

/***/ }),

/***/ "b26f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b4fd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBox/SpBox.vue?vue&type=template&id=5344ceb1

var _hoisted_1 = {
  width: "68",
  height: "68",
  viewBox: "0 0 68 68",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M33.1138 0.617297C33.4893 0.459355 33.913 0.460978 34.2873 0.621791L66.5921 14.4996C67.143 14.7362 67.5 15.2782 67.5 15.8778V50.1192C67.5 50.691 67.1749 51.2131 66.6618 51.4654L34.357 67.3461C33.9361 67.5531 33.4426 67.5512 33.0233 67.3411L1.32806 51.4603C0.820498 51.206 0.5 50.6869 0.5 50.1192V15.3294C0.5 14.7256 0.861971 14.1807 1.41851 13.9467L33.1138 0.617297ZM3.5 17.6602V49.193L32.1952 63.5707V30.7209L3.5 17.6602ZM35.1952 30.7438V63.5912L64.5 49.1852V18.1547L35.1952 30.7438ZM62.1997 15.8778L33.7128 28.1155L5.74022 15.3837L33.689 3.62987L62.1997 15.8778Z",
  fill: "#000D9E",
  "fill-opacity": "0.07"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("svg", _hoisted_1, [_hoisted_2]);
}
// CONCATENATED MODULE: ./src/components/SpBox/SpBox.vue?vue&type=template&id=5344ceb1

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBox/SpBox.vue?vue&type=script&lang=js
/* harmony default export */ var SpBoxvue_type_script_lang_js = ({
  name: 'SpBox'
});
// CONCATENATED MODULE: ./src/components/SpBox/SpBox.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpBox/SpBox.vue



SpBoxvue_type_script_lang_js.render = render

/* harmony default export */ var SpBox = __webpack_exports__["a"] = (SpBoxvue_type_script_lang_js);

/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");
var IS_WEBOS_WEBKIT = __webpack_require__("a4b4");
var IS_NODE = __webpack_require__("605d");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b5ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__("b639").Buffer
var inherits = __webpack_require__("3fb5")
var HashBase = __webpack_require__("93e6")

var ARRAY16 = new Array(16)

var zl = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
]

var zr = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
]

var sl = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
]

var sr = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
]

var hl = [0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e]
var hr = [0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000]

function RIPEMD160 () {
  HashBase.call(this, 64)

  // state
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
  this._e = 0xc3d2e1f0
}

inherits(RIPEMD160, HashBase)

RIPEMD160.prototype._update = function () {
  var words = ARRAY16
  for (var j = 0; j < 16; ++j) words[j] = this._block.readInt32LE(j * 4)

  var al = this._a | 0
  var bl = this._b | 0
  var cl = this._c | 0
  var dl = this._d | 0
  var el = this._e | 0

  var ar = this._a | 0
  var br = this._b | 0
  var cr = this._c | 0
  var dr = this._d | 0
  var er = this._e | 0

  // computation
  for (var i = 0; i < 80; i += 1) {
    var tl
    var tr
    if (i < 16) {
      tl = fn1(al, bl, cl, dl, el, words[zl[i]], hl[0], sl[i])
      tr = fn5(ar, br, cr, dr, er, words[zr[i]], hr[0], sr[i])
    } else if (i < 32) {
      tl = fn2(al, bl, cl, dl, el, words[zl[i]], hl[1], sl[i])
      tr = fn4(ar, br, cr, dr, er, words[zr[i]], hr[1], sr[i])
    } else if (i < 48) {
      tl = fn3(al, bl, cl, dl, el, words[zl[i]], hl[2], sl[i])
      tr = fn3(ar, br, cr, dr, er, words[zr[i]], hr[2], sr[i])
    } else if (i < 64) {
      tl = fn4(al, bl, cl, dl, el, words[zl[i]], hl[3], sl[i])
      tr = fn2(ar, br, cr, dr, er, words[zr[i]], hr[3], sr[i])
    } else { // if (i<80) {
      tl = fn5(al, bl, cl, dl, el, words[zl[i]], hl[4], sl[i])
      tr = fn1(ar, br, cr, dr, er, words[zr[i]], hr[4], sr[i])
    }

    al = el
    el = dl
    dl = rotl(cl, 10)
    cl = bl
    bl = tl

    ar = er
    er = dr
    dr = rotl(cr, 10)
    cr = br
    br = tr
  }

  // update state
  var t = (this._b + cl + dr) | 0
  this._b = (this._c + dl + er) | 0
  this._c = (this._d + el + ar) | 0
  this._d = (this._e + al + br) | 0
  this._e = (this._a + bl + cr) | 0
  this._a = t
}

RIPEMD160.prototype._digest = function () {
  // create padding and handle blocks
  this._block[this._blockOffset++] = 0x80
  if (this._blockOffset > 56) {
    this._block.fill(0, this._blockOffset, 64)
    this._update()
    this._blockOffset = 0
  }

  this._block.fill(0, this._blockOffset, 56)
  this._block.writeUInt32LE(this._length[0], 56)
  this._block.writeUInt32LE(this._length[1], 60)
  this._update()

  // produce result
  var buffer = Buffer.alloc ? Buffer.alloc(20) : new Buffer(20)
  buffer.writeInt32LE(this._a, 0)
  buffer.writeInt32LE(this._b, 4)
  buffer.writeInt32LE(this._c, 8)
  buffer.writeInt32LE(this._d, 12)
  buffer.writeInt32LE(this._e, 16)
  return buffer
}

function rotl (x, n) {
  return (x << n) | (x >>> (32 - n))
}

function fn1 (a, b, c, d, e, m, k, s) {
  return (rotl((a + (b ^ c ^ d) + m + k) | 0, s) + e) | 0
}

function fn2 (a, b, c, d, e, m, k, s) {
  return (rotl((a + ((b & c) | ((~b) & d)) + m + k) | 0, s) + e) | 0
}

function fn3 (a, b, c, d, e, m, k, s) {
  return (rotl((a + ((b | (~c)) ^ d) + m + k) | 0, s) + e) | 0
}

function fn4 (a, b, c, d, e, m, k, s) {
  return (rotl((a + ((b & d) | (c & (~d))) + m + k) | 0, s) + e) | 0
}

function fn5 (a, b, c, d, e, m, k, s) {
  return (rotl((a + (b ^ (c | (~d))) + m + k) | 0, s) + e) | 0
}

module.exports = RIPEMD160


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b639":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("1fb5")
var ieee754 = __webpack_require__("9152")
var isArray = __webpack_require__("e3db")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b672":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("8707").Buffer

// prototype class for hash functions
function Hash (blockSize, finalSize) {
  this._block = Buffer.alloc(blockSize)
  this._finalSize = finalSize
  this._blockSize = blockSize
  this._len = 0
}

Hash.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    enc = enc || 'utf8'
    data = Buffer.from(data, enc)
  }

  var block = this._block
  var blockSize = this._blockSize
  var length = data.length
  var accum = this._len

  for (var offset = 0; offset < length;) {
    var assigned = accum % blockSize
    var remainder = Math.min(length - offset, blockSize - assigned)

    for (var i = 0; i < remainder; i++) {
      block[assigned + i] = data[offset + i]
    }

    accum += remainder
    offset += remainder

    if ((accum % blockSize) === 0) {
      this._update(block)
    }
  }

  this._len += length
  return this
}

Hash.prototype.digest = function (enc) {
  var rem = this._len % this._blockSize

  this._block[rem] = 0x80

  // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
  // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize
  this._block.fill(0, rem + 1)

  if (rem >= this._finalSize) {
    this._update(this._block)
    this._block.fill(0)
  }

  var bits = this._len * 8

  // uint32
  if (bits <= 0xffffffff) {
    this._block.writeUInt32BE(bits, this._blockSize - 4)

  // uint64
  } else {
    var lowBits = (bits & 0xffffffff) >>> 0
    var highBits = (bits - lowBits) / 0x100000000

    this._block.writeUInt32BE(highBits, this._blockSize - 8)
    this._block.writeUInt32BE(lowBits, this._blockSize - 4)
  }

  this._update(this._block)
  var hash = this._hash()

  return enc ? hash.toString(enc) : hash
}

Hash.prototype._update = function () {
  throw new Error('_update must be implemented by subclass')
}

module.exports = Hash


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "b7d1":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b837":
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__("3fb5")
var SHA512 = __webpack_require__("4fd1")
var Hash = __webpack_require__("b672")
var Buffer = __webpack_require__("8707").Buffer

var W = new Array(160)

function Sha384 () {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha384, SHA512)

Sha384.prototype.init = function () {
  this._ah = 0xcbbb9d5d
  this._bh = 0x629a292a
  this._ch = 0x9159015a
  this._dh = 0x152fecd8
  this._eh = 0x67332667
  this._fh = 0x8eb44a87
  this._gh = 0xdb0c2e0d
  this._hh = 0x47b5481d

  this._al = 0xc1059ed8
  this._bl = 0x367cd507
  this._cl = 0x3070dd17
  this._dl = 0xf70e5939
  this._el = 0xffc00b31
  this._fl = 0x68581511
  this._gl = 0x64f98fa7
  this._hl = 0xbefa4fa4

  return this
}

Sha384.prototype._hash = function () {
  var H = Buffer.allocUnsafe(48)

  function writeInt64BE (h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._ah, this._al, 0)
  writeInt64BE(this._bh, this._bl, 8)
  writeInt64BE(this._ch, this._cl, 16)
  writeInt64BE(this._dh, this._dl, 24)
  writeInt64BE(this._eh, this._el, 32)
  writeInt64BE(this._fh, this._fl, 40)

  return H
}

module.exports = Sha384


/***/ }),

/***/ "b907":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b4fd");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBox', _SpBox_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBox_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b97c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpAccountList/SpAccountList.vue?vue&type=template&id=ab415c2c

var _hoisted_1 = {
  key: 0,
  class: "SpAccountList"
};
var _hoisted_2 = {
  key: 0
};

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, "AVAILABLE ACCOUNTS:", -1);

var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = {
  class: "SpButtonText"
};

var _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("hr", null, null, -1);

var _hoisted_7 = {
  class: "SpAccountNew"
};

var _hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "ADD NEW ACCOUNT", -1);

var _hoisted_9 = {
  key: 1,
  class: "SpAccountForm SpForm"
};

var _hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpFormTitle"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, "ADD ACCOUNT:")], -1);

var _hoisted_11 = {
  class: "SpAccountCheckbox SpCheckbox"
};
var _hoisted_12 = {
  for: "SpAccountNextAvailable"
};

var _hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("CREATE NEXT AVAILABLE ACCOUNT? ");

var _hoisted_14 = {
  key: 0,
  class: "SpAccountHDPath"
};

var _hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(" USE SPECIFIC HD PATH: ");

var _hoisted_16 = {
  class: "SpAccountCreate"
};

var _hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "CREATE ACCOUNT", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [!_ctx.newAccount.show ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_2, [_hoisted_3, $options.accountList.length > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("ul", _hoisted_4, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.accountList, function (account) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("li", {
      key: account.address
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
      onClick: function onClick($event) {
        return $options.useAccount(account.address);
      },
      class: "SpButton"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(account.address), 1)], 8, ["onClick"])]);
  }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.newAccountForm();
    }),
    class: "SpButton"
  }, [_hoisted_8])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), _ctx.newAccount.show ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_9, [_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("label", _hoisted_12, [_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.newAccount.nextAvailable = $event;
    }),
    id: "SpAccountNextAvailable"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelCheckbox"], _ctx.newAccount.nextAvailable]])])]), !_ctx.newAccount.nextAvailable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_14, [_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.HDPath), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    type: "number",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.newAccount.pathIncrement = $event;
    }),
    class: "SpInputNumber"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.newAccount.pathIncrement]])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.createAccount();
    }),
    class: "SpButton"
  }, [_hoisted_17])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpAccountList/SpAccountList.vue?vue&type=template&id=ab415c2c

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpAccountList/SpAccountList.vue?vue&type=script&lang=js




/* harmony default export */ var SpAccountListvue_type_script_lang_js = ({
  name: 'SpAccountList',
  data: function data() {
    return this.defaultState();
  },
  computed: {
    accountList: function accountList() {
      return this.$store.state.chain.common.wallet.activeWallet.accounts;
    },
    HDPath: function HDPath() {
      return this.$store.state.chain.common.wallet.activeWallet.HDpath;
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'common', 'wallet'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `chain.common.wallet` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  methods: {
    defaultState: function defaultState() {
      return {
        newAccount: {
          show: false,
          nextAvailable: true,
          pathIncrement: null
        }
      };
    },
    reset: function reset() {
      Object.assign(this.$data, this.defaultState());
    },
    newAccountForm: function newAccountForm() {
      this.newAccount.show = true;
    },
    useAccount: function useAccount(address) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this._depsLoaded) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return _this.$store.dispatch('chain/common/wallet/switchAccount', address);

              case 3:
                _this.$emit('account-selected');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    createAccount: function createAccount() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2._depsLoaded) {
                  _context2.next = 8;
                  break;
                }

                if (!_this2.newAccount.nextAvailable) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 4;
                return _this2.$store.dispatch('chain/common/wallet/addAccount');

              case 4:
                _context2.next = 8;
                break;

              case 6:
                _context2.next = 8;
                return _this2.$store.dispatch('chain/common/wallet/addAccount', _this2.newAccount.pathIncrement);

              case 8:
                _this2.reset();

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpAccountList/SpAccountList.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpAccountList/SpAccountList.vue



SpAccountListvue_type_script_lang_js.render = render

/* harmony default export */ var SpAccountList = __webpack_exports__["a"] = (SpAccountListvue_type_script_lang_js);

/***/ }),

/***/ "b9b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ERR_INVALID_OPT_VALUE = __webpack_require__("9d8a").codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};

/***/ }),

/***/ "bb41":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpTypeForm/SpTypeForm.vue?vue&type=template&id=63fd54de


var _hoisted_1 = {
  key: 0,
  class: "SpForm SpTypeForm {{ typeClass}}"
};
var _hoisted_2 = {
  key: 0,
  class: "SpTypeFormCreate"
};

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("CREATE NEW '");

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("'");

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "CREATE", -1);

var _hoisted_6 = {
  key: 1,
  class: "SpTypeFormUpdate"
};

var _hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("UPDATE '");

var _hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("'");

var _hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "UPDATE", -1);

var _hoisted_10 = {
  key: 2,
  class: "SpTypeFormDelete"
};

var _hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])("DELETE '");

var _hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "DELETE", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [$props.action == 'create' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, [_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.type), 1), _hoisted_4])]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.createFieldList, function (field) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
      class: "SpTypeFormField",
      key: field.name
    }, [field.type == 'string' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("input", {
      key: 0,
      type: "text",
      placeholder: field.name,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.typeData[field.name] = $event;
      }
    }, null, 8, ["placeholder", "onUpdate:modelValue"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.typeData[field.name]]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), field.type == 'int' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("input", {
      key: 1,
      type: "number",
      placeholder: field.name,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.typeData[field.name] = $event;
      }
    }, null, 8, ["placeholder", "onUpdate:modelValue"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.typeData[field.name]]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)]);
  }), 128)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    class: "SpButton",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.createType();
    })
  }, [_hoisted_5])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), $props.action == 'update' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, [_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.type) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.id ? ' WITH ID:' + $props.id : ''), 1), _hoisted_8])]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.updateFieldList, function (field) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
      class: "SpTypeFormField",
      key: field.name
    }, [field.type == 'string' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("input", {
      key: 0,
      type: "text",
      placeholder: field.name,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.typeData[field.name] = $event;
      },
      readonly: $props.id != '' && field.name == 'id'
    }, null, 8, ["placeholder", "onUpdate:modelValue", "readonly"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.typeData[field.name]]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), field.type == 'int' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("input", {
      key: 1,
      type: "number",
      placeholder: field.name,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.typeData[field.name] = $event;
      }
    }, null, 8, ["placeholder", "onUpdate:modelValue"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.typeData[field.name]]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)]);
  }), 128)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    class: "SpButton",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.updateType();
    })
  }, [_hoisted_9])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), $props.action == 'delete' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, [_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.type) + "' " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.id ? ' WITH ID:' + $props.id : ''), 1)])]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.deleteFieldList, function (field) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
      class: "SpTypeFormField",
      key: field.name
    }, [field.type == 'string' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("input", {
      key: 0,
      type: "text",
      placeholder: field.name,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.typeData[field.name] = $event;
      },
      readonly: $props.id != '' && field.name == 'id'
    }, null, 8, ["placeholder", "onUpdate:modelValue", "readonly"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.typeData[field.name]]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), field.type == 'int' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("input", {
      key: 1,
      type: "number",
      placeholder: field.name,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return _ctx.typeData[field.name] = $event;
      }
    }, null, 8, ["placeholder", "onUpdate:modelValue"])), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.typeData[field.name]]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)]);
  }), 128)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    class: "SpButton",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.deleteType();
    })
  }, [_hoisted_12])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpTypeForm/SpTypeForm.vue?vue&type=template&id=63fd54de

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js








function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("06c5");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js








function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = Object(unsupportedIterableToArray["a" /* default */])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("2909");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpTypeForm/SpTypeForm.vue?vue&type=script&lang=js












/* harmony default export */ var SpTypeFormvue_type_script_lang_js = ({
  name: 'SpTypeForm',
  components: {},
  props: {
    denom: {
      type: String,
      required: true
    },
    module: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: '',
      required: true
    },
    action: {
      type: String,
      default: '',
      required: true
    },
    id: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      fieldList: [],
      typeData: {}
    };
  },
  watch: {
    id: function id(newId) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.typeData['id'] = newId;

                if (!_this._depsLoaded) {
                  _context.next = 6;
                  break;
                }

                if (!(_this.typeData['id'] != '')) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return _this.$store.dispatch('chain/' + _this.module + '/Query' + _this.type, {
                  subscribe: true,
                  id: _this.typeData['id']
                });

              case 5:
                _this.typeData = _this.$store.getters['chain/' + _this.module + '/get' + _this.type](_this.typeData['id']);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {
    typeClass: function typeClass() {
      return 'SpTypeForm' + this.type;
    },
    createFieldList: function createFieldList() {
      return this.fieldList.filter(function (x) {
        return x.name != 'creator' && x.name != 'id';
      });
    },
    updateFieldList: function updateFieldList() {
      return this.fieldList.filter(function (x) {
        return x.name != 'creator';
      });
    },
    deleteFieldList: function deleteFieldList() {
      return this.fieldList.filter(function (x) {
        return x.name == 'id';
      });
    },
    selectedAccount: function selectedAccount() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/common/wallet/address'];
      } else {
        return null;
      }
    },
    createTypeData: function createTypeData() {
      // eslint-disable-next-line no-unused-vars
      var _this$typeData = this.typeData,
          id = _this$typeData.id,
          rest = _objectWithoutProperties(_this$typeData, ["id"]);

      return rest;
    },
    updateTypeData: function updateTypeData() {
      return this.typeData;
    },
    deleteTypeData: function deleteTypeData() {
      // eslint-disable-next-line no-unused-vars
      var _this$typeData2 = this.typeData,
          id = _this$typeData2.id,
          creator = _this$typeData2.creator,
          rest = _objectWithoutProperties(_this$typeData2, ["id", "creator"]);

      return {
        id: id,
        creator: creator
      };
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain'].concat(Object(toConsumableArray["a" /* default */])(this.module.split('/')));

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module ' + this.module + ' has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  created: function created() {
    var _this2 = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _iterator, _step, field;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this2._depsLoaded) {
                _context2.next = 9;
                break;
              }

              _this2.fieldList = _this2.$store.getters['chain/' + _this2.module + '/getTypeStructure'](_this2.type);
              _iterator = _createForOfIteratorHelper(_this2.fieldList);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  field = _step.value;
                  _this2.typeData[field.name] = '';
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this2.typeData['id'] = _this2.id;

              if (!(_this2.typeData['id'] != '')) {
                _context2.next = 9;
                break;
              }

              _context2.next = 8;
              return _this2.$store.dispatch('chain/' + _this2.module + '/Query' + _this2.type, {
                subscribe: true,
                id: _this2.typeData['id']
              });

            case 8:
              _this2.typeData = _this2.$store.getters['chain/' + _this2.module + '/get' + _this2.type](_this2.typeData['id']);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  methods: {
    createType: function createType() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3._depsLoaded) {
                  _context3.next = 5;
                  break;
                }

                _this3.typeData['creator'] = _this3.selectedAccount;
                _context3.next = 4;
                return _this3.$store.dispatch('chain/' + _this3.module + '/MsgCreate' + _this3.type, _objectSpread2(_objectSpread2({}, _this3.createTypeData), {}, {
                  denom: _this3.denom
                }));

              case 4:
                _this3.txResult = _context3.sent;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    updateType: function updateType() {
      var _this4 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4._depsLoaded) {
                  _context4.next = 5;
                  break;
                }

                _this4.typeData['creator'] = _this4.selectedAccount;
                _context4.next = 4;
                return _this4.$store.dispatch('chain/' + _this4.module + '/MsgUpdate' + _this4.type, _objectSpread2(_objectSpread2({}, _this4.updateTypeData), {}, {
                  denom: _this4.denom
                }));

              case 4:
                _this4.txResult = _context4.sent;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    deleteType: function deleteType() {
      var _this5 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this5._depsLoaded) {
                  _context5.next = 5;
                  break;
                }

                _this5.typeData['creator'] = _this5.selectedAccount;
                _context5.next = 4;
                return _this5.$store.dispatch('chain/' + _this5.module + '/MsgDelete' + _this5.type, _objectSpread2(_objectSpread2({}, _this5.deleteTypeData), {}, {
                  denom: _this5.denom
                }));

              case 4:
                _this5.txResult = _context5.sent;

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpTypeForm/SpTypeForm.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpTypeForm/SpTypeForm.vue



SpTypeFormvue_type_script_lang_js.render = render

/* harmony default export */ var SpTypeForm = __webpack_exports__["a"] = (SpTypeFormvue_type_script_lang_js);

/***/ }),

/***/ "bd31":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpWalletList/SpWalletList.vue?vue&type=template&id=27ce17d2


var _hoisted_1 = {
  key: 0,
  class: "SpWalletList"
};
var _hoisted_2 = {
  key: 0
};

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, "AVAILABLE WALLETS:", -1);

var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = {
  class: "SpButtonText"
};
var _hoisted_6 = {
  key: 1,
  class: "SpWalletListEmpty"
};

var _hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("em", null, "No wallets available", -1);

var _hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("hr", null, null, -1);

var _hoisted_9 = {
  class: "SpWalletNew"
};

var _hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "CREATE NEW WALLET", -1);

var _hoisted_11 = {
  class: "SpWalletKey"
};

var _hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "SIGN IN WITH PRIVATE KEY", -1);

var _hoisted_13 = {
  class: "SpWalletImport"
};

var _hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "IMPORT EXISTING WALLET", -1);

var _hoisted_15 = {
  key: 1,
  class: "SpWalletForm SpForm"
};
var _hoisted_16 = {
  class: "SpWalletInputName"
};
var _hoisted_17 = {
  class: "SpWalletInputMnemonic"
};
var _hoisted_18 = {
  class: "SpWalletGenerateMnemonic"
};

var _hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "GENERATE MNEMONIC", -1);

var _hoisted_20 = {
  class: "SpWalletNext"
};

var _hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "CANCEL", -1);

var _hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "NEXT", -1);

var _hoisted_23 = {
  key: 2,
  class: "SpWalletForm SpForm"
};
var _hoisted_24 = {
  class: "SpWalletInputPassword"
};
var _hoisted_25 = {
  class: "SpWalletInputConfirm"
};
var _hoisted_26 = {
  class: "SpWalletCreate"
};

var _hoisted_27 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "CREATE WALLET", -1);

var _hoisted_28 = {
  key: 3,
  class: "SpWalletForm SpForm"
};
var _hoisted_29 = {
  class: "SpFormTitle"
};

var _hoisted_30 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, "UNLOCKING: ", -1);

var _hoisted_31 = {
  class: "SpWalletInputPassword"
};
var _hoisted_32 = {
  class: "SpWalletUnlock"
};

var _hoisted_33 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "CANCEL", -1);

var _hoisted_34 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "UNLOCK WALLET", -1);

var _hoisted_35 = {
  key: 4,
  class: "SpWalletForm SpForm"
};

var _hoisted_36 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpFormTitle"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, "SIGN IN WITH PRIVATE KEY")], -1);

var _hoisted_37 = {
  class: "SpWalletInputPassword"
};
var _hoisted_38 = {
  class: "SpWalletKey"
};

var _hoisted_39 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "CANCEL", -1);

var _hoisted_40 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "SIGN IN", -1);

var _hoisted_41 = {
  key: 5,
  class: "SpWalletForm SpForm"
};

var _hoisted_42 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpFormTitle"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("strong", null, "IMPORT EXISTING WALLET")], -1);

var _hoisted_43 = {
  class: "SpWalletInputPassword"
};
var _hoisted_44 = {
  type: "file",
  placeholder: "Select backup .bin file",
  ref: "backupFile"
};
var _hoisted_45 = {
  class: "SpWalletInputPassword"
};
var _hoisted_46 = {
  class: "SpWalletImport"
};

var _hoisted_47 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "CANCEL", -1);

var _hoisted_48 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "RESTORE", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [!_ctx.newWallet.show && !_ctx.unlockWallet.show && !_ctx.keyWallet.show && !_ctx.importWallet.show ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_2, [_hoisted_3, $options.walletList.length > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("ul", _hoisted_4, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.walletList, function (wallet) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("li", {
      key: wallet.name
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
      onClick: function onClick($event) {
        return $options.unlockWalletForm(wallet.name);
      },
      class: "SpButton"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
      class: "SpWalletIcon",
      innerHTML: $options.getAvatar(wallet.name)
    }, null, 8, ["innerHTML"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(wallet.name), 1)], 8, ["onClick"])]);
  }), 128))])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_6, [_hoisted_7])), _hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.newWalletForm();
    }),
    class: "SpButton SpWalletButton"
  }, [_hoisted_10])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.keyWalletForm();
    }),
    class: "SpButton SpWalletButton"
  }, [_hoisted_12])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.importWalletForm();
    }),
    class: "SpButton SpWalletButton"
  }, [_hoisted_14])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), _ctx.newWallet.show && _ctx.newWallet.step === 1 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    type: "text",
    placeholder: "Wallet name",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.newWallet.name = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.newWallet.name]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_17, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("textarea", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.newWallet.mnemonic = $event;
    }),
    placeholder: "Mnemonic (enter or click below to generate)"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.newWallet.mnemonic]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.generateMnemonic();
    }),
    class: "SpButton"
  }, [_hoisted_19])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.cancel();
    }),
    class: "SpButton"
  }, [_hoisted_21]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.newWalletStep2();
    }),
    class: "SpButton",
    disabled: !$options.validStep1
  }, [_hoisted_22], 8, ["disabled"])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), _ctx.newWallet.show && _ctx.newWallet.step === 2 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_23, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_24, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    type: "password",
    placeholder: "Wallet password",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return _ctx.newWallet.password = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.newWallet.password]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_25, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    type: "password",
    placeholder: "Confirm password",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return _ctx.newWallet.confirm = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.newWallet.confirm]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.createWallet();
    }),
    class: "SpButton",
    disabled: !$options.validStep2
  }, [_hoisted_27], 8, ["disabled"])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), _ctx.unlockWallet.show ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_29, [_hoisted_30, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(_ctx.unlockWallet.name), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_31, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    type: "password",
    placeholder: "Enter password",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return _ctx.unlockWallet.password = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.unlockWallet.password]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_32, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.cancel();
    }),
    class: "SpButton"
  }, [_hoisted_33]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.unlockStoreWallet();
    }),
    class: "SpButton",
    disabled: !$options.validUnlock
  }, [_hoisted_34], 8, ["disabled"])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), _ctx.keyWallet.show ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_35, [_hoisted_36, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_37, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    type: "name",
    placeholder: "Enter private key (WIF)",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return _ctx.keyWallet.privKey = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.keyWallet.privKey]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_38, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $options.cancel();
    }),
    class: "SpButton"
  }, [_hoisted_39]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $options.signInWithKey();
    }),
    class: "SpButton"
  }, [_hoisted_40])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), _ctx.importWallet.show ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_41, [_hoisted_42, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_43, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", _hoisted_44, null, 512)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_45, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    type: "password",
    placeholder: "Enter password",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return _ctx.importWallet.password = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], _ctx.importWallet.password]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_46, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $options.cancel();
    }),
    class: "SpButton"
  }, [_hoisted_47]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $options.restoreBackup();
    }),
    class: "SpButton"
  }, [_hoisted_48])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpWalletList/SpWalletList.vue?vue&type=template&id=27ce17d2

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/bip39/src/index.js
var src = __webpack_require__("29c9");

// EXTERNAL MODULE: ./node_modules/gradient-avatar/index.js
var gradient_avatar = __webpack_require__("7ee7");
var gradient_avatar_default = /*#__PURE__*/__webpack_require__.n(gradient_avatar);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpWalletList/SpWalletList.vue?vue&type=script&lang=js













function hash(e) {
  function h(a, b) {
    var c, d, e, f, g;
    e = a & 2147483648;
    f = b & 2147483648;
    c = a & 1073741824;
    d = b & 1073741824;
    g = (a & 1073741823) + (b & 1073741823);
    return c & d ? g ^ 2147483648 ^ e ^ f : c | d ? g & 1073741824 ? g ^ 3221225472 ^ e ^ f : g ^ 1073741824 ^ e ^ f : g ^ e ^ f;
  }

  function k(a, b, c, d, e, f, g) {
    a = h(a, h(h(b & c | ~b & d, e), g));
    return h(a << f | a >>> 32 - f, b);
  }

  function l(a, b, c, d, e, f, g) {
    a = h(a, h(h(b & d | c & ~d, e), g));
    return h(a << f | a >>> 32 - f, b);
  }

  function m(a, b, d, c, e, f, g) {
    a = h(a, h(h(b ^ d ^ c, e), g));
    return h(a << f | a >>> 32 - f, b);
  }

  function n(a, b, d, c, e, f, g) {
    a = h(a, h(h(d ^ (b | ~c), e), g));
    return h(a << f | a >>> 32 - f, b);
  }

  function p(a) {
    var b = '',
        d = '',
        c;

    for (c = 0; 3 >= c; c++) {
      d = a >>> 8 * c & 255, d = '0' + d.toString(16), b += d.substr(d.length - 2, 2);
    }

    return b;
  }

  var f = [],
      q,
      r,
      s,
      t,
      a,
      b,
      c,
      d;

  e = function (a) {
    a = a.replace(/\r\n/g, '\n');

    for (var b = '', d = 0; d < a.length; d++) {
      var c = a.charCodeAt(d);
      128 > c ? b += String.fromCharCode(c) : (127 < c && 2048 > c ? b += String.fromCharCode(c >> 6 | 192) : (b += String.fromCharCode(c >> 12 | 224), b += String.fromCharCode(c >> 6 & 63 | 128)), b += String.fromCharCode(c & 63 | 128));
    }

    return b;
  }(e);

  f = function (b) {
    var a,
        c = b.length;
    a = c + 8;

    for (var d = 16 * ((a - a % 64) / 64 + 1), e = Array(d - 1), f = 0, g = 0; g < c;) {
      a = (g - g % 4) / 4, f = g % 4 * 8, e[a] |= b.charCodeAt(g) << f, g++;
    }

    a = (g - g % 4) / 4;
    e[a] |= 128 << g % 4 * 8;
    e[d - 2] = c << 3;
    e[d - 1] = c >>> 29;
    return e;
  }(e);

  a = 1732584193;
  b = 4023233417;
  c = 2562383102;
  d = 271733878;

  for (e = 0; e < f.length; e += 16) {
    q = a, r = b, s = c, t = d, a = k(a, b, c, d, f[e + 0], 7, 3614090360), d = k(d, a, b, c, f[e + 1], 12, 3905402710), c = k(c, d, a, b, f[e + 2], 17, 606105819), b = k(b, c, d, a, f[e + 3], 22, 3250441966), a = k(a, b, c, d, f[e + 4], 7, 4118548399), d = k(d, a, b, c, f[e + 5], 12, 1200080426), c = k(c, d, a, b, f[e + 6], 17, 2821735955), b = k(b, c, d, a, f[e + 7], 22, 4249261313), a = k(a, b, c, d, f[e + 8], 7, 1770035416), d = k(d, a, b, c, f[e + 9], 12, 2336552879), c = k(c, d, a, b, f[e + 10], 17, 4294925233), b = k(b, c, d, a, f[e + 11], 22, 2304563134), a = k(a, b, c, d, f[e + 12], 7, 1804603682), d = k(d, a, b, c, f[e + 13], 12, 4254626195), c = k(c, d, a, b, f[e + 14], 17, 2792965006), b = k(b, c, d, a, f[e + 15], 22, 1236535329), a = l(a, b, c, d, f[e + 1], 5, 4129170786), d = l(d, a, b, c, f[e + 6], 9, 3225465664), c = l(c, d, a, b, f[e + 11], 14, 643717713), b = l(b, c, d, a, f[e + 0], 20, 3921069994), a = l(a, b, c, d, f[e + 5], 5, 3593408605), d = l(d, a, b, c, f[e + 10], 9, 38016083), c = l(c, d, a, b, f[e + 15], 14, 3634488961), b = l(b, c, d, a, f[e + 4], 20, 3889429448), a = l(a, b, c, d, f[e + 9], 5, 568446438), d = l(d, a, b, c, f[e + 14], 9, 3275163606), c = l(c, d, a, b, f[e + 3], 14, 4107603335), b = l(b, c, d, a, f[e + 8], 20, 1163531501), a = l(a, b, c, d, f[e + 13], 5, 2850285829), d = l(d, a, b, c, f[e + 2], 9, 4243563512), c = l(c, d, a, b, f[e + 7], 14, 1735328473), b = l(b, c, d, a, f[e + 12], 20, 2368359562), a = m(a, b, c, d, f[e + 5], 4, 4294588738), d = m(d, a, b, c, f[e + 8], 11, 2272392833), c = m(c, d, a, b, f[e + 11], 16, 1839030562), b = m(b, c, d, a, f[e + 14], 23, 4259657740), a = m(a, b, c, d, f[e + 1], 4, 2763975236), d = m(d, a, b, c, f[e + 4], 11, 1272893353), c = m(c, d, a, b, f[e + 7], 16, 4139469664), b = m(b, c, d, a, f[e + 10], 23, 3200236656), a = m(a, b, c, d, f[e + 13], 4, 681279174), d = m(d, a, b, c, f[e + 0], 11, 3936430074), c = m(c, d, a, b, f[e + 3], 16, 3572445317), b = m(b, c, d, a, f[e + 6], 23, 76029189), a = m(a, b, c, d, f[e + 9], 4, 3654602809), d = m(d, a, b, c, f[e + 12], 11, 3873151461), c = m(c, d, a, b, f[e + 15], 16, 530742520), b = m(b, c, d, a, f[e + 2], 23, 3299628645), a = n(a, b, c, d, f[e + 0], 6, 4096336452), d = n(d, a, b, c, f[e + 7], 10, 1126891415), c = n(c, d, a, b, f[e + 14], 15, 2878612391), b = n(b, c, d, a, f[e + 5], 21, 4237533241), a = n(a, b, c, d, f[e + 12], 6, 1700485571), d = n(d, a, b, c, f[e + 3], 10, 2399980690), c = n(c, d, a, b, f[e + 10], 15, 4293915773), b = n(b, c, d, a, f[e + 1], 21, 2240044497), a = n(a, b, c, d, f[e + 8], 6, 1873313359), d = n(d, a, b, c, f[e + 15], 10, 4264355552), c = n(c, d, a, b, f[e + 6], 15, 2734768916), b = n(b, c, d, a, f[e + 13], 21, 1309151649), a = n(a, b, c, d, f[e + 4], 6, 4149444226), d = n(d, a, b, c, f[e + 11], 10, 3174756917), c = n(c, d, a, b, f[e + 2], 15, 718787259), b = n(b, c, d, a, f[e + 9], 21, 3951481745), a = h(a, q), b = h(b, r), c = h(c, s), d = h(d, t);
  }

  return (p(a) + p(b) + p(c) + p(d)).toLowerCase();
}

/* harmony default export */ var SpWalletListvue_type_script_lang_js = ({
  name: 'SpWalletList',
  data: function data() {
    return this.defaultState();
  },
  computed: {
    walletList: function walletList() {
      if (this._depsLoaded) {
        return this.$store.state.chain.common.wallet.wallets;
      } else {
        return [];
      }
    },
    validStep1: function validStep1() {
      return this.newWallet.name.trim() !== '' && src["validateMnemonic"](this.newWallet.mnemonic);
    },
    validStep2: function validStep2() {
      return this.newWallet.password.trim() !== '' && this.newWallet.password == this.newWallet.confirm;
    },
    validUnlock: function validUnlock() {
      return this.unlockWallet.password.trim() !== '';
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'common', 'wallet'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module ' + this.module + ' has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  methods: {
    newWalletForm: function newWalletForm() {
      this.newWallet.show = true;
      this.newWallet.step = 1;
      this.newWallet.name = '';
      this.newWallet.mnemonic = '';
    },
    keyWalletForm: function keyWalletForm() {
      this.keyWallet.show = true;
      this.keyWallet.privKey = '';
    },
    importWalletForm: function importWalletForm() {
      this.importWallet.show = true;
      this.importWallet.backup = '';
      this.importWallet.password = '';
    },
    unlockWalletForm: function unlockWalletForm(name) {
      this.unlockWallet.show = true;
      this.unlockWallet.name = name;
      this.unlockWallet.password = '';
    },
    newWalletStep2: function newWalletStep2() {
      this.newWallet.step = 2;
    },
    getAvatar: function getAvatar(name) {
      return gradient_avatar_default()(hash(name) + '', 64);
    },
    cancel: function cancel() {
      this.newWallet.show = false;
      this.newWallet.step = 1;
      this.newWallet.name = '';
      this.newWallet.mnemonic = '';
      this.unlockWallet.show = false;
      this.unlockWallet.name = name;
      this.unlockWallet.password = '';
      this.keyWallet.show = false;
      this.keyWallet.privKey = '';
      this.importWallet.show = false;
      this.importWallet.backup = '';
      this.importWallet.password = '';
    },
    restoreBackup: function restoreBackup() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var file, reader;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this._depsLoaded) {
                  _context.next = 7;
                  break;
                }

                file = _this.$refs.backupFile.files[0];

                if (file) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                reader = new FileReader();
                reader.readAsText(file);

                reader.onload = function (evt) {
                  _this.$store.dispatch('chain/common/wallet/restoreWallet', {
                    encrypted: evt.target.result,
                    password: _this.importWallet.password
                  });
                };

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    signInWithKey: function signInWithKey() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2._depsLoaded) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return _this2.$store.dispatch('chain/common/wallet/signInWithPrivateKey', {
                  privKey: _this2.keyWallet.privKey
                });

              case 3:
                _this2.reset();

                _this2.$emit('wallet-selected');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    unlockStoreWallet: function unlockStoreWallet() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3._depsLoaded) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return _this3.$store.dispatch('chain/common/wallet/unlockWallet', {
                  name: _this3.unlockWallet.name,
                  password: _this3.unlockWallet.password
                });

              case 3:
                _this3.reset();

                _this3.$emit('wallet-selected');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    reset: function reset() {
      Object.assign(this.$data, this.defaultState());
    },
    defaultState: function defaultState() {
      return {
        newWallet: {
          show: false,
          step: 1,
          name: '',
          mnemonic: '',
          password: '',
          confirm: ''
        },
        unlockWallet: {
          show: false,
          name: '',
          password: ''
        },
        keyWallet: {
          show: false,
          privKey: ''
        },
        importWallet: {
          show: false,
          backup: '',
          password: ''
        }
      };
    },
    generateMnemonic: function generateMnemonic() {
      var mnemonic = src["generateMnemonic"](256);
      this.newWallet.mnemonic = mnemonic;
    },
    createWallet: function createWallet() {
      var _this4 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4._depsLoaded) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 3;
                return _this4.$store.dispatch('chain/common/wallet/createWalletWithMnemonic', {
                  name: _this4.newWallet.name,
                  mnemonic: _this4.newWallet.mnemonic,
                  password: _this4.newWallet.password
                });

              case 3:
                _this4.reset();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpWalletList/SpWalletList.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpWalletList/SpWalletList.vue



SpWalletListvue_type_script_lang_js.render = render

/* harmony default export */ var SpWalletList = __webpack_exports__["a"] = (SpWalletListvue_type_script_lang_js);

/***/ }),

/***/ "bd43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockExplorer/SpBlockExplorer.vue?vue&type=template&id=485304ce&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-485304ce");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-485304ce");

var _hoisted_1 = {
  key: 0,
  class: "explorer"
};
var _hoisted_2 = {
  class: "explorer__block"
};
var _hoisted_3 = {
  class: "explorer__chain"
};

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "explorer__chain-header"
}, "Blocks", -1);

var _hoisted_5 = {
  class: "explorer__chain-main"
};
var _hoisted_6 = {
  key: "empty",
  class: "explorer -is-empty"
};
var _hoisted_7 = {
  class: "explorer__container"
};

var _hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", null, "Generating blocks", -1);

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpBlockDetailSheet = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpBlockDetailSheet");

  var _component_SpBlockChain = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpBlockChain");

  var _component_SpFullWidthContainer = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpFullWidthContainer");

  var _component_SpBox = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpBox");

  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Transition"], {
    key: "default",
    name: "sp-fade",
    mode: "out-in"
  }, {
    default: _withId(function () {
      return [$options.blocks.length >= 20 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpFullWidthContainer, null, {
        sideSheet: _withId(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Transition"], {
            name: "sp-fadeMild",
            mode: "out-in"
          }, {
            default: _withId(function () {
              return [$data.highlightedBlock ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpBlockDetailSheet, {
                key: $options.blockSheetKey,
                block: $data.highlightedBlock
              }, null, 8, ["block"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)];
            }),
            _: 1
          })])];
        }),
        mainContent: _withId(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_3, [_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpBlockChain, {
            blocks: $options.blocks,
            onBlockSelected: $options.setBlock
          }, null, 8, ["blocks", "onBlockSelected"])])])];
        }),
        _: 1
      })])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpBox), _hoisted_8])]))];
    }),
    _: 1
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockExplorer/SpBlockExplorer.vue?vue&type=template&id=485304ce&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./src/components/legacy/SpFullWidthContainer/index.js
var SpFullWidthContainer = __webpack_require__("dace");

// EXTERNAL MODULE: ./src/components/legacy/SpBlockDetailSheet/index.js
var SpBlockDetailSheet = __webpack_require__("0c22");

// EXTERNAL MODULE: ./src/components/legacy/SpBlockChain/index.js
var SpBlockChain = __webpack_require__("0085");

// EXTERNAL MODULE: ./src/components/SpBox/index.js
var SpBox = __webpack_require__("b907");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockExplorer/SpBlockExplorer.vue?vue&type=script&lang=js


/*
import { mapGetters, mapMutations, mapActions } from 'vuex'
import blockHelpers from '../../helpers/block'
*/




/* harmony default export */ var SpBlockExplorervue_type_script_lang_js = ({
  name: 'SpBlockExplorer',
  components: {
    SpFullWidthContainer: SpFullWidthContainer["a" /* default */],
    SpBlockChain: SpBlockChain["a" /* default */],
    SpBlockDetailSheet: SpBlockDetailSheet["a" /* default */],
    SpBox: SpBox["a" /* default */]
  },
  data: function data() {
    return {
      isLoading: false,
      highlightedBlock: {}
    };
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'common', 'blocks'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `chain.common.blocks` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  computed: {
    blocks: function blocks() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/common/blocks/getBlocks'](20);
      } else {
        return [];
      }
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    },
    blockSheetKey: function blockSheetKey() {
      if (this.highlightedBlock && this.highlightedBlock.data) {
        return this.highlightedBlock.data.blockMsg.blockHash;
      }

      return '';
    }
  },
  methods: {
    setBlock: function setBlock(block) {
      this.highlightedBlock = block;
    }
  }
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockExplorer/SpBlockExplorer.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/legacy/SpBlockExplorer/SpBlockExplorer.vue?vue&type=style&index=0&id=485304ce&scoped=true&lang=css
var SpBlockExplorervue_type_style_index_0_id_485304ce_scoped_true_lang_css = __webpack_require__("e368");

// CONCATENATED MODULE: ./src/components/legacy/SpBlockExplorer/SpBlockExplorer.vue





SpBlockExplorervue_type_script_lang_js.render = render
SpBlockExplorervue_type_script_lang_js.__scopeId = "data-v-485304ce"

/* harmony default export */ var SpBlockExplorer = __webpack_exports__["a"] = (SpBlockExplorervue_type_script_lang_js);

/***/ }),

/***/ "bd65":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpWallet_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cf37");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpWallet', _SpWallet_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpWallet_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "bd6b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "be97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpTypeForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bb41");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpTypeForm', _SpTypeForm_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpTypeForm_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "bedb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpIconCircle2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("af4b");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpIconCircle2', _SpIconCircle2_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpIconCircle2_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "bf2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'

// pre-compute lookup table
var ALPHABET_MAP = {}
for (var z = 0; z < ALPHABET.length; z++) {
  var x = ALPHABET.charAt(z)

  if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous')
  ALPHABET_MAP[x] = z
}

function polymodStep (pre) {
  var b = pre >> 25
  return ((pre & 0x1FFFFFF) << 5) ^
    (-((b >> 0) & 1) & 0x3b6a57b2) ^
    (-((b >> 1) & 1) & 0x26508e6d) ^
    (-((b >> 2) & 1) & 0x1ea119fa) ^
    (-((b >> 3) & 1) & 0x3d4233dd) ^
    (-((b >> 4) & 1) & 0x2a1462b3)
}

function prefixChk (prefix) {
  var chk = 1
  for (var i = 0; i < prefix.length; ++i) {
    var c = prefix.charCodeAt(i)
    if (c < 33 || c > 126) return 'Invalid prefix (' + prefix + ')'

    chk = polymodStep(chk) ^ (c >> 5)
  }
  chk = polymodStep(chk)

  for (i = 0; i < prefix.length; ++i) {
    var v = prefix.charCodeAt(i)
    chk = polymodStep(chk) ^ (v & 0x1f)
  }
  return chk
}

function encode (prefix, words, LIMIT) {
  LIMIT = LIMIT || 90
  if ((prefix.length + 7 + words.length) > LIMIT) throw new TypeError('Exceeds length limit')

  prefix = prefix.toLowerCase()

  // determine chk mod
  var chk = prefixChk(prefix)
  if (typeof chk === 'string') throw new Error(chk)

  var result = prefix + '1'
  for (var i = 0; i < words.length; ++i) {
    var x = words[i]
    if ((x >> 5) !== 0) throw new Error('Non 5-bit word')

    chk = polymodStep(chk) ^ x
    result += ALPHABET.charAt(x)
  }

  for (i = 0; i < 6; ++i) {
    chk = polymodStep(chk)
  }
  chk ^= 1

  for (i = 0; i < 6; ++i) {
    var v = (chk >> ((5 - i) * 5)) & 0x1f
    result += ALPHABET.charAt(v)
  }

  return result
}

function __decode (str, LIMIT) {
  LIMIT = LIMIT || 90
  if (str.length < 8) return str + ' too short'
  if (str.length > LIMIT) return 'Exceeds length limit'

  // don't allow mixed case
  var lowered = str.toLowerCase()
  var uppered = str.toUpperCase()
  if (str !== lowered && str !== uppered) return 'Mixed-case string ' + str
  str = lowered

  var split = str.lastIndexOf('1')
  if (split === -1) return 'No separator character for ' + str
  if (split === 0) return 'Missing prefix for ' + str

  var prefix = str.slice(0, split)
  var wordChars = str.slice(split + 1)
  if (wordChars.length < 6) return 'Data too short'

  var chk = prefixChk(prefix)
  if (typeof chk === 'string') return chk

  var words = []
  for (var i = 0; i < wordChars.length; ++i) {
    var c = wordChars.charAt(i)
    var v = ALPHABET_MAP[c]
    if (v === undefined) return 'Unknown character ' + c
    chk = polymodStep(chk) ^ v

    // not in the checksum?
    if (i + 6 >= wordChars.length) continue
    words.push(v)
  }

  if (chk !== 1) return 'Invalid checksum for ' + str
  return { prefix: prefix, words: words }
}

function decodeUnsafe () {
  var res = __decode.apply(null, arguments)
  if (typeof res === 'object') return res
}

function decode (str) {
  var res = __decode.apply(null, arguments)
  if (typeof res === 'object') return res

  throw new Error(res)
}

function convert (data, inBits, outBits, pad) {
  var value = 0
  var bits = 0
  var maxV = (1 << outBits) - 1

  var result = []
  for (var i = 0; i < data.length; ++i) {
    value = (value << inBits) | data[i]
    bits += inBits

    while (bits >= outBits) {
      bits -= outBits
      result.push((value >> bits) & maxV)
    }
  }

  if (pad) {
    if (bits > 0) {
      result.push((value << (outBits - bits)) & maxV)
    }
  } else {
    if (bits >= inBits) return 'Excess padding'
    if ((value << (outBits - bits)) & maxV) return 'Non-zero padding'
  }

  return result
}

function toWordsUnsafe (bytes) {
  var res = convert(bytes, 8, 5, true)
  if (Array.isArray(res)) return res
}

function toWords (bytes) {
  var res = convert(bytes, 8, 5, true)
  if (Array.isArray(res)) return res

  throw new Error(res)
}

function fromWordsUnsafe (words) {
  var res = convert(words, 5, 8, false)
  if (Array.isArray(res)) return res
}

function fromWords (words) {
  var res = convert(words, 5, 8, false)
  if (Array.isArray(res)) return res

  throw new Error(res)
}

module.exports = {
  decodeUnsafe: decodeUnsafe,
  decode: decode,
  encode: encode,
  toWordsUnsafe: toWordsUnsafe,
  toWords: toWords,
  fromWordsUnsafe: fromWordsUnsafe,
  fromWords: fromWords
}


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c2ae":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("e372").PassThrough


/***/ }),

/***/ "c32d":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6a7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpStandardIconText_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a581");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpStandardIconText', _SpStandardIconText_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpStandardIconText_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "c957":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca46":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBlockDisplayFull_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d1ca");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBlockDisplayFull', _SpBlockDisplayFull_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBlockDisplayFull_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cbf9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cdef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toRfc3339 = exports.fromRfc3339 = void 0;
const readonly_date_1 = __webpack_require__("5d92");
const rfc3339Matcher = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(\.\d{1,9})?((?:[+-]\d{2}:\d{2})|Z)$/;
function padded(integer, length = 2) {
    const filled = "00000" + integer.toString();
    return filled.substring(filled.length - length);
}
function fromRfc3339(str) {
    const matches = rfc3339Matcher.exec(str);
    if (!matches) {
        throw new Error("Date string is not in RFC3339 format");
    }
    const year = +matches[1];
    const month = +matches[2];
    const day = +matches[3];
    const hour = +matches[4];
    const minute = +matches[5];
    const second = +matches[6];
    // fractional seconds match either undefined or a string like ".1", ".123456789"
    const milliSeconds = matches[7] ? Math.floor(+matches[7] * 1000) : 0;
    let tzOffsetSign;
    let tzOffsetHours;
    let tzOffsetMinutes;
    // if timezone is undefined, it must be Z or nothing (otherwise the group would have captured).
    if (matches[8] === "Z") {
        tzOffsetSign = 1;
        tzOffsetHours = 0;
        tzOffsetMinutes = 0;
    }
    else {
        tzOffsetSign = matches[8].substring(0, 1) === "-" ? -1 : 1;
        tzOffsetHours = +matches[8].substring(1, 3);
        tzOffsetMinutes = +matches[8].substring(4, 6);
    }
    const tzOffset = tzOffsetSign * (tzOffsetHours * 60 + tzOffsetMinutes) * 60; // seconds
    return new readonly_date_1.ReadonlyDate(readonly_date_1.ReadonlyDate.UTC(year, month - 1, day, hour, minute, second, milliSeconds) - tzOffset * 1000);
}
exports.fromRfc3339 = fromRfc3339;
function toRfc3339(date) {
    const year = date.getUTCFullYear();
    const month = padded(date.getUTCMonth() + 1);
    const day = padded(date.getUTCDate());
    const hour = padded(date.getUTCHours());
    const minute = padded(date.getUTCMinutes());
    const second = padded(date.getUTCSeconds());
    const ms = padded(date.getUTCMilliseconds(), 3);
    return `${year}-${month}-${day}T${hour}:${minute}:${second}.${ms}Z`;
}
exports.toRfc3339 = toRfc3339;
//# sourceMappingURL=rfc3339.js.map

/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cee3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromAscii = exports.toAscii = void 0;
function toAscii(input) {
    const toNums = (str) => str.split("").map((x) => {
        const charCode = x.charCodeAt(0);
        // 0x00–0x1F control characters
        // 0x20–0x7E printable characters
        // 0x7F delete character
        // 0x80–0xFF out of 7 bit ascii range
        if (charCode < 0x20 || charCode > 0x7e) {
            throw new Error("Cannot encode character that is out of printable ASCII range: " + charCode);
        }
        return charCode;
    });
    return Uint8Array.from(toNums(input));
}
exports.toAscii = toAscii;
function fromAscii(data) {
    const fromNums = (listOfNumbers) => listOfNumbers.map((x) => {
        // 0x00–0x1F control characters
        // 0x20–0x7E printable characters
        // 0x7F delete character
        // 0x80–0xFF out of 7 bit ascii range
        if (x < 0x20 || x > 0x7e) {
            throw new Error("Cannot decode character that is out of printable ASCII range: " + x);
        }
        return String.fromCharCode(x);
    });
    return fromNums(Array.from(data)).join("");
}
exports.fromAscii = fromAscii;
//# sourceMappingURL=ascii.js.map

/***/ }),

/***/ "cf37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpWallet/SpWallet.vue?vue&type=template&id=ee56f358

var _hoisted_1 = {
  key: 0,
  class: "sp-wallet"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  class: "SpButtonText"
};
var _hoisted_4 = {
  key: 1
};

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "SpButtonText"
}, "SIGN IN", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpAccountList = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpAccountList");

  var _component_SpWalletList = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpWalletList");

  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [$options.loggedIn ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.toggleAccountList();
    }),
    class: "SpButton"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_3, [$options.walletName ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], {
    key: 0
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.walletName) + ":", 1)], 64)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.currentAccount), 1)])]), $data.showAccounts && $options.walletName ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpAccountList, {
    key: 0,
    onAccountSelected: _cache[2] || (_cache[2] = function ($event) {
      return $data.showAccounts = false;
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.toggleWalletList();
    }),
    class: "SpButton"
  }, [_hoisted_5]), $data.showWallets ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpWalletList, {
    key: 0,
    onWalletSelected: _cache[4] || (_cache[4] = function ($event) {
      return $data.showWallets = false;
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)]))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpWallet/SpWallet.vue?vue&type=template&id=ee56f358

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./src/components/SpAccountList/index.js
var SpAccountList = __webpack_require__("8243");

// EXTERNAL MODULE: ./src/components/SpWalletList/index.js
var SpWalletList = __webpack_require__("36b4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpWallet/SpWallet.vue?vue&type=script&lang=js



/* harmony default export */ var SpWalletvue_type_script_lang_js = ({
  name: 'SpWallet',
  components: {
    SpAccountList: SpAccountList["a" /* default */],
    SpWalletList: SpWalletList["a" /* default */]
  },
  data: function data() {
    return {
      showWallets: false,
      showAccounts: false
    };
  },
  computed: {
    currentAccount: function currentAccount() {
      if (this._depsLoaded) {
        if (this.loggedIn) {
          return this.$store.getters['chain/common/wallet/address'];
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    walletName: function walletName() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/common/wallet/walletName'];
      } else {
        return '';
      }
    },
    loggedIn: function loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/common/wallet/loggedIn'];
      } else {
        return false;
      }
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'common', 'wallet'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module ' + this.module + ' has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  methods: {
    toggleWalletList: function toggleWalletList() {
      this.showWallets = !this.showWallets;

      if (this.showWallets) {
        this.showAccounts = false;
        this.$emit('dropdown-opened');
      }
    },
    closeDropdowns: function closeDropdowns() {
      this.showAccounts = false;
      this.showWallets = false;
    },
    toggleAccountList: function toggleAccountList() {
      if (this.walletName) {
        this.showAccounts = !this.showAccounts;

        if (this.showAccounts) {
          this.showWallets = false;
          this.$emit('dropdown-opened');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpWallet/SpWallet.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpWallet/SpWallet.vue



SpWalletvue_type_script_lang_js.render = render

/* harmony default export */ var SpWallet = __webpack_exports__["a"] = (SpWalletvue_type_script_lang_js);

/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d13c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpIconLock3_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f9f1");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpIconLock3', _SpIconLock3_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpIconLock3_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "d17b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("e372").Transform


/***/ }),

/***/ "d1ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBlockDisplayFull/SpBlockDisplayFull.vue?vue&type=template&id=80ea33da

var _hoisted_1 = {
  class: "SpBlockDisplayFull"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("pre", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.block), 1)]);
}
// CONCATENATED MODULE: ./src/components/SpBlockDisplayFull/SpBlockDisplayFull.vue?vue&type=template&id=80ea33da

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpBlockDisplayFull/SpBlockDisplayFull.vue?vue&type=script&lang=js
/* harmony default export */ var SpBlockDisplayFullvue_type_script_lang_js = ({
  name: 'SpBlockDisplayFull',
  props: {
    block: Object
  },
  data: function data() {
    return {
      txs: []
    };
  }
});
// CONCATENATED MODULE: ./src/components/SpBlockDisplayFull/SpBlockDisplayFull.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpBlockDisplayFull/SpBlockDisplayFull.vue



SpBlockDisplayFullvue_type_script_lang_js.render = render

/* harmony default export */ var SpBlockDisplayFull = __webpack_exports__["a"] = (SpBlockDisplayFullvue_type_script_lang_js);

/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d485":
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__("faa1").EventEmitter;
var inherits = __webpack_require__("3fb5");

inherits(Stream, EE);
Stream.Readable = __webpack_require__("e372");
Stream.Writable = __webpack_require__("2c63");
Stream.Duplex = __webpack_require__("0960");
Stream.Transform = __webpack_require__("d17b");
Stream.PassThrough = __webpack_require__("c2ae");

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d5de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpArrow_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("11ee");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpArrow', _SpArrow_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpArrow_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "d612":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBlockDisplaySmall_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1229");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBlockDisplaySmall', _SpBlockDisplaySmall_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBlockDisplaySmall_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "d658":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpLoaderIconText_vue_vue_type_style_index_0_id_5a1ec9fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a2e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpLoaderIconText_vue_vue_type_style_index_0_id_5a1ec9fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpLoaderIconText_vue_vue_type_style_index_0_id_5a1ec9fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d65c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockChain_vue_vue_type_style_index_0_id_6ef24e8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f12");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockChain_vue_vue_type_style_index_0_id_6ef24e8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockChain_vue_vue_type_style_index_0_id_6ef24e8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d8bf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d943":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockDetailSheet/SpBlockDetailSheet.vue?vue&type=template&id=0b3e37e6&scoped=true




var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-0b3e37e6");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-0b3e37e6");

var _hoisted_1 = {
  key: 0,
  class: ['sheet -is-empty']
};
var _hoisted_2 = {
  key: 1,
  class: "sheet"
};
var _hoisted_3 = {
  class: "sheet__header"
};
var _hoisted_4 = {
  class: "sheet__header-main"
};
var _hoisted_5 = {
  class: "sheet__header-side"
};
var _hoisted_6 = {
  class: "sheet__header-side-top"
};
var _hoisted_7 = {
  class: "sheet__header-side-btm"
};
var _hoisted_8 = {
  class: "sheet__main"
};
var _hoisted_9 = {
  key: 0,
  class: "txs"
};
var _hoisted_10 = {
  class: "txs__header"
};

var _hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", {
  class: "txs__header-title"
}, "Transactions", -1);

var _hoisted_12 = {
  class: "txs__header-note"
};
var _hoisted_13 = {
  key: 0
};
var _hoisted_14 = {
  key: 1,
  class: "txs__header-note-warn"
};
var _hoisted_15 = {
  class: "tx__main"
};
var _hoisted_16 = {
  key: 0,
  class: "tx__error"
};

var _hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
  class: "tx__error-title"
}, "Error", -1);

var _hoisted_18 = {
  class: "tx__error-msg"
};
var _hoisted_19 = {
  class: "tx__main-cards"
};
var _hoisted_20 = {
  class: "tx__side"
};
var _hoisted_21 = {
  class: "tx__info"
};

var _hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", {
  class: "tx__title"
}, "Tx Info", -1);

var _hoisted_23 = {
  class: "tx__info-container"
};
var _hoisted_24 = {
  class: "tx__info-content tx-info"
};

var _hoisted_25 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
  class: "tx-info__title"
}, "Hash", -1);

var _hoisted_26 = {
  class: "tx__info-content tx-info"
};

var _hoisted_27 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
  class: "tx-info__title"
}, "Gas Used / Wanted", -1);

var _hoisted_28 = {
  class: "tx-info__content"
};
var _hoisted_29 = {
  class: "tx__info-content tx-info"
};

var _hoisted_30 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
  class: "tx-info__title"
}, "Fee", -1);

var _hoisted_31 = {
  class: "tx-info__content"
};
var _hoisted_32 = {
  key: 0,
  class: "tx__info-content tx-info"
};

var _hoisted_33 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
  class: "tx-info__title"
}, "Memo", -1);

var _hoisted_34 = {
  class: "tx-info__content"
};
var _hoisted_35 = {
  key: 1,
  class: "txs -is-empty"
};

var _hoisted_36 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", null, "0 Transactions", -1);

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpBlockCopyIconText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpBlockCopyIconText");

  var _component_SpYamlCards = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpYamlCards");

  return !$props.block.details ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, " Fetching block data ")) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.block.height), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpBlockCopyIconText, {
    class: "copy-icon-text",
    text: $props.block.hash.slice(0, 15) + '...',
    link: "/block/".concat($props.block.height),
    "copy-content": $props.block.hash,
    "tooltip-text": 'BlockHash is copied'
  }, null, 8, ["text", "link", "copy-content"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.getFmtTime($props.block.timestamp)), 1)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_8, [$props.block.details.data.txs && $props.block.details.data.txs.length > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_10, [_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($props.block.details.data.txs.length), 1), $options.failedTxsCount ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("span", _hoisted_13, " / ")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), $options.failedTxsCount ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("span", _hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.failedTxsCount) + " error", 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)])]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($props.block.txDecoded, function (tx, txIndex) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
      key: txIndex + tx.txhash,
      class: "txs__tx tx"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_15, [tx.meta.code ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_16, [_hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(tx.meta.log), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpYamlCards, {
      contents: tx.body.messages,
      "card-type": $options.getCardCounts(tx.body.messages) > 1 ? 'Messages' : 'Message'
    }, null, 8, ["contents", "card-type"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_21, [_hoisted_22, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_23, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_24, [_hoisted_25, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpBlockCopyIconText, {
      class: "copy-icon-text",
      text: tx.txHash,
      link: '/transaction/' + tx.txHash,
      "copy-content": tx.txHash,
      "tooltip-text": 'TxHash is copied',
      "tooltip-direction": 'left'
    }, null, 8, ["text", "link", "copy-content"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_26, [_hoisted_27, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", _hoisted_28, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])("".concat(tx.meta.gas_used, " / ").concat(tx.meta.gas_wanted)), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_29, [_hoisted_30, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", _hoisted_31, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.getTxFee(tx)), 1)]), tx.body.memo ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_32, [_hoisted_33, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("p", _hoisted_34, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(tx.body.memo), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)])])])]);
  }), 128))])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_35, [_hoisted_36]))])]));
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockDetailSheet/SpBlockDetailSheet.vue?vue&type=template&id=0b3e37e6&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
var es_array_flat_map = __webpack_require__("5db7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
var es_array_unscopables_flat_map = __webpack_require__("73d9");

// EXTERNAL MODULE: external {"commonjs":"moment","commonjs2":"moment","root":"moment","amd":"moment"}
var external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_ = __webpack_require__("c32d");
var external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_);

// EXTERNAL MODULE: ./src/components/legacy/SpBlockCopyIconText/index.js
var SpBlockCopyIconText = __webpack_require__("8409");

// EXTERNAL MODULE: ./src/components/legacy/SpYamlCards/index.js
var SpYamlCards = __webpack_require__("292e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockDetailSheet/SpBlockDetailSheet.vue?vue&type=script&lang=js







/* harmony default export */ var SpBlockDetailSheetvue_type_script_lang_js = ({
  name: 'SpBlockDetailSheet',
  components: {
    SpBlockCopyIconText: SpBlockCopyIconText["a" /* default */],
    SpYamlCards: SpYamlCards["a" /* default */]
  },
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  computed: {
    failedTxsCount: function failedTxsCount() {
      return this.block.txDecoded.filter(function (tx) {
        return tx.meta.code;
      }).length;
    }
  },
  watch: {
    block: function block(newBlock) {
      console.log(newBlock);
    }
  },
  methods: {
    getFmtTime: function getFmtTime(time) {
      var momentTime = external_commonjs_moment_commonjs2_moment_root_moment_amd_moment_default()(time);
      return momentTime.format('MMM D YYYY, HH:mm:ss');
    },
    getTxFee: function getTxFee(tx) {
      var amount = tx.auth_info.fee.amount;
      if (!amount) return 'N/A';
      return amount.length < 1 ? '0' : "".concat(amount[0].amount, " ").concat(amount[0].denom);
    },
    getEvents: function getEvents(tx) {
      return tx.logs.flatMap(function (log) {
        return log.events;
      });
    },
    getCardCounts: function getCardCounts(contents) {
      return contents.length;
    }
  }
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockDetailSheet/SpBlockDetailSheet.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/legacy/SpBlockDetailSheet/SpBlockDetailSheet.vue?vue&type=style&index=0&id=0b3e37e6&scoped=true&lang=css
var SpBlockDetailSheetvue_type_style_index_0_id_0b3e37e6_scoped_true_lang_css = __webpack_require__("6ab3");

// CONCATENATED MODULE: ./src/components/legacy/SpBlockDetailSheet/SpBlockDetailSheet.vue





SpBlockDetailSheetvue_type_script_lang_js.render = render
SpBlockDetailSheetvue_type_script_lang_js.__scopeId = "data-v-0b3e37e6"

/* harmony default export */ var SpBlockDetailSheet = __webpack_exports__["a"] = (SpBlockDetailSheetvue_type_script_lang_js);

/***/ }),

/***/ "d98b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d9a0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "da4d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockCopyIconText/SpBlockCopyIconText.vue?vue&type=template&id=c94dedde&scoped=true



var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-c94dedde");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpIconText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpIconText");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpIconText, {
    class: "copy-icon-text",
    text: $props.text,
    link: $props.link,
    "icon-type": 'copy',
    "is-icon-clickable": true,
    "tooltip-option": 'iconWrapper',
    "tooltip-states": {
      text: $data.dynamicTooltipText,
      state: $options.tooltipState
    },
    "tooltip-direction": $props.tooltipDirection,
    onIconClicked: $options.handleClicked
  }, null, 8, ["text", "link", "tooltip-states", "tooltip-direction", "onIconClicked"]);
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockCopyIconText/SpBlockCopyIconText.vue?vue&type=template&id=c94dedde&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./src/components/SpIconText/index.js
var SpIconText = __webpack_require__("1c66");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/legacy/SpBlockCopyIconText/SpBlockCopyIconText.vue?vue&type=script&lang=js



var COPY_STATES = {
  EMPTY: 'EMPTY',
  COPYING: 'COPYING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
};
/* harmony default export */ var SpBlockCopyIconTextvue_type_script_lang_js = ({
  name: 'SpBlockCopyIconText',
  components: {
    SpIconText: SpIconText["a" /* default */]
  },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    },
    copyContent: {
      type: String,
      default: ''
    },
    tooltipText: {
      type: String,
      default: null
    },
    tooltipDirection: {
      type: String,
      default: 'right',
      validator: function validator(value) {
        return ['top', 'right', 'left'].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {
      copyState: COPY_STATES.EMPTY,
      dynamicTooltipText: ''
    };
  },
  computed: {
    tooltipState: function tooltipState() {
      switch (this.copyState) {
        case COPY_STATES.EMPTY:
          return false;

        case COPY_STATES.COPYING:
        case COPY_STATES.SUCCESS:
        case COPY_STATES.FAIL:
          return true;

        default:
          return false;
      }
    }
  },
  watch: {
    tooltipState: function tooltipState() {
      if (this.tooltipState) {
        switch (this.copyState) {
          case COPY_STATES.COPYING:
            this.dynamicTooltipText = 'Copying data...';
            break;

          case COPY_STATES.SUCCESS:
            this.dynamicTooltipText = this.tooltipText ? this.tooltipText : 'API URL is copied';
            break;

          case COPY_STATES.FAIL:
            this.dynamicTooltipText = 'Error copying data';
            break;

          default:
            this.dynamicTooltipText = 'Copying data...';
            break;
        }
      }
    }
  },
  methods: {
    setCopyState: function setCopyState(state) {
      var fmtState = Object.keys(COPY_STATES).filter(function (key) {
        return state === key;
      }).length < 0 ? COPY_STATES.EMPTY : state;
      this.copyState = fmtState;
    },
    handleCopy: function handleCopy() {
      function fallbackCopyTextToClipboard(text, sucessCallback, failedCallback) {
        var textArea = document.createElement('textarea');
        textArea.value = text; // Avoid scrolling to bottom

        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          if (sucessCallback) sucessCallback();
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
          if (failedCallback) failedCallback();
        }

        document.body.removeChild(textArea);
      }

      function copyTextToClipboard(text, sucessCallback, failedCallback) {
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(text);
          return;
        }

        navigator.clipboard.writeText(text).then(function () {
          if (sucessCallback) sucessCallback();
        }, function (err) {
          console.error('Async: Could not copy text: ', err);
          if (failedCallback) failedCallback();
        });
      }

      function actionCallback() {
        var isSuccess = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var envThis = arguments.length > 1 ? arguments[1] : undefined;
        return function () {
          if (isSuccess) {
            envThis.setCopyState(COPY_STATES.SUCCESS);
          } else {
            envThis.setCopyState(COPY_STATES.FAIL);
          }

          setTimeout(function () {
            envThis.setCopyState(COPY_STATES.EMPTY);
          }, 1000);
        };
      }
      /*
          *
          // 1. Set copying status to COPYING
          *
          */


      this.setCopyState(COPY_STATES.COPYING);
      /*
          *
          // 2. Init copy process
          *
          */

      copyTextToClipboard(this.copyContent, actionCallback(true, this), actionCallback(false, this));
    },
    handleClicked: function handleClicked() {
      this.handleCopy();
    }
  }
});
// CONCATENATED MODULE: ./src/components/legacy/SpBlockCopyIconText/SpBlockCopyIconText.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/legacy/SpBlockCopyIconText/SpBlockCopyIconText.vue?vue&type=style&index=0&id=c94dedde&scoped=true&lang=css
var SpBlockCopyIconTextvue_type_style_index_0_id_c94dedde_scoped_true_lang_css = __webpack_require__("4224");

// CONCATENATED MODULE: ./src/components/legacy/SpBlockCopyIconText/SpBlockCopyIconText.vue





SpBlockCopyIconTextvue_type_script_lang_js.render = render
SpBlockCopyIconTextvue_type_script_lang_js.__scopeId = "data-v-c94dedde"

/* harmony default export */ var SpBlockCopyIconText = __webpack_exports__["a"] = (SpBlockCopyIconTextvue_type_script_lang_js);

/***/ }),

/***/ "da4d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpWalletMenu/SpWalletMenu.vue?vue&type=template&id=eccccb24


var _hoisted_1 = {
  class: "sp-wallet-menu-items"
};
var _hoisted_2 = {
  key: 0,
  class: "sp-wallet-menu-item"
};
var _hoisted_3 = {
  class: "sp-wallet-menu-item__info"
};
var _hoisted_4 = {
  class: "sp-text sp-bold"
};

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("br", null, null, -1);

var _hoisted_6 = {
  key: 0,
  class: "sp-text"
};
var _hoisted_7 = {
  key: 1,
  class: "sp-text"
};
var _hoisted_8 = {
  class: "sp-wallet-menu-item__status"
};
var _hoisted_9 = {
  class: "sp-wallet-menu-item__info"
};

var _hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("br", null, null, -1);

var _hoisted_11 = {
  key: 0,
  class: "sp-text"
};
var _hoisted_12 = {
  key: 1,
  class: "sp-text"
};
var _hoisted_13 = {
  class: "sp-wallet-menu-item__status"
};

var _hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createStaticVNode"])("<div class=\"sp-dash\"></div><div class=\"sp-wallet-menu-action\"><div class=\"sp-wallet-menu-action__icon\"><span class=\"sp-icon sp-icon-Settings\"></span></div><div class=\"sp-wallet-menu-action__text sp-text\">Manage Wallets</div></div><div class=\"sp-wallet-menu-action\"><div class=\"sp-wallet-menu-action__icon\"><span class=\"sp-icon sp-icon-AddNew\"></span></div><div class=\"sp-wallet-menu-action__text sp-text\">Add New Wallet</div></div>", 3);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
    key: 0,
    class: ["sp-wallet-menu sp-rounded", {
      'sp-opened': $data.opened
    }]
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    class: "sp-wallet-menu__toggle",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.opened = !$data.opened;
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
    class: ["sp-icon", {
      'sp-icon-DownCaret': !$data.opened,
      'sp-icon-UpCaret': $data.opened
    }]
  }, null, 2)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_1, [$options.topWallet ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    class: "sp-wallet-menu-item__avatar",
    innerHTML: $options.getAvatar($options.topWallet.name)
  }, null, 8, ["innerHTML"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    class: "sp-wallet-menu-item__avatar-shadow",
    innerHTML: $options.getAvatar($options.topWallet.name)
  }, null, 8, ["innerHTML"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.topWallet.name), 1), _hoisted_5, $options.topWallet.name == $options.walletName ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("span", _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.currentAccount), 1)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("span", _hoisted_7, " Locked "))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
    class: ["sp-icon", {
      'sp-icon-Unlock': $options.topWallet.name == $options.walletName,
      'sp-icon-Lock': $options.topWallet.name != $options.walletName
    }]
  }, null, 2)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderList"])($options.restWallets, function (wallet, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
      class: "sp-wallet-menu-item",
      key: wallet.name
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
      class: "sp-wallet-menu-item__avatar",
      innerHTML: $options.getAvatar(wallet.name)
    }, null, 8, ["innerHTML"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
      class: "sp-wallet-menu-item__avatar-shadow",
      innerHTML: $options.getAvatar(wallet.name)
    }, null, 8, ["innerHTML"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
      class: ["sp-text sp-bold", {
        'sp-active': !$options.topWallet && index == 0
      }]
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])(wallet.name), 3), _hoisted_10, wallet.name == $options.walletName ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("span", _hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.currentAccount), 1)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("span", _hoisted_12, " Locked "))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
      class: ["sp-icon", {
        'sp-icon-Unock': wallet.name == $options.walletName,
        'sp-icon-Lock': wallet.name != $options.walletName
      }]
    }, null, 2)])]);
  }), 128)), _hoisted_14])], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpWalletMenu/SpWalletMenu.vue?vue&type=template&id=eccccb24

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/gradient-avatar/index.js
var gradient_avatar = __webpack_require__("7ee7");
var gradient_avatar_default = /*#__PURE__*/__webpack_require__.n(gradient_avatar);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpWalletMenu/SpWalletMenu.vue?vue&type=script&lang=js







//import * as bip39 from 'bip39'


function hash(e) {
  function h(a, b) {
    var c, d, e, f, g;
    e = a & 2147483648;
    f = b & 2147483648;
    c = a & 1073741824;
    d = b & 1073741824;
    g = (a & 1073741823) + (b & 1073741823);
    return c & d ? g ^ 2147483648 ^ e ^ f : c | d ? g & 1073741824 ? g ^ 3221225472 ^ e ^ f : g ^ 1073741824 ^ e ^ f : g ^ e ^ f;
  }

  function k(a, b, c, d, e, f, g) {
    a = h(a, h(h(b & c | ~b & d, e), g));
    return h(a << f | a >>> 32 - f, b);
  }

  function l(a, b, c, d, e, f, g) {
    a = h(a, h(h(b & d | c & ~d, e), g));
    return h(a << f | a >>> 32 - f, b);
  }

  function m(a, b, d, c, e, f, g) {
    a = h(a, h(h(b ^ d ^ c, e), g));
    return h(a << f | a >>> 32 - f, b);
  }

  function n(a, b, d, c, e, f, g) {
    a = h(a, h(h(d ^ (b | ~c), e), g));
    return h(a << f | a >>> 32 - f, b);
  }

  function p(a) {
    var b = '',
        d = '',
        c;

    for (c = 0; 3 >= c; c++) {
      d = a >>> 8 * c & 255, d = '0' + d.toString(16), b += d.substr(d.length - 2, 2);
    }

    return b;
  }

  var f = [],
      q,
      r,
      s,
      t,
      a,
      b,
      c,
      d;

  e = function (a) {
    a = a.replace(/\r\n/g, '\n');

    for (var b = '', d = 0; d < a.length; d++) {
      var c = a.charCodeAt(d);
      128 > c ? b += String.fromCharCode(c) : (127 < c && 2048 > c ? b += String.fromCharCode(c >> 6 | 192) : (b += String.fromCharCode(c >> 12 | 224), b += String.fromCharCode(c >> 6 & 63 | 128)), b += String.fromCharCode(c & 63 | 128));
    }

    return b;
  }(e);

  f = function (b) {
    var a,
        c = b.length;
    a = c + 8;

    for (var d = 16 * ((a - a % 64) / 64 + 1), e = Array(d - 1), f = 0, g = 0; g < c;) {
      a = (g - g % 4) / 4, f = g % 4 * 8, e[a] |= b.charCodeAt(g) << f, g++;
    }

    a = (g - g % 4) / 4;
    e[a] |= 128 << g % 4 * 8;
    e[d - 2] = c << 3;
    e[d - 1] = c >>> 29;
    return e;
  }(e);

  a = 1732584193;
  b = 4023233417;
  c = 2562383102;
  d = 271733878;

  for (e = 0; e < f.length; e += 16) {
    q = a, r = b, s = c, t = d, a = k(a, b, c, d, f[e + 0], 7, 3614090360), d = k(d, a, b, c, f[e + 1], 12, 3905402710), c = k(c, d, a, b, f[e + 2], 17, 606105819), b = k(b, c, d, a, f[e + 3], 22, 3250441966), a = k(a, b, c, d, f[e + 4], 7, 4118548399), d = k(d, a, b, c, f[e + 5], 12, 1200080426), c = k(c, d, a, b, f[e + 6], 17, 2821735955), b = k(b, c, d, a, f[e + 7], 22, 4249261313), a = k(a, b, c, d, f[e + 8], 7, 1770035416), d = k(d, a, b, c, f[e + 9], 12, 2336552879), c = k(c, d, a, b, f[e + 10], 17, 4294925233), b = k(b, c, d, a, f[e + 11], 22, 2304563134), a = k(a, b, c, d, f[e + 12], 7, 1804603682), d = k(d, a, b, c, f[e + 13], 12, 4254626195), c = k(c, d, a, b, f[e + 14], 17, 2792965006), b = k(b, c, d, a, f[e + 15], 22, 1236535329), a = l(a, b, c, d, f[e + 1], 5, 4129170786), d = l(d, a, b, c, f[e + 6], 9, 3225465664), c = l(c, d, a, b, f[e + 11], 14, 643717713), b = l(b, c, d, a, f[e + 0], 20, 3921069994), a = l(a, b, c, d, f[e + 5], 5, 3593408605), d = l(d, a, b, c, f[e + 10], 9, 38016083), c = l(c, d, a, b, f[e + 15], 14, 3634488961), b = l(b, c, d, a, f[e + 4], 20, 3889429448), a = l(a, b, c, d, f[e + 9], 5, 568446438), d = l(d, a, b, c, f[e + 14], 9, 3275163606), c = l(c, d, a, b, f[e + 3], 14, 4107603335), b = l(b, c, d, a, f[e + 8], 20, 1163531501), a = l(a, b, c, d, f[e + 13], 5, 2850285829), d = l(d, a, b, c, f[e + 2], 9, 4243563512), c = l(c, d, a, b, f[e + 7], 14, 1735328473), b = l(b, c, d, a, f[e + 12], 20, 2368359562), a = m(a, b, c, d, f[e + 5], 4, 4294588738), d = m(d, a, b, c, f[e + 8], 11, 2272392833), c = m(c, d, a, b, f[e + 11], 16, 1839030562), b = m(b, c, d, a, f[e + 14], 23, 4259657740), a = m(a, b, c, d, f[e + 1], 4, 2763975236), d = m(d, a, b, c, f[e + 4], 11, 1272893353), c = m(c, d, a, b, f[e + 7], 16, 4139469664), b = m(b, c, d, a, f[e + 10], 23, 3200236656), a = m(a, b, c, d, f[e + 13], 4, 681279174), d = m(d, a, b, c, f[e + 0], 11, 3936430074), c = m(c, d, a, b, f[e + 3], 16, 3572445317), b = m(b, c, d, a, f[e + 6], 23, 76029189), a = m(a, b, c, d, f[e + 9], 4, 3654602809), d = m(d, a, b, c, f[e + 12], 11, 3873151461), c = m(c, d, a, b, f[e + 15], 16, 530742520), b = m(b, c, d, a, f[e + 2], 23, 3299628645), a = n(a, b, c, d, f[e + 0], 6, 4096336452), d = n(d, a, b, c, f[e + 7], 10, 1126891415), c = n(c, d, a, b, f[e + 14], 15, 2878612391), b = n(b, c, d, a, f[e + 5], 21, 4237533241), a = n(a, b, c, d, f[e + 12], 6, 1700485571), d = n(d, a, b, c, f[e + 3], 10, 2399980690), c = n(c, d, a, b, f[e + 10], 15, 4293915773), b = n(b, c, d, a, f[e + 1], 21, 2240044497), a = n(a, b, c, d, f[e + 8], 6, 1873313359), d = n(d, a, b, c, f[e + 15], 10, 4264355552), c = n(c, d, a, b, f[e + 6], 15, 2734768916), b = n(b, c, d, a, f[e + 13], 21, 1309151649), a = n(a, b, c, d, f[e + 4], 6, 4149444226), d = n(d, a, b, c, f[e + 11], 10, 3174756917), c = n(c, d, a, b, f[e + 2], 15, 718787259), b = n(b, c, d, a, f[e + 9], 21, 3951481745), a = h(a, q), b = h(b, r), c = h(c, s), d = h(d, t);
  }

  return (p(a) + p(b) + p(c) + p(d)).toLowerCase();
}

/* harmony default export */ var SpWalletMenuvue_type_script_lang_js = ({
  name: 'SpWalletMenu',
  components: {},
  data: function data() {
    return {
      opened: false
    };
  },
  computed: {
    walletList: function walletList() {
      if (this._depsLoaded) {
        return this.$store.state.chain.common.wallet.wallets;
      } else {
        return [];
      }
    },
    currentAccount: function currentAccount() {
      if (this._depsLoaded) {
        if (this.loggedIn) {
          return this.$store.getters['chain/common/wallet/address'];
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    walletName: function walletName() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/common/wallet/walletName'];
      } else {
        return '';
      }
    },
    loggedIn: function loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/common/wallet/loggedIn'];
      } else {
        return false;
      }
    },
    lastWallet: function lastWallet() {
      if (this._depsLoaded) {
        return this.$store.getters['chain/common/wallet/lastWallet'];
      } else {
        return null;
      }
    },
    topWallet: function topWallet() {
      var _this = this;

      return this.walletList.filter(function (x) {
        return x.name == _this.lastWallet;
      })[0];
    },
    restWallets: function restWallets() {
      var _this2 = this;

      return this.walletList.filter(function (x) {
        return x.name != _this2.lastWallet;
      });
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'common', 'wallet'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module ' + this.module + ' has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  methods: {
    getAvatar: function getAvatar(name) {
      return gradient_avatar_default()(hash(name) + '', 64);
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpWalletMenu/SpWalletMenu.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpWalletMenu/SpWalletMenu.vue



SpWalletMenuvue_type_script_lang_js.render = render

/* harmony default export */ var SpWalletMenu = __webpack_exports__["a"] = (SpWalletMenuvue_type_script_lang_js);

/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "da96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpBankBalances_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5df4");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpBankBalances', _SpBankBalances_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpBankBalances_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dace":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpFullWidthContainer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("93c1");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpFullWidthContainer', _SpFullWidthContainer_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpFullWidthContainer_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dc14":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var pna = __webpack_require__("966d");
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = Object.create(__webpack_require__("3a7c"));
util.inherits = __webpack_require__("3fb5");
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__("b7d1")
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__("429b");
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__("8707").Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = __webpack_require__("4681");

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__("b19a");

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__("b19a");

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362"), __webpack_require__("c8ba")))

/***/ }),

/***/ "dcf4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconSynchronization1/SpIconSynchronization1.vue?vue&type=template&id=382934be


var _hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("path", {
  d: "M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"
})], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", null, [_hoisted_1]);
}
// CONCATENATED MODULE: ./src/components/SpIconSynchronization1/SpIconSynchronization1.vue?vue&type=template&id=382934be

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconSynchronization1/SpIconSynchronization1.vue?vue&type=script&lang=js
/* harmony default export */ var SpIconSynchronization1vue_type_script_lang_js = ({
  name: 'SpIconSynchronization1'
});
// CONCATENATED MODULE: ./src/components/SpIconSynchronization1/SpIconSynchronization1.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpIconSynchronization1/SpIconSynchronization1.vue



SpIconSynchronization1vue_type_script_lang_js.render = render

/* harmony default export */ var SpIconSynchronization1 = __webpack_exports__["a"] = (SpIconSynchronization1vue_type_script_lang_js);

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e07b":
/***/ (function(module, exports, __webpack_require__) {

var md5 = __webpack_require__("5a76")
var RIPEMD160 = __webpack_require__("b5ca")
var sha = __webpack_require__("69f2")
var Buffer = __webpack_require__("8707").Buffer

var checkParameters = __webpack_require__("7d2a")
var defaultEncoding = __webpack_require__("9f9d")
var toBuffer = __webpack_require__("8be6")

var ZEROS = Buffer.alloc(128)
var sizes = {
  md5: 16,
  sha1: 20,
  sha224: 28,
  sha256: 32,
  sha384: 48,
  sha512: 64,
  rmd160: 20,
  ripemd160: 20
}

function Hmac (alg, key, saltLen) {
  var hash = getDigest(alg)
  var blocksize = (alg === 'sha512' || alg === 'sha384') ? 128 : 64

  if (key.length > blocksize) {
    key = hash(key)
  } else if (key.length < blocksize) {
    key = Buffer.concat([key, ZEROS], blocksize)
  }

  var ipad = Buffer.allocUnsafe(blocksize + sizes[alg])
  var opad = Buffer.allocUnsafe(blocksize + sizes[alg])
  for (var i = 0; i < blocksize; i++) {
    ipad[i] = key[i] ^ 0x36
    opad[i] = key[i] ^ 0x5C
  }

  var ipad1 = Buffer.allocUnsafe(blocksize + saltLen + 4)
  ipad.copy(ipad1, 0, 0, blocksize)
  this.ipad1 = ipad1
  this.ipad2 = ipad
  this.opad = opad
  this.alg = alg
  this.blocksize = blocksize
  this.hash = hash
  this.size = sizes[alg]
}

Hmac.prototype.run = function (data, ipad) {
  data.copy(ipad, this.blocksize)
  var h = this.hash(ipad)
  h.copy(this.opad, this.blocksize)
  return this.hash(this.opad)
}

function getDigest (alg) {
  function shaFunc (data) {
    return sha(alg).update(data).digest()
  }
  function rmd160Func (data) {
    return new RIPEMD160().update(data).digest()
  }

  if (alg === 'rmd160' || alg === 'ripemd160') return rmd160Func
  if (alg === 'md5') return md5
  return shaFunc
}

function pbkdf2 (password, salt, iterations, keylen, digest) {
  checkParameters(iterations, keylen)
  password = toBuffer(password, defaultEncoding, 'Password')
  salt = toBuffer(salt, defaultEncoding, 'Salt')

  digest = digest || 'sha1'

  var hmac = new Hmac(digest, password, salt.length)

  var DK = Buffer.allocUnsafe(keylen)
  var block1 = Buffer.allocUnsafe(salt.length + 4)
  salt.copy(block1, 0, 0, salt.length)

  var destPos = 0
  var hLen = sizes[digest]
  var l = Math.ceil(keylen / hLen)

  for (var i = 1; i <= l; i++) {
    block1.writeUInt32BE(i, salt.length)

    var T = hmac.run(block1, hmac.ipad1)
    var U = T

    for (var j = 1; j < iterations; j++) {
      U = hmac.run(U, hmac.ipad2)
      for (var k = 0; k < hLen; k++) T[k] ^= U[k]
    }

    T.copy(DK, destPos)
    destPos += hLen
  }

  return DK
}

module.exports = pbkdf2


/***/ }),

/***/ "e13d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpSignIn/SpSignIn.vue?vue&type=template&id=3ccfe018

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  class: "container"
};
var _hoisted_3 = {
  class: "row"
};
var _hoisted_4 = {
  key: 0,
  class: "button"
};
var _hoisted_5 = {
  class: "button__text button__address"
};
var _hoisted_6 = {
  class: "button__icon"
};
var _hoisted_7 = {
  class: "button__text"
};
var _hoisted_8 = {
  class: "row"
};
var _hoisted_9 = {
  class: "container-dropdown"
};
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  class: "dropdown"
};
var _hoisted_12 = {
  class: "dropdown__textarea"
};

var _hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
  class: "dropdown__button__text"
}, "Import mnemonic", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpIconLock3 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpIconLock3");

  var _component_SpIconMagic1 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpIconMagic1");

  return $options.depsLoaded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_3, [$options.address ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.address), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    class: "button",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.buttonClick && $options.buttonClick.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpIconLock3)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["toDisplayString"])($options.address ? 'Log out' : 'Sign in '), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_9, [$data.dropdown && !$options.address ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("textarea", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.mnemonic = $event;
    }),
    placeholder: "Mnemonic...",
    class: "dropdown__textarea__input"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["vModelText"], $data.mnemonic]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    class: "dropdown__textarea__icon",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.mnemonicGenerate();
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(_component_SpIconMagic1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    class: ['dropdown__button', "button__disabled__".concat(!$options.mnemonicIsValid)],
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.mnemonicImport && $options.mnemonicImport.apply($options, arguments);
    })
  }, [_hoisted_13], 2)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true)])])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/SpSignIn/SpSignIn.vue?vue&type=template&id=3ccfe018

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./src/components/SpIconLock3/index.js
var SpIconLock3 = __webpack_require__("d13c");

// EXTERNAL MODULE: ./src/components/SpIconMagic1/index.js
var SpIconMagic1 = __webpack_require__("6143");

// EXTERNAL MODULE: ./node_modules/bip39/src/index.js
var src = __webpack_require__("29c9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpSignIn/SpSignIn.vue?vue&type=script&lang=js







/* harmony default export */ var SpSignInvue_type_script_lang_js = ({
  name: 'SpSignIn',
  components: {
    SpIconLock3: SpIconLock3["a" /* default */],
    SpIconMagic1: SpIconMagic1["a" /* default */]
  },
  data: function data() {
    return {
      mnemonic: '',
      dropdown: false
    };
  },
  computed: {
    mnemonicClean: function mnemonicClean() {
      return this.mnemonic.trim();
    },
    mnemonicIsValid: function mnemonicIsValid() {
      return src["validateMnemonic"](this.mnemonicClean);
    },
    address: function address() {
      if (this._depsLoaded) {
        var client = this.$store.getters['chain/common/wallet/client'];

        if (client) {
          return this.$store.getters['chain/common/wallet/address'];
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    depsLoaded: function depsLoaded() {
      return this._depsLoaded;
    }
  },
  beforeCreate: function beforeCreate() {
    var module = ['chain', 'common', 'wallet'];

    for (var i = 1; i <= module.length; i++) {
      var submod = module.slice(0, i);

      if (!this.$store.hasModule(submod)) {
        console.log('Module `chain.common.wallet` has not been registered!');
        this._depsLoaded = false;
        break;
      }
    }
  },
  methods: {
    buttonClick: function buttonClick() {
      if (this._depsLoaded) {
        if (this.address) {
          this.$store.dispatch('chain/common/wallet/signOut');
        } else {
          this.mnemonic = '';
          this.dropdown = !this.dropdown;
        }
      }
    },
    mnemonicImport: function mnemonicImport() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var mnemonic;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this._depsLoaded) {
                  _context.next = 5;
                  break;
                }

                if (!_this.mnemonicIsValid) {
                  _context.next = 5;
                  break;
                }

                mnemonic = _this.mnemonicClean;
                _context.next = 5;
                return _this.$store.dispatch('chain/common/wallet/createWalletWithMnemonic', {
                  mnemonic: mnemonic
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    mnemonicGenerate: function mnemonicGenerate() {
      var mnemonic = src["generateMnemonic"](256);
      this.mnemonic = mnemonic;
    },
    truncate: function truncate(string) {
      return "".concat(string.substring(0, 16), "...");
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpSignIn/SpSignIn.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpSignIn/SpSignIn.vue



SpSignInvue_type_script_lang_js.render = render

/* harmony default export */ var SpSignIn = __webpack_exports__["a"] = (SpSignInvue_type_script_lang_js);

/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e2df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpAutoSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c15");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpAutoSidebar', _SpAutoSidebar_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpAutoSidebar_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "e368":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockExplorer_vue_vue_type_style_index_0_id_485304ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("738f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockExplorer_vue_vue_type_style_index_0_id_485304ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpBlockExplorer_vue_vue_type_style_index_0_id_485304ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e372":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("ad71");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__("dc14");
exports.Duplex = __webpack_require__("b19a");
exports.Transform = __webpack_require__("27bf");
exports.PassThrough = __webpack_require__("780f");


/***/ }),

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e666":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = __webpack_require__("4250");

var Writable = __webpack_require__("19ea");

__webpack_require__("3fb5")(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "edb6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpInput/SpInput.vue?vue&type=template&id=d5c77782&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-d5c77782");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("input", {
    type: "text",
    placeholder: $props.placeholder,
    value: $props.value,
    disabled: $props.disabled,
    onInput: _cache[1] || (_cache[1] = function () {
      return $options.input && $options.input.apply($options, arguments);
    })
  }, null, 40, ["placeholder", "value", "disabled"])]);
});
// CONCATENATED MODULE: ./src/components/SpInput/SpInput.vue?vue&type=template&id=d5c77782&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpInput/SpInput.vue?vue&type=script&lang=js
/* harmony default export */ var SpInputvue_type_script_lang_js = ({
  name: 'SpInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    input: function input(event) {
      this.$emit('input', event.target.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpInput/SpInput.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpInput/SpInput.vue?vue&type=style&index=0&id=d5c77782&scoped=true&lang=css
var SpInputvue_type_style_index_0_id_d5c77782_scoped_true_lang_css = __webpack_require__("fc1a");

// CONCATENATED MODULE: ./src/components/SpInput/SpInput.vue





SpInputvue_type_script_lang_js.render = render
SpInputvue_type_script_lang_js.__scopeId = "data-v-d5c77782"

/* harmony default export */ var SpInput = __webpack_exports__["a"] = (SpInputvue_type_script_lang_js);

/***/ }),

/***/ "ee58":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpIconText_vue_vue_type_style_index_0_id_15f0a243_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7724");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpIconText_vue_vue_type_style_index_0_id_15f0a243_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpIconText_vue_vue_type_style_index_0_id_15f0a243_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ee93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).


var ERR_STREAM_PREMATURE_CLOSE = __webpack_require__("9d8a").codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;

/***/ }),

/***/ "eed9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusLED/SpStatusLED.vue?vue&type=template&id=b78ba320

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", {
    class: ["SpStatusLED", {
      active: $props.status
    }]
  }, null, 2);
}
// CONCATENATED MODULE: ./src/components/SpStatusLED/SpStatusLED.vue?vue&type=template&id=b78ba320

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpStatusLED/SpStatusLED.vue?vue&type=script&lang=js
/* harmony default export */ var SpStatusLEDvue_type_script_lang_js = ({
  name: 'SpStatusLED',
  props: ['status']
});
// CONCATENATED MODULE: ./src/components/SpStatusLED/SpStatusLED.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpStatusLED/SpStatusLED.vue



SpStatusLEDvue_type_script_lang_js.render = render

/* harmony default export */ var SpStatusLED = __webpack_exports__["a"] = (SpStatusLEDvue_type_script_lang_js);

/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f576":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var inherits = __webpack_require__("3fb5")
var HashBase = __webpack_require__("93e6")
var Buffer = __webpack_require__("8707").Buffer

var ARRAY16 = new Array(16)

function MD5 () {
  HashBase.call(this, 64)

  // state
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
}

inherits(MD5, HashBase)

MD5.prototype._update = function () {
  var M = ARRAY16
  for (var i = 0; i < 16; ++i) M[i] = this._block.readInt32LE(i * 4)

  var a = this._a
  var b = this._b
  var c = this._c
  var d = this._d

  a = fnF(a, b, c, d, M[0], 0xd76aa478, 7)
  d = fnF(d, a, b, c, M[1], 0xe8c7b756, 12)
  c = fnF(c, d, a, b, M[2], 0x242070db, 17)
  b = fnF(b, c, d, a, M[3], 0xc1bdceee, 22)
  a = fnF(a, b, c, d, M[4], 0xf57c0faf, 7)
  d = fnF(d, a, b, c, M[5], 0x4787c62a, 12)
  c = fnF(c, d, a, b, M[6], 0xa8304613, 17)
  b = fnF(b, c, d, a, M[7], 0xfd469501, 22)
  a = fnF(a, b, c, d, M[8], 0x698098d8, 7)
  d = fnF(d, a, b, c, M[9], 0x8b44f7af, 12)
  c = fnF(c, d, a, b, M[10], 0xffff5bb1, 17)
  b = fnF(b, c, d, a, M[11], 0x895cd7be, 22)
  a = fnF(a, b, c, d, M[12], 0x6b901122, 7)
  d = fnF(d, a, b, c, M[13], 0xfd987193, 12)
  c = fnF(c, d, a, b, M[14], 0xa679438e, 17)
  b = fnF(b, c, d, a, M[15], 0x49b40821, 22)

  a = fnG(a, b, c, d, M[1], 0xf61e2562, 5)
  d = fnG(d, a, b, c, M[6], 0xc040b340, 9)
  c = fnG(c, d, a, b, M[11], 0x265e5a51, 14)
  b = fnG(b, c, d, a, M[0], 0xe9b6c7aa, 20)
  a = fnG(a, b, c, d, M[5], 0xd62f105d, 5)
  d = fnG(d, a, b, c, M[10], 0x02441453, 9)
  c = fnG(c, d, a, b, M[15], 0xd8a1e681, 14)
  b = fnG(b, c, d, a, M[4], 0xe7d3fbc8, 20)
  a = fnG(a, b, c, d, M[9], 0x21e1cde6, 5)
  d = fnG(d, a, b, c, M[14], 0xc33707d6, 9)
  c = fnG(c, d, a, b, M[3], 0xf4d50d87, 14)
  b = fnG(b, c, d, a, M[8], 0x455a14ed, 20)
  a = fnG(a, b, c, d, M[13], 0xa9e3e905, 5)
  d = fnG(d, a, b, c, M[2], 0xfcefa3f8, 9)
  c = fnG(c, d, a, b, M[7], 0x676f02d9, 14)
  b = fnG(b, c, d, a, M[12], 0x8d2a4c8a, 20)

  a = fnH(a, b, c, d, M[5], 0xfffa3942, 4)
  d = fnH(d, a, b, c, M[8], 0x8771f681, 11)
  c = fnH(c, d, a, b, M[11], 0x6d9d6122, 16)
  b = fnH(b, c, d, a, M[14], 0xfde5380c, 23)
  a = fnH(a, b, c, d, M[1], 0xa4beea44, 4)
  d = fnH(d, a, b, c, M[4], 0x4bdecfa9, 11)
  c = fnH(c, d, a, b, M[7], 0xf6bb4b60, 16)
  b = fnH(b, c, d, a, M[10], 0xbebfbc70, 23)
  a = fnH(a, b, c, d, M[13], 0x289b7ec6, 4)
  d = fnH(d, a, b, c, M[0], 0xeaa127fa, 11)
  c = fnH(c, d, a, b, M[3], 0xd4ef3085, 16)
  b = fnH(b, c, d, a, M[6], 0x04881d05, 23)
  a = fnH(a, b, c, d, M[9], 0xd9d4d039, 4)
  d = fnH(d, a, b, c, M[12], 0xe6db99e5, 11)
  c = fnH(c, d, a, b, M[15], 0x1fa27cf8, 16)
  b = fnH(b, c, d, a, M[2], 0xc4ac5665, 23)

  a = fnI(a, b, c, d, M[0], 0xf4292244, 6)
  d = fnI(d, a, b, c, M[7], 0x432aff97, 10)
  c = fnI(c, d, a, b, M[14], 0xab9423a7, 15)
  b = fnI(b, c, d, a, M[5], 0xfc93a039, 21)
  a = fnI(a, b, c, d, M[12], 0x655b59c3, 6)
  d = fnI(d, a, b, c, M[3], 0x8f0ccc92, 10)
  c = fnI(c, d, a, b, M[10], 0xffeff47d, 15)
  b = fnI(b, c, d, a, M[1], 0x85845dd1, 21)
  a = fnI(a, b, c, d, M[8], 0x6fa87e4f, 6)
  d = fnI(d, a, b, c, M[15], 0xfe2ce6e0, 10)
  c = fnI(c, d, a, b, M[6], 0xa3014314, 15)
  b = fnI(b, c, d, a, M[13], 0x4e0811a1, 21)
  a = fnI(a, b, c, d, M[4], 0xf7537e82, 6)
  d = fnI(d, a, b, c, M[11], 0xbd3af235, 10)
  c = fnI(c, d, a, b, M[2], 0x2ad7d2bb, 15)
  b = fnI(b, c, d, a, M[9], 0xeb86d391, 21)

  this._a = (this._a + a) | 0
  this._b = (this._b + b) | 0
  this._c = (this._c + c) | 0
  this._d = (this._d + d) | 0
}

MD5.prototype._digest = function () {
  // create padding and handle blocks
  this._block[this._blockOffset++] = 0x80
  if (this._blockOffset > 56) {
    this._block.fill(0, this._blockOffset, 64)
    this._update()
    this._blockOffset = 0
  }

  this._block.fill(0, this._blockOffset, 56)
  this._block.writeUInt32LE(this._length[0], 56)
  this._block.writeUInt32LE(this._length[1], 60)
  this._update()

  // produce result
  var buffer = Buffer.allocUnsafe(16)
  buffer.writeInt32LE(this._a, 0)
  buffer.writeInt32LE(this._b, 4)
  buffer.writeInt32LE(this._c, 8)
  buffer.writeInt32LE(this._d, 12)
  return buffer
}

function rotl (x, n) {
  return (x << n) | (x >>> (32 - n))
}

function fnF (a, b, c, d, m, k, s) {
  return (rotl((a + ((b & c) | ((~b) & d)) + m + k) | 0, s) + b) | 0
}

function fnG (a, b, c, d, m, k, s) {
  return (rotl((a + ((b & d) | (c & (~d))) + m + k) | 0, s) + b) | 0
}

function fnH (a, b, c, d, m, k, s) {
  return (rotl((a + (b ^ c ^ d) + m + k) | 0, s) + b) | 0
}

function fnI (a, b, c, d, m, k, s) {
  return (rotl((a + ((c ^ (b | (~d)))) + m + k) | 0, s) + b) | 0
}

module.exports = MD5


/***/ }),

/***/ "f5b4":
/***/ (function(module, exports) {

const hue = (p, q, t) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1/6) return p + (q - p) * 6 * t;
  if (t < 1/2) return q;
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;

  return p;
}

const hslRgb = (h, s, l) => {
  let r, g, b;
  h = h / 360;

  if (s == 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue(p, q, h + 1/3);
    g = hue(p, q, h);
    b = hue(p, q, h - 1/3);
  }

  return [
    Math.max(0, Math.min(Math.round(r * 255), 255)),
    Math.max(0, Math.min(Math.round(g * 255), 255)),
    Math.max(0, Math.min(Math.round(b * 255), 255)) 
  ];
};

module.exports = hslRgb;

/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f64c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f9ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpTooltip_vue_vue_type_style_index_0_id_3fa92fbd_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d98b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpTooltip_vue_vue_type_style_index_0_id_3fa92fbd_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpTooltip_vue_vue_type_style_index_0_id_3fa92fbd_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f9f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconLock3/SpIconLock3.vue?vue&type=template&id=83abfa44


var _hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("path", {
  d: "M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z"
})], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", null, [_hoisted_1]);
}
// CONCATENATED MODULE: ./src/components/SpIconLock3/SpIconLock3.vue?vue&type=template&id=83abfa44

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpIconLock3/SpIconLock3.vue?vue&type=script&lang=js
/* harmony default export */ var SpIconLock3vue_type_script_lang_js = ({
  name: 'SpIconLock3'
});
// CONCATENATED MODULE: ./src/components/SpIconLock3/SpIconLock3.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/SpIconLock3/SpIconLock3.vue



SpIconLock3vue_type_script_lang_js.render = render

/* harmony default export */ var SpIconLock3 = __webpack_exports__["a"] = (SpIconLock3vue_type_script_lang_js);

/***/ }),

/***/ "faa1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SpBlockCard", function() { return /* reexport */ SpBlockCard["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBlockChain", function() { return /* reexport */ SpBlockChain["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBlockCopyIconText", function() { return /* reexport */ SpBlockCopyIconText["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBlockDetailSheet", function() { return /* reexport */ SpBlockDetailSheet["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBlockExplorer", function() { return /* reexport */ SpBlockExplorer["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpFullWidthContainer", function() { return /* reexport */ SpFullWidthContainer["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpYamlCards", function() { return /* reexport */ SpYamlCards["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpAccountList", function() { return /* reexport */ SpAccountList["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpArrow", function() { return /* reexport */ SpArrow["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpAutoSidebar", function() { return /* reexport */ SpAutoSidebar["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBankBalances", function() { return /* reexport */ SpBankBalances["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBlockDisplayFull", function() { return /* reexport */ SpBlockDisplayFull["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBlockDisplayLine", function() { return /* reexport */ SpBlockDisplayLine["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBlockDisplaySmall", function() { return /* reexport */ SpBlockDisplaySmall["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBlockHeight", function() { return /* reexport */ SpBlockHeight["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpBox", function() { return /* reexport */ SpBox["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpButton", function() { return /* reexport */ SpButton["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpCheck", function() { return /* reexport */ SpCheck["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpCopy", function() { return /* reexport */ SpCopy["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpH3", function() { return /* reexport */ SpH3["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpIconCircle2", function() { return /* reexport */ SpIconCircle2["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpIconLoading2", function() { return /* reexport */ SpIconLoading2["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpIconLock3", function() { return /* reexport */ SpIconLock3["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpIconMagic1", function() { return /* reexport */ SpIconMagic1["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpIconPaperPlane2", function() { return /* reexport */ SpIconPaperPlane2["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpIconSynchronization1", function() { return /* reexport */ SpIconSynchronization1["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpIconText", function() { return /* reexport */ SpIconText["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpInput", function() { return /* reexport */ SpInput["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpLatestBlocks", function() { return /* reexport */ SpLatestBlocks["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpLoaderIconText", function() { return /* reexport */ SpLoaderIconText["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpSignIn", function() { return /* reexport */ SpSignIn["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpSpinner", function() { return /* reexport */ SpSpinner["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpStandardIconText", function() { return /* reexport */ SpStandardIconText["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpStatusAPI", function() { return /* reexport */ SpStatusAPI["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpStatusLED", function() { return /* reexport */ SpStatusLED["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpStatusRPC", function() { return /* reexport */ SpStatusRPC["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpStatusWS", function() { return /* reexport */ SpStatusWS["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpSuccessDot", function() { return /* reexport */ SpSuccessDot["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpTokenSend", function() { return /* reexport */ SpTokenSend["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpTooltip", function() { return /* reexport */ SpTooltip["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpTypeForm", function() { return /* reexport */ SpTypeForm["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpTypeList", function() { return /* reexport */ SpTypeList["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpWallet", function() { return /* reexport */ SpWallet["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SpWalletMenu", function() { return /* reexport */ SpWalletMenu["a" /* default */]; });

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "SpBlockCard", function() { return SpBlockCard["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBlockChain", function() { return SpBlockChain["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBlockCopyIconText", function() { return SpBlockCopyIconText["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBlockDetailSheet", function() { return SpBlockDetailSheet["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBlockExplorer", function() { return SpBlockExplorer["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpFullWidthContainer", function() { return SpFullWidthContainer["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpYamlCards", function() { return SpYamlCards["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpAccountList", function() { return SpAccountList["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpArrow", function() { return SpArrow["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpAutoSidebar", function() { return SpAutoSidebar["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBankBalances", function() { return SpBankBalances["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBlockDisplayFull", function() { return SpBlockDisplayFull["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBlockDisplayLine", function() { return SpBlockDisplayLine["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBlockDisplaySmall", function() { return SpBlockDisplaySmall["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBlockHeight", function() { return SpBlockHeight["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpBox", function() { return SpBox["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpButton", function() { return SpButton["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpCheck", function() { return SpCheck["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpCopy", function() { return SpCopy["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpH3", function() { return SpH3["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpIconCircle2", function() { return SpIconCircle2["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpIconLoading2", function() { return SpIconLoading2["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpIconLock3", function() { return SpIconLock3["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpIconMagic1", function() { return SpIconMagic1["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpIconPaperPlane2", function() { return SpIconPaperPlane2["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpIconSynchronization1", function() { return SpIconSynchronization1["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpIconText", function() { return SpIconText["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpInput", function() { return SpInput["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpLatestBlocks", function() { return SpLatestBlocks["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpLoaderIconText", function() { return SpLoaderIconText["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpSignIn", function() { return SpSignIn["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpSpinner", function() { return SpSpinner["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpStandardIconText", function() { return SpStandardIconText["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpStatusAPI", function() { return SpStatusAPI["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpStatusLED", function() { return SpStatusLED["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpStatusRPC", function() { return SpStatusRPC["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpStatusWS", function() { return SpStatusWS["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpSuccessDot", function() { return SpSuccessDot["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpTokenSend", function() { return SpTokenSend["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpTooltip", function() { return SpTooltip["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpTypeForm", function() { return SpTypeForm["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpTypeList", function() { return SpTypeList["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpWallet", function() { return SpWallet["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "SpWalletMenu", function() { return SpWalletMenu["a" /* default */]; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./src/components/legacy/SpBlockCard/index.js
var SpBlockCard = __webpack_require__("2fa6");

// EXTERNAL MODULE: ./src/components/legacy/SpBlockChain/index.js
var SpBlockChain = __webpack_require__("0085");

// EXTERNAL MODULE: ./src/components/legacy/SpBlockCopyIconText/index.js
var SpBlockCopyIconText = __webpack_require__("8409");

// EXTERNAL MODULE: ./src/components/legacy/SpBlockDetailSheet/index.js
var SpBlockDetailSheet = __webpack_require__("0c22");

// EXTERNAL MODULE: ./src/components/legacy/SpBlockExplorer/index.js
var SpBlockExplorer = __webpack_require__("81f3");

// EXTERNAL MODULE: ./src/components/legacy/SpFullWidthContainer/index.js
var SpFullWidthContainer = __webpack_require__("dace");

// EXTERNAL MODULE: ./src/components/legacy/SpYamlCards/index.js
var SpYamlCards = __webpack_require__("292e");

// EXTERNAL MODULE: ./src/components/SpAccountList/index.js
var SpAccountList = __webpack_require__("8243");

// EXTERNAL MODULE: ./src/components/SpArrow/index.js
var SpArrow = __webpack_require__("d5de");

// EXTERNAL MODULE: ./src/components/SpAutoSidebar/index.js
var SpAutoSidebar = __webpack_require__("e2df");

// EXTERNAL MODULE: ./src/components/SpBankBalances/index.js
var SpBankBalances = __webpack_require__("da96");

// EXTERNAL MODULE: ./src/components/SpBlockDisplayFull/index.js
var SpBlockDisplayFull = __webpack_require__("ca46");

// EXTERNAL MODULE: ./src/components/SpBlockDisplayLine/index.js
var SpBlockDisplayLine = __webpack_require__("7114");

// EXTERNAL MODULE: ./src/components/SpBlockDisplaySmall/index.js
var SpBlockDisplaySmall = __webpack_require__("d612");

// EXTERNAL MODULE: ./src/components/SpBlockHeight/index.js
var SpBlockHeight = __webpack_require__("178d");

// EXTERNAL MODULE: ./src/components/SpBox/index.js
var SpBox = __webpack_require__("b907");

// EXTERNAL MODULE: ./src/components/SpButton/index.js
var SpButton = __webpack_require__("7549");

// EXTERNAL MODULE: ./src/components/SpCheck/index.js
var SpCheck = __webpack_require__("4452");

// EXTERNAL MODULE: ./src/components/SpCopy/index.js
var SpCopy = __webpack_require__("203b");

// EXTERNAL MODULE: ./src/components/SpH3/index.js
var SpH3 = __webpack_require__("94ae");

// EXTERNAL MODULE: ./src/components/SpIconCircle2/index.js
var SpIconCircle2 = __webpack_require__("bedb");

// EXTERNAL MODULE: ./src/components/SpIconLoading2/index.js
var SpIconLoading2 = __webpack_require__("57bd");

// EXTERNAL MODULE: ./src/components/SpIconLock3/index.js
var SpIconLock3 = __webpack_require__("d13c");

// EXTERNAL MODULE: ./src/components/SpIconMagic1/index.js
var SpIconMagic1 = __webpack_require__("6143");

// EXTERNAL MODULE: ./src/components/SpIconPaperPlane2/index.js
var SpIconPaperPlane2 = __webpack_require__("82435");

// EXTERNAL MODULE: ./src/components/SpIconSynchronization1/index.js
var SpIconSynchronization1 = __webpack_require__("21ad");

// EXTERNAL MODULE: ./src/components/SpIconText/index.js
var SpIconText = __webpack_require__("1c66");

// EXTERNAL MODULE: ./src/components/SpInput/index.js
var SpInput = __webpack_require__("783d");

// EXTERNAL MODULE: ./src/components/SpLatestBlocks/index.js
var SpLatestBlocks = __webpack_require__("2b35");

// EXTERNAL MODULE: ./src/components/SpLoaderIconText/index.js
var SpLoaderIconText = __webpack_require__("33e3");

// EXTERNAL MODULE: ./src/components/SpSignIn/index.js
var SpSignIn = __webpack_require__("4287");

// EXTERNAL MODULE: ./src/components/SpSpinner/index.js
var SpSpinner = __webpack_require__("8ce3");

// EXTERNAL MODULE: ./src/components/SpStandardIconText/index.js
var SpStandardIconText = __webpack_require__("c6a7");

// EXTERNAL MODULE: ./src/components/SpStatusAPI/index.js
var SpStatusAPI = __webpack_require__("5292");

// EXTERNAL MODULE: ./src/components/SpStatusLED/index.js
var SpStatusLED = __webpack_require__("ae78");

// EXTERNAL MODULE: ./src/components/SpStatusRPC/index.js
var SpStatusRPC = __webpack_require__("2560");

// EXTERNAL MODULE: ./src/components/SpStatusWS/index.js
var SpStatusWS = __webpack_require__("2fcb");

// EXTERNAL MODULE: ./src/components/SpSuccessDot/index.js
var SpSuccessDot = __webpack_require__("9e86");

// EXTERNAL MODULE: ./src/components/SpTokenSend/index.js
var SpTokenSend = __webpack_require__("3f43");

// EXTERNAL MODULE: ./src/components/SpTooltip/index.js
var SpTooltip = __webpack_require__("6216");

// EXTERNAL MODULE: ./src/components/SpTypeForm/index.js
var SpTypeForm = __webpack_require__("be97");

// EXTERNAL MODULE: ./src/components/SpTypeList/index.js
var SpTypeList = __webpack_require__("fb76");

// EXTERNAL MODULE: ./src/components/SpWallet/index.js
var SpWallet = __webpack_require__("bd65");

// EXTERNAL MODULE: ./src/components/SpWalletMenu/index.js
var SpWalletMenu = __webpack_require__("234e");

// CONCATENATED MODULE: ./src/components/index.js












































// EXTERNAL MODULE: ./src/styles/app.scss
var app = __webpack_require__("a1a3");

// CONCATENATED MODULE: ./src/index.js




var src_install = function install(instance) {
  for (var componentKey in components_namespaceObject) {
    instance.component(components_namespaceObject[componentKey].name, components_namespaceObject[componentKey]);
  }
};

/* harmony default export */ var src_0 = (src_install);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fb76":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export install */
/* harmony import */ var _SpTypeList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("171e");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('SpTypeList', _SpTypeList_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_SpTypeList_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "fbb5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpButton/SpButton.vue?vue&type=template&id=7f4f0899&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["withScopeId"])("data-v-7f4f0899");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["pushScopeId"])("data-v-7f4f0899");

var _hoisted_1 = {
  style: {
    "align-self": "stretch"
  }
};
var _hoisted_2 = {
  class: "send__text"
};
var _hoisted_3 = {
  class: "send__text__icon"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpIconLoading2 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpIconLoading2");

  var _component_SpIconPaperPlane2 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("SpIconPaperPlane2");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
    class: ['send', 'h3', "send__enabled__".concat(!$props.disabled)],
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.submit && $options.submit.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["renderSlot"])(_ctx.$slots, "default"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", _hoisted_3, [$props.loading ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpIconLoading2, {
    key: 0,
    class: "send__text__icon__spin"
  })) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createBlock"])(_component_SpIconPaperPlane2, {
    key: 1
  }))])])], 2)]);
});
// CONCATENATED MODULE: ./src/components/SpButton/SpButton.vue?vue&type=template&id=7f4f0899&scoped=true

// EXTERNAL MODULE: ./src/components/SpIconPaperPlane2/index.js
var SpIconPaperPlane2 = __webpack_require__("82435");

// EXTERNAL MODULE: ./src/components/SpIconLoading2/index.js
var SpIconLoading2 = __webpack_require__("57bd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SpButton/SpButton.vue?vue&type=script&lang=js


/* harmony default export */ var SpButtonvue_type_script_lang_js = ({
  name: 'SpButton',
  components: {
    SpIconPaperPlane2: SpIconPaperPlane2["a" /* default */],
    SpIconLoading2: SpIconLoading2["a" /* default */]
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submit: function submit() {
      this.$emit('click', true);
    }
  }
});
// CONCATENATED MODULE: ./src/components/SpButton/SpButton.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SpButton/SpButton.vue?vue&type=style&index=0&id=7f4f0899&scoped=true&lang=css
var SpButtonvue_type_style_index_0_id_7f4f0899_scoped_true_lang_css = __webpack_require__("58da");

// CONCATENATED MODULE: ./src/components/SpButton/SpButton.vue





SpButtonvue_type_script_lang_js.render = render
SpButtonvue_type_script_lang_js.__scopeId = "data-v-7f4f0899"

/* harmony default export */ var SpButton = __webpack_exports__["a"] = (SpButtonvue_type_script_lang_js);

/***/ }),

/***/ "fbd5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).


var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = __webpack_require__("9d8a").codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = __webpack_require__("ee93");
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;

/***/ }),

/***/ "fc1a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpInput_vue_vue_type_style_index_0_id_d5c77782_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("028a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpInput_vue_vue_type_style_index_0_id_d5c77782_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SpInput_vue_vue_type_style_index_0_id_d5c77782_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fe30":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
//# sourceMappingURL=starport-vue.common.js.map