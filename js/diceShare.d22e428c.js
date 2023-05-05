(window.webpackJsonp = window.webpackJsonp || []).push([["diceShare"], {
    "0351": function (e, t, l) {
        "use strict";
        l.r(t);
        var s = l("7a23"), c = e => (Object(s.E)("data-v-28abb120"), e = e(), Object(s.C)(), e);
        const n = {class: "page"}, o = {class: "header"}, a = ["src"], i = {class: "title"},
            r = {class: "money", ref: "moneyRef"}, b = {key: 0, class: "desc"}, u = {key: 1, class: "desc"},
            d = {class: "tip"}, j = c(() => Object(s.i)("img", {
                class: "arrow",
                src: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/share_arrow.png",
                alt: ""
            }, null, -1)), p = {key: 0, class: "text-tip"},
            m = [Object(s.k)("点击"), c(() => Object(s.i)("img", {src: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/sharequn.png"}, null, -1)), Object(s.k)("即可成功分享")],
            O = {key: 1, class: "text-tip"},
            v = [Object(s.k)("点击"), c(() => Object(s.i)("img", {src: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/sharepyq.png"}, null, -1)), Object(s.k)("即可成功分享")],
            f = {key: 2, class: "text-tip"}, h = c(() => Object(s.i)("div", {class: "mid"}, null, -1)),
            y = {class: "total"}, g = Object(s.k)(" 总发放200000份 剩余"), T = Object(s.k)("份 "), w = ["innerHTML"],
            k = {style: {"text-align": "center", "line-height": "1.6rem"}},
            z = c(() => Object(s.i)("b", {style: {color: "red", "font-size": "1rem"}}, "主动放弃活动资格?", -1)),
            I = Object(s.k)(), S = c(() => Object(s.i)("br", null, null, -1)), L = Object(s.k)(" 宣传企业形象，该活动"),
            x = c(() => Object(s.i)("span", {style: {color: "red"}}, "纯送福利", -1)),
            B = c(() => Object(s.i)("br", null, null, -1)), M = Object(s.k)("无任何附加条件"),
            G = c(() => Object(s.i)("br", null, null, -1)), _ = Object(s.k)("完成任务，现金"),
            C = c(() => Object(s.i)("span", {style: {color: "red"}}, "立刻到账", -1)),
            q = c(() => Object(s.i)("br", null, null, -1)), W = Object(s.k)("您有"), F = {style: {color: "red"}},
            H = Object(s.k)("个好友"), P = c(() => Object(s.i)("span", {style: {color: "red"}}, "已完成任务", -1)),
            J = c(() => Object(s.i)("br", null, null, -1)), R = Object(s.k)("已经分走"), U = {style: {color: "red"}},
            E = Object(s.k)("元 "), N = c(() => Object(s.i)("div", {class: "subdesc"}, "全民福利礼，不领白不领", -1));
        c = l("7bb3");
        const Q = {class: "modal"}, D = ["src"], $ = {class: Object(s.u)({inner: 1})}, A = {class: "precent_crt"},
            K = {class: "btn-content"};
        var V = {
            components: {Progress: l("d5fb").a},
            props: {
                show: Boolean,
                fail: Boolean,
                cancle: Boolean,
                precent: Number,
                subText: {type: String, default: "我知道了"},
                cancleText: {type: String, default: "关闭"},
                headImg: {type: String, default: "http://1899.oss-cn-shenzhen.aliyuncs.com/static/img/pdd2.png"}
            },
            setup(e, {emit: t}) {
                const l = Object(s.G)(!1), c = Object(s.G)(!1), n = Object(s.G)(!1);
                var {show: e, fail: o} = Object(s.M)(e);
                return Object(s.Q)(e, e => {
                    e && (c.value = !0, setTimeout(() => {
                        c.value = !1
                    }, 500))
                }, {immediate: !0}), Object(s.Q)(o, e => {
                    e && (n.value = !0, setTimeout(() => {
                        n.value = !1
                    }, 1200))
                }, {immediate: !0}), {
                    onsubmit: () => {
                        l.value = !0, setTimeout(() => {
                            t("submit"), l.value = !1
                        }, 500)
                    }, oncancle: () => {
                        l.value = !0, setTimeout(() => {
                            t("cancle"), l.value = !1
                        }, 500)
                    }, isClose: l, isShow: c, isFail: n
                }
            }
        }, X = (l("0a47"), l("6b0d")), Y = (V = (X = l.n(X))()(V, [["render", function (e, t, l, c, n, o) {
            var a = Object(s.J)("Progress");
            return Object(s.S)((Object(s.B)(), Object(s.h)("div", Q, [Object(s.i)("div", {
                class: Object(s.u)({
                    outer: 1,
                    show: c.isShow,
                    close: c.isClose,
                    fail: c.isFail
                })
            }, [Object(s.i)("img", {
                class: "header-img",
                src: l.headImg
            }, null, 8, D), Object(s.i)("div", $, [Object(s.I)(e.$slots, "default", {}, void 0, !0), Object(s.S)(Object(s.i)("div", A, [Object(s.l)(a, {precent: l.precent}, null, 8, ["precent"])], 512), [[s.P, l.precent]]), Object(s.i)("div", K, [l.cancle ? (Object(s.B)(), Object(s.h)("div", {
                key: 0,
                class: "btn cancle",
                onClick: t[0] || (t[0] = Object(s.T)((...e) => c.oncancle && c.oncancle(...e), ["stop"]))
            }, Object(s.L)(l.cancleText), 1)) : Object(s.g)("", !0), Object(s.i)("div", {
                class: "btn submit",
                onClick: t[1] || (t[1] = Object(s.T)((...e) => c.onsubmit && c.onsubmit(...e), ["stop"]))
            }, Object(s.L)(l.subText), 1)])])], 2)], 512)), [[s.P, l.show]])
        }], ["__scopeId", "data-v-6fa1e0fc"]]), l("e0eb"));
        const Z = {
                endPageUrl: 'javascript:WeixinJSBridge.call("closeWindow");',
                defaultTips: ['<span style="font-size: 1.1rem;color: #f25543;font-weight: bold;">恭喜你</span><br/>', "<span>获得现金红包</span><br/>", '<span style="font-size:1rem;color:#f25543;font-weight: bold;">%(money)元</span><br/>', '<span style="color:#f25543">活动详情:</span><span style="color:black;">%(zz)</span><br/>', '<span style="color:#f25543">领取方法:</span><span style="color:black;">%(yq)</span><br/>', '<span style="color:#f25543; font-size: 1rem;font-weight:bold">现金红包立刻到账</span><br>', '<span style="color:black;"><span style="color:#f25543">成功分享</span>后自动存入您的微信钱包</span><br>', "<span>红包总额仅剩余" + (50 + 50 * Math.random()).toFixed(2) + "万元，先到先得，活动经微信认证，真实有效</span><br/>"].join(""),
                timeFail: ['<b style="font-size: 0.9rem;color: #f25543">分享失败</b><br/>', '注意：<b style="font-size: 0.9rem;color: red">未正确分享</b>将导致🧧红包🧧发放失败<br>'].join(""),
                successTips: ['<b style="font-size: 0.9rem;color: #f25543">恭喜您</b><br>', '获得￥ <span style="font-size: 1rem;color: #f25543">%(moneyTotal)</span> 现金红包，', '金额已提交银行打款，活动过于火爆，预计一个工作日内到账，请注意查收微信绑定银行卡到账情况！<br><br><span style="font-size: .9rem;color:#f25543">注意:打款期间分享信息不可删除，否则无法核实用户信息，以免现金红包发放失败！</span>'].join(""),
                groupTips: [{
                    successTitle: '<b style="font-size: 1rem;color: #07c160;">分享成功</b>',
                    successTips: '请继续分享到<b style="font-size: 0.9rem;color: red">3</b>个不同的群<br/><span style="color:#f25543">红包将立即到账！</span>'
                }, {
                    successTitle: '<b style="font-size: 1rem;color: #07c160;">分享成功</b>',
                    successTips: '请继续分享到<b style="font-size: .9rem;color: red">2</b>个不同的群<br/><span style="color:#f25543">红包将立即到账！</span>'
                }, {
                    successTitle: '<b style="font-size: 1rem;color: #f25543">❌分享失败</b>',
                    successTips: '注意：<span color="red">分享到相同的群会失败</span><br>请尝试重新分享到<b style="font-size: .9rem;color: red">1个不同的群</b><br>'
                }, {
                    successTitle: '<b style="font-size: 1rem;color: #07c160;">分享成功</b>',
                    successTips: '请继续分享到<b style="font-size: .9rem;color: red">1</b>个不同的群<br/><span style="color:#f25543">红包将立即到账！</span>'
                }],
                timeLineTips: [{
                    successTitle: '<b style="font-size: 1rem;color: #07c160;">分享成功</b>',
                    successTips: '剩下最后一步啦！<br />请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>，<b style="font-size: 18px;color: red;">%(money)</b>元💰立即到账！'
                }, {
                    successTitle: '<b style="font-size: 1rem;color: red;">分享失败</b>',
                    successTips: '注意：必须[<span color="red">公开</span>]分享哦!<br>请尝试重新分享到<b style="font-size: 18px;color: red">朋友圈</b><br>'
                }]
            },
            ee = e => e ? e.replace("%(zz)", null == (e = window) || null == (e = e.data) || null == (e = e.content) || null == (e = e.s) ? void 0 : e.zz).replace("%(yq)", null == (e = window) || null == (e = e.data) || null == (e = e.content) || null == (e = e.s) ? void 0 : e.yq).replace("%(money)", null == (e = window) ? void 0 : e.money).replace("{city}", Object(Y.b)("")).replace("%(moneyTotal)", null == (e = window) ? void 0 : e.money) : "";
        var te = l("6747"), le = l("b95c");
        let se, ce, ne, oe, ae, ie, re, be, ue, de;
        location.host;
        const je = async () => {
            var e;
            0 === ce && (Object(Y.h)(), Object(te.i)(null == (e = window) || null == (e = e.data) || null == (e = e.shareInfo) ? void 0 : e.link)), 0 != se || 3 < ce ? (me(), Object(Y.g)("share-timeline", 1)) : (pe(), Object(Y.g)("share-appmessage", 1)), Oe()
        }, pe = () => {
            ce++, document.title = Object(le.d)()
        }, me = () => {
            2 == ++se ? document.title = Object(le.b)(!0) : document.title = Object(le.d)(!0)
        }, Oe = async () => {
            let e;
            if (ce + se == 1 && (de.value = 1, setTimeout(() => {
                de.value = 60
            }, 100)), ce + se == 2 && (e = 80), ce + se == 3 && (e = 86), ce + se == 4 && (e = 90), ce + se == 5 && (e = 95), ce + se == 6 && (de.value = 99), 6 < ce + se && (de.value = 100), 1 < ce && setTimeout(() => {
                e && (de.value = e)
            }, 500), 0 == se) ne.value = ee(Z.groupTips[ce - 1].successTitle + "<br/>" + Z.groupTips[ce - 1].successTips), Z.groupTips[ce - 1].fail && (ie.value = !0); else if (se < 3) {
                var t;
                if (null != (t = window) && null != (t = t.data) && null != (t = t.attached) && t.quan_img) ue.value = 3; else if (null != (t = window) && null != (t = t.data) && null != (t = t.attached) && null != (t = t.share_jump) && t.d) {
                    const e = (await Object(te.d)()).link;
                    Object(te.f)(e, "jump", () => {
                        Object(Y.f)(e)
                    })
                } else ue.value = 2, WeixinJSBridge.call("showOptionMenu");
                3 == ue.value ? ne.value = ee(Z.timeLineTips[se - 1].successTitle + "<br/>" + Z.timeLineTips[se - 1].successTips2) : ne.value = ee(Z.timeLineTips[se - 1].successTitle + "<br/>" + Z.timeLineTips[se - 1].successTips), Z.timeLineTips[se - 1].fail && (ie.value = !0)
            } else ne.value = ee(Z.successTips), be.value = !0;
            oe.value = !0, ie.value && setTimeout(() => {
                ie.value = !1
            }, 2e3)
        };
        l("7129"), c = {
            components: {userList: c.a, modal: V}, setup() {
                const e = Object(Y.c)("qst") ? +Object(Y.c)("qst") : 0,
                    t = Object(Y.c)("pst") ? +Object(Y.c)("pst") : 0, l = {qst: e, pst: t};
                Object(s.G)(!1);
                const c = Object(s.G)(!1), n = Object(s.G)(null), o = Object(s.G)(null),
                    a = (window.money = localStorage.getItem("money") ? localStorage.getItem("money") : (250 + 50 * Math.random()).toFixed(2), localStorage.setItem("money", window.money), Object(s.G)("")),
                    i = Object(s.G)(""), r = Object(s.G)(!1), b = Object(s.G)({}), u = Object(s.G)(!1),
                    d = Object(s.G)(1), j = Object(s.G)(!1);
                var p = Object(Y.d)();
                const m = Object(s.G)(0);
                var O = localStorage.getItem("joinuser") ? localStorage.getItem("joinuser") : 10 + parseInt(10 * Math.random());
                localStorage.setItem("joinuser", O);
                let v = (+O * (250 + 50 * Math.random())).toFixed(2),
                    f = (v = localStorage.getItem("jointotal") ? localStorage.getItem("jointotal") : v, localStorage.setItem(v, "jointotal"), 11e4 + Math.floor(1e4 * Math.random()));
                Object(s.z)(() => {
                    var s, p;
                    s = n, p = {
                        time: 1e3,
                        number: Number(window.money),
                        regulator: 50
                    }, s.value.innerHTML = "￥" + (null == p || null == (s = p.number) ? void 0 : s.toFixed(2)), Object(te.a)().then(s => {
                        b.value = s, a.value = ee(0 == e && 0 == t ? Z.defaultTips : Z.successTips), setTimeout(() => {
                            h(), ((e, t, l, s, c, n, o, a) => {
                                se = +e.pst, ce = +e.qst, de = a, ne = t, oe = l, ae = s, ie = c, be = n, ue = o;
                                const i = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null;
                                e = i.replace(/hidden/i, "visibilitychange"), document.addEventListener(e, (function () {
                                    if (document[i]) oe.value = !1, ae.value = "", re = Date.now(); else {
                                        if (!(ce < 5 && 0 === se) && 3 == ue.value) return oe.value = !0, ie.value = !0, setTimeout(() => {
                                            ie.value = !1
                                        }, 2e3), !1;
                                        je()
                                    }
                                })), 0 != se || 0 != ce ? je() : document.title = Object(le.d)()
                            })(l, a, c, i, r, u, d, m)
                        }, 500), Object(Y.i)(null == (s = window) || null == (s = s.data) || null == (s = s.attached) ? void 0 : s.back_api_s, () => {
                            j.value = !0
                        })
                    }), setInterval(() => {
                        var e = parseInt(100 * Math.random());
                        {
                            var t = f, l = e, s = o;
                            const c = setInterval((function () {
                                t--, --l <= 0 && clearInterval(c), s.value.innerHTML && (s.value.innerHTML = t)
                            }), 30)
                        }
                        f -= e
                    }, 3e3), Object(Y.g)("tosharer", 1)
                });
                const h = () => {
                    c.value = !0
                };
                return {
                    moneyRef: n,
                    showModel: c,
                    showTips: h,
                    modelContent: a,
                    failShare: r,
                    timeFailContent: i,
                    closeTips: () => {
                        var e;
                        i.value = "", u.value && Object(Y.f)((null == (e = window) || null == (e = e.data) ? void 0 : e.endPageUrl) || Z.endPageUrl), c.value = !1
                    },
                    info: b,
                    leftRef: o,
                    totalLeft: f,
                    showBackWarn: j,
                    closeBackWarn: () => {
                        var e;
                        j.value = !1, document.title = Object(le.d)(), Object(Y.i)(null == (e = window) || null == (e = e.data) || null == (e = e.attached) ? void 0 : e.back_api_s, () => {
                            j.value = !0
                        })
                    },
                    cancleBackWarn: () => {
                        var e;
                        j.value = !1, window.location.href = (null == (e = window) || null == (e = e.data) ? void 0 : e.endPageUrl) || Z.endPageUrl
                    },
                    joinuser: O,
                    jointotal: v,
                    formate: ee,
                    shareType: d,
                    ios: p,
                    precent: m
                }
            }
        }, l("9028"), t.default = X()(c, [["render", function (e, t, l, c, Q, D) {
            var $, A = Object(s.J)("userList"), K = Object(s.J)("modal");
            return Object(s.B)(), Object(s.h)(s.a, null, [Object(s.i)("div", n, [Object(s.i)("div", o, [Object(s.i)("img", {
                class: "headimg",
                src: null == ($ = c.info) || null == ($ = $.content) || null == ($ = $.s) ? void 0 : $.img
            }, null, 8, a), Object(s.i)("div", i, Object(s.L)(c.formate(null == ($ = c.info) || null == ($ = $.content) || null == ($ = $.s) ? void 0 : $.title)), 1), Object(s.i)("div", r, "0", 512), 1 == c.shareType ? (Object(s.B)(), Object(s.h)("div", b, "分享到微信群后，自动存入零钱")) : Object(s.g)("", !0), 2 == c.shareType ? (Object(s.B)(), Object(s.h)("div", u, "分享到朋友圈后，自动存入零钱")) : Object(s.g)("", !0), Object(s.i)("div", {
                class: "btn",
                onClick: t[0] || (t[0] = (...e) => c.showTips && c.showTips(...e))
            }, "领取")]), Object(s.i)("div", d, [j, 1 == c.shareType && c.ios ? (Object(s.B)(), Object(s.h)("div", p, m)) : Object(s.g)("", !0), 2 == c.shareType && c.ios ? (Object(s.B)(), Object(s.h)("div", O, v)) : Object(s.g)("", !0), c.ios ? Object(s.g)("", !0) : (Object(s.B)(), Object(s.h)("div", f, "点击分享"))]), h, Object(s.i)("div", y, [g, Object(s.i)("span", {ref: "leftRef"}, Object(s.L)(c.totalLeft), 513), T]), Object(s.l)(A)]), Object(s.l)(K, {
                show: c.showModel,
                onSubmit: c.closeTips,
                fail: c.failShare,
                headImg: null == ($ = c.info) || null == (t = $.content) || null == (A = t.s) ? void 0 : A.modalImg,
                precent: c.precent
            }, {
                default: Object(s.R)(() => [Object(s.i)("div", {
                    style: {
                        "text-align": "center",
                        "line-height": "1.6rem"
                    }, innerHTML: c.timeFailContent || c.modelContent
                }, null, 8, w)]), _: 1
            }, 8, ["show", "onSubmit", "fail", "headImg", "precent"]), Object(s.l)(K, {
                show: c.showBackWarn,
                cancle: !0,
                subText: "继续领取",
                cancleText: "残忍放弃",
                onSubmit: c.closeBackWarn,
                onCancle: c.cancleBackWarn,
                fail: c.showBackWarn,
                headImg: null == ($ = c.info) || null == (t = $.content) || null == (A = t.s) ? void 0 : A.modalImg
            }, {
                default: Object(s.R)(() => [Object(s.i)("div", k, [Object(s.i)("p", null, [z, I, S, L, x, B, M, G, _, C, q, W, Object(s.i)("span", F, Object(s.L)(c.joinuser), 1), H, P, J, R, Object(s.i)("span", U, Object(s.L)(c.jointotal), 1), E, N])])]),
                _: 1
            }, 8, ["show", "onSubmit", "onCancle", "fail", "headImg"])], 64)
        }], ["__scopeId", "data-v-28abb120"]])
    }, "0a47": function (e, t, l) {
        "use strict";
        l("5acb")
    }, "5acb": function (e, t, l) {
    }, 7729: function (e, t, l) {
    }, 9028: function (e, t, l) {
        "use strict";
        l("7729")
    }
}]);