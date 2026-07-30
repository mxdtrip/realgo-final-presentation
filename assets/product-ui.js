function $c(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Mi = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs;
function eg() {
  if (qs) return V;
  qs = 1;
  var f = Symbol.for("react.element"), m = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), G = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), X = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), z = Symbol.iterator;
  function j(u) {
    return u === null || typeof u != "object" ? null : (u = z && u[z] || u["@@iterator"], typeof u == "function" ? u : null);
  }
  var ye = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, xe = Object.assign, $ = {};
  function Y(u, p, P) {
    this.props = u, this.context = p, this.refs = $, this.updater = P || ye;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(u, p) {
    if (typeof u != "object" && typeof u != "function" && u != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, u, p, "setState");
  }, Y.prototype.forceUpdate = function(u) {
    this.updater.enqueueForceUpdate(this, u, "forceUpdate");
  };
  function Ue() {
  }
  Ue.prototype = Y.prototype;
  function de(u, p, P) {
    this.props = u, this.context = p, this.refs = $, this.updater = P || ye;
  }
  var Qe = de.prototype = new Ue();
  Qe.constructor = de, xe(Qe, Y.prototype), Qe.isPureReactComponent = !0;
  var pe = Array.isArray, De = Object.prototype.hasOwnProperty, Ee = { current: null }, re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function qe(u, p, P) {
    var H, Z = {}, b = null, oe = null;
    if (p != null) for (H in p.ref !== void 0 && (oe = p.ref), p.key !== void 0 && (b = "" + p.key), p) De.call(p, H) && !re.hasOwnProperty(H) && (Z[H] = p[H]);
    var R = arguments.length - 2;
    if (R === 1) Z.children = P;
    else if (1 < R) {
      for (var J = Array(R), se = 0; se < R; se++) J[se] = arguments[se + 2];
      Z.children = J;
    }
    if (u && u.defaultProps) for (H in R = u.defaultProps, R) Z[H] === void 0 && (Z[H] = R[H]);
    return { $$typeof: f, type: u, key: b, ref: oe, props: Z, _owner: Ee.current };
  }
  function _e(u, p) {
    return { $$typeof: f, type: u.type, key: p, ref: u.ref, props: u.props, _owner: u._owner };
  }
  function Ge(u) {
    return typeof u == "object" && u !== null && u.$$typeof === f;
  }
  function rt(u) {
    var p = { "=": "=0", ":": "=2" };
    return "$" + u.replace(/[=:]/g, function(P) {
      return p[P];
    });
  }
  var Pe = /\/+/g;
  function Ne(u, p) {
    return typeof u == "object" && u !== null && u.key != null ? rt("" + u.key) : p.toString(36);
  }
  function Ye(u, p, P, H, Z) {
    var b = typeof u;
    (b === "undefined" || b === "boolean") && (u = null);
    var oe = !1;
    if (u === null) oe = !0;
    else switch (b) {
      case "string":
      case "number":
        oe = !0;
        break;
      case "object":
        switch (u.$$typeof) {
          case f:
          case m:
            oe = !0;
        }
    }
    if (oe) return oe = u, Z = Z(oe), u = H === "" ? "." + Ne(oe, 0) : H, pe(Z) ? (P = "", u != null && (P = u.replace(Pe, "$&/") + "/"), Ye(Z, p, P, "", function(se) {
      return se;
    })) : Z != null && (Ge(Z) && (Z = _e(Z, P + (!Z.key || oe && oe.key === Z.key ? "" : ("" + Z.key).replace(Pe, "$&/") + "/") + u)), p.push(Z)), 1;
    if (oe = 0, H = H === "" ? "." : H + ":", pe(u)) for (var R = 0; R < u.length; R++) {
      b = u[R];
      var J = H + Ne(b, R);
      oe += Ye(b, p, P, J, Z);
    }
    else if (J = j(u), typeof J == "function") for (u = J.call(u), R = 0; !(b = u.next()).done; ) b = b.value, J = H + Ne(b, R++), oe += Ye(b, p, P, J, Z);
    else if (b === "object") throw p = String(u), Error("Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead.");
    return oe;
  }
  function Oe(u, p, P) {
    if (u == null) return u;
    var H = [], Z = 0;
    return Ye(u, H, "", "", function(b) {
      return p.call(P, b, Z++);
    }), H;
  }
  function Be(u) {
    if (u._status === -1) {
      var p = u._result;
      p = p(), p.then(function(P) {
        (u._status === 0 || u._status === -1) && (u._status = 1, u._result = P);
      }, function(P) {
        (u._status === 0 || u._status === -1) && (u._status = 2, u._result = P);
      }), u._status === -1 && (u._status = 0, u._result = p);
    }
    if (u._status === 1) return u._result.default;
    throw u._result;
  }
  var le = { current: null }, w = { transition: null }, F = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: w, ReactCurrentOwner: Ee };
  function y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return V.Children = { map: Oe, forEach: function(u, p, P) {
    Oe(u, function() {
      p.apply(this, arguments);
    }, P);
  }, count: function(u) {
    var p = 0;
    return Oe(u, function() {
      p++;
    }), p;
  }, toArray: function(u) {
    return Oe(u, function(p) {
      return p;
    }) || [];
  }, only: function(u) {
    if (!Ge(u)) throw Error("React.Children.only expected to receive a single React element child.");
    return u;
  } }, V.Component = Y, V.Fragment = d, V.Profiler = L, V.PureComponent = de, V.StrictMode = M, V.Suspense = T, V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, V.act = y, V.cloneElement = function(u, p, P) {
    if (u == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + u + ".");
    var H = xe({}, u.props), Z = u.key, b = u.ref, oe = u._owner;
    if (p != null) {
      if (p.ref !== void 0 && (b = p.ref, oe = Ee.current), p.key !== void 0 && (Z = "" + p.key), u.type && u.type.defaultProps) var R = u.type.defaultProps;
      for (J in p) De.call(p, J) && !re.hasOwnProperty(J) && (H[J] = p[J] === void 0 && R !== void 0 ? R[J] : p[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) H.children = P;
    else if (1 < J) {
      R = Array(J);
      for (var se = 0; se < J; se++) R[se] = arguments[se + 2];
      H.children = R;
    }
    return { $$typeof: f, type: u.type, key: Z, ref: b, props: H, _owner: oe };
  }, V.createContext = function(u) {
    return u = { $$typeof: G, _currentValue: u, _currentValue2: u, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, u.Provider = { $$typeof: q, _context: u }, u.Consumer = u;
  }, V.createElement = qe, V.createFactory = function(u) {
    var p = qe.bind(null, u);
    return p.type = u, p;
  }, V.createRef = function() {
    return { current: null };
  }, V.forwardRef = function(u) {
    return { $$typeof: O, render: u };
  }, V.isValidElement = Ge, V.lazy = function(u) {
    return { $$typeof: W, _payload: { _status: -1, _result: u }, _init: Be };
  }, V.memo = function(u, p) {
    return { $$typeof: X, type: u, compare: p === void 0 ? null : p };
  }, V.startTransition = function(u) {
    var p = w.transition;
    w.transition = {};
    try {
      u();
    } finally {
      w.transition = p;
    }
  }, V.unstable_act = y, V.useCallback = function(u, p) {
    return le.current.useCallback(u, p);
  }, V.useContext = function(u) {
    return le.current.useContext(u);
  }, V.useDebugValue = function() {
  }, V.useDeferredValue = function(u) {
    return le.current.useDeferredValue(u);
  }, V.useEffect = function(u, p) {
    return le.current.useEffect(u, p);
  }, V.useId = function() {
    return le.current.useId();
  }, V.useImperativeHandle = function(u, p, P) {
    return le.current.useImperativeHandle(u, p, P);
  }, V.useInsertionEffect = function(u, p) {
    return le.current.useInsertionEffect(u, p);
  }, V.useLayoutEffect = function(u, p) {
    return le.current.useLayoutEffect(u, p);
  }, V.useMemo = function(u, p) {
    return le.current.useMemo(u, p);
  }, V.useReducer = function(u, p, P) {
    return le.current.useReducer(u, p, P);
  }, V.useRef = function(u) {
    return le.current.useRef(u);
  }, V.useState = function(u) {
    return le.current.useState(u);
  }, V.useSyncExternalStore = function(u, p, P) {
    return le.current.useSyncExternalStore(u, p, P);
  }, V.useTransition = function() {
    return le.current.useTransition();
  }, V.version = "18.3.1", V;
}
var Ps;
function Gi() {
  return Ps || (Ps = 1, Mi.exports = eg()), Mi.exports;
}
var te = Gi();
const Vi = /* @__PURE__ */ $c(te);
var Vo = {}, Li = { exports: {} }, be = {}, qi = { exports: {} }, Pi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Os;
function tg() {
  return Os || (Os = 1, (function(f) {
    function m(w, F) {
      var y = w.length;
      w.push(F);
      e: for (; 0 < y; ) {
        var u = y - 1 >>> 1, p = w[u];
        if (0 < L(p, F)) w[u] = F, w[y] = p, y = u;
        else break e;
      }
    }
    function d(w) {
      return w.length === 0 ? null : w[0];
    }
    function M(w) {
      if (w.length === 0) return null;
      var F = w[0], y = w.pop();
      if (y !== F) {
        w[0] = y;
        e: for (var u = 0, p = w.length, P = p >>> 1; u < P; ) {
          var H = 2 * (u + 1) - 1, Z = w[H], b = H + 1, oe = w[b];
          if (0 > L(Z, y)) b < p && 0 > L(oe, Z) ? (w[u] = oe, w[b] = y, u = b) : (w[u] = Z, w[H] = y, u = H);
          else if (b < p && 0 > L(oe, y)) w[u] = oe, w[b] = y, u = b;
          else break e;
        }
      }
      return F;
    }
    function L(w, F) {
      var y = w.sortIndex - F.sortIndex;
      return y !== 0 ? y : w.id - F.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var q = performance;
      f.unstable_now = function() {
        return q.now();
      };
    } else {
      var G = Date, O = G.now();
      f.unstable_now = function() {
        return G.now() - O;
      };
    }
    var T = [], X = [], W = 1, z = null, j = 3, ye = !1, xe = !1, $ = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Ue = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(w) {
      for (var F = d(X); F !== null; ) {
        if (F.callback === null) M(X);
        else if (F.startTime <= w) M(X), F.sortIndex = F.expirationTime, m(T, F);
        else break;
        F = d(X);
      }
    }
    function pe(w) {
      if ($ = !1, Qe(w), !xe) if (d(T) !== null) xe = !0, Be(De);
      else {
        var F = d(X);
        F !== null && le(pe, F.startTime - w);
      }
    }
    function De(w, F) {
      xe = !1, $ && ($ = !1, Ue(qe), qe = -1), ye = !0;
      var y = j;
      try {
        for (Qe(F), z = d(T); z !== null && (!(z.expirationTime > F) || w && !rt()); ) {
          var u = z.callback;
          if (typeof u == "function") {
            z.callback = null, j = z.priorityLevel;
            var p = u(z.expirationTime <= F);
            F = f.unstable_now(), typeof p == "function" ? z.callback = p : z === d(T) && M(T), Qe(F);
          } else M(T);
          z = d(T);
        }
        if (z !== null) var P = !0;
        else {
          var H = d(X);
          H !== null && le(pe, H.startTime - F), P = !1;
        }
        return P;
      } finally {
        z = null, j = y, ye = !1;
      }
    }
    var Ee = !1, re = null, qe = -1, _e = 5, Ge = -1;
    function rt() {
      return !(f.unstable_now() - Ge < _e);
    }
    function Pe() {
      if (re !== null) {
        var w = f.unstable_now();
        Ge = w;
        var F = !0;
        try {
          F = re(!0, w);
        } finally {
          F ? Ne() : (Ee = !1, re = null);
        }
      } else Ee = !1;
    }
    var Ne;
    if (typeof de == "function") Ne = function() {
      de(Pe);
    };
    else if (typeof MessageChannel < "u") {
      var Ye = new MessageChannel(), Oe = Ye.port2;
      Ye.port1.onmessage = Pe, Ne = function() {
        Oe.postMessage(null);
      };
    } else Ne = function() {
      Y(Pe, 0);
    };
    function Be(w) {
      re = w, Ee || (Ee = !0, Ne());
    }
    function le(w, F) {
      qe = Y(function() {
        w(f.unstable_now());
      }, F);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(w) {
      w.callback = null;
    }, f.unstable_continueExecution = function() {
      xe || ye || (xe = !0, Be(De));
    }, f.unstable_forceFrameRate = function(w) {
      0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _e = 0 < w ? Math.floor(1e3 / w) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, f.unstable_getFirstCallbackNode = function() {
      return d(T);
    }, f.unstable_next = function(w) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = j;
      }
      var y = j;
      j = F;
      try {
        return w();
      } finally {
        j = y;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(w, F) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var y = j;
      j = w;
      try {
        return F();
      } finally {
        j = y;
      }
    }, f.unstable_scheduleCallback = function(w, F, y) {
      var u = f.unstable_now();
      switch (typeof y == "object" && y !== null ? (y = y.delay, y = typeof y == "number" && 0 < y ? u + y : u) : y = u, w) {
        case 1:
          var p = -1;
          break;
        case 2:
          p = 250;
          break;
        case 5:
          p = 1073741823;
          break;
        case 4:
          p = 1e4;
          break;
        default:
          p = 5e3;
      }
      return p = y + p, w = { id: W++, callback: F, priorityLevel: w, startTime: y, expirationTime: p, sortIndex: -1 }, y > u ? (w.sortIndex = y, m(X, w), d(T) === null && w === d(X) && ($ ? (Ue(qe), qe = -1) : $ = !0, le(pe, y - u))) : (w.sortIndex = p, m(T, w), xe || ye || (xe = !0, Be(De))), w;
    }, f.unstable_shouldYield = rt, f.unstable_wrapCallback = function(w) {
      var F = j;
      return function() {
        var y = j;
        j = F;
        try {
          return w.apply(this, arguments);
        } finally {
          j = y;
        }
      };
    };
  })(Pi)), Pi;
}
var Hs;
function ng() {
  return Hs || (Hs = 1, qi.exports = tg()), qi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vs;
function rg() {
  if (Vs) return be;
  Vs = 1;
  var f = Gi(), m = ng();
  function d(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var M = /* @__PURE__ */ new Set(), L = {};
  function q(e, t) {
    G(e, t), G(e + "Capture", t);
  }
  function G(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) M.add(t[e]);
  }
  var O = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, W = {}, z = {};
  function j(e) {
    return T.call(z, e) ? !0 : T.call(W, e) ? !1 : X.test(e) ? z[e] = !0 : (W[e] = !0, !1);
  }
  function ye(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function xe(e, t, n, r) {
    if (t === null || typeof t > "u" || ye(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function $(e, t, n, r, o, l, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Y[e] = new $(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Y[t] = new $(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Y[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Y[e] = new $(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Y[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Y[e] = new $(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    Y[e] = new $(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    Y[e] = new $(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    Y[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Ue = /[\-:]([a-z])/g;
  function de(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Ue,
      de
    );
    Y[t] = new $(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ue, de);
    Y[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ue, de);
    Y[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Y[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    Y[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Qe(e, t, n, r) {
    var o = Y.hasOwnProperty(t) ? Y[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (xe(t, n, o, r) && (n = null), r || o === null ? j(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var pe = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), Ee = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), qe = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), Ge = Symbol.for("react.provider"), rt = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Ye = Symbol.for("react.suspense_list"), Oe = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), w = Symbol.iterator;
  function F(e) {
    return e === null || typeof e != "object" ? null : (e = w && e[w] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var y = Object.assign, u;
  function p(e) {
    if (u === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      u = t && t[1] || "";
    }
    return `
` + u + e;
  }
  var P = !1;
  function H(e, t) {
    if (!e || P) return "";
    P = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (E) {
          var r = E;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (E) {
          r = E;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (E) {
          r = E;
        }
        e();
      }
    } catch (E) {
      if (E && r && typeof E.stack == "string") {
        for (var o = E.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, A = l.length - 1; 1 <= i && 0 <= A && o[i] !== l[A]; ) A--;
        for (; 1 <= i && 0 <= A; i--, A--) if (o[i] !== l[A]) {
          if (i !== 1 || A !== 1)
            do
              if (i--, A--, 0 > A || o[i] !== l[A]) {
                var a = `
` + o[i].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= i && 0 <= A);
          break;
        }
      }
    } finally {
      P = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? p(e) : "";
  }
  function Z(e) {
    switch (e.tag) {
      case 5:
        return p(e.type);
      case 16:
        return p("Lazy");
      case 13:
        return p("Suspense");
      case 19:
        return p("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = H(e.type, !1), e;
      case 11:
        return e = H(e.type.render, !1), e;
      case 1:
        return e = H(e.type, !0), e;
      default:
        return "";
    }
  }
  function b(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case re:
        return "Fragment";
      case Ee:
        return "Portal";
      case _e:
        return "Profiler";
      case qe:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Ye:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case rt:
        return (e.displayName || "Context") + ".Consumer";
      case Ge:
        return (e._context.displayName || "Context") + ".Provider";
      case Pe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Oe:
        return t = e.displayName || null, t !== null ? t : b(e.type) || "Memo";
      case Be:
        t = e._payload, e = e._init;
        try {
          return b(e(t));
        } catch {
        }
    }
    return null;
  }
  function oe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return b(t);
      case 8:
        return t === qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function R(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function J(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function se(e) {
    var t = J(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, l = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(i) {
        r = "" + i, l.call(this, i);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function vt(e) {
    e._valueTracker || (e._valueTracker = se(e));
  }
  function Ct(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = J(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ue(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ut(e, t) {
    var n = t.checked;
    return y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Nt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = R(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Xi(e, t) {
    t = t.checked, t != null && Qe(e, "checked", t, !1);
  }
  function Yo(e, t) {
    Xi(e, t);
    var n = R(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? zo(e, t.type, n) : t.hasOwnProperty("defaultValue") && zo(e, t.type, R(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ji(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function zo(e, t, n) {
    (t !== "number" || ue(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Yn = Array.isArray;
  function hn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + R(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Xo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(d(91));
    return y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Wi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(d(92));
        if (Yn(n)) {
          if (1 < n.length) throw Error(d(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: R(n) };
  }
  function Zi(e, t) {
    var n = R(t.value), r = R(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function bi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function _i(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function jo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _i(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Nr, $i = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Nr = Nr || document.createElement("div"), Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Nr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function zn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ru = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Xn).forEach(function(e) {
    ru.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Xn[t] = Xn[e];
    });
  });
  function eA(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xn.hasOwnProperty(e) && Xn[e] ? ("" + t).trim() : t + "px";
  }
  function tA(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = eA(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var ou = y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Wo(e, t) {
    if (t) {
      if (ou[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(d(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(d(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(d(62));
    }
  }
  function Zo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var bo = null;
  function _o(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $o = null, pn = null, Cn = null;
  function nA(e) {
    if (e = Er(e)) {
      if (typeof $o != "function") throw Error(d(280));
      var t = e.stateNode;
      t && (t = ro(t), $o(e.stateNode, e.type, t));
    }
  }
  function rA(e) {
    pn ? Cn ? Cn.push(e) : Cn = [e] : pn = e;
  }
  function oA() {
    if (pn) {
      var e = pn, t = Cn;
      if (Cn = pn = null, nA(e), t) for (e = 0; e < t.length; e++) nA(t[e]);
    }
  }
  function lA(e, t) {
    return e(t);
  }
  function iA() {
  }
  var el = !1;
  function AA(e, t, n) {
    if (el) return e(t, n);
    el = !0;
    try {
      return lA(e, t, n);
    } finally {
      el = !1, (pn !== null || Cn !== null) && (iA(), oA());
    }
  }
  function jn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ro(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(d(231, t, typeof n));
    return n;
  }
  var tl = !1;
  if (O) try {
    var Wn = {};
    Object.defineProperty(Wn, "passive", { get: function() {
      tl = !0;
    } }), window.addEventListener("test", Wn, Wn), window.removeEventListener("test", Wn, Wn);
  } catch {
    tl = !1;
  }
  function lu(e, t, n, r, o, l, i, A, a) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, E);
    } catch (I) {
      this.onError(I);
    }
  }
  var Zn = !1, Tr = null, Kr = !1, nl = null, iu = { onError: function(e) {
    Zn = !0, Tr = e;
  } };
  function Au(e, t, n, r, o, l, i, A, a) {
    Zn = !1, Tr = null, lu.apply(iu, arguments);
  }
  function au(e, t, n, r, o, l, i, A, a) {
    if (Au.apply(this, arguments), Zn) {
      if (Zn) {
        var E = Tr;
        Zn = !1, Tr = null;
      } else throw Error(d(198));
      Kr || (Kr = !0, nl = E);
    }
  }
  function en(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function aA(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function sA(e) {
    if (en(e) !== e) throw Error(d(188));
  }
  function su(e) {
    var t = e.alternate;
    if (!t) {
      if (t = en(e), t === null) throw Error(d(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var l = o.alternate;
      if (l === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === l.child) {
        for (l = o.child; l; ) {
          if (l === n) return sA(o), e;
          if (l === r) return sA(o), t;
          l = l.sibling;
        }
        throw Error(d(188));
      }
      if (n.return !== r.return) n = o, r = l;
      else {
        for (var i = !1, A = o.child; A; ) {
          if (A === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (A === r) {
            i = !0, r = o, n = l;
            break;
          }
          A = A.sibling;
        }
        if (!i) {
          for (A = l.child; A; ) {
            if (A === n) {
              i = !0, n = l, r = o;
              break;
            }
            if (A === r) {
              i = !0, r = l, n = o;
              break;
            }
            A = A.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (n.alternate !== r) throw Error(d(190));
    }
    if (n.tag !== 3) throw Error(d(188));
    return n.stateNode.current === n ? e : t;
  }
  function uA(e) {
    return e = su(e), e !== null ? cA(e) : null;
  }
  function cA(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = cA(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var gA = m.unstable_scheduleCallback, fA = m.unstable_cancelCallback, uu = m.unstable_shouldYield, cu = m.unstable_requestPaint, Ce = m.unstable_now, gu = m.unstable_getCurrentPriorityLevel, rl = m.unstable_ImmediatePriority, dA = m.unstable_UserBlockingPriority, Mr = m.unstable_NormalPriority, fu = m.unstable_LowPriority, EA = m.unstable_IdlePriority, Lr = null, It = null;
  function du(e) {
    if (It && typeof It.onCommitFiberRoot == "function") try {
      It.onCommitFiberRoot(Lr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var ct = Math.clz32 ? Math.clz32 : pu, Eu = Math.log, hu = Math.LN2;
  function pu(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Eu(e) / hu | 0) | 0;
  }
  var qr = 64, Pr = 4194304;
  function bn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Or(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var A = i & ~o;
      A !== 0 ? r = bn(A) : (l &= i, l !== 0 && (r = bn(l)));
    } else i = n & ~o, i !== 0 ? r = bn(i) : l !== 0 && (r = bn(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ct(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function Cu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Iu(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var i = 31 - ct(l), A = 1 << i, a = o[i];
      a === -1 ? ((A & n) === 0 || (A & r) !== 0) && (o[i] = Cu(A, t)) : a <= t && (e.expiredLanes |= A), l &= ~A;
    }
  }
  function ol(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function hA() {
    var e = qr;
    return qr <<= 1, (qr & 4194240) === 0 && (qr = 64), e;
  }
  function ll(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function _n(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
  }
  function Qu(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - ct(n), l = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
    }
  }
  function il(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - ct(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var ne = 0;
  function pA(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var CA, Al, IA, QA, BA, al = !1, Hr = [], Tt = null, Kt = null, Mt = null, $n = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new Map(), Lt = [], Bu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function mA(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tt = null;
        break;
      case "dragenter":
      case "dragleave":
        Kt = null;
        break;
      case "mouseover":
      case "mouseout":
        Mt = null;
        break;
      case "pointerover":
      case "pointerout":
        $n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        er.delete(t.pointerId);
    }
  }
  function tr(e, t, n, r, o, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Er(t), t !== null && Al(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function mu(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return Tt = tr(Tt, e, t, n, r, o), !0;
      case "dragenter":
        return Kt = tr(Kt, e, t, n, r, o), !0;
      case "mouseover":
        return Mt = tr(Mt, e, t, n, r, o), !0;
      case "pointerover":
        var l = o.pointerId;
        return $n.set(l, tr($n.get(l) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return l = o.pointerId, er.set(l, tr(er.get(l) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function wA(e) {
    var t = tn(e.target);
    if (t !== null) {
      var n = en(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = aA(n), t !== null) {
            e.blockedOn = t, BA(e.priority, function() {
              IA(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        bo = r, n.target.dispatchEvent(r), bo = null;
      } else return t = Er(n), t !== null && Al(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function vA(e, t, n) {
    Vr(e) && n.delete(t);
  }
  function wu() {
    al = !1, Tt !== null && Vr(Tt) && (Tt = null), Kt !== null && Vr(Kt) && (Kt = null), Mt !== null && Vr(Mt) && (Mt = null), $n.forEach(vA), er.forEach(vA);
  }
  function nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, al || (al = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, wu)));
  }
  function rr(e) {
    function t(o) {
      return nr(o, e);
    }
    if (0 < Hr.length) {
      nr(Hr[0], e);
      for (var n = 1; n < Hr.length; n++) {
        var r = Hr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Tt !== null && nr(Tt, e), Kt !== null && nr(Kt, e), Mt !== null && nr(Mt, e), $n.forEach(t), er.forEach(t), n = 0; n < Lt.length; n++) r = Lt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Lt.length && (n = Lt[0], n.blockedOn === null); ) wA(n), n.blockedOn === null && Lt.shift();
  }
  var In = pe.ReactCurrentBatchConfig, Gr = !0;
  function vu(e, t, n, r) {
    var o = ne, l = In.transition;
    In.transition = null;
    try {
      ne = 1, sl(e, t, n, r);
    } finally {
      ne = o, In.transition = l;
    }
  }
  function yu(e, t, n, r) {
    var o = ne, l = In.transition;
    In.transition = null;
    try {
      ne = 4, sl(e, t, n, r);
    } finally {
      ne = o, In.transition = l;
    }
  }
  function sl(e, t, n, r) {
    if (Gr) {
      var o = ul(e, t, n, r);
      if (o === null) Sl(e, t, r, Yr, n), mA(e, r);
      else if (mu(o, e, t, n, r)) r.stopPropagation();
      else if (mA(e, r), t & 4 && -1 < Bu.indexOf(e)) {
        for (; o !== null; ) {
          var l = Er(o);
          if (l !== null && CA(l), l = ul(e, t, n, r), l === null && Sl(e, t, r, Yr, n), l === o) break;
          o = l;
        }
        o !== null && r.stopPropagation();
      } else Sl(e, t, r, null, n);
    }
  }
  var Yr = null;
  function ul(e, t, n, r) {
    if (Yr = null, e = _o(r), e = tn(e), e !== null) if (t = en(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = aA(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Yr = e, null;
  }
  function yA(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (gu()) {
          case rl:
            return 1;
          case dA:
            return 4;
          case Mr:
          case fu:
            return 16;
          case EA:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var qt = null, cl = null, zr = null;
  function kA() {
    if (zr) return zr;
    var e, t = cl, n = t.length, r, o = "value" in qt ? qt.value : qt.textContent, l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
    return zr = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Xr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function jr() {
    return !0;
  }
  function SA() {
    return !1;
  }
  function $e(e) {
    function t(n, r, o, l, i) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
      for (var A in e) e.hasOwnProperty(A) && (n = e[A], this[A] = n ? n(l) : l[A]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? jr : SA, this.isPropagationStopped = SA, this;
    }
    return y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = jr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = jr);
    }, persist: function() {
    }, isPersistent: jr }), t;
  }
  var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, gl = $e(Qn), or = y({}, Qn, { view: 0, detail: 0 }), ku = $e(or), fl, dl, lr, Wr = y({}, or, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (fl = e.screenX - lr.screenX, dl = e.screenY - lr.screenY) : dl = fl = 0, lr = e), fl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : dl;
  } }), RA = $e(Wr), Su = y({}, Wr, { dataTransfer: 0 }), Ru = $e(Su), xu = y({}, or, { relatedTarget: 0 }), El = $e(xu), Du = y({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ju = $e(Du), Fu = y({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Uu = $e(Fu), Nu = y({}, Qn, { data: 0 }), xA = $e(Nu), Tu = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ku = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Mu = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lu(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mu[e]) ? !!t[e] : !1;
  }
  function hl() {
    return Lu;
  }
  var qu = y({}, or, { key: function(e) {
    if (e.key) {
      var t = Tu[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Xr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ku[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hl, charCode: function(e) {
    return e.type === "keypress" ? Xr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Xr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Pu = $e(qu), Ou = y({}, Wr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), DA = $e(Ou), Hu = y({}, or, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hl }), Vu = $e(Hu), Gu = y({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yu = $e(Gu), zu = y({}, Wr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xu = $e(zu), ju = [9, 13, 27, 32], pl = O && "CompositionEvent" in window, ir = null;
  O && "documentMode" in document && (ir = document.documentMode);
  var Wu = O && "TextEvent" in window && !ir, JA = O && (!pl || ir && 8 < ir && 11 >= ir), FA = " ", UA = !1;
  function NA(e, t) {
    switch (e) {
      case "keyup":
        return ju.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function TA(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Bn = !1;
  function Zu(e, t) {
    switch (e) {
      case "compositionend":
        return TA(t);
      case "keypress":
        return t.which !== 32 ? null : (UA = !0, FA);
      case "textInput":
        return e = t.data, e === FA && UA ? null : e;
      default:
        return null;
    }
  }
  function bu(e, t) {
    if (Bn) return e === "compositionend" || !pl && NA(e, t) ? (e = kA(), zr = cl = qt = null, Bn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return JA && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _u = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function KA(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_u[e.type] : t === "textarea";
  }
  function MA(e, t, n, r) {
    rA(r), t = eo(t, "onChange"), 0 < t.length && (n = new gl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Ar = null, ar = null;
  function $u(e) {
    ta(e, 0);
  }
  function Zr(e) {
    var t = kn(e);
    if (Ct(t)) return e;
  }
  function ec(e, t) {
    if (e === "change") return t;
  }
  var LA = !1;
  if (O) {
    var Cl;
    if (O) {
      var Il = "oninput" in document;
      if (!Il) {
        var qA = document.createElement("div");
        qA.setAttribute("oninput", "return;"), Il = typeof qA.oninput == "function";
      }
      Cl = Il;
    } else Cl = !1;
    LA = Cl && (!document.documentMode || 9 < document.documentMode);
  }
  function PA() {
    Ar && (Ar.detachEvent("onpropertychange", OA), ar = Ar = null);
  }
  function OA(e) {
    if (e.propertyName === "value" && Zr(ar)) {
      var t = [];
      MA(t, ar, e, _o(e)), AA($u, t);
    }
  }
  function tc(e, t, n) {
    e === "focusin" ? (PA(), Ar = t, ar = n, Ar.attachEvent("onpropertychange", OA)) : e === "focusout" && PA();
  }
  function nc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Zr(ar);
  }
  function rc(e, t) {
    if (e === "click") return Zr(t);
  }
  function oc(e, t) {
    if (e === "input" || e === "change") return Zr(t);
  }
  function lc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var gt = typeof Object.is == "function" ? Object.is : lc;
  function sr(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!T.call(t, o) || !gt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function HA(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function VA(e, t) {
    var n = HA(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = HA(n);
    }
  }
  function GA(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? GA(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function YA() {
    for (var e = window, t = ue(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ue(e.document);
    }
    return t;
  }
  function Ql(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ic(e) {
    var t = YA(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && GA(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ql(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, l = Math.min(r.start, o);
          r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = VA(n, l);
          var i = VA(
            n,
            r
          );
          o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ac = O && "documentMode" in document && 11 >= document.documentMode, mn = null, Bl = null, ur = null, ml = !1;
  function zA(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ml || mn == null || mn !== ue(r) || (r = mn, "selectionStart" in r && Ql(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ur && sr(ur, r) || (ur = r, r = eo(Bl, "onSelect"), 0 < r.length && (t = new gl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
  }
  function br(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var wn = { animationend: br("Animation", "AnimationEnd"), animationiteration: br("Animation", "AnimationIteration"), animationstart: br("Animation", "AnimationStart"), transitionend: br("Transition", "TransitionEnd") }, wl = {}, XA = {};
  O && (XA = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
  function _r(e) {
    if (wl[e]) return wl[e];
    if (!wn[e]) return e;
    var t = wn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in XA) return wl[e] = t[n];
    return e;
  }
  var jA = _r("animationend"), WA = _r("animationiteration"), ZA = _r("animationstart"), bA = _r("transitionend"), _A = /* @__PURE__ */ new Map(), $A = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Pt(e, t) {
    _A.set(e, t), q(t, [e]);
  }
  for (var vl = 0; vl < $A.length; vl++) {
    var yl = $A[vl], ac = yl.toLowerCase(), sc = yl[0].toUpperCase() + yl.slice(1);
    Pt(ac, "on" + sc);
  }
  Pt(jA, "onAnimationEnd"), Pt(WA, "onAnimationIteration"), Pt(ZA, "onAnimationStart"), Pt("dblclick", "onDoubleClick"), Pt("focusin", "onFocus"), Pt("focusout", "onBlur"), Pt(bA, "onTransitionEnd"), G("onMouseEnter", ["mouseout", "mouseover"]), G("onMouseLeave", ["mouseout", "mouseover"]), G("onPointerEnter", ["pointerout", "pointerover"]), G("onPointerLeave", ["pointerout", "pointerover"]), q("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), q("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), q("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), q("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), q("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), q("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uc = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
  function ea(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, au(r, t, void 0, e), e.currentTarget = null;
  }
  function ta(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var A = r[i], a = A.instance, E = A.currentTarget;
          if (A = A.listener, a !== l && o.isPropagationStopped()) break e;
          ea(o, A, E), l = a;
        }
        else for (i = 0; i < r.length; i++) {
          if (A = r[i], a = A.instance, E = A.currentTarget, A = A.listener, a !== l && o.isPropagationStopped()) break e;
          ea(o, A, E), l = a;
        }
      }
    }
    if (Kr) throw e = nl, Kr = !1, nl = null, e;
  }
  function Ae(e, t) {
    var n = t[Ul];
    n === void 0 && (n = t[Ul] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (na(t, e, 2, !1), n.add(r));
  }
  function kl(e, t, n) {
    var r = 0;
    t && (r |= 4), na(n, e, r, t);
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function gr(e) {
    if (!e[$r]) {
      e[$r] = !0, M.forEach(function(n) {
        n !== "selectionchange" && (uc.has(n) || kl(n, !1, e), kl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$r] || (t[$r] = !0, kl("selectionchange", !1, t));
    }
  }
  function na(e, t, n, r) {
    switch (yA(t)) {
      case 1:
        var o = vu;
        break;
      case 4:
        o = yu;
        break;
      default:
        o = sl;
    }
    n = o.bind(null, t, n, e), o = void 0, !tl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function Sl(e, t, n, r, o) {
    var l = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var A = r.stateNode.containerInfo;
        if (A === o || A.nodeType === 8 && A.parentNode === o) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var a = i.tag;
          if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
          i = i.return;
        }
        for (; A !== null; ) {
          if (i = tn(A), i === null) return;
          if (a = i.tag, a === 5 || a === 6) {
            r = l = i;
            continue e;
          }
          A = A.parentNode;
        }
      }
      r = r.return;
    }
    AA(function() {
      var E = l, I = _o(n), Q = [];
      e: {
        var C = _A.get(e);
        if (C !== void 0) {
          var v = gl, S = e;
          switch (e) {
            case "keypress":
              if (Xr(n) === 0) break e;
            case "keydown":
            case "keyup":
              v = Pu;
              break;
            case "focusin":
              S = "focus", v = El;
              break;
            case "focusout":
              S = "blur", v = El;
              break;
            case "beforeblur":
            case "afterblur":
              v = El;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = RA;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = Ru;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = Vu;
              break;
            case jA:
            case WA:
            case ZA:
              v = Ju;
              break;
            case bA:
              v = Yu;
              break;
            case "scroll":
              v = ku;
              break;
            case "wheel":
              v = Xu;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = Uu;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = DA;
          }
          var x = (t & 4) !== 0, Ie = !x && e === "scroll", c = x ? C !== null ? C + "Capture" : null : C;
          x = [];
          for (var s = E, g; s !== null; ) {
            g = s;
            var B = g.stateNode;
            if (g.tag === 5 && B !== null && (g = B, c !== null && (B = jn(s, c), B != null && x.push(fr(s, B, g)))), Ie) break;
            s = s.return;
          }
          0 < x.length && (C = new v(C, S, null, n, I), Q.push({ event: C, listeners: x }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", C && n !== bo && (S = n.relatedTarget || n.fromElement) && (tn(S) || S[yt])) break e;
          if ((v || C) && (C = I.window === I ? I : (C = I.ownerDocument) ? C.defaultView || C.parentWindow : window, v ? (S = n.relatedTarget || n.toElement, v = E, S = S ? tn(S) : null, S !== null && (Ie = en(S), S !== Ie || S.tag !== 5 && S.tag !== 6) && (S = null)) : (v = null, S = E), v !== S)) {
            if (x = RA, B = "onMouseLeave", c = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (x = DA, B = "onPointerLeave", c = "onPointerEnter", s = "pointer"), Ie = v == null ? C : kn(v), g = S == null ? C : kn(S), C = new x(B, s + "leave", v, n, I), C.target = Ie, C.relatedTarget = g, B = null, tn(I) === E && (x = new x(c, s + "enter", S, n, I), x.target = g, x.relatedTarget = Ie, B = x), Ie = B, v && S) t: {
              for (x = v, c = S, s = 0, g = x; g; g = vn(g)) s++;
              for (g = 0, B = c; B; B = vn(B)) g++;
              for (; 0 < s - g; ) x = vn(x), s--;
              for (; 0 < g - s; ) c = vn(c), g--;
              for (; s--; ) {
                if (x === c || c !== null && x === c.alternate) break t;
                x = vn(x), c = vn(c);
              }
              x = null;
            }
            else x = null;
            v !== null && ra(Q, C, v, x, !1), S !== null && Ie !== null && ra(Q, Ie, S, x, !0);
          }
        }
        e: {
          if (C = E ? kn(E) : window, v = C.nodeName && C.nodeName.toLowerCase(), v === "select" || v === "input" && C.type === "file") var D = ec;
          else if (KA(C)) if (LA) D = oc;
          else {
            D = nc;
            var U = tc;
          }
          else (v = C.nodeName) && v.toLowerCase() === "input" && (C.type === "checkbox" || C.type === "radio") && (D = rc);
          if (D && (D = D(e, E))) {
            MA(Q, D, n, I);
            break e;
          }
          U && U(e, C, E), e === "focusout" && (U = C._wrapperState) && U.controlled && C.type === "number" && zo(C, "number", C.value);
        }
        switch (U = E ? kn(E) : window, e) {
          case "focusin":
            (KA(U) || U.contentEditable === "true") && (mn = U, Bl = E, ur = null);
            break;
          case "focusout":
            ur = Bl = mn = null;
            break;
          case "mousedown":
            ml = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ml = !1, zA(Q, n, I);
            break;
          case "selectionchange":
            if (Ac) break;
          case "keydown":
          case "keyup":
            zA(Q, n, I);
        }
        var N;
        if (pl) e: {
          switch (e) {
            case "compositionstart":
              var K = "onCompositionStart";
              break e;
            case "compositionend":
              K = "onCompositionEnd";
              break e;
            case "compositionupdate":
              K = "onCompositionUpdate";
              break e;
          }
          K = void 0;
        }
        else Bn ? NA(e, n) && (K = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (K = "onCompositionStart");
        K && (JA && n.locale !== "ko" && (Bn || K !== "onCompositionStart" ? K === "onCompositionEnd" && Bn && (N = kA()) : (qt = I, cl = "value" in qt ? qt.value : qt.textContent, Bn = !0)), U = eo(E, K), 0 < U.length && (K = new xA(K, e, null, n, I), Q.push({ event: K, listeners: U }), N ? K.data = N : (N = TA(n), N !== null && (K.data = N)))), (N = Wu ? Zu(e, n) : bu(e, n)) && (E = eo(E, "onBeforeInput"), 0 < E.length && (I = new xA("onBeforeInput", "beforeinput", null, n, I), Q.push({ event: I, listeners: E }), I.data = N));
      }
      ta(Q, t);
    });
  }
  function fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function eo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, l = o.stateNode;
      o.tag === 5 && l !== null && (o = l, l = jn(e, n), l != null && r.unshift(fr(e, l, o)), l = jn(e, t), l != null && r.push(fr(e, l, o))), e = e.return;
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ra(e, t, n, r, o) {
    for (var l = t._reactName, i = []; n !== null && n !== r; ) {
      var A = n, a = A.alternate, E = A.stateNode;
      if (a !== null && a === r) break;
      A.tag === 5 && E !== null && (A = E, o ? (a = jn(n, l), a != null && i.unshift(fr(n, a, A))) : o || (a = jn(n, l), a != null && i.push(fr(n, a, A)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var cc = /\r\n?/g, gc = /\u0000|\uFFFD/g;
  function oa(e) {
    return (typeof e == "string" ? e : "" + e).replace(cc, `
`).replace(gc, "");
  }
  function to(e, t, n) {
    if (t = oa(t), oa(e) !== t && n) throw Error(d(425));
  }
  function no() {
  }
  var Rl = null, xl = null;
  function Dl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Jl = typeof setTimeout == "function" ? setTimeout : void 0, fc = typeof clearTimeout == "function" ? clearTimeout : void 0, la = typeof Promise == "function" ? Promise : void 0, dc = typeof queueMicrotask == "function" ? queueMicrotask : typeof la < "u" ? function(e) {
    return la.resolve(null).then(e).catch(Ec);
  } : Jl;
  function Ec(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fl(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), rr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    rr(t);
  }
  function Ot(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ia(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yn = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + yn, dr = "__reactProps$" + yn, yt = "__reactContainer$" + yn, Ul = "__reactEvents$" + yn, hc = "__reactListeners$" + yn, pc = "__reactHandles$" + yn;
  function tn(e) {
    var t = e[Qt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[yt] || n[Qt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ia(e); e !== null; ) {
          if (n = e[Qt]) return n;
          e = ia(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Er(e) {
    return e = e[Qt] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(d(33));
  }
  function ro(e) {
    return e[dr] || null;
  }
  var Nl = [], Sn = -1;
  function Ht(e) {
    return { current: e };
  }
  function ae(e) {
    0 > Sn || (e.current = Nl[Sn], Nl[Sn] = null, Sn--);
  }
  function ie(e, t) {
    Sn++, Nl[Sn] = e.current, e.current = t;
  }
  var Vt = {}, Te = Ht(Vt), ze = Ht(!1), nn = Vt;
  function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, l;
    for (l in n) o[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function oo() {
    ae(ze), ae(Te);
  }
  function Aa(e, t, n) {
    if (Te.current !== Vt) throw Error(d(168));
    ie(Te, t), ie(ze, n);
  }
  function aa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(d(108, oe(e) || "Unknown", o));
    return y({}, n, r);
  }
  function lo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, nn = Te.current, ie(Te, e), ie(ze, ze.current), !0;
  }
  function sa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(d(169));
    n ? (e = aa(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, ae(ze), ae(Te), ie(Te, e)) : ae(ze), ie(ze, n);
  }
  var kt = null, io = !1, Tl = !1;
  function ua(e) {
    kt === null ? kt = [e] : kt.push(e);
  }
  function Cc(e) {
    io = !0, ua(e);
  }
  function Gt() {
    if (!Tl && kt !== null) {
      Tl = !0;
      var e = 0, t = ne;
      try {
        var n = kt;
        for (ne = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        kt = null, io = !1;
      } catch (o) {
        throw kt !== null && (kt = kt.slice(e + 1)), gA(rl, Gt), o;
      } finally {
        ne = t, Tl = !1;
      }
    }
    return null;
  }
  var xn = [], Dn = 0, Ao = null, ao = 0, ot = [], lt = 0, rn = null, St = 1, Rt = "";
  function on(e, t) {
    xn[Dn++] = ao, xn[Dn++] = Ao, Ao = e, ao = t;
  }
  function ca(e, t, n) {
    ot[lt++] = St, ot[lt++] = Rt, ot[lt++] = rn, rn = e;
    var r = St;
    e = Rt;
    var o = 32 - ct(r) - 1;
    r &= ~(1 << o), n += 1;
    var l = 32 - ct(t) + o;
    if (30 < l) {
      var i = o - o % 5;
      l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, St = 1 << 32 - ct(t) + o | n << o | r, Rt = l + e;
    } else St = 1 << l | n << o | r, Rt = e;
  }
  function Kl(e) {
    e.return !== null && (on(e, 1), ca(e, 1, 0));
  }
  function Ml(e) {
    for (; e === Ao; ) Ao = xn[--Dn], xn[Dn] = null, ao = xn[--Dn], xn[Dn] = null;
    for (; e === rn; ) rn = ot[--lt], ot[lt] = null, Rt = ot[--lt], ot[lt] = null, St = ot[--lt], ot[lt] = null;
  }
  var et = null, tt = null, ce = !1, ft = null;
  function ga(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function fa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, et = e, tt = Ot(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, et = e, tt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: St, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, et = e, tt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ll(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ql(e) {
    if (ce) {
      var t = tt;
      if (t) {
        var n = t;
        if (!fa(e, t)) {
          if (Ll(e)) throw Error(d(418));
          t = Ot(n.nextSibling);
          var r = et;
          t && fa(e, t) ? ga(r, n) : (e.flags = e.flags & -4097 | 2, ce = !1, et = e);
        }
      } else {
        if (Ll(e)) throw Error(d(418));
        e.flags = e.flags & -4097 | 2, ce = !1, et = e;
      }
    }
  }
  function da(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    et = e;
  }
  function so(e) {
    if (e !== et) return !1;
    if (!ce) return da(e), ce = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Dl(e.type, e.memoizedProps)), t && (t = tt)) {
      if (Ll(e)) throw Ea(), Error(d(418));
      for (; t; ) ga(e, t), t = Ot(t.nextSibling);
    }
    if (da(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                tt = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        tt = null;
      }
    } else tt = et ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ea() {
    for (var e = tt; e; ) e = Ot(e.nextSibling);
  }
  function Jn() {
    tt = et = null, ce = !1;
  }
  function Pl(e) {
    ft === null ? ft = [e] : ft.push(e);
  }
  var Ic = pe.ReactCurrentBatchConfig;
  function hr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(d(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(d(147, e));
        var o = r, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
          var A = o.refs;
          i === null ? delete A[l] : A[l] = i;
        }, t._stringRef = l, t);
      }
      if (typeof e != "string") throw Error(d(284));
      if (!n._owner) throw Error(d(290, e));
    }
    return e;
  }
  function uo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(d(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ha(e) {
    var t = e._init;
    return t(e._payload);
  }
  function pa(e) {
    function t(c, s) {
      if (e) {
        var g = c.deletions;
        g === null ? (c.deletions = [s], c.flags |= 16) : g.push(s);
      }
    }
    function n(c, s) {
      if (!e) return null;
      for (; s !== null; ) t(c, s), s = s.sibling;
      return null;
    }
    function r(c, s) {
      for (c = /* @__PURE__ */ new Map(); s !== null; ) s.key !== null ? c.set(s.key, s) : c.set(s.index, s), s = s.sibling;
      return c;
    }
    function o(c, s) {
      return c = _t(c, s), c.index = 0, c.sibling = null, c;
    }
    function l(c, s, g) {
      return c.index = g, e ? (g = c.alternate, g !== null ? (g = g.index, g < s ? (c.flags |= 2, s) : g) : (c.flags |= 2, s)) : (c.flags |= 1048576, s);
    }
    function i(c) {
      return e && c.alternate === null && (c.flags |= 2), c;
    }
    function A(c, s, g, B) {
      return s === null || s.tag !== 6 ? (s = Ji(g, c.mode, B), s.return = c, s) : (s = o(s, g), s.return = c, s);
    }
    function a(c, s, g, B) {
      var D = g.type;
      return D === re ? I(c, s, g.props.children, B, g.key) : s !== null && (s.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Be && ha(D) === s.type) ? (B = o(s, g.props), B.ref = hr(c, s, g), B.return = c, B) : (B = To(g.type, g.key, g.props, null, c.mode, B), B.ref = hr(c, s, g), B.return = c, B);
    }
    function E(c, s, g, B) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== g.containerInfo || s.stateNode.implementation !== g.implementation ? (s = Fi(g, c.mode, B), s.return = c, s) : (s = o(s, g.children || []), s.return = c, s);
    }
    function I(c, s, g, B, D) {
      return s === null || s.tag !== 7 ? (s = fn(g, c.mode, B, D), s.return = c, s) : (s = o(s, g), s.return = c, s);
    }
    function Q(c, s, g) {
      if (typeof s == "string" && s !== "" || typeof s == "number") return s = Ji("" + s, c.mode, g), s.return = c, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case De:
            return g = To(s.type, s.key, s.props, null, c.mode, g), g.ref = hr(c, null, s), g.return = c, g;
          case Ee:
            return s = Fi(s, c.mode, g), s.return = c, s;
          case Be:
            var B = s._init;
            return Q(c, B(s._payload), g);
        }
        if (Yn(s) || F(s)) return s = fn(s, c.mode, g, null), s.return = c, s;
        uo(c, s);
      }
      return null;
    }
    function C(c, s, g, B) {
      var D = s !== null ? s.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number") return D !== null ? null : A(c, s, "" + g, B);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case De:
            return g.key === D ? a(c, s, g, B) : null;
          case Ee:
            return g.key === D ? E(c, s, g, B) : null;
          case Be:
            return D = g._init, C(
              c,
              s,
              D(g._payload),
              B
            );
        }
        if (Yn(g) || F(g)) return D !== null ? null : I(c, s, g, B, null);
        uo(c, g);
      }
      return null;
    }
    function v(c, s, g, B, D) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return c = c.get(g) || null, A(s, c, "" + B, D);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case De:
            return c = c.get(B.key === null ? g : B.key) || null, a(s, c, B, D);
          case Ee:
            return c = c.get(B.key === null ? g : B.key) || null, E(s, c, B, D);
          case Be:
            var U = B._init;
            return v(c, s, g, U(B._payload), D);
        }
        if (Yn(B) || F(B)) return c = c.get(g) || null, I(s, c, B, D, null);
        uo(s, B);
      }
      return null;
    }
    function S(c, s, g, B) {
      for (var D = null, U = null, N = s, K = s = 0, Re = null; N !== null && K < g.length; K++) {
        N.index > K ? (Re = N, N = null) : Re = N.sibling;
        var ee = C(c, N, g[K], B);
        if (ee === null) {
          N === null && (N = Re);
          break;
        }
        e && N && ee.alternate === null && t(c, N), s = l(ee, s, K), U === null ? D = ee : U.sibling = ee, U = ee, N = Re;
      }
      if (K === g.length) return n(c, N), ce && on(c, K), D;
      if (N === null) {
        for (; K < g.length; K++) N = Q(c, g[K], B), N !== null && (s = l(N, s, K), U === null ? D = N : U.sibling = N, U = N);
        return ce && on(c, K), D;
      }
      for (N = r(c, N); K < g.length; K++) Re = v(N, c, K, g[K], B), Re !== null && (e && Re.alternate !== null && N.delete(Re.key === null ? K : Re.key), s = l(Re, s, K), U === null ? D = Re : U.sibling = Re, U = Re);
      return e && N.forEach(function($t) {
        return t(c, $t);
      }), ce && on(c, K), D;
    }
    function x(c, s, g, B) {
      var D = F(g);
      if (typeof D != "function") throw Error(d(150));
      if (g = D.call(g), g == null) throw Error(d(151));
      for (var U = D = null, N = s, K = s = 0, Re = null, ee = g.next(); N !== null && !ee.done; K++, ee = g.next()) {
        N.index > K ? (Re = N, N = null) : Re = N.sibling;
        var $t = C(c, N, ee.value, B);
        if ($t === null) {
          N === null && (N = Re);
          break;
        }
        e && N && $t.alternate === null && t(c, N), s = l($t, s, K), U === null ? D = $t : U.sibling = $t, U = $t, N = Re;
      }
      if (ee.done) return n(
        c,
        N
      ), ce && on(c, K), D;
      if (N === null) {
        for (; !ee.done; K++, ee = g.next()) ee = Q(c, ee.value, B), ee !== null && (s = l(ee, s, K), U === null ? D = ee : U.sibling = ee, U = ee);
        return ce && on(c, K), D;
      }
      for (N = r(c, N); !ee.done; K++, ee = g.next()) ee = v(N, c, K, ee.value, B), ee !== null && (e && ee.alternate !== null && N.delete(ee.key === null ? K : ee.key), s = l(ee, s, K), U === null ? D = ee : U.sibling = ee, U = ee);
      return e && N.forEach(function(_c) {
        return t(c, _c);
      }), ce && on(c, K), D;
    }
    function Ie(c, s, g, B) {
      if (typeof g == "object" && g !== null && g.type === re && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case De:
            e: {
              for (var D = g.key, U = s; U !== null; ) {
                if (U.key === D) {
                  if (D = g.type, D === re) {
                    if (U.tag === 7) {
                      n(c, U.sibling), s = o(U, g.props.children), s.return = c, c = s;
                      break e;
                    }
                  } else if (U.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Be && ha(D) === U.type) {
                    n(c, U.sibling), s = o(U, g.props), s.ref = hr(c, U, g), s.return = c, c = s;
                    break e;
                  }
                  n(c, U);
                  break;
                } else t(c, U);
                U = U.sibling;
              }
              g.type === re ? (s = fn(g.props.children, c.mode, B, g.key), s.return = c, c = s) : (B = To(g.type, g.key, g.props, null, c.mode, B), B.ref = hr(c, s, g), B.return = c, c = B);
            }
            return i(c);
          case Ee:
            e: {
              for (U = g.key; s !== null; ) {
                if (s.key === U) if (s.tag === 4 && s.stateNode.containerInfo === g.containerInfo && s.stateNode.implementation === g.implementation) {
                  n(c, s.sibling), s = o(s, g.children || []), s.return = c, c = s;
                  break e;
                } else {
                  n(c, s);
                  break;
                }
                else t(c, s);
                s = s.sibling;
              }
              s = Fi(g, c.mode, B), s.return = c, c = s;
            }
            return i(c);
          case Be:
            return U = g._init, Ie(c, s, U(g._payload), B);
        }
        if (Yn(g)) return S(c, s, g, B);
        if (F(g)) return x(c, s, g, B);
        uo(c, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, s !== null && s.tag === 6 ? (n(c, s.sibling), s = o(s, g), s.return = c, c = s) : (n(c, s), s = Ji(g, c.mode, B), s.return = c, c = s), i(c)) : n(c, s);
    }
    return Ie;
  }
  var Fn = pa(!0), Ca = pa(!1), co = Ht(null), go = null, Un = null, Ol = null;
  function Hl() {
    Ol = Un = go = null;
  }
  function Vl(e) {
    var t = co.current;
    ae(co), e._currentValue = t;
  }
  function Gl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Nn(e, t) {
    go = e, Ol = Un = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (je = !0), e.firstContext = null);
  }
  function it(e) {
    var t = e._currentValue;
    if (Ol !== e) if (e = { context: e, memoizedValue: t, next: null }, Un === null) {
      if (go === null) throw Error(d(308));
      Un = e, go.dependencies = { lanes: 0, firstContext: e };
    } else Un = Un.next = e;
    return t;
  }
  var ln = null;
  function Yl(e) {
    ln === null ? ln = [e] : ln.push(e);
  }
  function Ia(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Yl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, xt(e, r);
  }
  function xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Yt = !1;
  function zl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Qa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Dt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (_ & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, xt(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, Yl(r)) : (t.next = o.next, o.next = t), r.interleaved = t, xt(e, n);
  }
  function fo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, il(e, n);
    }
  }
  function Ba(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, l = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          l === null ? o = l = i : l = l.next = i, n = n.next;
        } while (n !== null);
        l === null ? o = l = t : l = l.next = t;
      } else o = l = t;
      n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Eo(e, t, n, r) {
    var o = e.updateQueue;
    Yt = !1;
    var l = o.firstBaseUpdate, i = o.lastBaseUpdate, A = o.shared.pending;
    if (A !== null) {
      o.shared.pending = null;
      var a = A, E = a.next;
      a.next = null, i === null ? l = E : i.next = E, i = a;
      var I = e.alternate;
      I !== null && (I = I.updateQueue, A = I.lastBaseUpdate, A !== i && (A === null ? I.firstBaseUpdate = E : A.next = E, I.lastBaseUpdate = a));
    }
    if (l !== null) {
      var Q = o.baseState;
      i = 0, I = E = a = null, A = l;
      do {
        var C = A.lane, v = A.eventTime;
        if ((r & C) === C) {
          I !== null && (I = I.next = {
            eventTime: v,
            lane: 0,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null
          });
          e: {
            var S = e, x = A;
            switch (C = t, v = n, x.tag) {
              case 1:
                if (S = x.payload, typeof S == "function") {
                  Q = S.call(v, Q, C);
                  break e;
                }
                Q = S;
                break e;
              case 3:
                S.flags = S.flags & -65537 | 128;
              case 0:
                if (S = x.payload, C = typeof S == "function" ? S.call(v, Q, C) : S, C == null) break e;
                Q = y({}, Q, C);
                break e;
              case 2:
                Yt = !0;
            }
          }
          A.callback !== null && A.lane !== 0 && (e.flags |= 64, C = o.effects, C === null ? o.effects = [A] : C.push(A));
        } else v = { eventTime: v, lane: C, tag: A.tag, payload: A.payload, callback: A.callback, next: null }, I === null ? (E = I = v, a = Q) : I = I.next = v, i |= C;
        if (A = A.next, A === null) {
          if (A = o.shared.pending, A === null) break;
          C = A, A = C.next, C.next = null, o.lastBaseUpdate = C, o.shared.pending = null;
        }
      } while (!0);
      if (I === null && (a = Q), o.baseState = a, o.firstBaseUpdate = E, o.lastBaseUpdate = I, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          i |= o.lane, o = o.next;
        while (o !== t);
      } else l === null && (o.shared.lanes = 0);
      sn |= i, e.lanes = i, e.memoizedState = Q;
    }
  }
  function ma(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(d(191, o));
        o.call(r);
      }
    }
  }
  var pr = {}, Bt = Ht(pr), Cr = Ht(pr), Ir = Ht(pr);
  function An(e) {
    if (e === pr) throw Error(d(174));
    return e;
  }
  function Xl(e, t) {
    switch (ie(Ir, t), ie(Cr, e), ie(Bt, pr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : jo(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = jo(t, e);
    }
    ae(Bt), ie(Bt, t);
  }
  function Tn() {
    ae(Bt), ae(Cr), ae(Ir);
  }
  function wa(e) {
    An(Ir.current);
    var t = An(Bt.current), n = jo(t, e.type);
    t !== n && (ie(Cr, e), ie(Bt, n));
  }
  function jl(e) {
    Cr.current === e && (ae(Bt), ae(Cr));
  }
  var ge = Ht(0);
  function ho(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Wl = [];
  function Zl() {
    for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
    Wl.length = 0;
  }
  var po = pe.ReactCurrentDispatcher, bl = pe.ReactCurrentBatchConfig, an = 0, fe = null, we = null, ke = null, Co = !1, Qr = !1, Br = 0, Qc = 0;
  function Ke() {
    throw Error(d(321));
  }
  function _l(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function $l(e, t, n, r, o, l) {
    if (an = l, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, po.current = e === null || e.memoizedState === null ? vc : yc, e = n(r, o), Qr) {
      l = 0;
      do {
        if (Qr = !1, Br = 0, 25 <= l) throw Error(d(301));
        l += 1, ke = we = null, t.updateQueue = null, po.current = kc, e = n(r, o);
      } while (Qr);
    }
    if (po.current = Bo, t = we !== null && we.next !== null, an = 0, ke = we = fe = null, Co = !1, t) throw Error(d(300));
    return e;
  }
  function ei() {
    var e = Br !== 0;
    return Br = 0, e;
  }
  function mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ke === null ? fe.memoizedState = ke = e : ke = ke.next = e, ke;
  }
  function At() {
    if (we === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = ke === null ? fe.memoizedState : ke.next;
    if (t !== null) ke = t, we = e;
    else {
      if (e === null) throw Error(d(310));
      we = e, e = { memoizedState: we.memoizedState, baseState: we.baseState, baseQueue: we.baseQueue, queue: we.queue, next: null }, ke === null ? fe.memoizedState = ke = e : ke = ke.next = e;
    }
    return ke;
  }
  function mr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ti(e) {
    var t = At(), n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = we, o = r.baseQueue, l = n.pending;
    if (l !== null) {
      if (o !== null) {
        var i = o.next;
        o.next = l.next, l.next = i;
      }
      r.baseQueue = o = l, n.pending = null;
    }
    if (o !== null) {
      l = o.next, r = r.baseState;
      var A = i = null, a = null, E = l;
      do {
        var I = E.lane;
        if ((an & I) === I) a !== null && (a = a.next = { lane: 0, action: E.action, hasEagerState: E.hasEagerState, eagerState: E.eagerState, next: null }), r = E.hasEagerState ? E.eagerState : e(r, E.action);
        else {
          var Q = {
            lane: I,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          };
          a === null ? (A = a = Q, i = r) : a = a.next = Q, fe.lanes |= I, sn |= I;
        }
        E = E.next;
      } while (E !== null && E !== l);
      a === null ? i = r : a.next = A, gt(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        l = o.lane, fe.lanes |= l, sn |= l, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ni(e) {
    var t = At(), n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, l = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var i = o = o.next;
      do
        l = e(l, i.action), i = i.next;
      while (i !== o);
      gt(l, t.memoizedState) || (je = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function va() {
  }
  function ya(e, t) {
    var n = fe, r = At(), o = t(), l = !gt(r.memoizedState, o);
    if (l && (r.memoizedState = o, je = !0), r = r.queue, ri(Ra.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || ke !== null && ke.memoizedState.tag & 1) {
      if (n.flags |= 2048, wr(9, Sa.bind(null, n, r, o, t), void 0, null), Se === null) throw Error(d(349));
      (an & 30) !== 0 || ka(n, t, o);
    }
    return o;
  }
  function ka(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Sa(e, t, n, r) {
    t.value = n, t.getSnapshot = r, xa(t) && Da(e);
  }
  function Ra(e, t, n) {
    return n(function() {
      xa(t) && Da(e);
    });
  }
  function xa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Da(e) {
    var t = xt(e, 1);
    t !== null && pt(t, e, 1, -1);
  }
  function Ja(e) {
    var t = mt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: mr, lastRenderedState: e }, t.queue = e, e = e.dispatch = wc.bind(null, fe, e), [t.memoizedState, e];
  }
  function wr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Fa() {
    return At().memoizedState;
  }
  function Io(e, t, n, r) {
    var o = mt();
    fe.flags |= e, o.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Qo(e, t, n, r) {
    var o = At();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (we !== null) {
      var i = we.memoizedState;
      if (l = i.destroy, r !== null && _l(r, i.deps)) {
        o.memoizedState = wr(t, n, l, r);
        return;
      }
    }
    fe.flags |= e, o.memoizedState = wr(1 | t, n, l, r);
  }
  function Ua(e, t) {
    return Io(8390656, 8, e, t);
  }
  function ri(e, t) {
    return Qo(2048, 8, e, t);
  }
  function Na(e, t) {
    return Qo(4, 2, e, t);
  }
  function Ta(e, t) {
    return Qo(4, 4, e, t);
  }
  function Ka(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ma(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Qo(4, 4, Ka.bind(null, t, e), n);
  }
  function oi() {
  }
  function La(e, t) {
    var n = At();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _l(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function qa(e, t) {
    var n = At();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _l(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Pa(e, t, n) {
    return (an & 21) === 0 ? (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n) : (gt(n, t) || (n = hA(), fe.lanes |= n, sn |= n, e.baseState = !0), t);
  }
  function Bc(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = bl.transition;
    bl.transition = {};
    try {
      e(!1), t();
    } finally {
      ne = n, bl.transition = r;
    }
  }
  function Oa() {
    return At().memoizedState;
  }
  function mc(e, t, n) {
    var r = Zt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ha(e)) Va(t, n);
    else if (n = Ia(e, t, n, r), n !== null) {
      var o = Ve();
      pt(n, e, r, o), Ga(n, t, r);
    }
  }
  function wc(e, t, n) {
    var r = Zt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ha(e)) Va(t, o);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
        var i = t.lastRenderedState, A = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = A, gt(A, i)) {
          var a = t.interleaved;
          a === null ? (o.next = o, Yl(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      n = Ia(e, t, o, r), n !== null && (o = Ve(), pt(n, e, r, o), Ga(n, t, r));
    }
  }
  function Ha(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe;
  }
  function Va(e, t) {
    Qr = Co = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ga(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, il(e, n);
    }
  }
  var Bo = { readContext: it, useCallback: Ke, useContext: Ke, useEffect: Ke, useImperativeHandle: Ke, useInsertionEffect: Ke, useLayoutEffect: Ke, useMemo: Ke, useReducer: Ke, useRef: Ke, useState: Ke, useDebugValue: Ke, useDeferredValue: Ke, useTransition: Ke, useMutableSource: Ke, useSyncExternalStore: Ke, useId: Ke, unstable_isNewReconciler: !1 }, vc = { readContext: it, useCallback: function(e, t) {
    return mt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: it, useEffect: Ua, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Io(
      4194308,
      4,
      Ka.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Io(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Io(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = mt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = mt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = mc.bind(null, fe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = mt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ja, useDebugValue: oi, useDeferredValue: function(e) {
    return mt().memoizedState = e;
  }, useTransition: function() {
    var e = Ja(!1), t = e[0];
    return e = Bc.bind(null, e[1]), mt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = fe, o = mt();
    if (ce) {
      if (n === void 0) throw Error(d(407));
      n = n();
    } else {
      if (n = t(), Se === null) throw Error(d(349));
      (an & 30) !== 0 || ka(r, t, n);
    }
    o.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return o.queue = l, Ua(Ra.bind(
      null,
      r,
      l,
      e
    ), [e]), r.flags |= 2048, wr(9, Sa.bind(null, r, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = mt(), t = Se.identifierPrefix;
    if (ce) {
      var n = Rt, r = St;
      n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Br++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Qc++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, yc = {
    readContext: it,
    useCallback: La,
    useContext: it,
    useEffect: ri,
    useImperativeHandle: Ma,
    useInsertionEffect: Na,
    useLayoutEffect: Ta,
    useMemo: qa,
    useReducer: ti,
    useRef: Fa,
    useState: function() {
      return ti(mr);
    },
    useDebugValue: oi,
    useDeferredValue: function(e) {
      var t = At();
      return Pa(t, we.memoizedState, e);
    },
    useTransition: function() {
      var e = ti(mr)[0], t = At().memoizedState;
      return [e, t];
    },
    useMutableSource: va,
    useSyncExternalStore: ya,
    useId: Oa,
    unstable_isNewReconciler: !1
  }, kc = { readContext: it, useCallback: La, useContext: it, useEffect: ri, useImperativeHandle: Ma, useInsertionEffect: Na, useLayoutEffect: Ta, useMemo: qa, useReducer: ni, useRef: Fa, useState: function() {
    return ni(mr);
  }, useDebugValue: oi, useDeferredValue: function(e) {
    var t = At();
    return we === null ? t.memoizedState = e : Pa(t, we.memoizedState, e);
  }, useTransition: function() {
    var e = ni(mr)[0], t = At().memoizedState;
    return [e, t];
  }, useMutableSource: va, useSyncExternalStore: ya, useId: Oa, unstable_isNewReconciler: !1 };
  function dt(e, t) {
    if (e && e.defaultProps) {
      t = y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function li(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var mo = { isMounted: function(e) {
    return (e = e._reactInternals) ? en(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ve(), o = Zt(e), l = Dt(r, o);
    l.payload = t, n != null && (l.callback = n), t = zt(e, l, o), t !== null && (pt(t, e, o, r), fo(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ve(), o = Zt(e), l = Dt(r, o);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = zt(e, l, o), t !== null && (pt(t, e, o, r), fo(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ve(), r = Zt(e), o = Dt(n, r);
    o.tag = 2, t != null && (o.callback = t), t = zt(e, o, r), t !== null && (pt(t, e, r, n), fo(t, e, r));
  } };
  function Ya(e, t, n, r, o, l, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !sr(n, r) || !sr(o, l) : !0;
  }
  function za(e, t, n) {
    var r = !1, o = Vt, l = t.contextType;
    return typeof l == "object" && l !== null ? l = it(l) : (o = Xe(t) ? nn : Te.current, r = t.contextTypes, l = (r = r != null) ? Rn(e, o) : Vt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = mo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function Xa(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mo.enqueueReplaceState(t, t.state, null);
  }
  function ii(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, zl(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? o.context = it(l) : (l = Xe(t) ? nn : Te.current, o.context = Rn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (li(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && mo.enqueueReplaceState(o, o.state, null), Eo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Kn(e, t) {
    try {
      var n = "", r = t;
      do
        n += Z(r), r = r.return;
      while (r);
      var o = n;
    } catch (l) {
      o = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Ai(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ai(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Sc = typeof WeakMap == "function" ? WeakMap : Map;
  function ja(e, t, n) {
    n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      xo || (xo = !0, wi = r), ai(e, t);
    }, n;
  }
  function Wa(e, t, n) {
    n = Dt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        ai(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      ai(e, t), typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function Za(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Sc();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = Oc.bind(null, e, t, n), t.then(e, e));
  }
  function ba(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function _a(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, zt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Rc = pe.ReactCurrentOwner, je = !1;
  function He(e, t, n, r) {
    t.child = e === null ? Ca(t, null, n, r) : Fn(t, e.child, n, r);
  }
  function $a(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return Nn(t, o), r = $l(e, t, n, r, l, o), n = ei(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (ce && n && Kl(t), t.flags |= 1, He(e, t, r, o), t.child);
  }
  function es(e, t, n, r, o) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !Di(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, ts(e, t, l, r, o)) : (e = To(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, (e.lanes & o) === 0) {
      var i = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : sr, n(i, r) && e.ref === t.ref) return Jt(e, t, o);
    }
    return t.flags |= 1, e = _t(l, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ts(e, t, n, r, o) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (sr(l, r) && e.ref === t.ref) if (je = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (je = !0);
      else return t.lanes = e.lanes, Jt(e, t, o);
    }
    return si(e, t, n, r, o);
  }
  function ns(e, t, n) {
    var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ie(Ln, nt), nt |= n;
    else {
      if ((n & 1073741824) === 0) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ie(Ln, nt), nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, ie(Ln, nt), nt |= r;
    }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ie(Ln, nt), nt |= r;
    return He(e, t, o, n), t.child;
  }
  function rs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function si(e, t, n, r, o) {
    var l = Xe(n) ? nn : Te.current;
    return l = Rn(t, l), Nn(t, o), n = $l(e, t, n, r, l, o), r = ei(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (ce && r && Kl(t), t.flags |= 1, He(e, t, n, o), t.child);
  }
  function os(e, t, n, r, o) {
    if (Xe(n)) {
      var l = !0;
      lo(t);
    } else l = !1;
    if (Nn(t, o), t.stateNode === null) vo(e, t), za(t, n, r), ii(t, n, r, o), r = !0;
    else if (e === null) {
      var i = t.stateNode, A = t.memoizedProps;
      i.props = A;
      var a = i.context, E = n.contextType;
      typeof E == "object" && E !== null ? E = it(E) : (E = Xe(n) ? nn : Te.current, E = Rn(t, E));
      var I = n.getDerivedStateFromProps, Q = typeof I == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      Q || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (A !== r || a !== E) && Xa(t, i, r, E), Yt = !1;
      var C = t.memoizedState;
      i.state = C, Eo(t, r, i, o), a = t.memoizedState, A !== r || C !== a || ze.current || Yt ? (typeof I == "function" && (li(t, n, I, r), a = t.memoizedState), (A = Yt || Ya(t, n, A, r, C, a, E)) ? (Q || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = E, r = A) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, Qa(e, t), A = t.memoizedProps, E = t.type === t.elementType ? A : dt(t.type, A), i.props = E, Q = t.pendingProps, C = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = it(a) : (a = Xe(n) ? nn : Te.current, a = Rn(t, a));
      var v = n.getDerivedStateFromProps;
      (I = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (A !== Q || C !== a) && Xa(t, i, r, a), Yt = !1, C = t.memoizedState, i.state = C, Eo(t, r, i, o);
      var S = t.memoizedState;
      A !== Q || C !== S || ze.current || Yt ? (typeof v == "function" && (li(t, n, v, r), S = t.memoizedState), (E = Yt || Ya(t, n, E, r, C, S, a) || !1) ? (I || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || A === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = a, r = E) : (typeof i.componentDidUpdate != "function" || A === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ui(e, t, n, r, l, o);
  }
  function ui(e, t, n, r, o, l) {
    rs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return o && sa(t, n, !1), Jt(e, t, l);
    r = t.stateNode, Rc.current = t;
    var A = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = Fn(t, e.child, null, l), t.child = Fn(t, null, A, l)) : He(e, t, A, l), t.memoizedState = r.state, o && sa(t, n, !0), t.child;
  }
  function ls(e) {
    var t = e.stateNode;
    t.pendingContext ? Aa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Aa(e, t.context, !1), Xl(e, t.containerInfo);
  }
  function is(e, t, n, r, o) {
    return Jn(), Pl(o), t.flags |= 256, He(e, t, n, r), t.child;
  }
  var ci = { dehydrated: null, treeContext: null, retryLane: 0 };
  function gi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function As(e, t, n) {
    var r = t.pendingProps, o = ge.current, l = !1, i = (t.flags & 128) !== 0, A;
    if ((A = i) || (A = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), A ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ie(ge, o & 1), e === null)
      return ql(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, (r & 1) === 0 && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Ko(i, r, 0, null), e = fn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = gi(n), t.memoizedState = ci, e) : fi(t, i));
    if (o = e.memoizedState, o !== null && (A = o.dehydrated, A !== null)) return xc(e, t, i, r, A, o, n);
    if (l) {
      l = r.fallback, i = t.mode, o = e.child, A = o.sibling;
      var a = { mode: "hidden", children: r.children };
      return (i & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = _t(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), A !== null ? l = _t(A, l) : (l = fn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? gi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ci, r;
    }
    return l = e.child, e = l.sibling, r = _t(l, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function fi(e, t) {
    return t = Ko({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function wo(e, t, n, r) {
    return r !== null && Pl(r), Fn(t, e.child, null, n), e = fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function xc(e, t, n, r, o, l, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ai(Error(d(422))), wo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Ko({ mode: "visible", children: r.children }, o, 0, null), l = fn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, (t.mode & 1) !== 0 && Fn(t, e.child, null, i), t.child.memoizedState = gi(i), t.memoizedState = ci, l);
    if ((t.mode & 1) === 0) return wo(e, t, i, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var A = r.dgst;
      return r = A, l = Error(d(419)), r = Ai(l, r, void 0), wo(e, t, i, r);
    }
    if (A = (i & e.childLanes) !== 0, je || A) {
      if (r = Se, r !== null) {
        switch (i & -i) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (r.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, xt(e, o), pt(r, e, o, -1));
      }
      return xi(), r = Ai(Error(d(421))), wo(e, t, i, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hc.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, tt = Ot(o.nextSibling), et = t, ce = !0, ft = null, e !== null && (ot[lt++] = St, ot[lt++] = Rt, ot[lt++] = rn, St = e.id, Rt = e.overflow, rn = t), t = fi(t, r.children), t.flags |= 4096, t);
  }
  function as(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Gl(e.return, t, n);
  }
  function di(e, t, n, r, o) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
  }
  function ss(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, l = r.tail;
    if (He(e, t, r.children, n), r = ge.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && as(e, n, t);
        else if (e.tag === 19) as(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (ie(ge, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ho(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), di(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && ho(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        di(t, !0, n, null, l);
        break;
      case "together":
        di(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function vo(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = _t(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Dc(e, t, n) {
    switch (t.tag) {
      case 3:
        ls(t), Jn();
        break;
      case 5:
        wa(t);
        break;
      case 1:
        Xe(t.type) && lo(t);
        break;
      case 4:
        Xl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        ie(co, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ie(ge, ge.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? As(e, t, n) : (ie(ge, ge.current & 1), e = Jt(e, t, n), e !== null ? e.sibling : null);
        ie(ge, ge.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ss(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ie(ge, ge.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ns(e, t, n);
    }
    return Jt(e, t, n);
  }
  var us, Ei, cs, gs;
  us = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Ei = function() {
  }, cs = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, An(Bt.current);
      var l = null;
      switch (n) {
        case "input":
          o = Ut(e, o), r = Ut(e, r), l = [];
          break;
        case "select":
          o = y({}, o, { value: void 0 }), r = y({}, r, { value: void 0 }), l = [];
          break;
        case "textarea":
          o = Xo(e, o), r = Xo(e, r), l = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = no);
      }
      Wo(n, r);
      var i;
      n = null;
      for (E in o) if (!r.hasOwnProperty(E) && o.hasOwnProperty(E) && o[E] != null) if (E === "style") {
        var A = o[E];
        for (i in A) A.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else E !== "dangerouslySetInnerHTML" && E !== "children" && E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && E !== "autoFocus" && (L.hasOwnProperty(E) ? l || (l = []) : (l = l || []).push(E, null));
      for (E in r) {
        var a = r[E];
        if (A = o != null ? o[E] : void 0, r.hasOwnProperty(E) && a !== A && (a != null || A != null)) if (E === "style") if (A) {
          for (i in A) !A.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in a) a.hasOwnProperty(i) && A[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
        } else n || (l || (l = []), l.push(
          E,
          n
        )), n = a;
        else E === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, A = A ? A.__html : void 0, a != null && A !== a && (l = l || []).push(E, a)) : E === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(E, "" + a) : E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && (L.hasOwnProperty(E) ? (a != null && E === "onScroll" && Ae("scroll", e), l || A === a || (l = [])) : (l = l || []).push(E, a));
      }
      n && (l = l || []).push("style", n);
      var E = l;
      (t.updateQueue = E) && (t.flags |= 4);
    }
  }, gs = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function vr(e, t) {
    if (!ce) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Jc(e, t, n) {
    var r = t.pendingProps;
    switch (Ml(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Me(t), null;
      case 1:
        return Xe(t.type) && oo(), Me(t), null;
      case 3:
        return r = t.stateNode, Tn(), ae(ze), ae(Te), Zl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (so(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ft !== null && (ki(ft), ft = null))), Ei(e, t), Me(t), null;
      case 5:
        jl(t);
        var o = An(Ir.current);
        if (n = t.type, e !== null && t.stateNode != null) cs(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(d(166));
            return Me(t), null;
          }
          if (e = An(Bt.current), so(t)) {
            r = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (r[Qt] = t, r[dr] = l, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ae("cancel", r), Ae("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ae("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < cr.length; o++) Ae(cr[o], r);
                break;
              case "source":
                Ae("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ae(
                  "error",
                  r
                ), Ae("load", r);
                break;
              case "details":
                Ae("toggle", r);
                break;
              case "input":
                Nt(r, l), Ae("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!l.multiple }, Ae("invalid", r);
                break;
              case "textarea":
                Wi(r, l), Ae("invalid", r);
            }
            Wo(n, l), o = null;
            for (var i in l) if (l.hasOwnProperty(i)) {
              var A = l[i];
              i === "children" ? typeof A == "string" ? r.textContent !== A && (l.suppressHydrationWarning !== !0 && to(r.textContent, A, e), o = ["children", A]) : typeof A == "number" && r.textContent !== "" + A && (l.suppressHydrationWarning !== !0 && to(
                r.textContent,
                A,
                e
              ), o = ["children", "" + A]) : L.hasOwnProperty(i) && A != null && i === "onScroll" && Ae("scroll", r);
            }
            switch (n) {
              case "input":
                vt(r), ji(r, l, !0);
                break;
              case "textarea":
                vt(r), bi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = no);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _i(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Qt] = t, e[dr] = r, us(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = Zo(n, r), n) {
                case "dialog":
                  Ae("cancel", e), Ae("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ae("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < cr.length; o++) Ae(cr[o], e);
                  o = r;
                  break;
                case "source":
                  Ae("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ae(
                    "error",
                    e
                  ), Ae("load", e), o = r;
                  break;
                case "details":
                  Ae("toggle", e), o = r;
                  break;
                case "input":
                  Nt(e, r), o = Ut(e, r), Ae("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = y({}, r, { value: void 0 }), Ae("invalid", e);
                  break;
                case "textarea":
                  Wi(e, r), o = Xo(e, r), Ae("invalid", e);
                  break;
                default:
                  o = r;
              }
              Wo(n, o), A = o;
              for (l in A) if (A.hasOwnProperty(l)) {
                var a = A[l];
                l === "style" ? tA(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && $i(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && zn(e, a) : typeof a == "number" && zn(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (L.hasOwnProperty(l) ? a != null && l === "onScroll" && Ae("scroll", e) : a != null && Qe(e, l, a, i));
              }
              switch (n) {
                case "input":
                  vt(e), ji(e, r, !1);
                  break;
                case "textarea":
                  vt(e), bi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + R(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, l = r.value, l != null ? hn(e, !!r.multiple, l, !1) : r.defaultValue != null && hn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = no);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Me(t), null;
      case 6:
        if (e && t.stateNode != null) gs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(d(166));
          if (n = An(Ir.current), An(Bt.current), so(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Qt] = t, (l = r.nodeValue !== n) && (e = et, e !== null)) switch (e.tag) {
              case 3:
                to(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && to(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            l && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Qt] = t, t.stateNode = r;
        }
        return Me(t), null;
      case 13:
        if (ae(ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ce && tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ea(), Jn(), t.flags |= 98560, l = !1;
          else if (l = so(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(d(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
              l[Qt] = t;
            } else Jn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Me(t), l = !1;
          } else ft !== null && (ki(ft), ft = null), l = !0;
          if (!l) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ge.current & 1) !== 0 ? ve === 0 && (ve = 3) : xi())), t.updateQueue !== null && (t.flags |= 4), Me(t), null);
      case 4:
        return Tn(), Ei(e, t), e === null && gr(t.stateNode.containerInfo), Me(t), null;
      case 10:
        return Vl(t.type._context), Me(t), null;
      case 17:
        return Xe(t.type) && oo(), Me(t), null;
      case 19:
        if (ae(ge), l = t.memoizedState, l === null) return Me(t), null;
        if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) vr(l, !1);
        else {
          if (ve !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (i = ho(e), i !== null) {
              for (t.flags |= 128, vr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ie(ge, ge.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && Ce() > qn && (t.flags |= 128, r = !0, vr(l, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ho(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), vr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ce) return Me(t), null;
          } else 2 * Ce() - l.renderingStartTime > qn && n !== 1073741824 && (t.flags |= 128, r = !0, vr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Ce(), t.sibling = null, n = ge.current, ie(ge, r ? n & 1 | 2 : n & 1), t) : (Me(t), null);
      case 22:
      case 23:
        return Ri(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (nt & 1073741824) !== 0 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function Fc(e, t) {
    switch (Ml(t), t.tag) {
      case 1:
        return Xe(t.type) && oo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Tn(), ae(ze), ae(Te), Zl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return jl(t), null;
      case 13:
        if (ae(ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(d(340));
          Jn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ae(ge), null;
      case 4:
        return Tn(), null;
      case 10:
        return Vl(t.type._context), null;
      case 22:
      case 23:
        return Ri(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yo = !1, Le = !1, Uc = typeof WeakSet == "function" ? WeakSet : Set, k = null;
  function Mn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      he(e, t, r);
    }
    else n.current = null;
  }
  function hi(e, t, n) {
    try {
      n();
    } catch (r) {
      he(e, t, r);
    }
  }
  var fs = !1;
  function Nc(e, t) {
    if (Rl = Gr, e = YA(), Ql(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, A = -1, a = -1, E = 0, I = 0, Q = e, C = null;
          t: for (; ; ) {
            for (var v; Q !== n || o !== 0 && Q.nodeType !== 3 || (A = i + o), Q !== l || r !== 0 && Q.nodeType !== 3 || (a = i + r), Q.nodeType === 3 && (i += Q.nodeValue.length), (v = Q.firstChild) !== null; )
              C = Q, Q = v;
            for (; ; ) {
              if (Q === e) break t;
              if (C === n && ++E === o && (A = i), C === l && ++I === r && (a = i), (v = Q.nextSibling) !== null) break;
              Q = C, C = Q.parentNode;
            }
            Q = v;
          }
          n = A === -1 || a === -1 ? null : { start: A, end: a };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (xl = { focusedElem: e, selectionRange: n }, Gr = !1, k = t; k !== null; ) if (t = k, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, k = e;
    else for (; k !== null; ) {
      t = k;
      try {
        var S = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (S !== null) {
              var x = S.memoizedProps, Ie = S.memoizedState, c = t.stateNode, s = c.getSnapshotBeforeUpdate(t.elementType === t.type ? x : dt(t.type, x), Ie);
              c.__reactInternalSnapshotBeforeUpdate = s;
            }
            break;
          case 3:
            var g = t.stateNode.containerInfo;
            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (B) {
        he(t, t.return, B);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, k = e;
        break;
      }
      k = t.return;
    }
    return S = fs, fs = !1, S;
  }
  function yr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var l = o.destroy;
          o.destroy = void 0, l !== void 0 && hi(t, n, l);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function ko(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function pi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ds(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ds(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Qt], delete t[dr], delete t[Ul], delete t[hc], delete t[pc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Es(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function hs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Es(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = no));
    else if (r !== 4 && (e = e.child, e !== null)) for (Ci(e, t, n), e = e.sibling; e !== null; ) Ci(e, t, n), e = e.sibling;
  }
  function Ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), e = e.sibling;
  }
  var Je = null, Et = !1;
  function Xt(e, t, n) {
    for (n = n.child; n !== null; ) ps(e, t, n), n = n.sibling;
  }
  function ps(e, t, n) {
    if (It && typeof It.onCommitFiberUnmount == "function") try {
      It.onCommitFiberUnmount(Lr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Le || Mn(n, t);
      case 6:
        var r = Je, o = Et;
        Je = null, Xt(e, t, n), Je = r, Et = o, Je !== null && (Et ? (e = Je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Je.removeChild(n.stateNode));
        break;
      case 18:
        Je !== null && (Et ? (e = Je, n = n.stateNode, e.nodeType === 8 ? Fl(e.parentNode, n) : e.nodeType === 1 && Fl(e, n), rr(e)) : Fl(Je, n.stateNode));
        break;
      case 4:
        r = Je, o = Et, Je = n.stateNode.containerInfo, Et = !0, Xt(e, t, n), Je = r, Et = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var l = o, i = l.destroy;
            l = l.tag, i !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && hi(n, t, i), o = o.next;
          } while (o !== r);
        }
        Xt(e, t, n);
        break;
      case 1:
        if (!Le && (Mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (A) {
          he(n, t, A);
        }
        Xt(e, t, n);
        break;
      case 21:
        Xt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, Xt(e, t, n), Le = r) : Xt(e, t, n);
        break;
      default:
        Xt(e, t, n);
    }
  }
  function Cs(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Uc()), t.forEach(function(r) {
        var o = Vc.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e, i = t, A = i;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 5:
              Je = A.stateNode, Et = !1;
              break e;
            case 3:
              Je = A.stateNode.containerInfo, Et = !0;
              break e;
            case 4:
              Je = A.stateNode.containerInfo, Et = !0;
              break e;
          }
          A = A.return;
        }
        if (Je === null) throw Error(d(160));
        ps(l, i, o), Je = null, Et = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (E) {
        he(o, t, E);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Is(t, e), t = t.sibling;
  }
  function Is(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ht(t, e), wt(e), r & 4) {
          try {
            yr(3, e, e.return), ko(3, e);
          } catch (x) {
            he(e, e.return, x);
          }
          try {
            yr(5, e, e.return);
          } catch (x) {
            he(e, e.return, x);
          }
        }
        break;
      case 1:
        ht(t, e), wt(e), r & 512 && n !== null && Mn(n, n.return);
        break;
      case 5:
        if (ht(t, e), wt(e), r & 512 && n !== null && Mn(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            zn(o, "");
          } catch (x) {
            he(e, e.return, x);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, A = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            A === "input" && l.type === "radio" && l.name != null && Xi(o, l), Zo(A, i);
            var E = Zo(A, l);
            for (i = 0; i < a.length; i += 2) {
              var I = a[i], Q = a[i + 1];
              I === "style" ? tA(o, Q) : I === "dangerouslySetInnerHTML" ? $i(o, Q) : I === "children" ? zn(o, Q) : Qe(o, I, Q, E);
            }
            switch (A) {
              case "input":
                Yo(o, l);
                break;
              case "textarea":
                Zi(o, l);
                break;
              case "select":
                var C = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null ? hn(o, !!l.multiple, v, !1) : C !== !!l.multiple && (l.defaultValue != null ? hn(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : hn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[dr] = l;
          } catch (x) {
            he(e, e.return, x);
          }
        }
        break;
      case 6:
        if (ht(t, e), wt(e), r & 4) {
          if (e.stateNode === null) throw Error(d(162));
          o = e.stateNode, l = e.memoizedProps;
          try {
            o.nodeValue = l;
          } catch (x) {
            he(e, e.return, x);
          }
        }
        break;
      case 3:
        if (ht(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          rr(t.containerInfo);
        } catch (x) {
          he(e, e.return, x);
        }
        break;
      case 4:
        ht(t, e), wt(e);
        break;
      case 13:
        ht(t, e), wt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (mi = Ce())), r & 4 && Cs(e);
        break;
      case 22:
        if (I = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (E = Le) || I, ht(t, e), Le = E) : ht(t, e), wt(e), r & 8192) {
          if (E = e.memoizedState !== null, (e.stateNode.isHidden = E) && !I && (e.mode & 1) !== 0) for (k = e, I = e.child; I !== null; ) {
            for (Q = k = I; k !== null; ) {
              switch (C = k, v = C.child, C.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yr(4, C, C.return);
                  break;
                case 1:
                  Mn(C, C.return);
                  var S = C.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    r = C, n = C.return;
                    try {
                      t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                    } catch (x) {
                      he(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Mn(C, C.return);
                  break;
                case 22:
                  if (C.memoizedState !== null) {
                    ms(Q);
                    continue;
                  }
              }
              v !== null ? (v.return = C, k = v) : ms(Q);
            }
            I = I.sibling;
          }
          e: for (I = null, Q = e; ; ) {
            if (Q.tag === 5) {
              if (I === null) {
                I = Q;
                try {
                  o = Q.stateNode, E ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (A = Q.stateNode, a = Q.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, A.style.display = eA("display", i));
                } catch (x) {
                  he(e, e.return, x);
                }
              }
            } else if (Q.tag === 6) {
              if (I === null) try {
                Q.stateNode.nodeValue = E ? "" : Q.memoizedProps;
              } catch (x) {
                he(e, e.return, x);
              }
            } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === e) && Q.child !== null) {
              Q.child.return = Q, Q = Q.child;
              continue;
            }
            if (Q === e) break e;
            for (; Q.sibling === null; ) {
              if (Q.return === null || Q.return === e) break e;
              I === Q && (I = null), Q = Q.return;
            }
            I === Q && (I = null), Q.sibling.return = Q.return, Q = Q.sibling;
          }
        }
        break;
      case 19:
        ht(t, e), wt(e), r & 4 && Cs(e);
        break;
      case 21:
        break;
      default:
        ht(
          t,
          e
        ), wt(e);
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Es(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(d(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (zn(o, ""), r.flags &= -33);
            var l = hs(e);
            Ii(e, l, o);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, A = hs(e);
            Ci(e, A, i);
            break;
          default:
            throw Error(d(161));
        }
      } catch (a) {
        he(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Tc(e, t, n) {
    k = e, Qs(e);
  }
  function Qs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; k !== null; ) {
      var o = k, l = o.child;
      if (o.tag === 22 && r) {
        var i = o.memoizedState !== null || yo;
        if (!i) {
          var A = o.alternate, a = A !== null && A.memoizedState !== null || Le;
          A = yo;
          var E = Le;
          if (yo = i, (Le = a) && !E) for (k = o; k !== null; ) i = k, a = i.child, i.tag === 22 && i.memoizedState !== null ? ws(o) : a !== null ? (a.return = i, k = a) : ws(o);
          for (; l !== null; ) k = l, Qs(l), l = l.sibling;
          k = o, yo = A, Le = E;
        }
        Bs(e);
      } else (o.subtreeFlags & 8772) !== 0 && l !== null ? (l.return = o, k = l) : Bs(e);
    }
  }
  function Bs(e) {
    for (; k !== null; ) {
      var t = k;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || ko(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var l = t.updateQueue;
              l !== null && ma(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                ma(t, i, n);
              }
              break;
            case 5:
              var A = t.stateNode;
              if (n === null && t.flags & 4) {
                n = A;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var E = t.alternate;
                if (E !== null) {
                  var I = E.memoizedState;
                  if (I !== null) {
                    var Q = I.dehydrated;
                    Q !== null && rr(Q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(d(163));
          }
          Le || t.flags & 512 && pi(t);
        } catch (C) {
          he(t, t.return, C);
        }
      }
      if (t === e) {
        k = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, k = n;
        break;
      }
      k = t.return;
    }
  }
  function ms(e) {
    for (; k !== null; ) {
      var t = k;
      if (t === e) {
        k = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, k = n;
        break;
      }
      k = t.return;
    }
  }
  function ws(e) {
    for (; k !== null; ) {
      var t = k;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ko(4, t);
            } catch (a) {
              he(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                he(t, o, a);
              }
            }
            var l = t.return;
            try {
              pi(t);
            } catch (a) {
              he(t, l, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              pi(t);
            } catch (a) {
              he(t, i, a);
            }
        }
      } catch (a) {
        he(t, t.return, a);
      }
      if (t === e) {
        k = null;
        break;
      }
      var A = t.sibling;
      if (A !== null) {
        A.return = t.return, k = A;
        break;
      }
      k = t.return;
    }
  }
  var Kc = Math.ceil, So = pe.ReactCurrentDispatcher, Qi = pe.ReactCurrentOwner, at = pe.ReactCurrentBatchConfig, _ = 0, Se = null, me = null, Fe = 0, nt = 0, Ln = Ht(0), ve = 0, kr = null, sn = 0, Ro = 0, Bi = 0, Sr = null, We = null, mi = 0, qn = 1 / 0, Ft = null, xo = !1, wi = null, jt = null, Do = !1, Wt = null, Jo = 0, Rr = 0, vi = null, Fo = -1, Uo = 0;
  function Ve() {
    return (_ & 6) !== 0 ? Ce() : Fo !== -1 ? Fo : Fo = Ce();
  }
  function Zt(e) {
    return (e.mode & 1) === 0 ? 1 : (_ & 2) !== 0 && Fe !== 0 ? Fe & -Fe : Ic.transition !== null ? (Uo === 0 && (Uo = hA()), Uo) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yA(e.type)), e);
  }
  function pt(e, t, n, r) {
    if (50 < Rr) throw Rr = 0, vi = null, Error(d(185));
    _n(e, n, r), ((_ & 2) === 0 || e !== Se) && (e === Se && ((_ & 2) === 0 && (Ro |= n), ve === 4 && bt(e, Fe)), Ze(e, r), n === 1 && _ === 0 && (t.mode & 1) === 0 && (qn = Ce() + 500, io && Gt()));
  }
  function Ze(e, t) {
    var n = e.callbackNode;
    Iu(e, t);
    var r = Or(e, e === Se ? Fe : 0);
    if (r === 0) n !== null && fA(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && fA(n), t === 1) e.tag === 0 ? Cc(ys.bind(null, e)) : ua(ys.bind(null, e)), dc(function() {
        (_ & 6) === 0 && Gt();
      }), n = null;
      else {
        switch (pA(r)) {
          case 1:
            n = rl;
            break;
          case 4:
            n = dA;
            break;
          case 16:
            n = Mr;
            break;
          case 536870912:
            n = EA;
            break;
          default:
            n = Mr;
        }
        n = Us(n, vs.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function vs(e, t) {
    if (Fo = -1, Uo = 0, (_ & 6) !== 0) throw Error(d(327));
    var n = e.callbackNode;
    if (Pn() && e.callbackNode !== n) return null;
    var r = Or(e, e === Se ? Fe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = No(e, r);
    else {
      t = r;
      var o = _;
      _ |= 2;
      var l = Ss();
      (Se !== e || Fe !== t) && (Ft = null, qn = Ce() + 500, cn(e, t));
      do
        try {
          qc();
          break;
        } catch (A) {
          ks(e, A);
        }
      while (!0);
      Hl(), So.current = l, _ = o, me !== null ? t = 0 : (Se = null, Fe = 0, t = ve);
    }
    if (t !== 0) {
      if (t === 2 && (o = ol(e), o !== 0 && (r = o, t = yi(e, o))), t === 1) throw n = kr, cn(e, 0), bt(e, r), Ze(e, Ce()), n;
      if (t === 6) bt(e, r);
      else {
        if (o = e.current.alternate, (r & 30) === 0 && !Mc(o) && (t = No(e, r), t === 2 && (l = ol(e), l !== 0 && (r = l, t = yi(e, l))), t === 1)) throw n = kr, cn(e, 0), bt(e, r), Ze(e, Ce()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            gn(e, We, Ft);
            break;
          case 3:
            if (bt(e, r), (r & 130023424) === r && (t = mi + 500 - Ce(), 10 < t)) {
              if (Or(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                Ve(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = Jl(gn.bind(null, e, We, Ft), t);
              break;
            }
            gn(e, We, Ft);
            break;
          case 4:
            if (bt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var i = 31 - ct(r);
              l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
            }
            if (r = o, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kc(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Jl(gn.bind(null, e, We, Ft), r);
              break;
            }
            gn(e, We, Ft);
            break;
          case 5:
            gn(e, We, Ft);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Ze(e, Ce()), e.callbackNode === n ? vs.bind(null, e) : null;
  }
  function yi(e, t) {
    var n = Sr;
    return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = No(e, t), e !== 2 && (t = We, We = n, t !== null && ki(t)), e;
  }
  function ki(e) {
    We === null ? We = e : We.push.apply(We, e);
  }
  function Mc(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!gt(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function bt(e, t) {
    for (t &= ~Bi, t &= ~Ro, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - ct(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ys(e) {
    if ((_ & 6) !== 0) throw Error(d(327));
    Pn();
    var t = Or(e, 0);
    if ((t & 1) === 0) return Ze(e, Ce()), null;
    var n = No(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ol(e);
      r !== 0 && (t = r, n = yi(e, r));
    }
    if (n === 1) throw n = kr, cn(e, 0), bt(e, t), Ze(e, Ce()), n;
    if (n === 6) throw Error(d(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, gn(e, We, Ft), Ze(e, Ce()), null;
  }
  function Si(e, t) {
    var n = _;
    _ |= 1;
    try {
      return e(t);
    } finally {
      _ = n, _ === 0 && (qn = Ce() + 500, io && Gt());
    }
  }
  function un(e) {
    Wt !== null && Wt.tag === 0 && (_ & 6) === 0 && Pn();
    var t = _;
    _ |= 1;
    var n = at.transition, r = ne;
    try {
      if (at.transition = null, ne = 1, e) return e();
    } finally {
      ne = r, at.transition = n, _ = t, (_ & 6) === 0 && Gt();
    }
  }
  function Ri() {
    nt = Ln.current, ae(Ln);
  }
  function cn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, fc(n)), me !== null) for (n = me.return; n !== null; ) {
      var r = n;
      switch (Ml(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && oo();
          break;
        case 3:
          Tn(), ae(ze), ae(Te), Zl();
          break;
        case 5:
          jl(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          ae(ge);
          break;
        case 19:
          ae(ge);
          break;
        case 10:
          Vl(r.type._context);
          break;
        case 22:
        case 23:
          Ri();
      }
      n = n.return;
    }
    if (Se = e, me = e = _t(e.current, null), Fe = nt = t, ve = 0, kr = null, Bi = Ro = sn = 0, We = Sr = null, ln !== null) {
      for (t = 0; t < ln.length; t++) if (n = ln[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
      ln = null;
    }
    return e;
  }
  function ks(e, t) {
    do {
      var n = me;
      try {
        if (Hl(), po.current = Bo, Co) {
          for (var r = fe.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          Co = !1;
        }
        if (an = 0, ke = we = fe = null, Qr = !1, Br = 0, Qi.current = null, n === null || n.return === null) {
          ve = 1, kr = t, me = null;
          break;
        }
        e: {
          var l = e, i = n.return, A = n, a = t;
          if (t = Fe, A.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var E = a, I = A, Q = I.tag;
            if ((I.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var C = I.alternate;
              C ? (I.updateQueue = C.updateQueue, I.memoizedState = C.memoizedState, I.lanes = C.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var v = ba(i);
            if (v !== null) {
              v.flags &= -257, _a(v, i, A, l, t), v.mode & 1 && Za(l, E, t), t = v, a = E;
              var S = t.updateQueue;
              if (S === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(a), t.updateQueue = x;
              } else S.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                Za(l, E, t), xi();
                break e;
              }
              a = Error(d(426));
            }
          } else if (ce && A.mode & 1) {
            var Ie = ba(i);
            if (Ie !== null) {
              (Ie.flags & 65536) === 0 && (Ie.flags |= 256), _a(Ie, i, A, l, t), Pl(Kn(a, A));
              break e;
            }
          }
          l = a = Kn(a, A), ve !== 4 && (ve = 2), Sr === null ? Sr = [l] : Sr.push(l), l = i;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var c = ja(l, a, t);
                Ba(l, c);
                break e;
              case 1:
                A = a;
                var s = l.type, g = l.stateNode;
                if ((l.flags & 128) === 0 && (typeof s.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (jt === null || !jt.has(g)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var B = Wa(l, A, t);
                  Ba(l, B);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        xs(n);
      } catch (D) {
        t = D, me === n && n !== null && (me = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ss() {
    var e = So.current;
    return So.current = Bo, e === null ? Bo : e;
  }
  function xi() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4), Se === null || (sn & 268435455) === 0 && (Ro & 268435455) === 0 || bt(Se, Fe);
  }
  function No(e, t) {
    var n = _;
    _ |= 2;
    var r = Ss();
    (Se !== e || Fe !== t) && (Ft = null, cn(e, t));
    do
      try {
        Lc();
        break;
      } catch (o) {
        ks(e, o);
      }
    while (!0);
    if (Hl(), _ = n, So.current = r, me !== null) throw Error(d(261));
    return Se = null, Fe = 0, ve;
  }
  function Lc() {
    for (; me !== null; ) Rs(me);
  }
  function qc() {
    for (; me !== null && !uu(); ) Rs(me);
  }
  function Rs(e) {
    var t = Fs(e.alternate, e, nt);
    e.memoizedProps = e.pendingProps, t === null ? xs(e) : me = t, Qi.current = null;
  }
  function xs(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Jc(n, t, nt), n !== null) {
          me = n;
          return;
        }
      } else {
        if (n = Fc(n, t), n !== null) {
          n.flags &= 32767, me = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ve = 6, me = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        me = t;
        return;
      }
      me = t = e;
    } while (t !== null);
    ve === 0 && (ve = 5);
  }
  function gn(e, t, n) {
    var r = ne, o = at.transition;
    try {
      at.transition = null, ne = 1, Pc(e, t, n, r);
    } finally {
      at.transition = o, ne = r;
    }
    return null;
  }
  function Pc(e, t, n, r) {
    do
      Pn();
    while (Wt !== null);
    if ((_ & 6) !== 0) throw Error(d(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(d(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Qu(e, l), e === Se && (me = Se = null, Fe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Do || (Do = !0, Us(Mr, function() {
      return Pn(), null;
    })), l = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || l) {
      l = at.transition, at.transition = null;
      var i = ne;
      ne = 1;
      var A = _;
      _ |= 4, Qi.current = null, Nc(e, n), Is(n, e), ic(xl), Gr = !!Rl, xl = Rl = null, e.current = n, Tc(n), cu(), _ = A, ne = i, at.transition = l;
    } else e.current = n;
    if (Do && (Do = !1, Wt = e, Jo = o), l = e.pendingLanes, l === 0 && (jt = null), du(n.stateNode), Ze(e, Ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (xo) throw xo = !1, e = wi, wi = null, e;
    return (Jo & 1) !== 0 && e.tag !== 0 && Pn(), l = e.pendingLanes, (l & 1) !== 0 ? e === vi ? Rr++ : (Rr = 0, vi = e) : Rr = 0, Gt(), null;
  }
  function Pn() {
    if (Wt !== null) {
      var e = pA(Jo), t = at.transition, n = ne;
      try {
        if (at.transition = null, ne = 16 > e ? 16 : e, Wt === null) var r = !1;
        else {
          if (e = Wt, Wt = null, Jo = 0, (_ & 6) !== 0) throw Error(d(331));
          var o = _;
          for (_ |= 4, k = e.current; k !== null; ) {
            var l = k, i = l.child;
            if ((k.flags & 16) !== 0) {
              var A = l.deletions;
              if (A !== null) {
                for (var a = 0; a < A.length; a++) {
                  var E = A[a];
                  for (k = E; k !== null; ) {
                    var I = k;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yr(8, I, l);
                    }
                    var Q = I.child;
                    if (Q !== null) Q.return = I, k = Q;
                    else for (; k !== null; ) {
                      I = k;
                      var C = I.sibling, v = I.return;
                      if (ds(I), I === E) {
                        k = null;
                        break;
                      }
                      if (C !== null) {
                        C.return = v, k = C;
                        break;
                      }
                      k = v;
                    }
                  }
                }
                var S = l.alternate;
                if (S !== null) {
                  var x = S.child;
                  if (x !== null) {
                    S.child = null;
                    do {
                      var Ie = x.sibling;
                      x.sibling = null, x = Ie;
                    } while (x !== null);
                  }
                }
                k = l;
              }
            }
            if ((l.subtreeFlags & 2064) !== 0 && i !== null) i.return = l, k = i;
            else e: for (; k !== null; ) {
              if (l = k, (l.flags & 2048) !== 0) switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  yr(9, l, l.return);
              }
              var c = l.sibling;
              if (c !== null) {
                c.return = l.return, k = c;
                break e;
              }
              k = l.return;
            }
          }
          var s = e.current;
          for (k = s; k !== null; ) {
            i = k;
            var g = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && g !== null) g.return = i, k = g;
            else e: for (i = s; k !== null; ) {
              if (A = k, (A.flags & 2048) !== 0) try {
                switch (A.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ko(9, A);
                }
              } catch (D) {
                he(A, A.return, D);
              }
              if (A === i) {
                k = null;
                break e;
              }
              var B = A.sibling;
              if (B !== null) {
                B.return = A.return, k = B;
                break e;
              }
              k = A.return;
            }
          }
          if (_ = o, Gt(), It && typeof It.onPostCommitFiberRoot == "function") try {
            It.onPostCommitFiberRoot(Lr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ne = n, at.transition = t;
      }
    }
    return !1;
  }
  function Ds(e, t, n) {
    t = Kn(n, t), t = ja(e, t, 1), e = zt(e, t, 1), t = Ve(), e !== null && (_n(e, 1, t), Ze(e, t));
  }
  function he(e, t, n) {
    if (e.tag === 3) Ds(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ds(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
          e = Kn(n, e), e = Wa(t, e, 1), t = zt(t, e, 1), e = Ve(), t !== null && (_n(t, 1, e), Ze(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Oc(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ve(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Fe & n) === n && (ve === 4 || ve === 3 && (Fe & 130023424) === Fe && 500 > Ce() - mi ? cn(e, 0) : Bi |= n), Ze(e, t);
  }
  function Js(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Pr, Pr <<= 1, (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = Ve();
    e = xt(e, t), e !== null && (_n(e, t, n), Ze(e, n));
  }
  function Hc(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Js(e, n);
  }
  function Vc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    r !== null && r.delete(t), Js(e, n);
  }
  var Fs;
  Fs = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ze.current) je = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return je = !1, Dc(e, t, n);
      je = (e.flags & 131072) !== 0;
    }
    else je = !1, ce && (t.flags & 1048576) !== 0 && ca(t, ao, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        vo(e, t), e = t.pendingProps;
        var o = Rn(t, Te.current);
        Nn(t, n), o = $l(null, t, r, e, o, n);
        var l = ei();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (l = !0, lo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, zl(t), o.updater = mo, t.stateNode = o, o._reactInternals = t, ii(t, r, e, n), t = ui(null, t, r, !0, l, n)) : (t.tag = 0, ce && l && Kl(t), He(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (vo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Yc(r), e = dt(r, e), o) {
            case 0:
              t = si(null, t, r, e, n);
              break e;
            case 1:
              t = os(null, t, r, e, n);
              break e;
            case 11:
              t = $a(null, t, r, e, n);
              break e;
            case 14:
              t = es(null, t, r, dt(r.type, e), n);
              break e;
          }
          throw Error(d(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : dt(r, o), si(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : dt(r, o), os(e, t, r, o, n);
      case 3:
        e: {
          if (ls(t), e === null) throw Error(d(387));
          r = t.pendingProps, l = t.memoizedState, o = l.element, Qa(e, t), Eo(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = Kn(Error(d(423)), t), t = is(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Kn(Error(d(424)), t), t = is(e, t, r, n, o);
            break e;
          } else for (tt = Ot(t.stateNode.containerInfo.firstChild), et = t, ce = !0, ft = null, n = Ca(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Jn(), r === o) {
              t = Jt(e, t, n);
              break e;
            }
            He(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return wa(t), e === null && ql(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Dl(r, o) ? i = null : l !== null && Dl(r, l) && (t.flags |= 32), rs(e, t), He(e, t, i, n), t.child;
      case 6:
        return e === null && ql(t), null;
      case 13:
        return As(e, t, n);
      case 4:
        return Xl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Fn(t, null, r, n) : He(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : dt(r, o), $a(e, t, r, o, n);
      case 7:
        return He(e, t, t.pendingProps, n), t.child;
      case 8:
        return He(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return He(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, ie(co, r._currentValue), r._currentValue = i, l !== null) if (gt(l.value, i)) {
            if (l.children === o.children && !ze.current) {
              t = Jt(e, t, n);
              break e;
            }
          } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
            var A = l.dependencies;
            if (A !== null) {
              i = l.child;
              for (var a = A.firstContext; a !== null; ) {
                if (a.context === r) {
                  if (l.tag === 1) {
                    a = Dt(-1, n & -n), a.tag = 2;
                    var E = l.updateQueue;
                    if (E !== null) {
                      E = E.shared;
                      var I = E.pending;
                      I === null ? a.next = a : (a.next = I.next, I.next = a), E.pending = a;
                    }
                  }
                  l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), Gl(
                    l.return,
                    n,
                    t
                  ), A.lanes |= n;
                  break;
                }
                a = a.next;
              }
            } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
            else if (l.tag === 18) {
              if (i = l.return, i === null) throw Error(d(341));
              i.lanes |= n, A = i.alternate, A !== null && (A.lanes |= n), Gl(i, n, t), i = l.sibling;
            } else i = l.child;
            if (i !== null) i.return = l;
            else for (i = l; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (l = i.sibling, l !== null) {
                l.return = i.return, i = l;
                break;
              }
              i = i.return;
            }
            l = i;
          }
          He(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, Nn(t, n), o = it(o), r = r(o), t.flags |= 1, He(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = dt(r, t.pendingProps), o = dt(r.type, o), es(e, t, r, o, n);
      case 15:
        return ts(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : dt(r, o), vo(e, t), t.tag = 1, Xe(r) ? (e = !0, lo(t)) : e = !1, Nn(t, n), za(t, r, o), ii(t, r, o, n), ui(null, t, r, !0, e, n);
      case 19:
        return ss(e, t, n);
      case 22:
        return ns(e, t, n);
    }
    throw Error(d(156, t.tag));
  };
  function Us(e, t) {
    return gA(e, t);
  }
  function Gc(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function st(e, t, n, r) {
    return new Gc(e, t, n, r);
  }
  function Di(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Yc(e) {
    if (typeof e == "function") return Di(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Pe) return 11;
      if (e === Oe) return 14;
    }
    return 2;
  }
  function _t(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function To(e, t, n, r, o, l) {
    var i = 2;
    if (r = e, typeof e == "function") Di(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case re:
        return fn(n.children, o, l, t);
      case qe:
        i = 8, o |= 8;
        break;
      case _e:
        return e = st(12, n, t, o | 2), e.elementType = _e, e.lanes = l, e;
      case Ne:
        return e = st(13, n, t, o), e.elementType = Ne, e.lanes = l, e;
      case Ye:
        return e = st(19, n, t, o), e.elementType = Ye, e.lanes = l, e;
      case le:
        return Ko(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ge:
            i = 10;
            break e;
          case rt:
            i = 9;
            break e;
          case Pe:
            i = 11;
            break e;
          case Oe:
            i = 14;
            break e;
          case Be:
            i = 16, r = null;
            break e;
        }
        throw Error(d(130, e == null ? e : typeof e, ""));
    }
    return t = st(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
  }
  function fn(e, t, n, r) {
    return e = st(7, e, r, t), e.lanes = n, e;
  }
  function Ko(e, t, n, r) {
    return e = st(22, e, r, t), e.elementType = le, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ji(e, t, n) {
    return e = st(6, e, null, t), e.lanes = n, e;
  }
  function Fi(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function zc(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ll(0), this.expirationTimes = ll(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ll(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function Ui(e, t, n, r, o, l, i, A, a) {
    return e = new zc(e, t, n, A, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = st(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zl(l), e;
  }
  function Xc(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ee, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ns(e) {
    if (!e) return Vt;
    e = e._reactInternals;
    e: {
      if (en(e) !== e || e.tag !== 1) throw Error(d(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(d(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Xe(n)) return aa(e, n, t);
    }
    return t;
  }
  function Ts(e, t, n, r, o, l, i, A, a) {
    return e = Ui(n, r, !0, e, o, l, i, A, a), e.context = Ns(null), n = e.current, r = Ve(), o = Zt(n), l = Dt(r, o), l.callback = t ?? null, zt(n, l, o), e.current.lanes = o, _n(e, o, r), Ze(e, r), e;
  }
  function Mo(e, t, n, r) {
    var o = t.current, l = Ve(), i = Zt(o);
    return n = Ns(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = zt(o, t, i), e !== null && (pt(e, o, i, l), fo(e, o, i)), i;
  }
  function Lo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ks(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ni(e, t) {
    Ks(e, t), (e = e.alternate) && Ks(e, t);
  }
  function jc() {
    return null;
  }
  var Ms = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ti(e) {
    this._internalRoot = e;
  }
  qo.prototype.render = Ti.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(d(409));
    Mo(e, t, null, null);
  }, qo.prototype.unmount = Ti.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      un(function() {
        Mo(null, e, null, null);
      }), t[yt] = null;
    }
  };
  function qo(e) {
    this._internalRoot = e;
  }
  qo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = QA();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++) ;
      Lt.splice(n, 0, e), n === 0 && wA(e);
    }
  };
  function Ki(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Po(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ls() {
  }
  function Wc(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var l = r;
        r = function() {
          var E = Lo(i);
          l.call(E);
        };
      }
      var i = Ts(t, r, e, 0, null, !1, !1, "", Ls);
      return e._reactRootContainer = i, e[yt] = i.current, gr(e.nodeType === 8 ? e.parentNode : e), un(), i;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var A = r;
      r = function() {
        var E = Lo(a);
        A.call(E);
      };
    }
    var a = Ui(e, 0, !1, null, null, !1, !1, "", Ls);
    return e._reactRootContainer = a, e[yt] = a.current, gr(e.nodeType === 8 ? e.parentNode : e), un(function() {
      Mo(t, a, n, r);
    }), a;
  }
  function Oo(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
      var i = l;
      if (typeof o == "function") {
        var A = o;
        o = function() {
          var a = Lo(i);
          A.call(a);
        };
      }
      Mo(t, i, e, o);
    } else i = Wc(n, t, e, o, r);
    return Lo(i);
  }
  CA = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = bn(t.pendingLanes);
          n !== 0 && (il(t, n | 1), Ze(t, Ce()), (_ & 6) === 0 && (qn = Ce() + 500, Gt()));
        }
        break;
      case 13:
        un(function() {
          var r = xt(e, 1);
          if (r !== null) {
            var o = Ve();
            pt(r, e, 1, o);
          }
        }), Ni(e, 1);
    }
  }, Al = function(e) {
    if (e.tag === 13) {
      var t = xt(e, 134217728);
      if (t !== null) {
        var n = Ve();
        pt(t, e, 134217728, n);
      }
      Ni(e, 134217728);
    }
  }, IA = function(e) {
    if (e.tag === 13) {
      var t = Zt(e), n = xt(e, t);
      if (n !== null) {
        var r = Ve();
        pt(n, e, t, r);
      }
      Ni(e, t);
    }
  }, QA = function() {
    return ne;
  }, BA = function(e, t) {
    var n = ne;
    try {
      return ne = e, t();
    } finally {
      ne = n;
    }
  }, $o = function(e, t, n) {
    switch (t) {
      case "input":
        if (Yo(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = ro(r);
              if (!o) throw Error(d(90));
              Ct(r), Yo(r, o);
            }
          }
        }
        break;
      case "textarea":
        Zi(e, n);
        break;
      case "select":
        t = n.value, t != null && hn(e, !!n.multiple, t, !1);
    }
  }, lA = Si, iA = un;
  var Zc = { usingClientEntryPoint: !1, Events: [Er, kn, ro, rA, oA, Si] }, xr = { findFiberByHostInstance: tn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, bc = { bundleType: xr.bundleType, version: xr.version, rendererPackageName: xr.rendererPackageName, rendererConfig: xr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = uA(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: xr.findFiberByHostInstance || jc, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ho.isDisabled && Ho.supportsFiber) try {
      Lr = Ho.inject(bc), It = Ho;
    } catch {
    }
  }
  return be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zc, be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ki(t)) throw Error(d(200));
    return Xc(e, t, null, n);
  }, be.createRoot = function(e, t) {
    if (!Ki(e)) throw Error(d(299));
    var n = !1, r = "", o = Ms;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ui(e, 1, !1, null, null, n, !1, r, o), e[yt] = t.current, gr(e.nodeType === 8 ? e.parentNode : e), new Ti(t);
  }, be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e)));
    return e = uA(t), e = e === null ? null : e.stateNode, e;
  }, be.flushSync = function(e) {
    return un(e);
  }, be.hydrate = function(e, t, n) {
    if (!Po(t)) throw Error(d(200));
    return Oo(null, e, t, !0, n);
  }, be.hydrateRoot = function(e, t, n) {
    if (!Ki(e)) throw Error(d(405));
    var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Ms;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ts(t, null, e, 1, n ?? null, o, !1, l, i), e[yt] = t.current, gr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new qo(t);
  }, be.render = function(e, t, n) {
    if (!Po(t)) throw Error(d(200));
    return Oo(null, e, t, !1, n);
  }, be.unmountComponentAtNode = function(e) {
    if (!Po(e)) throw Error(d(40));
    return e._reactRootContainer ? (un(function() {
      Oo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[yt] = null;
      });
    }), !0) : !1;
  }, be.unstable_batchedUpdates = Si, be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Po(n)) throw Error(d(200));
    if (e == null || e._reactInternals === void 0) throw Error(d(38));
    return Oo(e, t, n, !1, r);
  }, be.version = "18.3.1-next-f1338f8080-20240426", be;
}
var Gs;
function og() {
  if (Gs) return Li.exports;
  Gs = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (m) {
        console.error(m);
      }
  }
  return f(), Li.exports = rg(), Li.exports;
}
var Ys;
function lg() {
  if (Ys) return Vo;
  Ys = 1;
  var f = og();
  return Vo.createRoot = f.createRoot, Vo.hydrateRoot = f.hydrateRoot, Vo;
}
var ig = lg(), Oi = { exports: {} }, Dr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function Ag() {
  if (zs) return Dr;
  zs = 1;
  var f = Gi(), m = Symbol.for("react.element"), d = Symbol.for("react.fragment"), M = Object.prototype.hasOwnProperty, L = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function G(O, T, X) {
    var W, z = {}, j = null, ye = null;
    X !== void 0 && (j = "" + X), T.key !== void 0 && (j = "" + T.key), T.ref !== void 0 && (ye = T.ref);
    for (W in T) M.call(T, W) && !q.hasOwnProperty(W) && (z[W] = T[W]);
    if (O && O.defaultProps) for (W in T = O.defaultProps, T) z[W] === void 0 && (z[W] = T[W]);
    return { $$typeof: m, type: O, key: j, ref: ye, props: z, _owner: L.current };
  }
  return Dr.Fragment = d, Dr.jsx = G, Dr.jsxs = G, Dr;
}
var Xs;
function ag() {
  return Xs || (Xs = 1, Oi.exports = Ag()), Oi.exports;
}
var h = ag();
const Ur = "realgo:assistant:", sg = "https://realgo.dev", ug = "/cards";
async function cg(f, m) {
  await chrome.storage.local.set({ [f]: m });
}
const gg = 1440 * 60 * 1e3;
async function fg(f) {
  const m = await chrome.storage.local.get(null), d = [], M = Date.now() - gg;
  for (const [q, G] of Object.entries(m)) {
    if (!q.startsWith(Ur)) continue;
    ((G == null ? void 0 : G.savedAt) ?? 0) < M && d.push(q);
  }
  d.length > 0 && await chrome.storage.local.remove(d);
  const L = Ur + f;
  if (!d.includes(L))
    return m[L];
}
function dg(f, m) {
  return cg(Ur + f, m);
}
const js = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&display=swap");

:host, .realgo-assistant {
  --bg: #0d1117;
  --bg-2: #010409;
  --panel: #161b22;
  --border: #30363d;
  --text: #e6edf3;
  --text-dim: #7d8590;
  --text-faint: #6e7681;
  --accent: #2f81f7;
  --accent-bright: #58a6ff;
  --accent-soft: rgba(56, 139, 253, 0.15);
  --accent-line: rgba(56, 139, 253, 0.4);
  --danger: #f85149;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
}

.realgo-assistant, .realgo-assistant * { box-sizing: border-box; }

.realgo-assistant {
  width: 400px;
  background: transparent;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 13px;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  pointer-events: auto;
}
.realgo-assistant--closed { width: auto; }

.realgo-agent-button {
  min-width: 150px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border: 1px solid var(--accent-line);
  border-radius: 999px;
  padding: 10px 14px;
  background:
    radial-gradient(180px 80px at 85% -10%, rgba(88, 166, 255, 0.24), transparent 70%),
    var(--bg);
  color: var(--text);
  box-shadow: 0 18px 44px -24px rgba(1, 4, 9, 0.95);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
.realgo-agent-button:hover { border-color: var(--accent-bright); color: var(--accent-bright); }
.realgo-agent-button:focus-visible { outline: none; box-shadow: 0 0 0 2px var(--accent-line); }

.realgo-agent-logo {
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.18));
}

.realgo-agent-panel {
  width: 400px;
  height: 520px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 12px;
  /* Expands out of the collapsed pill's corner (dock sits bottom-right). */
  transform-origin: bottom right;
  animation: realgo-agent-panel-in 0.22s cubic-bezier(0.2, 0.72, 0.22, 1) both;
  background:
    radial-gradient(360px 220px at 86% -10%, rgba(56, 139, 253, 0.1), transparent 68%),
    var(--bg);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 24px 70px -32px rgba(1, 4, 9, 0.95);
}

@keyframes realgo-agent-panel-in {
  from {
    opacity: 0;
    transform: translate3d(0, 10px, 0) scale(0.94);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

/* Collapse: the component keeps the panel mounted for COLLAPSE_MS while this
   plays, then swaps to the pill button (see handleClose in AssistantApp). */
.realgo-assistant--closing .realgo-agent-panel {
  animation: realgo-agent-panel-out 0.18s cubic-bezier(0.64, 0.02, 0.4, 1) both;
  pointer-events: none;
}

@keyframes realgo-agent-panel-out {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 10px, 0) scale(0.94);
  }
}

/* The pill pops in right after the panel collapses into its corner. */
.realgo-assistant--closed .realgo-agent-button {
  transform-origin: bottom right;
  animation: realgo-agent-panel-in 0.18s cubic-bezier(0.2, 0.72, 0.22, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  .realgo-agent-panel,
  .realgo-assistant--closing .realgo-agent-panel,
  .realgo-assistant--closed .realgo-agent-button {
    animation: none;
  }
}

.realgo-agent-header {
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 14px;
  border-bottom: 1px solid var(--border);
  background: rgba(1, 4, 9, 0.56);
}

.realgo-agent-brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-width: 0;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}
.realgo-agent-path {
  color: var(--text-faint);
  font-weight: 500;
}

.realgo-agent-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-left: auto;
  padding: 4px 8px;
  border: 1px solid var(--accent-line);
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-bright);
  font-family: var(--font-mono);
  font-size: 10px;
  line-height: 1.2;
  white-space: nowrap;
}
.realgo-agent-status__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 0 4px rgba(56, 139, 253, 0.11);
}

.realgo-agent-iconbtn {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--text-dim);
  cursor: pointer;
}
.realgo-agent-iconbtn:hover { border-color: var(--border); color: var(--text); background: rgba(255, 255, 255, 0.05); }

.realgo-agent-task {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 8px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
  background: rgba(1, 4, 9, 0.26);
}
.realgo-agent-title {
  margin: 0;
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
  overflow-wrap: anywhere;
}
.realgo-agent-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}
.realgo-agent-tag {
  max-width: 150px;
  padding: 2px 7px;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 10.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.realgo-agent-tag--easy {
  border-color: rgba(63, 185, 80, 0.4);
  color: #3fb950;
  background: rgba(63, 185, 80, 0.12);
}
.realgo-agent-tag--medium {
  border-color: rgba(210, 153, 34, 0.4);
  color: #d29922;
  background: rgba(210, 153, 34, 0.12);
}
.realgo-agent-tag--hard {
  border-color: rgba(248, 81, 73, 0.4);
  color: var(--danger);
  background: rgba(248, 81, 73, 0.12);
}
.realgo-agent-tag--leetcode {
  border-color: rgba(255, 161, 22, 0.4);
  color: #ffa116;
  background: rgba(255, 161, 22, 0.12);
}
.realgo-agent-tag--hackerrank {
  border-color: rgba(56, 189, 178, 0.4);
  color: #38bdb2;
  background: rgba(56, 189, 178, 0.12);
}
.realgo-agent-tag--geeksforgeeks {
  border-color: rgba(47, 141, 70, 0.4);
  color: #2f8d46;
  background: rgba(47, 141, 70, 0.12);
}
.realgo-agent-tag--codeforces {
  border-color: rgba(49, 140, 231, 0.4);
  color: #318ce7;
  background: rgba(49, 140, 231, 0.12);
}

.realgo-agent-messages {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  padding: 14px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    transparent;
  background-size: 100% 28px;
}

.realgo-agent-msg {
  max-width: 92%;
  display: grid;
  gap: 5px;
  padding: 10px 11px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: rgba(22, 27, 34, 0.72);
  color: var(--text);
  overflow-wrap: anywhere;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
}
.realgo-agent-msg--user {
  align-self: flex-end;
  border-color: var(--accent-line);
  background: var(--accent-soft);
}
.realgo-agent-msg--assistant { align-self: flex-start; }
.realgo-agent-msg__role {
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 10px;
}
.realgo-agent-msg p {
  margin: 0;
  white-space: pre-wrap;
}

.realgo-agent-loading {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 11px;
}
.realgo-agent-spinner {
  width: 13px;
  height: 13px;
  border: 2px solid rgba(125, 133, 144, 0.35);
  border-top-color: var(--accent-bright);
  border-radius: 50%;
  animation: realgo-agent-spin 0.8s linear infinite;
}
@keyframes realgo-agent-spin { to { transform: rotate(360deg); } }

.realgo-agent-error {
  margin: 0;
  color: var(--danger);
  font-size: 12px;
}

.realgo-agent-actions-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 14px 14px;
}

.realgo-agent-actions {
  display: flex;
  gap: 8px;
}

.realgo-agent-hints-done {
  margin: 0;
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-dim);
  font-size: 11.5px;
  text-align: center;
  animation: realgo-agent-fade-in 0.35s ease;
}
@keyframes realgo-agent-fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

.realgo-agent-btn {
  min-height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 7px 10px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}
.realgo-agent-btn:hover:not(:disabled) { border-color: var(--accent-line); color: var(--accent-bright); }
.realgo-agent-btn:disabled { cursor: not-allowed; opacity: 0.55; }

.realgo-agent-btn--hint {
  position: relative;
  flex: 1;
  overflow: hidden;
}
.realgo-agent-btn__fill {
  position: absolute;
  inset: 0;
  width: 0%;
  background: linear-gradient(90deg, var(--accent-soft), var(--accent-line));
  transition: width 0.2s linear;
}
.realgo-agent-btn__label {
  position: relative;
  z-index: 1;
}

`, Ws = new URL("data:image/png;base64,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", import.meta.url).href, Eg = "Я застрял. Дай первую мягкую подсказку, без решения.", hg = "Дай следующий намёк, но всё ещё без полного решения.", Jr = 3, Zs = 3e4, pg = 200;
function Cg({ task: f, onAsk: m, variant: d = "dock", onClose: M }) {
  const [L, q] = te.useState(d === "panel"), [G, O] = te.useState(!1), [T, X] = te.useState([]), [W, z] = te.useState("idle"), [j, ye] = te.useState(""), [xe, $] = te.useState(1), [Y, Ue] = te.useState(0), [de, Qe] = te.useState(null), [pe, De] = te.useState(() => Date.now()), [Ee, re] = te.useState(), [qe, _e] = te.useState(!1), [Ge, rt] = te.useState(!1), [Pe, Ne] = te.useState(!1), Ye = te.useRef(null), Oe = te.useRef(null);
  te.useEffect(() => () => {
    var R;
    return (R = Oe.current) == null ? void 0 : R.abort();
  }, []);
  const Be = `${f.platform}:${f.platformTaskSlug}:${f.taskUrl}`, le = T[T.length - 1], w = W === "loading" && (le == null ? void 0 : le.role) === "assistant" && le.content === "", F = Y >= Jr, y = de ? Math.max(0, de - pe) : 0, u = y > 0, p = de ? 1 - y / Zs : 1, P = te.useMemo(
    () => [f.platform, f.difficulty, ...f.tags ?? []].filter((R) => !!R).slice(0, 5),
    [f.platform, f.difficulty, f.tags]
  );
  te.useEffect(() => {
    d === "panel" && q(!0), Ne(!1), X([]), z("idle"), ye(""), $(1), Ue(0), Qe(null), re(void 0), _e(!1), rt(!1);
    let R = !0;
    return fg(Be).then((J) => {
      !R || !J || (X(J.messages), $(J.hintLevel), Ue(J.hintsUsed), Qe(J.cooldownEndAt), re(J.patterns), _e(J.problemKnown), rt(J.patternUsed), De(Date.now()));
    }).catch(() => {
    }).finally(() => {
      R && Ne(!0);
    }), () => {
      R = !1;
    };
  }, [Be, d]), te.useEffect(() => {
    !Pe || W !== "idle" || dg(Be, {
      messages: T,
      hintLevel: xe,
      hintsUsed: Y,
      cooldownEndAt: de,
      patterns: Ee,
      problemKnown: qe,
      patternUsed: Ge,
      savedAt: Date.now()
    }).catch(() => {
    });
  }, [Pe, W, T, Y, Ge, de]), te.useEffect(() => {
    var se;
    if (typeof chrome > "u" || !((se = chrome.storage) != null && se.onChanged)) return;
    const R = Ur + Be;
    function J(vt, Ct) {
      if (Ct !== "local" || !(R in vt)) return;
      const ue = vt[R].newValue;
      ue && (X(ue.messages), $(ue.hintLevel), Ue(ue.hintsUsed), Qe(ue.cooldownEndAt), re(ue.patterns), _e(ue.problemKnown), rt(ue.patternUsed));
    }
    return chrome.storage.onChanged.addListener(J), () => chrome.storage.onChanged.removeListener(J);
  }, [Be]), te.useEffect(() => {
    if (de === null) return;
    const R = setInterval(() => {
      const J = Date.now();
      De(J), J >= de && clearInterval(R);
    }, 200);
    return () => clearInterval(R);
  }, [de]), te.useEffect(() => {
    var R;
    (R = Ye.current) == null || R.scrollIntoView({ block: "end" });
  }, [T, W, j]);
  async function H(R, J = !0) {
    const se = R.trim();
    if (!se || W === "loading" || Y >= Jr || !Pe) return;
    const vt = T.slice(-8);
    J && X((ue) => [...ue, { role: "user", content: se }]), z("loading"), ye(""), X((ue) => [...ue, { role: "assistant", content: "" }]);
    const Ct = new AbortController();
    Oe.current = Ct;
    try {
      const ue = await m(
        { ...f, message: se, hintLevel: xe, history: vt },
        (Nt) => b(Nt),
        Ct.signal
      );
      X((Nt) => bs(Nt, mg(ue))), $((Nt) => Math.min(Nt + 1, Jr)), re(ue.patterns), _e(ue.problemKnown);
      const Ut = Y + 1;
      Ue(Ut), Qe(Ut < Jr ? Date.now() + Zs : null);
    } catch (ue) {
      if (Ct.signal.aborted) return;
      X((Ut) => Ut.slice(0, -1)), ye(ue instanceof Error ? ue.message : "AI-помощник сейчас недоступен.");
    } finally {
      Oe.current === Ct && (Oe.current = null), Ct.signal.aborted || z("idle");
    }
  }
  function Z() {
    if (W === "loading" || Ge) return;
    const R = qe && Ee && Ee.length > 0 ? `Паттерн: ${Ee.slice(0, 2).map((J) => J.name).join(", ")}` : "Эта задача пока не привязана к паттерну в базе realgo — попробуй определить его по тегам и условию самостоятельно.";
    X((J) => [...J, { role: "assistant", content: R }]), rt(!0);
  }
  function b(R) {
    X((J) => {
      const se = J[J.length - 1];
      return !se || se.role !== "assistant" ? J : bs(J, se.content + R);
    });
  }
  function oe() {
    if (M) {
      M();
      return;
    }
    d === "dock" && !G && (O(!0), window.setTimeout(() => {
      q(!1), O(!1);
    }, pg));
  }
  return L ? /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `realgo-assistant realgo-assistant--open realgo-assistant--${d} ${G ? "realgo-assistant--closing" : ""}`,
      children: [
        /* @__PURE__ */ h.jsx("style", { children: js }),
        /* @__PURE__ */ h.jsxs("section", { className: "realgo-agent-panel", "aria-label": "realgo AI assistant", children: [
          /* @__PURE__ */ h.jsxs("header", { className: "realgo-agent-header", children: [
            /* @__PURE__ */ h.jsxs("span", { className: "realgo-agent-brand", children: [
              /* @__PURE__ */ h.jsx("img", { className: "realgo-agent-logo", src: Ws, alt: "" }),
              "ReAlgo",
              /* @__PURE__ */ h.jsx("span", { className: "realgo-agent-path", children: "~/agent" })
            ] }),
            /* @__PURE__ */ h.jsxs("span", { className: "realgo-agent-status", children: [
              /* @__PURE__ */ h.jsx("span", { className: "realgo-agent-status__dot", "aria-hidden": "true" }),
              "задача открыта"
            ] }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: "realgo-agent-iconbtn",
                onClick: oe,
                "aria-label": "Свернуть AI-помощник",
                children: M ? /* @__PURE__ */ h.jsx(Ig, {}) : /* @__PURE__ */ h.jsx(wg, {})
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-task", children: [
            /* @__PURE__ */ h.jsx("p", { className: "realgo-agent-title", children: f.taskTitle }),
            /* @__PURE__ */ h.jsx("div", { className: "realgo-agent-tags", children: P.map((R) => /* @__PURE__ */ h.jsx(
              "span",
              {
                className: `realgo-agent-tag ${Qg(R, f.difficulty)} ${Bg(R, f.platform)}`,
                children: R
              },
              R
            )) })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-messages", role: "log", "aria-live": "polite", children: [
            T.map((R, J) => J === T.length - 1 && w ? null : /* @__PURE__ */ h.jsxs(
              "article",
              {
                className: `realgo-agent-msg realgo-agent-msg--${R.role}`,
                children: [
                  /* @__PURE__ */ h.jsx("span", { className: "realgo-agent-msg__role", children: R.role === "assistant" ? "agent" : "you" }),
                  /* @__PURE__ */ h.jsx("p", { children: R.content })
                ]
              },
              `${R.role}-${J}`
            )),
            T.length === 0 && W === "idle" && !j && /* @__PURE__ */ h.jsxs("article", { className: "realgo-agent-msg realgo-agent-msg--assistant", children: [
              /* @__PURE__ */ h.jsx("span", { className: "realgo-agent-msg__role", children: "agent" }),
              /* @__PURE__ */ h.jsxs("p", { children: [
                "Вижу открытую задачу. Нажми «получить подсказку» — начну с мягкой наводки, без решения. Всего подсказок ",
                Jr,
                ", каждая следующая конкретнее."
              ] })
            ] }),
            w && /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-loading", children: [
              /* @__PURE__ */ h.jsx("span", { className: "realgo-agent-spinner", "aria-hidden": "true" }),
              "думаю над следующей наводкой…"
            ] }),
            j && /* @__PURE__ */ h.jsx("p", { className: "realgo-agent-error", children: j }),
            /* @__PURE__ */ h.jsx("div", { ref: Ye })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-actions-wrap", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-actions", children: [
              /* @__PURE__ */ h.jsxs(
                "button",
                {
                  type: "button",
                  className: "realgo-agent-btn realgo-agent-btn--hint",
                  disabled: W === "loading" || F || u || !Pe,
                  onClick: () => Y === 0 ? H(Eg, !1) : H(hg),
                  children: [
                    u && /* @__PURE__ */ h.jsx(
                      "span",
                      {
                        className: "realgo-agent-btn__fill",
                        "aria-hidden": "true",
                        style: { width: `${Math.round(p * 100)}%` }
                      }
                    ),
                    /* @__PURE__ */ h.jsx("span", { className: "realgo-agent-btn__label", children: u ? `через ${Math.ceil(y / 1e3)}с` : Y === 0 ? "получить подсказку" : "следующий намёк" })
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  type: "button",
                  className: "realgo-agent-btn",
                  disabled: W === "loading" || Ge,
                  onClick: Z,
                  children: "паттерн"
                }
              )
            ] }),
            F && /* @__PURE__ */ h.jsx("p", { className: "realgo-agent-hints-done", children: "Подсказки для этой задачи закончились — на следующей задаче они появятся снова." })
          ] })
        ] })
      ]
    }
  ) : /* @__PURE__ */ h.jsxs("div", { className: "realgo-assistant realgo-assistant--closed", children: [
    /* @__PURE__ */ h.jsx("style", { children: js }),
    /* @__PURE__ */ h.jsxs("button", { type: "button", className: "realgo-agent-button", onClick: () => q(!0), children: [
      /* @__PURE__ */ h.jsx("img", { className: "realgo-agent-logo", src: Ws, alt: "" }),
      "ReAlgo"
    ] })
  ] });
}
function Ig() {
  return /* @__PURE__ */ h.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(
    "path",
    {
      d: "M6 6l12 12M18 6L6 18",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2"
    }
  ) });
}
function bs(f, m) {
  return f.length === 0 ? f : [...f.slice(0, -1), { role: "assistant", content: m }];
}
function Qg(f, m) {
  if (!m || f.toLowerCase() !== m.toLowerCase()) return "";
  switch (m.toLowerCase()) {
    case "easy":
      return "realgo-agent-tag--easy";
    case "medium":
      return "realgo-agent-tag--medium";
    case "hard":
      return "realgo-agent-tag--hard";
    default:
      return "";
  }
}
function Bg(f, m) {
  if (f.toLowerCase() !== m.toLowerCase()) return "";
  switch (m.toLowerCase()) {
    case "leetcode":
      return "realgo-agent-tag--leetcode";
    case "hackerrank":
      return "realgo-agent-tag--hackerrank";
    case "geeksforgeeks":
      return "realgo-agent-tag--geeksforgeeks";
    case "codeforces":
      return "realgo-agent-tag--codeforces";
    default:
      return "";
  }
}
function mg(f) {
  var d;
  const m = [f.hint.trim()];
  return (d = f.question) != null && d.trim() && m.push(`Вопрос: ${f.question.trim()}`), m.filter(Boolean).join(`

`);
}
function wg() {
  return /* @__PURE__ */ h.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(
    "path",
    {
      d: "M5 12h14",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2"
    }
  ) });
}
const vg = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap");

:host, .realgo-popup {
  /* surfaces — GitHub Primer dark */
  --bg: #0d1117;
  --bg-2: #010409;
  --panel: #161b22;
  --panel-strong: #1c2128;
  --border: #30363d;
  --border-strong: #444c56;
  --surface: rgba(22, 27, 34, 0.66);
  --line: rgba(255, 255, 255, 0.06);
  --line-strong: rgba(255, 255, 255, 0.1);

  /* text */
  --text: #e6edf3;
  --text-dim: #7d8590;
  --text-faint: #6e7681;

  /* accent — GitHub blue */
  --accent: #2f81f7;
  --accent-bright: #58a6ff;
  --accent-soft: rgba(56, 139, 253, 0.15);
  --accent-line: rgba(56, 139, 253, 0.4);

  /* semantic tones (Primer scale); green = success only */
  --success: #238636;
  --success-fg: #3fb950;
  --success-soft: rgba(46, 160, 67, 0.15);
  --success-line: rgba(46, 160, 67, 0.4);
  --warning: #d29922;
  --warning-bright: #e3b341;
  --warning-soft: rgba(210, 153, 34, 0.12);
  --danger: #f85149;
  --danger-bright: #ff7b72;
  --danger-soft: rgba(248, 81, 73, 0.1);
  --danger-line: rgba(248, 81, 73, 0.4);

  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
}

.realgo-popup, .realgo-popup * { box-sizing: border-box; }

/* Panel: fixed size for every state; the form screen is the reference */
.realgo-popup {
  width: 400px;
  height: 372px;
  display: flex;
  flex-direction: column;
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 12px;
  background:
    radial-gradient(420px 240px at 82% -10%, rgba(56, 139, 253, 0.09), transparent 65%),
    var(--bg);
  color: var(--text);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 24px 60px -30px rgba(1, 4, 9, 0.92);
  font-family: var(--font-sans);
  font-size: 13.5px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

/* Options page is a full tab, not a fixed-size popup. */
.realgo-popup--wide {
  width: 440px;
  height: auto;
  display: block;
  background: var(--bg);
}
.realgo-popup--wide .realgo-body { padding: 20px; }

/* Header bar: brand + blinking terminal path, status on the right */
.realgo-header {
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  background: rgba(1, 4, 9, 0.55);
}
.realgo-brand {
  display: inline-flex;
  align-items: baseline;
  gap: 9px;
  min-width: 0;
  font-family: var(--font-mono);
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--text);
}
.realgo-brand__mark {
  display: block;
  flex-shrink: 0;
  align-self: center;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.18));
}
.realgo-path {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--text-faint);
  white-space: nowrap;
}
.realgo-header__sub {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: lowercase;
  color: var(--text-dim);
}
.realgo-header__right {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 0;
}

/* status chip — like the cabinet due-chip */
.realgo-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  max-width: 100%;
  padding: 5px 10px;
  border: 1px solid var(--accent-line);
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-bright);
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.realgo-status::before {
  content: "";
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}
.realgo-status--ok {
  border-color: var(--success-line);
  background: var(--success-soft);
  color: var(--success-fg);
}

.realgo-iconbtn {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--text-dim);
  cursor: pointer;
  transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease;
}
.realgo-iconbtn:hover {
  border-color: var(--border);
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
}
.realgo-iconbtn:focus-visible { outline: none; box-shadow: 0 0 0 2px var(--accent-line); }

/* Detected task block */
.realgo-task {
  display: grid;
  justify-items: center;
  gap: 9px;
  padding: 16px 20px 15px;
  border-bottom: 1px solid var(--border);
  background: rgba(1, 4, 9, 0.3);
  text-align: center;
}
.realgo-eyebrow {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}
.realgo-task__title {
  margin: 0;
  color: var(--text);
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
  overflow-wrap: anywhere;
}
.realgo-task__meta {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
}
.realgo-tag {
  display: inline-flex;
  align-items: center;
  max-width: 160px;
  padding: 3px 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface);
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.realgo-tag--leetcode {
  border-color: rgba(255, 161, 22, 0.4);
  color: #ffa116;
  background: rgba(255, 161, 22, 0.12);
}
.realgo-tag--hackerrank {
  border-color: rgba(56, 189, 178, 0.4);
  color: #38bdb2;
  background: rgba(56, 189, 178, 0.12);
}
.realgo-tag--geeksforgeeks {
  border-color: rgba(47, 141, 70, 0.4);
  color: #2f8d46;
  background: rgba(47, 141, 70, 0.12);
}
.realgo-tag--codeforces {
  border-color: rgba(49, 140, 231, 0.4);
  color: #318ce7;
  background: rgba(49, 140, 231, 0.12);
}

/* Body / question groups.
   Pinned toward the bottom (align-content:end) so the difficulty block sits
   lower in the card, closer to where the cursor lands after a submit. */
.realgo-body {
  flex: 1;
  min-height: 0;
  display: grid;
  align-content: end;
  gap: 16px;
  padding: 18px 20px 22px;
}

/* Save hint / saving indicator — sits where the button used to be. */
.realgo-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 18px;
  margin: 0;
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.3;
  color: var(--text-faint);
  text-align: center;
}

/* Section */
.realgo-section {
  width: 100%;
  display: grid;
  gap: 20px;
}
.realgo-section__head { display: flex; align-items: baseline; justify-content: center; }
.realgo-section__title {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: normal;
  color: var(--text);
}

/* difficulty: segmented mono control */
.realgo-choices {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}
.realgo-choice {
  min-width: 0;
  min-height: 84px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  appearance: none;
  border: 0;
  border-right: 1px solid var(--line);
  background: transparent;
  color: var(--text-dim);
  padding: 13px 8px 12px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  transition:
    background 0.16s ease,
    color 0.16s ease;
}
.realgo-choice:last-child { border-right: 0; }
.realgo-choice__icon {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border: 1.5px solid var(--text-faint);
  border-radius: 50%;
  color: var(--text-faint);
  transition:
    background 0.16s ease,
    border-color 0.16s ease,
    color 0.16s ease;
}
.realgo-choice__icon svg { width: 15px; height: 15px; display: block; }
.realgo-choice__label {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.realgo-choice:hover:not(:disabled):not([aria-pressed="true"]) {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}
.realgo-choice:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--accent-line);
}
.realgo-choice[aria-pressed="true"] { color: var(--text); }
.realgo-choice[data-difficulty="easy"][aria-pressed="true"] {
  background: var(--success-soft);
  color: var(--success-fg);
}
.realgo-choice[data-difficulty="easy"][aria-pressed="true"] .realgo-choice__icon {
  border-color: var(--success-fg);
  color: var(--success-fg);
}
.realgo-choice[data-difficulty="normal"][aria-pressed="true"] {
  background: var(--warning-soft);
  color: var(--warning-bright);
}
.realgo-choice[data-difficulty="normal"][aria-pressed="true"] .realgo-choice__icon {
  border-color: var(--warning-bright);
  color: var(--warning-bright);
}
.realgo-choice[data-difficulty="hard"][aria-pressed="true"] {
  background: var(--danger-soft);
  color: var(--danger-bright);
}
.realgo-choice[data-difficulty="hard"][aria-pressed="true"] .realgo-choice__icon {
  border-color: var(--danger-bright);
  color: var(--danger-bright);
}
.realgo-choice:disabled { cursor: not-allowed; opacity: 0.6; }

/* Buttons — mono command buttons, as in the cabinet */
.realgo-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 8px;
  padding: 9px 14px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background 0.16s ease,
    border-color 0.16s ease,
    color 0.16s ease,
    transform 0.16s ease,
    opacity 0.16s ease;
}
.realgo-btn--block { width: 100%; }
.realgo-btn--lg { min-height: 42px; font-size: 13px; }
.realgo-btn--state { min-height: 38px; }
.realgo-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px var(--accent-line); }
.realgo-btn--primary {
  background: var(--accent);
  color: #ffffff;
}
.realgo-btn--primary:hover:not(:disabled) {
  background: var(--accent-bright);
  transform: translateY(-1px);
}
.realgo-btn--primary:active:not(:disabled) { background: #1f6feb; transform: none; }
.realgo-btn--primary:disabled {
  background: var(--panel-strong);
  color: var(--text-faint);
  opacity: 1;
  cursor: not-allowed;
}
.realgo-btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-dim);
}
.realgo-btn--ghost:hover {
  border-color: var(--line-strong);
  background: rgba(255, 255, 255, 0.07);
  color: var(--text);
}
.realgo-btn--danger {
  padding: 8px 12px;
  font-size: 11.5px;
  border: 1px solid var(--danger-line);
  background: var(--danger-soft);
  color: var(--danger-bright);
}
.realgo-btn--danger:hover { background: rgba(248, 81, 73, 0.18); }

/* Inputs (options) */
.realgo-field { display: flex; flex-direction: column; gap: 6px; }
.realgo-field__label {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-faint);
}
.realgo-form-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}
.realgo-row { display: flex; gap: 8px; }
.realgo-row > .realgo-input { flex: 1; }
.realgo-input {
  width: 100%;
  border: 1px solid var(--border);
  background: var(--bg-2);
  border-radius: 7px;
  color: var(--text);
  padding: 8px 11px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  transition: border-color 0.16s ease, box-shadow 0.16s ease;
}
.realgo-input::placeholder { color: var(--text-faint); }
.realgo-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-soft);
}
.realgo-divider { height: 1px; background: var(--line); border: 0; margin: 4px 0; }

/* Account row (options, logged in) */
.realgo-account {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.realgo-account__email {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--text);
}
.realgo-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success-fg);
  box-shadow: 0 0 0 3px var(--success-soft);
  flex-shrink: 0;
}
.realgo-account__note {
  margin: 5px 0 0 16px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-faint);
}

/* Centered states (loading / no-task / success) fill the fixed panel */
.realgo-state {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 34px 26px 28px;
  text-align: center;
}
.realgo-state__icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  line-height: 0;
}
.realgo-state__icon--muted {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-faint);
}
.realgo-state__icon--success {
  background: var(--success-soft);
  border: 1px solid var(--success);
  color: var(--success-fg);
}
.realgo-state__icon--danger {
  background: var(--danger-soft);
  border: 1px solid var(--danger-line);
  color: var(--danger-bright);
}
.realgo-state__icon svg { display: block; }
.realgo-state__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text);
}
.realgo-state__title--success { color: var(--success-fg); }
.realgo-state__title--danger { color: var(--danger-bright); }
.realgo-state__text {
  max-width: 300px;
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: var(--text-dim);
}
.realgo-state__actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  width: 100%;
  margin-top: 10px;
}
.realgo-state--loading-scene { gap: 14px; padding: 40px 26px; }
/* Success / error screens: the actions row is pinned to the bottom edge with
   a bottom inset equal to the side inset (20px); the two auto margins split
   the leftover space, so the icon+text block stays visually centered. */
.realgo-state--success-scene,
.realgo-state--error-scene {
  gap: 12px;
  padding: 30px 20px 20px;
}
.realgo-state--success-scene .realgo-state__icon,
.realgo-state--error-scene .realgo-state__icon {
  margin-top: auto;
}
.realgo-state--success-scene .realgo-state__actions,
.realgo-state--error-scene .realgo-state__actions {
  margin-top: auto;
}
.realgo-muted {
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 12px;
}

/* Cards readiness row on the success screen. One quiet line between the text
   and the pinned actions; blue = working, green = success only, faint = stub. */
.realgo-cards {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 18px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-dim);
}
.realgo-cards__check {
  display: inline-flex;
  color: var(--success-fg);
}
.realgo-cards--none { color: var(--text-faint); }
.realgo-cards__open { font-size: 12px; }

.realgo-link {
  background: none;
  border: 0;
  padding: 0;
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--line-strong);
  transition: color 0.16s ease;
}
.realgo-link:hover { color: var(--text-dim); }
.realgo-link--accent { color: var(--accent-bright); text-decoration-color: var(--accent-line); }
.realgo-link--accent:hover { color: var(--accent-bright); filter: brightness(1.1); }

.realgo-spinner {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--accent);
  animation: realgo-spin 0.7s linear infinite;
}
@keyframes realgo-spin { to { transform: rotate(360deg); } }

/* Error banner */
.realgo-error {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 9px 11px;
  border: 1px solid var(--danger-line);
  border-radius: 8px;
  background: var(--danger-soft);
}
.realgo-error__icon {
  flex-shrink: 0;
  margin-top: 1px;
  color: var(--danger-bright);
}
.realgo-error__text {
  flex: 1;
  color: var(--danger-bright);
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.45;
}
.realgo-error__retry {
  flex-shrink: 0;
  background: none;
  border: 0;
  padding: 0;
  color: var(--accent-bright);
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.45;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* In-page fallback overlay (shadow DOM host content).
   Positioning + isolation live on the light-DOM host (see contents/realgo.ts,
   which sets all:initial to stop the page CSS leaking a frame around us). */
.realgo-overlay {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 24px 72px rgba(1, 4, 9, 0.7);
}
.realgo-overlay .realgo-popup { border-radius: 12px; }

@media (prefers-reduced-motion: reduce) {
  .realgo-spinner { animation: none; }
  .realgo-choice, .realgo-btn, .realgo-iconbtn { transition: none; }
}
`, yg = 2500, kg = 6e4, Sg = 2;
function Rg(f, m) {
  const [d, M] = te.useState("hidden");
  return te.useEffect(() => {
    if (f == null || !m) return;
    let L = !1, q;
    const G = Date.now();
    let O = 0, T = 0;
    const X = (z) => {
      L || M(z);
    }, W = async () => {
      T += 1;
      const z = await m(f).catch(() => null);
      if (!L) {
        if (z == null) {
          if (O += 1, O >= Sg) {
            X("hidden");
            return;
          }
        } else {
          if (O = 0, z.status === "ready") {
            X("ready");
            return;
          }
          if (z.status === "none" && T > 1) {
            X("none");
            return;
          }
          z.status === "generating" && X("generating");
        }
        if (Date.now() - G >= kg) {
          M((j) => L || j === "hidden" ? j : "none");
          return;
        }
        q = window.setTimeout(W, yg);
      }
    };
    return W(), () => {
      L = !0, q !== void 0 && window.clearTimeout(q);
    };
  }, [f, m]), d;
}
const xg = new URL("data:image/png;base64,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", import.meta.url).href, Dg = [
  { value: "easy", label: "Легко", icon: "easy" },
  { value: "normal", label: "Средне", icon: "normal" },
  { value: "hard", label: "Тяжело", icon: "hard" }
], Jg = "https://github.com/mxdtrip/freeburger/issues/new?labels=extension&title=" + encodeURIComponent("Расширение: не распознана задача") + "&body=" + encodeURIComponent(`Страница:
Что ожидали:
Что произошло: `), Fg = sg + ug;
function Ug({
  submission: f,
  onSave: m,
  onFetchCards: d,
  onClose: M,
  onCollapse: L,
  onReview: q,
  onReport: G
}) {
  const [O, T] = te.useState(null), [X, W] = te.useState("form"), [z, j] = te.useState(""), [ye, xe] = te.useState(null), $ = Rg(
    X === "success" ? ye : null,
    d
  );
  function Y() {
    if (G) {
      G();
      return;
    }
    window.open(Jg, "_blank", "noopener,noreferrer");
  }
  function Ue() {
    if (L) {
      L();
      return;
    }
    if (M) {
      M();
      return;
    }
    window.close();
  }
  function de() {
    if (q) {
      q();
      return;
    }
    window.open(Fg, "_blank", "noopener,noreferrer"), L ? L() : M && M();
  }
  if (f === void 0)
    return /* @__PURE__ */ h.jsx(Fr, { onClose: M, children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-state realgo-state--loading-scene", children: [
      /* @__PURE__ */ h.jsx("div", { className: "realgo-spinner", "aria-label": "Загрузка" }),
      /* @__PURE__ */ h.jsx("span", { className: "realgo-muted", children: "определяем задачу…" })
    ] }) });
  if (f === null)
    return /* @__PURE__ */ h.jsx(Fr, { onClose: M, children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-state realgo-state--no-task-scene", children: [
      /* @__PURE__ */ h.jsx("div", { className: "realgo-state__icon realgo-state__icon--muted", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(Lg, {}) }),
      /* @__PURE__ */ h.jsx("p", { className: "realgo-state__text", children: "Откройте задачу на LeetCode, GeeksforGeeks, HackerRank или Codeforces и отправьте решение — realgo подхватит её автоматически." }),
      /* @__PURE__ */ h.jsx("button", { type: "button", className: "realgo-link", onClick: Y, children: "Сообщить об ошибке" })
    ] }) });
  if (X === "success")
    return /* @__PURE__ */ h.jsx(Fr, { onClose: M, scene: "success", children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-state realgo-state--success-scene", children: [
      /* @__PURE__ */ h.jsx("div", { className: "realgo-state__icon realgo-state__icon--success", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(Yi, {}) }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("p", { className: "realgo-state__title realgo-state__title--success", children: "Запланировано" }),
        /* @__PURE__ */ h.jsx("p", { className: "realgo-muted", style: { marginTop: 4 }, children: "Задача добавлена в очередь повторений." })
      ] }),
      $ !== "hidden" && /* @__PURE__ */ h.jsx(Ng, { state: $, onOpen: de }),
      /* @__PURE__ */ h.jsxs("div", { className: "realgo-state__actions", children: [
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "realgo-btn realgo-btn--ghost realgo-btn--state",
            onClick: Ue,
            children: "Свернуть"
          }
        ),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "realgo-btn realgo-btn--primary realgo-btn--state",
            onClick: de,
            children: "К повторению"
          }
        )
      ] })
    ] }) });
  if (X === "error")
    return /* @__PURE__ */ h.jsx(Fr, { onClose: M, children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-state realgo-state--error-scene", children: [
      /* @__PURE__ */ h.jsx("div", { className: "realgo-state__icon realgo-state__icon--danger", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(qg, { size: 20 }) }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("p", { className: "realgo-state__title realgo-state__title--danger", children: "Не удалось сохранить" }),
        /* @__PURE__ */ h.jsx("p", { className: "realgo-muted", style: { marginTop: 4 }, children: z })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "realgo-state__actions", children: [
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "realgo-btn realgo-btn--ghost realgo-btn--state",
            onClick: () => W("form"),
            children: "Назад"
          }
        ),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "realgo-btn realgo-btn--primary realgo-btn--state",
            onClick: () => O && pe(O),
            children: "Повторить"
          }
        )
      ] })
    ] }) });
  const Qe = X === "saving";
  async function pe(De) {
    if (Qe || f == null) return;
    T(De), W("saving"), j("");
    const Ee = {
      ...f,
      userDifficulty: De
    };
    try {
      const re = await m(Ee);
      xe(
        typeof (re == null ? void 0 : re.problemId) == "number" && re.problemId > 0 ? re.problemId : null
      ), W("success");
    } catch (re) {
      W("error"), j(re instanceof Error ? re.message : "Не удалось сохранить.");
    }
  }
  return /* @__PURE__ */ h.jsx(Fr, { task: f, onClose: M, children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-body", children: [
    /* @__PURE__ */ h.jsx(
      Tg,
      {
        title: "Как далась задача?",
        options: Dg,
        value: O,
        onPick: pe,
        disabled: Qe
      }
    ),
    /* @__PURE__ */ h.jsx("p", { className: "realgo-hint", role: "status", children: Qe ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        "span",
        {
          className: "realgo-spinner",
          style: { width: 13, height: 13, borderWidth: 2 }
        }
      ),
      "сохраняю…"
    ] }) : "Выберите сложность — realgo сохранит результат" })
  ] }) });
}
function Ng({
  state: f,
  onOpen: m
}) {
  return /* @__PURE__ */ h.jsxs("p", { className: `realgo-cards realgo-cards--${f}`, role: "status", children: [
    f === "generating" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        "span",
        {
          className: "realgo-spinner",
          style: { width: 13, height: 13, borderWidth: 2 },
          "aria-hidden": "true"
        }
      ),
      "Генерируем карточки по задаче…"
    ] }),
    f === "ready" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx("span", { className: "realgo-cards__check", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(Yi, { size: 13 }) }),
      "Карточки готовы",
      /* @__PURE__ */ h.jsx("button", { type: "button", className: "realgo-link realgo-cards__open", onClick: m, children: "открыть" })
    ] }),
    f === "none" && /* @__PURE__ */ h.jsx(h.Fragment, { children: "Карточки к задаче пока не готовы" })
  ] });
}
function Fr({
  children: f,
  task: m,
  onClose: d,
  scene: M
}) {
  var q;
  const L = [
    "realgo-popup",
    M === "success" ? "realgo-popup--success" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h.jsxs("div", { className: L, children: [
    /* @__PURE__ */ h.jsx("style", { children: vg }),
    /* @__PURE__ */ h.jsxs("div", { className: "realgo-header", children: [
      /* @__PURE__ */ h.jsxs("span", { className: "realgo-brand", children: [
        /* @__PURE__ */ h.jsx(Kg, { size: 20 }),
        "ReAlgo",
        /* @__PURE__ */ h.jsx("span", { className: "realgo-path", children: "~/ext" })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "realgo-header__right", children: d && /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "realgo-iconbtn",
          onClick: d,
          "aria-label": "Закрыть",
          children: /* @__PURE__ */ h.jsx(Pg, {})
        }
      ) })
    ] }),
    m && /* @__PURE__ */ h.jsxs("div", { className: "realgo-task", children: [
      /* @__PURE__ */ h.jsx("span", { className: "realgo-eyebrow", children: "Задача выполнена успешно!" }),
      /* @__PURE__ */ h.jsx("p", { className: "realgo-task__title", children: m.taskTitle }),
      /* @__PURE__ */ h.jsxs("div", { className: "realgo-task__meta", children: [
        /* @__PURE__ */ h.jsx("span", { className: `realgo-tag ${Og(m.platform)}`, children: m.platform }),
        (q = m.tags) == null ? void 0 : q.map((G) => /* @__PURE__ */ h.jsx("span", { className: "realgo-tag", children: G }, G))
      ] })
    ] }),
    f
  ] });
}
function Tg({
  title: f,
  options: m,
  value: d,
  onPick: M,
  disabled: L
}) {
  return /* @__PURE__ */ h.jsxs("div", { className: "realgo-section", children: [
    /* @__PURE__ */ h.jsx("div", { className: "realgo-section__head", children: /* @__PURE__ */ h.jsx("h3", { className: "realgo-section__title", children: f }) }),
    /* @__PURE__ */ h.jsx("div", { className: "realgo-choices", role: "group", "aria-label": f, children: m.map((q) => {
      const G = d === q.value;
      return /* @__PURE__ */ h.jsxs(
        "button",
        {
          type: "button",
          className: "realgo-choice",
          "data-difficulty": q.icon,
          "aria-pressed": G,
          disabled: L,
          onClick: () => M(q.value),
          children: [
            /* @__PURE__ */ h.jsx("span", { className: "realgo-choice__icon", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(Mg, { kind: q.icon }) }),
            /* @__PURE__ */ h.jsx("span", { className: "realgo-choice__label", children: q.label })
          ]
        },
        q.value
      );
    }) })
  ] });
}
function Kg({ size: f = 16 }) {
  return /* @__PURE__ */ h.jsx(
    "img",
    {
      alt: "",
      "aria-hidden": "true",
      className: "realgo-brand__mark",
      decoding: "async",
      height: f,
      src: xg,
      width: f
    }
  );
}
function Yi({ size: f = 18 }) {
  return /* @__PURE__ */ h.jsx(
    "svg",
    {
      width: f,
      height: f,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: /* @__PURE__ */ h.jsx("path", { d: "M20 6 9 17l-5-5" })
    }
  );
}
function Mg({ kind: f }) {
  return f === "easy" ? /* @__PURE__ */ h.jsx(Yi, {}) : f === "normal" ? /* @__PURE__ */ h.jsx(
    "svg",
    {
      width: "19",
      height: "19",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: /* @__PURE__ */ h.jsx("path", { d: "M3.5 12.5c2.4-5.2 5.2-5.2 8 0s5.6 5.2 9 0" })
    }
  ) : /* @__PURE__ */ h.jsxs(
    "svg",
    {
      width: "19",
      height: "19",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ h.jsx("path", { d: "M12 5v8" }),
        /* @__PURE__ */ h.jsx("path", { d: "M12 18h.01" })
      ]
    }
  );
}
function Lg() {
  return /* @__PURE__ */ h.jsxs(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ h.jsx("path", { d: "M15 3h6v6" }),
        /* @__PURE__ */ h.jsx("path", { d: "M10 14 21 3" }),
        /* @__PURE__ */ h.jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
      ]
    }
  );
}
function qg({ size: f = 13 }) {
  return /* @__PURE__ */ h.jsxs(
    "svg",
    {
      width: f,
      height: f,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ h.jsx("path", { d: "M12 8v4" }),
        /* @__PURE__ */ h.jsx("path", { d: "M12 16h.01" })
      ]
    }
  );
}
function Pg() {
  return /* @__PURE__ */ h.jsxs(
    "svg",
    {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ h.jsx("path", { d: "M18 6 6 18" }),
        /* @__PURE__ */ h.jsx("path", { d: "m6 6 12 12" })
      ]
    }
  );
}
function Og(f) {
  switch (f.toLowerCase()) {
    case "leetcode":
      return "realgo-tag--leetcode";
    case "hackerrank":
      return "realgo-tag--hackerrank";
    case "geeksforgeeks":
      return "realgo-tag--geeksforgeeks";
    case "codeforces":
      return "realgo-tag--codeforces";
    default:
      return "";
  }
}
const Hg = 3800, Vg = 1450, tu = Hg + 180, _s = tu + Vg + 220, Go = (f) => new Promise((m) => window.setTimeout(m, f)), dn = /* @__PURE__ */ new Map(), Hi = /* @__PURE__ */ new Set(), nu = window.chrome ?? {};
nu.storage = {
  local: {
    async get(f) {
      return f === null ? Object.fromEntries(dn) : { [f]: dn.get(f) };
    },
    async set(f) {
      const m = {};
      Object.entries(f).forEach(([d, M]) => {
        m[d] = { oldValue: dn.get(d), newValue: M }, dn.set(d, M);
      }), Hi.forEach((d) => d(m, "local"));
    },
    async remove(f) {
      (Array.isArray(f) ? f : [f]).forEach((m) => dn.delete(m));
    }
  },
  onChanged: {
    addListener(f) {
      Hi.add(f);
    },
    removeListener(f) {
      Hi.delete(f);
    }
  }
};
window.chrome || (window.chrome = nu);
const En = {
  platform: "leetcode",
  taskTitle: "Longest Substring Without Repeating Characters",
  taskUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
  platformTaskSlug: "longest-substring-without-repeating-characters",
  difficulty: "Medium",
  tags: ["Hash Table", "String", "Sliding Window"],
  taskDescription: "Find the length of the longest substring without repeating characters."
}, Gg = `${En.platform}:${En.platformTaskSlug}:${En.taskUrl}`, $s = Ur + Gg, Yg = {
  eventId: "deck-demo-longest-substring",
  platform: "leetcode",
  taskTitle: En.taskTitle,
  taskUrl: En.taskUrl,
  platformTaskSlug: En.platformTaskSlug,
  tags: ["sliding window", "hash table"],
  difficulty: "medium",
  submitResult: "accepted",
  submittedAt: "2026-07-30T12:00:00.000Z"
}, On = [
  {
    hint: "Не пересчитывай каждую подстроку заново. Двигай левую границу только тогда, когда очередной символ уже есть в текущем окне.",
    question: "Какую информацию о последней позиции символа нужно хранить?",
    stage: "nudge",
    problemKnown: !0,
    patterns: [{ code: "variable_sliding_window", name: "Variable Sliding Window" }]
  },
  {
    hint: "Держи окно [left, right] без повторяющихся символов и словарь последних позиций. При повторе переноси left сразу за прошлое вхождение.",
    question: "Почему max защищает уже найденное окно?",
    stage: "approach",
    problemKnown: !0,
    patterns: [{ code: "variable_sliding_window", name: "Variable Sliding Window" }]
  },
  {
    hint: "На каждом right обновляй left через max(left, last[c] + 1), затем last[c] = right и сравнивай ответ с right - left + 1.",
    question: "Какой инвариант выполняется перед обновлением максимальной длины?",
    stage: "reveal",
    problemKnown: !0,
    patterns: [{ code: "variable_sliding_window", name: "Variable Sliding Window" }]
  }
];
function zg() {
  return {
    messages: [
      { role: "user", content: "Дай мягкий намёк, без решения." },
      { role: "assistant", content: On[0].hint },
      { role: "user", content: "Можно конкретнее — всё ещё без полного решения." },
      { role: "assistant", content: On[1].hint },
      { role: "user", content: "Покажи последний уровень разбора." },
      { role: "assistant", content: On[2].hint }
    ],
    hintLevel: 3,
    hintsUsed: 3,
    cooldownEndAt: null,
    patterns: On[2].patterns,
    problemKnown: !0,
    patternUsed: !1,
    savedAt: Date.now()
  };
}
function Xg({ mode: f }) {
  const m = te.useMemo(() => {
    let L = 0;
    return async () => (await Go(180), L += 1, L < 2 ? { status: "generating", cardsCount: 0 } : { status: "ready", cardsCount: 3 });
  }, []);
  async function d(L) {
    return await Go(620), { accepted: !0, duplicate: !1, problemId: 42, status: "recorded", nextReviewAt: null };
  }
  async function M(L, q) {
    const G = On[Math.max(0, Math.min(On.length - 1, L.hintLevel - 1))], O = G.hint.split(" ");
    await Go(260);
    for (let T = 0; T < O.length; T += 3)
      q(O.slice(T, T + 3).join(" ") + (T + 3 < O.length ? " " : "")), await Go(82);
    return G;
  }
  return f === "extension" || f === "rating" ? /* @__PURE__ */ Vi.createElement(Ug, { submission: Yg, onSave: d, onFetchCards: m, onClose: () => {
  }, onReview: () => {
  } }) : /* @__PURE__ */ Vi.createElement(Cg, { task: En, onAsk: M, variant: "panel" });
}
let Hn = null, ut = null, Vn = [], Gn = null;
function eu() {
  var f;
  Vn.forEach((m) => window.clearTimeout(m)), Vn = [], Gn && (window.removeEventListener("realgo:macbookready", Gn), Gn = null), ut == null || ut.classList.remove("is-product-mounted", "is-product-screen", "is-product-focus"), ut && delete ut.dataset.productTimelineStarted, Hn == null || Hn.unmount(), Hn = null, (f = ut == null ? void 0 : ut.querySelector(".product-ui-stage")) == null || f.remove(), ut = null;
}
function zi() {
  var q, G;
  const f = document.querySelector(".slide.is-active.slide-macbook");
  if (!f) {
    eu();
    return;
  }
  if (f === ut) return;
  eu();
  const m = ((q = f.querySelector(".macbook-3d-slot")) == null ? void 0 : q.dataset.macbookMode) ?? "extension";
  m === "stages" ? dn.set($s, zg()) : dn.delete($s);
  const d = document.createElement("div");
  d.className = `product-ui-stage product-ui-stage--${m}`, d.setAttribute("aria-label", "Интерактивная демонстрация интерфейса расширения ReAlgo"), d.innerHTML = '<div class="product-focus-dim" aria-hidden="true"></div><div class="product-ui-card"><div class="product-ui-glint" aria-hidden="true"></div><div class="product-ui-root"></div></div>';
  const M = d.querySelector(".product-ui-card");
  f.appendChild(d), ut = f, Hn = ig.createRoot(d.querySelector(".product-ui-root")), Hn.render(/* @__PURE__ */ Vi.createElement(Xg, { mode: m })), f.classList.add("is-product-mounted");
  function L() {
    f !== ut || f.dataset.productTimelineStarted === "true" || (f.dataset.productTimelineStarted = "true", Vn.push(window.setTimeout(() => f.classList.add("is-product-screen"), 180)), Vn.push(window.setTimeout(() => {
      f.classList.add("is-product-focus"), window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide: f } }));
    }, tu)), m === "agent" && Vn.push(window.setTimeout(() => {
      var O;
      return (O = M.querySelector(".realgo-agent-btn--hint")) == null ? void 0 : O.click();
    }, _s)), m === "rating" && Vn.push(window.setTimeout(() => {
      var O;
      return (O = M.querySelector('[data-difficulty="normal"]')) == null ? void 0 : O.click();
    }, _s)));
  }
  (G = document.getElementById("stage")) != null && G.classList.contains("has-macbook-3d") ? requestAnimationFrame(L) : (Gn = () => {
    Gn = null, requestAnimationFrame(L);
  }, window.addEventListener("realgo:macbookready", Gn, { once: !0 }));
}
window.addEventListener("realgo:slidechange", zi);
window.addEventListener("DOMContentLoaded", zi, { once: !0 });
document.readyState !== "loading" && zi();
