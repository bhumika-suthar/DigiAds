(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9344], {
    26071: function(n, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            __N_SSP: function() {
                return _
            }
        });
        var t = i(62286)
          , o = i.n(t)
          , s = i(4298)
          , r = i.n(s)
          , d = i(2962)
          , l = i(67294)
          , a = i(93121)
          , u = i(6618)
          , c = i(53618)
          , v = i(11163)
          , f = i(80943)
          , w = i(85893)
          , _ = !0;
        e.default = function(n) {
            n.user;
            var e = n.googleData
              , i = (0,
            a.q)().setUser
              , t = (0,
            v.useRouter)()
              , s = o().get();
            if ((0,
            l.useEffect)((function() {
                if (e) {
                    var n, r;
                    window.HubSpotConversations && window.HubSpotConversations.widget.load();
                    var d = c.CR.setJwt(e);
                    i(d),
                    o().destroy(null, "redirect", {
                        path: "/"
                    }),
                    null !== s && void 0 !== s && null !== (n = s.redirect) && void 0 !== n && n.includes("_next") || null !== s && void 0 !== s && null !== (r = s.redirect) && void 0 !== r && r.includes("password-reset") ? t.push("/") : t.push((null === s || void 0 === s ? void 0 : s.redirect) || "/")
                }
            }
            ), [e]),
            e) {
                var _ = c.CR.getJwtUser();
                return "" !== (null === _ || void 0 === _ ? void 0 : _.id) && !0 === (null === _ || void 0 === _ ? void 0 : _.firstLogin) && (0,
                f.cr)(),
                (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)(r(), {
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: '\n        var _hsq = window._hsq = window._hsq || [];\n          _hsq.push(["identify",{\n          email: \''.concat(_.email, "'\n        }]);\n        window.hsConversationsSettings = {\n          loadImmediately: false,\n          identificationEmail: '").concat(_.email, "'\n        };\n\n  ")
                        }
                    }), (0,
                    w.jsx)("div", {
                        className: "loader-container-gif",
                        children: (0,
                        w.jsx)("img", {
                            src: "/images/logo-loader.gif",
                            alt: "this slowpoke moves",
                            width: "40%"
                        })
                    })]
                })
            }
            return (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsx)(d.PB, {
                    title: "Login | Blindspot",
                    description: ""
                }), (0,
                w.jsx)(u.U0, {})]
            })
        }
    },
    40163: function(n, e, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/auth/login", function() {
            return i(26071)
        }
        ])
    },
    4298: function(n, e, i) {
        n.exports = i(72189)
    }
}, function(n) {
    n.O(0, [5316, 6399, 6618, 9774, 2888, 179], (function() {
        return e = 40163,
        n(n.s = e);
        var e
    }
    ));
    var e = n.O();
    _N_E = e
}
]);
//# sourceMappingURL=login-cee475282d1e4527.js.map
