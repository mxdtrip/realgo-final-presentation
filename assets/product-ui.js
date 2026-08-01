function og(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var Hi = { exports: {} }, X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ys;
function lg() {
  if (Ys) return X;
  Ys = 1;
  var E = Symbol.for("react.element"), Q = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), q = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Y = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), M = Symbol.iterator;
  function z(u) {
    return u === null || typeof u != "object" ? null : (u = M && u[M] || u["@@iterator"], typeof u == "function" ? u : null);
  }
  var Ce = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, me = Object.assign, Z = {};
  function V(u, p, H) {
    this.props = u, this.context = p, this.refs = Z, this.updater = H || Ce;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(u, p) {
    if (typeof u != "object" && typeof u != "function" && u != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, u, p, "setState");
  }, V.prototype.forceUpdate = function(u) {
    this.updater.enqueueForceUpdate(this, u, "forceUpdate");
  };
  function ie() {
  }
  ie.prototype = V.prototype;
  function re(u, p, H) {
    this.props = u, this.context = p, this.refs = Z, this.updater = H || Ce;
  }
  var we = re.prototype = new ie();
  we.constructor = re, me(we, V.prototype), we.isPureReactComponent = !0;
  var Ie = Array.isArray, Fe = Object.prototype.hasOwnProperty, he = { current: null }, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function qe(u, p, H) {
    var G, b = {}, _ = null, le = null;
    if (p != null) for (G in p.ref !== void 0 && (le = p.ref), p.key !== void 0 && (_ = "" + p.key), p) Fe.call(p, G) && !oe.hasOwnProperty(G) && (b[G] = p[G]);
    var R = arguments.length - 2;
    if (R === 1) b.children = H;
    else if (1 < R) {
      for (var J = Array(R), ce = 0; ce < R; ce++) J[ce] = arguments[ce + 2];
      b.children = J;
    }
    if (u && u.defaultProps) for (G in R = u.defaultProps, R) b[G] === void 0 && (b[G] = R[G]);
    return { $$typeof: E, type: u, key: _, ref: le, props: b, _owner: he.current };
  }
  function $e(u, p) {
    return { $$typeof: E, type: u.type, key: p, ref: u.ref, props: u.props, _owner: u._owner };
  }
  function Ye(u) {
    return typeof u == "object" && u !== null && u.$$typeof === E;
  }
  function ot(u) {
    var p = { "=": "=0", ":": "=2" };
    return "$" + u.replace(/[=:]/g, function(H) {
      return p[H];
    });
  }
  var He = /\/+/g;
  function Ne(u, p) {
    return typeof u == "object" && u !== null && u.key != null ? ot("" + u.key) : p.toString(36);
  }
  function ze(u, p, H, G, b) {
    var _ = typeof u;
    (_ === "undefined" || _ === "boolean") && (u = null);
    var le = !1;
    if (u === null) le = !0;
    else switch (_) {
      case "string":
      case "number":
        le = !0;
        break;
      case "object":
        switch (u.$$typeof) {
          case E:
          case Q:
            le = !0;
        }
    }
    if (le) return le = u, b = b(le), u = G === "" ? "." + Ne(le, 0) : G, Ie(b) ? (H = "", u != null && (H = u.replace(He, "$&/") + "/"), ze(b, p, H, "", function(ce) {
      return ce;
    })) : b != null && (Ye(b) && (b = $e(b, H + (!b.key || le && le.key === b.key ? "" : ("" + b.key).replace(He, "$&/") + "/") + u)), p.push(b)), 1;
    if (le = 0, G = G === "" ? "." : G + ":", Ie(u)) for (var R = 0; R < u.length; R++) {
      _ = u[R];
      var J = G + Ne(_, R);
      le += ze(_, p, H, J, b);
    }
    else if (J = z(u), typeof J == "function") for (u = J.call(u), R = 0; !(_ = u.next()).done; ) _ = _.value, J = G + Ne(_, R++), le += ze(_, p, H, J, b);
    else if (_ === "object") throw p = String(u), Error("Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead.");
    return le;
  }
  function Oe(u, p, H) {
    if (u == null) return u;
    var G = [], b = 0;
    return ze(u, G, "", "", function(_) {
      return p.call(H, _, b++);
    }), G;
  }
  function ve(u) {
    if (u._status === -1) {
      var p = u._result;
      p = p(), p.then(function(H) {
        (u._status === 0 || u._status === -1) && (u._status = 1, u._result = H);
      }, function(H) {
        (u._status === 0 || u._status === -1) && (u._status = 2, u._result = H);
      }), u._status === -1 && (u._status = 0, u._result = p);
    }
    if (u._status === 1) return u._result.default;
    throw u._result;
  }
  var Ae = { current: null }, w = { transition: null }, F = { ReactCurrentDispatcher: Ae, ReactCurrentBatchConfig: w, ReactCurrentOwner: he };
  function y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return X.Children = { map: Oe, forEach: function(u, p, H) {
    Oe(u, function() {
      p.apply(this, arguments);
    }, H);
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
    if (!Ye(u)) throw Error("React.Children.only expected to receive a single React element child.");
    return u;
  } }, X.Component = V, X.Fragment = f, X.Profiler = O, X.PureComponent = re, X.StrictMode = P, X.Suspense = L, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, X.act = y, X.cloneElement = function(u, p, H) {
    if (u == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + u + ".");
    var G = me({}, u.props), b = u.key, _ = u.ref, le = u._owner;
    if (p != null) {
      if (p.ref !== void 0 && (_ = p.ref, le = he.current), p.key !== void 0 && (b = "" + p.key), u.type && u.type.defaultProps) var R = u.type.defaultProps;
      for (J in p) Fe.call(p, J) && !oe.hasOwnProperty(J) && (G[J] = p[J] === void 0 && R !== void 0 ? R[J] : p[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) G.children = H;
    else if (1 < J) {
      R = Array(J);
      for (var ce = 0; ce < J; ce++) R[ce] = arguments[ce + 2];
      G.children = R;
    }
    return { $$typeof: E, type: u.type, key: b, ref: _, props: G, _owner: le };
  }, X.createContext = function(u) {
    return u = { $$typeof: q, _currentValue: u, _currentValue2: u, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, u.Provider = { $$typeof: N, _context: u }, u.Consumer = u;
  }, X.createElement = qe, X.createFactory = function(u) {
    var p = qe.bind(null, u);
    return p.type = u, p;
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(u) {
    return { $$typeof: W, render: u };
  }, X.isValidElement = Ye, X.lazy = function(u) {
    return { $$typeof: j, _payload: { _status: -1, _result: u }, _init: ve };
  }, X.memo = function(u, p) {
    return { $$typeof: Y, type: u, compare: p === void 0 ? null : p };
  }, X.startTransition = function(u) {
    var p = w.transition;
    w.transition = {};
    try {
      u();
    } finally {
      w.transition = p;
    }
  }, X.unstable_act = y, X.useCallback = function(u, p) {
    return Ae.current.useCallback(u, p);
  }, X.useContext = function(u) {
    return Ae.current.useContext(u);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(u) {
    return Ae.current.useDeferredValue(u);
  }, X.useEffect = function(u, p) {
    return Ae.current.useEffect(u, p);
  }, X.useId = function() {
    return Ae.current.useId();
  }, X.useImperativeHandle = function(u, p, H) {
    return Ae.current.useImperativeHandle(u, p, H);
  }, X.useInsertionEffect = function(u, p) {
    return Ae.current.useInsertionEffect(u, p);
  }, X.useLayoutEffect = function(u, p) {
    return Ae.current.useLayoutEffect(u, p);
  }, X.useMemo = function(u, p) {
    return Ae.current.useMemo(u, p);
  }, X.useReducer = function(u, p, H) {
    return Ae.current.useReducer(u, p, H);
  }, X.useRef = function(u) {
    return Ae.current.useRef(u);
  }, X.useState = function(u) {
    return Ae.current.useState(u);
  }, X.useSyncExternalStore = function(u, p, H) {
    return Ae.current.useSyncExternalStore(u, p, H);
  }, X.useTransition = function() {
    return Ae.current.useTransition();
  }, X.version = "18.3.1", X;
}
var zs;
function Zi() {
  return zs || (zs = 1, Hi.exports = lg()), Hi.exports;
}
var te = Zi();
const Xi = /* @__PURE__ */ og(te);
var zo = {}, Oi = { exports: {} }, _e = {}, Vi = { exports: {} }, Gi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs;
function ig() {
  return Xs || (Xs = 1, (function(E) {
    function Q(w, F) {
      var y = w.length;
      w.push(F);
      e: for (; 0 < y; ) {
        var u = y - 1 >>> 1, p = w[u];
        if (0 < O(p, F)) w[u] = F, w[y] = p, y = u;
        else break e;
      }
    }
    function f(w) {
      return w.length === 0 ? null : w[0];
    }
    function P(w) {
      if (w.length === 0) return null;
      var F = w[0], y = w.pop();
      if (y !== F) {
        w[0] = y;
        e: for (var u = 0, p = w.length, H = p >>> 1; u < H; ) {
          var G = 2 * (u + 1) - 1, b = w[G], _ = G + 1, le = w[_];
          if (0 > O(b, y)) _ < p && 0 > O(le, b) ? (w[u] = le, w[_] = y, u = _) : (w[u] = b, w[G] = y, u = G);
          else if (_ < p && 0 > O(le, y)) w[u] = le, w[_] = y, u = _;
          else break e;
        }
      }
      return F;
    }
    function O(w, F) {
      var y = w.sortIndex - F.sortIndex;
      return y !== 0 ? y : w.id - F.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var N = performance;
      E.unstable_now = function() {
        return N.now();
      };
    } else {
      var q = Date, W = q.now();
      E.unstable_now = function() {
        return q.now() - W;
      };
    }
    var L = [], Y = [], j = 1, M = null, z = 3, Ce = !1, me = !1, Z = !1, V = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function we(w) {
      for (var F = f(Y); F !== null; ) {
        if (F.callback === null) P(Y);
        else if (F.startTime <= w) P(Y), F.sortIndex = F.expirationTime, Q(L, F);
        else break;
        F = f(Y);
      }
    }
    function Ie(w) {
      if (Z = !1, we(w), !me) if (f(L) !== null) me = !0, ve(Fe);
      else {
        var F = f(Y);
        F !== null && Ae(Ie, F.startTime - w);
      }
    }
    function Fe(w, F) {
      me = !1, Z && (Z = !1, ie(qe), qe = -1), Ce = !0;
      var y = z;
      try {
        for (we(F), M = f(L); M !== null && (!(M.expirationTime > F) || w && !ot()); ) {
          var u = M.callback;
          if (typeof u == "function") {
            M.callback = null, z = M.priorityLevel;
            var p = u(M.expirationTime <= F);
            F = E.unstable_now(), typeof p == "function" ? M.callback = p : M === f(L) && P(L), we(F);
          } else P(L);
          M = f(L);
        }
        if (M !== null) var H = !0;
        else {
          var G = f(Y);
          G !== null && Ae(Ie, G.startTime - F), H = !1;
        }
        return H;
      } finally {
        M = null, z = y, Ce = !1;
      }
    }
    var he = !1, oe = null, qe = -1, $e = 5, Ye = -1;
    function ot() {
      return !(E.unstable_now() - Ye < $e);
    }
    function He() {
      if (oe !== null) {
        var w = E.unstable_now();
        Ye = w;
        var F = !0;
        try {
          F = oe(!0, w);
        } finally {
          F ? Ne() : (he = !1, oe = null);
        }
      } else he = !1;
    }
    var Ne;
    if (typeof re == "function") Ne = function() {
      re(He);
    };
    else if (typeof MessageChannel < "u") {
      var ze = new MessageChannel(), Oe = ze.port2;
      ze.port1.onmessage = He, Ne = function() {
        Oe.postMessage(null);
      };
    } else Ne = function() {
      V(He, 0);
    };
    function ve(w) {
      oe = w, he || (he = !0, Ne());
    }
    function Ae(w, F) {
      qe = V(function() {
        w(E.unstable_now());
      }, F);
    }
    E.unstable_IdlePriority = 5, E.unstable_ImmediatePriority = 1, E.unstable_LowPriority = 4, E.unstable_NormalPriority = 3, E.unstable_Profiling = null, E.unstable_UserBlockingPriority = 2, E.unstable_cancelCallback = function(w) {
      w.callback = null;
    }, E.unstable_continueExecution = function() {
      me || Ce || (me = !0, ve(Fe));
    }, E.unstable_forceFrameRate = function(w) {
      0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $e = 0 < w ? Math.floor(1e3 / w) : 5;
    }, E.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, E.unstable_getFirstCallbackNode = function() {
      return f(L);
    }, E.unstable_next = function(w) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = z;
      }
      var y = z;
      z = F;
      try {
        return w();
      } finally {
        z = y;
      }
    }, E.unstable_pauseExecution = function() {
    }, E.unstable_requestPaint = function() {
    }, E.unstable_runWithPriority = function(w, F) {
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
      var y = z;
      z = w;
      try {
        return F();
      } finally {
        z = y;
      }
    }, E.unstable_scheduleCallback = function(w, F, y) {
      var u = E.unstable_now();
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
      return p = y + p, w = { id: j++, callback: F, priorityLevel: w, startTime: y, expirationTime: p, sortIndex: -1 }, y > u ? (w.sortIndex = y, Q(Y, w), f(L) === null && w === f(Y) && (Z ? (ie(qe), qe = -1) : Z = !0, Ae(Ie, y - u))) : (w.sortIndex = p, Q(L, w), me || Ce || (me = !0, ve(Fe))), w;
    }, E.unstable_shouldYield = ot, E.unstable_wrapCallback = function(w) {
      var F = z;
      return function() {
        var y = z;
        z = F;
        try {
          return w.apply(this, arguments);
        } finally {
          z = y;
        }
      };
    };
  })(Gi)), Gi;
}
var js;
function Ag() {
  return js || (js = 1, Vi.exports = ig()), Vi.exports;
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
var Ws;
function ag() {
  if (Ws) return _e;
  Ws = 1;
  var E = Zi(), Q = Ag();
  function f(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var P = /* @__PURE__ */ new Set(), O = {};
  function N(e, t) {
    q(e, t), q(e + "Capture", t);
  }
  function q(e, t) {
    for (O[e] = t, e = 0; e < t.length; e++) P.add(t[e]);
  }
  var W = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, Y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, j = {}, M = {};
  function z(e) {
    return L.call(M, e) ? !0 : L.call(j, e) ? !1 : Y.test(e) ? M[e] = !0 : (j[e] = !0, !1);
  }
  function Ce(e, t, n, r) {
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
  function me(e, t, n, r) {
    if (t === null || typeof t > "u" || Ce(e, t, n, r)) return !0;
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
  function Z(e, t, n, r, o, l, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
  }
  var V = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    V[e] = new Z(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    V[t] = new Z(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    V[e] = new Z(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    V[e] = new Z(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    V[e] = new Z(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    V[e] = new Z(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    V[e] = new Z(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    V[e] = new Z(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    V[e] = new Z(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ie = /[\-:]([a-z])/g;
  function re(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      ie,
      re
    );
    V[t] = new Z(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ie, re);
    V[t] = new Z(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ie, re);
    V[t] = new Z(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    V[e] = new Z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), V.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    V[e] = new Z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function we(e, t, n, r) {
    var o = V.hasOwnProperty(t) ? V[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (me(t, n, o, r) && (n = null), r || o === null ? z(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ie = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fe = Symbol.for("react.element"), he = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), qe = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), Ye = Symbol.for("react.provider"), ot = Symbol.for("react.context"), He = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), ze = Symbol.for("react.suspense_list"), Oe = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Ae = Symbol.for("react.offscreen"), w = Symbol.iterator;
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
  var H = !1;
  function G(e, t) {
    if (!e || H) return "";
    H = !0;
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
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (d) {
          r = d;
        }
        e();
      }
    } catch (d) {
      if (d && r && typeof d.stack == "string") {
        for (var o = d.stack.split(`
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
      H = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? p(e) : "";
  }
  function b(e) {
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
        return e = G(e.type, !1), e;
      case 11:
        return e = G(e.type.render, !1), e;
      case 1:
        return e = G(e.type, !0), e;
      default:
        return "";
    }
  }
  function _(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case oe:
        return "Fragment";
      case he:
        return "Portal";
      case $e:
        return "Profiler";
      case qe:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case ze:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ot:
        return (e.displayName || "Context") + ".Consumer";
      case Ye:
        return (e._context.displayName || "Context") + ".Provider";
      case He:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Oe:
        return t = e.displayName || null, t !== null ? t : _(e.type) || "Memo";
      case ve:
        t = e._payload, e = e._init;
        try {
          return _(e(t));
        } catch {
        }
    }
    return null;
  }
  function le(e) {
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
        return _(t);
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
  function ce(e) {
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
  function St(e) {
    e._valueTracker || (e._valueTracker = ce(e));
  }
  function Bt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = J(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ge(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Lt(e, t) {
    var n = t.checked;
    return y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Mt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = R(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function $i(e, t) {
    t = t.checked, t != null && we(e, "checked", t, !1);
  }
  function Wo(e, t) {
    $i(e, t);
    var n = R(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Zo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zo(e, t.type, R(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function eA(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Zo(e, t, n) {
    (t !== "number" || ge(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var jn = Array.isArray;
  function Bn(e, t, n, r) {
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
  function bo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(f(91));
    return y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function tA(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(f(92));
        if (jn(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: R(n) };
  }
  function nA(e, t) {
    var n = R(t.value), r = R(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function rA(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function oA(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _o(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? oA(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Mr, lA = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Mr = Mr || document.createElement("div"), Mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Wn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zn = {
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
  }, au = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Zn).forEach(function(e) {
    au.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Zn[t] = Zn[e];
    });
  });
  function iA(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zn.hasOwnProperty(e) && Zn[e] ? ("" + t).trim() : t + "px";
  }
  function AA(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = iA(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var su = y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function $o(e, t) {
    if (t) {
      if (su[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(f(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(f(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(f(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(f(62));
    }
  }
  function el(e, t) {
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
  var tl = null;
  function nl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var rl = null, mn = null, wn = null;
  function aA(e) {
    if (e = Cr(e)) {
      if (typeof rl != "function") throw Error(f(280));
      var t = e.stateNode;
      t && (t = io(t), rl(e.stateNode, e.type, t));
    }
  }
  function sA(e) {
    mn ? wn ? wn.push(e) : wn = [e] : mn = e;
  }
  function uA() {
    if (mn) {
      var e = mn, t = wn;
      if (wn = mn = null, aA(e), t) for (e = 0; e < t.length; e++) aA(t[e]);
    }
  }
  function cA(e, t) {
    return e(t);
  }
  function gA() {
  }
  var ol = !1;
  function dA(e, t, n) {
    if (ol) return e(t, n);
    ol = !0;
    try {
      return cA(e, t, n);
    } finally {
      ol = !1, (mn !== null || wn !== null) && (gA(), uA());
    }
  }
  function bn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = io(n);
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
    if (n && typeof n != "function") throw Error(f(231, t, typeof n));
    return n;
  }
  var ll = !1;
  if (W) try {
    var _n = {};
    Object.defineProperty(_n, "passive", { get: function() {
      ll = !0;
    } }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
  } catch {
    ll = !1;
  }
  function uu(e, t, n, r, o, l, i, A, a) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, d);
    } catch (I) {
      this.onError(I);
    }
  }
  var $n = !1, Kr = null, Pr = !1, il = null, cu = { onError: function(e) {
    $n = !0, Kr = e;
  } };
  function gu(e, t, n, r, o, l, i, A, a) {
    $n = !1, Kr = null, uu.apply(cu, arguments);
  }
  function du(e, t, n, r, o, l, i, A, a) {
    if (gu.apply(this, arguments), $n) {
      if ($n) {
        var d = Kr;
        $n = !1, Kr = null;
      } else throw Error(f(198));
      Pr || (Pr = !0, il = d);
    }
  }
  function on(e) {
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
  function fA(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function EA(e) {
    if (on(e) !== e) throw Error(f(188));
  }
  function fu(e) {
    var t = e.alternate;
    if (!t) {
      if (t = on(e), t === null) throw Error(f(188));
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
          if (l === n) return EA(o), e;
          if (l === r) return EA(o), t;
          l = l.sibling;
        }
        throw Error(f(188));
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
          if (!i) throw Error(f(189));
        }
      }
      if (n.alternate !== r) throw Error(f(190));
    }
    if (n.tag !== 3) throw Error(f(188));
    return n.stateNode.current === n ? e : t;
  }
  function hA(e) {
    return e = fu(e), e !== null ? pA(e) : null;
  }
  function pA(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = pA(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var CA = Q.unstable_scheduleCallback, IA = Q.unstable_cancelCallback, Eu = Q.unstable_shouldYield, hu = Q.unstable_requestPaint, Qe = Q.unstable_now, pu = Q.unstable_getCurrentPriorityLevel, Al = Q.unstable_ImmediatePriority, QA = Q.unstable_UserBlockingPriority, qr = Q.unstable_NormalPriority, Cu = Q.unstable_LowPriority, BA = Q.unstable_IdlePriority, Hr = null, mt = null;
  function Iu(e) {
    if (mt && typeof mt.onCommitFiberRoot == "function") try {
      mt.onCommitFiberRoot(Hr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var dt = Math.clz32 ? Math.clz32 : mu, Qu = Math.log, Bu = Math.LN2;
  function mu(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Qu(e) / Bu | 0) | 0;
  }
  var Or = 64, Vr = 4194304;
  function er(e) {
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
  function Gr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var A = i & ~o;
      A !== 0 ? r = er(A) : (l &= i, l !== 0 && (r = er(l)));
    } else i = n & ~o, i !== 0 ? r = er(i) : l !== 0 && (r = er(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - dt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function wu(e, t) {
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
  function vu(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var i = 31 - dt(l), A = 1 << i, a = o[i];
      a === -1 ? ((A & n) === 0 || (A & r) !== 0) && (o[i] = wu(A, t)) : a <= t && (e.expiredLanes |= A), l &= ~A;
    }
  }
  function al(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function mA() {
    var e = Or;
    return Or <<= 1, (Or & 4194240) === 0 && (Or = 64), e;
  }
  function sl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function tr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = n;
  }
  function yu(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - dt(n), l = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
    }
  }
  function ul(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - dt(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var ne = 0;
  function wA(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var vA, cl, yA, kA, SA, gl = !1, Yr = [], Kt = null, Pt = null, qt = null, nr = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new Map(), Ht = [], ku = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function RA(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kt = null;
        break;
      case "dragenter":
      case "dragleave":
        Pt = null;
        break;
      case "mouseover":
      case "mouseout":
        qt = null;
        break;
      case "pointerover":
      case "pointerout":
        nr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        rr.delete(t.pointerId);
    }
  }
  function or(e, t, n, r, o, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Cr(t), t !== null && cl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Su(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return Kt = or(Kt, e, t, n, r, o), !0;
      case "dragenter":
        return Pt = or(Pt, e, t, n, r, o), !0;
      case "mouseover":
        return qt = or(qt, e, t, n, r, o), !0;
      case "pointerover":
        var l = o.pointerId;
        return nr.set(l, or(nr.get(l) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return l = o.pointerId, rr.set(l, or(rr.get(l) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function xA(e) {
    var t = ln(e.target);
    if (t !== null) {
      var n = on(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = fA(n), t !== null) {
            e.blockedOn = t, SA(e.priority, function() {
              yA(n);
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
  function zr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        tl = r, n.target.dispatchEvent(r), tl = null;
      } else return t = Cr(n), t !== null && cl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function DA(e, t, n) {
    zr(e) && n.delete(t);
  }
  function Ru() {
    gl = !1, Kt !== null && zr(Kt) && (Kt = null), Pt !== null && zr(Pt) && (Pt = null), qt !== null && zr(qt) && (qt = null), nr.forEach(DA), rr.forEach(DA);
  }
  function lr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, gl || (gl = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, Ru)));
  }
  function ir(e) {
    function t(o) {
      return lr(o, e);
    }
    if (0 < Yr.length) {
      lr(Yr[0], e);
      for (var n = 1; n < Yr.length; n++) {
        var r = Yr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Kt !== null && lr(Kt, e), Pt !== null && lr(Pt, e), qt !== null && lr(qt, e), nr.forEach(t), rr.forEach(t), n = 0; n < Ht.length; n++) r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); ) xA(n), n.blockedOn === null && Ht.shift();
  }
  var vn = Ie.ReactCurrentBatchConfig, Xr = !0;
  function xu(e, t, n, r) {
    var o = ne, l = vn.transition;
    vn.transition = null;
    try {
      ne = 1, dl(e, t, n, r);
    } finally {
      ne = o, vn.transition = l;
    }
  }
  function Du(e, t, n, r) {
    var o = ne, l = vn.transition;
    vn.transition = null;
    try {
      ne = 4, dl(e, t, n, r);
    } finally {
      ne = o, vn.transition = l;
    }
  }
  function dl(e, t, n, r) {
    if (Xr) {
      var o = fl(e, t, n, r);
      if (o === null) Jl(e, t, r, jr, n), RA(e, r);
      else if (Su(o, e, t, n, r)) r.stopPropagation();
      else if (RA(e, r), t & 4 && -1 < ku.indexOf(e)) {
        for (; o !== null; ) {
          var l = Cr(o);
          if (l !== null && vA(l), l = fl(e, t, n, r), l === null && Jl(e, t, r, jr, n), l === o) break;
          o = l;
        }
        o !== null && r.stopPropagation();
      } else Jl(e, t, r, null, n);
    }
  }
  var jr = null;
  function fl(e, t, n, r) {
    if (jr = null, e = nl(r), e = ln(e), e !== null) if (t = on(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = fA(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return jr = e, null;
  }
  function JA(e) {
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
        switch (pu()) {
          case Al:
            return 1;
          case QA:
            return 4;
          case qr:
          case Cu:
            return 16;
          case BA:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ot = null, El = null, Wr = null;
  function FA() {
    if (Wr) return Wr;
    var e, t = El, n = t.length, r, o = "value" in Ot ? Ot.value : Ot.textContent, l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
    return Wr = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Zr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function br() {
    return !0;
  }
  function UA() {
    return !1;
  }
  function et(e) {
    function t(n, r, o, l, i) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
      for (var A in e) e.hasOwnProperty(A) && (n = e[A], this[A] = n ? n(l) : l[A]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? br : UA, this.isPropagationStopped = UA, this;
    }
    return y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = br);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = br);
    }, persist: function() {
    }, isPersistent: br }), t;
  }
  var yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, hl = et(yn), Ar = y({}, yn, { view: 0, detail: 0 }), Ju = et(Ar), pl, Cl, ar, _r = y({}, Ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ql, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ar && (ar && e.type === "mousemove" ? (pl = e.screenX - ar.screenX, Cl = e.screenY - ar.screenY) : Cl = pl = 0, ar = e), pl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Cl;
  } }), TA = et(_r), Fu = y({}, _r, { dataTransfer: 0 }), Uu = et(Fu), Tu = y({}, Ar, { relatedTarget: 0 }), Il = et(Tu), Nu = y({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lu = et(Nu), Mu = y({}, yn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ku = et(Mu), Pu = y({}, yn, { data: 0 }), NA = et(Pu), qu = {
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
  }, Hu = {
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
  }, Ou = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Vu(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ou[e]) ? !!t[e] : !1;
  }
  function Ql() {
    return Vu;
  }
  var Gu = y({}, Ar, { key: function(e) {
    if (e.key) {
      var t = qu[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hu[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ql, charCode: function(e) {
    return e.type === "keypress" ? Zr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Yu = et(Gu), zu = y({}, _r, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), LA = et(zu), Xu = y({}, Ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ql }), ju = et(Xu), Wu = y({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zu = et(Wu), bu = y({}, _r, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _u = et(bu), $u = [9, 13, 27, 32], Bl = W && "CompositionEvent" in window, sr = null;
  W && "documentMode" in document && (sr = document.documentMode);
  var ec = W && "TextEvent" in window && !sr, MA = W && (!Bl || sr && 8 < sr && 11 >= sr), KA = " ", PA = !1;
  function qA(e, t) {
    switch (e) {
      case "keyup":
        return $u.indexOf(t.keyCode) !== -1;
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
  function HA(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var kn = !1;
  function tc(e, t) {
    switch (e) {
      case "compositionend":
        return HA(t);
      case "keypress":
        return t.which !== 32 ? null : (PA = !0, KA);
      case "textInput":
        return e = t.data, e === KA && PA ? null : e;
      default:
        return null;
    }
  }
  function nc(e, t) {
    if (kn) return e === "compositionend" || !Bl && qA(e, t) ? (e = FA(), Wr = El = Ot = null, kn = !1, e) : null;
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
        return MA && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var rc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function OA(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rc[e.type] : t === "textarea";
  }
  function VA(e, t, n, r) {
    sA(r), t = ro(t, "onChange"), 0 < t.length && (n = new hl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var ur = null, cr = null;
  function oc(e) {
    Aa(e, 0);
  }
  function $r(e) {
    var t = Jn(e);
    if (Bt(t)) return e;
  }
  function lc(e, t) {
    if (e === "change") return t;
  }
  var GA = !1;
  if (W) {
    var ml;
    if (W) {
      var wl = "oninput" in document;
      if (!wl) {
        var YA = document.createElement("div");
        YA.setAttribute("oninput", "return;"), wl = typeof YA.oninput == "function";
      }
      ml = wl;
    } else ml = !1;
    GA = ml && (!document.documentMode || 9 < document.documentMode);
  }
  function zA() {
    ur && (ur.detachEvent("onpropertychange", XA), cr = ur = null);
  }
  function XA(e) {
    if (e.propertyName === "value" && $r(cr)) {
      var t = [];
      VA(t, cr, e, nl(e)), dA(oc, t);
    }
  }
  function ic(e, t, n) {
    e === "focusin" ? (zA(), ur = t, cr = n, ur.attachEvent("onpropertychange", XA)) : e === "focusout" && zA();
  }
  function Ac(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return $r(cr);
  }
  function ac(e, t) {
    if (e === "click") return $r(t);
  }
  function sc(e, t) {
    if (e === "input" || e === "change") return $r(t);
  }
  function uc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ft = typeof Object.is == "function" ? Object.is : uc;
  function gr(e, t) {
    if (ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!L.call(t, o) || !ft(e[o], t[o])) return !1;
    }
    return !0;
  }
  function jA(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function WA(e, t) {
    var n = jA(e);
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
      n = jA(n);
    }
  }
  function ZA(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ZA(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function bA() {
    for (var e = window, t = ge(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ge(e.document);
    }
    return t;
  }
  function vl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function cc(e) {
    var t = bA(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ZA(n.ownerDocument.documentElement, n)) {
      if (r !== null && vl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, l = Math.min(r.start, o);
          r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = WA(n, l);
          var i = WA(
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
  var gc = W && "documentMode" in document && 11 >= document.documentMode, Sn = null, yl = null, dr = null, kl = !1;
  function _A(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    kl || Sn == null || Sn !== ge(r) || (r = Sn, "selectionStart" in r && vl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), dr && gr(dr, r) || (dr = r, r = ro(yl, "onSelect"), 0 < r.length && (t = new hl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sn)));
  }
  function eo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Rn = { animationend: eo("Animation", "AnimationEnd"), animationiteration: eo("Animation", "AnimationIteration"), animationstart: eo("Animation", "AnimationStart"), transitionend: eo("Transition", "TransitionEnd") }, Sl = {}, $A = {};
  W && ($A = document.createElement("div").style, "AnimationEvent" in window || (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation), "TransitionEvent" in window || delete Rn.transitionend.transition);
  function to(e) {
    if (Sl[e]) return Sl[e];
    if (!Rn[e]) return e;
    var t = Rn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in $A) return Sl[e] = t[n];
    return e;
  }
  var ea = to("animationend"), ta = to("animationiteration"), na = to("animationstart"), ra = to("transitionend"), oa = /* @__PURE__ */ new Map(), la = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Vt(e, t) {
    oa.set(e, t), N(t, [e]);
  }
  for (var Rl = 0; Rl < la.length; Rl++) {
    var xl = la[Rl], dc = xl.toLowerCase(), fc = xl[0].toUpperCase() + xl.slice(1);
    Vt(dc, "on" + fc);
  }
  Vt(ea, "onAnimationEnd"), Vt(ta, "onAnimationIteration"), Vt(na, "onAnimationStart"), Vt("dblclick", "onDoubleClick"), Vt("focusin", "onFocus"), Vt("focusout", "onBlur"), Vt(ra, "onTransitionEnd"), q("onMouseEnter", ["mouseout", "mouseover"]), q("onMouseLeave", ["mouseout", "mouseover"]), q("onPointerEnter", ["pointerout", "pointerover"]), q("onPointerLeave", ["pointerout", "pointerover"]), N("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), N("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), N("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), N("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), N("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), N("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ec = new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));
  function ia(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, du(r, t, void 0, e), e.currentTarget = null;
  }
  function Aa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var A = r[i], a = A.instance, d = A.currentTarget;
          if (A = A.listener, a !== l && o.isPropagationStopped()) break e;
          ia(o, A, d), l = a;
        }
        else for (i = 0; i < r.length; i++) {
          if (A = r[i], a = A.instance, d = A.currentTarget, A = A.listener, a !== l && o.isPropagationStopped()) break e;
          ia(o, A, d), l = a;
        }
      }
    }
    if (Pr) throw e = il, Pr = !1, il = null, e;
  }
  function se(e, t) {
    var n = t[Ml];
    n === void 0 && (n = t[Ml] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (aa(t, e, 2, !1), n.add(r));
  }
  function Dl(e, t, n) {
    var r = 0;
    t && (r |= 4), aa(n, e, r, t);
  }
  var no = "_reactListening" + Math.random().toString(36).slice(2);
  function Er(e) {
    if (!e[no]) {
      e[no] = !0, P.forEach(function(n) {
        n !== "selectionchange" && (Ec.has(n) || Dl(n, !1, e), Dl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[no] || (t[no] = !0, Dl("selectionchange", !1, t));
    }
  }
  function aa(e, t, n, r) {
    switch (JA(t)) {
      case 1:
        var o = xu;
        break;
      case 4:
        o = Du;
        break;
      default:
        o = dl;
    }
    n = o.bind(null, t, n, e), o = void 0, !ll || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function Jl(e, t, n, r, o) {
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
          if (i = ln(A), i === null) return;
          if (a = i.tag, a === 5 || a === 6) {
            r = l = i;
            continue e;
          }
          A = A.parentNode;
        }
      }
      r = r.return;
    }
    dA(function() {
      var d = l, I = nl(n), B = [];
      e: {
        var C = oa.get(e);
        if (C !== void 0) {
          var v = hl, S = e;
          switch (e) {
            case "keypress":
              if (Zr(n) === 0) break e;
            case "keydown":
            case "keyup":
              v = Yu;
              break;
            case "focusin":
              S = "focus", v = Il;
              break;
            case "focusout":
              S = "blur", v = Il;
              break;
            case "beforeblur":
            case "afterblur":
              v = Il;
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
              v = TA;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = Uu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = ju;
              break;
            case ea:
            case ta:
            case na:
              v = Lu;
              break;
            case ra:
              v = Zu;
              break;
            case "scroll":
              v = Ju;
              break;
            case "wheel":
              v = _u;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = Ku;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = LA;
          }
          var x = (t & 4) !== 0, Be = !x && e === "scroll", c = x ? C !== null ? C + "Capture" : null : C;
          x = [];
          for (var s = d, g; s !== null; ) {
            g = s;
            var m = g.stateNode;
            if (g.tag === 5 && m !== null && (g = m, c !== null && (m = bn(s, c), m != null && x.push(hr(s, m, g)))), Be) break;
            s = s.return;
          }
          0 < x.length && (C = new v(C, S, null, n, I), B.push({ event: C, listeners: x }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", C && n !== tl && (S = n.relatedTarget || n.fromElement) && (ln(S) || S[Rt])) break e;
          if ((v || C) && (C = I.window === I ? I : (C = I.ownerDocument) ? C.defaultView || C.parentWindow : window, v ? (S = n.relatedTarget || n.toElement, v = d, S = S ? ln(S) : null, S !== null && (Be = on(S), S !== Be || S.tag !== 5 && S.tag !== 6) && (S = null)) : (v = null, S = d), v !== S)) {
            if (x = TA, m = "onMouseLeave", c = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (x = LA, m = "onPointerLeave", c = "onPointerEnter", s = "pointer"), Be = v == null ? C : Jn(v), g = S == null ? C : Jn(S), C = new x(m, s + "leave", v, n, I), C.target = Be, C.relatedTarget = g, m = null, ln(I) === d && (x = new x(c, s + "enter", S, n, I), x.target = g, x.relatedTarget = Be, m = x), Be = m, v && S) t: {
              for (x = v, c = S, s = 0, g = x; g; g = xn(g)) s++;
              for (g = 0, m = c; m; m = xn(m)) g++;
              for (; 0 < s - g; ) x = xn(x), s--;
              for (; 0 < g - s; ) c = xn(c), g--;
              for (; s--; ) {
                if (x === c || c !== null && x === c.alternate) break t;
                x = xn(x), c = xn(c);
              }
              x = null;
            }
            else x = null;
            v !== null && sa(B, C, v, x, !1), S !== null && Be !== null && sa(B, Be, S, x, !0);
          }
        }
        e: {
          if (C = d ? Jn(d) : window, v = C.nodeName && C.nodeName.toLowerCase(), v === "select" || v === "input" && C.type === "file") var D = lc;
          else if (OA(C)) if (GA) D = sc;
          else {
            D = Ac;
            var U = ic;
          }
          else (v = C.nodeName) && v.toLowerCase() === "input" && (C.type === "checkbox" || C.type === "radio") && (D = ac);
          if (D && (D = D(e, d))) {
            VA(B, D, n, I);
            break e;
          }
          U && U(e, C, d), e === "focusout" && (U = C._wrapperState) && U.controlled && C.type === "number" && Zo(C, "number", C.value);
        }
        switch (U = d ? Jn(d) : window, e) {
          case "focusin":
            (OA(U) || U.contentEditable === "true") && (Sn = U, yl = d, dr = null);
            break;
          case "focusout":
            dr = yl = Sn = null;
            break;
          case "mousedown":
            kl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            kl = !1, _A(B, n, I);
            break;
          case "selectionchange":
            if (gc) break;
          case "keydown":
          case "keyup":
            _A(B, n, I);
        }
        var T;
        if (Bl) e: {
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
        else kn ? qA(e, n) && (K = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (K = "onCompositionStart");
        K && (MA && n.locale !== "ko" && (kn || K !== "onCompositionStart" ? K === "onCompositionEnd" && kn && (T = FA()) : (Ot = I, El = "value" in Ot ? Ot.value : Ot.textContent, kn = !0)), U = ro(d, K), 0 < U.length && (K = new NA(K, e, null, n, I), B.push({ event: K, listeners: U }), T ? K.data = T : (T = HA(n), T !== null && (K.data = T)))), (T = ec ? tc(e, n) : nc(e, n)) && (d = ro(d, "onBeforeInput"), 0 < d.length && (I = new NA("onBeforeInput", "beforeinput", null, n, I), B.push({ event: I, listeners: d }), I.data = T));
      }
      Aa(B, t);
    });
  }
  function hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ro(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, l = o.stateNode;
      o.tag === 5 && l !== null && (o = l, l = bn(e, n), l != null && r.unshift(hr(e, l, o)), l = bn(e, t), l != null && r.push(hr(e, l, o))), e = e.return;
    }
    return r;
  }
  function xn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function sa(e, t, n, r, o) {
    for (var l = t._reactName, i = []; n !== null && n !== r; ) {
      var A = n, a = A.alternate, d = A.stateNode;
      if (a !== null && a === r) break;
      A.tag === 5 && d !== null && (A = d, o ? (a = bn(n, l), a != null && i.unshift(hr(n, a, A))) : o || (a = bn(n, l), a != null && i.push(hr(n, a, A)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var hc = /\r\n?/g, pc = /\u0000|\uFFFD/g;
  function ua(e) {
    return (typeof e == "string" ? e : "" + e).replace(hc, `
`).replace(pc, "");
  }
  function oo(e, t, n) {
    if (t = ua(t), ua(e) !== t && n) throw Error(f(425));
  }
  function lo() {
  }
  var Fl = null, Ul = null;
  function Tl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Nl = typeof setTimeout == "function" ? setTimeout : void 0, Cc = typeof clearTimeout == "function" ? clearTimeout : void 0, ca = typeof Promise == "function" ? Promise : void 0, Ic = typeof queueMicrotask == "function" ? queueMicrotask : typeof ca < "u" ? function(e) {
    return ca.resolve(null).then(e).catch(Qc);
  } : Nl;
  function Qc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ll(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), ir(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    ir(t);
  }
  function Gt(e) {
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
  function ga(e) {
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
  var Dn = Math.random().toString(36).slice(2), wt = "__reactFiber$" + Dn, pr = "__reactProps$" + Dn, Rt = "__reactContainer$" + Dn, Ml = "__reactEvents$" + Dn, Bc = "__reactListeners$" + Dn, mc = "__reactHandles$" + Dn;
  function ln(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Rt] || n[wt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ga(e); e !== null; ) {
          if (n = e[wt]) return n;
          e = ga(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Cr(e) {
    return e = e[wt] || e[Rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(f(33));
  }
  function io(e) {
    return e[pr] || null;
  }
  var Kl = [], Fn = -1;
  function Yt(e) {
    return { current: e };
  }
  function ue(e) {
    0 > Fn || (e.current = Kl[Fn], Kl[Fn] = null, Fn--);
  }
  function ae(e, t) {
    Fn++, Kl[Fn] = e.current, e.current = t;
  }
  var zt = {}, Le = Yt(zt), Xe = Yt(!1), An = zt;
  function Un(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, l;
    for (l in n) o[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function je(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ao() {
    ue(Xe), ue(Le);
  }
  function da(e, t, n) {
    if (Le.current !== zt) throw Error(f(168));
    ae(Le, t), ae(Xe, n);
  }
  function fa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(f(108, le(e) || "Unknown", o));
    return y({}, n, r);
  }
  function ao(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zt, An = Le.current, ae(Le, e), ae(Xe, Xe.current), !0;
  }
  function Ea(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(f(169));
    n ? (e = fa(e, t, An), r.__reactInternalMemoizedMergedChildContext = e, ue(Xe), ue(Le), ae(Le, e)) : ue(Xe), ae(Xe, n);
  }
  var xt = null, so = !1, Pl = !1;
  function ha(e) {
    xt === null ? xt = [e] : xt.push(e);
  }
  function wc(e) {
    so = !0, ha(e);
  }
  function Xt() {
    if (!Pl && xt !== null) {
      Pl = !0;
      var e = 0, t = ne;
      try {
        var n = xt;
        for (ne = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        xt = null, so = !1;
      } catch (o) {
        throw xt !== null && (xt = xt.slice(e + 1)), CA(Al, Xt), o;
      } finally {
        ne = t, Pl = !1;
      }
    }
    return null;
  }
  var Tn = [], Nn = 0, uo = null, co = 0, lt = [], it = 0, an = null, Dt = 1, Jt = "";
  function sn(e, t) {
    Tn[Nn++] = co, Tn[Nn++] = uo, uo = e, co = t;
  }
  function pa(e, t, n) {
    lt[it++] = Dt, lt[it++] = Jt, lt[it++] = an, an = e;
    var r = Dt;
    e = Jt;
    var o = 32 - dt(r) - 1;
    r &= ~(1 << o), n += 1;
    var l = 32 - dt(t) + o;
    if (30 < l) {
      var i = o - o % 5;
      l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Dt = 1 << 32 - dt(t) + o | n << o | r, Jt = l + e;
    } else Dt = 1 << l | n << o | r, Jt = e;
  }
  function ql(e) {
    e.return !== null && (sn(e, 1), pa(e, 1, 0));
  }
  function Hl(e) {
    for (; e === uo; ) uo = Tn[--Nn], Tn[Nn] = null, co = Tn[--Nn], Tn[Nn] = null;
    for (; e === an; ) an = lt[--it], lt[it] = null, Jt = lt[--it], lt[it] = null, Dt = lt[--it], lt[it] = null;
  }
  var tt = null, nt = null, de = !1, Et = null;
  function Ca(e, t) {
    var n = ut(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Ia(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, tt = e, nt = Gt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, tt = e, nt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = an !== null ? { id: Dt, overflow: Jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, tt = e, nt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ol(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Vl(e) {
    if (de) {
      var t = nt;
      if (t) {
        var n = t;
        if (!Ia(e, t)) {
          if (Ol(e)) throw Error(f(418));
          t = Gt(n.nextSibling);
          var r = tt;
          t && Ia(e, t) ? Ca(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, tt = e);
        }
      } else {
        if (Ol(e)) throw Error(f(418));
        e.flags = e.flags & -4097 | 2, de = !1, tt = e;
      }
    }
  }
  function Qa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    tt = e;
  }
  function go(e) {
    if (e !== tt) return !1;
    if (!de) return Qa(e), de = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps)), t && (t = nt)) {
      if (Ol(e)) throw Ba(), Error(f(418));
      for (; t; ) Ca(e, t), t = Gt(t.nextSibling);
    }
    if (Qa(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                nt = Gt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        nt = null;
      }
    } else nt = tt ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ba() {
    for (var e = nt; e; ) e = Gt(e.nextSibling);
  }
  function Ln() {
    nt = tt = null, de = !1;
  }
  function Gl(e) {
    Et === null ? Et = [e] : Et.push(e);
  }
  var vc = Ie.ReactCurrentBatchConfig;
  function Ir(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(f(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(f(147, e));
        var o = r, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
          var A = o.refs;
          i === null ? delete A[l] : A[l] = i;
        }, t._stringRef = l, t);
      }
      if (typeof e != "string") throw Error(f(284));
      if (!n._owner) throw Error(f(290, e));
    }
    return e;
  }
  function fo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ma(e) {
    var t = e._init;
    return t(e._payload);
  }
  function wa(e) {
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
      return c = tn(c, s), c.index = 0, c.sibling = null, c;
    }
    function l(c, s, g) {
      return c.index = g, e ? (g = c.alternate, g !== null ? (g = g.index, g < s ? (c.flags |= 2, s) : g) : (c.flags |= 2, s)) : (c.flags |= 1048576, s);
    }
    function i(c) {
      return e && c.alternate === null && (c.flags |= 2), c;
    }
    function A(c, s, g, m) {
      return s === null || s.tag !== 6 ? (s = Ni(g, c.mode, m), s.return = c, s) : (s = o(s, g), s.return = c, s);
    }
    function a(c, s, g, m) {
      var D = g.type;
      return D === oe ? I(c, s, g.props.children, m, g.key) : s !== null && (s.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ve && ma(D) === s.type) ? (m = o(s, g.props), m.ref = Ir(c, s, g), m.return = c, m) : (m = Ko(g.type, g.key, g.props, null, c.mode, m), m.ref = Ir(c, s, g), m.return = c, m);
    }
    function d(c, s, g, m) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== g.containerInfo || s.stateNode.implementation !== g.implementation ? (s = Li(g, c.mode, m), s.return = c, s) : (s = o(s, g.children || []), s.return = c, s);
    }
    function I(c, s, g, m, D) {
      return s === null || s.tag !== 7 ? (s = pn(g, c.mode, m, D), s.return = c, s) : (s = o(s, g), s.return = c, s);
    }
    function B(c, s, g) {
      if (typeof s == "string" && s !== "" || typeof s == "number") return s = Ni("" + s, c.mode, g), s.return = c, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Fe:
            return g = Ko(s.type, s.key, s.props, null, c.mode, g), g.ref = Ir(c, null, s), g.return = c, g;
          case he:
            return s = Li(s, c.mode, g), s.return = c, s;
          case ve:
            var m = s._init;
            return B(c, m(s._payload), g);
        }
        if (jn(s) || F(s)) return s = pn(s, c.mode, g, null), s.return = c, s;
        fo(c, s);
      }
      return null;
    }
    function C(c, s, g, m) {
      var D = s !== null ? s.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number") return D !== null ? null : A(c, s, "" + g, m);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Fe:
            return g.key === D ? a(c, s, g, m) : null;
          case he:
            return g.key === D ? d(c, s, g, m) : null;
          case ve:
            return D = g._init, C(
              c,
              s,
              D(g._payload),
              m
            );
        }
        if (jn(g) || F(g)) return D !== null ? null : I(c, s, g, m, null);
        fo(c, g);
      }
      return null;
    }
    function v(c, s, g, m, D) {
      if (typeof m == "string" && m !== "" || typeof m == "number") return c = c.get(g) || null, A(s, c, "" + m, D);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Fe:
            return c = c.get(m.key === null ? g : m.key) || null, a(s, c, m, D);
          case he:
            return c = c.get(m.key === null ? g : m.key) || null, d(s, c, m, D);
          case ve:
            var U = m._init;
            return v(c, s, g, U(m._payload), D);
        }
        if (jn(m) || F(m)) return c = c.get(g) || null, I(s, c, m, D, null);
        fo(s, m);
      }
      return null;
    }
    function S(c, s, g, m) {
      for (var D = null, U = null, T = s, K = s = 0, Je = null; T !== null && K < g.length; K++) {
        T.index > K ? (Je = T, T = null) : Je = T.sibling;
        var ee = C(c, T, g[K], m);
        if (ee === null) {
          T === null && (T = Je);
          break;
        }
        e && T && ee.alternate === null && t(c, T), s = l(ee, s, K), U === null ? D = ee : U.sibling = ee, U = ee, T = Je;
      }
      if (K === g.length) return n(c, T), de && sn(c, K), D;
      if (T === null) {
        for (; K < g.length; K++) T = B(c, g[K], m), T !== null && (s = l(T, s, K), U === null ? D = T : U.sibling = T, U = T);
        return de && sn(c, K), D;
      }
      for (T = r(c, T); K < g.length; K++) Je = v(T, c, K, g[K], m), Je !== null && (e && Je.alternate !== null && T.delete(Je.key === null ? K : Je.key), s = l(Je, s, K), U === null ? D = Je : U.sibling = Je, U = Je);
      return e && T.forEach(function(nn) {
        return t(c, nn);
      }), de && sn(c, K), D;
    }
    function x(c, s, g, m) {
      var D = F(g);
      if (typeof D != "function") throw Error(f(150));
      if (g = D.call(g), g == null) throw Error(f(151));
      for (var U = D = null, T = s, K = s = 0, Je = null, ee = g.next(); T !== null && !ee.done; K++, ee = g.next()) {
        T.index > K ? (Je = T, T = null) : Je = T.sibling;
        var nn = C(c, T, ee.value, m);
        if (nn === null) {
          T === null && (T = Je);
          break;
        }
        e && T && nn.alternate === null && t(c, T), s = l(nn, s, K), U === null ? D = nn : U.sibling = nn, U = nn, T = Je;
      }
      if (ee.done) return n(
        c,
        T
      ), de && sn(c, K), D;
      if (T === null) {
        for (; !ee.done; K++, ee = g.next()) ee = B(c, ee.value, m), ee !== null && (s = l(ee, s, K), U === null ? D = ee : U.sibling = ee, U = ee);
        return de && sn(c, K), D;
      }
      for (T = r(c, T); !ee.done; K++, ee = g.next()) ee = v(T, c, K, ee.value, m), ee !== null && (e && ee.alternate !== null && T.delete(ee.key === null ? K : ee.key), s = l(ee, s, K), U === null ? D = ee : U.sibling = ee, U = ee);
      return e && T.forEach(function(rg) {
        return t(c, rg);
      }), de && sn(c, K), D;
    }
    function Be(c, s, g, m) {
      if (typeof g == "object" && g !== null && g.type === oe && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Fe:
            e: {
              for (var D = g.key, U = s; U !== null; ) {
                if (U.key === D) {
                  if (D = g.type, D === oe) {
                    if (U.tag === 7) {
                      n(c, U.sibling), s = o(U, g.props.children), s.return = c, c = s;
                      break e;
                    }
                  } else if (U.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ve && ma(D) === U.type) {
                    n(c, U.sibling), s = o(U, g.props), s.ref = Ir(c, U, g), s.return = c, c = s;
                    break e;
                  }
                  n(c, U);
                  break;
                } else t(c, U);
                U = U.sibling;
              }
              g.type === oe ? (s = pn(g.props.children, c.mode, m, g.key), s.return = c, c = s) : (m = Ko(g.type, g.key, g.props, null, c.mode, m), m.ref = Ir(c, s, g), m.return = c, c = m);
            }
            return i(c);
          case he:
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
              s = Li(g, c.mode, m), s.return = c, c = s;
            }
            return i(c);
          case ve:
            return U = g._init, Be(c, s, U(g._payload), m);
        }
        if (jn(g)) return S(c, s, g, m);
        if (F(g)) return x(c, s, g, m);
        fo(c, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, s !== null && s.tag === 6 ? (n(c, s.sibling), s = o(s, g), s.return = c, c = s) : (n(c, s), s = Ni(g, c.mode, m), s.return = c, c = s), i(c)) : n(c, s);
    }
    return Be;
  }
  var Mn = wa(!0), va = wa(!1), Eo = Yt(null), ho = null, Kn = null, Yl = null;
  function zl() {
    Yl = Kn = ho = null;
  }
  function Xl(e) {
    var t = Eo.current;
    ue(Eo), e._currentValue = t;
  }
  function jl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Pn(e, t) {
    ho = e, Yl = Kn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (We = !0), e.firstContext = null);
  }
  function At(e) {
    var t = e._currentValue;
    if (Yl !== e) if (e = { context: e, memoizedValue: t, next: null }, Kn === null) {
      if (ho === null) throw Error(f(308));
      Kn = e, ho.dependencies = { lanes: 0, firstContext: e };
    } else Kn = Kn.next = e;
    return t;
  }
  var un = null;
  function Wl(e) {
    un === null ? un = [e] : un.push(e);
  }
  function ya(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Wl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ft(e, r);
  }
  function Ft(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var jt = !1;
  function Zl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ka(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ut(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, ($ & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ft(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, Wl(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ft(e, n);
  }
  function po(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ul(e, n);
    }
  }
  function Sa(e, t) {
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
  function Co(e, t, n, r) {
    var o = e.updateQueue;
    jt = !1;
    var l = o.firstBaseUpdate, i = o.lastBaseUpdate, A = o.shared.pending;
    if (A !== null) {
      o.shared.pending = null;
      var a = A, d = a.next;
      a.next = null, i === null ? l = d : i.next = d, i = a;
      var I = e.alternate;
      I !== null && (I = I.updateQueue, A = I.lastBaseUpdate, A !== i && (A === null ? I.firstBaseUpdate = d : A.next = d, I.lastBaseUpdate = a));
    }
    if (l !== null) {
      var B = o.baseState;
      i = 0, I = d = a = null, A = l;
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
                  B = S.call(v, B, C);
                  break e;
                }
                B = S;
                break e;
              case 3:
                S.flags = S.flags & -65537 | 128;
              case 0:
                if (S = x.payload, C = typeof S == "function" ? S.call(v, B, C) : S, C == null) break e;
                B = y({}, B, C);
                break e;
              case 2:
                jt = !0;
            }
          }
          A.callback !== null && A.lane !== 0 && (e.flags |= 64, C = o.effects, C === null ? o.effects = [A] : C.push(A));
        } else v = { eventTime: v, lane: C, tag: A.tag, payload: A.payload, callback: A.callback, next: null }, I === null ? (d = I = v, a = B) : I = I.next = v, i |= C;
        if (A = A.next, A === null) {
          if (A = o.shared.pending, A === null) break;
          C = A, A = C.next, C.next = null, o.lastBaseUpdate = C, o.shared.pending = null;
        }
      } while (!0);
      if (I === null && (a = B), o.baseState = a, o.firstBaseUpdate = d, o.lastBaseUpdate = I, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          i |= o.lane, o = o.next;
        while (o !== t);
      } else l === null && (o.shared.lanes = 0);
      dn |= i, e.lanes = i, e.memoizedState = B;
    }
  }
  function Ra(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(f(191, o));
        o.call(r);
      }
    }
  }
  var Qr = {}, vt = Yt(Qr), Br = Yt(Qr), mr = Yt(Qr);
  function cn(e) {
    if (e === Qr) throw Error(f(174));
    return e;
  }
  function bl(e, t) {
    switch (ae(mr, t), ae(Br, e), ae(vt, Qr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : _o(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _o(t, e);
    }
    ue(vt), ae(vt, t);
  }
  function qn() {
    ue(vt), ue(Br), ue(mr);
  }
  function xa(e) {
    cn(mr.current);
    var t = cn(vt.current), n = _o(t, e.type);
    t !== n && (ae(Br, e), ae(vt, n));
  }
  function _l(e) {
    Br.current === e && (ue(vt), ue(Br));
  }
  var fe = Yt(0);
  function Io(e) {
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
  var $l = [];
  function ei() {
    for (var e = 0; e < $l.length; e++) $l[e]._workInProgressVersionPrimary = null;
    $l.length = 0;
  }
  var Qo = Ie.ReactCurrentDispatcher, ti = Ie.ReactCurrentBatchConfig, gn = 0, Ee = null, ke = null, xe = null, Bo = !1, wr = !1, vr = 0, yc = 0;
  function Me() {
    throw Error(f(321));
  }
  function ni(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
    return !0;
  }
  function ri(e, t, n, r, o, l) {
    if (gn = l, Ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qo.current = e === null || e.memoizedState === null ? xc : Dc, e = n(r, o), wr) {
      l = 0;
      do {
        if (wr = !1, vr = 0, 25 <= l) throw Error(f(301));
        l += 1, xe = ke = null, t.updateQueue = null, Qo.current = Jc, e = n(r, o);
      } while (wr);
    }
    if (Qo.current = vo, t = ke !== null && ke.next !== null, gn = 0, xe = ke = Ee = null, Bo = !1, t) throw Error(f(300));
    return e;
  }
  function oi() {
    var e = vr !== 0;
    return vr = 0, e;
  }
  function yt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xe === null ? Ee.memoizedState = xe = e : xe = xe.next = e, xe;
  }
  function at() {
    if (ke === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ke.next;
    var t = xe === null ? Ee.memoizedState : xe.next;
    if (t !== null) xe = t, ke = e;
    else {
      if (e === null) throw Error(f(310));
      ke = e, e = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, xe === null ? Ee.memoizedState = xe = e : xe = xe.next = e;
    }
    return xe;
  }
  function yr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function li(e) {
    var t = at(), n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = ke, o = r.baseQueue, l = n.pending;
    if (l !== null) {
      if (o !== null) {
        var i = o.next;
        o.next = l.next, l.next = i;
      }
      r.baseQueue = o = l, n.pending = null;
    }
    if (o !== null) {
      l = o.next, r = r.baseState;
      var A = i = null, a = null, d = l;
      do {
        var I = d.lane;
        if ((gn & I) === I) a !== null && (a = a.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
        else {
          var B = {
            lane: I,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          };
          a === null ? (A = a = B, i = r) : a = a.next = B, Ee.lanes |= I, dn |= I;
        }
        d = d.next;
      } while (d !== null && d !== l);
      a === null ? i = r : a.next = A, ft(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        l = o.lane, Ee.lanes |= l, dn |= l, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ii(e) {
    var t = at(), n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, l = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var i = o = o.next;
      do
        l = e(l, i.action), i = i.next;
      while (i !== o);
      ft(l, t.memoizedState) || (We = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function Da() {
  }
  function Ja(e, t) {
    var n = Ee, r = at(), o = t(), l = !ft(r.memoizedState, o);
    if (l && (r.memoizedState = o, We = !0), r = r.queue, Ai(Ta.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || xe !== null && xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, kr(9, Ua.bind(null, n, r, o, t), void 0, null), De === null) throw Error(f(349));
      (gn & 30) !== 0 || Fa(n, t, o);
    }
    return o;
  }
  function Fa(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ua(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Na(t) && La(e);
  }
  function Ta(e, t, n) {
    return n(function() {
      Na(t) && La(e);
    });
  }
  function Na(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ft(e, n);
    } catch {
      return !0;
    }
  }
  function La(e) {
    var t = Ft(e, 1);
    t !== null && It(t, e, 1, -1);
  }
  function Ma(e) {
    var t = yt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: yr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Rc.bind(null, Ee, e), [t.memoizedState, e];
  }
  function kr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ee.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ka() {
    return at().memoizedState;
  }
  function mo(e, t, n, r) {
    var o = yt();
    Ee.flags |= e, o.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function wo(e, t, n, r) {
    var o = at();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (ke !== null) {
      var i = ke.memoizedState;
      if (l = i.destroy, r !== null && ni(r, i.deps)) {
        o.memoizedState = kr(t, n, l, r);
        return;
      }
    }
    Ee.flags |= e, o.memoizedState = kr(1 | t, n, l, r);
  }
  function Pa(e, t) {
    return mo(8390656, 8, e, t);
  }
  function Ai(e, t) {
    return wo(2048, 8, e, t);
  }
  function qa(e, t) {
    return wo(4, 2, e, t);
  }
  function Ha(e, t) {
    return wo(4, 4, e, t);
  }
  function Oa(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Va(e, t, n) {
    return n = n != null ? n.concat([e]) : null, wo(4, 4, Oa.bind(null, t, e), n);
  }
  function ai() {
  }
  function Ga(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ni(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ya(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ni(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function za(e, t, n) {
    return (gn & 21) === 0 ? (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n) : (ft(n, t) || (n = mA(), Ee.lanes |= n, dn |= n, e.baseState = !0), t);
  }
  function kc(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ti.transition;
    ti.transition = {};
    try {
      e(!1), t();
    } finally {
      ne = n, ti.transition = r;
    }
  }
  function Xa() {
    return at().memoizedState;
  }
  function Sc(e, t, n) {
    var r = $t(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ja(e)) Wa(t, n);
    else if (n = ya(e, t, n, r), n !== null) {
      var o = Ge();
      It(n, e, r, o), Za(n, t, r);
    }
  }
  function Rc(e, t, n) {
    var r = $t(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ja(e)) Wa(t, o);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
        var i = t.lastRenderedState, A = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = A, ft(A, i)) {
          var a = t.interleaved;
          a === null ? (o.next = o, Wl(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      n = ya(e, t, o, r), n !== null && (o = Ge(), It(n, e, r, o), Za(n, t, r));
    }
  }
  function ja(e) {
    var t = e.alternate;
    return e === Ee || t !== null && t === Ee;
  }
  function Wa(e, t) {
    wr = Bo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Za(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ul(e, n);
    }
  }
  var vo = { readContext: At, useCallback: Me, useContext: Me, useEffect: Me, useImperativeHandle: Me, useInsertionEffect: Me, useLayoutEffect: Me, useMemo: Me, useReducer: Me, useRef: Me, useState: Me, useDebugValue: Me, useDeferredValue: Me, useTransition: Me, useMutableSource: Me, useSyncExternalStore: Me, useId: Me, unstable_isNewReconciler: !1 }, xc = { readContext: At, useCallback: function(e, t) {
    return yt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: At, useEffect: Pa, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, mo(
      4194308,
      4,
      Oa.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return mo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return mo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = yt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = yt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Sc.bind(null, Ee, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = yt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ma, useDebugValue: ai, useDeferredValue: function(e) {
    return yt().memoizedState = e;
  }, useTransition: function() {
    var e = Ma(!1), t = e[0];
    return e = kc.bind(null, e[1]), yt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ee, o = yt();
    if (de) {
      if (n === void 0) throw Error(f(407));
      n = n();
    } else {
      if (n = t(), De === null) throw Error(f(349));
      (gn & 30) !== 0 || Fa(r, t, n);
    }
    o.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return o.queue = l, Pa(Ta.bind(
      null,
      r,
      l,
      e
    ), [e]), r.flags |= 2048, kr(9, Ua.bind(null, r, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = yt(), t = De.identifierPrefix;
    if (de) {
      var n = Jt, r = Dt;
      n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = vr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = yc++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Dc = {
    readContext: At,
    useCallback: Ga,
    useContext: At,
    useEffect: Ai,
    useImperativeHandle: Va,
    useInsertionEffect: qa,
    useLayoutEffect: Ha,
    useMemo: Ya,
    useReducer: li,
    useRef: Ka,
    useState: function() {
      return li(yr);
    },
    useDebugValue: ai,
    useDeferredValue: function(e) {
      var t = at();
      return za(t, ke.memoizedState, e);
    },
    useTransition: function() {
      var e = li(yr)[0], t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Da,
    useSyncExternalStore: Ja,
    useId: Xa,
    unstable_isNewReconciler: !1
  }, Jc = { readContext: At, useCallback: Ga, useContext: At, useEffect: Ai, useImperativeHandle: Va, useInsertionEffect: qa, useLayoutEffect: Ha, useMemo: Ya, useReducer: ii, useRef: Ka, useState: function() {
    return ii(yr);
  }, useDebugValue: ai, useDeferredValue: function(e) {
    var t = at();
    return ke === null ? t.memoizedState = e : za(t, ke.memoizedState, e);
  }, useTransition: function() {
    var e = ii(yr)[0], t = at().memoizedState;
    return [e, t];
  }, useMutableSource: Da, useSyncExternalStore: Ja, useId: Xa, unstable_isNewReconciler: !1 };
  function ht(e, t) {
    if (e && e.defaultProps) {
      t = y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function si(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var yo = { isMounted: function(e) {
    return (e = e._reactInternals) ? on(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ge(), o = $t(e), l = Ut(r, o);
    l.payload = t, n != null && (l.callback = n), t = Wt(e, l, o), t !== null && (It(t, e, o, r), po(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ge(), o = $t(e), l = Ut(r, o);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Wt(e, l, o), t !== null && (It(t, e, o, r), po(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ge(), r = $t(e), o = Ut(n, r);
    o.tag = 2, t != null && (o.callback = t), t = Wt(e, o, r), t !== null && (It(t, e, r, n), po(t, e, r));
  } };
  function ba(e, t, n, r, o, l, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(o, l) : !0;
  }
  function _a(e, t, n) {
    var r = !1, o = zt, l = t.contextType;
    return typeof l == "object" && l !== null ? l = At(l) : (o = je(t) ? An : Le.current, r = t.contextTypes, l = (r = r != null) ? Un(e, o) : zt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = yo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function $a(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yo.enqueueReplaceState(t, t.state, null);
  }
  function ui(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Zl(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? o.context = At(l) : (l = je(t) ? An : Le.current, o.context = Un(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (si(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && yo.enqueueReplaceState(o, o.state, null), Co(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Hn(e, t) {
    try {
      var n = "", r = t;
      do
        n += b(r), r = r.return;
      while (r);
      var o = n;
    } catch (l) {
      o = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function ci(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function gi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Fc = typeof WeakMap == "function" ? WeakMap : Map;
  function es(e, t, n) {
    n = Ut(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Fo || (Fo = !0, Si = r), gi(e, t);
    }, n;
  }
  function ts(e, t, n) {
    n = Ut(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        gi(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      gi(e, t), typeof r != "function" && (bt === null ? bt = /* @__PURE__ */ new Set([this]) : bt.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function ns(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Fc();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = zc.bind(null, e, t, n), t.then(e, e));
  }
  function rs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function os(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ut(-1, 1), t.tag = 2, Wt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Uc = Ie.ReactCurrentOwner, We = !1;
  function Ve(e, t, n, r) {
    t.child = e === null ? va(t, null, n, r) : Mn(t, e.child, n, r);
  }
  function ls(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return Pn(t, o), r = ri(e, t, n, r, l, o), n = oi(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tt(e, t, o)) : (de && n && ql(t), t.flags |= 1, Ve(e, t, r, o), t.child);
  }
  function is(e, t, n, r, o) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !Ti(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, As(e, t, l, r, o)) : (e = Ko(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, (e.lanes & o) === 0) {
      var i = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : gr, n(i, r) && e.ref === t.ref) return Tt(e, t, o);
    }
    return t.flags |= 1, e = tn(l, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function As(e, t, n, r, o) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (gr(l, r) && e.ref === t.ref) if (We = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (We = !0);
      else return t.lanes = e.lanes, Tt(e, t, o);
    }
    return di(e, t, n, r, o);
  }
  function as(e, t, n) {
    var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ae(Vn, rt), rt |= n;
    else {
      if ((n & 1073741824) === 0) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ae(Vn, rt), rt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, ae(Vn, rt), rt |= r;
    }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ae(Vn, rt), rt |= r;
    return Ve(e, t, o, n), t.child;
  }
  function ss(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function di(e, t, n, r, o) {
    var l = je(n) ? An : Le.current;
    return l = Un(t, l), Pn(t, o), n = ri(e, t, n, r, l, o), r = oi(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tt(e, t, o)) : (de && r && ql(t), t.flags |= 1, Ve(e, t, n, o), t.child);
  }
  function us(e, t, n, r, o) {
    if (je(n)) {
      var l = !0;
      ao(t);
    } else l = !1;
    if (Pn(t, o), t.stateNode === null) So(e, t), _a(t, n, r), ui(t, n, r, o), r = !0;
    else if (e === null) {
      var i = t.stateNode, A = t.memoizedProps;
      i.props = A;
      var a = i.context, d = n.contextType;
      typeof d == "object" && d !== null ? d = At(d) : (d = je(n) ? An : Le.current, d = Un(t, d));
      var I = n.getDerivedStateFromProps, B = typeof I == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      B || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (A !== r || a !== d) && $a(t, i, r, d), jt = !1;
      var C = t.memoizedState;
      i.state = C, Co(t, r, i, o), a = t.memoizedState, A !== r || C !== a || Xe.current || jt ? (typeof I == "function" && (si(t, n, I, r), a = t.memoizedState), (A = jt || ba(t, n, A, r, C, a, d)) ? (B || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = d, r = A) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, ka(e, t), A = t.memoizedProps, d = t.type === t.elementType ? A : ht(t.type, A), i.props = d, B = t.pendingProps, C = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = At(a) : (a = je(n) ? An : Le.current, a = Un(t, a));
      var v = n.getDerivedStateFromProps;
      (I = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (A !== B || C !== a) && $a(t, i, r, a), jt = !1, C = t.memoizedState, i.state = C, Co(t, r, i, o);
      var S = t.memoizedState;
      A !== B || C !== S || Xe.current || jt ? (typeof v == "function" && (si(t, n, v, r), S = t.memoizedState), (d = jt || ba(t, n, d, r, C, S, a) || !1) ? (I || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || A === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = a, r = d) : (typeof i.componentDidUpdate != "function" || A === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return fi(e, t, n, r, l, o);
  }
  function fi(e, t, n, r, o, l) {
    ss(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return o && Ea(t, n, !1), Tt(e, t, l);
    r = t.stateNode, Uc.current = t;
    var A = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = Mn(t, e.child, null, l), t.child = Mn(t, null, A, l)) : Ve(e, t, A, l), t.memoizedState = r.state, o && Ea(t, n, !0), t.child;
  }
  function cs(e) {
    var t = e.stateNode;
    t.pendingContext ? da(e, t.pendingContext, t.pendingContext !== t.context) : t.context && da(e, t.context, !1), bl(e, t.containerInfo);
  }
  function gs(e, t, n, r, o) {
    return Ln(), Gl(o), t.flags |= 256, Ve(e, t, n, r), t.child;
  }
  var Ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ds(e, t, n) {
    var r = t.pendingProps, o = fe.current, l = !1, i = (t.flags & 128) !== 0, A;
    if ((A = i) || (A = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), A ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ae(fe, o & 1), e === null)
      return Vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, (r & 1) === 0 && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Po(i, r, 0, null), e = pn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = hi(n), t.memoizedState = Ei, e) : pi(t, i));
    if (o = e.memoizedState, o !== null && (A = o.dehydrated, A !== null)) return Tc(e, t, i, r, A, o, n);
    if (l) {
      l = r.fallback, i = t.mode, o = e.child, A = o.sibling;
      var a = { mode: "hidden", children: r.children };
      return (i & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = tn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), A !== null ? l = tn(A, l) : (l = pn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? hi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Ei, r;
    }
    return l = e.child, e = l.sibling, r = tn(l, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function pi(e, t) {
    return t = Po({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ko(e, t, n, r) {
    return r !== null && Gl(r), Mn(t, e.child, null, n), e = pi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Tc(e, t, n, r, o, l, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = ci(Error(f(422))), ko(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Po({ mode: "visible", children: r.children }, o, 0, null), l = pn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, (t.mode & 1) !== 0 && Mn(t, e.child, null, i), t.child.memoizedState = hi(i), t.memoizedState = Ei, l);
    if ((t.mode & 1) === 0) return ko(e, t, i, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var A = r.dgst;
      return r = A, l = Error(f(419)), r = ci(l, r, void 0), ko(e, t, i, r);
    }
    if (A = (i & e.childLanes) !== 0, We || A) {
      if (r = De, r !== null) {
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
        o = (o & (r.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Ft(e, o), It(r, e, o, -1));
      }
      return Ui(), r = ci(Error(f(421))), ko(e, t, i, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xc.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, nt = Gt(o.nextSibling), tt = t, de = !0, Et = null, e !== null && (lt[it++] = Dt, lt[it++] = Jt, lt[it++] = an, Dt = e.id, Jt = e.overflow, an = t), t = pi(t, r.children), t.flags |= 4096, t);
  }
  function fs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), jl(e.return, t, n);
  }
  function Ci(e, t, n, r, o) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
  }
  function Es(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, l = r.tail;
    if (Ve(e, t, r.children, n), r = fe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fs(e, n, t);
        else if (e.tag === 19) fs(e, n, t);
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
    if (ae(fe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Io(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ci(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Io(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Ci(t, !0, n, null, l);
        break;
      case "together":
        Ci(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function So(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), dn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = tn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Nc(e, t, n) {
    switch (t.tag) {
      case 3:
        cs(t), Ln();
        break;
      case 5:
        xa(t);
        break;
      case 1:
        je(t.type) && ao(t);
        break;
      case 4:
        bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        ae(Eo, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ae(fe, fe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ds(e, t, n) : (ae(fe, fe.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
        ae(fe, fe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Es(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ae(fe, fe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, as(e, t, n);
    }
    return Tt(e, t, n);
  }
  var hs, Ii, ps, Cs;
  hs = function(e, t) {
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
  }, Ii = function() {
  }, ps = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, cn(vt.current);
      var l = null;
      switch (n) {
        case "input":
          o = Lt(e, o), r = Lt(e, r), l = [];
          break;
        case "select":
          o = y({}, o, { value: void 0 }), r = y({}, r, { value: void 0 }), l = [];
          break;
        case "textarea":
          o = bo(e, o), r = bo(e, r), l = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = lo);
      }
      $o(n, r);
      var i;
      n = null;
      for (d in o) if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && o[d] != null) if (d === "style") {
        var A = o[d];
        for (i in A) A.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (O.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
      for (d in r) {
        var a = r[d];
        if (A = o != null ? o[d] : void 0, r.hasOwnProperty(d) && a !== A && (a != null || A != null)) if (d === "style") if (A) {
          for (i in A) !A.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in a) a.hasOwnProperty(i) && A[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
        } else n || (l || (l = []), l.push(
          d,
          n
        )), n = a;
        else d === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, A = A ? A.__html : void 0, a != null && A !== a && (l = l || []).push(d, a)) : d === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(d, "" + a) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (O.hasOwnProperty(d) ? (a != null && d === "onScroll" && se("scroll", e), l || A === a || (l = [])) : (l = l || []).push(d, a));
      }
      n && (l = l || []).push("style", n);
      var d = l;
      (t.updateQueue = d) && (t.flags |= 4);
    }
  }, Cs = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Sr(e, t) {
    if (!de) switch (e.tailMode) {
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
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Lc(e, t, n) {
    var r = t.pendingProps;
    switch (Hl(t), t.tag) {
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
        return Ke(t), null;
      case 1:
        return je(t.type) && Ao(), Ke(t), null;
      case 3:
        return r = t.stateNode, qn(), ue(Xe), ue(Le), ei(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (go(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Et !== null && (Di(Et), Et = null))), Ii(e, t), Ke(t), null;
      case 5:
        _l(t);
        var o = cn(mr.current);
        if (n = t.type, e !== null && t.stateNode != null) ps(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(f(166));
            return Ke(t), null;
          }
          if (e = cn(vt.current), go(t)) {
            r = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (r[wt] = t, r[pr] = l, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                se("cancel", r), se("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < fr.length; o++) se(fr[o], r);
                break;
              case "source":
                se("error", r);
                break;
              case "img":
              case "image":
              case "link":
                se(
                  "error",
                  r
                ), se("load", r);
                break;
              case "details":
                se("toggle", r);
                break;
              case "input":
                Mt(r, l), se("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!l.multiple }, se("invalid", r);
                break;
              case "textarea":
                tA(r, l), se("invalid", r);
            }
            $o(n, l), o = null;
            for (var i in l) if (l.hasOwnProperty(i)) {
              var A = l[i];
              i === "children" ? typeof A == "string" ? r.textContent !== A && (l.suppressHydrationWarning !== !0 && oo(r.textContent, A, e), o = ["children", A]) : typeof A == "number" && r.textContent !== "" + A && (l.suppressHydrationWarning !== !0 && oo(
                r.textContent,
                A,
                e
              ), o = ["children", "" + A]) : O.hasOwnProperty(i) && A != null && i === "onScroll" && se("scroll", r);
            }
            switch (n) {
              case "input":
                St(r), eA(r, l, !0);
                break;
              case "textarea":
                St(r), rA(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = lo);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = oA(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[wt] = t, e[pr] = r, hs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = el(n, r), n) {
                case "dialog":
                  se("cancel", e), se("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  se("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < fr.length; o++) se(fr[o], e);
                  o = r;
                  break;
                case "source":
                  se("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  se(
                    "error",
                    e
                  ), se("load", e), o = r;
                  break;
                case "details":
                  se("toggle", e), o = r;
                  break;
                case "input":
                  Mt(e, r), o = Lt(e, r), se("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = y({}, r, { value: void 0 }), se("invalid", e);
                  break;
                case "textarea":
                  tA(e, r), o = bo(e, r), se("invalid", e);
                  break;
                default:
                  o = r;
              }
              $o(n, o), A = o;
              for (l in A) if (A.hasOwnProperty(l)) {
                var a = A[l];
                l === "style" ? AA(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && lA(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Wn(e, a) : typeof a == "number" && Wn(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (O.hasOwnProperty(l) ? a != null && l === "onScroll" && se("scroll", e) : a != null && we(e, l, a, i));
              }
              switch (n) {
                case "input":
                  St(e), eA(e, r, !1);
                  break;
                case "textarea":
                  St(e), rA(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + R(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, l = r.value, l != null ? Bn(e, !!r.multiple, l, !1) : r.defaultValue != null && Bn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = lo);
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
        return Ke(t), null;
      case 6:
        if (e && t.stateNode != null) Cs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(f(166));
          if (n = cn(mr.current), cn(vt.current), go(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (l = r.nodeValue !== n) && (e = tt, e !== null)) switch (e.tag) {
              case 3:
                oo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && oo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            l && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r;
        }
        return Ke(t), null;
      case 13:
        if (ue(fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (de && nt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ba(), Ln(), t.flags |= 98560, l = !1;
          else if (l = go(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(f(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(f(317));
              l[wt] = t;
            } else Ln(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), l = !1;
          } else Et !== null && (Di(Et), Et = null), l = !0;
          if (!l) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (fe.current & 1) !== 0 ? Se === 0 && (Se = 3) : Ui())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return qn(), Ii(e, t), e === null && Er(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return Xl(t.type._context), Ke(t), null;
      case 17:
        return je(t.type) && Ao(), Ke(t), null;
      case 19:
        if (ue(fe), l = t.memoizedState, l === null) return Ke(t), null;
        if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) Sr(l, !1);
        else {
          if (Se !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (i = Io(e), i !== null) {
              for (t.flags |= 128, Sr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ae(fe, fe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && Qe() > Gn && (t.flags |= 128, r = !0, Sr(l, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Io(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !de) return Ke(t), null;
          } else 2 * Qe() - l.renderingStartTime > Gn && n !== 1073741824 && (t.flags |= 128, r = !0, Sr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Qe(), t.sibling = null, n = fe.current, ae(fe, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
      case 22:
      case 23:
        return Fi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (rt & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Mc(e, t) {
    switch (Hl(t), t.tag) {
      case 1:
        return je(t.type) && Ao(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return qn(), ue(Xe), ue(Le), ei(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return _l(t), null;
      case 13:
        if (ue(fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(f(340));
          Ln();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ue(fe), null;
      case 4:
        return qn(), null;
      case 10:
        return Xl(t.type._context), null;
      case 22:
      case 23:
        return Fi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ro = !1, Pe = !1, Kc = typeof WeakSet == "function" ? WeakSet : Set, k = null;
  function On(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      pe(e, t, r);
    }
    else n.current = null;
  }
  function Qi(e, t, n) {
    try {
      n();
    } catch (r) {
      pe(e, t, r);
    }
  }
  var Is = !1;
  function Pc(e, t) {
    if (Fl = Xr, e = bA(), vl(e)) {
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
          var i = 0, A = -1, a = -1, d = 0, I = 0, B = e, C = null;
          t: for (; ; ) {
            for (var v; B !== n || o !== 0 && B.nodeType !== 3 || (A = i + o), B !== l || r !== 0 && B.nodeType !== 3 || (a = i + r), B.nodeType === 3 && (i += B.nodeValue.length), (v = B.firstChild) !== null; )
              C = B, B = v;
            for (; ; ) {
              if (B === e) break t;
              if (C === n && ++d === o && (A = i), C === l && ++I === r && (a = i), (v = B.nextSibling) !== null) break;
              B = C, C = B.parentNode;
            }
            B = v;
          }
          n = A === -1 || a === -1 ? null : { start: A, end: a };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ul = { focusedElem: e, selectionRange: n }, Xr = !1, k = t; k !== null; ) if (t = k, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, k = e;
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
              var x = S.memoizedProps, Be = S.memoizedState, c = t.stateNode, s = c.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ht(t.type, x), Be);
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
            throw Error(f(163));
        }
      } catch (m) {
        pe(t, t.return, m);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, k = e;
        break;
      }
      k = t.return;
    }
    return S = Is, Is = !1, S;
  }
  function Rr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var l = o.destroy;
          o.destroy = void 0, l !== void 0 && Qi(t, n, l);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function xo(e, t) {
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
  function Bi(e) {
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
  function Qs(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qs(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[pr], delete t[Ml], delete t[Bc], delete t[mc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Bs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ms(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function mi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = lo));
    else if (r !== 4 && (e = e.child, e !== null)) for (mi(e, t, n), e = e.sibling; e !== null; ) mi(e, t, n), e = e.sibling;
  }
  function wi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (wi(e, t, n), e = e.sibling; e !== null; ) wi(e, t, n), e = e.sibling;
  }
  var Ue = null, pt = !1;
  function Zt(e, t, n) {
    for (n = n.child; n !== null; ) ws(e, t, n), n = n.sibling;
  }
  function ws(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function") try {
      mt.onCommitFiberUnmount(Hr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Pe || On(n, t);
      case 6:
        var r = Ue, o = pt;
        Ue = null, Zt(e, t, n), Ue = r, pt = o, Ue !== null && (pt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ue.removeChild(n.stateNode));
        break;
      case 18:
        Ue !== null && (pt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? Ll(e.parentNode, n) : e.nodeType === 1 && Ll(e, n), ir(e)) : Ll(Ue, n.stateNode));
        break;
      case 4:
        r = Ue, o = pt, Ue = n.stateNode.containerInfo, pt = !0, Zt(e, t, n), Ue = r, pt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var l = o, i = l.destroy;
            l = l.tag, i !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && Qi(n, t, i), o = o.next;
          } while (o !== r);
        }
        Zt(e, t, n);
        break;
      case 1:
        if (!Pe && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (A) {
          pe(n, t, A);
        }
        Zt(e, t, n);
        break;
      case 21:
        Zt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Pe = (r = Pe) || n.memoizedState !== null, Zt(e, t, n), Pe = r) : Zt(e, t, n);
        break;
      default:
        Zt(e, t, n);
    }
  }
  function vs(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Kc()), t.forEach(function(r) {
        var o = jc.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function Ct(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e, i = t, A = i;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 5:
              Ue = A.stateNode, pt = !1;
              break e;
            case 3:
              Ue = A.stateNode.containerInfo, pt = !0;
              break e;
            case 4:
              Ue = A.stateNode.containerInfo, pt = !0;
              break e;
          }
          A = A.return;
        }
        if (Ue === null) throw Error(f(160));
        ws(l, i, o), Ue = null, pt = !1;
        var a = o.alternate;
        a !== null && (a.return = null), o.return = null;
      } catch (d) {
        pe(o, t, d);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ys(t, e), t = t.sibling;
  }
  function ys(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ct(t, e), kt(e), r & 4) {
          try {
            Rr(3, e, e.return), xo(3, e);
          } catch (x) {
            pe(e, e.return, x);
          }
          try {
            Rr(5, e, e.return);
          } catch (x) {
            pe(e, e.return, x);
          }
        }
        break;
      case 1:
        Ct(t, e), kt(e), r & 512 && n !== null && On(n, n.return);
        break;
      case 5:
        if (Ct(t, e), kt(e), r & 512 && n !== null && On(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            Wn(o, "");
          } catch (x) {
            pe(e, e.return, x);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, A = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            A === "input" && l.type === "radio" && l.name != null && $i(o, l), el(A, i);
            var d = el(A, l);
            for (i = 0; i < a.length; i += 2) {
              var I = a[i], B = a[i + 1];
              I === "style" ? AA(o, B) : I === "dangerouslySetInnerHTML" ? lA(o, B) : I === "children" ? Wn(o, B) : we(o, I, B, d);
            }
            switch (A) {
              case "input":
                Wo(o, l);
                break;
              case "textarea":
                nA(o, l);
                break;
              case "select":
                var C = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null ? Bn(o, !!l.multiple, v, !1) : C !== !!l.multiple && (l.defaultValue != null ? Bn(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : Bn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[pr] = l;
          } catch (x) {
            pe(e, e.return, x);
          }
        }
        break;
      case 6:
        if (Ct(t, e), kt(e), r & 4) {
          if (e.stateNode === null) throw Error(f(162));
          o = e.stateNode, l = e.memoizedProps;
          try {
            o.nodeValue = l;
          } catch (x) {
            pe(e, e.return, x);
          }
        }
        break;
      case 3:
        if (Ct(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ir(t.containerInfo);
        } catch (x) {
          pe(e, e.return, x);
        }
        break;
      case 4:
        Ct(t, e), kt(e);
        break;
      case 13:
        Ct(t, e), kt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ki = Qe())), r & 4 && vs(e);
        break;
      case 22:
        if (I = n !== null && n.memoizedState !== null, e.mode & 1 ? (Pe = (d = Pe) || I, Ct(t, e), Pe = d) : Ct(t, e), kt(e), r & 8192) {
          if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !I && (e.mode & 1) !== 0) for (k = e, I = e.child; I !== null; ) {
            for (B = k = I; k !== null; ) {
              switch (C = k, v = C.child, C.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rr(4, C, C.return);
                  break;
                case 1:
                  On(C, C.return);
                  var S = C.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    r = C, n = C.return;
                    try {
                      t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                    } catch (x) {
                      pe(r, n, x);
                    }
                  }
                  break;
                case 5:
                  On(C, C.return);
                  break;
                case 22:
                  if (C.memoizedState !== null) {
                    Rs(B);
                    continue;
                  }
              }
              v !== null ? (v.return = C, k = v) : Rs(B);
            }
            I = I.sibling;
          }
          e: for (I = null, B = e; ; ) {
            if (B.tag === 5) {
              if (I === null) {
                I = B;
                try {
                  o = B.stateNode, d ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (A = B.stateNode, a = B.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, A.style.display = iA("display", i));
                } catch (x) {
                  pe(e, e.return, x);
                }
              }
            } else if (B.tag === 6) {
              if (I === null) try {
                B.stateNode.nodeValue = d ? "" : B.memoizedProps;
              } catch (x) {
                pe(e, e.return, x);
              }
            } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === e) && B.child !== null) {
              B.child.return = B, B = B.child;
              continue;
            }
            if (B === e) break e;
            for (; B.sibling === null; ) {
              if (B.return === null || B.return === e) break e;
              I === B && (I = null), B = B.return;
            }
            I === B && (I = null), B.sibling.return = B.return, B = B.sibling;
          }
        }
        break;
      case 19:
        Ct(t, e), kt(e), r & 4 && vs(e);
        break;
      case 21:
        break;
      default:
        Ct(
          t,
          e
        ), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Bs(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(f(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Wn(o, ""), r.flags &= -33);
            var l = ms(e);
            wi(e, l, o);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, A = ms(e);
            mi(e, A, i);
            break;
          default:
            throw Error(f(161));
        }
      } catch (a) {
        pe(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function qc(e, t, n) {
    k = e, ks(e);
  }
  function ks(e, t, n) {
    for (var r = (e.mode & 1) !== 0; k !== null; ) {
      var o = k, l = o.child;
      if (o.tag === 22 && r) {
        var i = o.memoizedState !== null || Ro;
        if (!i) {
          var A = o.alternate, a = A !== null && A.memoizedState !== null || Pe;
          A = Ro;
          var d = Pe;
          if (Ro = i, (Pe = a) && !d) for (k = o; k !== null; ) i = k, a = i.child, i.tag === 22 && i.memoizedState !== null ? xs(o) : a !== null ? (a.return = i, k = a) : xs(o);
          for (; l !== null; ) k = l, ks(l), l = l.sibling;
          k = o, Ro = A, Pe = d;
        }
        Ss(e);
      } else (o.subtreeFlags & 8772) !== 0 && l !== null ? (l.return = o, k = l) : Ss(e);
    }
  }
  function Ss(e) {
    for (; k !== null; ) {
      var t = k;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pe || xo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var l = t.updateQueue;
              l !== null && Ra(t, l, r);
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
                Ra(t, i, n);
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
                var d = t.alternate;
                if (d !== null) {
                  var I = d.memoizedState;
                  if (I !== null) {
                    var B = I.dehydrated;
                    B !== null && ir(B);
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
              throw Error(f(163));
          }
          Pe || t.flags & 512 && Bi(t);
        } catch (C) {
          pe(t, t.return, C);
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
  function Rs(e) {
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
  function xs(e) {
    for (; k !== null; ) {
      var t = k;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              xo(4, t);
            } catch (a) {
              pe(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                pe(t, o, a);
              }
            }
            var l = t.return;
            try {
              Bi(t);
            } catch (a) {
              pe(t, l, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Bi(t);
            } catch (a) {
              pe(t, i, a);
            }
        }
      } catch (a) {
        pe(t, t.return, a);
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
  var Hc = Math.ceil, Do = Ie.ReactCurrentDispatcher, vi = Ie.ReactCurrentOwner, st = Ie.ReactCurrentBatchConfig, $ = 0, De = null, ye = null, Te = 0, rt = 0, Vn = Yt(0), Se = 0, xr = null, dn = 0, Jo = 0, yi = 0, Dr = null, Ze = null, ki = 0, Gn = 1 / 0, Nt = null, Fo = !1, Si = null, bt = null, Uo = !1, _t = null, To = 0, Jr = 0, Ri = null, No = -1, Lo = 0;
  function Ge() {
    return ($ & 6) !== 0 ? Qe() : No !== -1 ? No : No = Qe();
  }
  function $t(e) {
    return (e.mode & 1) === 0 ? 1 : ($ & 2) !== 0 && Te !== 0 ? Te & -Te : vc.transition !== null ? (Lo === 0 && (Lo = mA()), Lo) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : JA(e.type)), e);
  }
  function It(e, t, n, r) {
    if (50 < Jr) throw Jr = 0, Ri = null, Error(f(185));
    tr(e, n, r), (($ & 2) === 0 || e !== De) && (e === De && (($ & 2) === 0 && (Jo |= n), Se === 4 && en(e, Te)), be(e, r), n === 1 && $ === 0 && (t.mode & 1) === 0 && (Gn = Qe() + 500, so && Xt()));
  }
  function be(e, t) {
    var n = e.callbackNode;
    vu(e, t);
    var r = Gr(e, e === De ? Te : 0);
    if (r === 0) n !== null && IA(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && IA(n), t === 1) e.tag === 0 ? wc(Js.bind(null, e)) : ha(Js.bind(null, e)), Ic(function() {
        ($ & 6) === 0 && Xt();
      }), n = null;
      else {
        switch (wA(r)) {
          case 1:
            n = Al;
            break;
          case 4:
            n = QA;
            break;
          case 16:
            n = qr;
            break;
          case 536870912:
            n = BA;
            break;
          default:
            n = qr;
        }
        n = Ps(n, Ds.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ds(e, t) {
    if (No = -1, Lo = 0, ($ & 6) !== 0) throw Error(f(327));
    var n = e.callbackNode;
    if (Yn() && e.callbackNode !== n) return null;
    var r = Gr(e, e === De ? Te : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Mo(e, r);
    else {
      t = r;
      var o = $;
      $ |= 2;
      var l = Us();
      (De !== e || Te !== t) && (Nt = null, Gn = Qe() + 500, En(e, t));
      do
        try {
          Gc();
          break;
        } catch (A) {
          Fs(e, A);
        }
      while (!0);
      zl(), Do.current = l, $ = o, ye !== null ? t = 0 : (De = null, Te = 0, t = Se);
    }
    if (t !== 0) {
      if (t === 2 && (o = al(e), o !== 0 && (r = o, t = xi(e, o))), t === 1) throw n = xr, En(e, 0), en(e, r), be(e, Qe()), n;
      if (t === 6) en(e, r);
      else {
        if (o = e.current.alternate, (r & 30) === 0 && !Oc(o) && (t = Mo(e, r), t === 2 && (l = al(e), l !== 0 && (r = l, t = xi(e, l))), t === 1)) throw n = xr, En(e, 0), en(e, r), be(e, Qe()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            hn(e, Ze, Nt);
            break;
          case 3:
            if (en(e, r), (r & 130023424) === r && (t = ki + 500 - Qe(), 10 < t)) {
              if (Gr(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                Ge(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = Nl(hn.bind(null, e, Ze, Nt), t);
              break;
            }
            hn(e, Ze, Nt);
            break;
          case 4:
            if (en(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var i = 31 - dt(r);
              l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
            }
            if (r = o, r = Qe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hc(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Nl(hn.bind(null, e, Ze, Nt), r);
              break;
            }
            hn(e, Ze, Nt);
            break;
          case 5:
            hn(e, Ze, Nt);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return be(e, Qe()), e.callbackNode === n ? Ds.bind(null, e) : null;
  }
  function xi(e, t) {
    var n = Dr;
    return e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256), e = Mo(e, t), e !== 2 && (t = Ze, Ze = n, t !== null && Di(t)), e;
  }
  function Di(e) {
    Ze === null ? Ze = e : Ze.push.apply(Ze, e);
  }
  function Oc(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!ft(l(), o)) return !1;
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
  function en(e, t) {
    for (t &= ~yi, t &= ~Jo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - dt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Js(e) {
    if (($ & 6) !== 0) throw Error(f(327));
    Yn();
    var t = Gr(e, 0);
    if ((t & 1) === 0) return be(e, Qe()), null;
    var n = Mo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = al(e);
      r !== 0 && (t = r, n = xi(e, r));
    }
    if (n === 1) throw n = xr, En(e, 0), en(e, t), be(e, Qe()), n;
    if (n === 6) throw Error(f(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, hn(e, Ze, Nt), be(e, Qe()), null;
  }
  function Ji(e, t) {
    var n = $;
    $ |= 1;
    try {
      return e(t);
    } finally {
      $ = n, $ === 0 && (Gn = Qe() + 500, so && Xt());
    }
  }
  function fn(e) {
    _t !== null && _t.tag === 0 && ($ & 6) === 0 && Yn();
    var t = $;
    $ |= 1;
    var n = st.transition, r = ne;
    try {
      if (st.transition = null, ne = 1, e) return e();
    } finally {
      ne = r, st.transition = n, $ = t, ($ & 6) === 0 && Xt();
    }
  }
  function Fi() {
    rt = Vn.current, ue(Vn);
  }
  function En(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Cc(n)), ye !== null) for (n = ye.return; n !== null; ) {
      var r = n;
      switch (Hl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ao();
          break;
        case 3:
          qn(), ue(Xe), ue(Le), ei();
          break;
        case 5:
          _l(r);
          break;
        case 4:
          qn();
          break;
        case 13:
          ue(fe);
          break;
        case 19:
          ue(fe);
          break;
        case 10:
          Xl(r.type._context);
          break;
        case 22:
        case 23:
          Fi();
      }
      n = n.return;
    }
    if (De = e, ye = e = tn(e.current, null), Te = rt = t, Se = 0, xr = null, yi = Jo = dn = 0, Ze = Dr = null, un !== null) {
      for (t = 0; t < un.length; t++) if (n = un[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
      un = null;
    }
    return e;
  }
  function Fs(e, t) {
    do {
      var n = ye;
      try {
        if (zl(), Qo.current = vo, Bo) {
          for (var r = Ee.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          Bo = !1;
        }
        if (gn = 0, xe = ke = Ee = null, wr = !1, vr = 0, vi.current = null, n === null || n.return === null) {
          Se = 1, xr = t, ye = null;
          break;
        }
        e: {
          var l = e, i = n.return, A = n, a = t;
          if (t = Te, A.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var d = a, I = A, B = I.tag;
            if ((I.mode & 1) === 0 && (B === 0 || B === 11 || B === 15)) {
              var C = I.alternate;
              C ? (I.updateQueue = C.updateQueue, I.memoizedState = C.memoizedState, I.lanes = C.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var v = rs(i);
            if (v !== null) {
              v.flags &= -257, os(v, i, A, l, t), v.mode & 1 && ns(l, d, t), t = v, a = d;
              var S = t.updateQueue;
              if (S === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(a), t.updateQueue = x;
              } else S.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                ns(l, d, t), Ui();
                break e;
              }
              a = Error(f(426));
            }
          } else if (de && A.mode & 1) {
            var Be = rs(i);
            if (Be !== null) {
              (Be.flags & 65536) === 0 && (Be.flags |= 256), os(Be, i, A, l, t), Gl(Hn(a, A));
              break e;
            }
          }
          l = a = Hn(a, A), Se !== 4 && (Se = 2), Dr === null ? Dr = [l] : Dr.push(l), l = i;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var c = es(l, a, t);
                Sa(l, c);
                break e;
              case 1:
                A = a;
                var s = l.type, g = l.stateNode;
                if ((l.flags & 128) === 0 && (typeof s.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (bt === null || !bt.has(g)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var m = ts(l, A, t);
                  Sa(l, m);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Ns(n);
      } catch (D) {
        t = D, ye === n && n !== null && (ye = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Us() {
    var e = Do.current;
    return Do.current = vo, e === null ? vo : e;
  }
  function Ui() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4), De === null || (dn & 268435455) === 0 && (Jo & 268435455) === 0 || en(De, Te);
  }
  function Mo(e, t) {
    var n = $;
    $ |= 2;
    var r = Us();
    (De !== e || Te !== t) && (Nt = null, En(e, t));
    do
      try {
        Vc();
        break;
      } catch (o) {
        Fs(e, o);
      }
    while (!0);
    if (zl(), $ = n, Do.current = r, ye !== null) throw Error(f(261));
    return De = null, Te = 0, Se;
  }
  function Vc() {
    for (; ye !== null; ) Ts(ye);
  }
  function Gc() {
    for (; ye !== null && !Eu(); ) Ts(ye);
  }
  function Ts(e) {
    var t = Ks(e.alternate, e, rt);
    e.memoizedProps = e.pendingProps, t === null ? Ns(e) : ye = t, vi.current = null;
  }
  function Ns(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Lc(n, t, rt), n !== null) {
          ye = n;
          return;
        }
      } else {
        if (n = Mc(n, t), n !== null) {
          n.flags &= 32767, ye = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Se = 6, ye = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ye = t;
        return;
      }
      ye = t = e;
    } while (t !== null);
    Se === 0 && (Se = 5);
  }
  function hn(e, t, n) {
    var r = ne, o = st.transition;
    try {
      st.transition = null, ne = 1, Yc(e, t, n, r);
    } finally {
      st.transition = o, ne = r;
    }
    return null;
  }
  function Yc(e, t, n, r) {
    do
      Yn();
    while (_t !== null);
    if (($ & 6) !== 0) throw Error(f(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(f(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (yu(e, l), e === De && (ye = De = null, Te = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Uo || (Uo = !0, Ps(qr, function() {
      return Yn(), null;
    })), l = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || l) {
      l = st.transition, st.transition = null;
      var i = ne;
      ne = 1;
      var A = $;
      $ |= 4, vi.current = null, Pc(e, n), ys(n, e), cc(Ul), Xr = !!Fl, Ul = Fl = null, e.current = n, qc(n), hu(), $ = A, ne = i, st.transition = l;
    } else e.current = n;
    if (Uo && (Uo = !1, _t = e, To = o), l = e.pendingLanes, l === 0 && (bt = null), Iu(n.stateNode), be(e, Qe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Fo) throw Fo = !1, e = Si, Si = null, e;
    return (To & 1) !== 0 && e.tag !== 0 && Yn(), l = e.pendingLanes, (l & 1) !== 0 ? e === Ri ? Jr++ : (Jr = 0, Ri = e) : Jr = 0, Xt(), null;
  }
  function Yn() {
    if (_t !== null) {
      var e = wA(To), t = st.transition, n = ne;
      try {
        if (st.transition = null, ne = 16 > e ? 16 : e, _t === null) var r = !1;
        else {
          if (e = _t, _t = null, To = 0, ($ & 6) !== 0) throw Error(f(331));
          var o = $;
          for ($ |= 4, k = e.current; k !== null; ) {
            var l = k, i = l.child;
            if ((k.flags & 16) !== 0) {
              var A = l.deletions;
              if (A !== null) {
                for (var a = 0; a < A.length; a++) {
                  var d = A[a];
                  for (k = d; k !== null; ) {
                    var I = k;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rr(8, I, l);
                    }
                    var B = I.child;
                    if (B !== null) B.return = I, k = B;
                    else for (; k !== null; ) {
                      I = k;
                      var C = I.sibling, v = I.return;
                      if (Qs(I), I === d) {
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
                      var Be = x.sibling;
                      x.sibling = null, x = Be;
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
                  Rr(9, l, l.return);
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
                    xo(9, A);
                }
              } catch (D) {
                pe(A, A.return, D);
              }
              if (A === i) {
                k = null;
                break e;
              }
              var m = A.sibling;
              if (m !== null) {
                m.return = A.return, k = m;
                break e;
              }
              k = A.return;
            }
          }
          if ($ = o, Xt(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
            mt.onPostCommitFiberRoot(Hr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ne = n, st.transition = t;
      }
    }
    return !1;
  }
  function Ls(e, t, n) {
    t = Hn(n, t), t = es(e, t, 1), e = Wt(e, t, 1), t = Ge(), e !== null && (tr(e, 1, t), be(e, t));
  }
  function pe(e, t, n) {
    if (e.tag === 3) Ls(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ls(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bt === null || !bt.has(r))) {
          e = Hn(n, e), e = ts(t, e, 1), t = Wt(t, e, 1), e = Ge(), t !== null && (tr(t, 1, e), be(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function zc(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ge(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Te & n) === n && (Se === 4 || Se === 3 && (Te & 130023424) === Te && 500 > Qe() - ki ? En(e, 0) : yi |= n), be(e, t);
  }
  function Ms(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Vr, Vr <<= 1, (Vr & 130023424) === 0 && (Vr = 4194304)));
    var n = Ge();
    e = Ft(e, t), e !== null && (tr(e, t, n), be(e, n));
  }
  function Xc(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ms(e, n);
  }
  function jc(e, t) {
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
        throw Error(f(314));
    }
    r !== null && r.delete(t), Ms(e, n);
  }
  var Ks;
  Ks = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) We = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return We = !1, Nc(e, t, n);
      We = (e.flags & 131072) !== 0;
    }
    else We = !1, de && (t.flags & 1048576) !== 0 && pa(t, co, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        So(e, t), e = t.pendingProps;
        var o = Un(t, Le.current);
        Pn(t, n), o = ri(null, t, r, e, o, n);
        var l = oi();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, je(r) ? (l = !0, ao(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Zl(t), o.updater = yo, t.stateNode = o, o._reactInternals = t, ui(t, r, e, n), t = fi(null, t, r, !0, l, n)) : (t.tag = 0, de && l && ql(t), Ve(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (So(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Zc(r), e = ht(r, e), o) {
            case 0:
              t = di(null, t, r, e, n);
              break e;
            case 1:
              t = us(null, t, r, e, n);
              break e;
            case 11:
              t = ls(null, t, r, e, n);
              break e;
            case 14:
              t = is(null, t, r, ht(r.type, e), n);
              break e;
          }
          throw Error(f(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ht(r, o), di(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ht(r, o), us(e, t, r, o, n);
      case 3:
        e: {
          if (cs(t), e === null) throw Error(f(387));
          r = t.pendingProps, l = t.memoizedState, o = l.element, ka(e, t), Co(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = Hn(Error(f(423)), t), t = gs(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Hn(Error(f(424)), t), t = gs(e, t, r, n, o);
            break e;
          } else for (nt = Gt(t.stateNode.containerInfo.firstChild), tt = t, de = !0, Et = null, n = va(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ln(), r === o) {
              t = Tt(e, t, n);
              break e;
            }
            Ve(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return xa(t), e === null && Vl(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Tl(r, o) ? i = null : l !== null && Tl(r, l) && (t.flags |= 32), ss(e, t), Ve(e, t, i, n), t.child;
      case 6:
        return e === null && Vl(t), null;
      case 13:
        return ds(e, t, n);
      case 4:
        return bl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Mn(t, null, r, n) : Ve(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ht(r, o), ls(e, t, r, o, n);
      case 7:
        return Ve(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, ae(Eo, r._currentValue), r._currentValue = i, l !== null) if (ft(l.value, i)) {
            if (l.children === o.children && !Xe.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
            var A = l.dependencies;
            if (A !== null) {
              i = l.child;
              for (var a = A.firstContext; a !== null; ) {
                if (a.context === r) {
                  if (l.tag === 1) {
                    a = Ut(-1, n & -n), a.tag = 2;
                    var d = l.updateQueue;
                    if (d !== null) {
                      d = d.shared;
                      var I = d.pending;
                      I === null ? a.next = a : (a.next = I.next, I.next = a), d.pending = a;
                    }
                  }
                  l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), jl(
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
              if (i = l.return, i === null) throw Error(f(341));
              i.lanes |= n, A = i.alternate, A !== null && (A.lanes |= n), jl(i, n, t), i = l.sibling;
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
          Ve(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, Pn(t, n), o = At(o), r = r(o), t.flags |= 1, Ve(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = ht(r, t.pendingProps), o = ht(r.type, o), is(e, t, r, o, n);
      case 15:
        return As(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ht(r, o), So(e, t), t.tag = 1, je(r) ? (e = !0, ao(t)) : e = !1, Pn(t, n), _a(t, r, o), ui(t, r, o, n), fi(null, t, r, !0, e, n);
      case 19:
        return Es(e, t, n);
      case 22:
        return as(e, t, n);
    }
    throw Error(f(156, t.tag));
  };
  function Ps(e, t) {
    return CA(e, t);
  }
  function Wc(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ut(e, t, n, r) {
    return new Wc(e, t, n, r);
  }
  function Ti(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Zc(e) {
    if (typeof e == "function") return Ti(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === He) return 11;
      if (e === Oe) return 14;
    }
    return 2;
  }
  function tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ko(e, t, n, r, o, l) {
    var i = 2;
    if (r = e, typeof e == "function") Ti(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case oe:
        return pn(n.children, o, l, t);
      case qe:
        i = 8, o |= 8;
        break;
      case $e:
        return e = ut(12, n, t, o | 2), e.elementType = $e, e.lanes = l, e;
      case Ne:
        return e = ut(13, n, t, o), e.elementType = Ne, e.lanes = l, e;
      case ze:
        return e = ut(19, n, t, o), e.elementType = ze, e.lanes = l, e;
      case Ae:
        return Po(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ye:
            i = 10;
            break e;
          case ot:
            i = 9;
            break e;
          case He:
            i = 11;
            break e;
          case Oe:
            i = 14;
            break e;
          case ve:
            i = 16, r = null;
            break e;
        }
        throw Error(f(130, e == null ? e : typeof e, ""));
    }
    return t = ut(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
  }
  function pn(e, t, n, r) {
    return e = ut(7, e, r, t), e.lanes = n, e;
  }
  function Po(e, t, n, r) {
    return e = ut(22, e, r, t), e.elementType = Ae, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ni(e, t, n) {
    return e = ut(6, e, null, t), e.lanes = n, e;
  }
  function Li(e, t, n) {
    return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function bc(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = sl(0), this.expirationTimes = sl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = sl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function Mi(e, t, n, r, o, l, i, A, a) {
    return e = new bc(e, t, n, A, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = ut(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Zl(l), e;
  }
  function _c(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: he, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function qs(e) {
    if (!e) return zt;
    e = e._reactInternals;
    e: {
      if (on(e) !== e || e.tag !== 1) throw Error(f(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (je(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(f(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (je(n)) return fa(e, n, t);
    }
    return t;
  }
  function Hs(e, t, n, r, o, l, i, A, a) {
    return e = Mi(n, r, !0, e, o, l, i, A, a), e.context = qs(null), n = e.current, r = Ge(), o = $t(n), l = Ut(r, o), l.callback = t ?? null, Wt(n, l, o), e.current.lanes = o, tr(e, o, r), be(e, r), e;
  }
  function qo(e, t, n, r) {
    var o = t.current, l = Ge(), i = $t(o);
    return n = qs(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ut(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wt(o, t, i), e !== null && (It(e, o, i, l), po(e, o, i)), i;
  }
  function Ho(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Os(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ki(e, t) {
    Os(e, t), (e = e.alternate) && Os(e, t);
  }
  function $c() {
    return null;
  }
  var Vs = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Pi(e) {
    this._internalRoot = e;
  }
  Oo.prototype.render = Pi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    qo(e, t, null, null);
  }, Oo.prototype.unmount = Pi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      fn(function() {
        qo(null, e, null, null);
      }), t[Rt] = null;
    }
  };
  function Oo(e) {
    this._internalRoot = e;
  }
  Oo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = kA();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++) ;
      Ht.splice(n, 0, e), n === 0 && xA(e);
    }
  };
  function qi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Vo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Gs() {
  }
  function eg(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var l = r;
        r = function() {
          var d = Ho(i);
          l.call(d);
        };
      }
      var i = Hs(t, r, e, 0, null, !1, !1, "", Gs);
      return e._reactRootContainer = i, e[Rt] = i.current, Er(e.nodeType === 8 ? e.parentNode : e), fn(), i;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var A = r;
      r = function() {
        var d = Ho(a);
        A.call(d);
      };
    }
    var a = Mi(e, 0, !1, null, null, !1, !1, "", Gs);
    return e._reactRootContainer = a, e[Rt] = a.current, Er(e.nodeType === 8 ? e.parentNode : e), fn(function() {
      qo(t, a, n, r);
    }), a;
  }
  function Go(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
      var i = l;
      if (typeof o == "function") {
        var A = o;
        o = function() {
          var a = Ho(i);
          A.call(a);
        };
      }
      qo(t, i, e, o);
    } else i = eg(n, t, e, o, r);
    return Ho(i);
  }
  vA = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = er(t.pendingLanes);
          n !== 0 && (ul(t, n | 1), be(t, Qe()), ($ & 6) === 0 && (Gn = Qe() + 500, Xt()));
        }
        break;
      case 13:
        fn(function() {
          var r = Ft(e, 1);
          if (r !== null) {
            var o = Ge();
            It(r, e, 1, o);
          }
        }), Ki(e, 1);
    }
  }, cl = function(e) {
    if (e.tag === 13) {
      var t = Ft(e, 134217728);
      if (t !== null) {
        var n = Ge();
        It(t, e, 134217728, n);
      }
      Ki(e, 134217728);
    }
  }, yA = function(e) {
    if (e.tag === 13) {
      var t = $t(e), n = Ft(e, t);
      if (n !== null) {
        var r = Ge();
        It(n, e, t, r);
      }
      Ki(e, t);
    }
  }, kA = function() {
    return ne;
  }, SA = function(e, t) {
    var n = ne;
    try {
      return ne = e, t();
    } finally {
      ne = n;
    }
  }, rl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Wo(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = io(r);
              if (!o) throw Error(f(90));
              Bt(r), Wo(r, o);
            }
          }
        }
        break;
      case "textarea":
        nA(e, n);
        break;
      case "select":
        t = n.value, t != null && Bn(e, !!n.multiple, t, !1);
    }
  }, cA = Ji, gA = fn;
  var tg = { usingClientEntryPoint: !1, Events: [Cr, Jn, io, sA, uA, Ji] }, Fr = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ng = { bundleType: Fr.bundleType, version: Fr.version, rendererPackageName: Fr.rendererPackageName, rendererConfig: Fr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ie.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = hA(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Fr.findFiberByHostInstance || $c, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yo.isDisabled && Yo.supportsFiber) try {
      Hr = Yo.inject(ng), mt = Yo;
    } catch {
    }
  }
  return _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tg, _e.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qi(t)) throw Error(f(200));
    return _c(e, t, null, n);
  }, _e.createRoot = function(e, t) {
    if (!qi(e)) throw Error(f(299));
    var n = !1, r = "", o = Vs;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Mi(e, 1, !1, null, null, n, !1, r, o), e[Rt] = t.current, Er(e.nodeType === 8 ? e.parentNode : e), new Pi(t);
  }, _e.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = hA(t), e = e === null ? null : e.stateNode, e;
  }, _e.flushSync = function(e) {
    return fn(e);
  }, _e.hydrate = function(e, t, n) {
    if (!Vo(t)) throw Error(f(200));
    return Go(null, e, t, !0, n);
  }, _e.hydrateRoot = function(e, t, n) {
    if (!qi(e)) throw Error(f(405));
    var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Vs;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Hs(t, null, e, 1, n ?? null, o, !1, l, i), e[Rt] = t.current, Er(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new Oo(t);
  }, _e.render = function(e, t, n) {
    if (!Vo(t)) throw Error(f(200));
    return Go(null, e, t, !1, n);
  }, _e.unmountComponentAtNode = function(e) {
    if (!Vo(e)) throw Error(f(40));
    return e._reactRootContainer ? (fn(function() {
      Go(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Rt] = null;
      });
    }), !0) : !1;
  }, _e.unstable_batchedUpdates = Ji, _e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Vo(n)) throw Error(f(200));
    if (e == null || e._reactInternals === void 0) throw Error(f(38));
    return Go(e, t, n, !1, r);
  }, _e.version = "18.3.1-next-f1338f8080-20240426", _e;
}
var Zs;
function sg() {
  if (Zs) return Oi.exports;
  Zs = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (Q) {
        console.error(Q);
      }
  }
  return E(), Oi.exports = ag(), Oi.exports;
}
var bs;
function ug() {
  if (bs) return zo;
  bs = 1;
  var E = sg();
  return zo.createRoot = E.createRoot, zo.hydrateRoot = E.hydrateRoot, zo;
}
var cg = ug(), Yi = { exports: {} }, Ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function gg() {
  if (_s) return Ur;
  _s = 1;
  var E = Zi(), Q = Symbol.for("react.element"), f = Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, O = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(W, L, Y) {
    var j, M = {}, z = null, Ce = null;
    Y !== void 0 && (z = "" + Y), L.key !== void 0 && (z = "" + L.key), L.ref !== void 0 && (Ce = L.ref);
    for (j in L) P.call(L, j) && !N.hasOwnProperty(j) && (M[j] = L[j]);
    if (W && W.defaultProps) for (j in L = W.defaultProps, L) M[j] === void 0 && (M[j] = L[j]);
    return { $$typeof: Q, type: W, key: z, ref: Ce, props: M, _owner: O.current };
  }
  return Ur.Fragment = f, Ur.jsx = q, Ur.jsxs = q, Ur;
}
var $s;
function dg() {
  return $s || ($s = 1, Yi.exports = gg()), Yi.exports;
}
var h = dg();
const Lr = "realgo:assistant:", fg = "https://realgo.dev", Eg = "/cards";
async function hg(E, Q) {
  await chrome.storage.local.set({ [E]: Q });
}
const pg = 1440 * 60 * 1e3;
async function Cg(E) {
  const Q = await chrome.storage.local.get(null), f = [], P = Date.now() - pg;
  for (const [N, q] of Object.entries(Q)) {
    if (!N.startsWith(Lr)) continue;
    ((q == null ? void 0 : q.savedAt) ?? 0) < P && f.push(N);
  }
  f.length > 0 && await chrome.storage.local.remove(f);
  const O = Lr + E;
  if (!f.includes(O))
    return Q[O];
}
function Ig(E, Q) {
  return hg(Lr + E, Q);
}
const eu = `
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

`, tu = new URL("data:image/png;base64,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", import.meta.url).href, Qg = "Я застрял. Дай первую мягкую подсказку, без решения.", Bg = "Дай следующий намёк, но всё ещё без полного решения.", Tr = 3, nu = 3e4, mg = 200;
function wg({ task: E, onAsk: Q, variant: f = "dock", onClose: P }) {
  const [O, N] = te.useState(f === "panel"), [q, W] = te.useState(!1), [L, Y] = te.useState([]), [j, M] = te.useState("idle"), [z, Ce] = te.useState(""), [me, Z] = te.useState(1), [V, ie] = te.useState(0), [re, we] = te.useState(null), [Ie, Fe] = te.useState(() => Date.now()), [he, oe] = te.useState(), [qe, $e] = te.useState(!1), [Ye, ot] = te.useState(!1), [He, Ne] = te.useState(!1), ze = te.useRef(null), Oe = te.useRef(null);
  te.useEffect(() => () => {
    var R;
    return (R = Oe.current) == null ? void 0 : R.abort();
  }, []);
  const ve = `${E.platform}:${E.platformTaskSlug}:${E.taskUrl}`, Ae = L[L.length - 1], w = j === "loading" && (Ae == null ? void 0 : Ae.role) === "assistant" && Ae.content === "", F = V >= Tr, y = re ? Math.max(0, re - Ie) : 0, u = y > 0, p = re ? 1 - y / nu : 1, H = te.useMemo(
    () => [E.platform, E.difficulty, ...E.tags ?? []].filter((R) => !!R).slice(0, 5),
    [E.platform, E.difficulty, E.tags]
  );
  te.useEffect(() => {
    f === "panel" && N(!0), Ne(!1), Y([]), M("idle"), Ce(""), Z(1), ie(0), we(null), oe(void 0), $e(!1), ot(!1);
    let R = !0;
    return Cg(ve).then((J) => {
      !R || !J || (Y(J.messages), Z(J.hintLevel), ie(J.hintsUsed), we(J.cooldownEndAt), oe(J.patterns), $e(J.problemKnown), ot(J.patternUsed), Fe(Date.now()));
    }).catch(() => {
    }).finally(() => {
      R && Ne(!0);
    }), () => {
      R = !1;
    };
  }, [ve, f]), te.useEffect(() => {
    !He || j !== "idle" || Ig(ve, {
      messages: L,
      hintLevel: me,
      hintsUsed: V,
      cooldownEndAt: re,
      patterns: he,
      problemKnown: qe,
      patternUsed: Ye,
      savedAt: Date.now()
    }).catch(() => {
    });
  }, [He, j, L, V, Ye, re]), te.useEffect(() => {
    var ce;
    if (typeof chrome > "u" || !((ce = chrome.storage) != null && ce.onChanged)) return;
    const R = Lr + ve;
    function J(St, Bt) {
      if (Bt !== "local" || !(R in St)) return;
      const ge = St[R].newValue;
      ge && (Y(ge.messages), Z(ge.hintLevel), ie(ge.hintsUsed), we(ge.cooldownEndAt), oe(ge.patterns), $e(ge.problemKnown), ot(ge.patternUsed));
    }
    return chrome.storage.onChanged.addListener(J), () => chrome.storage.onChanged.removeListener(J);
  }, [ve]), te.useEffect(() => {
    if (re === null) return;
    const R = setInterval(() => {
      const J = Date.now();
      Fe(J), J >= re && clearInterval(R);
    }, 200);
    return () => clearInterval(R);
  }, [re]), te.useEffect(() => {
    var R;
    (R = ze.current) == null || R.scrollIntoView({ block: "end" });
  }, [L, j, z]);
  async function G(R, J = !0) {
    const ce = R.trim();
    if (!ce || j === "loading" || V >= Tr || !He) return;
    const St = L.slice(-8);
    J && Y((ge) => [...ge, { role: "user", content: ce }]), M("loading"), Ce(""), Y((ge) => [...ge, { role: "assistant", content: "" }]);
    const Bt = new AbortController();
    Oe.current = Bt;
    try {
      const ge = await Q(
        { ...E, message: ce, hintLevel: me, history: St },
        (Mt) => _(Mt),
        Bt.signal
      );
      Y((Mt) => ru(Mt, Sg(ge))), Z((Mt) => Math.min(Mt + 1, Tr)), oe(ge.patterns), $e(ge.problemKnown);
      const Lt = V + 1;
      ie(Lt), we(Lt < Tr ? Date.now() + nu : null);
    } catch (ge) {
      if (Bt.signal.aborted) return;
      Y((Lt) => Lt.slice(0, -1)), Ce(ge instanceof Error ? ge.message : "AI-помощник сейчас недоступен.");
    } finally {
      Oe.current === Bt && (Oe.current = null), Bt.signal.aborted || M("idle");
    }
  }
  function b() {
    if (j === "loading" || Ye) return;
    const R = qe && he && he.length > 0 ? `Паттерн: ${he.slice(0, 2).map((J) => J.name).join(", ")}` : "Эта задача пока не привязана к паттерну в базе realgo — попробуй определить его по тегам и условию самостоятельно.";
    Y((J) => [...J, { role: "assistant", content: R }]), ot(!0);
  }
  function _(R) {
    Y((J) => {
      const ce = J[J.length - 1];
      return !ce || ce.role !== "assistant" ? J : ru(J, ce.content + R);
    });
  }
  function le() {
    if (P) {
      P();
      return;
    }
    f === "dock" && !q && (W(!0), window.setTimeout(() => {
      N(!1), W(!1);
    }, mg));
  }
  return O ? /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `realgo-assistant realgo-assistant--open realgo-assistant--${f} ${q ? "realgo-assistant--closing" : ""}`,
      children: [
        /* @__PURE__ */ h.jsx("style", { children: eu }),
        /* @__PURE__ */ h.jsxs("section", { className: "realgo-agent-panel", "aria-label": "realgo AI assistant", children: [
          /* @__PURE__ */ h.jsxs("header", { className: "realgo-agent-header", children: [
            /* @__PURE__ */ h.jsxs("span", { className: "realgo-agent-brand", children: [
              /* @__PURE__ */ h.jsx("img", { className: "realgo-agent-logo", src: tu, alt: "" }),
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
                onClick: le,
                "aria-label": "Свернуть AI-помощник",
                children: P ? /* @__PURE__ */ h.jsx(vg, {}) : /* @__PURE__ */ h.jsx(Rg, {})
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-task", children: [
            /* @__PURE__ */ h.jsx("p", { className: "realgo-agent-title", children: E.taskTitle }),
            /* @__PURE__ */ h.jsx("div", { className: "realgo-agent-tags", children: H.map((R) => /* @__PURE__ */ h.jsx(
              "span",
              {
                className: `realgo-agent-tag ${yg(R, E.difficulty)} ${kg(R, E.platform)}`,
                children: R
              },
              R
            )) })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-messages", role: "log", "aria-live": "polite", children: [
            L.map((R, J) => J === L.length - 1 && w ? null : /* @__PURE__ */ h.jsxs(
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
            L.length === 0 && j === "idle" && !z && /* @__PURE__ */ h.jsxs("article", { className: "realgo-agent-msg realgo-agent-msg--assistant", children: [
              /* @__PURE__ */ h.jsx("span", { className: "realgo-agent-msg__role", children: "agent" }),
              /* @__PURE__ */ h.jsxs("p", { children: [
                "Вижу открытую задачу. Нажми «получить подсказку» — начну с мягкой наводки, без решения. Всего подсказок ",
                Tr,
                ", каждая следующая конкретнее."
              ] })
            ] }),
            w && /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-loading", children: [
              /* @__PURE__ */ h.jsx("span", { className: "realgo-agent-spinner", "aria-hidden": "true" }),
              "думаю над следующей наводкой…"
            ] }),
            z && /* @__PURE__ */ h.jsx("p", { className: "realgo-agent-error", children: z }),
            /* @__PURE__ */ h.jsx("div", { ref: ze })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-actions-wrap", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "realgo-agent-actions", children: [
              /* @__PURE__ */ h.jsxs(
                "button",
                {
                  type: "button",
                  className: "realgo-agent-btn realgo-agent-btn--hint",
                  disabled: j === "loading" || F || u || !He,
                  onClick: () => V === 0 ? G(Qg, !1) : G(Bg),
                  children: [
                    u && /* @__PURE__ */ h.jsx(
                      "span",
                      {
                        className: "realgo-agent-btn__fill",
                        "aria-hidden": "true",
                        style: { width: `${Math.round(p * 100)}%` }
                      }
                    ),
                    /* @__PURE__ */ h.jsx("span", { className: "realgo-agent-btn__label", children: u ? `через ${Math.ceil(y / 1e3)}с` : V === 0 ? "получить подсказку" : "следующий намёк" })
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  type: "button",
                  className: "realgo-agent-btn",
                  disabled: j === "loading" || Ye,
                  onClick: b,
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
    /* @__PURE__ */ h.jsx("style", { children: eu }),
    /* @__PURE__ */ h.jsxs("button", { type: "button", className: "realgo-agent-button", onClick: () => N(!0), children: [
      /* @__PURE__ */ h.jsx("img", { className: "realgo-agent-logo", src: tu, alt: "" }),
      "ReAlgo"
    ] })
  ] });
}
function vg() {
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
function ru(E, Q) {
  return E.length === 0 ? E : [...E.slice(0, -1), { role: "assistant", content: Q }];
}
function yg(E, Q) {
  if (!Q || E.toLowerCase() !== Q.toLowerCase()) return "";
  switch (Q.toLowerCase()) {
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
function kg(E, Q) {
  if (E.toLowerCase() !== Q.toLowerCase()) return "";
  switch (Q.toLowerCase()) {
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
function Sg(E) {
  var f;
  const Q = [E.hint.trim()];
  return (f = E.question) != null && f.trim() && Q.push(`Вопрос: ${E.question.trim()}`), Q.filter(Boolean).join(`

`);
}
function Rg() {
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
const xg = `
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
`, Dg = 2500, Jg = 6e4, Fg = 2;
function Ug(E, Q) {
  const [f, P] = te.useState("hidden");
  return te.useEffect(() => {
    if (E == null || !Q) return;
    let O = !1, N;
    const q = Date.now();
    let W = 0, L = 0;
    const Y = (M) => {
      O || P(M);
    }, j = async () => {
      L += 1;
      const M = await Q(E).catch(() => null);
      if (!O) {
        if (M == null) {
          if (W += 1, W >= Fg) {
            Y("hidden");
            return;
          }
        } else {
          if (W = 0, M.status === "ready") {
            Y("ready");
            return;
          }
          if (M.status === "none" && L > 1) {
            Y("none");
            return;
          }
          M.status === "generating" && Y("generating");
        }
        if (Date.now() - q >= Jg) {
          P((z) => O || z === "hidden" ? z : "none");
          return;
        }
        N = window.setTimeout(j, Dg);
      }
    };
    return j(), () => {
      O = !0, N !== void 0 && window.clearTimeout(N);
    };
  }, [E, Q]), f;
}
const Tg = new URL("data:image/png;base64,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", import.meta.url).href, Ng = [
  { value: "easy", label: "Легко", icon: "easy" },
  { value: "normal", label: "Средне", icon: "normal" },
  { value: "hard", label: "Тяжело", icon: "hard" }
], Lg = "https://github.com/mxdtrip/freeburger/issues/new?labels=extension&title=" + encodeURIComponent("Расширение: не распознана задача") + "&body=" + encodeURIComponent(`Страница: 
Что ожидали: 
Что произошло: `), Mg = fg + Eg;
function Kg({
  submission: E,
  onSave: Q,
  onFetchCards: f,
  onClose: P,
  onCollapse: O,
  onReview: N,
  onReport: q
}) {
  const [W, L] = te.useState(null), [Y, j] = te.useState("form"), [M, z] = te.useState(""), [Ce, me] = te.useState(null), Z = Ug(
    Y === "success" ? Ce : null,
    f
  );
  function V() {
    if (q) {
      q();
      return;
    }
    window.open(Lg, "_blank", "noopener,noreferrer");
  }
  function ie() {
    if (O) {
      O();
      return;
    }
    if (P) {
      P();
      return;
    }
    window.close();
  }
  function re() {
    if (N) {
      N();
      return;
    }
    window.open(Mg, "_blank", "noopener,noreferrer"), O ? O() : P && P();
  }
  if (E === void 0)
    return /* @__PURE__ */ h.jsx(Nr, { onClose: P, children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-state realgo-state--loading-scene", children: [
      /* @__PURE__ */ h.jsx("div", { className: "realgo-spinner", "aria-label": "Загрузка" }),
      /* @__PURE__ */ h.jsx("span", { className: "realgo-muted", children: "определяем задачу…" })
    ] }) });
  if (E === null)
    return /* @__PURE__ */ h.jsx(Nr, { onClose: P, children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-state realgo-state--no-task-scene", children: [
      /* @__PURE__ */ h.jsx("div", { className: "realgo-state__icon realgo-state__icon--muted", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(Vg, {}) }),
      /* @__PURE__ */ h.jsx("p", { className: "realgo-state__text", children: "Откройте задачу на LeetCode, GeeksforGeeks, HackerRank или Codeforces и отправьте решение — realgo подхватит её автоматически." }),
      /* @__PURE__ */ h.jsx("button", { type: "button", className: "realgo-link", onClick: V, children: "Сообщить об ошибке" })
    ] }) });
  if (Y === "success")
    return /* @__PURE__ */ h.jsx(Nr, { onClose: P, scene: "success", children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-state realgo-state--success-scene", children: [
      /* @__PURE__ */ h.jsx("div", { className: "realgo-state__icon realgo-state__icon--success", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(bi, {}) }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("p", { className: "realgo-state__title realgo-state__title--success", children: "Запланировано" }),
        /* @__PURE__ */ h.jsx("p", { className: "realgo-muted", style: { marginTop: 4 }, children: "Задача добавлена в очередь повторений." })
      ] }),
      Z !== "hidden" && /* @__PURE__ */ h.jsx(Pg, { state: Z, onOpen: re }),
      /* @__PURE__ */ h.jsxs("div", { className: "realgo-state__actions", children: [
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "realgo-btn realgo-btn--ghost realgo-btn--state",
            onClick: ie,
            children: "Свернуть"
          }
        ),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "realgo-btn realgo-btn--primary realgo-btn--state",
            onClick: re,
            children: "К повторению"
          }
        )
      ] })
    ] }) });
  if (Y === "error")
    return /* @__PURE__ */ h.jsx(Nr, { onClose: P, children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-state realgo-state--error-scene", children: [
      /* @__PURE__ */ h.jsx("div", { className: "realgo-state__icon realgo-state__icon--danger", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(Gg, { size: 20 }) }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("p", { className: "realgo-state__title realgo-state__title--danger", children: "Не удалось сохранить" }),
        /* @__PURE__ */ h.jsx("p", { className: "realgo-muted", style: { marginTop: 4 }, children: M })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "realgo-state__actions", children: [
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "realgo-btn realgo-btn--ghost realgo-btn--state",
            onClick: () => j("form"),
            children: "Назад"
          }
        ),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "realgo-btn realgo-btn--primary realgo-btn--state",
            onClick: () => W && Ie(W),
            children: "Повторить"
          }
        )
      ] })
    ] }) });
  const we = Y === "saving";
  async function Ie(Fe) {
    if (we || E == null) return;
    L(Fe), j("saving"), z("");
    const he = {
      ...E,
      userDifficulty: Fe
    };
    try {
      const oe = await Q(he);
      me(
        typeof (oe == null ? void 0 : oe.problemId) == "number" && oe.problemId > 0 ? oe.problemId : null
      ), j("success");
    } catch (oe) {
      j("error"), z(oe instanceof Error ? oe.message : "Не удалось сохранить.");
    }
  }
  return /* @__PURE__ */ h.jsx(Nr, { task: E, onClose: P, children: /* @__PURE__ */ h.jsxs("div", { className: "realgo-body", children: [
    /* @__PURE__ */ h.jsx(
      qg,
      {
        title: "Как далась задача?",
        options: Ng,
        value: W,
        onPick: Ie,
        disabled: we
      }
    ),
    /* @__PURE__ */ h.jsx("p", { className: "realgo-hint", role: "status", children: we ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
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
function Pg({
  state: E,
  onOpen: Q
}) {
  return /* @__PURE__ */ h.jsxs("p", { className: `realgo-cards realgo-cards--${E}`, role: "status", children: [
    E === "generating" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
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
    E === "ready" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx("span", { className: "realgo-cards__check", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(bi, { size: 13 }) }),
      "Карточки готовы",
      /* @__PURE__ */ h.jsx("button", { type: "button", className: "realgo-link realgo-cards__open", onClick: Q, children: "открыть" })
    ] }),
    E === "none" && /* @__PURE__ */ h.jsx(h.Fragment, { children: "Карточки к задаче пока не готовы" })
  ] });
}
function Nr({
  children: E,
  task: Q,
  onClose: f,
  scene: P
}) {
  var N;
  const O = [
    "realgo-popup",
    P === "success" ? "realgo-popup--success" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h.jsxs("div", { className: O, children: [
    /* @__PURE__ */ h.jsx("style", { children: xg }),
    /* @__PURE__ */ h.jsxs("div", { className: "realgo-header", children: [
      /* @__PURE__ */ h.jsxs("span", { className: "realgo-brand", children: [
        /* @__PURE__ */ h.jsx(Hg, { size: 20 }),
        "ReAlgo",
        /* @__PURE__ */ h.jsx("span", { className: "realgo-path", children: "~/ext" })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "realgo-header__right", children: f && /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "realgo-iconbtn",
          onClick: f,
          "aria-label": "Закрыть",
          children: /* @__PURE__ */ h.jsx(Yg, {})
        }
      ) })
    ] }),
    Q && /* @__PURE__ */ h.jsxs("div", { className: "realgo-task", children: [
      /* @__PURE__ */ h.jsx("span", { className: "realgo-eyebrow", children: "Задача выполнена успешно!" }),
      /* @__PURE__ */ h.jsx("p", { className: "realgo-task__title", children: Q.taskTitle }),
      /* @__PURE__ */ h.jsxs("div", { className: "realgo-task__meta", children: [
        /* @__PURE__ */ h.jsx("span", { className: `realgo-tag ${zg(Q.platform)}`, children: Q.platform }),
        (N = Q.tags) == null ? void 0 : N.map((q) => /* @__PURE__ */ h.jsx("span", { className: "realgo-tag", children: q }, q))
      ] })
    ] }),
    E
  ] });
}
function qg({
  title: E,
  options: Q,
  value: f,
  onPick: P,
  disabled: O
}) {
  return /* @__PURE__ */ h.jsxs("div", { className: "realgo-section", children: [
    /* @__PURE__ */ h.jsx("div", { className: "realgo-section__head", children: /* @__PURE__ */ h.jsx("h3", { className: "realgo-section__title", children: E }) }),
    /* @__PURE__ */ h.jsx("div", { className: "realgo-choices", role: "group", "aria-label": E, children: Q.map((N) => {
      const q = f === N.value;
      return /* @__PURE__ */ h.jsxs(
        "button",
        {
          type: "button",
          className: "realgo-choice",
          "data-difficulty": N.icon,
          "aria-pressed": q,
          disabled: O,
          onClick: () => P(N.value),
          children: [
            /* @__PURE__ */ h.jsx("span", { className: "realgo-choice__icon", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(Og, { kind: N.icon }) }),
            /* @__PURE__ */ h.jsx("span", { className: "realgo-choice__label", children: N.label })
          ]
        },
        N.value
      );
    }) })
  ] });
}
function Hg({ size: E = 16 }) {
  return /* @__PURE__ */ h.jsx(
    "img",
    {
      alt: "",
      "aria-hidden": "true",
      className: "realgo-brand__mark",
      decoding: "async",
      height: E,
      src: Tg,
      width: E
    }
  );
}
function bi({ size: E = 18 }) {
  return /* @__PURE__ */ h.jsx(
    "svg",
    {
      width: E,
      height: E,
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
function Og({ kind: E }) {
  return E === "easy" ? /* @__PURE__ */ h.jsx(bi, {}) : E === "normal" ? /* @__PURE__ */ h.jsx(
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
function Vg() {
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
function Gg({ size: E = 13 }) {
  return /* @__PURE__ */ h.jsxs(
    "svg",
    {
      width: E,
      height: E,
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
function Yg() {
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
function zg(E) {
  switch (E.toLowerCase()) {
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
const ji = 3800, Xg = 1800, jg = Xg + ji, Wi = jg + 120, lu = Wi + 900, Wg = lu + 620, rn = window.matchMedia("(prefers-reduced-motion: reduce)").matches, Xo = (E) => new Promise((Q) => window.setTimeout(Q, E)), Cn = /* @__PURE__ */ new Map(), zi = /* @__PURE__ */ new Set(), iu = window.chrome ?? {};
iu.storage = {
  local: {
    async get(E) {
      return E === null ? Object.fromEntries(Cn) : { [E]: Cn.get(E) };
    },
    async set(E) {
      const Q = {};
      Object.entries(E).forEach(([f, P]) => {
        Q[f] = { oldValue: Cn.get(f), newValue: P }, Cn.set(f, P);
      }), zi.forEach((f) => f(Q, "local"));
    },
    async remove(E) {
      (Array.isArray(E) ? E : [E]).forEach((Q) => Cn.delete(Q));
    }
  },
  onChanged: {
    addListener(E) {
      zi.add(E);
    },
    removeListener(E) {
      zi.delete(E);
    }
  }
};
window.chrome || (window.chrome = iu);
const Qn = {
  platform: "leetcode",
  taskTitle: "Longest Substring Without Repeating Characters",
  taskUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
  platformTaskSlug: "longest-substring-without-repeating-characters",
  difficulty: "Medium",
  tags: ["Hash Table", "String", "Sliding Window"],
  taskDescription: "Find the length of the longest substring without repeating characters."
}, Zg = `${Qn.platform}:${Qn.platformTaskSlug}:${Qn.taskUrl}`, ou = Lr + Zg, bg = {
  eventId: "deck-demo-longest-substring",
  platform: "leetcode",
  taskTitle: Qn.taskTitle,
  taskUrl: Qn.taskUrl,
  platformTaskSlug: Qn.platformTaskSlug,
  tags: ["sliding window", "hash table"],
  difficulty: "medium",
  submitResult: "accepted",
  submittedAt: "2026-07-30T12:00:00.000Z"
}, zn = [
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
function _g() {
  return {
    messages: [
      { role: "user", content: "Дай мягкий намёк, без решения." },
      { role: "assistant", content: zn[0].hint },
      { role: "user", content: "Можно конкретнее — всё ещё без полного решения." },
      { role: "assistant", content: zn[1].hint },
      { role: "user", content: "Покажи последний уровень разбора." },
      { role: "assistant", content: zn[2].hint }
    ],
    hintLevel: 3,
    hintsUsed: 3,
    cooldownEndAt: null,
    patterns: zn[2].patterns,
    problemKnown: !0,
    patternUsed: !1,
    savedAt: Date.now()
  };
}
function $g({ mode: E }) {
  const Q = te.useMemo(() => {
    let O = 0;
    return async () => (await Xo(180), O += 1, O < 2 ? { status: "generating", cardsCount: 0 } : { status: "ready", cardsCount: 3 });
  }, []);
  async function f(O) {
    return await Xo(620), { accepted: !0, duplicate: !1, problemId: 42, status: "recorded", nextReviewAt: null };
  }
  async function P(O, N) {
    const q = zn[Math.max(0, Math.min(zn.length - 1, O.hintLevel - 1))], W = q.hint.split(" ");
    await Xo(260);
    for (let L = 0; L < W.length; L += 3)
      N(W.slice(L, L + 3).join(" ") + (L + 3 < W.length ? " " : "")), await Xo(82);
    return q;
  }
  return E === "rating" ? /* @__PURE__ */ Xi.createElement(Kg, { submission: bg, onSave: f, onFetchCards: Q, onClose: () => {
  }, onReview: () => {
  } }) : /* @__PURE__ */ Xi.createElement(wg, { task: Qn, onAsk: P, variant: "panel" });
}
let In = null, Re = null, jo = null, gt = null, Qt = null, ct = [], Xn = null;
function Au() {
  ct.forEach((E) => window.clearTimeout(E)), ct = [], Xn && (window.removeEventListener("realgo:macbookready", Xn), Xn = null);
}
function ed() {
  Au(), Re == null || Re.classList.remove("is-product-mounted", "is-product-screen", "is-product-focus", "is-camera-settled"), Re && delete Re.dataset.productTimelineStarted, In == null || In.unmount(), In = null, gt == null || gt.remove(), gt = null, Qt == null || Qt.remove(), Qt = null, Re = null, jo = null;
}
function _i(E) {
  var Ce, me, Z, V;
  const Q = document.querySelector(".slide.is-active.slide-macbook");
  if (!Q) {
    ed();
    return;
  }
  const f = E == null ? void 0 : E.detail, P = (f == null ? void 0 : f.logicalSlide) instanceof HTMLElement ? f.logicalSlide : null, N = ((Ce = P == null ? void 0 : P.querySelector(".macbook-3d-slot")) == null ? void 0 : Ce.dataset.macbookMode) ?? ((me = document.getElementById("stage")) == null ? void 0 : me.dataset.productMode) ?? ((Z = Q.querySelector(".macbook-3d-slot")) == null ? void 0 : Z.dataset.macbookMode) ?? "extension";
  if (Q === Re && N === jo) return;
  Au();
  const q = !!(Re && gt && Qt && In), W = Q === Re, L = jo ?? void 0, Y = (gt == null ? void 0 : gt.offsetHeight) ?? null;
  Re == null || Re.classList.remove("is-product-screen", "is-product-focus"), W || Re == null || Re.classList.remove("is-product-mounted", "is-camera-settled"), Re && delete Re.dataset.productTimelineStarted, N === "stages" ? Cn.set(ou, _g()) : Cn.delete(ou), q || (Qt = document.createElement("div"), Qt.setAttribute("aria-label", "Интерактивная демонстрация интерфейса расширения ReAlgo"), Qt.innerHTML = '<div class="product-focus-dim" aria-hidden="true"></div><div class="product-ui-card"><div class="product-ui-glint" aria-hidden="true"></div><div class="product-ui-root"></div></div>', gt = Qt.querySelector(".product-ui-card"), In = cg.createRoot(Qt.querySelector(".product-ui-root")));
  const j = Qt, M = gt;
  j.className = `product-ui-stage product-ui-stage--${N}`, Q.appendChild(j), Re = Q, jo = N, In.render(/* @__PURE__ */ Xi.createElement($g, { mode: N })), Q.classList.add("is-product-mounted"), q && Y && (M.classList.add("is-height-transitioning"), M.style.height = `${Y}px`, requestAnimationFrame(() => {
    ct.push(window.setTimeout(() => {
      var re;
      if (M !== gt) return;
      const ie = (re = M.querySelector(".product-ui-root")) == null ? void 0 : re.scrollHeight;
      if (!ie) {
        M.classList.remove("is-height-transitioning"), M.style.removeProperty("height");
        return;
      }
      M.style.height = `${ie}px`, ct.push(window.setTimeout(() => {
        M === gt && (M.classList.remove("is-height-transitioning"), M.style.removeProperty("height"));
      }, 920));
    }, 50));
  })), q && (Q.classList.add("is-camera-settled"), N !== "extension-intro" && !(N === "extension" && L === "extension-intro") && (Q.classList.add("is-product-focus"), Q.classList.add("is-product-screen"), window.dispatchEvent(new CustomEvent("realgo:productfocus", {
    detail: { slide: Q, immediate: !0 }
  }))));
  function z() {
    if (!(Q !== Re || Q.dataset.productTimelineStarted === "true")) {
      if (Q.dataset.productTimelineStarted = "true", N === "extension-intro")
        rn ? Q.classList.add("is-camera-settled") : ct.push(window.setTimeout(() => Q.classList.add("is-camera-settled"), Wi));
      else if (N === "extension" && q && L === "extension-intro") {
        const ie = () => {
          Q.classList.add("is-product-screen"), ct.push(window.setTimeout(() => {
            Q.classList.add("is-product-focus"), window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide: Q, immediate: rn } }));
          }, rn ? 0 : 620));
        };
        rn ? ie() : ct.push(window.setTimeout(ie, 180));
      } else if (N === "extension") {
        if (rn) {
          Q.classList.add("is-camera-settled", "is-product-screen", "is-product-focus"), window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide: Q, immediate: !0 } }));
          return;
        }
        ct.push(window.setTimeout(() => Q.classList.add("is-camera-settled"), Wi)), ct.push(window.setTimeout(() => Q.classList.add("is-product-screen"), lu)), ct.push(window.setTimeout(() => {
          Q.classList.add("is-product-focus"), window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide: Q } }));
        }, Wg));
      } else if (!q) {
        const ie = () => {
          Q.classList.add("is-camera-settled", "is-product-screen", "is-product-focus"), window.dispatchEvent(new CustomEvent("realgo:productfocus", { detail: { slide: Q, immediate: rn } }));
        };
        rn ? ie() : ct.push(window.setTimeout(ie, ji + 120));
      }
      if (N === "agent") {
        const ie = q || rn ? 980 : ji + 1100;
        ct.push(window.setTimeout(() => {
          var re;
          return (re = M.querySelector(".realgo-agent-btn--hint")) == null ? void 0 : re.click();
        }, ie));
      }
    }
  }
  (V = document.getElementById("stage")) != null && V.classList.contains("has-macbook-3d") ? requestAnimationFrame(z) : (Xn = () => {
    Xn = null, requestAnimationFrame(z);
  }, window.addEventListener("realgo:macbookready", Xn, { once: !0 }));
}
window.addEventListener("realgo:slidechange", _i);
window.addEventListener("DOMContentLoaded", _i, { once: !0 });
document.readyState !== "loading" && _i();
