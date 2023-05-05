(window.webpackJsonp = window.webpackJsonp || []).push([["app"], {
    0: function(t, a, e) {
        t.exports = e("56d7")
    },
    "0629": function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return b
            }
        ));
        var n = e("e0eb")
            , l = (e("d055"),
            e("b95c"))
            , o = e("793c")
            , i = e("ca88")
            , c = e("7d4a");
        let r, d;
        const s = 535;
        let m = 0;
        const b = async(t,a=1)=>{
            const e = document.createElement("canvas")
                , n = e.getContext("2d");
            let i;
            try {
                i = await Object(c.f)("https://g.fp.ps.netease.com/market/file/6364f7e843d7922daa0f42a1WuXWWwz804")
            } catch (t) {
                i = await Object(c.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/bk2.png")
            }
            r = i.width,
                d = i.height,
                e.width = r,
                e.height = d,
                n.drawImage(i, 0, 0, r, d);
            const b = new Date
                , p = b.getHours() + ":" + (9 < b.getMinutes() ? b.getMinutes() : "0" + b.getMinutes());
            n.fillStyle = "#FFFFFF",
                n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                n.fillText(p, 80, 90),
                await f(n, a),
                h = window.money || (50 * Math.random() + 150).toFixed(2),
                n.fillStyle = "#af966f",
                n.font = 'normal bold 150px "Microsoft YaHei, PingFang SC"';
            var h, j = "" + h, v = Object(c.h)(n, j);
            n.fillText(j, (r - v - 70) / 2, 780 + m),
                n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                n.fillText("元", (r - v - 70) / 2 + v, 775 + m),
            a <= 4 && (j = [["已存入钱包", "已存入零钱"]],
                v = Object(l.e)(j, !0),
                n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                j = Object(c.a)(v, {
                    size: 42,
                    font: 'normal bold 42px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#C0A67A",
                    forceRotate: !0
                }),
                n.drawImage(j, (r - 42 * v.length * 1.2) / 2, 860),
                n.fillText(">", (r - 42 * v.length * 1.2) / 2 + 42 * v.length * 1.2, 900)),
                j = [["回复表情到聊天"]],
                v = Object(l.e)(j, !0),
                n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                j = Object(c.a)(v, {
                    size: 38,
                    font: 'normal bold 38px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#C0A67A",
                    forceRotate: !0
                });
            n.drawImage(j, (r - 38 * v.length * 1.2) / 2 + 50, 1030),
                n.fillStyle = "#b3b3b3",
                n.font = 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                j = [[60 + parseInt(30 * Math.random()) + "/100，"], [(1e4 * (55 + 10 * Math.random()) / 100).toFixed(2) + "/10000"]],
                v = Object(l.e)(j, !0),
                n.fillText(v, 160, 1320),
                j = Object(c.a)("已抢", {
                    size: 38,
                    font: 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#b3b3b3",
                    forceRotate: !0
                }),
                n.drawImage(j, 50, 1280);
            const w = [];
            for (let t = 0; t < 6; t++) {
                let t = !0;
                for (; t; ) {
                    const a = Object(o.b)();
                    0 == w.filter(t=>t.name == a.name).length && (w.push(a),
                        t = !1)
                }
            }
            for (let a = 0; a < w.length; a++) {
                var O = w[a];
                try {
                    var y = await Object(c.f)(O.avatar);
                    n.drawImage(y, 50, 1400 + 230 * a, 120, 120)
                } catch (t) {}
                n.fillStyle = "#000000",
                    n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"',
                    n.fillText(O.name, 230, 1450 + 230 * a),
                    O = (parseFloat(h) * (.5 + .8 * Math.random())).toFixed(2),
                    w[a].money = O,
                    n.fillStyle = "#00000",
                    n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"';
                var M = Object(c.h)(n, h);
                O = (n.fillText(O + "元", r - M - 100, 1450 + 230 * a),
                Date.now() - 4e4 * (w.length - a) - Math.random(1e3 * Math.random() * 30));
                const e = new Date(O);
                M = e.getHours() + ":" + (9 < e.getMinutes() ? e.getMinutes() : "0" + e.getMinutes()),
                    n.fillStyle = "#b3b3b3",
                    n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                    n.fillText(M, 230, 1540 + 230 * a)
            }
            return t && (n.globalAlpha = .95,
                n.fillStyle = "#e2614c",
                n.fillRect((r - s - 50) / 2, 1520, 585, 585),
                n.globalAlpha = 1,
                v = await Object(c.g)(t, {
                    margin: 1,
                    errorCorrectionLevel: "L",
                    color: {
                        dark: "#e2614c"
                    }
                }),
                n.drawImage(v, (r - s) / 2, 1550, s, s)),
                a % 2 == 1 ? g(n, a) : u(n),
                e.toDataURL()
        }
            , f = async(t,a)=>{
            if (a <= 2) {
                var e = Object(i.a)(null == (e = window) || null == (e = e.data) || null == (e = e.content) ? void 0 : e.type)
                    , o = [[Object(n.b)("")], [e.name], ["汽车", "轿车", "电动车"], ["一季度", "3月", "上年度", "新年"], ["销量", "交付"], ["创新高", "破纪录", "新突破"]]
                    , d = (o = Object(l.e)(o, !0),
                    t.fillStyle = "#000",
                    t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                    Object(c.h)(t, o));
                t.fillText(o, (r - d) / 2 + 40, 522);
                try {
                    var s = await Object(c.f)(e.avatar);
                    t.drawImage(s, (r - d) / 2 - 60, 455, 100, 100)
                } catch (t) {}
            } else if (a <= 4) {
                d = Object(i.a)(null == (o = window) || null == (e = o.data) || null == (s = e.content) ? void 0 : s.type),
                    o = [[Object(n.b)("")], [d.name], ["汽车", "4s店", "直营点"], ["开业", "開業", "新店"], ["送", "派"], ["醴", "礼"]],
                    e = Object(l.e)(o, !0),
                    t.fillStyle = "#000",
                    t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                    s = Object(c.h)(t, e),
                    t.fillText(e, (r - s) / 2 + 40, 522);
                try {
                    var b = await Object(c.f)(d.avatar);
                    t.drawImage(b, (r - s) / 2 - 60, 455, 100, 100)
                } catch (t) {}
            } else if (a <= 6) {
                b = Object(i.a)(null == (o = window) || null == (e = o.data) || null == (d = e.content) ? void 0 : d.type),
                    m = 110,
                    s = [[Object(n.b)("")], [b.name], ["汽车", "4s店", "直营点"], ["开业", "開業", "新店"], ["送", "派"], ["醴", "礼"]],
                    a = Object(l.e)(s, !0),
                    Object(c.a)(a, {
                        size: 60,
                        font: 'normal bold 60px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#000",
                        rotate: 35,
                        forceRotate: !0
                    }),
                    t.font = 'normal bold 60px "Microsoft YaHei, PingFang SC"',
                    t.fillStyle = "#000",
                    o = Object(c.h)(t, a),
                    t.fillText(a, (r - o) / 2, 682);
                try {
                    var f = await Object(c.f)(b.avatar);
                    f.width,
                        f.height,
                        t.drawImage(f, (r - 160) / 2, 410, 200, f.height / f.width * 200)
                } catch (t) {}
            }
        }
            , g = (ctx, args) => {
            // First section
            let text1 = [["人人"], ["有份", "可抢"]];
            text1 = Object(l.e)(text1, true);
            ctx.font = 'normal bold 85px "Microsoft YaHei, PingFang SC"';
            ctx.fillStyle = "#e2614c";
            ctx.globalAlpha = 0.95;
            ctx.fillRect((r - s - 50) / 2, 1400, 585, 120);
            Object(c.a)(text1, {
                size: 85,
                font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                fillStyle: "#fff",
                rotate: 35,
                forceRotate: true
            });
            ctx.drawImage(text1, (r - 85 * text1.length * 1.2) / 2, 1420);

            // Second section
            ctx.globalAlpha = 0.95;
            ctx.fillStyle = "#e2614c";
            ctx.fillRect((r - s - 50) / 2, 2105, 585, 120);
            let text2 = [["长按"], ["识別"], ["二维码"]];
            text2 = Object(l.e)(text2, true);
            ctx.font = 'normal bold 62px "Microsoft YaHei, PingFang SC"';
            ctx.fillStyle = "#fff";
            ctx.fillText(text2, (r - 62 * text2.length) / 2 - 30, 2175);
            let image = Object(c.a)("抢", {
                size: 60,
                font: 'normal bold 70px "Microsoft YaHei, PingFang SC"',
                fillStyle: "#fff",
                rotate: 35,
                forceRotate: true
            });
            ctx.drawImage(image, (r - 62 * text2.length) / 2 + 62 * text2.length - 26, 2115);
        }
            , u = t=>{
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((r - s - 50) / 2 - 129, 1520, 130, 585);
            var a = [["人人有份", "一人一份", "见者有份"]];
            Object(l.e)(a, !0).split("").map((a,e)=>{
                    a = Object(c.a)(a, {
                        size: 85,
                        font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff",
                        forceRotate: !0
                    }),
                        t.drawImage(a, (r - s - 50) / 2 - 100, 1580 + 120 * e)
                }
            );
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((r - s - 50) / 2 + s + 49, 1520, 130, 585),
                a = [["长按扫码领", "长按识码领"]];
            Object(l.e)(a, !0).split("").map((a,e)=>{
                    a = Object(c.a)(a, {
                        size: 65,
                        font: 'normal bold 65px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff",
                        forceRotate: !0
                    }),
                        t.drawImage(a, (r - s - 50) / 2 + s + 60, 1580 + 100 * e)
                }
            )
        }
    },
    "0692": function(t, a, e) {
        "use strict";
        e("6ecd")
    },
    "0bad": function(t, a, e) {},
    "2a0a": function(t, a, e) {
        "use strict";
        e("0bad")
    },
    "35db": function(t, a, e) {
        "use strict";
        e.d(a, "b", (function() {
                return o
            }
        )),
            e.d(a, "c", (function() {
                    return i
                }
            )),
            e.d(a, "a", (function() {
                    return c
                }
            ));
        var n = e("e0eb")
            , l = e("ca88");
        const o = {
            endPageUrl: 'javascript:WeixinJSBridge.call("closeWindow");',
            defaultTips: ['<span style="font-size: 1.1rem;color: #f25543;font-weight: bold;">恭喜你</span><br/>', "<span>获得现金红包</span><br/>", '<span style="font-size:1rem;color:#f25543;font-weight: bold;">%(money)元</span><br/>', '<span style="color:#f25543">活动详情:</span><span style="color:black;">%(zz)</span><br/>', '<span style="color:#f25543">领取方法:</span><span style="color:black;">%(yq)</span><br/>', '<span style="color:#f25543; font-size: 1rem;font-weight:bold">现金红包立刻到账</span><br>', '<span style="color:black;"><span style="color:#f25543">成功分享</span>后自动存入您的微信钱包</span><br>', "<span>红包总额仅剩余" + (50 + 50 * Math.random()).toFixed(2) + "万元，先到先得，活动经微信认证，真实有效</span><br/>"].join(""),
            timeFail: ['<b style="font-size: 0.9rem;color: #f25543">分享失败</b><br/>', '注意：<b style="font-size: 0.9rem;color: red">未正确分享</b>将导致🧧红包🧧发放失败<br>'].join(""),
            successTips: ['<b style="font-size: 0.9rem;color: #f25543">恭喜您</b><br>', '获得￥ <span style="font-size: 1rem;color: #f25543">%(moneyTotal)</span> 现金红包', '金额已提交银行打款，活动过于火爆，预计<span style="color: #f25543">明日5点</span>前到账，请注意查收微信绑定银行卡到账情况！<br><span style="font-size: .9rem;color:#f25543;font-weight:bold">注意:打款期间分享信息不可删除，否则无法核实用户信息，以免现金红包发放失败！</span>'].join(""),
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
            }, {
                successTitle: '<b style="font-size: 1rem;color: #07c160;">恭喜您🎉🎉</b>',
                successTips: '<span style="font-size: .9rem;color: red">您的运气爆棚啦！！！</span><br/>额外赠您50元现金红包，只需分享到<b style="color: #f25543">一个人数大于50人</b>的微信群，总额<span style="font-size: 1rem;color: #f25543">%(moneyTotal)</span>💰立即到账！'
            }, {
                successTitle: '<b style="font-size: 1rem;color: #07c160">分享成功</b>',
                successTips: '剩下最后一步啦！请分享到<br>[<span style="font-size: 1.1rem;color: red">亲朋好友群</span>]<br/><span style="color: red">和好友分享此刻的喜悦吧!</span><br>'
            }],
            timeLineTips: []
        }
            , i = function(t, a) {
            t.value.innerHTML = "￥" + (null == a || null == (t = a.number) ? void 0 : t.toFixed(2))
        }
            , c = t=>{
            if (!t)
                return "";
            var a = Object(l.a)(null == (a = window) || null == (a = a.data) || null == (a = a.content) ? void 0 : a.type);
            return t.replace("%(zz)", null == (t = window) || null == (t = t.data) || null == (t = t.content) || null == (t = t.s) ? void 0 : t.zz).replace("%(yq)", null == (t = window) || null == (t = t.data) || null == (t = t.content) || null == (t = t.s) ? void 0 : t.yq).replace("%(money)", null == (t = window) ? void 0 : t.money).replace("{city}", Object(n.b)("")).replace("%(moneyTotal)", null == (t = window) ? void 0 : t.money).replace("{car}", a.name)
        }
    },
    "3c84": function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return s
            }
        ));
        var n = e("e0eb")
            , l = (e("d055"),
            e("b95c"))
            , o = e("793c")
            , i = (e("ca88"),
            e("7d4a"));
        let c, r;
        const d = 535
            , s = async(t,a=1)=>{
            const e = document.createElement("canvas")
                , n = e.getContext("2d");
            let s;
            try {
                s = await Object(i.f)("https://g.fp.ps.netease.com/market/file/6364f7e843d7922daa0f42a1WuXWWwz804")
            } catch (e) {
                s = await Object(i.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/bk2.png")
            }
            c = s.width,
                r = s.height,
                e.width = c,
                e.height = r,
                n.drawImage(s, 0, 0, c, r);
            const g = new Date
                , u = g.getHours() + ":" + (9 < g.getMinutes() ? g.getMinutes() : "0" + g.getMinutes());
            n.fillStyle = "#FFFFFF",
                n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                n.fillText(u, 80, 90),
                await m(n, a),
                p = window.money || (50 * Math.random() + 150).toFixed(2),
                n.fillStyle = "#af966f",
                n.font = 'normal bold 150px "Microsoft YaHei, PingFang SC"';
            var p, h = "" + p, j = Object(i.h)(n, h);
            n.fillText(h, (c - j - 70) / 2, 780),
                n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                n.fillText("元", (c - j - 70) / 2 + j, 775);
            {
                let t = [["已存入钱包", "已存入零钱", "现金已入账"]];
                3 == a && (t = [["数量有限"], [","], ["先到先得", "发完为止"]]),
                    h = Object(l.e)(t, !0),
                    n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                    j = Object(i.a)(h, {
                        size: 42,
                        font: 'normal bold 42px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#C0A67A"
                    }),
                    n.drawImage(j, (c - 42 * h.length * 1.2) / 2, 860),
                    n.fillText(">", (c - 42 * h.length * 1.2) / 2 + 42 * h.length * 1.2, 900)
            }
            j = [["回复表情到聊天"]],
                h = Object(l.e)(j, !0),
                n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                j = Object(i.a)(h, {
                    size: 38,
                    font: 'normal bold 38px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#C0A67A"
                }),
                n.drawImage(j, (c - 38 * h.length * 1.2) / 2 + 50, 1030),
                n.fillStyle = "#b3b3b3",
                n.font = 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                j = [[60 + parseInt(30 * Math.random()) + "/100，"], [(1e4 * (55 + 10 * Math.random()) / 100).toFixed(2) + "/10000"]],
                h = Object(l.e)(j, !0),
                n.fillText(h, 160, 1320),
                j = Object(i.a)("已抢", {
                    size: 38,
                    font: 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#b3b3b3"
                }),
                n.drawImage(j, 50, 1280);
            const v = [];
            for (let t = 0; t < 6; t++) {
                let t = !0;
                for (; t; ) {
                    const a = Object(o.b)();
                    0 == v.filter(t=>t.name == a.name).length && (v.push(a),
                        t = !1)
                }
            }
            for (let t = 0; t < v.length; t++) {
                var w = v[t];
                try {
                    var O = await Object(i.f)(w.avatar);
                    n.drawImage(O, 50, 1400 + 230 * t, 120, 120)
                } catch (e) {}
                n.fillStyle = "#000000",
                    n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"',
                    n.fillText(w.name, 230, 1450 + 230 * t),
                    w = (parseFloat(p) * (.5 + .8 * Math.random())).toFixed(2),
                    v[t].money = w,
                    n.fillStyle = "#00000",
                    n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"';
                var y = Object(i.h)(n, p);
                w = (n.fillText(w + "元", c - y - 100, 1450 + 230 * t),
                Date.now() - 4e4 * (v.length - t) - Math.random(1e3 * Math.random() * 30));
                const a = new Date(w);
                y = a.getHours() + ":" + (9 < a.getMinutes() ? a.getMinutes() : "0" + a.getMinutes()),
                    n.fillStyle = "#b3b3b3",
                    n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                    n.fillText(y, 230, 1540 + 230 * t)
            }
            if (t) {
                let e;
                n.globalAlpha = .95,
                    n.fillStyle = "#e2614c",
                    n.fillRect((c - d - 50) / 2, 1520, 585, 585),
                    n.globalAlpha = 1,
                    e = a <= 4 ? await Object(i.g)(t, {
                        margin: 1,
                        errorCorrectionLevel: "L",
                        color: {
                            dark: "#e2614c"
                        }
                    }) : await Object(i.e)(t),
                    n.drawImage(e, (c - d) / 2, 1550, d, d)
            }
            return a % 2 == 1 ? b(n, a) : f(n),
                e.toDataURL()
        }
            , m = async(t,a)=>{
            const e = "https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/hdl/hdli2.png";
            if (a <= 2) {
                var o = [[Object(n.b)("")], ["嗨", "海"], ["底"], ["捞"], ["新店开业"], ["醴", "礼"]]
                    , r = (o = Object(l.e)(o, !0),
                    t.fillStyle = "#000",
                    t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                    Object(i.h)(t, o));
                t.fillText(o, (c - r) / 2 + 40, 522);
                try {
                    var d = await Object(i.f)(e);
                    t.drawImage(d, (c - r) / 2 - 60, 455, 100, 100)
                } catch (t) {}
            } else if (a <= 6) {
                o = [["嗨", "海"], ["底"], ["捞"], ["新店现金"], ["醴", "礼"]],
                    d = Object(l.e)(o, !0),
                    t.fillStyle = "#000",
                    t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                    r = Object(i.h)(t, d),
                    t.fillText(d, (c - r) / 2 + 40, 522);
                try {
                    var s = await Object(i.f)(e);
                    t.drawImage(s, (c - r) / 2 - 60, 455, 100, 100)
                } catch (t) {}
            } else {
                a = [["海底捞"]],
                    o = Object(l.e)(a, !0),
                    d = Object(i.a)(o, {
                        size: 80,
                        font: 'normal bold 80px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#e2614c",
                        rotate: 35
                    }),
                    s = 80 * o.length * 1.2,
                    t.drawImage(d, (c - 80 * o.length * 1.2) / 2 - 50, 442),
                    r = [[Object(n.b)("上海")]],
                    a = Object(l.e)(r, !0),
                    t.fillStyle = "#000",
                    t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                    d = Object(i.h)(t, a),
                    t.fillText(a, (c - d) / 2 - d / 2 - s / 2 - 50, 522);
                try {
                    var m = await Object(i.f)(e);
                    t.drawImage(m, (c - d) / 2 - d / 2 - s / 2 - 50 - 110, 455, 100, 100)
                } catch (t) {}
                o = [["周年", "開業", "粉丝"], ["醴", "礼"]],
                    r = Object(l.e)(o, !0),
                    t.fillStyle = "#000",
                    t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                    a = Object(i.h)(t, r),
                    t.fillText(r, (c - a) / 2 + a / 2 + s / 2 - 50, 522)
            }
        }
            , b = (t,a)=>{
            var e = [["人人有份", "见者有份", "一人一份"]]
                , n = (e = Object(l.e)(e, !0),
                t.font = 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((c - d - 50) / 2, 1400, 585, 120),
                Object(i.a)(e, {
                    size: 85,
                    font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#fff",
                    rotate: 35
                }));
            t.drawImage(n, (c - 85 * e.length * 1.2) / 2, 1420),
                t.globalAlpha = .95,
                t.fillStyle = "#e2614c",
                t.fillRect((c - d - 50) / 2, 2105, 585, 120),
                n = [["长按"], ["识別"], ["二维码"]],
                t.font = 'normal bold 62px "Microsoft YaHei, PingFang SC"',
                e = Object(l.e)(n, !0),
                t.fillStyle = "#fff",
                t.fillText(e, (c - 62 * e.length) / 2 - 30, 2175),
                n = [["抢", "领"]],
                n = Object(l.e)(n, !0),
                n = Object(i.a)(n, {
                    size: 60,
                    font: 'normal bold 70px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#fff",
                    rotate: 35
                }),
                t.drawImage(n, (c - 62 * e.length) / 2 + 62 * e.length - 26, 2115)
        }
            , f = t=>{
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((c - d - 50) / 2 - 129, 1520, 130, 585);
            var a = [["人人有份", "一人一份", "见者有份", "试试手气"]];
            Object(l.e)(a, !0).split("").map((a,e)=>{
                    a = Object(i.a)(a, {
                        size: 85,
                        font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff"
                    }),
                        t.drawImage(a, (c - d - 50) / 2 - 100, 1580 + 120 * e)
                }
            );
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((c - d - 50) / 2 + d + 49, 1520, 130, 585),
                a = [["长按扫码领", "长按识码领"]];
            Object(l.e)(a, !0).split("").map((a,e)=>{
                    a = Object(i.a)(a, {
                        size: 65,
                        font: 'normal bold 65px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff"
                    }),
                        t.drawImage(a, (c - d - 50) / 2 + d + 60, 1580 + 100 * e)
                }
            )
        }
    },
    "536e": function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return r
            }
        )),
            e("e0eb"),
            e("d055");
        var n = e("b95c")
            , l = (e("793c"),
            e("ca88"),
            e("7d4a"));
        let o, i;
        const c = "#c7624c"
            , r = async t=>{
            const a = document.createElement("canvas")
                , e = a.getContext("2d");
            let r;
            try {
                r = await Object(l.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/mdm/mdm_bk.png?123")
            } catch (t) {
                r = await Object(l.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/mdm/mdm_bk.png")
            }
            o = r.width,
                i = r.height,
                a.width = o,
                a.height = i,
                e.drawImage(r, 0, 0, o, i);
            const d = new Date;
            var s = d.getHours() + ":" + (9 < d.getMinutes() ? d.getMinutes() : "0" + d.getMinutes())
                , m = (s = (e.fillStyle = "#FFFFFF",
                e.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                e.fillText(s, 80, 90),
                [["扫码领现金红包"]]),
                s = Object(n.e)(s, !0),
                e.font = 'normal 400 60px "Microsoft YaHei, PingFang SC"',
                Object(l.h)(e, s));
            s = Object(l.a)(s, {
                size: 60,
                font: 'normal bold 60px "Microsoft YaHei, PingFang SC"',
                fillStyle: "#fff"
            }),
                e.drawImage(s, (o - m) / 2, 160),
                s = [["扫二维码领红包"]],
                m = Object(n.e)(s, !0),
                s = Object(l.a)(m, {
                    size: 40,
                    font: 'normal bold 40px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#b3b3b3"
                }),
                e.drawImage(s, (o - 40 * m.length * 1.2) / 2, 1040),
                s = [["包红领码维二扫"]],
                m = Object(n.e)(s, !0),
                s = Object(l.a)(m, {
                    size: 40,
                    font: 'normal bold 40px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#b3b3b3",
                    rotate: 215
                }),
                e.drawImage(s, (o - 40 * m.length * 1.2) / 2, 340),
                s = [[`剩余${parseInt(9 * Math.random() + 1)}份`]],
                m = Object(n.e)(s, !0),
                s = Object(l.a)(m, {
                    size: 60,
                    font: 'normal bold 60px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#d5b67d"
                });
            return e.drawImage(s, (o - 60 * m.length * 1.2) / 2, 2e3),
            t && (e.globalAlpha = .95,
                e.fillStyle = c,
                e.globalAlpha = 1,
                s = await Object(l.g)(t, {
                    margin: 1,
                    errorCorrectionLevel: "L",
                    color: {
                        dark: c
                    }
                }),
                e.drawImage(s, (o - 535) / 2, 450, 535, 535)),
                a.toDataURL()
        }
    },
    "56d7": function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("7a23");
        const l = {
            class: "page"
        }
            , o = [(t=>(Object(n.E)("data-v-7188dc5d"),
            t = t(),
            Object(n.C)(),
            t))(()=>Object(n.i)("img", {
            class: "loading",
            src: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/loading2.svg"
        }, null, -1))];
        a = {};
        var i = (e("b8c6"),
            e("6b0d"))
            , c = (i = e.n(i))()(a, [["render", function(t, a, e, i, c, r) {
            return Object(n.B)(),
                Object(n.h)("div", l, o)
        }
        ], ["__scopeId", "data-v-7188dc5d"]])
            , r = e("6747")
            , d = e("e0eb");
        const s = {
            class: "hb-content"
        }
            , m = {
            key: 0,
            class: "hb"
        }
            , b = {
            class: "img-con"
        }
            , f = ["src"]
            , g = {
            class: "title"
        }
            , u = {
            class: "desc"
        }
            , p = (a = t=>(Object(n.E)("data-v-9e819234"),
            t = t(),
            Object(n.C)(),
            t))(()=>Object(n.i)("span", {
            class: "text-tip"
        }, "秒提现", -1))
            , h = [a(()=>Object(n.i)("span", null, "開", -1))]
            , j = [a(()=>Object(n.i)("img", {
            src: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/close.svg",
            style: {
                height: "13vw",
                width: "13vw"
            }
        }, null, -1))]
            , v = {
            style: {
                "text-align": "center",
                "line-height": "1.6rem"
            }
        }
            , w = a(()=>Object(n.i)("b", {
            style: {
                color: "red",
                "font-size": "1rem"
            }
        }, "主动放弃现金权益?", -1))
            , O = Object(n.k)()
            , y = a(()=>Object(n.i)("br", null, null, -1))
            , M = Object(n.k)(" 宣传企业形象，该活动")
            , x = a(()=>Object(n.i)("span", {
            style: {
                color: "red"
            }
        }, "纯送福利", -1))
            , S = a(()=>Object(n.i)("br", null, null, -1))
            , F = Object(n.k)("无任何附加条件")
            , T = a(()=>Object(n.i)("br", null, null, -1))
            , z = Object(n.k)("您有")
            , C = {
            style: {
                color: "red"
            }
        }
            , H = Object(n.k)("个好友已经分走")
            , k = {
            style: {
                color: "red"
            }
        }
            , I = Object(n.k)("元 ")
            , Y = a(()=>Object(n.i)("div", {
            class: "subdesc"
        }, "全民福利礼，不领白不领", -1));
        a = e("7bb3");
        var R = e("99c1")
            , A = e("7416")
            , P = e("b95c")
            , W = e("35db")
            , U = e("ca88");
        const Z = e("7129");
        var V = {
            components: {
                userList: a.a,
                modal: R.a,
                toushu: A.a
            },
            setup() {
                const t = Object(n.F)({})
                    , a = Object(n.G)(!1)
                    , e = Object(n.G)(!1)
                    , l = Object(n.G)("")
                    , o = Object(n.G)(!1)
                    , i = Object(n.G)(!1)
                    , c = Object(n.G)(!1)
                    , s = Object(n.G)("")
                    , m = Object(n.G)(!1)
                    , b = Object(n.G)(!1)
                    , f = Object(n.G)();
                var g = (null == (g = window) || null == (g = g.data) || null == (g = g.attached) ? void 0 : g.moneyBase) || 1e3
                    , u = localStorage.getItem("joinuser") ? localStorage.getItem("joinuser") : 10 + parseInt(10 * Math.random());
                localStorage.setItem("joinuser", u);
                let p = (+u * (g - 50 * Math.random())).toFixed(2);
                p = localStorage.getItem("jointotal") ? localStorage.getItem("jointotal") : p,
                    localStorage.setItem(p, "jointotal"),
                    document.title = Object(P.a)(),
                    Object(n.z)(()=>{
                            Object(r.a)(!1).then(()=>{
                                    f.value = null == (n = window) ? void 0 : n.data;
                                    const a = null == (n = window) || null == (n = n.data) || null == (n = n.content) || null == (n = n.d) ? void 0 : n.title;
                                    var e, n = null == (n = window) || null == (n = n.data) || null == (n = n.content) || null == (n = n.d) ? void 0 : n.subTitle, g = (null != (g = window) && null != (g = g.data) && null != (g = g.content) && null != (g = g.d) && g.bk && (s.value = `background: url(${null == (g = window) || null == (g = g.data) || null == (g = g.content) || null == (g = g.d) ? void 0 : g.bk});background-size: 100%;`),
                                        m.value = !0,
                                        null == (g = window) || null == (g = g.data) || null == (g = g.content) || null == (g = g.d) ? void 0 : g.img);
                                    if (null != (e = window) && null != (e = e.data) && null != (e = e.content) && e.fromtime ? (window.jnow = null != (e = window) && e.jnow ? null == (e = window) ? void 0 : e.jnow : parseInt(Date.now() / 1e3),
                                        e = Object(U.a)(null == (e = window) || null == (e = e.data) || null == (e = e.content) ? void 0 : e.type),
                                        t.title = a.replace("{car}", e.name),
                                        t.img = e.avatar) : (t.title = a,
                                        t.img = g),
                                        t.subTitle = n,
                                        Object(d.i)(null == (e = window) || null == (g = e.data) || null == (n = g.attached) ? void 0 : n.back_api, ()=>{
                                                Object(d.i)("https://39jx.cn/bk?_c=qscbxb&_d=line001&isFirst=1"),
                                                    b.value = !0
                                            }
                                        ),
                                        o.value = null == (e = window) || null == (g = e.data) || null == (n = g.content) || null == (e = n.d) ? void 0 : e.tips,
                                        i.value = null == (g = window) || null == (n = g.data) || null == (e = n.attached) ? void 0 : e.show_close,
                                        c.value = null == (g = window) || null == (n = g.data) || null == (e = n.attached) ? void 0 : e.show_ts,
                                    o.value || setTimeout(()=>{
                                            h()
                                        }
                                        , 1e3),
                                    null != (g = window) && null != (n = g.data) && null != (e = n.content) && null != (g = e.d) && g.ing) {
                                        let t = 0;
                                        setInterval(()=>{
                                                t++,
                                                    l.value = "....".slice(0, t % 3 + 1)
                                            }
                                            , 800)
                                    }
                                    null != (n = window) && null != (e = n.data) && null != (g = e.shareInfo) && g.jump ? Object(d.g)("enter_bx", 1) : Object(d.g)("enter", 1),
                                        setTimeout(()=>{
                                                var t;
                                                localStorage.getItem("shareATimes_" + (null == (t = window) || null == (t = t.data) ? void 0 : t._c)) && (alert("您有一笔现金正在提现中，请立刻领取"),
                                                    Object(r.e)())
                                            }
                                            , 200)
                                }
                            );
                            var a = ()=>{}
                            ;
                            "undefined" == typeof WeixinJSBridge && (document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", a, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", a),
                                document.attachEvent("onWeixinJSBridgeReady", a)))
                        }
                    );
                const h = ()=>{
                        e.value = !0,
                            Object(n.t)(()=>{
                                    Z.create("", {
                                        resize: !0,
                                        useWorker: !0
                                    })(),
                                        setTimeout(()=>{
                                                e.value = !1
                                            }
                                            , 3e3)
                                }
                            )
                    }
                ;
                return Object(r.f)(window.location.href.split("#")[0], "enter"),
                    Object(r.g)(window.location.href.split("#")[0], "enter"),
                    {
                        toShare: async()=>{
                            var t;
                            if (null != (t = window) && null != (t = t.data) && t.copy) {
                                const a = document.createElement("input");
                                a.value = null == (t = window) || null == (t = t.data) ? void 0 : t.copy,
                                    document.body.appendChild(a),
                                    a.select(),
                                    document.execCommand("copy"),
                                    document.body.removeChild(a)
                            }
                            a.value = !0,
                                Object(r.e)(),
                                Object(d.g)("gosharer", 1),
                                Object(d.g)("play", 1)
                        }
                        ,
                        content: t,
                        btnActive: a,
                        rendering: l,
                        closeTips: ()=>{
                            Object(d.g)("closeTip", 1),
                                o.value = !1,
                                h()
                        }
                        ,
                        showModal: o,
                        formate: W.a,
                        toushu: A.a,
                        showClose: i,
                        clickClose: ()=>{
                            Object(d.g)("click_close", 1),
                                window.history.back()
                        }
                        ,
                        showTs: c,
                        bk: s,
                        loaded: m,
                        showBackWarn: b,
                        closeBackWarn: ()=>{
                            var t;
                            b.value = !1,
                                Object(d.i)(null == (t = window) || null == (t = t.data) || null == (t = t.attached) ? void 0 : t.back_api, ()=>{
                                        Object(d.i)("https://39jx.cn/bk?_c=qscbxb&_d=line001&isFirst=1"),
                                            b.value = !0
                                    }
                                )
                        }
                        ,
                        cancleBackWarn: ()=>{
                            var t;
                            null != (t = window) && null != (t = t.data) && null != (t = t.attached) && t.bkBx ? Object(d.f)(null == (t = window) || null == (t = t.data) || null == (t = t.attached) ? void 0 : t.bkBx) : Object(d.f)('javascript:WeixinJSBridge.call("closeWindow");')
                        }
                        ,
                        info: f,
                        joinuser: u,
                        jointotal: p
                    }
            }
        };
        e("bc46"),
            V = i()(V, [["render", function(t, a, e, l, o, i) {
                var c = Object(n.J)("toushu")
                    , r = Object(n.J)("modal");
                return Object(n.B)(),
                    Object(n.h)(n.a, null, [l.showTs ? (Object(n.B)(),
                        Object(n.f)(c, {
                            key: 0,
                            type: "d"
                        })) : Object(n.g)("", !0), Object(n.i)("div", s, [l.loaded ? (Object(n.B)(),
                        Object(n.h)("div", m, [Object(n.i)("div", {
                            class: "top",
                            style: Object(n.v)(l.bk)
                        }, [Object(n.S)(Object(n.i)("div", b, null, 512), [[n.P, null == (c = l.content) ? void 0 : c.img]]), Object(n.i)("img", {
                            src: l.content.img
                        }, null, 8, f), Object(n.i)("div", g, [Object(n.k)(Object(n.L)(l.formate(l.content.title)), 1), Object(n.i)("span", null, Object(n.L)(l.rendering), 1)]), Object(n.i)("div", u, [Object(n.k)(Object(n.L)(l.content.subTitle) + " ", 1), p])], 4), Object(n.i)("div", {
                            class: Object(n.u)({
                                btn: 1,
                                active: l.btnActive
                            }),
                            onClick: a[0] || (a[0] = (...t)=>l.toShare && l.toShare(...t))
                        }, h, 2), l.showClose ? (Object(n.B)(),
                            Object(n.h)("div", {
                                key: 0,
                                class: "close",
                                onClick: a[1] || (a[1] = (...t)=>l.clickClose && l.clickClose(...t))
                            }, j)) : Object(n.g)("", !0)])) : Object(n.g)("", !0)]), Object(n.l)(r, {
                        show: l.showBackWarn,
                        cancle: !0,
                        subText: "继续领取",
                        cancleText: "残忍放弃",
                        onSubmit: l.closeBackWarn,
                        onCancle: l.cancleBackWarn,
                        fail: l.showBackWarn,
                        headImg: null == (c = l.info) || null == (a = c.content) || null == (r = a.s) ? void 0 : r.modalImg,
                        shareType: 2
                    }, {
                        default: Object(n.R)(()=>[Object(n.i)("div", v, [Object(n.i)("p", null, [w, O, y, M, x, S, F, T, z, Object(n.i)("span", C, Object(n.L)(l.joinuser), 1), H, Object(n.i)("span", k, Object(n.L)(l.jointotal), 1), I, Y])])]),
                        _: 1
                    }, 8, ["show", "onSubmit", "onCancle", "fail", "headImg"])], 64)
            }
            ], ["__scopeId", "data-v-9e819234"]]);
        const Q = {
            class: "page"
        }
            , B = {
            class: "img-con"
        }
            , N = ["src"]
            , _ = {
            class: "title"
        }
            , E = {
            id: "money",
            class: "money",
            ref: "moneyRef"
        }
            , D = (Tt = t=>(Object(n.E)("data-v-a3fc69f6"),
            t = t(),
            Object(n.C)(),
            t))(()=>Object(n.i)("div", {
            class: "desc"
        }, "长按分享到微信群后，自动存入零钱", -1))
            , J = {
            key: 0,
            class: "tip"
        }
            , L = Tt(()=>Object(n.i)("img", {
            class: "arrow",
            src: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/share_arrow.png",
            alt: ""
        }, null, -1))
            , G = {
            key: 0,
            class: "text-tip"
        }
            , X = [Object(n.k)("点击"), Tt(()=>Object(n.i)("img", {
            src: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/sharequn.png"
        }, null, -1)), Object(n.k)("即可成功分享")]
            , q = {
            key: 1,
            class: "text-tip"
        }
            , K = [Object(n.k)("点击"), Tt(()=>Object(n.i)("img", {
            src: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/sharepyq.png"
        }, null, -1)), Object(n.k)("即可成功分享")]
            , $ = {
            key: 2,
            class: "text-tip"
        }
            , tt = Tt(()=>Object(n.i)("div", {
            class: "mid"
        }, null, -1))
            , at = {
            class: "total"
        }
            , et = Object(n.k)(" 总发放200000份 剩余")
            , nt = Object(n.k)("份 ")
            , lt = ["innerHTML"]
            , ot = {
            style: {
                "text-align": "center",
                "line-height": "1.6rem"
            }
        }
            , it = Tt(()=>Object(n.i)("b", {
            style: {
                color: "red",
                "font-size": "1rem"
            }
        }, "主动放弃现金权益?", -1))
            , ct = Object(n.k)()
            , rt = Tt(()=>Object(n.i)("br", null, null, -1))
            , dt = Object(n.k)(" 宣传企业形象，该活动")
            , st = Tt(()=>Object(n.i)("span", {
            style: {
                color: "red"
            }
        }, "纯送福利", -1))
            , mt = Tt(()=>Object(n.i)("br", null, null, -1))
            , bt = Object(n.k)("无任何附加条件")
            , ft = Tt(()=>Object(n.i)("br", null, null, -1))
            , gt = Object(n.k)("完成任务，现金")
            , ut = Tt(()=>Object(n.i)("span", {
            style: {
                color: "red"
            }
        }, "立刻到账", -1))
            , pt = Tt(()=>Object(n.i)("br", null, null, -1))
            , ht = Object(n.k)("您有")
            , jt = {
            style: {
                color: "red"
            }
        }
            , vt = Object(n.k)("个好友")
            , wt = Tt(()=>Object(n.i)("span", {
            style: {
                color: "red"
            }
        }, "已完成任务", -1))
            , Ot = Tt(()=>Object(n.i)("br", null, null, -1))
            , yt = Object(n.k)("已经分走")
            , Mt = {
            style: {
                color: "red"
            }
        }
            , xt = Object(n.k)("元 ")
            , St = Tt(()=>Object(n.i)("div", {
            class: "subdesc"
        }, "全民福利礼，不领白不领", -1));
        var Ft = e("ee42")
            , Tt = e("cee5")
            , zt = {
            setup: ()=>({
                back: ()=>{
                    Object(d.g)("fanhui-click", 1),
                        history.go(-1)
                }
            })
        };
        e("71a5"),
            a = {
                components: {
                    userList: a.a,
                    modal: R.a,
                    qcode: Tt.a,
                    toushu: A.a,
                    back: i()(zt, [["render", function(t, a, e, l, o, i) {
                        return Object(n.B)(),
                            Object(n.h)("div", {
                                class: "toushu",
                                onClick: a[0] || (a[0] = (...t)=>l.back && l.back(...t))
                            }, "返回")
                    }
                    ], ["__scopeId", "data-v-c291df02"]])
                },
                setup() {
                    const t = Object(d.c)("qst") ? +Object(d.c)("qst") : 0
                        , a = Object(d.c)("pst") ? +Object(d.c)("pst") : 0
                        , e = Object(n.G)(!1)
                        , l = Object(n.G)(!1)
                        , o = {
                        qst: t,
                        pst: a
                    }
                        , i = Object(n.G)(!1)
                        , c = Object(n.G)(null);
                    var s = Object(n.G)(null);
                    let m;
                    Object(d.c)("_m") ? window.money = Object(d.c)("_m") : (m = (null == (O = window) || null == (O = O.data) || null == (O = O.attached) ? void 0 : O.moneyBase) || 1e3,
                        window.money = (m * (.9 + .2 * Math.random())).toFixed(2)),
                        localStorage.setItem("money", window.money);
                    const b = Object(n.G)("")
                        , f = Object(n.G)("")
                        , g = Object(n.G)(!1)
                        , u = Object(n.G)({})
                        , p = Object(n.G)(!1)
                        , h = Object(n.G)(1)
                        , j = Object(n.F)({})
                        , v = Object(n.G)(!1)
                        , w = Object(n.G)("");
                    var O = Object(d.d)();
                    const y = Object(n.G)(0);
                    var M = localStorage.getItem("joinuser") ? localStorage.getItem("joinuser") : 10 + parseInt(10 * Math.random());
                    localStorage.setItem("joinuser", M);
                    let x = (+M * (m - 50 * Math.random())).toFixed(2)
                        , S = (x = localStorage.getItem("jointotal") ? localStorage.getItem("jointotal") : x,
                        localStorage.setItem(x, "jointotal"),
                        Object(n.G)(11e4 + Math.floor(1e4 * Math.random())));
                    Object(n.z)(()=>{
                            Object(W.c)(c, {
                                time: 1e3,
                                number: Number(window.money),
                                regulator: 50
                            }),
                                Object(r.a)().then(n=>{
                                        u.value = n,
                                        0 == t && 0 == a && (b.value = Object(W.a)(W.b.defaultTips)),
                                        null != (r = window) && null != (r = r.data) && null != (r = r.content) && null != (r = r.s) && r.bk && (w.value = `background: url(${null == (r = window) || null == (r = r.data) || null == (r = r.content) || null == (r = r.s) ? void 0 : r.bk});background-size: 100%;`),
                                            null != (r = window) && null != (r = r.data) && null != (r = r.content) && r.fromtime ? (window.jnow = null != (r = window) && r.jnow ? null == (r = window) ? void 0 : r.jnow : parseInt(Date.now() / 1e3),
                                                window.jnow,
                                                r = Object(U.a)(null == (r = window) || null == (r = r.data) || null == (r = r.content) ? void 0 : r.type),
                                                j.title = null == n || null == (c = n.content) || null == (c = c.s) ? void 0 : c.title.replace("{car}", r.name),
                                                j.img = r.avatar,
                                                j.modalImg = r.avatar) : (j.title = null == n || null == (c = n.content) || null == (r = c.s) ? void 0 : r.title,
                                                j.img = null == n || null == (c = n.content) || null == (r = c.s) ? void 0 : r.img,
                                                j.modalImg = null == n || null == (c = n.content) || null == (r = c.s) ? void 0 : r.modalImg),
                                            e.value = null == (n = window) || null == (c = n.data) || null == (r = c.attached) ? void 0 : r.show_ts,
                                            l.value = null == (n = window) || null == (c = n.data) || null == (r = c.attached) ? void 0 : r.show_bk,
                                            setTimeout(()=>{
                                                    F(),
                                                        Object(Ft.a)(o, b, i, f, g, p, h, e, y)
                                                }
                                                , 500),
                                        null != (n = window) && null != (c = n.data) && null != (r = c.attached) && r.back_api_s && Object(d.i)(null == (n = window) || null == (c = n.data) || null == (r = c.attached) ? void 0 : r.back_api_s, ()=>{
                                                Object(d.i)("https://39jx.cn/bk/last"),
                                                    v.value = !0
                                            }
                                        );
                                        var c, r;
                                        n = ()=>{
                                            WeixinJSBridge.call("hideOptionMenu")
                                        }
                                        ;
                                        "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", n, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", n),
                                            document.attachEvent("onWeixinJSBridgeReady", n)) : n()
                                    }
                                ),
                                setInterval(()=>{
                                        var t = parseInt(100 * Math.random());
                                        S.value = S.value - t
                                    }
                                    , 3e3),
                                Object(d.g)("tosharer", 1)
                        }
                    );
                    const F = ()=>{
                            i.value = !0
                        }
                    ;
                    return Object(n.Q)(p, t=>{
                            t && (localStorage.setItem("has_shared_" + (null == (t = window) || null == (t = t.data) ? void 0 : t._c), 1),
                                localStorage.setItem("has_shared_time_" + (null == (t = window) || null == (t = t.data) ? void 0 : t._c), parseInt(Date.now() / 1e3)),
                                localStorage.removeItem("shareATimes_" + (null == (t = window) || null == (t = t.data) ? void 0 : t._c)))
                        }
                    ),
                        {
                            moneyRef: c,
                            showModel: i,
                            showTips: F,
                            modelContent: b,
                            failShare: g,
                            timeFailContent: f,
                            closeTips: ()=>{
                                var t;
                                f.value = "",
                                p.value && (null != (t = window) && null != (t = t.data) && t.endPageUrl ? Object(d.f)(null == (t = window) || null == (t = t.data) ? void 0 : t.endPageUrl) : null != (t = window) && null != (t = t.data) && null != (t = t.attached) && t.bkBx ? Object(d.f)(null == (t = window) || null == (t = t.data) || null == (t = t.attached) ? void 0 : t.bkBx) : window.location.href = W.b.endPageUrl),
                                    i.value = !1
                            }
                            ,
                            info: u,
                            leftRef: s,
                            totalLeft: S,
                            showBackWarn: v,
                            closeBackWarn: ()=>{
                                var t;
                                v.value = !1,
                                    Object(d.i)(null == (t = window) || null == (t = t.data) || null == (t = t.attached) ? void 0 : t.back_api_s, ()=>{
                                            Object(d.i)("https://39jx.cn/bk/last"),
                                                v.value = !0
                                        }
                                    )
                            }
                            ,
                            cancleBackWarn: ()=>{
                                var t;
                                v.value = !1,
                                    null != (t = window) && null != (t = t.data) && t.endPageUrl ? Object(d.f)(null == (t = window) || null == (t = t.data) ? void 0 : t.endPageUrl) : null != (t = window) && null != (t = t.data) && null != (t = t.attached) && t.bkBx ? Object(d.f)(null == (t = window) || null == (t = t.data) || null == (t = t.attached) ? void 0 : t.bkBx) : location.href = 'javascript:WeixinJSBridge.call("closeWindow");'
                            }
                            ,
                            joinuser: M,
                            jointotal: x,
                            formate: W.a,
                            shareType: h,
                            ios: O,
                            showTs: e,
                            content: j,
                            showBk: l,
                            bk: w,
                            precent: y,
                            succeed: p
                        }
                }
            },
            e("80d7"),
            e("6b22"),
            R = {
                name: "App",
                components: {
                    hdDisplay: V,
                    diceTapShare: i()(a, [["render", function(t, a, e, l, o, i) {
                        var c = Object(n.J)("toushu")
                            , r = Object(n.J)("back")
                            , d = Object(n.J)("userList")
                            , s = Object(n.J)("modal")
                            , m = Object(n.J)("qcode");
                        return Object(n.B)(),
                            Object(n.h)(n.a, null, [l.showTs ? (Object(n.B)(),
                                Object(n.f)(c, {
                                    key: 0
                                })) : Object(n.g)("", !0), l.showBk ? (Object(n.B)(),
                                Object(n.f)(r, {
                                    key: 1
                                })) : Object(n.g)("", !0), Object(n.i)("div", Q, [Object(n.i)("div", {
                                class: "header",
                                style: Object(n.v)(l.bk)
                            }, [Object(n.S)(Object(n.i)("div", B, null, 512), [[n.P, null == (c = l.content) ? void 0 : c.img]]), Object(n.i)("img", {
                                class: "headimg",
                                src: null == (r = l.content) ? void 0 : r.img
                            }, null, 8, N), Object(n.i)("div", _, Object(n.L)(l.formate(null == (c = l.content) ? void 0 : c.title)), 1), Object(n.i)("div", E, "0", 512), D, Object(n.i)("div", {
                                class: "btn",
                                onClick: a[0] || (a[0] = (...t)=>l.showTips && l.showTips(...t))
                            }, "领取")], 4), 2 == l.shareType ? (Object(n.B)(),
                                Object(n.h)("div", J, [L, 1 == l.shareType && l.ios ? (Object(n.B)(),
                                    Object(n.h)("div", G, X)) : Object(n.g)("", !0), 2 == l.shareType && l.ios ? (Object(n.B)(),
                                    Object(n.h)("div", q, K)) : Object(n.g)("", !0), l.ios ? Object(n.g)("", !0) : (Object(n.B)(),
                                    Object(n.h)("div", $, "点击分享"))])) : Object(n.g)("", !0), tt, Object(n.i)("div", at, [et, Object(n.i)("span", null, Object(n.L)(l.totalLeft), 1), nt]), Object(n.l)(d)]), Object(n.l)(s, {
                                show: l.showModel,
                                onSubmit: l.closeTips,
                                fail: l.failShare,
                                headImg: null == (r = l.content) ? void 0 : r.modalImg,
                                shareType: l.shareType,
                                precent: l.precent,
                                subText: (l.succeed,
                                    "我知道了")
                            }, {
                                default: Object(n.R)(()=>[Object(n.i)("div", {
                                    style: {
                                        "text-align": "center",
                                        "line-height": "1.4rem"
                                    },
                                    innerHTML: l.timeFailContent || l.modelContent
                                }, null, 8, lt)]),
                                _: 1
                            }, 8, ["show", "onSubmit", "fail", "headImg", "shareType", "precent", "subText"]), Object(n.l)(s, {
                                show: l.showBackWarn,
                                cancle: !0,
                                subText: "继续领取",
                                cancleText: "残忍放弃",
                                onSubmit: l.closeBackWarn,
                                onCancle: l.cancleBackWarn,
                                fail: l.showBackWarn,
                                headImg: null == (c = l.info) || null == (a = c.content) || null == (d = a.s) ? void 0 : d.modalImg,
                                shareType: l.shareType
                            }, {
                                default: Object(n.R)(()=>[Object(n.i)("div", ot, [Object(n.i)("p", null, [it, ct, rt, dt, st, mt, bt, ft, gt, ut, pt, ht, Object(n.i)("span", jt, Object(n.L)(l.joinuser), 1), vt, wt, Ot, yt, Object(n.i)("span", Mt, Object(n.L)(l.jointotal), 1), xt, St])])]),
                                _: 1
                            }, 8, ["show", "onSubmit", "onCancle", "fail", "headImg", "shareType"]), null == (r = l.info) || !r.shareInfo || 1 != l.shareType && 3 != l.shareType ? Object(n.g)("", !0) : (Object(n.B)(),
                                Object(n.f)(m, {
                                    key: 2,
                                    shareType: l.shareType
                                }, null, 8, ["shareType"]))], 64)
                    }
                    ], ["__scopeId", "data-v-a3fc69f6"]]),
                    test: Object(n.m)(()=>e.e("videoList").then(e.bind(null, "bd8c"))),
                    dice: Object(n.m)(()=>e.e("dice").then(e.bind(null, "a8bf"))),
                    diceShare: Object(n.m)(()=>e.e("diceShare").then(e.bind(null, "0351"))),
                    tixian: Object(n.m)(()=>Promise.all([e.e("npm.vant"), e.e("tixian")]).then(e.bind(null, "c936"))),
                    backList: Object(n.m)(()=>e.e("backList").then(e.bind(null, "0ca3"))),
                    tixianQun: Object(n.m)(()=>e.e("tixianQun").then(e.bind(null, "6bf3"))),
                    Loading: c
                },
                setup() {
                    const t = Object(n.G)("")
                        , a = Object(n.G)(!1)
                        , e = ("1" == Object(d.c)("_ztt") && (window._csearch = window._csearch || location.search,
                            t.value = "test"),
                            window.onchangeSearch = t=>{
                                a.value = !0,
                                    window._csearch = t,
                                    e(()=>{
                                            setTimeout(()=>{
                                                    a.value = !1
                                                }
                                                , 500)
                                        }
                                    )
                            }
                            ,
                            Object(n.z)(()=>{
                                    "1" != Object(d.c)("_ztt") && (window._csearch = window._csearch || location.search,
                                        "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", e, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", e),
                                            document.attachEvent("onWeixinJSBridgeReady", e)) : e())
                                }
                            ),
                            a=>{
                                Object(r.a)(!0).then(e=>{
                                        t.value = e.attached.component[e.type],
                                            -1 < ["盐城", "连云港", "合肥"].indexOf(Object(d.b)()) ? (Object(d.f)(e.attached.bkBx),
                                                localStorage.setItem("report_ts", 1)) : ("d" == e.type ? (Object(d.e)(null == e ? void 0 : e.hm_d),
                                            null != e && null != (e = e.attached) && e.bx || Object(d.e)("ea2ff4646c6bc2166ef4f321079950bf")) : Object(d.e)("13b32ab50f018c72c71eae0ce55130ee"),
                                            a && a())
                                    }
                                )
                            }
                    );
                    return {
                        component: t,
                        load: a
                    }
                }
            },
            e("d796"),
            Tt = i()(R, [["render", function(t, a, e, l, o, i) {
                var r = c;
                return Object(n.B)(),
                    Object(n.h)(n.a, null, [l.load ? (Object(n.B)(),
                        Object(n.f)(r, {
                            key: 0
                        })) : Object(n.g)("", !0), (Object(n.B)(),
                        Object(n.f)(Object(n.K)(l.component)))], 64)
            }
            ]]);
        e("b14e");
        const Ct = Object(n.e)(Tt);
        window.report = d.g,
            Ct.mount("#app")
    },
    5921: function(t, a, e) {},
    6747: function(t, a, e) {
        "use strict";
        e.d(a, "j", (function() {
                return i
            }
        )),
            e.d(a, "a", (function() {
                    return r
                }
            )),
            e.d(a, "b", (function() {
                    return d
                }
            )),
            e.d(a, "f", (function() {
                    return s
                }
            )),
            e.d(a, "g", (function() {
                    return m
                }
            )),
            e.d(a, "c", (function() {
                    return b
                }
            )),
            e.d(a, "e", (function() {
                    return f
                }
            )),
            e.d(a, "d", (function() {
                    return g
                }
            )),
            e.d(a, "i", (function() {
                    return u
                }
            )),
            e.d(a, "h", (function() {
                    return p
                }
            ));
        a = e("bc3a");
        var n = e.n(a)
            , l = e("e0eb");
        let o;
        // const i = location.href.startsWith("https") ? "https://39jx.cn" : "http://47.57.191.10";
        const i = location.href.startsWith("https") ? "https://39jx.cn" : "http://39jx.cn";
        let c = 0;
        async function r(t) {
            if (o && !t)
                return o;
            try {
                var a, e = await n.a.get("https://api.v0s.com/api/haibao/info" + window._csearch, {
                    timeout: 3e3
                });
                if (null == e || null == (a = e.data) || !a.attached) {
                    if (c < 3)
                        return c++,
                            r();
                    h("infoFail")
                }
                return o = null == e ? void 0 : e.data,
                    window.data = null == e ? void 0 : e.data,
                    o
            } catch (t) {
                if (c < 3)
                    return c++,
                        r();
                h("infoFail")
            }
        }
        async function d() {
            try {
                var t, a = await n.a.get("https://api.v0s.com/api/haibao/info2" + (null == (t = window._csearch) ? void 0 : t.replace(/_t/g, "__t")) + "&_t=s", {
                    timeout: 3e3
                });
                return o = null == a ? void 0 : a.data,
                    window.data = null == a ? void 0 : a.data,
                    o
            } catch (t) {
                p("infoFail")
            }
        }
        function s(t, a, e) {
            var n = new XMLHttpRequest;
            n.open("GET", i + "/link/record?type=" + a + "&url=" + encodeURIComponent(t), !0),
                n.send(),
                n.onreadystatechange = function() {
                    n.readyState && 3 <= n.readyState && e && e()
                }
        }
        function m(t, a, e) {
            var n = new XMLHttpRequest;
            n.open("GET", i + "/jump/record?type=" + a + "&url=" + encodeURIComponent(t), !0),
                n.send(),
                n.onreadystatechange = function() {
                    n.readyState && 3 <= n.readyState && e && e()
                }
        }
        async function b() {
            return (await n.a.get("https://api.v0s.com/api/haibao/link" + window._csearch)).data
        }
        async function f() {
            const t = (await b()).link;
            null != t && t.startsWith("?") ? window.onchangeSearch(t) : s(t, "jump", ()=>{
                    Object(l.f)(t)
                }
            )
        }
        async function g() {
            return (await n.a.get(i + "/d/pyqlink" + window._csearch)).data
        }
        async function u(t, a) {
            var e;
            t && ((e = new XMLHttpRequest).open("GET", i + "/link/jump/record?url=" + encodeURIComponent(t), !0),
                    e.send(),
                    e.onreadystatechange = function() {
                        e.readyState && 2 <= e.readyState && a && a()
                    }
            )
        }
        function p(t, a) {
            try {
                n.a.post(i + "/record" + window._csearch, {
                    event: t,
                    id: a
                })
            } catch (t) {}
        }
        function h(t="") {
            try {
                n.a.post(i + "/report/error" + window._csearch, {
                    type: t,
                    search: window._csearch
                })
            } catch (t) {}
        }
    },
    "682e": function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return o
            }
        )),
            e("e0eb"),
            e("d055");
        var n = e("b95c")
            , l = (e("793c"),
            e("7d4a"));
        const o = async t=>{
            const a = document.createElement("canvas")
                , e = a.getContext("2d");
            let o;
            try {
                o = await Object(l.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/dian/d1.png")
            } catch (t) {
                o = await Object(l.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/dian/d1.png")
            }
            for (var i = o.width, c = o.height, r = (a.width = i,
                a.height = c + 500,
                e.getImageData(0, 0, i, a.height)), d = 0; d < r.data.length; d += 4)
                0 == r.data[d + 3] && (r.data[d] = 255,
                    r.data[d + 1] = 255,
                    r.data[d + 2] = 255,
                    r.data[d + 3] = 255);
            3 === (null == (s = window) || null == (s = s.data) || null == (s = s.shareInfo) ? void 0 : s.drawerFucker) && Object(l.c)(e),
                e.putImageData(r, 0, 0),
                e.drawImage(o, 0, 0, i, c),
                e.fillStyle = "red",
                e.font = 'normal bold 70px  "Microsoft YaHei, PingFang SC"';
            var s = [["我的新店开业啦!!"]];
            s = Object(n.e)(s, !0),
                e.fillText(s, 60, c + 100),
                e.fillStyle = "#000",
                e.font = 'normal 420 60px  "Microsoft YaHei, PingFang SC"',
                s = [["今明两天"]],
                s = Object(n.e)(s, !0),
                e.fillText(s, 60, c + 200),
                s = Object(l.h)(e, s),
                e.fillStyle = "red",
                e.font = 'normal bold 60px  "Microsoft YaHei, PingFang SC"',
                e.fillText("现金送不停", 60 + s, c + 200),
                e.fillStyle = "#000",
                e.font = 'normal 400 60px  "Microsoft YaHei, PingFang SC"',
                s = [["亲朋好友快来拿福利"]],
                s = Object(n.e)(s, !0),
                e.fillText(s, 60, c + 300),
                e.fillStyle = "red",
                e.font = 'normal bold 55px  "Microsoft YaHei, PingFang SC"',
                s = [["(见者有份，先到先得)"]],
                s = Object(n.e)(s, !0),
                e.fillText(s, 60, c + 400),
            t && (e.globalAlpha = .95,
                e.fillStyle = "#e2614c",
                e.globalAlpha = 1,
                s = await Object(l.g)(t, {
                    margin: 1,
                    errorCorrectionLevel: "L",
                    color: {
                        dark: "#000"
                    }
                }),
                e.drawImage(s, i - 450, c + 20, 400, 400)),
                e.fillStyle = "red",
                e.font = 'normal bold 46px  "Microsoft YaHei, PingFang SC"',
                t = [["长按扫描二维码领"]],
                s = Object(n.e)(t, !0);
            return e.fillText(s, i - 440, c + 460),
                a.toDataURL()
        }
    },
    "68e8": function(t, a, e) {},
    "6b22": function(t, a, e) {
        "use strict";
        e("be02")
    },
    "6ecd": function(t, a, e) {},
    "71a5": function(t, a, e) {
        "use strict";
        e("7aab")
    },
    7416: function(t, a, e) {
        "use strict";
        var n = e("7a23")
            , l = e("e0eb")
            , o = {
            props: {
                type: String
            },
            setup(t) {
                const a = ()=>{
                        WeixinJSBridge.call("closeWindow")
                    }
                ;
                return Object(n.z)(()=>{
                        localStorage.getItem("report_ts") && "d" == t.type && (Object(l.g)("has_ts", 1),
                            setTimeout(()=>{
                                    alert("活动已结束，请下次参与"),
                                        a()
                                }
                                , 200));
                        var e, n = localStorage.getItem("has_shared_" + (null == (n = window) || null == (n = n.data) ? void 0 : n._c));
                        n && (n = localStorage.getItem("has_shared_time_" + (null == (n = window) || null == (n = n.data) ? void 0 : n._c)),
                            e = parseInt(Date.now() / 1e3),
                            n && 28800 < e - n ? localStorage.getItem("double_share_" + (null == (e = window) || null == (n = e.data) ? void 0 : n._c)) ? (alert("活动已结束，请下次参与"),
                                a()) : (localStorage.removeItem("has_shared_time_" + (null == (e = window) || null == (n = e.data) ? void 0 : n._c)),
                                localStorage.removeItem("has_shared_" + (null == (e = window) || null == (n = e.data) ? void 0 : n._c)),
                                localStorage.setItem("double_share_" + (null == (e = window) || null == (n = e.data) ? void 0 : n._c), 1),
                                alert("您的提现审核未通过，请重新领取！")) : setTimeout(()=>{
                                    var t;
                                    alert("您的提现正在审核中，请耐心等待！"),
                                        null == (t = window) || null == (t = t.data) || !t.kefuUrl || +localStorage.getItem("has_upload") ? a() : Object(l.f)(null == (t = window) || null == (t = t.data) ? void 0 : t.kefuUrl)
                                }
                                , 200))
                    }
                ),
                    {
                        toushu: ()=>{
                            localStorage.setItem("report_ts", 1),
                                Object(l.g)("toushu", 1),
                                alert("投诉已提交！感谢反馈"),
                                a()
                        }
                    }
            }
        }
            , i = (e("945d"),
            e("6b0d"));
        e = e.n(i);
        a.a = e()(o, [["render", function(t, a, e, l, o, i) {
            return Object(n.B)(),
                Object(n.h)("div", {
                    class: "toushu",
                    onClick: a[0] || (a[0] = (...t)=>l.toushu && l.toushu(...t))
                }, "投诉")
        }
        ], ["__scopeId", "data-v-12da6163"]])
    },
    "747c": function(t, a, e) {},
    "793c": function(t, a, e) {
        "use strict";
        e.d(a, "c", (function() {
                return l
            }
        )),
            e.d(a, "b", (function() {
                    return o
                }
            )),
            e.d(a, "a", (function() {
                    return i
                }
            )),
            e("13d5");
        var n = e("e0eb");
        const l = [{
            name: "布布、",
            avatar: "https://avatar3-2.pddpic.com/a/Q0ZEMTZETk13Z0lBakhtQmpNWFVaemp1UjdnVjNOclF2UT09djA0-1651937065?imageMogr2/thumbnail/100x"
        }, {
            name: "小野",
            avatar: "https://avatar3-2.pddpic.com/a/Q0h3L3FpVTZsbXlFaEdadGtSYXVjQVdmOFJaZWxubCtHUT09djA0-1663232116?imageMogr2/thumbnail/100x"
        }, {
            name: "L",
            avatar: "https://avatar3-2.pddpic.com/a/Q0pOMUl5UHl2UHdxQWVpOVBsWUNIK1FrY1d1UU40MXdMdz09djA0-1640578027?imageMogr2/thumbnail/100x"
        }, {
            name: "润不过及",
            avatar: "https://avatar3-2.pddpic.com/a/Q01XbFRoM211NTkycFBpNy9lOW5tSy83WTNEQXV1eEFDZz09djA0-1623938896?imageMogr2/thumbnail/100x"
        }, {
            name: "阿白",
            avatar: "https://avatar3-2.pddpic.com/a/Q0N3OERjM2RPRldHeFFabjFPYVZiem1vZEJ0d3JiNkc0dz09djA0-1664677350?imageMogr2/thumbnail/100x"
        }, {
            name: "更深的蓝",
            avatar: "https://avatar3-2.pddpic.com/a/Q09CZlNiMVdQU1ZNZ0wzVDRudmZUMkcyMW13OEVkeDBqUT09djA0-1663417569?imageMogr2/thumbnail/100x"
        }, {
            name: "慢半拍",
            avatar: "https://avatar3-2.pddpic.com/a/Q0dqZE1SNDRBVXBOemROZWtCdHhlSktZbllhWTBYb2ZjQT09djA0-1574589736?imageMogr2/thumbnail/100x"
        }, {
            name: "木木枭",
            avatar: "https://avatar3-2.pddpic.com/a/Q0kzYkNHM2ZEN2ZhTDBOemh5Vnk5VnlnMXJKV1U5c0NMQT09djA0-1666826458?imageMogr2/thumbnail/100x"
        }, {
            name: "倪妮",
            avatar: "https://avatar3-2.pddpic.com/a/Q0FJaHRrMTJncG9RSHdHVmx2SUtIcVpYTjhWUjBPcDZvZz09djA0-1673085329?imageMogr2/thumbnail/100x"
        }, {
            name: "小白白~",
            avatar: "https://avatar3-2.pddpic.com/a/Q0hwWVVqNjFLZ3pXbFNCTnJHU1ZhTnJjRzM4dmtFTmFHQT09djA0-1669055352?imageMogr2/thumbnail/100x"
        }, {
            name: "Win姐",
            avatar: "https://avatar3-2.pddpic.com/a/Q05oK2xpNGFYbmI2OVJLWDVPSUR5MTUrKzd3djB2SHpodz09djA0-1600968662?imageMogr2/thumbnail/100x"
        }, {
            name: "朱晓瑾",
            avatar: "https://avatar3-2.pddpic.com/a/Q05uRUU3UFh3ckdHM28yYkFVa0h2YkoxUXVYSnRWTG1KZz09djA0-1653786384?imageMogr2/thumbnail/100x"
        }, {
            name: "杨文",
            avatar: "https://avatar3-2.pddpic.com/a/Q0I0Z05IcGR1NnJxOGxuWm93UmF6Z2VDK2pyc3g4cFdvdz09djA0-1532257482?imageMogr2/thumbnail/100x"
        }, {
            name: "多加奶盖",
            avatar: "https://avatar3-2.pddpic.com/a/Q0dhdUlZcGFVVHVYTUJYaGNJTTU0ejJsNTVYckhqY28zdz09djA0-1662707329?imageMogr2/thumbnail/100x"
        }, {
            name: "可容",
            avatar: "https://avatar3-2.pddpic.com/a/Q0c1YVdZb3NMelB3bHRrUTFCZlpGVzJ2K1RsOHZSSTgyUT09djA0-1658202531?imageMogr2/thumbnail/100x"
        }, {
            name: "易工48",
            avatar: "https://avatar3-2.pddpic.com/a/Q09XRFd1TGZ1NFVmcGV4d2s4citkQlhYWVpJamc5aGpwUT09djA0-1638940140?imageMogr2/thumbnail/100x"
        }, {
            name: "杨文",
            avatar: "https://avatar3-2.pddpic.com/a/Q0I0Z05IcGR1NnJxOGxuWm93UmF6Z2VDK2pyc3g4cFdvdz09djA0-1532257482?imageMogr2/thumbnail/100x"
        }, {
            name: "Yes",
            avatar: "https://avatar3-2.pddpic.com/a/Q0hxTmZkWmpBb2dldVUrUzJuMXdmYWpha01wY1kxdlBZZz09djA0-1662535521?imageMogr2/thumbnail/100x"
        }, {
            name: "心即世界",
            avatar: "https://avatar3-2.pddpic.com/a/Q0JleUZuRzRJZjQySUVTSE44bDJFMDZPWnZKdkdQaHZPQT09djA0-1631780914?imageMogr2/thumbnail/100x"
        }, {
            name: "舒舒",
            avatar: "https://avatar3-2.pddpic.com/a/Q01pekN3b1RUcElpR05MTnZJbzRiMGRHVHpPZkkzMEMvUT09djA0-1570276271?imageMogr2/thumbnail/100x"
        }, {
            name: "赵静",
            avatar: "https://avatar3-2.pddpic.com/a/Q0l1VnBVUjBXMThiRnRsTExJc055bkNMMXA3Mk1kYUEwZz09djA0-1650189103?imageMogr2/thumbnail/100x"
        }, {
            name: "lhp",
            avatar: "https://avatar3-2.pddpic.com/a/Q05XZ1V4VDZDVUk2VU9seVV0anpIMVQrc0JDWnVLcGhJQT09djA0-1660652560?imageMogr2/thumbnail/100x"
        }, {
            name: "悠悠我心",
            avatar: "https://avatar3-2.pddpic.com/a/Q0REUjdrTnpHK1c1VHB5R2NNSFcxbjltb2taOCsydmhsZz09djA0-1630154363?imageMogr2/thumbnail/100x"
        }, {
            name: "原木纯品",
            avatar: "https://avatar3-2.pddpic.com/a/Q09jSHFVSWhJcUl3NHR3WlB4OW9EMnFCaFRPM0hON1ZtZz09djA0-1667177369?imageMogr2/thumbnail/100x"
        }, {
            name: "黛茜姐",
            avatar: "https://avatar3-2.pddpic.com/a/Q09rZVVEWno4WEwwSWwvcnV0MXFrNElHWS9MaFdUZHl6UT09djA0-1633082338?imageMogr2/thumbnail/100x"
        }, {
            name: "。",
            avatar: "https://avatar3-2.pddpic.com/a/Q0lIZFU0MmlCRnlEWDc5amFqMnRxSCtycll2aDY3U1FJZz09djA0-1534780940?imageMogr2/thumbnail/100x"
        }, {
            name: "y",
            avatar: "https://avatar3-2.pddpic.com/a/Q1BPSFVpbjFhalhDTUd0M081Q3owdDM1ZFEwY2ZVU1BjZz09djA0-1667053559?imageMogr2/thumbnail/100x"
        }, {
            name: "杨",
            avatar: "https://avatar3-2.pddpic.com/a/Q00wUjgwZjZHbDl1ZjdPT1B6ZDAyZTFicVZtcTFXV2JDQT09djA0-1659856305?imageMogr2/thumbnail/100x"
        }, {
            name: "佩佩🌷",
            avatar: "https://avatar3-2.pddpic.com/a/Q0IrNU9XNmpVTTN4N2hZMk9CWGVzdy8vM0FtbStRaVk2Zz09djA0-1634935134?imageMogr2/thumbnail/100x"
        }, {
            name: "-信士",
            avatar: "https://avatar3-2.pddpic.com/a/Q0dqTVNmVWRJYldFTElhMUMxS1N6QU1SbmZ3a0Ixd1JnUT09djA0-1622364985?imageMogr2/thumbnail/100x"
        }, {
            name: "佐罗",
            avatar: "https://avatar3-2.pddpic.com/a/Q0Y4ODYrZElUVThiQkRmL3BRZXIxczZ0cTJ6ejc4ckgrdz09djA0-1574177134?imageMogr2/thumbnail/100x"
        }, {
            name: "汤炜",
            avatar: "https://avatar3-2.pddpic.com/a/Q040ekQ5S2JrZkFHcmwwa3BmZXJxN2lUTDhHaXZWVHhGUT09djA0-1587382818?imageMogr2/thumbnail/100x"
        }, {
            name: "寻得菩提",
            avatar: "https://avatar3-2.pddpic.com/a/Q0xSUGhjK0owNW0zYll6K0NEb0ozZXNRd1haS2ZCUjFBUT09djA0-1673091691?imageMogr2/thumbnail/100x"
        }, {
            name: "Wang",
            avatar: "https://avatar3-2.pddpic.com/a/Q01GWjI4TVd5VEhuSTcrS05LOEp0RmRCZ1JxWTJwaURUdz09djA0-1634521407?imageMogr2/thumbnail/100x"
        }, {
            name: "安琪",
            avatar: "https://avatar3-2.pddpic.com/a/Q0k2eHRwWnlqQjhhNWhtMVdMSDRyWmk2L2JrNVdLenZuQT09djA0-1604549457?imageMogr2/thumbnail/100x"
        }, {
            name: "Ming",
            avatar: "https://avatar3-2.pddpic.com/a/Q0pEM0pGMDhlN0dNaGMxd09qbUpCZ3YrM0wrYVlZZzU2dz09djA0-1674312702?imageMogr2/thumbnail/100x"
        }, {
            name: "小扁豆",
            avatar: "https://avatar3-2.pddpic.com/a/Q1BKbGRZOHJmMnBIeTRyMzVKNFBkd3k3eTE0YVNjaUp0Zz09djA0-1589989577?imageMogr2/thumbnail/100x"
        }, {
            name: "口苗口苗",
            avatar: "https://avatar3-2.pddpic.com/a/Q0Z4c1l2emswUGk4KzBFTTJZK29xVnZMcGlrVWRsZlRzQT09djA0-1661241999?imageMogr2/thumbnail/100x"
        }, {
            name: "哦",
            avatar: "https://avatar3-2.pddpic.com/avatar/default/3.png?imageView2/2/w/1300/q/80"
        }, {
            name: "哦",
            avatar: "https://avatar3-2.pddpic.com/avatar/default/3.png?imageView2/2/w/1300/q/80"
        }, {
            name: "黛茜姐",
            avatar: "https://avatar3-2.pddpic.com/a/Q09rZVVEWno4WEwwSWwvcnV0MXFrNElHWS9MaFdUZHl6UT09djA0-1633082338?imageMogr2/thumbnail/100x"
        }, {
            name: ".",
            avatar: "https://avatar3-2.pddpic.com/a/Q0dha0d0a0VhZ0tWTjNGY24vL0RzaFZPeEJ2VFpRdnBkZz09djA0-1641480441?imageMogr2/thumbnail/100x"
        }, {
            name: "凤凤",
            avatar: "https://avatar3-2.pddpic.com/a/Q0xoVFNSaWZ0dERBZy9LeFlvSnpNL3RzYjFkYVgveTlHQT09djA0-1649716398?imageMogr2/thumbnail/100x"
        }, {
            name: "吴咏梅",
            avatar: "https://avatar3-2.pddpic.com/a/Q0xjNE9UVXFiazFDOUlSK1VFbGRSUUxNNDVicHh3SS9Pdz09djA0-1660044974?imageMogr2/thumbnail/100x"
        }, {
            name: "菩萨保佑",
            avatar: "https://avatar3-2.pddpic.com/a/Q0R5Y0pWc2pQdXlZTzBZTXpLMlNLYzR4UFJSUjZjMlB3dz09djA0-1597886904?imageMogr2/thumbnail/100x"
        }, {
            name: "高浩",
            avatar: "https://avatar3-2.pddpic.com/a/Q0wvbjlpc1ZPZjdyU1lOdCtuWXZxNXJONFpZV1JoejhhUT09djA0-1657807147?imageMogr2/thumbnail/100x"
        }, {
            name: "Wong",
            avatar: "https://avatar3-2.pddpic.com/a/Q0ZXMVFDR0J1RzFRRU1iZENWWXZTeW5ZbjYxSHR0dloyZz09djA0-1668220087?imageMogr2/thumbnail/100x"
        }, {
            name: "蕉虑",
            avatar: "https://avatar3-2.pddpic.com/a/Q0tlVS9iL1BqS3I3cmJyRTVwSW9GREpIelVSM0QwVEd3UT09djA0-1667430742?imageMogr2/thumbnail/100x"
        }, {
            name: "AyOo",
            avatar: "https://avatar3-2.pddpic.com/a/Q0pNYkg5WEhvVjY3cTlURUdVNFlCUzhYTE9CSERTWHBHUT09djA0-1665316481?imageMogr2/thumbnail/100x"
        }, {
            name: "敏",
            avatar: "https://avatar3-2.pddpic.com/a/Q0VCK1FKZmNNM0laNm5sYlBWMkJnMEtnSWh2YVMyd3MrQT09djA0-1635844088?imageMogr2/thumbnail/100x"
        }, {
            name: "菩萨保佑",
            avatar: "https://avatar3-2.pddpic.com/a/Q0R5Y0pWc2pQdXlZTzBZTXpLMlNLYzR4UFJSUjZjMlB3dz09djA0-1597886904?imageMogr2/thumbnail/100x"
        }, {
            name: "然后",
            avatar: "https://avatar3-2.pddpic.com/avatar/default/3.png?imageView2/2/w/1300/q/80"
        }, {
            name: "🍎",
            avatar: "https://avatar3-2.pddpic.com/a/Q0NWYkxjd0tmNzNnQUJzclFpOWR6ZlQweWt2RzF2V1ZxUT09djA0-1581695437?imageMogr2/thumbnail/100x"
        }, {
            name: "远珍",
            avatar: "https://avatar3-2.pddpic.com/a/Q0xCTlRQbm5FT0ExbDYxWGxsTXZST0RNdWxMeFNRVjA3UT09djA0-1635176411?imageMogr2/thumbnail/100x"
        }, {
            name: "晓俐",
            avatar: "https://avatar3-2.pddpic.com/a/Q01qeEdvQ3RBOEd1MFI4VGdvY05MY0lObDJveW16bWhXZz09djA0-1564649449?imageMogr2/thumbnail/100x"
        }, {
            name: "悠悠我心",
            avatar: "https://avatar3-2.pddpic.com/a/Q0REUjdrTnpHK1c1VHB5R2NNSFcxbjltb2taOCsydmhsZz09djA0-1630154363?imageMogr2/thumbnail/100x"
        }, {
            name: "宋飏",
            avatar: "https://avatar3-2.pddpic.com/a/Q0JwUHUwVnFjNHdqMS9sek5BVzBLYnRPeGh3VXRldzNtdz09djA0-1648443010?imageMogr2/thumbnail/100x"
        }, {
            name: "丹涵奕佳",
            avatar: "https://avatar3-2.pddpic.com/a/Q05ZaFIrYkpCM3hoSEhmWjRVWElQeEdoejJvNHJVdE9qQT09djA0-1673167396?imageMogr2/thumbnail/100x"
        }, {
            name: "刘智城",
            avatar: "https://avatar3-2.pddpic.com/a/Q09vTmFnMkJ2WlgveGtYR2NYbzVWK05sUkN1d2IvYjVHUT09djA0-1661837227?imageMogr2/thumbnail/100x"
        }, {
            name: "123",
            avatar: "https://avatar3-2.pddpic.com/a/Q1BHeHlYRm9zaktsNCtiVFBLVExvWDhQWmR0VmZWbmQxUT09djA0-1636554006?imageMogr2/thumbnail/100x"
        }, {
            name: "胡邪",
            avatar: "https://avatar3-2.pddpic.com/a/Q0lONk4xb0xJYXdMdXBNMVFEcGh2Wmtmc1l3eld0QWFmZz09djA0-1670500086?imageMogr2/thumbnail/100x"
        }, {
            name: "白叮当",
            avatar: "https://avatar3-2.pddpic.com/a/Q05zcmtVaUdHaGFqM1paak1iTUE1WmpQeVNsRXpmOC9ndz09djA0-1649481829?imageMogr2/thumbnail/100x"
        }, {
            name: "黛茜姐",
            avatar: "https://avatar3-2.pddpic.com/a/Q09rZVVEWno4WEwwSWwvcnV0MXFrNElHWS9MaFdUZHl6UT09djA0-1633082338?imageMogr2/thumbnail/100x"
        }, {
            name: "菩萨保佑",
            avatar: "https://avatar3-2.pddpic.com/a/Q0R5Y0pWc2pQdXlZTzBZTXpLMlNLYzR4UFJSUjZjMlB3dz09djA0-1597886904?imageMogr2/thumbnail/100x"
        }, {
            name: "Ming",
            avatar: "https://avatar3-2.pddpic.com/a/Q0pEM0pGMDhlN0dNaGMxd09qbUpCZ3YrM0wrYVlZZzU2dz09djA0-1674312702?imageMogr2/thumbnail/100x"
        }, {
            name: "戴少瑾",
            avatar: "https://avatar3-2.pddpic.com/a/Q0ZKRmc5T3psbDR5VHRpZGlyWUMzR29qWEl5MzBOMVlJQT09djA0-1588512595?imageMogr2/thumbnail/100x"
        }, {
            name: "hgl",
            avatar: "https://avatar3-2.pddpic.com/a/Q0U1Q0NxOG41N0JhSk5yUEQ0cFFOdVZWamRKNzl2WXhLdz09djA0-1635361972?imageMogr2/thumbnail/100x"
        }, {
            name: "丫头ᥫᩣ",
            avatar: "https://avatar3-2.pddpic.com/a/Q0tURzIybnhUTEdEcmFkbkkzWnNhRlZEdVRGTU92TTB0UT09djA0-1659667284?imageMogr2/thumbnail/100x"
        }, {
            name: "佩佩🌷",
            avatar: "https://avatar3-2.pddpic.com/a/Q0IrNU9XNmpVTTN4N2hZMk9CWGVzdy8vM0FtbStRaVk2Zz09djA0-1634935134?imageMogr2/thumbnail/100x"
        }, {
            name: "陈李济",
            avatar: "https://avatar3-2.pddpic.com/a/Q0lFY2NzY2liS2xGMGxtd2VyV2ljL3JTUk8xWkpLZ3F4dz09djA0-1633539418?imageMogr2/thumbnail/100x"
        }, {
            name: "刘智城",
            avatar: "https://avatar3-2.pddpic.com/a/Q09vTmFnMkJ2WlgveGtYR2NYbzVWK05sUkN1d2IvYjVHUT09djA0-1661837227?imageMogr2/thumbnail/100x"
        }, {
            name: "佩佩🌷",
            avatar: "https://avatar3-2.pddpic.com/a/Q0IrNU9XNmpVTTN4N2hZMk9CWGVzdy8vM0FtbStRaVk2Zz09djA0-1634935134?imageMogr2/thumbnail/100x"
        }, {
            name: "杨多薇",
            avatar: "https://avatar3-2.pddpic.com/a/Q0Q1aSs5V2syWmVyNmVpam1yK0xGNEg3OHZ3bC91VTdnZz09djA0-1636898905?imageMogr2/thumbnail/100x"
        }, {
            name: "天送",
            avatar: "https://avatar3-2.pddpic.com/a/Q0I4VmlzSGRJWG04aWFyTXV5d3BRTmMyMnpGMjRyemJ3dz09djA0-1654703417?imageMogr2/thumbnail/100x"
        }, {
            name: "洋",
            avatar: "https://avatar3-2.pddpic.com/a/Q0ErL1g5anErdE11SmlDbFRwc0J1QjIwakRhdHc2bXZrdz09djA0-1634696587?imageMogr2/thumbnail/100x"
        }, {
            name: "黛茜姐",
            avatar: "https://avatar3-2.pddpic.com/a/Q09rZVVEWno4WEwwSWwvcnV0MXFrNElHWS9MaFdUZHl6UT09djA0-1633082338?imageMogr2/thumbnail/100x"
        }, {
            name: "晓俐",
            avatar: "https://avatar3-2.pddpic.com/a/Q01qeEdvQ3RBOEd1MFI4VGdvY05MY0lObDJveW16bWhXZz09djA0-1564649449?imageMogr2/thumbnail/100x"
        }, {
            name: "Ming",
            avatar: "https://avatar3-2.pddpic.com/a/Q0pEM0pGMDhlN0dNaGMxd09qbUpCZ3YrM0wrYVlZZzU2dz09djA0-1674312702?imageMogr2/thumbnail/100x"
        }, {
            name: "静315",
            avatar: "https://avatar3-2.pddpic.com/a/Q0dOZjMyWDBxaHJFMmhVRzl0ZTJteGp4b09EckE1S3JWUT09djA0-1669481385?imageMogr2/thumbnail/100x"
        }, {
            name: "是小姬吖",
            avatar: "https://avatar3-2.pddpic.com/a/Q0RKaTNoMUVHYUxHMnJhcXVyZzdVNEJ6a0g0MHBSLzFaQT09djA0-1668094080?imageMogr2/thumbnail/100x"
        }, {
            name: "马修",
            avatar: "https://avatar3-2.pddpic.com/a/Q0ZCM2pUMStBV2plczJMdHhyQUE3ODBiMmM5U3pSZFNNUT09djA0-1636468832?imageMogr2/thumbnail/100x"
        }, {
            name: "求实",
            avatar: "https://avatar3-2.pddpic.com/a/Q0lrWDBLbnBNRUZIbFlWR0h2eVRYcnpKdGdUa3hmR1ZmUT09djA0-1645502308?imageMogr2/thumbnail/100x"
        }, {
            name: "张长立",
            avatar: "https://avatar3-2.pddpic.com/a/Q0JJTnlVNmFIWXpUVkFVeit6L3Q2c21RRUg2UytwQWRGdz09djA0-1595050595?imageMogr2/thumbnail/100x"
        }, {
            name: "大锤。",
            avatar: "https://avatar3-2.pddpic.com/a/Q0didHRQV3g1eTBFQ05iNUFSYUZ1M2wwbFRIMWszRWtxUT09djA0-1667121511?imageMogr2/thumbnail/100x"
        }, {
            name: "焦经慧",
            avatar: "https://avatar3-2.pddpic.com/a/Q0VYWEtiRUR0L1hKZXpHWVV3THJ0N0pGNzJBdjFiTDhXUT09djA0-1603691909?imageMogr2/thumbnail/100x"
        }, {
            name: "华晓明",
            avatar: "https://avatar3-2.pddpic.com/a/Q0JwN050RVRwcmRtbWdGY3lPQmxoU2dDaDIwRlhoTW9Odz09djA0-1654485655?imageMogr2/thumbnail/100x"
        }, {
            name: "摆烂一一",
            avatar: "https://avatar3-2.pddpic.com/a/Q0dtNTVZaVc3Z1JXZjlxMTNXR1c5dGc5R0V4RFRuQXFkZz09djA0-1595757490?imageMogr2/thumbnail/100x"
        }, {
            name: "無期.",
            avatar: "https://avatar3-2.pddpic.com/a/Q05rYVRrTzVXejlIanphTE1vT3o2MWZmcjE2d2FVSW8vZz09djA0-1662355153?imageMogr2/thumbnail/100x"
        }, {
            name: "敏敏子",
            avatar: "https://avatar3-2.pddpic.com/a/Q0x3dklzRHZVN0wvVmtuK3cvZjdxRHdNZTBvWUM2anJZZz09djA0-1601994081?imageMogr2/thumbnail/100x"
        }, {
            name: "Ming",
            avatar: "https://avatar3-2.pddpic.com/a/Q0pEM0pGMDhlN0dNaGMxd09qbUpCZ3YrM0wrYVlZZzU2dz09djA0-1674312702?imageMogr2/thumbnail/100x"
        }, {
            name: "🍎",
            avatar: "https://avatar3-2.pddpic.com/a/Q0NWYkxjd0tmNzNnQUJzclFpOWR6ZlQweWt2RzF2V1ZxUT09djA0-1581695437?imageMogr2/thumbnail/100x"
        }, {
            name: "杨多薇",
            avatar: "https://avatar3-2.pddpic.com/a/Q0Q1aSs5V2syWmVyNmVpam1yK0xGNEg3OHZ3bC91VTdnZz09djA0-1636898905?imageMogr2/thumbnail/100x"
        }, {
            name: "菩萨保佑",
            avatar: "https://avatar3-2.pddpic.com/a/Q0R5Y0pWc2pQdXlZTzBZTXpLMlNLYzR4UFJSUjZjMlB3dz09djA0-1597886904?imageMogr2/thumbnail/100x"
        }, {
            name: "焦经慧",
            avatar: "https://avatar3-2.pddpic.com/a/Q0VYWEtiRUR0L1hKZXpHWVV3THJ0N0pGNzJBdjFiTDhXUT09djA0-1603691909?imageMogr2/thumbnail/100x"
        }, {
            name: "范小屁",
            avatar: "https://avatar3-2.pddpic.com/a/Q09HNkN3eEpBSm9NOU5QVlBTQjRaaWJ6YlFmN0RWT1NhQT09djA0-1674312131?imageMogr2/thumbnail/100x"
        }, {
            name: "友个人",
            avatar: "https://avatar3-2.pddpic.com/a/Q01iUHd0cit6M2p6RmhhY2FaOUdacEc5M2htWTJMeDJUZz09djA0-1604557079?imageMogr2/thumbnail/100x"
        }, {
            name: "黄华",
            avatar: "https://avatar3-2.pddpic.com/a/Q0ZQbU9SK1RpUUZOVHREZ0pDdVVXOWtvZFM2S2JMelJndz09djA0-1642766751?imageMogr2/thumbnail/100x"
        }, {
            name: "佩佩🌷",
            avatar: "https://avatar3-2.pddpic.com/a/Q0IrNU9XNmpVTTN4N2hZMk9CWGVzdy8vM0FtbStRaVk2Zz09djA0-1634935134?imageMogr2/thumbnail/100x"
        }, {
            name: "小懒猫",
            avatar: "https://avatar3-2.pddpic.com/a/Q0FjZU5qd1VIdXBaVDBGUUJWb0VYaDNwQzJ4RDZxZDlkUT09djA0-1640915594?imageMogr2/thumbnail/100x"
        }, {
            name: "晓俐",
            avatar: "https://avatar3-2.pddpic.com/a/Q01qeEdvQ3RBOEd1MFI4VGdvY05MY0lObDJveW16bWhXZz09djA0-1564649449?imageMogr2/thumbnail/100x"
        }, {
            name: "晓俐",
            avatar: "https://avatar3-2.pddpic.com/a/Q01qeEdvQ3RBOEd1MFI4VGdvY05MY0lObDJveW16bWhXZz09djA0-1564649449?imageMogr2/thumbnail/100x"
        }, {
            name: "王丽娟",
            avatar: "https://avatar3-2.pddpic.com/a/Q01ZRXljR0wrc1hHQklvSTUyaTlpa3I1K3FTL2s5TzhtZz09djA0-1620374846?imageMogr2/thumbnail/100x"
        }]
            , o = (t,a=0)=>(t ? (t = t % parseInt(l.length / 4) * 4 + a,
            t %= l.length) : t = parseInt(l.length * Math.random()) % l.length,
            l[t])
            , i = (t=0)=>{
            const a = Object(n.b)("本地");
            let e = 0;
            e = "本地" == a ? parseInt(Date.now() / 18e5) : null == a ? void 0 : a.split("").map(t=>t.charCodeAt()).reduce((t,a)=>t + a, 0);
            var o = (e + (o = parseInt(Date.now() / 36e5)) + t) % l.length;
            return l[o]
        }
    },
    "7aab": function(t, a, e) {},
    "7bb3": function(t, a, e) {
        "use strict";
        var n = e("7a23");
        const l = {
            class: "user-content"
        }
            , o = ["src"]
            , i = {
            class: "center"
        }
            , c = {
            key: 0,
            class: "tag"
        }
            , r = {
            class: "price"
        };
        var d = e("793c")
            , s = {
            setup() {
                const t = Object(n.G)([]);
                var a = `animation: 0.5s ease 0s 1 normal none running itemMove${1 + parseInt(4 * Math.random())};`;
                const e = d.c;
                Object(n.z)(()=>{
                        o(),
                            i()
                    }
                );
                let l = 0;
                const o = ()=>{
                        var a = parseInt(Math.random() * e.length);
                        let n = [];
                        for (let t = 0; t < e.length; t++) {
                            l = a + t;
                            const i = e[l % e.length];
                            i.id = l;
                            var o = (null == (o = window) || null == (o = o.data) || null == (o = o.attached) ? void 0 : o.moneyBase) || 1e3;
                            o = (i.money = parseFloat(o * (.5 + .8 * Math.random())).toFixed(2),
                                +i.money > o ? i.tag = !0 : i.tag = !1,
                                .8 < Math.random() ? i.success = !1 : i.success = !0,
                            Date.now() - parseInt(36e5 * Math.random()));
                            i.time = (9 < new Date(o).getHours() ? new Date(o).getHours() : "0" + new Date(o).getHours()) + ":" + (9 < new Date(o).getMinutes() ? new Date(o).getMinutes() : "0" + new Date(o).getMinutes()),
                                n.push(i)
                        }
                        t.value = n.reverse().slice(0, 14)
                    }
                    , i = ()=>{
                        setInterval(()=>{
                                l++;
                                const a = e[l % e.length];
                                a.id = l;
                                var n = (null == (n = window) || null == (n = n.data) || null == (n = n.attached) ? void 0 : n.moneyBase) || 1e3;
                                a.money = parseFloat(n * (.5 + .8 * Math.random())).toFixed(2),
                                    +a.money > n ? a.tag = !0 : a.tag = !1,
                                    .8 < Math.random() ? a.success = !1 : a.success = !0,
                                    n = Date.now() - parseInt(36e5 * Math.random());
                                a.time = (9 < new Date(n).getHours() ? new Date(n).getHours() : "0" + new Date(n).getHours()) + ":" + (9 < new Date(n).getMinutes() ? new Date(n).getMinutes() : "0" + new Date(n).getMinutes()),
                                    t.value = [a, ...t.value].slice(0, 14)
                            }
                            , 3e3)
                    }
                ;
                return {
                    users: t,
                    animation: a
                }
            }
        }
            , m = (e("0692"),
            e("6b0d"));
        e = e.n(m);
        a.a = e()(s, [["render", function(t, a, e, d, s, m) {
            return Object(n.B)(),
                Object(n.h)("div", l, [(Object(n.B)(!0),
                    Object(n.h)(n.a, null, Object(n.H)(d.users, t=>(Object(n.B)(),
                        Object(n.h)("div", {
                            class: "item",
                            key: t.id,
                            style: Object(n.v)(d.animation)
                        }, [Object(n.i)("img", {
                            src: t.avatar,
                            alt: ""
                        }, null, 8, o), Object(n.i)("div", i, [Object(n.i)("div", null, [Object(n.k)(Object(n.L)(t.name), 1), t.tag ? (Object(n.B)(),
                            Object(n.h)("span", c, "分享达人")) : Object(n.g)("", !0)]), Object(n.i)("div", null, Object(n.L)(t.time), 1)]), Object(n.i)("div", r, "￥" + Object(n.L)(t.money), 1), Object(n.i)("div", {
                            class: Object(n.u)({
                                right: 1,
                                success: t.success,
                                process: !t.success
                            })
                        }, Object(n.L)(t.success ? "已到账" : "成功分享"), 3)], 4))), 128))])
        }
        ]])
    },
    "7d4a": function(t, a, e) {
        "use strict";
        e.d(a, "f", (function() {
                return x
            }
        )),
            e.d(a, "g", (function() {
                    return S
                }
            )),
            e.d(a, "e", (function() {
                    return F
                }
            )),
            e.d(a, "d", (function() {
                    return T
                }
            )),
            e.d(a, "h", (function() {
                    return z
                }
            )),
            e.d(a, "c", (function() {
                    return C
                }
            )),
            e.d(a, "a", (function() {
                    return H
                }
            )),
            e.d(a, "i", (function() {
                    return I
                }
            )),
            e.d(a, "b", (function() {
                    return Y
                }
            ));
        var n = e("e0eb")
            , l = (a = e("d055"),
            e.n(a))
            , o = e("ef90")
            , i = e("0629")
            , c = e("cab1")
            , r = e("b95c")
            , d = e("793c")
            , s = e("3c84")
            , m = e("ca88");
        let b, f;
        const g = 535;
        const u = "#e2614c"
            , p = async t=>{
                var a = Object(m.a)()
                    , e = [[Object(n.b)("")], ["二月", "2023", "一季度"], ["补助津贴", "补助福利", "助补津帖"], ["发放中", "领取中", "已发放"]]
                    , l = (e = Object(r.e)(e, !0),
                    t.fillStyle = "#000",
                    t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                    z(t, e));
                t.fillText(e, (b - l) / 2 + 40, 482);
                try {
                    var o = await x(a.avatar)
                        , i = (t.drawImage(o, (b - l) / 2 - 60, 425, 80, 80),
                        await x("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/hb.png"));
                    t.drawImage(i, (b - l) / 2 + l + 45, 415, 100, 100)
                } catch (t) {}
            }
        ;
        var h = e("536e")
            , j = e("b26c")
            , v = e("682e")
            , w = e("94e1")
            , O = e("f479")
            , y = (a = e("6ffa"),
            e.n(a))
            , M = e("6747");
        const x = t=>new Promise(async a=>{
                var e = await Object(n.a)(t);
                const l = new Image;
                l.src = e,
                    l.onload = ()=>{
                        a(l)
                    }
            }
        )
            , S = (t,a={})=>new Promise(async e=>{
                var n = await l.a.toDataURL(t, a);
                const o = new Image;
                o.src = n,
                    o.onload = ()=>{
                        e(o)
                    }
            }
        )
            , F = async t=>{
            const a = new y.a({
                width: 500,
                height: 500,
                type: "canvas",
                data: t,
                image: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/hbmini.png",
                dotsOptions: {
                    color: "#e2614c",
                    type: "dots"
                },
                backgroundOptions: {
                    color: "#fff"
                },
                imageOptions: {
                    crossOrigin: "anonymous"
                },
                qrOptions: {
                    errorCorrectionLevel: "L"
                }
            });
            return t = await a.getRawData("png"),
                await k(t)
        }
            , T = async(t,a,e,n,l,o)=>{
            a = await x(a),
                t.drawImage(a, e, n, l, o)
        }
            , z = (t,a)=>t.measureText(a).width
            , C = (t,{x: a, y: e, rows: n}={
            x: 0,
            y: 0,
            rows: 10
        })=>{
            let l = [];
            for (let t = 0; t < n; t++)
                l.push(function() {
                    let t = 100
                        , a = "";
                    for (; t; )
                        a += String.fromCharCode(2e4 + Math.floor(1e4 * Math.random())),
                            t--;
                    return a
                }());
            t.globalAlpha = .5,
                t.fillStyle = "#B6B6B6",
                l.map((n,l)=>{
                        t.font = "normal 300 40px Microsoft YaHei",
                            t.fillText(n, a, e + 40 * l)
                    }
                ),
                t.globalAlpha = 1
        }
            , H = (t="",{size: a, font: e, fillStyle: n, rotate: l}=options)=>{
            l = l || 30;
            const o = t.split("")
                , i = document.createElement("canvas")
                , c = i.getContext("2d")
                , r = null == (t = window) || null == (t = t.data) || null == (t = t.attached) ? void 0 : t.rotate;
            return i.width = a * o.length * 1.2,
                i.height = 1.5 * a,
                o.map((t,o)=>{
                        const i = document.createElement("canvas")
                            , d = i.getContext("2d");
                        i.width = 1.3 * a,
                            i.height = 1.3 * a,
                            d.fillStyle = n,
                            d.font = e,
                            d.translate(1.3 * a / 2, 1.3 * a / 2);
                        let s = 0;
                        (1 == r || 2 == r && Math.random() < .25) && (s = (l + 6 * Math.random()) * Math.PI / 180),
                            d.rotate(s),
                            d.translate(1.3 * -a / 2 + a / 20, 1.3 * -a / 2 + 1.05 * a),
                            d.fillText(t, 0, 0),
                            c.drawImage(i, o * a * 1.2, 0)
                    }
                ),
                i
        }
            , k = t=>new Promise(a=>{
                const e = new FileReader;
                e.onload = async function() {
                    var t = this.result;
                    t = await x(t);
                    a(t)
                }
                    ,
                    e.readAsDataURL(t)
            }
        );
        function I(t, a, e, n, l, o, i) {
            var c = t.measureText(a).width
                , r = o
                , d = ""
                , s = (o = c / e,
                Math.ceil(o))
                , m = parseInt(a.length / o);
            if (c < e)
                t.fillText(a, l, r);
            else
                for (var b = 1; b < s + 1; b++) {
                    var f = m * (b - 1);
                    if (!(b < n || -1 == n)) {
                        d = a.substr(f, m - 5) + "...",
                            t.fillText(d, l, r);
                        break
                    }
                    d = a.substr(f, m),
                        t.fillText(d, l, r),
                        r += i
                }
        }
        const Y = async(t=0)=>{
            var a, e = null == (e = window) || null == (e = e.data) ? void 0 : e.shareInfo, l = e.links[t % e.links.length];
            let m;
            if (null != (a = window) && null != (a = a.data) && a.ad_share && null != (a = window) && null != (a = a.data) && a.ad_share[t]) {
                const e = ["深圳", "广州", "苏州", "上海", "杭州"];
                2 == (null == (a = window) || null == (a = a.data) ? void 0 : a.ad_share[t]) && e.includes(Object(n.b)()) ? (m = (a = ["https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/sc/sc01.png", "https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/sc/sc02.png"])[parseInt(Math.random() * a.length)],
                    Object(M.h)("draw_sc", 1)) : m = await Object(o.a)(null == (t = window) || null == (a = t.data) ? void 0 : a.ad_link)
            } else
                "zz1" == e.type ? m = await Object(i.a)(l, 1) : "zz2" == e.type ? m = await Object(i.a)(l, 2) : "zz3" == e.type ? m = await Object(i.a)(l, 3) : "zz4" == e.type ? m = await Object(i.a)(l, 4) : "zz5" == e.type ? m = await Object(i.a)(l, 5) : "zz6" == e.type ? m = await Object(i.a)(l, 6) : "zzcj" == e.type ? m = await Object(c.a)(l, e.stype) : "zz" == e.type ? m = await Object(i.a)(l, e.stype) : "hb" == e.type ? m = await (async t=>{
                        const a = document.createElement("canvas")
                            , e = a.getContext("2d");
                        for (var l = (d = await x("https://1899.oss-cn-shenzhen.aliyuncs.com/case/hbbk2.png")).width, o = d.height, i = (a.width = l,
                            a.height = o + 0,
                            e.getImageData(0, 0, l, o + 0)), c = 0; c < i.data.length; c += 4)
                            0 == i.data[c + 3] && (i.data[c] = 255,
                                i.data[c + 1] = 255,
                                i.data[c + 2] = 255,
                                i.data[c + 3] = 255);
                        e.putImageData(i, 0, 0),
                            e.drawImage(d, 0, 0, l, o),
                        3 === (null == (d = window) || null == (l = d.data) || null == (o = l.shareInfo) ? void 0 : o.drawerFucker) && C(e),
                            e.fillStyle = "#fcf5e9",
                            e.font = 'normal bold 44px  "Microsoft YaHei, PingFang SC"';
                        var d = [["恭喜發財 财源广进", "大吉大利 恭喜發財", "恭喜發財 大吉大利", "天天开心 财源滚滚"]];
                        l = Object(r.e)(d, !0),
                            o = H(l, {
                                size: 40,
                                font: 'normal bold 40px "Microsoft YaHei, PingFang SC"',
                                fillStyle: "#fcf5e9"
                            });
                        e.drawImage(o, 140, 60);
                        {
                            const t = [["人人有份 扫码即领", "你我有份 扫码立领", "全员送礼 扫码可领"]];
                            d = Object(r.e)(t, !0),
                                l = H(d, {
                                    size: 30,
                                    font: 'normal 450 30px  "Microsoft YaHei, PingFang SC"',
                                    fillStyle: "#f6dcb1"
                                });
                            e.drawImage(l, 40, 170)
                        }
                        {
                            var s = [["新年"], ["津贴", "助补", "萜补"], ["已发放", "发放中"], [","], ["人人有份", "人人可领", "全民有份"], [","], ["长按识别领取"]];
                            const t = Object(r.e)(s, !0);
                            Object(n.b)(),
                                e.fillStyle = "#ee0a24";
                            t.split(",").map((t,a)=>{
                                    e.textBaseline = "top";
                                    var n = 0 === a ? 36 : 38;
                                    t = H(t, {
                                        size: n,
                                        font: `normal bold ${n}px Microsoft YaHei`,
                                        fillStyle: "#ee0a24"
                                    });
                                    e.drawImage(t, 30, 260 + 60 * a)
                                }
                            )
                        }
                        return 1 === (null == (o = window) || null == (d = o.data) || null == (l = d.shareInfo) ? void 0 : l.drawerFucker) ? drawerFucker(e) : 2 === (null == (s = window) || null == (o = s.data) || null == (d = o.shareInfo) ? void 0 : d.drawerFucker) && await drawerFucker2(e),
                            e.globalAlpha = 1,
                            l = await S(t),
                            e.drawImage(l, 360, 240, 200, 200),
                            a.toDataURL()
                    }
                )(l) : "hb2" == e.type ? m = await (async t=>{
                        const a = document.createElement("canvas")
                            , e = a.getContext("2d");
                        let l;
                        try {
                            l = await x("https://1899.oss-accelerate.aliyuncs.com/case/img/hb/hb2.png")
                        } catch (t) {}
                        var o = l.width
                            , i = l.height
                            , {} = (i = (a.width = o,
                            a.height = i,
                            e.drawImage(l, 0, 0, o, i),
                            e.fillStyle = "#fcf5e9",
                            e.font = 'normal bold 44px  "Microsoft YaHei, PingFang SC"',
                            [["邀您进入"], [Object(n.b)("")], ["红包群"]]),
                            i = Object(r.e)(i, !0),
                            i = H(i, {
                                size: 45,
                                font: 'normal bold 45px "Microsoft YaHei, PingFang SC"',
                                fillStyle: "#000"
                            }),
                            i = (e.drawImage(i, 380, 160),
                                e.fillStyle = "#fcf5e9",
                                e.font = 'normal bold 44px  "Microsoft YaHei, PingFang SC"',
                                [["五分钟一个包"]]),
                            i = Object(r.e)(i, !0),
                            i = H(i, {
                                size: 40,
                                font: 'normal bold 40px "Microsoft YaHei, PingFang SC"',
                                fillStyle: "#969799"
                            }),
                            t = (e.drawImage(i, 380, 260),
                            t && (e.globalAlpha = .95,
                                e.fillStyle = "#000",
                                e.globalAlpha = 1,
                                i = await S(t, {
                                    margin: 1,
                                    errorCorrectionLevel: "L",
                                    color: {}
                                }),
                                e.drawImage(i, (o - 450) / 2, 500, 450, 450)),
                                [["长按识别二维码"], ["立刻", "马上", "现在"], ["抢", "领"]]),
                            i = (e.font = 'normal bold 65px "Microsoft YaHei, PingFang SC"',
                                Object(r.e)(t, !0)),
                            e.fillStyle = "#fff",
                            e.measureText(i));
                        return a.toDataURL()
                    }
                )(l) : "hdl" == e.type ? m = await Object(s.a)(l, e.stype) : "zzbz" == e.type ? m = await (async(t,a=1)=>{
                        const e = document.createElement("canvas")
                            , n = e.getContext("2d");
                        let l;
                        try {
                            l = await x("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/bk5.png")
                        } catch (t) {
                            l = await x("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/bk5.png")
                        }
                        b = l.width,
                            f = l.height,
                            e.width = b,
                            e.height = f,
                            n.drawImage(l, 0, 0, b, f);
                        const o = new Date
                            , i = o.getHours() + ":" + (9 < o.getMinutes() ? o.getMinutes() : "0" + o.getMinutes());
                        n.fillStyle = "#FFFFFF",
                            n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                            n.fillText(i, 80, 90);
                        var c, s = [["扫码就领", "码上福利", "码上有包"]], m = (s = Object(r.e)(s, !0),
                            s = (n.font = 'normal 400 100px "FZQKBYSJW--GB1-0"',
                                z(n, s),
                                H(s, {
                                    size: 90,
                                    font: 'normal bold 90px "FZQKBYSJW--GB1-0"',
                                    fillStyle: "#ebcd9b"
                                }),
                                await p(n),
                                c = window.money || (50 * Math.random() + 150).toFixed(2),
                                n.fillStyle = "#af966f",
                                n.font = 'normal bold 150px "Microsoft YaHei, PingFang SC"',
                            "" + c),
                            z(n, s));
                        n.fillText(s, (b - m - 70) / 2, 680),
                            n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                            n.fillText("元", (b - m - 70) / 2 + m, 675),
                            s = [["已存入钱包"]],
                            m = Object(r.e)(s, !0),
                            n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                            s = H(m, {
                                size: 42,
                                font: 'normal bold 42px "Microsoft YaHei, PingFang SC"',
                                fillStyle: "#C0A67A"
                            });
                        n.drawImage(s, (b - 42 * m.length * 1.2) / 2, 780),
                            n.fillText(">", (b - 42 * m.length * 1.2) / 2 + 42 * m.length * 1.2, 820),
                            n.fillStyle = "#b3b3b3",
                            n.font = 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                            s = [[60 + parseInt(30 * Math.random()) + "/100，"], [(1e4 * (55 + 10 * Math.random()) / 100).toFixed(2) + "/10000"]],
                            m = Object(r.e)(s, !0),
                            n.fillText(m, 160, 1e3),
                            s = H("已抢", {
                                size: 38,
                                font: 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                                fillStyle: "#b3b3b3"
                            }),
                            n.drawImage(s, 50, 960);
                        const h = [];
                        for (let t = 0; t < 4; t++) {
                            let t = !0;
                            for (; t; ) {
                                const a = Object(d.b)();
                                0 == h.filter(t=>t.name == a.name).length && (h.push(a),
                                    t = !1)
                            }
                        }
                        for (let a = 0; a < h.length; a++) {
                            var j = h[a];
                            try {
                                var v = await x(j.avatar);
                                n.drawImage(v, 50, 1400 + 230 * a - 320, 120, 120)
                            } catch (t) {}
                            n.fillStyle = "#000000",
                                n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"',
                                n.fillText(j.name, 230, 1450 + 230 * a - 320),
                                j = (parseFloat(c) * (.5 + .8 * Math.random())).toFixed(2),
                                h[a].money = j,
                                n.fillStyle = "#00000",
                                n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"';
                            var w = z(n, c);
                            j = (n.fillText(j + "元", b - w - 100, 1450 + 230 * a - 320),
                            Date.now() - 4e4 * (h.length - a) - Math.random(1e3 * Math.random() * 30));
                            const e = new Date(j);
                            w = e.getHours() + ":" + (9 < e.getMinutes() ? e.getMinutes() : "0" + e.getMinutes()),
                                n.fillStyle = "#b3b3b3",
                                n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                                n.fillText(w, 230, 1540 + 230 * a - 320)
                        }
                        return t && (n.globalAlpha = .95,
                            n.fillStyle = u,
                            n.fillRect((b - g - 50) / 2, 1200, 585, 585),
                            n.globalAlpha = 1,
                            m = await S(t, {
                                margin: 1,
                                errorCorrectionLevel: "L",
                                color: {
                                    dark: u
                                }
                            }),
                            n.drawImage(m, (b - g) / 2, 1230, g, g)),
                            a % 2 == 1 ? ((t,a)=>{
                                    var e = [["人人", "见者"], ["有份", "可抢"]]
                                        , n = (e = Object(r.e)(e, !0),
                                        t.font = 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                                        t.fillStyle = u,
                                        t.globalAlpha = .95,
                                        t.fillRect((b - g - 50) / 2, 1080, 585, 120),
                                        H(e, {
                                            size: 85,
                                            font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                                            fillStyle: "#fff",
                                            rotate: 35
                                        }));
                                    t.drawImage(n, (b - 85 * e.length * 1.2) / 2, 1100),
                                        t.globalAlpha = .95,
                                        t.fillStyle = u,
                                        t.fillRect((b - g - 50) / 2, 1785, 585, 120),
                                        n = [["长按"], ["识別"], ["二维码"]],
                                        t.font = 'normal bold 62px "Microsoft YaHei, PingFang SC"',
                                        e = Object(r.e)(n, !0),
                                        t.fillStyle = "#fff",
                                        t.fillText(e, (b - 62 * e.length) / 2 - 65, 1855),
                                        n = H("抢", {
                                            size: 60,
                                            font: 'normal bold 70px "Microsoft YaHei, PingFang SC"',
                                            fillStyle: "#fff",
                                            rotate: 35
                                        }),
                                        t.drawImage(n, (b - 62 * e.length) / 2 + 62 * e.length - 50, 1795)
                                }
                            )(n) : (t=>{
                                    t.fillStyle = u,
                                        t.globalAlpha = .95,
                                        t.fillRect((b - g - 50) / 2 - 129, 1200, 130, 585);
                                    var a = [["人人有份", "一人一份", "见者有份"]];
                                    Object(r.e)(a, !0).split("").map((a,e)=>{
                                            a = H(a, {
                                                size: 85,
                                                font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                                                fillStyle: "#fff"
                                            }),
                                                t.drawImage(a, (b - g - 50) / 2 - 100, 1260 + 120 * e)
                                        }
                                    );
                                    t.fillStyle = u,
                                        t.globalAlpha = .95,
                                        t.fillRect((b - g - 50) / 2 + g + 49, 1200, 130, 585),
                                        a = [["长按扫码领", "长按识码领"]];
                                    Object(r.e)(a, !0).split("").map((a,e)=>{
                                            a = H(a, {
                                                size: 65,
                                                font: 'normal bold 65px "Microsoft YaHei, PingFang SC"',
                                                fillStyle: "#fff"
                                            }),
                                                t.drawImage(a, (b - g - 50) / 2 + g + 60, 1260 + 100 * e)
                                        }
                                    )
                                }
                            )(n),
                            e.toDataURL()
                    }
                )(l, e.stype) : "mdm" == e.type ? m = await Object(h.a)(l) : "hw" == e.type ? m = await Object(j.a)(l) : "dian" == e.type ? m = await Object(v.a)(l) : "jiadian" == e.type ? m = await Object(w.a)(l, e.stype) : "user" == e.type && (m = await Object(O.a)(l, e.stype));
            return m
        }
    },
    "80d7": function(t, a, e) {
        "use strict";
        e("5921")
    },
    "90e5": function(t, a, e) {},
    "945d": function(t, a, e) {
        "use strict";
        e("68e8")
    },
    "94e1": function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return m
            }
        ));
        var n = e("e0eb")
            , l = (e("d055"),
            e("b95c"))
            , o = e("793c");
        e("13d5"),
            e("ee42");
        const i = [{
            name: "松下",
            avatar: "https://commimg.pddpic.com/img_check/2021-06-30/127479aede21d529be3033376e21ab78.jpg"
        }, {
            name: "容声",
            avatar: "https://t00img.yangkeduo.com/goods/images/2019-01-20/584295b65b450bd8b2277948f8232445.jpeg"
        }, {
            name: "海尔",
            avatar: "https://t00img.yangkeduo.com/goods/images/2019-01-20/1c3781d2fa5099b1e88349ea8811cfd9.jpeg"
        }, {
            name: "美的",
            avatar: "https://t00img.yangkeduo.com/goods/images/2018-12-27/99817a2b1240100f3b8dbb7eaec87bc2.jpeg"
        }, {
            name: "TCL",
            avatar: "https://t00img.yangkeduo.com/goods/images/2019-01-20/7cf71d44114b50e52d18f7de4146547d.jpeg"
        }, {
            name: "海信",
            avatar: "https://commimg.pddpic.com/img_check/2021-09-01/16e70bd61d14c3152d3fb37986b5ad5d.jpg"
        }, {
            name: "小天鹅",
            avatar: "https://t16img.yangkeduo.com/pdd_ims/mainObject/v1/pub_20210125d8db452ef08c42d1b2e971fa9266504a.jpg"
        }, {
            name: "苏泊尔",
            avatar: "https://t00img.yangkeduo.com/goods/images/2021-02-01/b5d436c1-123d-4f17-bf7c-2dca8a87ac7b.jpeg"
        }, {
            name: "西门子",
            avatar: "https://t00img.yangkeduo.com/goods/images/2018-08-27/fc219183e04c65a94ac2ee2aa70dac0e.png"
        }, {
            name: "三菱",
            avatar: "https://commimg.pddpic.com/img_check/2022-01-25/796d22aebffe7c2f6e33b6eafd0f239d.jpg"
        }, {
            name: "格力",
            avatar: "https://t00img.yangkeduo.com/goods/images/2019-01-20/725ed5935f05439783b12c71fbdc8b94.jpeg"
        }];
        var c = e("7d4a");
        let r, d;
        const s = 535
            , m = async(t,a=1)=>{
            const e = document.createElement("canvas")
                , n = e.getContext("2d");
            let i;
            try {
                i = await Object(c.f)("https://g.fp.ps.netease.com/market/file/6364f7e843d7922daa0f42a1WuXWWwz804")
            } catch (t) {
                i = await Object(c.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/bk2.png")
            }
            r = i.width,
                d = i.height,
                e.width = r,
                e.height = d,
                n.drawImage(i, 0, 0, r, d);
            const m = new Date
                , u = m.getHours() + ":" + (9 < m.getMinutes() ? m.getMinutes() : "0" + m.getMinutes());
            n.fillStyle = "#FFFFFF",
                n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                n.fillText(u, 80, 90),
                await b(n, a),
                p = window.money || (50 * Math.random() + 150).toFixed(2),
                n.fillStyle = "#af966f",
                n.font = 'normal bold 150px "Microsoft YaHei, PingFang SC"';
            var p, h = "" + p, j = Object(c.h)(n, h);
            n.fillText(h, (r - j - 70) / 2, 780),
                n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                n.fillText("元", (r - j - 70) / 2 + j, 775),
            a <= 4 && (h = [["已存入钱包", "已存入零钱", "已收入钱包"]],
                j = Object(l.e)(h, !0),
                n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                h = Object(c.a)(j, {
                    size: 42,
                    font: 'normal bold 42px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#C0A67A",
                    forceRotate: !0
                }),
                n.drawImage(h, (r - 42 * j.length * 1.2) / 2, 860),
                n.fillText(">", (r - 42 * j.length * 1.2) / 2 + 42 * j.length * 1.2, 900)),
                h = [["回复表情到聊天", "回复表情给好友"]],
                j = Object(l.e)(h, !0),
                n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                h = Object(c.a)(j, {
                    size: 38,
                    font: 'normal bold 38px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#C0A67A",
                    forceRotate: !0
                });
            n.drawImage(h, (r - 38 * j.length * 1.2) / 2 + 50, 1030),
                n.fillStyle = "#b3b3b3",
                n.font = 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                h = [[60 + parseInt(30 * Math.random()) + "/100，"], [(1e4 * (55 + 10 * Math.random()) / 100).toFixed(2) + "/10000"]],
                j = Object(l.e)(h, !0),
                n.fillText(j, 160, 1320),
                h = Object(c.a)("已抢", {
                    size: 38,
                    font: 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#b3b3b3",
                    forceRotate: !0
                }),
                n.drawImage(h, 50, 1280);
            const v = [];
            for (let t = 0; t < 6; t++) {
                let t = !0;
                for (; t; ) {
                    const a = Object(o.b)();
                    0 == v.filter(t=>t.name == a.name).length && (v.push(a),
                        t = !1)
                }
            }
            for (let a = 0; a < v.length; a++) {
                var w = v[a];
                try {
                    var O = await Object(c.f)(w.avatar);
                    n.drawImage(O, 50, 1400 + 230 * a, 120, 120)
                } catch (t) {}
                n.fillStyle = "#000000",
                    n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"',
                    n.fillText(w.name, 230, 1450 + 230 * a),
                    w = (parseFloat(p) * (.5 + .8 * Math.random())).toFixed(2),
                    v[a].money = w,
                    n.fillStyle = "#00000",
                    n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"';
                var y = Object(c.h)(n, p);
                w = (n.fillText(w + "元", r - y - 100, 1450 + 230 * a),
                Date.now() - 4e4 * (v.length - a) - Math.random(1e3 * Math.random() * 30));
                const e = new Date(w);
                y = e.getHours() + ":" + (9 < e.getMinutes() ? e.getMinutes() : "0" + e.getMinutes()),
                    n.fillStyle = "#b3b3b3",
                    n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                    n.fillText(y, 230, 1540 + 230 * a)
            }
            return t && (n.globalAlpha = .95,
                n.fillStyle = "#e2614c",
                n.fillRect((r - s - 50) / 2, 1520, 585, 585),
                n.globalAlpha = 1,
                j = await Object(c.g)(t, {
                    margin: 1,
                    errorCorrectionLevel: "L",
                    color: {
                        dark: "#e2614c"
                    }
                }),
                n.drawImage(j, (r - s) / 2, 1550, s, s)),
                a % 2 == 1 ? f(n, a) : g(n),
                e.toDataURL()
        }
            , b = async(t,a)=>{
            a = ((t=0)=>{
                    const a = Object(n.b)();
                    let e;
                    e = "本地" == a ? parseInt(Date.now() / 288e5) : null == a ? void 0 : a.split("").map(t=>t.charCodeAt()).reduce((t,a)=>t + a, 0);
                    var l = parseInt(Date.now() / 2592e5);
                    return i[l = (e + l + t) % i.length]
                }
            )(a);
            var e = [[Object(n.b)("")], [a.name], ["家电", "电器"], ["销量", "粉丝量", "用户量", "销售额", "好评率", "回购率"], ["创新高", "破纪录", "新突破"]]
                , o = (e = Object(l.e)(e, !0),
                t.fillStyle = "#000",
                t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                Object(c.h)(t, e));
            t.fillText(e, (r - o) / 2 + 40, 522);
            try {
                var d = await Object(c.f)(a.avatar);
                t.drawImage(d, (r - o) / 2 - 60, 455, 100, 100)
            } catch (t) {}
        }
            , f = (t,a)=>{
            var e = [["人人"], ["有份", "可抢"]]
                , n = (e = Object(l.e)(e, !0),
                t.font = 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((r - s - 50) / 2, 1400, 585, 120),
                Object(c.a)(e, {
                    size: 85,
                    font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#fff",
                    rotate: 35,
                    forceRotate: !0
                }));
            t.drawImage(n, (r - 85 * e.length * 1.2) / 2, 1420),
                t.globalAlpha = .95,
                t.fillStyle = "#e2614c",
                t.fillRect((r - s - 50) / 2, 2105, 585, 120),
                n = [["长按"], ["识別"], ["二维码"]],
                t.font = 'normal bold 62px "Microsoft YaHei, PingFang SC"',
                e = Object(l.e)(n, !0),
                t.fillStyle = "#fff",
                t.fillText(e, (r - 62 * e.length) / 2 - 30, 2175),
                n = Object(c.a)("抢", {
                    size: 60,
                    font: 'normal bold 70px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#fff",
                    rotate: 35,
                    forceRotate: !0
                }),
                t.drawImage(n, (r - 62 * e.length) / 2 + 62 * e.length - 26, 2115)
        }
            , g = t=>{
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((r - s - 50) / 2 - 129, 1520, 130, 585);
            var a = [["人人有份", "一人一份", "见者有份"]];
            Object(l.e)(a, !0).split("").map((a,e)=>{
                    a = Object(c.a)(a, {
                        size: 85,
                        font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff",
                        forceRotate: !0
                    }),
                        t.drawImage(a, (r - s - 50) / 2 - 100, 1580 + 120 * e)
                }
            );
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((r - s - 50) / 2 + s + 49, 1520, 130, 585),
                a = [["长按扫码领", "长按识码领"]];
            Object(l.e)(a, !0).split("").map((a,e)=>{
                    a = Object(c.a)(a, {
                        size: 65,
                        font: 'normal bold 65px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff",
                        forceRotate: !0
                    }),
                        t.drawImage(a, (r - s - 50) / 2 + s + 60, 1580 + 100 * e)
                }
            )
        }
    },
    "99c1": function(t, a, e) {
        "use strict";
        var n = e("7a23");
        const l = ["src"]
            , o = {
            class: Object(n.u)({
                inner: 1
            })
        }
            , i = {
            key: 0,
            class: "precent_crt"
        }
            , c = {
            class: "btn-content"
        };
        var r = e("cee5")
            , d = e("d5fb");
        r = {
            components: {
                qcode: r.a,
                Progress: d.a
            },
            props: {
                show: Boolean,
                fail: Boolean,
                cancle: Boolean,
                precent: Number,
                subText: {
                    type: String,
                    default: "我知道了"
                },
                cancleText: {
                    type: String,
                    default: "关闭"
                },
                headImg: {
                    type: String,
                    default: "https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/hdl/logo.png"
                },
                shareType: Number
            },
            setup(t, {emit: a}) {
                const e = Object(n.G)(!1)
                    , l = Object(n.G)(!1)
                    , o = Object(n.G)(!1);
                var {show: t, fail: i} = Object(n.M)(t);
                return Object(n.Q)(t, t=>{
                        t && (l.value = !0,
                            setTimeout(()=>{
                                    l.value = !1
                                }
                                , 500))
                    }
                    , {
                        immediate: !0
                    }),
                    Object(n.Q)(i, t=>{
                            t && (o.value = !0,
                                setTimeout(()=>{
                                        o.value = !1
                                    }
                                    , 1200))
                        }
                        , {
                            immediate: !0
                        }),
                    {
                        onsubmit: ()=>{
                            e.value = !0,
                                setTimeout(()=>{
                                        a("submit"),
                                            e.value = !1
                                    }
                                    , 500)
                        }
                        ,
                        oncancle: ()=>{
                            e.value = !0,
                                setTimeout(()=>{
                                        a("cancle"),
                                            e.value = !1
                                    }
                                    , 500)
                        }
                        ,
                        isClose: e,
                        isShow: l,
                        isFail: o
                    }
            }
        },
            e("2a0a"),
            d = e("6b0d"),
            e = e.n(d);
        a.a = e()(r, [["render", function(t, a, e, r, d, s) {
            var m = Object(n.J)("Progress");
            return Object(n.S)((Object(n.B)(),
                Object(n.h)("div", {
                    class: "modal",
                    style: Object(n.v)({
                        "padding-top": 1 == e.shareType || 3 == e.shareType ? "5vw" : "30vw"
                    })
                }, [Object(n.i)("div", {
                    class: Object(n.u)({
                        outer: 1,
                        show: r.isShow,
                        close: r.isClose,
                        fail: r.isFail
                    })
                }, [Object(n.i)("img", {
                    class: "header-img",
                    src: e.headImg
                }, null, 8, l), Object(n.i)("div", o, [Object(n.I)(t.$slots, "default", {}, void 0, !0), e.precent ? (Object(n.B)(),
                    Object(n.h)("div", i, [Object(n.l)(m, {
                        precent: e.precent
                    }, null, 8, ["precent"])])) : Object(n.g)("", !0), Object(n.i)("div", c, [e.cancle ? (Object(n.B)(),
                    Object(n.h)("div", {
                        key: 0,
                        class: "btn cancle",
                        onClick: a[0] || (a[0] = Object(n.T)((...t)=>r.oncancle && r.oncancle(...t), ["stop"]))
                    }, Object(n.L)(e.cancleText), 1)) : Object(n.g)("", !0), Object(n.i)("div", {
                    class: "btn submit",
                    onClick: a[1] || (a[1] = Object(n.T)((...t)=>r.onsubmit && r.onsubmit(...t), ["stop"]))
                }, Object(n.L)(e.subText), 1)])])], 2)], 4)), [[n.P, e.show]])
        }
        ], ["__scopeId", "data-v-45ddd1b6"]])
    },
    "9c54": function(t, a, e) {},
    a550: function(t, a, e) {
        "use strict";
        e("90e5")
    },
    b14e: function(t, a) {
        let e = 0;
        const n = setInterval(()=>{
                e++,
                    ["#login-tips"].map(t=>{
                            const a = document.querySelector(t);
                            a && (a.hidden = !0)
                        }
                    ),
                5 < e && clearInterval(n)
            }
            , 1e3)
    },
    b26c: function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return s
            }
        )),
            e("e0eb"),
            e("d055");
        var n = e("b95c")
            , l = e("793c")
            , o = (e("ca88"),
            e("7d4a"));
        let i, c;
        const r = 535
            , d = "#e2614c"
            , s = async(t,a=1)=>{
            const e = document.createElement("canvas")
                , s = e.getContext("2d");
            let g;
            try {
                g = await Object(o.f)("https://g.fp.ps.netease.com/market/file/6364f7e843d7922daa0f42a1WuXWWwz804")
            } catch (t) {
                g = await Object(o.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/bk2.png")
            }
            i = g.width,
                c = g.height,
                e.width = i,
                e.height = c,
                s.drawImage(g, 0, 0, i, c);
            const u = new Date
                , p = u.getHours() + ":" + (9 < u.getMinutes() ? u.getMinutes() : "0" + u.getMinutes());
            s.fillStyle = "#FFFFFF",
                s.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                s.fillText(p, 80, 90);
            var h, j = [["扫码就领", "码上福利", "码上有包"]], v = (j = Object(n.e)(j, !0),
                j = (s.font = 'normal 400 100px "FZQKBYSJW--GB1-0"',
                    Object(o.h)(s, j),
                    Object(o.a)(j, {
                        size: 90,
                        font: 'normal bold 90px "FZQKBYSJW--GB1-0"',
                        fillStyle: "#ebcd9b"
                    }),
                    await m(s, a),
                    h = window.money || (50 * Math.random() + 150).toFixed(2),
                    s.fillStyle = "#af966f",
                    s.font = 'normal bold 150px "Microsoft YaHei, PingFang SC"',
                "" + h),
                Object(o.h)(s, j));
            s.fillText(j, (i - v - 70) / 2, 780),
                s.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                s.fillText("元", (i - v - 70) / 2 + v, 775),
                j = [["已存入钱包"]],
                v = Object(n.e)(j, !0),
                s.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                j = Object(o.a)(v, {
                    size: 42,
                    font: 'normal bold 42px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#C0A67A"
                }),
                s.drawImage(j, (i - 42 * v.length * 1.2) / 2, 860),
                s.fillText(">", (i - 42 * v.length * 1.2) / 2 + 42 * v.length * 1.2, 900),
                j = [["回复表情到聊天"]],
                v = Object(n.e)(j, !0),
                s.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                j = Object(o.a)(v, {
                    size: 38,
                    font: 'normal bold 38px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#C0A67A"
                });
            s.drawImage(j, (i - 38 * v.length * 1.2) / 2 + 50, 1030),
                s.fillStyle = "#b3b3b3",
                s.font = 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                j = [[60 + parseInt(30 * Math.random()) + "/100，"], [(1e4 * (55 + 10 * Math.random()) / 100).toFixed(2) + "/10000"]],
                v = Object(n.e)(j, !0),
                s.fillText(v, 160, 1320),
                j = Object(o.a)("已抢", {
                    size: 38,
                    font: 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#b3b3b3"
                }),
                s.drawImage(j, 50, 1280);
            const w = [];
            for (let t = 0; t < 6; t++) {
                let t = !0;
                for (; t; ) {
                    const a = Object(l.b)();
                    0 == w.filter(t=>t.name == a.name).length && (w.push(a),
                        t = !1)
                }
            }
            for (let a = 0; a < w.length; a++) {
                var O = w[a];
                try {
                    var y = await Object(o.f)(O.avatar);
                    s.drawImage(y, 50, 1400 + 230 * a, 120, 120)
                } catch (t) {}
                s.fillStyle = "#000000",
                    s.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"',
                    s.fillText(O.name, 230, 1450 + 230 * a),
                    O = (parseFloat(h) * (.5 + .8 * Math.random())).toFixed(2),
                    w[a].money = O,
                    s.fillStyle = "#00000",
                    s.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"';
                var M = Object(o.h)(s, h);
                O = (s.fillText(O + "元", i - M - 100, 1450 + 230 * a),
                Date.now() - 4e4 * (w.length - a) - Math.random(1e3 * Math.random() * 30));
                const e = new Date(O);
                M = e.getHours() + ":" + (9 < e.getMinutes() ? e.getMinutes() : "0" + e.getMinutes()),
                    s.fillStyle = "#b3b3b3",
                    s.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                    s.fillText(M, 230, 1540 + 230 * a)
            }
            return t && (s.globalAlpha = .95,
                s.fillStyle = d,
                s.fillRect((i - r - 50) / 2, 1520, 585, 585),
                s.globalAlpha = 1,
                v = await Object(o.g)(t, {
                    margin: 1,
                    errorCorrectionLevel: "L",
                    color: {
                        dark: d
                    }
                }),
                s.drawImage(v, (i - r) / 2, 1550, r, r)),
                a % 2 == 1 ? b(s, a) : f(s),
                e.toDataURL()
        }
            , m = async(t,a)=>{
            var e = [["华为汽车"]]
                , l = (e = Object(n.e)(e, !0),
                Object(o.a)(e, {
                    size: 60,
                    font: 'normal bold 60px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#e2614c",
                    rotate: 35
                }))
                , c = (e = 60 * e.length * 1.2,
                l = (t.drawImage(l, (i - e) / 2 - 160, 462),
                    [["1月", "上月", "一月"], ["销量", "交付"], ["创新高", "破纪录", "新突破"]]),
                l = Object(n.e)(l, !0),
                t.fillStyle = "#000",
                t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                Object(o.h)(t, l));
            t.fillText(l, (i - c) / 2 + c / 2 + e / 2 - 160, 522);
            try {
                var r = await Object(o.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/hdl/huawei2.png");
                t.drawImage(r, (i - e) / 2 - 160 - 80, 465, 80, 80)
            } catch (t) {}
        }
            , b = (t,a)=>{
            var e = [["人人", "见者"], ["有份", "可抢"]]
                , l = (e = Object(n.e)(e, !0),
                t.font = 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                t.fillStyle = d,
                t.globalAlpha = .95,
                t.fillRect((i - r - 50) / 2, 1400, 585, 120),
                Object(o.a)(e, {
                    size: 85,
                    font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#fff",
                    rotate: 35
                }));
            t.drawImage(l, (i - 85 * e.length * 1.2) / 2, 1420),
                t.globalAlpha = .95,
                t.fillStyle = d,
                t.fillRect((i - r - 50) / 2, 2105, 585, 120),
                l = [["长按"], ["识別"], ["二维码"]],
                t.font = 'normal bold 62px "Microsoft YaHei, PingFang SC"',
                e = Object(n.e)(l, !0),
                t.fillStyle = "#fff",
                t.fillText(e, (i - 62 * e.length) / 2 - 65, 2175),
                l = Object(o.a)("抢", {
                    size: 60,
                    font: 'normal bold 70px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#fff",
                    rotate: 35
                }),
                t.drawImage(l, (i - 62 * e.length) / 2 + 62 * e.length - 50, 2115)
        }
            , f = t=>{
            t.fillStyle = d,
                t.globalAlpha = .95,
                t.fillRect((i - r - 50) / 2 - 129, 1520, 130, 585);
            var a = [["人人有份", "一人一份", "见者有份"]];
            Object(n.e)(a, !0).split("").map((a,e)=>{
                    a = Object(o.a)(a, {
                        size: 85,
                        font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff"
                    }),
                        t.drawImage(a, (i - r - 50) / 2 - 100, 1580 + 120 * e)
                }
            );
            t.fillStyle = d,
                t.globalAlpha = .95,
                t.fillRect((i - r - 50) / 2 + r + 49, 1520, 130, 585),
                a = [["长按扫码领", "长按识码领"]];
            Object(n.e)(a, !0).split("").map((a,e)=>{
                    a = Object(o.a)(a, {
                        size: 65,
                        font: 'normal bold 65px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff"
                    }),
                        t.drawImage(a, (i - r - 50) / 2 + r + 60, 1580 + 100 * e)
                }
            )
        }
    },
    b8c6: function(t, a, e) {
        "use strict";
        e("747c")
    },
    b95c: function(t, a, e) {
        "use strict";
        e.d(a, "d", (function() {
                return i
            }
        )),
            e.d(a, "f", (function() {
                    return r
                }
            )),
            e.d(a, "b", (function() {
                    return d
                }
            )),
            e.d(a, "c", (function() {
                    return s
                }
            )),
            e.d(a, "a", (function() {
                    return m
                }
            )),
            e.d(a, "e", (function() {
                    return b
                }
            )),
            e("13d5");
        var n = e("e0eb")
            , l = e("ee42");
        let o = "";
        function i(t=!1) {
            var a;
            return "hw" == (null == (a = window) || null == (a = a.data) || null == (a = a.attached) ? void 0 : a.theme) ? c(t) : "rd" == (null == (a = window) || null == (a = a.data) || null == (a = a.attached) ? void 0 : a.theme) ? r() : "qq" == (null == (a = window) || null == (a = a.data) || null == (a = a.attached) ? void 0 : a.theme) ? b([[s()], ["我要", "我将", "我终于"], ["搬{fuckr}新{fuckr}宅", "换{fuckr}新{fuckr}房", "安{fuckr}新{fuckr}家", "搬{fuckr}新{fuckr}房"], ["啦", "咯", "了"], ["，", "。"], ["期{fuckr}待", "盼{fuckr}望", "期{fuckr}盼"], ["您", "你"], ["到{fuckr}来", "莅{fuckr}临", "光{fuckr}临", "亲{fuckr}临", "来做{fuckr}客"], ["^"]], !0) : "hdl" == (null == (a = window) || null == (a = a.data) || null == (a = a.attached) ? void 0 : a.theme) ? (a = s(),
                b(a = [[Object(n.b)()], ["嗨", "海"], ["低捞", "底唠"], ["新店", "总店"], ["周年", "開業", "粉丝"], ["醴", "礼"], [","], ["见者有份", "人人有份", "先到先得", "有你一份"], ["。"], [a], ["前"], ["有效", "都能拿"], [","], ["数量有限"], [","], ["送完为止", "送完结束"], [","], ["门店通用"]], !0)) : c(t)
        }
        function c(t) {
            var a = s();
            return b([["^"], [Object(n.b)()], ["我是", "我为"], ["第", "排"], [100 + parseInt(1e4 * Math.random())], ["位", "个"], ["幸运", "好运"], ["儿"], [","], ["活动", "福利"], [a], ["前有效", "截止"], ["~~", "->", ".."]], t)
        }
        function r(t=0, a) {
            a = a || 15 + parseInt(10 * Math.random());
            let e = "";
            for (; a; )
                e += String.fromCharCode(2e4 + Math.floor(1e4 * Math.random())),
                    a--;
            return e
        }
        function d(t) {
            var a = s();
            return b([["^"], [Object(n.b)()], ["我分", "我得", "我拿", "我领"], [window.money], ["~~", "->", ".."], [a], ["截止", "结束"]], t)
        }
        function s() {
            var t = Date.now() + 6048e5;
            return (t = new Date(t)).getMonth() + 1 + "月" + t.getDate() + "日"
        }
        function m() {
            var t = ["😶", "😊", "🙂", "😐", "😶", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🥥", "🥝", "🍅", "🥑", "🥦", "🥒", "🌶", "🌽", "🥕", "🥔", "🍠", "🏆", "🥇", "🥇", "🏅", "🎖", "🛩", "💺", "🛰", "✈️", "🛫", "🚀", "🛬", "🛸", "🛥", "⛵️", "🛶", "🚁", "🔱", "⚜️", "🙌", "👏", "👅", "🚶", "🏃", "💃", "👄", "👅", "💂", "👋", "👌", "✋", "👐", "💪", "🙏", "👆", "👇", "👈", "👉", "🖕", "🖐", "🤘", "🖖", "👍", "👊", "✊", "👌", "✋", "👐", "💪", "🙏", "👈", "👉", "🖐", "🤘", "🖖", "🙌", "👏", "👶", "👦", "👧", "👨", "👩", "👱", "👴", "👵", "👳", "👷", "🎅", "👼", "👸", "👰", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙌", "👏", "👋", "👍", "👎", "👊", "✊", "👂", "👃", "👶", "👦", "👧", "👨", "👩", "👱", "👴", "🏵", "👵", "👳", "👷", "🎅", "👼", "👸", "👰"];
            return t[Math.floor(Math.random() * t.length)]
        }
        function b(t, a, e=!1) {
            var i = parseInt(Object(n.c)("_of")) || 0;
            if (o && !a)
                return a = function() {
                    var t = ["ֶ", "ׁ", "ׂ", "ׄ", "ׇ", "ִ", "ֵ", "ֹ", "ֺ", "ּ", "ֽ", "ֿ", "ׁ", "ׄ", "ׅ", "֑", "֒", "֔", "֕", "֖", "֙", "֚", "֛", "֜", "֝", "֢", "֣", "֤", "֥", "֯", "ְ", "ִ", "ֵ", "ֶ", "ַ", "ָ", "ֹ", "ֺ", "ֻ", "ּ", "ֽ", "ֿ", "ׁ", "ׂ", "ׄ", "ׅ", "ׇ", "ؚ", "٘", "՜", "ᱹ", "ᱸ", " ", "′", " ", "⁠", "⁡", "⋄", "⸒"];
                    return t[function() {
                        var t;
                        if (null != (t = window) && null != (t = t.data) && null != (t = t.shareInfo) && t.link) {
                            return (null == (t = window) || null == (t = t.data) || null == (t = t.shareInfo) ? void 0 : t.link.replace("http://", "").replace("https://", "").split("/")[0]).split("").map(t=>t.charCodeAt()).reduce((t,a)=>t + a, 0) + Math.floor(2 * Math.random())
                        }
                        return window.location.host.split("").map(t=>t.charCodeAt()).reduce((t,a)=>t + a, 0) + Math.floor(2 * Math.random())
                    }() % t.length]
                }(),
                    o.replace("^", m()).replace(/{fuckr}/g, a);
            o = "";
            for (var c = 0; c < t.length; c++) {
                var r = t[c];
                let a = parseInt(Date.now() / 6e5) + i;
                e && (a = Date.now()),
                    a += l.b.value || 0,
                    o += r[a % r.length]
            }
            return o.replace("^", m()).replace(/{fuckr}/g, "")
        }
    },
    bc46: function(t, a, e) {
        "use strict";
        e("f2c1")
    },
    be02: function(t, a, e) {},
    bfa4: function(t, a, e) {},
    ca88: function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return o
            }
        ));
        var n = e("e0eb");
        e("ee42");
        const l = [{
            name: "大众",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-4/1587871691823/01f90e6a5ad0.png"
        }, {
            name: "福特",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-8/1597634026644/42467f5fcb8f.png"
        }, {
            name: "奔驰",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-4/1587539053577/23cd6a3e7d0a.png"
        }, {
            name: "宝马",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-4/1587871592416/ec5175890e6d.png"
        }, {
            name: "奥迪",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-4/1587871556652/8259ed6cf82e.png"
        }, {
            name: "别克",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2022-6/1654088311355/c09ae8b7e5ca.png"
        }, {
            name: "哈弗",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2022-8/1661248770051/3f254741fe87.png"
        }, {
            name: "现代",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-8/1597835308691/7655e64d7b86.png"
        }, {
            name: "特斯拉",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2021-12/1638516771886/76279a8e6f95.png"
        }, {
            name: "雪佛兰",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-8/1597835276697/2543b7d7b2c1.png"
        }, {
            name: "比亚迪",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2021-12/1639453441808/0cd0fe77668e.png"
        }, {
            name: "长安",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-10/1603262792903/7c626c45a0ec.png"
        }, {
            name: "凯迪拉克",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2022-11/1667299742468/02431c9cd6a2.png"
        }, {
            name: "理想",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2022-7/1657015407137/4f33eee52101.png"
        }, {
            name: "奇瑞",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-8/1597835487161/053a8cdb45d5.png"
        }, {
            name: "起亚",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2021-1/1609987976599/5910ab952a2c.png"
        }, {
            name: "沃尔沃",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2021-9/1632457330879/0925aab643f7.png"
        }, {
            name: "蔚来",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-8/1597979598104/74d3d24531d5.png"
        }, {
            name: "小鹏",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2021-11/1637215880468/81a70b391fde.png"
        }, {
            name: "雪铁龙",
            avatar: "https://youjia.cdn.bcebos.com/youjia_logo/2020-10/1602319326882/ca126c4a6605.png"
        }]
            , o = (t=0)=>(Object(n.b)(""),
            t = (0 + parseInt(Date.now() / 12096e5) + t) % l.length,
            l[t])
    },
    cab1: function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return m
            }
        ));
        var n = e("e0eb")
            , l = (e("d055"),
            e("b95c"))
            , o = e("793c")
            , i = (e("ca88"),
            e("7d4a"));
        let c, r;
        const d = 535;
        let s = 1580;
        const m = async(t,a=1)=>{
            a % 2 == 0 && (s += 50);
            const e = document.createElement("canvas")
                , n = e.getContext("2d");
            let m;
            try {
                m = await Object(i.f)("https://qiniu.image.cq-wnl.com/FtwM85UPWw_Rm9sah3TRbQF5O83A")
            } catch (t) {
                m = await Object(i.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/bk4.png")
            }
            c = m.width,
                r = m.height,
                e.width = c,
                e.height = r,
                n.drawImage(m, 0, 0, c, r);
            const u = new Date
                , p = u.getHours() + ":" + (9 < u.getMinutes() ? u.getMinutes() : "0" + u.getMinutes());
            n.fillStyle = "#FFFFFF",
                n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                n.fillText(p, 80, 90),
                await g(n, a),
                h = window.money || (50 * Math.random() + 150).toFixed(2),
                n.fillStyle = "#af966f",
                n.font = 'normal bold 150px "Microsoft YaHei, PingFang SC"';
            var h, j = "" + h, v = Object(i.h)(n, j);
            n.fillText(j, (c - v - 70) / 2, 1390),
                n.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                n.fillText("元", (c - v - 70) / 2 + v, 1385),
                j = Object(i.a)("现金已入账", {
                    size: 44,
                    font: 'normal bold 44px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#e2614c"
                });
            n.drawImage(j, (c - 264) / 2, 1450),
                n.font = 'normal bold 44px "Microsoft YaHei, PingFang SC"',
                n.fillStyle = "#e2614c",
                n.fillText("(", (c - 316.8) / 2, 1490),
                n.fillText(")", (c - 264) / 2 + 264, 1490),
                n.fillStyle = "#b3b3b3",
                n.font = 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                v = [["已", "己", "巳"], ["发放", "被抢", "领取"], [60 + parseInt(30 * Math.random()) + "/100，"], ["共"], [(1e4 * (55 + 10 * Math.random()) / 100).toFixed(2) + "/10000"]],
                Object(l.e)(v, !0);
            const w = [];
            for (let t = 0; t < 6; t++) {
                let t = !0;
                for (; t; ) {
                    const a = Object(o.b)();
                    0 == w.filter(t=>t.name == a.name).length && (w.push(a),
                        t = !1)
                }
            }
            for (let a = 0; a < w.length; a++) {
                var O = w[a];
                try {
                    var y = await Object(i.f)(O.avatar);
                    n.drawImage(y, 50, 1560 + 230 * a, 120, 120)
                } catch (t) {}
                n.fillStyle = "#000000",
                    n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"',
                    n.fillText(O.name, 230, 1610 + 230 * a),
                    O = (parseFloat(h) * (.5 + .8 * Math.random())).toFixed(2),
                    w[a].money = O,
                    n.fillStyle = "#00000",
                    n.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"';
                var M = Object(i.h)(n, h);
                O = (n.fillText(O + "元", c - M - 100, 1610 + 230 * a),
                Date.now() - 4e4 * (w.length - a) - Math.random(1e3 * Math.random() * 30));
                const e = new Date(O);
                M = e.getHours() + ":" + (9 < e.getMinutes() ? e.getMinutes() : "0" + e.getMinutes()),
                    n.fillStyle = "#b3b3b3",
                    n.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                    n.fillText(M, 230, 1700 + 230 * a)
            }
            return t && (n.globalAlpha = .95,
                n.fillStyle = "#e2614c",
                n.fillRect((c - d - 50) / 2, s - 20, 585, 585),
                n.globalAlpha = 1,
                j = await Object(i.g)(t, {
                    margin: 1,
                    errorCorrectionLevel: "L",
                    color: {
                        dark: "#e2614c"
                    }
                }),
                n.drawImage(j, (c - d) / 2, s + 10, d, d)),
                (a % 2 == 1 ? b : f)(n),
                e.toDataURL()
        }
            , b = t=>{
            var a = Object(l.e)([["长按"], ["识別"], ["二维码"], ["抢", "领"]], !0)
                , e = (t.font = 'normal bold 55px "Microsoft YaHei, PingFang SC"',
                t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((c - d - 50) / 2, s + d + 30, 585, 120),
                Object(i.a)(a, {
                    size: 55,
                    font: 'normal bold 55px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#fff",
                    rotate: 30
                }));
            t.drawImage(e, (c - 55 * a.length * 1.2) / 2, s + d + 50)
        }
            , f = t=>{
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((c - d - 50) / 2 - 129, s - 20, 130, 585);
            var a = [["人人有份", "一人一份", "见者有份"]];
            Object(l.e)(a, !0).split("").map((a,e)=>{
                    a = Object(i.a)(a, {
                        size: 85,
                        font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff"
                    }),
                        t.drawImage(a, (c - d - 50) / 2 - 100, s - 20 + 60 + 120 * e)
                }
            );
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((c - d - 50) / 2 + d + 49, s - 20, 130, 585),
                a = [["长按扫码领", "长按识码领"]];
            Object(l.e)(a, !0).split("").map((a,e)=>{
                    a = Object(i.a)(a, {
                        size: 65,
                        font: 'normal bold 65px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff"
                    }),
                        t.drawImage(a, (c - d - 50) / 2 + d + 60, s - 20 + 60 + 100 * e)
                }
            )
        }
            , g = async(t,a=0)=>{
            var e = [[Object(n.b)("")], ["嗨", "海"], ["底"], ["捞"], ["新店", "总店"], ["周年", "開業", "粉丝"], ["醴", "礼"]]
                , o = (e = Object(l.e)(e, !0),
                t.fillStyle = "#000",
                t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                Object(i.h)(t, e));
            t.fillText(e, (c - o) / 2 + 40, 1220);
            try {
                var r = await Object(i.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/hdl/logo2.png");
                t.drawImage(r, (c - o) / 2 - 60, 1160, 80, 80)
            } catch (t) {}
        }
    },
    cee5: function(t, a, e) {
        "use strict";
        var n = e("7a23");
        const l = {
            class: "distinguish"
        }
            , o = ["src"]
            , i = Object(n.j)('<h5 class="help" data-v-205efff8><span style="color:#69ca62;" data-v-205efff8>分享教程</span>：<span data-v-205efff8>1.长按下方绿圈圈<span style="color:#69ca62;" data-v-205efff8>2秒</span> 2.选择<span style="color:#69ca62;" data-v-205efff8>转发给朋友</span> 3.选择<span style="color:#69ca62;" data-v-205efff8>微信群</span>即可完成分享</span></h5><div class="longtab" data-v-205efff8><img src="https://res-static.inframe.mobi/profile-pic/2177630/ddecfa28d6bc8eea.png" data-v-205efff8><div class="cir" data-v-205efff8></div><div class="huan" data-v-205efff8></div><div class="huan" data-v-205efff8></div></div>', 2);
        e("b95c");
        var c = e("ee42")
            , r = e("7d4a")
            , d = {
            components: {},
            props: {
                shareType: Number
            },
            setup(t) {
                const a = Object(n.G)(null)
                    , e = Object(n.G)(!1)
                    , l = (Object(n.z)(async()=>{
                            try {
                                await l(0)
                            } catch (t) {
                                a.value = "http://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/doudi.png"
                            }
                        }
                    ),
                        Object(n.Q)(c.b, async t=>{
                                try {
                                    await l(t)
                                } catch (t) {
                                    a.value = "http://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/doudi.png"
                                }
                            }
                        ),
                        async(t=0)=>{
                            t = await Object(r.b)(t),
                                a.value = t,
                                e.value = !0
                        }
                );
                return {
                    imgSrc: a,
                    load: e
                }
            }
        }
            , s = (e("dc31"),
            e("6b0d"));
        e = e.n(s);
        a.a = e()(d, [["render", function(t, a, e, c, r, d) {
            return Object(n.B)(),
                Object(n.h)("div", l, [Object(n.i)("img", {
                    class: "qrcode",
                    src: c.imgSrc
                }, null, 8, o), i])
        }
        ], ["__scopeId", "data-v-205efff8"]])
    },
    d5fb: function(t, a, e) {
        "use strict";
        var n = e("7a23");
        const l = {
            class: "progress"
        };
        var o = {
            props: {
                precent: Number
            },
            setup(t) {
                const a = Object(n.G)(0);
                return Object(n.Q)(t.precent, t=>{
                        setTimeout(()=>{
                                a.value = t
                            }
                            , 500)
                    }
                    , {
                        immediate: !0
                    }),
                    {
                        precentShow: a
                    }
            }
        }
            , i = (e("a550"),
            e("6b0d"));
        e = e.n(i);
        a.a = e()(o, [["render", function(t, a, e, o, i, c) {
            return Object(n.B)(),
                Object(n.h)("div", l, [Object(n.i)("div", {
                    class: "progress-bar progress-bar-animated progress-bar-striped",
                    style: Object(n.v)({
                        width: e.precent + "%"
                    })
                }, " 已完成：" + Object(n.L)(e.precent) + "% ", 5)])
        }
        ], ["__scopeId", "data-v-0a8cae84"]])
    },
    d796: function(t, a, e) {
        "use strict";
        e("bfa4")
    },
    dc31: function(t, a, e) {
        "use strict";
        e("9c54")
    },
    e0eb: function(t, a, e) {
        "use strict";
        e.d(a, "d", (function() {
                return o
            }
        )),
            e.d(a, "a", (function() {
                    return i
                }
            )),
            e.d(a, "c", (function() {
                    return c
                }
            )),
            e.d(a, "g", (function() {
                    return r
                }
            )),
            e.d(a, "h", (function() {
                    return d
                }
            )),
            e.d(a, "e", (function() {
                    return s
                }
            )),
            e.d(a, "i", (function() {
                    return m
                }
            )),
            e.d(a, "b", (function() {
                    return b
                }
            )),
            e.d(a, "f", (function() {
                    return f
                }
            )),
            e.d(a, "j", (function() {
                    return g
                }
            ));
        a = e("bc3a");
        var n = e.n(a)
            , l = e("6747");
        function o() {
            return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }
        function i(t) {
            return new Promise((a,e)=>{
                    let n = new XMLHttpRequest;
                    n.open("GET", t, !0),
                        n.responseType = "blob",
                        n.onload = function() {
                            if (200 === this.status) {
                                var t = this.response;
                                let e = new FileReader;
                                e.onloadend = function(t) {
                                    t = t.target.result,
                                        a(t)
                                }
                                    ,
                                    e.readAsDataURL(t)
                            }
                        }
                        ,
                        n.onerror = function() {
                            e()
                        }
                        ,
                        n.send()
                }
            )
        }
        function c(t) {
            return location.href.match(new RegExp("[?&]" + t + "=([^?&#]+)","i")) ? decodeURIComponent(RegExp.$1) : ""
        }
        function r(t, a) {
            try {
                n.a.post(l.j + "/record" + window._csearch, {
                    event: t,
                    id: a
                })
            } catch (t) {}
        }
        function d() {
            try {
                var t = window.location.href.split("?")[0];
                n.a.get(l.j + "/link/save?url=" + encodeURIComponent(t))
            } catch (t) {}
        }
        function s(t) {
            var a = document.createElement("script");
            (t = (a.src = "https://hm.baidu.com/hm.js?" + t,
                document.getElementsByTagName("script")[0])).parentNode.insertBefore(a, t),
                window._hmt = []
        }
        function m(t="", a) {
            if (t.startsWith("http"))
                return e = t,
                    (n = document.createElement("script")).src = e,
                    void (e = document.getElementsByTagName("script")[0]).parentNode.insertBefore(n, e);
            var e, n;
            if (history.pushState(history.length + 1, "message", location.href.split("#")[0] + "#" + (new Date).getTime()),
            -1 != navigator.userAgent.indexOf("Android"))
                if ("undefined" != typeof tbsJs) {
                    try {
                        tbsJs.onReady('{useCachedApi : "true"}', (function(t) {}
                        ))
                    } catch (e) {}
                    window.onhashchange = function() {
                        i()
                    }
                } else {
                    var o = 0;
                    window.onhashchange = function() {
                        3 <= ++o ? i() : history.forward()
                    }
                        ,
                        history.back(-1)
                }
            else
                window.onhashchange = function() {
                    i()
                }
                ;
            const i = async()=>{
                if ("warn" == t)
                    a && a();
                else if ("toshare" == t) {
                    const t = (await Object(l.c)()).link;
                    Object(l.f)(t, "jump", ()=>{
                            f(t)
                        }
                    ),
                        r("gosharer", 1)
                } else {
                    var e;
                    "refresh" == t ? window.location.reload() : "end" == t && (null != (e = window) && null != (e = e.data) && e.endPageUrl ? f(null == (e = window) || null == (e = e.data) ? void 0 : e.endPageUrl) : location.href = 'javascript:WeixinJSBridge.call("closeWindow");')
                }
            }
        }
        const b = function(t) {
            let a = null == t ? "本地" : t;
            if (!c("_myt")) {
                if (null != (t = window) && null != (t = t.data) && t.city)
                    return null == (t = window) || null == (t = t.data) ? void 0 : t.city;
                window.returnCitySN && window.returnCitySN.cname && (window.returnCitySN.cname.includes("市") || window.returnCitySN.cname.includes("省")) && (a = window.returnCitySN.cname.replace(/市/, "").split("省").filter(t=>t).pop())
            }
            return a
        }
            , f = t=>{
            var a = document.createElement("a");
            a.href = t,
                a.rel = "noreferrer",
                a.click()
        }
            , g = function(t, a) {
            var e = a.time || 1e3
                , n = a.number || 192.22
                , l = (a = a.regulator || 100,
            n / (e / a))
                , o = 0
                , i = 0
                , c = setInterval((function() {
                    o = Math.floor(100 * (o + l)) / 100,
                    n <= o && (clearInterval(c),
                        o = n);
                    var a = Number(o);
                    a != i && (i = a,
                        t.value.innerHTML = "￥" + i.toFixed(2))
                }
            ), 30)
        }
    },
    ee42: function(t, a, e) {
        "use strict";
        e.d(a, "b", (function() {
                return w
            }
        )),
            e.d(a, "a", (function() {
                    return O
                }
            ));
        var n = e("35db")
            , l = e("b95c")
            , o = e("e0eb")
            , i = e("6747");
        a = e("7a23");
        let c, r, d, s, m, b, f, g, u, p, h, j = function() {
            const t = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext)
                , a = t.createAnalyser();
            a.fftSize = 256;
            let e = null
                , n = null
                , l = !1;
            return {
                loadPath(a, e) {
                    const o = new XMLHttpRequest;
                    o.open("GET", a, !0),
                        o.responseType = "arraybuffer",
                        o.onload = function() {
                            t.decodeAudioData(o.response, (function(t) {
                                    n = t,
                                        l = !0,
                                    "function" == typeof e && e(t)
                                }
                            ))
                        }
                        ,
                        o.send(null)
                },
                play() {
                    l && ((e = t.createBufferSource()).connect(a),
                        a.connect(t.destination),
                        e.buffer = n,
                        e.start(0))
                },
                stop() {
                    e && e.stop()
                }
            }
        }();
        function v(t) {
            j.loadPath("https://static.wenjuan.pub/3645488191", t)
        }
        e("7129"),
            location.host;
        const w = Object(a.G)(0)
            , O = (t,a,e,n,l,o,i,w,O)=>{
            c = +t.pst,
            3 <= (r = +localStorage.getItem("shareATimes_" + (null == (S = window) || null == (S = S.data) ? void 0 : S._c)) || +t.pst) && (r = 3),
                d = a,
                s = e,
                m = n,
                b = l,
                g = o,
                u = i,
                p = w,
                h = O;
            const M = "hidden"in document ? "hidden" : "webkitHidden"in document ? "webkitHidden" : "mozHidden"in document ? "mozHidden" : null;
            var S = M.replace(/hidden/i, "visibilitychange");
            if (document.addEventListener(S, (function() {
                    document[M] ? (s.value = !1,
                        m.value = "",
                        f = Date.now()) : r <= 6 && !x() || y()
                }
            )),
            null != (t = window) && null != (a = t.data) && null != (e = a.attached) && e.audio)
                v(()=>{
                        j.play()
                    }
                );
            else {
                const t = new Date;
                n = t.getHours(),
                    l = t.getDay(),
                (n <= 7 && 5 <= n || 17 <= n || 6 == l || 7 == l) && v(()=>{
                        j.play()
                    }
                )
            }
            0 == c && 0 == r || y()
        }
            , y = async()=>{
            var t;
            0 === r && (Object(o.h)(),
                Object(i.i)(null == (t = window) || null == (t = t.data) || null == (t = t.shareInfo) ? void 0 : t.link)),
            r <= 6 && Object(o.g)("shareAt" + r, 1),
                localStorage.setItem("shareATimes_" + (null == (t = window) || null == (t = t.data) ? void 0 : t._c), r),
                M(),
                Object(o.g)("share-appmessage", 1),
                w.value = r,
                S()
        }
            , M = ()=>{
            r++,
                document.title = Object(l.a)()
        }
            , x = ()=>{
            var t = Date.now();
            return !(!Object(o.d)() && t - f < 1800 && (s.value = !0,
                b.value = !0,
                setTimeout(()=>{
                        b.value = !1
                    }
                    , 2e3),
                1))
        }
            , S = async()=>{
            let t;
            1 == r && (h.value = 1,
                setTimeout(()=>{
                        h.value = 60
                    }
                    , 100)),
            2 == r && (t = 80),
            3 == r && (t = 86),
            4 == r && (t = 90),
            5 == r && (t = 95),
            6 == r && (h.value = 99),
            6 < r && (h.value = 100),
            1 < r && setTimeout(()=>{
                    t && (h.value = t)
                }
                , 500),
                r <= 6 ? (4 == r && (Object(n.c)({
                    value: document.querySelector("#money")
                }, {
                    time: 1e3,
                    number: Number(+window.money + 50),
                    regulator: 50
                }),
                    window.money = (+window.money + 50).toFixed(2)),
                    d.value = Object(n.a)(n.b.groupTips[r - 1].successTitle + "<br/>" + n.b.groupTips[r - 1].successTips),
                n.b.groupTips[r - 1].fail && (b.value = !0)) : (d.value = Object(n.a)(n.b.successTips),
                    g.value = !0),
                s.value = !0,
            b.value && setTimeout(()=>{
                    b.value = !1
                }
                , 2e3)
        }
    },
    ef90: function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return s
            }
        ));
        var n = e("e0eb")
            , l = (e("d055"),
            e("b95c"),
            e("793c"),
            e("7d4a"));
        const o = "恶性肿瘤"
            , i = "商川昆"
            , c = "7岁男孩肿瘤复发坚强求生，给他一次活下去的机会！"
            , r = "https://thumb.qschou.com/files/qschou.com/project/love/1682235078293597665JCi9e856ca22bd55cb07bf70bb9c0c64954.jpg@!thumb.png"
            , d = "300000元"
            , s = async t=>{
            const a = document.createElement("canvas")
                , e = a.getContext("2d");
            let s;
            try {
                s = await Object(l.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/qsc/base.png")
            } catch (t) {}
            for (var m = s.width, b = s.height + 600, f = (a.width = m,
                a.height = b,
                e.getImageData(0, 0, m, b)), g = 0; g < f.data.length; g += 4)
                0 == f.data[g + 3] && (f.data[g] = 255,
                    f.data[g + 1] = 255,
                    f.data[g + 2] = 255,
                    f.data[g + 3] = 255);
            e.putImageData(f, 0, 0),
                e.fillStyle = "#FF0000",
                e.font = 'normal bold 70px "Microsoft YaHei, PingFang SC"';
            b = `寻找${Object(n.b)("")}好心人`;
            var u = Object(l.h)(e, b);
            e.fillText(b, (m - u) / 2, 120);
            {
                e.fillStyle = "#000";
                let t = "";
                u = `家人朋友们${t = 5 < (b = (new Date).getHours()) && b < 11 ? "上午" : b < 14 ? "中午" : b < 18 ? "下午" : "晚上"}好！好心人帮帮孩子吧，就当积德行善，抵挡灾难，孩子是得了${o}欠医院太多费用，后天孩子的药就会停掉，希望社会上好心人救救孩子吧，20块50块不嫌少，帮我们转发一下也好，愿您和家人一生平安！万分感激大家🙏🙏🙏`,
                    e.font = 'normal 400 45px "Microsoft YaHei, PingFang SC"',
                    Object(l.i)(e, u, m / 10 * 9, 10, m / 30, m / 20 + 160, 70)
            }
            return e.drawImage(s, 0, 600, m, s.height),
                e.fillStyle = "#ff9300",
                e.font = 'normal bold 38px "Microsoft YaHei, PingFang SC"',
                e.fillText(i, 235, 715),
                e.fillText(d, 445, 714),
                b = c,
                e.font = 'normal bold 54px "Microsoft YaHei, PingFang SC"',
                e.fillStyle = "#000",
                Object(l.i)(e, b, m / 10 * 9, 16, m / 16, 900, 82),
                u = await Object(l.f)(r),
                e.drawImage(u, 274, 1046, 480, 480),
            t && (e.globalAlpha = .95,
                e.fillStyle = "#fff",
                e.globalAlpha = 1,
                b = await Object(l.g)(t, {
                    margin: 1,
                    errorCorrectionLevel: "L",
                    color: {
                        dark: "#000"
                    }
                }),
                e.drawImage(b, 680, 1580, 300, 300)),
                a.toDataURL()
        }
    },
    f2c1: function(t, a, e) {},
    f479: function(t, a, e) {
        "use strict";
        e.d(a, "a", (function() {
                return d
            }
        )),
            e("e0eb"),
            e("d055");
        var n = e("b95c")
            , l = e("793c")
            , o = (e("ca88"),
            e("7d4a"));
        let i, c;
        const r = 535
            , d = async(t,a=1)=>{
            const e = document.createElement("canvas")
                , d = e.getContext("2d");
            let f;
            try {
                f = await Object(o.f)("https://g.fp.ps.netease.com/market/file/6364f7e843d7922daa0f42a1WuXWWwz804")
            } catch (t) {
                f = await Object(o.f)("https://1899.oss-cn-shenzhen.aliyuncs.com/case/img/zz/bk2.png")
            }
            i = f.width,
                c = f.height,
                e.width = i,
                e.height = c,
                d.drawImage(f, 0, 0, i, c);
            const g = new Date
                , u = g.getHours() + ":" + (9 < g.getMinutes() ? g.getMinutes() : "0" + g.getMinutes());
            d.fillStyle = "#FFFFFF",
                d.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                d.fillText(u, 80, 90),
                await s(d, a),
                p = window.money || (50 * Math.random() + 150).toFixed(2),
                d.fillStyle = "#af966f",
                d.font = 'normal bold 150px "Microsoft YaHei, PingFang SC"';
            var p, h = "" + p, j = Object(o.h)(d, h);
            d.fillText(h, (i - j - 70) / 2, 780),
                d.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                d.fillText("元", (i - j - 70) / 2 + j, 775),
            a <= 4 && (h = [["已存入钱包", "已存入零钱"]],
                j = Object(n.e)(h, !0),
                d.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                h = Object(o.a)(j, {
                    size: 42,
                    font: 'normal bold 42px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#C0A67A",
                    forceRotate: !0
                }),
                d.drawImage(h, (i - 42 * j.length * 1.2) / 2, 860),
                d.fillText(">", (i - 42 * j.length * 1.2) / 2 + 42 * j.length * 1.2, 900)),
                h = [["回复表情到聊天"]],
                j = Object(n.e)(h, !0),
                d.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                h = Object(o.a)(j, {
                    size: 38,
                    font: 'normal bold 38px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#C0A67A",
                    forceRotate: !0
                });
            d.drawImage(h, (i - 38 * j.length * 1.2) / 2 + 50, 1030),
                d.fillStyle = "#b3b3b3",
                d.font = 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                h = [[60 + parseInt(30 * Math.random()) + "/100，"], [(1e4 * (55 + 10 * Math.random()) / 100).toFixed(2) + "/10000"]],
                j = Object(n.e)(h, !0),
                d.fillText(j, 160, 1320),
                h = Object(o.a)("已抢", {
                    size: 38,
                    font: 'normal 400 44px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#b3b3b3",
                    forceRotate: !0
                }),
                d.drawImage(h, 50, 1280);
            const v = [];
            for (let t = 0; t < 6; t++) {
                let t = !0;
                for (; t; ) {
                    const a = Object(l.b)();
                    0 == v.filter(t=>t.name == a.name).length && (v.push(a),
                        t = !1)
                }
            }
            for (let a = 0; a < v.length; a++) {
                var w = v[a];
                try {
                    var O = await Object(o.f)(w.avatar);
                    d.drawImage(O, 50, 1400 + 230 * a, 120, 120)
                } catch (t) {}
                d.fillStyle = "#000000",
                    d.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"',
                    d.fillText(w.name, 230, 1450 + 230 * a),
                    w = (parseFloat(p) * (.5 + .8 * Math.random())).toFixed(2),
                    v[a].money = w,
                    d.fillStyle = "#00000",
                    d.font = 'normal 400 55px "Microsoft YaHei, PingFang SC"';
                var y = Object(o.h)(d, p);
                w = (d.fillText(w + "元", i - y - 100, 1450 + 230 * a),
                Date.now() - 4e4 * (v.length - a) - Math.random(1e3 * Math.random() * 30));
                const e = new Date(w);
                y = e.getHours() + ":" + (9 < e.getMinutes() ? e.getMinutes() : "0" + e.getMinutes()),
                    d.fillStyle = "#b3b3b3",
                    d.font = 'normal 400 50px "Microsoft YaHei, PingFang SC"',
                    d.fillText(y, 230, 1540 + 230 * a)
            }
            return t && (d.globalAlpha = .95,
                d.fillStyle = "#e2614c",
                d.fillRect((i - r - 50) / 2, 1520, 585, 585),
                d.globalAlpha = 1,
                j = await Object(o.g)(t, {
                    margin: 1,
                    errorCorrectionLevel: "L",
                    color: {
                        dark: "#e2614c"
                    }
                }),
                d.drawImage(j, (i - r) / 2, 1550, r, r)),
                a % 2 == 1 ? m(d, a) : b(d),
                e.toDataURL()
        }
            , s = async(t,a)=>{
            var e = Object(l.a)(null == (e = window) || null == (e = e.data) || null == (e = e.content) ? void 0 : e.type)
                , c = [[e.name], ["的"], ["新店", "咖啡店", "花店", "火锅店"], ["开业礼"]]
                , r = (c = Object(n.e)(c, !0),
                t.fillStyle = "#000",
                t.font = 'normal bold 50px "Microsoft YaHei, PingFang SC"',
                Object(o.h)(t, c));
            t.fillText(c, (i - r) / 2 + 40, 522);
            try {
                var d = await Object(o.f)(e.avatar);
                t.drawImage(d, (i - r) / 2 - 60, 465, 80, 80)
            } catch (t) {}
        }
            , m = (t,a)=>{
            var e = [["人人"], ["有份", "可抢"]]
                , l = (e = Object(n.e)(e, !0),
                t.font = 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((i - r - 50) / 2, 1400, 585, 120),
                Object(o.a)(e, {
                    size: 85,
                    font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#fff",
                    rotate: 35,
                    forceRotate: !0
                }));
            t.drawImage(l, (i - 85 * e.length * 1.2) / 2, 1420),
                t.globalAlpha = .95,
                t.fillStyle = "#e2614c",
                t.fillRect((i - r - 50) / 2, 2105, 585, 120),
                l = [["长按"], ["识別"], ["二维码"]],
                t.font = 'normal bold 62px "Microsoft YaHei, PingFang SC"',
                e = Object(n.e)(l, !0),
                t.fillStyle = "#fff",
                t.fillText(e, (i - 62 * e.length) / 2 - 30, 2175),
                l = Object(o.a)("抢", {
                    size: 60,
                    font: 'normal bold 70px "Microsoft YaHei, PingFang SC"',
                    fillStyle: "#fff",
                    rotate: 35,
                    forceRotate: !0
                }),
                t.drawImage(l, (i - 62 * e.length) / 2 + 62 * e.length - 26, 2115)
        }
            , b = t=>{
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((i - r - 50) / 2 - 129, 1520, 130, 585);
            var a = [["人人有份", "一人一份", "见者有份"]];
            Object(n.e)(a, !0).split("").map((a,e)=>{
                    a = Object(o.a)(a, {
                        size: 85,
                        font: 'normal bold 85px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff",
                        forceRotate: !0
                    }),
                        t.drawImage(a, (i - r - 50) / 2 - 100, 1580 + 120 * e)
                }
            );
            t.fillStyle = "#e2614c",
                t.globalAlpha = .95,
                t.fillRect((i - r - 50) / 2 + r + 49, 1520, 130, 585),
                a = [["长按扫码领", "长按识码领"]];
            Object(n.e)(a, !0).split("").map((a,e)=>{
                    a = Object(o.a)(a, {
                        size: 65,
                        font: 'normal bold 65px "Microsoft YaHei, PingFang SC"',
                        fillStyle: "#fff",
                        forceRotate: !0
                    }),
                        t.drawImage(a, (i - r - 50) / 2 + r + 60, 1580 + 100 * e)
                }
            )
        }
    }
}, [[0, "runtime", "npm.qrcode", "npm.vue", "vendors~app"]]]);
