(window.webpackJsonp = window.webpackJsonp || []).push([["tixianQun"], {
    "6bf3": function (t, e, n) {
        "use strict";
        n.r(e);
        var a = n("7a23");
        const s = {class: "chat-container", id: "app"},
            l = {class: "layui-row chat-body", style: {top: "0px", bottom: "45px"}}, c = {class: "clearfloat"},
            o = {key: 0, class: "author-name"}, i = {class: "chat-date"}, r = {key: 0, class: "chat-avatars"},
            p = ["src"], b = {class: "chat-message complete-read", "data-msg-id": "0"}, u = ["innerHTML"],
            m = {key: 2, class: "chat-avatars"},
            g = [Object(a.i)("img", {src: "//1899.oss-cn-shenzhen.aliyuncs.com/static/css/express/customer.png"}, null, -1)],
            d = Object(a.i)("div", {style: {clear: "both"}}, null, -1), h = {class: "chat-footer"},
            O = {key: 0, class: "quick_tx"}, j = {key: 0, class: "btn"}, v = {key: 1, class: "send-bar"},
            y = {class: "tool-box"}, f = {key: 0, class: "send-btn-div"};
        var x = n("6747"), k = n("7d4a");
        const w = (T = t => (Object(a.E)("data-v-1df72f37"), t = t(), Object(a.C)(), t))(() => Object(a.i)("div", {class: "bk"}, null, -1)),
            I = T(() => Object(a.i)("div", {class: "tip"}, "长按图片即可保存图片哦", -1)), S = {class: "img_contair"},
            _ = ["src"];
        var T = {
            props: {src: String, show: Boolean}, setup: (t, {emit: e}) => ({
                close: () => {
                    e("close")
                }
            })
        }, B = (n("b7be"), n("6b0d")), q = (T = (B = n.n(B))()(T, [["render", function (t, e, n, s, l, c) {
            return n.show ? (Object(a.B)(), Object(a.h)("div", {
                key: 0,
                class: "cnrt",
                onClick: e[0] || (e[0] = (...t) => s.close && s.close(...t))
            }, [w, I, Object(a.i)("div", S, [Object(a.i)("img", {
                class: "img",
                src: n.src
            }, null, 8, _)])])) : Object(a.g)("", !0)
        }], ["__scopeId", "data-v-1df72f37"]]), n("7416")), C = n("e0eb");
        T = {
            components: {showImg: T, toushu: q.a}, setup() {
                Object(C.g)("enter_pyq", 1);
                let t = +localStorage.getItem("base_tx");
                var e = !!localStorage.getItem("quick_tx");
                const n = Object(a.G)(e),
                    s = (t = t || 5e3 + parseInt(2e3 * Math.random()), (t = parseInt(t - 10 * Math.random())) <= 1e3 && Object(C.f)(null == (e = window) || null == (e = e.data) || null == (e = e.attached) ? void 0 : e.bkBx), localStorage.setItem("base_tx", t), Object(a.G)(!1)),
                    l = Object(a.G)(""), c = () => {
                        var t = t => 9 < t ? t : "0" + t;
                        const e = new Date;
                        return `${e.getFullYear()}-${t(e.getMonth() + 1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}:` + t(e.getSeconds())
                    }, o = Object(a.G)("");
                let i;
                const r = {
                    time: c(),
                    type: "left",
                    html: `<p>您好，我是客服苗苗，很高兴为您服务！</p>\n                <p><br /></p>\n                <p>\n                  您有一笔活动金正在提现中，由于活动过于火爆，前面有${t}名用户正在排队中，您是否需要快速提现？\n                </p>\n                <p><br /></p>\n                <p>\n                  <button\n                    class="action-btn"\n                    style="background-color: #07c160"\n                    data-type="quick"\n                  >\n                    我要快速提现\n                  </button>\n                </p>\n                <p>\n                  <button\n                    class="action-btn"\n                    style="background-color: #9e9e9e"\n                    data-type="padding"\n                  >\n                    继续排队提现\n                  </button>\n                </p>`
                }, p = {time: c(), type: "right", html: "我要快速提现", isread: !1}, b = {
                    time: c(),
                    type: "left",
                    html: '<p>\n                <img\n                  class="layui-xiaotian-photos"\n                  src="__src"\n                  style="max-width: 100%; width: 50vw; "\n                />\n              </p>'
                }, u = {
                    time: c(),
                    type: "left",
                    html: '<p>\n                <span style="color: rgb(255, 0, 0)"></span>长按保存上方<span\n                  style="color: rgb(255, 0, 0)"\n                  >图片</span>发送至<span\n                  style="color: rgb(255, 0, 0)"\n                  >朋友圈</span\n                >，<span\n                  style="color: rgb(255, 0, 0)"\n                  >截图</span\n                >给我即可加速提现！（当天到账）\n              </p>\n              <p><br /></p>\n              <p><span style="color: #ff0000">请注意⚠️</span>:&nbsp;</p>\n              <p\n                class="p1"\n                style="\n                  margin-top: 0px;\n                  margin-bottom: 0px;\n                  font-variant-numeric: normal;\n                  font-variant-east-asian: normal;\n                  font-stretch: normal;\n                  font-size: 13px;\n                  line-height: normal;\n                  font-family: \'PingFang SC\';\n                  white-space: normal;\n                "\n              >\n                <span style="font-size: 16px"\n                  >务必公开朋友圈且保留至少<span\n                    class="s1"\n                    style="\n                      font-variant-numeric: normal;\n                      font-variant-east-asian: normal;\n                      font-stretch: normal;\n                      line-height: normal;\n                      font-family: \'Helvetica Neue\';\n                    "\n                    >12</span\n                  >小时，否则将会取消领取资格！</span\n                >\n              </p>\n              <p\n                class="p1"\n                style="\n                  margin-top: 0px;\n                  margin-bottom: 0px;\n                  font-variant-numeric: normal;\n                  font-variant-east-asian: normal;\n                  font-stretch: normal;\n                  font-size: 13px;\n                  line-height: normal;\n                  font-family: \'PingFang SC\';\n                  white-space: normal;\n                "\n              >\n                <br />\n              </p>\n              <p>\n                <span style="color: rgb(255, 0, 0)">温馨提示</span\n                >:长按图片即可保存图片哦！\n              </p>\n              <p><br /></p>'
                }, m = {time: c(), type: "right", html: "我要排队提现", isread: !1}, g = {
                    time: c(),
                    type: "left",
                    html: '<p>\n                <span style="color: rgb(255, 0, 0)"></span>谢谢您的耐心等待，由于活动火爆，我们将在48小时内完成打款!<span\n                  style="color: rgb(255, 0, 0)"\n                  >\n              </p>\n              <p><br /></p>\n\n              <p>\n                <span style="color: rgb(255, 0, 0)">温馨提示</span\n                >:长按保存上方<span\n                  style="color: rgb(255, 0, 0)"\n                  >图片</span>发送至<span\n                  style="color: rgb(255, 0, 0)"\n                  >朋友圈</span\n                >，<span\n                  style="color: rgb(255, 0, 0)"\n                  >截图</span\n                >给我即可加速提现！（当天到账）\n              </p>\n              <p><br /></p>'
                };
                c();
                let d = localStorage.getItem("msg");
                d = d ? JSON.parse(d) : [];
                const h = Object(a.G)(d), O = () => {
                    const t = document.getElementById("chat-box");
                    t.scrollTop = t.scrollHeight
                };
                return Object(a.z)(() => {
                    document.title = "请稍后...", Object(x.f)(window.location.href.split("#")[0], "enter"), Object(x.b)().then(async t => {
                        var e;
                        i = await Object(k.b)(), b.html = b.html.replace("__src", i), Object(C.i)(null == (e = window) || null == (e = e.data) || null == (e = e.attached) ? void 0 : e.back_api)
                    }), setTimeout(() => {
                        0 == h.value.length && h.value.push(r)
                    }, 500)
                }), Object(a.Q)(h, t => {
                    localStorage.setItem("msg", JSON.stringify(t))
                }, {deep: !0}), {
                    input: o, submit: () => {
                        var t = {time: c(), type: "right", html: o.value, isread: !1};
                        h.value.push(t), o.value = ""
                    }, clickContent: t => {
                        var e;
                        "quick" === (null == t || null == (e = t.target) || null == (e = e.dataset) ? void 0 : e.type) ? (h.value.push(p), setTimeout(() => {
                            h.value = h.value.map(t => (t.isread = !0, t)), setTimeout(() => {
                                h.value.push(b, u), setTimeout(() => {
                                    O(), n.value = !0, localStorage.setItem("quick_tx", 1)
                                }, 500)
                            }, 1e3)
                        }, 1e3)) : "padding" === (null == t || null == (e = t.target) || null == (e = e.dataset) ? void 0 : e.type) && (h.value.push(m), setTimeout(() => {
                            h.value = h.value.map(t => (t.isread = !0, t)), setTimeout(() => {
                                h.value.push(b, g), setTimeout(() => {
                                    O()
                                }, 500)
                            }, 1e3)
                        }, 1e3)), "img" == t.target.localName && (l.value = t.target.currentSrc, s.value = !0)
                    }, msgs: h, showImg: s, showImgUrl: l, close: () => {
                        s.value = !1
                    }, getfile: t => {
                        t = t.target.files[0];
                        let e = new FileReader;
                        e.readAsDataURL(t), e.onload = t => {
                            var e, a;
                            t = t.target.result, t = {
                                time: c(),
                                type: "right",
                                html: `<p ><img style="width:100%" src="${t}">\n                </p>`
                            }, h.value.push(t), setTimeout(() => {
                                O()
                            }, 500), localStorage.getItem("hasacce") ? (e = +localStorage.getItem("base_tx"), e -= parseInt(5 + 10 * Math.random()), localStorage.setItem("base_tx", e)) : (a = +localStorage.getItem("base_tx"), a -= parseInt(500 + 1e3 * Math.random()), localStorage.setItem("base_tx", a)), localStorage.setItem("hasacce", 1), setTimeout(() => {
                                h.value = h.value.map(t => (t.isread = !0, t)), setTimeout(() => {
                                    var t = {
                                        time: c(),
                                        type: "left",
                                        html: `已帮您加速体现，前面还有${+localStorage.getItem("base_tx")}位用户在排队`
                                    };
                                    n.value = !1, localStorage.removeItem("quick_tx"), Object(C.g)("qun_upload", 1), localStorage.setItem("has_upload", 1), h.value.push(t), setTimeout(() => {
                                        O()
                                    }, 500)
                                }, 1e3)
                            }, 1e3)
                        }
                    }, quickTx: n
                }
            }
        };
        n("c143"), e.default = B()(T, [["render", function (t, e, n, x, k, w) {
            var I = Object(a.J)("toushu"), S = Object(a.J)("showImg");
            return Object(a.B)(), Object(a.h)(a.a, null, [Object(a.l)(I, {type: "d"}), Object(a.l)(S, {
                show: x.showImg,
                src: x.showImgUrl,
                onClose: x.close
            }, null, 8, ["show", "src", "onClose"]), Object(a.i)("div", s, [Object(a.i)("div", l, [Object(a.i)("div", {
                class: "chat-box",
                id: "chat-box",
                onClick: e[0] || (e[0] = (...t) => x.clickContent && x.clickContent(...t))
            }, [(Object(a.B)(!0), Object(a.h)(a.a, null, Object(a.H)(x.msgs, t => (Object(a.B)(), Object(a.h)(a.a, null, [Object(a.i)("div", c, ["left" == t.type ? (Object(a.B)(), Object(a.h)("div", o, [Object(a.i)("small", i, Object(a.L)(t.time), 1)])) : Object(a.g)("", !0), Object(a.i)("div", {class: Object(a.u)(t.type)}, ["left" == t.type ? (Object(a.B)(), Object(a.h)("div", r, [Object(a.i)("img", {src: "//1899.oss-cn-shenzhen.aliyuncs.com/static/css/express/robot.jpg"}, null, 8, p)])) : Object(a.g)("", !0), "right" == t.type ? (Object(a.B)(), Object(a.h)("i", {
                key: 1,
                class: Object(a.u)({"layui-icon": 1, "read-flag": 1, "no-read": !t.isread, "already-read": t.isread})
            }, Object(a.L)(t.isread ? "已读" : "未读"), 3)) : Object(a.g)("", !0), Object(a.i)("div", b, [Object(a.i)("div", {innerHTML: t.html}, null, 8, u)]), "right" == t.type ? (Object(a.B)(), Object(a.h)("div", m, g)) : Object(a.g)("", !0)], 2)]), d], 64))), 256))])]), Object(a.i)("div", h, [x.quickTx ? (Object(a.B)(), Object(a.h)("div", O, [Object(a.i)("input", {
                type: "file",
                class: "img_up",
                onChange: e[1] || (e[1] = (...t) => x.getfile && x.getfile(...t))
            }, null, 32), x.quickTx ? (Object(a.B)(), Object(a.h)("div", j, "＋点击上传朋友圈截图")) : Object(a.g)("", !0)])) : (Object(a.B)(), Object(a.h)("div", v, [Object(a.i)("div", y, [x.quickTx ? Object(a.g)("", !0) : Object(a.S)((Object(a.B)(), Object(a.h)("textarea", {
                key: 0,
                id: "textarea",
                placeholder: "请输入内容",
                "onUpdate:modelValue": e[2] || (e[2] = t => x.input = t)
            }, null, 512)), [[a.O, x.input]])]), x.quickTx ? Object(a.g)("", !0) : (Object(a.B)(), Object(a.h)("div", f, [Object(a.i)("input", {
                type: "button",
                value: "发送",
                class: Object(a.u)({"send-input": 1, active: x.input}),
                id: "sendBtn",
                onClick: e[3] || (e[3] = (...t) => x.submit && x.submit(...t))
            }, null, 2)]))]))])])], 64)
        }]])
    }, "908b": function (t, e, n) {
    }, b7be: function (t, e, n) {
        "use strict";
        n("dad3")
    }, c143: function (t, e, n) {
        "use strict";
        n("908b")
    }, dad3: function (t, e, n) {
    }
}]);