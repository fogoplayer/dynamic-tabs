(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };

  // node_modules/tslib/tslib.es6.mjs
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
    }
  });

  // node_modules/@ionic/core/dist/esm-es5/index-b32cad98.js
  var win;
  var init_index_b32cad98 = __esm({
    "node_modules/@ionic/core/dist/esm-es5/index-b32cad98.js"() {
      win = typeof window !== "undefined" ? window : void 0;
    }
  });

  // node_modules/@ionic/core/dist/esm-es5/helpers-f586db1c.js
  var componentOnReady, raf;
  var init_helpers_f586db1c = __esm({
    "node_modules/@ionic/core/dist/esm-es5/helpers-f586db1c.js"() {
      componentOnReady = function(e, a) {
        if (e.componentOnReady) {
          e.componentOnReady().then(function(e2) {
            return a(e2);
          });
        } else {
          raf(function() {
            return a(e);
          });
        }
      };
      raf = function(e) {
        if (typeof __zone_symbol__requestAnimationFrame === "function") {
          return __zone_symbol__requestAnimationFrame(e);
        }
        if (typeof requestAnimationFrame === "function") {
          return requestAnimationFrame(e);
        }
        return setTimeout(e);
      };
    }
  });

  // node_modules/@ionic/core/dist/esm-es5/animation-258fd22b.js
  var animationPrefix, processKeyframes, convertCamelCaseToHypen, getAnimationPrefix, setStyleProperty, removeStyleProperty, animationEnd, generateKeyframeRules, keyframeIds, generateKeyframeName, getStyleContainer, createKeyframeStylesheet, addClassToArray, createAnimation;
  var init_animation_258fd22b = __esm({
    "node_modules/@ionic/core/dist/esm-es5/animation-258fd22b.js"() {
      init_tslib_es6();
      init_index_b32cad98();
      init_helpers_f586db1c();
      processKeyframes = function(e) {
        e.forEach(function(e2) {
          for (var n in e2) {
            if (e2.hasOwnProperty(n)) {
              var r = e2[n];
              if (n === "easing") {
                var t = "animation-timing-function";
                e2[t] = r;
                delete e2[n];
              } else {
                var t = convertCamelCaseToHypen(n);
                if (t !== n) {
                  e2[t] = r;
                  delete e2[n];
                }
              }
            }
          }
        });
        return e;
      };
      convertCamelCaseToHypen = function(e) {
        return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      };
      getAnimationPrefix = function(e) {
        if (animationPrefix === void 0) {
          var n = e.style.animationName !== void 0;
          var r = e.style.webkitAnimationName !== void 0;
          animationPrefix = !n && r ? "-webkit-" : "";
        }
        return animationPrefix;
      };
      setStyleProperty = function(e, n, r) {
        var t = n.startsWith("animation") ? getAnimationPrefix(e) : "";
        e.style.setProperty(t + n, r);
      };
      removeStyleProperty = function(e, n) {
        var r = n.startsWith("animation") ? getAnimationPrefix(e) : "";
        e.style.removeProperty(r + n);
      };
      animationEnd = function(e, n) {
        var r;
        var t = { passive: true };
        var a = function() {
          if (r) {
            r();
          }
        };
        var i = function(r2) {
          if (e === r2.target) {
            a();
            n(r2);
          }
        };
        if (e) {
          e.addEventListener("webkitAnimationEnd", i, t);
          e.addEventListener("animationend", i, t);
          r = function() {
            e.removeEventListener("webkitAnimationEnd", i, t);
            e.removeEventListener("animationend", i, t);
          };
        }
        return a;
      };
      generateKeyframeRules = function(e) {
        if (e === void 0) {
          e = [];
        }
        return e.map(function(e2) {
          var n = e2.offset;
          var r = [];
          for (var t in e2) {
            if (e2.hasOwnProperty(t) && t !== "offset") {
              r.push("".concat(t, ": ").concat(e2[t], ";"));
            }
          }
          return "".concat(n * 100, "% { ").concat(r.join(" "), " }");
        }).join(" ");
      };
      keyframeIds = [];
      generateKeyframeName = function(e) {
        var n = keyframeIds.indexOf(e);
        if (n < 0) {
          n = keyframeIds.push(e) - 1;
        }
        return "ion-animation-".concat(n);
      };
      getStyleContainer = function(e) {
        var n = e.getRootNode !== void 0 ? e.getRootNode() : e;
        return n.head || n;
      };
      createKeyframeStylesheet = function(e, n, r) {
        var t;
        var a = getStyleContainer(r);
        var i = getAnimationPrefix(r);
        var o = a.querySelector("#" + e);
        if (o) {
          return o;
        }
        var f = ((t = r.ownerDocument) !== null && t !== void 0 ? t : document).createElement("style");
        f.id = e;
        f.textContent = "@".concat(i, "keyframes ").concat(e, " { ").concat(n, " } @").concat(i, "keyframes ").concat(e, "-alt { ").concat(n, " }");
        a.appendChild(f);
        return f;
      };
      addClassToArray = function(e, n) {
        if (e === void 0) {
          e = [];
        }
        if (n !== void 0) {
          var r = Array.isArray(n) ? n : [n];
          return __spreadArray(__spreadArray([], e, true), r, true);
        }
        return e;
      };
      createAnimation = function(e) {
        var n;
        var r;
        var t;
        var a;
        var i;
        var o;
        var f = [];
        var u = [];
        var c = [];
        var s = false;
        var v;
        var l = {};
        var d = [];
        var m = [];
        var y = {};
        var p = 0;
        var h = false;
        var g = false;
        var E;
        var P;
        var S;
        var A;
        var C = true;
        var b = false;
        var T = true;
        var w;
        var k;
        var x = false;
        var K = e;
        var _ = [];
        var R = [];
        var I = [];
        var N = [];
        var D = [];
        var L = [];
        var F = [];
        var O = [];
        var W = [];
        var j = [];
        var H = typeof AnimationEffect === "function" || win !== void 0 && typeof win.AnimationEffect === "function";
        var M = typeof Element === "function" && typeof Element.prototype.animate === "function" && H;
        var $ = 100;
        var q = function() {
          return j;
        };
        var z = function(e2) {
          N.forEach(function(n2) {
            n2.destroy(e2);
          });
          Z(e2);
          I.length = 0;
          N.length = 0;
          f.length = 0;
          Q();
          s = false;
          T = true;
          return k;
        };
        var Z = function(e2) {
          U();
          if (e2) {
            V();
          }
        };
        var B = function() {
          h = false;
          g = false;
          T = true;
          P = void 0;
          S = void 0;
          A = void 0;
          p = 0;
          b = false;
          C = true;
          x = false;
        };
        var G = function() {
          return p !== 0 && !x;
        };
        var J = function(e2, n2) {
          var r2 = (n2 === null || n2 === void 0 ? void 0 : n2.oneTimeCallback) ? R : _;
          r2.push({ c: e2, o: n2 });
          return k;
        };
        var Q = function() {
          _.length = 0;
          R.length = 0;
          return k;
        };
        var U = function() {
          if (M) {
            j.forEach(function(e3) {
              e3.cancel();
            });
            j.length = 0;
          } else {
            var e2 = I.slice();
            raf(function() {
              e2.forEach(function(e3) {
                removeStyleProperty(e3, "animation-name");
                removeStyleProperty(e3, "animation-duration");
                removeStyleProperty(e3, "animation-timing-function");
                removeStyleProperty(e3, "animation-iteration-count");
                removeStyleProperty(e3, "animation-delay");
                removeStyleProperty(e3, "animation-play-state");
                removeStyleProperty(e3, "animation-fill-mode");
                removeStyleProperty(e3, "animation-direction");
              });
            });
          }
        };
        var V = function() {
          D.forEach(function(e2) {
            if (e2 === null || e2 === void 0 ? void 0 : e2.parentNode) {
              e2.parentNode.removeChild(e2);
            }
          });
          D.length = 0;
        };
        var X = function(e2) {
          L.push(e2);
          return k;
        };
        var Y = function(e2) {
          F.push(e2);
          return k;
        };
        var ee = function(e2) {
          O.push(e2);
          return k;
        };
        var ne = function(e2) {
          W.push(e2);
          return k;
        };
        var re = function(e2) {
          u = addClassToArray(u, e2);
          return k;
        };
        var te = function(e2) {
          c = addClassToArray(c, e2);
          return k;
        };
        var ae = function(e2) {
          if (e2 === void 0) {
            e2 = {};
          }
          l = e2;
          return k;
        };
        var ie = function(e2) {
          if (e2 === void 0) {
            e2 = [];
          }
          for (var n2 = 0, r2 = e2; n2 < r2.length; n2++) {
            var t2 = r2[n2];
            l[t2] = "";
          }
          return k;
        };
        var oe = function(e2) {
          d = addClassToArray(d, e2);
          return k;
        };
        var fe = function(e2) {
          m = addClassToArray(m, e2);
          return k;
        };
        var ue = function(e2) {
          if (e2 === void 0) {
            e2 = {};
          }
          y = e2;
          return k;
        };
        var ce = function(e2) {
          if (e2 === void 0) {
            e2 = [];
          }
          for (var n2 = 0, r2 = e2; n2 < r2.length; n2++) {
            var t2 = r2[n2];
            y[t2] = "";
          }
          return k;
        };
        var se = function() {
          if (i !== void 0) {
            return i;
          }
          if (v) {
            return v.getFill();
          }
          return "both";
        };
        var ve = function() {
          if (P !== void 0) {
            return P;
          }
          if (o !== void 0) {
            return o;
          }
          if (v) {
            return v.getDirection();
          }
          return "normal";
        };
        var le = function() {
          if (h) {
            return "linear";
          }
          if (t !== void 0) {
            return t;
          }
          if (v) {
            return v.getEasing();
          }
          return "linear";
        };
        var de = function() {
          if (g) {
            return 0;
          }
          if (S !== void 0) {
            return S;
          }
          if (r !== void 0) {
            return r;
          }
          if (v) {
            return v.getDuration();
          }
          return 0;
        };
        var me = function() {
          if (a !== void 0) {
            return a;
          }
          if (v) {
            return v.getIterations();
          }
          return 1;
        };
        var ye = function() {
          if (A !== void 0) {
            return A;
          }
          if (n !== void 0) {
            return n;
          }
          if (v) {
            return v.getDelay();
          }
          return 0;
        };
        var pe = function() {
          return f;
        };
        var he = function(e2) {
          o = e2;
          Oe(true);
          return k;
        };
        var ge = function(e2) {
          i = e2;
          Oe(true);
          return k;
        };
        var Ee = function(e2) {
          n = e2;
          Oe(true);
          return k;
        };
        var Pe = function(e2) {
          t = e2;
          Oe(true);
          return k;
        };
        var Se = function(e2) {
          if (!M && e2 === 0) {
            e2 = 1;
          }
          r = e2;
          Oe(true);
          return k;
        };
        var Ae = function(e2) {
          a = e2;
          Oe(true);
          return k;
        };
        var Ce = function(e2) {
          v = e2;
          return k;
        };
        var be = function(e2) {
          if (e2 != null) {
            if (e2.nodeType === 1) {
              I.push(e2);
            } else if (e2.length >= 0) {
              for (var n2 = 0; n2 < e2.length; n2++) {
                I.push(e2[n2]);
              }
            } else {
              console.error("Invalid addElement value");
            }
          }
          return k;
        };
        var Te = function(e2) {
          if (e2 != null) {
            if (Array.isArray(e2)) {
              for (var n2 = 0, r2 = e2; n2 < r2.length; n2++) {
                var t2 = r2[n2];
                t2.parent(k);
                N.push(t2);
              }
            } else {
              e2.parent(k);
              N.push(e2);
            }
          }
          return k;
        };
        var we = function(e2) {
          var n2 = f !== e2;
          f = e2;
          if (n2) {
            ke(f);
          }
          return k;
        };
        var ke = function(e2) {
          if (M) {
            q().forEach(function(n2) {
              if (n2.effect.setKeyframes) {
                n2.effect.setKeyframes(e2);
              } else {
                var r2 = new KeyframeEffect(n2.effect.target, e2, n2.effect.getTiming());
                n2.effect = r2;
              }
            });
          } else {
            Re();
          }
        };
        var xe = function() {
          L.forEach(function(e3) {
            return e3();
          });
          F.forEach(function(e3) {
            return e3();
          });
          var e2 = u;
          var n2 = c;
          var r2 = l;
          I.forEach(function(t2) {
            var a2 = t2.classList;
            e2.forEach(function(e3) {
              return a2.add(e3);
            });
            n2.forEach(function(e3) {
              return a2.remove(e3);
            });
            for (var i2 in r2) {
              if (r2.hasOwnProperty(i2)) {
                setStyleProperty(t2, i2, r2[i2]);
              }
            }
          });
        };
        var Ke = function() {
          ze();
          O.forEach(function(e3) {
            return e3();
          });
          W.forEach(function(e3) {
            return e3();
          });
          var e2 = C ? 1 : 0;
          var n2 = d;
          var r2 = m;
          var t2 = y;
          I.forEach(function(e3) {
            var a2 = e3.classList;
            n2.forEach(function(e4) {
              return a2.add(e4);
            });
            r2.forEach(function(e4) {
              return a2.remove(e4);
            });
            for (var i2 in t2) {
              if (t2.hasOwnProperty(i2)) {
                setStyleProperty(e3, i2, t2[i2]);
              }
            }
          });
          _.forEach(function(n3) {
            return n3.c(e2, k);
          });
          R.forEach(function(n3) {
            return n3.c(e2, k);
          });
          R.length = 0;
          T = true;
          if (C) {
            b = true;
          }
          C = true;
        };
        var _e = function() {
          if (p === 0) {
            return;
          }
          p--;
          if (p === 0) {
            Ke();
            if (v) {
              v.animationFinish();
            }
          }
        };
        var Re = function(n2) {
          if (n2 === void 0) {
            n2 = true;
          }
          V();
          var r2 = processKeyframes(f);
          I.forEach(function(t2) {
            if (r2.length > 0) {
              var a2 = generateKeyframeRules(r2);
              w = e !== void 0 ? e : generateKeyframeName(a2);
              var i2 = createKeyframeStylesheet(w, a2, t2);
              D.push(i2);
              setStyleProperty(t2, "animation-duration", "".concat(de(), "ms"));
              setStyleProperty(t2, "animation-timing-function", le());
              setStyleProperty(t2, "animation-delay", "".concat(ye(), "ms"));
              setStyleProperty(t2, "animation-fill-mode", se());
              setStyleProperty(t2, "animation-direction", ve());
              var o2 = me() === Infinity ? "infinite" : me().toString();
              setStyleProperty(t2, "animation-iteration-count", o2);
              setStyleProperty(t2, "animation-play-state", "paused");
              if (n2) {
                setStyleProperty(t2, "animation-name", "".concat(i2.id, "-alt"));
              }
              raf(function() {
                setStyleProperty(t2, "animation-name", i2.id || null);
              });
            }
          });
        };
        var Ie = function() {
          I.forEach(function(e2) {
            var n2 = e2.animate(f, { id: K, delay: ye(), duration: de(), easing: le(), iterations: me(), fill: se(), direction: ve() });
            n2.pause();
            j.push(n2);
          });
          if (j.length > 0) {
            j[0].onfinish = function() {
              _e();
            };
          }
        };
        var Ne = function(e2) {
          if (e2 === void 0) {
            e2 = true;
          }
          xe();
          if (f.length > 0) {
            if (M) {
              Ie();
            } else {
              Re(e2);
            }
          }
          s = true;
        };
        var De = function(e2) {
          e2 = Math.min(Math.max(e2, 0), 0.9999);
          if (M) {
            j.forEach(function(n3) {
              n3.currentTime = n3.effect.getComputedTiming().delay + de() * e2;
              n3.pause();
            });
          } else {
            var n2 = "-".concat(de() * e2, "ms");
            I.forEach(function(e3) {
              if (f.length > 0) {
                setStyleProperty(e3, "animation-delay", n2);
                setStyleProperty(e3, "animation-play-state", "paused");
              }
            });
          }
        };
        var Le = function(e2) {
          j.forEach(function(e3) {
            e3.effect.updateTiming({ delay: ye(), duration: de(), easing: le(), iterations: me(), fill: se(), direction: ve() });
          });
          if (e2 !== void 0) {
            De(e2);
          }
        };
        var Fe = function(e2, n2) {
          if (e2 === void 0) {
            e2 = true;
          }
          raf(function() {
            I.forEach(function(r2) {
              setStyleProperty(r2, "animation-name", w || null);
              setStyleProperty(r2, "animation-duration", "".concat(de(), "ms"));
              setStyleProperty(r2, "animation-timing-function", le());
              setStyleProperty(r2, "animation-delay", n2 !== void 0 ? "-".concat(n2 * de(), "ms") : "".concat(ye(), "ms"));
              setStyleProperty(r2, "animation-fill-mode", se() || null);
              setStyleProperty(r2, "animation-direction", ve() || null);
              var t2 = me() === Infinity ? "infinite" : me().toString();
              setStyleProperty(r2, "animation-iteration-count", t2);
              if (e2) {
                setStyleProperty(r2, "animation-name", "".concat(w, "-alt"));
              }
              raf(function() {
                setStyleProperty(r2, "animation-name", w || null);
              });
            });
          });
        };
        var Oe = function(e2, n2, r2) {
          if (e2 === void 0) {
            e2 = false;
          }
          if (n2 === void 0) {
            n2 = true;
          }
          if (e2) {
            N.forEach(function(t2) {
              t2.update(e2, n2, r2);
            });
          }
          if (M) {
            Le(r2);
          } else {
            Fe(n2, r2);
          }
          return k;
        };
        var We = function(e2, n2) {
          if (e2 === void 0) {
            e2 = false;
          }
          N.forEach(function(r2) {
            r2.progressStart(e2, n2);
          });
          Me();
          h = e2;
          if (!s) {
            Ne();
          }
          Oe(false, true, n2);
          return k;
        };
        var je = function(e2) {
          N.forEach(function(n2) {
            n2.progressStep(e2);
          });
          De(e2);
          return k;
        };
        var He = function(e2, n2, r2) {
          h = false;
          N.forEach(function(t2) {
            t2.progressEnd(e2, n2, r2);
          });
          if (r2 !== void 0) {
            S = r2;
          }
          b = false;
          C = true;
          if (e2 === 0) {
            P = ve() === "reverse" ? "normal" : "reverse";
            if (P === "reverse") {
              C = false;
            }
            if (M) {
              Oe();
              De(1 - n2);
            } else {
              A = (1 - n2) * de() * -1;
              Oe(false, false);
            }
          } else if (e2 === 1) {
            if (M) {
              Oe();
              De(n2);
            } else {
              A = n2 * de() * -1;
              Oe(false, false);
            }
          }
          if (e2 !== void 0) {
            J(function() {
              S = void 0;
              P = void 0;
              A = void 0;
            }, { oneTimeCallback: true });
            if (!v) {
              Qe();
            }
          }
          return k;
        };
        var Me = function() {
          if (s) {
            if (M) {
              j.forEach(function(e2) {
                e2.pause();
              });
            } else {
              I.forEach(function(e2) {
                setStyleProperty(e2, "animation-play-state", "paused");
              });
            }
            x = true;
          }
        };
        var $e = function() {
          N.forEach(function(e2) {
            e2.pause();
          });
          Me();
          return k;
        };
        var qe = function() {
          E = void 0;
          _e();
        };
        var ze = function() {
          if (E) {
            clearTimeout(E);
          }
        };
        var Ze = function() {
          ze();
          raf(function() {
            I.forEach(function(e3) {
              if (f.length > 0) {
                setStyleProperty(e3, "animation-play-state", "running");
              }
            });
          });
          if (f.length === 0 || I.length === 0) {
            _e();
          } else {
            var e2 = ye() || 0;
            var n2 = de() || 0;
            var r2 = me() || 1;
            if (isFinite(r2)) {
              E = setTimeout(qe, e2 + n2 * r2 + $);
            }
            animationEnd(I[0], function() {
              ze();
              raf(function() {
                Be();
                raf(_e);
              });
            });
          }
        };
        var Be = function() {
          I.forEach(function(e2) {
            removeStyleProperty(e2, "animation-duration");
            removeStyleProperty(e2, "animation-delay");
            removeStyleProperty(e2, "animation-play-state");
          });
        };
        var Ge = function() {
          j.forEach(function(e2) {
            e2.play();
          });
          if (f.length === 0 || I.length === 0) {
            _e();
          }
        };
        var Je = function() {
          if (M) {
            De(0);
            Le();
          } else {
            Fe();
          }
        };
        var Qe = function(e2) {
          return new Promise(function(n2) {
            if (e2 === null || e2 === void 0 ? void 0 : e2.sync) {
              g = true;
              J(function() {
                return g = false;
              }, { oneTimeCallback: true });
            }
            if (!s) {
              Ne();
            }
            if (b) {
              Je();
              b = false;
            }
            if (T) {
              p = N.length + 1;
              T = false;
            }
            J(function() {
              return n2();
            }, { oneTimeCallback: true });
            N.forEach(function(e3) {
              e3.play();
            });
            if (M) {
              Ge();
            } else {
              Ze();
            }
            x = false;
          });
        };
        var Ue = function() {
          N.forEach(function(e2) {
            e2.stop();
          });
          if (s) {
            U();
            s = false;
          }
          B();
        };
        var Ve = function(e2, n2) {
          var r2;
          var t2 = f[0];
          if (t2 !== void 0 && (t2.offset === void 0 || t2.offset === 0)) {
            t2[e2] = n2;
          } else {
            f = __spreadArray([(r2 = { offset: 0 }, r2[e2] = n2, r2)], f, true);
          }
          return k;
        };
        var Xe = function(e2, n2) {
          var r2;
          var t2 = f[f.length - 1];
          if (t2 !== void 0 && (t2.offset === void 0 || t2.offset === 1)) {
            t2[e2] = n2;
          } else {
            f = __spreadArray(__spreadArray([], f, true), [(r2 = { offset: 1 }, r2[e2] = n2, r2)], false);
          }
          return k;
        };
        var Ye = function(e2, n2, r2) {
          return Ve(e2, n2).to(e2, r2);
        };
        return k = { parentAnimation: v, elements: I, childAnimations: N, id: K, animationFinish: _e, from: Ve, to: Xe, fromTo: Ye, parent: Ce, play: Qe, pause: $e, stop: Ue, destroy: z, keyframes: we, addAnimation: Te, addElement: be, update: Oe, fill: ge, direction: he, iterations: Ae, duration: Se, easing: Pe, delay: Ee, getWebAnimations: q, getKeyframes: pe, getFill: se, getDirection: ve, getDelay: ye, getIterations: me, getEasing: le, getDuration: de, afterAddRead: ee, afterAddWrite: ne, afterClearStyles: ce, afterStyles: ue, afterRemoveClass: fe, afterAddClass: oe, beforeAddRead: X, beforeAddWrite: Y, beforeClearStyles: ie, beforeStyles: ae, beforeRemoveClass: te, beforeAddClass: re, onFinish: J, isRunning: G, progressStart: We, progressStep: je, progressEnd: He };
      };
    }
  });

  // node_modules/@ionic/core/dist/esm-es5/index-36a5fd75.js
  var queuePending, setMode, getMode, hostRefs, getHostRef, consoleError, modeResolutionChain, win2, doc, plt, setPlatformHelpers, promiseResolve, supportsConstructableStylesheets, queueDomReads, queueDomWrites, queueTask, consume, flush, nextTick, readTask, writeTask;
  var init_index_36a5fd75 = __esm({
    "node_modules/@ionic/core/dist/esm-es5/index-36a5fd75.js"() {
      queuePending = false;
      setMode = function(e) {
        return modeResolutionChain.push(e);
      };
      getMode = function(e) {
        return getHostRef(e).$modeName$;
      };
      hostRefs = /* @__PURE__ */ new WeakMap();
      getHostRef = function(e) {
        return hostRefs.get(e);
      };
      consoleError = function(e, t) {
        return (0, console.error)(e, t);
      };
      modeResolutionChain = [];
      win2 = typeof window !== "undefined" ? window : {};
      doc = win2.document || { head: {} };
      plt = { $flags$: 0, $resourcesUrl$: "", jmp: function(e) {
        return e();
      }, raf: function(e) {
        return requestAnimationFrame(e);
      }, ael: function(e, t, n, r) {
        return e.addEventListener(t, n, r);
      }, rel: function(e, t, n, r) {
        return e.removeEventListener(t, n, r);
      }, ce: function(e, t) {
        return new CustomEvent(e, t);
      } };
      setPlatformHelpers = function(e) {
        Object.assign(plt, e);
      };
      promiseResolve = function(e) {
        return Promise.resolve(e);
      };
      supportsConstructableStylesheets = function() {
        try {
          new CSSStyleSheet();
          return typeof new CSSStyleSheet().replaceSync === "function";
        } catch (e) {
        }
        return false;
      }();
      queueDomReads = [];
      queueDomWrites = [];
      queueTask = function(e, t) {
        return function(n) {
          e.push(n);
          if (!queuePending) {
            queuePending = true;
            if (t && plt.$flags$ & 4) {
              nextTick(flush);
            } else {
              plt.raf(flush);
            }
          }
        };
      };
      consume = function(e) {
        for (var t = 0; t < e.length; t++) {
          try {
            e[t](performance.now());
          } catch (e2) {
            consoleError(e2);
          }
        }
        e.length = 0;
      };
      flush = function() {
        consume(queueDomReads);
        {
          consume(queueDomWrites);
          if (queuePending = queueDomReads.length > 0) {
            plt.raf(flush);
          }
        }
      };
      nextTick = function(e) {
        return promiseResolve().then(e);
      };
      readTask = queueTask(queueDomReads, false);
      writeTask = queueTask(queueDomWrites, true);
    }
  });

  // node_modules/@ionic/core/dist/esm-es5/index-afea2bcf.js
  var LIFECYCLE_WILL_ENTER, LIFECYCLE_DID_ENTER, LIFECYCLE_WILL_LEAVE, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_UNLOAD, getIonPageElement;
  var init_index_afea2bcf = __esm({
    "node_modules/@ionic/core/dist/esm-es5/index-afea2bcf.js"() {
      init_index_36a5fd75();
      init_helpers_f586db1c();
      LIFECYCLE_WILL_ENTER = "ionViewWillEnter";
      LIFECYCLE_DID_ENTER = "ionViewDidEnter";
      LIFECYCLE_WILL_LEAVE = "ionViewWillLeave";
      LIFECYCLE_DID_LEAVE = "ionViewDidLeave";
      LIFECYCLE_WILL_UNLOAD = "ionViewWillUnload";
      getIonPageElement = function(e) {
        if (e.classList.contains("ion-page")) {
          return e;
        }
        var n = e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
        if (n) {
          return n;
        }
        return e;
      };
    }
  });

  // node_modules/@ionic/core/dist/esm-es5/ios.transition-6a838b0c.js
  var DURATION, getClonedElement, shadow, getLargeTitle, getBackButton, createLargeTitleTransition, animateBackButton, animateLargeTitle, iosTransitionAnimation;
  var init_ios_transition_6a838b0c = __esm({
    "node_modules/@ionic/core/dist/esm-es5/ios.transition-6a838b0c.js"() {
      init_animation_258fd22b();
      init_index_afea2bcf();
      init_index_b32cad98();
      init_helpers_f586db1c();
      init_index_36a5fd75();
      DURATION = 540;
      getClonedElement = function(t) {
        return document.querySelector("".concat(t, ".ion-cloned-element"));
      };
      shadow = function(t) {
        return t.shadowRoot || t;
      };
      getLargeTitle = function(t) {
        var e = t.tagName === "ION-TABS" ? t : t.querySelector("ion-tabs");
        var a = "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
        if (e != null) {
          var o = e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
          return o != null ? o.querySelector(a) : null;
        }
        return t.querySelector(a);
      };
      getBackButton = function(t, e) {
        var a = t.tagName === "ION-TABS" ? t : t.querySelector("ion-tabs");
        var o = [];
        if (a != null) {
          var r = a.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
          if (r != null) {
            o = r.querySelectorAll("ion-buttons");
          }
        } else {
          o = t.querySelectorAll("ion-buttons");
        }
        for (var n = 0, i = o; n < i.length; n++) {
          var l = i[n];
          var c = l.closest("ion-header");
          var s = c && !c.classList.contains("header-collapse-condense-inactive");
          var f = l.querySelector("ion-back-button");
          var d = l.classList.contains("buttons-collapse");
          var m = l.slot === "start" || l.slot === "";
          if (f !== null && m && (d && s && e || !d)) {
            return f;
          }
        }
        return null;
      };
      createLargeTitleTransition = function(t, e, a, o, r) {
        var n = getBackButton(o, a);
        var i = getLargeTitle(r);
        var l = getLargeTitle(o);
        var c = getBackButton(r, a);
        var s = n !== null && i !== null && !a;
        var f = l !== null && c !== null && a;
        if (s) {
          var d = i.getBoundingClientRect();
          var m = n.getBoundingClientRect();
          animateLargeTitle(t, e, a, i, d, m);
          animateBackButton(t, e, a, n, d, m);
        } else if (f) {
          var v = l.getBoundingClientRect();
          var p = c.getBoundingClientRect();
          animateLargeTitle(t, e, a, l, v, p);
          animateBackButton(t, e, a, c, v, p);
        }
        return { forward: s, backward: f };
      };
      animateBackButton = function(t, e, a, o, r, n) {
        var i = e ? "calc(100% - ".concat(n.right + 4, "px)") : "".concat(n.left - 4, "px");
        var l = e ? "7px" : "-7px";
        var c = e ? "-4px" : "4px";
        var s = e ? "-4px" : "4px";
        var f = e ? "right" : "left";
        var d = e ? "left" : "right";
        var m = [{ offset: 0, opacity: 0, transform: "translate3d(".concat(l, ", ").concat(r.top - 40, "px, 0) scale(2.1)") }, { offset: 1, opacity: 1, transform: "translate3d(".concat(c, ", ").concat(n.top - 46, "px, 0) scale(1)") }];
        var v = [{ offset: 0, opacity: 1, transform: "translate3d(".concat(c, ", ").concat(n.top - 46, "px, 0) scale(1)") }, { offset: 0.6, opacity: 0 }, { offset: 1, opacity: 0, transform: "translate3d(".concat(l, ", ").concat(r.top - 40, "px, 0) scale(2.1)") }];
        var p = a ? v : m;
        var u = [{ offset: 0, opacity: 0, transform: "translate3d(".concat(s, ", ").concat(n.top - 41, "px, 0) scale(0.6)") }, { offset: 1, opacity: 1, transform: "translate3d(".concat(s, ", ").concat(n.top - 46, "px, 0) scale(1)") }];
        var y = [{ offset: 0, opacity: 1, transform: "translate3d(".concat(s, ", ").concat(n.top - 46, "px, 0) scale(1)") }, { offset: 0.2, opacity: 0, transform: "translate3d(".concat(s, ", ").concat(n.top - 41, "px, 0) scale(0.6)") }, { offset: 1, opacity: 0, transform: "translate3d(".concat(s, ", ").concat(n.top - 41, "px, 0) scale(0.6)") }];
        var b = a ? y : u;
        var g = createAnimation();
        var A = createAnimation();
        var S = getClonedElement("ion-back-button");
        var T = shadow(S).querySelector(".button-text");
        var h = shadow(S).querySelector("ion-icon");
        S.text = o.text;
        S.mode = o.mode;
        S.icon = o.icon;
        S.color = o.color;
        S.disabled = o.disabled;
        S.style.setProperty("display", "block");
        S.style.setProperty("position", "fixed");
        A.addElement(h);
        g.addElement(T);
        g.beforeStyles({ "transform-origin": "".concat(f, " center") }).beforeAddWrite(function() {
          o.style.setProperty("display", "none");
          S.style.setProperty(f, i);
        }).afterAddWrite(function() {
          o.style.setProperty("display", "");
          S.style.setProperty("display", "none");
          S.style.removeProperty(f);
        }).keyframes(p);
        A.beforeStyles({ "transform-origin": "".concat(d, " center") }).keyframes(b);
        t.addAnimation([g, A]);
      };
      animateLargeTitle = function(t, e, a, o, r, n) {
        var i;
        var l = e ? "calc(100% - ".concat(r.right, "px)") : "".concat(r.left, "px");
        var c = e ? "-18px" : "18px";
        var s = e ? "right" : "left";
        var f = [{ offset: 0, opacity: 0, transform: "translate3d(".concat(c, ", ").concat(n.top - 4, "px, 0) scale(0.49)") }, { offset: 0.1, opacity: 0 }, { offset: 1, opacity: 1, transform: "translate3d(0, ".concat(r.top - 2, "px, 0) scale(1)") }];
        var d = [{ offset: 0, opacity: 0.99, transform: "translate3d(0, ".concat(r.top - 2, "px, 0) scale(1)") }, { offset: 0.6, opacity: 0 }, { offset: 1, opacity: 0, transform: "translate3d(".concat(c, ", ").concat(n.top - 4, "px, 0) scale(0.5)") }];
        var m = a ? f : d;
        var v = getClonedElement("ion-title");
        var p = createAnimation();
        v.innerText = o.innerText;
        v.size = o.size;
        v.color = o.color;
        p.addElement(v);
        p.beforeStyles((i = { "transform-origin": "".concat(s, " center"), height: "46px", display: "", position: "relative" }, i[s] = l, i)).beforeAddWrite(function() {
          o.style.setProperty("display", "none");
        }).afterAddWrite(function() {
          o.style.setProperty("display", "");
          v.style.setProperty("display", "none");
        }).keyframes(m);
        t.addAnimation(p);
      };
      iosTransitionAnimation = function(t, e) {
        var a;
        try {
          var o = "cubic-bezier(0.32,0.72,0,1)";
          var r = "opacity";
          var n = "transform";
          var i = "0%";
          var l = 0.8;
          var c = t.ownerDocument.dir === "rtl";
          var s = c ? "-99.5%" : "99.5%";
          var f = c ? "33%" : "-33%";
          var d = e.enteringEl;
          var m = e.leavingEl;
          var v = e.direction === "back";
          var p = d.querySelector(":scope > ion-content");
          var u = d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
          var y = d.querySelectorAll(":scope > ion-header > ion-toolbar");
          var b = createAnimation();
          var g = createAnimation();
          b.addElement(d).duration(((a = e.duration) !== null && a !== void 0 ? a : 0) || DURATION).easing(e.easing || o).fill("both").beforeRemoveClass("ion-page-invisible");
          if (m && t !== null && t !== void 0) {
            var A = createAnimation();
            A.addElement(t);
            b.addAnimation(A);
          }
          if (!p && y.length === 0 && u.length === 0) {
            g.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
          } else {
            g.addElement(p);
            g.addElement(u);
          }
          b.addAnimation(g);
          if (v) {
            g.beforeClearStyles([r]).fromTo("transform", "translateX(".concat(f, ")"), "translateX(".concat(i, ")")).fromTo(r, l, 1);
          } else {
            g.beforeClearStyles([r]).fromTo("transform", "translateX(".concat(s, ")"), "translateX(".concat(i, ")"));
          }
          if (p) {
            var S = shadow(p).querySelector(".transition-effect");
            if (S) {
              var T = S.querySelector(".transition-cover");
              var h = S.querySelector(".transition-shadow");
              var x = createAnimation();
              var E = createAnimation();
              var q = createAnimation();
              x.addElement(S).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" });
              E.addElement(T).beforeClearStyles([r]).fromTo(r, 0, 0.1);
              q.addElement(h).beforeClearStyles([r]).fromTo(r, 0.03, 0.7);
              x.addAnimation([E, q]);
              g.addAnimation([x]);
            }
          }
          var X = d.querySelector("ion-header.header-collapse-condense");
          var C = createLargeTitleTransition(b, c, v, d, m), k = C.forward, w = C.backward;
          y.forEach(function(t2) {
            var e2 = createAnimation();
            e2.addElement(t2);
            b.addAnimation(e2);
            var a2 = createAnimation();
            a2.addElement(t2.querySelector("ion-title"));
            var o2 = createAnimation();
            var n2 = Array.from(t2.querySelectorAll("ion-buttons,[menuToggle]"));
            var l2 = t2.closest("ion-header");
            var d2 = l2 === null || l2 === void 0 ? void 0 : l2.classList.contains("header-collapse-condense-inactive");
            var m2;
            if (v) {
              m2 = n2.filter(function(t3) {
                var e3 = t3.classList.contains("buttons-collapse");
                return e3 && !d2 || !e3;
              });
            } else {
              m2 = n2.filter(function(t3) {
                return !t3.classList.contains("buttons-collapse");
              });
            }
            o2.addElement(m2);
            var p2 = createAnimation();
            p2.addElement(t2.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
            var u2 = createAnimation();
            u2.addElement(shadow(t2).querySelector(".toolbar-background"));
            var y2 = createAnimation();
            var g2 = t2.querySelector("ion-back-button");
            if (g2) {
              y2.addElement(g2);
            }
            e2.addAnimation([a2, o2, p2, u2, y2]);
            o2.fromTo(r, 0.01, 1);
            p2.fromTo(r, 0.01, 1);
            if (v) {
              if (!d2) {
                a2.fromTo("transform", "translateX(".concat(f, ")"), "translateX(".concat(i, ")")).fromTo(r, 0.01, 1);
              }
              p2.fromTo("transform", "translateX(".concat(f, ")"), "translateX(".concat(i, ")"));
              y2.fromTo(r, 0.01, 1);
            } else {
              if (!X) {
                a2.fromTo("transform", "translateX(".concat(s, ")"), "translateX(".concat(i, ")")).fromTo(r, 0.01, 1);
              }
              p2.fromTo("transform", "translateX(".concat(s, ")"), "translateX(".concat(i, ")"));
              u2.beforeClearStyles([r, "transform"]);
              var A2 = l2 === null || l2 === void 0 ? void 0 : l2.translucent;
              if (!A2) {
                u2.fromTo(r, 0.01, "var(--opacity)");
              } else {
                u2.fromTo("transform", c ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)");
              }
              if (!k) {
                y2.fromTo(r, 0.01, 1);
              }
              if (g2 && !k) {
                var S2 = createAnimation();
                S2.addElement(shadow(g2).querySelector(".button-text")).fromTo("transform", c ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)");
                e2.addAnimation(S2);
              }
            }
          });
          if (m) {
            var B = createAnimation();
            var L = m.querySelector(":scope > ion-content");
            var P = m.querySelectorAll(":scope > ion-header > ion-toolbar");
            var R = m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
            if (!L && P.length === 0 && R.length === 0) {
              B.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
            } else {
              B.addElement(L);
              B.addElement(R);
            }
            b.addAnimation(B);
            if (v) {
              B.beforeClearStyles([r]).fromTo("transform", "translateX(".concat(i, ")"), c ? "translateX(-100%)" : "translateX(100%)");
              var I = getIonPageElement(m);
              b.afterAddWrite(function() {
                if (b.getDirection() === "normal") {
                  I.style.setProperty("display", "none");
                }
              });
            } else {
              B.fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat(f, ")")).fromTo(r, 1, l);
            }
            if (L) {
              var N = shadow(L).querySelector(".transition-effect");
              if (N) {
                var j = N.querySelector(".transition-cover");
                var W = N.querySelector(".transition-shadow");
                var D = createAnimation();
                var O = createAnimation();
                var z = createAnimation();
                D.addElement(N).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" });
                O.addElement(j).beforeClearStyles([r]).fromTo(r, 0.1, 0);
                z.addElement(W).beforeClearStyles([r]).fromTo(r, 0.7, 0.03);
                D.addAnimation([O, z]);
                B.addAnimation([D]);
              }
            }
            P.forEach(function(t2) {
              var e2 = createAnimation();
              e2.addElement(t2);
              var a2 = createAnimation();
              a2.addElement(t2.querySelector("ion-title"));
              var o2 = createAnimation();
              var l2 = t2.querySelectorAll("ion-buttons,[menuToggle]");
              var s2 = t2.closest("ion-header");
              var d2 = s2 === null || s2 === void 0 ? void 0 : s2.classList.contains("header-collapse-condense-inactive");
              var m2 = Array.from(l2).filter(function(t3) {
                var e3 = t3.classList.contains("buttons-collapse");
                return e3 && !d2 || !e3;
              });
              o2.addElement(m2);
              var p2 = createAnimation();
              var u2 = t2.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
              if (u2.length > 0) {
                p2.addElement(u2);
              }
              var y2 = createAnimation();
              y2.addElement(shadow(t2).querySelector(".toolbar-background"));
              var g2 = createAnimation();
              var A2 = t2.querySelector("ion-back-button");
              if (A2) {
                g2.addElement(A2);
              }
              e2.addAnimation([a2, o2, p2, g2, y2]);
              b.addAnimation(e2);
              g2.fromTo(r, 0.99, 0);
              o2.fromTo(r, 0.99, 0);
              p2.fromTo(r, 0.99, 0);
              if (v) {
                if (!d2) {
                  a2.fromTo("transform", "translateX(".concat(i, ")"), c ? "translateX(-100%)" : "translateX(100%)").fromTo(r, 0.99, 0);
                }
                p2.fromTo("transform", "translateX(".concat(i, ")"), c ? "translateX(-100%)" : "translateX(100%)");
                y2.beforeClearStyles([r, "transform"]);
                var S2 = s2 === null || s2 === void 0 ? void 0 : s2.translucent;
                if (!S2) {
                  y2.fromTo(r, "var(--opacity)", 0);
                } else {
                  y2.fromTo("transform", "translateX(0px)", c ? "translateX(-100%)" : "translateX(100%)");
                }
                if (A2 && !w) {
                  var T2 = createAnimation();
                  T2.addElement(shadow(A2).querySelector(".button-text")).fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat((c ? -124 : 124) + "px", ")"));
                  e2.addAnimation(T2);
                }
              } else {
                if (!d2) {
                  a2.fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat(f, ")")).fromTo(r, 0.99, 0).afterClearStyles([n, r]);
                }
                p2.fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat(f, ")")).afterClearStyles([n, r]);
                g2.afterClearStyles([r]);
                a2.afterClearStyles([r]);
                o2.afterClearStyles([r]);
              }
            });
          }
          return b;
        } catch (t2) {
          throw t2;
        }
      };
    }
  });

  // node_modules/@ionic/core/dist/esm-es5/md.transition-b7d7b475.js
  var mdTransitionAnimation;
  var init_md_transition_b7d7b475 = __esm({
    "node_modules/@ionic/core/dist/esm-es5/md.transition-b7d7b475.js"() {
      init_animation_258fd22b();
      init_index_afea2bcf();
      init_index_b32cad98();
      init_helpers_f586db1c();
      init_index_36a5fd75();
      mdTransitionAnimation = function(n, a) {
        var e, i, t;
        var o = "40px";
        var r = "0px";
        var m = a.direction === "back";
        var l = a.enteringEl;
        var d = a.leavingEl;
        var c = getIonPageElement(l);
        var s = c.querySelector("ion-toolbar");
        var f = createAnimation();
        f.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible");
        if (m) {
          f.duration(((e = a.duration) !== null && e !== void 0 ? e : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
        } else {
          f.duration(((i = a.duration) !== null && i !== void 0 ? i : 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", "translateY(".concat(o, ")"), "translateY(".concat(r, ")")).fromTo("opacity", 0.01, 1);
        }
        if (s) {
          var v = createAnimation();
          v.addElement(s);
          f.addAnimation(v);
        }
        if (d && m) {
          f.duration(((t = a.duration) !== null && t !== void 0 ? t : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
          var u = createAnimation();
          u.addElement(getIonPageElement(d)).onFinish(function(n2) {
            if (n2 === 1 && u.elements.length > 0) {
              u.elements[0].style.setProperty("display", "none");
            }
          }).fromTo("transform", "translateY(".concat(r, ")"), "translateY(".concat(o, ")")).fromTo("opacity", 1, 0);
          f.addAnimation(u);
        }
        return f;
      };
    }
  });

  // node_modules/@ionic/core/dist/esm-es5/index.js
  init_animation_258fd22b();
  init_ios_transition_6a838b0c();
  init_md_transition_b7d7b475();

  // node_modules/@ionic/core/dist/esm-es5/cubic-bezier-e78d1307.js
  var getTimeGivenProgression = function(t, r, a, e, o) {
    return solveCubicBezier(t[1], r[1], a[1], e[1], o).map(function(o2) {
      return solveCubicParametricEquation(t[0], r[0], a[0], e[0], o2);
    });
  };
  var solveCubicParametricEquation = function(t, r, a, e, o) {
    var i = 3 * r * Math.pow(o - 1, 2);
    var n = -3 * a * o + 3 * a + e * o;
    var u = t * Math.pow(o - 1, 3);
    return o * (i + o * n) - u;
  };
  var solveCubicBezier = function(t, r, a, e, o) {
    t -= o;
    r -= o;
    a -= o;
    e -= o;
    var i = solveCubicEquation(e - 3 * a + 3 * r - t, 3 * a - 6 * r + 3 * t, 3 * r - 3 * t, t);
    return i.filter(function(t2) {
      return t2 >= 0 && t2 <= 1;
    });
  };
  var solveQuadraticEquation = function(t, r, a) {
    var e = r * r - 4 * t * a;
    if (e < 0) {
      return [];
    } else {
      return [(-r + Math.sqrt(e)) / (2 * t), (-r - Math.sqrt(e)) / (2 * t)];
    }
  };
  var solveCubicEquation = function(t, r, a, e) {
    if (t === 0) {
      return solveQuadraticEquation(r, a, e);
    }
    r /= t;
    a /= t;
    e /= t;
    var o = (3 * a - r * r) / 3;
    var i = (2 * r * r * r - 9 * r * a + 27 * e) / 27;
    if (o === 0) {
      return [Math.pow(-i, 1 / 3)];
    } else if (i === 0) {
      return [Math.sqrt(-o), -Math.sqrt(-o)];
    }
    var n = Math.pow(i / 2, 2) + Math.pow(o / 3, 3);
    if (n === 0) {
      return [Math.pow(i / 2, 1 / 2) - r / 3];
    } else if (n > 0) {
      return [Math.pow(-(i / 2) + Math.sqrt(n), 1 / 3) - Math.pow(i / 2 + Math.sqrt(n), 1 / 3) - r / 3];
    }
    var u = Math.sqrt(Math.pow(-(o / 3), 3));
    var s = Math.acos(-(i / (2 * Math.sqrt(Math.pow(-(o / 3), 3)))));
    var v = 2 * Math.pow(u, 1 / 3);
    return [v * Math.cos(s / 3) - r / 3, v * Math.cos((s + 2 * Math.PI) / 3) - r / 3, v * Math.cos((s + 4 * Math.PI) / 3) - r / 3];
  };

  // node_modules/@ionic/core/dist/esm-es5/gesture-controller-17060b7c.js
  var GestureController = function() {
    function t() {
      this.gestureId = 0;
      this.requestedStart = /* @__PURE__ */ new Map();
      this.disabledGestures = /* @__PURE__ */ new Map();
      this.disabledScroll = /* @__PURE__ */ new Set();
    }
    t.prototype.createGesture = function(t2) {
      var e;
      return new GestureDelegate(this, this.newID(), t2.name, (e = t2.priority) !== null && e !== void 0 ? e : 0, !!t2.disableScroll);
    };
    t.prototype.createBlocker = function(t2) {
      if (t2 === void 0) {
        t2 = {};
      }
      return new BlockerDelegate(this, this.newID(), t2.disable, !!t2.disableScroll);
    };
    t.prototype.start = function(t2, e, r) {
      if (!this.canStart(t2)) {
        this.requestedStart.delete(e);
        return false;
      }
      this.requestedStart.set(e, r);
      return true;
    };
    t.prototype.capture = function(t2, e, r) {
      if (!this.start(t2, e, r)) {
        return false;
      }
      var i = this.requestedStart;
      var s = -1e4;
      i.forEach(function(t3) {
        s = Math.max(s, t3);
      });
      if (s === r) {
        this.capturedId = e;
        i.clear();
        var l = new CustomEvent("ionGestureCaptured", { detail: { gestureName: t2 } });
        document.dispatchEvent(l);
        return true;
      }
      i.delete(e);
      return false;
    };
    t.prototype.release = function(t2) {
      this.requestedStart.delete(t2);
      if (this.capturedId === t2) {
        this.capturedId = void 0;
      }
    };
    t.prototype.disableGesture = function(t2, e) {
      var r = this.disabledGestures.get(t2);
      if (r === void 0) {
        r = /* @__PURE__ */ new Set();
        this.disabledGestures.set(t2, r);
      }
      r.add(e);
    };
    t.prototype.enableGesture = function(t2, e) {
      var r = this.disabledGestures.get(t2);
      if (r !== void 0) {
        r.delete(e);
      }
    };
    t.prototype.disableScroll = function(t2) {
      this.disabledScroll.add(t2);
      if (this.disabledScroll.size === 1) {
        document.body.classList.add(BACKDROP_NO_SCROLL);
      }
    };
    t.prototype.enableScroll = function(t2) {
      this.disabledScroll.delete(t2);
      if (this.disabledScroll.size === 0) {
        document.body.classList.remove(BACKDROP_NO_SCROLL);
      }
    };
    t.prototype.canStart = function(t2) {
      if (this.capturedId !== void 0) {
        return false;
      }
      if (this.isDisabled(t2)) {
        return false;
      }
      return true;
    };
    t.prototype.isCaptured = function() {
      return this.capturedId !== void 0;
    };
    t.prototype.isScrollDisabled = function() {
      return this.disabledScroll.size > 0;
    };
    t.prototype.isDisabled = function(t2) {
      var e = this.disabledGestures.get(t2);
      if (e && e.size > 0) {
        return true;
      }
      return false;
    };
    t.prototype.newID = function() {
      this.gestureId++;
      return this.gestureId;
    };
    return t;
  }();
  var GestureDelegate = function() {
    function t(t2, e, r, i, s) {
      this.id = e;
      this.name = r;
      this.disableScroll = s;
      this.priority = i * 1e6 + e;
      this.ctrl = t2;
    }
    t.prototype.canStart = function() {
      if (!this.ctrl) {
        return false;
      }
      return this.ctrl.canStart(this.name);
    };
    t.prototype.start = function() {
      if (!this.ctrl) {
        return false;
      }
      return this.ctrl.start(this.name, this.id, this.priority);
    };
    t.prototype.capture = function() {
      if (!this.ctrl) {
        return false;
      }
      var t2 = this.ctrl.capture(this.name, this.id, this.priority);
      if (t2 && this.disableScroll) {
        this.ctrl.disableScroll(this.id);
      }
      return t2;
    };
    t.prototype.release = function() {
      if (this.ctrl) {
        this.ctrl.release(this.id);
        if (this.disableScroll) {
          this.ctrl.enableScroll(this.id);
        }
      }
    };
    t.prototype.destroy = function() {
      this.release();
      this.ctrl = void 0;
    };
    return t;
  }();
  var BlockerDelegate = function() {
    function t(t2, e, r, i) {
      this.id = e;
      this.disable = r;
      this.disableScroll = i;
      this.ctrl = t2;
    }
    t.prototype.block = function() {
      if (!this.ctrl) {
        return;
      }
      if (this.disable) {
        for (var t2 = 0, e = this.disable; t2 < e.length; t2++) {
          var r = e[t2];
          this.ctrl.disableGesture(r, this.id);
        }
      }
      if (this.disableScroll) {
        this.ctrl.disableScroll(this.id);
      }
    };
    t.prototype.unblock = function() {
      if (!this.ctrl) {
        return;
      }
      if (this.disable) {
        for (var t2 = 0, e = this.disable; t2 < e.length; t2++) {
          var r = e[t2];
          this.ctrl.enableGesture(r, this.id);
        }
      }
      if (this.disableScroll) {
        this.ctrl.enableScroll(this.id);
      }
    };
    t.prototype.destroy = function() {
      this.unblock();
      this.ctrl = void 0;
    };
    return t;
  }();
  var BACKDROP_NO_SCROLL = "backdrop-no-scroll";
  var GESTURE_CONTROLLER = new GestureController();

  // node_modules/@ionic/core/dist/esm-es5/index-422b6e83.js
  var addEventListener = function(e, r, t, a) {
    var n = supportsPassive(e) ? { capture: !!a.capture, passive: !!a.passive } : !!a.capture;
    var i;
    var u;
    if (e["__zone_symbol__addEventListener"]) {
      i = "__zone_symbol__addEventListener";
      u = "__zone_symbol__removeEventListener";
    } else {
      i = "addEventListener";
      u = "removeEventListener";
    }
    e[i](r, t, n);
    return function() {
      e[u](r, t, n);
    };
  };
  var supportsPassive = function(e) {
    if (_sPassive === void 0) {
      try {
        var r = Object.defineProperty({}, "passive", { get: function() {
          _sPassive = true;
        } });
        e.addEventListener("optsTest", function() {
          return;
        }, r);
      } catch (e2) {
        _sPassive = false;
      }
    }
    return !!_sPassive;
  };
  var _sPassive;
  var MOUSE_WAIT = 2e3;
  var createPointerEvents = function(e, r, t, a, n) {
    var i;
    var u;
    var s;
    var v;
    var f;
    var o;
    var c;
    var l = 0;
    var d = function(a2) {
      l = Date.now() + MOUSE_WAIT;
      if (!r(a2)) {
        return;
      }
      if (!u && t) {
        u = addEventListener(e, "touchmove", t, n);
      }
      if (!s) {
        s = addEventListener(a2.target, "touchend", p, n);
      }
      if (!v) {
        v = addEventListener(a2.target, "touchcancel", p, n);
      }
    };
    var m = function(a2) {
      if (l > Date.now()) {
        return;
      }
      if (!r(a2)) {
        return;
      }
      if (!o && t) {
        o = addEventListener(getDocument(e), "mousemove", t, n);
      }
      if (!c) {
        c = addEventListener(getDocument(e), "mouseup", E, n);
      }
    };
    var p = function(e2) {
      _();
      if (a) {
        a(e2);
      }
    };
    var E = function(e2) {
      g();
      if (a) {
        a(e2);
      }
    };
    var _ = function() {
      if (u) {
        u();
      }
      if (s) {
        s();
      }
      if (v) {
        v();
      }
      u = s = v = void 0;
    };
    var g = function() {
      if (o) {
        o();
      }
      if (c) {
        c();
      }
      o = c = void 0;
    };
    var y = function() {
      _();
      g();
    };
    var X = function(r2) {
      if (r2 === void 0) {
        r2 = true;
      }
      if (!r2) {
        if (i) {
          i();
        }
        if (f) {
          f();
        }
        i = f = void 0;
        y();
      } else {
        if (!i) {
          i = addEventListener(e, "touchstart", d, n);
        }
        if (!f) {
          f = addEventListener(e, "mousedown", m, n);
        }
      }
    };
    var Y = function() {
      X(false);
      a = t = r = void 0;
    };
    return { enable: X, stop: y, destroy: Y };
  };
  var getDocument = function(e) {
    return e instanceof Document ? e : e.ownerDocument;
  };
  var createPanRecognizer = function(e, r, t) {
    var a = t * (Math.PI / 180);
    var n = e === "x";
    var i = Math.cos(a);
    var u = r * r;
    var s = 0;
    var v = 0;
    var f = false;
    var o = 0;
    return { start: function(e2, r2) {
      s = e2;
      v = r2;
      o = 0;
      f = true;
    }, detect: function(e2, r2) {
      if (!f) {
        return false;
      }
      var t2 = e2 - s;
      var a2 = r2 - v;
      var c = t2 * t2 + a2 * a2;
      if (c < u) {
        return false;
      }
      var l = Math.sqrt(c);
      var d = (n ? t2 : a2) / l;
      if (d > i) {
        o = 1;
      } else if (d < -i) {
        o = -1;
      } else {
        o = 0;
      }
      f = false;
      return true;
    }, isGesture: function() {
      return o !== 0;
    }, getDirection: function() {
      return o;
    } };
  };
  var createGesture = function(e) {
    var r = false;
    var t = false;
    var a = true;
    var n = false;
    var i = Object.assign({ disableScroll: false, direction: "x", gesturePriority: 0, passive: true, maxAngle: 40, threshold: 10 }, e);
    var u = i.canStart;
    var s = i.onWillStart;
    var v = i.onStart;
    var f = i.onEnd;
    var o = i.notCaptured;
    var c = i.onMove;
    var l = i.threshold;
    var d = i.passive;
    var m = i.blurOnStart;
    var p = { type: "pan", startX: 0, startY: 0, startTime: 0, currentX: 0, currentY: 0, velocityX: 0, velocityY: 0, deltaX: 0, deltaY: 0, currentTime: 0, event: void 0, data: void 0 };
    var E = createPanRecognizer(i.direction, i.threshold, i.maxAngle);
    var _ = GESTURE_CONTROLLER.createGesture({ name: e.gestureName, priority: e.gesturePriority, disableScroll: e.disableScroll });
    var g = function(e2) {
      var r2 = now(e2);
      if (t || !a) {
        return false;
      }
      updateDetail(e2, p);
      p.startX = p.currentX;
      p.startY = p.currentY;
      p.startTime = p.currentTime = r2;
      p.velocityX = p.velocityY = p.deltaX = p.deltaY = 0;
      p.event = e2;
      if (u && u(p) === false) {
        return false;
      }
      _.release();
      if (!_.start()) {
        return false;
      }
      t = true;
      if (l === 0) {
        return Y();
      }
      E.start(p.startX, p.startY);
      return true;
    };
    var y = function(e2) {
      if (r) {
        if (!n && a) {
          n = true;
          calcGestureData(p, e2);
          requestAnimationFrame(X);
        }
        return;
      }
      calcGestureData(p, e2);
      if (E.detect(p.currentX, p.currentY)) {
        if (!E.isGesture() || !Y()) {
          P();
        }
      }
    };
    var X = function() {
      if (!r) {
        return;
      }
      n = false;
      if (c) {
        c(p);
      }
    };
    var Y = function() {
      if (!_.capture()) {
        return false;
      }
      r = true;
      a = false;
      p.startX = p.currentX;
      p.startY = p.currentY;
      p.startTime = p.currentTime;
      if (s) {
        s(p).then(h);
      } else {
        h();
      }
      return true;
    };
    var L = function() {
      if (typeof document !== "undefined") {
        var e2 = document.activeElement;
        if (e2 === null || e2 === void 0 ? void 0 : e2.blur) {
          e2.blur();
        }
      }
    };
    var h = function() {
      if (m) {
        L();
      }
      if (v) {
        v(p);
      }
      a = true;
    };
    var T = function() {
      r = false;
      t = false;
      n = false;
      a = true;
      _.release();
    };
    var b = function(e2) {
      var t2 = r;
      var n2 = a;
      T();
      if (!n2) {
        return;
      }
      calcGestureData(p, e2);
      if (t2) {
        if (f) {
          f(p);
        }
        return;
      }
      if (o) {
        o(p);
      }
    };
    var D = createPointerEvents(i.el, g, y, b, { capture: false, passive: d });
    var P = function() {
      T();
      D.stop();
      if (o) {
        o(p);
      }
    };
    return { enable: function(e2) {
      if (e2 === void 0) {
        e2 = true;
      }
      if (!e2) {
        if (r) {
          b(void 0);
        }
        T();
      }
      D.enable(e2);
    }, destroy: function() {
      _.destroy();
      D.destroy();
    } };
  };
  var calcGestureData = function(e, r) {
    if (!r) {
      return;
    }
    var t = e.currentX;
    var a = e.currentY;
    var n = e.currentTime;
    updateDetail(r, e);
    var i = e.currentX;
    var u = e.currentY;
    var s = e.currentTime = now(r);
    var v = s - n;
    if (v > 0 && v < 100) {
      var f = (i - t) / v;
      var o = (u - a) / v;
      e.velocityX = f * 0.7 + e.velocityX * 0.3;
      e.velocityY = o * 0.7 + e.velocityY * 0.3;
    }
    e.deltaX = i - e.startX;
    e.deltaY = u - e.startY;
    e.event = r;
  };
  var updateDetail = function(e, r) {
    var t = 0;
    var a = 0;
    if (e) {
      var n = e.changedTouches;
      if (n && n.length > 0) {
        var i = n[0];
        t = i.clientX;
        a = i.clientY;
      } else if (e.pageX !== void 0) {
        t = e.pageX;
        a = e.pageY;
      }
    }
    r.currentX = t;
    r.currentY = a;
  };
  var now = function(e) {
    return e.timeStamp || Date.now();
  };

  // node_modules/@ionic/core/dist/esm-es5/ionic-global-a9abd569.js
  init_index_36a5fd75();
  var Config = function() {
    function t() {
      this.m = /* @__PURE__ */ new Map();
    }
    t.prototype.reset = function(t2) {
      this.m = new Map(Object.entries(t2));
    };
    t.prototype.get = function(t2, e) {
      var n = this.m.get(t2);
      return n !== void 0 ? n : e;
    };
    t.prototype.getBoolean = function(t2, e) {
      if (e === void 0) {
        e = false;
      }
      var n = this.m.get(t2);
      if (n === void 0) {
        return e;
      }
      if (typeof n === "string") {
        return n === "true";
      }
      return !!n;
    };
    t.prototype.getNumber = function(t2, e) {
      var n = parseFloat(this.m.get(t2));
      return isNaN(n) ? e !== void 0 ? e : NaN : n;
    };
    t.prototype.set = function(t2, e) {
      this.m.set(t2, e);
    };
    return t;
  }();
  var config = new Config();
  var configFromSession = function(t) {
    try {
      var e = t.sessionStorage.getItem(IONIC_SESSION_KEY);
      return e !== null ? JSON.parse(e) : {};
    } catch (t2) {
      return {};
    }
  };
  var saveConfig = function(t, e) {
    try {
      t.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(e));
    } catch (t2) {
      return;
    }
  };
  var configFromURL = function(t) {
    var e = {};
    t.location.search.slice(1).split("&").map(function(t2) {
      return t2.split("=");
    }).map(function(t2) {
      var e2 = t2[0], n = t2[1];
      return [decodeURIComponent(e2), decodeURIComponent(n)];
    }).filter(function(t2) {
      var e2 = t2[0];
      return startsWith(e2, IONIC_PREFIX);
    }).map(function(t2) {
      var e2 = t2[0], n = t2[1];
      return [e2.slice(IONIC_PREFIX.length), n];
    }).forEach(function(t2) {
      var n = t2[0], i = t2[1];
      e[n] = i;
    });
    return e;
  };
  var startsWith = function(t, e) {
    return t.substr(0, e.length) === e;
  };
  var IONIC_PREFIX = "ionic:";
  var IONIC_SESSION_KEY = "ionic-persist-config";
  var getPlatforms = function(t) {
    return setupPlatforms(t);
  };
  var isPlatform = function(t, e) {
    if (typeof t === "string") {
      e = t;
      t = void 0;
    }
    return getPlatforms(t).includes(e);
  };
  var setupPlatforms = function(t) {
    if (t === void 0) {
      t = window;
    }
    if (typeof t === "undefined") {
      return [];
    }
    t.Ionic = t.Ionic || {};
    var e = t.Ionic.platforms;
    if (e == null) {
      e = t.Ionic.platforms = detectPlatforms(t);
      e.forEach(function(e2) {
        return t.document.documentElement.classList.add("plt-".concat(e2));
      });
    }
    return e;
  };
  var detectPlatforms = function(t) {
    var e = config.get("platform");
    return Object.keys(PLATFORMS_MAP).filter(function(n) {
      var i = e === null || e === void 0 ? void 0 : e[n];
      return typeof i === "function" ? i(t) : PLATFORMS_MAP[n](t);
    });
  };
  var isMobileWeb = function(t) {
    return isMobile(t) && !isHybrid(t);
  };
  var isIpad = function(t) {
    if (testUserAgent(t, /iPad/i)) {
      return true;
    }
    if (testUserAgent(t, /Macintosh/i) && isMobile(t)) {
      return true;
    }
    return false;
  };
  var isIphone = function(t) {
    return testUserAgent(t, /iPhone/i);
  };
  var isIOS = function(t) {
    return testUserAgent(t, /iPhone|iPod/i) || isIpad(t);
  };
  var isAndroid = function(t) {
    return testUserAgent(t, /android|sink/i);
  };
  var isAndroidTablet = function(t) {
    return isAndroid(t) && !testUserAgent(t, /mobile/i);
  };
  var isPhablet = function(t) {
    var e = t.innerWidth;
    var n = t.innerHeight;
    var i = Math.min(e, n);
    var r = Math.max(e, n);
    return i > 390 && i < 520 && r > 620 && r < 800;
  };
  var isTablet = function(t) {
    var e = t.innerWidth;
    var n = t.innerHeight;
    var i = Math.min(e, n);
    var r = Math.max(e, n);
    return isIpad(t) || isAndroidTablet(t) || i > 460 && i < 820 && r > 780 && r < 1400;
  };
  var isMobile = function(t) {
    return matchMedia(t, "(any-pointer:coarse)");
  };
  var isDesktop = function(t) {
    return !isMobile(t);
  };
  var isHybrid = function(t) {
    return isCordova(t) || isCapacitorNative(t);
  };
  var isCordova = function(t) {
    return !!(t["cordova"] || t["phonegap"] || t["PhoneGap"]);
  };
  var isCapacitorNative = function(t) {
    var e = t["Capacitor"];
    return !!(e === null || e === void 0 ? void 0 : e.isNative);
  };
  var isElectron = function(t) {
    return testUserAgent(t, /electron/i);
  };
  var isPWA = function(t) {
    var e;
    return !!(((e = t.matchMedia) === null || e === void 0 ? void 0 : e.call(t, "(display-mode: standalone)").matches) || t.navigator.standalone);
  };
  var testUserAgent = function(t, e) {
    return e.test(t.navigator.userAgent);
  };
  var matchMedia = function(t, e) {
    var n;
    return (n = t.matchMedia) === null || n === void 0 ? void 0 : n.call(t, e).matches;
  };
  var PLATFORMS_MAP = { ipad: isIpad, iphone: isIphone, ios: isIOS, android: isAndroid, phablet: isPhablet, tablet: isTablet, cordova: isCordova, capacitor: isCapacitorNative, electron: isElectron, pwa: isPWA, mobile: isMobile, mobileweb: isMobileWeb, desktop: isDesktop, hybrid: isHybrid };
  var defaultMode;
  var getIonMode = function(t) {
    return t && getMode(t) || defaultMode;
  };
  var initialize = function(t) {
    if (t === void 0) {
      t = {};
    }
    if (typeof window === "undefined") {
      return;
    }
    var e = window.document;
    var n = window;
    var i = n.Ionic = n.Ionic || {};
    var r = {};
    if (t._ael) {
      r.ael = t._ael;
    }
    if (t._rel) {
      r.rel = t._rel;
    }
    if (t._ce) {
      r.ce = t._ce;
    }
    setPlatformHelpers(r);
    var o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(n)), { persistConfig: false }), i.config), configFromURL(n)), t);
    config.reset(o);
    if (config.getBoolean("persistConfig")) {
      saveConfig(n, o);
    }
    setupPlatforms(n);
    i.config = config;
    i.mode = defaultMode = config.get("mode", e.documentElement.getAttribute("mode") || (isPlatform(n, "ios") ? "ios" : "md"));
    config.set("mode", defaultMode);
    e.documentElement.setAttribute("mode", defaultMode);
    e.documentElement.classList.add(defaultMode);
    if (config.getBoolean("_testing")) {
      config.set("animated", false);
    }
    var a = function(t2) {
      var e2;
      return (e2 = t2.tagName) === null || e2 === void 0 ? void 0 : e2.startsWith("ION-");
    };
    var s = function(t2) {
      return ["ios", "md"].includes(t2);
    };
    setMode(function(t2) {
      while (t2) {
        var e2 = t2.mode || t2.getAttribute("mode");
        if (e2) {
          if (s(e2)) {
            return e2;
          } else if (a(t2)) {
            console.warn('Invalid ionic mode: "' + e2 + '", expected: "ios" or "md"');
          }
        }
        t2 = t2.parentElement;
      }
      return defaultMode;
    });
  };

  // node_modules/@ionic/core/dist/esm-es5/index.js
  init_helpers_f586db1c();

  // node_modules/@ionic/core/dist/esm-es5/config-80c044f2.js
  var IonicSafeString = function() {
    function e(e2) {
      this.value = e2;
    }
    return e;
  }();
  var setupConfig = function(e) {
    var n = window;
    var r = n.Ionic;
    if (r && r.config && r.config.constructor.name !== "Object") {
      return;
    }
    n.Ionic = n.Ionic || {};
    n.Ionic.config = Object.assign(Object.assign({}, n.Ionic.config), e);
    return n.Ionic.config;
  };
  var getMode2 = function() {
    var e;
    var n = window;
    var r = (e = n === null || n === void 0 ? void 0 : n.Ionic) === null || e === void 0 ? void 0 : e.config;
    if (r) {
      if (r.mode) {
        return r.mode;
      } else {
        return r.get("mode");
      }
    }
    return "md";
  };

  // node_modules/@ionic/core/dist/esm-es5/index.js
  init_index_afea2bcf();

  // node_modules/@ionic/core/dist/esm-es5/index-6e89f340.js
  init_tslib_es6();

  // node_modules/@ionic/core/dist/esm-es5/hardware-back-button-490df115.js
  var MENU_BACK_BUTTON_PRIORITY = 99;

  // node_modules/@ionic/core/dist/esm-es5/index-6e89f340.js
  init_helpers_f586db1c();
  init_animation_258fd22b();
  var baseAnimation = function(n) {
    return createAnimation().duration(n ? 400 : 300);
  };
  var menuOverlayAnimation = function(n) {
    var e;
    var r;
    var t = n.width + 8;
    var i = createAnimation();
    var a = createAnimation();
    if (n.isEndSide) {
      e = t + "px";
      r = "0px";
    } else {
      e = -t + "px";
      r = "0px";
    }
    i.addElement(n.menuInnerEl).fromTo("transform", "translateX(".concat(e, ")"), "translateX(".concat(r, ")"));
    var o = getIonMode(n);
    var u = o === "ios";
    var s = u ? 0.2 : 0.25;
    a.addElement(n.backdropEl).fromTo("opacity", 0.01, s);
    return baseAnimation(u).addAnimation([i, a]);
  };
  var menuPushAnimation = function(n) {
    var e;
    var r;
    var t = getIonMode(n);
    var i = n.width;
    if (n.isEndSide) {
      e = -i + "px";
      r = i + "px";
    } else {
      e = i + "px";
      r = -i + "px";
    }
    var a = createAnimation().addElement(n.menuInnerEl).fromTo("transform", "translateX(".concat(r, ")"), "translateX(0px)");
    var o = createAnimation().addElement(n.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(e, ")"));
    var u = createAnimation().addElement(n.backdropEl).fromTo("opacity", 0.01, 0.32);
    return baseAnimation(t === "ios").addAnimation([a, o, u]);
  };
  var menuRevealAnimation = function(n) {
    var e = getIonMode(n);
    var r = n.width * (n.isEndSide ? -1 : 1) + "px";
    var t = createAnimation().addElement(n.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(r, ")"));
    return baseAnimation(e === "ios").addAnimation(t);
  };
  var createMenuController = function() {
    var n = /* @__PURE__ */ new Map();
    var e = [];
    var r = function(n2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var e2;
        return __generator(this, function(r2) {
          switch (r2.label) {
            case 0:
              return [4, c(n2)];
            case 1:
              e2 = r2.sent();
              if (e2) {
                return [2, e2.open()];
              }
              return [2, false];
          }
        });
      });
    };
    var t = function(n2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var e2;
        return __generator(this, function(r2) {
          switch (r2.label) {
            case 0:
              return [4, n2 !== void 0 ? c(n2) : f()];
            case 1:
              e2 = r2.sent();
              if (e2 !== void 0) {
                return [2, e2.close()];
              }
              return [2, false];
          }
        });
      });
    };
    var i = function(n2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var e2;
        return __generator(this, function(r2) {
          switch (r2.label) {
            case 0:
              return [4, c(n2)];
            case 1:
              e2 = r2.sent();
              if (e2) {
                return [2, e2.toggle()];
              }
              return [2, false];
          }
        });
      });
    };
    var a = function(n2, e2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var r2;
        return __generator(this, function(t2) {
          switch (t2.label) {
            case 0:
              return [4, c(e2)];
            case 1:
              r2 = t2.sent();
              if (r2) {
                r2.disabled = !n2;
              }
              return [2, r2];
          }
        });
      });
    };
    var o = function(n2, e2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var r2;
        return __generator(this, function(t2) {
          switch (t2.label) {
            case 0:
              return [4, c(e2)];
            case 1:
              r2 = t2.sent();
              if (r2) {
                r2.swipeGesture = n2;
              }
              return [2, r2];
          }
        });
      });
    };
    var u = function(n2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var e2, e2;
        return __generator(this, function(r2) {
          switch (r2.label) {
            case 0:
              if (!(n2 != null))
                return [3, 2];
              return [4, c(n2)];
            case 1:
              e2 = r2.sent();
              return [2, e2 !== void 0 && e2.isOpen()];
            case 2:
              return [4, f()];
            case 3:
              e2 = r2.sent();
              return [2, e2 !== void 0];
          }
        });
      });
    };
    var s = function(n2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var e2;
        return __generator(this, function(r2) {
          switch (r2.label) {
            case 0:
              return [4, c(n2)];
            case 1:
              e2 = r2.sent();
              if (e2) {
                return [2, !e2.disabled];
              }
              return [2, false];
          }
        });
      });
    };
    var c = function(n2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var r2, t2;
        return __generator(this, function(i2) {
          switch (i2.label) {
            case 0:
              return [4, O()];
            case 1:
              i2.sent();
              if (n2 === "start" || n2 === "end") {
                r2 = E(function(e2) {
                  return e2.side === n2 && !e2.disabled;
                });
                if (r2) {
                  return [2, r2];
                }
                return [2, E(function(e2) {
                  return e2.side === n2;
                })];
              } else if (n2 != null) {
                return [2, E(function(e2) {
                  return e2.menuId === n2;
                })];
              }
              t2 = E(function(n3) {
                return !n3.disabled;
              });
              if (t2) {
                return [2, t2];
              }
              return [2, e.length > 0 ? e[0].el : void 0];
          }
        });
      });
    };
    var f = function() {
      return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              return [4, O()];
            case 1:
              n2.sent();
              return [2, g()];
          }
        });
      });
    };
    var d = function() {
      return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              return [4, O()];
            case 1:
              n2.sent();
              return [2, w()];
          }
        });
      });
    };
    var v = function() {
      return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              return [4, O()];
            case 1:
              n2.sent();
              return [2, A()];
          }
        });
      });
    };
    var l = function(e2, r2) {
      n.set(e2, r2);
    };
    var m = function(n2) {
      if (e.indexOf(n2) < 0) {
        if (!n2.disabled) {
          p(n2);
        }
        e.push(n2);
      }
    };
    var _ = function(n2) {
      var r2 = e.indexOf(n2);
      if (r2 > -1) {
        e.splice(r2, 1);
      }
    };
    var p = function(n2) {
      var r2 = n2.side;
      e.filter(function(e2) {
        return e2.side === r2 && e2 !== n2;
      }).forEach(function(n3) {
        return n3.disabled = true;
      });
    };
    var h = function(n2, e2, r2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var t2;
        return __generator(this, function(i2) {
          switch (i2.label) {
            case 0:
              if (A()) {
                return [2, false];
              }
              if (!e2)
                return [3, 3];
              return [4, f()];
            case 1:
              t2 = i2.sent();
              if (!(t2 && n2.el !== t2))
                return [3, 3];
              return [4, t2.setOpen(false, false)];
            case 2:
              i2.sent();
              i2.label = 3;
            case 3:
              return [2, n2._setOpen(e2, r2)];
          }
        });
      });
    };
    var b = function(e2, r2) {
      var t2 = n.get(e2);
      if (!t2) {
        throw new Error("animation not registered");
      }
      var i2 = t2(r2);
      return i2;
    };
    var g = function() {
      return E(function(n2) {
        return n2._isOpen;
      });
    };
    var w = function() {
      return e.map(function(n2) {
        return n2.el;
      });
    };
    var A = function() {
      return e.some(function(n2) {
        return n2.isAnimating;
      });
    };
    var E = function(n2) {
      var r2 = e.find(n2);
      if (r2 !== void 0) {
        return r2.el;
      }
      return void 0;
    };
    var O = function() {
      return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(function(n2) {
        return new Promise(function(e2) {
          return componentOnReady(n2, e2);
        });
      }));
    };
    l("reveal", menuRevealAnimation);
    l("push", menuPushAnimation);
    l("overlay", menuOverlayAnimation);
    if (typeof document !== "undefined") {
      document.addEventListener("ionBackButton", function(n2) {
        var e2 = g();
        if (e2) {
          n2.detail.register(MENU_BACK_BUTTON_PRIORITY, function() {
            return e2.close();
          });
        }
      });
    }
    return { registerAnimation: l, get: c, getMenus: d, getOpen: f, isEnabled: s, swipeGesture: o, isAnimating: v, isOpen: u, enable: a, toggle: i, close: t, open: r, _getOpenSync: g, _createAnimation: b, _register: m, _unregister: _, _setOpen: h, _setActiveMenu: p };
  };
  var menuController = createMenuController();

  // node_modules/@ionic/core/dist/esm-es5/overlays-4801a327.js
  init_tslib_es6();

  // node_modules/@ionic/core/dist/esm-es5/framework-delegate-6a45ed30.js
  init_helpers_f586db1c();

  // node_modules/@ionic/core/dist/esm-es5/overlays-4801a327.js
  init_helpers_f586db1c();
  var createController = function(e) {
    return { create: function(t) {
      return createOverlay(e, t);
    }, dismiss: function(t, n, r) {
      return dismissOverlay(document, t, n, e, r);
    }, getTop: function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
          return [2, getOverlay(document, e)];
        });
      });
    } };
  };
  var alertController = createController("ion-alert");
  var actionSheetController = createController("ion-action-sheet");
  var loadingController = createController("ion-loading");
  var modalController = createController("ion-modal");
  var pickerController = createController("ion-picker");
  var popoverController = createController("ion-popover");
  var toastController = createController("ion-toast");
  var createOverlay = function(e, t) {
    if (typeof window !== "undefined" && typeof window.customElements !== "undefined") {
      return window.customElements.whenDefined(e).then(function() {
        var n = document.createElement(e);
        n.classList.add("overlay-hidden");
        Object.assign(n, Object.assign(Object.assign({}, t), { hasController: true }));
        getAppRoot(document).appendChild(n);
        return new Promise(function(e2) {
          return componentOnReady(n, e2);
        });
      });
    }
    return Promise.resolve();
  };
  var isOverlayHidden = function(e) {
    return e.classList.contains("overlay-hidden");
  };
  var dismissOverlay = function(e, t, n, r, o) {
    var i = getOverlay(e, r, o);
    if (!i) {
      return Promise.reject("overlay does not exist");
    }
    return i.dismiss(t, n);
  };
  var getOverlays = function(e, t) {
    if (t === void 0) {
      t = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast";
    }
    return Array.from(e.querySelectorAll(t)).filter(function(e2) {
      return e2.overlayIndex > 0;
    });
  };
  var getOverlay = function(e, t, n) {
    var r = getOverlays(e, t).filter(function(e2) {
      return !isOverlayHidden(e2);
    });
    return n === void 0 ? r[r.length - 1] : r.find(function(e2) {
      return e2.id === n;
    });
  };
  var getAppRoot = function(e) {
    return e.querySelector("ion-app") || e.body;
  };

  // node_modules/@ionic/core/dist/esm-es5/index.js
  init_index_b32cad98();
  init_index_36a5fd75();
  var IonicSlides = function(e) {
    var o = e.swiper, t = e.extendParams;
    var s = { effect: void 0, direction: "horizontal", initialSlide: 0, loop: false, parallax: false, slidesPerView: 1, spaceBetween: 0, speed: 300, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, touchEventsTarget: "container", freeMode: false, freeModeMomentum: true, freeModeMomentumRatio: 1, freeModeMomentumBounce: true, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: false, freeModeMinimumVelocity: 0.02, autoHeight: false, setWrapperSize: false, zoom: { maxRatio: 3, minRatio: 1, toggle: false }, touchRatio: 1, touchAngle: 45, simulateTouch: true, touchStartPreventDefault: false, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, threshold: 0, touchMoveStopPropagation: true, touchReleaseOnEdges: false, iOSEdgeSwipeDetection: false, iOSEdgeSwipeThreshold: 20, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, watchSlidesVisibility: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, loopAdditionalSlides: 0, noSwiping: true, runCallbacksOnInit: true, coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }, flipEffect: { slideShadows: true, limitRotation: true }, cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 }, fadeEffect: { crossFade: false }, a11y: { prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide" } };
    if (o.pagination) {
      s.pagination = { type: "bullets", clickable: false, hideOnClick: false };
    }
    if (o.scrollbar) {
      s.scrollbar = { hide: true };
    }
    t(s);
  };
})();
/*! Bundled license information:

@ionic/core/dist/esm-es5/index-b32cad98.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/helpers-f586db1c.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/animation-258fd22b.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-36a5fd75.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-afea2bcf.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/ios.transition-6a838b0c.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/md.transition-b7d7b475.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/cubic-bezier-e78d1307.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/gesture-controller-17060b7c.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-422b6e83.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/ionic-global-a9abd569.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/config-80c044f2.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/hardware-back-button-490df115.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-6e89f340.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/framework-delegate-6a45ed30.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-e86f0117.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/overlays-4801a327.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
