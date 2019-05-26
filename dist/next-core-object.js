(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash.bind"));
	else if(typeof define === 'function' && define.amd)
		define("next-core-object", ["lodash.bind"], factory);
	else if(typeof exports === 'object')
		exports["next-core-object"] = factory(require("lodash.bind"));
	else
		root["next-core-object"] = factory(root["lodash.bind"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_lodash_bind__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next-core-utilities/dist/next-core-utilities.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next-core-utilities/dist/next-core-utilities.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t() : undefined;
}(undefined, function () {
  return function (e) {
    var t = {};function r(o) {
      if (t[o]) return t[o].exports;var n = t[o] = { i: o, l: !1, exports: {} };return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }return r.m = e, r.c = t, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var o = Object.create(null);if (r.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) r.d(o, n, function (t) {
        return e[t];
      }.bind(null, n));return o;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "/dist/", r(r.s = 3);
  }([function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = e => {
      const t = typeof e;return "function" === t || "object" === t && !!e;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = e => "[object Function]" == Object.prototype.toString.call(e);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = arguments;t.default = (e, t) => {
      let r, n;if ("function" != typeof t) throw new TypeError(FUNC_ERROR_TEXT);return n = Number.parseInt(e), () => (--n > 0 && (r = t.apply(void 0, o)), n <= 1 && (t = void 0), r);
    };
  }, function (e, t, r) {
    "use strict";
    var o = P(r(4)),
        n = P(r(1)),
        u = P(r(5)),
        l = P(r(6)),
        s = P(r(7)),
        i = P(r(8)),
        c = P(r(0)),
        f = P(r(9)),
        a = P(r(10)),
        d = P(r(11)),
        p = P(r(12)),
        b = P(r(13)),
        y = P(r(14)),
        _ = P(r(15)),
        O = P(r(16)),
        j = P(r(2)),
        h = P(r(17)),
        g = r(18),
        x = r(19),
        M = r(20),
        v = P(r(21)),
        S = P(r(22)),
        m = P(r(23));function P(e) {
      return e && e.__esModule ? e : { default: e };
    }e.exports.shuffle = x.shuffle, e.exports.prettyPrint = x.prettyPrint, e.exports.binarySearch = x.binarySearch, e.exports.TransformerType = x.TransformerType, e.exports.Transformer = x.Transformer, e.exports.wrap = x.wrap, e.exports.filterObject = x.filterObject, e.exports.findByMatchingProperties = x.findByMatchingProperties, e.exports.sortObjects = M.sortObjects, e.exports.mergeSort = M.mergeSort, e.exports.quickSort = M.quickSort, e.exports.insertionSort = M.insertionSort, e.exports.bubbleSort = M.bubbleSort, e.exports.formatDate = v.default, e.exports.formatBinary = S.default, e.exports.isString = o.default, e.exports.isFunction = n.default, e.exports.extend = u.default, e.exports.pad = l.default, e.exports.uniqueId = s.default, e.exports.has = i.default, e.exports.isObject = c.default, e.exports.allKeys = f.default, e.exports.create = a.default, e.exports.result = d.default, e.exports.arrayHas = p.default, e.exports.exec = b.default, e.exports.isDefined = y.default, e.exports.some = _.default, e.exports.splice = O.default, e.exports.before = j.default, e.exports.once = h.default, e.exports.filter = m.default, e.exports.fibonacci = g.fibonacci, e.exports.fibonacciSequence = g.fibonacciSequence;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = e => "string" == typeof e || !!e && "object" == typeof e && "[object String]" === Object.prototype.toString.call(e);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (...e) => {
      let t = 0;const r = e.length;for (t = 1; t < r; t++) {
        let r;for (r in e[t]) e[t].hasOwnProperty(r) && (e[0][r] = e[t][r]);
      }return e[0];
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t, r) => void 0 === t ? e : r ? `${e}${t}` : `${t}${e}`;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });let o = 0;t.default = e => {
      return `${e}${++o}`;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => null !== e && hasOwnProperty.call(e, t);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(r(0));t.default = e => (0, o.default)(e) ? Object.getOwnPropertyNames(e) : [];
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(r(0));t.default = (e, t) => {
      const r = (e => (0, o.default)(e) ? Object.create(e) : {})(e);return t && Object.assign(r, t), r;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(r(1));t.default = (e, t) => {
      if (null === e) return;const r = e[t];return (0, o.default)(r) ? r.call(e) : r;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => -1 !== e.indexOf(t);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t, ...r) => {
      const o = e.split("."),
            n = o.pop(),
            u = o.length;let l = 0;for (l = 0; l < u; l++) t = t[o[l]];return t[n].apply(t, r);
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = e => void 0 !== e;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => !!Array.isArray(e) && e.some(t);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t, r) => {
      r = Math.min(Math.max(r, 0), e.length);let o = Array(e.length - r);const n = t.length;let u;for (u = 0; u < o.length; u++) o[u] = e[u + r];for (u = 0; u < n; u++) e[u + r] = t[u];for (u = 0; u < o.length; u++) e[u + n + r] = o[u];
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(r(2));t.default = e => (0, o.default)(2, e);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });const o = t.fibonacci = e => {
      const t = (1 + Math.sqrt(5)) / 2,
            r = Math.pow(t, e) / Math.sqrt(5);return Math.round(r);
    };t.fibonacciSequence = e => {
      const t = [];let r = 0;for (r = 0; r < e; r++) t.push(o(r));return t;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = arguments;t.shuffle = e => {
      const t = e.slice(0);let r,
          o,
          n = 0;for (n = e.length - 1; n > 0; n--) o = Math.floor(Math.random() * (n + 1)), r = t[n], t[n] = t[o], t[o] = r;return t;
    }, t.prettyPrint = (e, t, r) => {
      let o = "\t";return t && (o = " ".repeat(r)), JSON.stringify(e, null, o);
    }, t.binarySearch = (e, t, r) => {
      let o,
          n,
          u = 0,
          l = e.length - 1;for (; u <= l;) if ((n = r(e[o = Math.floor((u + l) / 2)], t)) < 0) u = o + 1;else {
        if (!(n > 0)) return o;l = o - 1;
      }return null;
    };const n = t.TransformerType = {};n.STRING = Symbol("String"), n.INTEGER = Symbol("Integer"), n.NUMBER = Symbol("Number"), n.BOOLEAN = Symbol("Boolean"), n.ARRAY = Symbol("Array"), n.OBJECT = Symbol("Object"), n.NULL = Symbol("Null");t.Transformer = class {
      constructor() {
        this.type = n;
      }static transform(e, t) {
        let r = null;switch (t) {case n.STRING:
            r = "object" == typeof e ? JSON.stringify(e) : String(e);break;case n.INTEGER:
            r = parseInt(e);break;case n.NUMBER:
            r = Number(e);break;case n.BOOLEAN:
            r = Boolean(e);break;case n.ARRAY:
            Array.isArray(e) ? r = e : (r = [])[0] = e;break;case n.OBJECT:
            "object" != typeof e ? (r = {})[e] = e : r = e;}return r;
      }static isType(e) {
        return null === e ? n.NULL : "string" == typeof e ? n.STRING : "number" == typeof e ? n.NUMBER : "boolean" == typeof e ? n.BOOLEAN : Array.isArray(e) ? n.ARRAY : "object" == typeof e ? n.OBJECT : void 0;
      }
    };t.wrap = (e, t) => () => t.apply(void 0, [e].concat(Array.prototype.slice.call(o))), t.filterObject = (e, t) => {
      const r = {};if (e && t) {
        const o = t.length;let n = 0;for (n = 0; n < o; n++) r[t[n]] = e[t[n]];
      }return r;
    }, t.findByMatchingProperties = (e, t) => e.filter(e => Object.keys(t).every(r => e[r] === t[r]));
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.sortObjects = (e, t) => e.sort((e, r) => {
      const o = e[t],
            n = r[t];return o < n ? -1 : o > n ? 1 : 0;
    });const o = t.mergeSort = e => {
      if (1 === e.length) return e;const t = Math.floor(e.length / 2),
            r = e.slice(0, t),
            u = e.slice(t);return n(o(r), o(u));
    },
          n = (e, t) => {
      let r = [],
          o = 0,
          n = 0;for (; o < e.length && n < t.length;) e[o] < t[n] ? (r.push(e[o]), o++) : (r.push(t[n]), n++);return r.concat(e.slice(o)).concat(t.slice(n));
    },
          u = t.quickSort = e => {
      if (0 === e.length) return [];let t = 1;const r = e.length,
            o = [],
            n = [],
            l = e[0];for (t = 1; t < r; t++) e[t] < l ? o.push(e[t]) : n.push(e[t]);return u(o).concat(l, u(n));
    };t.insertionSort = e => {
      let t = [];if (e) {
        const r = (t = e.slice()).length;let o, n, u;for (o = 1; o < r; o++) {
          for (u = t[o], n = o - 1; n >= 0 && t[n] > u; n--) t[n + 1] = t[n];t[n + 1] = u;
        }
      }return t;
    }, t.bubbleSort = e => {
      let t = [];if (e) {
        let r, o, n;const u = (t = e.slice()).length - 1;do {
          for (r = !1, o = 0; o < u; o++) t[o] > t[o + 1] && (n = t[o], t[o] = t[o + 1], t[o + 1] = n, r = !0);
        } while (r);
      }return t;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => {
      const r = e.getFullYear(),
            o = e.getMonth() + 1,
            n = e.getDate(),
            u = e.getHours(),
            l = e.getMinutes();e.getSeconds();return t ? `${o}/${n}/${r}` : `${o}/${n}/${r} ${u % 12 || 12}:${l < 10 ? "0" + l : l}${u < 12 ? "am" : "pm"}`;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => (e => {
      let t = 0,
          r = e,
          o = "";for (t = 0; t < 32; t++, o += String(r >>> 31), r <<= 1);return o;
    })(e).split("").reverse().join("").substring(0, t);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => e && t ? [].filter.call(e, e => e != t).join("") : null;
  }]);
});
//# sourceMappingURL=next-core-utilities.js.map

/***/ }),

/***/ "./src/configuration.js":
/*!******************************!*\
  !*** ./src/configuration.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A set of configuration properties for the framework
 * @enum Configuration
 * @property {string} LoggerLevel The level of the framework internal logger
 * @property {string} MessageBundle - the base name for messages in the framework (default: Messages)
 * @property {number} AsynchronousQueueTimeout the default milisecond timeout (default: 2000)
 * @property {number} ApplicationInitProcessTimeout the application init even timeout (default: 1000)
 */
const Configuration = {
  LoggerLevel: "error",
  MessageBundle: "Messages",
  AsynchronousQueueTimeout: 2000,
  ApplicationInitProcessTimeout: 1000
};

exports.default = Configuration;

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Events

// Regular expression used to split event strings.
const EVENT_SPLITTER = exports.EVENT_SPLITTER = /\s+/;

// Iterates over the standard `event, callback` (as well as the fancy multiple
// space-separated events `"change blur", callback` and jQuery-style event
// maps `{event: callback}`).
const eventsApi = exports.eventsApi = (iteratee, events, name, callback, opts) => {
  let i = 0,
      names;
  if (name && typeof name === "object") {
    // Handle event maps.
    if (callback !== void 0 && "context" in opts && opts.context === void 0) {
      opts.context = callback;
    }
    for (names = Object.keys(name); i < names.length; i++) {
      events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
    }
  } else if (name && EVENT_SPLITTER.test(name)) {
    // Handle space-separated event names by delegating them individually.
    for (names = name.split(EVENT_SPLITTER); i < names.length; i++) {
      events = iteratee(events, names[i], callback, opts);
    }
  } else {
    // Finally, standard events.
    events = iteratee(events, name, callback, opts);
  }
  return events;
};

// Guard the `listening` argument from the public API.
const internalOn = exports.internalOn = (obj, name, callback, context, listening) => {
  obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
    context: context,
    ctx: obj,
    listening: listening
  });

  if (listening) {
    const listeners = obj._listeners || (obj._listeners = {});
    listeners[listening.id] = listening;
  }
  return obj;
};

