/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};


var defaultConfig = {
  product: null,
  account_id: null
};
var defaultSetting = {
  path: 'receive'
};

var Mercury = /*#__PURE__*/function () {
  function Mercury() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Mercury);

    this.options = Object.assign(Object.assign({}, defaultConfig), options);
    this.settings = Object.assign(Object.assign({}, defaultSetting), settings);
    this.sync = new _sync__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.prepareMercury();
  }

  _createClass(Mercury, [{
    key: "prepareMercury",
    value: function prepareMercury() {
      this.listenToMessages();
      this.readinessCheck();
    }
  }, {
    key: "readinessCheck",
    value: function readinessCheck() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.parent.postMessage({
                  status: 'ready'
                }, '*');

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "listenToMessages",
    value: function listenToMessages() {
      var _this = this;

      window.addEventListener('message', function (message) {
        var options = message.data.options;

        _this.loadOptions(message.data);

        _this.loadSettings(message.data);

        if (message.data.type === 'event') {
          _this.event(message.data.event, message.data.value, options);
        } else if (message.data.type === 'convesion') {
          _this.conversion(message.data.event, message.data.value, options);
        }
      });
    }
  }, {
    key: "loadOptions",
    value: function loadOptions(message) {
      var _a, _b;

      if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.account_id) && (message === null || message === void 0 ? void 0 : message.account_id)) this.options.account_id = message.account_id;
      if (!((_b = this.options) === null || _b === void 0 ? void 0 : _b.product) && (message === null || message === void 0 ? void 0 : message.product)) this.options.product = message.product;
    }
  }, {
    key: "loadSettings",
    value: function loadSettings(message) {
      var _a, _b, _c;

      if (((_a = message === null || message === void 0 ? void 0 : message.settings) === null || _a === void 0 ? void 0 : _a.path) && ((_b = message === null || message === void 0 ? void 0 : message.settings) === null || _b === void 0 ? void 0 : _b.path) !== this.settings.path) this.settings.path = (_c = message === null || message === void 0 ? void 0 : message.settings) === null || _c === void 0 ? void 0 : _c.path;
    }
  }, {
    key: "event",
    value: function event(_event, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.sync.message(Object.assign({
        target: 'mercurySync',
        type: 'event',
        event: _event,
        value: value
      }, options));
    }
  }, {
    key: "conversion",
    value: function conversion(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.sync.message(Object.assign({
        target: 'mercurySync',
        type: 'conversion',
        name: name,
        value: value
      }, options));
    }
  }]);

  return Mercury;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mercury);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var STORAGE_ITEM = 'mercuryToSync';

var Sync = /*#__PURE__*/function () {
  function Sync(mercury) {
    var _this = this;

    _classCallCheck(this, Sync);

    this.mercury = mercury;
    this.timer = 3000;
    this.online = navigator.onLine;
    this.disableCheck = false;
    this.storage = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
      name: 'mercury'
    });
    this.saveDevice();
    this.timeoutId = null;
    this.lastInteraction = 0;
    this.pusher = [];
    this.events();
    setInterval(function () {
      _this.send();
    }, 15000);
  }

  _createClass(Sync, [{
    key: "saveDevice",
    value: function saveDevice() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var device_id;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getDeviceId();

              case 2:
                device_id = _context.sent;
                this.device_id = device_id;
                this.storage.setItem('fp-vturb', device_id);
                this.send();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getDeviceId",
    value: function getDeviceId() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var device_id, fpPromise;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.storage.getItem('fp-vturb');

              case 2:
                device_id = _context2.sent;

                if (!device_id) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", device_id);

              case 5:
                _context2.next = 7;
                return _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_1__["default"].load();

              case 7:
                fpPromise = _context2.sent;
                _context2.next = 10;
                return fpPromise.get();

              case 10:
                return _context2.abrupt("return", _context2.sent.visitorId);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "dispatch",
    value: function dispatch(data) {
      this.push(data);
      this.send();
    }
  }, {
    key: "events",
    value: function events() {
      window.addEventListener('online', this.updateOnlineStatus.bind(this));
      window.addEventListener('offline', this.updateOnlineStatus.bind(this));
      window.addEventListener('beforeunload', this.onClose.bind(this));
    }
  }, {
    key: "push",
    value: function push(data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!data) {
                  _context3.next = 19;
                  break;
                }

                if (!this.online) {
                  _context3.next = 5;
                  break;
                }

                this.pusher = [].concat(_toConsumableArray(this.pusher), _toConsumableArray(Array.isArray(data) ? data : [data]));
                _context3.next = 19;
                break;

              case 5:
                _context3.t0 = this.storage;
                _context3.t1 = STORAGE_ITEM;
                _context3.t2 = [];
                _context3.t3 = _toConsumableArray;
                _context3.next = 11;
                return this.storage.getItem(STORAGE_ITEM);

              case 11:
                _context3.t4 = _context3.sent;

                if (_context3.t4) {
                  _context3.next = 14;
                  break;
                }

                _context3.t4 = [];

              case 14:
                _context3.t5 = _context3.t4;
                _context3.t6 = (0, _context3.t3)(_context3.t5);
                _context3.t7 = _toConsumableArray(Array.isArray(data) ? data : [data]);
                _context3.t8 = _context3.t2.concat.call(_context3.t2, _context3.t6, _context3.t7);

                _context3.t0.setItem.call(_context3.t0, _context3.t1, _context3.t8);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "defaultParams",
    value: function defaultParams() {
      var ret = {};
      if (this.device_id) ret.device_id = this.device_id;
      if (this.mercury.options.product) ret.product = this.mercury.options.product;
      if (this.mercury.options.account_id) ret.account_id = this.mercury.options.account_id;
      return ret;
    }
  }, {
    key: "send",
    value: function send() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this2 = this;

        var data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.device_id) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                if (!(force || this.disableCheck || this.lastInteraction + this.timer < Date.now())) {
                  _context4.next = 15;
                  break;
                }

                _context4.next = 5;
                return this.storage.getItem(STORAGE_ITEM);

              case 5:
                data = _context4.sent;

                if (!((data || []).length > 0)) {
                  _context4.next = 12;
                  break;
                }

                console.log('data erased');
                _context4.next = 10;
                return this.storage.setItem(STORAGE_ITEM, []);

              case 10:
                _context4.next = 14;
                break;

              case 12:
                data = this.pusher;
                this.pusher = [];

              case 14:
                if (this.online) {
                  if (data && (!Array.isArray(data) || data.length > 0)) {
                    this.lastInteraction = Date.now();
                    setTimeout(function () {
                      _this2.send();
                    }, this.timer + 100);
                    window.navigator.sendBeacon("".concat("https://api.vturb.com.br", "/hermes/").concat(this.mercury.settings.path), JSON.stringify(Object.assign(Object.assign({}, this.defaultParams()), {
                      data: data
                    })));
                  }
                } else {
                  this.push(data);
                }

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.disableCheck = true;
      this.send(true);
      return null;
    }
  }, {
    key: "message",
    value: function message(data) {
      if (data.target && data.target === 'mercurySync') {
        if (typeof this[data.type] === 'function') {
          this[data.type](data);
        } else {
          this.dispatch(data);
        }
      }
    }
  }, {
    key: "updateOnlineStatus",
    value: function updateOnlineStatus() {
      this.send(true);
      this.online = navigator.onLine;
    }
  }, {
    key: "event",
    value: function event(_a) {
      var event = _a.event,
          value = _a.value,
          options = __rest(_a, ["event", "value"]);

      if (!event || value === undefined) {
        throw new Error('Event missing event or value');
      } else {
        this.push(Object.assign({
          event: event,
          value: value
        }, options));
        this.send();
      }
    }
  }, {
    key: "conversion",
    value: function conversion(_a) {
      var name = _a.name,
          _a$value = _a.value,
          value = _a$value === void 0 ? 1 : _a$value,
          options = __rest(_a, ["name", "value"]);

      if (!name || !value) {
        throw new Error('Conversion missing name or value');
      } else {
        this.push(Object.assign({
          conversion: true,
          name: name,
          value: value
        }, options));
        this.send();
      }
    }
  }]);

  return Sync;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sync);

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=undefined;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=undefined;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            var db = openreq.result;
            db.onversionchange = function (e) {
                // Triggered when the database is modified (e.g. adding an objectStore) or
                // deleted (even when initiated by other sessions in different tabs).
                // Closing the connection here prevents those operations from being blocked.
                // If the database is accessed again later by this instance, the connection
                // will be reopened or the database recreated as needed.
                e.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(req.error);
                    };

                    req.onblocked = function () {
                        // Closing all open connections in onversionchange handler should prevent this situation, but if
                        // we do get here, it just means the request remains pending - eventually it will succeed or error
                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentsToDebugString": () => (/* binding */ componentsToDebugString),
/* harmony export */   "default": () => (/* binding */ index),
/* harmony export */   "getFullscreenElement": () => (/* binding */ getFullscreenElement),
/* harmony export */   "getScreenFrame": () => (/* binding */ getScreenFrame),
/* harmony export */   "hashComponents": () => (/* binding */ hashComponents),
/* harmony export */   "isAndroid": () => (/* binding */ isAndroid),
/* harmony export */   "isChromium": () => (/* binding */ isChromium),
/* harmony export */   "isDesktopSafari": () => (/* binding */ isDesktopSafari),
/* harmony export */   "isEdgeHTML": () => (/* binding */ isEdgeHTML),
/* harmony export */   "isGecko": () => (/* binding */ isGecko),
/* harmony export */   "isTrident": () => (/* binding */ isTrident),
/* harmony export */   "isWebKit": () => (/* binding */ isWebKit),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "loadSources": () => (/* binding */ loadSources),
/* harmony export */   "murmurX64Hash128": () => (/* binding */ murmurX64Hash128),
/* harmony export */   "prepareForSources": () => (/* binding */ prepareForSources),
/* harmony export */   "sources": () => (/* binding */ sources),
/* harmony export */   "transformSource": () => (/* binding */ transformSource)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/**
 * FingerprintJS v3.3.5 - Copyright (c) FingerprintJS, Inc, 2022 (https://fingerprint.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */



var version = "3.3.5";

function wait(durationMs, resolveWith) {
    return new Promise(function (resolve) { return setTimeout(resolve, durationMs, resolveWith); });
}
function requestIdleCallbackIfAvailable(fallbackTimeout, deadlineTimeout) {
    if (deadlineTimeout === void 0) { deadlineTimeout = Infinity; }
    var requestIdleCallback = window.requestIdleCallback;
    if (requestIdleCallback) {
        // The function `requestIdleCallback` loses the binding to `window` here.
        // `globalThis` isn't always equal `window` (see https://github.com/fingerprintjs/fingerprintjs/issues/683).
        // Therefore, an error can occur. `call(window,` prevents the error.
        return new Promise(function (resolve) { return requestIdleCallback.call(window, function () { return resolve(); }, { timeout: deadlineTimeout }); });
    }
    else {
        return wait(Math.min(fallbackTimeout, deadlineTimeout));
    }
}
function isPromise(value) {
    return value && typeof value.then === 'function';
}
/**
 * Calls a maybe asynchronous function without creating microtasks when the function is synchronous.
 * Catches errors in both cases.
 *
 * If just you run a code like this:
 * ```
 * console.time('Action duration')
 * await action()
 * console.timeEnd('Action duration')
 * ```
 * The synchronous function time can be measured incorrectly because another microtask may run before the `await`
 * returns the control back to the code.
 */
function awaitIfAsync(action, callback) {
    try {
        var returnedValue = action();
        if (isPromise(returnedValue)) {
            returnedValue.then(function (result) { return callback(true, result); }, function (error) { return callback(false, error); });
        }
        else {
            callback(true, returnedValue);
        }
    }
    catch (error) {
        callback(false, error);
    }
}
/**
 * If you run many synchronous tasks without using this function, the JS main loop will be busy and asynchronous tasks
 * (e.g. completing a network request, rendering the page) won't be able to happen.
 * This function allows running many synchronous tasks such way that asynchronous tasks can run too in background.
 */
function forEachWithBreaks(items, callback, loopReleaseInterval) {
    if (loopReleaseInterval === void 0) { loopReleaseInterval = 16; }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var lastLoopReleaseTime, i, now;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lastLoopReleaseTime = Date.now();
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < items.length)) return [3 /*break*/, 4];
                    callback(items[i], i);
                    now = Date.now();
                    if (!(now >= lastLoopReleaseTime + loopReleaseInterval)) return [3 /*break*/, 3];
                    lastLoopReleaseTime = now;
                    // Allows asynchronous actions and microtasks to happen
                    return [4 /*yield*/, wait(0)];
                case 2:
                    // Allows asynchronous actions and microtasks to happen
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++i;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Makes the given promise never emit an unhandled promise rejection console warning.
 * The promise will still pass errors to the next promises.
 *
 * Otherwise, promise emits a console warning unless it has a `catch` listener.
 */
function suppressUnhandledRejectionWarning(promise) {
    promise.then(undefined, function () { return undefined; });
}

/*
 * Taken from https://github.com/karanlyons/murmurHash3.js/blob/a33d0723127e2e5415056c455f8aed2451ace208/murmurHash3.js
 */
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// added together as a 64bit int (as an array of two 32bit ints).
//
function x64Add(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// multiplied together as a 64bit int (as an array of two 32bit ints).
//
function x64Multiply(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
//
// Given a 64bit int (as an array of two 32bit ints) and an int
// representing a number of bit positions, returns the 64bit int (as an
// array of two 32bit ints) rotated left by that number of positions.
//
function x64Rotl(m, n) {
    n %= 64;
    if (n === 32) {
        return [m[1], m[0]];
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
    }
    else {
        n -= 32;
        return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
    }
}
//
// Given a 64bit int (as an array of two 32bit ints) and an int
// representing a number of bit positions, returns the 64bit int (as an
// array of two 32bit ints) shifted left by that number of positions.
//
function x64LeftShift(m, n) {
    n %= 64;
    if (n === 0) {
        return m;
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
    }
    else {
        return [m[1] << (n - 32), 0];
    }
}
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// xored together as a 64bit int (as an array of two 32bit ints).
//
function x64Xor(m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]];
}
//
// Given a block, returns murmurHash3's final x64 mix of that block.
// (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
// only place where we need to right shift 64bit ints.)
//
function x64Fmix(h) {
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    return h;
}
//
// Given a string and an optional seed as an int, returns a 128 bit
// hash using the x64 flavor of MurmurHash3, as an unsigned hex.
//
function x64hash128(key, seed) {
    key = key || '';
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [0x87c37b91, 0x114253d5];
    var c2 = [0x4cf5ad43, 0x2745937f];
    var i;
    for (i = 0; i < bytes; i = i + 16) {
        k1 = [
            (key.charCodeAt(i + 4) & 0xff) |
                ((key.charCodeAt(i + 5) & 0xff) << 8) |
                ((key.charCodeAt(i + 6) & 0xff) << 16) |
                ((key.charCodeAt(i + 7) & 0xff) << 24),
            (key.charCodeAt(i) & 0xff) |
                ((key.charCodeAt(i + 1) & 0xff) << 8) |
                ((key.charCodeAt(i + 2) & 0xff) << 16) |
                ((key.charCodeAt(i + 3) & 0xff) << 24),
        ];
        k2 = [
            (key.charCodeAt(i + 12) & 0xff) |
                ((key.charCodeAt(i + 13) & 0xff) << 8) |
                ((key.charCodeAt(i + 14) & 0xff) << 16) |
                ((key.charCodeAt(i + 15) & 0xff) << 24),
            (key.charCodeAt(i + 8) & 0xff) |
                ((key.charCodeAt(i + 9) & 0xff) << 8) |
                ((key.charCodeAt(i + 10) & 0xff) << 16) |
                ((key.charCodeAt(i + 11) & 0xff) << 24),
        ];
        k1 = x64Multiply(k1, c1);
        k1 = x64Rotl(k1, 31);
        k1 = x64Multiply(k1, c2);
        h1 = x64Xor(h1, k1);
        h1 = x64Rotl(h1, 27);
        h1 = x64Add(h1, h2);
        h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
        k2 = x64Multiply(k2, c2);
        k2 = x64Rotl(k2, 33);
        k2 = x64Multiply(k2, c1);
        h2 = x64Xor(h2, k2);
        h2 = x64Rotl(h2, 31);
        h2 = x64Add(h2, h1);
        h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
    }
    k1 = [0, 0];
    k2 = [0, 0];
    switch (remainder) {
        case 15:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
        // fallthrough
        case 14:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
        // fallthrough
        case 13:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
        // fallthrough
        case 12:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
        // fallthrough
        case 11:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
        // fallthrough
        case 10:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
        // fallthrough
        case 9:
            k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
            k2 = x64Multiply(k2, c2);
            k2 = x64Rotl(k2, 33);
            k2 = x64Multiply(k2, c1);
            h2 = x64Xor(h2, k2);
        // fallthrough
        case 8:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
        // fallthrough
        case 7:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
        // fallthrough
        case 6:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
        // fallthrough
        case 5:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
        // fallthrough
        case 4:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
        // fallthrough
        case 3:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
        // fallthrough
        case 2:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
        // fallthrough
        case 1:
            k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
            k1 = x64Multiply(k1, c1);
            k1 = x64Rotl(k1, 31);
            k1 = x64Multiply(k1, c2);
            h1 = x64Xor(h1, k1);
        // fallthrough
    }
    h1 = x64Xor(h1, [0, key.length]);
    h2 = x64Xor(h2, [0, key.length]);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    h1 = x64Fmix(h1);
    h2 = x64Fmix(h2);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    return (('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8));
}

/**
 * Converts an error object to a plain object that can be used with `JSON.stringify`.
 * If you just run `JSON.stringify(error)`, you'll get `'{}'`.
 */
function errorToObject(error) {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ name: error.name, message: error.message, stack: (_a = error.stack) === null || _a === void 0 ? void 0 : _a.split('\n') }, error);
}

/*
 * This file contains functions to work with pure data only (no browser features, DOM, side effects, etc).
 */
/**
 * Does the same as Array.prototype.includes but has better typing
 */
function includes(haystack, needle) {
    for (var i = 0, l = haystack.length; i < l; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
/**
 * Like `!includes()` but with proper typing
 */
function excludes(haystack, needle) {
    return !includes(haystack, needle);
}
/**
 * Be careful, NaN can return
 */
function toInt(value) {
    return parseInt(value);
}
/**
 * Be careful, NaN can return
 */
function toFloat(value) {
    return parseFloat(value);
}
function replaceNaN(value, replacement) {
    return typeof value === 'number' && isNaN(value) ? replacement : value;
}
function countTruthy(values) {
    return values.reduce(function (sum, value) { return sum + (value ? 1 : 0); }, 0);
}
function round(value, base) {
    if (base === void 0) { base = 1; }
    if (Math.abs(base) >= 1) {
        return Math.round(value / base) * base;
    }
    else {
        // Sometimes when a number is multiplied by a small number, precision is lost,
        // for example 1234 * 0.0001 === 0.12340000000000001, and it's more precise divide: 1234 / (1 / 0.0001) === 0.1234.
        var counterBase = 1 / base;
        return Math.round(value * counterBase) / counterBase;
    }
}
/**
 * Parses a CSS selector into tag name with HTML attributes.
 * Only single element selector are supported (without operators like space, +, >, etc).
 *
 * Multiple values can be returned for each attribute. You decide how to handle them.
 */
function parseSimpleCssSelector(selector) {
    var _a, _b;
    var errorMessage = "Unexpected syntax '" + selector + "'";
    var tagMatch = /^\s*([a-z-]*)(.*)$/i.exec(selector);
    var tag = tagMatch[1] || undefined;
    var attributes = {};
    var partsRegex = /([.:#][\w-]+|\[.+?\])/gi;
    var addAttribute = function (name, value) {
        attributes[name] = attributes[name] || [];
        attributes[name].push(value);
    };
    for (;;) {
        var match = partsRegex.exec(tagMatch[2]);
        if (!match) {
            break;
        }
        var part = match[0];
        switch (part[0]) {
            case '.':
                addAttribute('class', part.slice(1));
                break;
            case '#':
                addAttribute('id', part.slice(1));
                break;
            case '[': {
                var attributeMatch = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(part);
                if (attributeMatch) {
                    addAttribute(attributeMatch[1], (_b = (_a = attributeMatch[4]) !== null && _a !== void 0 ? _a : attributeMatch[5]) !== null && _b !== void 0 ? _b : '');
                }
                else {
                    throw new Error(errorMessage);
                }
                break;
            }
            default:
                throw new Error(errorMessage);
        }
    }
    return [tag, attributes];
}

function ensureErrorWithMessage(error) {
    return error && typeof error === 'object' && 'message' in error ? error : { message: error };
}
function isFinalResultLoaded(loadResult) {
    return typeof loadResult !== 'function';
}
/**
 * Loads the given entropy source. Returns a function that gets an entropy component from the source.
 *
 * The result is returned synchronously to prevent `loadSources` from
 * waiting for one source to load before getting the components from the other sources.
 */
function loadSource(source, sourceOptions) {
    var sourceLoadPromise = new Promise(function (resolveLoad) {
        var loadStartTime = Date.now();
        // `awaitIfAsync` is used instead of just `await` in order to measure the duration of synchronous sources
        // correctly (other microtasks won't affect the duration).
        awaitIfAsync(source.bind(null, sourceOptions), function () {
            var loadArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                loadArgs[_i] = arguments[_i];
            }
            var loadDuration = Date.now() - loadStartTime;
            // Source loading failed
            if (!loadArgs[0]) {
                return resolveLoad(function () { return ({ error: ensureErrorWithMessage(loadArgs[1]), duration: loadDuration }); });
            }
            var loadResult = loadArgs[1];
            // Source loaded with the final result
            if (isFinalResultLoaded(loadResult)) {
                return resolveLoad(function () { return ({ value: loadResult, duration: loadDuration }); });
            }
            // Source loaded with "get" stage
            resolveLoad(function () {
                return new Promise(function (resolveGet) {
                    var getStartTime = Date.now();
                    awaitIfAsync(loadResult, function () {
                        var getArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            getArgs[_i] = arguments[_i];
                        }
                        var duration = loadDuration + Date.now() - getStartTime;
                        // Source getting failed
                        if (!getArgs[0]) {
                            return resolveGet({ error: ensureErrorWithMessage(getArgs[1]), duration: duration });
                        }
                        // Source getting succeeded
                        resolveGet({ value: getArgs[1], duration: duration });
                    });
                });
            });
        });
    });
    suppressUnhandledRejectionWarning(sourceLoadPromise);
    return function getComponent() {
        return sourceLoadPromise.then(function (finalizeSource) { return finalizeSource(); });
    };
}
/**
 * Loads the given entropy sources. Returns a function that collects the entropy components.
 *
 * The result is returned synchronously in order to allow start getting the components
 * before the sources are loaded completely.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function loadSources(sources, sourceOptions, excludeSources) {
    var includedSources = Object.keys(sources).filter(function (sourceKey) { return excludes(excludeSources, sourceKey); });
    var sourceGetters = Array(includedSources.length);
    // Using `forEachWithBreaks` allows asynchronous sources to complete between synchronous sources
    // and measure the duration correctly
    forEachWithBreaks(includedSources, function (sourceKey, index) {
        sourceGetters[index] = loadSource(sources[sourceKey], sourceOptions);
    });
    return function getComponents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            var components, _i, includedSources_1, sourceKey, componentPromises, _loop_1, state_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        components = {};
                        for (_i = 0, includedSources_1 = includedSources; _i < includedSources_1.length; _i++) {
                            sourceKey = includedSources_1[_i];
                            components[sourceKey] = undefined;
                        }
                        componentPromises = Array(includedSources.length);
                        _loop_1 = function () {
                            var hasAllComponentPromises;
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        hasAllComponentPromises = true;
                                        return [4 /*yield*/, forEachWithBreaks(includedSources, function (sourceKey, index) {
                                                if (!componentPromises[index]) {
                                                    // `sourceGetters` may be incomplete at this point of execution because `forEachWithBreaks` is asynchronous
                                                    if (sourceGetters[index]) {
                                                        var componentPromise = sourceGetters[index]().then(function (component) { return (components[sourceKey] = component); });
                                                        suppressUnhandledRejectionWarning(componentPromise);
                                                        componentPromises[index] = componentPromise;
                                                    }
                                                    else {
                                                        hasAllComponentPromises = false;
                                                    }
                                                }
                                            })];
                                    case 1:
                                        _a.sent();
                                        if (hasAllComponentPromises) {
                                            return [2 /*return*/, "break"];
                                        }
                                        return [4 /*yield*/, wait(1)]; // Lets the source load loop continue
                                    case 2:
                                        _a.sent(); // Lets the source load loop continue
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _a.label = 1;
                    case 1: return [5 /*yield**/, _loop_1()];
                    case 2:
                        state_1 = _a.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 4];
                        _a.label = 3;
                    case 3: return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, Promise.all(componentPromises)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, components];
                }
            });
        });
    };
}
/**
 * Modifies an entropy source by transforming its returned value with the given function.
 * Keeps the source properties: sync/async, 1/2 stages.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function transformSource(source, transformValue) {
    var transformLoadResult = function (loadResult) {
        if (isFinalResultLoaded(loadResult)) {
            return transformValue(loadResult);
        }
        return function () {
            var getResult = loadResult();
            if (isPromise(getResult)) {
                return getResult.then(transformValue);
            }
            return transformValue(getResult);
        };
    };
    return function (options) {
        var loadResult = source(options);
        if (isPromise(loadResult)) {
            return loadResult.then(transformLoadResult);
        }
        return transformLoadResult(loadResult);
    };
}

/*
 * Functions to help with features that vary through browsers
 */
/**
 * Checks whether the browser is based on Trident (the Internet Explorer engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isTrident() {
    var w = window;
    var n = navigator;
    // The properties are checked to be in IE 10, IE 11 and not to be in other browsers in October 2020
    return (countTruthy([
        'MSCSSMatrix' in w,
        'msSetImmediate' in w,
        'msIndexedDB' in w,
        'msMaxTouchPoints' in n,
        'msPointerEnabled' in n,
    ]) >= 4);
}
/**
 * Checks whether the browser is based on EdgeHTML (the pre-Chromium Edge engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isEdgeHTML() {
    // Based on research in October 2020
    var w = window;
    var n = navigator;
    return (countTruthy(['msWriteProfilerMark' in w, 'MSStream' in w, 'msLaunchUri' in n, 'msSaveBlob' in n]) >= 3 &&
        !isTrident());
}
/**
 * Checks whether the browser is based on Chromium without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isChromium() {
    // Based on research in October 2020. Tested to detect Chromium 42-86.
    var w = window;
    var n = navigator;
    return (countTruthy([
        'webkitPersistentStorage' in n,
        'webkitTemporaryStorage' in n,
        n.vendor.indexOf('Google') === 0,
        'webkitResolveLocalFileSystemURL' in w,
        'BatteryManager' in w,
        'webkitMediaStream' in w,
        'webkitSpeechGrammar' in w,
    ]) >= 5);
}
/**
 * Checks whether the browser is based on mobile or desktop Safari without using user-agent.
 * All iOS browsers use WebKit (the Safari engine).
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isWebKit() {
    // Based on research in September 2020
    var w = window;
    var n = navigator;
    return (countTruthy([
        'ApplePayError' in w,
        'CSSPrimitiveValue' in w,
        'Counter' in w,
        n.vendor.indexOf('Apple') === 0,
        'getStorageUpdates' in n,
        'WebKitMediaKeys' in w,
    ]) >= 4);
}
/**
 * Checks whether the WebKit browser is a desktop Safari.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isDesktopSafari() {
    var w = window;
    return (countTruthy([
        'safari' in w,
        !('DeviceMotionEvent' in w),
        !('ongestureend' in w),
        !('standalone' in navigator),
    ]) >= 3);
}
/**
 * Checks whether the browser is based on Gecko (Firefox engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isGecko() {
    var _a, _b;
    var w = window;
    // Based on research in September 2020
    return (countTruthy([
        'buildID' in navigator,
        'MozAppearance' in ((_b = (_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.style) !== null && _b !== void 0 ? _b : {}),
        'onmozfullscreenchange' in w,
        'mozInnerScreenX' in w,
        'CSSMozDocumentRule' in w,
        'CanvasCaptureMediaStream' in w,
    ]) >= 4);
}
/**
 * Checks whether the browser is based on Chromium version ≥86 without using user-agent.
 * It doesn't check that the browser is based on Chromium, there is a separate function for this.
 */
function isChromium86OrNewer() {
    // Checked in Chrome 85 vs Chrome 86 both on desktop and Android
    var w = window;
    return (countTruthy([
        !('MediaSettingsRange' in w),
        'RTCEncodedAudioFrame' in w,
        '' + w.Intl === '[object Intl]',
        '' + w.Reflect === '[object Reflect]',
    ]) >= 3);
}
/**
 * Checks whether the browser is based on WebKit version ≥606 (Safari ≥12) without using user-agent.
 * It doesn't check that the browser is based on WebKit, there is a separate function for this.
 *
 * @link https://en.wikipedia.org/wiki/Safari_version_history#Release_history Safari-WebKit versions map
 */
function isWebKit606OrNewer() {
    // Checked in Safari 9–14
    var w = window;
    return (countTruthy([
        'DOMRectList' in w,
        'RTCPeerConnectionIceEvent' in w,
        'SVGGeometryElement' in w,
        'ontransitioncancel' in w,
    ]) >= 3);
}
/**
 * Checks whether the device is an iPad.
 * It doesn't check that the engine is WebKit and that the WebKit isn't desktop.
 */
function isIPad() {
    // Checked on:
    // Safari on iPadOS (both mobile and desktop modes): 8, 11, 12, 13, 14
    // Chrome on iPadOS (both mobile and desktop modes): 11, 12, 13, 14
    // Safari on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
    // Chrome on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
    // Before iOS 13. Safari tampers the value in "request desktop site" mode since iOS 13.
    if (navigator.platform === 'iPad') {
        return true;
    }
    var s = screen;
    var screenRatio = s.width / s.height;
    return (countTruthy([
        'MediaSource' in window,
        !!Element.prototype.webkitRequestFullscreen,
        // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
        screenRatio > 0.65 && screenRatio < 1.53,
    ]) >= 2);
}
/**
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function getFullscreenElement() {
    var d = document;
    return d.fullscreenElement || d.msFullscreenElement || d.mozFullScreenElement || d.webkitFullscreenElement || null;
}
function exitFullscreen() {
    var d = document;
    // `call` is required because the function throws an error without a proper "this" context
    return (d.exitFullscreen || d.msExitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen).call(d);
}
/**
 * Checks whether the device runs on Android without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isAndroid() {
    var isItChromium = isChromium();
    var isItGecko = isGecko();
    // Only 2 browser engines are presented on Android.
    // Actually, there is also Android 4.1 browser, but it's not worth detecting it at the moment.
    if (!isItChromium && !isItGecko) {
        return false;
    }
    var w = window;
    // Chrome removes all words "Android" from `navigator` when desktop version is requested
    // Firefox keeps "Android" in `navigator.appVersion` when desktop version is requested
    return (countTruthy([
        'onorientationchange' in w,
        'orientation' in w,
        isItChromium && !('SharedWorker' in w),
        isItGecko && /android/i.test(navigator.appVersion),
    ]) >= 2);
}

/**
 * A deep description: https://fingerprint.com/blog/audio-fingerprinting/
 * Inspired by and based on https://github.com/cozylife/audio-fingerprint
 */
function getAudioFingerprint() {
    var w = window;
    var AudioContext = w.OfflineAudioContext || w.webkitOfflineAudioContext;
    if (!AudioContext) {
        return -2 /* NotSupported */;
    }
    // In some browsers, audio context always stays suspended unless the context is started in response to a user action
    // (e.g. a click or a tap). It prevents audio fingerprint from being taken at an arbitrary moment of time.
    // Such browsers are old and unpopular, so the audio fingerprinting is just skipped in them.
    // See a similar case explanation at https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
    if (doesCurrentBrowserSuspendAudioContext()) {
        return -1 /* KnownToSuspend */;
    }
    var hashFromIndex = 4500;
    var hashToIndex = 5000;
    var context = new AudioContext(1, hashToIndex, 44100);
    var oscillator = context.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.value = 10000;
    var compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.attack.value = 0;
    compressor.release.value = 0.25;
    oscillator.connect(compressor);
    compressor.connect(context.destination);
    oscillator.start(0);
    var _a = startRenderingAudio(context), renderPromise = _a[0], finishRendering = _a[1];
    var fingerprintPromise = renderPromise.then(function (buffer) { return getHash(buffer.getChannelData(0).subarray(hashFromIndex)); }, function (error) {
        if (error.name === "timeout" /* Timeout */ || error.name === "suspended" /* Suspended */) {
            return -3 /* Timeout */;
        }
        throw error;
    });
    // Suppresses the console error message in case when the fingerprint fails before requested
    suppressUnhandledRejectionWarning(fingerprintPromise);
    return function () {
        finishRendering();
        return fingerprintPromise;
    };
}
/**
 * Checks if the current browser is known to always suspend audio context
 */
function doesCurrentBrowserSuspendAudioContext() {
    return isWebKit() && !isDesktopSafari() && !isWebKit606OrNewer();
}
/**
 * Starts rendering the audio context.
 * When the returned function is called, the render process starts finishing.
 */
function startRenderingAudio(context) {
    var renderTryMaxCount = 3;
    var renderRetryDelay = 500;
    var runningMaxAwaitTime = 500;
    var runningSufficientTime = 5000;
    var finalize = function () { return undefined; };
    var resultPromise = new Promise(function (resolve, reject) {
        var isFinalized = false;
        var renderTryCount = 0;
        var startedRunningAt = 0;
        context.oncomplete = function (event) { return resolve(event.renderedBuffer); };
        var startRunningTimeout = function () {
            setTimeout(function () { return reject(makeInnerError("timeout" /* Timeout */)); }, Math.min(runningMaxAwaitTime, startedRunningAt + runningSufficientTime - Date.now()));
        };
        var tryRender = function () {
            try {
                context.startRendering();
                switch (context.state) {
                    case 'running':
                        startedRunningAt = Date.now();
                        if (isFinalized) {
                            startRunningTimeout();
                        }
                        break;
                    // Sometimes the audio context doesn't start after calling `startRendering` (in addition to the cases where
                    // audio context doesn't start at all). A known case is starting an audio context when the browser tab is in
                    // background on iPhone. Retries usually help in this case.
                    case 'suspended':
                        // The audio context can reject starting until the tab is in foreground. Long fingerprint duration
                        // in background isn't a problem, therefore the retry attempts don't count in background. It can lead to
                        // a situation when a fingerprint takes very long time and finishes successfully. FYI, the audio context
                        // can be suspended when `document.hidden === false` and start running after a retry.
                        if (!document.hidden) {
                            renderTryCount++;
                        }
                        if (isFinalized && renderTryCount >= renderTryMaxCount) {
                            reject(makeInnerError("suspended" /* Suspended */));
                        }
                        else {
                            setTimeout(tryRender, renderRetryDelay);
                        }
                        break;
                }
            }
            catch (error) {
                reject(error);
            }
        };
        tryRender();
        finalize = function () {
            if (!isFinalized) {
                isFinalized = true;
                if (startedRunningAt > 0) {
                    startRunningTimeout();
                }
            }
        };
    });
    return [resultPromise, finalize];
}
function getHash(signal) {
    var hash = 0;
    for (var i = 0; i < signal.length; ++i) {
        hash += Math.abs(signal[i]);
    }
    return hash;
}
function makeInnerError(name) {
    var error = new Error(name);
    error.name = name;
    return error;
}

/**
 * Creates and keeps an invisible iframe while the given function runs.
 * The given function is called when the iframe is loaded and has a body.
 * The iframe allows to measure DOM sizes inside itself.
 *
 * Notice: passing an initial HTML code doesn't work in IE.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function withIframe(action, initialHtml, domPollInterval) {
    var _a, _b, _c;
    if (domPollInterval === void 0) { domPollInterval = 50; }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var d, iframe;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    d = document;
                    _d.label = 1;
                case 1:
                    if (!!d.body) return [3 /*break*/, 3];
                    return [4 /*yield*/, wait(domPollInterval)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 1];
                case 3:
                    iframe = d.createElement('iframe');
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, , 10, 11]);
                    return [4 /*yield*/, new Promise(function (_resolve, _reject) {
                            var isComplete = false;
                            var resolve = function () {
                                isComplete = true;
                                _resolve();
                            };
                            var reject = function (error) {
                                isComplete = true;
                                _reject(error);
                            };
                            iframe.onload = resolve;
                            iframe.onerror = reject;
                            var style = iframe.style;
                            style.setProperty('display', 'block', 'important'); // Required for browsers to calculate the layout
                            style.position = 'absolute';
                            style.top = '0';
                            style.left = '0';
                            style.visibility = 'hidden';
                            if (initialHtml && 'srcdoc' in iframe) {
                                iframe.srcdoc = initialHtml;
                            }
                            else {
                                iframe.src = 'about:blank';
                            }
                            d.body.appendChild(iframe);
                            // WebKit in WeChat doesn't fire the iframe's `onload` for some reason.
                            // This code checks for the loading state manually.
                            // See https://github.com/fingerprintjs/fingerprintjs/issues/645
                            var checkReadyState = function () {
                                var _a, _b;
                                // The ready state may never become 'complete' in Firefox despite the 'load' event being fired.
                                // So an infinite setTimeout loop can happen without this check.
                                // See https://github.com/fingerprintjs/fingerprintjs/pull/716#issuecomment-986898796
                                if (isComplete) {
                                    return;
                                }
                                // Make sure iframe.contentWindow and iframe.contentWindow.document are both loaded
                                // The contentWindow.document can miss in JSDOM (https://github.com/jsdom/jsdom).
                                if (((_b = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.readyState) === 'complete') {
                                    resolve();
                                }
                                else {
                                    setTimeout(checkReadyState, 10);
                                }
                            };
                            checkReadyState();
                        })];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6:
                    if (!!((_b = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body)) return [3 /*break*/, 8];
                    return [4 /*yield*/, wait(domPollInterval)];
                case 7:
                    _d.sent();
                    return [3 /*break*/, 6];
                case 8: return [4 /*yield*/, action(iframe, iframe.contentWindow)];
                case 9: return [2 /*return*/, _d.sent()];
                case 10:
                    (_c = iframe.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(iframe);
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
}
/**
 * Creates a DOM element that matches the given selector.
 * Only single element selector are supported (without operators like space, +, >, etc).
 */
function selectorToElement(selector) {
    var _a = parseSimpleCssSelector(selector), tag = _a[0], attributes = _a[1];
    var element = document.createElement(tag !== null && tag !== void 0 ? tag : 'div');
    for (var _i = 0, _b = Object.keys(attributes); _i < _b.length; _i++) {
        var name_1 = _b[_i];
        var value = attributes[name_1].join(' ');
        // Changing the `style` attribute can cause a CSP error, therefore we change the `style.cssText` property.
        // https://github.com/fingerprintjs/fingerprintjs/issues/733
        if (name_1 === 'style') {
            addStyleString(element.style, value);
        }
        else {
            element.setAttribute(name_1, value);
        }
    }
    return element;
}
/**
 * Adds CSS styles from a string in such a way that doesn't trigger a CSP warning (unsafe-inline or unsafe-eval)
 */
function addStyleString(style, source) {
    // We don't use `style.cssText` because browsers must block it when no `unsafe-eval` CSP is presented: https://csplite.com/csp145/#w3c_note
    // Even though the browsers ignore this standard, we don't use `cssText` just in case.
    for (var _i = 0, _a = source.split(';'); _i < _a.length; _i++) {
        var property = _a[_i];
        var match = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(property);
        if (match) {
            var name_2 = match[1], value = match[2], priority = match[4];
            style.setProperty(name_2, value, priority || ''); // The last argument can't be undefined in IE11
        }
    }
}

// We use m or w because these two characters take up the maximum width.
// And we use a LLi so that the same matching fonts can get separated.
var testString = 'mmMwWLliI0O&1';
// We test using 48px font size, we may use any size. I guess larger the better.
var textSize = '48px';
// A font will be compared against all the three default fonts.
// And if for any default fonts it doesn't match, then that font is available.
var baseFonts = ['monospace', 'sans-serif', 'serif'];
var fontList = [
    // This is android-specific font from "Roboto" family
    'sans-serif-thin',
    'ARNO PRO',
    'Agency FB',
    'Arabic Typesetting',
    'Arial Unicode MS',
    'AvantGarde Bk BT',
    'BankGothic Md BT',
    'Batang',
    'Bitstream Vera Sans Mono',
    'Calibri',
    'Century',
    'Century Gothic',
    'Clarendon',
    'EUROSTILE',
    'Franklin Gothic',
    'Futura Bk BT',
    'Futura Md BT',
    'GOTHAM',
    'Gill Sans',
    'HELV',
    'Haettenschweiler',
    'Helvetica Neue',
    'Humanst521 BT',
    'Leelawadee',
    'Letter Gothic',
    'Levenim MT',
    'Lucida Bright',
    'Lucida Sans',
    'Menlo',
    'MS Mincho',
    'MS Outlook',
    'MS Reference Specialty',
    'MS UI Gothic',
    'MT Extra',
    'MYRIAD PRO',
    'Marlett',
    'Meiryo UI',
    'Microsoft Uighur',
    'Minion Pro',
    'Monotype Corsiva',
    'PMingLiU',
    'Pristina',
    'SCRIPTINA',
    'Segoe UI Light',
    'Serifa',
    'SimHei',
    'Small Fonts',
    'Staccato222 BT',
    'TRAJAN PRO',
    'Univers CE 55 Medium',
    'Vrinda',
    'ZWAdobeF',
];
// kudos to http://www.lalit.org/lab/javascript-css-font-detect/
function getFonts() {
    // Running the script in an iframe makes it not affect the page look and not be affected by the page CSS. See:
    // https://github.com/fingerprintjs/fingerprintjs/issues/592
    // https://github.com/fingerprintjs/fingerprintjs/issues/628
    return withIframe(function (_, _a) {
        var document = _a.document;
        var holder = document.body;
        holder.style.fontSize = textSize;
        // div to load spans for the default fonts and the fonts to detect
        var spansContainer = document.createElement('div');
        var defaultWidth = {};
        var defaultHeight = {};
        // creates a span where the fonts will be loaded
        var createSpan = function (fontFamily) {
            var span = document.createElement('span');
            var style = span.style;
            style.position = 'absolute';
            style.top = '0';
            style.left = '0';
            style.fontFamily = fontFamily;
            span.textContent = testString;
            spansContainer.appendChild(span);
            return span;
        };
        // creates a span and load the font to detect and a base font for fallback
        var createSpanWithFonts = function (fontToDetect, baseFont) {
            return createSpan("'" + fontToDetect + "'," + baseFont);
        };
        // creates spans for the base fonts and adds them to baseFontsDiv
        var initializeBaseFontsSpans = function () {
            return baseFonts.map(createSpan);
        };
        // creates spans for the fonts to detect and adds them to fontsDiv
        var initializeFontsSpans = function () {
            // Stores {fontName : [spans for that font]}
            var spans = {};
            var _loop_1 = function (font) {
                spans[font] = baseFonts.map(function (baseFont) { return createSpanWithFonts(font, baseFont); });
            };
            for (var _i = 0, fontList_1 = fontList; _i < fontList_1.length; _i++) {
                var font = fontList_1[_i];
                _loop_1(font);
            }
            return spans;
        };
        // checks if a font is available
        var isFontAvailable = function (fontSpans) {
            return baseFonts.some(function (baseFont, baseFontIndex) {
                return fontSpans[baseFontIndex].offsetWidth !== defaultWidth[baseFont] ||
                    fontSpans[baseFontIndex].offsetHeight !== defaultHeight[baseFont];
            });
        };
        // create spans for base fonts
        var baseFontsSpans = initializeBaseFontsSpans();
        // create spans for fonts to detect
        var fontsSpans = initializeFontsSpans();
        // add all the spans to the DOM
        holder.appendChild(spansContainer);
        // get the default width for the three base fonts
        for (var index = 0; index < baseFonts.length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
        }
        // check available fonts
        return fontList.filter(function (font) { return isFontAvailable(fontsSpans[font]); });
    });
}

function getPlugins() {
    var rawPlugins = navigator.plugins;
    if (!rawPlugins) {
        return undefined;
    }
    var plugins = [];
    // Safari 10 doesn't support iterating navigator.plugins with for...of
    for (var i = 0; i < rawPlugins.length; ++i) {
        var plugin = rawPlugins[i];
        if (!plugin) {
            continue;
        }
        var mimeTypes = [];
        for (var j = 0; j < plugin.length; ++j) {
            var mimeType = plugin[j];
            mimeTypes.push({
                type: mimeType.type,
                suffixes: mimeType.suffixes,
            });
        }
        plugins.push({
            name: plugin.name,
            description: plugin.description,
            mimeTypes: mimeTypes,
        });
    }
    return plugins;
}

// https://www.browserleaks.com/canvas#how-does-it-work
function getCanvasFingerprint() {
    var _a = makeCanvasContext(), canvas = _a[0], context = _a[1];
    if (!isSupported(canvas, context)) {
        return { winding: false, geometry: '', text: '' };
    }
    return {
        winding: doesSupportWinding(context),
        geometry: makeGeometryImage(canvas, context),
        // Text is unstable:
        // https://github.com/fingerprintjs/fingerprintjs/issues/583
        // https://github.com/fingerprintjs/fingerprintjs/issues/103
        // Therefore it's extracted into a separate image.
        text: makeTextImage(canvas, context),
    };
}
function makeCanvasContext() {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return [canvas, canvas.getContext('2d')];
}
function isSupported(canvas, context) {
    // TODO: look into: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
    return !!(context && canvas.toDataURL);
}
function doesSupportWinding(context) {
    // https://web.archive.org/web/20170825024655/http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
    context.rect(0, 0, 10, 10);
    context.rect(2, 2, 6, 6);
    return !context.isPointInPath(5, 5, 'evenodd');
}
function makeTextImage(canvas, context) {
    // Resizing the canvas cleans it
    canvas.width = 240;
    canvas.height = 60;
    context.textBaseline = 'alphabetic';
    context.fillStyle = '#f60';
    context.fillRect(100, 1, 62, 20);
    context.fillStyle = '#069';
    // It's important to use explicit built-in fonts in order to exclude the affect of font preferences
    // (there is a separate entropy source for them).
    context.font = '11pt "Times New Roman"';
    // The choice of emojis has a gigantic impact on rendering performance (especially in FF).
    // Some newer emojis cause it to slow down 50-200 times.
    // There must be no text to the right of the emoji, see https://github.com/fingerprintjs/fingerprintjs/issues/574
    // A bare emoji shouldn't be used because the canvas will change depending on the script encoding:
    // https://github.com/fingerprintjs/fingerprintjs/issues/66
    // Escape sequence shouldn't be used too because Terser will turn it into a bare unicode.
    var printedText = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835) /* 😃 */;
    context.fillText(printedText, 2, 15);
    context.fillStyle = 'rgba(102, 204, 0, 0.2)';
    context.font = '18pt Arial';
    context.fillText(printedText, 4, 45);
    return save(canvas);
}
function makeGeometryImage(canvas, context) {
    // Resizing the canvas cleans it
    canvas.width = 122;
    canvas.height = 110;
    // Canvas blending
    // https://web.archive.org/web/20170826194121/http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
    // http://jsfiddle.net/NDYV8/16/
    context.globalCompositeOperation = 'multiply';
    for (var _i = 0, _a = [
        ['#f2f', 40, 40],
        ['#2ff', 80, 40],
        ['#ff2', 60, 80],
    ]; _i < _a.length; _i++) {
        var _b = _a[_i], color = _b[0], x = _b[1], y = _b[2];
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, 40, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }
    // Canvas winding
    // https://web.archive.org/web/20130913061632/http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // http://jsfiddle.net/NDYV8/19/
    context.fillStyle = '#f9c';
    context.arc(60, 60, 60, 0, Math.PI * 2, true);
    context.arc(60, 60, 20, 0, Math.PI * 2, true);
    context.fill('evenodd');
    return save(canvas);
}
function save(canvas) {
    // TODO: look into: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
    return canvas.toDataURL();
}

/**
 * This is a crude and primitive touch screen detection. It's not possible to currently reliably detect the availability
 * of a touch screen with a JS, without actually subscribing to a touch event.
 *
 * @see http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
 * @see https://github.com/Modernizr/Modernizr/issues/548
 */
function getTouchSupport() {
    var n = navigator;
    var maxTouchPoints = 0;
    var touchEvent;
    if (n.maxTouchPoints !== undefined) {
        maxTouchPoints = toInt(n.maxTouchPoints);
    }
    else if (n.msMaxTouchPoints !== undefined) {
        maxTouchPoints = n.msMaxTouchPoints;
    }
    try {
        document.createEvent('TouchEvent');
        touchEvent = true;
    }
    catch (_a) {
        touchEvent = false;
    }
    var touchStart = 'ontouchstart' in window;
    return {
        maxTouchPoints: maxTouchPoints,
        touchEvent: touchEvent,
        touchStart: touchStart,
    };
}

function getOsCpu() {
    return navigator.oscpu;
}

function getLanguages() {
    var n = navigator;
    var result = [];
    var language = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
    if (language !== undefined) {
        result.push([language]);
    }
    if (Array.isArray(n.languages)) {
        // Starting from Chromium 86, there is only a single value in `navigator.language` in Incognito mode:
        // the value of `navigator.language`. Therefore the value is ignored in this browser.
        if (!(isChromium() && isChromium86OrNewer())) {
            result.push(n.languages);
        }
    }
    else if (typeof n.languages === 'string') {
        var languages = n.languages;
        if (languages) {
            result.push(languages.split(','));
        }
    }
    return result;
}

function getColorDepth() {
    return window.screen.colorDepth;
}

function getDeviceMemory() {
    // `navigator.deviceMemory` is a string containing a number in some unidentified cases
    return replaceNaN(toFloat(navigator.deviceMemory), undefined);
}

function getScreenResolution() {
    var s = screen;
    // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
    // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
    // Some browsers even return  screen resolution as not numbers.
    var parseDimension = function (value) { return replaceNaN(toInt(value), null); };
    var dimensions = [parseDimension(s.width), parseDimension(s.height)];
    dimensions.sort().reverse();
    return dimensions;
}

var screenFrameCheckInterval = 2500;
var roundingPrecision = 10;
// The type is readonly to protect from unwanted mutations
var screenFrameBackup;
var screenFrameSizeTimeoutId;
/**
 * Starts watching the screen frame size. When a non-zero size appears, the size is saved and the watch is stopped.
 * Later, when `getScreenFrame` runs, it will return the saved non-zero size if the current size is null.
 *
 * This trick is required to mitigate the fact that the screen frame turns null in some cases.
 * See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
 */
function watchScreenFrame() {
    if (screenFrameSizeTimeoutId !== undefined) {
        return;
    }
    var checkScreenFrame = function () {
        var frameSize = getCurrentScreenFrame();
        if (isFrameSizeNull(frameSize)) {
            screenFrameSizeTimeoutId = setTimeout(checkScreenFrame, screenFrameCheckInterval);
        }
        else {
            screenFrameBackup = frameSize;
            screenFrameSizeTimeoutId = undefined;
        }
    };
    checkScreenFrame();
}
function getScreenFrame() {
    var _this = this;
    watchScreenFrame();
    return function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this, void 0, void 0, function () {
        var frameSize;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    frameSize = getCurrentScreenFrame();
                    if (!isFrameSizeNull(frameSize)) return [3 /*break*/, 2];
                    if (screenFrameBackup) {
                        return [2 /*return*/, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArrays)(screenFrameBackup)];
                    }
                    if (!getFullscreenElement()) return [3 /*break*/, 2];
                    // Some browsers set the screen frame to zero when programmatic fullscreen is on.
                    // There is a chance of getting a non-zero frame after exiting the fullscreen.
                    // See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
                    return [4 /*yield*/, exitFullscreen()];
                case 1:
                    // Some browsers set the screen frame to zero when programmatic fullscreen is on.
                    // There is a chance of getting a non-zero frame after exiting the fullscreen.
                    // See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
                    _a.sent();
                    frameSize = getCurrentScreenFrame();
                    _a.label = 2;
                case 2:
                    if (!isFrameSizeNull(frameSize)) {
                        screenFrameBackup = frameSize;
                    }
                    return [2 /*return*/, frameSize];
            }
        });
    }); };
}
/**
 * Sometimes the available screen resolution changes a bit, e.g. 1900x1440 → 1900x1439. A possible reason: macOS Dock
 * shrinks to fit more icons when there is too little space. The rounding is used to mitigate the difference.
 */
function getRoundedScreenFrame() {
    var _this = this;
    var screenFrameGetter = getScreenFrame();
    return function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this, void 0, void 0, function () {
        var frameSize, processSize;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, screenFrameGetter()];
                case 1:
                    frameSize = _a.sent();
                    processSize = function (sideSize) { return (sideSize === null ? null : round(sideSize, roundingPrecision)); };
                    // It might look like I don't know about `for` and `map`.
                    // In fact, such code is used to avoid TypeScript issues without using `as`.
                    return [2 /*return*/, [processSize(frameSize[0]), processSize(frameSize[1]), processSize(frameSize[2]), processSize(frameSize[3])]];
            }
        });
    }); };
}
function getCurrentScreenFrame() {
    var s = screen;
    // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
    // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
    //
    // Some browsers (IE, Edge ≤18) don't provide `screen.availLeft` and `screen.availTop`. The property values are
    // replaced with 0 in such cases to not lose the entropy from `screen.availWidth` and `screen.availHeight`.
    return [
        replaceNaN(toFloat(s.availTop), null),
        replaceNaN(toFloat(s.width) - toFloat(s.availWidth) - replaceNaN(toFloat(s.availLeft), 0), null),
        replaceNaN(toFloat(s.height) - toFloat(s.availHeight) - replaceNaN(toFloat(s.availTop), 0), null),
        replaceNaN(toFloat(s.availLeft), null),
    ];
}
function isFrameSizeNull(frameSize) {
    for (var i = 0; i < 4; ++i) {
        if (frameSize[i]) {
            return false;
        }
    }
    return true;
}

function getHardwareConcurrency() {
    // sometimes hardware concurrency is a string
    return replaceNaN(toInt(navigator.hardwareConcurrency), undefined);
}

function getTimezone() {
    var _a;
    var DateTimeFormat = (_a = window.Intl) === null || _a === void 0 ? void 0 : _a.DateTimeFormat;
    if (DateTimeFormat) {
        var timezone = new DateTimeFormat().resolvedOptions().timeZone;
        if (timezone) {
            return timezone;
        }
    }
    // For browsers that don't support timezone names
    // The minus is intentional because the JS offset is opposite to the real offset
    var offset = -getTimezoneOffset();
    return "UTC" + (offset >= 0 ? '+' : '') + Math.abs(offset);
}
function getTimezoneOffset() {
    var currentYear = new Date().getFullYear();
    // The timezone offset may change over time due to daylight saving time (DST) shifts.
    // The non-DST timezone offset is used as the result timezone offset.
    // Since the DST season differs in the northern and the southern hemispheres,
    // both January and July timezones offsets are considered.
    return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    toFloat(new Date(currentYear, 0, 1).getTimezoneOffset()), toFloat(new Date(currentYear, 6, 1).getTimezoneOffset()));
}

function getSessionStorage() {
    try {
        return !!window.sessionStorage;
    }
    catch (error) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

// https://bugzilla.mozilla.org/show_bug.cgi?id=781447
function getLocalStorage() {
    try {
        return !!window.localStorage;
    }
    catch (e) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

function getIndexedDB() {
    // IE and Edge don't allow accessing indexedDB in private mode, therefore IE and Edge will have different
    // visitor identifier in normal and private modes.
    if (isTrident() || isEdgeHTML()) {
        return undefined;
    }
    try {
        return !!window.indexedDB;
    }
    catch (e) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

function getOpenDatabase() {
    return !!window.openDatabase;
}

function getCpuClass() {
    return navigator.cpuClass;
}

function getPlatform() {
    // Android Chrome 86 and 87 and Android Firefox 80 and 84 don't mock the platform value when desktop mode is requested
    var platform = navigator.platform;
    // iOS mocks the platform value when desktop version is requested: https://github.com/fingerprintjs/fingerprintjs/issues/514
    // iPad uses desktop mode by default since iOS 13
    // The value is 'MacIntel' on M1 Macs
    // The value is 'iPhone' on iPod Touch
    if (platform === 'MacIntel') {
        if (isWebKit() && !isDesktopSafari()) {
            return isIPad() ? 'iPad' : 'iPhone';
        }
    }
    return platform;
}

function getVendor() {
    return navigator.vendor || '';
}

/**
 * Checks for browser-specific (not engine specific) global variables to tell browsers with the same engine apart.
 * Only somewhat popular browsers are considered.
 */
function getVendorFlavors() {
    var flavors = [];
    for (var _i = 0, _a = [
        // Blink and some browsers on iOS
        'chrome',
        // Safari on macOS
        'safari',
        // Chrome on iOS (checked in 85 on 13 and 87 on 14)
        '__crWeb',
        '__gCrWeb',
        // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
        'yandex',
        // Yandex Browser on iOS (checked in 21.2 on 14)
        '__yb',
        '__ybro',
        // Firefox on iOS (checked in 32 on 14)
        '__firefox__',
        // Edge on iOS (checked in 46 on 14)
        '__edgeTrackingPreventionStatistics',
        'webkit',
        // Opera Touch on iOS (checked in 2.6 on 14)
        'oprt',
        // Samsung Internet on Android (checked in 11.1)
        'samsungAr',
        // UC Browser on Android (checked in 12.10 and 13.0)
        'ucweb',
        'UCShellJava',
        // Puffin on Android (checked in 9.0)
        'puffinDevice',
    ]; _i < _a.length; _i++) {
        var key = _a[_i];
        var value = window[key];
        if (value && typeof value === 'object') {
            flavors.push(key);
        }
    }
    return flavors.sort();
}

/**
 * navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking
 * cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past with
 * site-specific exceptions. Don't rely on it.
 *
 * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js Taken from here
 */
function areCookiesEnabled() {
    var d = document;
    // Taken from here: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js
    // navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking
    // cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past
    // with site-specific exceptions. Don't rely on it.
    // try..catch because some in situations `document.cookie` is exposed but throws a
    // SecurityError if you try to access it; e.g. documents created from data URIs
    // or in sandboxed iframes (depending on flags/context)
    try {
        // Create cookie
        d.cookie = 'cookietest=1; SameSite=Strict;';
        var result = d.cookie.indexOf('cookietest=') !== -1;
        // Delete cookie
        d.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT';
        return result;
    }
    catch (e) {
        return false;
    }
}

var decodeBase64 = atob; // Just for better minification
/**
 * Only single element selector are supported (no operators like space, +, >, etc).
 * `embed` and `position: fixed;` will be considered as blocked anyway because it always has no offsetParent.
 * Avoid `iframe` and anything with `[src=]` because they produce excess HTTP requests.
 *
 * The "inappropriate" selectors are obfuscated. See https://github.com/fingerprintjs/fingerprintjs/issues/734.
 *
 * See docs/content_blockers.md to learn how to make the list
 */
var filters = {
    abpIndo: [
        '#Iklan-Melayang',
        '#Kolom-Iklan-728',
        '#SidebarIklan-wrapper',
        decodeBase64('YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld'),
        '[title="ALIENBOLA" i]',
    ],
    abpvn: [
        '#quangcaomb',
        decodeBase64('Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ='),
        '.quangcao',
        decodeBase64('W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=='),
        decodeBase64('W2hyZWZePSJodHRwczovL3piZXQudm4vIl0='),
    ],
    adBlockFinland: [
        '.mainostila',
        decodeBase64('LnNwb25zb3JpdA=='),
        '.ylamainos',
        decodeBase64('YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd'),
        decodeBase64('YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd'),
    ],
    adBlockPersian: ['#navbar_notice_50', '.kadr', 'TABLE[width="140px"]', '#divAgahi', decodeBase64('I2FkMl9pbmxpbmU=')],
    adBlockWarningRemoval: [
        '#adblock-honeypot',
        '.adblocker-root',
        '.wp_adblock_detect',
        decodeBase64('LmhlYWRlci1ibG9ja2VkLWFk'),
        decodeBase64('I2FkX2Jsb2NrZXI='),
    ],
    adGuardAnnoyances: ['amp-embed[type="zen"]', '.hs-sosyal', '#cookieconsentdiv', 'div[class^="app_gdpr"]', '.as-oil'],
    adGuardBase: [
        '.BetterJsPopOverlay',
        decodeBase64('I2FkXzMwMFgyNTA='),
        decodeBase64('I2Jhbm5lcmZsb2F0MjI='),
        decodeBase64('I2FkLWJhbm5lcg=='),
        decodeBase64('I2NhbXBhaWduLWJhbm5lcg=='),
    ],
    adGuardChinese: [
        decodeBase64('LlppX2FkX2FfSA=='),
        decodeBase64('YVtocmVmKj0iL29kMDA1LmNvbSJd'),
        decodeBase64('YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd'),
        '.qq_nr_lad',
        '#widget-quan',
    ],
    adGuardFrench: [
        decodeBase64('I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr'),
        '#pavePub',
        decodeBase64('LmFkLWRlc2t0b3AtcmVjdGFuZ2xl'),
        '.mobile_adhesion',
        '.widgetadv',
    ],
    adGuardGerman: [
        decodeBase64('LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=='),
        decodeBase64('LmJveHN0YXJ0d2VyYnVuZw=='),
        decodeBase64('LndlcmJ1bmcz'),
        decodeBase64('YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0='),
        decodeBase64('YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0='),
    ],
    adGuardJapanese: [
        '#kauli_yad_1',
        decodeBase64('YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0='),
        decodeBase64('Ll9wb3BJbl9pbmZpbml0ZV9hZA=='),
        decodeBase64('LmFkZ29vZ2xl'),
        decodeBase64('LmFkX3JlZ3VsYXIz'),
    ],
    adGuardMobile: [
        decodeBase64('YW1wLWF1dG8tYWRz'),
        decodeBase64('LmFtcF9hZA=='),
        'amp-embed[type="24smi"]',
        '#mgid_iframe1',
        decodeBase64('I2FkX2ludmlld19hcmVh'),
    ],
    adGuardRussian: [
        decodeBase64('YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0='),
        decodeBase64('LnJlY2xhbWE='),
        'div[id^="smi2adblock"]',
        decodeBase64('ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd'),
        decodeBase64('I2FkX3NxdWFyZQ=='),
    ],
    adGuardSocial: [
        decodeBase64('YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0='),
        decodeBase64('YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0='),
        '.etsy-tweet',
        '#inlineShare',
        '.popup-social',
    ],
    adGuardSpanishPortuguese: [
        '#barraPublicidade',
        '#Publicidade',
        '#publiEspecial',
        '#queTooltip',
        decodeBase64('W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0='),
    ],
    adGuardTrackingProtection: [
        '#qoo-counter',
        decodeBase64('YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=='),
        decodeBase64('YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0='),
        decodeBase64('YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=='),
        '#top100counter',
    ],
    adGuardTurkish: [
        '#backkapat',
        decodeBase64('I3Jla2xhbWk='),
        decodeBase64('YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0='),
        decodeBase64('YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd'),
        decodeBase64('YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ=='),
    ],
    bulgarian: [
        decodeBase64('dGQjZnJlZW5ldF90YWJsZV9hZHM='),
        '#ea_intext_div',
        '.lapni-pop-over',
        '#xenium_hot_offers',
        decodeBase64('I25ld0Fk'),
    ],
    easyList: [
        decodeBase64('I0FEX0NPTlRST0xfMjg='),
        decodeBase64('LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy'),
        '.universalboxADVBOX03',
        decodeBase64('LmFkdmVydGlzZW1lbnQtNzI4eDkw'),
        decodeBase64('LnNxdWFyZV9hZHM='),
    ],
    easyListChina: [
        decodeBase64('YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0='),
        decodeBase64('LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=='),
        decodeBase64('LmZyb250cGFnZUFkdk0='),
        '#taotaole',
        '#aafoot.top_box',
    ],
    easyListCookie: [
        '#AdaCompliance.app-notice',
        '.text-center.rgpd',
        '.panel--cookie',
        '.js-cookies-andromeda',
        '.elxtr-consent',
    ],
    easyListCzechSlovak: [
        '#onlajny-stickers',
        decodeBase64('I3Jla2xhbW5pLWJveA=='),
        decodeBase64('LnJla2xhbWEtbWVnYWJvYXJk'),
        '.sklik',
        decodeBase64('W2lkXj0ic2tsaWtSZWtsYW1hIl0='),
    ],
    easyListDutch: [
        decodeBase64('I2FkdmVydGVudGll'),
        decodeBase64('I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=='),
        '.adstekst',
        decodeBase64('YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0='),
        '#semilo-lrectangle',
    ],
    easyListGermany: [
        decodeBase64('I0FkX1dpbjJkYXk='),
        decodeBase64('I3dlcmJ1bmdzYm94MzAw'),
        decodeBase64('YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd'),
        decodeBase64('I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu'),
        decodeBase64('YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0='),
    ],
    easyListItaly: [
        decodeBase64('LmJveF9hZHZfYW5udW5jaQ=='),
        '.sb-box-pubbliredazionale',
        decodeBase64('YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd'),
        decodeBase64('YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd'),
        decodeBase64('YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ=='),
    ],
    easyListLithuania: [
        decodeBase64('LnJla2xhbW9zX3RhcnBhcw=='),
        decodeBase64('LnJla2xhbW9zX251b3JvZG9z'),
        decodeBase64('aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd'),
        decodeBase64('aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd'),
        decodeBase64('aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd'),
    ],
    estonian: [decodeBase64('QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==')],
    fanboyAnnoyances: [
        '#feedback-tab',
        '#taboola-below-article',
        '.feedburnerFeedBlock',
        '.widget-feedburner-counter',
        '[title="Subscribe to our blog"]',
    ],
    fanboyAntiFacebook: ['.util-bar-module-firefly-visible'],
    fanboyEnhancedTrackers: [
        '.open.pushModal',
        '#issuem-leaky-paywall-articles-zero-remaining-nag',
        '#sovrn_container',
        'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
        '.BlockNag__Card',
    ],
    fanboySocial: [
        '.td-tags-and-social-wrapper-box',
        '.twitterContainer',
        '.youtube-social',
        'a[title^="Like us on Facebook"]',
        'img[alt^="Share on Digg"]',
    ],
    frellwitSwedish: [
        decodeBase64('YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=='),
        decodeBase64('YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=='),
        'article.category-samarbete',
        decodeBase64('ZGl2LmhvbGlkQWRz'),
        'ul.adsmodern',
    ],
    greekAdBlock: [
        decodeBase64('QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd'),
        decodeBase64('QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=='),
        decodeBase64('QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd'),
        'DIV.agores300',
        'TABLE.advright',
    ],
    hungarian: [
        '#cemp_doboz',
        '.optimonk-iframe-container',
        decodeBase64('LmFkX19tYWlu'),
        decodeBase64('W2NsYXNzKj0iR29vZ2xlQWRzIl0='),
        '#hirdetesek_box',
    ],
    iDontCareAboutCookies: [
        '.alert-info[data-block-track*="CookieNotice"]',
        '.ModuleTemplateCookieIndicator',
        '.o--cookies--container',
        '.cookie-msg-info-container',
        '#cookies-policy-sticky',
    ],
    icelandicAbp: [decodeBase64('QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==')],
    latvian: [
        decodeBase64('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0M' +
            'HB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0='),
        decodeBase64('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxc' +
            'Hg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ=='),
    ],
    listKr: [
        decodeBase64('YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0='),
        decodeBase64('I2xpdmVyZUFkV3JhcHBlcg=='),
        decodeBase64('YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=='),
        decodeBase64('aW5zLmZhc3R2aWV3LWFk'),
        '.revenue_unit_item.dable',
    ],
    listeAr: [
        decodeBase64('LmdlbWluaUxCMUFk'),
        '.right-and-left-sponsers',
        decodeBase64('YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=='),
        decodeBase64('YVtocmVmKj0iYm9vcmFxLm9yZyJd'),
        decodeBase64('YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd'),
    ],
    listeFr: [
        decodeBase64('YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=='),
        decodeBase64('I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=='),
        decodeBase64('YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0='),
        '.site-pub-interstitiel',
        'div[id^="crt-"][data-criteo-id]',
    ],
    officialPolish: [
        '#ceneo-placeholder-ceneo-12',
        decodeBase64('W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd'),
        decodeBase64('YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=='),
        decodeBase64('YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=='),
        decodeBase64('ZGl2I3NrYXBpZWNfYWQ='),
    ],
    ro: [
        decodeBase64('YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd'),
        'a[href^="/magazin/"]',
        decodeBase64('YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd'),
        decodeBase64('YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0='),
        decodeBase64('YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd'),
    ],
    ruAd: [
        decodeBase64('YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd'),
        decodeBase64('YVtocmVmKj0iLy91dGltZy5ydS8iXQ=='),
        decodeBase64('YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0='),
        '#pgeldiz',
        '.yandex-rtb-block',
    ],
    thaiAds: [
        'a[href*=macau-uta-popup]',
        decodeBase64('I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=='),
        decodeBase64('LmFkczMwMHM='),
        '.bumq',
        '.img-kosana',
    ],
    webAnnoyancesUltralist: [
        '#mod-social-share-2',
        '#social-tools',
        decodeBase64('LmN0cGwtZnVsbGJhbm5lcg=='),
        '.zergnet-recommend',
        '.yt.btn-link.btn-md.btn',
    ],
};
/**
 * The order of the returned array means nothing (it's always sorted alphabetically).
 *
 * Notice that the source is slightly unstable.
 * Safari provides a 2-taps way to disable all content blockers on a page temporarily.
 * Also content blockers can be disabled permanently for a domain, but it requires 4 taps.
 * So empty array shouldn't be treated as "no blockers", it should be treated as "no signal".
 * If you are a website owner, don't make your visitors want to disable content blockers.
 */
function getDomBlockers(_a) {
    var debug = (_a === void 0 ? {} : _a).debug;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var filterNames, allSelectors, blockedSelectors, activeBlockers;
        var _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!isApplicable()) {
                        return [2 /*return*/, undefined];
                    }
                    filterNames = Object.keys(filters);
                    allSelectors = (_b = []).concat.apply(_b, filterNames.map(function (filterName) { return filters[filterName]; }));
                    return [4 /*yield*/, getBlockedSelectors(allSelectors)];
                case 1:
                    blockedSelectors = _c.sent();
                    if (debug) {
                        printDebug(blockedSelectors);
                    }
                    activeBlockers = filterNames.filter(function (filterName) {
                        var selectors = filters[filterName];
                        var blockedCount = countTruthy(selectors.map(function (selector) { return blockedSelectors[selector]; }));
                        return blockedCount > selectors.length * 0.6;
                    });
                    activeBlockers.sort();
                    return [2 /*return*/, activeBlockers];
            }
        });
    });
}
function isApplicable() {
    // Safari (desktop and mobile) and all Android browsers keep content blockers in both regular and private mode
    return isWebKit() || isAndroid();
}
function getBlockedSelectors(selectors) {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var d, root, elements, blockedSelectors, i, element, holder, i;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    d = document;
                    root = d.createElement('div');
                    elements = new Array(selectors.length);
                    blockedSelectors = {} // Set() isn't used just in case somebody need older browser support
                    ;
                    forceShow(root);
                    // First create all elements that can be blocked. If the DOM steps below are done in a single cycle,
                    // browser will alternate tree modification and layout reading, that is very slow.
                    for (i = 0; i < selectors.length; ++i) {
                        element = selectorToElement(selectors[i]);
                        holder = d.createElement('div') // Protects from unwanted effects of `+` and `~` selectors of filters
                        ;
                        forceShow(holder);
                        holder.appendChild(element);
                        root.appendChild(holder);
                        elements[i] = element;
                    }
                    _b.label = 1;
                case 1:
                    if (!!d.body) return [3 /*break*/, 3];
                    return [4 /*yield*/, wait(50)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 1];
                case 3:
                    d.body.appendChild(root);
                    try {
                        // Then check which of the elements are blocked
                        for (i = 0; i < selectors.length; ++i) {
                            if (!elements[i].offsetParent) {
                                blockedSelectors[selectors[i]] = true;
                            }
                        }
                    }
                    finally {
                        // Then remove the elements
                        (_a = root.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(root);
                    }
                    return [2 /*return*/, blockedSelectors];
            }
        });
    });
}
function forceShow(element) {
    element.style.setProperty('display', 'block', 'important');
}
function printDebug(blockedSelectors) {
    var message = 'DOM blockers debug:\n```';
    for (var _i = 0, _a = Object.keys(filters); _i < _a.length; _i++) {
        var filterName = _a[_i];
        message += "\n" + filterName + ":";
        for (var _b = 0, _c = filters[filterName]; _b < _c.length; _b++) {
            var selector = _c[_b];
            message += "\n  " + selector + " " + (blockedSelectors[selector] ? '🚫' : '➡️');
        }
    }
    // console.log is ok here because it's under a debug clause
    // eslint-disable-next-line no-console
    console.log(message + "\n```");
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut
 */
function getColorGamut() {
    // rec2020 includes p3 and p3 includes srgb
    for (var _i = 0, _a = ['rec2020', 'p3', 'srgb']; _i < _a.length; _i++) {
        var gamut = _a[_i];
        if (matchMedia("(color-gamut: " + gamut + ")").matches) {
            return gamut;
        }
    }
    return undefined;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors
 */
function areColorsInverted() {
    if (doesMatch$4('inverted')) {
        return true;
    }
    if (doesMatch$4('none')) {
        return false;
    }
    return undefined;
}
function doesMatch$4(value) {
    return matchMedia("(inverted-colors: " + value + ")").matches;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors
 */
function areColorsForced() {
    if (doesMatch$3('active')) {
        return true;
    }
    if (doesMatch$3('none')) {
        return false;
    }
    return undefined;
}
function doesMatch$3(value) {
    return matchMedia("(forced-colors: " + value + ")").matches;
}

var maxValueToCheck = 100;
/**
 * If the display is monochrome (e.g. black&white), the value will be ≥0 and will mean the number of bits per pixel.
 * If the display is not monochrome, the returned value will be 0.
 * If the browser doesn't support this feature, the returned value will be undefined.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome
 */
function getMonochromeDepth() {
    if (!matchMedia('(min-monochrome: 0)').matches) {
        // The media feature isn't supported by the browser
        return undefined;
    }
    // A variation of binary search algorithm can be used here.
    // But since expected values are very small (≤10), there is no sense in adding the complexity.
    for (var i = 0; i <= maxValueToCheck; ++i) {
        if (matchMedia("(max-monochrome: " + i + ")").matches) {
            return i;
        }
    }
    throw new Error('Too high value');
}

/**
 * @see https://www.w3.org/TR/mediaqueries-5/#prefers-contrast
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
 */
function getContrastPreference() {
    if (doesMatch$2('no-preference')) {
        return 0 /* None */;
    }
    // The sources contradict on the keywords. Probably 'high' and 'low' will never be implemented.
    // Need to check it when all browsers implement the feature.
    if (doesMatch$2('high') || doesMatch$2('more')) {
        return 1 /* More */;
    }
    if (doesMatch$2('low') || doesMatch$2('less')) {
        return -1 /* Less */;
    }
    if (doesMatch$2('forced')) {
        return 10 /* ForcedColors */;
    }
    return undefined;
}
function doesMatch$2(value) {
    return matchMedia("(prefers-contrast: " + value + ")").matches;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
function isMotionReduced() {
    if (doesMatch$1('reduce')) {
        return true;
    }
    if (doesMatch$1('no-preference')) {
        return false;
    }
    return undefined;
}
function doesMatch$1(value) {
    return matchMedia("(prefers-reduced-motion: " + value + ")").matches;
}

/**
 * @see https://www.w3.org/TR/mediaqueries-5/#dynamic-range
 */
function isHDR() {
    if (doesMatch('high')) {
        return true;
    }
    if (doesMatch('standard')) {
        return false;
    }
    return undefined;
}
function doesMatch(value) {
    return matchMedia("(dynamic-range: " + value + ")").matches;
}

var M = Math; // To reduce the minified code size
var fallbackFn = function () { return 0; };
/**
 * @see https://gitlab.torproject.org/legacy/trac/-/issues/13018
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=531915
 */
function getMathFingerprint() {
    // Native operations
    var acos = M.acos || fallbackFn;
    var acosh = M.acosh || fallbackFn;
    var asin = M.asin || fallbackFn;
    var asinh = M.asinh || fallbackFn;
    var atanh = M.atanh || fallbackFn;
    var atan = M.atan || fallbackFn;
    var sin = M.sin || fallbackFn;
    var sinh = M.sinh || fallbackFn;
    var cos = M.cos || fallbackFn;
    var cosh = M.cosh || fallbackFn;
    var tan = M.tan || fallbackFn;
    var tanh = M.tanh || fallbackFn;
    var exp = M.exp || fallbackFn;
    var expm1 = M.expm1 || fallbackFn;
    var log1p = M.log1p || fallbackFn;
    // Operation polyfills
    var powPI = function (value) { return M.pow(M.PI, value); };
    var acoshPf = function (value) { return M.log(value + M.sqrt(value * value - 1)); };
    var asinhPf = function (value) { return M.log(value + M.sqrt(value * value + 1)); };
    var atanhPf = function (value) { return M.log((1 + value) / (1 - value)) / 2; };
    var sinhPf = function (value) { return M.exp(value) - 1 / M.exp(value) / 2; };
    var coshPf = function (value) { return (M.exp(value) + 1 / M.exp(value)) / 2; };
    var expm1Pf = function (value) { return M.exp(value) - 1; };
    var tanhPf = function (value) { return (M.exp(2 * value) - 1) / (M.exp(2 * value) + 1); };
    var log1pPf = function (value) { return M.log(1 + value); };
    // Note: constant values are empirical
    return {
        acos: acos(0.123124234234234242),
        acosh: acosh(1e308),
        acoshPf: acoshPf(1e154),
        asin: asin(0.123124234234234242),
        asinh: asinh(1),
        asinhPf: asinhPf(1),
        atanh: atanh(0.5),
        atanhPf: atanhPf(0.5),
        atan: atan(0.5),
        sin: sin(-1e300),
        sinh: sinh(1),
        sinhPf: sinhPf(1),
        cos: cos(10.000000000123),
        cosh: cosh(1),
        coshPf: coshPf(1),
        tan: tan(-1e300),
        tanh: tanh(1),
        tanhPf: tanhPf(1),
        exp: exp(1),
        expm1: expm1(1),
        expm1Pf: expm1Pf(1),
        log1p: log1p(10),
        log1pPf: log1pPf(10),
        powPI: powPI(-100),
    };
}

/**
 * We use m or w because these two characters take up the maximum width.
 * Also there are a couple of ligatures.
 */
var defaultText = 'mmMwWLliI0fiflO&1';
/**
 * Settings of text blocks to measure. The keys are random but persistent words.
 */
var presets = {
    /**
     * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
     * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
     */
    default: [],
    /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
    apple: [{ font: '-apple-system-body' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    serif: [{ fontFamily: 'serif' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    sans: [{ fontFamily: 'sans-serif' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    mono: [{ fontFamily: 'monospace' }],
    /**
     * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
     * The height can be 0 in Chrome on a retina display.
     */
    min: [{ fontSize: '1px' }],
    /** Tells one OS from another in desktop Chrome. */
    system: [{ fontFamily: 'system-ui' }],
};
/**
 * The result is a dictionary of the width of the text samples.
 * Heights aren't included because they give no extra entropy and are unstable.
 *
 * The result is very stable in IE 11, Edge 18 and Safari 14.
 * The result changes when the OS pixel density changes in Chromium 87. The real pixel density is required to solve,
 * but seems like it's impossible: https://stackoverflow.com/q/1713771/1118709.
 * The "min" and the "mono" (only on Windows) value may change when the page is zoomed in Firefox 87.
 */
function getFontPreferences() {
    return withNaturalFonts(function (document, container) {
        var elements = {};
        var sizes = {};
        // First create all elements to measure. If the DOM steps below are done in a single cycle,
        // browser will alternate tree modification and layout reading, that is very slow.
        for (var _i = 0, _a = Object.keys(presets); _i < _a.length; _i++) {
            var key = _a[_i];
            var _b = presets[key], _c = _b[0], style = _c === void 0 ? {} : _c, _d = _b[1], text = _d === void 0 ? defaultText : _d;
            var element = document.createElement('span');
            element.textContent = text;
            element.style.whiteSpace = 'nowrap';
            for (var _e = 0, _f = Object.keys(style); _e < _f.length; _e++) {
                var name_1 = _f[_e];
                var value = style[name_1];
                if (value !== undefined) {
                    element.style[name_1] = value;
                }
            }
            elements[key] = element;
            container.appendChild(document.createElement('br'));
            container.appendChild(element);
        }
        // Then measure the created elements
        for (var _g = 0, _h = Object.keys(presets); _g < _h.length; _g++) {
            var key = _h[_g];
            sizes[key] = elements[key].getBoundingClientRect().width;
        }
        return sizes;
    });
}
/**
 * Creates a DOM environment that provides the most natural font available, including Android OS font.
 * Measurements of the elements are zoom-independent.
 * Don't put a content to measure inside an absolutely positioned element.
 */
function withNaturalFonts(action, containerWidthPx) {
    if (containerWidthPx === void 0) { containerWidthPx = 4000; }
    /*
     * Requirements for Android Chrome to apply the system font size to a text inside an iframe:
     * - The iframe mustn't have a `display: none;` style;
     * - The text mustn't be positioned absolutely;
     * - The text block must be wide enough.
     *   2560px on some devices in portrait orientation for the biggest font size option (32px);
     * - There must be much enough text to form a few lines (I don't know the exact numbers);
     * - The text must have the `text-size-adjust: none` style. Otherwise the text will scale in "Desktop site" mode;
     *
     * Requirements for Android Firefox to apply the system font size to a text inside an iframe:
     * - The iframe document must have a header: `<meta name="viewport" content="width=device-width, initial-scale=1" />`.
     *   The only way to set it is to use the `srcdoc` attribute of the iframe;
     * - The iframe content must get loaded before adding extra content with JavaScript;
     *
     * https://example.com as the iframe target always inherits Android font settings so it can be used as a reference.
     *
     * Observations on how page zoom affects the measurements:
     * - macOS Safari 11.1, 12.1, 13.1, 14.0: zoom reset + offsetWidth = 100% reliable;
     * - macOS Safari 11.1, 12.1, 13.1, 14.0: zoom reset + getBoundingClientRect = 100% reliable;
     * - macOS Safari 14.0: offsetWidth = 5% fluctuation;
     * - macOS Safari 14.0: getBoundingClientRect = 5% fluctuation;
     * - iOS Safari 9, 10, 11.0, 12.0: haven't found a way to zoom a page (pinch doesn't change layout);
     * - iOS Safari 13.1, 14.0: zoom reset + offsetWidth = 100% reliable;
     * - iOS Safari 13.1, 14.0: zoom reset + getBoundingClientRect = 100% reliable;
     * - iOS Safari 14.0: offsetWidth = 100% reliable;
     * - iOS Safari 14.0: getBoundingClientRect = 100% reliable;
     * - Chrome 42, 65, 80, 87: zoom 1/devicePixelRatio + offsetWidth = 1px fluctuation;
     * - Chrome 42, 65, 80, 87: zoom 1/devicePixelRatio + getBoundingClientRect = 100% reliable;
     * - Chrome 87: offsetWidth = 1px fluctuation;
     * - Chrome 87: getBoundingClientRect = 0.7px fluctuation;
     * - Firefox 48, 51: offsetWidth = 10% fluctuation;
     * - Firefox 48, 51: getBoundingClientRect = 10% fluctuation;
     * - Firefox 52, 53, 57, 62, 66, 67, 68, 71, 75, 80, 84: offsetWidth = width 100% reliable, height 10% fluctuation;
     * - Firefox 52, 53, 57, 62, 66, 67, 68, 71, 75, 80, 84: getBoundingClientRect = width 100% reliable, height 10%
     *   fluctuation;
     * - Android Chrome 86: haven't found a way to zoom a page (pinch doesn't change layout);
     * - Android Firefox 84: font size in accessibility settings changes all the CSS sizes, but offsetWidth and
     *   getBoundingClientRect keep measuring with regular units, so the size reflects the font size setting and doesn't
     *   fluctuate;
     * - IE 11, Edge 18: zoom 1/devicePixelRatio + offsetWidth = 100% reliable;
     * - IE 11, Edge 18: zoom 1/devicePixelRatio + getBoundingClientRect = reflects the zoom level;
     * - IE 11, Edge 18: offsetWidth = 100% reliable;
     * - IE 11, Edge 18: getBoundingClientRect = 100% reliable;
     */
    return withIframe(function (_, iframeWindow) {
        var iframeDocument = iframeWindow.document;
        var iframeBody = iframeDocument.body;
        var bodyStyle = iframeBody.style;
        bodyStyle.width = containerWidthPx + "px";
        bodyStyle.webkitTextSizeAdjust = bodyStyle.textSizeAdjust = 'none';
        // See the big comment above
        if (isChromium()) {
            iframeBody.style.zoom = "" + 1 / iframeWindow.devicePixelRatio;
        }
        else if (isWebKit()) {
            iframeBody.style.zoom = 'reset';
        }
        // See the big comment above
        var linesOfText = iframeDocument.createElement('div');
        linesOfText.textContent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArrays)(Array((containerWidthPx / 20) << 0)).map(function () { return 'word'; }).join(' ');
        iframeBody.appendChild(linesOfText);
        return action(iframeDocument, iframeBody);
    }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}

/**
 * The list of entropy sources used to make visitor identifiers.
 *
 * This value isn't restricted by Semantic Versioning, i.e. it may be changed without bumping minor or major version of
 * this package.
 *
 * Note: Rollup and Webpack are smart enough to remove unused properties of this object during tree-shaking, so there is
 * no need to export the sources individually.
 */
var sources = {
    // READ FIRST:
    // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
    // to learn how entropy source works and how to make your own.
    // The sources run in this exact order.
    // The asynchronous sources are at the start to run in parallel with other sources.
    fonts: getFonts,
    domBlockers: getDomBlockers,
    fontPreferences: getFontPreferences,
    audio: getAudioFingerprint,
    screenFrame: getRoundedScreenFrame,
    osCpu: getOsCpu,
    languages: getLanguages,
    colorDepth: getColorDepth,
    deviceMemory: getDeviceMemory,
    screenResolution: getScreenResolution,
    hardwareConcurrency: getHardwareConcurrency,
    timezone: getTimezone,
    sessionStorage: getSessionStorage,
    localStorage: getLocalStorage,
    indexedDB: getIndexedDB,
    openDatabase: getOpenDatabase,
    cpuClass: getCpuClass,
    platform: getPlatform,
    plugins: getPlugins,
    canvas: getCanvasFingerprint,
    touchSupport: getTouchSupport,
    vendor: getVendor,
    vendorFlavors: getVendorFlavors,
    cookiesEnabled: areCookiesEnabled,
    colorGamut: getColorGamut,
    invertedColors: areColorsInverted,
    forcedColors: areColorsForced,
    monochrome: getMonochromeDepth,
    contrast: getContrastPreference,
    reducedMotion: isMotionReduced,
    hdr: isHDR,
    math: getMathFingerprint,
};
/**
 * Loads the built-in entropy sources.
 * Returns a function that collects the entropy components to make the visitor identifier.
 */
function loadBuiltinSources(options) {
    return loadSources(sources, options, []);
}

var commentTemplate = '$ if upgrade to Pro: https://fpjs.dev/pro';
function getConfidence(components) {
    var openConfidenceScore = getOpenConfidenceScore(components);
    var proConfidenceScore = deriveProConfidenceScore(openConfidenceScore);
    return { score: openConfidenceScore, comment: commentTemplate.replace(/\$/g, "" + proConfidenceScore) };
}
function getOpenConfidenceScore(components) {
    // In order to calculate the true probability of the visitor identifier being correct, we need to know the number of
    // website visitors (the higher the number, the less the probability because the fingerprint entropy is limited).
    // JS agent doesn't know the number of visitors, so we can only do an approximate assessment.
    if (isAndroid()) {
        return 0.4;
    }
    // Safari (mobile and desktop)
    if (isWebKit()) {
        return isDesktopSafari() ? 0.5 : 0.3;
    }
    var platform = components.platform.value || '';
    // Windows
    if (/^Win/.test(platform)) {
        // The score is greater than on macOS because of the higher variety of devices running Windows.
        // Chrome provides more entropy than Firefox according too
        // https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22platform%22%3A%7B%22%24in%22%3A%5B%22Windows%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-11%22%2C%22dateEnd%22%3A%222020-10%22%2C%22segments%22%3A%22-1000%22%7D
        // So we assign the same score to them.
        return 0.6;
    }
    // macOS
    if (/^Mac/.test(platform)) {
        // Chrome provides more entropy than Safari and Safari provides more entropy than Firefox.
        // Chrome is more popular than Safari and Safari is more popular than Firefox according to
        // https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22platform%22%3A%7B%22%24in%22%3A%5B%22Mac%20OS%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-11%22%2C%22dateEnd%22%3A%222020-10%22%2C%22segments%22%3A%22-1000%22%7D
        // So we assign the same score to them.
        return 0.5;
    }
    // Another platform, e.g. a desktop Linux. It's rare, so it should be pretty unique.
    return 0.7;
}
function deriveProConfidenceScore(openConfidenceScore) {
    return round(0.99 + 0.01 * openConfidenceScore, 0.0001);
}

function componentsToCanonicalString(components) {
    var result = '';
    for (var _i = 0, _a = Object.keys(components).sort(); _i < _a.length; _i++) {
        var componentKey = _a[_i];
        var component = components[componentKey];
        var value = component.error ? 'error' : JSON.stringify(component.value);
        result += "" + (result ? '|' : '') + componentKey.replace(/([:|\\])/g, '\\$1') + ":" + value;
    }
    return result;
}
function componentsToDebugString(components) {
    return JSON.stringify(components, function (_key, value) {
        if (value instanceof Error) {
            return errorToObject(value);
        }
        return value;
    }, 2);
}
function hashComponents(components) {
    return x64hash128(componentsToCanonicalString(components));
}
/**
 * Makes a GetResult implementation that calculates the visitor id hash on demand.
 * Designed for optimisation.
 */
function makeLazyGetResult(components) {
    var visitorIdCache;
    // This function runs very fast, so there is no need to make it lazy
    var confidence = getConfidence(components);
    // A plain class isn't used because its getters and setters aren't enumerable.
    return {
        get visitorId() {
            if (visitorIdCache === undefined) {
                visitorIdCache = hashComponents(this.components);
            }
            return visitorIdCache;
        },
        set visitorId(visitorId) {
            visitorIdCache = visitorId;
        },
        confidence: confidence,
        components: components,
        version: version,
    };
}
/**
 * A delay is required to ensure consistent entropy components.
 * See https://github.com/fingerprintjs/fingerprintjs/issues/254
 * and https://github.com/fingerprintjs/fingerprintjs/issues/307
 * and https://github.com/fingerprintjs/fingerprintjs/commit/945633e7c5f67ae38eb0fea37349712f0e669b18
 */
function prepareForSources(delayFallback) {
    if (delayFallback === void 0) { delayFallback = 50; }
    // A proper deadline is unknown. Let it be twice the fallback timeout so that both cases have the same average time.
    return requestIdleCallbackIfAvailable(delayFallback, delayFallback * 2);
}
/**
 * The function isn't exported from the index file to not allow to call it without `load()`.
 * The hiding gives more freedom for future non-breaking updates.
 *
 * A factory function is used instead of a class to shorten the attribute names in the minified code.
 * Native private class fields could've been used, but TypeScript doesn't allow them with `"target": "es5"`.
 */
function makeAgent(getComponents, debug) {
    var creationTime = Date.now();
    return {
        get: function (options) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
                var startTime, components, result;
                return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            startTime = Date.now();
                            return [4 /*yield*/, getComponents()];
                        case 1:
                            components = _a.sent();
                            result = makeLazyGetResult(components);
                            if (debug || (options === null || options === void 0 ? void 0 : options.debug)) {
                                // console.log is ok here because it's under a debug clause
                                // eslint-disable-next-line no-console
                                console.log("Copy the text below to get the debug data:\n\n```\nversion: " + result.version + "\nuserAgent: " + navigator.userAgent + "\ntimeBetweenLoadAndGet: " + (startTime - creationTime) + "\nvisitorId: " + result.visitorId + "\ncomponents: " + componentsToDebugString(components) + "\n```");
                            }
                            return [2 /*return*/, result];
                    }
                });
            });
        },
    };
}
/**
 * Sends an unpersonalized AJAX request to collect installation statistics
 */
function monitor() {
    // The FingerprintJS CDN (https://github.com/fingerprintjs/cdn) replaces `window.__fpjs_d_m` with `true`
    if (window.__fpjs_d_m || Math.random() >= 0.001) {
        return;
    }
    try {
        var request = new XMLHttpRequest();
        request.open('get', "https://m1.openfpcdn.io/fingerprintjs/v" + version + "/npm-monitoring", true);
        request.send();
    }
    catch (error) {
        // console.error is ok here because it's an unexpected error handler
        // eslint-disable-next-line no-console
        console.error(error);
    }
}
/**
 * Builds an instance of Agent and waits a delay required for a proper operation.
 */
function load(_a) {
    var _b = _a === void 0 ? {} : _a, delayFallback = _b.delayFallback, debug = _b.debug, _c = _b.monitoring, monitoring = _c === void 0 ? true : _c;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        var getComponents;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (monitoring) {
                        monitor();
                    }
                    return [4 /*yield*/, prepareForSources(delayFallback)];
                case 1:
                    _d.sent();
                    getComponents = loadBuiltinSources({ debug: debug });
                    return [2 /*return*/, makeAgent(getComponents, debug)];
            }
        });
    });
}

// The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).
// It should contain all the public exported values.
var index = { load: load, hashComponents: hashComponents, componentsToDebugString: componentsToDebugString };
// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
/** Not documented, out of Semantic Versioning, usage is at your own risk */
var murmurX64Hash128 = x64hash128;




/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@neolife/analytics-v2","version":"0.0.2","author":"Welington Sampaio <welington.sampaio@vturb.com.br>","license":"UNLICENSED","private":true,"main":"dist/analytics-v2.min.js","typings":"frame/types/index.d.ts","scripts":{"start-embed":"live-server demo/index.html --port=5000","start":"npm run dev","test":"npx jest","build":"cross-env NODE_ENV=production webpack --config webpack/prod.config.js --progress","dev":"cross-env NODE_ENV=development webpack-dev-server --config webpack/dev.config.js --port 5000","test-lint":"eslint src webpack","format":"eslint \\"**/*.js\\" --fix && prettier \\"**/*.{js,json,md}\\" --write","format:staged":"eslint \\"**/*.js\\" --fix && pretty-quick --staged --verbose --pattern \\"**/*.{js,json,md}\\"","format:check":"eslint \\"**/*.js\\" && prettier-check \\"**/*.{js,json,md}\\""},"files":["dist","frame"],"devDependencies":{"@babel/preset-env":"^7.18.10","@babel/preset-typescript":"^7.18.6","@types/jest":"^28.1.4","@types/node":"*","@types/puppeteer":"^5.4.6","babel-loader":"^8.0.4","canvas":"^2.10.1","concurrently":"^7.2.2","cross-env":"^7.0.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.2.1","git-revision-webpack-plugin":"^3.0.3","jest":"^29.0.3","jest-environment-jsdom":"^29.0.3","jest-puppeteer":"^6.1.1","prettier":"^2.7.1","prettier-check":"^2.0.0","puppeteer":"^17.1.3","serve":"^13.0.2","ts-jest":"^29.0.1","ts-loader":"^9.3.1","ts-node":"^10.8.2","typescript":"^4.7.4","webpack":"^5.74.0","webpack-cli":"^4.10.0","webpack-dev-server":"^4.10.0"},"dependencies":{"@fingerprintjs/fingerprintjs":"^3.3.3","localforage":"^1.10.0"}}');

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mercury__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



if (!window.mercury) {
  console.log("::MERCURY:: v(".concat(_package_json__WEBPACK_IMPORTED_MODULE_1__.version, ")"));
  window.mercury = window.mercury || new _mercury__WEBPACK_IMPORTED_MODULE_0__["default"]();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.mercury);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLENBQUMsRUFBRSxNQUFNO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLG1CQUFtQixxQkFBTSxtQkFBbUIscUJBQU0sbUZBQW1GO0FBQ3RJLENBQUMsRUFBRSxNQUFNO0FBQ1Q7O0FBRUEscUdBQXFHLHFCQUFxQixtQkFBbUI7O0FBRTdJLGtEQUFrRCwwQ0FBMEM7O0FBRTVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCO0FBQ3RCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFD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aUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsa0RBQWtELFFBQVE7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FO0FBQ25FOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsU0FBUztBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwRUFBMEUsV0FBVztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxTQUFTO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUc7QUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvdkZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5RTs7QUFFekU7O0FBRUE7QUFDQSw0Q0FBNEMsc0RBQXNEO0FBQ2xHO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzREFBc0QsbUJBQW1CLElBQUksMEJBQTBCLElBQUk7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0NBQWdDLHFCQUFxQixnQ0FBZ0M7QUFDeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQSxlQUFlLGtEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG1CQUFtQjtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVywrQ0FBUSxHQUFHLHlIQUF5SDtBQUMvSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELCtCQUErQjtBQUNoRjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFVBQVUsb0VBQW9FLElBQUk7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVSwyQ0FBMkMsSUFBSTtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCwrREFBK0Q7QUFDL0c7QUFDQTtBQUNBLHFDQUFxQyx1Q0FBdUM7QUFDNUUscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0VBQWtFLDBCQUEwQjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsNkNBQTZDO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLGdEQUFTO0FBQ3hCO0FBQ0EsbUJBQW1CLGtEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSwrQkFBK0I7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtEQUFXO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0lBQWtJLDZDQUE2QztBQUMvSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSkFBb0o7QUFDcEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxtRUFBbUU7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxxQ0FBcUMseURBQXlEO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsV0FBVyxnREFBUztBQUNwQjtBQUNBLGVBQWUsa0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxnQkFBZ0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSSxnQkFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGtFQUFrRSw2Q0FBNkM7QUFDL0c7QUFDQSxvREFBb0Qsd0JBQXdCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3RELGdGQUFnRjtBQUNoRixrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBLGlEQUFpRCwyQ0FBMkM7QUFDNUYsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0JBQWdCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU8sZ0RBQVM7QUFDekM7QUFDQSxlQUFlLGtEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscURBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTyxnREFBUztBQUN6QztBQUNBLGVBQWUsa0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0JBQWdCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xEO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsV0FBVyxnREFBUztBQUNwQjtBQUNBO0FBQ0EsZUFBZSxrREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzR0FBc0csNkJBQTZCO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsb0NBQW9DO0FBQy9IO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFTO0FBQ3BCO0FBQ0EsZUFBZSxrREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzQkFBc0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTtBQUNBO0FBQ0EsbURBQW1ELGdCQUFnQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7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Ozs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUNBLElBQUksQ0FBQ2UsTUFBTSxDQUFDZ0MsT0FBWixFQUFxQjtFQUNqQmlDLE9BQU8sQ0FBQ0MsR0FBUix5QkFBNkJVLGtEQUE3QjtFQUNBNUUsTUFBTSxDQUFDZ0MsT0FBUCxHQUFpQmhDLE1BQU0sQ0FBQ2dDLE9BQVAsSUFBa0IsSUFBSXpDLGdEQUFKLEVBQW5DO0FBQ0g7O0FBQ0QsaUVBQWVTLE1BQU0sQ0FBQ2dDLE9BQXRCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbmVvbGlmZS9hbmFseXRpY3MtdjIvLi9mcmFtZS9tZXJjdXJ5LnRzIiwid2VicGFjazovL0BuZW9saWZlL2FuYWx5dGljcy12Mi8uL2ZyYW1lL3N5bmMudHMiLCJ3ZWJwYWNrOi8vQG5lb2xpZmUvYW5hbHl0aWNzLXYyLy4vbm9kZV9tb2R1bGVzL2xvY2FsZm9yYWdlL2Rpc3QvbG9jYWxmb3JhZ2UuanMiLCJ3ZWJwYWNrOi8vQG5lb2xpZmUvYW5hbHl0aWNzLXYyLy4vbm9kZV9tb2R1bGVzL0BmaW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvZGlzdC9mcC5lc20uanMiLCJ3ZWJwYWNrOi8vQG5lb2xpZmUvYW5hbHl0aWNzLXYyLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9AbmVvbGlmZS9hbmFseXRpY3MtdjIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQG5lb2xpZmUvYW5hbHl0aWNzLXYyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BuZW9saWZlL2FuYWx5dGljcy12Mi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQG5lb2xpZmUvYW5hbHl0aWNzLXYyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQG5lb2xpZmUvYW5hbHl0aWNzLXYyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQG5lb2xpZmUvYW5hbHl0aWNzLXYyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQG5lb2xpZmUvYW5hbHl0aWNzLXYyLy4vZnJhbWUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgU3luYyBmcm9tICcuL3N5bmMnO1xuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBwcm9kdWN0OiBudWxsLFxuICAgIGFjY291bnRfaWQ6IG51bGxcbn07XG5jb25zdCBkZWZhdWx0U2V0dGluZyA9IHtcbiAgICBwYXRoOiAncmVjZWl2ZSdcbn07XG5jbGFzcyBNZXJjdXJ5IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30sIHNldHRpbmdzID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnKSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5nKSwgc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnN5bmMgPSBuZXcgU3luYyh0aGlzKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlTWVyY3VyeSgpO1xuICAgIH1cbiAgICBwcmVwYXJlTWVyY3VyeSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5Ub01lc3NhZ2VzKCk7XG4gICAgICAgIHRoaXMucmVhZGluZXNzQ2hlY2soKTtcbiAgICB9XG4gICAgcmVhZGluZXNzQ2hlY2soKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgc3RhdHVzOiAncmVhZHknIH0sICcqJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsaXN0ZW5Ub01lc3NhZ2VzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gbWVzc2FnZS5kYXRhLm9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmxvYWRPcHRpb25zKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRTZXR0aW5ncyhtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS50eXBlID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudChtZXNzYWdlLmRhdGEuZXZlbnQsIG1lc3NhZ2UuZGF0YS52YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmRhdGEudHlwZSA9PT0gJ2NvbnZlc2lvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnNpb24obWVzc2FnZS5kYXRhLmV2ZW50LCBtZXNzYWdlLmRhdGEudmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZE9wdGlvbnMobWVzc2FnZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAoISgoX2EgPSB0aGlzLm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hY2NvdW50X2lkKSAmJiAobWVzc2FnZSA9PT0gbnVsbCB8fCBtZXNzYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZXNzYWdlLmFjY291bnRfaWQpKVxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFjY291bnRfaWQgPSBtZXNzYWdlLmFjY291bnRfaWQ7XG4gICAgICAgIGlmICghKChfYiA9IHRoaXMub3B0aW9ucykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnByb2R1Y3QpICYmIChtZXNzYWdlID09PSBudWxsIHx8IG1lc3NhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lc3NhZ2UucHJvZHVjdCkpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucHJvZHVjdCA9IG1lc3NhZ2UucHJvZHVjdDtcbiAgICB9XG4gICAgbG9hZFNldHRpbmdzKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGlmICgoKF9hID0gbWVzc2FnZSA9PT0gbnVsbCB8fCBtZXNzYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZXNzYWdlLnNldHRpbmdzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGF0aCkgJiYgKChfYiA9IG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVzc2FnZS5zZXR0aW5ncykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhdGgpICE9PSB0aGlzLnNldHRpbmdzLnBhdGgpXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhdGggPSAoX2MgPSBtZXNzYWdlID09PSBudWxsIHx8IG1lc3NhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lc3NhZ2Uuc2V0dGluZ3MpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5wYXRoO1xuICAgIH1cbiAgICBldmVudChldmVudCwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLnN5bmMubWVzc2FnZShPYmplY3QuYXNzaWduKHsgdGFyZ2V0OiAnbWVyY3VyeVN5bmMnLCB0eXBlOiAnZXZlbnQnLCBldmVudCwgdmFsdWU6IHZhbHVlIH0sIG9wdGlvbnMpKTtcbiAgICB9XG4gICAgY29udmVyc2lvbihuYW1lLCB2YWx1ZSA9IDEsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLnN5bmMubWVzc2FnZShPYmplY3QuYXNzaWduKHsgdGFyZ2V0OiAnbWVyY3VyeVN5bmMnLCB0eXBlOiAnY29udmVyc2lvbicsIG5hbWUsXG4gICAgICAgICAgICB2YWx1ZSB9LCBvcHRpb25zKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTWVyY3VyeTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcbmltcG9ydCBmaW5nZXJwcmludGpzIGZyb20gJ0BmaW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMnO1xuY29uc3QgU1RPUkFHRV9JVEVNID0gJ21lcmN1cnlUb1N5bmMnO1xuY2xhc3MgU3luYyB7XG4gICAgY29uc3RydWN0b3IobWVyY3VyeSkge1xuICAgICAgICB0aGlzLm1lcmN1cnkgPSBtZXJjdXJ5O1xuICAgICAgICB0aGlzLnRpbWVyID0gMzAwMDtcbiAgICAgICAgdGhpcy5vbmxpbmUgPSBuYXZpZ2F0b3Iub25MaW5lO1xuICAgICAgICB0aGlzLmRpc2FibGVDaGVjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBsb2NhbGZvcmFnZS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgICBuYW1lOiAnbWVyY3VyeScsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNhdmVEZXZpY2UoKTtcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RJbnRlcmFjdGlvbiA9IDA7XG4gICAgICAgIHRoaXMucHVzaGVyID0gW107XG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VuZCgpO1xuICAgICAgICB9LCAxNTAwMCk7XG4gICAgfVxuICAgIHNhdmVEZXZpY2UoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkZXZpY2VfaWQgPSB5aWVsZCB0aGlzLmdldERldmljZUlkKCk7XG4gICAgICAgICAgICB0aGlzLmRldmljZV9pZCA9IGRldmljZV9pZDtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKCdmcC12dHVyYicsIGRldmljZV9pZCk7XG4gICAgICAgICAgICB0aGlzLnNlbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldERldmljZUlkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZGV2aWNlX2lkID0gKHlpZWxkIHRoaXMuc3RvcmFnZS5nZXRJdGVtKCdmcC12dHVyYicpKTtcbiAgICAgICAgICAgIGlmIChkZXZpY2VfaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldmljZV9pZDtcbiAgICAgICAgICAgIGNvbnN0IGZwUHJvbWlzZSA9IHlpZWxkIGZpbmdlcnByaW50anMubG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuICh5aWVsZCBmcFByb21pc2UuZ2V0KCkpLnZpc2l0b3JJZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc3BhdGNoKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wdXNoKGRhdGEpO1xuICAgICAgICB0aGlzLnNlbmQoKTtcbiAgICB9XG4gICAgZXZlbnRzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgdGhpcy51cGRhdGVPbmxpbmVTdGF0dXMuYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgdGhpcy51cGRhdGVPbmxpbmVTdGF0dXMuYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1c2goZGF0YSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoZXIgPSBbLi4udGhpcy5wdXNoZXIsIC4uLihBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9JVEVNLCBbLi4uKCh5aWVsZCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0lURU0pKSB8fCBbXSksIC4uLihBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWZhdWx0UGFyYW1zKCkge1xuICAgICAgICBjb25zdCByZXQgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlX2lkKVxuICAgICAgICAgICAgcmV0LmRldmljZV9pZCA9IHRoaXMuZGV2aWNlX2lkO1xuICAgICAgICBpZiAodGhpcy5tZXJjdXJ5Lm9wdGlvbnMucHJvZHVjdClcbiAgICAgICAgICAgIHJldC5wcm9kdWN0ID0gdGhpcy5tZXJjdXJ5Lm9wdGlvbnMucHJvZHVjdDtcbiAgICAgICAgaWYgKHRoaXMubWVyY3VyeS5vcHRpb25zLmFjY291bnRfaWQpXG4gICAgICAgICAgICByZXQuYWNjb3VudF9pZCA9IHRoaXMubWVyY3VyeS5vcHRpb25zLmFjY291bnRfaWQ7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHNlbmQoZm9yY2UgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRldmljZV9pZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoZm9yY2UgfHwgdGhpcy5kaXNhYmxlQ2hlY2sgfHwgdGhpcy5sYXN0SW50ZXJhY3Rpb24gKyB0aGlzLnRpbWVyIDwgRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0geWllbGQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9JVEVNKTtcbiAgICAgICAgICAgICAgICBpZiAoKGRhdGEgfHwgW10pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgZXJhc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuc3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfSVRFTSwgW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMucHVzaGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2hlciA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgKCFBcnJheS5pc0FycmF5KGRhdGEpIHx8IGRhdGEubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEludGVyYWN0aW9uID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy50aW1lciArIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnNlbmRCZWFjb24oYCR7QU5BTFlUSUNTX0hPU1R9L2hlcm1lcy8ke3RoaXMubWVyY3VyeS5zZXR0aW5ncy5wYXRofWAsIEpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0UGFyYW1zKCkpLCB7IGRhdGEgfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZUNoZWNrID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZW5kKHRydWUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbWVzc2FnZShkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnRhcmdldCAmJiBkYXRhLnRhcmdldCA9PT0gJ21lcmN1cnlTeW5jJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2RhdGEudHlwZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2RhdGEudHlwZV0oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZU9ubGluZVN0YXR1cygpIHtcbiAgICAgICAgdGhpcy5zZW5kKHRydWUpO1xuICAgICAgICB0aGlzLm9ubGluZSA9IG5hdmlnYXRvci5vbkxpbmU7XG4gICAgfVxuICAgIGV2ZW50KF9hKSB7XG4gICAgICAgIHZhciB7IGV2ZW50LCB2YWx1ZSB9ID0gX2EsIG9wdGlvbnMgPSBfX3Jlc3QoX2EsIFtcImV2ZW50XCIsIFwidmFsdWVcIl0pO1xuICAgICAgICBpZiAoIWV2ZW50IHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXZlbnQgbWlzc2luZyBldmVudCBvciB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdXNoKE9iamVjdC5hc3NpZ24oeyBldmVudCwgdmFsdWUgfSwgb3B0aW9ucykpO1xuICAgICAgICAgICAgdGhpcy5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29udmVyc2lvbihfYSkge1xuICAgICAgICB2YXIgeyBuYW1lLCB2YWx1ZSA9IDEgfSA9IF9hLCBvcHRpb25zID0gX19yZXN0KF9hLCBbXCJuYW1lXCIsIFwidmFsdWVcIl0pO1xuICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnZlcnNpb24gbWlzc2luZyBuYW1lIG9yIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goT2JqZWN0LmFzc2lnbih7IGNvbnZlcnNpb246IHRydWUsIG5hbWUsIHZhbHVlIH0sIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU3luYztcbiIsIi8qIVxuICAgIGxvY2FsRm9yYWdlIC0tIE9mZmxpbmUgU3RvcmFnZSwgSW1wcm92ZWRcbiAgICBWZXJzaW9uIDEuMTAuMFxuICAgIGh0dHBzOi8vbG9jYWxmb3JhZ2UuZ2l0aHViLmlvL2xvY2FsRm9yYWdlXG4gICAgKGMpIDIwMTMtMjAxNyBNb3ppbGxhLCBBcGFjaGUgTGljZW5zZSAyLjBcbiovXG4oZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5sb2NhbGZvcmFnZSA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyAoZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLCBmKX12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbid1c2Ugc3RyaWN0JztcbnZhciBNdXRhdGlvbiA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG52YXIgc2NoZWR1bGVEcmFpbjtcblxue1xuICBpZiAoTXV0YXRpb24pIHtcbiAgICB2YXIgY2FsbGVkID0gMDtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb24obmV4dFRpY2spO1xuICAgIHZhciBlbGVtZW50ID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KTtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5kYXRhID0gKGNhbGxlZCA9ICsrY2FsbGVkICUgMik7XG4gICAgfTtcbiAgfSBlbHNlIGlmICghZ2xvYmFsLnNldEltbWVkaWF0ZSAmJiB0eXBlb2YgZ2xvYmFsLk1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBjaGFubmVsID0gbmV3IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCgpO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbmV4dFRpY2s7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgnZG9jdW1lbnQnIGluIGdsb2JhbCAmJiAnb25yZWFkeXN0YXRlY2hhbmdlJyBpbiBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpIHtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICB2YXIgc2NyaXB0RWwgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5leHRUaWNrKCk7XG5cbiAgICAgICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgc2NyaXB0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHRFbCk7XG4gICAgICAgIHNjcmlwdEVsID0gbnVsbDtcbiAgICAgIH07XG4gICAgICBnbG9iYWwuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdEVsKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KG5leHRUaWNrLCAwKTtcbiAgICB9O1xuICB9XG59XG5cbnZhciBkcmFpbmluZztcbnZhciBxdWV1ZSA9IFtdO1xuLy9uYW1lZCBuZXh0VGljayBmb3IgbGVzcyBjb25mdXNpbmcgc3RhY2sgdHJhY2VzXG5mdW5jdGlvbiBuZXh0VGljaygpIHtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgaSwgb2xkUXVldWU7XG4gIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChsZW4pIHtcbiAgICBvbGRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG4gICAgaSA9IC0xO1xuICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgIG9sZFF1ZXVlW2ldKCk7XG4gICAgfVxuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuICBkcmFpbmluZyA9IGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltbWVkaWF0ZTtcbmZ1bmN0aW9uIGltbWVkaWF0ZSh0YXNrKSB7XG4gIGlmIChxdWV1ZS5wdXNoKHRhc2spID09PSAxICYmICFkcmFpbmluZykge1xuICAgIHNjaGVkdWxlRHJhaW4oKTtcbiAgfVxufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se31dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGltbWVkaWF0ZSA9IF9kZXJlcV8oMSk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBJTlRFUk5BTCgpIHt9XG5cbnZhciBoYW5kbGVycyA9IHt9O1xuXG52YXIgUkVKRUNURUQgPSBbJ1JFSkVDVEVEJ107XG52YXIgRlVMRklMTEVEID0gWydGVUxGSUxMRUQnXTtcbnZhciBQRU5ESU5HID0gWydQRU5ESU5HJ107XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVzb2x2ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdGhpcy5zdGF0ZSA9IFBFTkRJTkc7XG4gIHRoaXMucXVldWUgPSBbXTtcbiAgdGhpcy5vdXRjb21lID0gdm9pZCAwO1xuICBpZiAocmVzb2x2ZXIgIT09IElOVEVSTkFMKSB7XG4gICAgc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHRoaXMsIHJlc29sdmVyKTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIGlmICh0eXBlb2Ygb25GdWxmaWxsZWQgIT09ICdmdW5jdGlvbicgJiYgdGhpcy5zdGF0ZSA9PT0gRlVMRklMTEVEIHx8XG4gICAgdHlwZW9mIG9uUmVqZWN0ZWQgIT09ICdmdW5jdGlvbicgJiYgdGhpcy5zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKElOVEVSTkFMKTtcbiAgaWYgKHRoaXMuc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICB2YXIgcmVzb2x2ZXIgPSB0aGlzLnN0YXRlID09PSBGVUxGSUxMRUQgPyBvbkZ1bGZpbGxlZCA6IG9uUmVqZWN0ZWQ7XG4gICAgdW53cmFwKHByb21pc2UsIHJlc29sdmVyLCB0aGlzLm91dGNvbWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucXVldWUucHVzaChuZXcgUXVldWVJdGVtKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5mdW5jdGlvbiBRdWV1ZUl0ZW0ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgaWYgKHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMub25GdWxmaWxsZWQgPSBvbkZ1bGZpbGxlZDtcbiAgICB0aGlzLmNhbGxGdWxmaWxsZWQgPSB0aGlzLm90aGVyQ2FsbEZ1bGZpbGxlZDtcbiAgfVxuICBpZiAodHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm9uUmVqZWN0ZWQgPSBvblJlamVjdGVkO1xuICAgIHRoaXMuY2FsbFJlamVjdGVkID0gdGhpcy5vdGhlckNhbGxSZWplY3RlZDtcbiAgfVxufVxuUXVldWVJdGVtLnByb3RvdHlwZS5jYWxsRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGhhbmRsZXJzLnJlc29sdmUodGhpcy5wcm9taXNlLCB2YWx1ZSk7XG59O1xuUXVldWVJdGVtLnByb3RvdHlwZS5vdGhlckNhbGxGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdW53cmFwKHRoaXMucHJvbWlzZSwgdGhpcy5vbkZ1bGZpbGxlZCwgdmFsdWUpO1xufTtcblF1ZXVlSXRlbS5wcm90b3R5cGUuY2FsbFJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGhhbmRsZXJzLnJlamVjdCh0aGlzLnByb21pc2UsIHZhbHVlKTtcbn07XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLm90aGVyQ2FsbFJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHVud3JhcCh0aGlzLnByb21pc2UsIHRoaXMub25SZWplY3RlZCwgdmFsdWUpO1xufTtcblxuZnVuY3Rpb24gdW53cmFwKHByb21pc2UsIGZ1bmMsIHZhbHVlKSB7XG4gIGltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJldHVyblZhbHVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IGZ1bmModmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gcHJvbWlzZSkge1xuICAgICAgaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCByZXNvbHZlIHByb21pc2Ugd2l0aCBpdHNlbGYnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXJzLnJlc29sdmUocHJvbWlzZSwgcmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmhhbmRsZXJzLnJlc29sdmUgPSBmdW5jdGlvbiAoc2VsZiwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKGdldFRoZW4sIHZhbHVlKTtcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHNlbGYsIHJlc3VsdC52YWx1ZSk7XG4gIH1cbiAgdmFyIHRoZW5hYmxlID0gcmVzdWx0LnZhbHVlO1xuXG4gIGlmICh0aGVuYWJsZSkge1xuICAgIHNhZmVseVJlc29sdmVUaGVuYWJsZShzZWxmLCB0aGVuYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgc2VsZi5zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICBzZWxmLm91dGNvbWUgPSB2YWx1ZTtcbiAgICB2YXIgaSA9IC0xO1xuICAgIHZhciBsZW4gPSBzZWxmLnF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICBzZWxmLnF1ZXVlW2ldLmNhbGxGdWxmaWxsZWQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2VsZjtcbn07XG5oYW5kbGVycy5yZWplY3QgPSBmdW5jdGlvbiAoc2VsZiwgZXJyb3IpIHtcbiAgc2VsZi5zdGF0ZSA9IFJFSkVDVEVEO1xuICBzZWxmLm91dGNvbWUgPSBlcnJvcjtcbiAgdmFyIGkgPSAtMTtcbiAgdmFyIGxlbiA9IHNlbGYucXVldWUubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgc2VsZi5xdWV1ZVtpXS5jYWxsUmVqZWN0ZWQoZXJyb3IpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufTtcblxuZnVuY3Rpb24gZ2V0VGhlbihvYmopIHtcbiAgLy8gTWFrZSBzdXJlIHdlIG9ubHkgYWNjZXNzIHRoZSBhY2Nlc3NvciBvbmNlIGFzIHJlcXVpcmVkIGJ5IHRoZSBzcGVjXG4gIHZhciB0aGVuID0gb2JqICYmIG9iai50aGVuO1xuICBpZiAob2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiBhcHB5VGhlbigpIHtcbiAgICAgIHRoZW4uYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHNlbGYsIHRoZW5hYmxlKSB7XG4gIC8vIEVpdGhlciBmdWxmaWxsLCByZWplY3Qgb3IgcmVqZWN0IHdpdGggZXJyb3JcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBvbkVycm9yKHZhbHVlKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGhhbmRsZXJzLnJlamVjdChzZWxmLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblN1Y2Nlc3ModmFsdWUpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgaGFuZGxlcnMucmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlUb1Vud3JhcCgpIHtcbiAgICB0aGVuYWJsZShvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRyeVRvVW53cmFwKTtcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICBvbkVycm9yKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5Q2F0Y2goZnVuYywgdmFsdWUpIHtcbiAgdmFyIG91dCA9IHt9O1xuICB0cnkge1xuICAgIG91dC52YWx1ZSA9IGZ1bmModmFsdWUpO1xuICAgIG91dC5zdGF0dXMgPSAnc3VjY2Vzcyc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBvdXQuc3RhdHVzID0gJ2Vycm9yJztcbiAgICBvdXQudmFsdWUgPSBlO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cblByb21pc2UucmVzb2x2ZSA9IHJlc29sdmU7XG5mdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIHRoaXMpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGhhbmRsZXJzLnJlc29sdmUobmV3IHRoaXMoSU5URVJOQUwpLCB2YWx1ZSk7XG59XG5cblByb21pc2UucmVqZWN0ID0gcmVqZWN0O1xuZnVuY3Rpb24gcmVqZWN0KHJlYXNvbikge1xuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKElOVEVSTkFMKTtcbiAgcmV0dXJuIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCByZWFzb24pO1xufVxuXG5Qcm9taXNlLmFsbCA9IGFsbDtcbmZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcmFibGUpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ211c3QgYmUgYW4gYXJyYXknKSk7XG4gIH1cblxuICB2YXIgbGVuID0gaXRlcmFibGUubGVuZ3RoO1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIGlmICghbGVuKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7XG4gIH1cblxuICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbik7XG4gIHZhciByZXNvbHZlZCA9IDA7XG4gIHZhciBpID0gLTE7XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBhbGxSZXNvbHZlcihpdGVyYWJsZVtpXSwgaSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG4gIGZ1bmN0aW9uIGFsbFJlc29sdmVyKHZhbHVlLCBpKSB7XG4gICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKHJlc29sdmVGcm9tQWxsLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZUZyb21BbGwob3V0VmFsdWUpIHtcbiAgICAgIHZhbHVlc1tpXSA9IG91dFZhbHVlO1xuICAgICAgaWYgKCsrcmVzb2x2ZWQgPT09IGxlbiAmJiAhY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlc29sdmUocHJvbWlzZSwgdmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUHJvbWlzZS5yYWNlID0gcmFjZTtcbmZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXJhYmxlKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGFuIGFycmF5JykpO1xuICB9XG5cbiAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBpZiAoIWxlbikge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoW10pO1xuICB9XG5cbiAgdmFyIGkgPSAtMTtcbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHJlc29sdmVyKGl0ZXJhYmxlW2ldKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZTtcbiAgZnVuY3Rpb24gcmVzb2x2ZXIodmFsdWUpIHtcbiAgICBzZWxmLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxufSx7XCIxXCI6MX1dLDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuJ3VzZSBzdHJpY3QnO1xuaWYgKHR5cGVvZiBnbG9iYWwuUHJvbWlzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICBnbG9iYWwuUHJvbWlzZSA9IF9kZXJlcV8oMik7XG59XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7XCIyXCI6Mn1dLDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldElEQigpIHtcbiAgICAvKiBnbG9iYWwgaW5kZXhlZERCLHdlYmtpdEluZGV4ZWREQixtb3pJbmRleGVkREIsT0luZGV4ZWREQixtc0luZGV4ZWREQiAqL1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdlYmtpdEluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWJraXRJbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtb3pJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbW96SW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgT0luZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBPSW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbXNJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbXNJbmRleGVkREI7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbnZhciBpZGIgPSBnZXRJREIoKTtcblxuZnVuY3Rpb24gaXNJbmRleGVkREJWYWxpZCgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBJbml0aWFsaXplIEluZGV4ZWREQjsgZmFsbCBiYWNrIHRvIHZlbmRvci1wcmVmaXhlZCB2ZXJzaW9uc1xuICAgICAgICAvLyBpZiBuZWVkZWQuXG4gICAgICAgIGlmICghaWRiIHx8ICFpZGIub3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIG1pbWljIFBvdWNoREIgaGVyZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2UgdGVzdCBmb3Igb3BlbkRhdGFiYXNlIGJlY2F1c2UgSUUgTW9iaWxlIGlkZW50aWZpZXMgaXRzZWxmXG4gICAgICAgIC8vIGFzIFNhZmFyaS4gT2ggdGhlIGx1bHouLi5cbiAgICAgICAgdmFyIGlzU2FmYXJpID0gdHlwZW9mIG9wZW5EYXRhYmFzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgLyhTYWZhcml8aVBob25lfGlQYWR8aVBvZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIS9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIS9CbGFja0JlcnJ5Ly50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG5cbiAgICAgICAgdmFyIGhhc0ZldGNoID0gdHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nICYmIGZldGNoLnRvU3RyaW5nKCkuaW5kZXhPZignW25hdGl2ZSBjb2RlJykgIT09IC0xO1xuXG4gICAgICAgIC8vIFNhZmFyaSA8MTAuMSBkb2VzIG5vdCBtZWV0IG91ciByZXF1aXJlbWVudHMgZm9yIElEQiBzdXBwb3J0XG4gICAgICAgIC8vIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wb3VjaGRiL3BvdWNoZGIvaXNzdWVzLzU1NzIpLlxuICAgICAgICAvLyBTYWZhcmkgMTAuMSBzaGlwcGVkIHdpdGggZmV0Y2gsIHdlIGNhbiB1c2UgdGhhdCB0byBkZXRlY3QgaXQuXG4gICAgICAgIC8vIE5vdGU6IHRoaXMgY3JlYXRlcyBpc3N1ZXMgd2l0aCBgd2luZG93LmZldGNoYCBwb2x5ZmlsbHMgYW5kXG4gICAgICAgIC8vIG92ZXJyaWRlczsgc2VlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbG9jYWxGb3JhZ2UvbG9jYWxGb3JhZ2UvaXNzdWVzLzg1NlxuICAgICAgICByZXR1cm4gKCFpc1NhZmFyaSB8fCBoYXNGZXRjaCkgJiYgdHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgLy8gc29tZSBvdXRkYXRlZCBpbXBsZW1lbnRhdGlvbnMgb2YgSURCIHRoYXQgYXBwZWFyIG9uIFNhbXN1bmdcbiAgICAgICAgLy8gYW5kIEhUQyBBbmRyb2lkIGRldmljZXMgPDQuNCBhcmUgbWlzc2luZyBJREJLZXlSYW5nZVxuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL2lzc3Vlcy8xMjhcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMjcyXG4gICAgICAgIHR5cGVvZiBJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vLyBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbi8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4vLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIGF0IGxlYXN0KS5cbi8vIEFic3RyYWN0cyBjb25zdHJ1Y3RpbmcgYSBCbG9iIG9iamVjdCwgc28gaXQgYWxzbyB3b3JrcyBpbiBvbGRlclxuLy8gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBuYXRpdmUgQmxvYiBjb25zdHJ1Y3Rvci4gKGkuZS5cbi8vIG9sZCBRdFdlYktpdCB2ZXJzaW9ucywgYXQgbGVhc3QpLlxuZnVuY3Rpb24gY3JlYXRlQmxvYihwYXJ0cywgcHJvcGVydGllcykge1xuICAgIC8qIGdsb2JhbCBCbG9iQnVpbGRlcixNU0Jsb2JCdWlsZGVyLE1vekJsb2JCdWlsZGVyLFdlYktpdEJsb2JCdWlsZGVyICovXG4gICAgcGFydHMgPSBwYXJ0cyB8fCBbXTtcbiAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IEJsb2IocGFydHMsIHByb3BlcnRpZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUubmFtZSAhPT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIEJ1aWxkZXIgPSB0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gQmxvYkJ1aWxkZXIgOiB0eXBlb2YgTVNCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNU0Jsb2JCdWlsZGVyIDogdHlwZW9mIE1vekJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1vekJsb2JCdWlsZGVyIDogV2ViS2l0QmxvYkJ1aWxkZXI7XG4gICAgICAgIHZhciBidWlsZGVyID0gbmV3IEJ1aWxkZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYnVpbGRlci5hcHBlbmQocGFydHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWlsZGVyLmdldEJsb2IocHJvcGVydGllcy50eXBlKTtcbiAgICB9XG59XG5cbi8vIFRoaXMgaXMgQ29tbW9uSlMgYmVjYXVzZSBsaWUgaXMgYW4gZXh0ZXJuYWwgZGVwZW5kZW5jeSwgc28gUm9sbHVwXG4vLyBjYW4ganVzdCBpZ25vcmUgaXQuXG5pZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gSW4gdGhlIFwibm9wcm9taXNlc1wiIGJ1aWxkIHRoaXMgd2lsbCBqdXN0IHRocm93IGlmIHlvdSBkb24ndCBoYXZlXG4gICAgLy8gYSBnbG9iYWwgcHJvbWlzZSBvYmplY3QsIGJ1dCBpdCB3b3VsZCB0aHJvdyBhbnl3YXkgbGF0ZXIuXG4gICAgX2RlcmVxXygzKTtcbn1cbnZhciBQcm9taXNlJDEgPSBQcm9taXNlO1xuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlcnJvckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2VbXCJjYXRjaFwiXShlcnJvckNhbGxiYWNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUtleShrZXkpIHtcbiAgICAvLyBDYXN0IHRoZSBrZXkgdG8gYSBzdHJpbmcsIGFzIHRoYXQncyBhbGwgd2UgY2FuIHNldCBhcyBhIGtleS5cbiAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGtleSArICcgdXNlZCBhcyBhIGtleSwgYnV0IGl0IGlzIG5vdCBhIHN0cmluZy4nKTtcbiAgICAgICAga2V5ID0gU3RyaW5nKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2FsbGJhY2soKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgfVxufVxuXG4vLyBTb21lIGNvZGUgb3JpZ2luYWxseSBmcm9tIGFzeW5jX3N0b3JhZ2UuanMgaW5cbi8vIFtHYWlhXShodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS1iMmcvZ2FpYSkuXG5cbnZhciBERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFID0gJ2xvY2FsLWZvcmFnZS1kZXRlY3QtYmxvYi1zdXBwb3J0JztcbnZhciBzdXBwb3J0c0Jsb2JzID0gdm9pZCAwO1xudmFyIGRiQ29udGV4dHMgPSB7fTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8vIFRyYW5zYWN0aW9uIE1vZGVzXG52YXIgUkVBRF9PTkxZID0gJ3JlYWRvbmx5JztcbnZhciBSRUFEX1dSSVRFID0gJ3JlYWR3cml0ZSc7XG5cbi8vIFRyYW5zZm9ybSBhIGJpbmFyeSBzdHJpbmcgdG8gYW4gYXJyYXkgYnVmZmVyLCBiZWNhdXNlIG90aGVyd2lzZVxuLy8gd2VpcmQgc3R1ZmYgaGFwcGVucyB3aGVuIHlvdSB0cnkgdG8gd29yayB3aXRoIHRoZSBiaW5hcnkgc3RyaW5nIGRpcmVjdGx5LlxuLy8gSXQgaXMga25vd24uXG4vLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ5Njc2NDcvIChjb250aW51ZXMgb24gbmV4dCBsaW5lKVxuLy8gZW5jb2RlLWRlY29kZS1pbWFnZS13aXRoLWJhc2U2NC1icmVha3MtaW1hZ2UgKDIwMTMtMDQtMjEpXG5mdW5jdGlvbiBfYmluU3RyaW5nVG9BcnJheUJ1ZmZlcihiaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gYmluLmxlbmd0aDtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCk7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJbaV0gPSBiaW4uY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cblxuLy9cbi8vIEJsb2JzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGFsbCB2ZXJzaW9ucyBvZiBJbmRleGVkREIsIG5vdGFibHlcbi8vIENocm9tZSA8MzcgYW5kIEFuZHJvaWQgPDUuIEluIHRob3NlIHZlcnNpb25zLCBzdG9yaW5nIGEgYmxvYiB3aWxsIHRocm93LlxuLy9cbi8vIFZhcmlvdXMgb3RoZXIgYmxvYiBidWdzIGV4aXN0IGluIENocm9tZSB2MzctNDIgKGluY2x1c2l2ZSkuXG4vLyBEZXRlY3RpbmcgdGhlbSBpcyBleHBlbnNpdmUgYW5kIGNvbmZ1c2luZyB0byB1c2VycywgYW5kIENocm9tZSAzNy00MlxuLy8gaXMgYXQgdmVyeSBsb3cgdXNhZ2Ugd29ybGR3aWRlLCBzbyB3ZSBkbyBhIGhhY2t5IHVzZXJBZ2VudCBjaGVjayBpbnN0ZWFkLlxuLy9cbi8vIGNvbnRlbnQtdHlwZSBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00MDgxMjBcbi8vIDQwNCBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDc5MTZcbi8vIEZpbGVSZWFkZXIgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ3ODM2XG4vL1xuLy8gQ29kZSBib3Jyb3dlZCBmcm9tIFBvdWNoREIuIFNlZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3VjaGRiL3BvdWNoZGIvYmxvYi9tYXN0ZXIvcGFja2FnZXMvbm9kZV9tb2R1bGVzL3BvdWNoZGItYWRhcHRlci1pZGIvc3JjL2Jsb2JTdXBwb3J0LmpzXG4vL1xuZnVuY3Rpb24gX2NoZWNrQmxvYlN1cHBvcnRXaXRob3V0Q2FjaGluZyhpZGIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgdHhuID0gaWRiLnRyYW5zYWN0aW9uKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUsIFJFQURfV1JJVEUpO1xuICAgICAgICB2YXIgYmxvYiA9IGNyZWF0ZUJsb2IoWycnXSk7XG4gICAgICAgIHR4bi5vYmplY3RTdG9yZShERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFKS5wdXQoYmxvYiwgJ2tleScpO1xuXG4gICAgICAgIHR4bi5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB0cmFuc2FjdGlvbiBhYm9ydHMgbm93IGl0cyBkdWUgdG8gbm90IGJlaW5nIGFibGUgdG9cbiAgICAgICAgICAgIC8vIHdyaXRlIHRvIHRoZSBkYXRhYmFzZSwgbGlrZWx5IGR1ZSB0byB0aGUgZGlzayBiZWluZyBmdWxsXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdHhuLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlZENocm9tZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRFZGdlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLy8pO1xuICAgICAgICAgICAgLy8gTVMgRWRnZSBwcmV0ZW5kcyB0byBiZSBDaHJvbWUgNDI6XG4gICAgICAgICAgICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2hoODY5MzAxJTI4dj12cy44NSUyOS5hc3B4XG4gICAgICAgICAgICByZXNvbHZlKG1hdGNoZWRFZGdlIHx8ICFtYXRjaGVkQ2hyb21lIHx8IHBhcnNlSW50KG1hdGNoZWRDaHJvbWVbMV0sIDEwKSA+PSA0Myk7XG4gICAgICAgIH07XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gZXJyb3IsIHNvIGFzc3VtZSB1bnN1cHBvcnRlZFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfY2hlY2tCbG9iU3VwcG9ydChpZGIpIHtcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQmxvYnMgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoc3VwcG9ydHNCbG9icyk7XG4gICAgfVxuICAgIHJldHVybiBfY2hlY2tCbG9iU3VwcG9ydFdpdGhvdXRDYWNoaW5nKGlkYikudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc3VwcG9ydHNCbG9icyA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNCbG9icztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2RlZmVyUmVhZGluZXNzKGRiSW5mbykge1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIENyZWF0ZSBhIGRlZmVycmVkIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgZGF0YWJhc2Ugb3BlcmF0aW9uLlxuICAgIHZhciBkZWZlcnJlZE9wZXJhdGlvbiA9IHt9O1xuXG4gICAgZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgLy8gRW5xdWV1ZSB0aGUgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgIGRiQ29udGV4dC5kZWZlcnJlZE9wZXJhdGlvbnMucHVzaChkZWZlcnJlZE9wZXJhdGlvbik7XG5cbiAgICAvLyBDaGFpbiBpdHMgcHJvbWlzZSB0byB0aGUgZGF0YWJhc2UgcmVhZGluZXNzLlxuICAgIGlmICghZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgZGJDb250ZXh0LmRiUmVhZHkgPSBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRiQ29udGV4dC5kYlJlYWR5ID0gZGJDb250ZXh0LmRiUmVhZHkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfYWR2YW5jZVJlYWRpbmVzcyhkYkluZm8pIHtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyBEZXF1ZXVlIGEgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgIHZhciBkZWZlcnJlZE9wZXJhdGlvbiA9IGRiQ29udGV4dC5kZWZlcnJlZE9wZXJhdGlvbnMucG9wKCk7XG5cbiAgICAvLyBSZXNvbHZlIGl0cyBwcm9taXNlICh3aGljaCBpcyBwYXJ0IG9mIHRoZSBkYXRhYmFzZSByZWFkaW5lc3NcbiAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgaWYgKGRlZmVycmVkT3BlcmF0aW9uKSB7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfcmVqZWN0UmVhZGluZXNzKGRiSW5mbywgZXJyKSB7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gRGVxdWV1ZSBhIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnBvcCgpO1xuXG4gICAgLy8gUmVqZWN0IGl0cyBwcm9taXNlICh3aGljaCBpcyBwYXJ0IG9mIHRoZSBkYXRhYmFzZSByZWFkaW5lc3NcbiAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgaWYgKGRlZmVycmVkT3BlcmF0aW9uKSB7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlamVjdChlcnIpO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgdXBncmFkZU5lZWRlZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXSB8fCBjcmVhdGVEYkNvbnRleHQoKTtcblxuICAgICAgICBpZiAoZGJJbmZvLmRiKSB7XG4gICAgICAgICAgICBpZiAodXBncmFkZU5lZWRlZCkge1xuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pO1xuICAgICAgICAgICAgICAgIGRiSW5mby5kYi5jbG9zZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYkluZm8uZGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRiQXJncyA9IFtkYkluZm8ubmFtZV07XG5cbiAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgIGRiQXJncy5wdXNoKGRiSW5mby52ZXJzaW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcGVucmVxID0gaWRiLm9wZW4uYXBwbHkoaWRiLCBkYkFyZ3MpO1xuXG4gICAgICAgIGlmICh1cGdyYWRlTmVlZGVkKSB7XG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRiID0gb3BlbnJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9sZFZlcnNpb24gPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkZWQgd2hlbiBzdXBwb3J0IGZvciBibG9iIHNoaW1zIHdhcyBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXgubmFtZSA9PT0gJ0NvbnN0cmFpbnRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGRhdGFiYXNlIFwiJyArIGRiSW5mby5uYW1lICsgJ1wiJyArICcgaGFzIGJlZW4gdXBncmFkZWQgZnJvbSB2ZXJzaW9uICcgKyBlLm9sZFZlcnNpb24gKyAnIHRvIHZlcnNpb24gJyArIGUubmV3VmVyc2lvbiArICcsIGJ1dCB0aGUgc3RvcmFnZSBcIicgKyBkYkluZm8uc3RvcmVOYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgb3BlbnJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJlamVjdChvcGVucmVxLmVycm9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYiA9IG9wZW5yZXEucmVzdWx0O1xuICAgICAgICAgICAgZGIub252ZXJzaW9uY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyZWQgd2hlbiB0aGUgZGF0YWJhc2UgaXMgbW9kaWZpZWQgKGUuZy4gYWRkaW5nIGFuIG9iamVjdFN0b3JlKSBvclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZWQgKGV2ZW4gd2hlbiBpbml0aWF0ZWQgYnkgb3RoZXIgc2Vzc2lvbnMgaW4gZGlmZmVyZW50IHRhYnMpLlxuICAgICAgICAgICAgICAgIC8vIENsb3NpbmcgdGhlIGNvbm5lY3Rpb24gaGVyZSBwcmV2ZW50cyB0aG9zZSBvcGVyYXRpb25zIGZyb20gYmVpbmcgYmxvY2tlZC5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZGF0YWJhc2UgaXMgYWNjZXNzZWQgYWdhaW4gbGF0ZXIgYnkgdGhpcyBpbnN0YW5jZSwgdGhlIGNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAvLyB3aWxsIGJlIHJlb3BlbmVkIG9yIHRoZSBkYXRhYmFzZSByZWNyZWF0ZWQgYXMgbmVlZGVkLlxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3NlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhkYkluZm8pO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbykge1xuICAgIHJldHVybiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gX2dldFVwZ3JhZGVkQ29ubmVjdGlvbihkYkluZm8pIHtcbiAgICByZXR1cm4gX2dldENvbm5lY3Rpb24oZGJJbmZvLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gX2lzVXBncmFkZU5lZWRlZChkYkluZm8sIGRlZmF1bHRWZXJzaW9uKSB7XG4gICAgaWYgKCFkYkluZm8uZGIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGlzTmV3U3RvcmUgPSAhZGJJbmZvLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgdmFyIGlzRG93bmdyYWRlID0gZGJJbmZvLnZlcnNpb24gPCBkYkluZm8uZGIudmVyc2lvbjtcbiAgICB2YXIgaXNVcGdyYWRlID0gZGJJbmZvLnZlcnNpb24gPiBkYkluZm8uZGIudmVyc2lvbjtcblxuICAgIGlmIChpc0Rvd25ncmFkZSkge1xuICAgICAgICAvLyBJZiB0aGUgdmVyc2lvbiBpcyBub3QgdGhlIGRlZmF1bHQgb25lXG4gICAgICAgIC8vIHRoZW4gd2FybiBmb3IgaW1wb3NzaWJsZSBkb3duZ3JhZGUuXG4gICAgICAgIGlmIChkYkluZm8udmVyc2lvbiAhPT0gZGVmYXVsdFZlcnNpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGRhdGFiYXNlIFwiJyArIGRiSW5mby5uYW1lICsgJ1wiJyArIFwiIGNhbid0IGJlIGRvd25ncmFkZWQgZnJvbSB2ZXJzaW9uIFwiICsgZGJJbmZvLmRiLnZlcnNpb24gKyAnIHRvIHZlcnNpb24gJyArIGRiSW5mby52ZXJzaW9uICsgJy4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbGlnbiB0aGUgdmVyc2lvbnMgdG8gcHJldmVudCBlcnJvcnMuXG4gICAgICAgIGRiSW5mby52ZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb247XG4gICAgfVxuXG4gICAgaWYgKGlzVXBncmFkZSB8fCBpc05ld1N0b3JlKSB7XG4gICAgICAgIC8vIElmIHRoZSBzdG9yZSBpcyBuZXcgdGhlbiBpbmNyZW1lbnQgdGhlIHZlcnNpb24gKGlmIG5lZWRlZCkuXG4gICAgICAgIC8vIFRoaXMgd2lsbCB0cmlnZ2VyIGFuIFwidXBncmFkZW5lZWRlZFwiIGV2ZW50IHdoaWNoIGlzIHJlcXVpcmVkXG4gICAgICAgIC8vIGZvciBjcmVhdGluZyBhIHN0b3JlLlxuICAgICAgICBpZiAoaXNOZXdTdG9yZSkge1xuICAgICAgICAgICAgdmFyIGluY1ZlcnNpb24gPSBkYkluZm8uZGIudmVyc2lvbiArIDE7XG4gICAgICAgICAgICBpZiAoaW5jVmVyc2lvbiA+IGRiSW5mby52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgZGJJbmZvLnZlcnNpb24gPSBpbmNWZXJzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBlbmNvZGUgYSBibG9iIGZvciBpbmRleGVkZGIgZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnQgYmxvYnNcbmZ1bmN0aW9uIF9lbmNvZGVCbG9iKGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgYmFzZTY0ID0gYnRvYShlLnRhcmdldC5yZXN1bHQgfHwgJycpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgX19sb2NhbF9mb3JhZ2VfZW5jb2RlZF9ibG9iOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGJhc2U2NCxcbiAgICAgICAgICAgICAgICB0eXBlOiBibG9iLnR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGJsb2IpO1xuICAgIH0pO1xufVxuXG4vLyBkZWNvZGUgYW4gZW5jb2RlZCBibG9iXG5mdW5jdGlvbiBfZGVjb2RlQmxvYihlbmNvZGVkQmxvYikge1xuICAgIHZhciBhcnJheUJ1ZmYgPSBfYmluU3RyaW5nVG9BcnJheUJ1ZmZlcihhdG9iKGVuY29kZWRCbG9iLmRhdGEpKTtcbiAgICByZXR1cm4gY3JlYXRlQmxvYihbYXJyYXlCdWZmXSwgeyB0eXBlOiBlbmNvZGVkQmxvYi50eXBlIH0pO1xufVxuXG4vLyBpcyB0aGlzIG9uZSBvZiBvdXIgZmFuY3kgZW5jb2RlZCBibG9icz9cbmZ1bmN0aW9uIF9pc0VuY29kZWRCbG9iKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLl9fbG9jYWxfZm9yYWdlX2VuY29kZWRfYmxvYjtcbn1cblxuLy8gU3BlY2lhbGl6ZSB0aGUgZGVmYXVsdCBgcmVhZHkoKWAgZnVuY3Rpb24gYnkgbWFraW5nIGl0IGRlcGVuZGVudFxuLy8gb24gdGhlIGN1cnJlbnQgZGF0YWJhc2Ugb3BlcmF0aW9ucy4gVGh1cywgdGhlIGRyaXZlciB3aWxsIGJlIGFjdHVhbGx5XG4vLyByZWFkeSB3aGVuIGl0J3MgYmVlbiBpbml0aWFsaXplZCAoZGVmYXVsdCkgKmFuZCogdGhlcmUgYXJlIG5vIHBlbmRpbmdcbi8vIG9wZXJhdGlvbnMgb24gdGhlIGRhdGFiYXNlIChpbml0aWF0ZWQgYnkgc29tZSBvdGhlciBpbnN0YW5jZXMpLlxuZnVuY3Rpb24gX2Z1bGx5UmVhZHkoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYuX2luaXRSZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tzZWxmLl9kYkluZm8ubmFtZV07XG5cbiAgICAgICAgaWYgKGRiQ29udGV4dCAmJiBkYkNvbnRleHQuZGJSZWFkeSkge1xuICAgICAgICAgICAgcmV0dXJuIGRiQ29udGV4dC5kYlJlYWR5O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFRyeSB0byBlc3RhYmxpc2ggYSBuZXcgZGIgY29ubmVjdGlvbiB0byByZXBsYWNlIHRoZVxuLy8gY3VycmVudCBvbmUgd2hpY2ggaXMgYnJva2VuIChpLmUuIGV4cGVyaWVuY2luZ1xuLy8gSW52YWxpZFN0YXRlRXJyb3Igd2hpbGUgY3JlYXRpbmcgYSB0cmFuc2FjdGlvbikuXG5mdW5jdGlvbiBfdHJ5UmVjb25uZWN0KGRiSW5mbykge1xuICAgIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pO1xuXG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgIGlmIChmb3JhZ2UuX2RiSW5mby5kYikge1xuICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkYkluZm8uZGIgPSBudWxsO1xuXG4gICAgcmV0dXJuIF9nZXRPcmlnaW5hbENvbm5lY3Rpb24oZGJJbmZvKS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICBkYkluZm8uZGIgPSBkYjtcbiAgICAgICAgaWYgKF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvKSkge1xuICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGI7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgLy8gc3RvcmUgdGhlIGxhdGVzdCBkYiByZWZlcmVuY2VcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgZGIgd2FzIHVwZ3JhZGVkXG4gICAgICAgIGRiSW5mby5kYiA9IGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcmFnZXNbaV0uX2RiSW5mby5kYiA9IGRiO1xuICAgICAgICB9XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIF9yZWplY3RSZWFkaW5lc3MoZGJJbmZvLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5cbi8vIEZGIGRvZXNuJ3QgbGlrZSBQcm9taXNlcyAobWljcm8tdGFza3MpIGFuZCBJRERCIHN0b3JlIG9wZXJhdGlvbnMsXG4vLyBzbyB3ZSBoYXZlIHRvIGRvIGl0IHdpdGggY2FsbGJhY2tzXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvbihkYkluZm8sIG1vZGUsIGNhbGxiYWNrLCByZXRyaWVzKSB7XG4gICAgaWYgKHJldHJpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXRyaWVzID0gMTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICB2YXIgdHggPSBkYkluZm8uZGIudHJhbnNhY3Rpb24oZGJJbmZvLnN0b3JlTmFtZSwgbW9kZSk7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHR4KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKHJldHJpZXMgPiAwICYmICghZGJJbmZvLmRiIHx8IGVyci5uYW1lID09PSAnSW52YWxpZFN0YXRlRXJyb3InIHx8IGVyci5uYW1lID09PSAnTm90Rm91bmRFcnJvcicpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRiSW5mby5kYiB8fCBlcnIubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InICYmICFkYkluZm8uZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhkYkluZm8uc3RvcmVOYW1lKSAmJiBkYkluZm8udmVyc2lvbiA8PSBkYkluZm8uZGIudmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgZGIgdmVyc2lvbiwgdG8gY3JlYXRlIHRoZSBuZXcgT2JqZWN0U3RvcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRiSW5mby5kYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGJJbmZvLnZlcnNpb24gPSBkYkluZm8uZGIudmVyc2lvbiArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2dldFVwZ3JhZGVkQ29ubmVjdGlvbihkYkluZm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdHJ5UmVjb25uZWN0KGRiSW5mbykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKGRiSW5mbywgbW9kZSwgY2FsbGJhY2ssIHJldHJpZXMgLSAxKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURiQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBSdW5uaW5nIGxvY2FsRm9yYWdlcyBzaGFyaW5nIGEgZGF0YWJhc2UuXG4gICAgICAgIGZvcmFnZXM6IFtdLFxuICAgICAgICAvLyBTaGFyZWQgZGF0YWJhc2UuXG4gICAgICAgIGRiOiBudWxsLFxuICAgICAgICAvLyBEYXRhYmFzZSByZWFkaW5lc3MgKHByb21pc2UpLlxuICAgICAgICBkYlJlYWR5OiBudWxsLFxuICAgICAgICAvLyBEZWZlcnJlZCBvcGVyYXRpb25zIG9uIHRoZSBkYXRhYmFzZS5cbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb25zOiBbXVxuICAgIH07XG59XG5cbi8vIE9wZW4gdGhlIEluZGV4ZWREQiBkYXRhYmFzZSAoYXV0b21hdGljYWxseSBjcmVhdGVzIG9uZSBpZiBvbmUgZGlkbid0XG4vLyBwcmV2aW91c2x5IGV4aXN0KSwgdXNpbmcgYW55IG9wdGlvbnMgc2V0IGluIHRoZSBjb25maWcuXG5mdW5jdGlvbiBfaW5pdFN0b3JhZ2Uob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGJJbmZvID0ge1xuICAgICAgICBkYjogbnVsbFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRiSW5mb1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgY29udGV4dCBvZiB0aGUgZGF0YWJhc2U7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gLi4ub3IgY3JlYXRlIGEgbmV3IGNvbnRleHQuXG4gICAgaWYgKCFkYkNvbnRleHQpIHtcbiAgICAgICAgZGJDb250ZXh0ID0gY3JlYXRlRGJDb250ZXh0KCk7XG4gICAgICAgIC8vIFJlZ2lzdGVyIHRoZSBuZXcgY29udGV4dCBpbiB0aGUgZ2xvYmFsIGNvbnRhaW5lci5cbiAgICAgICAgZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gPSBkYkNvbnRleHQ7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgaXRzZWxmIGFzIGEgcnVubmluZyBsb2NhbEZvcmFnZSBpbiB0aGUgY3VycmVudCBjb250ZXh0LlxuICAgIGRiQ29udGV4dC5mb3JhZ2VzLnB1c2goc2VsZik7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBkZWZhdWx0IGByZWFkeSgpYCBmdW5jdGlvbiB3aXRoIHRoZSBzcGVjaWFsaXplZCBvbmUuXG4gICAgaWYgKCFzZWxmLl9pbml0UmVhZHkpIHtcbiAgICAgICAgc2VsZi5faW5pdFJlYWR5ID0gc2VsZi5yZWFkeTtcbiAgICAgICAgc2VsZi5yZWFkeSA9IF9mdWxseVJlYWR5O1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBpbml0aWFsaXphdGlvbiBzdGF0ZXMgb2YgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgIHZhciBpbml0UHJvbWlzZXMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGlnbm9yZUVycm9ycygpIHtcbiAgICAgICAgLy8gRG9uJ3QgaGFuZGxlIGVycm9ycyBoZXJlLFxuICAgICAgICAvLyBqdXN0IG1ha2VzIHN1cmUgcmVsYXRlZCBsb2NhbEZvcmFnZXMgYXJlbid0IHBlbmRpbmcuXG4gICAgICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGJDb250ZXh0LmZvcmFnZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGZvcmFnZSA9IGRiQ29udGV4dC5mb3JhZ2VzW2pdO1xuICAgICAgICBpZiAoZm9yYWdlICE9PSBzZWxmKSB7XG4gICAgICAgICAgICAvLyBEb24ndCB3YWl0IGZvciBpdHNlbGYuLi5cbiAgICAgICAgICAgIGluaXRQcm9taXNlcy5wdXNoKGZvcmFnZS5faW5pdFJlYWR5KClbXCJjYXRjaFwiXShpZ25vcmVFcnJvcnMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRha2UgYSBzbmFwc2hvdCBvZiB0aGUgcmVsYXRlZCBsb2NhbEZvcmFnZXMuXG4gICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcy5zbGljZSgwKTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGNvbm5lY3Rpb24gcHJvY2VzcyBvbmx5IHdoZW5cbiAgICAvLyBhbGwgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzIGFyZW4ndCBwZW5kaW5nLlxuICAgIHJldHVybiBQcm9taXNlJDEuYWxsKGluaXRQcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRiSW5mby5kYiA9IGRiQ29udGV4dC5kYjtcbiAgICAgICAgLy8gR2V0IHRoZSBjb25uZWN0aW9uIG9yIG9wZW4gYSBuZXcgb25lIHdpdGhvdXQgdXBncmFkZS5cbiAgICAgICAgcmV0dXJuIF9nZXRPcmlnaW5hbENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICBkYkluZm8uZGIgPSBkYjtcbiAgICAgICAgaWYgKF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvLCBzZWxmLl9kZWZhdWx0Q29uZmlnLnZlcnNpb24pKSB7XG4gICAgICAgICAgICAvLyBSZW9wZW4gdGhlIGRhdGFiYXNlIGZvciB1cGdyYWRpbmcuXG4gICAgICAgICAgICByZXR1cm4gX2dldFVwZ3JhZGVkQ29ubmVjdGlvbihkYkluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYjtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgICAgICAvLyBTaGFyZSB0aGUgZmluYWwgY29ubmVjdGlvbiBhbW9uZ3N0IHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGZvcmFnZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2tdO1xuICAgICAgICAgICAgaWYgKGZvcmFnZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgICAgIC8vIFNlbGYgaXMgYWxyZWFkeSB1cC10by1kYXRlLlxuICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiID0gZGJJbmZvLmRiO1xuICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLnZlcnNpb24gPSBkYkluZm8udmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJdGVtKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuZ2V0KGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaXNFbmNvZGVkQmxvYih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9kZWNvZGVCbG9iKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIEl0ZXJhdGUgb3ZlciBhbGwgaXRlbXMgc3RvcmVkIGluIGRhdGFiYXNlLlxuZnVuY3Rpb24gaXRlcmF0ZShpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLm9wZW5DdXJzb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbk51bWJlciA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaXNFbmNvZGVkQmxvYih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfZGVjb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvcih2YWx1ZSwgY3Vyc29yLmtleSwgaXRlcmF0aW9uTnVtYmVyKyspO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaXRlcmF0b3IgY2FsbGJhY2sgcmV0dXJucyBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAobm9uLWB1bmRlZmluZWRgKSB2YWx1ZSwgdGhlbiB3ZSBzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGl0ZXJhdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yW1wiY29udGludWVcIl0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHNldEl0ZW0oa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBkYkluZm87XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGlmICh0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jaGVja0Jsb2JTdXBwb3J0KGRiSW5mby5kYikudGhlbihmdW5jdGlvbiAoYmxvYlN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2JTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9lbmNvZGVCbG9iKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVhc29uIHdlIGRvbid0IF9zYXZlXyBudWxsIGlzIGJlY2F1c2UgSUUgMTAgZG9lc1xuICAgICAgICAgICAgICAgICAgICAvLyBub3Qgc3VwcG9ydCBzYXZpbmcgdGhlIGBudWxsYCB0eXBlIGluIEluZGV4ZWREQi4gSG93XG4gICAgICAgICAgICAgICAgICAgIC8vIGlyb25pYywgZ2l2ZW4gdGhlIGJ1ZyBiZWxvdyFcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMTYxXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXN0IHRvIHVuZGVmaW5lZCBzbyB0aGUgdmFsdWUgcGFzc2VkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxsYmFjay9wcm9taXNlIGlzIHRoZSBzYW1lIGFzIHdoYXQgb25lIHdvdWxkIGdldCBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIGBnZXRJdGVtKClgIGxhdGVyLiBUaGlzIGxlYWRzIHRvIHNvbWUgd2VpcmRuZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoc2V0SXRlbSgnZm9vJywgdW5kZWZpbmVkKSB3aWxsIHJldHVybiBgbnVsbGApLCBidXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90IG15IGZhdWx0IGxvY2FsU3RvcmFnZSBpcyBvdXIgYmFzZWxpbmUgYW5kIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgd2VpcmQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgdXNlIGEgR3J1bnQgdGFzayB0byBtYWtlIHRoaXMgc2FmZSBmb3IgSUUgYW5kIHNvbWVcbiAgICAgICAgICAgICAgICAgICAgLy8gdmVyc2lvbnMgb2YgQW5kcm9pZCAoaW5jbHVkaW5nIHRob3NlIHVzZWQgYnkgQ29yZG92YSkuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbGx5IElFIHdvbid0IGxpa2UgYC5kZWxldGUoKWAgYW5kIHdpbGwgaW5zaXN0IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzaW5nIGBbJ2RlbGV0ZSddKClgLCBidXQgd2UgaGF2ZSBhIGJ1aWxkIHN0ZXAgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyBmaXhlcyB0aGlzIGZvciB1cyBub3cuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZVtcImRlbGV0ZVwiXShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3aWxsIGJlIGFsc28gYmUgYWJvcnRlZCBpZiB3ZSd2ZSBleGNlZWRlZCBvdXIgc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBzcGFjZS5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY2xlYXIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5jbGVhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVxLmVycm9yID8gcmVxLmVycm9yIDogcmVxLnRyYW5zYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aChjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuY291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXkobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAobiA8IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWR2YW5jZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLm9wZW5LZXlDdXJzb3IoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgbWVhbnMgdGhlcmUgd2VyZW4ndCBlbm91Z2gga2V5c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0aGUgZmlyc3Qga2V5LCByZXR1cm4gaXQgaWYgdGhhdCdzIHdoYXQgdGhleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdhbnRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFkdmFuY2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgYXNrIHRoZSBjdXJzb3IgdG8gc2tpcCBhaGVhZCBuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmFkdmFuY2Uobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB3ZSBnZXQgaGVyZSwgd2UndmUgZ290IHRoZSBudGgga2V5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuS2V5Q3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoa2V5cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2goY3Vyc29yLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JbXCJjb250aW51ZVwiXSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWcoKTtcbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICBvcHRpb25zLnN0b3JlTmFtZSA9IG9wdGlvbnMuc3RvcmVOYW1lIHx8IGN1cnJlbnRDb25maWcuc3RvcmVOYW1lO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaXNDdXJyZW50RGIgPSBvcHRpb25zLm5hbWUgPT09IGN1cnJlbnRDb25maWcubmFtZSAmJiBzZWxmLl9kYkluZm8uZGI7XG5cbiAgICAgICAgdmFyIGRiUHJvbWlzZSA9IGlzQ3VycmVudERiID8gUHJvbWlzZSQxLnJlc29sdmUoc2VsZi5fZGJJbmZvLmRiKSA6IF9nZXRPcmlnaW5hbENvbm5lY3Rpb24ob3B0aW9ucykudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW29wdGlvbnMubmFtZV07XG4gICAgICAgICAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuICAgICAgICAgICAgZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IGRiUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW29wdGlvbnMubmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcblxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRyb3BEQlByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IGlkYi5kZWxldGVEYXRhYmFzZShvcHRpb25zLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25ibG9ja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2luZyBhbGwgb3BlbiBjb25uZWN0aW9ucyBpbiBvbnZlcnNpb25jaGFuZ2UgaGFuZGxlciBzaG91bGQgcHJldmVudCB0aGlzIHNpdHVhdGlvbiwgYnV0IGlmXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkbyBnZXQgaGVyZSwgaXQganVzdCBtZWFucyB0aGUgcmVxdWVzdCByZW1haW5zIHBlbmRpbmcgLSBldmVudHVhbGx5IGl0IHdpbGwgc3VjY2VlZCBvciBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdkcm9wSW5zdGFuY2UgYmxvY2tlZCBmb3IgZGF0YWJhc2UgXCInICsgb3B0aW9ucy5uYW1lICsgJ1wiIHVudGlsIGFsbCBvcGVuIGNvbm5lY3Rpb25zIGFyZSBjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkcm9wREJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKF9mb3JhZ2UuX2RiSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9yZWplY3RSZWFkaW5lc3Mob3B0aW9ucywgZXJyKSB8fCBQcm9taXNlJDEucmVzb2x2ZSgpKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlID0gZGJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKG9wdGlvbnMuc3RvcmVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZlcnNpb24gPSBkYi52ZXJzaW9uICsgMTtcblxuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW29wdGlvbnMubmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcblxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLnZlcnNpb24gPSBuZXdWZXJzaW9uO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcm9wT2JqZWN0UHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gaWRiLm9wZW4ob3B0aW9ucy5uYW1lLCBuZXdWZXJzaW9uKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5kZWxldGVPYmplY3RTdG9yZShvcHRpb25zLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJvcE9iamVjdFByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm9yYWdlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9mb3JhZ2UyID0gZm9yYWdlc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JhZ2UyLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKF9mb3JhZ2UyLl9kYkluZm8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIChfcmVqZWN0UmVhZGluZXNzKG9wdGlvbnMsIGVycikgfHwgUHJvbWlzZSQxLnJlc29sdmUoKSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIGFzeW5jU3RvcmFnZSA9IHtcbiAgICBfZHJpdmVyOiAnYXN5bmNTdG9yYWdlJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSxcbiAgICBfc3VwcG9ydDogaXNJbmRleGVkREJWYWxpZCgpLFxuICAgIGl0ZXJhdGU6IGl0ZXJhdGUsXG4gICAgZ2V0SXRlbTogZ2V0SXRlbSxcbiAgICBzZXRJdGVtOiBzZXRJdGVtLFxuICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXG4gICAgY2xlYXI6IGNsZWFyLFxuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGtleToga2V5LFxuICAgIGtleXM6IGtleXMsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2Vcbn07XG5cbmZ1bmN0aW9uIGlzV2ViU1FMVmFsaWQoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvcGVuRGF0YWJhc2UgPT09ICdmdW5jdGlvbic7XG59XG5cbi8vIFNhZGx5LCB0aGUgYmVzdCB3YXkgdG8gc2F2ZSBiaW5hcnkgZGF0YSBpbiBXZWJTUUwvbG9jYWxTdG9yYWdlIGlzIHNlcmlhbGl6aW5nXG4vLyBpdCB0byBCYXNlNjQsIHNvIHRoaXMgaXMgaG93IHdlIHN0b3JlIGl0IHRvIHByZXZlbnQgdmVyeSBzdHJhbmdlIGVycm9ycyB3aXRoIGxlc3Ncbi8vIHZlcmJvc2Ugd2F5cyBvZiBiaW5hcnkgPC0+IHN0cmluZyBkYXRhIHN0b3JhZ2UuXG52YXIgQkFTRV9DSEFSUyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxudmFyIEJMT0JfVFlQRV9QUkVGSVggPSAnfn5sb2NhbF9mb3JhZ2VfdHlwZX4nO1xudmFyIEJMT0JfVFlQRV9QUkVGSVhfUkVHRVggPSAvXn5+bG9jYWxfZm9yYWdlX3R5cGV+KFtefl0rKX4vO1xuXG52YXIgU0VSSUFMSVpFRF9NQVJLRVIgPSAnX19sZnNjX186JztcbnZhciBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEggPSBTRVJJQUxJWkVEX01BUktFUi5sZW5ndGg7XG5cbi8vIE9NRyB0aGUgc2VyaWFsaXphdGlvbnMhXG52YXIgVFlQRV9BUlJBWUJVRkZFUiA9ICdhcmJmJztcbnZhciBUWVBFX0JMT0IgPSAnYmxvYic7XG52YXIgVFlQRV9JTlQ4QVJSQVkgPSAnc2kwOCc7XG52YXIgVFlQRV9VSU5UOEFSUkFZID0gJ3VpMDgnO1xudmFyIFRZUEVfVUlOVDhDTEFNUEVEQVJSQVkgPSAndWljOCc7XG52YXIgVFlQRV9JTlQxNkFSUkFZID0gJ3NpMTYnO1xudmFyIFRZUEVfSU5UMzJBUlJBWSA9ICdzaTMyJztcbnZhciBUWVBFX1VJTlQxNkFSUkFZID0gJ3VyMTYnO1xudmFyIFRZUEVfVUlOVDMyQVJSQVkgPSAndWkzMic7XG52YXIgVFlQRV9GTE9BVDMyQVJSQVkgPSAnZmwzMic7XG52YXIgVFlQRV9GTE9BVDY0QVJSQVkgPSAnZmw2NCc7XG52YXIgVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEggPSBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEggKyBUWVBFX0FSUkFZQlVGRkVSLmxlbmd0aDtcblxudmFyIHRvU3RyaW5nJDEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiBzdHJpbmdUb0J1ZmZlcihzZXJpYWxpemVkU3RyaW5nKSB7XG4gICAgLy8gRmlsbCB0aGUgc3RyaW5nIGludG8gYSBBcnJheUJ1ZmZlci5cbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gc2VyaWFsaXplZFN0cmluZy5sZW5ndGggKiAwLjc1O1xuICAgIHZhciBsZW4gPSBzZXJpYWxpemVkU3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgaTtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGVuY29kZWQxLCBlbmNvZGVkMiwgZW5jb2RlZDMsIGVuY29kZWQ0O1xuXG4gICAgaWYgKHNlcmlhbGl6ZWRTdHJpbmdbc2VyaWFsaXplZFN0cmluZy5sZW5ndGggLSAxXSA9PT0gJz0nKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICBpZiAoc2VyaWFsaXplZFN0cmluZ1tzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAtIDJdID09PSAnPScpIHtcbiAgICAgICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpO1xuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgZW5jb2RlZDEgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpXSk7XG4gICAgICAgIGVuY29kZWQyID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDFdKTtcbiAgICAgICAgZW5jb2RlZDMgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgMl0pO1xuICAgICAgICBlbmNvZGVkNCA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAzXSk7XG5cbiAgICAgICAgLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuICAgICAgICBieXRlc1twKytdID0gZW5jb2RlZDEgPDwgMiB8IGVuY29kZWQyID4+IDQ7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDIgJiAxNSkgPDwgNCB8IGVuY29kZWQzID4+IDI7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDMgJiAzKSA8PCA2IHwgZW5jb2RlZDQgJiA2MztcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuLy8gQ29udmVydHMgYSBidWZmZXIgdG8gYSBzdHJpbmcgdG8gc3RvcmUsIHNlcmlhbGl6ZWQsIGluIHRoZSBiYWNrZW5kXG4vLyBzdG9yYWdlIGxpYnJhcnkuXG5mdW5jdGlvbiBidWZmZXJUb1N0cmluZyhidWZmZXIpIHtcbiAgICAvLyBiYXNlNjQtYXJyYXlidWZmZXJcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIHZhciBiYXNlNjRTdHJpbmcgPSAnJztcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICAvKmpzbGludCBiaXR3aXNlOiB0cnVlICovXG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTW2J5dGVzW2ldID4+IDJdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1soYnl0ZXNbaV0gJiAzKSA8PCA0IHwgYnl0ZXNbaSArIDFdID4+IDRdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1soYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpICsgMl0gPj4gNl07XG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoYnl0ZXMubGVuZ3RoICUgMyA9PT0gMikge1xuICAgICAgICBiYXNlNjRTdHJpbmcgPSBiYXNlNjRTdHJpbmcuc3Vic3RyaW5nKDAsIGJhc2U2NFN0cmluZy5sZW5ndGggLSAxKSArICc9JztcbiAgICB9IGVsc2UgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDEpIHtcbiAgICAgICAgYmFzZTY0U3RyaW5nID0gYmFzZTY0U3RyaW5nLnN1YnN0cmluZygwLCBiYXNlNjRTdHJpbmcubGVuZ3RoIC0gMikgKyAnPT0nO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlNjRTdHJpbmc7XG59XG5cbi8vIFNlcmlhbGl6ZSBhIHZhbHVlLCBhZnRlcndhcmRzIGV4ZWN1dGluZyBhIGNhbGxiYWNrICh3aGljaCB1c3VhbGx5XG4vLyBpbnN0cnVjdHMgdGhlIGBzZXRJdGVtKClgIGNhbGxiYWNrL3Byb21pc2UgdG8gYmUgZXhlY3V0ZWQpLiBUaGlzIGlzIGhvd1xuLy8gd2Ugc3RvcmUgYmluYXJ5IGRhdGEgd2l0aCBsb2NhbFN0b3JhZ2UuXG5mdW5jdGlvbiBzZXJpYWxpemUodmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9ICcnO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZVR5cGUgPSB0b1N0cmluZyQxLmNhbGwodmFsdWUpO1xuICAgIH1cblxuICAgIC8vIENhbm5vdCB1c2UgYHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXJgIG9yIHN1Y2ggaGVyZSwgYXMgdGhlc2VcbiAgICAvLyBjaGVja3MgZmFpbCB3aGVuIHJ1bm5pbmcgdGhlIHRlc3RzIHVzaW5nIGNhc3Blci5qcy4uLlxuICAgIC8vXG4gICAgLy8gVE9ETzogU2VlIHdoeSB0aG9zZSB0ZXN0cyBmYWlsIGFuZCB1c2UgYSBiZXR0ZXIgc29sdXRpb24uXG4gICAgaWYgKHZhbHVlICYmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScgfHwgdmFsdWUuYnVmZmVyICYmIHRvU3RyaW5nJDEuY2FsbCh2YWx1ZS5idWZmZXIpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSkge1xuICAgICAgICAvLyBDb252ZXJ0IGJpbmFyeSBhcnJheXMgdG8gYSBzdHJpbmcgYW5kIHByZWZpeCB0aGUgc3RyaW5nIHdpdGhcbiAgICAgICAgLy8gYSBzcGVjaWFsIG1hcmtlci5cbiAgICAgICAgdmFyIGJ1ZmZlcjtcbiAgICAgICAgdmFyIG1hcmtlciA9IFNFUklBTElaRURfTUFSS0VSO1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICBidWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0FSUkFZQlVGRkVSO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyID0gdmFsdWUuYnVmZmVyO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQ4QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0lOVDhBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50OEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UOEFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UOENMQU1QRURBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQxNkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQxNkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQxNkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UMTZBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQzMkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBGbG9hdDMyQXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0ZMT0FUMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBGbG9hdDY0QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0ZMT0FUNjRBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IHR5cGUgZm9yIEJpbmFyeUFycmF5JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2sobWFya2VyICsgYnVmZmVyVG9TdHJpbmcoYnVmZmVyKSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAvLyBDb252ZXIgdGhlIGJsb2IgdG8gYSBiaW5hcnlBcnJheSBhbmQgdGhlbiB0byBhIHN0cmluZy5cbiAgICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQmFja3dhcmRzLWNvbXBhdGlibGUgcHJlZml4IGZvciB0aGUgYmxvYiB0eXBlLlxuICAgICAgICAgICAgdmFyIHN0ciA9IEJMT0JfVFlQRV9QUkVGSVggKyB2YWx1ZS50eXBlICsgJ34nICsgYnVmZmVyVG9TdHJpbmcodGhpcy5yZXN1bHQpO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhTRVJJQUxJWkVEX01BUktFUiArIFRZUEVfQkxPQiArIHN0cik7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCBjb252ZXJ0IHZhbHVlIGludG8gYSBKU09OIHN0cmluZzogXCIsIHZhbHVlKTtcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIERlc2VyaWFsaXplIGRhdGEgd2UndmUgaW5zZXJ0ZWQgaW50byBhIHZhbHVlIGNvbHVtbi9maWVsZC4gV2UgcGxhY2Vcbi8vIHNwZWNpYWwgbWFya2VycyBpbnRvIG91ciBzdHJpbmdzIHRvIG1hcmsgdGhlbSBhcyBlbmNvZGVkOyB0aGlzIGlzbid0XG4vLyBhcyBuaWNlIGFzIGEgbWV0YSBmaWVsZCwgYnV0IGl0J3MgdGhlIG9ubHkgc2FuZSB0aGluZyB3ZSBjYW4gZG8gd2hpbHN0XG4vLyBrZWVwaW5nIGxvY2FsU3RvcmFnZSBzdXBwb3J0IGludGFjdC5cbi8vXG4vLyBPZnRlbnRpbWVzIHRoaXMgd2lsbCBqdXN0IGRlc2VyaWFsaXplIEpTT04gY29udGVudCwgYnV0IGlmIHdlIGhhdmUgYVxuLy8gc3BlY2lhbCBtYXJrZXIgKFNFUklBTElaRURfTUFSS0VSLCBkZWZpbmVkIGFib3ZlKSwgd2Ugd2lsbCBleHRyYWN0XG4vLyBzb21lIGtpbmQgb2YgYXJyYXlidWZmZXIvYmluYXJ5IGRhdGEvdHlwZWQgYXJyYXkgb3V0IG9mIHRoZSBzdHJpbmcuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgbWFya2VkIHRoaXMgc3RyaW5nIGFzIGJlaW5nIHNwZWNpYWxseSBzZXJpYWxpemVkIChpLmUuXG4gICAgLy8gc29tZXRoaW5nIG90aGVyIHRoYW4gc2VyaWFsaXplZCBKU09OKSwgd2UgY2FuIGp1c3QgcmV0dXJuIGl0IGFuZCBiZVxuICAgIC8vIGRvbmUgd2l0aCBpdC5cbiAgICBpZiAodmFsdWUuc3Vic3RyaW5nKDAsIFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCkgIT09IFNFUklBTElaRURfTUFSS0VSKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgZGVhbHMgd2l0aCBkZXNlcmlhbGl6aW5nIHNvbWUga2luZCBvZiBCbG9iIG9yXG4gICAgLy8gVHlwZWRBcnJheS4gRmlyc3Qgd2Ugc2VwYXJhdGUgb3V0IHRoZSB0eXBlIG9mIGRhdGEgd2UncmUgZGVhbGluZ1xuICAgIC8vIHdpdGggZnJvbSB0aGUgZGF0YSBpdHNlbGYuXG4gICAgdmFyIHNlcmlhbGl6ZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHJpbmcoVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpO1xuICAgIHZhciB0eXBlID0gdmFsdWUuc3Vic3RyaW5nKFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCwgVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpO1xuXG4gICAgdmFyIGJsb2JUeXBlO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmxlIGJsb2IgdHlwZSBzZXJpYWxpemF0aW9uIHN0cmF0ZWd5LlxuICAgIC8vIERCcyBjcmVhdGVkIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgbG9jYWxGb3JhZ2Ugd2lsbCBzaW1wbHkgbm90IGhhdmUgdGhlIGJsb2IgdHlwZS5cbiAgICBpZiAodHlwZSA9PT0gVFlQRV9CTE9CICYmIEJMT0JfVFlQRV9QUkVGSVhfUkVHRVgudGVzdChzZXJpYWxpemVkU3RyaW5nKSkge1xuICAgICAgICB2YXIgbWF0Y2hlciA9IHNlcmlhbGl6ZWRTdHJpbmcubWF0Y2goQkxPQl9UWVBFX1BSRUZJWF9SRUdFWCk7XG4gICAgICAgIGJsb2JUeXBlID0gbWF0Y2hlclsxXTtcbiAgICAgICAgc2VyaWFsaXplZFN0cmluZyA9IHNlcmlhbGl6ZWRTdHJpbmcuc3Vic3RyaW5nKG1hdGNoZXJbMF0ubGVuZ3RoKTtcbiAgICB9XG4gICAgdmFyIGJ1ZmZlciA9IHN0cmluZ1RvQnVmZmVyKHNlcmlhbGl6ZWRTdHJpbmcpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSByaWdodCB0eXBlIGJhc2VkIG9uIHRoZSBjb2RlL3R5cGUgc2V0IGR1cmluZ1xuICAgIC8vIHNlcmlhbGl6YXRpb24uXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgVFlQRV9BUlJBWUJVRkZFUjpcbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgIGNhc2UgVFlQRV9CTE9COlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogYmxvYlR5cGUgfSk7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQ4QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDhBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDhBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDhDTEFNUEVEQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQxNkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UMTZBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDE2QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0lOVDMyQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfRkxPQVQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0ZMT0FUNjRBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQ2NEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua293biB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxufVxuXG52YXIgbG9jYWxmb3JhZ2VTZXJpYWxpemVyID0ge1xuICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplLFxuICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZSxcbiAgICBzdHJpbmdUb0J1ZmZlcjogc3RyaW5nVG9CdWZmZXIsXG4gICAgYnVmZmVyVG9TdHJpbmc6IGJ1ZmZlclRvU3RyaW5nXG59O1xuXG4vKlxuICogSW5jbHVkZXMgY29kZSBmcm9tOlxuICpcbiAqIGJhc2U2NC1hcnJheWJ1ZmZlclxuICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMiBOaWtsYXMgdm9uIEhlcnR6ZW5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB0LmV4ZWN1dGVTcWwoJ0NSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyAnICsgJyhpZCBJTlRFR0VSIFBSSU1BUlkgS0VZLCBrZXkgdW5pcXVlLCB2YWx1ZSknLCBbXSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xufVxuXG4vLyBPcGVuIHRoZSBXZWJTUUwgZGF0YWJhc2UgKGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBvbmUgaWYgb25lIGRpZG4ndFxuLy8gcHJldmlvdXNseSBleGlzdCksIHVzaW5nIGFueSBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlJDEob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGJJbmZvID0ge1xuICAgICAgICBkYjogbnVsbFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRiSW5mb1tpXSA9IHR5cGVvZiBvcHRpb25zW2ldICE9PSAnc3RyaW5nJyA/IG9wdGlvbnNbaV0udG9TdHJpbmcoKSA6IG9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGJJbmZvUHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBPcGVuIHRoZSBkYXRhYmFzZTsgdGhlIG9wZW5EYXRhYmFzZSBBUEkgd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAgICAgIC8vIGNyZWF0ZSBpdCBmb3IgdXMgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRiSW5mby5kYiA9IG9wZW5EYXRhYmFzZShkYkluZm8ubmFtZSwgU3RyaW5nKGRiSW5mby52ZXJzaW9uKSwgZGJJbmZvLmRlc2NyaXB0aW9uLCBkYkluZm8uc2l6ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgb3VyIGtleS92YWx1ZSB0YWJsZSBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGRiSW5mby5zZXJpYWxpemVyID0gbG9jYWxmb3JhZ2VTZXJpYWxpemVyO1xuICAgIHJldHVybiBkYkluZm9Qcm9taXNlO1xufVxuXG5mdW5jdGlvbiB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHQuZXhlY3V0ZVNxbChzcWxTdGF0ZW1lbnQsIGFyZ3MsIGNhbGxiYWNrLCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IGVycm9yLlNZTlRBWF9FUlIpIHtcbiAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUIG5hbWUgRlJPTSBzcWxpdGVfbWFzdGVyICcgKyBcIldIRVJFIHR5cGU9J3RhYmxlJyBBTkQgbmFtZSA9ID9cIiwgW2RiSW5mby5zdG9yZU5hbWVdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0cy5yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdGFibGUgaXMgbWlzc2luZyAod2FzIGRlbGV0ZWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlLWNyZWF0ZSBpdCB0YWJsZSBhbmQgcmV0cnlcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWxTdGF0ZW1lbnQsIGFyZ3MsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayh0LCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrKHQsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0sIGVycm9yQ2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBnZXRJdGVtJDEoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUga2V5ID0gPyBMSU1JVCAxJywgW2tleV0sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MubGVuZ3RoID8gcmVzdWx0cy5yb3dzLml0ZW0oMCkudmFsdWUgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIHNlcmlhbGl6ZWQgY29udGVudCB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHVucGFjay5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBpdGVyYXRlJDEoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcblxuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1QgKiBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvd3MgPSByZXN1bHRzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSByb3dzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJvd3MuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBzZXJpYWxpemVkIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gdW5wYWNrLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yKHJlc3VsdCwgaXRlbS5rZXksIGkgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdm9pZCgwKSBwcmV2ZW50cyBwcm9ibGVtcyB3aXRoIHJlZGVmaW5pdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgYHVuZGVmaW5lZGAuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIF9zZXRJdGVtKGtleSwgdmFsdWUsIGNhbGxiYWNrLCByZXRyaWVzTGVmdCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVGhlIGxvY2FsU3RvcmFnZSBBUEkgZG9lc24ndCByZXR1cm4gdW5kZWZpbmVkIHZhbHVlcyBpbiBhblxuICAgICAgICAgICAgLy8gXCJleHBlY3RlZFwiIHdheSwgc28gdW5kZWZpbmVkIGlzIGFsd2F5cyBjYXN0IHRvIG51bGwgaW4gYWxsXG4gICAgICAgICAgICAvLyBkcml2ZXJzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3B1bGwvNDJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBvcmlnaW5hbCB2YWx1ZSB0byBwYXNzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uc2VyaWFsaXplci5zZXJpYWxpemUodmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnSU5TRVJUIE9SIFJFUExBQ0UgSU5UTyAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgJyArICcoa2V5LCB2YWx1ZSkgVkFMVUVTICg/LCA/KScsIFtrZXksIHZhbHVlXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3JpZ2luYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHRyYW5zYWN0aW9uIGZhaWxlZDsgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIHNlZSBpZiBpdCdzIGEgcXVvdGEgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3FsRXJyb3IuY29kZSA9PT0gc3FsRXJyb3IuUVVPVEFfRVJSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgcmVqZWN0IHRoZSBjYWxsYmFjayBvdXRyaWdodCBmb3Igbm93LCBidXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHdvcnRoIHRyeWluZyB0byByZS1ydW4gdGhlIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV2ZW4gaWYgdGhlIHVzZXIgYWNjZXB0cyB0aGUgcHJvbXB0IHRvIHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vcmUgc3RvcmFnZSBvbiBTYWZhcmksIHRoaXMgZXJyb3Igd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlIGNhbGxlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byByZS1ydW4gdGhlIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXRyaWVzTGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfc2V0SXRlbS5hcHBseShzZWxmLCBba2V5LCBvcmlnaW5hbFZhbHVlLCBjYWxsYmFjaywgcmV0cmllc0xlZnQgLSAxXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChzcWxFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzZXRJdGVtJDEoa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gX3NldEl0ZW0uYXBwbHkodGhpcywgW2tleSwgdmFsdWUsIGNhbGxiYWNrLCAxXSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0kMShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdERUxFVEUgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUga2V5ID0gPycsIFtrZXldLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBEZWxldGVzIGV2ZXJ5IGl0ZW0gaW4gdGhlIHRhYmxlLlxuLy8gVE9ETzogRmluZCBvdXQgaWYgdGhpcyByZXNldHMgdGhlIEFVVE9fSU5DUkVNRU5UIG51bWJlci5cbmZ1bmN0aW9uIGNsZWFyJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdERUxFVEUgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIERvZXMgYSBzaW1wbGUgYENPVU5UKGtleSlgIHRvIGdldCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHN0b3JlZCBpblxuLy8gbG9jYWxGb3JhZ2UuXG5mdW5jdGlvbiBsZW5ndGgkMShjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAvLyBBaGhoLCBTUUwgbWFrZXMgdGhpcyBvbmUgc29vb29vbyBlYXN5LlxuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUIENPVU5UKGtleSkgYXMgYyBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5pdGVtKDApLmM7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBSZXR1cm4gdGhlIGtleSBsb2NhdGVkIGF0IGtleSBpbmRleCBYOyBlc3NlbnRpYWxseSBnZXRzIHRoZSBrZXkgZnJvbSBhXG4vLyBgV0hFUkUgaWQgPSA/YC4gVGhpcyBpcyB0aGUgbW9zdCBlZmZpY2llbnQgd2F5IEkgY2FuIHRoaW5rIHRvIGltcGxlbWVudFxuLy8gdGhpcyByYXJlbHktdXNlZCAoaW4gbXkgZXhwZXJpZW5jZSkgcGFydCBvZiB0aGUgQVBJLCBidXQgaXQgY2FuIHNlZW1cbi8vIGluY29uc2lzdGVudCwgYmVjYXVzZSB3ZSBkbyBgSU5TRVJUIE9SIFJFUExBQ0UgSU5UT2Agb24gYHNldEl0ZW0oKWAsIHNvXG4vLyB0aGUgSUQgb2YgZWFjaCBrZXkgd2lsbCBjaGFuZ2UgZXZlcnkgdGltZSBpdCdzIHVwZGF0ZWQuIFBlcmhhcHMgYSBzdG9yZWRcbi8vIHByb2NlZHVyZSBmb3IgdGhlIGBzZXRJdGVtKClgIFNRTCB3b3VsZCBzb2x2ZSB0aGlzIHByb2JsZW0/XG4vLyBUT0RPOiBEb24ndCBjaGFuZ2UgSUQgb24gYHNldEl0ZW0oKWAuXG5mdW5jdGlvbiBrZXkkMShuLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBrZXkgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUgaWQgPSA/IExJTUlUIDEnLCBbbiArIDFdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0cy5yb3dzLmxlbmd0aCA/IHJlc3VsdHMucm93cy5pdGVtKDApLmtleSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1Qga2V5IEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2gocmVzdWx0cy5yb3dzLml0ZW0oaSkua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoa2V5cyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dlYmRhdGFiYXNlLyNkYXRhYmFzZXNcbi8vID4gVGhlcmUgaXMgbm8gd2F5IHRvIGVudW1lcmF0ZSBvciBkZWxldGUgdGhlIGRhdGFiYXNlcyBhdmFpbGFibGUgZm9yIGFuIG9yaWdpbiBmcm9tIHRoaXMgQVBJLlxuZnVuY3Rpb24gZ2V0QWxsU3RvcmVOYW1lcyhkYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUIG5hbWUgRlJPTSBzcWxpdGVfbWFzdGVyICcgKyBcIldIRVJFIHR5cGU9J3RhYmxlJyBBTkQgbmFtZSA8PiAnX19XZWJLaXREYXRhYmFzZUluZm9UYWJsZV9fJ1wiLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmVOYW1lcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lcy5wdXNoKHJlc3VsdHMucm93cy5pdGVtKGkpLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBkYjogZGIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXM6IHN0b3JlTmFtZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZHJvcEluc3RhbmNlJDEob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHZhciBkYjtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm5hbWUgPT09IGN1cnJlbnRDb25maWcubmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgZGIgcmVmZXJlbmNlIG9mIHRoZSBjdXJyZW50IGluc3RhbmNlXG4gICAgICAgICAgICAgICAgZGIgPSBzZWxmLl9kYkluZm8uZGI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRiID0gb3BlbkRhdGFiYXNlKG9wdGlvbnMubmFtZSwgJycsICcnLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIGRyb3AgYWxsIGRhdGFiYXNlIHRhYmxlc1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZ2V0QWxsU3RvcmVOYW1lcyhkYikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgZGI6IGRiLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzOiBbb3B0aW9ucy5zdG9yZU5hbWVdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKG9wZXJhdGlvbkluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25JbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRyb3BUYWJsZShzdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ0RST1AgVEFCTEUgSUYgRVhJU1RTICcgKyBzdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG9wZXJhdGlvbkluZm8uc3RvcmVOYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9ucy5wdXNoKGRyb3BUYWJsZShvcGVyYXRpb25JbmZvLnN0b3JlTmFtZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UkMS5hbGwob3BlcmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChzcWxFcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIHdlYlNRTFN0b3JhZ2UgPSB7XG4gICAgX2RyaXZlcjogJ3dlYlNRTFN0b3JhZ2UnLFxuICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlJDEsXG4gICAgX3N1cHBvcnQ6IGlzV2ViU1FMVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlJDEsXG4gICAgZ2V0SXRlbTogZ2V0SXRlbSQxLFxuICAgIHNldEl0ZW06IHNldEl0ZW0kMSxcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtJDEsXG4gICAgY2xlYXI6IGNsZWFyJDEsXG4gICAgbGVuZ3RoOiBsZW5ndGgkMSxcbiAgICBrZXk6IGtleSQxLFxuICAgIGtleXM6IGtleXMkMSxcbiAgICBkcm9wSW5zdGFuY2U6IGRyb3BJbnN0YW5jZSQxXG59O1xuXG5mdW5jdGlvbiBpc0xvY2FsU3RvcmFnZVZhbGlkKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJiAnc2V0SXRlbScgaW4gbG9jYWxTdG9yYWdlICYmXG4gICAgICAgIC8vIGluIElFOCB0eXBlb2YgbG9jYWxTdG9yYWdlLnNldEl0ZW0gPT09ICdvYmplY3QnXG4gICAgICAgICEhbG9jYWxTdG9yYWdlLnNldEl0ZW07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIGRlZmF1bHRDb25maWcpIHtcbiAgICB2YXIga2V5UHJlZml4ID0gb3B0aW9ucy5uYW1lICsgJy8nO1xuXG4gICAgaWYgKG9wdGlvbnMuc3RvcmVOYW1lICE9PSBkZWZhdWx0Q29uZmlnLnN0b3JlTmFtZSkge1xuICAgICAgICBrZXlQcmVmaXggKz0gb3B0aW9ucy5zdG9yZU5hbWUgKyAnLyc7XG4gICAgfVxuICAgIHJldHVybiBrZXlQcmVmaXg7XG59XG5cbi8vIENoZWNrIGlmIGxvY2FsU3RvcmFnZSB0aHJvd3Mgd2hlbiBzYXZpbmcgYW4gaXRlbVxuZnVuY3Rpb24gY2hlY2tJZkxvY2FsU3RvcmFnZVRocm93cygpIHtcbiAgICB2YXIgbG9jYWxTdG9yYWdlVGVzdEtleSA9ICdfbG9jYWxmb3JhZ2Vfc3VwcG9ydF90ZXN0JztcblxuICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZVRlc3RLZXksIHRydWUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VUZXN0S2V5KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8vIENoZWNrIGlmIGxvY2FsU3RvcmFnZSBpcyB1c2FibGUgYW5kIGFsbG93cyB0byBzYXZlIGFuIGl0ZW1cbi8vIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBsb2NhbFN0b3JhZ2UgaXMgdXNhYmxlIGluIFNhZmFyaSBQcml2YXRlIEJyb3dzaW5nXG4vLyBtb2RlLCBvciBpbiBhbnkgb3RoZXIgY2FzZSB3aGVyZSB0aGUgYXZhaWxhYmxlIHF1b3RhIGZvciBsb2NhbFN0b3JhZ2Vcbi8vIGlzIDAgYW5kIHRoZXJlIHdhc24ndCBhbnkgc2F2ZWQgaXRlbXMgeWV0LlxuZnVuY3Rpb24gX2lzTG9jYWxTdG9yYWdlVXNhYmxlKCkge1xuICAgIHJldHVybiAhY2hlY2tJZkxvY2FsU3RvcmFnZVRocm93cygpIHx8IGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwO1xufVxuXG4vLyBDb25maWcgdGhlIGxvY2FsU3RvcmFnZSBiYWNrZW5kLCB1c2luZyBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlJDIob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGJJbmZvID0ge307XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGJJbmZvLmtleVByZWZpeCA9IF9nZXRLZXlQcmVmaXgob3B0aW9ucywgc2VsZi5fZGVmYXVsdENvbmZpZyk7XG5cbiAgICBpZiAoIV9pc0xvY2FsU3RvcmFnZVVzYWJsZSgpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlJDEucmVqZWN0KCk7XG4gICAgfVxuXG4gICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgIGRiSW5mby5zZXJpYWxpemVyID0gbG9jYWxmb3JhZ2VTZXJpYWxpemVyO1xuXG4gICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCk7XG59XG5cbi8vIFJlbW92ZSBhbGwga2V5cyBmcm9tIHRoZSBkYXRhc3RvcmUsIGVmZmVjdGl2ZWx5IGRlc3Ryb3lpbmcgYWxsIGRhdGEgaW5cbi8vIHRoZSBhcHAncyBrZXkvdmFsdWUgc3RvcmUhXG5mdW5jdGlvbiBjbGVhciQyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIga2V5UHJlZml4ID0gc2VsZi5fZGJJbmZvLmtleVByZWZpeDtcblxuICAgICAgICBmb3IgKHZhciBpID0gbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblxuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBSZXRyaWV2ZSBhbiBpdGVtIGZyb20gdGhlIHN0b3JlLiBVbmxpa2UgdGhlIG9yaWdpbmFsIGFzeW5jX3N0b3JhZ2Vcbi8vIGxpYnJhcnkgaW4gR2FpYSwgd2UgZG9uJ3QgbW9kaWZ5IHJldHVybiB2YWx1ZXMgYXQgYWxsLiBJZiBhIGtleSdzIHZhbHVlXG4vLyBpcyBgdW5kZWZpbmVkYCwgd2UgcGFzcyB0aGF0IHZhbHVlIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbmZ1bmN0aW9uIGdldEl0ZW0kMihrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXkpO1xuXG4gICAgICAgIC8vIElmIGEgcmVzdWx0IHdhcyBmb3VuZCwgcGFyc2UgaXQgZnJvbSB0aGUgc2VyaWFsaXplZFxuICAgICAgICAvLyBzdHJpbmcgaW50byBhIEpTIG9iamVjdC4gSWYgcmVzdWx0IGlzbid0IHRydXRoeSwgdGhlIGtleVxuICAgICAgICAvLyBpcyBsaWtlbHkgdW5kZWZpbmVkIGFuZCB3ZSdsbCBwYXNzIGl0IHN0cmFpZ2h0IHRvIHRoZVxuICAgICAgICAvLyBjYWxsYmFjay5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBJdGVyYXRlIG92ZXIgYWxsIGl0ZW1zIGluIHRoZSBzdG9yZS5cbmZ1bmN0aW9uIGl0ZXJhdGUkMihpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IGRiSW5mby5rZXlQcmVmaXg7XG4gICAgICAgIHZhciBrZXlQcmVmaXhMZW5ndGggPSBrZXlQcmVmaXgubGVuZ3RoO1xuICAgICAgICB2YXIgbGVuZ3RoID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcblxuICAgICAgICAvLyBXZSB1c2UgYSBkZWRpY2F0ZWQgaXRlcmF0b3IgaW5zdGVhZCBvZiB0aGUgYGlgIHZhcmlhYmxlIGJlbG93XG4gICAgICAgIC8vIHNvIG90aGVyIGtleXMgd2UgZmV0Y2ggaW4gbG9jYWxTdG9yYWdlIGFyZW4ndCBjb3VudGVkIGluXG4gICAgICAgIC8vIHRoZSBgaXRlcmF0aW9uTnVtYmVyYCBhcmd1bWVudCBwYXNzZWQgdG8gdGhlIGBpdGVyYXRlKClgXG4gICAgICAgIC8vIGNhbGxiYWNrLlxuICAgICAgICAvL1xuICAgICAgICAvLyBTZWU6IGdpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQzNSNkaXNjdXNzaW9uX3IzODA2MTUzMFxuICAgICAgICB2YXIgaXRlcmF0aW9uTnVtYmVyID0gMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihrZXlQcmVmaXgpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgICAgICAgICAvLyBJZiBhIHJlc3VsdCB3YXMgZm91bmQsIHBhcnNlIGl0IGZyb20gdGhlIHNlcmlhbGl6ZWRcbiAgICAgICAgICAgIC8vIHN0cmluZyBpbnRvIGEgSlMgb2JqZWN0LiBJZiByZXN1bHQgaXNuJ3QgdHJ1dGh5LCB0aGVcbiAgICAgICAgICAgIC8vIGtleSBpcyBsaWtlbHkgdW5kZWZpbmVkIGFuZCB3ZSdsbCBwYXNzIGl0IHN0cmFpZ2h0XG4gICAgICAgICAgICAvLyB0byB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgPSBpdGVyYXRvcih2YWx1ZSwga2V5LnN1YnN0cmluZyhrZXlQcmVmaXhMZW5ndGgpLCBpdGVyYXRpb25OdW1iZXIrKyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTYW1lIGFzIGxvY2FsU3RvcmFnZSdzIGtleSgpIG1ldGhvZCwgZXhjZXB0IHRha2VzIGEgY2FsbGJhY2suXG5mdW5jdGlvbiBrZXkkMihuLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5rZXkobik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcmVmaXggZnJvbSB0aGUga2V5LCBpZiBhIGtleSBpcyBmb3VuZC5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZyhkYkluZm8ua2V5UHJlZml4Lmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyQyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICB2YXIgbGVuZ3RoID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBpZiAoaXRlbUtleS5pbmRleE9mKGRiSW5mby5rZXlQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGl0ZW1LZXkuc3Vic3RyaW5nKGRiSW5mby5rZXlQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFN1cHBseSB0aGUgbnVtYmVyIG9mIGtleXMgaW4gdGhlIGRhdGFzdG9yZSB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5mdW5jdGlvbiBsZW5ndGgkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYua2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgc3RvcmUsIG5pY2UgYW5kIHNpbXBsZS5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0kMihrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGJJbmZvLmtleVByZWZpeCArIGtleSk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTZXQgYSBrZXkncyB2YWx1ZSBhbmQgcnVuIGFuIG9wdGlvbmFsIGNhbGxiYWNrIG9uY2UgdGhlIHZhbHVlIGlzIHNldC5cbi8vIFVubGlrZSBHYWlhJ3MgaW1wbGVtZW50YXRpb24sIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIHZhbHVlLFxuLy8gaW4gY2FzZSB5b3Ugd2FudCB0byBvcGVyYXRlIG9uIHRoYXQgdmFsdWUgb25seSBhZnRlciB5b3UncmUgc3VyZSBpdFxuLy8gc2F2ZWQsIG9yIHNvbWV0aGluZyBsaWtlIHRoYXQuXG5mdW5jdGlvbiBzZXRJdGVtJDIoa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBDb252ZXJ0IHVuZGVmaW5lZCB2YWx1ZXMgdG8gbnVsbC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MlxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgdmFsdWUgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5zZXJpYWxpemVyLnNlcmlhbGl6ZSh2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9yaWdpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2UgY2FwYWNpdHkgZXhjZWVkZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSBzcGVjaWZpYyBlcnJvci9ldmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8IGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZSQyKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICBvcHRpb25zLnN0b3JlTmFtZSA9IG9wdGlvbnMuc3RvcmVOYW1lIHx8IGN1cnJlbnRDb25maWcuc3RvcmVOYW1lO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUob3B0aW9ucy5uYW1lICsgJy8nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIHNlbGYuX2RlZmF1bHRDb25maWcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoa2V5UHJlZml4KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIGxvY2FsU3RvcmFnZVdyYXBwZXIgPSB7XG4gICAgX2RyaXZlcjogJ2xvY2FsU3RvcmFnZVdyYXBwZXInLFxuICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlJDIsXG4gICAgX3N1cHBvcnQ6IGlzTG9jYWxTdG9yYWdlVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlJDIsXG4gICAgZ2V0SXRlbTogZ2V0SXRlbSQyLFxuICAgIHNldEl0ZW06IHNldEl0ZW0kMixcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtJDIsXG4gICAgY2xlYXI6IGNsZWFyJDIsXG4gICAgbGVuZ3RoOiBsZW5ndGgkMixcbiAgICBrZXk6IGtleSQyLFxuICAgIGtleXM6IGtleXMkMixcbiAgICBkcm9wSW5zdGFuY2U6IGRyb3BJbnN0YW5jZSQyXG59O1xuXG52YXIgc2FtZVZhbHVlID0gZnVuY3Rpb24gc2FtZVZhbHVlKHgsIHkpIHtcbiAgICByZXR1cm4geCA9PT0geSB8fCB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT09ICdudW1iZXInICYmIGlzTmFOKHgpICYmIGlzTmFOKHkpO1xufTtcblxudmFyIGluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIHNlYXJjaEVsZW1lbnQpIHtcbiAgICB2YXIgbGVuID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICBpZiAoc2FtZVZhbHVlKGFycmF5W2ldLCBzZWFyY2hFbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLy8gRHJpdmVycyBhcmUgc3RvcmVkIGhlcmUgd2hlbiBgZGVmaW5lRHJpdmVyKClgIGlzIGNhbGxlZC5cbi8vIFRoZXkgYXJlIHNoYXJlZCBhY3Jvc3MgYWxsIGluc3RhbmNlcyBvZiBsb2NhbEZvcmFnZS5cbnZhciBEZWZpbmVkRHJpdmVycyA9IHt9O1xuXG52YXIgRHJpdmVyU3VwcG9ydCA9IHt9O1xuXG52YXIgRGVmYXVsdERyaXZlcnMgPSB7XG4gICAgSU5ERVhFRERCOiBhc3luY1N0b3JhZ2UsXG4gICAgV0VCU1FMOiB3ZWJTUUxTdG9yYWdlLFxuICAgIExPQ0FMU1RPUkFHRTogbG9jYWxTdG9yYWdlV3JhcHBlclxufTtcblxudmFyIERlZmF1bHREcml2ZXJPcmRlciA9IFtEZWZhdWx0RHJpdmVycy5JTkRFWEVEREIuX2RyaXZlciwgRGVmYXVsdERyaXZlcnMuV0VCU1FMLl9kcml2ZXIsIERlZmF1bHREcml2ZXJzLkxPQ0FMU1RPUkFHRS5fZHJpdmVyXTtcblxudmFyIE9wdGlvbmFsRHJpdmVyTWV0aG9kcyA9IFsnZHJvcEluc3RhbmNlJ107XG5cbnZhciBMaWJyYXJ5TWV0aG9kcyA9IFsnY2xlYXInLCAnZ2V0SXRlbScsICdpdGVyYXRlJywgJ2tleScsICdrZXlzJywgJ2xlbmd0aCcsICdyZW1vdmVJdGVtJywgJ3NldEl0ZW0nXS5jb25jYXQoT3B0aW9uYWxEcml2ZXJNZXRob2RzKTtcblxudmFyIERlZmF1bHRDb25maWcgPSB7XG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGRyaXZlcjogRGVmYXVsdERyaXZlck9yZGVyLnNsaWNlKCksXG4gICAgbmFtZTogJ2xvY2FsZm9yYWdlJyxcbiAgICAvLyBEZWZhdWx0IERCIHNpemUgaXMgX0pVU1QgVU5ERVJfIDVNQiwgYXMgaXQncyB0aGUgaGlnaGVzdCBzaXplXG4gICAgLy8gd2UgY2FuIHVzZSB3aXRob3V0IGEgcHJvbXB0LlxuICAgIHNpemU6IDQ5ODA3MzYsXG4gICAgc3RvcmVOYW1lOiAna2V5dmFsdWVwYWlycycsXG4gICAgdmVyc2lvbjogMS4wXG59O1xuXG5mdW5jdGlvbiBjYWxsV2hlblJlYWR5KGxvY2FsRm9yYWdlSW5zdGFuY2UsIGxpYnJhcnlNZXRob2QpIHtcbiAgICBsb2NhbEZvcmFnZUluc3RhbmNlW2xpYnJhcnlNZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2FyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBsb2NhbEZvcmFnZUluc3RhbmNlLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxGb3JhZ2VJbnN0YW5jZVtsaWJyYXJ5TWV0aG9kXS5hcHBseShsb2NhbEZvcmFnZUluc3RhbmNlLCBfYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIGlmIChhcmcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9rZXkgaW4gYXJnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShhcmdbX2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1bX2tleV0gPSBhcmdbX2tleV0uc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtfa2V5XSA9IGFyZ1tfa2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG59XG5cbnZhciBMb2NhbEZvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2NhbEZvcmFnZShvcHRpb25zKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbEZvcmFnZSk7XG5cbiAgICAgICAgZm9yICh2YXIgZHJpdmVyVHlwZUtleSBpbiBEZWZhdWx0RHJpdmVycykge1xuICAgICAgICAgICAgaWYgKERlZmF1bHREcml2ZXJzLmhhc093blByb3BlcnR5KGRyaXZlclR5cGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlciA9IERlZmF1bHREcml2ZXJzW2RyaXZlclR5cGVLZXldO1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyLl9kcml2ZXI7XG4gICAgICAgICAgICAgICAgdGhpc1tkcml2ZXJUeXBlS2V5XSA9IGRyaXZlck5hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIURlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IGRyaXZlcnMgY2FuIGJlIGRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gYSBibG9ja2luZyBtYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVEcml2ZXIoZHJpdmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWZhdWx0Q29uZmlnID0gZXh0ZW5kKHt9LCBEZWZhdWx0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gZXh0ZW5kKHt9LCB0aGlzLl9kZWZhdWx0Q29uZmlnLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZHJpdmVyU2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW5pdERyaXZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RiSW5mbyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5KCk7XG4gICAgICAgIHRoaXMuc2V0RHJpdmVyKHRoaXMuX2NvbmZpZy5kcml2ZXIpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgIH1cblxuICAgIC8vIFNldCBhbnkgY29uZmlnIHZhbHVlcyBmb3IgbG9jYWxGb3JhZ2U7IGNhbiBiZSBjYWxsZWQgYW55dGltZSBiZWZvcmVcbiAgICAvLyB0aGUgZmlyc3QgQVBJIGNhbGwgKGUuZy4gYGdldEl0ZW1gLCBgc2V0SXRlbWApLlxuICAgIC8vIFdlIGxvb3AgdGhyb3VnaCBvcHRpb25zIHNvIHdlIGRvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBjb25maWdcbiAgICAvLyB2YWx1ZXMuXG5cblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5jb25maWcgPSBmdW5jdGlvbiBjb25maWcob3B0aW9ucykge1xuICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBhcmd1bWVudCBpcyBhbiBvYmplY3QsIHdlIHVzZSBpdCB0byBzZXQgdmFsdWVzLlxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIHJldHVybiBlaXRoZXIgYSBzcGVjaWZpZWQgY29uZmlnIHZhbHVlIG9yIGFsbFxuICAgICAgICAvLyBjb25maWcgdmFsdWVzLlxuICAgICAgICBpZiAoKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBJZiBsb2NhbGZvcmFnZSBpcyByZWFkeSBhbmQgZnVsbHkgaW5pdGlhbGl6ZWQsIHdlIGNhbid0IHNldFxuICAgICAgICAgICAgLy8gYW55IG5ldyBjb25maWd1cmF0aW9uIHZhbHVlcy4gSW5zdGVhZCwgd2UgcmV0dXJuIGFuIGVycm9yLlxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlYWR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkNhbid0IGNhbGwgY29uZmlnKCkgYWZ0ZXIgbG9jYWxmb3JhZ2UgXCIgKyAnaGFzIGJlZW4gdXNlZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09ICdzdG9yZU5hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbaV0gPSBvcHRpb25zW2ldLnJlcGxhY2UoL1xcVy9nLCAnXycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpID09PSAndmVyc2lvbicgJiYgdHlwZW9mIG9wdGlvbnNbaV0gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0RhdGFiYXNlIHZlcnNpb24gbXVzdCBiZSBhIG51bWJlci4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdbaV0gPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZnRlciBhbGwgY29uZmlnIG9wdGlvbnMgYXJlIHNldCBhbmRcbiAgICAgICAgICAgIC8vIHRoZSBkcml2ZXIgb3B0aW9uIGlzIHVzZWQsIHRyeSBzZXR0aW5nIGl0XG4gICAgICAgICAgICBpZiAoJ2RyaXZlcicgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmRyaXZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldERyaXZlcih0aGlzLl9jb25maWcuZHJpdmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnW29wdGlvbnNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBVc2VkIHRvIGRlZmluZSBhIGN1c3RvbSBkcml2ZXIsIHNoYXJlZCBhY3Jvc3MgYWxsIGluc3RhbmNlcyBvZlxuICAgIC8vIGxvY2FsRm9yYWdlLlxuXG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZGVmaW5lRHJpdmVyID0gZnVuY3Rpb24gZGVmaW5lRHJpdmVyKGRyaXZlck9iamVjdCwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBkcml2ZXJPYmplY3QuX2RyaXZlcjtcbiAgICAgICAgICAgICAgICB2YXIgY29tcGxpYW5jZUVycm9yID0gbmV3IEVycm9yKCdDdXN0b20gZHJpdmVyIG5vdCBjb21wbGlhbnQ7IHNlZSAnICsgJ2h0dHBzOi8vbW96aWxsYS5naXRodWIuaW8vbG9jYWxGb3JhZ2UvI2RlZmluZWRyaXZlcicpO1xuXG4gICAgICAgICAgICAgICAgLy8gQSBkcml2ZXIgbmFtZSBzaG91bGQgYmUgZGVmaW5lZCBhbmQgbm90IG92ZXJsYXAgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAvLyBsaWJyYXJ5LWRlZmluZWQsIGRlZmF1bHQgZHJpdmVycy5cbiAgICAgICAgICAgICAgICBpZiAoIWRyaXZlck9iamVjdC5fZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChjb21wbGlhbmNlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlck1ldGhvZHMgPSBMaWJyYXJ5TWV0aG9kcy5jb25jYXQoJ19pbml0U3RvcmFnZScpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkcml2ZXJNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkcml2ZXJNZXRob2ROYW1lID0gZHJpdmVyTWV0aG9kc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyB0aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGEgbWV0aG9kIGV2ZW4gd2hlbiBvcHRpb25hbFxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNSZXF1aXJlZCA9ICFpbmNsdWRlcyhPcHRpb25hbERyaXZlck1ldGhvZHMsIGRyaXZlck1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGlzUmVxdWlyZWQgfHwgZHJpdmVyT2JqZWN0W2RyaXZlck1ldGhvZE5hbWVdKSAmJiB0eXBlb2YgZHJpdmVyT2JqZWN0W2RyaXZlck1ldGhvZE5hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoY29tcGxpYW5jZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjb25maWd1cmVNaXNzaW5nTWV0aG9kcyA9IGZ1bmN0aW9uIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aG9kTm90SW1wbGVtZW50ZWRGYWN0b3J5ID0gZnVuY3Rpb24gbWV0aG9kTm90SW1wbGVtZW50ZWRGYWN0b3J5KG1ldGhvZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdNZXRob2QgJyArIG1ldGhvZE5hbWUgKyAnIGlzIG5vdCBpbXBsZW1lbnRlZCBieSB0aGUgY3VycmVudCBkcml2ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0gT3B0aW9uYWxEcml2ZXJNZXRob2RzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxEcml2ZXJNZXRob2QgPSBPcHRpb25hbERyaXZlck1ldGhvZHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkcml2ZXJPYmplY3Rbb3B0aW9uYWxEcml2ZXJNZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJpdmVyT2JqZWN0W29wdGlvbmFsRHJpdmVyTWV0aG9kXSA9IG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeShvcHRpb25hbERyaXZlck1ldGhvZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uZmlndXJlTWlzc2luZ01ldGhvZHMoKTtcblxuICAgICAgICAgICAgICAgIHZhciBzZXREcml2ZXJTdXBwb3J0ID0gZnVuY3Rpb24gc2V0RHJpdmVyU3VwcG9ydChzdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdSZWRlZmluaW5nIExvY2FsRm9yYWdlIGRyaXZlcjogJyArIGRyaXZlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdID0gZHJpdmVyT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICBEcml2ZXJTdXBwb3J0W2RyaXZlck5hbWVdID0gc3VwcG9ydDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgdXNlIGEgdGhlbiwgc28gdGhhdCB3ZSBjYW4gZGVmaW5lXG4gICAgICAgICAgICAgICAgICAgIC8vIGRyaXZlcnMgdGhhdCBoYXZlIHNpbXBsZSBfc3VwcG9ydCBtZXRob2RzXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIGEgYmxvY2tpbmcgbWFubmVyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKCdfc3VwcG9ydCcgaW4gZHJpdmVyT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcml2ZXJPYmplY3QuX3N1cHBvcnQgJiYgdHlwZW9mIGRyaXZlck9iamVjdC5fc3VwcG9ydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJpdmVyT2JqZWN0Ll9zdXBwb3J0KCkudGhlbihzZXREcml2ZXJTdXBwb3J0LCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJpdmVyU3VwcG9ydCghIWRyaXZlck9iamVjdC5fc3VwcG9ydCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXREcml2ZXJTdXBwb3J0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmRyaXZlciA9IGZ1bmN0aW9uIGRyaXZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyaXZlciB8fCBudWxsO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZ2V0RHJpdmVyID0gZnVuY3Rpb24gZ2V0RHJpdmVyKGRyaXZlck5hbWUsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBnZXREcml2ZXJQcm9taXNlID0gRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0gPyBQcm9taXNlJDEucmVzb2x2ZShEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkgOiBQcm9taXNlJDEucmVqZWN0KG5ldyBFcnJvcignRHJpdmVyIG5vdCBmb3VuZC4nKSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhnZXREcml2ZXJQcm9taXNlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBnZXREcml2ZXJQcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZ2V0U2VyaWFsaXplciA9IGZ1bmN0aW9uIGdldFNlcmlhbGl6ZXIoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZXJQcm9taXNlID0gUHJvbWlzZSQxLnJlc29sdmUobG9jYWxmb3JhZ2VTZXJpYWxpemVyKTtcbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhzZXJpYWxpemVyUHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplclByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IHNlbGYuX2RyaXZlclNldC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9yZWFkeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gc2VsZi5faW5pdERyaXZlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fcmVhZHk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5zZXREcml2ZXIgPSBmdW5jdGlvbiBzZXREcml2ZXIoZHJpdmVycywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghaXNBcnJheShkcml2ZXJzKSkge1xuICAgICAgICAgICAgZHJpdmVycyA9IFtkcml2ZXJzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdXBwb3J0ZWREcml2ZXJzID0gdGhpcy5fZ2V0U3VwcG9ydGVkRHJpdmVycyhkcml2ZXJzKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXREcml2ZXJUb0NvbmZpZygpIHtcbiAgICAgICAgICAgIHNlbGYuX2NvbmZpZy5kcml2ZXIgPSBzZWxmLmRyaXZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kU2VsZldpdGhEcml2ZXIoZHJpdmVyKSB7XG4gICAgICAgICAgICBzZWxmLl9leHRlbmQoZHJpdmVyKTtcbiAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG5cbiAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gc2VsZi5faW5pdFN0b3JhZ2Uoc2VsZi5fY29uZmlnKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9yZWFkeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXREcml2ZXIoc3VwcG9ydGVkRHJpdmVycykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudERyaXZlckluZGV4ID0gMDtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRyaXZlclByb21pc2VMb29wKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudERyaXZlckluZGV4IDwgc3VwcG9ydGVkRHJpdmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gc3VwcG9ydGVkRHJpdmVyc1tjdXJyZW50RHJpdmVySW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERyaXZlckluZGV4Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZWFkeSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmdldERyaXZlcihkcml2ZXJOYW1lKS50aGVuKGV4dGVuZFNlbGZXaXRoRHJpdmVyKVtcImNhdGNoXCJdKGRyaXZlclByb21pc2VMb29wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIHN0b3JhZ2UgbWV0aG9kIGZvdW5kLicpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9kcml2ZXJTZXQgPSBQcm9taXNlJDEucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RyaXZlclNldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJpdmVyUHJvbWlzZUxvb3AoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGVyZSBtaWdodCBiZSBhIGRyaXZlciBpbml0aWFsaXphdGlvbiBpbiBwcm9ncmVzc1xuICAgICAgICAvLyBzbyB3YWl0IGZvciBpdCB0byBmaW5pc2ggaW4gb3JkZXIgdG8gYXZvaWQgYSBwb3NzaWJsZVxuICAgICAgICAvLyByYWNlIGNvbmRpdGlvbiB0byBzZXQgX2RiSW5mb1xuICAgICAgICB2YXIgb2xkRHJpdmVyU2V0RG9uZSA9IHRoaXMuX2RyaXZlclNldCAhPT0gbnVsbCA/IHRoaXMuX2RyaXZlclNldFtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuICAgICAgICB9KSA6IFByb21pc2UkMS5yZXNvbHZlKCk7XG5cbiAgICAgICAgdGhpcy5fZHJpdmVyU2V0ID0gb2xkRHJpdmVyU2V0RG9uZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gc3VwcG9ydGVkRHJpdmVyc1swXTtcbiAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeSA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLmdldERyaXZlcihkcml2ZXJOYW1lKS50aGVuKGZ1bmN0aW9uIChkcml2ZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9kcml2ZXIgPSBkcml2ZXIuX2RyaXZlcjtcbiAgICAgICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgICAgIHNlbGYuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpO1xuICAgICAgICAgICAgICAgIHNlbGYuX2luaXREcml2ZXIgPSBpbml0RHJpdmVyKHN1cHBvcnRlZERyaXZlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIHN0b3JhZ2UgbWV0aG9kIGZvdW5kLicpO1xuICAgICAgICAgICAgc2VsZi5fZHJpdmVyU2V0ID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fZHJpdmVyU2V0O1xuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHRoaXMuX2RyaXZlclNldCwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJpdmVyU2V0O1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuc3VwcG9ydHMgPSBmdW5jdGlvbiBzdXBwb3J0cyhkcml2ZXJOYW1lKSB7XG4gICAgICAgIHJldHVybiAhIURyaXZlclN1cHBvcnRbZHJpdmVyTmFtZV07XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5fZXh0ZW5kID0gZnVuY3Rpb24gX2V4dGVuZChsaWJyYXJ5TWV0aG9kc0FuZFByb3BlcnRpZXMpIHtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIGxpYnJhcnlNZXRob2RzQW5kUHJvcGVydGllcyk7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5fZ2V0U3VwcG9ydGVkRHJpdmVycyA9IGZ1bmN0aW9uIF9nZXRTdXBwb3J0ZWREcml2ZXJzKGRyaXZlcnMpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRlZERyaXZlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRyaXZlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyc1tpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cHBvcnRzKGRyaXZlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkRHJpdmVycy5wdXNoKGRyaXZlck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWREcml2ZXJzO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSA9IGZ1bmN0aW9uIF93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKSB7XG4gICAgICAgIC8vIEFkZCBhIHN0dWIgZm9yIGVhY2ggZHJpdmVyIEFQSSBtZXRob2QgdGhhdCBkZWxheXMgdGhlIGNhbGwgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgZHJpdmVyIG1ldGhvZCB1bnRpbCBsb2NhbEZvcmFnZSBpcyByZWFkeS4gVGhlc2Ugc3R1YnNcbiAgICAgICAgLy8gd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgZHJpdmVyIG1ldGhvZHMgYXMgc29vbiBhcyB0aGUgZHJpdmVyIGlzXG4gICAgICAgIC8vIGxvYWRlZCwgc28gdGhlcmUgaXMgbm8gcGVyZm9ybWFuY2UgaW1wYWN0LlxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gTGlicmFyeU1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxXaGVuUmVhZHkodGhpcywgTGlicmFyeU1ldGhvZHNbaV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5jcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhbEZvcmFnZShvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExvY2FsRm9yYWdlO1xufSgpO1xuXG4vLyBUaGUgYWN0dWFsIGxvY2FsRm9yYWdlIG9iamVjdCB0aGF0IHdlIGV4cG9zZSBhcyBhIG1vZHVsZSBvciB2aWEgYVxuLy8gZ2xvYmFsLiBJdCdzIGV4dGVuZGVkIGJ5IHB1bGxpbmcgaW4gb25lIG9mIG91ciBvdGhlciBsaWJyYXJpZXMuXG5cblxudmFyIGxvY2FsZm9yYWdlX2pzID0gbmV3IExvY2FsRm9yYWdlKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYWxmb3JhZ2VfanM7XG5cbn0se1wiM1wiOjN9XX0se30sWzRdKSg0KVxufSk7XG4iLCIvKipcbiAqIEZpbmdlcnByaW50SlMgdjMuMy41IC0gQ29weXJpZ2h0IChjKSBGaW5nZXJwcmludEpTLCBJbmMsIDIwMjIgKGh0dHBzOi8vZmluZ2VycHJpbnQuY29tKVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApIGxpY2Vuc2UuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBjb250YWlucyBjb2RlIGZyb20gb3Blbi1zb3VyY2UgcHJvamVjdHM6XG4gKiBNdXJtdXJIYXNoMyBieSBLYXJhbiBMeW9ucyAoaHR0cHM6Ly9naXRodWIuY29tL2thcmFubHlvbnMvbXVybXVySGFzaDMuanMpXG4gKi9cblxuaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciwgX19hc3NpZ24sIF9fc3ByZWFkQXJyYXlzIH0gZnJvbSAndHNsaWInO1xuXG52YXIgdmVyc2lvbiA9IFwiMy4zLjVcIjtcblxuZnVuY3Rpb24gd2FpdChkdXJhdGlvbk1zLCByZXNvbHZlV2l0aCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBkdXJhdGlvbk1zLCByZXNvbHZlV2l0aCk7IH0pO1xufVxuZnVuY3Rpb24gcmVxdWVzdElkbGVDYWxsYmFja0lmQXZhaWxhYmxlKGZhbGxiYWNrVGltZW91dCwgZGVhZGxpbmVUaW1lb3V0KSB7XG4gICAgaWYgKGRlYWRsaW5lVGltZW91dCA9PT0gdm9pZCAwKSB7IGRlYWRsaW5lVGltZW91dCA9IEluZmluaXR5OyB9XG4gICAgdmFyIHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaztcbiAgICBpZiAocmVxdWVzdElkbGVDYWxsYmFjaykge1xuICAgICAgICAvLyBUaGUgZnVuY3Rpb24gYHJlcXVlc3RJZGxlQ2FsbGJhY2tgIGxvc2VzIHRoZSBiaW5kaW5nIHRvIGB3aW5kb3dgIGhlcmUuXG4gICAgICAgIC8vIGBnbG9iYWxUaGlzYCBpc24ndCBhbHdheXMgZXF1YWwgYHdpbmRvd2AgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmluZ2VycHJpbnRqcy9maW5nZXJwcmludGpzL2lzc3Vlcy82ODMpLlxuICAgICAgICAvLyBUaGVyZWZvcmUsIGFuIGVycm9yIGNhbiBvY2N1ci4gYGNhbGwod2luZG93LGAgcHJldmVudHMgdGhlIGVycm9yLlxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHJlcXVlc3RJZGxlQ2FsbGJhY2suY2FsbCh3aW5kb3csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoKTsgfSwgeyB0aW1lb3V0OiBkZWFkbGluZVRpbWVvdXQgfSk7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdhaXQoTWF0aC5taW4oZmFsbGJhY2tUaW1lb3V0LCBkZWFkbGluZVRpbWVvdXQpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG4vKipcbiAqIENhbGxzIGEgbWF5YmUgYXN5bmNocm9ub3VzIGZ1bmN0aW9uIHdpdGhvdXQgY3JlYXRpbmcgbWljcm90YXNrcyB3aGVuIHRoZSBmdW5jdGlvbiBpcyBzeW5jaHJvbm91cy5cbiAqIENhdGNoZXMgZXJyb3JzIGluIGJvdGggY2FzZXMuXG4gKlxuICogSWYganVzdCB5b3UgcnVuIGEgY29kZSBsaWtlIHRoaXM6XG4gKiBgYGBcbiAqIGNvbnNvbGUudGltZSgnQWN0aW9uIGR1cmF0aW9uJylcbiAqIGF3YWl0IGFjdGlvbigpXG4gKiBjb25zb2xlLnRpbWVFbmQoJ0FjdGlvbiBkdXJhdGlvbicpXG4gKiBgYGBcbiAqIFRoZSBzeW5jaHJvbm91cyBmdW5jdGlvbiB0aW1lIGNhbiBiZSBtZWFzdXJlZCBpbmNvcnJlY3RseSBiZWNhdXNlIGFub3RoZXIgbWljcm90YXNrIG1heSBydW4gYmVmb3JlIHRoZSBgYXdhaXRgXG4gKiByZXR1cm5zIHRoZSBjb250cm9sIGJhY2sgdG8gdGhlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIGF3YWl0SWZBc3luYyhhY3Rpb24sIGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHJldHVybmVkVmFsdWUgPSBhY3Rpb24oKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShyZXR1cm5lZFZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuZWRWYWx1ZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIGNhbGxiYWNrKHRydWUsIHJlc3VsdCk7IH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gY2FsbGJhY2soZmFsc2UsIGVycm9yKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayh0cnVlLCByZXR1cm5lZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZmFsc2UsIGVycm9yKTtcbiAgICB9XG59XG4vKipcbiAqIElmIHlvdSBydW4gbWFueSBzeW5jaHJvbm91cyB0YXNrcyB3aXRob3V0IHVzaW5nIHRoaXMgZnVuY3Rpb24sIHRoZSBKUyBtYWluIGxvb3Agd2lsbCBiZSBidXN5IGFuZCBhc3luY2hyb25vdXMgdGFza3NcbiAqIChlLmcuIGNvbXBsZXRpbmcgYSBuZXR3b3JrIHJlcXVlc3QsIHJlbmRlcmluZyB0aGUgcGFnZSkgd29uJ3QgYmUgYWJsZSB0byBoYXBwZW4uXG4gKiBUaGlzIGZ1bmN0aW9uIGFsbG93cyBydW5uaW5nIG1hbnkgc3luY2hyb25vdXMgdGFza3Mgc3VjaCB3YXkgdGhhdCBhc3luY2hyb25vdXMgdGFza3MgY2FuIHJ1biB0b28gaW4gYmFja2dyb3VuZC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaFdpdGhCcmVha3MoaXRlbXMsIGNhbGxiYWNrLCBsb29wUmVsZWFzZUludGVydmFsKSB7XG4gICAgaWYgKGxvb3BSZWxlYXNlSW50ZXJ2YWwgPT09IHZvaWQgMCkgeyBsb29wUmVsZWFzZUludGVydmFsID0gMTY7IH1cbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXN0TG9vcFJlbGVhc2VUaW1lLCBpLCBub3c7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGxhc3RMb29wUmVsZWFzZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA8IGl0ZW1zLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhpdGVtc1tpXSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKG5vdyA+PSBsYXN0TG9vcFJlbGVhc2VUaW1lICsgbG9vcFJlbGVhc2VJbnRlcnZhbCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBsYXN0TG9vcFJlbGVhc2VUaW1lID0gbm93O1xuICAgICAgICAgICAgICAgICAgICAvLyBBbGxvd3MgYXN5bmNocm9ub3VzIGFjdGlvbnMgYW5kIG1pY3JvdGFza3MgdG8gaGFwcGVuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdhaXQoMCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxsb3dzIGFzeW5jaHJvbm91cyBhY3Rpb25zIGFuZCBtaWNyb3Rhc2tzIHRvIGhhcHBlblxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBNYWtlcyB0aGUgZ2l2ZW4gcHJvbWlzZSBuZXZlciBlbWl0IGFuIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbiBjb25zb2xlIHdhcm5pbmcuXG4gKiBUaGUgcHJvbWlzZSB3aWxsIHN0aWxsIHBhc3MgZXJyb3JzIHRvIHRoZSBuZXh0IHByb21pc2VzLlxuICpcbiAqIE90aGVyd2lzZSwgcHJvbWlzZSBlbWl0cyBhIGNvbnNvbGUgd2FybmluZyB1bmxlc3MgaXQgaGFzIGEgYGNhdGNoYCBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gc3VwcHJlc3NVbmhhbmRsZWRSZWplY3Rpb25XYXJuaW5nKHByb21pc2UpIHtcbiAgICBwcm9taXNlLnRoZW4odW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0pO1xufVxuXG4vKlxuICogVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20va2FyYW5seW9ucy9tdXJtdXJIYXNoMy5qcy9ibG9iL2EzM2QwNzIzMTI3ZTJlNTQxNTA1NmM0NTVmOGFlZDI0NTFhY2UyMDgvbXVybXVySGFzaDMuanNcbiAqL1xuLy9cbi8vIEdpdmVuIHR3byA2NGJpdCBpbnRzIChhcyBhbiBhcnJheSBvZiB0d28gMzJiaXQgaW50cykgcmV0dXJucyB0aGUgdHdvXG4vLyBhZGRlZCB0b2dldGhlciBhcyBhIDY0Yml0IGludCAoYXMgYW4gYXJyYXkgb2YgdHdvIDMyYml0IGludHMpLlxuLy9cbmZ1bmN0aW9uIHg2NEFkZChtLCBuKSB7XG4gICAgbSA9IFttWzBdID4+PiAxNiwgbVswXSAmIDB4ZmZmZiwgbVsxXSA+Pj4gMTYsIG1bMV0gJiAweGZmZmZdO1xuICAgIG4gPSBbblswXSA+Pj4gMTYsIG5bMF0gJiAweGZmZmYsIG5bMV0gPj4+IDE2LCBuWzFdICYgMHhmZmZmXTtcbiAgICB2YXIgbyA9IFswLCAwLCAwLCAwXTtcbiAgICBvWzNdICs9IG1bM10gKyBuWzNdO1xuICAgIG9bMl0gKz0gb1szXSA+Pj4gMTY7XG4gICAgb1szXSAmPSAweGZmZmY7XG4gICAgb1syXSArPSBtWzJdICsgblsyXTtcbiAgICBvWzFdICs9IG9bMl0gPj4+IDE2O1xuICAgIG9bMl0gJj0gMHhmZmZmO1xuICAgIG9bMV0gKz0gbVsxXSArIG5bMV07XG4gICAgb1swXSArPSBvWzFdID4+PiAxNjtcbiAgICBvWzFdICY9IDB4ZmZmZjtcbiAgICBvWzBdICs9IG1bMF0gKyBuWzBdO1xuICAgIG9bMF0gJj0gMHhmZmZmO1xuICAgIHJldHVybiBbKG9bMF0gPDwgMTYpIHwgb1sxXSwgKG9bMl0gPDwgMTYpIHwgb1szXV07XG59XG4vL1xuLy8gR2l2ZW4gdHdvIDY0Yml0IGludHMgKGFzIGFuIGFycmF5IG9mIHR3byAzMmJpdCBpbnRzKSByZXR1cm5zIHRoZSB0d29cbi8vIG11bHRpcGxpZWQgdG9nZXRoZXIgYXMgYSA2NGJpdCBpbnQgKGFzIGFuIGFycmF5IG9mIHR3byAzMmJpdCBpbnRzKS5cbi8vXG5mdW5jdGlvbiB4NjRNdWx0aXBseShtLCBuKSB7XG4gICAgbSA9IFttWzBdID4+PiAxNiwgbVswXSAmIDB4ZmZmZiwgbVsxXSA+Pj4gMTYsIG1bMV0gJiAweGZmZmZdO1xuICAgIG4gPSBbblswXSA+Pj4gMTYsIG5bMF0gJiAweGZmZmYsIG5bMV0gPj4+IDE2LCBuWzFdICYgMHhmZmZmXTtcbiAgICB2YXIgbyA9IFswLCAwLCAwLCAwXTtcbiAgICBvWzNdICs9IG1bM10gKiBuWzNdO1xuICAgIG9bMl0gKz0gb1szXSA+Pj4gMTY7XG4gICAgb1szXSAmPSAweGZmZmY7XG4gICAgb1syXSArPSBtWzJdICogblszXTtcbiAgICBvWzFdICs9IG9bMl0gPj4+IDE2O1xuICAgIG9bMl0gJj0gMHhmZmZmO1xuICAgIG9bMl0gKz0gbVszXSAqIG5bMl07XG4gICAgb1sxXSArPSBvWzJdID4+PiAxNjtcbiAgICBvWzJdICY9IDB4ZmZmZjtcbiAgICBvWzFdICs9IG1bMV0gKiBuWzNdO1xuICAgIG9bMF0gKz0gb1sxXSA+Pj4gMTY7XG4gICAgb1sxXSAmPSAweGZmZmY7XG4gICAgb1sxXSArPSBtWzJdICogblsyXTtcbiAgICBvWzBdICs9IG9bMV0gPj4+IDE2O1xuICAgIG9bMV0gJj0gMHhmZmZmO1xuICAgIG9bMV0gKz0gbVszXSAqIG5bMV07XG4gICAgb1swXSArPSBvWzFdID4+PiAxNjtcbiAgICBvWzFdICY9IDB4ZmZmZjtcbiAgICBvWzBdICs9IG1bMF0gKiBuWzNdICsgbVsxXSAqIG5bMl0gKyBtWzJdICogblsxXSArIG1bM10gKiBuWzBdO1xuICAgIG9bMF0gJj0gMHhmZmZmO1xuICAgIHJldHVybiBbKG9bMF0gPDwgMTYpIHwgb1sxXSwgKG9bMl0gPDwgMTYpIHwgb1szXV07XG59XG4vL1xuLy8gR2l2ZW4gYSA2NGJpdCBpbnQgKGFzIGFuIGFycmF5IG9mIHR3byAzMmJpdCBpbnRzKSBhbmQgYW4gaW50XG4vLyByZXByZXNlbnRpbmcgYSBudW1iZXIgb2YgYml0IHBvc2l0aW9ucywgcmV0dXJucyB0aGUgNjRiaXQgaW50IChhcyBhblxuLy8gYXJyYXkgb2YgdHdvIDMyYml0IGludHMpIHJvdGF0ZWQgbGVmdCBieSB0aGF0IG51bWJlciBvZiBwb3NpdGlvbnMuXG4vL1xuZnVuY3Rpb24geDY0Um90bChtLCBuKSB7XG4gICAgbiAlPSA2NDtcbiAgICBpZiAobiA9PT0gMzIpIHtcbiAgICAgICAgcmV0dXJuIFttWzFdLCBtWzBdXTtcbiAgICB9XG4gICAgZWxzZSBpZiAobiA8IDMyKSB7XG4gICAgICAgIHJldHVybiBbKG1bMF0gPDwgbikgfCAobVsxXSA+Pj4gKDMyIC0gbikpLCAobVsxXSA8PCBuKSB8IChtWzBdID4+PiAoMzIgLSBuKSldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbiAtPSAzMjtcbiAgICAgICAgcmV0dXJuIFsobVsxXSA8PCBuKSB8IChtWzBdID4+PiAoMzIgLSBuKSksIChtWzBdIDw8IG4pIHwgKG1bMV0gPj4+ICgzMiAtIG4pKV07XG4gICAgfVxufVxuLy9cbi8vIEdpdmVuIGEgNjRiaXQgaW50IChhcyBhbiBhcnJheSBvZiB0d28gMzJiaXQgaW50cykgYW5kIGFuIGludFxuLy8gcmVwcmVzZW50aW5nIGEgbnVtYmVyIG9mIGJpdCBwb3NpdGlvbnMsIHJldHVybnMgdGhlIDY0Yml0IGludCAoYXMgYW5cbi8vIGFycmF5IG9mIHR3byAzMmJpdCBpbnRzKSBzaGlmdGVkIGxlZnQgYnkgdGhhdCBudW1iZXIgb2YgcG9zaXRpb25zLlxuLy9cbmZ1bmN0aW9uIHg2NExlZnRTaGlmdChtLCBuKSB7XG4gICAgbiAlPSA2NDtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG4gICAgZWxzZSBpZiAobiA8IDMyKSB7XG4gICAgICAgIHJldHVybiBbKG1bMF0gPDwgbikgfCAobVsxXSA+Pj4gKDMyIC0gbikpLCBtWzFdIDw8IG5dO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFttWzFdIDw8IChuIC0gMzIpLCAwXTtcbiAgICB9XG59XG4vL1xuLy8gR2l2ZW4gdHdvIDY0Yml0IGludHMgKGFzIGFuIGFycmF5IG9mIHR3byAzMmJpdCBpbnRzKSByZXR1cm5zIHRoZSB0d29cbi8vIHhvcmVkIHRvZ2V0aGVyIGFzIGEgNjRiaXQgaW50IChhcyBhbiBhcnJheSBvZiB0d28gMzJiaXQgaW50cykuXG4vL1xuZnVuY3Rpb24geDY0WG9yKG0sIG4pIHtcbiAgICByZXR1cm4gW21bMF0gXiBuWzBdLCBtWzFdIF4gblsxXV07XG59XG4vL1xuLy8gR2l2ZW4gYSBibG9jaywgcmV0dXJucyBtdXJtdXJIYXNoMydzIGZpbmFsIHg2NCBtaXggb2YgdGhhdCBibG9jay5cbi8vIChgWzAsIGhbMF0gPj4+IDFdYCBpcyBhIDMzIGJpdCB1bnNpZ25lZCByaWdodCBzaGlmdC4gVGhpcyBpcyB0aGVcbi8vIG9ubHkgcGxhY2Ugd2hlcmUgd2UgbmVlZCB0byByaWdodCBzaGlmdCA2NGJpdCBpbnRzLilcbi8vXG5mdW5jdGlvbiB4NjRGbWl4KGgpIHtcbiAgICBoID0geDY0WG9yKGgsIFswLCBoWzBdID4+PiAxXSk7XG4gICAgaCA9IHg2NE11bHRpcGx5KGgsIFsweGZmNTFhZmQ3LCAweGVkNTU4Y2NkXSk7XG4gICAgaCA9IHg2NFhvcihoLCBbMCwgaFswXSA+Pj4gMV0pO1xuICAgIGggPSB4NjRNdWx0aXBseShoLCBbMHhjNGNlYjlmZSwgMHgxYTg1ZWM1M10pO1xuICAgIGggPSB4NjRYb3IoaCwgWzAsIGhbMF0gPj4+IDFdKTtcbiAgICByZXR1cm4gaDtcbn1cbi8vXG4vLyBHaXZlbiBhIHN0cmluZyBhbmQgYW4gb3B0aW9uYWwgc2VlZCBhcyBhbiBpbnQsIHJldHVybnMgYSAxMjggYml0XG4vLyBoYXNoIHVzaW5nIHRoZSB4NjQgZmxhdm9yIG9mIE11cm11ckhhc2gzLCBhcyBhbiB1bnNpZ25lZCBoZXguXG4vL1xuZnVuY3Rpb24geDY0aGFzaDEyOChrZXksIHNlZWQpIHtcbiAgICBrZXkgPSBrZXkgfHwgJyc7XG4gICAgc2VlZCA9IHNlZWQgfHwgMDtcbiAgICB2YXIgcmVtYWluZGVyID0ga2V5Lmxlbmd0aCAlIDE2O1xuICAgIHZhciBieXRlcyA9IGtleS5sZW5ndGggLSByZW1haW5kZXI7XG4gICAgdmFyIGgxID0gWzAsIHNlZWRdO1xuICAgIHZhciBoMiA9IFswLCBzZWVkXTtcbiAgICB2YXIgazEgPSBbMCwgMF07XG4gICAgdmFyIGsyID0gWzAsIDBdO1xuICAgIHZhciBjMSA9IFsweDg3YzM3YjkxLCAweDExNDI1M2Q1XTtcbiAgICB2YXIgYzIgPSBbMHg0Y2Y1YWQ0MywgMHgyNzQ1OTM3Zl07XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGJ5dGVzOyBpID0gaSArIDE2KSB7XG4gICAgICAgIGsxID0gW1xuICAgICAgICAgICAgKGtleS5jaGFyQ29kZUF0KGkgKyA0KSAmIDB4ZmYpIHxcbiAgICAgICAgICAgICAgICAoKGtleS5jaGFyQ29kZUF0KGkgKyA1KSAmIDB4ZmYpIDw8IDgpIHxcbiAgICAgICAgICAgICAgICAoKGtleS5jaGFyQ29kZUF0KGkgKyA2KSAmIDB4ZmYpIDw8IDE2KSB8XG4gICAgICAgICAgICAgICAgKChrZXkuY2hhckNvZGVBdChpICsgNykgJiAweGZmKSA8PCAyNCksXG4gICAgICAgICAgICAoa2V5LmNoYXJDb2RlQXQoaSkgJiAweGZmKSB8XG4gICAgICAgICAgICAgICAgKChrZXkuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4KSB8XG4gICAgICAgICAgICAgICAgKChrZXkuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICgoa2V5LmNoYXJDb2RlQXQoaSArIDMpICYgMHhmZikgPDwgMjQpLFxuICAgICAgICBdO1xuICAgICAgICBrMiA9IFtcbiAgICAgICAgICAgIChrZXkuY2hhckNvZGVBdChpICsgMTIpICYgMHhmZikgfFxuICAgICAgICAgICAgICAgICgoa2V5LmNoYXJDb2RlQXQoaSArIDEzKSAmIDB4ZmYpIDw8IDgpIHxcbiAgICAgICAgICAgICAgICAoKGtleS5jaGFyQ29kZUF0KGkgKyAxNCkgJiAweGZmKSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICgoa2V5LmNoYXJDb2RlQXQoaSArIDE1KSAmIDB4ZmYpIDw8IDI0KSxcbiAgICAgICAgICAgIChrZXkuY2hhckNvZGVBdChpICsgOCkgJiAweGZmKSB8XG4gICAgICAgICAgICAgICAgKChrZXkuY2hhckNvZGVBdChpICsgOSkgJiAweGZmKSA8PCA4KSB8XG4gICAgICAgICAgICAgICAgKChrZXkuY2hhckNvZGVBdChpICsgMTApICYgMHhmZikgPDwgMTYpIHxcbiAgICAgICAgICAgICAgICAoKGtleS5jaGFyQ29kZUF0KGkgKyAxMSkgJiAweGZmKSA8PCAyNCksXG4gICAgICAgIF07XG4gICAgICAgIGsxID0geDY0TXVsdGlwbHkoazEsIGMxKTtcbiAgICAgICAgazEgPSB4NjRSb3RsKGsxLCAzMSk7XG4gICAgICAgIGsxID0geDY0TXVsdGlwbHkoazEsIGMyKTtcbiAgICAgICAgaDEgPSB4NjRYb3IoaDEsIGsxKTtcbiAgICAgICAgaDEgPSB4NjRSb3RsKGgxLCAyNyk7XG4gICAgICAgIGgxID0geDY0QWRkKGgxLCBoMik7XG4gICAgICAgIGgxID0geDY0QWRkKHg2NE11bHRpcGx5KGgxLCBbMCwgNV0pLCBbMCwgMHg1MmRjZTcyOV0pO1xuICAgICAgICBrMiA9IHg2NE11bHRpcGx5KGsyLCBjMik7XG4gICAgICAgIGsyID0geDY0Um90bChrMiwgMzMpO1xuICAgICAgICBrMiA9IHg2NE11bHRpcGx5KGsyLCBjMSk7XG4gICAgICAgIGgyID0geDY0WG9yKGgyLCBrMik7XG4gICAgICAgIGgyID0geDY0Um90bChoMiwgMzEpO1xuICAgICAgICBoMiA9IHg2NEFkZChoMiwgaDEpO1xuICAgICAgICBoMiA9IHg2NEFkZCh4NjRNdWx0aXBseShoMiwgWzAsIDVdKSwgWzAsIDB4Mzg0OTVhYjVdKTtcbiAgICB9XG4gICAgazEgPSBbMCwgMF07XG4gICAgazIgPSBbMCwgMF07XG4gICAgc3dpdGNoIChyZW1haW5kZXIpIHtcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgIGsyID0geDY0WG9yKGsyLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyAxNCldLCA0OCkpO1xuICAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgazIgPSB4NjRYb3IoazIsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDEzKV0sIDQwKSk7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBrMiA9IHg2NFhvcihrMiwgeDY0TGVmdFNoaWZ0KFswLCBrZXkuY2hhckNvZGVBdChpICsgMTIpXSwgMzIpKTtcbiAgICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIGsyID0geDY0WG9yKGsyLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyAxMSldLCAyNCkpO1xuICAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgazIgPSB4NjRYb3IoazIsIHg2NExlZnRTaGlmdChbMCwga2V5LmNoYXJDb2RlQXQoaSArIDEwKV0sIDE2KSk7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICBrMiA9IHg2NFhvcihrMiwgeDY0TGVmdFNoaWZ0KFswLCBrZXkuY2hhckNvZGVBdChpICsgOSldLCA4KSk7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGsyID0geDY0WG9yKGsyLCBbMCwga2V5LmNoYXJDb2RlQXQoaSArIDgpXSk7XG4gICAgICAgICAgICBrMiA9IHg2NE11bHRpcGx5KGsyLCBjMik7XG4gICAgICAgICAgICBrMiA9IHg2NFJvdGwoazIsIDMzKTtcbiAgICAgICAgICAgIGsyID0geDY0TXVsdGlwbHkoazIsIGMxKTtcbiAgICAgICAgICAgIGgyID0geDY0WG9yKGgyLCBrMik7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGsxID0geDY0WG9yKGsxLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyA3KV0sIDU2KSk7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIGsxID0geDY0WG9yKGsxLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyA2KV0sIDQ4KSk7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGsxID0geDY0WG9yKGsxLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyA1KV0sIDQwKSk7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGsxID0geDY0WG9yKGsxLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyA0KV0sIDMyKSk7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGsxID0geDY0WG9yKGsxLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyAzKV0sIDI0KSk7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGsxID0geDY0WG9yKGsxLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyAyKV0sIDE2KSk7XG4gICAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGsxID0geDY0WG9yKGsxLCB4NjRMZWZ0U2hpZnQoWzAsIGtleS5jaGFyQ29kZUF0KGkgKyAxKV0sIDgpKTtcbiAgICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgazEgPSB4NjRYb3IoazEsIFswLCBrZXkuY2hhckNvZGVBdChpKV0pO1xuICAgICAgICAgICAgazEgPSB4NjRNdWx0aXBseShrMSwgYzEpO1xuICAgICAgICAgICAgazEgPSB4NjRSb3RsKGsxLCAzMSk7XG4gICAgICAgICAgICBrMSA9IHg2NE11bHRpcGx5KGsxLCBjMik7XG4gICAgICAgICAgICBoMSA9IHg2NFhvcihoMSwgazEpO1xuICAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgIH1cbiAgICBoMSA9IHg2NFhvcihoMSwgWzAsIGtleS5sZW5ndGhdKTtcbiAgICBoMiA9IHg2NFhvcihoMiwgWzAsIGtleS5sZW5ndGhdKTtcbiAgICBoMSA9IHg2NEFkZChoMSwgaDIpO1xuICAgIGgyID0geDY0QWRkKGgyLCBoMSk7XG4gICAgaDEgPSB4NjRGbWl4KGgxKTtcbiAgICBoMiA9IHg2NEZtaXgoaDIpO1xuICAgIGgxID0geDY0QWRkKGgxLCBoMik7XG4gICAgaDIgPSB4NjRBZGQoaDIsIGgxKTtcbiAgICByZXR1cm4gKCgnMDAwMDAwMDAnICsgKGgxWzBdID4+PiAwKS50b1N0cmluZygxNikpLnNsaWNlKC04KSArXG4gICAgICAgICgnMDAwMDAwMDAnICsgKGgxWzFdID4+PiAwKS50b1N0cmluZygxNikpLnNsaWNlKC04KSArXG4gICAgICAgICgnMDAwMDAwMDAnICsgKGgyWzBdID4+PiAwKS50b1N0cmluZygxNikpLnNsaWNlKC04KSArXG4gICAgICAgICgnMDAwMDAwMDAnICsgKGgyWzFdID4+PiAwKS50b1N0cmluZygxNikpLnNsaWNlKC04KSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gZXJyb3Igb2JqZWN0IHRvIGEgcGxhaW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgSlNPTi5zdHJpbmdpZnlgLlxuICogSWYgeW91IGp1c3QgcnVuIGBKU09OLnN0cmluZ2lmeShlcnJvcilgLCB5b3UnbGwgZ2V0IGAne30nYC5cbiAqL1xuZnVuY3Rpb24gZXJyb3JUb09iamVjdChlcnJvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gX19hc3NpZ24oeyBuYW1lOiBlcnJvci5uYW1lLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLCBzdGFjazogKF9hID0gZXJyb3Iuc3RhY2spID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpdCgnXFxuJykgfSwgZXJyb3IpO1xufVxuXG4vKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGggcHVyZSBkYXRhIG9ubHkgKG5vIGJyb3dzZXIgZmVhdHVyZXMsIERPTSwgc2lkZSBlZmZlY3RzLCBldGMpLlxuICovXG4vKipcbiAqIERvZXMgdGhlIHNhbWUgYXMgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzIGJ1dCBoYXMgYmV0dGVyIHR5cGluZ1xuICovXG5mdW5jdGlvbiBpbmNsdWRlcyhoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYXlzdGFjay5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgaWYgKGhheXN0YWNrW2ldID09PSBuZWVkbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogTGlrZSBgIWluY2x1ZGVzKClgIGJ1dCB3aXRoIHByb3BlciB0eXBpbmdcbiAqL1xuZnVuY3Rpb24gZXhjbHVkZXMoaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgIHJldHVybiAhaW5jbHVkZXMoaGF5c3RhY2ssIG5lZWRsZSk7XG59XG4vKipcbiAqIEJlIGNhcmVmdWwsIE5hTiBjYW4gcmV0dXJuXG4gKi9cbmZ1bmN0aW9uIHRvSW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcbn1cbi8qKlxuICogQmUgY2FyZWZ1bCwgTmFOIGNhbiByZXR1cm5cbiAqL1xuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VOYU4odmFsdWUsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpID8gcmVwbGFjZW1lbnQgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvdW50VHJ1dGh5KHZhbHVlcykge1xuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChzdW0sIHZhbHVlKSB7IHJldHVybiBzdW0gKyAodmFsdWUgPyAxIDogMCk7IH0sIDApO1xufVxuZnVuY3Rpb24gcm91bmQodmFsdWUsIGJhc2UpIHtcbiAgICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7IGJhc2UgPSAxOyB9XG4gICAgaWYgKE1hdGguYWJzKGJhc2UpID49IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyBiYXNlKSAqIGJhc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBTb21ldGltZXMgd2hlbiBhIG51bWJlciBpcyBtdWx0aXBsaWVkIGJ5IGEgc21hbGwgbnVtYmVyLCBwcmVjaXNpb24gaXMgbG9zdCxcbiAgICAgICAgLy8gZm9yIGV4YW1wbGUgMTIzNCAqIDAuMDAwMSA9PT0gMC4xMjM0MDAwMDAwMDAwMDAwMSwgYW5kIGl0J3MgbW9yZSBwcmVjaXNlIGRpdmlkZTogMTIzNCAvICgxIC8gMC4wMDAxKSA9PT0gMC4xMjM0LlxuICAgICAgICB2YXIgY291bnRlckJhc2UgPSAxIC8gYmFzZTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBjb3VudGVyQmFzZSkgLyBjb3VudGVyQmFzZTtcbiAgICB9XG59XG4vKipcbiAqIFBhcnNlcyBhIENTUyBzZWxlY3RvciBpbnRvIHRhZyBuYW1lIHdpdGggSFRNTCBhdHRyaWJ1dGVzLlxuICogT25seSBzaW5nbGUgZWxlbWVudCBzZWxlY3RvciBhcmUgc3VwcG9ydGVkICh3aXRob3V0IG9wZXJhdG9ycyBsaWtlIHNwYWNlLCArLCA+LCBldGMpLlxuICpcbiAqIE11bHRpcGxlIHZhbHVlcyBjYW4gYmUgcmV0dXJuZWQgZm9yIGVhY2ggYXR0cmlidXRlLiBZb3UgZGVjaWRlIGhvdyB0byBoYW5kbGUgdGhlbS5cbiAqL1xuZnVuY3Rpb24gcGFyc2VTaW1wbGVDc3NTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIHZhciBfYSwgX2I7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBzeW50YXggJ1wiICsgc2VsZWN0b3IgKyBcIidcIjtcbiAgICB2YXIgdGFnTWF0Y2ggPSAvXlxccyooW2Etei1dKikoLiopJC9pLmV4ZWMoc2VsZWN0b3IpO1xuICAgIHZhciB0YWcgPSB0YWdNYXRjaFsxXSB8fCB1bmRlZmluZWQ7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7fTtcbiAgICB2YXIgcGFydHNSZWdleCA9IC8oWy46I11bXFx3LV0rfFxcWy4rP1xcXSkvZ2k7XG4gICAgdmFyIGFkZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBhdHRyaWJ1dGVzW25hbWVdID0gYXR0cmlidXRlc1tuYW1lXSB8fCBbXTtcbiAgICAgICAgYXR0cmlidXRlc1tuYW1lXS5wdXNoKHZhbHVlKTtcbiAgICB9O1xuICAgIGZvciAoOzspIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcGFydHNSZWdleC5leGVjKHRhZ01hdGNoWzJdKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcnQgPSBtYXRjaFswXTtcbiAgICAgICAgc3dpdGNoIChwYXJ0WzBdKSB7XG4gICAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgICAgICBhZGRBdHRyaWJ1dGUoJ2NsYXNzJywgcGFydC5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICAgICAgICBhZGRBdHRyaWJ1dGUoJ2lkJywgcGFydC5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdbJzoge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVNYXRjaCA9IC9eXFxbKFtcXHctXSspKFt+fF4kKl0/PShcIiguKj8pXCJ8KFtcXHctXSspKSk/KFxccytbaXNdKT9cXF0kLy5leGVjKHBhcnQpO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRBdHRyaWJ1dGUoYXR0cmlidXRlTWF0Y2hbMV0sIChfYiA9IChfYSA9IGF0dHJpYnV0ZU1hdGNoWzRdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBhdHRyaWJ1dGVNYXRjaFs1XSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3RhZywgYXR0cmlidXRlc107XG59XG5cbmZ1bmN0aW9uIGVuc3VyZUVycm9yV2l0aE1lc3NhZ2UoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnbWVzc2FnZScgaW4gZXJyb3IgPyBlcnJvciA6IHsgbWVzc2FnZTogZXJyb3IgfTtcbn1cbmZ1bmN0aW9uIGlzRmluYWxSZXN1bHRMb2FkZWQobG9hZFJlc3VsdCkge1xuICAgIHJldHVybiB0eXBlb2YgbG9hZFJlc3VsdCAhPT0gJ2Z1bmN0aW9uJztcbn1cbi8qKlxuICogTG9hZHMgdGhlIGdpdmVuIGVudHJvcHkgc291cmNlLiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBnZXRzIGFuIGVudHJvcHkgY29tcG9uZW50IGZyb20gdGhlIHNvdXJjZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIHJldHVybmVkIHN5bmNocm9ub3VzbHkgdG8gcHJldmVudCBgbG9hZFNvdXJjZXNgIGZyb21cbiAqIHdhaXRpbmcgZm9yIG9uZSBzb3VyY2UgdG8gbG9hZCBiZWZvcmUgZ2V0dGluZyB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBvdGhlciBzb3VyY2VzLlxuICovXG5mdW5jdGlvbiBsb2FkU291cmNlKHNvdXJjZSwgc291cmNlT3B0aW9ucykge1xuICAgIHZhciBzb3VyY2VMb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlTG9hZCkge1xuICAgICAgICB2YXIgbG9hZFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIC8vIGBhd2FpdElmQXN5bmNgIGlzIHVzZWQgaW5zdGVhZCBvZiBqdXN0IGBhd2FpdGAgaW4gb3JkZXIgdG8gbWVhc3VyZSB0aGUgZHVyYXRpb24gb2Ygc3luY2hyb25vdXMgc291cmNlc1xuICAgICAgICAvLyBjb3JyZWN0bHkgKG90aGVyIG1pY3JvdGFza3Mgd29uJ3QgYWZmZWN0IHRoZSBkdXJhdGlvbikuXG4gICAgICAgIGF3YWl0SWZBc3luYyhzb3VyY2UuYmluZChudWxsLCBzb3VyY2VPcHRpb25zKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxvYWRBcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGxvYWRBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbG9hZER1cmF0aW9uID0gRGF0ZS5ub3coKSAtIGxvYWRTdGFydFRpbWU7XG4gICAgICAgICAgICAvLyBTb3VyY2UgbG9hZGluZyBmYWlsZWRcbiAgICAgICAgICAgIGlmICghbG9hZEFyZ3NbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZUxvYWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgZXJyb3I6IGVuc3VyZUVycm9yV2l0aE1lc3NhZ2UobG9hZEFyZ3NbMV0pLCBkdXJhdGlvbjogbG9hZER1cmF0aW9uIH0pOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsb2FkUmVzdWx0ID0gbG9hZEFyZ3NbMV07XG4gICAgICAgICAgICAvLyBTb3VyY2UgbG9hZGVkIHdpdGggdGhlIGZpbmFsIHJlc3VsdFxuICAgICAgICAgICAgaWYgKGlzRmluYWxSZXN1bHRMb2FkZWQobG9hZFJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZUxvYWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdmFsdWU6IGxvYWRSZXN1bHQsIGR1cmF0aW9uOiBsb2FkRHVyYXRpb24gfSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU291cmNlIGxvYWRlZCB3aXRoIFwiZ2V0XCIgc3RhZ2VcbiAgICAgICAgICAgIHJlc29sdmVMb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmVHZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdldFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0SWZBc3luYyhsb2FkUmVzdWx0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2V0QXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBsb2FkRHVyYXRpb24gKyBEYXRlLm5vdygpIC0gZ2V0U3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU291cmNlIGdldHRpbmcgZmFpbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdldEFyZ3NbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZUdldCh7IGVycm9yOiBlbnN1cmVFcnJvcldpdGhNZXNzYWdlKGdldEFyZ3NbMV0pLCBkdXJhdGlvbjogZHVyYXRpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTb3VyY2UgZ2V0dGluZyBzdWNjZWVkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVHZXQoeyB2YWx1ZTogZ2V0QXJnc1sxXSwgZHVyYXRpb246IGR1cmF0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBzdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbldhcm5pbmcoc291cmNlTG9hZFByb21pc2UpO1xuICAgIHJldHVybiBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2VMb2FkUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChmaW5hbGl6ZVNvdXJjZSkgeyByZXR1cm4gZmluYWxpemVTb3VyY2UoKTsgfSk7XG4gICAgfTtcbn1cbi8qKlxuICogTG9hZHMgdGhlIGdpdmVuIGVudHJvcHkgc291cmNlcy4gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY29sbGVjdHMgdGhlIGVudHJvcHkgY29tcG9uZW50cy5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIHJldHVybmVkIHN5bmNocm9ub3VzbHkgaW4gb3JkZXIgdG8gYWxsb3cgc3RhcnQgZ2V0dGluZyB0aGUgY29tcG9uZW50c1xuICogYmVmb3JlIHRoZSBzb3VyY2VzIGFyZSBsb2FkZWQgY29tcGxldGVseS5cbiAqXG4gKiBXYXJuaW5nIGZvciBwYWNrYWdlIHVzZXJzOlxuICogVGhpcyBmdW5jdGlvbiBpcyBvdXQgb2YgU2VtYW50aWMgVmVyc2lvbmluZywgaS5lLiBjYW4gY2hhbmdlIHVuZXhwZWN0ZWRseS4gVXNhZ2UgaXMgYXQgeW91ciBvd24gcmlzay5cbiAqL1xuZnVuY3Rpb24gbG9hZFNvdXJjZXMoc291cmNlcywgc291cmNlT3B0aW9ucywgZXhjbHVkZVNvdXJjZXMpIHtcbiAgICB2YXIgaW5jbHVkZWRTb3VyY2VzID0gT2JqZWN0LmtleXMoc291cmNlcykuZmlsdGVyKGZ1bmN0aW9uIChzb3VyY2VLZXkpIHsgcmV0dXJuIGV4Y2x1ZGVzKGV4Y2x1ZGVTb3VyY2VzLCBzb3VyY2VLZXkpOyB9KTtcbiAgICB2YXIgc291cmNlR2V0dGVycyA9IEFycmF5KGluY2x1ZGVkU291cmNlcy5sZW5ndGgpO1xuICAgIC8vIFVzaW5nIGBmb3JFYWNoV2l0aEJyZWFrc2AgYWxsb3dzIGFzeW5jaHJvbm91cyBzb3VyY2VzIHRvIGNvbXBsZXRlIGJldHdlZW4gc3luY2hyb25vdXMgc291cmNlc1xuICAgIC8vIGFuZCBtZWFzdXJlIHRoZSBkdXJhdGlvbiBjb3JyZWN0bHlcbiAgICBmb3JFYWNoV2l0aEJyZWFrcyhpbmNsdWRlZFNvdXJjZXMsIGZ1bmN0aW9uIChzb3VyY2VLZXksIGluZGV4KSB7XG4gICAgICAgIHNvdXJjZUdldHRlcnNbaW5kZXhdID0gbG9hZFNvdXJjZShzb3VyY2VzW3NvdXJjZUtleV0sIHNvdXJjZU9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiBnZXRDb21wb25lbnRzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50cywgX2ksIGluY2x1ZGVkU291cmNlc18xLCBzb3VyY2VLZXksIGNvbXBvbmVudFByb21pc2VzLCBfbG9vcF8xLCBzdGF0ZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIGluY2x1ZGVkU291cmNlc18xID0gaW5jbHVkZWRTb3VyY2VzOyBfaSA8IGluY2x1ZGVkU291cmNlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUtleSA9IGluY2x1ZGVkU291cmNlc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzW3NvdXJjZUtleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRQcm9taXNlcyA9IEFycmF5KGluY2x1ZGVkU291cmNlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzQWxsQ29tcG9uZW50UHJvbWlzZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQWxsQ29tcG9uZW50UHJvbWlzZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZvckVhY2hXaXRoQnJlYWtzKGluY2x1ZGVkU291cmNlcywgZnVuY3Rpb24gKHNvdXJjZUtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50UHJvbWlzZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYHNvdXJjZUdldHRlcnNgIG1heSBiZSBpbmNvbXBsZXRlIGF0IHRoaXMgcG9pbnQgb2YgZXhlY3V0aW9uIGJlY2F1c2UgYGZvckVhY2hXaXRoQnJlYWtzYCBpcyBhc3luY2hyb25vdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlR2V0dGVyc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudFByb21pc2UgPSBzb3VyY2VHZXR0ZXJzW2luZGV4XSgpLnRoZW4oZnVuY3Rpb24gKGNvbXBvbmVudCkgeyByZXR1cm4gKGNvbXBvbmVudHNbc291cmNlS2V5XSA9IGNvbXBvbmVudCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbldhcm5pbmcoY29tcG9uZW50UHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFByb21pc2VzW2luZGV4XSA9IGNvbXBvbmVudFByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNBbGxDb21wb25lbnRQcm9taXNlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQWxsQ29tcG9uZW50UHJvbWlzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFwiYnJlYWtcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdhaXQoMSldOyAvLyBMZXRzIHRoZSBzb3VyY2UgbG9hZCBsb29wIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpOyAvLyBMZXRzIHRoZSBzb3VyY2UgbG9hZCBsb29wIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNSAvKnlpZWxkKiovLCBfbG9vcF8xKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlXzEgPT09IFwiYnJlYWtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChjb21wb25lbnRQcm9taXNlcyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY29tcG9uZW50c107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG4vKipcbiAqIE1vZGlmaWVzIGFuIGVudHJvcHkgc291cmNlIGJ5IHRyYW5zZm9ybWluZyBpdHMgcmV0dXJuZWQgdmFsdWUgd2l0aCB0aGUgZ2l2ZW4gZnVuY3Rpb24uXG4gKiBLZWVwcyB0aGUgc291cmNlIHByb3BlcnRpZXM6IHN5bmMvYXN5bmMsIDEvMiBzdGFnZXMuXG4gKlxuICogV2FybmluZyBmb3IgcGFja2FnZSB1c2VyczpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgb3V0IG9mIFNlbWFudGljIFZlcnNpb25pbmcsIGkuZS4gY2FuIGNoYW5nZSB1bmV4cGVjdGVkbHkuIFVzYWdlIGlzIGF0IHlvdXIgb3duIHJpc2suXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVNvdXJjZShzb3VyY2UsIHRyYW5zZm9ybVZhbHVlKSB7XG4gICAgdmFyIHRyYW5zZm9ybUxvYWRSZXN1bHQgPSBmdW5jdGlvbiAobG9hZFJlc3VsdCkge1xuICAgICAgICBpZiAoaXNGaW5hbFJlc3VsdExvYWRlZChsb2FkUmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVZhbHVlKGxvYWRSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZ2V0UmVzdWx0ID0gbG9hZFJlc3VsdCgpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShnZXRSZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3VsdC50aGVuKHRyYW5zZm9ybVZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1WYWx1ZShnZXRSZXN1bHQpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBsb2FkUmVzdWx0ID0gc291cmNlKG9wdGlvbnMpO1xuICAgICAgICBpZiAoaXNQcm9taXNlKGxvYWRSZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9hZFJlc3VsdC50aGVuKHRyYW5zZm9ybUxvYWRSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Mb2FkUmVzdWx0KGxvYWRSZXN1bHQpO1xuICAgIH07XG59XG5cbi8qXG4gKiBGdW5jdGlvbnMgdG8gaGVscCB3aXRoIGZlYXR1cmVzIHRoYXQgdmFyeSB0aHJvdWdoIGJyb3dzZXJzXG4gKi9cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgYmFzZWQgb24gVHJpZGVudCAodGhlIEludGVybmV0IEV4cGxvcmVyIGVuZ2luZSkgd2l0aG91dCB1c2luZyB1c2VyLWFnZW50LlxuICpcbiAqIFdhcm5pbmcgZm9yIHBhY2thZ2UgdXNlcnM6XG4gKiBUaGlzIGZ1bmN0aW9uIGlzIG91dCBvZiBTZW1hbnRpYyBWZXJzaW9uaW5nLCBpLmUuIGNhbiBjaGFuZ2UgdW5leHBlY3RlZGx5LiBVc2FnZSBpcyBhdCB5b3VyIG93biByaXNrLlxuICovXG5mdW5jdGlvbiBpc1RyaWRlbnQoKSB7XG4gICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgdmFyIG4gPSBuYXZpZ2F0b3I7XG4gICAgLy8gVGhlIHByb3BlcnRpZXMgYXJlIGNoZWNrZWQgdG8gYmUgaW4gSUUgMTAsIElFIDExIGFuZCBub3QgdG8gYmUgaW4gb3RoZXIgYnJvd3NlcnMgaW4gT2N0b2JlciAyMDIwXG4gICAgcmV0dXJuIChjb3VudFRydXRoeShbXG4gICAgICAgICdNU0NTU01hdHJpeCcgaW4gdyxcbiAgICAgICAgJ21zU2V0SW1tZWRpYXRlJyBpbiB3LFxuICAgICAgICAnbXNJbmRleGVkREInIGluIHcsXG4gICAgICAgICdtc01heFRvdWNoUG9pbnRzJyBpbiBuLFxuICAgICAgICAnbXNQb2ludGVyRW5hYmxlZCcgaW4gbixcbiAgICBdKSA+PSA0KTtcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgYmFzZWQgb24gRWRnZUhUTUwgKHRoZSBwcmUtQ2hyb21pdW0gRWRnZSBlbmdpbmUpIHdpdGhvdXQgdXNpbmcgdXNlci1hZ2VudC5cbiAqXG4gKiBXYXJuaW5nIGZvciBwYWNrYWdlIHVzZXJzOlxuICogVGhpcyBmdW5jdGlvbiBpcyBvdXQgb2YgU2VtYW50aWMgVmVyc2lvbmluZywgaS5lLiBjYW4gY2hhbmdlIHVuZXhwZWN0ZWRseS4gVXNhZ2UgaXMgYXQgeW91ciBvd24gcmlzay5cbiAqL1xuZnVuY3Rpb24gaXNFZGdlSFRNTCgpIHtcbiAgICAvLyBCYXNlZCBvbiByZXNlYXJjaCBpbiBPY3RvYmVyIDIwMjBcbiAgICB2YXIgdyA9IHdpbmRvdztcbiAgICB2YXIgbiA9IG5hdmlnYXRvcjtcbiAgICByZXR1cm4gKGNvdW50VHJ1dGh5KFsnbXNXcml0ZVByb2ZpbGVyTWFyaycgaW4gdywgJ01TU3RyZWFtJyBpbiB3LCAnbXNMYXVuY2hVcmknIGluIG4sICdtc1NhdmVCbG9iJyBpbiBuXSkgPj0gMyAmJlxuICAgICAgICAhaXNUcmlkZW50KCkpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgYnJvd3NlciBpcyBiYXNlZCBvbiBDaHJvbWl1bSB3aXRob3V0IHVzaW5nIHVzZXItYWdlbnQuXG4gKlxuICogV2FybmluZyBmb3IgcGFja2FnZSB1c2VyczpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgb3V0IG9mIFNlbWFudGljIFZlcnNpb25pbmcsIGkuZS4gY2FuIGNoYW5nZSB1bmV4cGVjdGVkbHkuIFVzYWdlIGlzIGF0IHlvdXIgb3duIHJpc2suXG4gKi9cbmZ1bmN0aW9uIGlzQ2hyb21pdW0oKSB7XG4gICAgLy8gQmFzZWQgb24gcmVzZWFyY2ggaW4gT2N0b2JlciAyMDIwLiBUZXN0ZWQgdG8gZGV0ZWN0IENocm9taXVtIDQyLTg2LlxuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHZhciBuID0gbmF2aWdhdG9yO1xuICAgIHJldHVybiAoY291bnRUcnV0aHkoW1xuICAgICAgICAnd2Via2l0UGVyc2lzdGVudFN0b3JhZ2UnIGluIG4sXG4gICAgICAgICd3ZWJraXRUZW1wb3JhcnlTdG9yYWdlJyBpbiBuLFxuICAgICAgICBuLnZlbmRvci5pbmRleE9mKCdHb29nbGUnKSA9PT0gMCxcbiAgICAgICAgJ3dlYmtpdFJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwnIGluIHcsXG4gICAgICAgICdCYXR0ZXJ5TWFuYWdlcicgaW4gdyxcbiAgICAgICAgJ3dlYmtpdE1lZGlhU3RyZWFtJyBpbiB3LFxuICAgICAgICAnd2Via2l0U3BlZWNoR3JhbW1hcicgaW4gdyxcbiAgICBdKSA+PSA1KTtcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgYmFzZWQgb24gbW9iaWxlIG9yIGRlc2t0b3AgU2FmYXJpIHdpdGhvdXQgdXNpbmcgdXNlci1hZ2VudC5cbiAqIEFsbCBpT1MgYnJvd3NlcnMgdXNlIFdlYktpdCAodGhlIFNhZmFyaSBlbmdpbmUpLlxuICpcbiAqIFdhcm5pbmcgZm9yIHBhY2thZ2UgdXNlcnM6XG4gKiBUaGlzIGZ1bmN0aW9uIGlzIG91dCBvZiBTZW1hbnRpYyBWZXJzaW9uaW5nLCBpLmUuIGNhbiBjaGFuZ2UgdW5leHBlY3RlZGx5LiBVc2FnZSBpcyBhdCB5b3VyIG93biByaXNrLlxuICovXG5mdW5jdGlvbiBpc1dlYktpdCgpIHtcbiAgICAvLyBCYXNlZCBvbiByZXNlYXJjaCBpbiBTZXB0ZW1iZXIgMjAyMFxuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHZhciBuID0gbmF2aWdhdG9yO1xuICAgIHJldHVybiAoY291bnRUcnV0aHkoW1xuICAgICAgICAnQXBwbGVQYXlFcnJvcicgaW4gdyxcbiAgICAgICAgJ0NTU1ByaW1pdGl2ZVZhbHVlJyBpbiB3LFxuICAgICAgICAnQ291bnRlcicgaW4gdyxcbiAgICAgICAgbi52ZW5kb3IuaW5kZXhPZignQXBwbGUnKSA9PT0gMCxcbiAgICAgICAgJ2dldFN0b3JhZ2VVcGRhdGVzJyBpbiBuLFxuICAgICAgICAnV2ViS2l0TWVkaWFLZXlzJyBpbiB3LFxuICAgIF0pID49IDQpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgV2ViS2l0IGJyb3dzZXIgaXMgYSBkZXNrdG9wIFNhZmFyaS5cbiAqXG4gKiBXYXJuaW5nIGZvciBwYWNrYWdlIHVzZXJzOlxuICogVGhpcyBmdW5jdGlvbiBpcyBvdXQgb2YgU2VtYW50aWMgVmVyc2lvbmluZywgaS5lLiBjYW4gY2hhbmdlIHVuZXhwZWN0ZWRseS4gVXNhZ2UgaXMgYXQgeW91ciBvd24gcmlzay5cbiAqL1xuZnVuY3Rpb24gaXNEZXNrdG9wU2FmYXJpKCkge1xuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHJldHVybiAoY291bnRUcnV0aHkoW1xuICAgICAgICAnc2FmYXJpJyBpbiB3LFxuICAgICAgICAhKCdEZXZpY2VNb3Rpb25FdmVudCcgaW4gdyksXG4gICAgICAgICEoJ29uZ2VzdHVyZWVuZCcgaW4gdyksXG4gICAgICAgICEoJ3N0YW5kYWxvbmUnIGluIG5hdmlnYXRvciksXG4gICAgXSkgPj0gMyk7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBicm93c2VyIGlzIGJhc2VkIG9uIEdlY2tvIChGaXJlZm94IGVuZ2luZSkgd2l0aG91dCB1c2luZyB1c2VyLWFnZW50LlxuICpcbiAqIFdhcm5pbmcgZm9yIHBhY2thZ2UgdXNlcnM6XG4gKiBUaGlzIGZ1bmN0aW9uIGlzIG91dCBvZiBTZW1hbnRpYyBWZXJzaW9uaW5nLCBpLmUuIGNhbiBjaGFuZ2UgdW5leHBlY3RlZGx5LiBVc2FnZSBpcyBhdCB5b3VyIG93biByaXNrLlxuICovXG5mdW5jdGlvbiBpc0dlY2tvKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgLy8gQmFzZWQgb24gcmVzZWFyY2ggaW4gU2VwdGVtYmVyIDIwMjBcbiAgICByZXR1cm4gKGNvdW50VHJ1dGh5KFtcbiAgICAgICAgJ2J1aWxkSUQnIGluIG5hdmlnYXRvcixcbiAgICAgICAgJ01vekFwcGVhcmFuY2UnIGluICgoX2IgPSAoX2EgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdHlsZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDoge30pLFxuICAgICAgICAnb25tb3pmdWxsc2NyZWVuY2hhbmdlJyBpbiB3LFxuICAgICAgICAnbW96SW5uZXJTY3JlZW5YJyBpbiB3LFxuICAgICAgICAnQ1NTTW96RG9jdW1lbnRSdWxlJyBpbiB3LFxuICAgICAgICAnQ2FudmFzQ2FwdHVyZU1lZGlhU3RyZWFtJyBpbiB3LFxuICAgIF0pID49IDQpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgYnJvd3NlciBpcyBiYXNlZCBvbiBDaHJvbWl1bSB2ZXJzaW9uIOKJpTg2IHdpdGhvdXQgdXNpbmcgdXNlci1hZ2VudC5cbiAqIEl0IGRvZXNuJ3QgY2hlY2sgdGhhdCB0aGUgYnJvd3NlciBpcyBiYXNlZCBvbiBDaHJvbWl1bSwgdGhlcmUgaXMgYSBzZXBhcmF0ZSBmdW5jdGlvbiBmb3IgdGhpcy5cbiAqL1xuZnVuY3Rpb24gaXNDaHJvbWl1bTg2T3JOZXdlcigpIHtcbiAgICAvLyBDaGVja2VkIGluIENocm9tZSA4NSB2cyBDaHJvbWUgODYgYm90aCBvbiBkZXNrdG9wIGFuZCBBbmRyb2lkXG4gICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgcmV0dXJuIChjb3VudFRydXRoeShbXG4gICAgICAgICEoJ01lZGlhU2V0dGluZ3NSYW5nZScgaW4gdyksXG4gICAgICAgICdSVENFbmNvZGVkQXVkaW9GcmFtZScgaW4gdyxcbiAgICAgICAgJycgKyB3LkludGwgPT09ICdbb2JqZWN0IEludGxdJyxcbiAgICAgICAgJycgKyB3LlJlZmxlY3QgPT09ICdbb2JqZWN0IFJlZmxlY3RdJyxcbiAgICBdKSA+PSAzKTtcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgYmFzZWQgb24gV2ViS2l0IHZlcnNpb24g4omlNjA2IChTYWZhcmkg4omlMTIpIHdpdGhvdXQgdXNpbmcgdXNlci1hZ2VudC5cbiAqIEl0IGRvZXNuJ3QgY2hlY2sgdGhhdCB0aGUgYnJvd3NlciBpcyBiYXNlZCBvbiBXZWJLaXQsIHRoZXJlIGlzIGEgc2VwYXJhdGUgZnVuY3Rpb24gZm9yIHRoaXMuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2FmYXJpX3ZlcnNpb25faGlzdG9yeSNSZWxlYXNlX2hpc3RvcnkgU2FmYXJpLVdlYktpdCB2ZXJzaW9ucyBtYXBcbiAqL1xuZnVuY3Rpb24gaXNXZWJLaXQ2MDZPck5ld2VyKCkge1xuICAgIC8vIENoZWNrZWQgaW4gU2FmYXJpIDnigJMxNFxuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHJldHVybiAoY291bnRUcnV0aHkoW1xuICAgICAgICAnRE9NUmVjdExpc3QnIGluIHcsXG4gICAgICAgICdSVENQZWVyQ29ubmVjdGlvbkljZUV2ZW50JyBpbiB3LFxuICAgICAgICAnU1ZHR2VvbWV0cnlFbGVtZW50JyBpbiB3LFxuICAgICAgICAnb250cmFuc2l0aW9uY2FuY2VsJyBpbiB3LFxuICAgIF0pID49IDMpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgZGV2aWNlIGlzIGFuIGlQYWQuXG4gKiBJdCBkb2Vzbid0IGNoZWNrIHRoYXQgdGhlIGVuZ2luZSBpcyBXZWJLaXQgYW5kIHRoYXQgdGhlIFdlYktpdCBpc24ndCBkZXNrdG9wLlxuICovXG5mdW5jdGlvbiBpc0lQYWQoKSB7XG4gICAgLy8gQ2hlY2tlZCBvbjpcbiAgICAvLyBTYWZhcmkgb24gaVBhZE9TIChib3RoIG1vYmlsZSBhbmQgZGVza3RvcCBtb2Rlcyk6IDgsIDExLCAxMiwgMTMsIDE0XG4gICAgLy8gQ2hyb21lIG9uIGlQYWRPUyAoYm90aCBtb2JpbGUgYW5kIGRlc2t0b3AgbW9kZXMpOiAxMSwgMTIsIDEzLCAxNFxuICAgIC8vIFNhZmFyaSBvbiBpT1MgKGJvdGggbW9iaWxlIGFuZCBkZXNrdG9wIG1vZGVzKTogOSwgMTAsIDExLCAxMiwgMTMsIDE0XG4gICAgLy8gQ2hyb21lIG9uIGlPUyAoYm90aCBtb2JpbGUgYW5kIGRlc2t0b3AgbW9kZXMpOiA5LCAxMCwgMTEsIDEyLCAxMywgMTRcbiAgICAvLyBCZWZvcmUgaU9TIDEzLiBTYWZhcmkgdGFtcGVycyB0aGUgdmFsdWUgaW4gXCJyZXF1ZXN0IGRlc2t0b3Agc2l0ZVwiIG1vZGUgc2luY2UgaU9TIDEzLlxuICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdpUGFkJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHMgPSBzY3JlZW47XG4gICAgdmFyIHNjcmVlblJhdGlvID0gcy53aWR0aCAvIHMuaGVpZ2h0O1xuICAgIHJldHVybiAoY291bnRUcnV0aHkoW1xuICAgICAgICAnTWVkaWFTb3VyY2UnIGluIHdpbmRvdyxcbiAgICAgICAgISFFbGVtZW50LnByb3RvdHlwZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbixcbiAgICAgICAgLy8gaVBob25lIDRTIHRoYXQgcnVucyBpT1MgOSBtYXRjaGVzIHRoaXMuIEJ1dCBpdCB3b24ndCBtYXRjaCB0aGUgY3JpdGVyaWEgYWJvdmUsIHNvIGl0IHdvbid0IGJlIGRldGVjdGVkIGFzIGlQYWQuXG4gICAgICAgIHNjcmVlblJhdGlvID4gMC42NSAmJiBzY3JlZW5SYXRpbyA8IDEuNTMsXG4gICAgXSkgPj0gMik7XG59XG4vKipcbiAqIFdhcm5pbmcgZm9yIHBhY2thZ2UgdXNlcnM6XG4gKiBUaGlzIGZ1bmN0aW9uIGlzIG91dCBvZiBTZW1hbnRpYyBWZXJzaW9uaW5nLCBpLmUuIGNhbiBjaGFuZ2UgdW5leHBlY3RlZGx5LiBVc2FnZSBpcyBhdCB5b3VyIG93biByaXNrLlxuICovXG5mdW5jdGlvbiBnZXRGdWxsc2NyZWVuRWxlbWVudCgpIHtcbiAgICB2YXIgZCA9IGRvY3VtZW50O1xuICAgIHJldHVybiBkLmZ1bGxzY3JlZW5FbGVtZW50IHx8IGQubXNGdWxsc2NyZWVuRWxlbWVudCB8fCBkLm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8IGQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgfHwgbnVsbDtcbn1cbmZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuKCkge1xuICAgIHZhciBkID0gZG9jdW1lbnQ7XG4gICAgLy8gYGNhbGxgIGlzIHJlcXVpcmVkIGJlY2F1c2UgdGhlIGZ1bmN0aW9uIHRocm93cyBhbiBlcnJvciB3aXRob3V0IGEgcHJvcGVyIFwidGhpc1wiIGNvbnRleHRcbiAgICByZXR1cm4gKGQuZXhpdEZ1bGxzY3JlZW4gfHwgZC5tc0V4aXRGdWxsc2NyZWVuIHx8IGQubW96Q2FuY2VsRnVsbFNjcmVlbiB8fCBkLndlYmtpdEV4aXRGdWxsc2NyZWVuKS5jYWxsKGQpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgZGV2aWNlIHJ1bnMgb24gQW5kcm9pZCB3aXRob3V0IHVzaW5nIHVzZXItYWdlbnQuXG4gKlxuICogV2FybmluZyBmb3IgcGFja2FnZSB1c2VyczpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgb3V0IG9mIFNlbWFudGljIFZlcnNpb25pbmcsIGkuZS4gY2FuIGNoYW5nZSB1bmV4cGVjdGVkbHkuIFVzYWdlIGlzIGF0IHlvdXIgb3duIHJpc2suXG4gKi9cbmZ1bmN0aW9uIGlzQW5kcm9pZCgpIHtcbiAgICB2YXIgaXNJdENocm9taXVtID0gaXNDaHJvbWl1bSgpO1xuICAgIHZhciBpc0l0R2Vja28gPSBpc0dlY2tvKCk7XG4gICAgLy8gT25seSAyIGJyb3dzZXIgZW5naW5lcyBhcmUgcHJlc2VudGVkIG9uIEFuZHJvaWQuXG4gICAgLy8gQWN0dWFsbHksIHRoZXJlIGlzIGFsc28gQW5kcm9pZCA0LjEgYnJvd3NlciwgYnV0IGl0J3Mgbm90IHdvcnRoIGRldGVjdGluZyBpdCBhdCB0aGUgbW9tZW50LlxuICAgIGlmICghaXNJdENocm9taXVtICYmICFpc0l0R2Vja28pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdyA9IHdpbmRvdztcbiAgICAvLyBDaHJvbWUgcmVtb3ZlcyBhbGwgd29yZHMgXCJBbmRyb2lkXCIgZnJvbSBgbmF2aWdhdG9yYCB3aGVuIGRlc2t0b3AgdmVyc2lvbiBpcyByZXF1ZXN0ZWRcbiAgICAvLyBGaXJlZm94IGtlZXBzIFwiQW5kcm9pZFwiIGluIGBuYXZpZ2F0b3IuYXBwVmVyc2lvbmAgd2hlbiBkZXNrdG9wIHZlcnNpb24gaXMgcmVxdWVzdGVkXG4gICAgcmV0dXJuIChjb3VudFRydXRoeShbXG4gICAgICAgICdvbm9yaWVudGF0aW9uY2hhbmdlJyBpbiB3LFxuICAgICAgICAnb3JpZW50YXRpb24nIGluIHcsXG4gICAgICAgIGlzSXRDaHJvbWl1bSAmJiAhKCdTaGFyZWRXb3JrZXInIGluIHcpLFxuICAgICAgICBpc0l0R2Vja28gJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci5hcHBWZXJzaW9uKSxcbiAgICBdKSA+PSAyKTtcbn1cblxuLyoqXG4gKiBBIGRlZXAgZGVzY3JpcHRpb246IGh0dHBzOi8vZmluZ2VycHJpbnQuY29tL2Jsb2cvYXVkaW8tZmluZ2VycHJpbnRpbmcvXG4gKiBJbnNwaXJlZCBieSBhbmQgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2NvenlsaWZlL2F1ZGlvLWZpbmdlcnByaW50XG4gKi9cbmZ1bmN0aW9uIGdldEF1ZGlvRmluZ2VycHJpbnQoKSB7XG4gICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgdmFyIEF1ZGlvQ29udGV4dCA9IHcuT2ZmbGluZUF1ZGlvQ29udGV4dCB8fCB3LndlYmtpdE9mZmxpbmVBdWRpb0NvbnRleHQ7XG4gICAgaWYgKCFBdWRpb0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIC0yIC8qIE5vdFN1cHBvcnRlZCAqLztcbiAgICB9XG4gICAgLy8gSW4gc29tZSBicm93c2VycywgYXVkaW8gY29udGV4dCBhbHdheXMgc3RheXMgc3VzcGVuZGVkIHVubGVzcyB0aGUgY29udGV4dCBpcyBzdGFydGVkIGluIHJlc3BvbnNlIHRvIGEgdXNlciBhY3Rpb25cbiAgICAvLyAoZS5nLiBhIGNsaWNrIG9yIGEgdGFwKS4gSXQgcHJldmVudHMgYXVkaW8gZmluZ2VycHJpbnQgZnJvbSBiZWluZyB0YWtlbiBhdCBhbiBhcmJpdHJhcnkgbW9tZW50IG9mIHRpbWUuXG4gICAgLy8gU3VjaCBicm93c2VycyBhcmUgb2xkIGFuZCB1bnBvcHVsYXIsIHNvIHRoZSBhdWRpbyBmaW5nZXJwcmludGluZyBpcyBqdXN0IHNraXBwZWQgaW4gdGhlbS5cbiAgICAvLyBTZWUgYSBzaW1pbGFyIGNhc2UgZXhwbGFuYXRpb24gYXQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDYzNjMwNDgvb25hdWRpb3Byb2Nlc3Mtbm90LWNhbGxlZC1vbi1pb3MxMSM0NjUzNDA4OFxuICAgIGlmIChkb2VzQ3VycmVudEJyb3dzZXJTdXNwZW5kQXVkaW9Db250ZXh0KCkpIHtcbiAgICAgICAgcmV0dXJuIC0xIC8qIEtub3duVG9TdXNwZW5kICovO1xuICAgIH1cbiAgICB2YXIgaGFzaEZyb21JbmRleCA9IDQ1MDA7XG4gICAgdmFyIGhhc2hUb0luZGV4ID0gNTAwMDtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoMSwgaGFzaFRvSW5kZXgsIDQ0MTAwKTtcbiAgICB2YXIgb3NjaWxsYXRvciA9IGNvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIG9zY2lsbGF0b3IudHlwZSA9ICd0cmlhbmdsZSc7XG4gICAgb3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSAxMDAwMDtcbiAgICB2YXIgY29tcHJlc3NvciA9IGNvbnRleHQuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKCk7XG4gICAgY29tcHJlc3Nvci50aHJlc2hvbGQudmFsdWUgPSAtNTA7XG4gICAgY29tcHJlc3Nvci5rbmVlLnZhbHVlID0gNDA7XG4gICAgY29tcHJlc3Nvci5yYXRpby52YWx1ZSA9IDEyO1xuICAgIGNvbXByZXNzb3IuYXR0YWNrLnZhbHVlID0gMDtcbiAgICBjb21wcmVzc29yLnJlbGVhc2UudmFsdWUgPSAwLjI1O1xuICAgIG9zY2lsbGF0b3IuY29ubmVjdChjb21wcmVzc29yKTtcbiAgICBjb21wcmVzc29yLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgb3NjaWxsYXRvci5zdGFydCgwKTtcbiAgICB2YXIgX2EgPSBzdGFydFJlbmRlcmluZ0F1ZGlvKGNvbnRleHQpLCByZW5kZXJQcm9taXNlID0gX2FbMF0sIGZpbmlzaFJlbmRlcmluZyA9IF9hWzFdO1xuICAgIHZhciBmaW5nZXJwcmludFByb21pc2UgPSByZW5kZXJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikgeyByZXR1cm4gZ2V0SGFzaChidWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCkuc3ViYXJyYXkoaGFzaEZyb21JbmRleCkpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwidGltZW91dFwiIC8qIFRpbWVvdXQgKi8gfHwgZXJyb3IubmFtZSA9PT0gXCJzdXNwZW5kZWRcIiAvKiBTdXNwZW5kZWQgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiAtMyAvKiBUaW1lb3V0ICovO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH0pO1xuICAgIC8vIFN1cHByZXNzZXMgdGhlIGNvbnNvbGUgZXJyb3IgbWVzc2FnZSBpbiBjYXNlIHdoZW4gdGhlIGZpbmdlcnByaW50IGZhaWxzIGJlZm9yZSByZXF1ZXN0ZWRcbiAgICBzdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbldhcm5pbmcoZmluZ2VycHJpbnRQcm9taXNlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBmaW5pc2hSZW5kZXJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZpbmdlcnByaW50UHJvbWlzZTtcbiAgICB9O1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBrbm93biB0byBhbHdheXMgc3VzcGVuZCBhdWRpbyBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGRvZXNDdXJyZW50QnJvd3NlclN1c3BlbmRBdWRpb0NvbnRleHQoKSB7XG4gICAgcmV0dXJuIGlzV2ViS2l0KCkgJiYgIWlzRGVza3RvcFNhZmFyaSgpICYmICFpc1dlYktpdDYwNk9yTmV3ZXIoKTtcbn1cbi8qKlxuICogU3RhcnRzIHJlbmRlcmluZyB0aGUgYXVkaW8gY29udGV4dC5cbiAqIFdoZW4gdGhlIHJldHVybmVkIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHJlbmRlciBwcm9jZXNzIHN0YXJ0cyBmaW5pc2hpbmcuXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0UmVuZGVyaW5nQXVkaW8oY29udGV4dCkge1xuICAgIHZhciByZW5kZXJUcnlNYXhDb3VudCA9IDM7XG4gICAgdmFyIHJlbmRlclJldHJ5RGVsYXkgPSA1MDA7XG4gICAgdmFyIHJ1bm5pbmdNYXhBd2FpdFRpbWUgPSA1MDA7XG4gICAgdmFyIHJ1bm5pbmdTdWZmaWNpZW50VGltZSA9IDUwMDA7XG4gICAgdmFyIGZpbmFsaXplID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9O1xuICAgIHZhciByZXN1bHRQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaXNGaW5hbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHJlbmRlclRyeUNvdW50ID0gMDtcbiAgICAgICAgdmFyIHN0YXJ0ZWRSdW5uaW5nQXQgPSAwO1xuICAgICAgICBjb250ZXh0Lm9uY29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIHJlc29sdmUoZXZlbnQucmVuZGVyZWRCdWZmZXIpOyB9O1xuICAgICAgICB2YXIgc3RhcnRSdW5uaW5nVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVqZWN0KG1ha2VJbm5lckVycm9yKFwidGltZW91dFwiIC8qIFRpbWVvdXQgKi8pKTsgfSwgTWF0aC5taW4ocnVubmluZ01heEF3YWl0VGltZSwgc3RhcnRlZFJ1bm5pbmdBdCArIHJ1bm5pbmdTdWZmaWNpZW50VGltZSAtIERhdGUubm93KCkpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRyeVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdGFydFJlbmRlcmluZygpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29udGV4dC5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdydW5uaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWRSdW5uaW5nQXQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmluYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRSdW5uaW5nVGltZW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgYXVkaW8gY29udGV4dCBkb2Vzbid0IHN0YXJ0IGFmdGVyIGNhbGxpbmcgYHN0YXJ0UmVuZGVyaW5nYCAoaW4gYWRkaXRpb24gdG8gdGhlIGNhc2VzIHdoZXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGF1ZGlvIGNvbnRleHQgZG9lc24ndCBzdGFydCBhdCBhbGwpLiBBIGtub3duIGNhc2UgaXMgc3RhcnRpbmcgYW4gYXVkaW8gY29udGV4dCB3aGVuIHRoZSBicm93c2VyIHRhYiBpcyBpblxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kIG9uIGlQaG9uZS4gUmV0cmllcyB1c3VhbGx5IGhlbHAgaW4gdGhpcyBjYXNlLlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdXNwZW5kZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGF1ZGlvIGNvbnRleHQgY2FuIHJlamVjdCBzdGFydGluZyB1bnRpbCB0aGUgdGFiIGlzIGluIGZvcmVncm91bmQuIExvbmcgZmluZ2VycHJpbnQgZHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIGJhY2tncm91bmQgaXNuJ3QgYSBwcm9ibGVtLCB0aGVyZWZvcmUgdGhlIHJldHJ5IGF0dGVtcHRzIGRvbid0IGNvdW50IGluIGJhY2tncm91bmQuIEl0IGNhbiBsZWFkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIHNpdHVhdGlvbiB3aGVuIGEgZmluZ2VycHJpbnQgdGFrZXMgdmVyeSBsb25nIHRpbWUgYW5kIGZpbmlzaGVzIHN1Y2Nlc3NmdWxseS4gRllJLCB0aGUgYXVkaW8gY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FuIGJlIHN1c3BlbmRlZCB3aGVuIGBkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlYCBhbmQgc3RhcnQgcnVubmluZyBhZnRlciBhIHJldHJ5LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUcnlDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmluYWxpemVkICYmIHJlbmRlclRyeUNvdW50ID49IHJlbmRlclRyeU1heENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG1ha2VJbm5lckVycm9yKFwic3VzcGVuZGVkXCIgLyogU3VzcGVuZGVkICovKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRyeVJlbmRlciwgcmVuZGVyUmV0cnlEZWxheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0cnlSZW5kZXIoKTtcbiAgICAgICAgZmluYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWlzRmluYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgaXNGaW5hbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydGVkUnVubmluZ0F0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFJ1bm5pbmdUaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBbcmVzdWx0UHJvbWlzZSwgZmluYWxpemVdO1xufVxuZnVuY3Rpb24gZ2V0SGFzaChzaWduYWwpIHtcbiAgICB2YXIgaGFzaCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWduYWwubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaGFzaCArPSBNYXRoLmFicyhzaWduYWxbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaDtcbn1cbmZ1bmN0aW9uIG1ha2VJbm5lckVycm9yKG5hbWUpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobmFtZSk7XG4gICAgZXJyb3IubmFtZSA9IG5hbWU7XG4gICAgcmV0dXJuIGVycm9yO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIGtlZXBzIGFuIGludmlzaWJsZSBpZnJhbWUgd2hpbGUgdGhlIGdpdmVuIGZ1bmN0aW9uIHJ1bnMuXG4gKiBUaGUgZ2l2ZW4gZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGlmcmFtZSBpcyBsb2FkZWQgYW5kIGhhcyBhIGJvZHkuXG4gKiBUaGUgaWZyYW1lIGFsbG93cyB0byBtZWFzdXJlIERPTSBzaXplcyBpbnNpZGUgaXRzZWxmLlxuICpcbiAqIE5vdGljZTogcGFzc2luZyBhbiBpbml0aWFsIEhUTUwgY29kZSBkb2Vzbid0IHdvcmsgaW4gSUUuXG4gKlxuICogV2FybmluZyBmb3IgcGFja2FnZSB1c2VyczpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgb3V0IG9mIFNlbWFudGljIFZlcnNpb25pbmcsIGkuZS4gY2FuIGNoYW5nZSB1bmV4cGVjdGVkbHkuIFVzYWdlIGlzIGF0IHlvdXIgb3duIHJpc2suXG4gKi9cbmZ1bmN0aW9uIHdpdGhJZnJhbWUoYWN0aW9uLCBpbml0aWFsSHRtbCwgZG9tUG9sbEludGVydmFsKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgaWYgKGRvbVBvbGxJbnRlcnZhbCA9PT0gdm9pZCAwKSB7IGRvbVBvbGxJbnRlcnZhbCA9IDUwOyB9XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZCwgaWZyYW1lO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBkID0gZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGlmICghIWQuYm9keSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdhaXQoZG9tUG9sbEludGVydmFsKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lID0gZC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgX2QudHJ5cy5wdXNoKFs0LCAsIDEwLCAxMV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUsIF9yZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Jlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gaWZyYW1lLnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJywgJ2ltcG9ydGFudCcpOyAvLyBSZXF1aXJlZCBmb3IgYnJvd3NlcnMgdG8gY2FsY3VsYXRlIHRoZSBsYXlvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUudG9wID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsSHRtbCAmJiAnc3JjZG9jJyBpbiBpZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLnNyY2RvYyA9IGluaXRpYWxIdG1sO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLnNyYyA9ICdhYm91dDpibGFuayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlYktpdCBpbiBXZUNoYXQgZG9lc24ndCBmaXJlIHRoZSBpZnJhbWUncyBgb25sb2FkYCBmb3Igc29tZSByZWFzb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBjb2RlIGNoZWNrcyBmb3IgdGhlIGxvYWRpbmcgc3RhdGUgbWFudWFsbHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvaXNzdWVzLzY0NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGVja1JlYWR5U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZWFkeSBzdGF0ZSBtYXkgbmV2ZXIgYmVjb21lICdjb21wbGV0ZScgaW4gRmlyZWZveCBkZXNwaXRlIHRoZSAnbG9hZCcgZXZlbnQgYmVpbmcgZmlyZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvIGFuIGluZmluaXRlIHNldFRpbWVvdXQgbG9vcCBjYW4gaGFwcGVuIHdpdGhvdXQgdGhpcyBjaGVjay5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvcHVsbC83MTYjaXNzdWVjb21tZW50LTk4Njg5ODc5NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBpZnJhbWUuY29udGVudFdpbmRvdyBhbmQgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQgYXJlIGJvdGggbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjb250ZW50V2luZG93LmRvY3VtZW50IGNhbiBtaXNzIGluIEpTRE9NIChodHRwczovL2dpdGh1Yi5jb20vanNkb20vanNkb20pLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChfYiA9IChfYSA9IGlmcmFtZS5jb250ZW50V2luZG93KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZG9jdW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZWFkeVN0YXRlKSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVja1JlYWR5U3RhdGUsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tSZWFkeVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGlmICghISgoX2IgPSAoX2EgPSBpZnJhbWUuY29udGVudFdpbmRvdykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRvY3VtZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYm9keSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3YWl0KGRvbVBvbGxJbnRlcnZhbCldO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbNCAvKnlpZWxkKi8sIGFjdGlvbihpZnJhbWUsIGlmcmFtZS5jb250ZW50V2luZG93KV07XG4gICAgICAgICAgICAgICAgY2FzZSA5OiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Quc2VudCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAoX2MgPSBpZnJhbWUucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgY2FzZSAxMTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIERPTSBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gc2VsZWN0b3IuXG4gKiBPbmx5IHNpbmdsZSBlbGVtZW50IHNlbGVjdG9yIGFyZSBzdXBwb3J0ZWQgKHdpdGhvdXQgb3BlcmF0b3JzIGxpa2Ugc3BhY2UsICssID4sIGV0YykuXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdG9yVG9FbGVtZW50KHNlbGVjdG9yKSB7XG4gICAgdmFyIF9hID0gcGFyc2VTaW1wbGVDc3NTZWxlY3RvcihzZWxlY3RvciksIHRhZyA9IF9hWzBdLCBhdHRyaWJ1dGVzID0gX2FbMV07XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyAhPT0gbnVsbCAmJiB0YWcgIT09IHZvaWQgMCA/IHRhZyA6ICdkaXYnKTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9iID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7IF9pIDwgX2IubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBuYW1lXzEgPSBfYltfaV07XG4gICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV8xXS5qb2luKCcgJyk7XG4gICAgICAgIC8vIENoYW5naW5nIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZSBjYW4gY2F1c2UgYSBDU1AgZXJyb3IsIHRoZXJlZm9yZSB3ZSBjaGFuZ2UgdGhlIGBzdHlsZS5jc3NUZXh0YCBwcm9wZXJ0eS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqcy9pc3N1ZXMvNzMzXG4gICAgICAgIGlmIChuYW1lXzEgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgIGFkZFN0eWxlU3RyaW5nKGVsZW1lbnQuc3R5bGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWVfMSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuLyoqXG4gKiBBZGRzIENTUyBzdHlsZXMgZnJvbSBhIHN0cmluZyBpbiBzdWNoIGEgd2F5IHRoYXQgZG9lc24ndCB0cmlnZ2VyIGEgQ1NQIHdhcm5pbmcgKHVuc2FmZS1pbmxpbmUgb3IgdW5zYWZlLWV2YWwpXG4gKi9cbmZ1bmN0aW9uIGFkZFN0eWxlU3RyaW5nKHN0eWxlLCBzb3VyY2UpIHtcbiAgICAvLyBXZSBkb24ndCB1c2UgYHN0eWxlLmNzc1RleHRgIGJlY2F1c2UgYnJvd3NlcnMgbXVzdCBibG9jayBpdCB3aGVuIG5vIGB1bnNhZmUtZXZhbGAgQ1NQIGlzIHByZXNlbnRlZDogaHR0cHM6Ly9jc3BsaXRlLmNvbS9jc3AxNDUvI3czY19ub3RlXG4gICAgLy8gRXZlbiB0aG91Z2ggdGhlIGJyb3dzZXJzIGlnbm9yZSB0aGlzIHN0YW5kYXJkLCB3ZSBkb24ndCB1c2UgYGNzc1RleHRgIGp1c3QgaW4gY2FzZS5cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gc291cmNlLnNwbGl0KCc7Jyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IF9hW19pXTtcbiAgICAgICAgdmFyIG1hdGNoID0gL15cXHMqKFtcXHctXSspXFxzKjpcXHMqKC4rPykoXFxzKiEoW1xcdy1dKykpP1xccyokLy5leGVjKHByb3BlcnR5KTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICB2YXIgbmFtZV8yID0gbWF0Y2hbMV0sIHZhbHVlID0gbWF0Y2hbMl0sIHByaW9yaXR5ID0gbWF0Y2hbNF07XG4gICAgICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lXzIsIHZhbHVlLCBwcmlvcml0eSB8fCAnJyk7IC8vIFRoZSBsYXN0IGFyZ3VtZW50IGNhbid0IGJlIHVuZGVmaW5lZCBpbiBJRTExXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFdlIHVzZSBtIG9yIHcgYmVjYXVzZSB0aGVzZSB0d28gY2hhcmFjdGVycyB0YWtlIHVwIHRoZSBtYXhpbXVtIHdpZHRoLlxuLy8gQW5kIHdlIHVzZSBhIExMaSBzbyB0aGF0IHRoZSBzYW1lIG1hdGNoaW5nIGZvbnRzIGNhbiBnZXQgc2VwYXJhdGVkLlxudmFyIHRlc3RTdHJpbmcgPSAnbW1Nd1dMbGlJME8mMSc7XG4vLyBXZSB0ZXN0IHVzaW5nIDQ4cHggZm9udCBzaXplLCB3ZSBtYXkgdXNlIGFueSBzaXplLiBJIGd1ZXNzIGxhcmdlciB0aGUgYmV0dGVyLlxudmFyIHRleHRTaXplID0gJzQ4cHgnO1xuLy8gQSBmb250IHdpbGwgYmUgY29tcGFyZWQgYWdhaW5zdCBhbGwgdGhlIHRocmVlIGRlZmF1bHQgZm9udHMuXG4vLyBBbmQgaWYgZm9yIGFueSBkZWZhdWx0IGZvbnRzIGl0IGRvZXNuJ3QgbWF0Y2gsIHRoZW4gdGhhdCBmb250IGlzIGF2YWlsYWJsZS5cbnZhciBiYXNlRm9udHMgPSBbJ21vbm9zcGFjZScsICdzYW5zLXNlcmlmJywgJ3NlcmlmJ107XG52YXIgZm9udExpc3QgPSBbXG4gICAgLy8gVGhpcyBpcyBhbmRyb2lkLXNwZWNpZmljIGZvbnQgZnJvbSBcIlJvYm90b1wiIGZhbWlseVxuICAgICdzYW5zLXNlcmlmLXRoaW4nLFxuICAgICdBUk5PIFBSTycsXG4gICAgJ0FnZW5jeSBGQicsXG4gICAgJ0FyYWJpYyBUeXBlc2V0dGluZycsXG4gICAgJ0FyaWFsIFVuaWNvZGUgTVMnLFxuICAgICdBdmFudEdhcmRlIEJrIEJUJyxcbiAgICAnQmFua0dvdGhpYyBNZCBCVCcsXG4gICAgJ0JhdGFuZycsXG4gICAgJ0JpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubycsXG4gICAgJ0NhbGlicmknLFxuICAgICdDZW50dXJ5JyxcbiAgICAnQ2VudHVyeSBHb3RoaWMnLFxuICAgICdDbGFyZW5kb24nLFxuICAgICdFVVJPU1RJTEUnLFxuICAgICdGcmFua2xpbiBHb3RoaWMnLFxuICAgICdGdXR1cmEgQmsgQlQnLFxuICAgICdGdXR1cmEgTWQgQlQnLFxuICAgICdHT1RIQU0nLFxuICAgICdHaWxsIFNhbnMnLFxuICAgICdIRUxWJyxcbiAgICAnSGFldHRlbnNjaHdlaWxlcicsXG4gICAgJ0hlbHZldGljYSBOZXVlJyxcbiAgICAnSHVtYW5zdDUyMSBCVCcsXG4gICAgJ0xlZWxhd2FkZWUnLFxuICAgICdMZXR0ZXIgR290aGljJyxcbiAgICAnTGV2ZW5pbSBNVCcsXG4gICAgJ0x1Y2lkYSBCcmlnaHQnLFxuICAgICdMdWNpZGEgU2FucycsXG4gICAgJ01lbmxvJyxcbiAgICAnTVMgTWluY2hvJyxcbiAgICAnTVMgT3V0bG9vaycsXG4gICAgJ01TIFJlZmVyZW5jZSBTcGVjaWFsdHknLFxuICAgICdNUyBVSSBHb3RoaWMnLFxuICAgICdNVCBFeHRyYScsXG4gICAgJ01ZUklBRCBQUk8nLFxuICAgICdNYXJsZXR0JyxcbiAgICAnTWVpcnlvIFVJJyxcbiAgICAnTWljcm9zb2Z0IFVpZ2h1cicsXG4gICAgJ01pbmlvbiBQcm8nLFxuICAgICdNb25vdHlwZSBDb3JzaXZhJyxcbiAgICAnUE1pbmdMaVUnLFxuICAgICdQcmlzdGluYScsXG4gICAgJ1NDUklQVElOQScsXG4gICAgJ1NlZ29lIFVJIExpZ2h0JyxcbiAgICAnU2VyaWZhJyxcbiAgICAnU2ltSGVpJyxcbiAgICAnU21hbGwgRm9udHMnLFxuICAgICdTdGFjY2F0bzIyMiBCVCcsXG4gICAgJ1RSQUpBTiBQUk8nLFxuICAgICdVbml2ZXJzIENFIDU1IE1lZGl1bScsXG4gICAgJ1ZyaW5kYScsXG4gICAgJ1pXQWRvYmVGJyxcbl07XG4vLyBrdWRvcyB0byBodHRwOi8vd3d3LmxhbGl0Lm9yZy9sYWIvamF2YXNjcmlwdC1jc3MtZm9udC1kZXRlY3QvXG5mdW5jdGlvbiBnZXRGb250cygpIHtcbiAgICAvLyBSdW5uaW5nIHRoZSBzY3JpcHQgaW4gYW4gaWZyYW1lIG1ha2VzIGl0IG5vdCBhZmZlY3QgdGhlIHBhZ2UgbG9vayBhbmQgbm90IGJlIGFmZmVjdGVkIGJ5IHRoZSBwYWdlIENTUy4gU2VlOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvaXNzdWVzLzU5MlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvaXNzdWVzLzYyOFxuICAgIHJldHVybiB3aXRoSWZyYW1lKGZ1bmN0aW9uIChfLCBfYSkge1xuICAgICAgICB2YXIgZG9jdW1lbnQgPSBfYS5kb2N1bWVudDtcbiAgICAgICAgdmFyIGhvbGRlciA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGhvbGRlci5zdHlsZS5mb250U2l6ZSA9IHRleHRTaXplO1xuICAgICAgICAvLyBkaXYgdG8gbG9hZCBzcGFucyBmb3IgdGhlIGRlZmF1bHQgZm9udHMgYW5kIHRoZSBmb250cyB0byBkZXRlY3RcbiAgICAgICAgdmFyIHNwYW5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBkZWZhdWx0V2lkdGggPSB7fTtcbiAgICAgICAgdmFyIGRlZmF1bHRIZWlnaHQgPSB7fTtcbiAgICAgICAgLy8gY3JlYXRlcyBhIHNwYW4gd2hlcmUgdGhlIGZvbnRzIHdpbGwgYmUgbG9hZGVkXG4gICAgICAgIHZhciBjcmVhdGVTcGFuID0gZnVuY3Rpb24gKGZvbnRGYW1pbHkpIHtcbiAgICAgICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gc3Bhbi5zdHlsZTtcbiAgICAgICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICAgIHN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgICAgICBzdHlsZS5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXN0U3RyaW5nO1xuICAgICAgICAgICAgc3BhbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY3JlYXRlcyBhIHNwYW4gYW5kIGxvYWQgdGhlIGZvbnQgdG8gZGV0ZWN0IGFuZCBhIGJhc2UgZm9udCBmb3IgZmFsbGJhY2tcbiAgICAgICAgdmFyIGNyZWF0ZVNwYW5XaXRoRm9udHMgPSBmdW5jdGlvbiAoZm9udFRvRGV0ZWN0LCBiYXNlRm9udCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVNwYW4oXCInXCIgKyBmb250VG9EZXRlY3QgKyBcIicsXCIgKyBiYXNlRm9udCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNyZWF0ZXMgc3BhbnMgZm9yIHRoZSBiYXNlIGZvbnRzIGFuZCBhZGRzIHRoZW0gdG8gYmFzZUZvbnRzRGl2XG4gICAgICAgIHZhciBpbml0aWFsaXplQmFzZUZvbnRzU3BhbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZUZvbnRzLm1hcChjcmVhdGVTcGFuKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY3JlYXRlcyBzcGFucyBmb3IgdGhlIGZvbnRzIHRvIGRldGVjdCBhbmQgYWRkcyB0aGVtIHRvIGZvbnRzRGl2XG4gICAgICAgIHZhciBpbml0aWFsaXplRm9udHNTcGFucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFN0b3JlcyB7Zm9udE5hbWUgOiBbc3BhbnMgZm9yIHRoYXQgZm9udF19XG4gICAgICAgICAgICB2YXIgc3BhbnMgPSB7fTtcbiAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgICAgICAgICAgICBzcGFuc1tmb250XSA9IGJhc2VGb250cy5tYXAoZnVuY3Rpb24gKGJhc2VGb250KSB7IHJldHVybiBjcmVhdGVTcGFuV2l0aEZvbnRzKGZvbnQsIGJhc2VGb250KTsgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBmb250TGlzdF8xID0gZm9udExpc3Q7IF9pIDwgZm9udExpc3RfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9udCA9IGZvbnRMaXN0XzFbX2ldO1xuICAgICAgICAgICAgICAgIF9sb29wXzEoZm9udCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3BhbnM7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNoZWNrcyBpZiBhIGZvbnQgaXMgYXZhaWxhYmxlXG4gICAgICAgIHZhciBpc0ZvbnRBdmFpbGFibGUgPSBmdW5jdGlvbiAoZm9udFNwYW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZUZvbnRzLnNvbWUoZnVuY3Rpb24gKGJhc2VGb250LCBiYXNlRm9udEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRTcGFuc1tiYXNlRm9udEluZGV4XS5vZmZzZXRXaWR0aCAhPT0gZGVmYXVsdFdpZHRoW2Jhc2VGb250XSB8fFxuICAgICAgICAgICAgICAgICAgICBmb250U3BhbnNbYmFzZUZvbnRJbmRleF0ub2Zmc2V0SGVpZ2h0ICE9PSBkZWZhdWx0SGVpZ2h0W2Jhc2VGb250XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBjcmVhdGUgc3BhbnMgZm9yIGJhc2UgZm9udHNcbiAgICAgICAgdmFyIGJhc2VGb250c1NwYW5zID0gaW5pdGlhbGl6ZUJhc2VGb250c1NwYW5zKCk7XG4gICAgICAgIC8vIGNyZWF0ZSBzcGFucyBmb3IgZm9udHMgdG8gZGV0ZWN0XG4gICAgICAgIHZhciBmb250c1NwYW5zID0gaW5pdGlhbGl6ZUZvbnRzU3BhbnMoKTtcbiAgICAgICAgLy8gYWRkIGFsbCB0aGUgc3BhbnMgdG8gdGhlIERPTVxuICAgICAgICBob2xkZXIuYXBwZW5kQ2hpbGQoc3BhbnNDb250YWluZXIpO1xuICAgICAgICAvLyBnZXQgdGhlIGRlZmF1bHQgd2lkdGggZm9yIHRoZSB0aHJlZSBiYXNlIGZvbnRzXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBiYXNlRm9udHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBkZWZhdWx0V2lkdGhbYmFzZUZvbnRzW2luZGV4XV0gPSBiYXNlRm9udHNTcGFuc1tpbmRleF0ub2Zmc2V0V2lkdGg7IC8vIHdpZHRoIGZvciB0aGUgZGVmYXVsdCBmb250XG4gICAgICAgICAgICBkZWZhdWx0SGVpZ2h0W2Jhc2VGb250c1tpbmRleF1dID0gYmFzZUZvbnRzU3BhbnNbaW5kZXhdLm9mZnNldEhlaWdodDsgLy8gaGVpZ2h0IGZvciB0aGUgZGVmYXVsdCBmb250XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgYXZhaWxhYmxlIGZvbnRzXG4gICAgICAgIHJldHVybiBmb250TGlzdC5maWx0ZXIoZnVuY3Rpb24gKGZvbnQpIHsgcmV0dXJuIGlzRm9udEF2YWlsYWJsZShmb250c1NwYW5zW2ZvbnRdKTsgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFBsdWdpbnMoKSB7XG4gICAgdmFyIHJhd1BsdWdpbnMgPSBuYXZpZ2F0b3IucGx1Z2lucztcbiAgICBpZiAoIXJhd1BsdWdpbnMpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmFyIHBsdWdpbnMgPSBbXTtcbiAgICAvLyBTYWZhcmkgMTAgZG9lc24ndCBzdXBwb3J0IGl0ZXJhdGluZyBuYXZpZ2F0b3IucGx1Z2lucyB3aXRoIGZvci4uLm9mXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXdQbHVnaW5zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBwbHVnaW4gPSByYXdQbHVnaW5zW2ldO1xuICAgICAgICBpZiAoIXBsdWdpbikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbWVUeXBlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBsdWdpbi5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgdmFyIG1pbWVUeXBlID0gcGx1Z2luW2pdO1xuICAgICAgICAgICAgbWltZVR5cGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IG1pbWVUeXBlLnR5cGUsXG4gICAgICAgICAgICAgICAgc3VmZml4ZXM6IG1pbWVUeXBlLnN1ZmZpeGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGx1Z2lucy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHBsdWdpbi5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHBsdWdpbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG1pbWVUeXBlczogbWltZVR5cGVzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBsdWdpbnM7XG59XG5cbi8vIGh0dHBzOi8vd3d3LmJyb3dzZXJsZWFrcy5jb20vY2FudmFzI2hvdy1kb2VzLWl0LXdvcmtcbmZ1bmN0aW9uIGdldENhbnZhc0ZpbmdlcnByaW50KCkge1xuICAgIHZhciBfYSA9IG1ha2VDYW52YXNDb250ZXh0KCksIGNhbnZhcyA9IF9hWzBdLCBjb250ZXh0ID0gX2FbMV07XG4gICAgaWYgKCFpc1N1cHBvcnRlZChjYW52YXMsIGNvbnRleHQpKSB7XG4gICAgICAgIHJldHVybiB7IHdpbmRpbmc6IGZhbHNlLCBnZW9tZXRyeTogJycsIHRleHQ6ICcnIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdpbmRpbmc6IGRvZXNTdXBwb3J0V2luZGluZyhjb250ZXh0KSxcbiAgICAgICAgZ2VvbWV0cnk6IG1ha2VHZW9tZXRyeUltYWdlKGNhbnZhcywgY29udGV4dCksXG4gICAgICAgIC8vIFRleHQgaXMgdW5zdGFibGU6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvaXNzdWVzLzU4M1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmluZ2VycHJpbnRqcy9maW5nZXJwcmludGpzL2lzc3Vlcy8xMDNcbiAgICAgICAgLy8gVGhlcmVmb3JlIGl0J3MgZXh0cmFjdGVkIGludG8gYSBzZXBhcmF0ZSBpbWFnZS5cbiAgICAgICAgdGV4dDogbWFrZVRleHRJbWFnZShjYW52YXMsIGNvbnRleHQpLFxuICAgIH07XG59XG5mdW5jdGlvbiBtYWtlQ2FudmFzQ29udGV4dCgpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLndpZHRoID0gMTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMTtcbiAgICByZXR1cm4gW2NhbnZhcywgY2FudmFzLmdldENvbnRleHQoJzJkJyldO1xufVxuZnVuY3Rpb24gaXNTdXBwb3J0ZWQoY2FudmFzLCBjb250ZXh0KSB7XG4gICAgLy8gVE9ETzogbG9vayBpbnRvOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTENhbnZhc0VsZW1lbnQvdG9CbG9iXG4gICAgcmV0dXJuICEhKGNvbnRleHQgJiYgY2FudmFzLnRvRGF0YVVSTCk7XG59XG5mdW5jdGlvbiBkb2VzU3VwcG9ydFdpbmRpbmcoY29udGV4dCkge1xuICAgIC8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE3MDgyNTAyNDY1NS9odHRwOi8vYmxvZ3MuYWRvYmUuY29tL3dlYnBsYXRmb3JtLzIwMTMvMDEvMzAvd2luZGluZy1ydWxlcy1pbi1jYW52YXMvXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2NhbnZhcy93aW5kaW5nLmpzXG4gICAgY29udGV4dC5yZWN0KDAsIDAsIDEwLCAxMCk7XG4gICAgY29udGV4dC5yZWN0KDIsIDIsIDYsIDYpO1xuICAgIHJldHVybiAhY29udGV4dC5pc1BvaW50SW5QYXRoKDUsIDUsICdldmVub2RkJyk7XG59XG5mdW5jdGlvbiBtYWtlVGV4dEltYWdlKGNhbnZhcywgY29udGV4dCkge1xuICAgIC8vIFJlc2l6aW5nIHRoZSBjYW52YXMgY2xlYW5zIGl0XG4gICAgY2FudmFzLndpZHRoID0gMjQwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2MDtcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZjYwJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KDEwMCwgMSwgNjIsIDIwKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjMDY5JztcbiAgICAvLyBJdCdzIGltcG9ydGFudCB0byB1c2UgZXhwbGljaXQgYnVpbHQtaW4gZm9udHMgaW4gb3JkZXIgdG8gZXhjbHVkZSB0aGUgYWZmZWN0IG9mIGZvbnQgcHJlZmVyZW5jZXNcbiAgICAvLyAodGhlcmUgaXMgYSBzZXBhcmF0ZSBlbnRyb3B5IHNvdXJjZSBmb3IgdGhlbSkuXG4gICAgY29udGV4dC5mb250ID0gJzExcHQgXCJUaW1lcyBOZXcgUm9tYW5cIic7XG4gICAgLy8gVGhlIGNob2ljZSBvZiBlbW9qaXMgaGFzIGEgZ2lnYW50aWMgaW1wYWN0IG9uIHJlbmRlcmluZyBwZXJmb3JtYW5jZSAoZXNwZWNpYWxseSBpbiBGRikuXG4gICAgLy8gU29tZSBuZXdlciBlbW9qaXMgY2F1c2UgaXQgdG8gc2xvdyBkb3duIDUwLTIwMCB0aW1lcy5cbiAgICAvLyBUaGVyZSBtdXN0IGJlIG5vIHRleHQgdG8gdGhlIHJpZ2h0IG9mIHRoZSBlbW9qaSwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvaXNzdWVzLzU3NFxuICAgIC8vIEEgYmFyZSBlbW9qaSBzaG91bGRuJ3QgYmUgdXNlZCBiZWNhdXNlIHRoZSBjYW52YXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZSBzY3JpcHQgZW5jb2Rpbmc6XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqcy9pc3N1ZXMvNjZcbiAgICAvLyBFc2NhcGUgc2VxdWVuY2Ugc2hvdWxkbid0IGJlIHVzZWQgdG9vIGJlY2F1c2UgVGVyc2VyIHdpbGwgdHVybiBpdCBpbnRvIGEgYmFyZSB1bmljb2RlLlxuICAgIHZhciBwcmludGVkVGV4dCA9IFwiQ3dtIGZqb3JkYmFuayBnbHkgXCIgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1MzU3LCA1NjgzNSkgLyog8J+YgyAqLztcbiAgICBjb250ZXh0LmZpbGxUZXh0KHByaW50ZWRUZXh0LCAyLCAxNSk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgxMDIsIDIwNCwgMCwgMC4yKSc7XG4gICAgY29udGV4dC5mb250ID0gJzE4cHQgQXJpYWwnO1xuICAgIGNvbnRleHQuZmlsbFRleHQocHJpbnRlZFRleHQsIDQsIDQ1KTtcbiAgICByZXR1cm4gc2F2ZShjYW52YXMpO1xufVxuZnVuY3Rpb24gbWFrZUdlb21ldHJ5SW1hZ2UoY2FudmFzLCBjb250ZXh0KSB7XG4gICAgLy8gUmVzaXppbmcgdGhlIGNhbnZhcyBjbGVhbnMgaXRcbiAgICBjYW52YXMud2lkdGggPSAxMjI7XG4gICAgY2FudmFzLmhlaWdodCA9IDExMDtcbiAgICAvLyBDYW52YXMgYmxlbmRpbmdcbiAgICAvLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNzA4MjYxOTQxMjEvaHR0cDovL2Jsb2dzLmFkb2JlLmNvbS93ZWJwbGF0Zm9ybS8yMDEzLzAxLzI4L2JsZW5kaW5nLWZlYXR1cmVzLWluLWNhbnZhcy9cbiAgICAvLyBodHRwOi8vanNmaWRkbGUubmV0L05EWVY4LzE2L1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gW1xuICAgICAgICBbJyNmMmYnLCA0MCwgNDBdLFxuICAgICAgICBbJyMyZmYnLCA4MCwgNDBdLFxuICAgICAgICBbJyNmZjInLCA2MCwgODBdLFxuICAgIF07IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBfYiA9IF9hW19pXSwgY29sb3IgPSBfYlswXSwgeCA9IF9iWzFdLCB5ID0gX2JbMl07XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuYXJjKHgsIHksIDQwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH1cbiAgICAvLyBDYW52YXMgd2luZGluZ1xuICAgIC8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDEzMDkxMzA2MTYzMi9odHRwOi8vYmxvZ3MuYWRvYmUuY29tL3dlYnBsYXRmb3JtLzIwMTMvMDEvMzAvd2luZGluZy1ydWxlcy1pbi1jYW52YXMvXG4gICAgLy8gaHR0cDovL2pzZmlkZGxlLm5ldC9ORFlWOC8xOS9cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZjljJztcbiAgICBjb250ZXh0LmFyYyg2MCwgNjAsIDYwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgY29udGV4dC5hcmMoNjAsIDYwLCAyMCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIGNvbnRleHQuZmlsbCgnZXZlbm9kZCcpO1xuICAgIHJldHVybiBzYXZlKGNhbnZhcyk7XG59XG5mdW5jdGlvbiBzYXZlKGNhbnZhcykge1xuICAgIC8vIFRPRE86IGxvb2sgaW50bzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxDYW52YXNFbGVtZW50L3RvQmxvYlxuICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCk7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIGNydWRlIGFuZCBwcmltaXRpdmUgdG91Y2ggc2NyZWVuIGRldGVjdGlvbi4gSXQncyBub3QgcG9zc2libGUgdG8gY3VycmVudGx5IHJlbGlhYmx5IGRldGVjdCB0aGUgYXZhaWxhYmlsaXR5XG4gKiBvZiBhIHRvdWNoIHNjcmVlbiB3aXRoIGEgSlMsIHdpdGhvdXQgYWN0dWFsbHkgc3Vic2NyaWJpbmcgdG8gYSB0b3VjaCBldmVudC5cbiAqXG4gKiBAc2VlIGh0dHA6Ly93d3cuc3R1Y294LmNvbS9ibG9nL3lvdS1jYW50LWRldGVjdC1hLXRvdWNoc2NyZWVuL1xuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvNTQ4XG4gKi9cbmZ1bmN0aW9uIGdldFRvdWNoU3VwcG9ydCgpIHtcbiAgICB2YXIgbiA9IG5hdmlnYXRvcjtcbiAgICB2YXIgbWF4VG91Y2hQb2ludHMgPSAwO1xuICAgIHZhciB0b3VjaEV2ZW50O1xuICAgIGlmIChuLm1heFRvdWNoUG9pbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWF4VG91Y2hQb2ludHMgPSB0b0ludChuLm1heFRvdWNoUG9pbnRzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobi5tc01heFRvdWNoUG9pbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWF4VG91Y2hQb2ludHMgPSBuLm1zTWF4VG91Y2hQb2ludHM7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdUb3VjaEV2ZW50Jyk7XG4gICAgICAgIHRvdWNoRXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgdG91Y2hFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdG91Y2hTdGFydCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcbiAgICByZXR1cm4ge1xuICAgICAgICBtYXhUb3VjaFBvaW50czogbWF4VG91Y2hQb2ludHMsXG4gICAgICAgIHRvdWNoRXZlbnQ6IHRvdWNoRXZlbnQsXG4gICAgICAgIHRvdWNoU3RhcnQ6IHRvdWNoU3RhcnQsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0T3NDcHUoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5vc2NwdTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VzKCkge1xuICAgIHZhciBuID0gbmF2aWdhdG9yO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgbGFuZ3VhZ2UgPSBuLmxhbmd1YWdlIHx8IG4udXNlckxhbmd1YWdlIHx8IG4uYnJvd3Nlckxhbmd1YWdlIHx8IG4uc3lzdGVtTGFuZ3VhZ2U7XG4gICAgaWYgKGxhbmd1YWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2xhbmd1YWdlXSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG4ubGFuZ3VhZ2VzKSkge1xuICAgICAgICAvLyBTdGFydGluZyBmcm9tIENocm9taXVtIDg2LCB0aGVyZSBpcyBvbmx5IGEgc2luZ2xlIHZhbHVlIGluIGBuYXZpZ2F0b3IubGFuZ3VhZ2VgIGluIEluY29nbml0byBtb2RlOlxuICAgICAgICAvLyB0aGUgdmFsdWUgb2YgYG5hdmlnYXRvci5sYW5ndWFnZWAuIFRoZXJlZm9yZSB0aGUgdmFsdWUgaXMgaWdub3JlZCBpbiB0aGlzIGJyb3dzZXIuXG4gICAgICAgIGlmICghKGlzQ2hyb21pdW0oKSAmJiBpc0Nocm9taXVtODZPck5ld2VyKCkpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChuLmxhbmd1YWdlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG4ubGFuZ3VhZ2VzID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgbGFuZ3VhZ2VzID0gbi5sYW5ndWFnZXM7XG4gICAgICAgIGlmIChsYW5ndWFnZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxhbmd1YWdlcy5zcGxpdCgnLCcpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvckRlcHRoKCkge1xuICAgIHJldHVybiB3aW5kb3cuc2NyZWVuLmNvbG9yRGVwdGg7XG59XG5cbmZ1bmN0aW9uIGdldERldmljZU1lbW9yeSgpIHtcbiAgICAvLyBgbmF2aWdhdG9yLmRldmljZU1lbW9yeWAgaXMgYSBzdHJpbmcgY29udGFpbmluZyBhIG51bWJlciBpbiBzb21lIHVuaWRlbnRpZmllZCBjYXNlc1xuICAgIHJldHVybiByZXBsYWNlTmFOKHRvRmxvYXQobmF2aWdhdG9yLmRldmljZU1lbW9yeSksIHVuZGVmaW5lZCk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcmVlblJlc29sdXRpb24oKSB7XG4gICAgdmFyIHMgPSBzY3JlZW47XG4gICAgLy8gU29tZSBicm93c2VycyByZXR1cm4gc2NyZWVuIHJlc29sdXRpb24gYXMgc3RyaW5ncywgZS5nLiBcIjEyMDBcIiwgaW5zdGVhZCBvZiBhIG51bWJlciwgZS5nLiAxMjAwLlxuICAgIC8vIEkgc3VzcGVjdCBpdCdzIGRvbmUgYnkgY2VydGFpbiBwbHVnaW5zIHRoYXQgcmFuZG9taXplIGJyb3dzZXIgcHJvcGVydGllcyB0byBwcmV2ZW50IGZpbmdlcnByaW50aW5nLlxuICAgIC8vIFNvbWUgYnJvd3NlcnMgZXZlbiByZXR1cm4gIHNjcmVlbiByZXNvbHV0aW9uIGFzIG5vdCBudW1iZXJzLlxuICAgIHZhciBwYXJzZURpbWVuc2lvbiA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gcmVwbGFjZU5hTih0b0ludCh2YWx1ZSksIG51bGwpOyB9O1xuICAgIHZhciBkaW1lbnNpb25zID0gW3BhcnNlRGltZW5zaW9uKHMud2lkdGgpLCBwYXJzZURpbWVuc2lvbihzLmhlaWdodCldO1xuICAgIGRpbWVuc2lvbnMuc29ydCgpLnJldmVyc2UoKTtcbiAgICByZXR1cm4gZGltZW5zaW9ucztcbn1cblxudmFyIHNjcmVlbkZyYW1lQ2hlY2tJbnRlcnZhbCA9IDI1MDA7XG52YXIgcm91bmRpbmdQcmVjaXNpb24gPSAxMDtcbi8vIFRoZSB0eXBlIGlzIHJlYWRvbmx5IHRvIHByb3RlY3QgZnJvbSB1bndhbnRlZCBtdXRhdGlvbnNcbnZhciBzY3JlZW5GcmFtZUJhY2t1cDtcbnZhciBzY3JlZW5GcmFtZVNpemVUaW1lb3V0SWQ7XG4vKipcbiAqIFN0YXJ0cyB3YXRjaGluZyB0aGUgc2NyZWVuIGZyYW1lIHNpemUuIFdoZW4gYSBub24temVybyBzaXplIGFwcGVhcnMsIHRoZSBzaXplIGlzIHNhdmVkIGFuZCB0aGUgd2F0Y2ggaXMgc3RvcHBlZC5cbiAqIExhdGVyLCB3aGVuIGBnZXRTY3JlZW5GcmFtZWAgcnVucywgaXQgd2lsbCByZXR1cm4gdGhlIHNhdmVkIG5vbi16ZXJvIHNpemUgaWYgdGhlIGN1cnJlbnQgc2l6ZSBpcyBudWxsLlxuICpcbiAqIFRoaXMgdHJpY2sgaXMgcmVxdWlyZWQgdG8gbWl0aWdhdGUgdGhlIGZhY3QgdGhhdCB0aGUgc2NyZWVuIGZyYW1lIHR1cm5zIG51bGwgaW4gc29tZSBjYXNlcy5cbiAqIFNlZSBtb3JlIG9uIHRoaXMgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqcy9pc3N1ZXMvNTY4XG4gKi9cbmZ1bmN0aW9uIHdhdGNoU2NyZWVuRnJhbWUoKSB7XG4gICAgaWYgKHNjcmVlbkZyYW1lU2l6ZVRpbWVvdXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGNoZWNrU2NyZWVuRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmcmFtZVNpemUgPSBnZXRDdXJyZW50U2NyZWVuRnJhbWUoKTtcbiAgICAgICAgaWYgKGlzRnJhbWVTaXplTnVsbChmcmFtZVNpemUpKSB7XG4gICAgICAgICAgICBzY3JlZW5GcmFtZVNpemVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGNoZWNrU2NyZWVuRnJhbWUsIHNjcmVlbkZyYW1lQ2hlY2tJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY3JlZW5GcmFtZUJhY2t1cCA9IGZyYW1lU2l6ZTtcbiAgICAgICAgICAgIHNjcmVlbkZyYW1lU2l6ZVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hlY2tTY3JlZW5GcmFtZSgpO1xufVxuZnVuY3Rpb24gZ2V0U2NyZWVuRnJhbWUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB3YXRjaFNjcmVlbkZyYW1lKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZyYW1lU2l6ZTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVTaXplID0gZ2V0Q3VycmVudFNjcmVlbkZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGcmFtZVNpemVOdWxsKGZyYW1lU2l6ZSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NyZWVuRnJhbWVCYWNrdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBfX3NwcmVhZEFycmF5cyhzY3JlZW5GcmFtZUJhY2t1cCldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0RnVsbHNjcmVlbkVsZW1lbnQoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgc2V0IHRoZSBzY3JlZW4gZnJhbWUgdG8gemVybyB3aGVuIHByb2dyYW1tYXRpYyBmdWxsc2NyZWVuIGlzIG9uLlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSBpcyBhIGNoYW5jZSBvZiBnZXR0aW5nIGEgbm9uLXplcm8gZnJhbWUgYWZ0ZXIgZXhpdGluZyB0aGUgZnVsbHNjcmVlbi5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlIG1vcmUgb24gdGhpcyBhdCBodHRwczovL2dpdGh1Yi5jb20vZmluZ2VycHJpbnRqcy9maW5nZXJwcmludGpzL2lzc3Vlcy81NjhcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZXhpdEZ1bGxzY3JlZW4oKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAvLyBTb21lIGJyb3dzZXJzIHNldCB0aGUgc2NyZWVuIGZyYW1lIHRvIHplcm8gd2hlbiBwcm9ncmFtbWF0aWMgZnVsbHNjcmVlbiBpcyBvbi5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgYSBjaGFuY2Ugb2YgZ2V0dGluZyBhIG5vbi16ZXJvIGZyYW1lIGFmdGVyIGV4aXRpbmcgdGhlIGZ1bGxzY3JlZW4uXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZSBtb3JlIG9uIHRoaXMgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqcy9pc3N1ZXMvNTY4XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVTaXplID0gZ2V0Q3VycmVudFNjcmVlbkZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGcmFtZVNpemVOdWxsKGZyYW1lU2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbkZyYW1lQmFja3VwID0gZnJhbWVTaXplO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmcmFtZVNpemVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbn1cbi8qKlxuICogU29tZXRpbWVzIHRoZSBhdmFpbGFibGUgc2NyZWVuIHJlc29sdXRpb24gY2hhbmdlcyBhIGJpdCwgZS5nLiAxOTAweDE0NDAg4oaSIDE5MDB4MTQzOS4gQSBwb3NzaWJsZSByZWFzb246IG1hY09TIERvY2tcbiAqIHNocmlua3MgdG8gZml0IG1vcmUgaWNvbnMgd2hlbiB0aGVyZSBpcyB0b28gbGl0dGxlIHNwYWNlLiBUaGUgcm91bmRpbmcgaXMgdXNlZCB0byBtaXRpZ2F0ZSB0aGUgZGlmZmVyZW5jZS5cbiAqL1xuZnVuY3Rpb24gZ2V0Um91bmRlZFNjcmVlbkZyYW1lKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHNjcmVlbkZyYW1lR2V0dGVyID0gZ2V0U2NyZWVuRnJhbWUoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZnJhbWVTaXplLCBwcm9jZXNzU2l6ZTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgc2NyZWVuRnJhbWVHZXR0ZXIoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBmcmFtZVNpemUgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NTaXplID0gZnVuY3Rpb24gKHNpZGVTaXplKSB7IHJldHVybiAoc2lkZVNpemUgPT09IG51bGwgPyBudWxsIDogcm91bmQoc2lkZVNpemUsIHJvdW5kaW5nUHJlY2lzaW9uKSk7IH07XG4gICAgICAgICAgICAgICAgICAgIC8vIEl0IG1pZ2h0IGxvb2sgbGlrZSBJIGRvbid0IGtub3cgYWJvdXQgYGZvcmAgYW5kIGBtYXBgLlxuICAgICAgICAgICAgICAgICAgICAvLyBJbiBmYWN0LCBzdWNoIGNvZGUgaXMgdXNlZCB0byBhdm9pZCBUeXBlU2NyaXB0IGlzc3VlcyB3aXRob3V0IHVzaW5nIGBhc2AuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBbcHJvY2Vzc1NpemUoZnJhbWVTaXplWzBdKSwgcHJvY2Vzc1NpemUoZnJhbWVTaXplWzFdKSwgcHJvY2Vzc1NpemUoZnJhbWVTaXplWzJdKSwgcHJvY2Vzc1NpemUoZnJhbWVTaXplWzNdKV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JlZW5GcmFtZSgpIHtcbiAgICB2YXIgcyA9IHNjcmVlbjtcbiAgICAvLyBTb21lIGJyb3dzZXJzIHJldHVybiBzY3JlZW4gcmVzb2x1dGlvbiBhcyBzdHJpbmdzLCBlLmcuIFwiMTIwMFwiLCBpbnN0ZWFkIG9mIGEgbnVtYmVyLCBlLmcuIDEyMDAuXG4gICAgLy8gSSBzdXNwZWN0IGl0J3MgZG9uZSBieSBjZXJ0YWluIHBsdWdpbnMgdGhhdCByYW5kb21pemUgYnJvd3NlciBwcm9wZXJ0aWVzIHRvIHByZXZlbnQgZmluZ2VycHJpbnRpbmcuXG4gICAgLy9cbiAgICAvLyBTb21lIGJyb3dzZXJzIChJRSwgRWRnZSDiiaQxOCkgZG9uJ3QgcHJvdmlkZSBgc2NyZWVuLmF2YWlsTGVmdGAgYW5kIGBzY3JlZW4uYXZhaWxUb3BgLiBUaGUgcHJvcGVydHkgdmFsdWVzIGFyZVxuICAgIC8vIHJlcGxhY2VkIHdpdGggMCBpbiBzdWNoIGNhc2VzIHRvIG5vdCBsb3NlIHRoZSBlbnRyb3B5IGZyb20gYHNjcmVlbi5hdmFpbFdpZHRoYCBhbmQgYHNjcmVlbi5hdmFpbEhlaWdodGAuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgcmVwbGFjZU5hTih0b0Zsb2F0KHMuYXZhaWxUb3ApLCBudWxsKSxcbiAgICAgICAgcmVwbGFjZU5hTih0b0Zsb2F0KHMud2lkdGgpIC0gdG9GbG9hdChzLmF2YWlsV2lkdGgpIC0gcmVwbGFjZU5hTih0b0Zsb2F0KHMuYXZhaWxMZWZ0KSwgMCksIG51bGwpLFxuICAgICAgICByZXBsYWNlTmFOKHRvRmxvYXQocy5oZWlnaHQpIC0gdG9GbG9hdChzLmF2YWlsSGVpZ2h0KSAtIHJlcGxhY2VOYU4odG9GbG9hdChzLmF2YWlsVG9wKSwgMCksIG51bGwpLFxuICAgICAgICByZXBsYWNlTmFOKHRvRmxvYXQocy5hdmFpbExlZnQpLCBudWxsKSxcbiAgICBdO1xufVxuZnVuY3Rpb24gaXNGcmFtZVNpemVOdWxsKGZyYW1lU2l6ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICAgIGlmIChmcmFtZVNpemVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0SGFyZHdhcmVDb25jdXJyZW5jeSgpIHtcbiAgICAvLyBzb21ldGltZXMgaGFyZHdhcmUgY29uY3VycmVuY3kgaXMgYSBzdHJpbmdcbiAgICByZXR1cm4gcmVwbGFjZU5hTih0b0ludChuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSksIHVuZGVmaW5lZCk7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWV6b25lKCkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgRGF0ZVRpbWVGb3JtYXQgPSAoX2EgPSB3aW5kb3cuSW50bCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLkRhdGVUaW1lRm9ybWF0O1xuICAgIGlmIChEYXRlVGltZUZvcm1hdCkge1xuICAgICAgICB2YXIgdGltZXpvbmUgPSBuZXcgRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgICAgICAgaWYgKHRpbWV6b25lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZXpvbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aW1lem9uZSBuYW1lc1xuICAgIC8vIFRoZSBtaW51cyBpcyBpbnRlbnRpb25hbCBiZWNhdXNlIHRoZSBKUyBvZmZzZXQgaXMgb3Bwb3NpdGUgdG8gdGhlIHJlYWwgb2Zmc2V0XG4gICAgdmFyIG9mZnNldCA9IC1nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHJldHVybiBcIlVUQ1wiICsgKG9mZnNldCA+PSAwID8gJysnIDogJycpICsgTWF0aC5hYnMob2Zmc2V0KTtcbn1cbmZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0KCkge1xuICAgIHZhciBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBUaGUgdGltZXpvbmUgb2Zmc2V0IG1heSBjaGFuZ2Ugb3ZlciB0aW1lIGR1ZSB0byBkYXlsaWdodCBzYXZpbmcgdGltZSAoRFNUKSBzaGlmdHMuXG4gICAgLy8gVGhlIG5vbi1EU1QgdGltZXpvbmUgb2Zmc2V0IGlzIHVzZWQgYXMgdGhlIHJlc3VsdCB0aW1lem9uZSBvZmZzZXQuXG4gICAgLy8gU2luY2UgdGhlIERTVCBzZWFzb24gZGlmZmVycyBpbiB0aGUgbm9ydGhlcm4gYW5kIHRoZSBzb3V0aGVybiBoZW1pc3BoZXJlcyxcbiAgICAvLyBib3RoIEphbnVhcnkgYW5kIEp1bHkgdGltZXpvbmVzIG9mZnNldHMgYXJlIGNvbnNpZGVyZWQuXG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgIC8vIGBnZXRUaW1lem9uZU9mZnNldGAgcmV0dXJucyBhIG51bWJlciBhcyBhIHN0cmluZyBpbiBzb21lIHVuaWRlbnRpZmllZCBjYXNlc1xuICAgIHRvRmxvYXQobmV3IERhdGUoY3VycmVudFllYXIsIDAsIDEpLmdldFRpbWV6b25lT2Zmc2V0KCkpLCB0b0Zsb2F0KG5ldyBEYXRlKGN1cnJlbnRZZWFyLCA2LCAxKS5nZXRUaW1lem9uZU9mZnNldCgpKSk7XG59XG5cbmZ1bmN0aW9uIGdldFNlc3Npb25TdG9yYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIXdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8qIFNlY3VyaXR5RXJyb3Igd2hlbiByZWZlcmVuY2luZyBpdCBtZWFucyBpdCBleGlzdHMgKi9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03ODE0NDdcbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gISF3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBTZWN1cml0eUVycm9yIHdoZW4gcmVmZXJlbmNpbmcgaXQgbWVhbnMgaXQgZXhpc3RzICovXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhlZERCKCkge1xuICAgIC8vIElFIGFuZCBFZGdlIGRvbid0IGFsbG93IGFjY2Vzc2luZyBpbmRleGVkREIgaW4gcHJpdmF0ZSBtb2RlLCB0aGVyZWZvcmUgSUUgYW5kIEVkZ2Ugd2lsbCBoYXZlIGRpZmZlcmVudFxuICAgIC8vIHZpc2l0b3IgaWRlbnRpZmllciBpbiBub3JtYWwgYW5kIHByaXZhdGUgbW9kZXMuXG4gICAgaWYgKGlzVHJpZGVudCgpIHx8IGlzRWRnZUhUTUwoKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gISF3aW5kb3cuaW5kZXhlZERCO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBTZWN1cml0eUVycm9yIHdoZW4gcmVmZXJlbmNpbmcgaXQgbWVhbnMgaXQgZXhpc3RzICovXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0T3BlbkRhdGFiYXNlKCkge1xuICAgIHJldHVybiAhIXdpbmRvdy5vcGVuRGF0YWJhc2U7XG59XG5cbmZ1bmN0aW9uIGdldENwdUNsYXNzKCkge1xuICAgIHJldHVybiBuYXZpZ2F0b3IuY3B1Q2xhc3M7XG59XG5cbmZ1bmN0aW9uIGdldFBsYXRmb3JtKCkge1xuICAgIC8vIEFuZHJvaWQgQ2hyb21lIDg2IGFuZCA4NyBhbmQgQW5kcm9pZCBGaXJlZm94IDgwIGFuZCA4NCBkb24ndCBtb2NrIHRoZSBwbGF0Zm9ybSB2YWx1ZSB3aGVuIGRlc2t0b3AgbW9kZSBpcyByZXF1ZXN0ZWRcbiAgICB2YXIgcGxhdGZvcm0gPSBuYXZpZ2F0b3IucGxhdGZvcm07XG4gICAgLy8gaU9TIG1vY2tzIHRoZSBwbGF0Zm9ybSB2YWx1ZSB3aGVuIGRlc2t0b3AgdmVyc2lvbiBpcyByZXF1ZXN0ZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvaXNzdWVzLzUxNFxuICAgIC8vIGlQYWQgdXNlcyBkZXNrdG9wIG1vZGUgYnkgZGVmYXVsdCBzaW5jZSBpT1MgMTNcbiAgICAvLyBUaGUgdmFsdWUgaXMgJ01hY0ludGVsJyBvbiBNMSBNYWNzXG4gICAgLy8gVGhlIHZhbHVlIGlzICdpUGhvbmUnIG9uIGlQb2QgVG91Y2hcbiAgICBpZiAocGxhdGZvcm0gPT09ICdNYWNJbnRlbCcpIHtcbiAgICAgICAgaWYgKGlzV2ViS2l0KCkgJiYgIWlzRGVza3RvcFNhZmFyaSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNJUGFkKCkgPyAnaVBhZCcgOiAnaVBob25lJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGxhdGZvcm07XG59XG5cbmZ1bmN0aW9uIGdldFZlbmRvcigpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnZlbmRvciB8fCAnJztcbn1cblxuLyoqXG4gKiBDaGVja3MgZm9yIGJyb3dzZXItc3BlY2lmaWMgKG5vdCBlbmdpbmUgc3BlY2lmaWMpIGdsb2JhbCB2YXJpYWJsZXMgdG8gdGVsbCBicm93c2VycyB3aXRoIHRoZSBzYW1lIGVuZ2luZSBhcGFydC5cbiAqIE9ubHkgc29tZXdoYXQgcG9wdWxhciBicm93c2VycyBhcmUgY29uc2lkZXJlZC5cbiAqL1xuZnVuY3Rpb24gZ2V0VmVuZG9yRmxhdm9ycygpIHtcbiAgICB2YXIgZmxhdm9ycyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBbXG4gICAgICAgIC8vIEJsaW5rIGFuZCBzb21lIGJyb3dzZXJzIG9uIGlPU1xuICAgICAgICAnY2hyb21lJyxcbiAgICAgICAgLy8gU2FmYXJpIG9uIG1hY09TXG4gICAgICAgICdzYWZhcmknLFxuICAgICAgICAvLyBDaHJvbWUgb24gaU9TIChjaGVja2VkIGluIDg1IG9uIDEzIGFuZCA4NyBvbiAxNClcbiAgICAgICAgJ19fY3JXZWInLFxuICAgICAgICAnX19nQ3JXZWInLFxuICAgICAgICAvLyBZYW5kZXggQnJvd3NlciBvbiBpT1MsIG1hY09TIGFuZCBBbmRyb2lkIChjaGVja2VkIGluIDIxLjIgb24gaU9TIDE0LCBtYWNPUyBhbmQgQW5kcm9pZClcbiAgICAgICAgJ3lhbmRleCcsXG4gICAgICAgIC8vIFlhbmRleCBCcm93c2VyIG9uIGlPUyAoY2hlY2tlZCBpbiAyMS4yIG9uIDE0KVxuICAgICAgICAnX195YicsXG4gICAgICAgICdfX3licm8nLFxuICAgICAgICAvLyBGaXJlZm94IG9uIGlPUyAoY2hlY2tlZCBpbiAzMiBvbiAxNClcbiAgICAgICAgJ19fZmlyZWZveF9fJyxcbiAgICAgICAgLy8gRWRnZSBvbiBpT1MgKGNoZWNrZWQgaW4gNDYgb24gMTQpXG4gICAgICAgICdfX2VkZ2VUcmFja2luZ1ByZXZlbnRpb25TdGF0aXN0aWNzJyxcbiAgICAgICAgJ3dlYmtpdCcsXG4gICAgICAgIC8vIE9wZXJhIFRvdWNoIG9uIGlPUyAoY2hlY2tlZCBpbiAyLjYgb24gMTQpXG4gICAgICAgICdvcHJ0JyxcbiAgICAgICAgLy8gU2Ftc3VuZyBJbnRlcm5ldCBvbiBBbmRyb2lkIChjaGVja2VkIGluIDExLjEpXG4gICAgICAgICdzYW1zdW5nQXInLFxuICAgICAgICAvLyBVQyBCcm93c2VyIG9uIEFuZHJvaWQgKGNoZWNrZWQgaW4gMTIuMTAgYW5kIDEzLjApXG4gICAgICAgICd1Y3dlYicsXG4gICAgICAgICdVQ1NoZWxsSmF2YScsXG4gICAgICAgIC8vIFB1ZmZpbiBvbiBBbmRyb2lkIChjaGVja2VkIGluIDkuMClcbiAgICAgICAgJ3B1ZmZpbkRldmljZScsXG4gICAgXTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgdmFyIHZhbHVlID0gd2luZG93W2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBmbGF2b3JzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxhdm9ycy5zb3J0KCk7XG59XG5cbi8qKlxuICogbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQgY2Fubm90IGRldGVjdCBjdXN0b20gb3IgbnVhbmNlZCBjb29raWUgYmxvY2tpbmcgY29uZmlndXJhdGlvbnMuIEZvciBleGFtcGxlLCB3aGVuIGJsb2NraW5nXG4gKiBjb29raWVzIHZpYSB0aGUgQWR2YW5jZWQgUHJpdmFjeSBTZXR0aW5ncyBpbiBJRTksIGl0IGFsd2F5cyByZXR1cm5zIHRydWUuIEFuZCB0aGVyZSBoYXZlIGJlZW4gaXNzdWVzIGluIHRoZSBwYXN0IHdpdGhcbiAqIHNpdGUtc3BlY2lmaWMgZXhjZXB0aW9ucy4gRG9uJ3QgcmVseSBvbiBpdC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb29raWVzLmpzIFRha2VuIGZyb20gaGVyZVxuICovXG5mdW5jdGlvbiBhcmVDb29raWVzRW5hYmxlZCgpIHtcbiAgICB2YXIgZCA9IGRvY3VtZW50O1xuICAgIC8vIFRha2VuIGZyb20gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2Nvb2tpZXMuanNcbiAgICAvLyBuYXZpZ2F0b3IuY29va2llRW5hYmxlZCBjYW5ub3QgZGV0ZWN0IGN1c3RvbSBvciBudWFuY2VkIGNvb2tpZSBibG9ja2luZyBjb25maWd1cmF0aW9ucy4gRm9yIGV4YW1wbGUsIHdoZW4gYmxvY2tpbmdcbiAgICAvLyBjb29raWVzIHZpYSB0aGUgQWR2YW5jZWQgUHJpdmFjeSBTZXR0aW5ncyBpbiBJRTksIGl0IGFsd2F5cyByZXR1cm5zIHRydWUuIEFuZCB0aGVyZSBoYXZlIGJlZW4gaXNzdWVzIGluIHRoZSBwYXN0XG4gICAgLy8gd2l0aCBzaXRlLXNwZWNpZmljIGV4Y2VwdGlvbnMuIERvbid0IHJlbHkgb24gaXQuXG4gICAgLy8gdHJ5Li5jYXRjaCBiZWNhdXNlIHNvbWUgaW4gc2l0dWF0aW9ucyBgZG9jdW1lbnQuY29va2llYCBpcyBleHBvc2VkIGJ1dCB0aHJvd3MgYVxuICAgIC8vIFNlY3VyaXR5RXJyb3IgaWYgeW91IHRyeSB0byBhY2Nlc3MgaXQ7IGUuZy4gZG9jdW1lbnRzIGNyZWF0ZWQgZnJvbSBkYXRhIFVSSXNcbiAgICAvLyBvciBpbiBzYW5kYm94ZWQgaWZyYW1lcyAoZGVwZW5kaW5nIG9uIGZsYWdzL2NvbnRleHQpXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQ3JlYXRlIGNvb2tpZVxuICAgICAgICBkLmNvb2tpZSA9ICdjb29raWV0ZXN0PTE7IFNhbWVTaXRlPVN0cmljdDsnO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZC5jb29raWUuaW5kZXhPZignY29va2lldGVzdD0nKSAhPT0gLTE7XG4gICAgICAgIC8vIERlbGV0ZSBjb29raWVcbiAgICAgICAgZC5jb29raWUgPSAnY29va2lldGVzdD0xOyBTYW1lU2l0ZT1TdHJpY3Q7IGV4cGlyZXM9VGh1LCAwMS1KYW4tMTk3MCAwMDowMDowMSBHTVQnO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG52YXIgZGVjb2RlQmFzZTY0ID0gYXRvYjsgLy8gSnVzdCBmb3IgYmV0dGVyIG1pbmlmaWNhdGlvblxuLyoqXG4gKiBPbmx5IHNpbmdsZSBlbGVtZW50IHNlbGVjdG9yIGFyZSBzdXBwb3J0ZWQgKG5vIG9wZXJhdG9ycyBsaWtlIHNwYWNlLCArLCA+LCBldGMpLlxuICogYGVtYmVkYCBhbmQgYHBvc2l0aW9uOiBmaXhlZDtgIHdpbGwgYmUgY29uc2lkZXJlZCBhcyBibG9ja2VkIGFueXdheSBiZWNhdXNlIGl0IGFsd2F5cyBoYXMgbm8gb2Zmc2V0UGFyZW50LlxuICogQXZvaWQgYGlmcmFtZWAgYW5kIGFueXRoaW5nIHdpdGggYFtzcmM9XWAgYmVjYXVzZSB0aGV5IHByb2R1Y2UgZXhjZXNzIEhUVFAgcmVxdWVzdHMuXG4gKlxuICogVGhlIFwiaW5hcHByb3ByaWF0ZVwiIHNlbGVjdG9ycyBhcmUgb2JmdXNjYXRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvaXNzdWVzLzczNC5cbiAqXG4gKiBTZWUgZG9jcy9jb250ZW50X2Jsb2NrZXJzLm1kIHRvIGxlYXJuIGhvdyB0byBtYWtlIHRoZSBsaXN0XG4gKi9cbnZhciBmaWx0ZXJzID0ge1xuICAgIGFicEluZG86IFtcbiAgICAgICAgJyNJa2xhbi1NZWxheWFuZycsXG4gICAgICAgICcjS29sb20tSWtsYW4tNzI4JyxcbiAgICAgICAgJyNTaWRlYmFySWtsYW4td3JhcHBlcicsXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0MGFYUnNaVDBpTjI1aFoyRWdjRzlyWlhJaUlHbGQnKSxcbiAgICAgICAgJ1t0aXRsZT1cIkFMSUVOQk9MQVwiIGldJyxcbiAgICBdLFxuICAgIGFicHZuOiBbXG4gICAgICAgICcjcXVhbmdjYW9tYicsXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG1sdmMwRmtjMmx2YzBGa2N5MXNZWGx2ZFhRPScpLFxuICAgICAgICAnLnF1YW5nY2FvJyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdXMmh5WldaZVBTSm9kSFJ3Y3pvdkwzSTRPQzUyYmk4aVhRPT0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdXMmh5WldaZVBTSm9kSFJ3Y3pvdkwzcGlaWFF1ZG00dklsMD0nKSxcbiAgICBdLFxuICAgIGFkQmxvY2tGaW5sYW5kOiBbXG4gICAgICAgICcubWFpbm9zdGlsYScsXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG5Od2IyNXpiM0pwZEE9PScpLFxuICAgICAgICAnLnlsYW1haW5vcycsXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1LajBpTDJOc2FXTnJkR2h5WjJndVlYTndQeUpkJyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1YajBpYUhSMGNITTZMeTloY0hBdWNtVmhaSEJsWVdzdVkyOXRMMkZrY3lKZCcpLFxuICAgIF0sXG4gICAgYWRCbG9ja1BlcnNpYW46IFsnI25hdmJhcl9ub3RpY2VfNTAnLCAnLmthZHInLCAnVEFCTEVbd2lkdGg9XCIxNDBweFwiXScsICcjZGl2QWdhaGknLCBkZWNvZGVCYXNlNjQoJ0kyRmtNbDlwYm14cGJtVT0nKV0sXG4gICAgYWRCbG9ja1dhcm5pbmdSZW1vdmFsOiBbXG4gICAgICAgICcjYWRibG9jay1ob25leXBvdCcsXG4gICAgICAgICcuYWRibG9ja2VyLXJvb3QnLFxuICAgICAgICAnLndwX2FkYmxvY2tfZGV0ZWN0JyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdMbWhsWVdSbGNpMWliRzlqYTJWa0xXRmsnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdJMkZrWDJKc2IyTnJaWEk9JyksXG4gICAgXSxcbiAgICBhZEd1YXJkQW5ub3lhbmNlczogWydhbXAtZW1iZWRbdHlwZT1cInplblwiXScsICcuaHMtc29zeWFsJywgJyNjb29raWVjb25zZW50ZGl2JywgJ2RpdltjbGFzc149XCJhcHBfZ2RwclwiXScsICcuYXMtb2lsJ10sXG4gICAgYWRHdWFyZEJhc2U6IFtcbiAgICAgICAgJy5CZXR0ZXJKc1BvcE92ZXJsYXknLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0kyRmtYek13TUZneU5UQT0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdJMkpoYm01bGNtWnNiMkYwTWpJPScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0kyRmtMV0poYm01bGNnPT0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdJMk5oYlhCaGFXZHVMV0poYm01bGNnPT0nKSxcbiAgICBdLFxuICAgIGFkR3VhcmRDaGluZXNlOiBbXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTGxwcFgyRmtYMkZmU0E9PScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtS2owaUwyOWtNREExTG1OdmJTSmQnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbUtqMGlMbWgwYUdKbGRETTBMbU52YlNKZCcpLFxuICAgICAgICAnLnFxX25yX2xhZCcsXG4gICAgICAgICcjd2lkZ2V0LXF1YW4nLFxuICAgIF0sXG4gICAgYWRHdWFyZEZyZW5jaDogW1xuICAgICAgICBkZWNvZGVCYXNlNjQoJ0kySnNiMk5yTFhacFpYZHpMV0ZrY3kxemFXUmxZbUZ5TFdKc2IyTnJMV0pzYjJOcicpLFxuICAgICAgICAnI3BhdmVQdWInLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0xtRmtMV1JsYzJ0MGIzQXRjbVZqZEdGdVoyeGwnKSxcbiAgICAgICAgJy5tb2JpbGVfYWRoZXNpb24nLFxuICAgICAgICAnLndpZGdldGFkdicsXG4gICAgXSxcbiAgICBhZEd1YXJkR2VybWFuOiBbXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG1KaGJtNWxjbWwwWlcxM1pYSmlkVzVuWDJobFlXUmZNUT09JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG1KdmVITjBZWEowZDJWeVluVnVadz09JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG5kbGNtSjFibWN6JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1YajBpYUhSMGNEb3ZMM2QzZHk1bGFYTXVaR1V2YVc1a1pYZ3VjR2gwYld3L2NtVm1hV1E5SWwwPScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtWGowaWFIUjBjSE02THk5M2QzY3VkR2x3YVdOdkxtTnZiUzgvWVdabWFXeHBZWFJsU1dROUlsMD0nKSxcbiAgICBdLFxuICAgIGFkR3VhcmRKYXBhbmVzZTogW1xuICAgICAgICAnI2thdWxpX3lhZF8xJyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlhSFIwY0RvdkwyRmtNaTUwY21GbVptbGpaMkYwWlM1dVpYUXZJbDA9JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTGw5d2IzQkpibDlwYm1acGJtbDBaVjloWkE9PScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0xtRmtaMjl2WjJ4bCcpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0xtRmtYM0psWjNWc1lYSXonKSxcbiAgICBdLFxuICAgIGFkR3VhcmRNb2JpbGU6IFtcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVzF3TFdGMWRHOHRZV1J6JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG1GdGNGOWhaQT09JyksXG4gICAgICAgICdhbXAtZW1iZWRbdHlwZT1cIjI0c21pXCJdJyxcbiAgICAgICAgJyNtZ2lkX2lmcmFtZTEnLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0kyRmtYMmx1ZG1sbGQxOWhjbVZoJyksXG4gICAgXSxcbiAgICBhZEd1YXJkUnVzc2lhbjogW1xuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtWGowaWFIUjBjSE02THk5aFpDNXNaWFJ0WldGa2N5NWpiMjB2SWwwPScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0xuSmxZMnhoYldFPScpLFxuICAgICAgICAnZGl2W2lkXj1cInNtaTJhZGJsb2NrXCJdJyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdaR2wyVzJsa1hqMGlRV1JHYjNoZlltRnVibVZ5WHlKZCcpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0kyRmtYM054ZFdGeVpRPT0nKSxcbiAgICBdLFxuICAgIGFkR3VhcmRTb2NpYWw6IFtcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlMeTkzZDNjdWMzUjFiV0pzWlhWd2IyNHVZMjl0TDNOMVltMXBkRDkxY213OUlsMD0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlMeTkwWld4bFozSmhiUzV0WlM5emFHRnlaUzkxY213L0lsMD0nKSxcbiAgICAgICAgJy5ldHN5LXR3ZWV0JyxcbiAgICAgICAgJyNpbmxpbmVTaGFyZScsXG4gICAgICAgICcucG9wdXAtc29jaWFsJyxcbiAgICBdLFxuICAgIGFkR3VhcmRTcGFuaXNoUG9ydHVndWVzZTogW1xuICAgICAgICAnI2JhcnJhUHVibGljaWRhZGUnLFxuICAgICAgICAnI1B1YmxpY2lkYWRlJyxcbiAgICAgICAgJyNwdWJsaUVzcGVjaWFsJyxcbiAgICAgICAgJyNxdWVUb29sdGlwJyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdXMmh5WldaZVBTSm9kSFJ3T2k4dllXUnpMbWRzYVhOd1lTNWpiMjB2SWwwPScpLFxuICAgIF0sXG4gICAgYWRHdWFyZFRyYWNraW5nUHJvdGVjdGlvbjogW1xuICAgICAgICAnI3Fvby1jb3VudGVyJyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlhSFIwY0RvdkwyTnNhV05yTG1odmRHeHZaeTV5ZFM4aVhRPT0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlhSFIwY0RvdkwyaHBkR052ZFc1MFpYSXVjblV2ZEc5d0wzTjBZWFF1Y0dod0lsMD0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlhSFIwY0RvdkwzUnZjQzV0WVdsc0xuSjFMMnAxYlhBaVhRPT0nKSxcbiAgICAgICAgJyN0b3AxMDBjb3VudGVyJyxcbiAgICBdLFxuICAgIGFkR3VhcmRUdXJraXNoOiBbXG4gICAgICAgICcjYmFja2thcGF0JyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdJM0psYTJ4aGJXaz0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlhSFIwY0RvdkwyRmtjMlZ5ZGk1dmJuUmxheTVqYjIwdWRISXZJbDA9JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1YajBpYUhSMGNEb3ZMMmw2YkdWdWVta3VZMjl0TDJOaGJYQmhhV2R1THlKZCcpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtWGowaWFIUjBjRG92TDNkM2R5NXBibk4wWVd4c1lXUnpMbTVsZEM4aVhRPT0nKSxcbiAgICBdLFxuICAgIGJ1bGdhcmlhbjogW1xuICAgICAgICBkZWNvZGVCYXNlNjQoJ2RHUWpabkpsWlc1bGRGOTBZV0pzWlY5aFpITT0nKSxcbiAgICAgICAgJyNlYV9pbnRleHRfZGl2JyxcbiAgICAgICAgJy5sYXBuaS1wb3Atb3ZlcicsXG4gICAgICAgICcjeGVuaXVtX2hvdF9vZmZlcnMnLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0kyNWxkMEZrJyksXG4gICAgXSxcbiAgICBlYXN5TGlzdDogW1xuICAgICAgICBkZWNvZGVCYXNlNjQoJ0kwRkVYME5QVGxSU1QweGZNamc9JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG5ObFkyOXVaQzF3YjNOMExXRmtjeTEzY21Gd2NHVnknKSxcbiAgICAgICAgJy51bml2ZXJzYWxib3hBRFZCT1gwMycsXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG1Ga2RtVnlkR2x6WlcxbGJuUXROekk0ZURrdycpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0xuTnhkV0Z5WlY5aFpITT0nKSxcbiAgICBdLFxuICAgIGVhc3lMaXN0Q2hpbmE6IFtcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbUtqMGlMbmRsYm5OcGVIVmxkR0Z1Wnk1amIyMHZJbDA9JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG1Gd2NHZDFhV1JsTFhkeVlYQmJiMjVqYkdsamF5bzlJbUpqWldKdmN5NWpiMjBpWFE9PScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0xtWnliMjUwY0dGblpVRmtkazA9JyksXG4gICAgICAgICcjdGFvdGFvbGUnLFxuICAgICAgICAnI2FhZm9vdC50b3BfYm94JyxcbiAgICBdLFxuICAgIGVhc3lMaXN0Q29va2llOiBbXG4gICAgICAgICcjQWRhQ29tcGxpYW5jZS5hcHAtbm90aWNlJyxcbiAgICAgICAgJy50ZXh0LWNlbnRlci5yZ3BkJyxcbiAgICAgICAgJy5wYW5lbC0tY29va2llJyxcbiAgICAgICAgJy5qcy1jb29raWVzLWFuZHJvbWVkYScsXG4gICAgICAgICcuZWx4dHItY29uc2VudCcsXG4gICAgXSxcbiAgICBlYXN5TGlzdEN6ZWNoU2xvdmFrOiBbXG4gICAgICAgICcjb25sYWpueS1zdGlja2VycycsXG4gICAgICAgIGRlY29kZUJhc2U2NCgnSTNKbGEyeGhiVzVwTFdKdmVBPT0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdMbkpsYTJ4aGJXRXRiV1ZuWVdKdllYSmsnKSxcbiAgICAgICAgJy5za2xpaycsXG4gICAgICAgIGRlY29kZUJhc2U2NCgnVzJsa1hqMGljMnRzYVd0U1pXdHNZVzFoSWwwPScpLFxuICAgIF0sXG4gICAgZWFzeUxpc3REdXRjaDogW1xuICAgICAgICBkZWNvZGVCYXNlNjQoJ0kyRmtkbVZ5ZEdWdWRHbGwnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdJM1pwY0VGa2JXRnlhM1JDWVc1dVpYSkNiRzlqYXc9PScpLFxuICAgICAgICAnLmFkc3Rla3N0JyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlhSFIwY0hNNkx5OTRiSFIxWW1VdWJtd3ZZMnhwWTJzdklsMD0nKSxcbiAgICAgICAgJyNzZW1pbG8tbHJlY3RhbmdsZScsXG4gICAgXSxcbiAgICBlYXN5TGlzdEdlcm1hbnk6IFtcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdJMEZrWDFkcGJqSmtZWGs9JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnSTNkbGNtSjFibWR6WW05NE16QXcnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlhSFIwY0RvdkwzZDNkeTV5YjNSc2FXTm9kR3RoY25SbGFTNWpiMjB2UDNOalBTSmQnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdJM2RsY21KMWJtZGZkMmxrWlhOcmVYTmpjbUZ3WlhKZmMyTnlaV1Z1JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1YajBpYUhSMGNEb3ZMMnhoYm1ScGJtY3VjR0Z5YTNCc1lYUjZhMkZ5ZEdWcExtTnZiUzgvWVdjOUlsMD0nKSxcbiAgICBdLFxuICAgIGVhc3lMaXN0SXRhbHk6IFtcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdMbUp2ZUY5aFpIWmZZVzV1ZFc1amFRPT0nKSxcbiAgICAgICAgJy5zYi1ib3gtcHViYmxpcmVkYXppb25hbGUnLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtWGowaWFIUjBjRG92TDJGbVptbHNhV0Y2YVc5dWFXRmtjeTV6Ym1GcExtbDBMeUpkJyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1YajBpYUhSMGNITTZMeTloWkhObGNuWmxjaTVvZEcxc0xtbDBMeUpkJyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1YajBpYUhSMGNITTZMeTloWm1acGJHbGhlbWx2Ym1saFpITXVjMjVoYVM1cGRDOGlYUT09JyksXG4gICAgXSxcbiAgICBlYXN5TGlzdExpdGh1YW5pYTogW1xuICAgICAgICBkZWNvZGVCYXNlNjQoJ0xuSmxhMnhoYlc5elgzUmhjbkJoY3c9PScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0xuSmxhMnhoYlc5elgyNTFiM0p2Wkc5eicpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ2FXMW5XMkZzZEQwaVVtVnJiR0Z0YVc1cGN5QnphM2xrWld4cGN5SmQnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdhVzFuVzJGc2REMGlSR1ZrYVd0MWIzUnBMbXgwSUhObGNuWmxjbWxoYVNKZCcpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ2FXMW5XMkZzZEQwaVNHOXpkR2x1WjJGeklGTmxjblpsY21saGFTNXNkQ0pkJyksXG4gICAgXSxcbiAgICBlc3RvbmlhbjogW2RlY29kZUJhc2U2NCgnUVZ0b2NtVm1LajBpYUhSMGNEb3ZMM0JoZVRSeVpYTjFiSFJ6TWpRdVpYVWlYUT09JyldLFxuICAgIGZhbmJveUFubm95YW5jZXM6IFtcbiAgICAgICAgJyNmZWVkYmFjay10YWInLFxuICAgICAgICAnI3RhYm9vbGEtYmVsb3ctYXJ0aWNsZScsXG4gICAgICAgICcuZmVlZGJ1cm5lckZlZWRCbG9jaycsXG4gICAgICAgICcud2lkZ2V0LWZlZWRidXJuZXItY291bnRlcicsXG4gICAgICAgICdbdGl0bGU9XCJTdWJzY3JpYmUgdG8gb3VyIGJsb2dcIl0nLFxuICAgIF0sXG4gICAgZmFuYm95QW50aUZhY2Vib29rOiBbJy51dGlsLWJhci1tb2R1bGUtZmlyZWZseS12aXNpYmxlJ10sXG4gICAgZmFuYm95RW5oYW5jZWRUcmFja2VyczogW1xuICAgICAgICAnLm9wZW4ucHVzaE1vZGFsJyxcbiAgICAgICAgJyNpc3N1ZW0tbGVha3ktcGF5d2FsbC1hcnRpY2xlcy16ZXJvLXJlbWFpbmluZy1uYWcnLFxuICAgICAgICAnI3NvdnJuX2NvbnRhaW5lcicsXG4gICAgICAgICdkaXZbY2xhc3MkPVwiLWhpZGVcIl1bem9vbXBhZ2UtZm9udHNpemVdW3N0eWxlPVwiZGlzcGxheTogYmxvY2s7XCJdJyxcbiAgICAgICAgJy5CbG9ja05hZ19fQ2FyZCcsXG4gICAgXSxcbiAgICBmYW5ib3lTb2NpYWw6IFtcbiAgICAgICAgJy50ZC10YWdzLWFuZC1zb2NpYWwtd3JhcHBlci1ib3gnLFxuICAgICAgICAnLnR3aXR0ZXJDb250YWluZXInLFxuICAgICAgICAnLnlvdXR1YmUtc29jaWFsJyxcbiAgICAgICAgJ2FbdGl0bGVePVwiTGlrZSB1cyBvbiBGYWNlYm9va1wiXScsXG4gICAgICAgICdpbWdbYWx0Xj1cIlNoYXJlIG9uIERpZ2dcIl0nLFxuICAgIF0sXG4gICAgZnJlbGx3aXRTd2VkaXNoOiBbXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1LajBpWTJGemFXNXZjSEp2TG5ObElsMWJkR0Z5WjJWMFBTSmZZbXhoYm1zaVhRPT0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbUtqMGlaRzlyZEc5eUxYTmxMbTl1Wld4cGJtc3ViV1VpWFE9PScpLFxuICAgICAgICAnYXJ0aWNsZS5jYXRlZ29yeS1zYW1hcmJldGUnLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1pHbDJMbWh2Ykdsa1FXUnonKSxcbiAgICAgICAgJ3VsLmFkc21vZGVybicsXG4gICAgXSxcbiAgICBncmVla0FkQmxvY2s6IFtcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdRVnRvY21WbUtqMGlZV1J0WVc0dWIzUmxibVYwTG1keUwyTnNhV05yUHlKZCcpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1FWdG9jbVZtS2owaWFIUjBjRG92TDJGNGFXRmlZVzV1WlhKekxtVjRiMlIxY3k1bmNpOGlYUT09JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnUVZ0b2NtVm1LajBpYUhSMGNEb3ZMMmx1ZEdWeVlXTjBhWFpsTG1admNuUm9ibVYwTG1keUwyTnNhV05yUHlKZCcpLFxuICAgICAgICAnRElWLmFnb3JlczMwMCcsXG4gICAgICAgICdUQUJMRS5hZHZyaWdodCcsXG4gICAgXSxcbiAgICBodW5nYXJpYW46IFtcbiAgICAgICAgJyNjZW1wX2RvYm96JyxcbiAgICAgICAgJy5vcHRpbW9uay1pZnJhbWUtY29udGFpbmVyJyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdMbUZrWDE5dFlXbHUnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdXMk5zWVhOektqMGlSMjl2WjJ4bFFXUnpJbDA9JyksXG4gICAgICAgICcjaGlyZGV0ZXNla19ib3gnLFxuICAgIF0sXG4gICAgaURvbnRDYXJlQWJvdXRDb29raWVzOiBbXG4gICAgICAgICcuYWxlcnQtaW5mb1tkYXRhLWJsb2NrLXRyYWNrKj1cIkNvb2tpZU5vdGljZVwiXScsXG4gICAgICAgICcuTW9kdWxlVGVtcGxhdGVDb29raWVJbmRpY2F0b3InLFxuICAgICAgICAnLm8tLWNvb2tpZXMtLWNvbnRhaW5lcicsXG4gICAgICAgICcuY29va2llLW1zZy1pbmZvLWNvbnRhaW5lcicsXG4gICAgICAgICcjY29va2llcy1wb2xpY3ktc3RpY2t5JyxcbiAgICBdLFxuICAgIGljZWxhbmRpY0FicDogW2RlY29kZUJhc2U2NCgnUVZ0b2NtVm1YajBpTDJaeVlXMWxkMjl5YXk5eVpYTnZkWEpqWlhNdlptOXliWE12WVdSekxtRnpjSGdpWFE9PScpXSxcbiAgICBsYXR2aWFuOiBbXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1QU0pvZEhSd09pOHZkM2QzTG5OaGJHbGtlbWx1YVM1c2RpOGlYVnR6ZEhsc1pUMGlaR2x6Y0d4aGVUb2dZbXh2WTJzN0lIZHBaSFJvT2lBeE1qQndlRHNnYUdWcFoyaDBPaUEwTScgK1xuICAgICAgICAgICAgJ0hCNE95QnZkbVZ5Wm14dmR6b2dhR2xrWkdWdU95QndiM05wZEdsdmJqb2djbVZzWVhScGRtVTdJbDA9JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1QU0pvZEhSd09pOHZkM2QzTG5OaGJHbGtlbWx1YVM1c2RpOGlYVnR6ZEhsc1pUMGlaR2x6Y0d4aGVUb2dZbXh2WTJzN0lIZHBaSFJvT2lBNE9IQjRPeUJvWldsbmFIUTZJRE14YycgK1xuICAgICAgICAgICAgJ0hnN0lHOTJaWEptYkc5M09pQm9hV1JrWlc0N0lIQnZjMmwwYVc5dU9pQnlaV3hoZEdsMlpUc2lYUT09JyksXG4gICAgXSxcbiAgICBsaXN0S3I6IFtcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbUtqMGlMeTloWkM1d2JHRnVZbkJzZFhNdVkyOHVhM0l2SWwwPScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ0kyeHBkbVZ5WlVGa1YzSmhjSEJsY2c9PScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtS2owaUx5OWhaSFl1YVcxaFpISmxjQzVqYnk1cmNpOGlYUT09JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnYVc1ekxtWmhjM1IyYVdWM0xXRmsnKSxcbiAgICAgICAgJy5yZXZlbnVlX3VuaXRfaXRlbS5kYWJsZScsXG4gICAgXSxcbiAgICBsaXN0ZUFyOiBbXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG1kbGJXbHVhVXhDTVVGaycpLFxuICAgICAgICAnLnJpZ2h0LWFuZC1sZWZ0LXNwb25zZXJzJyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbUtqMGlMbUZtYkdGdExtbHVabThpWFE9PScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtS2owaVltOXZjbUZ4TG05eVp5SmQnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbUtqMGlaSFZpYVhwNmJHVXVZMjl0TDJGeUx6OTFkRzFmYzI5MWNtTmxQU0pkJyksXG4gICAgXSxcbiAgICBsaXN0ZUZyOiBbXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1YajBpYUhSMGNEb3ZMM0J5YjIxdkxuWmhaRzl5TG1OdmJTOGlYUT09JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnSTJGa1kyOXVkR0ZwYm1WeVgzSmxZMmhsY21Ob1pRPT0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbUtqMGlkMlZpYjNKaGJXRXVabkl2Wm1ObmFTMWlhVzR2SWwwPScpLFxuICAgICAgICAnLnNpdGUtcHViLWludGVyc3RpdGllbCcsXG4gICAgICAgICdkaXZbaWRePVwiY3J0LVwiXVtkYXRhLWNyaXRlby1pZF0nLFxuICAgIF0sXG4gICAgb2ZmaWNpYWxQb2xpc2g6IFtcbiAgICAgICAgJyNjZW5lby1wbGFjZWhvbGRlci1jZW5lby0xMicsXG4gICAgICAgIGRlY29kZUJhc2U2NCgnVzJoeVpXWmVQU0pvZEhSd2N6b3ZMMkZtWmk1elpXNWthSFZpTG5Cc0x5SmQnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlhSFIwY0RvdkwyRmtkbTFoYm1GblpYSXVkR1ZqYUdaMWJpNXdiQzl5WldScGNtVmpkQzhpWFE9PScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtWGowaWFIUjBjRG92TDNkM2R5NTBjbWw2WlhJdWNHd3ZQM1YwYlY5emIzVnlZMlVpWFE9PScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1pHbDJJM05yWVhCcFpXTmZZV1E9JyksXG4gICAgXSxcbiAgICBybzogW1xuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtWGowaUx5OWhabVowY21zdVlXeDBaWGd1Y204dlEyOTFiblJsY2k5RGJHbGpheUpkJyksXG4gICAgICAgICdhW2hyZWZePVwiL21hZ2F6aW4vXCJdJyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbVhqMGlhSFIwY0hNNkx5OWliR0ZqYTJaeWFXUmhlWE5oYkdWekxuSnZMM1J5YXk5emFHOXdMeUpkJyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1YajBpYUhSMGNITTZMeTlsZG1WdWRDNHljR1Z5Wm05eWJXRnVkQzVqYjIwdlpYWmxiblJ6TDJOc2FXTnJJbDA9JyksXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1YajBpYUhSMGNITTZMeTlzTG5CeWIyWnBkSE5vWVhKbExuSnZMeUpkJyksXG4gICAgXSxcbiAgICBydUFkOiBbXG4gICAgICAgIGRlY29kZUJhc2U2NCgnWVZ0b2NtVm1LajBpTHk5bVpXSnlZWEpsTG5KMUx5SmQnKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdZVnRvY21WbUtqMGlMeTkxZEdsdFp5NXlkUzhpWFE9PScpLFxuICAgICAgICBkZWNvZGVCYXNlNjQoJ1lWdG9jbVZtS2owaU9pOHZZMmhwYTJsa2FXdHBMbkoxSWwwPScpLFxuICAgICAgICAnI3BnZWxkaXonLFxuICAgICAgICAnLnlhbmRleC1ydGItYmxvY2snLFxuICAgIF0sXG4gICAgdGhhaUFkczogW1xuICAgICAgICAnYVtocmVmKj1tYWNhdS11dGEtcG9wdXBdJyxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdJMkZrY3kxbmIyOW5iR1V0Yldsa1pHeGxYM0psWTNSaGJtZHNaUzFuY205MWNBPT0nKSxcbiAgICAgICAgZGVjb2RlQmFzZTY0KCdMbUZrY3pNd01ITT0nKSxcbiAgICAgICAgJy5idW1xJyxcbiAgICAgICAgJy5pbWcta29zYW5hJyxcbiAgICBdLFxuICAgIHdlYkFubm95YW5jZXNVbHRyYWxpc3Q6IFtcbiAgICAgICAgJyNtb2Qtc29jaWFsLXNoYXJlLTInLFxuICAgICAgICAnI3NvY2lhbC10b29scycsXG4gICAgICAgIGRlY29kZUJhc2U2NCgnTG1OMGNHd3RablZzYkdKaGJtNWxjZz09JyksXG4gICAgICAgICcuemVyZ25ldC1yZWNvbW1lbmQnLFxuICAgICAgICAnLnl0LmJ0bi1saW5rLmJ0bi1tZC5idG4nLFxuICAgIF0sXG59O1xuLyoqXG4gKiBUaGUgb3JkZXIgb2YgdGhlIHJldHVybmVkIGFycmF5IG1lYW5zIG5vdGhpbmcgKGl0J3MgYWx3YXlzIHNvcnRlZCBhbHBoYWJldGljYWxseSkuXG4gKlxuICogTm90aWNlIHRoYXQgdGhlIHNvdXJjZSBpcyBzbGlnaHRseSB1bnN0YWJsZS5cbiAqIFNhZmFyaSBwcm92aWRlcyBhIDItdGFwcyB3YXkgdG8gZGlzYWJsZSBhbGwgY29udGVudCBibG9ja2VycyBvbiBhIHBhZ2UgdGVtcG9yYXJpbHkuXG4gKiBBbHNvIGNvbnRlbnQgYmxvY2tlcnMgY2FuIGJlIGRpc2FibGVkIHBlcm1hbmVudGx5IGZvciBhIGRvbWFpbiwgYnV0IGl0IHJlcXVpcmVzIDQgdGFwcy5cbiAqIFNvIGVtcHR5IGFycmF5IHNob3VsZG4ndCBiZSB0cmVhdGVkIGFzIFwibm8gYmxvY2tlcnNcIiwgaXQgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgXCJubyBzaWduYWxcIi5cbiAqIElmIHlvdSBhcmUgYSB3ZWJzaXRlIG93bmVyLCBkb24ndCBtYWtlIHlvdXIgdmlzaXRvcnMgd2FudCB0byBkaXNhYmxlIGNvbnRlbnQgYmxvY2tlcnMuXG4gKi9cbmZ1bmN0aW9uIGdldERvbUJsb2NrZXJzKF9hKSB7XG4gICAgdmFyIGRlYnVnID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5kZWJ1ZztcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmaWx0ZXJOYW1lcywgYWxsU2VsZWN0b3JzLCBibG9ja2VkU2VsZWN0b3JzLCBhY3RpdmVCbG9ja2VycztcbiAgICAgICAgdmFyIF9iO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQXBwbGljYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdW5kZWZpbmVkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJOYW1lcyA9IE9iamVjdC5rZXlzKGZpbHRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBhbGxTZWxlY3RvcnMgPSAoX2IgPSBbXSkuY29uY2F0LmFwcGx5KF9iLCBmaWx0ZXJOYW1lcy5tYXAoZnVuY3Rpb24gKGZpbHRlck5hbWUpIHsgcmV0dXJuIGZpbHRlcnNbZmlsdGVyTmFtZV07IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0QmxvY2tlZFNlbGVjdG9ycyhhbGxTZWxlY3RvcnMpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrZWRTZWxlY3RvcnMgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnREZWJ1ZyhibG9ja2VkU2VsZWN0b3JzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVCbG9ja2VycyA9IGZpbHRlck5hbWVzLmZpbHRlcihmdW5jdGlvbiAoZmlsdGVyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9ycyA9IGZpbHRlcnNbZmlsdGVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2tlZENvdW50ID0gY291bnRUcnV0aHkoc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHsgcmV0dXJuIGJsb2NrZWRTZWxlY3RvcnNbc2VsZWN0b3JdOyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2tlZENvdW50ID4gc2VsZWN0b3JzLmxlbmd0aCAqIDAuNjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJsb2NrZXJzLnNvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGFjdGl2ZUJsb2NrZXJzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0FwcGxpY2FibGUoKSB7XG4gICAgLy8gU2FmYXJpIChkZXNrdG9wIGFuZCBtb2JpbGUpIGFuZCBhbGwgQW5kcm9pZCBicm93c2VycyBrZWVwIGNvbnRlbnQgYmxvY2tlcnMgaW4gYm90aCByZWd1bGFyIGFuZCBwcml2YXRlIG1vZGVcbiAgICByZXR1cm4gaXNXZWJLaXQoKSB8fCBpc0FuZHJvaWQoKTtcbn1cbmZ1bmN0aW9uIGdldEJsb2NrZWRTZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGQsIHJvb3QsIGVsZW1lbnRzLCBibG9ja2VkU2VsZWN0b3JzLCBpLCBlbGVtZW50LCBob2xkZXIsIGk7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGQgPSBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICAgICAgcm9vdCA9IGQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gbmV3IEFycmF5KHNlbGVjdG9ycy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBibG9ja2VkU2VsZWN0b3JzID0ge30gLy8gU2V0KCkgaXNuJ3QgdXNlZCBqdXN0IGluIGNhc2Ugc29tZWJvZHkgbmVlZCBvbGRlciBicm93c2VyIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVNob3cocm9vdCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0IGNyZWF0ZSBhbGwgZWxlbWVudHMgdGhhdCBjYW4gYmUgYmxvY2tlZC4gSWYgdGhlIERPTSBzdGVwcyBiZWxvdyBhcmUgZG9uZSBpbiBhIHNpbmdsZSBjeWNsZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gYnJvd3NlciB3aWxsIGFsdGVybmF0ZSB0cmVlIG1vZGlmaWNhdGlvbiBhbmQgbGF5b3V0IHJlYWRpbmcsIHRoYXQgaXMgdmVyeSBzbG93LlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VsZWN0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JUb0VsZW1lbnQoc2VsZWN0b3JzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvbGRlciA9IGQuY3JlYXRlRWxlbWVudCgnZGl2JykgLy8gUHJvdGVjdHMgZnJvbSB1bndhbnRlZCBlZmZlY3RzIG9mIGArYCBhbmQgYH5gIHNlbGVjdG9ycyBvZiBmaWx0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVNob3coaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvbGRlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBpZiAoISFkLmJvZHkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3YWl0KDUwKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlbiBjaGVjayB3aGljaCBvZiB0aGUgZWxlbWVudHMgYXJlIGJsb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxlY3RvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRzW2ldLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja2VkU2VsZWN0b3JzW3NlbGVjdG9yc1tpXV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZW4gcmVtb3ZlIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gcm9vdC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQocm9vdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGJsb2NrZWRTZWxlY3RvcnNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZvcmNlU2hvdyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycsICdpbXBvcnRhbnQnKTtcbn1cbmZ1bmN0aW9uIHByaW50RGVidWcoYmxvY2tlZFNlbGVjdG9ycykge1xuICAgIHZhciBtZXNzYWdlID0gJ0RPTSBibG9ja2VycyBkZWJ1ZzpcXG5gYGAnO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGZpbHRlck5hbWUgPSBfYVtfaV07XG4gICAgICAgIG1lc3NhZ2UgKz0gXCJcXG5cIiArIGZpbHRlck5hbWUgKyBcIjpcIjtcbiAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IGZpbHRlcnNbZmlsdGVyTmFtZV07IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBfY1tfYl07XG4gICAgICAgICAgICBtZXNzYWdlICs9IFwiXFxuICBcIiArIHNlbGVjdG9yICsgXCIgXCIgKyAoYmxvY2tlZFNlbGVjdG9yc1tzZWxlY3Rvcl0gPyAn8J+aqycgOiAn4p6h77iPJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cgaXMgb2sgaGVyZSBiZWNhdXNlIGl0J3MgdW5kZXIgYSBkZWJ1ZyBjbGF1c2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UgKyBcIlxcbmBgYFwiKTtcbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AbWVkaWEvY29sb3ItZ2FtdXRcbiAqL1xuZnVuY3Rpb24gZ2V0Q29sb3JHYW11dCgpIHtcbiAgICAvLyByZWMyMDIwIGluY2x1ZGVzIHAzIGFuZCBwMyBpbmNsdWRlcyBzcmdiXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IFsncmVjMjAyMCcsICdwMycsICdzcmdiJ107IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBnYW11dCA9IF9hW19pXTtcbiAgICAgICAgaWYgKG1hdGNoTWVkaWEoXCIoY29sb3ItZ2FtdXQ6IFwiICsgZ2FtdXQgKyBcIilcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIGdhbXV0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQG1lZGlhL2ludmVydGVkLWNvbG9yc1xuICovXG5mdW5jdGlvbiBhcmVDb2xvcnNJbnZlcnRlZCgpIHtcbiAgICBpZiAoZG9lc01hdGNoJDQoJ2ludmVydGVkJykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChkb2VzTWF0Y2gkNCgnbm9uZScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRvZXNNYXRjaCQ0KHZhbHVlKSB7XG4gICAgcmV0dXJuIG1hdGNoTWVkaWEoXCIoaW52ZXJ0ZWQtY29sb3JzOiBcIiArIHZhbHVlICsgXCIpXCIpLm1hdGNoZXM7XG59XG5cbi8qKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQG1lZGlhL2ZvcmNlZC1jb2xvcnNcbiAqL1xuZnVuY3Rpb24gYXJlQ29sb3JzRm9yY2VkKCkge1xuICAgIGlmIChkb2VzTWF0Y2gkMygnYWN0aXZlJykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChkb2VzTWF0Y2gkMygnbm9uZScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRvZXNNYXRjaCQzKHZhbHVlKSB7XG4gICAgcmV0dXJuIG1hdGNoTWVkaWEoXCIoZm9yY2VkLWNvbG9yczogXCIgKyB2YWx1ZSArIFwiKVwiKS5tYXRjaGVzO1xufVxuXG52YXIgbWF4VmFsdWVUb0NoZWNrID0gMTAwO1xuLyoqXG4gKiBJZiB0aGUgZGlzcGxheSBpcyBtb25vY2hyb21lIChlLmcuIGJsYWNrJndoaXRlKSwgdGhlIHZhbHVlIHdpbGwgYmUg4omlMCBhbmQgd2lsbCBtZWFuIHRoZSBudW1iZXIgb2YgYml0cyBwZXIgcGl4ZWwuXG4gKiBJZiB0aGUgZGlzcGxheSBpcyBub3QgbW9ub2Nocm9tZSwgdGhlIHJldHVybmVkIHZhbHVlIHdpbGwgYmUgMC5cbiAqIElmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGlzIGZlYXR1cmUsIHRoZSByZXR1cm5lZCB2YWx1ZSB3aWxsIGJlIHVuZGVmaW5lZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AbWVkaWEvbW9ub2Nocm9tZVxuICovXG5mdW5jdGlvbiBnZXRNb25vY2hyb21lRGVwdGgoKSB7XG4gICAgaWYgKCFtYXRjaE1lZGlhKCcobWluLW1vbm9jaHJvbWU6IDApJykubWF0Y2hlcykge1xuICAgICAgICAvLyBUaGUgbWVkaWEgZmVhdHVyZSBpc24ndCBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQSB2YXJpYXRpb24gb2YgYmluYXJ5IHNlYXJjaCBhbGdvcml0aG0gY2FuIGJlIHVzZWQgaGVyZS5cbiAgICAvLyBCdXQgc2luY2UgZXhwZWN0ZWQgdmFsdWVzIGFyZSB2ZXJ5IHNtYWxsICjiiaQxMCksIHRoZXJlIGlzIG5vIHNlbnNlIGluIGFkZGluZyB0aGUgY29tcGxleGl0eS5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBtYXhWYWx1ZVRvQ2hlY2s7ICsraSkge1xuICAgICAgICBpZiAobWF0Y2hNZWRpYShcIihtYXgtbW9ub2Nocm9tZTogXCIgKyBpICsgXCIpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignVG9vIGhpZ2ggdmFsdWUnKTtcbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNS8jcHJlZmVycy1jb250cmFzdFxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQG1lZGlhL3ByZWZlcnMtY29udHJhc3RcbiAqL1xuZnVuY3Rpb24gZ2V0Q29udHJhc3RQcmVmZXJlbmNlKCkge1xuICAgIGlmIChkb2VzTWF0Y2gkMignbm8tcHJlZmVyZW5jZScpKSB7XG4gICAgICAgIHJldHVybiAwIC8qIE5vbmUgKi87XG4gICAgfVxuICAgIC8vIFRoZSBzb3VyY2VzIGNvbnRyYWRpY3Qgb24gdGhlIGtleXdvcmRzLiBQcm9iYWJseSAnaGlnaCcgYW5kICdsb3cnIHdpbGwgbmV2ZXIgYmUgaW1wbGVtZW50ZWQuXG4gICAgLy8gTmVlZCB0byBjaGVjayBpdCB3aGVuIGFsbCBicm93c2VycyBpbXBsZW1lbnQgdGhlIGZlYXR1cmUuXG4gICAgaWYgKGRvZXNNYXRjaCQyKCdoaWdoJykgfHwgZG9lc01hdGNoJDIoJ21vcmUnKSkge1xuICAgICAgICByZXR1cm4gMSAvKiBNb3JlICovO1xuICAgIH1cbiAgICBpZiAoZG9lc01hdGNoJDIoJ2xvdycpIHx8IGRvZXNNYXRjaCQyKCdsZXNzJykpIHtcbiAgICAgICAgcmV0dXJuIC0xIC8qIExlc3MgKi87XG4gICAgfVxuICAgIGlmIChkb2VzTWF0Y2gkMignZm9yY2VkJykpIHtcbiAgICAgICAgcmV0dXJuIDEwIC8qIEZvcmNlZENvbG9ycyAqLztcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRvZXNNYXRjaCQyKHZhbHVlKSB7XG4gICAgcmV0dXJuIG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb250cmFzdDogXCIgKyB2YWx1ZSArIFwiKVwiKS5tYXRjaGVzO1xufVxuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0BtZWRpYS9wcmVmZXJzLXJlZHVjZWQtbW90aW9uXG4gKi9cbmZ1bmN0aW9uIGlzTW90aW9uUmVkdWNlZCgpIHtcbiAgICBpZiAoZG9lc01hdGNoJDEoJ3JlZHVjZScpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoZG9lc01hdGNoJDEoJ25vLXByZWZlcmVuY2UnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkb2VzTWF0Y2gkMSh2YWx1ZSkge1xuICAgIHJldHVybiBtYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IFwiICsgdmFsdWUgKyBcIilcIikubWF0Y2hlcztcbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNS8jZHluYW1pYy1yYW5nZVxuICovXG5mdW5jdGlvbiBpc0hEUigpIHtcbiAgICBpZiAoZG9lc01hdGNoKCdoaWdoJykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChkb2VzTWF0Y2goJ3N0YW5kYXJkJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZG9lc01hdGNoKHZhbHVlKSB7XG4gICAgcmV0dXJuIG1hdGNoTWVkaWEoXCIoZHluYW1pYy1yYW5nZTogXCIgKyB2YWx1ZSArIFwiKVwiKS5tYXRjaGVzO1xufVxuXG52YXIgTSA9IE1hdGg7IC8vIFRvIHJlZHVjZSB0aGUgbWluaWZpZWQgY29kZSBzaXplXG52YXIgZmFsbGJhY2tGbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH07XG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9naXRsYWIudG9ycHJvamVjdC5vcmcvbGVnYWN5L3RyYWMvLS9pc3N1ZXMvMTMwMThcbiAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTMxOTE1XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGhGaW5nZXJwcmludCgpIHtcbiAgICAvLyBOYXRpdmUgb3BlcmF0aW9uc1xuICAgIHZhciBhY29zID0gTS5hY29zIHx8IGZhbGxiYWNrRm47XG4gICAgdmFyIGFjb3NoID0gTS5hY29zaCB8fCBmYWxsYmFja0ZuO1xuICAgIHZhciBhc2luID0gTS5hc2luIHx8IGZhbGxiYWNrRm47XG4gICAgdmFyIGFzaW5oID0gTS5hc2luaCB8fCBmYWxsYmFja0ZuO1xuICAgIHZhciBhdGFuaCA9IE0uYXRhbmggfHwgZmFsbGJhY2tGbjtcbiAgICB2YXIgYXRhbiA9IE0uYXRhbiB8fCBmYWxsYmFja0ZuO1xuICAgIHZhciBzaW4gPSBNLnNpbiB8fCBmYWxsYmFja0ZuO1xuICAgIHZhciBzaW5oID0gTS5zaW5oIHx8IGZhbGxiYWNrRm47XG4gICAgdmFyIGNvcyA9IE0uY29zIHx8IGZhbGxiYWNrRm47XG4gICAgdmFyIGNvc2ggPSBNLmNvc2ggfHwgZmFsbGJhY2tGbjtcbiAgICB2YXIgdGFuID0gTS50YW4gfHwgZmFsbGJhY2tGbjtcbiAgICB2YXIgdGFuaCA9IE0udGFuaCB8fCBmYWxsYmFja0ZuO1xuICAgIHZhciBleHAgPSBNLmV4cCB8fCBmYWxsYmFja0ZuO1xuICAgIHZhciBleHBtMSA9IE0uZXhwbTEgfHwgZmFsbGJhY2tGbjtcbiAgICB2YXIgbG9nMXAgPSBNLmxvZzFwIHx8IGZhbGxiYWNrRm47XG4gICAgLy8gT3BlcmF0aW9uIHBvbHlmaWxsc1xuICAgIHZhciBwb3dQSSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gTS5wb3coTS5QSSwgdmFsdWUpOyB9O1xuICAgIHZhciBhY29zaFBmID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBNLmxvZyh2YWx1ZSArIE0uc3FydCh2YWx1ZSAqIHZhbHVlIC0gMSkpOyB9O1xuICAgIHZhciBhc2luaFBmID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBNLmxvZyh2YWx1ZSArIE0uc3FydCh2YWx1ZSAqIHZhbHVlICsgMSkpOyB9O1xuICAgIHZhciBhdGFuaFBmID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBNLmxvZygoMSArIHZhbHVlKSAvICgxIC0gdmFsdWUpKSAvIDI7IH07XG4gICAgdmFyIHNpbmhQZiA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gTS5leHAodmFsdWUpIC0gMSAvIE0uZXhwKHZhbHVlKSAvIDI7IH07XG4gICAgdmFyIGNvc2hQZiA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKE0uZXhwKHZhbHVlKSArIDEgLyBNLmV4cCh2YWx1ZSkpIC8gMjsgfTtcbiAgICB2YXIgZXhwbTFQZiA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gTS5leHAodmFsdWUpIC0gMTsgfTtcbiAgICB2YXIgdGFuaFBmID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAoTS5leHAoMiAqIHZhbHVlKSAtIDEpIC8gKE0uZXhwKDIgKiB2YWx1ZSkgKyAxKTsgfTtcbiAgICB2YXIgbG9nMXBQZiA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gTS5sb2coMSArIHZhbHVlKTsgfTtcbiAgICAvLyBOb3RlOiBjb25zdGFudCB2YWx1ZXMgYXJlIGVtcGlyaWNhbFxuICAgIHJldHVybiB7XG4gICAgICAgIGFjb3M6IGFjb3MoMC4xMjMxMjQyMzQyMzQyMzQyNDIpLFxuICAgICAgICBhY29zaDogYWNvc2goMWUzMDgpLFxuICAgICAgICBhY29zaFBmOiBhY29zaFBmKDFlMTU0KSxcbiAgICAgICAgYXNpbjogYXNpbigwLjEyMzEyNDIzNDIzNDIzNDI0MiksXG4gICAgICAgIGFzaW5oOiBhc2luaCgxKSxcbiAgICAgICAgYXNpbmhQZjogYXNpbmhQZigxKSxcbiAgICAgICAgYXRhbmg6IGF0YW5oKDAuNSksXG4gICAgICAgIGF0YW5oUGY6IGF0YW5oUGYoMC41KSxcbiAgICAgICAgYXRhbjogYXRhbigwLjUpLFxuICAgICAgICBzaW46IHNpbigtMWUzMDApLFxuICAgICAgICBzaW5oOiBzaW5oKDEpLFxuICAgICAgICBzaW5oUGY6IHNpbmhQZigxKSxcbiAgICAgICAgY29zOiBjb3MoMTAuMDAwMDAwMDAwMTIzKSxcbiAgICAgICAgY29zaDogY29zaCgxKSxcbiAgICAgICAgY29zaFBmOiBjb3NoUGYoMSksXG4gICAgICAgIHRhbjogdGFuKC0xZTMwMCksXG4gICAgICAgIHRhbmg6IHRhbmgoMSksXG4gICAgICAgIHRhbmhQZjogdGFuaFBmKDEpLFxuICAgICAgICBleHA6IGV4cCgxKSxcbiAgICAgICAgZXhwbTE6IGV4cG0xKDEpLFxuICAgICAgICBleHBtMVBmOiBleHBtMVBmKDEpLFxuICAgICAgICBsb2cxcDogbG9nMXAoMTApLFxuICAgICAgICBsb2cxcFBmOiBsb2cxcFBmKDEwKSxcbiAgICAgICAgcG93UEk6IHBvd1BJKC0xMDApLFxuICAgIH07XG59XG5cbi8qKlxuICogV2UgdXNlIG0gb3IgdyBiZWNhdXNlIHRoZXNlIHR3byBjaGFyYWN0ZXJzIHRha2UgdXAgdGhlIG1heGltdW0gd2lkdGguXG4gKiBBbHNvIHRoZXJlIGFyZSBhIGNvdXBsZSBvZiBsaWdhdHVyZXMuXG4gKi9cbnZhciBkZWZhdWx0VGV4dCA9ICdtbU13V0xsaUkwZmlmbE8mMSc7XG4vKipcbiAqIFNldHRpbmdzIG9mIHRleHQgYmxvY2tzIHRvIG1lYXN1cmUuIFRoZSBrZXlzIGFyZSByYW5kb20gYnV0IHBlcnNpc3RlbnQgd29yZHMuXG4gKi9cbnZhciBwcmVzZXRzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGZvbnQuIFVzZXIgY2FuIGNoYW5nZSBpdCBpbiBkZXNrdG9wIENocm9tZSwgZGVza3RvcCBGaXJlZm94LCBJRSAxMSxcbiAgICAgKiBBbmRyb2lkIENocm9tZSAoYnV0IG9ubHkgd2hlbiB0aGUgc2l6ZSBpcyDiiaUgdGhhbiB0aGUgZGVmYXVsdCkgYW5kIEFuZHJvaWQgRmlyZWZveC5cbiAgICAgKi9cbiAgICBkZWZhdWx0OiBbXSxcbiAgICAvKiogT1MgZm9udCBvbiBtYWNPUy4gVXNlciBjYW4gY2hhbmdlIGl0cyBzaXplIGFuZCB3ZWlnaHQuIEFwcGxpZXMgYWZ0ZXIgU2FmYXJpIHJlc3RhcnQuICovXG4gICAgYXBwbGU6IFt7IGZvbnQ6ICctYXBwbGUtc3lzdGVtLWJvZHknIH1dLFxuICAgIC8qKiBVc2VyIGNhbiBjaGFuZ2UgaXQgaW4gZGVza3RvcCBDaHJvbWUgYW5kIGRlc2t0b3AgRmlyZWZveC4gKi9cbiAgICBzZXJpZjogW3sgZm9udEZhbWlseTogJ3NlcmlmJyB9XSxcbiAgICAvKiogVXNlciBjYW4gY2hhbmdlIGl0IGluIGRlc2t0b3AgQ2hyb21lIGFuZCBkZXNrdG9wIEZpcmVmb3guICovXG4gICAgc2FuczogW3sgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH1dLFxuICAgIC8qKiBVc2VyIGNhbiBjaGFuZ2UgaXQgaW4gZGVza3RvcCBDaHJvbWUgYW5kIGRlc2t0b3AgRmlyZWZveC4gKi9cbiAgICBtb25vOiBbeyBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyB9XSxcbiAgICAvKipcbiAgICAgKiBDaGVjayB0aGUgc21hbGxlc3QgYWxsb3dlZCBmb250IHNpemUuIFVzZXIgY2FuIGNoYW5nZSBpdCBpbiBkZXNrdG9wIENocm9tZSwgZGVza3RvcCBGaXJlZm94IGFuZCBkZXNrdG9wIFNhZmFyaS5cbiAgICAgKiBUaGUgaGVpZ2h0IGNhbiBiZSAwIGluIENocm9tZSBvbiBhIHJldGluYSBkaXNwbGF5LlxuICAgICAqL1xuICAgIG1pbjogW3sgZm9udFNpemU6ICcxcHgnIH1dLFxuICAgIC8qKiBUZWxscyBvbmUgT1MgZnJvbSBhbm90aGVyIGluIGRlc2t0b3AgQ2hyb21lLiAqL1xuICAgIHN5c3RlbTogW3sgZm9udEZhbWlseTogJ3N5c3RlbS11aScgfV0sXG59O1xuLyoqXG4gKiBUaGUgcmVzdWx0IGlzIGEgZGljdGlvbmFyeSBvZiB0aGUgd2lkdGggb2YgdGhlIHRleHQgc2FtcGxlcy5cbiAqIEhlaWdodHMgYXJlbid0IGluY2x1ZGVkIGJlY2F1c2UgdGhleSBnaXZlIG5vIGV4dHJhIGVudHJvcHkgYW5kIGFyZSB1bnN0YWJsZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIHZlcnkgc3RhYmxlIGluIElFIDExLCBFZGdlIDE4IGFuZCBTYWZhcmkgMTQuXG4gKiBUaGUgcmVzdWx0IGNoYW5nZXMgd2hlbiB0aGUgT1MgcGl4ZWwgZGVuc2l0eSBjaGFuZ2VzIGluIENocm9taXVtIDg3LiBUaGUgcmVhbCBwaXhlbCBkZW5zaXR5IGlzIHJlcXVpcmVkIHRvIHNvbHZlLFxuICogYnV0IHNlZW1zIGxpa2UgaXQncyBpbXBvc3NpYmxlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMTcxMzc3MS8xMTE4NzA5LlxuICogVGhlIFwibWluXCIgYW5kIHRoZSBcIm1vbm9cIiAob25seSBvbiBXaW5kb3dzKSB2YWx1ZSBtYXkgY2hhbmdlIHdoZW4gdGhlIHBhZ2UgaXMgem9vbWVkIGluIEZpcmVmb3ggODcuXG4gKi9cbmZ1bmN0aW9uIGdldEZvbnRQcmVmZXJlbmNlcygpIHtcbiAgICByZXR1cm4gd2l0aE5hdHVyYWxGb250cyhmdW5jdGlvbiAoZG9jdW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSB7fTtcbiAgICAgICAgdmFyIHNpemVzID0ge307XG4gICAgICAgIC8vIEZpcnN0IGNyZWF0ZSBhbGwgZWxlbWVudHMgdG8gbWVhc3VyZS4gSWYgdGhlIERPTSBzdGVwcyBiZWxvdyBhcmUgZG9uZSBpbiBhIHNpbmdsZSBjeWNsZSxcbiAgICAgICAgLy8gYnJvd3NlciB3aWxsIGFsdGVybmF0ZSB0cmVlIG1vZGlmaWNhdGlvbiBhbmQgbGF5b3V0IHJlYWRpbmcsIHRoYXQgaXMgdmVyeSBzbG93LlxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMocHJlc2V0cyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIF9iID0gcHJlc2V0c1trZXldLCBfYyA9IF9iWzBdLCBzdHlsZSA9IF9jID09PSB2b2lkIDAgPyB7fSA6IF9jLCBfZCA9IF9iWzFdLCB0ZXh0ID0gX2QgPT09IHZvaWQgMCA/IGRlZmF1bHRUZXh0IDogX2Q7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICAgICAgICBmb3IgKHZhciBfZSA9IDAsIF9mID0gT2JqZWN0LmtleXMoc3R5bGUpOyBfZSA8IF9mLmxlbmd0aDsgX2UrKykge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lXzEgPSBfZltfZV07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVbbmFtZV8xXTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW25hbWVfMV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50c1trZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGVuIG1lYXN1cmUgdGhlIGNyZWF0ZWQgZWxlbWVudHNcbiAgICAgICAgZm9yICh2YXIgX2cgPSAwLCBfaCA9IE9iamVjdC5rZXlzKHByZXNldHMpOyBfZyA8IF9oLmxlbmd0aDsgX2crKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IF9oW19nXTtcbiAgICAgICAgICAgIHNpemVzW2tleV0gPSBlbGVtZW50c1trZXldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplcztcbiAgICB9KTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIERPTSBlbnZpcm9ubWVudCB0aGF0IHByb3ZpZGVzIHRoZSBtb3N0IG5hdHVyYWwgZm9udCBhdmFpbGFibGUsIGluY2x1ZGluZyBBbmRyb2lkIE9TIGZvbnQuXG4gKiBNZWFzdXJlbWVudHMgb2YgdGhlIGVsZW1lbnRzIGFyZSB6b29tLWluZGVwZW5kZW50LlxuICogRG9uJ3QgcHV0IGEgY29udGVudCB0byBtZWFzdXJlIGluc2lkZSBhbiBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gd2l0aE5hdHVyYWxGb250cyhhY3Rpb24sIGNvbnRhaW5lcldpZHRoUHgpIHtcbiAgICBpZiAoY29udGFpbmVyV2lkdGhQeCA9PT0gdm9pZCAwKSB7IGNvbnRhaW5lcldpZHRoUHggPSA0MDAwOyB9XG4gICAgLypcbiAgICAgKiBSZXF1aXJlbWVudHMgZm9yIEFuZHJvaWQgQ2hyb21lIHRvIGFwcGx5IHRoZSBzeXN0ZW0gZm9udCBzaXplIHRvIGEgdGV4dCBpbnNpZGUgYW4gaWZyYW1lOlxuICAgICAqIC0gVGhlIGlmcmFtZSBtdXN0bid0IGhhdmUgYSBgZGlzcGxheTogbm9uZTtgIHN0eWxlO1xuICAgICAqIC0gVGhlIHRleHQgbXVzdG4ndCBiZSBwb3NpdGlvbmVkIGFic29sdXRlbHk7XG4gICAgICogLSBUaGUgdGV4dCBibG9jayBtdXN0IGJlIHdpZGUgZW5vdWdoLlxuICAgICAqICAgMjU2MHB4IG9uIHNvbWUgZGV2aWNlcyBpbiBwb3J0cmFpdCBvcmllbnRhdGlvbiBmb3IgdGhlIGJpZ2dlc3QgZm9udCBzaXplIG9wdGlvbiAoMzJweCk7XG4gICAgICogLSBUaGVyZSBtdXN0IGJlIG11Y2ggZW5vdWdoIHRleHQgdG8gZm9ybSBhIGZldyBsaW5lcyAoSSBkb24ndCBrbm93IHRoZSBleGFjdCBudW1iZXJzKTtcbiAgICAgKiAtIFRoZSB0ZXh0IG11c3QgaGF2ZSB0aGUgYHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmVgIHN0eWxlLiBPdGhlcndpc2UgdGhlIHRleHQgd2lsbCBzY2FsZSBpbiBcIkRlc2t0b3Agc2l0ZVwiIG1vZGU7XG4gICAgICpcbiAgICAgKiBSZXF1aXJlbWVudHMgZm9yIEFuZHJvaWQgRmlyZWZveCB0byBhcHBseSB0aGUgc3lzdGVtIGZvbnQgc2l6ZSB0byBhIHRleHQgaW5zaWRlIGFuIGlmcmFtZTpcbiAgICAgKiAtIFRoZSBpZnJhbWUgZG9jdW1lbnQgbXVzdCBoYXZlIGEgaGVhZGVyOiBgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5gLlxuICAgICAqICAgVGhlIG9ubHkgd2F5IHRvIHNldCBpdCBpcyB0byB1c2UgdGhlIGBzcmNkb2NgIGF0dHJpYnV0ZSBvZiB0aGUgaWZyYW1lO1xuICAgICAqIC0gVGhlIGlmcmFtZSBjb250ZW50IG11c3QgZ2V0IGxvYWRlZCBiZWZvcmUgYWRkaW5nIGV4dHJhIGNvbnRlbnQgd2l0aCBKYXZhU2NyaXB0O1xuICAgICAqXG4gICAgICogaHR0cHM6Ly9leGFtcGxlLmNvbSBhcyB0aGUgaWZyYW1lIHRhcmdldCBhbHdheXMgaW5oZXJpdHMgQW5kcm9pZCBmb250IHNldHRpbmdzIHNvIGl0IGNhbiBiZSB1c2VkIGFzIGEgcmVmZXJlbmNlLlxuICAgICAqXG4gICAgICogT2JzZXJ2YXRpb25zIG9uIGhvdyBwYWdlIHpvb20gYWZmZWN0cyB0aGUgbWVhc3VyZW1lbnRzOlxuICAgICAqIC0gbWFjT1MgU2FmYXJpIDExLjEsIDEyLjEsIDEzLjEsIDE0LjA6IHpvb20gcmVzZXQgKyBvZmZzZXRXaWR0aCA9IDEwMCUgcmVsaWFibGU7XG4gICAgICogLSBtYWNPUyBTYWZhcmkgMTEuMSwgMTIuMSwgMTMuMSwgMTQuMDogem9vbSByZXNldCArIGdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IDEwMCUgcmVsaWFibGU7XG4gICAgICogLSBtYWNPUyBTYWZhcmkgMTQuMDogb2Zmc2V0V2lkdGggPSA1JSBmbHVjdHVhdGlvbjtcbiAgICAgKiAtIG1hY09TIFNhZmFyaSAxNC4wOiBnZXRCb3VuZGluZ0NsaWVudFJlY3QgPSA1JSBmbHVjdHVhdGlvbjtcbiAgICAgKiAtIGlPUyBTYWZhcmkgOSwgMTAsIDExLjAsIDEyLjA6IGhhdmVuJ3QgZm91bmQgYSB3YXkgdG8gem9vbSBhIHBhZ2UgKHBpbmNoIGRvZXNuJ3QgY2hhbmdlIGxheW91dCk7XG4gICAgICogLSBpT1MgU2FmYXJpIDEzLjEsIDE0LjA6IHpvb20gcmVzZXQgKyBvZmZzZXRXaWR0aCA9IDEwMCUgcmVsaWFibGU7XG4gICAgICogLSBpT1MgU2FmYXJpIDEzLjEsIDE0LjA6IHpvb20gcmVzZXQgKyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgPSAxMDAlIHJlbGlhYmxlO1xuICAgICAqIC0gaU9TIFNhZmFyaSAxNC4wOiBvZmZzZXRXaWR0aCA9IDEwMCUgcmVsaWFibGU7XG4gICAgICogLSBpT1MgU2FmYXJpIDE0LjA6IGdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IDEwMCUgcmVsaWFibGU7XG4gICAgICogLSBDaHJvbWUgNDIsIDY1LCA4MCwgODc6IHpvb20gMS9kZXZpY2VQaXhlbFJhdGlvICsgb2Zmc2V0V2lkdGggPSAxcHggZmx1Y3R1YXRpb247XG4gICAgICogLSBDaHJvbWUgNDIsIDY1LCA4MCwgODc6IHpvb20gMS9kZXZpY2VQaXhlbFJhdGlvICsgZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gMTAwJSByZWxpYWJsZTtcbiAgICAgKiAtIENocm9tZSA4Nzogb2Zmc2V0V2lkdGggPSAxcHggZmx1Y3R1YXRpb247XG4gICAgICogLSBDaHJvbWUgODc6IGdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IDAuN3B4IGZsdWN0dWF0aW9uO1xuICAgICAqIC0gRmlyZWZveCA0OCwgNTE6IG9mZnNldFdpZHRoID0gMTAlIGZsdWN0dWF0aW9uO1xuICAgICAqIC0gRmlyZWZveCA0OCwgNTE6IGdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IDEwJSBmbHVjdHVhdGlvbjtcbiAgICAgKiAtIEZpcmVmb3ggNTIsIDUzLCA1NywgNjIsIDY2LCA2NywgNjgsIDcxLCA3NSwgODAsIDg0OiBvZmZzZXRXaWR0aCA9IHdpZHRoIDEwMCUgcmVsaWFibGUsIGhlaWdodCAxMCUgZmx1Y3R1YXRpb247XG4gICAgICogLSBGaXJlZm94IDUyLCA1MywgNTcsIDYyLCA2NiwgNjcsIDY4LCA3MSwgNzUsIDgwLCA4NDogZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gd2lkdGggMTAwJSByZWxpYWJsZSwgaGVpZ2h0IDEwJVxuICAgICAqICAgZmx1Y3R1YXRpb247XG4gICAgICogLSBBbmRyb2lkIENocm9tZSA4NjogaGF2ZW4ndCBmb3VuZCBhIHdheSB0byB6b29tIGEgcGFnZSAocGluY2ggZG9lc24ndCBjaGFuZ2UgbGF5b3V0KTtcbiAgICAgKiAtIEFuZHJvaWQgRmlyZWZveCA4NDogZm9udCBzaXplIGluIGFjY2Vzc2liaWxpdHkgc2V0dGluZ3MgY2hhbmdlcyBhbGwgdGhlIENTUyBzaXplcywgYnV0IG9mZnNldFdpZHRoIGFuZFxuICAgICAqICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGtlZXAgbWVhc3VyaW5nIHdpdGggcmVndWxhciB1bml0cywgc28gdGhlIHNpemUgcmVmbGVjdHMgdGhlIGZvbnQgc2l6ZSBzZXR0aW5nIGFuZCBkb2Vzbid0XG4gICAgICogICBmbHVjdHVhdGU7XG4gICAgICogLSBJRSAxMSwgRWRnZSAxODogem9vbSAxL2RldmljZVBpeGVsUmF0aW8gKyBvZmZzZXRXaWR0aCA9IDEwMCUgcmVsaWFibGU7XG4gICAgICogLSBJRSAxMSwgRWRnZSAxODogem9vbSAxL2RldmljZVBpeGVsUmF0aW8gKyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgPSByZWZsZWN0cyB0aGUgem9vbSBsZXZlbDtcbiAgICAgKiAtIElFIDExLCBFZGdlIDE4OiBvZmZzZXRXaWR0aCA9IDEwMCUgcmVsaWFibGU7XG4gICAgICogLSBJRSAxMSwgRWRnZSAxODogZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gMTAwJSByZWxpYWJsZTtcbiAgICAgKi9cbiAgICByZXR1cm4gd2l0aElmcmFtZShmdW5jdGlvbiAoXywgaWZyYW1lV2luZG93KSB7XG4gICAgICAgIHZhciBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZVdpbmRvdy5kb2N1bWVudDtcbiAgICAgICAgdmFyIGlmcmFtZUJvZHkgPSBpZnJhbWVEb2N1bWVudC5ib2R5O1xuICAgICAgICB2YXIgYm9keVN0eWxlID0gaWZyYW1lQm9keS5zdHlsZTtcbiAgICAgICAgYm9keVN0eWxlLndpZHRoID0gY29udGFpbmVyV2lkdGhQeCArIFwicHhcIjtcbiAgICAgICAgYm9keVN0eWxlLndlYmtpdFRleHRTaXplQWRqdXN0ID0gYm9keVN0eWxlLnRleHRTaXplQWRqdXN0ID0gJ25vbmUnO1xuICAgICAgICAvLyBTZWUgdGhlIGJpZyBjb21tZW50IGFib3ZlXG4gICAgICAgIGlmIChpc0Nocm9taXVtKCkpIHtcbiAgICAgICAgICAgIGlmcmFtZUJvZHkuc3R5bGUuem9vbSA9IFwiXCIgKyAxIC8gaWZyYW1lV2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNXZWJLaXQoKSkge1xuICAgICAgICAgICAgaWZyYW1lQm9keS5zdHlsZS56b29tID0gJ3Jlc2V0JztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZWUgdGhlIGJpZyBjb21tZW50IGFib3ZlXG4gICAgICAgIHZhciBsaW5lc09mVGV4dCA9IGlmcmFtZURvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaW5lc09mVGV4dC50ZXh0Q29udGVudCA9IF9fc3ByZWFkQXJyYXlzKEFycmF5KChjb250YWluZXJXaWR0aFB4IC8gMjApIDw8IDApKS5tYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gJ3dvcmQnOyB9KS5qb2luKCcgJyk7XG4gICAgICAgIGlmcmFtZUJvZHkuYXBwZW5kQ2hpbGQobGluZXNPZlRleHQpO1xuICAgICAgICByZXR1cm4gYWN0aW9uKGlmcmFtZURvY3VtZW50LCBpZnJhbWVCb2R5KTtcbiAgICB9LCAnPCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+Jyk7XG59XG5cbi8qKlxuICogVGhlIGxpc3Qgb2YgZW50cm9weSBzb3VyY2VzIHVzZWQgdG8gbWFrZSB2aXNpdG9yIGlkZW50aWZpZXJzLlxuICpcbiAqIFRoaXMgdmFsdWUgaXNuJ3QgcmVzdHJpY3RlZCBieSBTZW1hbnRpYyBWZXJzaW9uaW5nLCBpLmUuIGl0IG1heSBiZSBjaGFuZ2VkIHdpdGhvdXQgYnVtcGluZyBtaW5vciBvciBtYWpvciB2ZXJzaW9uIG9mXG4gKiB0aGlzIHBhY2thZ2UuXG4gKlxuICogTm90ZTogUm9sbHVwIGFuZCBXZWJwYWNrIGFyZSBzbWFydCBlbm91Z2ggdG8gcmVtb3ZlIHVudXNlZCBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IGR1cmluZyB0cmVlLXNoYWtpbmcsIHNvIHRoZXJlIGlzXG4gKiBubyBuZWVkIHRvIGV4cG9ydCB0aGUgc291cmNlcyBpbmRpdmlkdWFsbHkuXG4gKi9cbnZhciBzb3VyY2VzID0ge1xuICAgIC8vIFJFQUQgRklSU1Q6XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5nZXJwcmludGpzL2ZpbmdlcnByaW50anMvYmxvYi9tYXN0ZXIvY29udHJpYnV0aW5nLm1kI2hvdy10by1tYWtlLWFuLWVudHJvcHktc291cmNlXG4gICAgLy8gdG8gbGVhcm4gaG93IGVudHJvcHkgc291cmNlIHdvcmtzIGFuZCBob3cgdG8gbWFrZSB5b3VyIG93bi5cbiAgICAvLyBUaGUgc291cmNlcyBydW4gaW4gdGhpcyBleGFjdCBvcmRlci5cbiAgICAvLyBUaGUgYXN5bmNocm9ub3VzIHNvdXJjZXMgYXJlIGF0IHRoZSBzdGFydCB0byBydW4gaW4gcGFyYWxsZWwgd2l0aCBvdGhlciBzb3VyY2VzLlxuICAgIGZvbnRzOiBnZXRGb250cyxcbiAgICBkb21CbG9ja2VyczogZ2V0RG9tQmxvY2tlcnMsXG4gICAgZm9udFByZWZlcmVuY2VzOiBnZXRGb250UHJlZmVyZW5jZXMsXG4gICAgYXVkaW86IGdldEF1ZGlvRmluZ2VycHJpbnQsXG4gICAgc2NyZWVuRnJhbWU6IGdldFJvdW5kZWRTY3JlZW5GcmFtZSxcbiAgICBvc0NwdTogZ2V0T3NDcHUsXG4gICAgbGFuZ3VhZ2VzOiBnZXRMYW5ndWFnZXMsXG4gICAgY29sb3JEZXB0aDogZ2V0Q29sb3JEZXB0aCxcbiAgICBkZXZpY2VNZW1vcnk6IGdldERldmljZU1lbW9yeSxcbiAgICBzY3JlZW5SZXNvbHV0aW9uOiBnZXRTY3JlZW5SZXNvbHV0aW9uLFxuICAgIGhhcmR3YXJlQ29uY3VycmVuY3k6IGdldEhhcmR3YXJlQ29uY3VycmVuY3ksXG4gICAgdGltZXpvbmU6IGdldFRpbWV6b25lLFxuICAgIHNlc3Npb25TdG9yYWdlOiBnZXRTZXNzaW9uU3RvcmFnZSxcbiAgICBsb2NhbFN0b3JhZ2U6IGdldExvY2FsU3RvcmFnZSxcbiAgICBpbmRleGVkREI6IGdldEluZGV4ZWREQixcbiAgICBvcGVuRGF0YWJhc2U6IGdldE9wZW5EYXRhYmFzZSxcbiAgICBjcHVDbGFzczogZ2V0Q3B1Q2xhc3MsXG4gICAgcGxhdGZvcm06IGdldFBsYXRmb3JtLFxuICAgIHBsdWdpbnM6IGdldFBsdWdpbnMsXG4gICAgY2FudmFzOiBnZXRDYW52YXNGaW5nZXJwcmludCxcbiAgICB0b3VjaFN1cHBvcnQ6IGdldFRvdWNoU3VwcG9ydCxcbiAgICB2ZW5kb3I6IGdldFZlbmRvcixcbiAgICB2ZW5kb3JGbGF2b3JzOiBnZXRWZW5kb3JGbGF2b3JzLFxuICAgIGNvb2tpZXNFbmFibGVkOiBhcmVDb29raWVzRW5hYmxlZCxcbiAgICBjb2xvckdhbXV0OiBnZXRDb2xvckdhbXV0LFxuICAgIGludmVydGVkQ29sb3JzOiBhcmVDb2xvcnNJbnZlcnRlZCxcbiAgICBmb3JjZWRDb2xvcnM6IGFyZUNvbG9yc0ZvcmNlZCxcbiAgICBtb25vY2hyb21lOiBnZXRNb25vY2hyb21lRGVwdGgsXG4gICAgY29udHJhc3Q6IGdldENvbnRyYXN0UHJlZmVyZW5jZSxcbiAgICByZWR1Y2VkTW90aW9uOiBpc01vdGlvblJlZHVjZWQsXG4gICAgaGRyOiBpc0hEUixcbiAgICBtYXRoOiBnZXRNYXRoRmluZ2VycHJpbnQsXG59O1xuLyoqXG4gKiBMb2FkcyB0aGUgYnVpbHQtaW4gZW50cm9weSBzb3VyY2VzLlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY29sbGVjdHMgdGhlIGVudHJvcHkgY29tcG9uZW50cyB0byBtYWtlIHRoZSB2aXNpdG9yIGlkZW50aWZpZXIuXG4gKi9cbmZ1bmN0aW9uIGxvYWRCdWlsdGluU291cmNlcyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIGxvYWRTb3VyY2VzKHNvdXJjZXMsIG9wdGlvbnMsIFtdKTtcbn1cblxudmFyIGNvbW1lbnRUZW1wbGF0ZSA9ICckIGlmIHVwZ3JhZGUgdG8gUHJvOiBodHRwczovL2ZwanMuZGV2L3Bybyc7XG5mdW5jdGlvbiBnZXRDb25maWRlbmNlKGNvbXBvbmVudHMpIHtcbiAgICB2YXIgb3BlbkNvbmZpZGVuY2VTY29yZSA9IGdldE9wZW5Db25maWRlbmNlU2NvcmUoY29tcG9uZW50cyk7XG4gICAgdmFyIHByb0NvbmZpZGVuY2VTY29yZSA9IGRlcml2ZVByb0NvbmZpZGVuY2VTY29yZShvcGVuQ29uZmlkZW5jZVNjb3JlKTtcbiAgICByZXR1cm4geyBzY29yZTogb3BlbkNvbmZpZGVuY2VTY29yZSwgY29tbWVudDogY29tbWVudFRlbXBsYXRlLnJlcGxhY2UoL1xcJC9nLCBcIlwiICsgcHJvQ29uZmlkZW5jZVNjb3JlKSB9O1xufVxuZnVuY3Rpb24gZ2V0T3BlbkNvbmZpZGVuY2VTY29yZShjb21wb25lbnRzKSB7XG4gICAgLy8gSW4gb3JkZXIgdG8gY2FsY3VsYXRlIHRoZSB0cnVlIHByb2JhYmlsaXR5IG9mIHRoZSB2aXNpdG9yIGlkZW50aWZpZXIgYmVpbmcgY29ycmVjdCwgd2UgbmVlZCB0byBrbm93IHRoZSBudW1iZXIgb2ZcbiAgICAvLyB3ZWJzaXRlIHZpc2l0b3JzICh0aGUgaGlnaGVyIHRoZSBudW1iZXIsIHRoZSBsZXNzIHRoZSBwcm9iYWJpbGl0eSBiZWNhdXNlIHRoZSBmaW5nZXJwcmludCBlbnRyb3B5IGlzIGxpbWl0ZWQpLlxuICAgIC8vIEpTIGFnZW50IGRvZXNuJ3Qga25vdyB0aGUgbnVtYmVyIG9mIHZpc2l0b3JzLCBzbyB3ZSBjYW4gb25seSBkbyBhbiBhcHByb3hpbWF0ZSBhc3Nlc3NtZW50LlxuICAgIGlmIChpc0FuZHJvaWQoKSkge1xuICAgICAgICByZXR1cm4gMC40O1xuICAgIH1cbiAgICAvLyBTYWZhcmkgKG1vYmlsZSBhbmQgZGVza3RvcClcbiAgICBpZiAoaXNXZWJLaXQoKSkge1xuICAgICAgICByZXR1cm4gaXNEZXNrdG9wU2FmYXJpKCkgPyAwLjUgOiAwLjM7XG4gICAgfVxuICAgIHZhciBwbGF0Zm9ybSA9IGNvbXBvbmVudHMucGxhdGZvcm0udmFsdWUgfHwgJyc7XG4gICAgLy8gV2luZG93c1xuICAgIGlmICgvXldpbi8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgLy8gVGhlIHNjb3JlIGlzIGdyZWF0ZXIgdGhhbiBvbiBtYWNPUyBiZWNhdXNlIG9mIHRoZSBoaWdoZXIgdmFyaWV0eSBvZiBkZXZpY2VzIHJ1bm5pbmcgV2luZG93cy5cbiAgICAgICAgLy8gQ2hyb21lIHByb3ZpZGVzIG1vcmUgZW50cm9weSB0aGFuIEZpcmVmb3ggYWNjb3JkaW5nIHRvb1xuICAgICAgICAvLyBodHRwczovL25ldG1hcmtldHNoYXJlLmNvbS9icm93c2VyLW1hcmtldC1zaGFyZS5hc3B4P29wdGlvbnM9JTdCJTIyZmlsdGVyJTIyJTNBJTdCJTIyJTI0YW5kJTIyJTNBJTVCJTdCJTIycGxhdGZvcm0lMjIlM0ElN0IlMjIlMjRpbiUyMiUzQSU1QiUyMldpbmRvd3MlMjIlNUQlN0QlN0QlNUQlN0QlMkMlMjJkYXRlTGFiZWwlMjIlM0ElMjJUcmVuZCUyMiUyQyUyMmF0dHJpYnV0ZXMlMjIlM0ElMjJzaGFyZSUyMiUyQyUyMmdyb3VwJTIyJTNBJTIyYnJvd3NlciUyMiUyQyUyMnNvcnQlMjIlM0ElN0IlMjJzaGFyZSUyMiUzQS0xJTdEJTJDJTIyaWQlMjIlM0ElMjJicm93c2Vyc0Rlc2t0b3AlMjIlMkMlMjJkYXRlSW50ZXJ2YWwlMjIlM0ElMjJNb250aGx5JTIyJTJDJTIyZGF0ZVN0YXJ0JTIyJTNBJTIyMjAxOS0xMSUyMiUyQyUyMmRhdGVFbmQlMjIlM0ElMjIyMDIwLTEwJTIyJTJDJTIyc2VnbWVudHMlMjIlM0ElMjItMTAwMCUyMiU3RFxuICAgICAgICAvLyBTbyB3ZSBhc3NpZ24gdGhlIHNhbWUgc2NvcmUgdG8gdGhlbS5cbiAgICAgICAgcmV0dXJuIDAuNjtcbiAgICB9XG4gICAgLy8gbWFjT1NcbiAgICBpZiAoL15NYWMvLnRlc3QocGxhdGZvcm0pKSB7XG4gICAgICAgIC8vIENocm9tZSBwcm92aWRlcyBtb3JlIGVudHJvcHkgdGhhbiBTYWZhcmkgYW5kIFNhZmFyaSBwcm92aWRlcyBtb3JlIGVudHJvcHkgdGhhbiBGaXJlZm94LlxuICAgICAgICAvLyBDaHJvbWUgaXMgbW9yZSBwb3B1bGFyIHRoYW4gU2FmYXJpIGFuZCBTYWZhcmkgaXMgbW9yZSBwb3B1bGFyIHRoYW4gRmlyZWZveCBhY2NvcmRpbmcgdG9cbiAgICAgICAgLy8gaHR0cHM6Ly9uZXRtYXJrZXRzaGFyZS5jb20vYnJvd3Nlci1tYXJrZXQtc2hhcmUuYXNweD9vcHRpb25zPSU3QiUyMmZpbHRlciUyMiUzQSU3QiUyMiUyNGFuZCUyMiUzQSU1QiU3QiUyMnBsYXRmb3JtJTIyJTNBJTdCJTIyJTI0aW4lMjIlM0ElNUIlMjJNYWMlMjBPUyUyMiU1RCU3RCU3RCU1RCU3RCUyQyUyMmRhdGVMYWJlbCUyMiUzQSUyMlRyZW5kJTIyJTJDJTIyYXR0cmlidXRlcyUyMiUzQSUyMnNoYXJlJTIyJTJDJTIyZ3JvdXAlMjIlM0ElMjJicm93c2VyJTIyJTJDJTIyc29ydCUyMiUzQSU3QiUyMnNoYXJlJTIyJTNBLTElN0QlMkMlMjJpZCUyMiUzQSUyMmJyb3dzZXJzRGVza3RvcCUyMiUyQyUyMmRhdGVJbnRlcnZhbCUyMiUzQSUyMk1vbnRobHklMjIlMkMlMjJkYXRlU3RhcnQlMjIlM0ElMjIyMDE5LTExJTIyJTJDJTIyZGF0ZUVuZCUyMiUzQSUyMjIwMjAtMTAlMjIlMkMlMjJzZWdtZW50cyUyMiUzQSUyMi0xMDAwJTIyJTdEXG4gICAgICAgIC8vIFNvIHdlIGFzc2lnbiB0aGUgc2FtZSBzY29yZSB0byB0aGVtLlxuICAgICAgICByZXR1cm4gMC41O1xuICAgIH1cbiAgICAvLyBBbm90aGVyIHBsYXRmb3JtLCBlLmcuIGEgZGVza3RvcCBMaW51eC4gSXQncyByYXJlLCBzbyBpdCBzaG91bGQgYmUgcHJldHR5IHVuaXF1ZS5cbiAgICByZXR1cm4gMC43O1xufVxuZnVuY3Rpb24gZGVyaXZlUHJvQ29uZmlkZW5jZVNjb3JlKG9wZW5Db25maWRlbmNlU2NvcmUpIHtcbiAgICByZXR1cm4gcm91bmQoMC45OSArIDAuMDEgKiBvcGVuQ29uZmlkZW5jZVNjb3JlLCAwLjAwMDEpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRzVG9DYW5vbmljYWxTdHJpbmcoY29tcG9uZW50cykge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMoY29tcG9uZW50cykuc29ydCgpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgY29tcG9uZW50S2V5ID0gX2FbX2ldO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRLZXldO1xuICAgICAgICB2YXIgdmFsdWUgPSBjb21wb25lbnQuZXJyb3IgPyAnZXJyb3InIDogSlNPTi5zdHJpbmdpZnkoY29tcG9uZW50LnZhbHVlKTtcbiAgICAgICAgcmVzdWx0ICs9IFwiXCIgKyAocmVzdWx0ID8gJ3wnIDogJycpICsgY29tcG9uZW50S2V5LnJlcGxhY2UoLyhbOnxcXFxcXSkvZywgJ1xcXFwkMScpICsgXCI6XCIgKyB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudHNUb0RlYnVnU3RyaW5nKGNvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY29tcG9uZW50cywgZnVuY3Rpb24gKF9rZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JUb09iamVjdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIDIpO1xufVxuZnVuY3Rpb24gaGFzaENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICAgIHJldHVybiB4NjRoYXNoMTI4KGNvbXBvbmVudHNUb0Nhbm9uaWNhbFN0cmluZyhjb21wb25lbnRzKSk7XG59XG4vKipcbiAqIE1ha2VzIGEgR2V0UmVzdWx0IGltcGxlbWVudGF0aW9uIHRoYXQgY2FsY3VsYXRlcyB0aGUgdmlzaXRvciBpZCBoYXNoIG9uIGRlbWFuZC5cbiAqIERlc2lnbmVkIGZvciBvcHRpbWlzYXRpb24uXG4gKi9cbmZ1bmN0aW9uIG1ha2VMYXp5R2V0UmVzdWx0KGNvbXBvbmVudHMpIHtcbiAgICB2YXIgdmlzaXRvcklkQ2FjaGU7XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBydW5zIHZlcnkgZmFzdCwgc28gdGhlcmUgaXMgbm8gbmVlZCB0byBtYWtlIGl0IGxhenlcbiAgICB2YXIgY29uZmlkZW5jZSA9IGdldENvbmZpZGVuY2UoY29tcG9uZW50cyk7XG4gICAgLy8gQSBwbGFpbiBjbGFzcyBpc24ndCB1c2VkIGJlY2F1c2UgaXRzIGdldHRlcnMgYW5kIHNldHRlcnMgYXJlbid0IGVudW1lcmFibGUuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHZpc2l0b3JJZCgpIHtcbiAgICAgICAgICAgIGlmICh2aXNpdG9ySWRDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmlzaXRvcklkQ2FjaGUgPSBoYXNoQ29tcG9uZW50cyh0aGlzLmNvbXBvbmVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZpc2l0b3JJZENhY2hlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgdmlzaXRvcklkKHZpc2l0b3JJZCkge1xuICAgICAgICAgICAgdmlzaXRvcklkQ2FjaGUgPSB2aXNpdG9ySWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZGVuY2U6IGNvbmZpZGVuY2UsXG4gICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgfTtcbn1cbi8qKlxuICogQSBkZWxheSBpcyByZXF1aXJlZCB0byBlbnN1cmUgY29uc2lzdGVudCBlbnRyb3B5IGNvbXBvbmVudHMuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqcy9pc3N1ZXMvMjU0XG4gKiBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2ZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqcy9pc3N1ZXMvMzA3XG4gKiBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2ZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqcy9jb21taXQvOTQ1NjMzZTdjNWY2N2FlMzhlYjBmZWEzNzM0OTcxMmYwZTY2OWIxOFxuICovXG5mdW5jdGlvbiBwcmVwYXJlRm9yU291cmNlcyhkZWxheUZhbGxiYWNrKSB7XG4gICAgaWYgKGRlbGF5RmFsbGJhY2sgPT09IHZvaWQgMCkgeyBkZWxheUZhbGxiYWNrID0gNTA7IH1cbiAgICAvLyBBIHByb3BlciBkZWFkbGluZSBpcyB1bmtub3duLiBMZXQgaXQgYmUgdHdpY2UgdGhlIGZhbGxiYWNrIHRpbWVvdXQgc28gdGhhdCBib3RoIGNhc2VzIGhhdmUgdGhlIHNhbWUgYXZlcmFnZSB0aW1lLlxuICAgIHJldHVybiByZXF1ZXN0SWRsZUNhbGxiYWNrSWZBdmFpbGFibGUoZGVsYXlGYWxsYmFjaywgZGVsYXlGYWxsYmFjayAqIDIpO1xufVxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gaXNuJ3QgZXhwb3J0ZWQgZnJvbSB0aGUgaW5kZXggZmlsZSB0byBub3QgYWxsb3cgdG8gY2FsbCBpdCB3aXRob3V0IGBsb2FkKClgLlxuICogVGhlIGhpZGluZyBnaXZlcyBtb3JlIGZyZWVkb20gZm9yIGZ1dHVyZSBub24tYnJlYWtpbmcgdXBkYXRlcy5cbiAqXG4gKiBBIGZhY3RvcnkgZnVuY3Rpb24gaXMgdXNlZCBpbnN0ZWFkIG9mIGEgY2xhc3MgdG8gc2hvcnRlbiB0aGUgYXR0cmlidXRlIG5hbWVzIGluIHRoZSBtaW5pZmllZCBjb2RlLlxuICogTmF0aXZlIHByaXZhdGUgY2xhc3MgZmllbGRzIGNvdWxkJ3ZlIGJlZW4gdXNlZCwgYnV0IFR5cGVTY3JpcHQgZG9lc24ndCBhbGxvdyB0aGVtIHdpdGggYFwidGFyZ2V0XCI6IFwiZXM1XCJgLlxuICovXG5mdW5jdGlvbiBtYWtlQWdlbnQoZ2V0Q29tcG9uZW50cywgZGVidWcpIHtcbiAgICB2YXIgY3JlYXRpb25UaW1lID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0VGltZSwgY29tcG9uZW50cywgcmVzdWx0O1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0Q29tcG9uZW50cygpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG1ha2VMYXp5R2V0UmVzdWx0KGNvbXBvbmVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1ZyB8fCAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlYnVnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyBpcyBvayBoZXJlIGJlY2F1c2UgaXQncyB1bmRlciBhIGRlYnVnIGNsYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvcHkgdGhlIHRleHQgYmVsb3cgdG8gZ2V0IHRoZSBkZWJ1ZyBkYXRhOlxcblxcbmBgYFxcbnZlcnNpb246IFwiICsgcmVzdWx0LnZlcnNpb24gKyBcIlxcbnVzZXJBZ2VudDogXCIgKyBuYXZpZ2F0b3IudXNlckFnZW50ICsgXCJcXG50aW1lQmV0d2VlbkxvYWRBbmRHZXQ6IFwiICsgKHN0YXJ0VGltZSAtIGNyZWF0aW9uVGltZSkgKyBcIlxcbnZpc2l0b3JJZDogXCIgKyByZXN1bHQudmlzaXRvcklkICsgXCJcXG5jb21wb25lbnRzOiBcIiArIGNvbXBvbmVudHNUb0RlYnVnU3RyaW5nKGNvbXBvbmVudHMpICsgXCJcXG5gYGBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuLyoqXG4gKiBTZW5kcyBhbiB1bnBlcnNvbmFsaXplZCBBSkFYIHJlcXVlc3QgdG8gY29sbGVjdCBpbnN0YWxsYXRpb24gc3RhdGlzdGljc1xuICovXG5mdW5jdGlvbiBtb25pdG9yKCkge1xuICAgIC8vIFRoZSBGaW5nZXJwcmludEpTIENETiAoaHR0cHM6Ly9naXRodWIuY29tL2ZpbmdlcnByaW50anMvY2RuKSByZXBsYWNlcyBgd2luZG93Ll9fZnBqc19kX21gIHdpdGggYHRydWVgXG4gICAgaWYgKHdpbmRvdy5fX2ZwanNfZF9tIHx8IE1hdGgucmFuZG9tKCkgPj0gMC4wMDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oJ2dldCcsIFwiaHR0cHM6Ly9tMS5vcGVuZnBjZG4uaW8vZmluZ2VycHJpbnRqcy92XCIgKyB2ZXJzaW9uICsgXCIvbnBtLW1vbml0b3JpbmdcIiwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gY29uc29sZS5lcnJvciBpcyBvayBoZXJlIGJlY2F1c2UgaXQncyBhbiB1bmV4cGVjdGVkIGVycm9yIGhhbmRsZXJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxufVxuLyoqXG4gKiBCdWlsZHMgYW4gaW5zdGFuY2Ugb2YgQWdlbnQgYW5kIHdhaXRzIGEgZGVsYXkgcmVxdWlyZWQgZm9yIGEgcHJvcGVyIG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gbG9hZChfYSkge1xuICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBkZWxheUZhbGxiYWNrID0gX2IuZGVsYXlGYWxsYmFjaywgZGVidWcgPSBfYi5kZWJ1ZywgX2MgPSBfYi5tb25pdG9yaW5nLCBtb25pdG9yaW5nID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYztcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnZXRDb21wb25lbnRzO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAobW9uaXRvcmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9uaXRvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHByZXBhcmVGb3JTb3VyY2VzKGRlbGF5RmFsbGJhY2spXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q29tcG9uZW50cyA9IGxvYWRCdWlsdGluU291cmNlcyh7IGRlYnVnOiBkZWJ1ZyB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1ha2VBZ2VudChnZXRDb21wb25lbnRzLCBkZWJ1ZyldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZXhwb3J0IGlzIGEgc3ludGF4IHN1Z2FyIChgaW1wb3J0ICogYXMgRlAgZnJvbSAnLi4uJyDihpIgaW1wb3J0IEZQIGZyb20gJy4uLidgKS5cbi8vIEl0IHNob3VsZCBjb250YWluIGFsbCB0aGUgcHVibGljIGV4cG9ydGVkIHZhbHVlcy5cbnZhciBpbmRleCA9IHsgbG9hZDogbG9hZCwgaGFzaENvbXBvbmVudHM6IGhhc2hDb21wb25lbnRzLCBjb21wb25lbnRzVG9EZWJ1Z1N0cmluZzogY29tcG9uZW50c1RvRGVidWdTdHJpbmcgfTtcbi8vIFRoZSBleHBvcnRzIGJlbG93IGFyZSBmb3IgcHJpdmF0ZSB1c2FnZS4gVGhleSBtYXkgY2hhbmdlIHVuZXhwZWN0ZWRseS4gVXNlIHRoZW0gYXQgeW91ciBvd24gcmlzay5cbi8qKiBOb3QgZG9jdW1lbnRlZCwgb3V0IG9mIFNlbWFudGljIFZlcnNpb25pbmcsIHVzYWdlIGlzIGF0IHlvdXIgb3duIHJpc2sgKi9cbnZhciBtdXJtdXJYNjRIYXNoMTI4ID0geDY0aGFzaDEyODtcblxuZXhwb3J0IHsgY29tcG9uZW50c1RvRGVidWdTdHJpbmcsIGluZGV4IGFzIGRlZmF1bHQsIGdldEZ1bGxzY3JlZW5FbGVtZW50LCBnZXRTY3JlZW5GcmFtZSwgaGFzaENvbXBvbmVudHMsIGlzQW5kcm9pZCwgaXNDaHJvbWl1bSwgaXNEZXNrdG9wU2FmYXJpLCBpc0VkZ2VIVE1MLCBpc0dlY2tvLCBpc1RyaWRlbnQsIGlzV2ViS2l0LCBsb2FkLCBsb2FkU291cmNlcywgbXVybXVyWDY0SGFzaDEyOCwgcHJlcGFyZUZvclNvdXJjZXMsIHNvdXJjZXMsIHRyYW5zZm9ybVNvdXJjZSB9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBNZXJjdXJ5IGZyb20gJy4vbWVyY3VyeSc7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmlmICghd2luZG93Lm1lcmN1cnkpIHtcbiAgICBjb25zb2xlLmxvZyhgOjpNRVJDVVJZOjogdigke3ZlcnNpb259KWApO1xuICAgIHdpbmRvdy5tZXJjdXJ5ID0gd2luZG93Lm1lcmN1cnkgfHwgbmV3IE1lcmN1cnkoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5tZXJjdXJ5O1xuIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwidmFsdWUiLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIlN5bmMiLCJkZWZhdWx0Q29uZmlnIiwicHJvZHVjdCIsImFjY291bnRfaWQiLCJkZWZhdWx0U2V0dGluZyIsInBhdGgiLCJNZXJjdXJ5Iiwib3B0aW9ucyIsInNldHRpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwic3luYyIsInByZXBhcmVNZXJjdXJ5IiwibGlzdGVuVG9NZXNzYWdlcyIsInJlYWRpbmVzc0NoZWNrIiwid2luZG93IiwicGFyZW50IiwicG9zdE1lc3NhZ2UiLCJzdGF0dXMiLCJhZGRFdmVudExpc3RlbmVyIiwibWVzc2FnZSIsImRhdGEiLCJsb2FkT3B0aW9ucyIsImxvYWRTZXR0aW5ncyIsInR5cGUiLCJldmVudCIsImNvbnZlcnNpb24iLCJfYSIsIl9iIiwiX2MiLCJ0YXJnZXQiLCJuYW1lIiwiX19yZXN0IiwicyIsInQiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsImkiLCJsZW5ndGgiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImxvY2FsZm9yYWdlIiwiZmluZ2VycHJpbnRqcyIsIlNUT1JBR0VfSVRFTSIsIm1lcmN1cnkiLCJ0aW1lciIsIm9ubGluZSIsIm5hdmlnYXRvciIsIm9uTGluZSIsImRpc2FibGVDaGVjayIsInN0b3JhZ2UiLCJjcmVhdGVJbnN0YW5jZSIsInNhdmVEZXZpY2UiLCJ0aW1lb3V0SWQiLCJsYXN0SW50ZXJhY3Rpb24iLCJwdXNoZXIiLCJldmVudHMiLCJzZXRJbnRlcnZhbCIsInNlbmQiLCJnZXREZXZpY2VJZCIsImRldmljZV9pZCIsInNldEl0ZW0iLCJnZXRJdGVtIiwibG9hZCIsImZwUHJvbWlzZSIsImdldCIsInZpc2l0b3JJZCIsInB1c2giLCJ1cGRhdGVPbmxpbmVTdGF0dXMiLCJiaW5kIiwib25DbG9zZSIsIkFycmF5IiwiaXNBcnJheSIsInJldCIsImZvcmNlIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0Iiwic2VuZEJlYWNvbiIsIkFOQUxZVElDU19IT1NUIiwiSlNPTiIsInN0cmluZ2lmeSIsImRlZmF1bHRQYXJhbXMiLCJkaXNwYXRjaCIsInVuZGVmaW5lZCIsIkVycm9yIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=