(window.webpackJsonp = window.webpackJsonp || []).push([["dice"], {
    5690: function (e, t, c) {
        "use strict";
        c("609e")
    }, "609e": function (e, t, c) {
    }, a8bf: function (e, t, c) {
        "use strict";
        c.r(t);
        var a = c("7a23");
        const n = {class: "content"},
            l = (m = e => (Object(a.E)("data-v-4902d87f"), e = e(), Object(a.C)(), e))(() => Object(a.i)("div", {class: "title"}, null, -1)),
            i = {ref: "canvasRef", class: "animate", width: "310", height: "220"}, s = {class: "joins"},
            o = {class: "jointext"}, b = m(() => Object(a.i)("div", {class: "huodong"}, "微信活动 真实有效", -1)),
            u = {key: 1, class: "hb-content"}, r = {class: "hb"}, d = {class: "top"}, j = ["src"], O = {class: "title"},
            v = {class: "desc"}, h = m(() => Object(a.i)("span", {class: "text-tip"}, "可提现", -1)),
            g = [m(() => Object(a.i)("span", null, "抢", -1))];
        var m = c("7bb3"), w = c("6747"), p = c("e0eb"), f = c("35db");
        const I = c("7129");
        m = {
            components: {userList: m.a}, setup() {
                const e = Object(a.G)(), t = Object(a.G)(), c = Object(a.G)(!1), n = [], l = Object(a.G)(0),
                    i = Object(a.G)(!1);
                var s = localStorage.getItem("cache-num");
                const o = Object(a.F)({}), b = Object(a.G)(!1), u = Object(a.G)(!1),
                    r = Object(a.G)(s ? parseInt(s) : 5e3 + parseInt(1e3 * Math.random()));
                let d;
                Object(a.z)(() => {
                    const t = e.value.getContext("2d"), c = new Image;
                    c.src = "https://g-hdg.faisys.com/image/bbhd/animate/0.png", c.onload = function () {
                        t.drawImage(c, 0, 0, 310, 220)
                    }, O(), l.value = window.innerHeight - 550, setTimeout(() => {
                        j()
                    }, 3e3), Object(w.a)(!1).then(() => {
                        var e = null == (e = window) || null == (e = e.data) || null == (e = e.content) || null == (e = e.d) ? void 0 : e.title,
                            t = null == (t = window) || null == (t = t.data) || null == (t = t.content) || null == (t = t.d) ? void 0 : t.subTitle,
                            c = null == (c = window) || null == (c = c.data) || null == (c = c.content) || null == (c = c.d) ? void 0 : c.img;
                        o.title = e, o.subTitle = t, o.img = c, Object(p.i)(null == (e = window) || null == (t = e.data) || null == (c = t.attached) ? void 0 : c.back_api)
                    }), Object(p.g)("enter", 1)
                });
                const j = () => {
                    let l = 1, s = 0;
                    c.value = !0, d && clearTimeout(d), d = setTimeout(() => {
                        u.value = !0, Object(a.t)(() => {
                            I.create(t.value, {resize: !0, useWorker: !0})(), setTimeout(() => {
                                u.value = !1
                            }, 3e3)
                        }), i.value = !0, clearTimeout(d)
                    }, 3e3);
                    const o = setInterval(() => {
                        const t = e.value.getContext("2d");
                        n[l] ? (t.clearRect(0, 0, 310, 220), t.drawImage(n[l], 0, 0, 310, 220)) : s < 1 ? (s++, l = 1) : (t.clearRect(0, 0, 310, 220), t.drawImage(n[0], 0, 0, 310, 220), clearInterval(o), c.value = !1), l++
                    }, 100)
                }, O = () => {
                    for (let e = 0; e < 15; e++) {
                        const t = new Image;
                        t.src = `https://g-hdg.faisys.com/image/bbhd/animate/${e}.png`, n.push(t)
                    }
                };
                return setInterval(() => {
                    r.value = r.value + parseInt(100 * Math.random()), localStorage.setItem("cache-num", r.value)
                }, 5e3), {
                    canvasRef: e, play: j, height: l, joinNum: r, swing: c, showHb: i, toShare: async () => {
                        b.value = !0, Object(w.e)(), Object(p.g)("gosharer", 1), Object(p.g)("play", 1)
                    }, content: o, btnActive: b, confettiRef: t, showConfetti: u, formate: f.a
                }
            }
        };
        var k = (c("5690"), c("6b0d"));
        c = c.n(k);
        t.default = c()(m, [["render", function (e, t, c, m, w, p) {
            var f = Object(a.J)("userList");
            return Object(a.B)(), Object(a.h)(a.a, null, [m.showConfetti ? (Object(a.B)(), Object(a.h)("canvas", {
                key: 0,
                ref: "confettiRef",
                class: "confetti",
                onClick: t[0] || (t[0] = (...e) => m.toShare && m.toShare(...e))
            }, null, 512)) : Object(a.g)("", !0), Object(a.i)("div", n, [l, Object(a.i)("div", {
                class: Object(a.u)({
                    bowl: 1,
                    swing: m.swing
                }), onClick: t[1] || (t[1] = Object(a.T)((...e) => m.play && m.play(...e), ["stop"]))
            }, [Object(a.i)("canvas", i, null, 512)], 2), Object(a.i)("div", s, [Object(a.l)(f)]), Object(a.i)("div", o, "已有" + Object(a.L)(m.joinNum) + "人参与", 1), b]), m.showHb ? (Object(a.B)(), Object(a.h)("div", u, [Object(a.i)("div", r, [Object(a.i)("div", d, [Object(a.i)("img", {src: m.content.img}, null, 8, j), Object(a.i)("div", O, Object(a.L)(m.formate(m.content.title)), 1), Object(a.i)("div", v, [Object(a.k)(Object(a.L)(m.content.subTitle) + " ", 1), h])]), Object(a.i)("div", {
                class: Object(a.u)({
                    btn: 1,
                    active: m.btnActive
                }), onClick: t[2] || (t[2] = (...e) => m.toShare && m.toShare(...e))
            }, g, 2)])])) : Object(a.g)("", !0)], 64)
        }], ["__scopeId", "data-v-4902d87f"]])
    }
}]);