(window.webpackJsonp = window.webpackJsonp || []).push([["backList"], {
    "0ca3": function (e, n, t) {
        "use strict";
        t.r(n);
        var a = t("7a23"), o = t("6747"), c = t("e0eb"), i = {
            setup() {
                const e = () => {
                    var e, n = +(localStorage.getItem("bk_index") || 0);
                    localStorage.setItem("bk_index", 1 + n);
                    let t = null == (e = window) || null == (e = e.data) ? void 0 : e.bklist[n];
                    Object(o.h)("bkindex" + n, 1), t || (t = null == (e = window) || null == (n = e.data) || null == (e = n.attached) ? void 0 : e.bkBx, localStorage.removeItem("bk_index")), Object(c.f)(t)
                };
                return Object(a.z)(() => {
                    Object(o.a)(!1).then(() => {
                        try {
                            tbsJs.onReady('{useCachedApi : "true"}', (function (e) {
                            }))
                        } catch (n) {
                        }
                        var n = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                        window.onpageshow = function (n) {
                            e()
                        }, n || (window.onhashchange = function () {
                            e()
                        }), e()
                    })
                }), {}
            }
        }, l = t("6b0d");
        t = t.n(l);
        n.default = t()(i, [["render", function (e, n, t, a, o, c) {
            return null
        }]])
    }
}]);