// The reducing API that adds a callback to the `events` object.
const onApi = exports.onApi = (events, name, callback, options) => {
  if (callback) {
    const handlers = events[name] || (events[name] = []);
    const context = options.context,
          ctx = options.ctx,
          listening = options.listening;
    if (listening) {
      listening.count++;
    }
    handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
  }
  return events;
};

// The reducing API that removes a callback from the `events` object.
const offApi = exports.offApi = (events, name, callback, options) => {
  if (!events) {
    return;
  }
  let i = 0,
      listening;
  const context = options.context,
        listeners = options.listeners;

  // Delete all events listeners and "drop" events.
  if (!name && !callback && !context) {
    const ids = Object.keys(listeners);
    for (; i < ids.length; i++) {
      listening = listeners[ids[i]];
      delete listeners[listening.id];
      delete listening.listeningTo[listening.objId];
    }
    return;
  }

  let names = name ? [name] : Object.keys(events);
  for (; i < names.length; i++) {
    name = names[i];
    const handlers = events[name];

    // Bail out if there are no events stored.
    if (!handlers) break;

    // Replace events if there are any remaining.  Otherwise, clean up.
    const remaining = [];
    let j = 0;
    for (j = 0; j < handlers.length; j++) {
      const handler = handlers[j];
      if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
        remaining.push(handler);
      } else {
        listening = handler.listening;
        if (listening && --listening.count === 0) {
          delete listeners[listening.id];
          delete listening.listeningTo[listening.objId];
        }
      }
    }

    // Update tail event if the list has any events.  Otherwise, clean up.
    if (remaining.length) {
      events[name] = remaining;
    } else {
      delete events[name];
    }
  }
  return events;
};

