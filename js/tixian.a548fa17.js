(window.webpackJsonp = window.webpackJsonp || []).push([["tixian"], {
    "215a": function (e, t, c) {
    }, "65a0": function (e, t, c) {
    }, "67b8": function (e, t, c) {
        "use strict";
        c("215a")
    }, 7585: function (e, t, c) {
    }, "8ea3": function (e, t, c) {
        "use strict";
        c("7585")
    }, "92bb": function (e, t, c) {
        "use strict";
        c("eeb9")
    }, c44a: function (e, t, c) {
        "use strict";
        c("65a0")
    }, c936: function (e, t, c) {
        "use strict";
        c.r(t);
        var a = c("510b"), l = (c("1f87"), c("dc0f")), n = (c("77f8"), c("e41f")), i = (c("8a58"), c("7a23"));
        const o = ["innerHTML"], s = {class: "shownewv6es_2"},
            b = (_ = e => (Object(i.E)("data-v-02e3cd84"), e = e(), Object(i.C)(), e))(() => Object(i.i)("p", {class: "p1"}, "提现待处理", -1)),
            d = _(() => Object(i.i)("p", {class: "p3"}, [Object(i.k)(" 完成分享任务（"), Object(i.i)("span", {style: {color: "red"}}, "1小时内"), Object(i.k)("处理完成） ")], -1)),
            r = _(() => Object(i.i)("p", {class: "p3"}, [Object(i.k)(" 1天内未完成分享任务，将导致"), Object(i.i)("span", {style: {color: "red"}}, "提现失败")], -1)),
            u = _(() => Object(i.i)("div", {class: "llqmsk"}, null, -1)), j = {class: "popcontent"},
            O = Object(i.k)("长按分享区"), v = Object(i.k)("点击转发给好友"), h = Object(i.k)("选择"),
            p = _(() => Object(i.i)("span", {
                style: {
                    color: "red",
                    "font-weight": "bold",
                    "font-size": "1.2em"
                }
            }, "9", -1)), f = Object(i.k)("个群或好友"), m = Object(i.k)("提现成功"), w = ["src"],
            g = _(() => Object(i.i)("div", {class: "share-area"}, [Object(i.i)("div", {class: "longtab"}, [Object(i.i)("img", {src: "https://res-static.inframe.mobi/profile-pic/2177630/ddecfa28d6bc8eea.png"}), Object(i.i)("div", {class: Object(i.u)({cir: 1})}), Object(i.i)("div", {class: "huan"}), Object(i.i)("div", {class: "huan"})])], -1));
        var k = c("6747"), y = c("b650"),
            _ = (c("66b9"), e => (Object(i.E)("data-v-f87b2760"), e = e(), Object(i.C)(), e));
        const S = {class: "cntr"}, R = _(() => Object(i.i)("h3", null, "分享状态检测", -1)),
            x = Object(i.k)("长按分享区"), B = Object(i.k)("点击"),
            G = _(() => Object(i.i)("span", {style: {color: "#ee0a24", "font-size": "1.1rem"}}, " 转发给朋友", -1)),
            C = Object(i.k)("点击右上角"), E = _(() => Object(i.i)("span", {class: "border_btn"}, " 多选", -1)),
            I = Object(i.k)("选择"),
            J = _(() => Object(i.i)("span", {style: {color: "#ee0a24", "font-size": "1.1rem"}}, " 9 ", -1)),
            T = Object(i.k)("个好友"), z = Object(i.k)("点击"),
            M = _(() => Object(i.i)("span", {class: "sub_btn"}, " 发送 ", -1)), W = Object(i.k)("成功分享，现金"),
            H = _(() => Object(i.i)("span", {style: {color: "#ee0a24", "font-size": "1.1rem"}}, " 立刻到账 ", -1)),
            L = [_(() => Object(i.i)("span", {style: {color: "#ee0a24"}}, "分享失败", -1)), Object(i.k)("，请按照要求正确分享，分享成功现金"), _(() => Object(i.i)("span", {style: {color: "#07c160"}}, "立刻到账", -1)), Object(i.k)("!!! ")],
            U = {key: 0, class: "btn"}, F = Object(i.k)("继续分享");
        _ = {
            props: {state: Number, show: Boolean}, setup(e, {emit: t}) {
                const c = Object(i.G)(0), a = Object(i.G)("#07c160"), l = Object(i.G)("checked"), n = Object(i.G)(!1);
                var o = Object(i.M)(e).show;
                let s;
                return Object(i.Q)(o, t => {
                    t ? s = setInterval(() => {
                        c.value < e.state && (c.value = c.value + 1), c.value === e.state && (a.value = "#ee0a24", l.value = "clear", n.value = !0)
                    }, 1e3) : setTimeout(() => {
                        c.value = 0, n.value = !1, s && clearInterval(s)
                    }, 300)
                }, {immediate: !0}), {
                    active: c, activeColor: a, activeIcon: l, showError: n, closeSharedialog: () => {
                        t("closeSharedialog")
                    }
                }
            }
        };
        var P = (c("92bb"), c("6b0d")), D = (_ = (P = c.n(P))()(_, [["render", function (e, t, c, n, o, s) {
                const b = l.a;
                var d = a.a, r = y.a;
                return Object(i.B)(), Object(i.h)("div", S, [R, Object(i.l)(d, {
                    "active-color": n.activeColor,
                    direction: "vertical",
                    active: n.active,
                    "active-icon": n.activeIcon
                }, {
                    default: Object(i.R)(() => [Object(i.l)(b, null, {
                        default: Object(i.R)(() => [x]),
                        _: 1
                    }), Object(i.l)(b, null, {
                        default: Object(i.R)(() => [B, G]),
                        _: 1
                    }), Object(i.l)(b, null, {
                        default: Object(i.R)(() => [C, E]),
                        _: 1
                    }), Object(i.l)(b, null, {
                        default: Object(i.R)(() => [I, J, T]),
                        _: 1
                    }), Object(i.l)(b, null, {
                        default: Object(i.R)(() => [z, M]),
                        _: 1
                    }), Object(i.l)(b, null, {default: Object(i.R)(() => [W, H]), _: 1})]), _: 1
                }, 8, ["active-color", "active", "active-icon"]), Object(i.i)("p", {
                    class: Object(i.u)({
                        error: 1,
                        show: n.showError
                    }), style: {color: "#646566"}
                }, L, 2), n.showError ? (Object(i.B)(), Object(i.h)("div", U, [Object(i.l)(r, {
                    class: "vanbtn",
                    round: "",
                    type: "primary",
                    color: "linear-gradient(to right, #ff6034, #ee0a24)",
                    onClick: n.closeSharedialog
                }, {default: Object(i.R)(() => [F]), _: 1}, 8, ["onClick"])])) : Object(i.g)("", !0)])
            }], ["__scopeId", "data-v-f87b2760"]]), c("ef90"), c("0629"), c("cab1"), c("7d4a")), q = (c("b95c"), c("99c1")),
            N = c("35db"), Q = c("7416"), A = c("e0eb");
        _ = {
            components: {ShareFail: _, modal: q.a, toushu: Q.a}, setup() {
                Object(A.g)("enter_tixian", 1);
                const e = Object(i.G)(null), t = Object(i.G)(!1), c = Object(i.G)(!1), a = Object(i.G)(1),
                    l = Object(i.G)(null), n = Object(i.G)(!1), o = Object(i.G)(0);
                let s = 0;
                window.money = Object(A.c)("_m") || (1e3 + 100 * Math.random()).toFixed(2);
                var b = Object(N.a)(N.b.successTips);
                const d = Object(i.G)();
                let r, u;
                Object(i.z)(() => {
                    Object(A.j)(e, {
                        time: 1e3,
                        number: window.money,
                        regulator: 50
                    }), Object(k.f)(window.location.href.split("#")[0], "enter"), Object(k.b)().then(async e => {
                        d.value = e, u = e.shareInfo, r = null == e ? void 0 : e.endPageUrl, j(), Object(A.i)(null == (e = window) || null == (e = e.data) || null == (e = e.attached) ? void 0 : e.back_api)
                    })
                });
                const j = async () => {
                    var e = await Object(D.b)(s);
                    l.value = e
                };
                let O, v = 0;
                const h = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null;
                var p = h.replace(/hidden/i, "visibilitychange");
                document.addEventListener(p, (function () {
                    var e;
                    t.value = !1, document[h] ? (v++, O = Date.now()) : (s++, j(), (e = Date.now()) - O < 3e3 ? (c.value = !0, a.value = 2) : e - O < 5e3 ? (c.value = !0, a.value = 3) : 8e3 < e - O || 5e3 < e - O && 2 < v || 3 < v ? (a.value = 1, f()) : (c.value = !0, a.value = 4))
                }));
                const f = () => {
                    Object(A.g)("total-share", 1), n.value = !0
                };
                return p = () => {
                    WeixinJSBridge.call("hideOptionMenu")
                }, "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", p, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", p), document.attachEvent("onWeixinJSBridgeReady", p)) : p(), setInterval(() => {
                    o.value = (o.value + 1) % 4
                }, 1500), {
                    moneyRef: e, popup: t, clickShare: () => {
                        t.value = !0
                    }, sharedialog: c, sharedialogState: a, closeSharedialog: () => {
                        c.value = !1, t.value = !0
                    }, imgSrc: l, closeTips: () => {
                        var e;
                        n.value = !1, null != (e = window) && null != (e = e.data) && e.endPageUrl ? Object(A.f)(null == (e = window) || null == (e = e.data) ? void 0 : e.endPageUrl) : null != (e = window) && null != (e = e.data) && null != (e = e.attached) && e.bkBx ? Object(A.f)(null == (e = window) || null == (e = e.data) || null == (e = e.attached) ? void 0 : e.bkBx) : window.location.href = 'javascript:WeixinJSBridge.call("closeWindow");'
                    }, info: d, modelContent: b, showModel: n, active: o
                }
            }
        };
        c("8ea3"), c("67b8"), c("c44a"), t.default = P()(_, [["render", function (e, t, c, k, y, _) {
            var S = Object(i.J)("toushu"), R = Object(i.J)("modal");
            const x = Object(i.J)("ShareFail");
            var B = n.a;
            const G = l.a, C = a.a;
            return Object(i.B)(), Object(i.h)(i.a, null, [Object(i.l)(S), Object(i.l)(R, {
                show: k.showModel,
                onSubmit: k.closeTips,
                fail: !1,
                headImg: null == (S = k.info) || null == (R = S.content) || null == (S = R.s) ? void 0 : S.modalImg,
                shareType: e.shareType,
                subText: "查看提现进度"
            }, {
                default: Object(i.R)(() => [Object(i.i)("div", {
                    style: {
                        "text-align": "center",
                        "line-height": "1.4rem"
                    }, innerHTML: k.modelContent
                }, null, 8, o)]), _: 1
            }, 8, ["show", "onSubmit", "headImg", "shareType"]), Object(i.l)(B, {
                show: k.sharedialog,
                "onUpdate:show": t[0] || (t[0] = e => k.sharedialog = e),
                round: !0,
                closeable: !1,
                position: "top",
                overlay: !0
            }, {
                default: Object(i.R)(() => [Object(i.l)(x, {
                    show: k.sharedialog,
                    state: k.sharedialogState,
                    onCloseSharedialog: k.closeSharedialog
                }, null, 8, ["show", "state", "onCloseSharedialog"])]), _: 1
            }, 8, ["show"]), Object(i.i)("div", s, [b, Object(i.i)("p", {
                class: "p2",
                ref: "moneyRef"
            }, "￥" + Object(i.L)(e.money), 513), d, Object(i.i)("div", {
                class: "btn",
                onClick: t[1] || (t[1] = (...e) => k.clickShare && k.clickShare(...e))
            }, "立刻提现"), r, u]), Object(i.l)(B, {
                show: k.popup,
                "onUpdate:show": t[2] || (t[2] = e => k.popup = e),
                round: !0,
                closeable: !0,
                style: {height: "90vw"},
                position: "bottom"
            }, {
                default: Object(i.R)(() => [Object(i.i)("div", j, [Object(i.l)(C, {active: k.active}, {
                    default: Object(i.R)(() => [Object(i.l)(G, null, {
                        default: Object(i.R)(() => [O]),
                        _: 1
                    }), Object(i.l)(G, null, {
                        default: Object(i.R)(() => [v]),
                        _: 1
                    }), Object(i.l)(G, null, {
                        default: Object(i.R)(() => [h, p, f]),
                        _: 1
                    }), Object(i.l)(G, null, {default: Object(i.R)(() => [m]), _: 1})]), _: 1
                }, 8, ["active"]), Object(i.i)("img", {class: "shareimg", src: k.imgSrc}, null, 8, w), g])]), _: 1
            }, 8, ["show"])], 64)
        }], ["__scopeId", "data-v-02e3cd84"]])
    }, eeb9: function (e, t, c) {
    }
}]);