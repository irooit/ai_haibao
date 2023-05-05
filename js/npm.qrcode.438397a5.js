(window.webpackJsonp = window.webpackJsonp || []).push([["npm.qrcode"], {
    "0196": function(t, e, n) {
        const r = n("58b4")
            , o = n("bbf0");
        function i(t) {
            this.mode = o.BYTE,
            "string" == typeof t && (t = r(t)),
                this.data = new Uint8Array(t)
        }
        i.getBitsLength = function(t) {
            return 8 * t
        }
            ,
            i.prototype.getLength = function() {
                return this.data.length
            }
            ,
            i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }
            ,
            i.prototype.write = function(t) {
                for (let e = 0, n = this.data.length; e < n; e++)
                    t.put(this.data[e], 8)
            }
            ,
            t.exports = i
    },
    "0425": function(t, e) {
        var n = "[0-9]+";
        let r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
        var o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
        e.KANJI = new RegExp(r,"g"),
            e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),
            e.BYTE = new RegExp(o,"g"),
            e.NUMERIC = new RegExp(n,"g"),
            e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+","g");
        const i = new RegExp("^" + r + "$")
            , a = new RegExp("^[0-9]+$")
            , s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        e.testKanji = function(t) {
            return i.test(t)
        }
            ,
            e.testNumeric = function(t) {
                return a.test(t)
            }
            ,
            e.testAlphanumeric = function(t) {
                return s.test(t)
            }
    },
    2732: function(t, e, n) {
        const r = n("699e");
        e.mul = function(t, e) {
            const n = new Uint8Array(t.length + e.length - 1);
            for (let o = 0; o < t.length; o++)
                for (let i = 0; i < e.length; i++)
                    n[o + i] ^= r.mul(t[o], e[i]);
            return n
        }
            ,
            e.mod = function(t, e) {
                let n = new Uint8Array(t);
                for (; 0 <= n.length - e.length; ) {
                    var o = n[0];
                    for (let t = 0; t < e.length; t++)
                        n[t] ^= r.mul(e[t], o);
                    let t = 0;
                    for (; t < n.length && 0 === n[t]; )
                        t++;
                    n = n.slice(t)
                }
                return n
            }
            ,
            e.generateECPolynomial = function(t) {
                let n = new Uint8Array([1]);
                for (let o = 0; o < t; o++)
                    n = e.mul(n, new Uint8Array([1, r.exp(o)]));
                return n
            }
    },
    "27a3": function(t, e) {
        e.isValid = function(t) {
            return !isNaN(t) && 1 <= t && t <= 40
        }
    },
    "2f3a": function(t, e, n) {
        const r = n("bbf0")
            , o = n("7bf0");
        function i(t) {
            this.mode = r.KANJI,
                this.data = t
        }
        i.getBitsLength = function(t) {
            return 13 * t
        }
            ,
            i.prototype.getLength = function() {
                return this.data.length
            }
            ,
            i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }
            ,
            i.prototype.write = function(t) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let n = o.toSJIS(this.data[e]);
                    if (33088 <= n && n <= 40956)
                        n -= 33088;
                    else {
                        if (!(57408 <= n && n <= 60351))
                            throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                        n -= 49472
                    }
                    n = 192 * (n >>> 8 & 255) + (255 & n),
                        t.put(n, 13)
                }
            }
            ,
            t.exports = i
    },
    "34fc": function(t, e, n) {
        const r = n("7a43")
            , o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
            , i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        e.getBlocksCount = function(t, e) {
            switch (e) {
                case r.L:
                    return o[4 * (t - 1) + 0];
                case r.M:
                    return o[4 * (t - 1) + 1];
                case r.Q:
                    return o[4 * (t - 1) + 2];
                case r.H:
                    return o[4 * (t - 1) + 3];
                default:
                    return
            }
        }
            ,
            e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return i[4 * (t - 1) + 0];
                    case r.M:
                        return i[4 * (t - 1) + 1];
                    case r.Q:
                        return i[4 * (t - 1) + 2];
                    case r.H:
                        return i[4 * (t - 1) + 3];
                    default:
                        return
                }
            }
    },
    4006: function(t, e, n) {
        const r = n("45be");
        function o(t, e) {
            const n = t.a / 255;
            return t = e + '="' + t.hex + '"',
                n < 1 ? t + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : t
        }
        function i(t, e, n) {
            let r = t + e;
            return void 0 !== n && (r += " " + n),
                r
        }
        e.render = function(t, e, n) {
            e = r.getOptions(e);
            var a = t.modules.size
                , s = (t = t.modules.data,
            a + 2 * e.margin)
                , u = e.color.light.a ? "<path " + o(e.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "";
            t = "<path " + o(e.color.dark, "stroke") + ' d="' + function(t, e, n) {
                let r = ""
                    , o = 0
                    , a = !1
                    , s = 0;
                for (let l = 0; l < t.length; l++) {
                    var u = Math.floor(l % e)
                        , c = Math.floor(l / e);
                    u || a || (a = !0),
                        t[l] ? (s++,
                        0 < l && 0 < u && t[l - 1] || (r += a ? i("M", u + n, .5 + c + n) : i("m", o, 0),
                            o = 0,
                            a = !1),
                        u + 1 < e && t[l + 1] || (r += i("h", s),
                            s = 0)) : o++
                }
                return r
            }(t, a, e.margin) + '"/>',
                a = '<svg xmlns="http://www.w3.org/2000/svg" ' + (e.width ? 'width="' + e.width + '" height="' + e.width + '" ' : "") + 'viewBox="0 0 ' + s + " " + s + '" shape-rendering="crispEdges">' + u + t + "</svg>\n";
            return "function" == typeof n && n(null, a),
                a
        }
    },
    4146: function(t, e, n) {
        const r = n("45be");
        e.render = function(t, e, n) {
            let o = n
                , i = e;
            void 0 !== o || e && e.getContext || (o = e,
                e = void 0),
            e || (i = function() {
                try {
                    return document.createElement("canvas")
                } catch (t) {
                    throw new Error("You need to specify a canvas element")
                }
            }()),
                o = r.getOptions(o),
                n = r.getImageWidth(t.modules.size, o);
            const a = i.getContext("2d");
            var s;
            e = a.createImageData(n, n);
            return r.qrToImageData(e.data, t, o),
                s = i,
                n = n,
                (t = a).clearRect(0, 0, s.width, s.height),
            s.style || (s.style = {}),
                s.height = n,
                s.width = n,
                s.style.height = n + "px",
                s.style.width = n + "px",
                a.putImageData(e, 0, 0),
                i
        }
            ,
            e.renderToDataURL = function(t, n, r) {
                let o = r;
                void 0 !== o || n && n.getContext || (o = n,
                    n = void 0),
                    o = o || {};
                const i = e.render(t, n, o);
                return r = o.type || "image/png",
                    t = o.rendererOpts || {},
                    i.toDataURL(r, t.quality)
            }
    },
    "45be": function(t, e) {
        function n(t) {
            if ("string" != typeof (t = "number" == typeof t ? t.toString() : t))
                throw new Error("Color should be defined as hex string");
            let e = t.slice().replace("#", "").split("");
            if (e.length < 3 || 5 === e.length || 8 < e.length)
                throw new Error("Invalid hex color: " + t);
            return 6 === (e = 3 !== e.length && 4 !== e.length ? e : Array.prototype.concat.apply([], e.map((function(t) {
                    return [t, t]
                }
            )))).length && e.push("F", "F"),
                {
                    r: (t = parseInt(e.join(""), 16)) >> 24 & 255,
                    g: t >> 16 & 255,
                    b: t >> 8 & 255,
                    a: 255 & t,
                    hex: "#" + e.slice(0, 6).join("")
                }
        }
        e.getOptions = function(t) {
            (t = t || {}).color || (t.color = {});
            var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin
                , r = t.width && 21 <= t.width ? t.width : void 0
                , o = t.scale || 4;
            return {
                width: r,
                scale: r ? 4 : o,
                margin: e,
                color: {
                    dark: n(t.color.dark || "#000000ff"),
                    light: n(t.color.light || "#ffffffff")
                },
                type: t.type,
                rendererOpts: t.rendererOpts || {}
            }
        }
            ,
            e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }
            ,
            e.getImageWidth = function(t, n) {
                var r = e.getScale(t, n);
                return Math.floor((t + 2 * n.margin) * r)
            }
            ,
            e.qrToImageData = function(t, n, r) {
                var o = n.modules.size
                    , i = n.modules.data
                    , a = e.getScale(o, r)
                    , s = Math.floor((o + 2 * r.margin) * a)
                    , u = r.margin * a
                    , c = [r.color.light, r.color.dark];
                for (let e = 0; e < s; e++)
                    for (let n = 0; n < s; n++) {
                        var l = 4 * (e * s + n);
                        let f = r.color.light;
                        e >= u && n >= u && e < s - u && n < s - u && (f = c[i[Math.floor((e - u) / a) * o + Math.floor((n - u) / a)] ? 1 : 0]),
                            t[l++] = f.r,
                            t[l++] = f.g,
                            t[l++] = f.b,
                            t[l] = f.a
                    }
            }
    },
    "577e": function(t, e) {
        function n(t) {
            if (!t || t < 1)
                throw new Error("BitMatrix size must be defined and greater than 0");
            this.size = t,
                this.data = new Uint8Array(t * t),
                this.reservedBit = new Uint8Array(t * t)
        }
        n.prototype.set = function(t, e, n, r) {
            t = t * this.size + e,
                this.data[t] = n,
            r && (this.reservedBit[t] = !0)
        }
            ,
            n.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }
            ,
            n.prototype.xor = function(t, e, n) {
                this.data[t * this.size + e] ^= n
            }
            ,
            n.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }
            ,
            t.exports = n
    },
    "67dd": function(t, e) {
        t.exports = function() {
            return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
        }
    },
    "699e": function(t, e) {
        const n = new Uint8Array(512)
            , r = new Uint8Array(256);
        {
            let t = 1;
            for (let e = 0; e < 255; e++)
                n[e] = t,
                    r[t] = e,
                256 & (t <<= 1) && (t ^= 285);
            for (let t = 255; t < 512; t++)
                n[t] = n[t - 255]
        }
        e.log = function(t) {
            if (t < 1)
                throw new Error("log(" + t + ")");
            return r[t]
        }
            ,
            e.exp = function(t) {
                return n[t]
            }
            ,
            e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : n[r[t] + r[e]]
            }
    },
    7903: function(t, e) {
        e.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        const n = 3
            , r = 3
            , o = 40
            , i = 10;
        e.isValid = function(t) {
            return null != t && "" !== t && !isNaN(t) && 0 <= t && t <= 7
        }
            ,
            e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }
            ,
            e.getPenaltyN1 = function(t) {
                var e = t.size;
                let r = 0
                    , o = 0
                    , i = 0
                    , a = null
                    , s = null;
                for (let u = 0; u < e; u++) {
                    o = i = 0,
                        a = s = null;
                    for (let c = 0; c < e; c++) {
                        let e = t.get(u, c);
                        e === a ? o++ : (5 <= o && (r += n + (o - 5)),
                            a = e,
                            o = 1),
                            (e = t.get(c, u)) === s ? i++ : (5 <= i && (r += n + (i - 5)),
                                s = e,
                                i = 1)
                    }
                    5 <= o && (r += n + (o - 5)),
                    5 <= i && (r += n + (i - 5))
                }
                return r
            }
            ,
            e.getPenaltyN2 = function(t) {
                var e = t.size;
                let n = 0;
                for (let r = 0; r < e - 1; r++)
                    for (let i = 0; i < e - 1; i++) {
                        var o = t.get(r, i) + t.get(r, i + 1) + t.get(r + 1, i) + t.get(r + 1, i + 1);
                        4 !== o && 0 !== o || n++
                    }
                return n * r
            }
            ,
            e.getPenaltyN3 = function(t) {
                var e = t.size;
                let n = 0
                    , r = 0
                    , i = 0;
                for (let o = 0; o < e; o++)
                    for (let a = r = i = 0; a < e; a++)
                        r = r << 1 & 2047 | t.get(o, a),
                        10 <= a && (1488 === r || 93 === r) && n++,
                            i = i << 1 & 2047 | t.get(a, o),
                        10 <= a && (1488 === i || 93 === i) && n++;
                return n * o
            }
            ,
            e.getPenaltyN4 = function(t) {
                let e = 0;
                var n = t.data.length;
                for (let r = 0; r < n; r++)
                    e += t.data[r];
                return Math.abs(Math.ceil(100 * e / n / 5) - 10) * i
            }
            ,
            e.applyMask = function(t, n) {
                var r = n.size;
                for (let o = 0; o < r; o++)
                    for (let i = 0; i < r; i++)
                        n.isReserved(i, o) || n.xor(i, o, function(t, n, r) {
                            switch (t) {
                                case e.Patterns.PATTERN000:
                                    return (n + r) % 2 == 0;
                                case e.Patterns.PATTERN001:
                                    return n % 2 == 0;
                                case e.Patterns.PATTERN010:
                                    return r % 3 == 0;
                                case e.Patterns.PATTERN011:
                                    return (n + r) % 3 == 0;
                                case e.Patterns.PATTERN100:
                                    return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                                case e.Patterns.PATTERN101:
                                    return n * r % 2 + n * r % 3 == 0;
                                case e.Patterns.PATTERN110:
                                    return (n * r % 2 + n * r % 3) % 2 == 0;
                                case e.Patterns.PATTERN111:
                                    return (n * r % 3 + (n + r) % 2) % 2 == 0;
                                default:
                                    throw new Error("bad maskPattern:" + t)
                            }
                        }(t, i, o))
            }
            ,
            e.getBestMask = function(t, n) {
                var r = Object.keys(e.Patterns).length;
                let o = 0
                    , i = 1 / 0;
                for (let s = 0; s < r; s++) {
                    n(s),
                        e.applyMask(s, t);
                    var a = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(s, t),
                    a < i && (i = a,
                        o = s)
                }
                return o
            }
    },
    "7a43": function(t, e) {
        e.L = {
            bit: 1
        },
            e.M = {
                bit: 0
            },
            e.Q = {
                bit: 3
            },
            e.H = {
                bit: 2
            },
            e.isValid = function(t) {
                return t && void 0 !== t.bit && 0 <= t.bit && t.bit < 4
            }
            ,
            e.from = function(t, n) {
                if (e.isValid(t))
                    return t;
                try {
                    var r = t;
                    if ("string" != typeof r)
                        throw new Error("Param is not a string");
                    switch (r.toLowerCase()) {
                        case "l":
                        case "low":
                            return e.L;
                        case "m":
                        case "medium":
                            return e.M;
                        case "q":
                        case "quartile":
                            return e.Q;
                        case "h":
                        case "high":
                            return e.H;
                        default:
                            throw new Error("Unknown EC Level: " + r)
                    }
                } catch (t) {
                    return n
                }
            }
    },
    "7ba0": function(t, e) {
        function n() {
            this.buffer = [],
                this.length = 0
        }
        n.prototype = {
            get: function(t) {
                var e = Math.floor(t / 8);
                return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
            },
            put: function(t, e) {
                for (let n = 0; n < e; n++)
                    this.putBit(1 == (t >>> e - n - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(t) {
                var e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                    this.length++
            }
        },
            t.exports = n
    },
    "7bf0": function(t, e) {
        let n;
        const r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        e.getSymbolSize = function(t) {
            if (!t)
                throw new Error('"version" cannot be null or undefined');
            if (t < 1 || 40 < t)
                throw new Error('"version" should be in range from 1 to 40');
            return 4 * t + 17
        }
            ,
            e.getSymbolTotalCodewords = function(t) {
                return r[t]
            }
            ,
            e.getBCHDigit = function(t) {
                let e = 0;
                for (; 0 !== t; )
                    e++,
                        t >>>= 1;
                return e
            }
            ,
            e.setToSJISFunction = function(t) {
                if ("function" != typeof t)
                    throw new Error('"toSJISFunc" is not a valid function.');
                n = t
            }
            ,
            e.isKanjiModeEnabled = function() {
                return void 0 !== n
            }
            ,
            e.toSJIS = function(t) {
                return n(t)
            }
    },
    "8d23": function(t, e, n) {
        const r = n("2732");
        function o(t) {
            this.genPoly = void 0,
                this.degree = t,
            this.degree && this.initialize(this.degree)
        }
        o.prototype.initialize = function(t) {
            this.degree = t,
                this.genPoly = r.generateECPolynomial(this.degree)
        }
            ,
            o.prototype.encode = function(t) {
                if (!this.genPoly)
                    throw new Error("Encoder not initialized");
                const e = new Uint8Array(t.length + this.degree);
                e.set(t);
                t = r.mod(e, this.genPoly);
                var n = this.degree - t.length;
                if (0 < n) {
                    const e = new Uint8Array(this.degree);
                    return e.set(t, n),
                        e
                }
                return t
            }
            ,
            t.exports = o
    },
    "924f": function(t, e, n) {
        const r = n("7bf0").getSymbolSize;
        e.getPositions = function(t) {
            return [[0, 0], [(t = r(t)) - 7, 0], [0, t - 7]]
        }
    },
    9582: function(t, e, n) {
        const r = n("7bf0")
            , o = r.getBCHDigit(1335);
        e.getEncodedBits = function(t, e) {
            let n = (t = t.bit << 3 | e) << 10;
            for (; 0 <= r.getBCHDigit(n) - o; )
                n ^= 1335 << r.getBCHDigit(n) - o;
            return 21522 ^ (t << 10 | n)
        }
    },
    "9d94": function(t, e, n) {
        const r = n("bbf0")
            , o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
        function i(t) {
            this.mode = r.ALPHANUMERIC,
                this.data = t
        }
        i.getBitsLength = function(t) {
            return 11 * Math.floor(t / 2) + t % 2 * 6
        }
            ,
            i.prototype.getLength = function() {
                return this.data.length
            }
            ,
            i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }
            ,
            i.prototype.write = function(t) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    var n = 45 * o.indexOf(this.data[e]);
                    n += o.indexOf(this.data[e + 1]),
                        t.put(n, 11)
                }
                this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6)
            }
            ,
            t.exports = i
    },
    aa63: function(t, e, n) {
        const r = n("7bf0")
            , o = n("7a43")
            , i = n("7ba0")
            , a = n("577e")
            , s = n("d6c0")
            , u = n("924f")
            , c = n("7903")
            , l = n("34fc")
            , f = n("8d23")
            , h = n("c8aa")
            , d = n("9582")
            , g = n("bbf0")
            , p = n("befa");
        function w(t, e, n) {
            var r = t.size
                , o = d.getEncodedBits(e, n);
            let i, a;
            for (i = 0; i < 15; i++)
                a = 1 == (o >> i & 1),
                    i < 6 ? t.set(i, 8, a, !0) : i < 8 ? t.set(i + 1, 8, a, !0) : t.set(r - 15 + i, 8, a, !0),
                    i < 8 ? t.set(8, r - i - 1, a, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, a, !0) : t.set(8, 15 - i - 1, a, !0);
            t.set(r - 8, 8, 1, !0)
        }
        function m(t, e, n) {
            const o = new i;
            for (n.forEach((function(e) {
                    o.put(e.mode.bit, 4),
                        o.put(e.getLength(), g.getCharCountIndicator(e.mode, t)),
                        e.write(o)
                }
            )),
                     n = 8 * (r.getSymbolTotalCodewords(t) - l.getTotalCodewordsCount(t, e)),
                 o.getLengthInBits() + 4 <= n && o.put(0, 4); o.getLengthInBits() % 8 != 0; )
                o.putBit(0);
            var a = (n - o.getLengthInBits()) / 8;
            for (let t = 0; t < a; t++)
                o.put(t % 2 ? 17 : 236, 8);
            {
                n = o;
                var s = t;
                const i = r.getSymbolTotalCodewords(s)
                    , a = i - l.getTotalCodewordsCount(s, e)
                    , c = l.getBlocksCount(s, e)
                    , h = c - i % c
                    , d = Math.floor(i / c)
                    , g = Math.floor(a / c)
                    , p = g + 1
                    , w = d - g
                    , m = new f(w);
                let E = 0;
                const v = new Array(c)
                    , y = new Array(c);
                let b = 0;
                const A = new Uint8Array(n.buffer);
                for (let t = 0; t < c; t++) {
                    var u = t < h ? g : p;
                    v[t] = A.slice(E, E + u),
                        y[t] = m.encode(v[t]),
                        E += u,
                        b = Math.max(b, u)
                }
                const C = new Uint8Array(i);
                let B, I, M = 0;
                for (B = 0; B < b; B++)
                    for (I = 0; I < c; I++)
                        B < v[I].length && (C[M++] = v[I][B]);
                for (B = 0; B < w; B++)
                    for (I = 0; I < c; I++)
                        C[M++] = y[I][B];
                return C
            }
        }
        e.create = function(t, e) {
            if (void 0 === t || "" === t)
                throw new Error("No input text");
            let n, i, l = o.M;
            return void 0 !== e && (l = o.from(e.errorCorrectionLevel, o.M),
                n = h.from(e.version),
                i = c.from(e.maskPattern),
            e.toSJISFunc && r.setToSJISFunction(e.toSJISFunc)),
                function(t, e, n, o) {
                    let i;
                    if (Array.isArray(t))
                        i = p.fromArray(t);
                    else {
                        if ("string" != typeof t)
                            throw new Error("Invalid data");
                        {
                            let r = e;
                            r || (l = p.rawSplit(t),
                                r = h.getBestVersionForData(l, n)),
                                i = p.fromString(t, r || 40)
                        }
                    }
                    if (!(l = h.getBestVersionForData(i, n)))
                        throw new Error("The amount of data is too big to be stored in a QR Code");
                    if (e) {
                        if (e < l)
                            throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + l + ".\n")
                    } else
                        e = l;
                    t = m(e, n, i);
                    var l = r.getSymbolSize(e)
                        , f = l = new a(l)
                        , d = e
                        , g = f.size
                        , E = u.getPositions(d);
                    for (let t = 0; t < E.length; t++) {
                        var v = E[t][0]
                            , y = E[t][1];
                        for (let t = -1; t <= 7; t++)
                            if (!(v + t <= -1 || g <= v + t))
                                for (let e = -1; e <= 7; e++)
                                    y + e <= -1 || g <= y + e || (0 <= t && t <= 6 && (0 === e || 6 === e) || 0 <= e && e <= 6 && (0 === t || 6 === t) || 2 <= t && t <= 4 && 2 <= e && e <= 4 ? f.set(v + t, y + e, !0, !0) : f.set(v + t, y + e, !1, !0))
                    }
                    var b = l
                        , A = b.size;
                    for (let t = 8; t < A - 8; t++) {
                        var C = t % 2 == 0;
                        b.set(t, 6, C, !0),
                            b.set(6, t, C, !0)
                    }
                    var B = l
                        , I = (d = e,
                        s.getPositions(d));
                    for (let t = 0; t < I.length; t++) {
                        var M = I[t][0]
                            , T = I[t][1];
                        for (let t = -2; t <= 2; t++)
                            for (let e = -2; e <= 2; e++)
                                -2 === t || 2 === t || -2 === e || 2 === e || 0 === t && 0 === e ? B.set(M + t, T + e, !0, !0) : B.set(M + t, T + e, !1, !0)
                    }
                    if (w(l, n, 0),
                    7 <= e) {
                        var N, P, R, L = l, x = (d = e,
                            L.size), U = h.getEncodedBits(d);
                        for (let t = 0; t < 18; t++)
                            N = Math.floor(t / 3),
                                P = t % 3 + x - 8 - 3,
                                R = 1 == (U >> t & 1),
                                L.set(N, P, R, !0),
                                L.set(P, N, R, !0)
                    }
                    {
                        var S = l
                            , k = t
                            , F = S.size;
                        let e = -1
                            , n = F - 1
                            , r = 7
                            , o = 0;
                        for (let t = F - 1; 0 < t; t -= 2)
                            for (6 === t && t--; ; ) {
                                for (let e = 0; e < 2; e++)
                                    if (!S.isReserved(n, t - e)) {
                                        let i = !1;
                                        o < k.length && (i = 1 == (k[o] >>> r & 1)),
                                            S.set(n, t - e, i),
                                        -1 == --r && (o++,
                                            r = 7)
                                    }
                                if ((n += e) < 0 || F <= n) {
                                    n -= e,
                                        e = -e;
                                    break
                                }
                            }
                    }
                    return isNaN(o) && (o = c.getBestMask(l, w.bind(null, l, n))),
                        c.applyMask(o, l),
                        w(l, n, o),
                        {
                            modules: l,
                            version: e,
                            errorCorrectionLevel: n,
                            maskPattern: o,
                            segments: i
                        }
                }(t, n, l, i)
        }
    },
    bbf0: function(t, e, n) {
        const r = n("27a3")
            , o = n("0425");
        e.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        },
            e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            },
            e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            },
            e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            },
            e.MIXED = {
                bit: -1
            },
            e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits)
                    throw new Error("Invalid mode: " + t);
                if (r.isValid(e))
                    return 1 <= e && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2];
                throw new Error("Invalid version: " + e)
            }
            ,
            e.getBestModeForData = function(t) {
                return o.testNumeric(t) ? e.NUMERIC : o.testAlphanumeric(t) ? e.ALPHANUMERIC : o.testKanji(t) ? e.KANJI : e.BYTE
            }
            ,
            e.toString = function(t) {
                if (t && t.id)
                    return t.id;
                throw new Error("Invalid mode")
            }
            ,
            e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }
            ,
            e.from = function(t, n) {
                if (e.isValid(t))
                    return t;
                try {
                    var r = t;
                    if ("string" != typeof r)
                        throw new Error("Param is not a string");
                    switch (r.toLowerCase()) {
                        case "numeric":
                            return e.NUMERIC;
                        case "alphanumeric":
                            return e.ALPHANUMERIC;
                        case "kanji":
                            return e.KANJI;
                        case "byte":
                            return e.BYTE;
                        default:
                            throw new Error("Unknown mode: " + r)
                    }
                } catch (t) {
                    return n
                }
            }
    },
    befa: function(t, e, n) {
        const r = n("bbf0")
            , o = n("dd7e")
            , i = n("9d94")
            , a = n("0196")
            , s = n("2f3a")
            , u = n("0425")
            , c = n("7bf0")
            , l = n("10b0");
        function f(t) {
            return unescape(encodeURIComponent(t)).length
        }
        function h(t, e, n) {
            const r = [];
            for (var o; null !== (o = t.exec(n)); )
                r.push({
                    data: o[0],
                    index: o.index,
                    mode: e,
                    length: o[0].length
                });
            return r
        }
        function d(t) {
            const e = h(u.NUMERIC, r.NUMERIC, t);
            var n = h(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
            let o, i;
            i = c.isKanjiModeEnabled() ? (o = h(u.BYTE, r.BYTE, t),
                h(u.KANJI, r.KANJI, t)) : (o = h(u.BYTE_KANJI, r.BYTE, t),
                []);
            return e.concat(n, o, i).sort((function(t, e) {
                    return t.index - e.index
                }
            )).map((function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                }
            ))
        }
        function g(t, e) {
            switch (e) {
                case r.NUMERIC:
                    return o.getBitsLength(t);
                case r.ALPHANUMERIC:
                    return i.getBitsLength(t);
                case r.KANJI:
                    return s.getBitsLength(t);
                case r.BYTE:
                    return a.getBitsLength(t)
            }
        }
        function p(t, e) {
            let n;
            var u = r.getBestModeForData(t);
            if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit)
                throw new Error('"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(u));
            switch (n = n !== r.KANJI || c.isKanjiModeEnabled() ? n : r.BYTE) {
                case r.NUMERIC:
                    return new o(t);
                case r.ALPHANUMERIC:
                    return new i(t);
                case r.KANJI:
                    return new s(t);
                case r.BYTE:
                    return new a(t)
            }
        }
        e.fromArray = function(t) {
            return t.reduce((function(t, e) {
                    return "string" == typeof e ? t.push(p(e, null)) : e.data && t.push(p(e.data, e.mode)),
                        t
                }
            ), [])
        }
            ,
            e.fromString = function(t, n) {
                var o = function(t, e) {
                    const n = {}
                        , o = {
                        start: {}
                    };
                    let i = ["start"];
                    for (let l = 0; l < t.length; l++) {
                        var a = t[l];
                        const f = [];
                        for (let t = 0; t < a.length; t++) {
                            var s = a[t]
                                , u = "" + l + t;
                            f.push(u),
                                n[u] = {
                                    node: s,
                                    lastCount: 0
                                },
                                o[u] = {};
                            for (let t = 0; t < i.length; t++) {
                                var c = i[t];
                                n[c] && n[c].node.mode === s.mode ? (o[c][u] = g(n[c].lastCount + s.length, s.mode) - g(n[c].lastCount, s.mode),
                                    n[c].lastCount += s.length) : (n[c] && (n[c].lastCount = s.length),
                                    o[c][u] = g(s.length, s.mode) + 4 + r.getCharCountIndicator(s.mode, e))
                            }
                        }
                        i = f
                    }
                    for (let t = 0; t < i.length; t++)
                        o[i[t]].end = 0;
                    return {
                        map: o,
                        table: n
                    }
                }(function(t) {
                    const e = [];
                    for (let o = 0; o < t.length; o++) {
                        var n = t[o];
                        switch (n.mode) {
                            case r.NUMERIC:
                                e.push([n, {
                                    data: n.data,
                                    mode: r.ALPHANUMERIC,
                                    length: n.length
                                }, {
                                    data: n.data,
                                    mode: r.BYTE,
                                    length: n.length
                                }]);
                                break;
                            case r.ALPHANUMERIC:
                                e.push([n, {
                                    data: n.data,
                                    mode: r.BYTE,
                                    length: n.length
                                }]);
                                break;
                            case r.KANJI:
                                e.push([n, {
                                    data: n.data,
                                    mode: r.BYTE,
                                    length: f(n.data)
                                }]);
                                break;
                            case r.BYTE:
                                e.push([{
                                    data: n.data,
                                    mode: r.BYTE,
                                    length: f(n.data)
                                }])
                        }
                    }
                    return e
                }(d(t, c.isKanjiModeEnabled())), n)
                    , i = l.find_path(o.map, "start", "end");
                const a = [];
                for (let t = 1; t < i.length - 1; t++)
                    a.push(o.table[i[t]].node);
                return e.fromArray(a.reduce((function(t, e) {
                        var n = 0 <= t.length - 1 ? t[t.length - 1] : null;
                        return n && n.mode === e.mode ? t[t.length - 1].data += e.data : t.push(e),
                            t
                    }
                ), []))
            }
            ,
            e.rawSplit = function(t) {
                return e.fromArray(d(t, c.isKanjiModeEnabled()))
            }
    },
    c8aa: function(t, e, n) {
        const r = n("7bf0")
            , o = n("34fc")
            , i = n("7a43")
            , a = n("bbf0")
            , s = n("27a3")
            , u = r.getBCHDigit(7973);
        function c(t, e) {
            return a.getCharCountIndicator(t, e) + 4
        }
        e.from = function(t, e) {
            return s.isValid(t) ? parseInt(t, 10) : e
        }
            ,
            e.getCapacity = function(t, e, n) {
                if (!s.isValid(t))
                    throw new Error("Invalid QR Code version");
                if (void 0 === n && (n = a.BYTE),
                    e = 8 * (r.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, e)),
                n === a.MIXED)
                    return e;
                var i = e - c(n, t);
                switch (n) {
                    case a.NUMERIC:
                        return Math.floor(i / 10 * 3);
                    case a.ALPHANUMERIC:
                        return Math.floor(i / 11 * 2);
                    case a.KANJI:
                        return Math.floor(i / 13);
                    default:
                        return a.BYTE,
                            Math.floor(i / 8)
                }
            }
            ,
            e.getBestVersionForData = function(t, n) {
                let r;
                if (n = i.from(n, i.M),
                    Array.isArray(t)) {
                    if (1 < t.length)
                        return function(t, n) {
                            for (let r = 1; r <= 40; r++)
                                if (function(t, e) {
                                    let n = 0;
                                    return t.forEach((function(t) {
                                            var r = c(t.mode, e);
                                            n += r + t.getBitsLength()
                                        }
                                    )),
                                        n
                                }(t, r) <= e.getCapacity(r, n, a.MIXED))
                                    return r
                        }(t, n);
                    if (0 === t.length)
                        return 1;
                    r = t[0]
                } else
                    r = t;
                var o = r.mode
                    , s = r.getLength()
                    , u = n;
                for (let t = 1; t <= 40; t++)
                    if (s <= e.getCapacity(t, u, o))
                        return t
            }
            ,
            e.getEncodedBits = function(t) {
                if (!s.isValid(t) || t < 7)
                    throw new Error("Invalid QR Code version");
                let e = t << 12;
                for (; 0 <= r.getBCHDigit(e) - u; )
                    e ^= 7973 << r.getBCHDigit(e) - u;
                return t << 12 | e
            }
    },
    d055: function(t, e, n) {
        const r = n("67dd")
            , o = n("aa63");
        var i = n("4146");
        const a = n("4006");
        function s(t, e, n, i, a) {
            var s, u = (s = [].slice.call(arguments, 1)).length;
            if (!(s = "function" == typeof s[u - 1]) && !r())
                throw new Error("Callback required as last argument");
            if (!s) {
                if (u < 1)
                    throw new Error("Too few arguments provided");
                return 1 === u ? (n = e,
                    e = i = void 0) : 2 !== u || e.getContext || (i = n,
                    n = e,
                    e = void 0),
                    new Promise((function(r, a) {
                            try {
                                var s = o.create(n, i);
                                r(t(s, e, i))
                            } catch (r) {
                                a(r)
                            }
                        }
                    ))
            }
            if (u < 2)
                throw new Error("Too few arguments provided");
            2 === u ? (a = n,
                n = e,
                e = i = void 0) : 3 === u && (e.getContext && void 0 === a ? (a = i,
                i = void 0) : (a = i,
                i = n,
                n = e,
                e = void 0));
            try {
                var c = o.create(n, i);
                a(null, t(c, e, i))
            } catch (s) {
                a(s)
            }
        }
        e.create = o.create,
            e.toCanvas = s.bind(null, i.render),
            e.toDataURL = s.bind(null, i.renderToDataURL),
            e.toString = s.bind(null, (function(t, e, n) {
                    return a.render(t, n)
                }
            ))
    },
    d6c0: function(t, e, n) {
        const r = n("7bf0").getSymbolSize;
        e.getRowColCoords = function(t) {
            if (1 === t)
                return [];
            var e = Math.floor(t / 7) + 2
                , n = 145 === (t = r(t)) ? 26 : 2 * Math.ceil((t - 13) / (2 * e - 2));
            const o = [t - 7];
            for (let t = 1; t < e - 1; t++)
                o[t] = o[t - 1] - n;
            return o.push(6),
                o.reverse()
        }
            ,
            e.getPositions = function(t) {
                const n = [];
                var r = e.getRowColCoords(t)
                    , o = r.length;
                for (let t = 0; t < o; t++)
                    for (let e = 0; e < o; e++)
                        0 === t && 0 === e || 0 === t && e === o - 1 || t === o - 1 && 0 === e || n.push([r[t], r[e]]);
                return n
            }
    },
    dd7e: function(t, e, n) {
        const r = n("bbf0");
        function o(t) {
            this.mode = r.NUMERIC,
                this.data = t.toString()
        }
        o.getBitsLength = function(t) {
            return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
        }
            ,
            o.prototype.getLength = function() {
                return this.data.length
            }
            ,
            o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }
            ,
            o.prototype.write = function(t) {
                let e, n, r;
                for (e = 0; e + 3 <= this.data.length; e += 3)
                    n = this.data.substr(e, 3),
                        r = parseInt(n, 10),
                        t.put(r, 10);
                var o = this.data.length - e;
                0 < o && (n = this.data.substr(e),
                    r = parseInt(n, 10),
                    t.put(r, 3 * o + 1))
            }
            ,
            t.exports = o
    }
}]);
