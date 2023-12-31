/**!
 * Sortable 1.15.1
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function le(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function z(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? le(Object(e), !0).forEach(function(o) {
      xe(n, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : le(Object(e)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return n;
}
function Mt(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mt = function(t) {
    return typeof t;
  } : Mt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mt(n);
}
function xe(n, t, e) {
  return t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function $() {
  return $ = Object.assign || function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    }
    return n;
  }, $.apply(this, arguments);
}
function Me(n, t) {
  if (n == null)
    return {};
  var e = {}, o = Object.keys(n), i, r;
  for (r = 0; r < o.length; r++)
    i = o[r], !(t.indexOf(i) >= 0) && (e[i] = n[i]);
  return e;
}
function Fe(n, t) {
  if (n == null)
    return {};
  var e = Me(n, t), o, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    for (i = 0; i < r.length; i++)
      o = r[i], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(n, o) && (e[o] = n[o]);
  }
  return e;
}
var Re = "1.15.1";
function q(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var V = q(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ct = q(/Edge/i), se = q(/firefox/i), yt = q(/safari/i) && !q(/chrome/i) && !q(/android/i), me = q(/iP(ad|od|hone)/i), ve = q(/chrome/i) && q(/android/i), be = {
  capture: !1,
  passive: !1
};
function w(n, t, e) {
  n.addEventListener(t, e, !V && be);
}
function b(n, t, e) {
  n.removeEventListener(t, e, !V && be);
}
function kt(n, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(t);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(t);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Xe(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function L(n, t, e, o) {
  if (n) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? n.parentNode === e && kt(n, t) : kt(n, t)) || o && n === e)
        return n;
      if (n === e)
        break;
    } while (n = Xe(n));
  }
  return null;
}
var ue = /\s+/g;
function F(n, t, e) {
  if (n && t)
    if (n.classList)
      n.classList[e ? "add" : "remove"](t);
    else {
      var o = (" " + n.className + " ").replace(ue, " ").replace(" " + t + " ", " ");
      n.className = (o + (e ? " " + t : "")).replace(ue, " ");
    }
}
function h(n, t, e) {
  var o = n && n.style;
  if (o) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (e = n.currentStyle), t === void 0 ? e : e[t];
    !(t in o) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), o[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function dt(n, t) {
  var e = "";
  if (typeof n == "string")
    e = n;
  else
    do {
      var o = h(n, "transform");
      o && o !== "none" && (e = o + " " + e);
    } while (!t && (n = n.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(e);
}
function we(n, t, e) {
  if (n) {
    var o = n.getElementsByTagName(t), i = 0, r = o.length;
    if (e)
      for (; i < r; i++)
        e(o[i], i);
    return o;
  }
  return [];
}
function G() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function C(n, t, e, o, i) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var r, a, l, s, u, c, d;
    if (n !== window && n.parentNode && n !== G() ? (r = n.getBoundingClientRect(), a = r.top, l = r.left, s = r.bottom, u = r.right, c = r.height, d = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, c = window.innerHeight, d = window.innerWidth), (t || e) && n !== window && (i = i || n.parentNode, !V))
      do
        if (i && i.getBoundingClientRect && (h(i, "transform") !== "none" || e && h(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          a -= m.top + parseInt(h(i, "border-top-width")), l -= m.left + parseInt(h(i, "border-left-width")), s = a + r.height, u = l + r.width;
          break;
        }
      while (i = i.parentNode);
    if (o && n !== window) {
      var y = dt(i || n), v = y && y.a, E = y && y.d;
      y && (a /= E, l /= v, d /= v, c /= E, s = a + c, u = l + d);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: d,
      height: c
    };
  }
}
function Ee(n) {
  var t = C(n), e = parseInt(h(n, "padding-left")), o = parseInt(h(n, "padding-top")), i = parseInt(h(n, "padding-right")), r = parseInt(h(n, "padding-bottom"));
  return t.top += o + parseInt(h(n, "border-top-width")), t.left += e + parseInt(h(n, "border-left-width")), t.width = n.clientWidth - e - i, t.height = n.clientHeight - o - r, t.bottom = t.top + t.height, t.right = t.left + t.width, t;
}
function fe(n, t, e) {
  for (var o = tt(n, !0), i = C(n)[t]; o; ) {
    var r = C(o)[e], a = void 0;
    if (e === "top" || e === "left" ? a = i >= r : a = i <= r, !a)
      return o;
    if (o === G())
      break;
    o = tt(o, !1);
  }
  return !1;
}
function ct(n, t, e, o) {
  for (var i = 0, r = 0, a = n.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== p.ghost && (o || a[r] !== p.dragged) && L(a[r], e.draggable, n, !1)) {
      if (i === t)
        return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function oe(n, t) {
  for (var e = n.lastElementChild; e && (e === p.ghost || h(e, "display") === "none" || t && !kt(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function Y(n, t) {
  var e = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== p.clone && (!t || kt(n, t)) && e++;
  return e;
}
function de(n) {
  var t = 0, e = 0, o = G();
  if (n)
    do {
      var i = dt(n), r = i.a, a = i.d;
      t += n.scrollLeft * r, e += n.scrollTop * a;
    } while (n !== o && (n = n.parentNode));
  return [t, e];
}
function Ye(n, t) {
  for (var e in n)
    if (n.hasOwnProperty(e)) {
      for (var o in t)
        if (t.hasOwnProperty(o) && t[o] === n[e][o])
          return Number(e);
    }
  return -1;
}
function tt(n, t) {
  if (!n || !n.getBoundingClientRect)
    return G();
  var e = n, o = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var i = h(e);
      if (e.clientWidth < e.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return G();
        if (o || t)
          return e;
        o = !0;
      }
    }
  while (e = e.parentNode);
  return G();
}
function ke(n, t) {
  if (n && t)
    for (var e in t)
      t.hasOwnProperty(e) && (n[e] = t[e]);
  return n;
}
function zt(n, t) {
  return Math.round(n.top) === Math.round(t.top) && Math.round(n.left) === Math.round(t.left) && Math.round(n.height) === Math.round(t.height) && Math.round(n.width) === Math.round(t.width);
}
var _t;
function ye(n, t) {
  return function() {
    if (!_t) {
      var e = arguments, o = this;
      e.length === 1 ? n.call(o, e[0]) : n.apply(o, e), _t = setTimeout(function() {
        _t = void 0;
      }, t);
    }
  };
}
function Be() {
  clearTimeout(_t), _t = void 0;
}
function _e(n, t, e) {
  n.scrollLeft += t, n.scrollTop += e;
}
function De(n) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(n).cloneNode(!0) : e ? e(n).clone(!0)[0] : n.cloneNode(!0);
}
var X = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function He() {
  var n = [], t;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(i) {
          if (!(h(i, "display") === "none" || i === p.ghost)) {
            n.push({
              target: i,
              rect: C(i)
            });
            var r = z({}, n[n.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = dt(i, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(o) {
      n.push(o);
    },
    removeAnimationState: function(o) {
      n.splice(Ye(n, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof o == "function" && o();
        return;
      }
      var r = !1, a = 0;
      n.forEach(function(l) {
        var s = 0, u = l.target, c = u.fromRect, d = C(u), m = u.prevFromRect, y = u.prevToRect, v = l.rect, E = dt(u, !0);
        E && (d.top -= E.f, d.left -= E.e), u.toRect = d, u.thisAnimationDuration && zt(m, d) && !zt(c, d) && // Make sure animatingRect is on line between toRect & fromRect
        (v.top - d.top) / (v.left - d.left) === (c.top - d.top) / (c.left - d.left) && (s = Le(v, m, y, i.options)), zt(d, c) || (u.prevFromRect = c, u.prevToRect = d, s || (s = i.options.animation), i.animate(u, v, d, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof o == "function" && o();
      }, a) : typeof o == "function" && o(), n = [];
    },
    animate: function(o, i, r, a) {
      if (a) {
        h(o, "transition", ""), h(o, "transform", "");
        var l = dt(this.el), s = l && l.a, u = l && l.d, c = (i.left - r.left) / (s || 1), d = (i.top - r.top) / (u || 1);
        o.animatingX = !!c, o.animatingY = !!d, h(o, "transform", "translate3d(" + c + "px," + d + "px,0)"), this.forRepaintDummy = We(o), h(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          h(o, "transition", ""), h(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, a);
      }
    }
  };
}
function We(n) {
  return n.offsetWidth;
}
function Le(n, t, e, o) {
  return Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * o.animation;
}
var lt = [], jt = {
  initializeByDefault: !0
}, Ot = {
  mount: function(t) {
    for (var e in jt)
      jt.hasOwnProperty(e) && !(e in t) && (t[e] = jt[e]);
    lt.forEach(function(o) {
      if (o.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), lt.push(t);
  },
  pluginEvent: function(t, e, o) {
    var i = this;
    this.eventCanceled = !1, o.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = t + "Global";
    lt.forEach(function(a) {
      e[a.pluginName] && (e[a.pluginName][r] && e[a.pluginName][r](z({
        sortable: e
      }, o)), e.options[a.pluginName] && e[a.pluginName][t] && e[a.pluginName][t](z({
        sortable: e
      }, o)));
    });
  },
  initializePlugins: function(t, e, o, i) {
    lt.forEach(function(l) {
      var s = l.pluginName;
      if (!(!t.options[s] && !l.initializeByDefault)) {
        var u = new l(t, e, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, $(o, u.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var a = this.modifyOption(t, r, t.options[r]);
        typeof a < "u" && (t.options[r] = a);
      }
  },
  getEventProperties: function(t, e) {
    var o = {};
    return lt.forEach(function(i) {
      typeof i.eventProperties == "function" && $(o, i.eventProperties.call(e[i.pluginName], t));
    }), o;
  },
  modifyOption: function(t, e, o) {
    var i;
    return lt.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[e] == "function" && (i = r.optionListeners[e].call(t[r.pluginName], o));
    }), i;
  }
};
function Ge(n) {
  var t = n.sortable, e = n.rootEl, o = n.name, i = n.targetEl, r = n.cloneEl, a = n.toEl, l = n.fromEl, s = n.oldIndex, u = n.newIndex, c = n.oldDraggableIndex, d = n.newDraggableIndex, m = n.originalEvent, y = n.putSortable, v = n.extraEventProperties;
  if (t = t || e && e[X], !!t) {
    var E, k = t.options, j = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !V && !Ct ? E = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (E = document.createEvent("Event"), E.initEvent(o, !0, !0)), E.to = a || e, E.from = l || e, E.item = i || e, E.clone = r, E.oldIndex = s, E.newIndex = u, E.oldDraggableIndex = c, E.newDraggableIndex = d, E.originalEvent = m, E.pullMode = y ? y.lastPutMode : void 0;
    var A = z(z({}, v), Ot.getEventProperties(o, t));
    for (var B in A)
      E[B] = A[B];
    e && e.dispatchEvent(E), k[j] && k[j].call(t, E);
  }
}
var ze = ["evt"], N = function(t, e) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = o.evt, r = Fe(o, ze);
  Ot.pluginEvent.bind(p)(t, e, z({
    dragEl: f,
    parentEl: S,
    ghostEl: g,
    rootEl: _,
    nextEl: at,
    lastDownEl: Ft,
    cloneEl: D,
    cloneHidden: J,
    dragStarted: bt,
    putSortable: O,
    activeSortable: p.active,
    originalEvent: i,
    oldIndex: ft,
    oldDraggableIndex: Dt,
    newIndex: R,
    newDraggableIndex: Q,
    hideGhostForTarget: Oe,
    unhideGhostForTarget: Ie,
    cloneNowHidden: function() {
      J = !0;
    },
    cloneNowShown: function() {
      J = !1;
    },
    dispatchSortableEvent: function(l) {
      P({
        sortable: e,
        name: l,
        originalEvent: i
      });
    }
  }, r));
};
function P(n) {
  Ge(z({
    putSortable: O,
    cloneEl: D,
    targetEl: f,
    rootEl: _,
    oldIndex: ft,
    oldDraggableIndex: Dt,
    newIndex: R,
    newDraggableIndex: Q
  }, n));
}
var f, S, g, _, at, Ft, D, J, ft, R, Dt, Q, At, O, ut = !1, Bt = !1, Ht = [], it, H, Ut, qt, ce, he, bt, st, St, Tt = !1, Pt = !1, Rt, I, $t = [], Jt = !1, Wt = [], Gt = typeof document < "u", Nt = me, pe = Ct || V ? "cssFloat" : "float", je = Gt && !ve && !me && "draggable" in document.createElement("div"), Se = function() {
  if (Gt) {
    if (V)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
}(), Te = function(t, e) {
  var o = h(t), i = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), r = ct(t, 0, e), a = ct(t, 1, e), l = r && h(r), s = a && h(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + C(r).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + C(a).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= i && o[pe] === "none" || a && o[pe] === "none" && u + c > i) ? "vertical" : "horizontal";
}, Ue = function(t, e, o) {
  var i = o ? t.left : t.top, r = o ? t.right : t.bottom, a = o ? t.width : t.height, l = o ? e.left : e.top, s = o ? e.right : e.bottom, u = o ? e.width : e.height;
  return i === l || r === s || i + a / 2 === l + u / 2;
}, qe = function(t, e) {
  var o;
  return Ht.some(function(i) {
    var r = i[X].options.emptyInsertThreshold;
    if (!(!r || oe(i))) {
      var a = C(i), l = t >= a.left - r && t <= a.right + r, s = e >= a.top - r && e <= a.bottom + r;
      if (l && s)
        return o = i;
    }
  }), o;
}, Ce = function(t) {
  function e(r, a) {
    return function(l, s, u, c) {
      var d = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (r == null && (a || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return e(r(l, s, u, c), a)(l, s, u, c);
      var m = (a ? l : s).options.group.name;
      return r === !0 || typeof r == "string" && r === m || r.join && r.indexOf(m) > -1;
    };
  }
  var o = {}, i = t.group;
  (!i || Mt(i) != "object") && (i = {
    name: i
  }), o.name = i.name, o.checkPull = e(i.pull, !0), o.checkPut = e(i.put), o.revertClone = i.revertClone, t.group = o;
}, Oe = function() {
  !Se && g && h(g, "display", "none");
}, Ie = function() {
  !Se && g && h(g, "display", "");
};
Gt && !ve && document.addEventListener("click", function(n) {
  if (Bt)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), Bt = !1, !1;
}, !0);
var rt = function(t) {
  if (f) {
    t = t.touches ? t.touches[0] : t;
    var e = qe(t.clientX, t.clientY);
    if (e) {
      var o = {};
      for (var i in t)
        t.hasOwnProperty(i) && (o[i] = t[i]);
      o.target = o.rootEl = e, o.preventDefault = void 0, o.stopPropagation = void 0, e[X]._onDragOver(o);
    }
  }
}, $e = function(t) {
  f && f.parentNode[X]._isOutsideThisEl(t.target);
};
function p(n, t) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = t = $({}, t), n[X] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Te(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && !yt,
    emptyInsertThreshold: 5
  };
  Ot.initializePlugins(this, n, e);
  for (var o in e)
    !(o in t) && (t[o] = e[o]);
  Ce(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : je, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? w(n, "pointerdown", this._onTapStart) : (w(n, "mousedown", this._onTapStart), w(n, "touchstart", this._onTapStart)), this.nativeDraggable && (w(n, "dragover", this), w(n, "dragenter", this)), Ht.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), $(this, He());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (st = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, f) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, o = this.el, i = this.options, r = i.preventOnFilter, a = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (l || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, c = i.filter;
      if (nn(o), !f && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && yt && s && s.tagName.toUpperCase() === "SELECT") && (s = L(s, i.draggable, o, !1), !(s && s.animated) && Ft !== s)) {
        if (ft = Y(s), Dt = Y(s, i.draggable), typeof c == "function") {
          if (c.call(this, t, s, this)) {
            P({
              sortable: e,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), N("filter", e, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(d) {
          if (d = L(u, d.trim(), o, !1), d)
            return P({
              sortable: e,
              rootEl: d,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), N("filter", e, {
              evt: t
            }), !0;
        }), c)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        i.handle && !L(u, i.handle, o, !1) || this._prepareDragStart(t, l, s);
      }
    }
  },
  _prepareDragStart: function(t, e, o) {
    var i = this, r = i.el, a = i.options, l = r.ownerDocument, s;
    if (o && !f && o.parentNode === r) {
      var u = C(o);
      if (_ = r, f = o, S = f.parentNode, at = f.nextSibling, Ft = o, At = a.group, p.dragged = f, it = {
        target: f,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, ce = it.clientX - u.left, he = it.clientY - u.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, f.style["will-change"] = "all", s = function() {
        if (N("delayEnded", i, {
          evt: t
        }), p.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !se && i.nativeDraggable && (f.draggable = !0), i._triggerDragStart(t, e), P({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), F(f, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(c) {
        we(f, c.trim(), Vt);
      }), w(l, "dragover", rt), w(l, "mousemove", rt), w(l, "touchmove", rt), w(l, "mouseup", i._onDrop), w(l, "touchend", i._onDrop), w(l, "touchcancel", i._onDrop), se && this.nativeDraggable && (this.options.touchStartThreshold = 4, f.draggable = !0), N("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || e) && (!this.nativeDraggable || !(Ct || V))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        w(l, "mouseup", i._disableDelayedDrag), w(l, "touchend", i._disableDelayedDrag), w(l, "touchcancel", i._disableDelayedDrag), w(l, "mousemove", i._delayedDragTouchMoveHandler), w(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && w(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    f && Vt(f), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    b(t, "mouseup", this._disableDelayedDrag), b(t, "touchend", this._disableDelayedDrag), b(t, "touchcancel", this._disableDelayedDrag), b(t, "mousemove", this._delayedDragTouchMoveHandler), b(t, "touchmove", this._delayedDragTouchMoveHandler), b(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? w(document, "pointermove", this._onTouchMove) : e ? w(document, "touchmove", this._onTouchMove) : w(document, "mousemove", this._onTouchMove) : (w(f, "dragend", this), w(_, "dragstart", this._onDragStart));
    try {
      document.selection ? Xt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (ut = !1, _ && f) {
      N("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && w(document, "dragover", $e);
      var o = this.options;
      !t && F(f, o.dragClass, !1), F(f, o.ghostClass, !0), p.active = this, t && this._appendGhost(), P({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (H) {
      this._lastX = H.clientX, this._lastY = H.clientY, Oe();
      for (var t = document.elementFromPoint(H.clientX, H.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(H.clientX, H.clientY), t !== e); )
        e = t;
      if (f.parentNode[X]._isOutsideThisEl(t), e)
        do {
          if (e[X]) {
            var o = void 0;
            if (o = e[X]._onDragOver({
              clientX: H.clientX,
              clientY: H.clientY,
              target: t,
              rootEl: e
            }), o && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = e.parentNode);
      Ie();
    }
  },
  _onTouchMove: function(t) {
    if (it) {
      var e = this.options, o = e.fallbackTolerance, i = e.fallbackOffset, r = t.touches ? t.touches[0] : t, a = g && dt(g, !0), l = g && a && a.a, s = g && a && a.d, u = Nt && I && de(I), c = (r.clientX - it.clientX + i.x) / (l || 1) + (u ? u[0] - $t[0] : 0) / (l || 1), d = (r.clientY - it.clientY + i.y) / (s || 1) + (u ? u[1] - $t[1] : 0) / (s || 1);
      if (!p.active && !ut) {
        if (o && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < o)
          return;
        this._onDragStart(t, !0);
      }
      if (g) {
        a ? (a.e += c - (Ut || 0), a.f += d - (qt || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: d
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(g, "webkitTransform", m), h(g, "mozTransform", m), h(g, "msTransform", m), h(g, "transform", m), Ut = c, qt = d, H = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!g) {
      var t = this.options.fallbackOnBody ? document.body : _, e = C(f, !0, Nt, !0, t), o = this.options;
      if (Nt) {
        for (I = t; h(I, "position") === "static" && h(I, "transform") === "none" && I !== document; )
          I = I.parentNode;
        I !== document.body && I !== document.documentElement ? (I === document && (I = G()), e.top += I.scrollTop, e.left += I.scrollLeft) : I = G(), $t = de(I);
      }
      g = f.cloneNode(!0), F(g, o.ghostClass, !1), F(g, o.fallbackClass, !0), F(g, o.dragClass, !0), h(g, "transition", ""), h(g, "transform", ""), h(g, "box-sizing", "border-box"), h(g, "margin", 0), h(g, "top", e.top), h(g, "left", e.left), h(g, "width", e.width), h(g, "height", e.height), h(g, "opacity", "0.8"), h(g, "position", Nt ? "absolute" : "fixed"), h(g, "zIndex", "100000"), h(g, "pointerEvents", "none"), p.ghost = g, t.appendChild(g), h(g, "transform-origin", ce / parseInt(g.style.width) * 100 + "% " + he / parseInt(g.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var o = this, i = t.dataTransfer, r = o.options;
    if (N("dragStart", this, {
      evt: t
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    N("setupClone", this), p.eventCanceled || (D = De(f), D.removeAttribute("id"), D.draggable = !1, D.style["will-change"] = "", this._hideClone(), F(D, this.options.chosenClass, !1), p.clone = D), o.cloneId = Xt(function() {
      N("clone", o), !p.eventCanceled && (o.options.removeCloneOnHide || _.insertBefore(D, f), o._hideClone(), P({
        sortable: o,
        name: "clone"
      }));
    }), !e && F(f, r.dragClass, !0), e ? (Bt = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (b(document, "mouseup", o._onDrop), b(document, "touchend", o._onDrop), b(document, "touchcancel", o._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(o, i, f)), w(document, "drop", o), h(f, "transform", "translateZ(0)")), ut = !0, o._dragStartId = Xt(o._dragStarted.bind(o, e, t)), w(document, "selectstart", o), bt = !0, yt && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, o = t.target, i, r, a, l = this.options, s = l.group, u = p.active, c = At === s, d = l.sort, m = O || u, y, v = this, E = !1;
    if (Jt)
      return;
    function k(vt, Pe) {
      N(vt, v, z({
        evt: t,
        isOwner: c,
        axis: y ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: r,
        canSort: d,
        fromSortable: m,
        target: o,
        completed: A,
        onMove: function(ae, Ne) {
          return xt(_, e, f, i, ae, C(ae), t, Ne);
        },
        changed: B
      }, Pe));
    }
    function j() {
      k("dragOverAnimationCapture"), v.captureAnimationState(), v !== m && m.captureAnimationState();
    }
    function A(vt) {
      return k("dragOverCompleted", {
        insertion: vt
      }), vt && (c ? u._hideClone() : u._showClone(v), v !== m && (F(f, O ? O.options.ghostClass : u.options.ghostClass, !1), F(f, l.ghostClass, !0)), O !== v && v !== p.active ? O = v : v === p.active && O && (O = null), m === v && (v._ignoreWhileAnimating = o), v.animateAll(function() {
        k("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
      }), v !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (o === f && !f.animated || o === e && !o.animated) && (st = null), !l.dragoverBubble && !t.rootEl && o !== document && (f.parentNode[X]._isOutsideThisEl(t.target), !vt && rt(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), E = !0;
    }
    function B() {
      R = Y(f), Q = Y(f, l.draggable), P({
        sortable: v,
        name: "change",
        toEl: e,
        newIndex: R,
        newDraggableIndex: Q,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), o = L(o, l.draggable, e, !0), k("dragOver"), p.eventCanceled)
      return E;
    if (f.contains(t.target) || o.animated && o.animatingX && o.animatingY || v._ignoreWhileAnimating === o)
      return A(!1);
    if (Bt = !1, u && !l.disabled && (c ? d || (a = S !== _) : O === this || (this.lastPutMode = At.checkPull(this, u, f, t)) && s.checkPut(this, u, f, t))) {
      if (y = this._getDirection(t, o) === "vertical", i = C(f), k("dragOverValid"), p.eventCanceled)
        return E;
      if (a)
        return S = _, j(), this._hideClone(), k("revert"), p.eventCanceled || (at ? _.insertBefore(f, at) : _.appendChild(f)), A(!0);
      var x = oe(e, l.draggable);
      if (!x || Qe(t, y, this) && !x.animated) {
        if (x === f)
          return A(!1);
        if (x && e === t.target && (o = x), o && (r = C(o)), xt(_, e, f, i, o, r, t, !!o) !== !1)
          return j(), x && x.nextSibling ? e.insertBefore(f, x.nextSibling) : e.appendChild(f), S = e, B(), A(!0);
      } else if (x && Ze(t, y, this)) {
        var et = ct(e, 0, l, !0);
        if (et === f)
          return A(!1);
        if (o = et, r = C(o), xt(_, e, f, i, o, r, t, !1) !== !1)
          return j(), e.insertBefore(f, et), S = e, B(), A(!0);
      } else if (o.parentNode === e) {
        r = C(o);
        var W = 0, nt, ht = f.parentNode !== e, M = !Ue(f.animated && f.toRect || i, o.animated && o.toRect || r, y), pt = y ? "top" : "left", K = fe(o, "top", "top") || fe(f, "top", "top"), gt = K ? K.scrollTop : void 0;
        st !== o && (nt = r[pt], Tt = !1, Pt = !M && l.invertSwap || ht), W = Je(t, o, r, y, M ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Pt, st === o);
        var U;
        if (W !== 0) {
          var ot = Y(f);
          do
            ot -= W, U = S.children[ot];
          while (U && (h(U, "display") === "none" || U === g));
        }
        if (W === 0 || U === o)
          return A(!1);
        st = o, St = W;
        var mt = o.nextElementSibling, Z = !1;
        Z = W === 1;
        var It = xt(_, e, f, i, o, r, t, Z);
        if (It !== !1)
          return (It === 1 || It === -1) && (Z = It === 1), Jt = !0, setTimeout(Ke, 30), j(), Z && !mt ? e.appendChild(f) : o.parentNode.insertBefore(f, Z ? mt : o), K && _e(K, 0, gt - K.scrollTop), S = f.parentNode, nt !== void 0 && !Pt && (Rt = Math.abs(nt - C(o)[pt])), B(), A(!0);
      }
      if (e.contains(f))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    b(document, "mousemove", this._onTouchMove), b(document, "touchmove", this._onTouchMove), b(document, "pointermove", this._onTouchMove), b(document, "dragover", rt), b(document, "mousemove", rt), b(document, "touchmove", rt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    b(t, "mouseup", this._onDrop), b(t, "touchend", this._onDrop), b(t, "pointerup", this._onDrop), b(t, "touchcancel", this._onDrop), b(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, o = this.options;
    if (R = Y(f), Q = Y(f, o.draggable), N("drop", this, {
      evt: t
    }), S = f && f.parentNode, R = Y(f), Q = Y(f, o.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    ut = !1, Pt = !1, Tt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), te(this.cloneId), te(this._dragStartId), this.nativeDraggable && (b(document, "drop", this), b(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), yt && h(document.body, "user-select", ""), h(f, "transform", ""), t && (bt && (t.cancelable && t.preventDefault(), !o.dropBubble && t.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), (_ === S || O && O.lastPutMode !== "clone") && D && D.parentNode && D.parentNode.removeChild(D), f && (this.nativeDraggable && b(f, "dragend", this), Vt(f), f.style["will-change"] = "", bt && !ut && F(f, O ? O.options.ghostClass : this.options.ghostClass, !1), F(f, this.options.chosenClass, !1), P({
      sortable: this,
      name: "unchoose",
      toEl: S,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), _ !== S ? (R >= 0 && (P({
      rootEl: S,
      name: "add",
      toEl: S,
      fromEl: _,
      originalEvent: t
    }), P({
      sortable: this,
      name: "remove",
      toEl: S,
      originalEvent: t
    }), P({
      rootEl: S,
      name: "sort",
      toEl: S,
      fromEl: _,
      originalEvent: t
    }), P({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: t
    })), O && O.save()) : R !== ft && R >= 0 && (P({
      sortable: this,
      name: "update",
      toEl: S,
      originalEvent: t
    }), P({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: t
    })), p.active && ((R == null || R === -1) && (R = ft, Q = Dt), P({
      sortable: this,
      name: "end",
      toEl: S,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    N("nulling", this), _ = f = S = g = at = D = Ft = J = it = H = bt = R = Q = ft = Dt = st = St = O = At = p.dragged = p.ghost = p.clone = p.active = null, Wt.forEach(function(t) {
      t.checked = !0;
    }), Wt.length = Ut = qt = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        f && (this._onDragOver(t), Ve(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], e, o = this.el.children, i = 0, r = o.length, a = this.options; i < r; i++)
      e = o[i], L(e, a.draggable, this.el, !1) && t.push(e.getAttribute(a.dataIdAttr) || en(e));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, e) {
    var o = {}, i = this.el;
    this.toArray().forEach(function(r, a) {
      var l = i.children[a];
      L(l, this.options.draggable, i, !1) && (o[r] = l);
    }, this), e && this.captureAnimationState(), t.forEach(function(r) {
      o[r] && (i.removeChild(o[r]), i.appendChild(o[r]));
    }), e && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, e) {
    return L(t, e || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, e) {
    var o = this.options;
    if (e === void 0)
      return o[t];
    var i = Ot.modifyOption(this, t, e);
    typeof i < "u" ? o[t] = i : o[t] = e, t === "group" && Ce(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    N("destroy", this);
    var t = this.el;
    t[X] = null, b(t, "mousedown", this._onTapStart), b(t, "touchstart", this._onTapStart), b(t, "pointerdown", this._onTapStart), this.nativeDraggable && (b(t, "dragover", this), b(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ht.splice(Ht.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!J) {
      if (N("hideClone", this), p.eventCanceled)
        return;
      h(D, "display", "none"), this.options.removeCloneOnHide && D.parentNode && D.parentNode.removeChild(D), J = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (J) {
      if (N("showClone", this), p.eventCanceled)
        return;
      f.parentNode == _ && !this.options.group.revertClone ? _.insertBefore(D, f) : at ? _.insertBefore(D, at) : _.appendChild(D), this.options.group.revertClone && this.animate(f, D), h(D, "display", ""), J = !1;
    }
  }
};
function Ve(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function xt(n, t, e, o, i, r, a, l) {
  var s, u = n[X], c = u.options.onMove, d;
  return window.CustomEvent && !V && !Ct ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = n, s.dragged = e, s.draggedRect = o, s.related = i || t, s.relatedRect = r || C(t), s.willInsertAfter = l, s.originalEvent = a, n.dispatchEvent(s), c && (d = c.call(u, s, a)), d;
}
function Vt(n) {
  n.draggable = !1;
}
function Ke() {
  Jt = !1;
}
function Ze(n, t, e) {
  var o = C(ct(e.el, 0, e.options, !0)), i = Ee(e.el), r = 10;
  return t ? n.clientX < i.left - r || n.clientY < o.top && n.clientX < o.right : n.clientY < i.top - r || n.clientY < o.bottom && n.clientX < o.left;
}
function Qe(n, t, e) {
  var o = C(oe(e.el, e.options.draggable)), i = Ee(e.el), r = 10;
  return t ? n.clientX > i.right + r || n.clientY > o.bottom && n.clientX > o.left : n.clientY > i.bottom + r || n.clientX > o.right && n.clientY > o.top;
}
function Je(n, t, e, o, i, r, a, l) {
  var s = o ? n.clientY : n.clientX, u = o ? e.height : e.width, c = o ? e.top : e.left, d = o ? e.bottom : e.right, m = !1;
  if (!a) {
    if (l && Rt < u * i) {
      if (!Tt && (St === 1 ? s > c + u * r / 2 : s < d - u * r / 2) && (Tt = !0), Tt)
        m = !0;
      else if (St === 1 ? s < c + Rt : s > d - Rt)
        return -St;
    } else if (s > c + u * (1 - i) / 2 && s < d - u * (1 - i) / 2)
      return tn(t);
  }
  return m = m || a, m && (s < c + u * r / 2 || s > d - u * r / 2) ? s > c + u / 2 ? 1 : -1 : 0;
}
function tn(n) {
  return Y(f) < Y(n) ? 1 : -1;
}
function en(n) {
  for (var t = n.tagName + n.className + n.src + n.href + n.textContent, e = t.length, o = 0; e--; )
    o += t.charCodeAt(e);
  return o.toString(36);
}
function nn(n) {
  Wt.length = 0;
  for (var t = n.getElementsByTagName("input"), e = t.length; e--; ) {
    var o = t[e];
    o.checked && Wt.push(o);
  }
}
function Xt(n) {
  return setTimeout(n, 0);
}
function te(n) {
  return clearTimeout(n);
}
Gt && w(document, "touchmove", function(n) {
  (p.active || ut) && n.cancelable && n.preventDefault();
});
p.utils = {
  on: w,
  off: b,
  css: h,
  find: we,
  is: function(t, e) {
    return !!L(t, e, t, !1);
  },
  extend: ke,
  throttle: ye,
  closest: L,
  toggleClass: F,
  clone: De,
  index: Y,
  nextTick: Xt,
  cancelNextTick: te,
  detectDirection: Te,
  getChild: ct
};
p.get = function(n) {
  return n[X];
};
p.mount = function() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (p.utils = z(z({}, p.utils), o.utils)), Ot.mount(o);
  });
};
p.create = function(n, t) {
  return new p(n, t);
};
p.version = Re;
var T = [], wt, ee, ne = !1, Kt, Zt, Lt, Et;
function on() {
  function n() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return n.prototype = {
    dragStarted: function(e) {
      var o = e.originalEvent;
      this.sortable.nativeDraggable ? w(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? w(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? w(document, "touchmove", this._handleFallbackAutoScroll) : w(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var o = e.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? b(document, "dragover", this._handleAutoScroll) : (b(document, "pointermove", this._handleFallbackAutoScroll), b(document, "touchmove", this._handleFallbackAutoScroll), b(document, "mousemove", this._handleFallbackAutoScroll)), ge(), Yt(), Be();
    },
    nulling: function() {
      Lt = ee = wt = ne = Et = Kt = Zt = null, T.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, o) {
      var i = this, r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = document.elementFromPoint(r, a);
      if (Lt = e, o || this.options.forceAutoScrollFallback || Ct || V || yt) {
        Qt(e, this.options, l, o);
        var s = tt(l, !0);
        ne && (!Et || r !== Kt || a !== Zt) && (Et && ge(), Et = setInterval(function() {
          var u = tt(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, Yt()), Qt(e, i.options, u, o);
        }, 10), Kt = r, Zt = a);
      } else {
        if (!this.options.bubbleScroll || tt(l, !0) === G()) {
          Yt();
          return;
        }
        Qt(e, this.options, tt(l, !1), !1);
      }
    }
  }, $(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Yt() {
  T.forEach(function(n) {
    clearInterval(n.pid);
  }), T = [];
}
function ge() {
  clearInterval(Et);
}
var Qt = ye(function(n, t, e, o) {
  if (t.scroll) {
    var i = (n.touches ? n.touches[0] : n).clientX, r = (n.touches ? n.touches[0] : n).clientY, a = t.scrollSensitivity, l = t.scrollSpeed, s = G(), u = !1, c;
    ee !== e && (ee = e, Yt(), wt = t.scroll, c = t.scrollFn, wt === !0 && (wt = tt(e, !0)));
    var d = 0, m = wt;
    do {
      var y = m, v = C(y), E = v.top, k = v.bottom, j = v.left, A = v.right, B = v.width, x = v.height, et = void 0, W = void 0, nt = y.scrollWidth, ht = y.scrollHeight, M = h(y), pt = y.scrollLeft, K = y.scrollTop;
      y === s ? (et = B < nt && (M.overflowX === "auto" || M.overflowX === "scroll" || M.overflowX === "visible"), W = x < ht && (M.overflowY === "auto" || M.overflowY === "scroll" || M.overflowY === "visible")) : (et = B < nt && (M.overflowX === "auto" || M.overflowX === "scroll"), W = x < ht && (M.overflowY === "auto" || M.overflowY === "scroll"));
      var gt = et && (Math.abs(A - i) <= a && pt + B < nt) - (Math.abs(j - i) <= a && !!pt), U = W && (Math.abs(k - r) <= a && K + x < ht) - (Math.abs(E - r) <= a && !!K);
      if (!T[d])
        for (var ot = 0; ot <= d; ot++)
          T[ot] || (T[ot] = {});
      (T[d].vx != gt || T[d].vy != U || T[d].el !== y) && (T[d].el = y, T[d].vx = gt, T[d].vy = U, clearInterval(T[d].pid), (gt != 0 || U != 0) && (u = !0, T[d].pid = setInterval((function() {
        o && this.layer === 0 && p.active._onTouchMove(Lt);
        var mt = T[this.layer].vy ? T[this.layer].vy * l : 0, Z = T[this.layer].vx ? T[this.layer].vx * l : 0;
        typeof c == "function" && c.call(p.dragged.parentNode[X], Z, mt, n, Lt, T[this.layer].el) !== "continue" || _e(T[this.layer].el, Z, mt);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && m !== s && (m = tt(m, !1)));
    ne = u;
  }
}, 30), Ae = function(t) {
  var e = t.originalEvent, o = t.putSortable, i = t.dragEl, r = t.activeSortable, a = t.dispatchSortableEvent, l = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (e) {
    var u = o || r;
    l();
    var c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, d = document.elementFromPoint(c.clientX, c.clientY);
    s(), u && !u.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: o
    }));
  }
};
function ie() {
}
ie.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, o = t.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var i = ct(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(e, i) : this.sortable.el.appendChild(e), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Ae
};
$(ie, {
  pluginName: "revertOnSpill"
});
function re() {
}
re.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, o = t.putSortable, i = o || this.sortable;
    i.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), i.animateAll();
  },
  drop: Ae
};
$(re, {
  pluginName: "removeOnSpill"
});
p.mount(new on());
p.mount(re, ie);
htmx.onLoad(function(n) {
  let t = n.querySelectorAll("#items");
  for (let e = 0; e < t.length; e++) {
    let o = o[e];
    new p(o, {
      draggable: ".draggable",
      handle: ".handle"
    });
  }
});
