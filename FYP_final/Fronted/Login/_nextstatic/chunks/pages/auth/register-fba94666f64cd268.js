(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[461], {
    68965: function(n, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            __N_SSP: function() {
                return w
            }
        });
        var t = i(50259)
          , o = i(2962)
          , s = i(67294)
          , r = i(93121)
          , a = i(6618)
          , c = i(75886)
          , u = i(11163)
          , d = i(4298)
          , l = i.n(d)
          , f = i(80943)
          , h = i(85893)
          , w = !0;
        e.default = function(n) {
            var e = n.login
              , i = n.countries
              , d = n.googleData
              , w = (0,
            r.q)().setUser
              , _ = (0,
            u.useRouter)();
            if ((0,
            s.useEffect)((function() {
                if (e && _.push("/"),
                d) {
                    window.HubSpotConversations && window.HubSpotConversations.widget.load();
                    var n = c.C.setJwt(d);
                    w(n),
                    _.push("/")
                }
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                e && _.push("/")
            }
            ), [e]),
            d) {
                var p = c.C.getJwtUser();
                return "" !== (null === p || void 0 === p ? void 0 : p.id) && !0 === (null === p || void 0 === p ? void 0 : p.firstLogin) && (0,
                f.cr)(),
                (0,
                h.jsxs)(h.Fragment, {
                    children: [(0,
                    h.jsx)(l(), {
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: '\n        var _hsq = window._hsq = window._hsq || [];\n          _hsq.push(["identify",{\n          email: \''.concat(p.email, "'\n        }]);\n          window.hsConversationsSettings = {\n          loadImmediately: false,\n          identificationEmail: '").concat(p.email, "'\n        };\n        \n\n  ")
                        }
                    }), (0,
                    h.jsx)("div", {
                        className: "loader-container-gif",
                        children: (0,
                        h.jsx)("img", {
                            src: "/images/logo-loader.gif",
                            alt: "this slowpoke moves",
                            width: "40%"
                        })
                    })]
                })
            }
            return (0,
            h.jsxs)(h.Fragment, {
                children: [(0,
                h.jsx)(o.PB, {
                    title: "Join | Blindspot",
                    description: ""
                }), (0,
                h.jsx)(t.pm, {
                    reCaptchaKey: "6LdEhl4mAAAAAC7LIm769WhF8oRx9KMfhFT86-Tc",
                    scriptProps: {
                        async: !1,
                        defer: !0,
                        appendTo: "body",
                        nonce: void 0
                    },
                    children: (0,
                    h.jsx)(a.B2, {
                        countries: i
                    })
                })]
            })
        }
    },
    16659: function(n, e, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/auth/register", function() {
            return i(68965)
        }
        ])
    },
    4298: function(n, e, i) {
        n.exports = i(72189)
    }
}, function(n) {
    n.O(0, [5316, 6399, 6618, 9774, 2888, 179], (function() {
        return e = 16659,
        n(n.s = e);
        var e
    }
    ));
    var e = n.O();
    _N_E = e
}
]);
//# sourceMappingURL=register-fba94666f64cd268.js.map