// Handles triggering the appropriate event callbacks.
const triggerApi = exports.triggerApi = (objEvents, name, callback, args) => {
  if (objEvents) {
    const events = objEvents[name];
    let allEvents = objEvents.all;
    if (events && allEvents) {
      allEvents = allEvents.slice();
    }
    if (events) {
      triggerEvents(events, args);
    }
    if (allEvents) {
      triggerEvents(allEvents, [name].concat(args));
    }
  }
  return objEvents;
};

// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy
const triggerEvents = exports.triggerEvents = (events, args) => {
  let ev,
      i = -1;
  const l = events.length,
        a1 = args[0],
        a2 = args[1],
        a3 = args[2];
  switch (args.length) {
    case 0:
      while (++i < l) (ev = events[i]).callback.call(ev.ctx);return;
    case 1:
      while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1);return;
    case 2:
      while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2);return;
    case 3:
      while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);return;
    default:
      while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);return;
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _object = __webpack_require__(/*! ./object.js */ "./src/object.js");

var _object2 = _interopRequireDefault(_object);

var _configuration = __webpack_require__(/*! ./configuration.js */ "./src/configuration.js");

var _configuration2 = _interopRequireDefault(_configuration);

var _events = __webpack_require__(/*! ./events.js */ "./src/events.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports.AugmentedObject = _object2.default;
module.exports.Configuration = _configuration2.default;
module.exports.eventsApi = _events.eventsApi;
module.exports.internalOn = _events.internalOn;
module.exports.offApi = _events.offApi;
module.exports.triggerApi = _events.triggerApi;

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextCoreUtilities = __webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js");

var _events = __webpack_require__(/*! ./events.js */ "./src/events.js");

const _bind = __webpack_require__(/*! lodash.bind */ "lodash.bind");

/**
 * Augmented Object
 * Base class for other classes to extend from
 * @param {object} options Object options
 */
class AugmentedObject {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!this._options) {
      this._options = {};
    }
    Object.assign(this._options, options);

    if (options && options.events) {
      this._events = options.events;
    } else {
      this._events = {};
    }

    this._listeningTo = {};
    this._listenId = {};
    this._listeners = {};
  }

  /**
   * Initialize the object
   * @returns {object} Returns this context
   */
  initialize(...args) {
    return this;
  }

  /**
   * The passed options
   * @property options
   */
  get options() {
    return this._options;
  }

  set options(options) {
    this._options = options;
  }

  /**
   * The Events
   * @property events
   */
  get events() {
    return this._events;
  }

  set events(events) {
    this._events = events;
  }

  /**
   * Trigger one or many events, firing all bound callbacks. Callbacks are
   * passed the same arguments as `trigger` is, apart from the event name
   * (unless you're listening on `"all"`, which will cause your callback to
   * receive the true name of the event as the first argument).
   * @param {string} name The name of the event
   * @param {any} args any number of additional arguments
   * @returns {object} Returns this context
   */
  trigger(name, ...args) {
    //console.log("events", this._events);
    //console.log("trigger: name", name);
    //console.log("trigger: args", args);
    if (this._events) {
      //const length = Math.max(0, args.length - 1);
      const argsA = Array.isArray(args) ? args : Array.from(args); //(length);
      //let i = 0;
      //for (i = 0; i < length; i++) {
      //  argsA[i] = args[i + 1];
      //}
      //console.log(`calling eventsApi(${triggerApi}, ${this._events}, ${name}, ${void 0}, ${argsA});`);
      (0, _events.eventsApi)(_events.triggerApi, this._events, name, void 0, argsA);
    }
    return this;
  }

  /**
   * Bind an event to only be triggered a single time. After the first time
   * the callback is invoked, its listener will be removed. If multiple events
   * are passed in using the space-separated syntax, the handler will fire
   * once for each event, not once for a combination of all events.
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   */
  once(name, callback, context) {
    // Map the event into a `{event: once}` object.
    const events = (0, _events.eventsApi)(this._onceMap, {}, name, callback, _bind(this.off, this));
    if (typeof name === "string" && context == null) {
      callback = void 0;
    }
    return this.on(events, callback, context);
  }

  /**
   * Remove one or many callbacks. If `context` is null, removes all
   * callbacks with that function. If `callback` is null, removes all
   * callbacks for the event. If `name` is null, removes all bound
   * callbacks for all events.
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   */
  off(name, callback, context) {
    if (this._events) {
      this._events = (0, _events.eventsApi)(_events.offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
      });
    }
    return this;
  }

  /**
   * Tell this object to stop listening to either specific events ... or
   * to every object it's currently listening to.
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   */
  stopListening(obj, name, callback) {
    const listeningTo = this._listeningTo;
    if (listeningTo) {
      const ids = obj ? [obj._listenId] : Object.keys(listeningTo);
      let i = 0;
      for (i = 0; i < ids.length; i++) {
        const listening = listeningTo[ids[i]];

        // If listening doesn't exist, this object is not currently
        // listening to obj. Break out early.
        if (!listening) {
          break;
        }
        listening.obj.off(name, callback, this);
      }
    }
    return this;
  }

  /**
   * Bind an event to a `callback` function. Passing `"all"` will bind
   * the callback to all events fired.
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   */
  on(name, callback, context) {
    return (0, _events.internalOn)(this, name, callback, context);
  }

  /**
   * Inversion-of-control versions of `on`. Tell *this* object to listen to
   * an event in another object... keeping track of what it's listening to
   * for easier unbinding later.
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   */
  listenTo(obj, name, callback) {
    if (obj) {
      const id = obj._listenId || (obj._listenId = (0, _nextCoreUtilities.uniqueId)("l"));
      const listeningTo = this._listeningTo || (this._listeningTo = {});
      let listening = listeningTo[id];

      // This object is not listening to any other events on `obj` yet.
      // Setup the necessary references to track the listening callbacks.
      if (!listening) {
        const thisId = this._listenId || (this._listenId = (0, _nextCoreUtilities.uniqueId)("l"));
        listening = listeningTo[id] = { obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0 };
      }

      // Bind callbacks on obj, and keep track of them on listening.
      (0, _events.internalOn)(obj, name, callback, this, listening);
    }
    return this;
  }

  /**
   * Inversion-of-control versions of `once`.
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   */
  listenToOnce(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    const events = (0, _events.eventsApi)(this._onceMap, {}, name, callback, _bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  }

  /** Reduces the event callbacks into a map of `{event: onceWrapper}`.
   *  `offer` unbinds the `onceWrapper` after it has been called.
   * @private
   */
  _onceMap(map, name, callback, offer) {
    if (callback) {
      const __once = map[name] = (0, _nextCoreUtilities.once)(() => {
        offer(name, __once);
        callback.apply(this, arguments);
      });
      __once._callback = callback;
    }
    return map;
  }
};

exports.default = AugmentedObject;

/***/ }),

/***/ "lodash.bind":
/*!**************************************************************************************************************!*\
  !*** external {"commonjs":"lodash.bind","commonjs2":"lodash.bind","amd":"lodash.bind","root":"lodash.bind"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_bind__;

/***/ })

/******/ });
});
//# sourceMappingURL=next-core-object.js.map