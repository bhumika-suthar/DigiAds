"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6618], {
    13023: function(e, t, r) {
        r(67294);
        var a = r(15477)
          , n = r(11163)
          , s = r(91172)
          , i = r(93121)
          , l = r(85893);
        t.Z = function(e) {
            var t = e.children
              , r = e.title
              , o = e.subtitle
              , c = e.hideTitleOnMobile
              , d = e.subtitleMob
              , u = e.backBtn
              , m = e.hideAddBtn
              , f = e.showShareBtn
              , h = void 0 !== f && f
              , p = e.copyClipboard
              , x = e.shareID
              , v = e.hasLogo
              , g = void 0 !== v && v
              , b = e.hint
              , y = (0,
            n.useRouter)()
              , j = (0,
            i.q)().notify;
            return (0,
            l.jsx)("div", {
                className: "h-24 flex-shrink-0 tablet:border-b tablet:border-bordercolor dark:tablet:border-bordercolordark mb-4\n        ".concat(p ? "mt-4" : ""),
                children: (0,
                l.jsxs)("div", {
                    className: "flex  items-center h-full px-7  md:pr-7 ".concat("", " ").concat(p ? "justify-between" : "pr-24 min-tablet:justify-between"),
                    children: [u ? (0,
                    l.jsx)(s.zx, {
                        color: "white",
                        justIcon: !0,
                        className: "mr-3 md:hidden",
                        onClick: function() {
                            y.push(u || "")
                        },
                        children: (0,
                        l.jsx)("div", {
                            className: "text-lightGrey dark:text-dark-400",
                            children: (0,
                            l.jsx)(a.s$, {
                                set: "light"
                            })
                        })
                    }) : "", (0,
                    l.jsxs)("div", {
                        className: "flex flex-col md:flex-row md:items-center",
                        children: [g && (0,
                        l.jsxs)("div", {
                            className: "w-40 md:mr-10",
                            children: [(0,
                            l.jsx)("img", {
                                src: "/images/logo-blindspot.svg",
                                width: "280",
                                height: "115",
                                alt: "Blindspot",
                                className: "block dark:hidden"
                            }), (0,
                            l.jsx)("img", {
                                src: "/images/logo-blindspot-darkmode.svg",
                                width: "280",
                                height: "115",
                                alt: "Blindspot",
                                className: "hidden dark:block"
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col md:flex-row h-full ".concat(c ? "min-md:block hidden" : ""),
                            children: [(0,
                            l.jsx)("div", {
                                className: "text-base text-lightGrey md:text-black md:text-opacity-60 md:text-xl blindspot-title dark:text-white",
                                dangerouslySetInnerHTML: {
                                    __html: r
                                }
                            }), o && (0,
                            l.jsx)("div", {
                                className: "text-xl font-bold border-black text-dark-default md:font-semibold md:pl-3 md:ml-3 md:border-l dark:border-lightGrey border-opacity-60 blindspot-title dark:text-dark-400",
                                children: o
                            }) || null, d && (0,
                            l.jsx)("div", {
                                className: "text-xl font-bold border-black text-dark-default md:font-semibold md:pl-3 md:ml-3 md:border-l dark:border-lightGrey border-opacity-60 md:hidden blindspot-title dark:text-dark-400",
                                children: d
                            }) || null]
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: u ? "hidden min-tablet:block" : t ? "ml-auto" : "",
                        children: t ? (0,
                        l.jsx)("div", {
                            className: "flex items-center justify-end ml-4",
                            children: t
                        }) : (0,
                        l.jsxs)("div", {
                            className: "flex items-center justify-end",
                            children: [(0,
                            l.jsx)("div", {
                                className: p ? "pr-4" : "hidden",
                                children: (0,
                                l.jsx)(s.zx, {
                                    onClick: function() {
                                        var e = document.createElement("textarea");
                                        e.style.position = "fixed",
                                        e.style.left = "0",
                                        e.style.top = "0",
                                        e.style.opacity = "0",
                                        e.value = "https://portal.seeblindspot.com/media-plan/" + x,
                                        document.body.appendChild(e),
                                        e.focus(),
                                        e.select(),
                                        document.execCommand("copy"),
                                        document.body.removeChild(e),
                                        j("The link has been copied to clipboard!", "success")
                                    },
                                    tag: "div",
                                    children: "Get Share Link"
                                })
                            }), h && (0,
                            l.jsx)("div", {
                                className: h ? "pr-4" : "hidden",
                                children: (0,
                                l.jsx)("a", {
                                    target: "_blank",
                                    href: "/media-plan/" + x,
                                    rel: "noopener noreferrer",
                                    children: (0,
                                    l.jsx)(s.zx, {
                                        tag: "div",
                                        children: "Share Campaign"
                                    })
                                })
                            }), b && (0,
                            l.jsxs)("div", {
                                className: "flex flex-row items-center navbar-hint",
                                children: [(0,
                                l.jsx)("p", {
                                    className: "mr-4 text-sm dark:text-dark-300 text-dark-200",
                                    children: "browse over 1 Million billboards"
                                }), (0,
                                l.jsx)("img", {
                                    className: "mt-6 mr-4 w-14",
                                    src: "/images/arrow-referral.svg"
                                })]
                            }), (0,
                            l.jsx)("div", {
                                className: "".concat(m ? "hidden" : g ? "hidden min-tablet:block" : ""),
                                children: (0,
                                l.jsx)(s.zx, {
                                    onClick: function() {
                                        y.push("/publish/basic")
                                    },
                                    tag: "div",
                                    className: "whitespace-nowrap",
                                    children: "Create campaign"
                                })
                            })]
                        })
                    })]
                })
            })
        }
    },
    60654: function(e, t, r) {
        r.r(t);
        var a = r(50029)
          , n = r(16835)
          , s = r(87794)
          , i = r.n(s)
          , l = r(67294)
          , o = r(53618)
          , c = r(84293)
          , d = r(85893);
        t.default = function(e) {
            var t = e.title
              , r = (e.index,
            e.otherClasses)
              , s = e.type
              , u = e.locations
              , m = e.category
              , f = (0,
            l.useState)(null)
              , h = f[0]
              , p = (f[1],
            l.useState(null))
              , x = (0,
            n.Z)(p, 2)
              , v = (x[0],
            x[1]);
            (0,
            l.useEffect)((function() {
                h ? g(h) : v(null)
            }
            ), [h]);
            var g = function() {
                var e = (0,
                a.Z)(i().mark((function e(t) {
                    var r;
                    return i().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                o.hJ.getLocationById(t);
                            case 3:
                                (r = e.sent).status && r.locations && v(r.locations),
                                e.next = 9;
                                break;
                            case 7:
                                e.prev = 7,
                                e.t0 = e.catch(0);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            d.jsxs)("div", {
                id: "sliderTopSeller",
                className: "pb-7",
                children: [t ? (0,
                d.jsx)("h3", {
                    className: "pb-6 text-lg font-bold text-black dark:text-white lg:text-xl pl-7",
                    children: t
                }) : "", function() {
                    switch (s) {
                    case "3d":
                        return (0,
                        d.jsx)(c.i7, {
                            otherClasses: r && r || "",
                            sliderItems: u,
                            category: m
                        });
                    case "full-center":
                        return (0,
                        d.jsx)(c.IC, {
                            sliderItems: u,
                            fullCenter: !0,
                            category: m
                        });
                    default:
                        return (0,
                        d.jsx)(c.IC, {
                            sliderItems: u,
                            category: m
                        })
                    }
                }()]
            })
        }
    },
    6618: function(e, t, r) {
        r.d(t, {
            pm: function() {
                return v
            },
            xZ: function() {
                return Ca
            },
            pi: function() {
                return tt
            },
            KY: function() {
                return yt
            },
            mf: function() {
                return kt
            },
            Ld: function() {
                return Ye
            },
            U0: function() {
                return Je
            },
            lb: function() {
                return Ue
            },
            pU: function() {
                return Yr
            },
            td: function() {
                return bt
            },
            Vn: function() {
                return lr
            },
            $8: function() {
                return Tt
            },
            qe: function() {
                return La
            },
            mJ: function() {
                return Oa
            },
            hb: function() {
                return Ea
            },
            fM: function() {
                return Bt
            },
            Vu: function() {
                return Dt
            },
            Qt: function() {
                return _t
            },
            __: function() {
                return ir
            },
            B2: function() {
                return K
            },
            et: function() {
                return ne
            },
            BE: function() {
                return da
            },
            Pf: function() {
                return Pr
            },
            oW: function() {
                return Ta
            },
            Zh: function() {
                return st
            }
        });
        var a, n, s = r(71383), i = r(50029), l = r(87794), o = r.n(l), c = r(67294), d = r(48085), u = r(84293), m = r(40865), f = r(15477), h = r(86165), p = r(85893), x = function(e) {
            var t, r = e.thumbId, l = e.name, x = e.uuid, v = e.created, g = e.plays, b = void 0 === g ? "0" : g, y = e.reach, j = void 0 === y ? "0" : y, w = e.status, k = e.deleteCallback, N = (0,
            c.useState)(!1), C = N[0], S = N[1], M = [{
                name: "Plays",
                value: b,
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47716 22 12C22 17.5228 17.5228 22 12 22C6.47716 22 2 17.5228 2 12C2 6.47716 6.47716 2 12 2Z" stroke="url(#paint0_linear_729:63348)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0501 12.4668C14.3211 13.2528 12.3372 14.5828 11.3222 15.0098C11.1602 15.0778 10.7472 15.2218 10.6582 15.2238C10.4692 15.2298 10.2872 15.1238 10.1992 14.9538C10.1652 14.8878 10.0652 14.4568 10.0332 14.2648C9.93815 13.6808 9.88915 12.7738 9.89015 11.8618C9.88915 10.9048 9.94215 9.95483 10.0482 9.37683C10.0762 9.22083 10.1582 8.86183 10.1822 8.80383C10.2272 8.69583 10.3092 8.61083 10.4082 8.55783C10.4842 8.51683 10.5712 8.49483 10.6582 8.49783C10.7472 8.49983 11.1092 8.62683 11.2332 8.67583C12.2111 9.05583 14.2801 10.4338 15.0401 11.2438C15.1081 11.3168 15.2951 11.5128 15.3261 11.5528C15.3971 11.6428 15.4321 11.7518 15.4321 11.8618C15.4321 11.9638 15.4011 12.0678 15.3371 12.1548C15.3041 12.1998 15.1131 12.3998 15.0501 12.4668Z" stroke="url(#paint1_linear_729:63348)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_729:63348" x1="2.6249" y1="13.9852" x2="25.5886" y2="14.0141" gradientUnits="userSpaceOnUse"><stop stop-color="#EB3F3F"/><stop offset="1" stop-color="#FDA53F"/></linearGradient><linearGradient id="paint1_linear_729:63348" x1="10.0633" y1="12.5285" x2="16.4266" y2="12.5351" gradientUnits="userSpaceOnUse"><stop stop-color="#EB3F3F"/><stop offset="1" stop-color="#FDA53F"/></linearGradient></defs></svg>'
            }, {
                name: "Impressions",
                value: j,
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="url(#paint0_linear_729:63352)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z" stroke="url(#paint1_linear_729:63352)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_729:63352" x1="9.03594" y1="12.6802" x2="16.2959" y2="12.6894" gradientUnits="userSpaceOnUse"><stop stop-color="#EB3F3F"/><stop offset="1" stop-color="#FDA53F"/></linearGradient><linearGradient id="paint1_linear_729:63352" x1="3.32803" y1="13.5026" x2="24.5695" y2="13.5364" gradientUnits="userSpaceOnUse"><stop stop-color="#EB3F3F"/><stop offset="1" stop-color="#FDA53F"/></linearGradient></defs></svg>'
            }];
            function Z() {
                return (Z = (0,
                i.Z)(o().mark((function e(t) {
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                (0,
                                h.Z)({
                                    method: "post",
                                    url: "/campaigns/delete-draft",
                                    data: {
                                        id: t
                                    }
                                });
                            case 3:
                                e.sent.data.data.success && k(t),
                                S(!1),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                console.log("error", e.t0);
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                )))).apply(this, arguments)
            }
            var O = function() {
                S(!1),
                function(e) {
                    Z.apply(this, arguments)
                }(x)
            }
              , L = {
                buttonText: "Continue",
                action: function() {
                    O()
                }
            }
              , T = {
                buttonText: "Cancel",
                action: function() {
                    S(!1)
                }
            };
            return (0,
            p.jsxs)("div", {
                className: (0,
                m.f9)(a || (a = (0,
                s.Z)(["w-full  bg-white dark:bg-dark-200  p-2 rounded-3xl shadow-card "]))),
                children: [(0,
                p.jsx)(d.FS, {
                    uuid: x,
                    image: r,
                    status: w
                }), (0,
                p.jsxs)("div", {
                    className: "p-6",
                    children: [(0,
                    p.jsx)(d.qp, {
                        time: v
                    }), (0,
                    p.jsx)("h3", {
                        className: (0,
                        m.f9)(n || (n = (0,
                        s.Z)(["block text-black dark:text-white font-semibold text-xl break-words pt-2"]))),
                        children: l
                    }), "draft" !== w ? (0,
                    p.jsx)(d.jJ, {
                        items: M
                    }) : (0,
                    p.jsxs)("div", {
                        onClick: function() {
                            S(!0)
                        },
                        className: "flex items-center pt-3 space-x-2 font-semibold cursor-pointer text-primary-500 md:text-xs",
                        children: [(0,
                        p.jsx)(f.HG, {
                            set: "light",
                            primaryColor: "#F53D3F"
                        }), (0,
                        p.jsx)("span", {
                            children: "Delete"
                        })]
                    })]
                }), null !== (t = C && (0,
                p.jsx)(u.Vq, {
                    description: "Do you want to delete this draft?",
                    title: "Are you sure?",
                    primaryButton: L,
                    secondaryButton: T
                })) && void 0 !== t ? t : null]
            })
        };
        x.defaultProps = {};
        var v = x
          , g = r(59499)
          , b = r(16835)
          , y = r(50259)
          , j = r(68035)
          , w = r(91172)
          , k = r(42283)
          , N = r(74231)
          , C = r(86896)
          , S = r(44012)
          , M = r(21322)
          , Z = r.n(M)
          , O = r(11163)
          , L = r(53618)
          , T = r(94710)
          , E = r(93121)
          , P = r(46066)
          , I = r(41664)
          , D = r.n(I)
          , F = function(e) {
            var t = e.isRegister
              , r = (0,
            C.Z)();
            (0,
            O.useRouter)();
            return (0,
            p.jsx)("div", {
                className: "h-24 flex-shrink-0",
                children: (0,
                p.jsxs)("div", {
                    className: "flex justify-between items-center h-full px-16",
                    children: [(0,
                    p.jsxs)("div", {
                        className: "w-40 pt-12",
                        children: [(0,
                        p.jsx)("img", {
                            src: "/images/logo-blindspot.svg",
                            width: "280",
                            height: "115",
                            alt: "Blindspot",
                            className: "block dark:hidden pt-10"
                        }), (0,
                        p.jsx)("img", {
                            src: "/images/logo-blindspot-darkmode.svg",
                            width: "280",
                            height: "115",
                            alt: "Blindspot",
                            className: "hidden dark:block pt-10"
                        }), (0,
                        p.jsxs)("div", {
                            className: "flex flex-row flex-nowrap pb-10 item-center",
                            children: [(0,
                            p.jsx)("div", {
                                className: "flex items-center",
                                children: (0,
                                p.jsx)("p", {
                                    className: "formerly pr-1",
                                    children: "Formerly"
                                })
                            }), (0,
                            p.jsx)("div", {
                                children: (0,
                                p.jsx)("img", {
                                    src: "/images/logo-tps.png",
                                    width: "60",
                                    alt: "TPSEngage",
                                    className: "block"
                                })
                            })]
                        })]
                    }), (0,
                    p.jsx)("div", {
                        className: "tablet:hidden",
                        children: (0,
                        p.jsxs)(j.K, {
                            fitY: !0,
                            wrap: !0,
                            direction: "vertical",
                            otherClass: "shadow-top-border pb-4 pt-4 w-full",
                            children: [(0,
                            p.jsx)("h4", {
                                className: "text-base font-semibold text-dark-500 dark:text-dark-400 pr-3",
                                children: t ? r.formatMessage({
                                    defaultMessage: "Already have an account",
                                    id: "Text.HasAccount"
                                }) : r.formatMessage({
                                    defaultMessage: "New to Blindspot?",
                                    id: "Text.NewToBlindspot"
                                })
                            }), (0,
                            p.jsx)("div", {
                                className: "text-center",
                                children: t ? (0,
                                p.jsx)(D(), {
                                    href: "/auth/login",
                                    children: (0,
                                    p.jsx)("a", {
                                        className: "text-base font-semibold text-primary-500 hover:text-primary-500 transition",
                                        children: r.formatMessage({
                                            defaultMessage: "Login",
                                            id: "Text.Login"
                                        })
                                    })
                                }) : (0,
                                p.jsx)(D(), {
                                    href: "/auth/register",
                                    children: (0,
                                    p.jsx)("a", {
                                        className: "text-base font-semibold text-primary-500 hover:text-primary-500 transition",
                                        children: r.formatMessage({
                                            defaultMessage: "Create an account",
                                            id: "Button.Register"
                                        })
                                    })
                                })
                            })]
                        })
                    })]
                })
            })
        };
        function R(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function B(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var A = function(e) {
            var t = e.isRegister
              , r = e.children
              , a = e.isReferral
              , n = c.useRef(null)
              , s = (0,
            c.useState)(1)
              , i = s[0]
              , l = s[1]
              , o = ["/images/brends1.png", "/images/brends2.png", "/images/brends3.png", "/images/brends4.png"]
              , d = {
                dots: !0,
                infinite: !0,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                afterChange: function(e) {
                    l(e + 1)
                },
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }
              , u = [{
                title: "What is Blindspot?",
                textSlider: (0,
                p.jsxs)("div", {
                    children: ["Blindspot is a fully automated platform that makes it easy and affordable to advertise on ", (0,
                    p.jsx)("strong", {
                        children: "over 1 Million digital billboards"
                    }), " in the world."]
                }),
                subTextSlider: (0,
                p.jsxs)("div", {
                    children: ["Over ", (0,
                    p.jsx)("strong", {
                        children: "15.000 advertisers"
                    }), " work with us. It\u2019s your turn."]
                }),
                textCard: "Welcome to the best way of advertising on a digital billboard. We\u2019re thrilled to have you and are here to make your experience spotless.",
                imgSrc: "/images/referral-about-blindspot.svg"
            }, {
                title: "Ready to get started? ",
                textSlider: (0,
                p.jsxs)("div", {
                    children: ["You can finish setting up your campaign in ", (0,
                    p.jsx)("strong", {
                        children: "5 minutes or less"
                    }), ". Check out ", (0,
                    p.jsx)("strong", {
                        className: "text-primarydark-600 underline",
                        children: (0,
                        p.jsx)("a", {
                            rel: "noopener noreferrer",
                            href: "https://seeblindspot.com/create-your-first-campaign-in-less-than-5-minutes-step-by-step/",
                            target: "_blank",
                            children: "this quick guide"
                        })
                    }), " to get started!"]
                }),
                textCard: "You can sign up using the form on this page and immediately start browsing locations and pricing. If you require assistance, just use the live chat option to get in touch with us!",
                imgSrc: "/images/referral-about-referral.svg"
            }, {
                title: "Do you need more information?",
                textSlider: (0,
                p.jsxs)("div", {
                    children: ["Reach out to ", (0,
                    p.jsx)("strong", {
                        className: "text-primarydark-600 underline",
                        children: (0,
                        p.jsx)("a", {
                            href: "mailto:hello@seeblindspot.com ",
                            children: "hello@seeblindspot.com"
                        })
                    }), " or hop on our livechat - we'd love to hear from you!"]
                }),
                textCard: (0,
                p.jsxs)("div", {
                    children: ["Want to learn more about best practices and Digital Out of Home (DOOH) advertising? Check out our ", (0,
                    p.jsx)("strong", {
                        className: "text-primarydark-600 underline",
                        children: (0,
                        p.jsx)("a", {
                            href: "https://seeblindspot.com/resources/",
                            rel: "noreferrer",
                            target: "_blank",
                            children: "Resources page"
                        })
                    })]
                }),
                imgSrc: "/images/referral-about-website.svg"
            }]
              , m = function(e) {
                n.current.slickGoTo(e),
                l(e + 1)
            };
            return (0,
            p.jsxs)("div", {
                className: "h-screen flex flex-col ".concat(a ? "" : "login-page"),
                children: [(0,
                p.jsx)(F, {
                    isRegister: t
                }), (0,
                p.jsxs)("div", {
                    className: "flex-1 flex items-center tablet:flex-col tablet:mt-20",
                    children: [!a && (0,
                    p.jsxs)("div", {
                        className: "flex-1",
                        children: [(0,
                        p.jsx)("img", {
                            className: "block dark:hidden tablet:hidden m-auto left-animation",
                            src: "/images/login-anim.png"
                        }), (0,
                        p.jsx)("img", {
                            className: "hidden dark:block dark:tablet:hidden tablet:hidden m-auto left-animation",
                            src: "/images/login-anim-darkmode.png"
                        }), (0,
                        p.jsx)("img", {
                            className: "hidden tablet:block m-auto left-animation",
                            src: "/images/login-anim-mobile.png"
                        })]
                    }), a && (0,
                    p.jsxs)("div", {
                        className: "w-6/12 flex-wrap justify-center md:flex md:space-x-0 md:space-y-0 min-tablet:pl-16 space-y-0 tablet:w-full z-10 tablet:mb-10 my-10 min-tablet:my-0 order-last min-tablet:order-first",
                        children: [(0,
                        p.jsx)("div", {
                            className: "referral-container w-full px-10 tablet:px-7 border-0 min-tablet:px-16 rounded-4xl min-tablet:max-h-100-36 tablet:rounded-b-none",
                            children: u.map((function(e, t) {
                                return (0,
                                p.jsxs)("div", {
                                    onClick: function() {
                                        m(t)
                                    },
                                    className: "referral-step-container relative w-full flex flex-row items-center bg-white dark:bg-dark-200 rounded-2xl mb-10 px-4 py-6 \n                      ".concat(t + 1 === i ? "border border-primarydark-600" : "cursor-pointer"),
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: "referral-icon-container flex-shrink-0 rounded-full border border-dark-300 border-opacity-40 mx-4",
                                        children: (0,
                                        p.jsx)("img", {
                                            className: "m-auto p-3",
                                            src: e.imgSrc
                                        })
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "dark:text-white px-2",
                                        children: e.textCard
                                    }), t + 1 !== i && (0,
                                    p.jsx)("div", {
                                        className: "absolute top-0 left-0 w-full h-full bg-f3f3f3 dark:bg-dark-200 rounded-2xl bg-opacity-40 dark:bg-opacity-80"
                                    })]
                                }, t)
                            }
                            ))
                        }), (0,
                        p.jsxs)("div", {
                            className: "w-full px-16 relative",
                            children: [(0,
                            p.jsx)(P.Z, B(B({
                                ref: n
                            }, d), {}, {
                                className: "",
                                children: u.map((function(e, t) {
                                    return (0,
                                    p.jsxs)("div", {
                                        className: "flex flex-col items-center pb-10 h-full",
                                        onClick: function() {
                                            m(t)
                                        },
                                        children: [(0,
                                        p.jsx)("h1", {
                                            className: "dark:text-white font-semibold mb-3 text-center",
                                            children: e.title
                                        }), (0,
                                        p.jsx)("h3", {
                                            className: "dark:text-dark-300 text-center",
                                            children: e.textSlider
                                        }), e.subTextSlider && (0,
                                        p.jsxs)("div", {
                                            className: "mt-3 flex flex-row items-center justify-center flex-wrap",
                                            children: [(0,
                                            p.jsx)("div", {
                                                className: "flex flex-row mr-3 mb-3",
                                                children: o.map((function(e) {
                                                    return (0,
                                                    p.jsx)("img", {
                                                        className: "-ml-3",
                                                        src: e
                                                    })
                                                }
                                                ))
                                            }), (0,
                                            p.jsx)("h3", {
                                                className: "dark:text-dark-300 text-center mb-3",
                                                children: e.subTextSlider
                                            })]
                                        })]
                                    }, t)
                                }
                                ))
                            })), (0,
                            p.jsx)("div", {
                                className: "absolute bottom-0 right-0 tablet:hidden w-20",
                                children: (0,
                                p.jsx)("img", {
                                    src: "/images/arrow-referral.svg"
                                })
                            })]
                        })]
                    }), (0,
                    p.jsx)("div", {
                        className: "flex-1 tablet:w-full",
                        children: r
                    })]
                })]
            })
        }
          , W = r(77191)
          , V = r(33299)
          , H = function(e) {
            (0,
            W.Z)(e);
            var t = (0,
            V.useSession)().data;
            return t && console.log("sesson", t.user),
            (0,
            p.jsxs)(p.Fragment, {
                children: [(0,
                p.jsx)("div", {
                    className: "relative mt-6 w-full flex items-center justify-center sync-divider",
                    children: (0,
                    p.jsx)("div", {
                        className: "h-full w-fit z-10 dark:bg-dark-200 bg-white px-4 dark:text-dark-300",
                        children: "or sync with"
                    })
                }), (0,
                p.jsxs)("div", {
                    onClick: function() {
                        return (0,
                        V.signIn)("google")
                    },
                    "data-cy": "createAccount",
                    className: "w-full hover:shadow-secondaryFullHover focus:shadow-secondaryFullHover border border-dark-default dark:border-white relative rounded-3xl p-3 mx-auto mt-7 text-dark dark:text-white font-semibold text-center cursor-pointer",
                    children: [(0,
                    p.jsx)("div", {
                        className: "absolute top-3 left-6 border-r border-dark-default dark:border-white dark:border-opacity-50 pr-4",
                        children: (0,
                        p.jsx)("img", {
                            className: "h-6",
                            src: "/images/googleaccount.svg"
                        })
                    }), "Google Account"]
                })]
            })
        };
        H.defaultProps = {};
        var z = H
          , U = r(62286)
          , _ = r.n(U);
        function G(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? G(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var J, K = function(e) {
            var t = (0,
            C.Z)()
              , r = (0,
            E.q)()
              , a = r.notify
              , n = r.setUser
              , s = (0,
            O.useRouter)()
              , l = s.query.refId
              , d = c.useState(null)
              , m = (0,
            b.Z)(d, 2)
              , f = m[0]
              , h = m[1]
              , x = c.useState(null)
              , v = (0,
            b.Z)(x, 2)
              , M = v[0]
              , P = v[1]
              , I = c.useState(!0)
              , F = (0,
            b.Z)(I, 2)
              , R = F[0]
              , B = F[1]
              , W = (0,
            c.useState)(!1)
              , V = W[0]
              , H = W[1];
            c.useEffect((function() {
                if (s.isReady) {
                    if (localStorage.removeItem("searchLocObj"),
                    l)
                        (0,
                        U.setCookie)(null, "blindspotReferralCode", String(l), {
                            maxAge: 2592e3,
                            path: "/"
                        });
                    else {
                        var e = (0,
                        U.parseCookies)();
                        if (e && e.blindspotReferralCode) {
                            var t = {
                                refId: e.blindspotReferralCode
                            };
                            s.replace({
                                pathname: s.pathname,
                                query: t
                            })
                        }
                    }
                    P(l)
                }
            }
            ), [s.isReady]),
            c.useEffect((function() {
                l && P(l)
            }
            ), [l]);
            var _, G = N.Ry().shape({
                phone: N.Z_().min(4, t.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "4"
                })),
                password: N.Z_().min(8, t.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "8"
                })).test("test-name", t.formatMessage({
                    defaultMessage: "The password doesn't meet the minimum requirements",
                    id: "Error.passwordMinimunRequirements"
                }), (function(e) {
                    return !!e && Z()(e).score >= 2
                }
                )).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                lastname: N.Z_().min(2, t.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                })).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                email: N.Z_().email(t.formatMessage({
                    defaultMessage: "This is not a valid email address",
                    id: "Error.emailInvalid"
                })).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                })),
                firstname: N.Z_().min(2, t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                })).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                country: N.Z_().min(2, t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                })).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                }))
            }), J = (_ = G,
            (0,
            c.useCallback)(function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                _.validate(t, {
                                    abortEarly: !1
                                });
                            case 3:
                                return r = e.sent,
                                e.abrupt("return", {
                                    values: r,
                                    errors: {}
                                });
                            case 7:
                                return e.prev = 7,
                                e.t0 = e.catch(0),
                                e.abrupt("return", {
                                    values: {},
                                    errors: e.t0.inner.reduce((function(e, t) {
                                        var r;
                                        return q(q({}, e), {}, (0,
                                        g.Z)({}, t.path, {
                                            type: null !== (r = t.type) && void 0 !== r ? r : "validation",
                                            message: t.message
                                        }))
                                    }
                                    ), {})
                                });
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [_])), K = (0,
            k.cI)({
                resolver: J,
                mode: "all"
            }), X = K.register, Y = K.trigger, $ = K.handleSubmit, Q = K.formState, ee = K.control, te = (0,
            y.xX)().executeRecaptcha, re = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r, i, l;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (void 0 !== te) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 2:
                                return e.prev = 2,
                                e.next = 5,
                                te();
                            case 5:
                                if (r = e.sent,
                                !0 !== V) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 8:
                                return H(!0),
                                e.next = 11,
                                L.FT.register({
                                    email: t.email,
                                    tokenC: r,
                                    phone: "-",
                                    password: t.password,
                                    firstName: t.firstname,
                                    lastName: t.lastname,
                                    referralcode: M || null,
                                    iso: t.country,
                                    country: f
                                });
                            case 11:
                                i = e.sent,
                                H(!1),
                                !0 === i.hasError ? a(null === i || void 0 === i ? void 0 : i.errorMessage, "error") : (l = L.CR.setJwt(i),
                                n(l),
                                s.push("/auth/validate-email")),
                                e.next = 19;
                                break;
                            case 16:
                                e.prev = 16,
                                e.t0 = e.catch(2),
                                a("Try again later", "error");
                            case 19:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 16]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), ae = Q.dirtyFields, ne = Q.errors, se = function(e) {
                return {
                    isDirty: ae[e],
                    error: ne[e]
                }
            };
            return (0,
            p.jsx)(A, {
                isRegister: !0,
                isReferral: !0,
                children: (0,
                p.jsx)("form", {
                    onSubmit: $(re),
                    children: (0,
                    p.jsx)(j.K, {
                        wrap: !0,
                        gravity: "center",
                        otherClass: "tablet:w-full min-tablet:pr-16",
                        children: (0,
                        p.jsx)("div", {
                            className: "md:max-w-screen-sm tablet:w-full",
                            children: (0,
                            p.jsxs)("div", {
                                className: "w-full px-10 py-10 space-y-4 overflow-auto bg-white border-0 dark:bg-dark-200 min-tablet:px-16 rounded-4xl min-tablet:max-h-100-36 tablet:rounded-b-none",
                                children: [(0,
                                p.jsx)(T.Z, {
                                    title: "Create my account"
                                }), (0,
                                p.jsxs)(j.K, {
                                    spacing: "xl",
                                    padding: !0,
                                    otherClass: "w-full md:space-x-7",
                                    children: [(0,
                                    p.jsx)(w.II, {
                                        fullWidth: !0,
                                        innerRef: X,
                                        name: "firstname",
                                        "data-cy": "firstName",
                                        className: "input-s",
                                        validation: se("firstname"),
                                        type: "text",
                                        label: t.formatMessage({
                                            defaultMessage: "First name",
                                            id: "Label.Firstname"
                                        })
                                    }), (0,
                                    p.jsx)(w.II, {
                                        fullWidth: !0,
                                        innerRef: X,
                                        name: "lastname",
                                        className: "input-s",
                                        "data-cy": "lastName",
                                        type: "text",
                                        validation: se("lastname"),
                                        label: t.formatMessage({
                                            defaultMessage: "Last name",
                                            id: "Label.LastName"
                                        })
                                    })]
                                }), (0,
                                p.jsxs)(j.K, {
                                    spacing: "xl",
                                    padding: !0,
                                    otherClass: "w-full md:space-x-7",
                                    children: [(0,
                                    p.jsx)(w.II, {
                                        name: "email",
                                        "data-cy": "email",
                                        className: "input-s",
                                        innerRef: X,
                                        validation: se("email"),
                                        type: "email",
                                        label: t.formatMessage({
                                            defaultMessage: "Email",
                                            id: "Label.Email"
                                        }),
                                        fullWidth: !0
                                    }), (0,
                                    p.jsx)(k.Qr, {
                                        control: ee,
                                        name: "country",
                                        "data-cy": "country",
                                        render: function(r, a) {
                                            var n = r.onChange
                                              , s = (r.onBlur,
                                            r.value,
                                            r.name,
                                            r.ref);
                                            a.invalid,
                                            a.isTouched,
                                            a.isDirty;
                                            return (0,
                                            p.jsx)(u.GL, {
                                                placeholderText: t.formatMessage({
                                                    defaultMessage: "Write a country here",
                                                    id: "label.Writeacountry"
                                                }),
                                                innerRef: s,
                                                selName: "country",
                                                dataCy: "country",
                                                api: null,
                                                label: "Country",
                                                validation: se("country"),
                                                source: "here-auth",
                                                sourceData: e.countries,
                                                onChange: function(e) {
                                                    e ? (n(e.value),
                                                    h(e.label)) : n("")
                                                },
                                                fullWidth: !0
                                            })
                                        }
                                    })]
                                }), (0,
                                p.jsx)(j.K, {
                                    fitX: !0,
                                    padding: !0,
                                    children: (0,
                                    p.jsx)(w.II, {
                                        name: "password",
                                        className: "input-s",
                                        "data-cy": "password",
                                        validation: se("password"),
                                        innerRef: X,
                                        fullWidth: !0,
                                        type: "password",
                                        showStrength: !0,
                                        label: t.formatMessage({
                                            defaultMessage: "Password",
                                            id: "Label.Password"
                                        })
                                    })
                                }), (0,
                                p.jsx)(j.K, {
                                    fitX: !0,
                                    wrap: !0,
                                    spacing: "none",
                                    direction: "horizontal",
                                    padding: !0,
                                    children: (0,
                                    p.jsx)(w.XZ, {
                                        name: "primary",
                                        "data-cy": "termsTick",
                                        labelColor: "dark",
                                        label: t.formatMessage({
                                            defaultMessage: "This is not a valid email address",
                                            id: "Text.RegisterTerms"
                                        }),
                                        onChange: function(e) {
                                            B(!e.currentTarget.checked),
                                            Y("lastName").catch((function(e) {
                                                console.log("ZZZ", e)
                                            }
                                            ))
                                        }
                                    })
                                }), (0,
                                p.jsx)(j.K, {
                                    fitX: !0,
                                    wrap: !0,
                                    spacing: "none",
                                    direction: "horizontal",
                                    padding: !0,
                                    children: (0,
                                    p.jsx)("div", {
                                        className: "w-full mx-auto mt-7",
                                        children: (0,
                                        p.jsx)(w.zx, {
                                            "data-cy": "createAccount",
                                            loading: V,
                                            type: "submit",
                                            color: "primary",
                                            disabled: R || !Q.isDirty || V || Object.keys(ne).length > 0 || Object.keys(Q.dirtyFields).length < 5,
                                            fullWidth: !0,
                                            children: (0,
                                            p.jsx)(S.Z, {
                                                id: "Button.Register"
                                            })
                                        }, String(!Q.isDirty))
                                    })
                                }), (0,
                                p.jsx)(j.K, {
                                    fitX: !0,
                                    wrap: !0,
                                    spacing: "none",
                                    direction: "horizontal",
                                    padding: !0,
                                    children: (0,
                                    p.jsx)(z, {})
                                }), (0,
                                p.jsxs)("div", {
                                    className: "flex items-center justify-center w-full pt-5 shadow-top-border min-tablet:hidden",
                                    children: [(0,
                                    p.jsx)("h4", {
                                        className: "pr-3 text-base font-semibold text-dark-500",
                                        children: t.formatMessage({
                                            defaultMessage: "Already have an account",
                                            id: "Text.HasAccount"
                                        })
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "text-center",
                                        children: (0,
                                        p.jsx)(D(), {
                                            href: "/auth/login",
                                            children: (0,
                                            p.jsx)("a", {
                                                className: "text-base font-semibold transition text-primary-500 hover:text-primary-500",
                                                children: t.formatMessage({
                                                    defaultMessage: "Login",
                                                    id: "Button.Login"
                                                })
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                })
            })
        }, X = r(75886), Y = r(80943), $ = r(24762);
        function Q(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function ee(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Q(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        J = "https://api.seeblindspot.com/v1";
        var te, re = [{
            value: "yes",
            label: "Yes"
        }, {
            value: "no",
            label: "No"
        }], ae = [{
            value: "address",
            label: "You can select your or your company's address from the drop down menu, just start typing something in."
        }, {
            value: "company",
            label: "This is required for our internal records. You can put in your EIN/TIN or any other way we can help identify your company for invoicing."
        }, {
            value: "vat",
            label: "If you're a European company and do not pay VAT, select no. Otherwise, select yes."
        }], ne = function() {
            var e, t = (0,
            C.Z)(), r = c.useState(!1), a = ((0,
            b.Z)(r, 1)[0],
            c.useState(!1)), n = (0,
            b.Z)(a, 2), s = n[0], l = n[1], d = N.Ry().shape({
                name: N.Z_().min(2, t.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                })).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                companyId: N.Z_().min(4, t.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "4"
                })).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                address: N.Ry().test("test-name", t.formatMessage({
                    defaultMessage: "The address you have entered is incorect",
                    id: "Error.addressincorect"
                }), (function(e) {
                    return !!e && (!!e.label && (!!e.locationId && (!!e.county && (!!e.latitude && !!e.longitude))))
                }
                )).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                }))
            }), m = (e = d,
            (0,
            c.useCallback)(function() {
                var t = (0,
                i.Z)(o().mark((function t(r) {
                    var a;
                    return o().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                e.validate(r, {
                                    abortEarly: !1
                                });
                            case 3:
                                return a = t.sent,
                                t.abrupt("return", {
                                    values: a,
                                    errors: {}
                                });
                            case 7:
                                return t.prev = 7,
                                t.t0 = t.catch(0),
                                t.abrupt("return", {
                                    values: {},
                                    errors: t.t0.inner.reduce((function(e, t) {
                                        var r;
                                        return ee(ee({}, e), {}, (0,
                                        g.Z)({}, t.path, {
                                            type: null !== (r = t.type) && void 0 !== r ? r : "validation",
                                            message: t.message
                                        }))
                                    }
                                    ), {})
                                });
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, 7]])
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(), [e])), f = (0,
            k.cI)({
                resolver: m,
                defaultValues: {
                    company: "",
                    address: {},
                    vat: "",
                    companyId: "",
                    additionalId: ""
                }
            }), h = f.register, x = f.handleSubmit, v = f.formState, y = (f.setValue,
            f.control), S = (0,
            O.useRouter)(), M = (0,
            E.q)().notify, Z = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return l(!0),
                                e.prev = 1,
                                e.next = 4,
                                X.F.registercompany(t);
                            case 4:
                                e.sent,
                                (0,
                                Y.ov)(),
                                S.push("/"),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(1),
                                M("Please try again later", "error", "top-right");
                            case 12:
                                l(!1);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 9]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), L = v.dirtyFields, T = v.errors, P = c.useState(t.formatMessage({
                defaultMessage: "Company ID",
                id: "label.CompanyID"
            })), I = (0,
            b.Z)(P, 2), D = I[0], F = I[1], R = function(e) {
                return {
                    isDirty: L[e],
                    error: T[e]
                }
            };
            return (0,
            p.jsxs)(A, {
                isRegister: !0,
                children: [(0,
                p.jsx)("form", {
                    onSubmit: x(Z),
                    children: (0,
                    p.jsx)(j.K, {
                        wrap: !0,
                        gravity: "center",
                        otherClass: "tablet:w-full min-tablet:pr-16",
                        children: (0,
                        p.jsx)("div", {
                            className: "md:max-w-screen-sm tablet:w-full",
                            children: (0,
                            p.jsxs)("div", {
                                className: "w-full px-10 py-10 overflow-auto bg-white dark:bg-dark-200 border-0 min-tablet:px-16 rounded-4xl min-tablet:max-h-100-36 tablet:rounded-b-none",
                                children: [(0,
                                p.jsx)(w.h4, {
                                    title: "Tell us a bit about your company "
                                }), (0,
                                p.jsx)(j.K, {
                                    fitX: !0,
                                    padding: !0,
                                    children: (0,
                                    p.jsx)(w.II, {
                                        name: "name",
                                        innerRef: h,
                                        validation: R("name"),
                                        type: "text",
                                        label: t.formatMessage({
                                            defaultMessage: "Company Name",
                                            id: "label.CompanyDetailsName"
                                        }),
                                        fullWidth: !0
                                    })
                                }), (0,
                                p.jsxs)(j.K, {
                                    otherClass: "relative",
                                    fitX: !0,
                                    padding: !0,
                                    zIndex: "z-30",
                                    children: [(0,
                                    p.jsx)(k.Qr, {
                                        control: y,
                                        name: "address",
                                        render: function(e, r) {
                                            var a = e.onChange;
                                            e.onBlur,
                                            e.value,
                                            e.name,
                                            e.ref,
                                            r.invalid,
                                            r.isTouched,
                                            r.isDirty;
                                            return (0,
                                            p.jsx)(u.GL, {
                                                placeholderText: t.formatMessage({
                                                    defaultMessage: "Write an address here",
                                                    id: "label.Writeanaddresshere"
                                                }),
                                                innerRef: h,
                                                selName: "address",
                                                api: null,
                                                label: "Address",
                                                validation: R("address"),
                                                source: "here",
                                                onChange: function(e) {
                                                    a(e),
                                                    "Romania" === e.country && F(t.formatMessage({
                                                        defaultMessage: "Company CUI",
                                                        id: "label.RoCif"
                                                    }))
                                                },
                                                fullWidth: !0
                                            })
                                        }
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "excl-mark pulse-disclaimer absolute right-3 cursor-pointer",
                                        "data-tip": !0,
                                        "data-for": "address",
                                        children: "i"
                                    })]
                                }), (0,
                                p.jsxs)(j.K, {
                                    otherClass: "relative",
                                    fitX: !0,
                                    spacing: "xl",
                                    padding: !0,
                                    zIndex: "z-20",
                                    children: [(0,
                                    p.jsx)(w.II, {
                                        name: "companyId",
                                        innerRef: h,
                                        validation: R("companyId"),
                                        type: "text",
                                        label: D,
                                        fullWidth: !0
                                    }), (0,
                                    p.jsx)(w.II, {
                                        name: "additionalId",
                                        innerRef: h,
                                        validation: R("additionalId"),
                                        type: "text",
                                        label: t.formatMessage({
                                            defaultMessage: "Additional Identification",
                                            id: "label.AdditionalInfo"
                                        }),
                                        fullWidth: !0
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "excl-mark pulse-disclaimer absolute right-3 cursor-pointer",
                                        "data-tip": !0,
                                        "data-for": "company",
                                        children: "i"
                                    })]
                                }), (0,
                                p.jsxs)(j.K, {
                                    otherClass: "relative",
                                    fitX: !0,
                                    padding: !0,
                                    children: [(0,
                                    p.jsx)(k.Qr, {
                                        control: y,
                                        name: "vat",
                                        render: function(e, r) {
                                            var a = e.onChange;
                                            e.onBlur,
                                            e.value,
                                            e.name,
                                            e.ref,
                                            r.invalid,
                                            r.isTouched,
                                            r.isDirty;
                                            return (0,
                                            p.jsx)(w.lq, {
                                                options: re,
                                                onChange: function(e) {
                                                    a(e.value)
                                                },
                                                placeholderText: t.formatMessage({
                                                    defaultMessage: "Vat",
                                                    id: "label.Vat"
                                                }),
                                                validation: R("vat"),
                                                isMulti: !1,
                                                fullWidth: !0,
                                                isClearable: !1,
                                                selName: "vat",
                                                label: "VAT"
                                            })
                                        }
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "excl-mark pulse-disclaimer absolute right-3 cursor-pointer",
                                        "data-tip": !0,
                                        "data-for": "vat",
                                        children: "i"
                                    })]
                                }), (0,
                                p.jsx)("div", {
                                    className: "flex items-center justify-center w-full pt-5 shadow-top-border",
                                    children: (0,
                                    p.jsx)("div", {
                                        className: "text-center",
                                        children: (0,
                                        p.jsx)(w.zx, {
                                            type: "submit",
                                            color: "primary",
                                            loading: s,
                                            fullWidth: !0,
                                            children: t.formatMessage({
                                                defaultMessage: "Create Company details",
                                                id: "Button.CreateCompanydetails"
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    })
                }), (0,
                p.jsx)("div", {
                    children: ae.map((function(e) {
                        return (0,
                        p.jsx)($.Z, {
                            id: e.value,
                            className: "custom-tooltip",
                            place: "left",
                            children: (0,
                            p.jsx)("div", {
                                className: "flex flex-col preview-media-tooltip",
                                children: (0,
                                p.jsx)("div", {
                                    className: "flex row-tooltip-container",
                                    children: (0,
                                    p.jsx)("span", {
                                        className: "onboarding-text-tooltip",
                                        children: e.label
                                    })
                                })
                            })
                        }, e.value)
                    }
                    ))
                })]
            })
        }, se = r(73935), ie = function(e) {
            var t = e.mainIcon
              , r = e.secondIcon
              , a = e.header
              , n = e.disclaimer
              , i = e.isFirstLandscape
              , l = e.noIcon
              , o = (0,
            m.f9)(te || (te = (0,
            s.Z)(["\n    w-60\n    text-center\n    z-100\n"])));
            (0,
            C.Z)();
            return (0,
            p.jsxs)("div", {
                className: "extra-disclaimer ".concat(o),
                children: [!l && (0,
                p.jsxs)("div", {
                    className: "flex justify-center",
                    children: [(0,
                    p.jsx)("img", {
                        src: t,
                        width: i ? "59" : "35",
                        height: i ? "36" : "35",
                        className: "mr-3"
                    }), (0,
                    p.jsx)("img", {
                        src: r,
                        width: i ? "35" : "59",
                        height: i ? "35" : "36",
                        className: ""
                    })]
                }) || (0,
                p.jsx)(p.Fragment, {}), (0,
                p.jsxs)("div", {
                    className: "z-100",
                    children: [(0,
                    p.jsx)("div", {
                        className: "text-black text-base font-bold pt-3 pb-2",
                        children: a
                    }), (0,
                    p.jsx)("div", {
                        className: "text-sm text-body",
                        children: n
                    })]
                })]
            })
        }, le = r(37486), oe = r.n(le), ce = r(35123), de = r(34768), ue = r(63259), me = {
            skinColor: ["Yellow", "Pale", "Light", "Tanned", "Brown", "DarkBrown", "Black"],
            topType: ["NoHair", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4", "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly", "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro", "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides", "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"],
            mouthType: ["Concerned", "Default", "Disbelief", "Eating", "Grimace", "Sad", "ScreamOpen", "Serious", "Smile", "Tongue", "Twinkle", "Vomit"],
            eyebrowType: ["Angry", "AngryNatural", "Default", "DefaultNatural", "FlatNatural", "RaisedExcited", "RaisedExcitedNatural", "SadConcerned", "SadConcernedNatural", "UnibrowNatural", "UpDown", "UpDownNatural"],
            accessoriesType: ["Blank", "Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers"],
            hairColor: ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "PastelPink", "Platinum", "Red", "SilverGray"],
            facialHairType: ["BeardLight", "BeardMajestic", "BeardMedium", "Blank", "MoustacheFancy", "MoustacheMagnum"],
            clotheType: ["BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"],
            clotheColor: ["Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White"],
            eyeType: ["Close", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side", "Squint", "Surprised", "Wink", "WinkWacky"]
        }, fe = ce.default.div.withConfig({
            displayName: "Avatar__OptionsContainer",
            componentId: "sc-8h92u6-0"
        })(["display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:10px;width:100%;"]), he = ce.default.div.withConfig({
            displayName: "Avatar__BrowseStyleContainer",
            componentId: "sc-8h92u6-1"
        })(["display:flex;flex-direction:column;justify-content:center;align-items:center;.BS-Label{font-weight:600;margin:0;font-size:15px;}.BS-Prev,.BS-Next{background:white;height:25px;border-radius:6px 0 0 6px;cursor:pointer;transition:all 0.1s linear;&:active{color:white;}}.BS-Next{border-radius:0 6px 6px 0;}.BS-Content{display:flex;background:white;border-radius:10px;}.BS-Counter{width:50px;font-weight:900;height:25px;display:flex;justify-content:center;align-items:center;font-size:14px;}"]), pe = ce.default.div.withConfig({
            displayName: "Avatar__BrowseStyleContainerDark",
            componentId: "sc-8h92u6-2"
        })(["display:flex;flex-direction:column;justify-content:center;align-items:center;.BS-Label{font-weight:600;color:#E4DEDE;margin:0;font-size:15px;}.BS-Prev,.BS-Next{background:#1A1A1A;height:25px;border-radius:6px 0 0 6px;cursor:pointer;transition:all 0.1s linear;color:#F64747;&:active{color:white;}}.BS-Next{border-radius:0 6px 6px 0;}.BS-Content{display:flex;background:#1A1A1A;border-radius:10px;}.BS-Counter{width:50px;font-weight:900;height:25px;display:flex;justify-content:center;align-items:center;font-size:14px;color:#E4DEDE;}"]), xe = function(e) {
            var t = (0,
            c.useState)(0)
              , r = t[0]
              , a = t[1]
              , n = c.useState(void 0)
              , s = (0,
            b.Z)(n, 2)
              , i = s[0]
              , l = s[1]
              , o = (0,
            c.useState)(0)
              , d = o[0]
              , u = o[1]
              , m = e.name
              , h = e.onChange
              , x = e.label
              , v = me[m];
            (0,
            c.useEffect)((function() {
                var t, r = localStorage.getItem("mode");
                r && l(r),
                u(v.length),
                t = e.starter ? v.indexOf(e.starter) : Math.floor(Math.random() * v.length),
                a(t),
                h(m, v[t])
            }
            ), []);
            var g = function() {
                var e = r;
                --e < 0 && (e = d - 1),
                a(e % d),
                h(m, v[e % d])
            }
              , y = function() {
                var e = r;
                ++e > d && (e = 0),
                a(e % d),
                h(m, v[e % d])
            };
            return "darkMode" !== i ? (0,
            p.jsxs)(he, {
                children: [(0,
                p.jsx)("p", {
                    className: "BS-Label",
                    children: x
                }), (0,
                p.jsxs)("div", {
                    className: "BS-Content",
                    children: [(0,
                    p.jsx)("div", {
                        className: "BS-Prev",
                        onClick: function() {
                            return g()
                        },
                        children: (0,
                        p.jsx)(f.$3, {
                            set: "bold"
                        })
                    }), (0,
                    p.jsxs)("div", {
                        className: "BS-Counter",
                        children: [r + 1, " / ", d]
                    }), (0,
                    p.jsx)("div", {
                        className: "BS-Next",
                        onClick: function() {
                            return y()
                        },
                        children: (0,
                        p.jsx)(f.MG, {
                            set: "bold"
                        })
                    })]
                })]
            }) : (0,
            p.jsxs)(pe, {
                children: [(0,
                p.jsx)("p", {
                    className: "BS-Label",
                    children: x
                }), (0,
                p.jsxs)("div", {
                    className: "BS-Content",
                    children: [(0,
                    p.jsx)("div", {
                        className: "BS-Prev",
                        onClick: function() {
                            return g()
                        },
                        children: (0,
                        p.jsx)(f.$3, {
                            set: "bold"
                        })
                    }), (0,
                    p.jsxs)("div", {
                        className: "BS-Counter",
                        children: [r + 1, " / ", d]
                    }), (0,
                    p.jsx)("div", {
                        className: "BS-Next",
                        onClick: function() {
                            return y()
                        },
                        children: (0,
                        p.jsx)(f.MG, {
                            set: "bold"
                        })
                    })]
                })]
            })
        }, ve = function(e) {
            return e[Math.floor(Math.random() * e.length)]
        }, ge = function(e) {
            var t = JSON.stringify({
                avatarStyle: "Circle",
                topType: ve(me.topType),
                accessoriesType: ve(me.accessoriesType),
                hairColor: ve(me.hairColor),
                facialHairType: ve(me.facialHairType),
                clotheType: ve(me.clotheType),
                clotheColor: ve(me.clotheColor),
                eyeType: ve(me.eyeType),
                eyebrowType: ve(me.eyebrowType),
                mouthType: ve(me.mouthType),
                skinColor: ve(me.skinColor)
            })
              , r = e.width
              , a = void 0 === r ? "150px" : r
              , n = e.height
              , s = void 0 === n ? "150px" : n
              , l = e.edit
              , d = e.starter || t
              , u = (0,
            c.useState)(!1)
              , m = u[0]
              , h = (u[1],
            (0,
            c.useState)(!1))
              , x = h[0]
              , v = h[1]
              , g = JSON.parse(d)
              , b = (0,
            E.q)()
              , y = b.notify
              , j = b.setReloadJwt
              , k = b.reloadJwt;
            g.avatarStyle = "Circle";
            var N = (0,
            c.useState)(g)
              , C = N[0]
              , S = N[1]
              , M = (e.classes,
            function(e, t) {
                var r = Object.assign({}, C);
                r[e] = t,
                S(r)
            }
            )
              , Z = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                L.FT.saveAvatar(JSON.stringify(C));
                            case 3:
                                t = e.sent,
                                L.CR.setJwt(t.data.data.token),
                                y("Avatar saved succesfuly", "success"),
                                j(k + 1),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                y((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) || "Please try again later", "error");
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            p.jsxs)("div", {
                className: "relative flex flex-col items-center justify-center",
                children: [(0,
                p.jsxs)("div", {
                    className: "relative",
                    children: [(0,
                    p.jsx)(oe(), {
                        style: {
                            width: a,
                            height: s
                        },
                        avatarStyle: C.avatarStyle,
                        topType: C.topType,
                        accessoriesType: C.accessoriesType,
                        hairColor: C.hairColor,
                        facialHairType: C.facialHairType,
                        clotheType: C.clotheType,
                        clotheColor: C.clotheColor,
                        eyeType: C.eyeType,
                        eyebrowType: C.eyebrowType,
                        mouthType: C.mouthType,
                        skinColor: C.skinColor
                    }, "basic_profile"), (0,
                    p.jsx)("div", {
                        className: "absolute bottom-0 right-0",
                        children: l && (0,
                        p.jsx)(ue.Z, {
                            color: x ? "primary" : "secondary",
                            "aria-label": "Edit",
                            className: "w-8 h-8 md:w-11 md:h-11",
                            onClick: function() {
                                v(!x)
                            },
                            children: x ? (0,
                            p.jsx)(f.vw, {
                                set: "light"
                            }) : (0,
                            p.jsx)(f.I8, {
                                set: "light"
                            })
                        })
                    })]
                }), l && (0,
                p.jsx)("div", {
                    className: "w-full mx-auto avatar-customize",
                    children: (0,
                    p.jsxs)(de.Z, {
                        style: {
                            background: "transparent",
                            border: 0,
                            boxShadow: "none"
                        },
                        expanded: x,
                        onChange: function(e, t) {
                            v(t)
                        },
                        children: [(0,
                        p.jsx)("div", {
                            style: {
                                display: "none"
                            },
                            "aria-controls": "panel1a-content",
                            id: "panel1a-header"
                        }), (0,
                        p.jsx)("div", {
                            className: "py-5",
                            children: (0,
                            p.jsxs)(fe, {
                                children: [(0,
                                p.jsx)(xe, {
                                    name: "skinColor",
                                    label: "Skin",
                                    onChange: M,
                                    starter: g.skinColor
                                }), (0,
                                p.jsx)(xe, {
                                    name: "topType",
                                    label: "Hair style",
                                    onChange: M,
                                    starter: g.topType
                                }), (0,
                                p.jsx)(xe, {
                                    name: "accessoriesType",
                                    label: "Accessories",
                                    onChange: M,
                                    starter: g.accessoriesType
                                }), (0,
                                p.jsx)(xe, {
                                    name: "hairColor",
                                    label: "Hair color",
                                    onChange: M,
                                    starter: g.hairColor
                                }), (0,
                                p.jsx)(xe, {
                                    name: "eyeType",
                                    label: "Eyes",
                                    onChange: M,
                                    starter: g.eyeType
                                }), (0,
                                p.jsx)(xe, {
                                    name: "eyebrowType",
                                    label: "Eyebrows",
                                    onChange: M,
                                    starter: g.eyebrowType
                                }), (0,
                                p.jsx)(xe, {
                                    name: "mouthType",
                                    label: "Mouth",
                                    onChange: M,
                                    starter: g.mouthType
                                }), (0,
                                p.jsx)(xe, {
                                    name: "facialHairType",
                                    label: "Facial hair",
                                    onChange: M,
                                    starter: g.facialHairType
                                }), (0,
                                p.jsx)(xe, {
                                    name: "clotheType",
                                    label: "Clothes",
                                    onChange: M,
                                    starter: g.clotheType
                                }), (0,
                                p.jsx)(xe, {
                                    name: "clotheColor",
                                    label: "Clothes color",
                                    onChange: M,
                                    starter: g.clotheColor
                                })]
                            })
                        }), (0,
                        p.jsx)("div", {
                            className: "flex items-center justify-center w-full pb-5 mx-auto",
                            children: (0,
                            p.jsx)(w.zx, {
                                loading: m,
                                onClick: function() {
                                    return Z()
                                },
                                children: "Update avatar"
                            })
                        })]
                    })
                })]
            })
        }, be = r(99490), ye = r(92105), je = r.n(ye), we = function(e) {
            var t = e.closeAction
              , r = c.useState(null)
              , a = (0,
            b.Z)(r, 2)
              , n = a[0]
              , s = a[1]
              , l = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                X.F.getNotificationsAll();
                            case 2:
                                t = e.sent,
                                s(t.notifications);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            c.useEffect)((function() {
                l()
            }
            ), []),
            (0,
            p.jsxs)("div", {
                className: "absolute z-0 max-lg:z-100 p-6 pr-2 bg-white dark:bg-dark-200 border dark:border-2 dark:border-dark-default h-80vh top-8 max-lg:right-0 max-lg:left-2 max-lg:top-30 rounded-2xl w-72 flex flex-col notifications-container-with",
                children: [(0,
                p.jsxs)("div", {
                    className: "flex flex-row w-full justify-between items-center mb-4 relative",
                    children: [(0,
                    p.jsx)("h1", {
                        className: "text-black dark:text-white break-words",
                        children: "Notifications"
                    }), (0,
                    p.jsxs)("button", {
                        onClick: t,
                        "data-cy": "popClose",
                        className: "absolute px-3 py-3 transition duration-300 bg-white rounded-full -right-7 -top-9 md:px-2 md:py-2 dark:border-2 border-2 dark:border-dark-default dark:bg-dark-200 z-99999  hover:rotate-180",
                        children: [(0,
                        p.jsx)("svg", {
                            className: "dark:hidden",
                            width: "15",
                            height: "15",
                            viewBox: "0 0 30 30",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            p.jsx)("path", {
                                d: "M8.98959 9.01041L21.0104 21.0312M21.0104 9.01041L8.98959 21.0312",
                                stroke: "#858D96",
                                strokeWidth: "2.5",
                                strokeLinecap: "round"
                            })
                        }), (0,
                        p.jsx)("svg", {
                            className: "hidden dark:block",
                            width: "15",
                            height: "15",
                            viewBox: "0 0 30 30",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            p.jsx)("path", {
                                d: "M8.98959 9.01041L21.0104 21.0312M21.0104 9.01041L8.98959 21.0312",
                                stroke: "#E4DEDE",
                                strokeWidth: "2.5",
                                strokeLinecap: "round"
                            })
                        })]
                    })]
                }), (0,
                p.jsxs)("div", {
                    className: "mt-2 overflow-auto pr-4",
                    children: [n && n.map((function(e, t) {
                        return (0,
                        p.jsxs)("div", {
                            className: "flex flex-row ".concat(t !== n.length - 1 ? "border-b dark:border-bordercolor dark:border-opacity-20 pb-4 mb-4" : "", " "),
                            children: [(0,
                            p.jsx)("div", {
                                className: "w-2/12",
                                children: (0,
                                p.jsx)("img", {
                                    src: "/noti-icons/".concat((r = e.type,
                                    r.split("-").map((function(e) {
                                        return e.charAt(0).toUpperCase() + e.slice(1)
                                    }
                                    )).join(" ")).replace(/\s/g, ""), ".svg")
                                })
                            }), (0,
                            p.jsxs)("div", {
                                className: "flex flex-col w-10/12 pl-2 md:pl-0",
                                children: [(0,
                                p.jsxs)("div", {
                                    className: "flex flex-row items-center justify-between flex-wrap",
                                    children: [(0,
                                    p.jsx)("h3", {
                                        className: "text-md text-dark-500 font-semibold dark:text-dark-400",
                                        children: e.content.title
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "flex flex-row items-center",
                                        children: [(0,
                                        p.jsx)("p", {
                                            className: "text-xs text-dark-500 dark:text-dark-300 text-right",
                                            children: (0,
                                            p.jsx)(d.qp, {
                                                label: !1,
                                                time: be.ou.fromISO(e.createdAt).toMillis()
                                            })
                                        }), e.viewed <= e.target_view + 1 && (0,
                                        p.jsx)("div", {
                                            className: "unread-notification ml-2"
                                        })]
                                    })]
                                }), (0,
                                p.jsx)("p", {
                                    className: "text-sm dark:text-dark-400 text-left",
                                    children: e.content.content
                                })]
                            })]
                        }, t);
                        var r
                    }
                    )), n && 0 === n.length && (0,
                    p.jsxs)("div", {
                        className: "flex flex-row border-b dark:border-bordercolor dark:border-opacity-20 pb-4 mb-4",
                        children: [(0,
                        p.jsx)("div", {
                            className: "w-2/12",
                            children: (0,
                            p.jsx)("img", {
                                src: "/noti-icons/GeneralSuccess.svg"
                            })
                        }), (0,
                        p.jsxs)("div", {
                            className: "flex flex-col w-10/12 pl-2 md:pl-0",
                            children: [(0,
                            p.jsx)("div", {
                                className: "flex flex-row items-center justify-between flex-wrap",
                                children: (0,
                                p.jsx)("h3", {
                                    className: "text-md text-dark-500 font-semibold dark:text-dark-400",
                                    children: "No News is Good News"
                                })
                            }), (0,
                            p.jsxs)("p", {
                                className: "text-sm dark:text-dark-400 text-left",
                                children: ["You don't have any notifications at this time. Check back later to see if there are any updates.", " ", (0,
                                p.jsx)("br", {}), " If you have any questions, please don't hesitate to contact us. Thank you for using our app!"]
                            })]
                        })]
                    }), !n && (0,
                    p.jsxs)("div", {
                        className: "flex flex-col dark:border-grey-default pb-2 mb-4",
                        children: [(0,
                        p.jsxs)("div", {
                            className: "flex flex-row items-start mb-2",
                            children: [(0,
                            p.jsx)("div", {
                                className: "w-2/12",
                                children: (0,
                                p.jsx)("div", {
                                    className: "flex items-start justify-start w-12 h-12 dark:bg-dark-400 bg-dark-300 dark:bg-opacity-10 bg-opacity-30 rounded-full flex-shrink-0"
                                })
                            }), (0,
                            p.jsxs)("div", {
                                className: "w-10/12 flex flex-col items-end",
                                children: [(0,
                                p.jsxs)("div", {
                                    className: "flex flex-row w-full mb-3 justify-between",
                                    children: [(0,
                                    p.jsx)("p", {
                                        className: "text-xs text-transparent dark:bg-dark-400 bg-dark-300 dark:bg-opacity-10 bg-opacity-30 rounded-xl text-right w-8/12 float-right",
                                        children: "a"
                                    }), (0,
                                    p.jsx)("h3", {
                                        className: "text-sm font-bold text-transparent dark:bg-dark-400 bg-dark-300 dark:bg-opacity-10 bg-opacity-30 rounded-xl w-2/12",
                                        children: "a"
                                    })]
                                }), (0,
                                p.jsx)("p", {
                                    className: "text-sm text-transparent dark:bg-dark-400 bg-dark-300 dark:bg-opacity-10 bg-opacity-30 rounded-xl mb-2 w-full",
                                    children: "a"
                                }), (0,
                                p.jsx)("p", {
                                    className: "text-sm text-transparent dark:bg-dark-400 bg-dark-300 dark:bg-opacity-10 bg-opacity-30 rounded-xl mb-2 w-full",
                                    children: "a"
                                })]
                            })]
                        }), (0,
                        p.jsx)("div", {
                            className: "flex flex-col items-center",
                            children: (0,
                            p.jsx)(je(), {
                                color: "#C1C5CA",
                                size: 6,
                                loading: !0
                            })
                        })]
                    })]
                })]
            })
        };
        we.defaultProps = {};
        var ke, Ne, Ce, Se, Me, Ze, Oe, Le, Te, Ee, Pe, Ie, De, Fe, Re, Be, Ae, We = we, Ve = r(72757), He = r(10742), ze = function() {
            var e = c.useState(!1)
              , t = (0,
            b.Z)(e, 2)
              , r = t[0]
              , a = t[1]
              , n = c.useState(!1)
              , l = (0,
            b.Z)(n, 2)
              , d = l[0]
              , u = l[1]
              , h = c.useState(!1)
              , x = (0,
            b.Z)(h, 2)
              , v = x[0]
              , g = x[1]
              , y = c.useState()
              , j = (0,
            b.Z)(y, 2)
              , k = j[0]
              , N = j[1]
              , C = c.useState(!1)
              , S = (0,
            b.Z)(C, 2)
              , M = S[0]
              , Z = S[1]
              , T = c.useState(!1)
              , P = (0,
            b.Z)(T, 2)
              , I = P[0]
              , F = P[1]
              , R = c.useState(JSON.parse(String(localStorage.getItem("swNotifi"))) ? JSON.parse(String(localStorage.getItem("swNotifi"))).count : 0)
              , B = (0,
            b.Z)(R, 2)
              , A = B[0]
              , W = B[1]
              , H = (0,
            Ve.l)()
              , z = (0,
            E.q)()
              , _ = (z.notify,
            z.setReloadJwt)
              , G = z.reloadJwt
              , q = c.useRef(null)
              , J = (0,
            O.useRouter)();
            c.useEffect((function() {
                g(!0)
            }
            ), []),
            c.useEffect((function() {
                I || K()
            }
            ), [I]),
            c.useEffect((function() {
                "1" !== (0,
                U.parseCookies)().invalid_payment_methods ? Z(!1) : Z(!0)
            }
            ), [(0,
            U.parseCookies)()]);
            var K = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t, r, a, n, s;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = JSON.parse(String(localStorage.getItem("swNotifi"))),
                                r = new Date,
                                !t) {
                                    e.next = 14;
                                    break
                                }
                                if (!(r.getTime() >= t.delayTimer)) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 6,
                                L.FT.getNotificationsNew();
                            case 6:
                                a = e.sent,
                                W(a.notifications_count),
                                setTimeout((function() {
                                    a.notifications.forEach((function(e) {
                                        H.open(e)
                                    }
                                    ));
                                    var e = {
                                        count: a.notifications_count,
                                        delayTimer: r.getTime() + 6e4
                                    };
                                    localStorage.setItem("swNotifi", JSON.stringify(e))
                                }
                                ), 5e3),
                                e.next = 12;
                                break;
                            case 11:
                                W(0);
                            case 12:
                                e.next = 20;
                                break;
                            case 14:
                                return e.next = 16,
                                L.FT.getNotificationsNew();
                            case 16:
                                n = e.sent,
                                W(n.notifications_count),
                                s = {
                                    count: n.notifications_count,
                                    delayTimer: r.getTime() + 6e4
                                },
                                localStorage.setItem("swNotifi", JSON.stringify(s));
                            case 20:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            c.useEffect((function() {
                var e = L.CR.getJwtUser();
                if (L.CR.getJwtUser()) {
                    !e.extra || !0 !== e.emailValidation || 0 !== Object.keys(e.extra).length && !1 !== e.extra.hasOnboarding || a(!0);
                    var t = {
                        firstName: L.CR.getJwtUser().firstName,
                        lastName: L.CR.getJwtUser().lastName
                    };
                    N(t)
                }
            }
            ), []),
            (0,
            c.useEffect)((function() {
                var e = L.CR.getJwtUser();
                if (L.CR.getJwtUser()) {
                    !e.extra || !0 !== e.emailValidation || 0 !== Object.keys(e.extra).length && !1 !== e.extra.hasOnboarding ? a(!1) : a(!0);
                    var t = {
                        firstName: L.CR.getJwtUser().firstName,
                        lastName: L.CR.getJwtUser().lastName
                    };
                    N(t)
                }
            }
            ), [G]),
            (0,
            c.useEffect)((function() {
                !de && r && (0,
                Y.n2)("0")
            }
            ), [r]);
            var X = (0,
            m.f9)(ke || (ke = (0,
            s.Z)(["\n  fixed\n  left-0\n  z-50 lg:z-101\n  w-full lg:w-36\n  h-full \n  transition-all duration-300 ease-in-out\n  ", "\n  "])), d ? "is-open w-full lg:w-72  h-full menu-opened" : "max-lg:opacity-0 max-lg:z-1")
              , Q = (0,
            m.f9)(Ne || (Ne = (0,
            s.Z)(["\n  w-full\n  "])))
              , ee = (0,
            m.f9)(Ce || (Ce = (0,
            s.Z)(["\n    menu-header\n    pb-4\n    uppercase\n    text-grey-200\n    dark:text-dark-400\n    text-xs\n    font-semibold\n    ", "\n  "])), d ? "" : " lg:text-center")
              , te = (0,
            m.f9)(Se || (Se = (0,
            s.Z)(["\n  flex\n  items-center\n  ", "\n  "])), d ? "justify-start" : "lg:justify-center")
              , re = (0,
            m.f9)(Me || (Me = (0,
            s.Z)(["\n    text-body\n    font-semibold\n    transition-all duration-300 ease-in-out\n    ", "\n  "])), d ? "text-base" : "lg:text-zero")
              , ae = (0,
            m.f9)(Ze || (Ze = (0,
            s.Z)(["\n    p-3 pl-0 lg:pl-3\n    rounded-2xl\n    transition-all duration-300 ease-in-out\n    hover:bg-dark-default hover:bg-opacity-5\n    dark:hover:bg-dark-300 dark:hover:bg-opacity-5\n  "])))
              , ne = function(e) {
                if (e.stopPropagation(),
                d) {
                    var t = se.findDOMNode(q.current);
                    t && t.contains(e.target) || function(e) {
                        e.stopPropagation(),
                        u((function(e) {
                            return !e
                        }
                        ))
                    }(e)
                }
            };
            c.useEffect((function() {
                return window.addEventListener("click", ne),
                function() {
                    window.removeEventListener("click", ne)
                }
            }
            ));
            var le = (0,
            He.ZP)()
              , oe = le.setState
              , ce = le.state
              , de = ce.run
              , ue = (ce.tourActive,
            ce.steps)
              , me = ce.stepIndex
              , fe = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return a(!1),
                                (0,
                                Y.T0)("0"),
                                e.next = 4,
                                L.FT.updateOnboarding({
                                    sw: !0
                                });
                            case 4:
                                !0 === (t = e.sent).hasError ? a(!0) : t.token && (L.CR.setJwt(t.token),
                                _(G + 1));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            p.jsx)(p.Fragment, {
                children: (0,
                p.jsxs)("div", {
                    className: (0,
                    m.f9)(Oe || (Oe = (0,
                    s.Z)(["", " menu-container"])), d ? "menu-opened" : ""),
                    ref: q,
                    children: [(0,
                    p.jsx)("div", {
                        className: "menu-mobile-container absolute w-12 h-12 z-101 shadow-menuBtn border toggle-button rounded-half border-bordercolor dark:border-dark-700 dark:bg-dark-700 bg-white top-5 right-5  lg:hidden ".concat(d ? "opened" : ""),
                        onClick: function() {
                            u(!d)
                        },
                        children: (0,
                        p.jsx)("label", {
                            className: "menu-mobile-icon",
                            children: (0,
                            p.jsx)("div", {
                                className: "menu-mobile"
                            })
                        })
                    }), (0,
                    p.jsxs)("div", {
                        className: (0,
                        m.f9)(Le || (Le = (0,
                        s.Z)(["fixed main-menu ", ""])), X),
                        children: [!de && r && (0,
                        p.jsx)("div", {
                            className: "absolute top-24 left-full z-110 fadeInRight onboarding-switch-mobile",
                            children: (0,
                            p.jsxs)("div", {
                                className: "flex flex-row",
                                children: [(0,
                                p.jsx)("img", {
                                    className: "ml-4 w-28",
                                    src: "/images/arrow-referral.svg"
                                }), (0,
                                p.jsxs)("div", {
                                    className: "dark:bg-dark-200 bg-white whitespace-nowrap w-full flex flex-col items-center relative p-6 font-semibold rounded-2xl h-full -mb-16  ml-6 text-accent-500 box-shadow-container-light dark:dark-shadow",
                                    children: [(0,
                                    p.jsx)("span", {
                                        children: "Welcome to the Blindspot portal."
                                    }), (0,
                                    p.jsx)("span", {
                                        className: "dark:text-dark-400 text-dark-200 mt-2 font-normal",
                                        children: "Are you ready to put your ideas on almost any digital billboard on Earth?"
                                    }), (0,
                                    p.jsx)("span", {
                                        className: "dark:text-dark-400 text-dark-200 mt-2 font-normal",
                                        children: "We've prepared a guided tour to help you create your campaign in just 5 minutes."
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "w-full mt-4 flex flex-row items-center justify-between gap-2",
                                        children: [(0,
                                        p.jsx)(w.zx, {
                                            buttonSize: "sm",
                                            onClick: fe,
                                            fill: "outline",
                                            children: "Skip the tour"
                                        }), (0,
                                        p.jsx)(w.zx, {
                                            buttonSize: "sm",
                                            onClick: function() {
                                                J.push("/"),
                                                setTimeout((function() {
                                                    oe({
                                                        run: !0,
                                                        tourActive: !0,
                                                        stepIndex: me,
                                                        steps: ue
                                                    })
                                                }
                                                ), 600)
                                            },
                                            children: "Let's Start"
                                        })]
                                    })]
                                })]
                            })
                        }), (0,
                        p.jsxs)("div", {
                            className: "absolute z-50 hidden p-3 bg-white border dark:bg-dark-200 toggle-button rounded-half border-bordercolor dark:border-primarydark-600 top-52 -right-5 lg:block",
                            onClick: function() {
                                u(!d)
                            },
                            children: [(0,
                            p.jsx)("a", {
                                className: "hidden cursor-pointer dark:block",
                                children: (0,
                                p.jsx)(f._Q, {
                                    set: "light",
                                    primaryColor: "#E4DEDE",
                                    size: "small"
                                })
                            }), (0,
                            p.jsx)("a", {
                                className: "cursor-pointer dark:hidden",
                                children: (0,
                                p.jsx)(f._Q, {
                                    set: "light",
                                    primaryColor: "#858D96",
                                    size: "small"
                                })
                            })]
                        }), I && (0,
                        p.jsx)(We, {
                            closeAction: function() {
                                return F(!1)
                            }
                        }), (0,
                        p.jsxs)("div", {
                            className: "flex h-screen menu-holder dark:bg-dark-200",
                            children: [(0,
                            p.jsx)("div", {
                                className: "border-t-0 border-b border-l-0 border-r-0 logo border-bordercolor dark:border-bordercolordark",
                                children: (0,
                                p.jsx)(D(), {
                                    href: "/",
                                    prefetch: !1,
                                    children: (0,
                                    p.jsxs)("a", {
                                        className: "box-content block w-24 px-0 m-auto text-center max-lg:px-9 max-lg:mx-0",
                                        children: [(0,
                                        p.jsx)("img", {
                                            src: "/images/logo-blindspot.svg",
                                            width: "280",
                                            height: "115",
                                            alt: "Blindspot",
                                            className: "block pt-10 dark:hidden"
                                        }), (0,
                                        p.jsx)("img", {
                                            src: "/images/logo-blindspot-darkmode.svg",
                                            width: "280",
                                            height: "115",
                                            alt: "Blindspot",
                                            className: "hidden block pt-10 dark:inline-flex"
                                        }), (0,
                                        p.jsxs)("div", {
                                            className: "flex flex-row pb-10 flex-nowrap item-center",
                                            children: [(0,
                                            p.jsx)("div", {
                                                className: "flex items-center",
                                                children: (0,
                                                p.jsx)("p", {
                                                    className: "pr-1 formerly",
                                                    children: "Formerly"
                                                })
                                            }), (0,
                                            p.jsx)("div", {
                                                children: (0,
                                                p.jsx)("img", {
                                                    src: "/images/logo-tps.png",
                                                    width: "280",
                                                    alt: "TPSEngage",
                                                    className: "block"
                                                })
                                            })]
                                        })]
                                    })
                                })
                            }), (0,
                            p.jsxs)("div", {
                                className: "flex flex-col justify-between flex-1 p-9 adjust-menu-alert no-scrollbar",
                                children: [(0,
                                p.jsxs)("div", {
                                    className: "flex flex-col items-center max-lg:flex-row menu-avatar",
                                    children: [(0,
                                    p.jsxs)("div", {
                                        className: "relative pb-3 avatar",
                                        children: [(0,
                                        p.jsx)(ge, {
                                            edit: !1,
                                            width: "68px",
                                            height: "68px",
                                            starter: L.CR.getJwtUser().avatar || "{}"
                                        }, "menu_".concat(G)), M && (0,
                                        p.jsxs)(p.Fragment, {
                                            children: [(0,
                                            p.jsx)("div", {
                                                className: "absolute cursor-pointer excl-mark pulse-disclaimer -top-1 -right-1",
                                                "data-tip": !0,
                                                "data-for": "profile-alert",
                                                children: (0,
                                                p.jsx)(D(), {
                                                    href: "/profile/payment",
                                                    prefetch: !1,
                                                    children: (0,
                                                    p.jsx)("div", {
                                                        className: "w-full h-full",
                                                        children: "!"
                                                    })
                                                })
                                            }), (0,
                                            p.jsx)($.Z, {
                                                id: "profile-alert",
                                                place: "right",
                                                className: "custom-tooltip z-101",
                                                children: (0,
                                                p.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center preview-media-tooltip",
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "mb-1",
                                                        children: "We have updated our payment processing partner."
                                                    }), (0,
                                                    p.jsx)("div", {
                                                        children: "You'll have to resubmit your payment method in order to start your campaigns."
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "text-center max-lg:text-left",
                                        children: [k ? (0,
                                        p.jsxs)("div", {
                                            className: "font-bold text-black dark:text-white name",
                                            children: [(0,
                                            p.jsx)("span", {
                                                children: k.firstName
                                            }), (0,
                                            p.jsx)("span", {
                                                className: (0,
                                                m.f9)(Te || (Te = (0,
                                                s.Z)(["pl-2 ", ""])), d ? "inline" : "lg:hidden"),
                                                children: k.lastName
                                            })]
                                        }) : "", (0,
                                        p.jsx)(D(), {
                                            href: "/profile/basic",
                                            prefetch: !1,
                                            children: (0,
                                            p.jsxs)("a", {
                                                className: "text-sm font-semibold underline text-primary-500",
                                                children: [(0,
                                                p.jsx)("span", {
                                                    className: "hidden display-on-extended",
                                                    children: "View "
                                                }), "Profile"]
                                            })
                                        })]
                                    })]
                                }), (0,
                                p.jsx)("div", {
                                    className: (0,
                                    m.f9)(Ee || (Ee = (0,
                                    s.Z)(["", " w-full footer-menu py-4 mb-4 max-lg:mb-0  border-bordercolor dark:border-bordercolordark  border-b max-lg:border-b-0 flex items-center "])), d ? "justify-start" : "justify-center"),
                                    children: (0,
                                    p.jsx)("ul", {
                                        className: "".concat(d ? "w-full" : "", " items-center"),
                                        children: (0,
                                        p.jsx)("li", {
                                            "data-tip": !0,
                                            "data-for": "notifications",
                                            "data-cy": "menuNotifications",
                                            className: "cursor-pointer",
                                            onClick: function() {
                                                F(!I)
                                            },
                                            children: (0,
                                            p.jsxs)("div", {
                                                className: "relative flex flex-row items-center ".concat(d ? "justify-start" : "justify-center", " hover:bg-dark-300 hover:bg-opacity-10 rounded-xl ").concat(I || A > 0 ? "bg-dark-300 bg-opacity-10" : ""),
                                                children: [(0,
                                                p.jsxs)("div", {
                                                    className: "pt-0 min-tablet:p-3",
                                                    children: [I ? (0,
                                                    p.jsxs)("svg", {
                                                        className: "hidden dark:block",
                                                        width: "30",
                                                        height: "30",
                                                        viewBox: "0 0 30 30",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0,
                                                        p.jsx)("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M14.3765 2.5C8.74357 2.5 6.29606 7.75833 6.29606 11.2355C6.29606 13.8326 6.66058 13.069 5.26727 16.2384C3.56278 20.7542 10.4112 22.6008 14.374 22.6008C18.3367 22.6008 25.1852 20.7542 23.4832 16.2384C22.0886 13.069 22.4544 13.8326 22.4544 11.2355C22.4544 7.75833 20.0057 2.5 14.3752 2.5L14.3765 2.5Z",
                                                            fill: "#F64747",
                                                            fillOpacity: "0.44",
                                                            stroke: "#F64747",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0,
                                                        p.jsx)("path", {
                                                            d: "M17.3088 26.0713C15.6653 27.9651 13.101 27.9873 11.4409 26.0713",
                                                            stroke: "#F64747",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })]
                                                    }) : (0,
                                                    p.jsxs)("svg", {
                                                        className: "hidden dark:block",
                                                        width: "30",
                                                        height: "30",
                                                        viewBox: "0 0 30 30",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0,
                                                        p.jsx)("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M14.3765 2.5C8.74357 2.5 6.29606 7.75833 6.29606 11.2355C6.29606 13.8326 6.66058 13.069 5.26727 16.2384C3.56278 20.7542 10.4112 22.6008 14.374 22.6008C18.3367 22.6008 25.1852 20.7542 23.4832 16.2384C22.0886 13.069 22.4544 13.8326 22.4544 11.2355C22.4544 7.75833 20.0057 2.5 14.3752 2.5L14.3765 2.5Z",
                                                            stroke: "#E4DEDE",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0,
                                                        p.jsx)("path", {
                                                            d: "M17.3088 26.0713C15.6653 27.9651 13.101 27.9873 11.4409 26.0713",
                                                            stroke: "#E4DEDE",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })]
                                                    }), I ? (0,
                                                    p.jsxs)("svg", {
                                                        className: "block dark:hidden",
                                                        width: "30",
                                                        height: "30",
                                                        viewBox: "0 0 30 30",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0,
                                                        p.jsx)("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M14.3765 2.5C8.74357 2.5 6.29606 7.75833 6.29606 11.2355C6.29606 13.8326 6.66058 13.069 5.26727 16.2384C3.56278 20.7542 10.4112 22.6008 14.374 22.6008C18.3367 22.6008 25.1852 20.7542 23.4832 16.2384C22.0886 13.069 22.4544 13.8326 22.4544 11.2355C22.4544 7.75833 20.0057 2.5 14.3752 2.5L14.3765 2.5Z",
                                                            fill: "#FF9800",
                                                            fillOpacity: "0.44",
                                                            stroke: "#FF9800",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0,
                                                        p.jsx)("path", {
                                                            d: "M17.3088 26.0713C15.6653 27.9651 13.101 27.9873 11.4409 26.0713",
                                                            stroke: "#FF9800",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })]
                                                    }) : (0,
                                                    p.jsxs)("svg", {
                                                        className: "dark dark:hidden",
                                                        width: "30",
                                                        height: "30",
                                                        viewBox: "0 0 30 30",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0,
                                                        p.jsx)("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M14.3765 2.5C8.74357 2.5 6.29606 7.75833 6.29606 11.2355C6.29606 13.8326 6.66058 13.069 5.26727 16.2384C3.56278 20.7542 10.4112 22.6008 14.374 22.6008C18.3367 22.6008 25.1852 20.7542 23.4832 16.2384C22.0886 13.069 22.4544 13.8326 22.4544 11.2355C22.4544 7.75833 20.0057 2.5 14.3752 2.5L14.3765 2.5Z",
                                                            stroke: "#858D96",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }), (0,
                                                        p.jsx)("path", {
                                                            d: "M17.3088 26.0713C15.6653 27.9651 13.101 27.9873 11.4409 26.0713",
                                                            stroke: "#858D96",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })]
                                                    })]
                                                }), A > 0 && (0,
                                                p.jsx)("div", {
                                                    className: "absolute flex items-center justify-center w-5 h-5 text-sm font-semibold text-white rounded-full -top-2 -right-2 bg-primary-500 bg-opacity-80",
                                                    children: A
                                                }), d && (0,
                                                p.jsx)("p", {
                                                    className: "".concat(re, " ").concat(I ? "dark:text-white text-dark-200" : "dark:text-dark-400 text-dark", " font-semibold text-black dark:text-white pr-3"),
                                                    children: "Notifications"
                                                })]
                                            })
                                        })
                                    })
                                }), (0,
                                p.jsxs)("div", {
                                    className: (0,
                                    m.f9)(Pe || (Pe = (0,
                                    s.Z)(["menu-items dark:menu-items-dark ", ""])), Q),
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: ee,
                                        children: "MENU"
                                    }), (0,
                                    p.jsxs)("ul", {
                                        children: [(0,
                                        p.jsxs)("li", {
                                            className: (0,
                                            m.f9)(Ie || (Ie = (0,
                                            s.Z)(["relative ", ""])), J && "/" === J.route ? "active" : ""),
                                            "data-tip": !0,
                                            "data-cy": "menuDash",
                                            "data-for": "dashDisclaimer",
                                            children: [(0,
                                            p.jsx)(D(), {
                                                href: "/",
                                                prefetch: !1,
                                                children: (0,
                                                p.jsxs)("a", {
                                                    className: te,
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "".concat(ae, " dashboard"),
                                                        children: (0,
                                                        p.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0,
                                                            p.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M16.4489 2H19.7155C21.067 2 22.1634 3.1059 22.1634 4.47122V6.11766V20C22.1634 21.3643 21.067 22 19.7155 22H16.4489C15.0964 22 14 20.8643 14 19.5V6.11766V4.47122C14 3.1059 15.0964 2 16.4489 2Z",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M4.44892 2H7.71449C9.06703 2 10.1634 3.1059 10.1634 4.47018V7.7641C10.1634 9.12735 9.06703 10.2343 7.71449 10.2343H4.44892C3.09638 10.2343 2 9.12735 2 7.7641V4.47018C2 3.1059 3.09638 2 4.44892 2Z",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M4.44892 13.7657H7.71449C9.06703 13.7657 10.1634 14.8716 10.1634 16.2369V19.5298C10.1634 20.8941 9.06703 22 7.71449 22H4.44892C3.09638 22 2 20.8941 2 19.5298V16.2369C2 14.8716 3.09638 13.7657 4.44892 13.7657Z",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            })]
                                                        })
                                                    }), (0,
                                                    p.jsx)("p", {
                                                        className: re,
                                                        children: "Dashboard"
                                                    })]
                                                })
                                            }), v && (0,
                                            p.jsx)($.Z, {
                                                id: "dashDisclaimer",
                                                place: "right",
                                                className: "disclaimer-tooltip",
                                                children: (0,
                                                p.jsx)(ie, {
                                                    mainIcon: "/images/icons/dash-1.svg",
                                                    secondIcon: "/images/icons/dash-2.svg",
                                                    header: "Dashboard",
                                                    disclaimer: "Here you can find an overview of some of the digital billboards featured on Blindspot."
                                                })
                                            })]
                                        }), (0,
                                        p.jsxs)("li", {
                                            id: "myCampaigns",
                                            className: (0,
                                            m.f9)(De || (De = (0,
                                            s.Z)(["relative ", ""])), J && ("/mycampaigns" === J.route || J.route.startsWith("/campaign/")) ? "active" : ""),
                                            "data-tip": !0,
                                            "data-cy": "menuCampaings",
                                            "data-for": "campDisclaimer",
                                            children: [(0,
                                            p.jsx)(D(), {
                                                href: "/mycampaigns",
                                                prefetch: !1,
                                                children: (0,
                                                p.jsxs)("a", {
                                                    className: te,
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "".concat(ae, " campaigns"),
                                                        children: (0,
                                                        p.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0,
                                                            p.jsx)("path", {
                                                                d: "M15.7161 16.2234H8.49609",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                d: "M15.7161 12.0369H8.49609",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                d: "M11.2511 7.8601H8.49609",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M15.9085 2.7498C15.9085 2.7498 8.23149 2.7538 8.21949 2.7538C5.45949 2.7708 3.75049 4.5868 3.75049 7.3568V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.3568C20.4155 4.5728 18.6925 2.7498 15.9085 2.7498Z",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            })]
                                                        })
                                                    }), (0,
                                                    p.jsx)("p", {
                                                        className: re,
                                                        children: "My campaigns"
                                                    })]
                                                })
                                            }), v && (0,
                                            p.jsx)($.Z, {
                                                id: "campDisclaimer",
                                                place: "right",
                                                className: "disclaimer-tooltip",
                                                children: (0,
                                                p.jsx)(ie, {
                                                    mainIcon: "/images/icons/campaign-1.svg",
                                                    secondIcon: "/images/icons/campaign-2.svg",
                                                    header: "My campaigns",
                                                    disclaimer: "Here you can find all your campaigns and all the details about these.",
                                                    isFirstLandscape: !0
                                                })
                                            })]
                                        }), (0,
                                        p.jsxs)("li", {
                                            className: (0,
                                            m.f9)(Fe || (Fe = (0,
                                            s.Z)(["relative ", ""])), J && J.route.startsWith("/publish/") ? "active" : ""),
                                            "data-tip": !0,
                                            "data-cy": "menuPublish",
                                            "data-for": "publishDisclaimer",
                                            children: [(0,
                                            p.jsx)(D(), {
                                                href: "/publish/basic",
                                                prefetch: !1,
                                                children: (0,
                                                p.jsxs)("a", {
                                                    className: te,
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "".concat(ae, " publish ").concat(J && J.route.startsWith("/publish/") ? "hidden" : ""),
                                                        children: (0,
                                                        p.jsx)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0,
                                                            p.jsx)("path", {
                                                                d: "M15.8554 8.12111L10.1916 13.8227L3.56064 9.74147C2.69176 9.20657 2.86787 7.88697 3.8467 7.60287L19.5022 3.04743C20.3925 2.78978 21.2156 3.62446 20.949 4.51889L16.304 20.1582C16.013 21.1369 14.7082 21.3064 14.1809 20.4325L10.1916 13.8227",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            })
                                                        })
                                                    }), (0,
                                                    p.jsx)("div", {
                                                        className: "".concat(ae, " publish ").concat(J && J.route.startsWith("/publish/") ? "" : "hidden"),
                                                        children: (0,
                                                        p.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0,
                                                            p.jsx)("path", {
                                                                d: "M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z",
                                                                fill: "#FDA53F"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                opacity: "0.4",
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M3.01049 16.8078C2.81849 16.8078 2.62649 16.7348 2.48049 16.5878C2.18749 16.2948 2.18749 15.8208 2.48049 15.5278L3.84549 14.1618C4.13849 13.8698 4.61349 13.8698 4.90649 14.1618C5.19849 14.4548 5.19849 14.9298 4.90649 15.2228L3.54049 16.5878C3.39449 16.7348 3.20249 16.8078 3.01049 16.8078ZM6.77169 18.0002C6.57969 18.0002 6.38769 17.9272 6.24169 17.7802C5.94869 17.4872 5.94869 17.0132 6.24169 16.7202L7.60669 15.3542C7.89969 15.0622 8.37469 15.0622 8.66769 15.3542C8.95969 15.6472 8.95969 16.1222 8.66769 16.4152L7.30169 17.7802C7.15569 17.9272 6.96369 18.0002 6.77169 18.0002ZM7.02539 21.5682C7.17139 21.7152 7.36339 21.7882 7.55539 21.7882C7.74739 21.7882 7.93939 21.7152 8.08539 21.5682L9.45139 20.2032C9.74339 19.9102 9.74339 19.4352 9.45139 19.1422C9.15839 18.8502 8.68339 18.8502 8.39039 19.1422L7.02539 20.5082C6.73239 20.8012 6.73239 21.2752 7.02539 21.5682Z",
                                                                fill: "#FDA53F"
                                                            })]
                                                        })
                                                    }), (0,
                                                    p.jsx)("p", {
                                                        className: re,
                                                        children: "Publish"
                                                    })]
                                                })
                                            }), v && (0,
                                            p.jsx)($.Z, {
                                                id: "publishDisclaimer",
                                                place: "right",
                                                className: "disclaimer-tooltip",
                                                children: (0,
                                                p.jsx)(ie, {
                                                    mainIcon: "/images/icons/publish-1.svg",
                                                    secondIcon: "/images/icons/publish-2.svg",
                                                    header: "Publish",
                                                    disclaimer: "Here you can find all the screens provided by us from all around the world."
                                                })
                                            })]
                                        }), (0,
                                        p.jsxs)("li", {
                                            className: (0,
                                            m.f9)(Re || (Re = (0,
                                            s.Z)(["relative ", ""])), J && "/media-library" === J.route ? "active" : ""),
                                            "data-cy": "menuMediaLib",
                                            "data-for": "mediaDisclaimer",
                                            "data-tip": !0,
                                            children: [(0,
                                            p.jsx)(D(), {
                                                href: "/media-library",
                                                prefetch: !1,
                                                children: (0,
                                                p.jsxs)("a", {
                                                    className: te,
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "".concat(ae, " media"),
                                                        children: (0,
                                                        p.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0,
                                                            p.jsx)("path", {
                                                                d: "M2.94414 8.28418C3.31747 6.62497 4.60448 5.31882 6.26653 4.91238C8.53218 4.35834 10.9252 4.36467 13.1909 4.91871C14.832 5.32005 16.1361 6.59343 16.549 8.22135L16.574 8.31991C17.1868 10.7356 17.1868 13.2644 16.574 15.6801L16.549 15.7787C16.1361 17.4066 14.832 18.68 13.1909 19.0813C10.9252 19.6353 8.53218 19.6417 6.26653 19.0876C4.60449 18.6812 3.31747 17.375 2.94414 15.7158L2.8825 15.4419C2.3725 13.1752 2.3725 10.8248 2.8825 8.55815L2.94414 8.28418Z",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                d: "M16.6633 15.3084L16.8603 15.3736C16.9115 15.3905 16.9614 15.4111 17.0097 15.4351L18.6936 16.2713C19.9829 16.9117 21.5 15.9804 21.5 14.5485L21.5 9.81013C21.5 8.29729 19.8246 7.37498 18.533 8.17679L17.0474 9.09908C16.9742 9.14452 16.9064 9.19808 16.8453 9.25871L16.7904 9.31325C17.1526 11.2977 17.1102 13.3366 16.6633 15.3084Z",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5"
                                                            })]
                                                        })
                                                    }), (0,
                                                    p.jsx)("p", {
                                                        className: re,
                                                        children: "Media Library"
                                                    })]
                                                })
                                            }), v && (0,
                                            p.jsx)($.Z, {
                                                id: "mediaDisclaimer",
                                                place: "right",
                                                className: "disclaimer-tooltip",
                                                children: (0,
                                                p.jsx)(ie, {
                                                    mainIcon: "/images/icons/icon-media-1.svg",
                                                    secondIcon: "/images/icons/icon-media-2.svg",
                                                    header: "Media Library",
                                                    disclaimer: "Here you can find all your uploaded media files.",
                                                    isFirstLandscape: !0
                                                })
                                            })]
                                        }), (0,
                                        p.jsx)("li", {
                                            className: (0,
                                            m.f9)(Be || (Be = (0,
                                            s.Z)(["relative ", ""])), J && "/special-offers" === J.route ? "active" : ""),
                                            "data-cy": "menuOffers",
                                            children: (0,
                                            p.jsx)(D(), {
                                                href: "/special-offers",
                                                prefetch: !1,
                                                children: (0,
                                                p.jsxs)("a", {
                                                    className: te,
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "".concat(ae, " offers"),
                                                        children: (0,
                                                        p.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0,
                                                            p.jsx)("path", {
                                                                d: "M4.79413 7.05581C4.79413 5.80681 5.80713 4.79381 7.05513 4.79381H8.08413C8.68013 4.79381 9.25313 4.55781 9.67713 4.13681L10.3961 3.41681C11.2771 2.53181 12.7091 2.52781 13.5941 3.40881L13.6031 3.41681L14.3231 4.13681C14.7461 4.55781 15.3191 4.79381 15.9161 4.79381H16.9441C18.1931 4.79381 19.2061 5.80681 19.2061 7.05581V8.08281C19.2061 8.68081 19.4421 9.25281 19.8631 9.67681L20.5831 10.3968C21.4681 11.2778 21.4731 12.7088 20.5921 13.5948L20.5831 13.6038L19.8631 14.3238C19.4421 14.7458 19.2061 15.3198 19.2061 15.9158V16.9448C19.2061 18.1938 18.1931 19.2058 16.9441 19.2058H15.9161C15.3191 19.2058 14.7461 19.4428 14.3231 19.8638L13.6031 20.5828C12.7231 21.4688 11.2911 21.4728 10.4051 20.5918C10.4021 20.5888 10.3991 20.5858 10.3961 20.5828L9.67713 19.8638C9.25313 19.4428 8.68013 19.2058 8.08413 19.2058H7.05513C5.80713 19.2058 4.79413 18.1938 4.79413 16.9448V15.9158C4.79413 15.3198 4.55713 14.7458 4.13613 14.3238L3.41713 13.6038C2.53113 12.7228 2.52713 11.2908 3.40813 10.4058L3.41713 10.3968L4.13613 9.67681C4.55713 9.25281 4.79413 8.68081 4.79413 8.08281V7.05581",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                d: "M9.42969 14.5695L14.5697 9.4295",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                d: "M14.5664 15.3224C14.3664 15.3224 14.1764 15.2424 14.0364 15.1024C13.9664 15.0324 13.9164 14.9424 13.8764 14.8524C13.8364 14.7624 13.8164 14.6734 13.8164 14.5724C13.8164 14.4724 13.8364 14.3724 13.8764 14.2824C13.9164 14.1924 13.9664 14.1124 14.0364 14.0424C14.3164 13.7624 14.8164 13.7624 15.0964 14.0424C15.1664 14.1124 15.2264 14.1924 15.2664 14.2824C15.2964 14.3724 15.3164 14.4724 15.3164 14.5724C15.3164 14.6734 15.2964 14.7624 15.2664 14.8524C15.2264 14.9424 15.1664 15.0324 15.0964 15.1024C14.9564 15.2424 14.7664 15.3224 14.5664 15.3224Z",
                                                                fill: "#858D96"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                d: "M9.42627 10.1828C9.32627 10.1828 9.23627 10.1618 9.14627 10.1218C9.05627 10.0818 8.96627 10.0328 8.89627 9.96281C8.82627 9.88281 8.77627 9.80281 8.73627 9.71281C8.69627 9.62181 8.67627 9.53281 8.67627 9.43281C8.67627 9.33181 8.69627 9.23281 8.73627 9.14281C8.77627 9.05281 8.82627 8.96281 8.89627 8.90281C9.18627 8.62181 9.67627 8.62181 9.95627 8.90281C10.0963 9.04181 10.1763 9.23281 10.1763 9.43281C10.1763 9.53281 10.1663 9.62181 10.1263 9.71281C10.0863 9.80281 10.0263 9.88281 9.95627 9.96281C9.88627 10.0328 9.80627 10.0818 9.71627 10.1218C9.62627 10.1618 9.52627 10.1828 9.42627 10.1828Z",
                                                                fill: "#858D96"
                                                            })]
                                                        })
                                                    }), (0,
                                                    p.jsx)("p", {
                                                        className: re,
                                                        children: "Special Offers"
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                }), (0,
                                p.jsxs)("div", {
                                    className: (0,
                                    m.f9)(Ae || (Ae = (0,
                                    s.Z)(["menu-items dark:menu-items-dark ", " footer-menu pt-8 border-bordercolor dark:border-bordercolordark border-t"])), Q),
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: ee,
                                        children: "GENERAL"
                                    }), (0,
                                    p.jsxs)("ul", {
                                        children: [(0,
                                        p.jsxs)("li", {
                                            "data-tip": !0,
                                            "data-for": "feedback",
                                            "data-cy": "menuFeedback",
                                            children: [(0,
                                            p.jsxs)("a", {
                                                href: "https://forms.gle/oSNgSUkP9RdGyweEA",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: te,
                                                children: [(0,
                                                p.jsx)("div", {
                                                    className: "".concat(ae, " feedback"),
                                                    children: (0,
                                                    p.jsx)("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 20 20",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0,
                                                        p.jsx)("path", {
                                                            d: "M10.3142 17.4902L9.61578 17.217L10.3142 17.4902ZM1.77909 12.1378L1.04815 12.3058L1.77909 12.1378ZM1.77571 7.22642L1.04477 7.05841L1.77571 7.22642ZM18.2476 7.44741L18.9786 7.2794L18.2476 7.44741ZM18.2476 11.9021L17.5167 11.7341L18.2476 11.9021ZM7.31593 18.8233L7.61076 18.1337L7.61076 18.1337L7.31593 18.8233ZM7.68953 1.27141L7.86413 2.00081H7.86413L7.68953 1.27141ZM12.283 1.27141L12.1084 2.00081L12.283 1.27141ZM7.19777 18.7728L6.90294 19.4624H6.90294L7.19777 18.7728ZM12.6641 1.36264L12.8387 0.633248L12.6641 1.36264ZM18.1588 7.06088L17.4279 7.22889V7.22889L18.1588 7.06088ZM7.46648 1.32481L7.29188 0.595412V0.595412L7.46648 1.32481ZM6.69628 6.30793C6.28207 6.30793 5.94628 6.64372 5.94628 7.05793C5.94628 7.47215 6.28207 7.80793 6.69628 7.80793V6.30793ZM12.7279 7.80793C13.1422 7.80793 13.4779 7.47215 13.4779 7.05793C13.4779 6.64372 13.1422 6.30793 12.7279 6.30793V7.80793ZM6.69628 9.7641C6.28207 9.7641 5.94628 10.0999 5.94628 10.5141C5.94628 10.9283 6.28207 11.2641 6.69628 11.2641V9.7641ZM10.5346 11.2641C10.9488 11.2641 11.2846 10.9283 11.2846 10.5141C11.2846 10.0999 10.9488 9.7641 10.5346 9.7641V11.2641ZM7.64108 2.0542L7.86413 2.00081L7.51493 0.54202L7.29188 0.595412L7.64108 2.0542ZM12.1084 2.00081L12.4895 2.09204L12.8387 0.633248L12.4576 0.54202L12.1084 2.00081ZM7.61076 18.1337L7.4926 18.0832L6.90294 19.4624L7.0211 19.5129L7.61076 18.1337ZM17.4279 7.22889L17.5167 7.61542L18.9786 7.2794L18.8897 6.89287L17.4279 7.22889ZM12.1721 16.1768H11.1107V17.6768H12.1721V16.1768ZM11.1107 16.1768C10.4324 16.1768 9.85287 16.6108 9.61578 17.217L11.0127 17.7634C11.0406 17.6921 11.092 17.6768 11.1107 17.6768V16.1768ZM2.51003 11.9698C2.16535 10.4702 2.16244 8.89194 2.50665 7.39443L1.04477 7.05841C0.649262 8.77909 0.653112 10.5871 1.04815 12.3058L2.51003 11.9698ZM17.5167 7.61542C17.8278 8.96871 17.8278 10.3808 17.5167 11.7341L18.9786 12.0701C19.3405 10.4957 19.3405 8.85382 18.9786 7.2794L17.5167 7.61542ZM7.0211 19.5129C8.6131 20.1936 10.3891 19.3576 11.0127 17.7634L9.61578 17.217C9.27664 18.084 8.36497 18.4561 7.61076 18.1337L7.0211 19.5129ZM7.86413 2.00081C9.26114 1.6664 10.7114 1.6664 12.1084 2.00081L12.4576 0.54202C10.8311 0.15266 9.1415 0.15266 7.51493 0.54202L7.86413 2.00081ZM7.4926 18.0832C5.01453 17.0237 3.14644 14.7384 2.51003 11.9698L1.04815 12.3058C1.78571 15.5145 3.95924 18.2039 6.90294 19.4624L7.4926 18.0832ZM17.5167 11.7341C16.912 14.3647 14.6859 16.1768 12.1721 16.1768V17.6768C15.4318 17.6768 18.2281 15.3351 18.9786 12.0701L17.5167 11.7341ZM12.4895 2.09204C14.91 2.67142 16.8349 4.64932 17.4279 7.22889L18.8897 6.89287C18.1765 3.78984 15.8441 1.35266 12.8387 0.633248L12.4895 2.09204ZM7.29188 0.595412C4.18969 1.338 1.78134 3.85397 1.04477 7.05841L2.50665 7.39443C3.1229 4.71346 5.12384 2.65676 7.64108 2.0542L7.29188 0.595412ZM6.69628 7.80793H12.7279V6.30793H6.69628V7.80793ZM6.69628 11.2641H10.5346V9.7641H6.69628V11.2641Z",
                                                            stroke: "#858D96",
                                                            fill: "#858D96",
                                                            strokeWidth: "0.1",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    })
                                                }), (0,
                                                p.jsx)("p", {
                                                    className: re,
                                                    children: "Feedback"
                                                })]
                                            }), v && (0,
                                            p.jsx)($.Z, {
                                                id: "feedback",
                                                place: "right",
                                                className: "disclaimer-tooltip",
                                                children: (0,
                                                p.jsx)(ie, {
                                                    noIcon: !0,
                                                    header: "Send feedback!",
                                                    disclaimer: "Help us test our new and improved platform & get a $50 voucher!"
                                                })
                                            })]
                                        }), (0,
                                        p.jsxs)("li", {
                                            onClick: function() {
                                                (0,
                                                V.signOut)()
                                            },
                                            "data-tip": !0,
                                            "data-for": "logout",
                                            "data-cy": "menuLogout",
                                            children: [(0,
                                            p.jsx)(D(), {
                                                href: "/auth/logout",
                                                prefetch: !1,
                                                children: (0,
                                                p.jsxs)("a", {
                                                    className: te,
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: ae,
                                                        children: (0,
                                                        p.jsxs)("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0,
                                                            p.jsx)("path", {
                                                                d: "M15.016 7.38951V6.45651C15.016 4.42151 13.366 2.77151 11.331 2.77151H6.45597C4.42197 2.77151 2.77197 4.42151 2.77197 6.45651V17.5865C2.77197 19.6215 4.42197 21.2715 6.45597 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                d: "M21.8096 12.0214H9.76855",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }), (0,
                                                            p.jsx)("path", {
                                                                d: "M18.8813 9.10632L21.8093 12.0213L18.8813 14.9373",
                                                                stroke: "#858D96",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            })]
                                                        })
                                                    }), (0,
                                                    p.jsx)("p", {
                                                        className: re,
                                                        children: "Logout"
                                                    })]
                                                })
                                            }), v && (0,
                                            p.jsx)($.Z, {
                                                id: "logout",
                                                place: "right",
                                                className: "disclaimer-tooltip",
                                                children: (0,
                                                p.jsx)(ie, {
                                                    noIcon: !0,
                                                    header: "Logout",
                                                    disclaimer: "We're sorry to see you go. Come back soon and let's get you on a billboard!"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            })
        };
        ze.defaultProps = {};
        var Ue = ze;
        function _e(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Ge(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _e(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _e(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var qe, Je = function() {
            var e, t = (0,
            C.Z)(), r = (0,
            O.useRouter)(), a = (0,
            c.useState)(!1), n = a[0], s = a[1], l = (0,
            E.q)(), d = l.notify, u = l.setUser, m = N.Ry().shape({
                password: N.Z_().min(8, t.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "8"
                })).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                email: N.Z_().email(t.formatMessage({
                    defaultMessage: "This is not a valid email address",
                    id: "Error.emailInvalid"
                })).required(t.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                }))
            }), f = (e = m,
            (0,
            c.useCallback)(function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                m.validate(t, {
                                    abortEarly: !1
                                });
                            case 3:
                                return r = e.sent,
                                e.abrupt("return", {
                                    values: r,
                                    errors: {}
                                });
                            case 7:
                                return e.prev = 7,
                                e.t0 = e.catch(0),
                                e.abrupt("return", {
                                    values: {},
                                    errors: e.t0.inner.reduce((function(e, t) {
                                        var r;
                                        return Ge(Ge({}, e), {}, (0,
                                        g.Z)({}, t.path, {
                                            type: null !== (r = t.type) && void 0 !== r ? r : "validation",
                                            message: t.message
                                        }))
                                    }
                                    ), {})
                                });
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [e])), h = (0,
            k.cI)({
                resolver: f
            }), x = h.register, v = h.handleSubmit, b = h.formState, y = h.errors, S = (h.control,
            function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var a, n, i;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return s(!0),
                                e.next = 3,
                                L.FT.signin({
                                    email: t.email,
                                    password: t.password
                                });
                            case 3:
                                a = e.sent,
                                s(!1),
                                !0 === a.hasError ? d(null === a || void 0 === a ? void 0 : a.errorMessage, "error") : (!1 === (n = L.CR.setJwt(a)).emailValidation ? r.push("/auth/validate-email") : (i = _().get(),
                                _().destroy(null, "redirect", {
                                    path: "/"
                                }),
                                r.push(i.redirect || "/")),
                                u(n));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()), M = b.dirtyFields, Z = function(e) {
                return {
                    isDirty: M[e],
                    error: y[e]
                }
            };
            return (0,
            p.jsx)(A, {
                isRegister: !1,
                children: (0,
                p.jsx)(j.K, {
                    direction: "horizontal",
                    gravity: "center",
                    wrap: !0,
                    otherClass: "tablet:w-full min-tablet:pr-16",
                    children: (0,
                    p.jsx)("div", {
                        className: "md:max-w-screen-sm tablet:w-full",
                        children: (0,
                        p.jsx)("form", {
                            onSubmit: v(S),
                            children: (0,
                            p.jsx)("div", {
                                className: "w-full px-10 py-10 bg-white border-0 dark:bg-dark-200 min-tablet:px-16 rounded-4xl tablet:rounded-b-none",
                                children: (0,
                                p.jsxs)(j.K, {
                                    direction: "horizontal",
                                    spacing: "none",
                                    wrap: !0,
                                    children: [(0,
                                    p.jsx)(w.h4, {
                                        title: "Login to your account",
                                        subtitle: "Welcome back! Please enter your details below to Login."
                                    }), (0,
                                    p.jsx)(j.K, {
                                        fitX: !0,
                                        children: (0,
                                        p.jsx)(w.II, {
                                            name: "email",
                                            innerRef: x,
                                            validation: Z("email"),
                                            type: "email",
                                            className: "input-s",
                                            label: "Email",
                                            fullWidth: !0
                                        })
                                    }), (0,
                                    p.jsx)(j.K, {
                                        fitX: !0,
                                        children: (0,
                                        p.jsx)(w.II, {
                                            name: "password",
                                            className: "input-s",
                                            validation: Z("password"),
                                            innerRef: x,
                                            fullWidth: !0,
                                            type: "password",
                                            showStrength: !1,
                                            label: "Password"
                                        })
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "w-full text-right min-tablet:hidden",
                                        children: (0,
                                        p.jsx)(D(), {
                                            href: "/auth/forgot-password",
                                            children: (0,
                                            p.jsx)("a", {
                                                className: "block pb-2 text-base font-semibold transition text-primary-500 hover:text-primary-600",
                                                children: t.formatMessage({
                                                    defaultMessage: "Lost your password?",
                                                    id: "Button.LostYourPassword"
                                                })
                                            })
                                        })
                                    }), (0,
                                    p.jsxs)(j.K, {
                                        fitX: !0,
                                        wrap: !0,
                                        gravity: "center",
                                        otherClass: "w-64 mx-auto mt-7",
                                        children: [(0,
                                        p.jsx)(w.zx, {
                                            type: "submit",
                                            color: "primary",
                                            loading: n,
                                            fullWidth: !0,
                                            children: t.formatMessage({
                                                defaultMessage: "Sign in",
                                                id: "Button.SIGNIN"
                                            })
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "w-full text-center tablet:hidden",
                                            children: (0,
                                            p.jsx)(D(), {
                                                href: "/auth/forgot-password",
                                                children: (0,
                                                p.jsx)("a", {
                                                    className: "block pt-5 text-base font-semibold transition text-dark-500 dark:text-dark-400 hover:text-dark-600",
                                                    children: t.formatMessage({
                                                        defaultMessage: "Lost your password?",
                                                        id: "Button.LostYourPassword"
                                                    })
                                                })
                                            })
                                        })]
                                    }), (0,
                                    p.jsx)(j.K, {
                                        fitX: !0,
                                        wrap: !0,
                                        spacing: "none",
                                        direction: "horizontal",
                                        padding: !0,
                                        children: (0,
                                        p.jsx)(z, {})
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "flex items-center justify-center w-full pt-5 shadow-top-border min-tablet:hidden",
                                        children: [(0,
                                        p.jsx)("h4", {
                                            className: "pr-3 text-base font-semibold text-dark-500 dark:text-dark-400",
                                            children: t.formatMessage({
                                                defaultMessage: "New to Blindspot?",
                                                id: "Text.NewToBlindspot"
                                            })
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "text-center",
                                            children: (0,
                                            p.jsx)(D(), {
                                                href: "/auth/register",
                                                children: (0,
                                                p.jsx)("a", {
                                                    className: "text-base font-semibold transition text-primary-500 hover:text-primary-500",
                                                    children: t.formatMessage({
                                                        defaultMessage: "Create an account",
                                                        id: "Button.Register"
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            })
        };
        function Ke(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Xe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ke(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ke(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var Ye = function() {
            var e, t, r = (0,
            C.Z)(), a = (0,
            E.q)(), n = (a.notify,
            a.setUser,
            (0,
            c.useState)(!1)), l = n[0], d = n[1], u = (0,
            c.useState)(0), f = u[0], h = u[1], x = (0,
            c.useState)(""), v = x[0], b = x[1], y = N.Ry().shape({
                email: N.Z_().email(r.formatMessage({
                    defaultMessage: "This is not a valid email address",
                    id: "Error.emailInvalid"
                })).required(r.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                }))
            }), S = (e = y,
            (0,
            c.useCallback)(function() {
                var t = (0,
                i.Z)(o().mark((function t(r) {
                    var a;
                    return o().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                e.validate(r, {
                                    abortEarly: !1
                                });
                            case 3:
                                return a = t.sent,
                                t.abrupt("return", {
                                    values: a,
                                    errors: {}
                                });
                            case 7:
                                return t.prev = 7,
                                t.t0 = t.catch(0),
                                t.abrupt("return", {
                                    values: {},
                                    errors: t.t0.inner.reduce((function(e, t) {
                                        var r;
                                        return Xe(Xe({}, e), {}, (0,
                                        g.Z)({}, t.path, {
                                            type: null !== (r = t.type) && void 0 !== r ? r : "validation",
                                            message: t.message
                                        }))
                                    }
                                    ), {})
                                });
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, 7]])
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(), [e])), M = (0,
            k.cI)({
                resolver: S
            }), Z = M.register, O = M.handleSubmit, T = M.formState, P = (M.control,
            function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return d(!0),
                                e.next = 3,
                                L.FT.recoverPassword(t.email);
                            case 3:
                                !0 === (r = e.sent).success ? h(1) : (h(2),
                                b(r.message)),
                                d(!1);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()), I = T.dirtyFields, F = T.errors;
            return (0,
            p.jsx)(A, {
                isRegister: !0,
                children: (0,
                p.jsx)(j.K, {
                    direction: "horizontal",
                    gravity: "center",
                    wrap: !0,
                    otherClass: "tablet:w-full min-tablet:pr-16",
                    children: (0,
                    p.jsx)("div", {
                        className: "md:max-w-screen-sm tablet:w-full",
                        children: (0,
                        p.jsx)("div", {
                            className: "w-full px-10 py-10 bg-white dark:bg-dark-200 border-0 min-tablet:px-16 rounded-4xl mobile:rounded-b-none",
                            children: 1 === f ? (0,
                            p.jsx)("div", {
                                className: "",
                                children: (0,
                                p.jsxs)(j.K, {
                                    direction: "horizontal",
                                    spacing: "xl",
                                    wrap: !0,
                                    otherClass: "text-center",
                                    children: [(0,
                                    p.jsx)(w.h4, {
                                        title: "Reset password",
                                        subtitle: "Check your email for a link to reset your password. If it doesn\u2019t appear within a few minutes, check your spam folder.'"
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "flex justify-center w-full text-center",
                                        children: (0,
                                        p.jsx)(D(), {
                                            href: "/auth/login",
                                            children: (0,
                                            p.jsx)(w.zx, {
                                                type: "button",
                                                color: "primary",
                                                children: r.formatMessage({
                                                    defaultMessage: "Back to login",
                                                    id: "Button.BackToLogin"
                                                })
                                            })
                                        })
                                    })]
                                })
                            }) : (0,
                            p.jsx)("form", {
                                onSubmit: O(P),
                                children: (0,
                                p.jsx)("div", {
                                    className: "",
                                    children: (0,
                                    p.jsxs)(j.K, {
                                        direction: "horizontal",
                                        spacing: "xl",
                                        wrap: !0,
                                        otherClass: "",
                                        children: [(0,
                                        p.jsx)(w.h4, {
                                            title: "Reset password",
                                            subtitle: "Enter your email address and we will send you a link to reset your password."
                                        }), (0,
                                        p.jsx)(j.K, {
                                            fitX: !0,
                                            padding: !0,
                                            spacing: "xl",
                                            direction: "horizontal",
                                            wrap: !0,
                                            children: (0,
                                            p.jsx)(w.II, {
                                                name: "email",
                                                className: "input-s",
                                                innerRef: Z,
                                                validation: (t = "email",
                                                {
                                                    isDirty: I[t],
                                                    error: F[t]
                                                }),
                                                type: "email",
                                                label: "Email",
                                                fullWidth: !0
                                            })
                                        }), (0,
                                        p.jsxs)(j.K, {
                                            fitX: !0,
                                            wrap: !0,
                                            gravity: "center",
                                            otherClass: "w-72 mx-auto mt-7",
                                            children: [(0,
                                            p.jsx)(w.zx, {
                                                type: "submit",
                                                color: "primary",
                                                loading: l,
                                                fullWidth: !0,
                                                children: r.formatMessage({
                                                    defaultMessage: "Send password reset email",
                                                    id: "Button.Sendpasswordresetemail"
                                                })
                                            }), 2 === f && (0,
                                            p.jsx)("div", {
                                                className: (0,
                                                m.f9)(qe || (qe = (0,
                                                s.Z)(["text-danger-500 w-full text-xs  text-center}"]))),
                                                children: (0,
                                                p.jsx)("p", {
                                                    className: "w-full text-center",
                                                    children: v
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })
                })
            })
        };
        function $e(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Qe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $e(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var et, tt = function(e) {
            var t = e.pid
              , r = (0,
            C.Z)()
              , a = (0,
            E.q)().notify
              , n = (0,
            c.useState)(!1)
              , s = n[0]
              , l = n[1]
              , d = (0,
            c.useState)(!1)
              , u = d[0]
              , m = d[1]
              , f = (0,
            c.useState)(!1)
              , h = f[0]
              , x = f[1]
              , v = (0,
            c.useState)(!1)
              , b = v[0]
              , y = v[1]
              , S = (0,
            c.useState)("")
              , M = S[0]
              , O = S[1];
            (0,
            c.useEffect)((function() {
                if (t) {
                    var e = JSON.parse(atob(t))
                      , r = e.token
                      , a = e.email
                      , n = e.expires;
                    be.ou.utc().toMillis() > n && m(!0),
                    y(a),
                    O(r)
                }
                return function() {}
            }
            ), []);
            var T, P, I = N.Ry().shape({
                password: N.Z_().min(8, r.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "8"
                })).test("test-name", r.formatMessage({
                    defaultMessage: "The password doesn't meet the minimum requirements",
                    id: "Error.passwordMinimunRequirements"
                }), (function(e) {
                    return !!e && Z()(e).score >= 2
                }
                )).required(r.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                }))
            }), F = (T = I,
            (0,
            c.useCallback)(function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r, a;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                T.validate(t, {
                                    abortEarly: !1
                                });
                            case 3:
                                return r = e.sent,
                                e.abrupt("return", {
                                    values: r,
                                    errors: {}
                                });
                            case 7:
                                return e.prev = 7,
                                e.t0 = e.catch(0),
                                e.abrupt("return", {
                                    values: {},
                                    errors: null === (a = e.t0.inner) || void 0 === a ? void 0 : a.reduce((function(e, t) {
                                        var r;
                                        return Qe(Qe({}, e), {}, (0,
                                        g.Z)({}, t.path, {
                                            type: null !== (r = t.type) && void 0 !== r ? r : "validation",
                                            message: t.message
                                        }))
                                    }
                                    ), {})
                                });
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [T])), R = (0,
            k.cI)({
                resolver: F
            }), B = R.register, W = R.handleSubmit, V = R.formState, H = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return l(!0),
                                e.next = 3,
                                L.FT.passwordChangeToken(t.password, M);
                            case 3:
                                !0 === (r = e.sent).success ? x(!0) : a(r.errorMessage, "warning"),
                                l(!1);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), z = V.dirtyFields, U = V.errors;
            return (0,
            p.jsx)(A, {
                isRegister: !0,
                children: (0,
                p.jsx)(j.K, {
                    direction: "horizontal",
                    gravity: "center",
                    wrap: !0,
                    otherClass: "tablet:w-full min-tablet:pr-16",
                    children: (0,
                    p.jsx)("div", {
                        className: "md:max-w-screen-sm tablet:w-full",
                        children: (0,
                        p.jsxs)("div", {
                            className: "w-full px-16 py-10 bg-white dark:bg-dark-200 border-0 rounded-4xl tablet:rounded-b-none",
                            children: [h && (0,
                            p.jsx)("div", {
                                className: "w-full bg-white dark:bg-dark-200 border rounded",
                                children: (0,
                                p.jsxs)(j.K, {
                                    direction: "horizontal",
                                    spacing: "xl",
                                    wrap: !0,
                                    otherClass: "pb-10 text-center",
                                    children: [(0,
                                    p.jsx)(w.h4, {
                                        title: "Change password",
                                        subtitle: "You've successfully changed your password."
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "flex justify-center mx-auto text-center w-72 mt-7",
                                        children: (0,
                                        p.jsx)(D(), {
                                            href: "/auth/login",
                                            children: (0,
                                            p.jsx)(w.zx, {
                                                type: "button",
                                                color: "primary",
                                                children: r.formatMessage({
                                                    defaultMessage: "Login",
                                                    id: "Button.Login"
                                                })
                                            })
                                        })
                                    })]
                                })
                            }), u && !h && (0,
                            p.jsx)("div", {
                                className: "w-full bg-white dark:bg-dark-200 border rounded",
                                children: (0,
                                p.jsxs)(j.K, {
                                    direction: "horizontal",
                                    spacing: "xl",
                                    wrap: !0,
                                    otherClass: "pb-10 text-center",
                                    children: [(0,
                                    p.jsx)(w.h4, {
                                        title: "Change password",
                                        subtitle: "the link has expired. Please try again."
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "flex justify-center mx-auto text-center w-72 mt-7",
                                        children: (0,
                                        p.jsx)(D(), {
                                            href: "/auth/forgot-password",
                                            children: (0,
                                            p.jsx)(w.zx, {
                                                type: "button",
                                                color: "primary",
                                                children: r.formatMessage({
                                                    defaultMessage: " Try again",
                                                    id: "Button.TryAgain"
                                                })
                                            })
                                        })
                                    })]
                                })
                            }), !u && !h && (0,
                            p.jsx)("form", {
                                onSubmit: W(H),
                                children: (0,
                                p.jsx)("div", {
                                    className: "w-full bg-white dark:bg-dark-200 rounded",
                                    children: (0,
                                    p.jsxs)(j.K, {
                                        direction: "horizontal",
                                        spacing: "xl",
                                        wrap: !0,
                                        otherClass: "",
                                        children: [(0,
                                        p.jsx)(w.h4, {
                                            title: "Change password",
                                            subtitle: "Change password for ".concat(b)
                                        }), (0,
                                        p.jsx)(j.K, {
                                            fitX: !0,
                                            padding: !0,
                                            spacing: "lg",
                                            direction: "horizontal",
                                            wrap: !0,
                                            children: (0,
                                            p.jsx)(w.II, {
                                                name: "password",
                                                innerRef: B,
                                                validation: (P = "password",
                                                {
                                                    isDirty: z[P],
                                                    error: U[P]
                                                }),
                                                type: "password",
                                                label: "Password",
                                                className: "input-s",
                                                showStrength: !0,
                                                fullWidth: !0
                                            })
                                        }), (0,
                                        p.jsx)(j.K, {
                                            fitX: !0,
                                            wrap: !0,
                                            gravity: "center",
                                            otherClass: "w-72 mx-auto mt-7",
                                            children: (0,
                                            p.jsx)(w.zx, {
                                                type: "submit",
                                                color: "primary",
                                                loading: s,
                                                fullWidth: !0,
                                                children: r.formatMessage({
                                                    defaultMessage: "Change password",
                                                    id: "Button.ChangePassword"
                                                })
                                            })
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        }, rt = r(5152), at = r.n(rt), nt = at()((function() {
            return r.e(8279).then(r.t.bind(r, 38279, 23))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [38279]
                }
            }
        }), st = function() {
            var e = (0,
            C.Z)()
              , t = (0,
            E.q)().notify
              , r = c.useState(L.CR.getJwtUser())
              , a = (0,
            b.Z)(r, 1)[0]
              , n = (0,
            O.useRouter)()
              , s = (0,
            c.useState)(!1)
              , l = s[0]
              , d = s[1]
              , u = (0,
            c.useState)(0)
              , m = (u[0],
            u[1])
              , f = (0,
            c.useState)(n && n.query.id ? n.query.id.toString() : "")
              , h = f[0]
              , x = f[1]
              , v = (0,
            c.useState)("")
              , g = (v[0],
            v[1])
              , y = (0,
            c.useState)(60)
              , S = y[0]
              , M = y[1]
              , Z = (0,
            c.useRef)(60)
              , T = (0,
            c.useRef)(null)
              , P = function() {
                Z.current = 60,
                T.current && clearInterval(T.current),
                T.current = setInterval((function() {
                    Z.current--,
                    Z.current < 0 && (Z.current = 0),
                    M(Z.current),
                    0 === Z.current && clearInterval(T.current)
                }
                ), 1e3)
            }
              , I = (N.Ry().shape({
                email: N.Z_().email(e.formatMessage({
                    defaultMessage: "This is not a valid email address",
                    id: "Error.emailInvalid"
                })).required(e.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                }))
            }),
            (0,
            k.cI)())
              , D = (I.register,
            I.handleSubmit)
              , F = I.formState
              , R = (I.control,
            function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var r, a;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return d(!0),
                                e.next = 3,
                                L.FT.validateCodeEmail(h);
                            case 3:
                                !0 !== (r = e.sent).hasError ? (a = {
                                    hasError: !1,
                                    errorMessage: "",
                                    accessToken: r.accessToken,
                                    refreshToken: r.refreshToken,
                                    expiresIn: r.expiresIn
                                },
                                L.CR.setJwt(a),
                                (0,
                                Y.ov)(),
                                (0,
                                U.destroyCookie)(null, "blindspotReferralCode"),
                                n.push("/")) : (t("Invalid code", "error", "top-right"),
                                m(2),
                                g(r.errorMessage)),
                                d(!1);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }())
              , B = (F.dirtyFields,
            F.errors,
            function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                L.FT.resendCode(h);
                            case 2:
                                e.sent,
                                P();
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }());
            return (0,
            c.useEffect)((function() {
                return P(),
                function() {
                    Z.current = 60
                }
            }
            ), []),
            (0,
            p.jsx)(A, {
                isRegister: !1,
                isReferral: !0,
                children: (0,
                p.jsx)(j.K, {
                    direction: "horizontal",
                    gravity: "center",
                    wrap: !0,
                    otherClass: "tablet:w-full tablet:w-full min-tablet:pr-16",
                    children: (0,
                    p.jsx)("div", {
                        className: "md:max-w-screen-sm tablet:w-full",
                        children: (0,
                        p.jsx)("form", {
                            onSubmit: D(R),
                            children: (0,
                            p.jsx)("div", {
                                className: "w-full px-10 py-10 bg-white border-0 dark:bg-dark-200 min-tablet:px-16 rounded-4xl",
                                children: (0,
                                p.jsxs)(j.K, {
                                    direction: "horizontal",
                                    spacing: "none",
                                    wrap: !0,
                                    children: [(0,
                                    p.jsxs)("div", {
                                        className: "flex flex-row items-center mb-3 cursor-pointer dark:text-dark-300 text-body validate-back dark:hover:text-white",
                                        onClick: function() {
                                            return n.back()
                                        },
                                        children: [(0,
                                        p.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "12",
                                            height: "9",
                                            viewBox: "0 0 12 9",
                                            fill: "none",
                                            children: (0,
                                            p.jsx)("path", {
                                                d: "M10.5833 4.49992L1.41665 4.49992M1.41665 4.49992L5.24018 7.83325M1.41665 4.49992L5.24018 1.16659",
                                                stroke: "#E4DEDE",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        }), (0,
                                        p.jsx)("h1", {
                                            className: "ml-2",
                                            children: "Back"
                                        })]
                                    }), (0,
                                    p.jsx)(w.h4, {
                                        title: "Confirmation code",
                                        subtitle: "We've sent you a code to validate your email address ".concat(a.email, ". Check your inbox or your spam!")
                                    }), (0,
                                    p.jsx)(j.K, {
                                        fitX: !0,
                                        gravity: "center",
                                        align: "center",
                                        otherClass: "flex",
                                        children: (0,
                                        p.jsx)(nt, {
                                            onChange: function(e) {
                                                x(e)
                                            },
                                            name: "code",
                                            inputMode: "numeric",
                                            type: "number",
                                            fields: 6,
                                            value: h
                                        })
                                    }), (0,
                                    p.jsxs)(j.K, {
                                        fitX: !0,
                                        gravity: "center",
                                        otherClass: "mt-7 flex",
                                        children: [(0,
                                        p.jsx)("h1", {
                                            className: "mr-2 dark:text-dark-300 text-body",
                                            children: "Didn't get a code?"
                                        }), 0 === S ? (0,
                                        p.jsx)("h1", {
                                            onClick: B,
                                            className: "font-semibold cursor-pointer dark:text-white",
                                            children: "Resend validation code"
                                        }) : (0,
                                        p.jsxs)("h1", {
                                            className: "font-semibold dark:text-dark-300 text-body",
                                            children: ["Resend in ", S, " seconds"]
                                        })]
                                    }), (0,
                                    p.jsx)(j.K, {
                                        fitX: !0,
                                        wrap: !0,
                                        gravity: "center",
                                        otherClass: "w-72 mx-auto mt-7",
                                        children: (0,
                                        p.jsx)(w.zx, {
                                            type: "submit",
                                            color: "primary",
                                            loading: l,
                                            fullWidth: !0,
                                            children: "Confirm code"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            })
        }, it = r(79948), lt = r(27812);
        function ot(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ot(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ot(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var dt = function(e) {
            var t = e.campaigns
              , r = (e.status,
            e.errorMessage,
            e.title,
            e.index)
              , a = e.displayType
              , n = (0,
            c.useState)(t)
              , l = n[0]
              , d = n[1]
              , u = (0,
            c.useState)(Math.random())
              , f = u[0]
              , h = u[1]
              , x = (0,
            c.useState)(!0)
              , v = x[0]
              , g = x[1]
              , y = (0,
            c.useState)(a)
              , j = y[0]
              , w = y[1];
            (0,
            c.useEffect)((function() {
                var e = (t || []).map((function(e) {
                    return e.uuid
                }
                ));
                d(t),
                k(e)
            }
            ), [t]);
            (0,
            c.useEffect)((function() {
                w(a)
            }
            ), [a]);
            var k = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r, a;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                L.hJ.getStats(t);
                            case 2:
                                r = e.sent,
                                a = (a = l ? (0,
                                lt.Z)(l) : []).map((function(e) {
                                    var t = r.data.filter((function(t) {
                                        return t.campaign === e.uuid
                                    }
                                    ))
                                      , a = (0,
                                    b.Z)(t, 1)[0];
                                    return ct(ct({}, e), {}, {
                                        reach: a ? a.totalreach : 0,
                                        plays: a ? a.totalplays : 0
                                    })
                                }
                                )),
                                h(Math.random()),
                                a.filter((function(e) {
                                    return e.plays || !1
                                }
                                )),
                                d(a);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            c.useEffect)((function() {
                var e = localStorage.getItem("Dashboard_".concat(r));
                g(!e || "false" !== e)
            }
            ), []),
            (0,
            c.useEffect)((function() {
                localStorage.setItem("Dashboard_".concat(r), "".concat(v))
            }
            ), [v]),
            (0,
            p.jsx)(p.Fragment, {
                children: (0,
                p.jsx)("div", {
                    className: "w-full",
                    children: v && (0,
                    p.jsxs)("div", {
                        className: (0,
                        m.f9)(et || (et = (0,
                        s.Z)(["campaigns-grid ", "  "])), "grid" === j ? "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6" : "w-full"),
                        children: [l && "grid" === j && (0,
                        p.jsx)(yt, {
                            deleteCallback: function(e) {
                                if (l) {
                                    var t = l.filter((function(t) {
                                        return e !== t.uuid
                                    }
                                    ));
                                    d(t),
                                    h(Math.random())
                                }
                            },
                            campaigns: l
                        }, "grid_".concat(f)), l && "list" === j && (0,
                        p.jsx)(kt, {
                            campaigns: l
                        }, "list_".concat(f))]
                    })
                })
            })
        };
        dt.defaultProps = {
            status: !0,
            errorMessage: "",
            title: "Campaigns",
            displayType: "grid"
        };
        var ut, mt = dt, ft = r(97538), ht = r(90029);
        function pt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function xt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? pt(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pt(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var vt = function(e) {
            var t = e.campaigns
              , r = e.status
              , a = e.errorMessage
              , n = e.draft
              , i = (0,
            c.useState)([{
                value: "grid",
                icon: "Category",
                label: "",
                checked: !0
            }, {
                value: "list",
                icon: "Filter",
                label: "",
                checked: !1
            }])
              , l = i[0]
              , o = i[1]
              , d = (0,
            O.useRouter)()
              , f = (0,
            c.useState)(t || null)
              , h = f[0]
              , x = f[1]
              , v = (0,
            c.useState)(n || null)
              , g = (v[0],
            v[1])
              , b = (0,
            c.useState)("")
              , y = b[0]
              , w = b[1]
              , k = (0,
            c.useState)(!1)
              , N = (k[0],
            k[1])
              , C = (0,
            c.useState)([])
              , S = C[0]
              , M = C[1]
              , Z = (0,
            c.useState)("grid")
              , L = Z[0]
              , T = Z[1];
            c.useEffect((function() {
                var e = l.map((function(e) {
                    return xt(xt({}, e), {}, {
                        checked: e.value === L
                    })
                }
                ));
                o(e)
            }
            ), [L]),
            c.useEffect((function() {
                g(n),
                E()
            }
            ), [n]),
            c.useEffect((function() {
                y.length > 0 || S.length > 0 ? d.push({
                    pathname: "/mycampaigns",
                    query: {
                        q: y,
                        filters: S.join(",")
                    }
                }, void 0, {
                    shallow: !0
                }) : d.push({
                    pathname: "/mycampaigns"
                }, void 0, {
                    shallow: !0
                }),
                E()
            }
            ), [y, S.length]);
            var E = function() {
                var e, r, a = t, s = n;
                y.length > 0 && (a = null === (e = a) || void 0 === e ? void 0 : e.filter((function(e) {
                    return e.name.toLocaleLowerCase().includes(y.toLocaleLowerCase())
                }
                )),
                s = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                    return e.name.toLocaleLowerCase().includes(y.toLocaleLowerCase())
                }
                )));
                S.length > 0 && (a = null === (r = a) || void 0 === r ? void 0 : r.filter((function(e) {
                    return S.indexOf(e.status) > -1
                }
                )));
                x(a),
                g(s)
            };
            return (0,
            p.jsxs)(p.Fragment, {
                children: [(0,
                p.jsx)(ft.Z, {
                    otherClasses: "px-5 py-4 mb-7",
                    children: (0,
                    p.jsxs)("div", {
                        className: (0,
                        m.f9)(ut || (ut = (0,
                        s.Z)(["w-full flex items-center  relative z-50 justify-between"]))),
                        children: [(0,
                        p.jsxs)("div", {
                            className: "flex items-center justify-between flex-1 space-x-7 pr-7",
                            children: [(0,
                            p.jsx)(ht.Z, {
                                isOpenSearch: function() {
                                    N(!0)
                                },
                                onSearch: function(e) {
                                    return w(e)
                                }
                            }), (0,
                            p.jsx)("div", {
                                className: "md:flex-1",
                                children: (0,
                                p.jsx)(u.P5, {
                                    onSearch: function(e) {
                                        return M(e)
                                    }
                                })
                            })]
                        }), (0,
                        p.jsx)("div", {
                            className: "w-fit",
                            children: (0,
                            p.jsx)(it.Z, {
                                onChange: function(e) {
                                    T(e.target.value)
                                },
                                justIcons: !0,
                                boxSize: "small",
                                name: "primary",
                                options: l,
                                label: ""
                            }, "option-".concat(l[0].checked))
                        })]
                    })
                }), (0,
                p.jsx)(j.K, {
                    fitX: !0,
                    spacing: "xl",
                    direction: "horizontal",
                    wrap: !0,
                    children: (0,
                    p.jsx)(mt, {
                        index: "2",
                        displayType: L,
                        title: "Campaigns",
                        campaigns: h,
                        status: r,
                        errorMessage: a
                    }, "".concat(null === h || void 0 === h ? void 0 : h.length, "_").concat(S.join("_")))
                })]
            })
        };
        vt.defaultProps = {
            status: !0,
            errorMessage: ""
        };
        var gt, bt = vt, yt = function(e) {
            var t = e.campaigns
              , r = e.deleteCallback
              , a = (0,
            He.ZP)()
              , n = (a.setState,
            a.state)
              , s = n.run;
            n.tourActive,
            n.stepIndex,
            n.steps;
            return (0,
            p.jsx)(p.Fragment, {
                children: t.map((function(e, t) {
                    return (0,
                    p.jsx)("div", {
                        id: "".concat(0 === t ? "firstCampaign" : ""),
                        className: "".concat("1b5a9446-1e0e-498c-8bed-ee7e31e55b17" !== e.uuid || s ? "" : "hidden"),
                        children: (0,
                        p.jsx)(v, {
                            deleteCallback: r,
                            thumbId: e.thumbId,
                            uuid: e.uuid,
                            name: e.name,
                            created: e.created,
                            reach: e.reach,
                            plays: e.plays,
                            status: e.newStatus ? e.newStatus : e.status
                        }, t)
                    })
                }
                ))
            })
        }, jt = r(92077), wt = r.n(jt), kt = function(e) {
            var t = e.campaigns
              , r = [{
                Header: "UUID",
                accessor: "uuid"
            }, {
                Header: "Campaign name",
                accessor: "name"
            }, {
                Header: "Created",
                accessor: "created",
                Cell: function(e) {
                    return (0,
                    p.jsx)("div", {
                        children: be.ou.fromMillis(e.row.values.created).toFormat("yyyy-MM-dd HH:mm")
                    })
                }
            }, {
                Header: "Status",
                accessor: "status",
                Cell: u.t
            }, {
                Header: "Plays",
                accessor: "plays",
                Cell: function(e) {
                    return (0,
                    p.jsx)("div", {
                        children: wt()(e.row.values.plays).format("0,0")
                    })
                }
            }, {
                Header: "Impressions",
                accessor: "reach",
                Cell: function(e) {
                    return (0,
                    p.jsx)("div", {
                        children: wt()(e.row.values.reach).format("0,0")
                    })
                }
            }, {
                Header: "Actions",
                accessor: "actions",
                Cell: function(e) {
                    return (0,
                    p.jsxs)("div", {
                        className: "md:flex justify-between md:w-32 space-y-4 md:space-y-0 md:space-x-4 p-3 md:p-0",
                        children: [(0,
                        p.jsx)("div", {
                            className: "flex items-center",
                            children: (0,
                            p.jsxs)("a", {
                                className: "flex items-center justify-center px-1 rounded-lg md:bg-dark-500 md:bg-opacity-5 text-dark-default dark:text-dark-400",
                                href: "".concat("draft" !== e.row.values.status ? "/campaign/".concat(e.row.values.uuid) : "publish/basic/?cid=".concat(e.row.values.uuid)),
                                children: [(0,
                                p.jsx)("div", {
                                    className: "w-8 h-8",
                                    children: (0,
                                    p.jsx)(f.di, {
                                        set: "light"
                                    })
                                }), (0,
                                p.jsx)("div", {
                                    className: "md:hidden whitespace-pre dark:text-dark-400",
                                    children: " View campaign"
                                })]
                            })
                        }), "draft" !== e.row.values.status && (0,
                        p.jsx)("div", {
                            className: "cursor-pointer flex items-center",
                            children: (0,
                            p.jsxs)("a", {
                                href: "/publish/basic?id=".concat(e.row.values.uuid),
                                className: "flex items-center justify-center px-1 rounded-lg md:bg-dark-500 md:bg-opacity-5 text-dark-default dark:text-dark-400",
                                children: [(0,
                                p.jsx)("div", {
                                    className: "w-8 h-8",
                                    children: (0,
                                    p.jsx)(f.Xk, {
                                        set: "light"
                                    })
                                }), (0,
                                p.jsx)("div", {
                                    className: "md:hidden whitespace-pre dark:text-dark-400",
                                    children: " Copy campaign"
                                })]
                            })
                        }) || (0,
                        p.jsx)(p.Fragment, {})]
                    })
                }
            }];
            return (0,
            p.jsx)("div", {
                className: "w-full",
                children: (0,
                p.jsx)(u.iA, {
                    header: r,
                    tableData: t,
                    initialState: {
                        hiddenColumns: ["uuid"]
                    }
                })
            })
        }, Nt = function(e) {
            var t = e.otherClasses
              , r = c.useState(null)
              , a = (0,
            b.Z)(r, 2)
              , n = a[0]
              , s = a[1]
              , i = c.useState(null)
              , l = (0,
            b.Z)(i, 2)
              , o = l[0]
              , d = l[1];
            return (0,
            c.useEffect)((function() {
                var e = localStorage.getItem("mode");
                s(e),
                d([{
                    value: "darkMode",
                    label: "Dark Mode",
                    checked: !e || "darkMode" === e
                }, {
                    value: "lightMode",
                    label: "Light Mode",
                    checked: "lightMode" === e
                }])
            }
            ), []),
            (0,
            p.jsx)(ft.Z, {
                children: (0,
                p.jsxs)("div", {
                    className: "flex justify-between items-center p-5 ".concat(t || ""),
                    children: [(0,
                    p.jsx)("p", {
                        className: "text-dark dark:text-white",
                        children: "Appearance"
                    }), o && (0,
                    p.jsx)("div", {
                        className: "w-7/12",
                        children: (0,
                        p.jsx)(w.X, {
                            boxSize: "big",
                            type: "radio",
                            name: "primary",
                            flexClass: "flex-1 is-center-box",
                            onChange: function(e) {
                                !function(e) {
                                    var t = document.querySelector("html");
                                    "darkMode" === e ? (null === t || void 0 === t || t.classList.add("dark"),
                                    localStorage.setItem("mode", "darkMode")) : (null === t || void 0 === t || t.classList.remove("dark"),
                                    localStorage.setItem("mode", "lightMode"))
                                }(e.target.id.split("_")[1])
                            },
                            options: o
                        }, n)
                    })]
                })
            })
        }, Ct = r(96245), St = function(e) {
            var t = e.otherClasses
              , r = c.useState(!0)
              , a = (0,
            b.Z)(r, 2)
              , n = a[0]
              , s = a[1]
              , l = c.useState(null)
              , d = (0,
            b.Z)(l, 2)
              , u = d[0]
              , m = d[1]
              , f = (0,
            E.q)()
              , h = (f.notify,
            f.setReloadJwt)
              , x = f.reloadJwt
              , v = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                X.F.updateOnboarding({
                                    sw: "on" !== t
                                });
                            case 2:
                                !0 === (r = e.sent).hasError || r.token && (X.C.setJwt(r.token),
                                h(x + 1));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            c.useEffect)((function() {
                var e = X.C.getJwtUser();
                X.C.getJwtUser() && (!e.extra || !0 !== e.emailValidation || 0 !== Object.keys(e.extra).length && !1 !== e.extra.hasOnboarding ? s(!0) : s(!1))
            }
            ), []),
            (0,
            c.useEffect)((function() {
                var e = X.C.getJwtUser();
                X.C.getJwtUser() && (!e.extra || !0 !== e.emailValidation || 0 !== Object.keys(e.extra).length && !1 !== e.extra.hasOnboarding ? s(!0) : s(!1))
            }
            ), [x]),
            (0,
            c.useEffect)((function() {
                m([{
                    value: "off",
                    label: "Turn OFF",
                    checked: n
                }, {
                    value: "on",
                    label: "Turn ON",
                    checked: !n
                }])
            }
            ), [n]),
            (0,
            p.jsx)(ft.Z, {
                children: (0,
                p.jsxs)("div", {
                    className: "flex justify-between items-center p-5 ".concat(t || ""),
                    children: [(0,
                    p.jsx)("p", {
                        className: "text-dark dark:text-white",
                        children: "Onboarding Tour"
                    }), u && (0,
                    p.jsx)("div", {
                        className: "w-7/12",
                        children: (0,
                        p.jsx)(w.X, {
                            boxSize: "big",
                            type: "radio",
                            name: "onboarding",
                            flexClass: "flex-1 is-center-box",
                            onChange: function(e) {
                                var t = e.target.id.split("_")[1];
                                v(t)
                            },
                            options: u
                        }, String(u[0].checked))
                    })]
                })
            })
        };
        function Mt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Zt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Mt(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mt(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var Ot, Lt = at()((function() {
            return r.e(8279).then(r.t.bind(r, 38279, 23))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [38279]
                }
            }
        }), Tt = function(e) {
            var t, r = e.user, a = (0,
            C.Z)(), n = (0,
            E.q)(), l = n.notify, d = (n.setUser,
            n.setReloadJwt), u = n.reloadJwt, f = N.Ry().shape({
                lastName: N.Z_().min(2, a.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                })).required(a.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                email: N.Z_().email(a.formatMessage({
                    defaultMessage: "This is not a valid email address",
                    id: "Error.emailInvalid"
                })).required(a.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                })),
                firstName: N.Z_().min(2, a.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.minimumLength"
                }, {
                    min: "2"
                })).required(a.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                }))
            }), h = c.useState(r), x = (0,
            b.Z)(h, 2), v = x[0], y = x[1], S = r.avatar || "{}", M = (0,
            c.useState)(!1), Z = M[0], O = M[1], T = (0,
            c.useState)(!(!r.newEmail || r.newEmail === r.email)), P = T[0], I = T[1], D = (0,
            c.useState)(""), F = D[0], R = D[1], B = (t = f,
            (0,
            c.useCallback)(function() {
                var e = (0,
                i.Z)(o().mark((function e(r) {
                    var a;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                t.validate(r, {
                                    abortEarly: !1
                                });
                            case 3:
                                return a = e.sent,
                                e.abrupt("return", {
                                    values: a,
                                    errors: {}
                                });
                            case 7:
                                return e.prev = 7,
                                e.t0 = e.catch(0),
                                e.abrupt("return", {
                                    values: {},
                                    errors: e.t0.inner.reduce((function(e, t) {
                                        var r;
                                        return Zt(Zt({}, e), {}, (0,
                                        g.Z)({}, t.path, {
                                            type: null !== (r = t.type) && void 0 !== r ? r : "validation",
                                            message: t.message
                                        }))
                                    }
                                    ), {})
                                });
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [t])), A = (0,
            k.cI)({
                resolver: B
            }), W = A.register, V = A.handleSubmit, H = A.formState, z = (A.control,
            function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t, r, a;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (6 !== F.length) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3,
                                L.FT.changeEmail(F);
                            case 3:
                                (t = e.sent).hasError ? l(t.errorMessage, "error") : (l(t.errorMessage, "success"),
                                r = (0,
                                Ct.Z)(t.accessToken),
                                L.CR.setJwt(t),
                                (a = v).email = r.email,
                                a.newEmail = void 0,
                                I(!1),
                                y(a),
                                d(u + 1));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()), U = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return O(!0),
                                e.next = 3,
                                L.FT.updateAccount({
                                    firstName: t.firstName,
                                    lastName: t.lastName,
                                    phone: t.phone,
                                    email: t.email
                                });
                            case 3:
                                r = e.sent,
                                O(!1),
                                !0 === r.hasError ? l(r.message || "", "error") : (l(r.message || "", "success"),
                                r.token && (L.CR.setJwt(r.token),
                                d(u + 1)),
                                !0 === r.redirect && I(!0));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), _ = H.dirtyFields, G = H.errors, q = function(e) {
                return {
                    isDirty: _[e],
                    error: G[e]
                }
            };
            return (0,
            p.jsxs)("div", {
                className: "flex flex-col justify-evenly",
                children: [(0,
                p.jsx)("div", {
                    className: "pb-8",
                    children: (0,
                    p.jsx)(ge, {
                        edit: !0,
                        starter: S
                    })
                }), (0,
                p.jsx)("form", {
                    onSubmit: V(U),
                    children: (0,
                    p.jsxs)("div", {
                        className: (0,
                        m.f9)(gt || (gt = (0,
                        s.Z)(["max-w-full md:max-w-2xl mx-auto"]))),
                        children: [(0,
                        p.jsxs)("div", {
                            className: "z-10 flex-wrap justify-start space-y-8 md:flex ",
                            children: [(0,
                            p.jsxs)(j.K, {
                                fitX: !0,
                                spacing: "xl",
                                padding: !0,
                                children: [(0,
                                p.jsx)(w.II, {
                                    name: "firstName",
                                    innerRef: W,
                                    validation: q("firstName"),
                                    type: "text",
                                    label: "First Name",
                                    defaultValue: v.firstName,
                                    fullWidth: !0
                                }), (0,
                                p.jsx)(w.II, {
                                    name: "lastName",
                                    innerRef: W,
                                    validation: q("lastName"),
                                    type: "text",
                                    label: "Last Name",
                                    defaultValue: v.lastName,
                                    fullWidth: !0
                                })]
                            }), (0,
                            p.jsxs)(j.K, {
                                fitX: !0,
                                padding: !0,
                                spacing: "xl",
                                children: [(0,
                                p.jsx)(w.II, {
                                    name: "email",
                                    innerRef: W,
                                    validation: q("email"),
                                    type: "text",
                                    label: "Email",
                                    className: "input-s",
                                    defaultValue: v.email,
                                    fullWidth: !0
                                }), (0,
                                p.jsx)(w.II, {
                                    name: "phone",
                                    innerRef: W,
                                    validation: q("phone"),
                                    type: "text",
                                    className: "input-s",
                                    label: "Phone",
                                    defaultValue: v.phone,
                                    fullWidth: !0
                                })]
                            }), !0 === P && (0,
                            p.jsxs)("div", {
                                className: "w-full px-4 py-2 space-y-4 bg-white rounded-xl dark:bg-dark-200",
                                children: [(0,
                                p.jsxs)("h3", {
                                    className: "text-xl font-medium text-center dark:text-dark-400",
                                    children: [a.formatMessage({
                                        defaultMessage: "We've sent a code to your old email",
                                        id: 'ActivateEmail.WeveSentACode"'
                                    }), " "]
                                }), (0,
                                p.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: "w-9/12",
                                        children: (0,
                                        p.jsx)(Lt, {
                                            onChange: function(e) {
                                                R(e)
                                            },
                                            name: "code",
                                            inputMode: "numeric",
                                            type: "number",
                                            fields: 6
                                        })
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "w-3/12",
                                        children: (0,
                                        p.jsx)(w.zx, {
                                            onClick: z,
                                            type: "reset",
                                            color: "accent",
                                            fill: "outline",
                                            loading: Z,
                                            fullWidth: !0,
                                            children: a.formatMessage({
                                                defaultMessage: "Validate",
                                                id: "Button.Validate"
                                            })
                                        })
                                    })]
                                })]
                            }), (0,
                            p.jsx)("div", {
                                className: "w-full mx-auto max-w-15",
                                children: (0,
                                p.jsx)(w.zx, {
                                    type: "submit",
                                    color: "tertiary",
                                    loading: Z,
                                    fullWidth: !0,
                                    children: a.formatMessage({
                                        defaultMessage: "Save",
                                        id: "Button.Save"
                                    })
                                })
                            })]
                        }), (0,
                        p.jsx)("div", {
                            className: "pt-8 onboarding-switch-mobile",
                            children: (0,
                            p.jsx)(St, {})
                        }), (0,
                        p.jsx)("div", {
                            className: "pt-8",
                            children: (0,
                            p.jsx)(Nt, {})
                        })]
                    })
                })]
            })
        };
        function Et(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Pt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Et(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Et(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var It, Dt = function(e) {
            var t, r = e.user, a = e.isGoogle, n = (0,
            C.Z)(), l = (0,
            E.q)(), d = l.notify, u = (l.setUser,
            N.Ry().shape({
                password: a ? N.Z_().nullable() : N.Z_().min(8, n.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "8"
                })).required(n.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                newpassword: N.Z_().min(8, n.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "8"
                })).test("test-name", n.formatMessage({
                    defaultMessage: "The password doesn't meet the minimum requirements",
                    id: "Error.passwordMinimunRequirements"
                }), (function(e) {
                    return !!e && Z()(e).score >= 2
                }
                )).required(n.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                }))
            })), f = c.useState(r), h = (0,
            b.Z)(f, 2), x = (h[0],
            h[1],
            (0,
            c.useState)(!1)), v = x[0], y = x[1], S = (0,
            c.useState)(!(!r.newEmail || "" === r.newEmail)), M = (S[0],
            S[1]), O = (0,
            c.useState)(""), T = (O[0],
            O[1],
            t = u,
            (0,
            c.useCallback)(function() {
                var e = (0,
                i.Z)(o().mark((function e(r) {
                    var a;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                t.validate(r, {
                                    abortEarly: !1
                                });
                            case 3:
                                return a = e.sent,
                                e.abrupt("return", {
                                    values: a,
                                    errors: {}
                                });
                            case 7:
                                return e.prev = 7,
                                e.t0 = e.catch(0),
                                e.abrupt("return", {
                                    values: {},
                                    errors: e.t0.inner.reduce((function(e, t) {
                                        var r;
                                        return Pt(Pt({}, e), {}, (0,
                                        g.Z)({}, t.path, {
                                            type: null !== (r = t.type) && void 0 !== r ? r : "validation",
                                            message: t.message
                                        }))
                                    }
                                    ), {})
                                });
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [t])), P = (0,
            k.cI)({
                resolver: T
            }), I = P.register, D = P.handleSubmit, F = P.formState, R = (P.control,
            function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return y(!0),
                                e.next = 3,
                                L.FT.changePassword(t.password, t.newpassword);
                            case 3:
                                r = e.sent,
                                y(!1),
                                !0 === r.hasError ? d(r.message || "", "error") : (d(r.message || "", "success"),
                                !0 === r.redirect && M(!0));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()), B = F.dirtyFields, A = F.errors, W = function(e) {
                return {
                    isDirty: B[e],
                    error: A[e]
                }
            };
            return (0,
            p.jsxs)("div", {
                className: "flex flex-col justify-evenly",
                children: [(0,
                p.jsx)("div", {
                    className: "pb-8",
                    children: (0,
                    p.jsx)(ge, {
                        starter: L.CR.getJwtUser().avatar || "{}"
                    })
                }), (0,
                p.jsx)("form", {
                    onSubmit: D(R),
                    children: (0,
                    p.jsx)("div", {
                        className: (0,
                        m.f9)(Ot || (Ot = (0,
                        s.Z)(["max-w-full md:max-w-2xl mx-auto"]))),
                        children: (0,
                        p.jsxs)(j.K, {
                            direction: "horizontal",
                            spacing: "none",
                            wrap: !0,
                            otherClass: "space-y-8",
                            children: [!a && (0,
                            p.jsx)(w.II, {
                                name: "password",
                                validation: W("password"),
                                innerRef: I,
                                fullWidth: !0,
                                className: "input-s",
                                type: "password",
                                showStrength: !1,
                                label: n.formatMessage({
                                    defaultMessage: "Old Password",
                                    id: "Label.OldPassword"
                                })
                            }), (0,
                            p.jsx)(w.II, {
                                name: "newpassword",
                                className: "input-s",
                                validation: W("newpassword"),
                                innerRef: I,
                                fullWidth: !0,
                                type: "password",
                                showStrength: !0,
                                label: n.formatMessage({
                                    defaultMessage: "New Password",
                                    id: "Label.NewPassword"
                                })
                            }), (0,
                            p.jsx)("div", {
                                className: "w-full mx-auto max-w-15",
                                children: (0,
                                p.jsx)(w.zx, {
                                    type: "submit",
                                    color: "tertiary",
                                    loading: v,
                                    fullWidth: !0,
                                    children: n.formatMessage({
                                        defaultMessage: "Save",
                                        id: "Button.Save"
                                    })
                                })
                            })]
                        })
                    })
                })]
            })
        };
        function Ft(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Rt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ft(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ft(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var Bt = function(e) {
            var t, r, a = e.company, n = e.countries, l = (0,
            C.Z)(), d = (0,
            E.q)(), f = d.notify, h = (d.setUser,
            c.useState(a)), x = (0,
            b.Z)(h, 2), v = x[0], y = x[1], S = c.useState(n), M = (0,
            b.Z)(S, 2), Z = M[0], T = (M[1],
            (0,
            c.useState)(v.companyType ? "person" === v.companyType ? 1 : 2 : null)), P = T[0], I = T[1], D = (0,
            c.useState)(v.countryIso3 ? v.countryIso3 : ""), F = D[0], R = D[1], B = (0,
            c.useState)(v.locationId ? v.locationId : ""), A = B[0], W = B[1], V = (0,
            c.useState)(""), H = V[0], z = V[1], U = (0,
            c.useState)(""), _ = U[0], G = U[1], q = (0,
            c.useState)(v.vat ? "true" === v.vat ? 1 : 2 : 1), J = q[0], K = q[1], X = (0,
            c.useState)(!1), Y = X[0], $ = X[1], Q = c.useState(!1), ee = (0,
            b.Z)(Q, 2), te = ee[0], re = ee[1], ae = (0,
            O.useRouter)(), ne = (0,
            c.useState)([{
                id: 1,
                title: "Personal Account",
                description: "Same benefits as a business account, but less hassle! Invoices will be issued to you directly. ",
                icon: "personal-account"
            }, {
                id: 2,
                title: "Business Account",
                description: "Perfect if you need the invoices to reflect your company information (also makes you look cooler). ",
                icon: "company-account"
            }])[0], se = (0,
            c.useState)([{
                id: 1,
                title: "Yes, we pay VAT"
            }, {
                id: 2,
                title: "No, we don't pay VAT"
            }]), ie = se[0], le = (se[1],
            N.Ry().shape({
                firstName: N.Z_().when("companyType", {
                    is: "1",
                    then: N.Z_().min(2, l.formatMessage({
                        defaultMessage: "The field needs to be at least {min} characters long",
                        id: "Error.minimumLength"
                    }, {
                        min: "2"
                    })).required(l.formatMessage({
                        defaultMessage: "Field is mandatory",
                        id: "Error.mandatoryField"
                    }))
                }),
                lastName: N.Z_().when("companyType", {
                    is: "1",
                    then: N.Z_().min(2, l.formatMessage({
                        defaultMessage: "The field needs to be at least {min} characters long",
                        id: "Error.minimumLength"
                    }, {
                        min: "2"
                    })).required(l.formatMessage({
                        defaultMessage: "Field is mandatory",
                        id: "Error.mandatoryField"
                    }))
                }),
                country: N.Z_().min(3, l.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "3"
                })).required(l.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                city: N.Z_().min(3, l.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "3"
                })).required(l.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                address: N.Z_().min(3, l.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "3"
                })).required(l.formatMessage({
                    defaultMessage: "Field is mandatory",
                    id: "Error.mandatoryField"
                })),
                businessName: N.Z_().when("companyType", {
                    is: "2",
                    then: N.Z_().min(3, l.formatMessage({
                        defaultMessage: "The field needs to be at least {min} characters long",
                        id: "Error.minimumLength"
                    }, {
                        min: "3"
                    })).required(l.formatMessage({
                        defaultMessage: "Field is mandatory",
                        id: "Error.mandatoryField"
                    }))
                }),
                regNumber: N.Z_().when("vatSwitch", {
                    is: "1",
                    then: N.Z_().min(4, l.formatMessage({
                        defaultMessage: "The field needs to be at least {min} characters long",
                        id: "Error.minimumLength"
                    }, {
                        min: "4"
                    })).required(l.formatMessage({
                        defaultMessage: "Field is mandatory",
                        id: "Error.mandatoryField"
                    }))
                })
            })), oe = (r = le,
            (0,
            c.useCallback)(function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var a;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                r.validate(t, {
                                    abortEarly: !1
                                });
                            case 3:
                                return a = e.sent,
                                e.abrupt("return", {
                                    values: a,
                                    errors: {}
                                });
                            case 7:
                                return e.prev = 7,
                                e.t0 = e.catch(0),
                                e.abrupt("return", {
                                    values: {},
                                    errors: e.t0.inner.reduce((function(e, t) {
                                        var r;
                                        return Rt(Rt({}, e), {}, (0,
                                        g.Z)({}, t.path, {
                                            type: null !== (r = t.type) && void 0 !== r ? r : "validation",
                                            message: t.message
                                        }))
                                    }
                                    ), {})
                                });
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [r])), ce = (0,
            k.cI)({
                resolver: oe,
                defaultValues: {
                    firstName: v.firstName,
                    lastName: v.lastName,
                    city: v.city,
                    country: v.country,
                    businessName: v.name,
                    vatSwitch: "true" === v.vat ? 1 : 2,
                    companyType: P || void 0
                }
            }), de = ce.register, ue = ce.handleSubmit, me = ce.formState, fe = ce.control, he = ce.setValue, pe = ce.getValues;
            console.log("selectedAccountType", P);
            var xe = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r, a;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                r = {
                                    companyId: t.regNumber ? t.regNumber : "-",
                                    additionalId: t.additionalId ? t.additionalId : "-",
                                    name: "1" === t.companyType ? t.firstName + " " + t.lastName : t.businessName,
                                    firstName: "1" === t.companyType ? t.firstName : "-",
                                    lastName: "1" === t.companyType ? t.lastName : "-",
                                    vat: 1 === J ? "true" : "false",
                                    companyType: "1" === t.companyType ? "person" : "company",
                                    address: {
                                        country: t.country,
                                        city: t.city,
                                        address: t.address,
                                        iso3: F,
                                        locationId: A || "0",
                                        latitude: H || "-",
                                        longitude: _ || "-"
                                    }
                                },
                                $(!0),
                                e.next = 5,
                                L.FT.setUserCompanyData(r);
                            case 5:
                                (a = e.sent).hasError ? f(a.message || "", "error") : (f(a.message || "", "success"),
                                ae.replace(ae.asPath)),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                f("Try again later", "success");
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , ve = me.dirtyFields
              , ge = me.errors
              , be = function(e) {
                return {
                    isDirty: ve[e],
                    error: ge[e]
                }
            };
            (0,
            c.useEffect)((function() {
                he("vatSwitch", 1 === P ? 1 : 0)
            }
            ), [P]),
            (0,
            c.useEffect)((function() {
                y(a)
            }
            ), [a]),
            (0,
            c.useEffect)((function() {
                F !== v.countryIso3 && (v.city = "",
                he("city", ""))
            }
            ), [F]),
            (0,
            c.useEffect)((function() {
                $(!1)
            }
            ), [v]);
            var ye = {
                buttonText: "Ok",
                action: function() {
                    re(!1)
                }
            }
              , je = {
                buttonText: "Cancel",
                action: function() {
                    re(!1)
                }
            };
            return console.log("getValues().companyType ", pe()),
            (0,
            p.jsxs)("div", {
                className: "flex justify-center flex-1 w-full flex-column",
                children: [null !== (t = te && (0,
                p.jsx)(u.Vq, {
                    description: "Additional verifications are needed for this action \n. If you want to switch to a personal account, please contact the support team via the Chat button from the bottom-right corner of the screen.",
                    title: "Switch to Personal Account",
                    primaryButton: ye,
                    secondaryButton: je
                })) && void 0 !== t ? t : null, (0,
                p.jsx)("form", {
                    onSubmit: ue(xe),
                    children: (0,
                    p.jsx)("div", {
                        className: (0,
                        m.f9)(It || (It = (0,
                        s.Z)(["max-w-full ", " mx-auto"])), P ? "" : "md:max-w-2xl"),
                        children: (0,
                        p.jsxs)("div", {
                            className: "z-10 flex-wrap justify-start space-y-4 md:flex ",
                            children: [(0,
                            p.jsx)("div", {
                                className: "w-full text-center",
                                children: (0,
                                p.jsx)("h1", {
                                    className: "my-8 text-lg font-semibold dark:text-white text-dark",
                                    children: P ? "Insert details of your ".concat(ne[P - 1].title) : "Choose what type of account do you want:"
                                })
                            }), (0,
                            p.jsxs)("div", {
                                className: "hidden",
                                children: [(0,
                                p.jsx)(w.II, {
                                    className: "input-s",
                                    name: "companyType",
                                    type: "hidden",
                                    innerRef: de,
                                    value: P ? P.toString() : "2",
                                    validation: be("companyType"),
                                    placeholder: "Insert your email",
                                    label: "",
                                    fullWidth: !0
                                }, P ? P.toString() : "2"), (0,
                                p.jsx)(w.II, {
                                    className: "input-s",
                                    name: "vatSwitch",
                                    type: "hidden",
                                    innerRef: de,
                                    validation: be("vatSwitch"),
                                    placeholder: "Insert your email",
                                    label: "",
                                    fullWidth: !0
                                })]
                            }), (0,
                            p.jsx)("div", {
                                className: "flex flex-row items-center justify-around w-full space-x-7",
                                children: !P && ne.map((function(e) {
                                    return (0,
                                    p.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center px-3 py-5 bg-white dark:bg-dark-200 rounded-3xl",
                                        children: [(0,
                                        p.jsxs)("div", {
                                            className: "mb-4",
                                            children: [(0,
                                            p.jsx)("img", {
                                                src: "/images/".concat(e.icon, "-dark.svg"),
                                                loading: "lazy",
                                                className: "block m-auto dark:hidden"
                                            }), (0,
                                            p.jsx)("img", {
                                                src: "/images/".concat(e.icon, ".svg"),
                                                loading: "lazy",
                                                className: "hidden m-auto dark:block"
                                            })]
                                        }), (0,
                                        p.jsx)("h1", {
                                            className: "font-semibold dark:text-dark-400",
                                            children: e.title
                                        }), (0,
                                        p.jsx)("h1", {
                                            className: "mt-2 mb-4 text-center dark:text-dark-300",
                                            children: e.description
                                        }), (0,
                                        p.jsx)(w.zx, {
                                            onClick: function() {
                                                I(e.id),
                                                he("companyType", e.id)
                                            },
                                            className: "mt-3",
                                            fullWidth: !0,
                                            type: "button",
                                            fill: "outlinedark",
                                            color: "primary",
                                            children: "Select"
                                        })]
                                    }, e.id)
                                }
                                ))
                            }), P && (0,
                            p.jsxs)(p.Fragment, {
                                children: [(0,
                                p.jsx)(j.K, {
                                    fitX: !0,
                                    spacing: "xl",
                                    padding: !0,
                                    children: 1 === P ? (0,
                                    p.jsxs)(p.Fragment, {
                                        children: [(0,
                                        p.jsx)(w.II, {
                                            className: "input-s",
                                            name: "firstName",
                                            innerRef: de,
                                            validation: be("firstName"),
                                            type: "text",
                                            label: l.formatMessage({
                                                defaultMessage: "First Name",
                                                id: "Label.Firstname"
                                            }),
                                            defaultValue: v.firstName,
                                            fullWidth: !0
                                        }), (0,
                                        p.jsx)(w.II, {
                                            className: "input-s",
                                            name: "lastName",
                                            innerRef: de,
                                            validation: be("lastName"),
                                            type: "text",
                                            label: l.formatMessage({
                                                defaultMessage: "Last Name",
                                                id: "Label.Lastname"
                                            }),
                                            defaultValue: v.lastName,
                                            fullWidth: !0
                                        })]
                                    }) : (0,
                                    p.jsxs)("div", {
                                        className: "w-full",
                                        children: [(0,
                                        p.jsxs)(j.K, {
                                            fitX: !0,
                                            spacing: "xl",
                                            padding: !1,
                                            children: [(0,
                                            p.jsx)(w.II, {
                                                className: "input-s",
                                                name: "businessName",
                                                innerRef: de,
                                                validation: be("businessName"),
                                                type: "text",
                                                label: l.formatMessage({
                                                    defaultMessage: "Business name*",
                                                    id: "Label.BusinessName"
                                                }),
                                                defaultValue: v.name,
                                                fullWidth: !0,
                                                hint: "Switch to a personal account if you don't have a company."
                                            }), (0,
                                            p.jsx)(k.Qr, {
                                                control: fe,
                                                name: "country",
                                                render: function(e, t) {
                                                    var r = e.onChange;
                                                    e.onBlur,
                                                    e.value,
                                                    e.name,
                                                    e.ref,
                                                    t.invalid,
                                                    t.isTouched,
                                                    t.isDirty;
                                                    return (0,
                                                    p.jsx)(u.GL, {
                                                        placeholderText: l.formatMessage({
                                                            defaultMessage: "Write a country here",
                                                            id: "label.Writeacountry"
                                                        }),
                                                        innerRef: de,
                                                        selName: "country",
                                                        api: null,
                                                        validation: be("country"),
                                                        source: "here-auth",
                                                        sourceData: Z,
                                                        hasDefaultValue: !0,
                                                        defaultValue: v.country && {
                                                            label: v.country ? v.country : null,
                                                            id: v.country,
                                                            value: v.country
                                                        },
                                                        onChange: function(e) {
                                                            e && e.value && e.country ? (R(e.country),
                                                            r(e.label)) : r("")
                                                        },
                                                        fullWidth: !0,
                                                        label: "Billing country or region*",
                                                        hint: "The legal country or region registered with your government and tax agency."
                                                    })
                                                }
                                            }), (0,
                                            p.jsx)(k.Qr, {
                                                control: fe,
                                                name: "city",
                                                render: function(e, t) {
                                                    var r = e.onChange;
                                                    e.onBlur,
                                                    e.value,
                                                    e.name,
                                                    e.ref,
                                                    t.invalid,
                                                    t.isTouched,
                                                    t.isDirty;
                                                    return (0,
                                                    p.jsx)(u.GL, {
                                                        placeholderText: v.city,
                                                        innerRef: de,
                                                        selName: "city",
                                                        api: null,
                                                        validation: be("city"),
                                                        source: "here",
                                                        hasDefaultValue: !0,
                                                        defaultValue: v.city && {
                                                            label: v.city,
                                                            id: v.city,
                                                            value: v.city
                                                        },
                                                        onChange: function(e) {
                                                            e ? (W(e.locationId),
                                                            z(e.latitude),
                                                            G(e.longitude),
                                                            r(e.value)) : r("")
                                                        },
                                                        fullWidth: !0,
                                                        label: "City",
                                                        resultType: "city",
                                                        countryArea: F,
                                                        suggestionsType: "city",
                                                        disabled: !F
                                                    }, "".concat(v.city, "_").concat(F))
                                                }
                                            })]
                                        }), (0,
                                        p.jsx)(j.K, {
                                            fitX: !0,
                                            spacing: "xl",
                                            padding: !1,
                                            children: (0,
                                            p.jsx)(w.II, {
                                                className: "input-s",
                                                name: "address",
                                                innerRef: de,
                                                validation: be("address"),
                                                type: "text",
                                                label: l.formatMessage({
                                                    defaultMessage: "Address",
                                                    id: "Label.Address"
                                                }),
                                                defaultValue: v.address,
                                                fullWidth: !0
                                            })
                                        })]
                                    })
                                }), 2 === P ? (0,
                                p.jsxs)(j.K, {
                                    fitX: !0,
                                    spacing: "xl",
                                    padding: !0,
                                    children: [(0,
                                    p.jsxs)("div", {
                                        className: "relative z-50 ml-4",
                                        children: [(0,
                                        p.jsx)("label", {
                                            className: "text-sm pointer-events-none animated origin-0 top-2 left-4 select-box-label dark:text-dark-400",
                                            children: "VAT"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "flex flex-row mt-2 flex-nowrap",
                                            children: ie.map((function(e) {
                                                return (0,
                                                p.jsxs)("div", {
                                                    className: "flex flex-row dark:bg-dark-200 bg-[#D9D9D9] dark:text-white text-dark-200 rounded-2xl whitespace-nowrap p-3 mr-3 cursor-pointer",
                                                    onClick: function() {
                                                        K(e.id),
                                                        he("vatSwitch", e.id)
                                                    },
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "w-5 h-5 border ".concat(J === e.id ? "border-[#EB3F3F]" : "border-dark-300", " bg-white rounded-2xl flex items-center justify-center mr-4"),
                                                        children: (0,
                                                        p.jsx)("div", {
                                                            className: "w-2 h-2 ".concat(J === e.id ? "bg-[#EB3F3F]" : "bg-white", " rounded-2xl")
                                                        })
                                                    }), e.title]
                                                }, e.id)
                                            }
                                            ))
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "text-dark-default dark:text-dark-300 w-fit text-xs pt-2 space-x-1",
                                            children: (0,
                                            p.jsx)("p", {
                                                className: "inline",
                                                children: "If you're an European company and do not pay VAT, select NO. Otherwise, select YES."
                                            })
                                        })]
                                    }), (0,
                                    p.jsx)(w.II, {
                                        name: "regNumber",
                                        className: "input-s",
                                        innerRef: de,
                                        validation: be("regNumber"),
                                        type: "text",
                                        label: 1 === J ? "Tax Identification Number*" : "Company Identification Number*",
                                        defaultValue: v.regNumber,
                                        fullWidth: !1,
                                        hint: 1 === J ? "If your company is from the US, you should add the EIN here, if from outside US, the EU VAT Number or any other TAX ID for the invoice" : "Add your Company Identification Number to help us identify your company"
                                    }), (0,
                                    p.jsx)(w.II, {
                                        className: "input-s",
                                        name: "additionalId",
                                        innerRef: de,
                                        validation: be("additionalId"),
                                        type: "text",
                                        label: l.formatMessage({
                                            defaultMessage: "Additional Identification",
                                            id: "Label.AdditionalIdentification"
                                        }),
                                        defaultValue: v.additionalId,
                                        fullWidth: !1,
                                        hint: "Add any other information you consider necessary for the invoice"
                                    })]
                                }) : (0,
                                p.jsxs)(p.Fragment, {
                                    children: [(0,
                                    p.jsxs)(j.K, {
                                        fitX: !0,
                                        spacing: "xl",
                                        padding: !0,
                                        children: [(0,
                                        p.jsx)(w.II, {
                                            name: "regNumber",
                                            innerRef: de,
                                            validation: be("regNumber"),
                                            type: "text",
                                            className: "input-s",
                                            label: l.formatMessage({
                                                defaultMessage: "Personal Identification Number",
                                                id: "Label.PersonalIdentificationNumber"
                                            }),
                                            defaultValue: v.regNumber,
                                            fullWidth: !0
                                        }), (0,
                                        p.jsx)(k.Qr, {
                                            control: fe,
                                            name: "country",
                                            render: function(e, t) {
                                                var r = e.onChange;
                                                e.onBlur,
                                                e.value,
                                                e.name,
                                                e.ref,
                                                t.invalid,
                                                t.isTouched,
                                                t.isDirty;
                                                return (0,
                                                p.jsx)(u.GL, {
                                                    placeholderText: l.formatMessage({
                                                        defaultMessage: "Write a country here",
                                                        id: "label.Writeacountry"
                                                    }),
                                                    innerRef: de,
                                                    selName: "country",
                                                    api: null,
                                                    hasDefaultValue: !0,
                                                    defaultValue: v.country && {
                                                        label: v.country,
                                                        id: v.country,
                                                        value: v.country
                                                    },
                                                    label: "Country",
                                                    validation: be("country"),
                                                    source: "here-auth",
                                                    sourceData: Z,
                                                    onChange: function(e) {
                                                        e && e.country && e.label ? (R(e.country),
                                                        r(e.label)) : r("")
                                                    },
                                                    fullWidth: !0
                                                })
                                            }
                                        }), (0,
                                        p.jsx)(k.Qr, {
                                            control: fe,
                                            name: "city",
                                            render: function(e, t) {
                                                var r = e.onChange;
                                                e.onBlur,
                                                e.value,
                                                e.name,
                                                e.ref,
                                                t.invalid,
                                                t.isTouched,
                                                t.isDirty;
                                                return (0,
                                                p.jsx)(u.GL, {
                                                    placeholderText: v.city,
                                                    innerRef: de,
                                                    selName: "city",
                                                    api: null,
                                                    validation: be("city"),
                                                    source: "here",
                                                    hasDefaultValue: !0,
                                                    defaultValue: v.city && {
                                                        label: v.city,
                                                        id: v.city,
                                                        value: v.city
                                                    },
                                                    onChange: function(e) {
                                                        e ? (W(e.locationId),
                                                        z(e.latitude),
                                                        G(e.longitude),
                                                        r(e.value)) : r("")
                                                    },
                                                    fullWidth: !0,
                                                    label: "City",
                                                    resultType: "city",
                                                    countryArea: F,
                                                    suggestionsType: "city",
                                                    disabled: !F
                                                }, "".concat(v.city))
                                            }
                                        })]
                                    }), (0,
                                    p.jsx)(j.K, {
                                        fitX: !0,
                                        spacing: "xl",
                                        padding: !0,
                                        children: (0,
                                        p.jsx)(w.II, {
                                            className: "input-s",
                                            name: "address",
                                            innerRef: de,
                                            validation: be("address"),
                                            type: "text",
                                            label: l.formatMessage({
                                                defaultMessage: "Address",
                                                id: "Label.Address"
                                            }),
                                            defaultValue: v.address,
                                            fullWidth: !0
                                        })
                                    })]
                                }), (0,
                                p.jsxs)("div", {
                                    className: "w-full mx-auto max-w-15",
                                    children: [(0,
                                    p.jsx)(w.zx, {
                                        type: "submit",
                                        color: "secondary",
                                        fill: "outline",
                                        loading: Y,
                                        fullWidth: !0,
                                        children: l.formatMessage({
                                            defaultMessage: "Save Details",
                                            id: "Button.Save"
                                        })
                                    }), Y ? (0,
                                    p.jsx)("h1", {
                                        className: "font-semibold text-center underline cursor-pointer mt-7 text-primary-500",
                                        children: "Loading..."
                                    }) : (0,
                                    p.jsxs)("h1", {
                                        className: "font-semibold text-center underline cursor-pointer mt-7 text-primary-500",
                                        onClick: function() {
                                            P - 1 === 1 && "company" === v.companyType ? re(!0) : (I(P - 1 === 0 ? 2 : 1),
                                            he("companyType", P - 1 === 0 ? 2 : 1))
                                        },
                                        children: ["Switch to a ", P - 1 === 1 ? "Personal Account" : "Business Account"]
                                    })]
                                })]
                            })]
                        })
                    })
                })]
            })
        }
          , At = r(97052)
          , Wt = r(11476)
          , Vt = r(13023)
          , Ht = r(29383);
        function zt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? zt(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zt(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var _t = function(e) {
            var t = e.industries
              , r = e.screen
              , a = (0,
            C.Z)()
              , n = (0,
            O.useRouter)()
              , s = (0,
            E.q)().notify
              , l = (0,
            c.useState)(null)
              , d = l[0]
              , u = l[1]
              , m = c.useContext(At.W)
              , f = m.publishState
              , h = m.dispatch
              , x = (0,
            c.useState)(f.name || "New Campaign")
              , v = x[0]
              , b = x[1]
              , y = (0,
            c.useState)()
              , j = y[0]
              , S = y[1]
              , M = (0,
            c.useState)(!1)
              , Z = M[0]
              , L = M[1]
              , T = (0,
            He.ZP)()
              , P = T.setState
              , I = T.state
              , D = (I.run,
            I.tourActive)
              , F = I.stepIndex
              , R = I.steps;
            (0,
            c.useEffect)((function() {
                D && P(F < 3 ? {
                    run: !0,
                    stepIndex: 3,
                    steps: R,
                    tourActive: D
                } : {
                    run: !0,
                    stepIndex: 4,
                    steps: R,
                    tourActive: D
                })
            }
            ), []),
            (0,
            c.useEffect)((function() {
                "admin" === X.C.getJwtUser().role && L(!0)
            }
            ), []);
            var B, A = N.Ry().shape({
                name: N.Z_().min(3, a.formatMessage({
                    defaultMessage: "The field needs to be at least {min} characters long",
                    id: "Error.minimumLength"
                }, {
                    min: "3"
                })).required(a.formatMessage({
                    defaultMessage: "*Campaign name is mandatory!",
                    id: "Error.mandatoryFieldd"
                })),
                industry: N.Z_().required(a.formatMessage({
                    defaultMessage: "*Industry field is mandatory!",
                    id: "Error.mandatoryFieldd"
                }))
            }), W = (B = A,
            (0,
            c.useCallback)(function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                B.validate(t, {
                                    abortEarly: !1
                                });
                            case 3:
                                return r = e.sent,
                                e.abrupt("return", {
                                    values: r,
                                    errors: {}
                                });
                            case 7:
                                return e.prev = 7,
                                e.t0 = e.catch(0),
                                e.abrupt("return", {
                                    values: {},
                                    errors: e.t0.inner.reduce((function(e, t) {
                                        var r;
                                        return Ut(Ut({}, e), {}, (0,
                                        g.Z)({}, t.path, {
                                            type: null !== (r = t.type) && void 0 !== r ? r : "validation",
                                            message: t.message
                                        }))
                                    }
                                    ), {})
                                });
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [B])), V = (0,
            c.useState)(null), H = V[0], z = V[1];
            c.useEffect((function() {
                r && s("Fill in the data and click on Continue.", "success", "top-right", "The screen was added to you campaign. ")
            }
            ), [r]),
            c.useEffect((function() {
                if (t) {
                    var e = t.map((function(e) {
                        var t = {
                            value: "".concat(e.id),
                            label: e.label
                        };
                        return f.industry && f.industry === "".concat(e.label) && (S(t),
                        J("industry", f.industry)),
                        t
                    }
                    ));
                    z(e),
                    f.industry
                }
                return function() {}
            }
            ), [t]);
            var U = (0,
            k.cI)({
                reValidateMode: "onBlur",
                mode: "onTouched",
                resolver: W,
                defaultValues: {
                    name: "",
                    industry: f.industry ? f.industry : ""
                }
            })
              , _ = U.register
              , G = U.handleSubmit
              , q = U.formState
              , J = U.setValue
              , K = U.control;
            (0,
            c.useEffect)((function() {
                var e = function() {
                    var e = f.name
                      , t = X.C.getJwtUser().campaign_prefix;
                    return t ? e.substring(0, null === t || void 0 === t ? void 0 : t.length) === t ? e : t + " " + e : e.startsWith("[MANAGED]") && n.query.cId ? e.replace("[MANAGED] ", "") : e
                }();
                J("name", e),
                f.industry && (S({
                    value: f.industry,
                    label: f.industry
                }),
                J("industry", f.industry))
            }
            ), [f]);
            var Y = q.dirtyFields
              , $ = q.errors
              , Q = function(e) {
                return {
                    isDirty: Y[e],
                    error: $[e]
                }
            };
            return (0,
            p.jsxs)("div", {
                className: "flex flex-col min-h-screen page-section",
                children: [(0,
                p.jsx)(Vt.Z, {
                    title: "Publish",
                    subtitle: v,
                    backBtn: "/",
                    hideAddBtn: !0
                }), (0,
                p.jsxs)("form", {
                    onSubmit: G((function(e) {
                        var t = "admin" === X.C.getJwtUser().role ? 0 : 2
                          , r = d;
                        if (r) {
                            var a = new Date
                              , s = new Date(r);
                            t = (0,
                            Ht.Z)(s, a)
                        }
                        h({
                            type: Wt.df.setBasic,
                            payload: {
                                name: e.name,
                                date: t,
                                customDate: r,
                                industry: e.industry.label || e.industry,
                                type: "HyperLocal"
                            }
                        }),
                        n.push("/publish/filters/?campaignId=".concat(f.uuid))
                    }
                    )),
                    className: "flex flex-col flex-1 pb-20 justify-evenly",
                    children: [(0,
                    p.jsxs)("div", {
                        className: "flex items-center h-50",
                        children: [(0,
                        p.jsx)("img", {
                            src: "/images/publish-start.svg",
                            loading: "lazy",
                            className: "block m-auto dark:hidden"
                        }), (0,
                        p.jsx)("img", {
                            src: "/images/publish-start-dark.svg",
                            loading: "lazy",
                            className: "hidden m-auto dark:block"
                        })]
                    }), (0,
                    p.jsxs)("div", {
                        className: "flex-col items-center justify-center mx-auto md:flex md:max-w-md lg:h-100-80 ",
                        children: [(0,
                        p.jsxs)("div", {
                            id: "campaignForm",
                            className: "w-full",
                            children: [(0,
                            p.jsx)(w.II, {
                                name: "name",
                                "data-cy": "basicName",
                                innerRef: _,
                                label: "Campaign name",
                                validation: Q("name"),
                                onChange: function(e) {
                                    b(e.target.value)
                                }
                            }), H && (0,
                            p.jsx)(k.Qr, {
                                control: K,
                                name: "industry",
                                defaultValue: null === j || void 0 === j ? void 0 : j.label,
                                render: function(e, t) {
                                    var r = e.onChange;
                                    e.onBlur,
                                    e.value,
                                    e.ref,
                                    t.invalid,
                                    t.isTouched,
                                    t.isDirty;
                                    return (0,
                                    p.jsx)(w.lq, {
                                        options: H,
                                        defaultValue: j || void 0,
                                        onChange: function(e) {
                                            S(e),
                                            r(e.label)
                                        },
                                        label: "Industry",
                                        validation: Q("industry"),
                                        "data-cy": "basicIndustry",
                                        dataCy: "basicIndustry",
                                        isMulti: !1,
                                        fullWidth: !0,
                                        isClearable: !1,
                                        selName: "industry"
                                    }, null === j || void 0 === j ? void 0 : j.value)
                                }
                            }), Z && (0,
                            p.jsx)(w.II, {
                                type: "date",
                                name: "startdate",
                                "data-cy": "startdate",
                                innerRef: _,
                                label: "Start date",
                                onChange: function(e) {
                                    u(e.target.value)
                                }
                            })]
                        }), (0,
                        p.jsx)("div", {
                            children: (0,
                            p.jsx)("div", {
                                className: "pt-16 mx-auto w-72 pb-7",
                                children: (0,
                                p.jsx)(w.zx, {
                                    id: "continuePublishBasic",
                                    type: "submit",
                                    color: "primary",
                                    loading: !1,
                                    fullWidth: !0,
                                    children: a.formatMessage({
                                        defaultMessage: "Next",
                                        id: "Button.Next"
                                    })
                                })
                            })
                        })]
                    })]
                })]
            })
        }
          , Gt = r(1595)
          , qt = r(96486);
        function Jt(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Kt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Jt(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jt(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var Xt, Yt, $t, Qt, er, tr, rr, ar, nr, sr = at()((function() {
            return Promise.all([r.e(2344), r.e(8831), r.e(5222)]).then(r.bind(r, 45222))
        }
        ), {
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [45222]
                }
            }
        }), ir = function(e) {
            var t, r, a, n = e.locationsList, s = (0,
            O.useRouter)(), l = L.CR.getJwtUser(), d = c.useState("1"), m = (0,
            b.Z)(d, 2), f = (m[0],
            m[1]), h = c.useState("1"), x = (0,
            b.Z)(h, 2), v = (x[0],
            x[1]), g = c.useState(!1), y = (0,
            b.Z)(g, 2), j = y[0], w = y[1], k = (0,
            c.useRef)([]), N = (0,
            c.useRef)([]);
            (0,
            c.useEffect)((function() {
                var e, t = localStorage.getItem("coming_soon");
                f("1" === t ? "1" : "0");
                var r = localStorage.getItem("has_image");
                return v("0" === r ? "0" : "1"),
                (0,
                Y.OJ)(),
                S.name && 0 !== (null === (e = S.industry) || void 0 === e ? void 0 : e.length) || s.push("/publish/basic"),
                function() {}
            }
            ), []),
            (0,
            c.useEffect)((function() {}
            ), [n]);
            var C = c.useContext(At.W)
              , S = C.publishState
              , M = C.dispatch;
            (0,
            c.useEffect)((function() {
                return L.hJ.saveCampaignDraft(Kt(Kt({}, S), {}, {
                    maxStep: 3
                })).catch((function(e) {
                    return console.log(e)
                }
                )),
                function() {}
            }
            ), []);
            var Z = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", L.hJ.saveCampaignDraft(Kt(Kt({}, S), {}, {
                                    maxStep: 3
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , T = (0,
            qt.debounce)(Z, 1e4);
            (0,
            c.useEffect)((function() {
                var e;
                null === (e = T()) || void 0 === e || e.catch((function(e) {
                    return console.log(e)
                }
                ))
            }
            ), [null === (t = S.locations) || void 0 === t ? void 0 : t.length]);
            var E = {
                buttonText: "Continue",
                dataCy: "warnContinue",
                action: function() {
                    var e, t, r;
                    k.current.length > 0 && "admin" !== l.role && M({
                        type: Wt.df.removeLocation,
                        payload: {
                            mapLocations: N.current
                        }
                    }),
                    (null === (e = N.current) || void 0 === e ? void 0 : e.length) >= ((null === (t = S.locations) || void 0 === t ? void 0 : t.length) || 0) && "admin" !== l.role ? w(!1) : S.locations && (null === (r = S.locations) || void 0 === r ? void 0 : r.length) > 0 && ((0,
                    Y.I5)(),
                    s.push("/publish/schedule/?campaignId=".concat(S.uuid)))
                }
            }
              , P = {
                buttonText: "Cancel",
                dataCy: "warnCancel",
                action: function() {
                    w(!1)
                }
            };
            return (0,
            p.jsxs)(p.Fragment, {
                children: [j ? (0,
                p.jsx)(u.Vq, {
                    title: "admin" !== l.role ? "Sold Out Items Detected in Your Shopping Basket" : "Book on Sold-Out Locations?",
                    primaryButton: E,
                    secondaryButton: P,
                    boldText: function(e) {
                        var t = "Locations Impacted: <br />";
                        return t = e.length > 3 ? "".concat(t).concat(e.slice(0, 3).join(", "), " and ").concat(e.length - 3, " more locations") : "".concat(t).concat(e.join(", "))
                    }(k.current),
                    description: "admin" !== l.role ? "Meanwhile, certain locations in your basket are now sold out. Should you continue, these will be automatically deleted from your basket" : "Are you sure you want to book a campaign on Sold-Out locations? PRICES may be HIGHER on those location when creative plays!"
                }, "1") : "", (0,
                p.jsxs)("div", {
                    className: "lg:static z-10 page-section",
                    children: [(0,
                    p.jsx)(sr, {
                        locationsList: n
                    }), !(null !== (r = S.locations) && void 0 !== r && r.length) && (0,
                    p.jsx)($.Z, {
                        id: "footer-tooltip",
                        className: "custom-tooltip",
                        place: "top",
                        offset: {
                            left: 20
                        },
                        children: (0,
                        p.jsx)("div", {
                            className: "flex flex-col preview-media-tooltip",
                            children: (0,
                            p.jsxs)("div", {
                                className: "flex row-tooltip-container",
                                children: [(0,
                                p.jsx)("div", {
                                    className: "excl-mark pulse-disclaimer mr-2",
                                    children: "!"
                                }), (0,
                                p.jsx)("span", {
                                    className: "condition-text-tooltip",
                                    children: "No location booked"
                                })]
                            })
                        })
                    }), (0,
                    p.jsx)(u._l, {
                        backFn: function() {
                            s.push("/publish/basic/?activDraft=" + S.uuid)
                        },
                        nextFn: function() {
                            var e;
                            if (k.current = [],
                            N.current = [],
                            S.locations && (null === (e = S.locations) || void 0 === e ? void 0 : e.length) > 0) {
                                var t = 0;
                                S.locations.forEach((function(e) {
                                    var r = e.location;
                                    ("Romania" === r.country && r.onboardingStatus !== Gt.vd.live || !r.stock || "soldout" === r.stock.color) && (t++,
                                    N.current.push(r.uuid),
                                    k.current.push(r.n))
                                }
                                )),
                                t ? w(!0) : ((0,
                                Y.I5)(),
                                s.push("/publish/schedule/?campaignId=".concat(S.uuid)))
                            }
                        },
                        mainPage: "Dashboard",
                        links: [S.name],
                        back: "1",
                        next: "1",
                        hasNext: S.locations && (null === (a = S.locations) || void 0 === a ? void 0 : a.length) > 0
                    })]
                })]
            })
        }, lr = function() {
            (0,
            C.Z)();
            var e = (0,
            O.useRouter)()
              , t = c.useState("")
              , r = (0,
            b.Z)(t, 2)
              , a = (r[0],
            r[1],
            c.useState([]))
              , n = (0,
            b.Z)(a, 2)
              , s = (n[0],
            n[1],
            c.useContext(At.W))
              , i = s.publishState;
            s.dispatch;
            return (0,
            c.useEffect)((function() {
                var t;
                return i.locations && 0 !== (null === (t = i.locations) || void 0 === t ? void 0 : t.length) || e.push("/publish/select"),
                function() {}
            }
            ), []),
            (0,
            p.jsxs)("div", {
                className: "relative pt-24 z-10",
                children: [(0,
                p.jsxs)("div", {
                    className: "flex w-11/12 md:w-120 mx-auto pt-12 text-xl text-center flex-col space-y-8",
                    children: [(0,
                    p.jsx)("h4", {
                        className: "text-white w-full text-center font-semibold ",
                        children: (0,
                        p.jsx)(S.Z, {
                            id: "Text.SelectPlaceholder"
                        })
                    }), (0,
                    p.jsx)("div", {
                        children: i.pph && i.pph.map((function(e, t) {
                            return (0,
                            p.jsx)(u.Sw, {
                                pph: e,
                                index: t
                            }, t)
                        }
                        ))
                    })]
                }), (0,
                p.jsx)(u._l, {
                    backFn: function() {
                        e.push("/publish/select")
                    },
                    nextFn: function() {
                        var t;
                        i.locations && (null === (t = i.locations) || void 0 === t ? void 0 : t.length) > 0 && e.push("/publish/schedule")
                    },
                    mainPage: "Dashboard",
                    links: [i.name],
                    back: "1",
                    next: "1",
                    hasNext: !0
                })]
            })
        }, or = r(18858), cr = r(88213), dr = r(54317), ur = r(24823), mr = r(90711), fr = r(21502), hr = r(81858), pr = r(90044), xr = (0,
        m.f9)(Xt || (Xt = (0,
        s.Z)(["\n  flex flex-col justify-start\n  "]))), vr = (0,
        m.f9)(Yt || (Yt = (0,
        s.Z)(["\n  text-sm\n  text-dark-default\n  dark:text-white\n  font-semibold md:font-bold\n  "]))), gr = [{
            label: "10",
            value: "360"
        }, {
            label: "20",
            value: "180"
        }, {
            label: "30",
            value: "120"
        }, {
            label: "40",
            value: "90"
        }, {
            label: "50",
            value: "72"
        }, {
            label: "60",
            value: "60"
        }], br = function(e) {
            var t = e.onClose
              , r = c.useContext(At.W)
              , a = r.publishState
              , n = r.dispatch
              , i = (0,
            c.useState)([])
              , l = i[0]
              , o = i[1]
              , d = (0,
            c.useRef)([])
              , u = (0,
            c.useState)(0)
              , f = u[0]
              , h = u[1];
            (0,
            c.useEffect)((function() {
                o((null === a || void 0 === a ? void 0 : a.locations) || [])
            }
            ), []);
            var x = c.useMemo((function() {
                return [{
                    name: "Name",
                    selector: "name",
                    sortable: !1,
                    accessor: "name",
                    grow: 10,
                    cell: function(e) {
                        return (0,
                        p.jsx)("div", {
                            className: xr,
                            children: (0,
                            p.jsx)("label", {
                                htmlFor: e.location.uuid,
                                className: " ".concat(vr),
                                children: e.location.n
                            })
                        })
                    }
                }, {
                    name: "PPH",
                    selector: "pph",
                    sortable: !1,
                    accessor: "pph",
                    grow: 3,
                    cell: function(e) {
                        return (0,
                        p.jsx)("div", {
                            className: xr,
                            children: (0,
                            p.jsx)("div", {
                                className: " ".concat(vr),
                                children: (3600 / e.pph).toString()
                            })
                        })
                    }
                }]
            }
            ), [l]);
            return (0,
            p.jsx)(hr.h, {
                otherClass: "max-w-[859px] min  w-full mx-auto !overflow-y-hidden",
                children: (0,
                p.jsxs)("div", {
                    className: (0,
                    m.f9)($t || ($t = (0,
                    s.Z)(["flex flex-col rounded-3xl text-left h-full transform transition-all p-7 w-full overflow-y-hidden"]))),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "modal-headline",
                    children: [(0,
                    p.jsxs)("div", {
                        className: (0,
                        m.f9)(Qt || (Qt = (0,
                        s.Z)(["pb-3 flex items-center justify-between"]))),
                        children: [(0,
                        p.jsx)("div", {
                            className: "dark:text-dark-400",
                            children: "Mass update pph"
                        }), (0,
                        p.jsx)("span", {
                            className: (0,
                            m.f9)(er || (er = (0,
                            s.Z)(["text-lg  font-bold text-body cursor-pointer ease-in-out transition duration-300 hover:rotate-180"]))),
                            "aria-hidden": "true",
                            onClick: function() {
                                t()
                            },
                            children: (0,
                            p.jsx)("svg", {
                                width: "30",
                                height: "30",
                                viewBox: "0 0 30 30",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                p.jsx)("path", {
                                    d: "M8.98959 9.01041L21.0104 21.0312M21.0104 9.01041L8.98959 21.0312",
                                    stroke: "#A7ACB3",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round"
                                })
                            })
                        })]
                    }), (0,
                    p.jsx)("div", {
                        children: (0,
                        p.jsxs)("div", {
                            className: "flex items-center justify-between flex-1 space-x-7 pr-7",
                            children: [(0,
                            p.jsx)("div", {
                                className: "w-6/12",
                                children: (0,
                                p.jsx)(ht.Z, {
                                    isOpenSearch: function() {},
                                    onSearch: function(e) {
                                        return function(e) {
                                            var t, r = null === a || void 0 === a || null === (t = a.locations) || void 0 === t ? void 0 : t.filter((function(t) {
                                                return t.location.n.toLowerCase().includes(e.toLowerCase())
                                            }
                                            ));
                                            o(r || [])
                                        }(e)
                                    }
                                })
                            }), (0,
                            p.jsx)("div", {
                                className: "w-6/12",
                                children: (0,
                                p.jsx)(w.lq, {
                                    options: gr,
                                    onChange: function(e) {
                                        h(parseInt(e.value, 10))
                                    },
                                    label: "Update PPH",
                                    isMulti: !1,
                                    fullWidth: !0,
                                    isClearable: !1,
                                    selName: "pph"
                                })
                            })]
                        })
                    }), (0,
                    p.jsx)("div", {
                        className: (0,
                        m.f9)(tr || (tr = (0,
                        s.Z)(["w-full flex-col flex-1  flex justify-center items-center max-w-[980px]\n                      h-[200px] "]))),
                        children: (0,
                        p.jsx)("div", {
                            className: "w-full py-5 overflow-scroll",
                            children: (0,
                            p.jsx)(pr.ZP, {
                                noHeader: !0,
                                pagination: !1,
                                columns: x,
                                data: l,
                                selectableRows: !0,
                                onSelectedRowsChange: function(e) {
                                    d.current = e.selectedRows.map((function(e) {
                                        return e.location.uuid
                                    }
                                    ))
                                },
                                className: "table-simulate "
                            })
                        })
                    }), (0,
                    p.jsxs)("div", {
                        className: "flex items-center justify-center w-full pt-4 min-tablet:space-x-4 space-x-0 min-tablet:space-y-0 space-y-4 min-tablet:flex-row flex-col",
                        children: [(0,
                        p.jsx)("div", {
                            className: "max-w-[300px] w-full",
                            children: (0,
                            p.jsx)(w.zx, {
                                type: "button",
                                color: "secondary",
                                onClick: t,
                                fullWidth: !0,
                                children: "Close"
                            })
                        }), (0,
                        p.jsx)("div", {
                            className: "max-w-[300px] w-full",
                            children: (0,
                            p.jsx)(w.zx, {
                                type: "button",
                                color: "primary",
                                onClick: function() {
                                    n({
                                        type: Wt.df.updatePph,
                                        payload: {
                                            locationUuids: d.current,
                                            pph: f
                                        }
                                    }),
                                    t()
                                },
                                fullWidth: !0,
                                disabled: 0 === d.current.length || 0 === f,
                                children: "Update pph"
                            })
                        })]
                    })]
                })
            })
        };
        function yr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function jr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? yr(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yr(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function wr(e, t) {
            var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return kr(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return kr(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    r && (e = r);
                    var a = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, i = !0, l = !1;
            return {
                s: function() {
                    r = r.call(e)
                },
                n: function() {
                    var e = r.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    s = e
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (l)
                            throw s
                    }
                }
            }
        }
        function kr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, a = new Array(t); r < t; r++)
                a[r] = e[r];
            return a
        }
        var Nr, Cr, Sr, Mr, Zr, Or, Lr, Tr = (0,
        c.memo)((function(e) {
            var t = e.onChange
              , r = e.scheduler
              , a = (0,
            c.useState)(null)
              , n = a[0]
              , s = a[1];
            return (0,
            c.useEffect)((function() {
                s(r)
            }
            ), [r.uuid, r.slots.length]),
            n ? (0,
            p.jsx)(or.Z, {
                onChange: t,
                iconLeft: "bi:arrow-left-circle-fill",
                iconRight: "bi:arrow-right-circle-fill",
                scheduler: [n]
            }) : (0,
            p.jsx)(p.Fragment, {})
        }
        )), Er = function(e) {
            var t = e.schedulers
              , r = e.activeScheduler
              , a = e.setScheduler
              , n = e.totalSchedule
              , s = void 0 === n ? 1 : n
              , i = e.pricePerLocation
              , l = e.currancy
              , o = e.loader
              , d = e.goToGlobal
              , u = c.useContext(At.W)
              , m = u.publishState
              , h = u.dispatch
              , x = c.useState([])
              , v = (0,
            b.Z)(x, 2)
              , g = (v[0],
            v[1],
            (0,
            c.useState)([]))
              , y = g[0]
              , j = g[1];
            (0,
            c.useEffect)((function() {
                if (t)
                    if (1 === s) {
                        var e = t.filter((function(e) {
                            return "global" !== e.uuid
                        }
                        ));
                        j(e)
                    } else
                        j(t)
            }
            ), []);
            var k = function(e, t) {
                if (0 === e.slots.length)
                    return {
                        row1: "Please add or edit the schedule for this unit"
                    };
                var r = t.minBookingHours * (t.circuit ? t.circuit : 1)
                  , a = 3600 / t.pph
                  , n = e.slots.length
                  , s = n * a * (t.circuit ? t.circuit : 1)
                  , i = (r - s) / a / (t.circuit ? t.circuit : 1);
                return n < r / a ? {
                    row1: "This location has a minimum " + r + " plays",
                    row2: "Currently, you have selected " + n + (n > 1 ? " hourly slots (" : " hourly slot (") + parseFloat(s.toFixed(2)) + " plays)",
                    row3: "Please select " + parseFloat(i.toFixed(2)) + (i > 1 ? " more hourly slots" : " more hourly slot")
                } : void 0
            }
              , N = function(e, t) {
                var r = 3600 / t.pph
                  , a = e.slots.length;
                return parseFloat((a * r * (t.circuit ? t.circuit : 1)).toFixed(2))
            }
              , C = function(e) {
                var t, r = null === i || void 0 === i || null === (t = i.pricePerScreen) || void 0 === t ? void 0 : t.filter((function(t) {
                    return t.uuid === e.uuid
                }
                )), a = r ? r[0] : null;
                if (a) {
                    var n = a.priceCalculation + (a.vat || 0) + (a.tlpValue || 0);
                    return (0,
                    mr.Z)({
                        amount: Math.ceil(n),
                        precision: 4,
                        currency: l
                    }).toFormat()
                }
                return (0,
                mr.Z)({
                    amount: 0,
                    precision: 4,
                    currency: l
                }).toFormat()
            }
              , S = function(e, t) {
                var r = e.slots.length;
                return !r || r < t.minBookingHours / (3600 / t.pph)
            }
              , M = X.C.getJwtUser();
            return (0,
            p.jsx)("div", {
                className: "flex flex-wrap space-x-2 md:space-x-4",
                children: null === y || void 0 === y ? void 0 : y.map((function(e, t) {
                    var n;
                    return null === (n = e.locations) || void 0 === n ? void 0 : n.map((function(n, i) {
                        return (0,
                        p.jsxs)("div", {
                            className: "mb-4 relative",
                            id: 1 === t ? "schedule-item" : "",
                            children: [(0,
                            p.jsx)(w.Y8, {
                                name: "warn",
                                justText: !0,
                                tooltipText: k(e, n),
                                onChange: function(e) {
                                    e.currentTarget.checked && a(m.schedule[t])
                                },
                                color: "primary",
                                labelColor: "dark",
                                defaultChecked: e === r && 0 === i,
                                label: n.name,
                                value: n.uuid,
                                hasGlobalConnection: e.isGlobal || 1 === s,
                                hasError: S(e, n),
                                hasErrorContainer: !0,
                                indexSchedule: t
                            }), "1" !== n.uuid && e.uuid === (null === r || void 0 === r ? void 0 : r.uuid) && (0,
                            p.jsxs)("div", {
                                className: "flex flex-col items-center relative justify-between px-4 pt-4 pb-1 ml-1 -mt-3 border rounded-t-none dark:bg-dark-200 dark:text-white row dark:border-bordercolordark dark:border-opacity-20 rounded-2xl ",
                                children: [(0,
                                p.jsxs)("div", {
                                    className: "flex items-center justify-between w-full",
                                    children: [(0,
                                    p.jsxs)("div", {
                                        children: [(0,
                                        p.jsx)("span", {
                                            className: "font-semibold",
                                            children: e.slots.length
                                        }), (0,
                                        p.jsx)("span", {
                                            className: "ml-1 text-xs fint-medium dark:text-dark-400",
                                            children: "hourly slots"
                                        })]
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "ml-4",
                                        children: [(0,
                                        p.jsx)("span", {
                                            className: "font-semibold",
                                            children: N(e, n)
                                        }), (0,
                                        p.jsx)("span", {
                                            className: "ml-1 text-xs fint-medium dark:text-dark-400",
                                            children: "plays"
                                        })]
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "ml-4 flex flex-row flex-nowrap items-center",
                                        children: [(0,
                                        p.jsxs)("span", {
                                            className: "font-semibold relative",
                                            children: [(0,
                                            p.jsx)("div", {
                                                className: "".concat(o ? "invisible" : "visible"),
                                                children: C(n)
                                            }), (0,
                                            p.jsxs)("div", {
                                                className: "absolute top-0 left-0 flex-row flex-nowrap items-center ".concat(o ? "flex -mt-100" : "hidden"),
                                                children: ["EUR" === l ? "\u20ac" : "$", (0,
                                                p.jsx)("img", {
                                                    className: "ml-1",
                                                    src: "/images/loading.svg",
                                                    width: "20",
                                                    height: "20"
                                                })]
                                            })]
                                        }), (0,
                                        p.jsx)("span", {
                                            className: "ml-1 text-xs fint-medium dark:text-dark-400",
                                            children: "cost"
                                        })]
                                    })]
                                }), "admin" === M.role && (0,
                                p.jsxs)("div", {
                                    className: "flex flex-row items-center justify-center pt-1 mt-2 w-full border-t dark:bg-dark-200 dark:text-white row dark:border-bordercolordark",
                                    children: [!e.isGlobal && (0,
                                    p.jsxs)("button", {
                                        type: "button",
                                        title: "add to global schedule",
                                        className: "flex flex-row justify-center text-sm items-center w-6/12 gap-2  border-r dark:border-bordercolordark hover:text-primary-500",
                                        onClick: function() {
                                            var e;
                                            e = null === r || void 0 === r ? void 0 : r.uuid,
                                            h({
                                                type: Wt.df.addToGlobal,
                                                payload: {
                                                    uuid: e
                                                }
                                            }),
                                            d()
                                        },
                                        children: ["Connect G.S.", (0,
                                        p.jsx)(cr.JO, {
                                            className: "inline icon-vertical-fix",
                                            height: "1rem",
                                            width: "1rem",
                                            icon: "material-symbols:lock"
                                        })]
                                    }), (0,
                                    p.jsxs)("button", {
                                        type: "button",
                                        title: "remove",
                                        className: "flex flex-row justify-center text-sm items-center w-6/12 gap-2 hover:text-primary-500",
                                        onClick: function() {
                                            var e;
                                            e = r.locations[0].uuid,
                                            h({
                                                type: Wt.df.removeLocation,
                                                payload: {
                                                    mapLocations: e
                                                }
                                            })
                                        },
                                        children: ["Remove", (0,
                                        p.jsx)(f.HG, {
                                            size: "small",
                                            set: "light"
                                        })]
                                    })]
                                })]
                            })]
                        }, i)
                    }
                    ))
                }
                ))
            })
        }, Pr = function(e) {
            var t, r, a, n, l, d, h = (0,
            O.useRouter)(), x = c.useState(!1), v = (0,
            b.Z)(x, 2), g = v[0], y = v[1], j = c.useState([]), k = (0,
            b.Z)(j, 2), N = k[0], C = k[1], M = c.useState([]), Z = (0,
            b.Z)(M, 2), T = Z[0], P = Z[1], I = c.useState(), D = (0,
            b.Z)(I, 2), F = D[0], R = D[1], B = c.useState(!1), A = (0,
            b.Z)(B, 2), W = A[0], V = A[1], H = c.useState(), z = (0,
            b.Z)(H, 2), U = z[0], _ = z[1], G = (0,
            c.useState)(!1), q = G[0], J = G[1], K = (0,
            c.useState)(!1), Q = K[0], ee = K[1], te = (0,
            c.useState)(!1), re = te[0], ae = te[1], ne = (0,
            c.useState)(!1), se = ne[0], ie = ne[1], le = (0,
            c.useState)(!1), oe = le[0], ce = le[1], de = (0,
            c.useState)(1), ue = de[0], me = de[1], fe = (0,
            c.useState)(0), he = fe[0], pe = fe[1], xe = c.useContext(At.W), ve = xe.publishState, ge = xe.dispatch, ye = (0,
            E.q)().notify, je = (0,
            c.useState)(X.C.getJwtUser()), we = je[0], ke = (je[1],
            (0,
            fr.f)().bbox);
            (0,
            c.useEffect)((function() {
                var e;
                return 0 === (null === (e = ve.locations) || void 0 === e ? void 0 : e.length) && Le(),
                function() {}
            }
            ), [ve.locations]);
            var Ne = (0,
            He.ZP)()
              , Ce = Ne.setState
              , Se = Ne.state
              , Me = (Se.run,
            Se.tourActive)
              , Ze = Se.stepIndex
              , Oe = Se.steps;
            (0,
            c.useEffect)((function() {
                Me && (11 === Ze ? setTimeout((function() {
                    Ce({
                        run: !0,
                        stepIndex: 12,
                        steps: Oe,
                        tourActive: Me
                    })
                }
                ), 600) : Ce({
                    run: !0,
                    stepIndex: 16,
                    steps: Oe,
                    tourActive: Me
                }))
            }
            ), []),
            (0,
            c.useEffect)((function() {
                13 === Ze && ve && null !== ve && void 0 !== ve && ve.schedule && _(null === ve || void 0 === ve ? void 0 : ve.schedule[1])
            }
            ), [Ze]);
            var Le = function() {
                if (ke) {
                    var e = {
                        bottomRight: {
                            longitude: ke[0],
                            latitude: ke[1]
                        },
                        topLeft: {
                            longitude: ke[2],
                            latitude: ke[3]
                        }
                    };
                    localStorage.setItem("mapCoordinates", JSON.stringify(e))
                }
                h.push("/publish/select?campaignId=".concat(ve.uuid))
            }
              , Te = function(e, t) {
                var r = [];
                if ("global" === t) {
                    var a, n, s = null === (a = ve.schedule) || void 0 === a ? void 0 : a.filter((function(e) {
                        return e.isGlobal && "global" !== e.uuid && e.locations.length > 0 && e.type === Gt.go.Daily
                    }
                    )), i = null === (n = ve.schedule) || void 0 === n ? void 0 : n.filter((function(e) {
                        return e.isGlobal && "global" !== e.uuid && e.locations.length > 0 && e.type === Gt.go.Hourly
                    }
                    )), l = [], o = [];
                    if (s && s.length) {
                        var c, d = new Map, u = wr(e);
                        try {
                            for (u.s(); !(c = u.n()).done; ) {
                                var m = c.value
                                  , f = be.ou.fromMillis(1e3 * m, {
                                    zone: "utc",
                                    locale: "utc"
                                }).get("day")
                                  , h = be.ou.fromMillis(1e3 * m, {
                                    zone: "utc",
                                    locale: "utc"
                                });
                                d.set(f, h)
                            }
                        } catch (k) {
                            u.e(k)
                        } finally {
                            u.f()
                        }
                        var p, x = wr(d.values());
                        try {
                            for (x.s(); !(p = x.n()).done; )
                                for (var v = p.value, g = 0; g < 24; g++) {
                                    v.setZone("Europe/Bucharest");
                                    var y = v.startOf("day").plus({
                                        hour: g
                                    });
                                    l.push(y.toSeconds())
                                }
                        } catch (k) {
                            x.e(k)
                        } finally {
                            x.f()
                        }
                    }
                    i && i.length && (o = e);
                    var j = new Map(l.map((function(e) {
                        return [e, be.ou.fromMillis(1e3 * e, {
                            zone: "utc",
                            locale: "utc"
                        }).toFormat("EEEE_H").toUpperCase()]
                    }
                    )));
                    null === s || void 0 === s || s.forEach((function(e) {
                        var t;
                        if (e.locations[0] && e.locations[0].restrictionsFormat.length) {
                            var a = new Set(e.locations[0].restrictionsFormat);
                            t = Array.from(j).filter((function(e) {
                                var t = (0,
                                b.Z)(e, 2)[1];
                                return !a.has(t)
                            }
                            )).map((function(e) {
                                return (0,
                                b.Z)(e, 1)[0]
                            }
                            ))
                        } else
                            t = l;
                        r.push({
                            slots: Array.from(new Set(t)),
                            isGlobal: !0,
                            uuid: e.uuid
                        })
                    }
                    ));
                    var w = new Map(o.map((function(e) {
                        return [e, be.ou.fromMillis(1e3 * e, {
                            zone: "utc",
                            locale: "utc"
                        }).toFormat("EEEE_H").toUpperCase()]
                    }
                    )));
                    null === i || void 0 === i || i.forEach((function(e) {
                        var t;
                        if (e.locations[0] && e.locations[0].restrictionsFormat.length) {
                            var a = new Set(e.locations[0].restrictionsFormat);
                            t = Array.from(w).filter((function(e) {
                                var t = (0,
                                b.Z)(e, 2)[1];
                                return !a.has(t)
                            }
                            )).map((function(e) {
                                return (0,
                                b.Z)(e, 1)[0]
                            }
                            ))
                        } else
                            t = o;
                        r.push({
                            slots: Array.from(new Set(t)),
                            isGlobal: !0,
                            uuid: e.uuid
                        })
                    }
                    )),
                    r.push({
                        slots: Array.from(new Set(e)),
                        isGlobal: !0,
                        uuid: "global"
                    })
                } else
                    r.push({
                        slots: Array.from(new Set(e)),
                        isGlobal: !1,
                        uuid: t
                    });
                ge({
                    type: Wt.df.setScheduleSlots,
                    payload: r
                })
            }
              , Ee = {
                buttonText: "Continue",
                action: function() {
                    Le()
                }
            }
              , Pe = {
                buttonText: "Cancel",
                action: function() {
                    J(!1)
                }
            }
              , Ie = {
                buttonText: "Continue",
                action: function() {
                    Ue()
                }
            }
              , De = {
                buttonText: "Continue",
                action: function() {
                    Ue()
                }
            }
              , Fe = {
                buttonText: "Continue",
                action: function() {
                    Je(U)
                }
            }
              , Re = {
                buttonText: "Cancel",
                action: function() {
                    ee(!1)
                }
            }
              , Be = {
                buttonText: "Cancel",
                action: function() {
                    ce(!1)
                }
            }
              , Ae = {
                buttonText: "Cancel",
                action: function() {
                    ie(!1)
                }
            }
              , We = (0,
            c.useRef)(null)
              , Ve = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t, r, a, n, s;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = [],
                                ve.schedule) {
                                    r = wr(ve.schedule);
                                    try {
                                        for (r.s(); !(a = r.n()).done; )
                                            "global" !== (n = a.value).uuid && t.push({
                                                locations: n.locations,
                                                slots: n.slots
                                            })
                                    } catch (i) {
                                        r.e(i)
                                    } finally {
                                        r.f()
                                    }
                                }
                                return V(!0),
                                e.next = 5,
                                ur.i.calculatePriceEndPrice(t);
                            case 5:
                                s = e.sent,
                                V(!1),
                                R(s);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            (0,
            c.useEffect)((function() {
                return Ve(),
                function() {}
            }
            ), [ve.toggleSlots]),
            (0,
            c.useEffect)((function() {
                return L.hJ.saveCampaignDraft(jr(jr({}, ve), {}, {
                    maxStep: 3
                })).catch((function(e) {
                    return console.log(e)
                }
                )),
                function() {}
            }
            ), []),
            (0,
            c.useEffect)((function() {
                return ve.schedule && ze(),
                function() {}
            }
            ), []),
            (0,
            c.useEffect)((function() {
                var e = 0;
                return null !== ve && void 0 !== ve && ve.schedule && (1 === (null === ve || void 0 === ve ? void 0 : ve.schedule.filter((function(e) {
                    return e.locations.length > 0 && "global" !== e.uuid
                }
                )).length) ? (e = null === ve || void 0 === ve ? void 0 : ve.schedule.findIndex((function(e) {
                    return e.locations.length > 0 && "global" !== e.uuid
                }
                )),
                me(1)) : me(2),
                _(ve.schedule[e])),
                function() {}
            }
            ), []),
            (0,
            c.useEffect)((function() {
                if (ve.schedule) {
                    var e = [];
                    ve.schedule.forEach((function(t) {
                        var r = t.locations.map((function(e) {
                            return e
                        }
                        ));
                        e = T.concat(r)
                    }
                    )),
                    P(e);
                    var t = 0;
                    1 === (null === ve || void 0 === ve ? void 0 : ve.schedule.filter((function(e) {
                        return e.locations.length > 0 && "global" !== e.uuid
                    }
                    )).length) ? (t = null === ve || void 0 === ve ? void 0 : ve.schedule.findIndex((function(e) {
                        return e.locations.length > 0 && "global" !== e.uuid
                    }
                    )),
                    me(1),
                    _(ve.schedule[t])) : me(2)
                }
                return function() {}
            }
            ), [null === (t = ve.schedule) || void 0 === t ? void 0 : t.length]);
            var ze = function() {
                var e = 1
                  , t = []
                  , r = 0
                  , a = 0;
                if (C([]),
                ve.schedule) {
                    var n, s = wr(ve.schedule);
                    try {
                        for (s.s(); !(n = s.n()).done; ) {
                            var i, l = n.value, o = l.slots.length;
                            if ("global" !== l.uuid && 0 === o && l.locations.length > 0) {
                                var c = (0,
                                p.jsxs)("div", {
                                    className: "flex mb-2 row-tooltip-container",
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: "mr-2 excl-mark pulse-disclaimer",
                                        children: "!"
                                    }), (0,
                                    p.jsx)("span", {
                                        className: "condition-text-tooltip",
                                        children: "Add schedule for"
                                    }), " ", (0,
                                    p.jsx)("span", {
                                        className: "ml-1 text-accent-600 condition-text-tooltip",
                                        children: l.locations[0].name
                                    })]
                                });
                                t.push(c),
                                r++,
                                e = 0
                            }
                            if ("global" !== l.uuid && l.locations.length > 0 && l.locations[0].minBookingHours && o < l.locations[0].minBookingHours / (3600 / l.locations[0].pph)) {
                                var d = (0,
                                p.jsxs)("div", {
                                    className: "flex mb-2 row-tooltip-container",
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: "mr-2 excl-mark pulse-disclaimer",
                                        children: "!"
                                    }), (0,
                                    p.jsx)("span", {
                                        className: "mr-1 text-accent-600 condition-text-tooltip",
                                        children: l.locations[0].name
                                    }), " ", (0,
                                    p.jsx)("span", {
                                        className: "condition-text-tooltip",
                                        children: "has a minimum plays required"
                                    })]
                                });
                                t.push(d),
                                e = 0
                            }
                            "global" !== l.uuid && null !== (i = l.locations[0]) && void 0 !== i && i.hiddenRestriction && a++
                        }
                    } catch (u) {
                        s.e(u)
                    } finally {
                        s.f()
                    }
                    if (pe(a),
                    0 === e)
                        "admin" === X.C.getJwtUser().role ? (y(0 === r),
                        C(t)) : (y(!1),
                        C(t));
                    else
                        y(!0)
                } else
                    y(!1)
            };
            (0,
            c.useEffect)((function() {
                return ve.schedule && ze(),
                function() {}
            }
            ), [ve.slots, null === U || void 0 === U ? void 0 : U.pph, ve.locations]);
            var Ue = function() {
                g && ((0,
                Y.xz)(ve, F, e.currency),
                (0,
                Y.KI)(),
                h.push("/publish/media/?campaignId=".concat(ve.uuid)))
            };
            (0,
            c.useEffect)((function() {
                var e;
                return ve.locations && 0 !== (null === (e = ve.locations) || void 0 === e ? void 0 : e.length) || h.push("/publish/select/?campaignId=".concat(ve.uuid)),
                function() {}
            }
            ), []);
            var _e = (0,
            m.f9)(rr || (rr = (0,
            s.Z)(["\n  w-4 h-4\n  rounded-full\n  "])))
              , Ge = (0,
            m.f9)(ar || (ar = (0,
            s.Z)(["\n  ml-3\n  text-sm font-medium\n  text-dark-defaulr\n  "])))
              , qe = (0,
            m.f9)(nr || (nr = (0,
            s.Z)(["\n  w-px h-5\n  bg-body\n  mx-11\n  "])))
              , Je = function(e) {
                var t, r, a;
                e.locations[0].hiddenRestriction && 0 === (null === (t = e.locations[0]) || void 0 === t ? void 0 : t.restriction.length) ? (e.locations[0].restriction = null === (r = e.locations[0]) || void 0 === r ? void 0 : r.hiddenRestriction,
                delete e.locations[0].hiddenRestriction) : (e.locations[0].hiddenRestriction = null === (a = e.locations[0]) || void 0 === a ? void 0 : a.restriction,
                e.locations[0].restriction = []);
                e.slots = [],
                Ve(),
                Te([], e.uuid),
                _(jr({}, e)),
                ie(!1)
            };
            return (0,
            c.useEffect)((function() {
                var e, t, r;
                0 === (null === U || void 0 === U ? void 0 : U.locations.length) && (2 === (null === ve || void 0 === ve || null === (e = ve.schedule) || void 0 === e ? void 0 : e.length) ? _(null === ve || void 0 === ve || null === (t = ve.schedule) || void 0 === t ? void 0 : t[1]) : _(null === ve || void 0 === ve || null === (r = ve.schedule) || void 0 === r ? void 0 : r[0]))
            }
            ), [null === U || void 0 === U ? void 0 : U.locations]),
            (0,
            p.jsxs)("div", {
                className: "page-section",
                children: [re ? (0,
                p.jsx)(br, {
                    onClose: function() {
                        ae(!1)
                    }
                }) : null, q ? (0,
                p.jsx)(u.Vq, {
                    title: "Are you sure?",
                    primaryButton: Ee,
                    secondaryButton: Pe,
                    description: "Please note that if you add another screen now, your selected schedule will reset."
                }, "1") : "", Q ? (0,
                p.jsx)(u.Vq, {
                    title: "SKIP MINUMIM PLAYS",
                    primaryButton: Ie,
                    secondaryButton: Re,
                    description: "Are you sure you want to SKIP MINUMIM PLAYS conditions?"
                }, "2") : "", se ? (0,
                p.jsx)(u.Vq, {
                    title: null !== U && void 0 !== U && null !== (r = U.locations[0]) && void 0 !== r && r.hiddenRestriction ? "Show Restrictions" : "Hide Restrictions",
                    primaryButton: Fe,
                    secondaryButton: Ae,
                    description: "Are you sure you want to\n          ".concat(null !== U && void 0 !== U && null !== (a = U.locations[0]) && void 0 !== a && a.hiddenRestriction ? "SHOW " : "HIDE ", "\n          the restrictions for this location? <br><br> Please consider that if you accept the scheduler will be reset!\n          ").concat(null !== U && void 0 !== U && null !== (n = U.locations[0]) && void 0 !== n && n.hiddenRestriction ? "" : "<br><br>Please consider that the price for this location is calculated only for unrestricted slots.")
                }, "3") : "", oe ? (0,
                p.jsx)(u.Vq, {
                    title: "LOCATIONS WITH HIDDEN RESTRICTIONS",
                    primaryButton: De,
                    secondaryButton: Be,
                    description: "You have ".concat(he, " locations with hidden restrictions.\n          <br><br>Please consider that the campaign budget may be affected<br><br>Are you sure you want to CONTINUE?")
                }, "2") : "", (0,
                p.jsxs)("div", {
                    className: "min-h-screen pb-14",
                    children: [(0,
                    p.jsxs)("div", {
                        className: "relative z-100",
                        children: [(0,
                        p.jsx)("div", {
                            className: "flex bg-white md:hidden container-title-mobile dark:bg-dark-200 dark:text-dark-400",
                            children: "Schedule"
                        }), (0,
                        p.jsx)(u.bu, {
                            className: "container-sticky"
                        }), (0,
                        p.jsxs)("div", {
                            className: "flex flex-col flex-wrap justify-between pb-4 md:flex-row md:space-x-7 md:py-4 md:px-7 margin-4rem",
                            children: [(0,
                            p.jsxs)(ft.Z, {
                                otherClasses: "flex-1 md:w-auto py-6 pr-6 md:h-16 flex mx-4 md:m-0 items-center border-light",
                                children: [(0,
                                p.jsx)("div", {
                                    children: (0,
                                    p.jsx)("div", {
                                        className: "cursor-pointer excl-mark mx-7",
                                        "data-tip": !0,
                                        "data-for": "error",
                                        children: "!"
                                    })
                                }), (0,
                                p.jsx)("div", {
                                    className: "md:text-sm md:font-semibold md:tracking-tighter md:text-dark-default dark:text-dark-400",
                                    children: (0,
                                    p.jsx)(S.Z, {
                                        id: "Text.DisclaimerSelectionSchedule"
                                    })
                                })]
                            }), (0,
                            p.jsx)(ft.Z, {
                                otherClasses: "md:w-auto h-16 flex justify-center mx-4 mt-4 md:m-0 ",
                                children: (0,
                                p.jsx)(u.wD, {
                                    source: "schedule"
                                })
                            })]
                        })]
                    }), (0,
                    p.jsxs)("div", {
                        className: "flex-col px-4 space-y-4 lex min-h-100-33 md:px-7",
                        children: [U ? (0,
                        p.jsxs)(p.Fragment, {
                            children: [(0,
                            p.jsxs)(ft.Z, {
                                divId: "schedule-list",
                                otherClasses: "px-4",
                                children: [(0,
                                p.jsxs)("div", {
                                    className: "py-4 text-base font-bold md:py-5 md:text-sm text-dark-default dark:text-dark-400",
                                    children: [1 === ue ? (0,
                                    p.jsx)(S.Z, {
                                        id: "Text.YourSelectionCustomScheduleSingleLocation"
                                    }) : (0,
                                    p.jsx)(S.Z, {
                                        id: "Text.YourSelectionCustomSchedule"
                                    }), 1 !== ue && (0,
                                    p.jsx)("p", {
                                        className: "italic text-body dark:text-dark-300 mt-2",
                                        children: "Please note that if you configure an individual schedule will no longer be impacted by the changes from Global Schedule"
                                    }), "admin" === we.role && "global" === (null === U || void 0 === U ? void 0 : U.uuid) && (0,
                                    p.jsx)("div", {
                                        className: "flex space-x-3 py-6",
                                        children: (0,
                                        p.jsx)(w.zx, {
                                            color: "primary",
                                            onClick: function() {
                                                ae(!0)
                                            },
                                            children: "Mass update pph"
                                        })
                                    })]
                                }), (0,
                                p.jsx)(Er, {
                                    totalSchedule: ue,
                                    schedulers: ve.schedule,
                                    setScheduler: _,
                                    activeScheduler: U,
                                    pricePerLocation: F,
                                    goToGlobal: function() {
                                        var e, t = null === (e = ve.schedule) || void 0 === e ? void 0 : e.find((function(e) {
                                            return "global" === e.uuid
                                        }
                                        ));
                                        _(t)
                                    },
                                    loader: W,
                                    currancy: e.currency
                                }, "tota_".concat(ue, "_").concat(U.uuid, "_").concat(U.slots.length))]
                            }), (0,
                            p.jsx)(ft.Z, {
                                otherClasses: "text-sm text-dark-default dark:text-dark-400 md:h-16",
                                children: (0,
                                p.jsxs)("div", {
                                    className: "flex flex-wrap items-center justify-between h-full p-4 space-y-4 md:space-x-7 md:space-y-0 md:px-7",
                                    children: [(0,
                                    p.jsxs)("div", {
                                        className: "font-bold",
                                        children: ["Schedule: ", "daily" === U.type ? "Daily" : "Hourly"]
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "".concat(qe, " hidden md:block")
                                    }), (0,
                                    p.jsxs)("h4", {
                                        id: "schedule-pph",
                                        className: "flex items-center space-x-4 font-semibold",
                                        children: [(0,
                                        p.jsxs)("div", {
                                            children: [(0,
                                            p.jsx)(S.Z, {
                                                id: "Text.SelectPlaceholder"
                                            }), (0,
                                            p.jsx)("span", {
                                                className: "ml-1",
                                                children: "on"
                                            }), (0,
                                            p.jsx)("span", {
                                                className: "ml-2 text-primarydark-default",
                                                children: null === (l = U.locations[0]) || void 0 === l ? void 0 : l.name
                                            }), " ?"]
                                        }), (0,
                                        p.jsx)(u.vK, {
                                            schedule: U
                                        })]
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "".concat(qe, " hidden md:block")
                                    }), "global" !== (null === U || void 0 === U ? void 0 : U.uuid) && "admin" === we.role && (0,
                                    p.jsxs)("div", {
                                        className: "text-primary-500 underline cursor-pointer font-semibold",
                                        onClick: function() {
                                            return ie(!0)
                                        },
                                        children: [null !== U && void 0 !== U && null !== (d = U.locations[0]) && void 0 !== d && d.hiddenRestriction ? "Show " : "Hide ", " Restrictions"]
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "hidden md:block",
                                        children: (0,
                                        p.jsx)(dr.Z, {
                                            className: "bottom chevron-transform",
                                            handler: (0,
                                            p.jsxs)("div", {
                                                className: "flex items-center text-sm font-semibold underline cursor-pointer text-primary-500",
                                                children: [(0,
                                                p.jsx)("span", {
                                                    className: "mr-2 underline",
                                                    children: " Schedule legend"
                                                }), (0,
                                                p.jsx)("div", {
                                                    className: "chevron",
                                                    children: (0,
                                                    p.jsx)(f._M, {
                                                        set: "light",
                                                        primaryColor: "#F53D3F",
                                                        size: "small"
                                                    })
                                                })]
                                            }),
                                            content: (0,
                                            p.jsxs)("div", {
                                                className: "min-w-15",
                                                children: [(0,
                                                p.jsx)("div", {
                                                    className: "pb-4 text-xs font-medium",
                                                    children: "Details"
                                                }), (0,
                                                p.jsxs)("div", {
                                                    className: "space-y-4",
                                                    children: [(0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-whiteish ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Available spot"
                                                        })]
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-bordercolor ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Weekend spot"
                                                        })]
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-success-default ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Selected spot"
                                                        })]
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-orange-default ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Overlapping spot"
                                                        })]
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-danger-default ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Unavailable spot"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })]
                        }) : "", ve.schedule && ve.schedule.map((function(e, t) {
                            return (e.locations.length > 0 || "global" === e.uuid) && (0,
                            p.jsx)(c.Fragment, {
                                children: (0,
                                p.jsx)("div", {
                                    className: "relative bg-white md:bg-transparent overflow-hidden rounded-3xl md:rounded-none schedule-publish p-6 ".concat(e.uuid === (null === U || void 0 === U ? void 0 : U.uuid) ? "" : "hidden"),
                                    children: (0,
                                    p.jsxs)("div", {
                                        className: "flex items-start md:hidden",
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: "flex flex-wrap items-center justify-between md:pb-4",
                                            children: (0,
                                            p.jsx)("h3", {
                                                className: "flex-1 text-lg font-bold tracking-tighter md:flex-none text-lightGrey ",
                                                children: "Schedule"
                                            })
                                        }), (0,
                                        p.jsx)(dr.Z, {
                                            className: "leftbottom",
                                            handler: (0,
                                            p.jsx)("div", {
                                                className: "ml-3 excl-mark",
                                                children: "!"
                                            }),
                                            content: (0,
                                            p.jsxs)("div", {
                                                className: "min-w-15",
                                                children: [(0,
                                                p.jsx)("div", {
                                                    className: "pb-4 text-xs font-medium",
                                                    children: "Details"
                                                }), (0,
                                                p.jsxs)("div", {
                                                    className: "space-y-4",
                                                    children: [(0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-whiteish ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Available spot"
                                                        })]
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-bordercolor ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Weekend spot"
                                                        })]
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-success-default ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Selected spot"
                                                        })]
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-orange-default ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Overlapping spot"
                                                        })]
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "bg-danger-default ".concat(_e)
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: Ge,
                                                            children: "Unavailable spot"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }, t)
                        }
                        )) && U && (0,
                        p.jsx)(Tr, {
                            onChange: Te,
                            scheduler: U
                        }, "".concat(null === U || void 0 === U ? void 0 : U.uuid, "_").concat(null !== U && void 0 !== U && U.locations[0] ? null === U || void 0 === U ? void 0 : U.locations[0].restriction.length : "0"))]
                    })]
                }), (0,
                p.jsx)(u._l, {
                    backFn: function() {
                        var e;
                        if (ke) {
                            var t = {
                                bottomRight: {
                                    longitude: ke[0],
                                    latitude: ke[1]
                                },
                                topLeft: {
                                    longitude: ke[2],
                                    latitude: ke[3]
                                }
                            };
                            localStorage.setItem("mapCoordinates", JSON.stringify(t))
                        }
                        1 !== (null === (e = ve.locations) || void 0 === e ? void 0 : e.length) ? h.push("/publish/select?campaignId=".concat(ve.uuid)) : J(!0)
                    },
                    nextFn: function() {
                        N.length > 0 ? ee(!0) : he > 0 ? ce(!0) : Ue()
                    },
                    mainPage: "Dashboard",
                    links: [ve.name],
                    back: "1",
                    next: "1",
                    hasNext: g,
                    invalidConditions: function() {
                        ye("Please check all the orange question marks on the page for more details!", "warning", "top-right", "Something is incomplete"),
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                }), N.length > 0 && (0,
                p.jsx)($.Z, {
                    id: "footer-tooltip",
                    overridePosition: function(e) {
                        var t, r;
                        return {
                            top: window.innerWidth < 550 ? window.innerHeight - (null === We || void 0 === We || null === (t = We.current) || void 0 === t ? void 0 : t.offsetHeight) - 200 : e.top,
                            left: window.innerWidth < 550 ? window.innerWidth - (null === We || void 0 === We || null === (r = We.current) || void 0 === r ? void 0 : r.offsetWidth) - 35 : e.left
                        }
                    },
                    className: "custom-tooltip",
                    place: "left",
                    children: (0,
                    p.jsxs)("div", {
                        ref: We,
                        className: "flex flex-col preview-media-tooltip",
                        children: [N.map((function(e, t) {
                            return t < 4 && (t === N.length - 1 ? (0,
                            p.jsx)("div", {
                                className: "remove-mb-0",
                                children: e
                            }) : e)
                        }
                        )), N.length > 4 && (0,
                        p.jsxs)("div", {
                            className: "flex",
                            children: [(0,
                            p.jsx)("div", {
                                className: "mr-2 excl-mark pulse-disclaimer",
                                children: "!"
                            }), N.length - 4, (0,
                            p.jsx)("span", {
                                className: "ml-1",
                                children: 5 === N.length ? "more condition..." : "more conditions..."
                            })]
                        })]
                    })
                })]
            })
        }, Ir = r(54176), Dr = "https://storage.googleapis.com/engage-uploaded-videos/", Fr = function(e) {
            var t = e.data
              , r = e.resolution
              , a = c.useState(t)
              , n = (0,
            b.Z)(a, 2)
              , s = n[0]
              , i = (n[1],
            c.useState("https://storage.googleapis.com/engage-uploaded-videos/blank_image.png"))
              , l = (0,
            b.Z)(i, 2)
              , o = l[0]
              , d = l[1]
              , u = c.useState()
              , m = (0,
            b.Z)(u, 2)
              , f = m[0]
              , h = m[1]
              , x = (0,
            c.useRef)(null);
            (0,
            c.useEffect)((function() {
                v()
            }
            ), []),
            (0,
            c.useEffect)((function() {
                return f && (0 === f.canUpload && h(null),
                f.canUpload),
                function() {}
            }
            ), [f]);
            var v = function() {
                var e = new FileReader;
                if (t.file.type && t.file.type.match("image"))
                    e.onload = function(a) {
                        t.file.size > 52428800 || e && e.result && (0,
                        Ir.Ad)(e.result, (function(e, t) {
                            var a = {
                                width: e,
                                height: t
                            }
                              , n = {
                                width: r[0],
                                height: r[1]
                            }
                              , i = (0,
                            Ir.J$)(a, n, 3)
                              , l = (0,
                            Ir.wq)(s.file.name, i, "".concat(r[0], "x").concat(r[1]));
                            h(l)
                        }
                        )),
                        e.result && d(e.result)
                    }
                    ,
                    e.readAsDataURL(s.file);
                else if ("draft" === t.type) {
                    var a = t.oldName.split(".");
                    t.oldUid ? d("".concat(Dr).concat(t.oldUid, ".").concat(a[a.length - 1])) : d("".concat(Dr).concat(t.uid, ".").concat(a[a.length - 1]))
                } else if ("draftvideo" === t.type || "uploaded" === t.type) {
                    console.log("data", t);
                    var n = t.oldName.split(".")
                      , i = document.createElement("video");
                    i.preload = "metadata",
                    t.oldUid ? d("".concat(Dr).concat(t.oldUid, ".").concat(n[n.length - 1])) : d("".concat(Dr).concat(t.uid, ".").concat(n[n.length - 1])),
                    i.muted = !0,
                    i.playsInline = !0,
                    i.currentTime = 1,
                    i.play()
                } else {
                    if ("remote" !== t.file.type)
                        return e.onload = function() {
                            var r = new Blob([e.result],{
                                type: t.file.type
                            })
                              , a = URL.createObjectURL(r)
                              , n = document.createElement("video");
                            n.addEventListener("timeupdate", (function e() {
                                g(n, a) && (n.removeEventListener("timeupdate", e),
                                n.pause())
                            }
                            )),
                            n.preload = "metadata",
                            n.className = "hidden",
                            n.src = a,
                            n.muted = !0,
                            n.playsInline = !0,
                            n.currentTime = 1,
                            n.play()
                        }
                        ,
                        e.readAsArrayBuffer(t.file),
                        !0;
                    var l = document.createElement("video");
                    l.preload = "metadata",
                    l.src = s.location,
                    l.muted = !0,
                    l.playsInline = !0,
                    l.play()
                }
            }
              , g = function(e, t) {
                var r = document.createElement("canvas");
                r.width = e.videoWidth,
                r.height = e.videoHeight;
                var a = r.getContext("2d");
                a && a.drawImage(e, 0, 0, r.width, r.height);
                var n = r.toDataURL("image/png");
                return n.length > 1e5 && (d(n),
                URL.revokeObjectURL(t)),
                !0
            };
            return (0,
            c.useEffect)((function() {
                var e, t, r;
                "uploaded" !== s.action && "isuploaded" !== s.action || (null !== (e = s.file) && void 0 !== e && null !== (t = e.type) && void 0 !== t && t.match(/video/) || null !== (r = s.oldType) && void 0 !== r && r.match(/video/)) && x.current && (x.current.currentTime = 1,
                x.current.pause())
            }
            ), []),
            "toupload" !== t.action && "isuploaded" !== t.action && !t.type.includes("draft") || "isuploaded" !== t.action && !t.type.includes("draft") ? (0,
            p.jsx)("div", {
                className: "preview-loader-container",
                children: (0,
                p.jsx)(je(), {
                    color: "#eeeff0",
                    size: 10,
                    loading: !0
                })
            }) : (0,
            p.jsx)("div", {
                children: t.oldType.includes("video") ? (0,
                p.jsx)("video", {
                    ref: x,
                    src: o,
                    className: "preview-image rounded-2xl",
                    muted: !0,
                    loop: !0,
                    children: (0,
                    p.jsx)("source", {
                        src: o
                    })
                }) : (0,
                p.jsx)("img", {
                    className: "preview-image rounded-2xl",
                    src: o
                })
            })
        }, Rr = r(57632);
        function Br(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Ar(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Br(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Br(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var Wr = "https://storage.googleapis.com/engage-uploaded-videos/"
          , Vr = function(e) {
            var t = e.resolution
              , r = e.formatId
              , a = e.duration
              , n = e.uploadedmedia
              , l = e.contentType
              , d = e.onClose
              , u = (0,
            c.useState)([])
              , f = u[0]
              , h = u[1]
              , x = (0,
            c.useState)([])
              , v = x[0]
              , g = x[1]
              , b = (0,
            c.useState)(!0)
              , y = b[0]
              , j = b[1]
              , k = (0,
            c.useState)("")
              , N = k[0]
              , S = k[1]
              , M = (0,
            c.useState)([])
              , Z = M[0]
              , O = M[1]
              , L = (0,
            C.Z)()
              , T = (0,
            c.useContext)(At.W)
              , E = (T.publishState,
            T.dispatch)
              , P = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var r, s;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                X.F.getUserFormatMediaLibrary({
                                    resolution: t,
                                    duration: a,
                                    contentType: l
                                });
                            case 3:
                                r = e.sent,
                                s = n.map((function(e) {
                                    return e.oldUid || e.uid
                                }
                                )),
                                g(r.filter((function(e) {
                                    return !s.includes(e.uid)
                                }
                                ))),
                                h(r.filter((function(e) {
                                    return !s.includes(e.uid)
                                }
                                ))),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                console.log(e.t0);
                            case 12:
                                return e.prev = 12,
                                j(!1),
                                e.finish(12);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 12, 15]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            (0,
            c.useEffect)((function() {
                if (N.length > 0) {
                    var e = v.filter((function(e) {
                        var t = e.oldName.toLowerCase()
                          , r = N.toLowerCase();
                        return t.includes(r)
                    }
                    ));
                    h(e)
                } else
                    h(v)
            }
            ), [N]),
            (0,
            c.useEffect)((function() {
                P().catch((function(e) {
                    console.log(e)
                }
                ))
            }
            ), []);
            return (0,
            p.jsx)(hr.h, {
                otherClass: "".concat(v.length > 0 ? " max-w-[859px]" : " max-w-[680px]", " min  w-full mx-auto !overflow-y-hidden"),
                children: (0,
                p.jsxs)("div", {
                    className: (0,
                    m.f9)(Nr || (Nr = (0,
                    s.Z)(["flex flex-col rounded-3xl text-left h-full transform transition-all p-7 w-full overflow-y-hidden"]))),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "modal-headline",
                    children: [(0,
                    p.jsxs)("div", {
                        className: (0,
                        m.f9)(Cr || (Cr = (0,
                        s.Z)(["pb-3 flex items-center justify-between"]))),
                        children: [(0,
                        p.jsx)("div", {
                            className: "dark:text-dark-400",
                            children: "Media Library"
                        }), (0,
                        p.jsx)("span", {
                            className: (0,
                            m.f9)(Sr || (Sr = (0,
                            s.Z)(["text-lg  font-bold text-body cursor-pointer ease-in-out transition duration-300 hover:rotate-180"]))),
                            "aria-hidden": "true",
                            onClick: function() {
                                d()
                            },
                            children: (0,
                            p.jsx)("svg", {
                                width: "30",
                                height: "30",
                                viewBox: "0 0 30 30",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                p.jsx)("path", {
                                    d: "M8.98959 9.01041L21.0104 21.0312M21.0104 9.01041L8.98959 21.0312",
                                    stroke: "#A7ACB3",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round"
                                })
                            })
                        })]
                    }), (0,
                    p.jsxs)("div", {
                        className: (0,
                        m.f9)(Mr || (Mr = (0,
                        s.Z)(["w-full flex flex-col flex-1 overflow-y-auto  ", " overflow-hidden "])), v.length > 0 ? "lg:w-[809px]" : "flex justify-center items-center "),
                        children: [y && (0,
                        p.jsx)("div", {
                            children: (0,
                            p.jsx)("div", {
                                className: "",
                                children: (0,
                                p.jsx)(je(), {
                                    color: "#eeeff0",
                                    size: 10,
                                    loading: !0
                                })
                            })
                        }), !y && v.length > 0 && (0,
                        p.jsx)(p.Fragment, {
                            children: (0,
                            p.jsxs)("div", {
                                className: "",
                                children: [(0,
                                p.jsx)("div", {
                                    className: "flex items-center justify-between flex-1 mb-4 space-x-7",
                                    children: (0,
                                    p.jsx)(ht.Z, {
                                        isOpenSearch: function() {},
                                        onSearch: function(e) {
                                            return S(e)
                                        }
                                    })
                                }), (0,
                                p.jsxs)("div", {
                                    className: "flex flex-col items-center px-4 py-4 mb-4 space-x-2 text-base font-medium text-left rounded-2xl dark:bg-white/5 bg-dark-200/5 md:text-lg text-lightGrey md:text-body dark:text-white",
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: "w-full mb-2 font-normal",
                                        children: "Your available visuals for the following features:"
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "flex flex-row justify-start w-full space-x-8",
                                        children: [(0,
                                        p.jsxs)("div", {
                                            className: "flex items-center justify-start space-x-3 ",
                                            children: [(0,
                                            p.jsxs)("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                p.jsx)("rect", {
                                                    x: "10.834",
                                                    y: "5.8335",
                                                    width: "3.33333",
                                                    height: "3.33333",
                                                    rx: "1.66667",
                                                    stroke: "#F64747",
                                                    strokeWidth: "1.5"
                                                }), (0,
                                                p.jsx)("path", {
                                                    d: "M3.93174 14.3345L5.38082 12.8854C6.73499 11.5312 8.93054 11.5312 10.2847 12.8854L11.7338 14.3345M11.7338 14.3345L12.3207 13.7475C13.4021 12.6661 15.1786 12.7467 16.1576 13.9216L16.5017 14.3345M11.7338 14.3345L13.901 16.5017M2.79406 12.5413C2.40198 10.8698 2.40198 9.13021 2.79406 7.45869C3.33698 5.14417 5.14417 3.33698 7.45869 2.79406C9.13021 2.40198 10.8698 2.40198 12.5413 2.79406C14.8558 3.33698 16.663 5.14417 17.2059 7.4587C17.598 9.13021 17.598 10.8698 17.2059 12.5413C16.663 14.8558 14.8558 16.663 12.5413 17.2059C10.8698 17.598 9.13021 17.598 7.4587 17.2059C5.14418 16.663 3.33698 14.8558 2.79406 12.5413Z",
                                                    stroke: "#F64747",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })]
                                            }), l === Gt.g5.Video ? (0,
                                            p.jsxs)("span", {
                                                className: "font-normal dark:text-dark-400",
                                                children: [(0,
                                                p.jsx)("span", {
                                                    className: "text-dark-300",
                                                    children: "type:"
                                                }), " MP4, JPG, PNG"]
                                            }) : (0,
                                            p.jsxs)("span", {
                                                className: "font-normal dark:text-dark-400",
                                                children: [(0,
                                                p.jsx)("span", {
                                                    className: "text-dark-300",
                                                    children: "type:"
                                                }), " JPG, PNG"]
                                            })]
                                        }), l === Gt.g5.Video && (0,
                                        p.jsxs)("div", {
                                            className: "flex items-center justify-start pl-2 space-x-3 border-l border-bordercolor dark:border-bordercolordark dark:text-dark-400",
                                            children: [(0,
                                            p.jsxs)("svg", {
                                                width: "20",
                                                height: "18",
                                                viewBox: "0 0 20 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                p.jsx)("path", {
                                                    d: "M2.01648 6.26619C2.59212 4.05879 4.35091 2.37001 6.55947 1.90403L6.9815 1.81498C8.972 1.39501 11.0267 1.39501 13.0172 1.81498L13.4392 1.90403C15.6478 2.37001 17.4066 4.05879 17.9822 6.26619C18.4495 8.05806 18.4495 9.94194 17.9822 11.7338C17.4066 13.9412 15.6478 15.63 13.4392 16.096L13.0172 16.185C11.0267 16.605 8.972 16.605 6.9815 16.185L6.55948 16.096C4.35091 15.63 2.59212 13.9412 2.01648 11.7338C1.54919 9.94194 1.54919 8.05806 2.01648 6.26619Z",
                                                    stroke: "#F64747",
                                                    strokeWidth: "1.5"
                                                }), (0,
                                                p.jsx)("path", {
                                                    d: "M5 9H6.66667L8.33333 11.5L11.6667 6.5L13.3333 9H15",
                                                    stroke: "#F64747",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })]
                                            }), (0,
                                            p.jsxs)("span", {
                                                children: ["resolution: ", t[0], " ", "x", " ", t[1]]
                                            })]
                                        })]
                                    })]
                                }), (0,
                                p.jsx)("div", {
                                    className: "flex-1",
                                    children: (0,
                                    p.jsx)("div", {
                                        className: "grid grid-cols-1 gap-6 md:grid-cols-3 ",
                                        children: f.map((function(e, t) {
                                            return (0,
                                            p.jsxs)("div", {
                                                onClick: function() {
                                                    Z.some((function(t) {
                                                        return t === e.uid
                                                    }
                                                    )) ? O((0,
                                                    lt.Z)(Z).filter((function(t) {
                                                        return t !== e.uid
                                                    }
                                                    ))) : O([].concat((0,
                                                    lt.Z)(Z), [e.uid]))
                                                },
                                                className: "relative flex flex-col items-center justify-center p-2 cursor-pointer rounded-3xl dark:bg-white/5 bg-dark-200/5",
                                                children: [(0,
                                                p.jsx)("div", {
                                                    className: "absolute top-6 left-6",
                                                    children: (0,
                                                    p.jsx)(w.XZ, {
                                                        name: "primary",
                                                        checked: Z.some((function(t) {
                                                            return t === e.uid
                                                        }
                                                        )),
                                                        labelColor: "dark"
                                                    }, "".concat(Z.some((function(t) {
                                                        return t === e.uid
                                                    }
                                                    ))))
                                                }), e.file.type.match(/video/) ? (0,
                                                p.jsx)("video", {
                                                    className: (0,
                                                    m.f9)(Zr || (Zr = (0,
                                                    s.Z)([" rounded-3xl h-48 object-cover w-full mx-auto block"]))),
                                                    children: (0,
                                                    p.jsx)("source", {
                                                        src: "".concat(Wr).concat(e.filename),
                                                        type: "video/mp4"
                                                    })
                                                }) : (0,
                                                p.jsx)("video", {
                                                    poster: "".concat(Wr).concat(e.filename),
                                                    className: (0,
                                                    m.f9)(Or || (Or = (0,
                                                    s.Z)([" rounded-3xl h-48 object-cover w-full mx-auto block"]))),
                                                    children: (0,
                                                    p.jsx)("source", {
                                                        src: "".concat(Wr, "/").concat(e.filename),
                                                        type: "image/"
                                                    })
                                                }), (0,
                                                p.jsx)("h3", {
                                                    title: e.oldName,
                                                    className: (0,
                                                    m.f9)(Lr || (Lr = (0,
                                                    s.Z)(["block text-black dark:text-white font-normal w-full text-lg px-4 pt-2 text-left break-words min-h-[30px] text-container"]))),
                                                    children: e.oldName
                                                })]
                                            }, t)
                                        }
                                        ))
                                    })
                                })]
                            })
                        }), !y && 0 === v.length && (0,
                        p.jsx)("div", {
                            className: "flex flex-col items-center h-full",
                            children: (0,
                            p.jsxs)("div", {
                                className: "flex flex-col items-center justify-center flex-1 space-y-6",
                                children: [(0,
                                p.jsx)("img", {
                                    className: "block dark:hidden",
                                    src: "/images/no-media-dark.svg",
                                    alt: "no-media"
                                }), (0,
                                p.jsx)("img", {
                                    className: "hidden dark:block",
                                    src: "/images/no-media.svg",
                                    alt: "no-media"
                                }), (0,
                                p.jsxs)("div", {
                                    className: "flex flex-col items-center pt-1 space-x-2 text-base font-medium md:text-lg text-lightGrey md:text-body dark:text-white",
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: "mb-2 font-normal",
                                        children: "No uploaded media matches specifications for your selected screens"
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "flex flex-row justify-center w-full space-x-4",
                                        children: [(0,
                                        p.jsxs)("div", {
                                            className: "flex items-center justify-start space-x-2 ",
                                            children: [(0,
                                            p.jsxs)("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                p.jsx)("rect", {
                                                    x: "10.834",
                                                    y: "5.8335",
                                                    width: "3.33333",
                                                    height: "3.33333",
                                                    rx: "1.66667",
                                                    stroke: "#F64747",
                                                    strokeWidth: "1.5"
                                                }), (0,
                                                p.jsx)("path", {
                                                    d: "M3.93174 14.3345L5.38082 12.8854C6.73499 11.5312 8.93054 11.5312 10.2847 12.8854L11.7338 14.3345M11.7338 14.3345L12.3207 13.7475C13.4021 12.6661 15.1786 12.7467 16.1576 13.9216L16.5017 14.3345M11.7338 14.3345L13.901 16.5017M2.79406 12.5413C2.40198 10.8698 2.40198 9.13021 2.79406 7.45869C3.33698 5.14417 5.14417 3.33698 7.45869 2.79406C9.13021 2.40198 10.8698 2.40198 12.5413 2.79406C14.8558 3.33698 16.663 5.14417 17.2059 7.4587C17.598 9.13021 17.598 10.8698 17.2059 12.5413C16.663 14.8558 14.8558 16.663 12.5413 17.2059C10.8698 17.598 9.13021 17.598 7.4587 17.2059C5.14418 16.663 3.33698 14.8558 2.79406 12.5413Z",
                                                    stroke: "#F64747",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })]
                                            }), l === Gt.g5.Video ? (0,
                                            p.jsxs)("span", {
                                                className: "text-sm font-normal dark:text-dark-400",
                                                children: [" ", (0,
                                                p.jsx)("span", {
                                                    className: "dark:text-dark-300",
                                                    children: "type:"
                                                }), " MP4, JPG, PNG"]
                                            }) : (0,
                                            p.jsxs)("span", {
                                                className: "text-sm font-normal dark:text-dark-400",
                                                children: [" ", (0,
                                                p.jsx)("span", {
                                                    className: "dark:text-dark-300",
                                                    children: "type:"
                                                }), " JPG, PNG"]
                                            })]
                                        }), l === Gt.g5.Video && (0,
                                        p.jsxs)("div", {
                                            className: "flex items-center justify-start pl-2 space-x-2 border-l border-bordercolor dark:border-bordercolordark dark:text-dark-400",
                                            children: [(0,
                                            p.jsxs)("svg", {
                                                width: "20",
                                                height: "18",
                                                viewBox: "0 0 20 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0,
                                                p.jsx)("path", {
                                                    d: "M2.01648 6.26619C2.59212 4.05879 4.35091 2.37001 6.55947 1.90403L6.9815 1.81498C8.972 1.39501 11.0267 1.39501 13.0172 1.81498L13.4392 1.90403C15.6478 2.37001 17.4066 4.05879 17.9822 6.26619C18.4495 8.05806 18.4495 9.94194 17.9822 11.7338C17.4066 13.9412 15.6478 15.63 13.4392 16.096L13.0172 16.185C11.0267 16.605 8.972 16.605 6.9815 16.185L6.55948 16.096C4.35091 15.63 2.59212 13.9412 2.01648 11.7338C1.54919 9.94194 1.54919 8.05806 2.01648 6.26619Z",
                                                    stroke: "#F64747",
                                                    strokeWidth: "1.5"
                                                }), (0,
                                                p.jsx)("path", {
                                                    d: "M5 9H6.66667L8.33333 11.5L11.6667 6.5L13.3333 9H15",
                                                    stroke: "#F64747",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })]
                                            }), (0,
                                            p.jsxs)("span", {
                                                className: "text-sm font-normal dark:text-dark-400",
                                                children: [(0,
                                                p.jsx)("span", {
                                                    className: "dark:text-dark-300",
                                                    children: "resolution:"
                                                }), " ", t[0], " ", "x", " ", t[1]]
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    }), (0,
                    p.jsxs)("div", {
                        className: "flex items-center justify-center w-full pt-4 min-tablet:space-x-4 space-x-0 min-tablet:space-y-0 space-y-4 min-tablet:flex-row flex-col",
                        children: [(0,
                        p.jsx)("div", {
                            className: "max-w-[300px] w-full",
                            children: (0,
                            p.jsx)(w.zx, {
                                type: "button",
                                color: "secondary",
                                onClick: d,
                                fullWidth: !0,
                                children: L.formatMessage({
                                    defaultMessage: "Close",
                                    id: "Button.Close"
                                })
                            })
                        }), (0,
                        p.jsx)("div", {
                            className: "max-w-[300px] w-full",
                            children: (0,
                            p.jsx)(w.zx, {
                                type: "button",
                                color: "primary",
                                disabled: 0 === Z.length,
                                onClick: function() {
                                    console.log(Z);
                                    var e = v.filter((function(e) {
                                        return Z.includes(e.uid)
                                    }
                                    ));
                                    E({
                                        type: Wt.df.adMultipledMediaToFormat,
                                        payload: {
                                            files: e.map((function(e) {
                                                if (e.filename) {
                                                    e.filename.split(".").pop();
                                                    var t = (0,
                                                    Rr.Z)();
                                                    return Ar(Ar({}, e), {}, {
                                                        duration: a,
                                                        type: "uploaded",
                                                        oldUid: e.uid,
                                                        uid: t,
                                                        filename: e.oldFilename,
                                                        originalFilename: e.oldFilename,
                                                        oldFilename: e.filename,
                                                        file: Ar(Ar({}, e.file), {}, {
                                                            type: "remote"
                                                        }),
                                                        oldType: e.type,
                                                        location: "".concat(e.filename),
                                                        action: "isuploaded"
                                                    })
                                                }
                                                return null
                                            }
                                            )),
                                            uuid: r
                                        }
                                    }),
                                    d()
                                },
                                fullWidth: !0,
                                children: L.formatMessage({
                                    defaultMessage: "Add Visual",
                                    id: "Button.AddVisual"
                                })
                            })
                        })]
                    })]
                })
            })
        };
        function Hr(e, t) {
            var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return zr(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return zr(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    r && (e = r);
                    var a = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, i = !0, l = !1;
            return {
                s: function() {
                    r = r.call(e)
                },
                n: function() {
                    var e = r.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    s = e
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (l)
                            throw s
                    }
                }
            }
        }
        function zr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, a = new Array(t); r < t; r++)
                a[r] = e[r];
            return a
        }
        function Ur(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        var _r = function(e) {
            var t, r, a = e.resolution, n = e.uploadedmedia, s = e.rules, i = e.uuid, l = e.contentType, o = e.activeMedia, d = e.durations, m = e.locationsName, f = e.duration, h = e.index, x = (0,
            E.q)().notify, v = c.useState([]), y = (0,
            b.Z)(v, 2), j = (y[0],
            y[1],
            c.useContext(At.W)), k = j.publishState, N = j.dispatch, C = c.useState(!1), S = (0,
            b.Z)(C, 2), M = S[0], Z = S[1], O = c.useState(!1), L = (0,
            b.Z)(O, 2), T = L[0], P = L[1], I = c.useState(!0), D = (0,
            b.Z)(I, 2), F = D[0], R = D[1], B = c.useState(!1), A = (0,
            b.Z)(B, 2), W = A[0], V = A[1], H = c.useState(""), z = (0,
            b.Z)(H, 2), U = z[0], _ = z[1], G = c.useState([]), q = (0,
            b.Z)(G, 2), J = q[0], K = q[1], X = c.useState(f), Y = (0,
            b.Z)(X, 2), Q = Y[0], ee = Y[1], te = c.useState(Q), re = (0,
            b.Z)(te, 2), ae = re[0], ne = re[1], se = c.useState(0), ie = (0,
            b.Z)(se, 2), le = ie[0], oe = ie[1], ce = c.useState(), de = (0,
            b.Z)(ce, 2), ue = de[0], me = de[1], fe = c.useState([]), he = (0,
            b.Z)(fe, 2), pe = he[0], xe = he[1], ve = (0,
            c.useState)(!1), ge = ve[0], be = ve[1], ye = c.useRef(null);
            (0,
            c.useEffect)((function() {
                return je(),
                function() {}
            }
            ), [k.toggleMedia, Q]);
            var je = function() {
                n.map((function(e) {
                    return function(e, t) {
                        var r = !1;
                        return (e.file.type && e.file.type.includes("image") || e.oldType && e.oldType.includes("image")) && (r = !0),
                        !r && t && (e.duration - t > .5 || t - e.duration > .5)
                    }(e, Q) && (ke(e.uid),
                    x("File removed based on selected media duration.", "error")),
                    e
                }
                ))
            }
              , we = function(e) {
                if (console.log("media", e),
                "isuploaded" === e.action || e.type.includes("draft")) {
                    _(e.src),
                    P(!0);
                    var t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ur(Object(r), !0).forEach((function(t) {
                                (0,
                                g.Z)(e, t, r[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ur(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }
                            ))
                        }
                        return e
                    }({}, e);
                    if (t.oldUid) {
                        var r = e.oldName.split(".")
                          , a = "".concat(e.oldUid, ".").concat(r[r.length - 1]);
                        t.oldFilename = a
                    }
                    me(t)
                }
            }
              , ke = function(e) {
                var t = (0,
                lt.Z)(pe).filter((function(t) {
                    return t.uid !== e
                }
                ));
                N({
                    type: Wt.df.removeMediaToFormat,
                    payload: {
                        fileUuid: e,
                        formatUuid: i
                    }
                }),
                xe(t)
            };
            (0,
            c.useEffect)((function() {
                var e, t = 0, r = Hr(pe);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        e.value.rules.length > 0 && t++
                    }
                } catch (a) {
                    r.e(a)
                } finally {
                    r.f()
                }
                return 0 !== pe.length && t === pe.length ? Z(!0) : Z(!1),
                function() {}
            }
            ), [k.toggleMedia]),
            (0,
            c.useEffect)((function() {
                return Ne(f),
                xe(n),
                function() {}
            }
            ), []),
            (0,
            c.useEffect)((function() {
                return Ne(f),
                function() {}
            }
            ), [k.formats]),
            (0,
            c.useEffect)((function() {
                return oe(le + 1),
                function() {}
            }
            ), [J]);
            var Ne = function(e) {
                var t = d.map((function(t) {
                    return {
                        label: "".concat(t),
                        value: "".concat(t),
                        checked: "".concat(t) === "".concat(e)
                    }
                }
                ));
                K(t)
            }
              , Ce = {
                buttonText: "Confirm",
                action: function() {
                    Me()
                }
            }
              , Se = {
                buttonText: "Cancel",
                action: function() {
                    Ze()
                }
            }
              , Me = function(e) {
                N({
                    type: Wt.df.setMediaDuration,
                    payload: {
                        value: e || ae,
                        index: h
                    }
                }),
                ee(e || ae),
                Ne(e || ae),
                V(!1)
            }
              , Ze = function() {
                N({
                    type: Wt.df.setMediaDuration,
                    payload: {
                        value: Q,
                        index: h
                    }
                }),
                Ne(Q),
                V(!1)
            };
            return (0,
            p.jsxs)(p.Fragment, {
                children: [T && (0,
                p.jsx)(w.ql, {
                    closeDialog: function() {
                        P(!1)
                    },
                    photos: [U],
                    mediaDetails: ue,
                    locationName: ue.oldName
                }), null !== (t = W && (0,
                p.jsx)(u.Vq, {
                    description: "Selecting this duration will erase you media files that don't match it",
                    title: "Media Duration Selection",
                    primaryButton: Ce,
                    secondaryButton: Se
                })) && void 0 !== t ? t : null, ge && (0,
                p.jsx)(Vr, {
                    resolution: a,
                    formatId: i,
                    uploadedmedia: n,
                    contentType: l,
                    duration: f,
                    onClose: function() {
                        return be(!1)
                    }
                }), (0,
                p.jsx)(ft.Z, {
                    otherClasses: "flex-1 p-6 md:h-100-76 overflow-y-auto flex mx-4 md:mx-0 ".concat(o === i ? "" : "hidden"),
                    children: (0,
                    p.jsxs)("div", {
                        className: "flex-1 box-upload",
                        children: [(0,
                        p.jsxs)("div", {
                            id: 0 === h ? "select-duration" : "",
                            className: "px-4 py-2 mb-4 border border-dashed border-lightGrey dark:border-bordercolordark rounded-xl",
                            children: [o === i && (0,
                            p.jsxs)("div", {
                                className: "flex flex-row flex-wrap justify-between text-base dark:text-dark-400",
                                children: [(0,
                                p.jsxs)("div", {
                                    className: "flex flex-row flex-wrap items-center space-y-2 text-base dark:text-dark-400",
                                    children: [(0,
                                    p.jsx)("p", {
                                        className: "mr-4 whitespace-nowrap",
                                        children: "Select media duration:"
                                    }), (0,
                                    p.jsx)(w.X, {
                                        boxSize: "big",
                                        type: "radio",
                                        name: "primary_".concat(o),
                                        flexClass: "flex-1 is-center-box",
                                        onChange: function(e) {
                                            var t, r = e.target.id.split("_");
                                            t = r[1],
                                            pe.length > 0 ? (V(!0),
                                            ne(t)) : (ne(t),
                                            Me(t))
                                        },
                                        options: J
                                    }, "".concat(o, "-").concat(null === (r = J[0]) || void 0 === r ? void 0 : r.checked, "-").concat(le))]
                                }), (0,
                                p.jsx)("div", {
                                    className: "flex flex-row items-center mt-2 cursor-pointer",
                                    style: {
                                        marginLeft: "auto"
                                    },
                                    children: (0,
                                    p.jsxs)("p", {
                                        onClick: function() {
                                            R(!F)
                                        },
                                        className: "text-base underline dark:text-dark-400 whitespace-nowrap",
                                        children: [null === m || void 0 === m ? void 0 : m.length, " locations (", F ? "close" : "open", ")"]
                                    })
                                })]
                            }), F && (0,
                            p.jsxs)("div", {
                                className: "my-3 text-lg dark:text-dark-400",
                                children: [(0,
                                p.jsx)("p", {
                                    className: "text-base",
                                    children: "The following locations are controlled by this media format:"
                                }), (0,
                                p.jsxs)("p", {
                                    className: "mb-4 text-sm dark:text-dark-300",
                                    children: ["*each location has ", (0,
                                    p.jsxs)("span", {
                                        className: "font-semibold dark:text-dark-400",
                                        children: [Q, "s"]
                                    }), " ", "duration for the uploaded creatives"]
                                }), (0,
                                p.jsx)("div", {
                                    className: "flex flex-wrap",
                                    children: m && m.map((function(e, t) {
                                        return (0,
                                        p.jsx)("div", {
                                            className: "mb-4",
                                            children: (0,
                                            p.jsx)(w.Y8, {
                                                name: "warn",
                                                justText: !0,
                                                color: "primary",
                                                onChange: function(e) {},
                                                labelColor: "dark",
                                                label: e,
                                                value: e,
                                                disabled: !0
                                            })
                                        }, t)
                                    }
                                    ))
                                })]
                            })]
                        }), (0,
                        p.jsx)($.Z, {
                            id: "supports-tooltip",
                            place: "top",
                            className: "custom-tooltip",
                            children: (0,
                            p.jsxs)("div", {
                                className: "preview-media-tooltip",
                                children: [(0,
                                p.jsxs)("div", {
                                    children: [(0,
                                    p.jsx)("span", {
                                        children: "Formats:"
                                    }), l === Gt.g5.Video ? (0,
                                    p.jsx)("span", {
                                        className: "pl-2",
                                        children: "MP4, JPG, PNG"
                                    }) : (0,
                                    p.jsx)("span", {
                                        className: "pl-2",
                                        children: " JPG, PNG"
                                    })]
                                }), (0,
                                p.jsxs)("div", {
                                    children: [(0,
                                    p.jsx)("span", {
                                        children: "Resolution:"
                                    }), (0,
                                    p.jsxs)("span", {
                                        className: "pl-2",
                                        children: [a[0], " ", "x", " ", a[1]]
                                    })]
                                }), l === Gt.g5.Video && (0,
                                p.jsxs)("div", {
                                    children: [(0,
                                    p.jsx)("span", {
                                        children: "Duration (for MP4):"
                                    }), (0,
                                    p.jsxs)("span", {
                                        className: "pl-2",
                                        children: [Q, "s"]
                                    })]
                                })]
                            })
                        }), (0,
                        p.jsx)(w.fh, {
                            dropRef: ye,
                            onMediaDrop: function(e, t) {
                                if (t.length > 0)
                                    x("Some files were rejected. Please only use images", "error");
                                else {
                                    e.forEach((function(e) {
                                        e.type = "uploaded",
                                        e.rejected = null
                                    }
                                    )),
                                    N({
                                        type: Wt.df.setMedia,
                                        payload: {
                                            type: "remoteUpload",
                                            formatId: i,
                                            media: e
                                        }
                                    });
                                    var r = (0,
                                    lt.Z)(pe).concat(e);
                                    xe(r)
                                }
                            },
                            contentType: l,
                            children: (0,
                            p.jsxs)("div", {
                                id: "drop-container",
                                className: "flex flex-col items-center justify-center h-full tracking-tighter text-center text-lightGrey",
                                children: [(0,
                                p.jsxs)("div", {
                                    className: "mb-10",
                                    children: [(0,
                                    p.jsx)("img", {
                                        src: "/images/media.svg",
                                        className: "block dark:hidden"
                                    }), (0,
                                    p.jsx)("img", {
                                        src: "/images/media-dark.svg",
                                        className: "hidden dark:block"
                                    })]
                                }), (0,
                                p.jsxs)("div", {
                                    className: "hidden text-xl font-semibold md:block dark:text-dark-500",
                                    children: ["Drag&Drop your visual here, or", " ", (0,
                                    p.jsx)("span", {
                                        className: "underline cursor-pointer text-primary-500",
                                        onClick: function() {
                                            var e;
                                            null === (e = ye.current) || void 0 === e || e.click()
                                        },
                                        children: "browse\xa0"
                                    }), "to upload or", " ", (0,
                                    p.jsx)("span", {
                                        className: "underline cursor-pointer text-primary-500",
                                        onClick: function() {
                                            be(!0)
                                        },
                                        children: "add from media library"
                                    })]
                                }), (0,
                                p.jsxs)("div", {
                                    className: "text-lg font-semibold md:hidden",
                                    children: [(0,
                                    p.jsx)("span", {
                                        className: "underline cursor-pointer text-primary-500",
                                        onClick: function() {
                                            var e;
                                            null === (e = ye.current) || void 0 === e || e.click()
                                        },
                                        children: "Browse\xa0"
                                    }), "or", " ", (0,
                                    p.jsx)("span", {
                                        className: "underline cursor-pointer text-primary-500",
                                        onClick: function() {
                                            be(!0)
                                        },
                                        children: "add from media library"
                                    }), " ", "to upload your visuals"]
                                }), (0,
                                p.jsxs)("div", {
                                    className: "flex flex-row items-center pt-1 space-x-2 text-base font-medium md:text-lg text-lightGrey md:text-body dark:text-dark-300",
                                    children: ["Supports:\xa0", l === Gt.g5.Video ? (0,
                                    p.jsx)("span", {
                                        className: "dark:text-dark-400",
                                        children: "MP4, JPG, PNG"
                                    }) : (0,
                                    p.jsx)("span", {
                                        className: "dark:text-dark-400",
                                        children: " JPG, PNG"
                                    }), (0,
                                    p.jsxs)("span", {
                                        className: "pl-2 border-l border-bordercolor dark:border-bordercolordark dark:text-dark-400",
                                        children: [a[0], " ", "x", " ", a[1]]
                                    }), l === Gt.g5.Video && (0,
                                    p.jsxs)("span", {
                                        className: "pl-2 border-l border-bordercolor dark:border-bordercolordark dark:text-dark-400",
                                        children: [Q, "s"]
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "mr-4 cursor-pointer excl-mark",
                                        "data-tip": !0,
                                        "data-for": "supports-tooltip",
                                        children: "!"
                                    })]
                                })]
                            })
                        }), M && (0,
                        p.jsx)("div", {
                            className: "pt-3 pb-1 text-base font-medium text-primary-500",
                            children: "You must have at least one non-contextual visual!"
                        }), pe.length > 0 && (0,
                        p.jsxs)("div", {
                            id: "uploaded-media",
                            className: "pt-3",
                            children: [(0,
                            p.jsx)("div", {
                                className: "mb-3 text-lg dark:text-dark-300",
                                children: "Live preview"
                            }), (0,
                            p.jsx)("ul", {
                                className: "flex flex-wrap",
                                children: pe.map((function(e, t) {
                                    return (0,
                                    p.jsxs)("li", {
                                        "data-tip": !0,
                                        "data-for": "".concat(e.oldName, "-tooltip-").concat(t),
                                        className: "mb-3 mr-3 preview-image",
                                        onClick: function() {
                                            return we(e)
                                        },
                                        children: [(0,
                                        p.jsx)(Fr, {
                                            data: e,
                                            resolution: a
                                        }), (0,
                                        p.jsx)($.Z, {
                                            id: "".concat(e.oldName, "-tooltip-").concat(t),
                                            place: "top",
                                            className: "custom-tooltip",
                                            children: (0,
                                            p.jsx)("div", {
                                                className: "preview-media-tooltip",
                                                children: e.oldName
                                            })
                                        })]
                                    }, "".concat(e.uid, "-preview-").concat(t))
                                }
                                ))
                            }), (0,
                            p.jsxs)("div", {
                                className: "flex items-center justify-start mt-5 mb-3 text-lg dark:text-dark-300",
                                children: ["Uploaded media", pe.filter((function(e) {
                                    return "toupload" === e.action
                                }
                                )).length > 0 && (0,
                                p.jsx)("div", {
                                    className: "ml-3",
                                    children: (0,
                                    p.jsx)(w.Nj, {
                                        hasCustomText: !0,
                                        text: pe.filter((function(e) {
                                            return "toupload" === e.action
                                        }
                                        )).length > 0 ? pe.filter((function(e) {
                                            return "toupload" === e.action
                                        }
                                        )).length + " uploading" : "",
                                        status: "pending",
                                        "data-for": "main",
                                        "data-tip": "Text for high number of request",
                                        "data-iscapture": "true"
                                    })
                                }), (0,
                                p.jsx)("div", {
                                    className: "ml-3",
                                    children: (0,
                                    p.jsx)(w.Nj, {
                                        hasCustomText: !0,
                                        text: pe.filter((function(e) {
                                            return "isuploaded" === e.action || e.type.includes("draft")
                                        }
                                        )).length + " completed",
                                        status: "completed",
                                        "data-for": "main",
                                        "data-tip": "Text for high number of request",
                                        "data-iscapture": "true"
                                    })
                                })]
                            }), pe.map((function(e, t) {
                                return (0,
                                p.jsx)(u.PB, {
                                    rejectMedia: function() {
                                        ke(e.uid)
                                    },
                                    rejectMediaFaild: function() {
                                        !function(e) {
                                            var t = (0,
                                            lt.Z)(pe).find((function(t) {
                                                return t.uid === e
                                            }
                                            ));
                                            if (t) {
                                                var r = (0,
                                                lt.Z)(pe).indexOf(t);
                                                r > -1 && (pe.splice(r, 1),
                                                xe((0,
                                                lt.Z)(pe)))
                                            }
                                        }(e.uid)
                                    },
                                    previewMedia: function() {
                                        we(e)
                                    },
                                    updateVideoDuration: function(t) {
                                        !function(e, t) {
                                            N({
                                                type: Wt.df.updateVideoCardDuration,
                                                payload: {
                                                    formatId: i,
                                                    mediaId: e,
                                                    durationN: t
                                                }
                                            })
                                        }(e.uid, t)
                                    },
                                    duration: f,
                                    uuid: i,
                                    rules: s,
                                    resolution: a,
                                    data: e,
                                    ratio: 1,
                                    index: t
                                }, "".concat(e.uid, "-media-").concat(t))
                            }
                            ))]
                        })]
                    })
                })]
            })
        };
        function Gr(e, t) {
            var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return qr(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return qr(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    r && (e = r);
                    var a = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, i = !0, l = !1;
            return {
                s: function() {
                    r = r.call(e)
                },
                n: function() {
                    var e = r.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    s = e
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (l)
                            throw s
                    }
                }
            }
        }
        function qr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, a = new Array(t); r < t; r++)
                a[r] = e[r];
            return a
        }
        function Jr(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function Kr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Jr(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jr(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var Xr, Yr = function(e) {
            var t, r, a = e.rules, n = e.currency, s = (0,
            E.q)().notify, i = ((0,
            C.Z)(),
            (0,
            O.useRouter)()), l = c.useContext(At.W), o = l.publishState, d = (l.dispatch,
            c.useState()), m = (0,
            b.Z)(d, 2), f = m[0], h = m[1], x = c.useState(!1), v = (0,
            b.Z)(x, 2), g = v[0], y = v[1], j = c.useState(0), w = (0,
            b.Z)(j, 2), k = w[0], N = w[1], S = c.useState(""), M = (0,
            b.Z)(S, 2), Z = M[0], T = M[1], I = (0,
            He.ZP)(), D = I.setState, F = I.state, R = F.run, B = F.tourActive, A = (F.stepIndex,
            F.steps);
            (0,
            c.useEffect)((function() {
                B && D({
                    run: !0,
                    stepIndex: 17,
                    steps: A,
                    tourActive: B
                })
            }
            ), []),
            (0,
            c.useEffect)((function() {
                var e;
                return o.locations && 0 !== (null === (e = o.locations) || void 0 === e ? void 0 : e.length) || i.push("/publish/select/?campaignId=".concat(o.uuid)),
                function() {}
            }
            ), []),
            (0,
            c.useEffect)((function() {
                return V(),
                o.formats && o.formats.length > 0 && (h(o.formats),
                T(o.formats[0].uuid)),
                function() {}
            }
            ), []),
            (0,
            c.useEffect)((function() {
                if (V(),
                o.formats && o.formats.length > 0) {
                    h(o.formats);
                    var e = o.formats.find((function(e) {
                        return e.uuid === Z
                    }
                    ));
                    T(e ? Z : o.formats[0].uuid)
                } else
                    W();
                return function() {}
            }
            ), [o.formats]);
            var W = function() {
                i.push("/publish/schedule/?campaignId=".concat(o.uuid))
            };
            (0,
            c.useEffect)((function() {
                return V(),
                function() {}
            }
            ), [o.toggleMedia]),
            (0,
            c.useEffect)((function() {
                return L.hJ.saveCampaignDraft(Kr(Kr({}, o), {}, {
                    maxStep: 5
                })).catch((function(e) {
                    return console.log(e)
                }
                )),
                function() {}
            }
            ), []);
            var V = function() {
                var e, t = !1, r = Gr(o.formats);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        e.value.media.filter((function(e) {
                            return "toupload" === e.action
                        }
                        )).length > 0 && (t = !0)
                    }
                } catch (i) {
                    r.e(i)
                } finally {
                    r.f()
                }
                var a, n = 0, s = Gr(o.formats);
                try {
                    for (s.s(); !(a = s.n()).done; ) {
                        0 !== a.value.media.filter((function(e) {
                            return 0 === e.rules.length
                        }
                        )).length && (n += 1)
                    }
                } catch (i) {
                    s.e(i)
                } finally {
                    s.f()
                }
                N(n),
                o.formats.length !== n || t ? y(!1) : y(!0)
            }
              , H = (0,
            c.useRef)(null)
              , z = function(e) {
                V(),
                T(e)
            }
              , U = {
                dots: !1,
                infinite: !1,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: !1,
                responsive: [{
                    breakpoint: 800,
                    settings: {
                        vertical: !1,
                        centerMode: !0,
                        arrows: !1,
                        slidesToShow: 1,
                        centerPadding: "20px"
                    }
                }],
                afterChange: function(e) {
                    z(f ? f[e].uuid : "")
                }
            };
            return (0,
            p.jsxs)("div", {
                className: "lg:static page-section",
                children: [(0,
                p.jsxs)("div", {
                    className: "".concat(R ? "" : "overflow-y-auto", " md:h-screen pb-14"),
                    children: [(0,
                    p.jsx)("div", {
                        className: "absolute top-0 left-0 right-0 flex items-center px-4 pl-4 pr-24 bg-white dark:bg-dark-200 dark:text-dark-400 md:hidden h-21 z-101 md:px-0 shadow-mob",
                        children: "Configure your visuals"
                    }), (0,
                    p.jsxs)("div", {
                        className: "mt-20 md:mt-0",
                        children: [(0,
                        p.jsx)(u.bu, {
                            className: ""
                        }), (0,
                        p.jsxs)("div", {
                            className: "flex flex-col-reverse flex-wrap justify-between px-4 pt-4 md:py-6 md:space-x-7 md:flex-row md:px-7",
                            children: [(0,
                            p.jsx)(ft.Z, {
                                otherClasses: "md:flex-1 flex items-center justify-between md:h-16 rounded-20 mt-4 md:mt-0",
                                children: (0,
                                p.jsxs)("div", {
                                    className: "flex flex-row items-center w-full px-4 text-sm font-semibold tracking-tighter text-dark-default md:px-7 py-7 dark:text-dark-400",
                                    children: [(0,
                                    p.jsx)("div", {
                                        children: (0,
                                        p.jsx)("div", {
                                            className: "mr-4 cursor-pointer excl-mark ",
                                            children: "!"
                                        })
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "flex flex-row flex-wrap",
                                        children: [(0,
                                        p.jsx)("span", {
                                            className: "pr-2 mb-2 md:mb-0",
                                            children: "Upload your visual for each media format."
                                        }), (0,
                                        p.jsx)("span", {
                                            className: "",
                                            children: "We grouped your booked locations by type, accepted durations and resolution!"
                                        })]
                                    }), (0,
                                    p.jsxs)("span", {
                                        className: "media-status whitespace-nowrap order-4 ml-4 pl-4 border-l border-bordercolor dark:border-bordercolordark ".concat(k !== (null === f || void 0 === f ? void 0 : f.length) ? "text-primary-500" : "text-success-500"),
                                        children: [k, " / ", null === f || void 0 === f ? void 0 : f.length, " done"]
                                    })]
                                })
                            }), (0,
                            p.jsx)(ft.Z, {
                                otherClasses: "w-full md:w-auto h-21 md:h-16 flex justify-center",
                                children: (0,
                                p.jsx)(u.wD, {
                                    source: "media"
                                })
                            })]
                        })]
                    }), (0,
                    p.jsx)("div", {
                        className: "flex flex-col w-full px-0 space-y-8 overflow-hidden text-xl text-left md:px-7",
                        children: f && (0,
                        p.jsxs)("div", {
                            className: "flex flex-col space-y-4 md:flex-row md:space-y-0",
                            children: [(0,
                            p.jsx)(P.Z, Kr(Kr({}, U), {}, {
                                className: "md:w-80  md:hidden mt-8",
                                children: f.map((function(e, t) {
                                    return (0,
                                    p.jsx)(u.OU, {
                                        rules: a,
                                        uploadedmedia: e.media,
                                        uuid: e.uuid,
                                        total: f.length,
                                        index: t,
                                        duration: e.selectedDuration,
                                        durations: e.durations,
                                        resolution: e.resolution,
                                        contentType: e.contentType,
                                        multiScreenUrl: e.multiScreenUrl,
                                        locations: e.locationsName,
                                        activeMedia: Z,
                                        changeMedia: z
                                    }, t)
                                }
                                ))
                            })), (0,
                            p.jsx)("div", {
                                className: "flex-col hidden pr-2 overflow-x-hidden overflow-y-auto md:flex h-100-76 md:mr-7",
                                children: (0,
                                p.jsx)("div", {
                                    id: "mediaGroup",
                                    children: f.map((function(e, t) {
                                        return (0,
                                        p.jsx)(u.OU, {
                                            rules: a,
                                            uploadedmedia: e.media,
                                            uuid: e.uuid,
                                            total: f.length,
                                            index: t,
                                            duration: e.selectedDuration,
                                            durations: e.durations,
                                            resolution: e.resolution,
                                            contentType: e.contentType,
                                            multiScreenUrl: e.multiScreenUrl,
                                            locations: e.locationsName,
                                            activeMedia: Z,
                                            changeMedia: z
                                        }, t)
                                    }
                                    ))
                                })
                            }), f.map((function(e, t) {
                                return (0,
                                p.jsx)(_r, {
                                    contentType: e.contentType,
                                    uploadedmedia: (0,
                                    lt.Z)(e.media),
                                    resolution: e.resolution,
                                    rules: a,
                                    duration: e.selectedDuration,
                                    durations: e.durations,
                                    locationsName: e.locationsName,
                                    uuid: e.uuid,
                                    activeMedia: Z,
                                    index: t
                                }, "".concat(e.uuid, "_").concat(e.media.length))
                            }
                            ))]
                        })
                    })]
                }), (!(0 !== (null === (t = o.locations) || void 0 === t ? void 0 : t.length)) || !g) && (0,
                p.jsx)($.Z, {
                    id: "footer-tooltip",
                    className: "custom-tooltip",
                    place: "left",
                    overridePosition: function(e) {
                        var t, r;
                        return {
                            top: window.innerWidth < 550 ? window.innerHeight - (null === H || void 0 === H || null === (t = H.current) || void 0 === t ? void 0 : t.offsetHeight) - 200 : e.top,
                            left: window.innerWidth < 550 ? window.innerWidth - (null === H || void 0 === H || null === (r = H.current) || void 0 === r ? void 0 : r.offsetWidth) - 35 : e.left
                        }
                    },
                    children: (0,
                    p.jsx)("div", {
                        ref: H,
                        className: "flex flex-col preview-media-tooltip",
                        children: (0,
                        p.jsxs)("div", {
                            className: "flex",
                            children: [(0,
                            p.jsx)("div", {
                                className: "mr-2 excl-mark pulse-disclaimer",
                                children: "!"
                            }), g ? (0,
                            p.jsx)("span", {
                                children: "No location booked"
                            }) : (0,
                            p.jsx)("span", {
                                children: "Please make sure to load all media"
                            })]
                        })
                    })
                }), (0,
                p.jsx)(u._l, {
                    backFn: W,
                    nextFn: function() {
                        g ? ((0,
                        Y.v7)(o, n),
                        (0,
                        Y.vT)(),
                        i.push("/publish/review/?campaignId=".concat(o.uuid))) : s("Please make sure to load all media before pressing Continue.", "error")
                    },
                    mainPage: "Dashboard",
                    links: [o.name],
                    back: "1",
                    next: "1",
                    hasNext: o.locations && (null === (r = o.locations) || void 0 === r ? void 0 : r.length) > 0 && g
                })]
            })
        }, $r = r(46598), Qr = r(70819), ea = (r(30455),
        r(58101)), ta = r.n(ea), ra = r(41396);
        function aa(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function na(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? aa(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aa(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function sa(e, t) {
            var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return ia(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return ia(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    r && (e = r);
                    var a = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, i = !0, l = !1;
            return {
                s: function() {
                    r = r.call(e)
                },
                n: function() {
                    var e = r.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    s = e
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (l)
                            throw s
                    }
                }
            }
        }
        function ia(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, a = new Array(t); r < t; r++)
                a[r] = e[r];
            return a
        }
        var la, oa, ca, da = function(e) {
            var t = e.userCompany
              , r = (0,
            C.Z)()
              , a = (0,
            O.useRouter)()
              , n = c.useRef()
              , l = c.useRef()
              , d = c.useContext(At.W)
              , f = d.publishState
              , h = d.dispatch
              , x = c.useState([])
              , v = (0,
            b.Z)(x, 2)
              , g = v[0]
              , y = v[1]
              , j = c.useState(!1)
              , k = (0,
            b.Z)(j, 2)
              , N = k[0]
              , S = k[1]
              , M = c.useState(!1)
              , Z = (0,
            b.Z)(M, 2)
              , T = Z[0]
              , P = Z[1]
              , I = c.useState(!1)
              , D = (0,
            b.Z)(I, 2)
              , F = D[0]
              , R = D[1]
              , B = c.useState(!1)
              , A = (0,
            b.Z)(B, 2)
              , W = A[0]
              , V = A[1]
              , H = c.useState(!1)
              , z = (0,
            b.Z)(H, 2)
              , U = z[0]
              , _ = z[1]
              , G = c.useState(!1)
              , q = (0,
            b.Z)(G, 2)
              , J = q[0]
              , K = q[1]
              , X = c.useState(0)
              , Q = (0,
            b.Z)(X, 2)
              , ee = Q[0]
              , te = Q[1]
              , re = c.useState(0)
              , ae = (0,
            b.Z)(re, 2)
              , ne = ae[0]
              , se = ae[1]
              , ie = c.useState(0)
              , le = (0,
            b.Z)(ie, 2)
              , oe = le[0]
              , ce = le[1]
              , de = c.useState(null)
              , ue = (0,
            b.Z)(de, 2)
              , me = ue[0]
              , fe = ue[1]
              , he = c.useState("")
              , pe = (0,
            b.Z)(he, 2)
              , xe = pe[0]
              , ve = pe[1]
              , ge = c.useState(0)
              , ye = (0,
            b.Z)(ge, 2)
              , je = ye[0]
              , we = ye[1]
              , ke = c.useState(0)
              , Ne = (0,
            b.Z)(ke, 2)
              , Ce = Ne[0]
              , Se = Ne[1]
              , Me = c.useState(0)
              , Ze = (0,
            b.Z)(Me, 2)
              , Oe = Ze[0]
              , Le = Ze[1]
              , Te = c.useState(0)
              , Ee = (0,
            b.Z)(Te, 2)
              , Pe = Ee[0]
              , Ie = Ee[1]
              , De = c.useState("")
              , Fe = (0,
            b.Z)(De, 2)
              , Re = Fe[0]
              , Be = Fe[1]
              , Ae = c.useState(0)
              , We = (0,
            b.Z)(Ae, 2)
              , Ve = We[0]
              , ze = We[1]
              , Ue = c.useState(null)
              , _e = (0,
            b.Z)(Ue, 2)
              , Ge = _e[0]
              , qe = _e[1]
              , Je = (0,
            E.q)().notify
              , Ke = L.CR.getJwtUser();
            (0,
            c.useEffect)((function() {
                var e;
                return f.name && 0 !== (null === (e = f.industry) || void 0 === e ? void 0 : e.length) || a.push("/publish/basic"),
                function() {}
            }
            ), []);
            var Xe = (0,
            He.ZP)()
              , Ye = Xe.setState
              , $e = Xe.state
              , Qe = ($e.run,
            $e.tourActive)
              , et = $e.stepIndex
              , tt = $e.steps;
            (0,
            c.useEffect)((function() {
                24 === et && l.current && "function" === typeof l.current.scrollIntoView && l.current.scrollIntoView({
                    behavior: "smooth"
                })
            }
            ), [et]),
            (0,
            c.useEffect)((function() {
                Qe && Ye({
                    run: !0,
                    stepIndex: 21,
                    steps: tt,
                    tourActive: Qe
                })
            }
            ), [g]),
            (0,
            c.useEffect)((function() {
                if (me) {
                    try {
                        (0,
                        Y.cU)(f.locations, me, t.tpsRegion.currency)
                    } catch (e) {
                        $r.Tb(e)
                    }
                    (0,
                    Y.Ed)()
                }
                return function() {}
            }
            ), [me]),
            (0,
            c.useEffect)((function() {
                n.current && 0 !== je && bt(f.usedCredits / 1e4)
            }
            ), [n.current, je]);
            var rt = [{
                name: "Location",
                selector: "name",
                accessor: "name",
                sortable: !0,
                cell: function(e) {
                    return (0,
                    p.jsx)("div", {
                        className: "cursor-pointer",
                        title: e.name,
                        children: e.name
                    })
                }
            }, {
                name: "Frequency",
                selector: "frequency",
                accessor: "frequency",
                sortable: !0
            }, {
                name: "Slots",
                selector: "slots",
                accessor: "slots",
                sortable: !0
            }, {
                name: "Est Plays",
                selector: "plays",
                accessor: "plays",
                sortable: !0
            }, {
                name: "Est Impressions",
                selector: "reach",
                accessor: "reach",
                sortable: !0
            }, {
                name: "Price",
                selector: "price",
                accessor: "price",
                sortable: !0
            }]
              , at = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t, r, a, n, s, i, l, c, d, u, m, h;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = [],
                                r = 0,
                                a = 0,
                                n = [],
                                f.schedule) {
                                    s = sa(f.schedule);
                                    try {
                                        for (s.s(); !(i = s.n()).done; )
                                            "global" !== (l = i.value).uuid && (r += l.locations.length,
                                            a += l.slots.length,
                                            n.push({
                                                locations: l.locations,
                                                slots: l.slots
                                            }))
                                    } catch (o) {
                                        s.e(o)
                                    } finally {
                                        s.f()
                                    }
                                }
                                return te(r),
                                ce(a),
                                e.next = 9,
                                ur.i.calculatePriceEndPrice(n);
                            case 9:
                                if (c = e.sent,
                                d = 0,
                                fe(c),
                                f.locations) {
                                    u = sa(f.locations);
                                    try {
                                        for (h = function() {
                                            var e, r = m.value, a = null === c || void 0 === c || null === (e = c.pricePerScreen) || void 0 === e ? void 0 : e.filter((function(e) {
                                                return e.uuid === r.location.uuid
                                            }
                                            )), n = (0,
                                            b.Z)(a, 1)[0];
                                            d += r.location.circuit,
                                            t.push({
                                                uuid: r.location.uuid,
                                                name: r.location.n,
                                                frequency: 3600 / r.pph,
                                                slots: ot(r),
                                                plays: ot(r) * (3600 / r.pph) * r.location.circuit,
                                                reach: Math.floor(r.reach),
                                                price: n ? n.price : "0"
                                            })
                                        }
                                        ,
                                        u.s(); !(m = u.n()).done; )
                                            h()
                                    } catch (o) {
                                        u.e(o)
                                    } finally {
                                        u.f()
                                    }
                                }
                                se(d),
                                y(t);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            (0,
            c.useEffect)((function() {
                return nt(),
                at(),
                st(),
                ur.i.saveCampaignDraft(na(na({}, f), {}, {
                    maxStep: 6
                })).catch((function(e) {
                    return console.log(e)
                }
                )),
                function() {}
            }
            ), []),
            (0,
            c.useEffect)((function() {
                var e = function() {
                    document.hidden || nt()
                };
                return document.addEventListener("visibilitychange", e),
                function() {
                    document.removeEventListener("visibilitychange", e)
                }
            }
            ), []);
            var nt = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                L.FT.getUserCompanyData();
                            case 2:
                                t = e.sent,
                                qe(t);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , st = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                L.FT.getUserCredit();
                            case 3:
                                t = e.sent,
                                ve(t.creditValue),
                                we(t.credit),
                                t.credit < f.usedCredits && bt(0),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                console.log(e.t0);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , it = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var r, a, n, s, i, l, c, d, u, m, h, p, x, v;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                L.FT.getUserCompanyData();
                            case 2:
                                if (s = e.sent,
                                i = new FormData,
                                [],
                                [],
                                l = [],
                                f.schedule && f.schedule.forEach((function(e) {
                                    l = [].concat((0,
                                    lt.Z)(l), (0,
                                    lt.Z)(e.slots))
                                }
                                )),
                                c = 0,
                                f.locations) {
                                    d = sa(f.locations);
                                    try {
                                        for (d.s(); !(u = d.n()).done; )
                                            m = u.value,
                                            c += m.reach
                                    } catch (o) {
                                        d.e(o)
                                    } finally {
                                        d.f()
                                    }
                                }
                                return h = {
                                    networks: [],
                                    tlp: null === me || void 0 === me ? void 0 : me.tlp,
                                    screens: [],
                                    total: null === me || void 0 === me ? void 0 : me.total,
                                    totalWithCredit: null === me || void 0 === me ? void 0 : me.total,
                                    totalWithCreditAndTax: null === me || void 0 === me ? void 0 : me.total,
                                    tax: null === me || void 0 === me ? void 0 : me.vat,
                                    subTotal: null === me || void 0 === me ? void 0 : me.subTotal,
                                    percentDiscount: Oe || 0,
                                    reusableFixedDiscount: Pe || 0,
                                    credits: je,
                                    totalWithTax: null === me || void 0 === me ? void 0 : me.total,
                                    handleFeeVal: null === me || void 0 === me ? void 0 : me.handleFeeVal,
                                    handleFee: null === me || void 0 === me ? void 0 : me.handleFee,
                                    tlpValue: null === me || void 0 === me ? void 0 : me.tlpValue,
                                    usedCredits: t.tpsRegion && (0,
                                    mr.Z)({
                                        amount: f.credit,
                                        precision: 4,
                                        currency: t.tpsRegion.currency
                                    }).toFormat(),
                                    subtotalWithUsedCredit: t.tpsRegion && me && (0,
                                    mr.Z)({
                                        amount: (null === me || void 0 === me ? void 0 : me.totalValue) - f.usedCredits,
                                        precision: 4,
                                        currency: t.tpsRegion.currency
                                    }).toFormat(),
                                    valuePercentDiscount: t.tpsRegion && me && (0,
                                    mr.Z)({
                                        amount: Math.ceil(Oe / 100 * (me.totalValue - f.usedCredits)),
                                        precision: 4,
                                        currency: t.tpsRegion.currency
                                    }).toFormat(),
                                    valueReusableFixedDiscount: t.tpsRegion && me && (0,
                                    mr.Z)({
                                        amount: Math.ceil(Pe),
                                        precision: 4,
                                        currency: t.tpsRegion.currency
                                    }).toFormat(),
                                    totalWithCalcApplied: me && (0,
                                    mr.Z)({
                                        amount: Math.ceil(me.totalValue - f.usedCredits) < 0 ? 0 : Math.ceil(me.totalValue - f.usedCredits - Oe / 100 * (me.totalValue - f.usedCredits) - Pe),
                                        precision: 4,
                                        currency: t.tpsRegion.currency
                                    }).toFormat()
                                },
                                l = (0,
                                lt.Z)(new Set(l)).filter((function(e) {
                                    return e
                                }
                                )).sort((function(e, t) {
                                    return e - t
                                }
                                )),
                                p = 0,
                                x = function(e) {
                                    if (e) {
                                        var t, r = sa(e);
                                        try {
                                            for (r.s(); !(t = r.n()).done; ) {
                                                var a = t.value;
                                                for (var n in a.locations[0])
                                                    if ("hiddenRestriction" === n)
                                                        return !0
                                            }
                                        } catch (o) {
                                            r.e(o)
                                        } finally {
                                            r.f()
                                        }
                                    }
                                    return !1
                                }
                                ,
                                v = {
                                    campaignId: f.uuid,
                                    name: f.name,
                                    parentId: f.parentId,
                                    adomain: f.adomain,
                                    totalScreens: null === (r = f.locations) || void 0 === r ? void 0 : r.length,
                                    approval: "regular",
                                    type: "screen",
                                    createdOn: (0,
                                    Qr.Z)(new Date, "yyyy-MM-dd HH:mm"),
                                    startDate: 1e3 * l[0],
                                    endDate: 1e3 * l[l.length - 1],
                                    budget: h,
                                    hasHiddenRestrictions: x(f.schedule),
                                    reviewPricing: me,
                                    totalWithCalcApplied: me && (0,
                                    mr.Z)({
                                        amount: Math.ceil(me.totalValue - f.usedCredits) < 0 ? 0 : Math.ceil(me.totalValue - f.usedCredits - Oe / 100 * (me.totalValue - f.usedCredits) - Pe),
                                        precision: 4,
                                        currency: t.tpsRegion.currency
                                    }).toFormat(),
                                    reach: c,
                                    industryName: f.industry,
                                    industry: f.industry,
                                    targetReach: wt()(c).format("0,0"),
                                    currency: s ? s.tpsRegion.currency : "USD",
                                    credits: f.credit / 100,
                                    coupon: f.coupon,
                                    formats: null === (a = f.formats) || void 0 === a ? void 0 : a.map((function(e) {
                                        return {
                                            duration: e.selectedDuration,
                                            ratio: e.ratio,
                                            contentType: e.contentType,
                                            resolution: "".concat(e.resolution[0], "x").concat(e.resolution[1]),
                                            uid: e.uuid,
                                            locations: e.locations,
                                            media: e.media.map((function(t) {
                                                return na(na({
                                                    contentType: e.contentType,
                                                    duration: e.selectedDuration
                                                }, t), {}, {
                                                    rules: t.rules.map((function(e) {
                                                        return na(na({}, e), {}, {
                                                            categoryCode: e.type
                                                        })
                                                    }
                                                    ))
                                                })
                                            }
                                            )),
                                            outputs: []
                                        }
                                    }
                                    )),
                                    schedules: null === (n = f.schedule) || void 0 === n ? void 0 : n.filter((function(e) {
                                        return "global" !== e.uuid && e.locations.length > 0
                                    }
                                    )).map((function(e) {
                                        return {
                                            uid: e.uuid,
                                            isActive: !0,
                                            isGlobal: e.isGlobal,
                                            locations: e.locations.map((function(e) {
                                                if (f.locations) {
                                                    var t, r = g, a = null === (t = f.locations) || void 0 === t ? void 0 : t.filter((function(t) {
                                                        return t.location.uuid === e.uuid
                                                    }
                                                    )), n = (0,
                                                    b.Z)(a, 1)[0], s = null === r || void 0 === r ? void 0 : r.filter((function(t) {
                                                        return t.uuid === e.uuid
                                                    }
                                                    )), i = (0,
                                                    b.Z)(s, 1)[0];
                                                    if (n)
                                                        return p += ot(n) * (3600 / e.pph) * e.circuit,
                                                        {
                                                            circuit: e.circuit,
                                                            name: e.name,
                                                            uuid: e.uuid,
                                                            acceptedDurations: e.acceptedDurations,
                                                            campaignFrequency: n.pph,
                                                            tz: n.location.tz || "Europe/London",
                                                            pph: n.pph,
                                                            pC: n.location.pC,
                                                            rt: n.location.rt,
                                                            frequency: 3600 / n.pph,
                                                            nUid: n.location.networkUuid || n.location.network.uuid,
                                                            totalSlots: ot(n),
                                                            plays: ot(n) * (3600 / e.pph) * e.circuit,
                                                            reach: n.reach,
                                                            pricing: i ? i.price : "0"
                                                        }
                                                }
                                            }
                                            )),
                                            restrictions: [],
                                            partialRestrictions: [],
                                            acceptedDurations: e.locations[0].acceptedDurations,
                                            scheduleLocations: e.locations.length,
                                            slots: e.slots.map((function(t) {
                                                var r, a = be.ou.fromMillis(1e3 * t, {
                                                    zone: "utc",
                                                    locale: "utc"
                                                }).toFormat("EEEE").toUpperCase(), n = be.ou.fromMillis(1e3 * t, {
                                                    zone: "utc",
                                                    locale: "utc"
                                                }).toFormat("EEEE_H").toUpperCase(), s = !1;
                                                return null === (r = e.locations[0].restriction) || void 0 === r || r.forEach((function(e) {
                                                    a.indexOf(e.day) > -1 && e.generatedPrice.forEach((function(t, r) {
                                                        n === "".concat(e.day + "_" + r) && "0" === t && (s = !0)
                                                    }
                                                    ))
                                                }
                                                )),
                                                s ? -1 : 1e3 * t
                                            }
                                            )).filter((function(e) {
                                                return -1 !== e
                                            }
                                            )),
                                            type: e.type
                                        }
                                    }
                                    )),
                                    targetPlays: p
                                },
                                i.set("campaignData", JSON.stringify(v)),
                                e.abrupt("return", i);
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , ot = function(e) {
                if (f.schedule) {
                    var t, r = sa(f.schedule);
                    try {
                        for (r.s(); !(t = r.n()).done; ) {
                            var a, n = t.value, s = sa(n.locations);
                            try {
                                for (s.s(); !(a = s.n()).done; ) {
                                    if (a.value.uuid === e.location.uuid) {
                                        var i = function() {
                                            var e, t = n.slots.map((function(e) {
                                                return be.ou.fromMillis(1e3 * e, {
                                                    zone: "utc",
                                                    locale: "utc"
                                                }).toFormat("EEEE").toUpperCase()
                                            }
                                            )), r = n.slots.map((function(e) {
                                                return be.ou.fromMillis(1e3 * e, {
                                                    zone: "utc",
                                                    locale: "utc"
                                                }).toFormat("EEEE_H").toUpperCase()
                                            }
                                            )), a = 0;
                                            return null === (e = n.locations[0].restriction) || void 0 === e || e.forEach((function(e) {
                                                t.indexOf(e.day) > -1 && e.generatedPrice.forEach((function(t, n) {
                                                    var s = r.indexOf(e.day + "_" + n);
                                                    null !== s && s > -1 && "0" === t && (a += 1)
                                                }
                                                ))
                                            }
                                            )),
                                            {
                                                v: n.slots.length - a
                                            }
                                        }();
                                        if ("object" === typeof i)
                                            return i.v
                                    }
                                }
                            } catch (l) {
                                s.e(l)
                            } finally {
                                s.f()
                            }
                        }
                    } catch (l) {
                        r.e(l)
                    } finally {
                        r.f()
                    }
                }
                return 0
            }
              , ct = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t, r, a, n;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (V(!0),
                                !0 !== W) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 3:
                                return e.next = 5,
                                it();
                            case 5:
                                return t = e.sent,
                                e.next = 8,
                                ur.i.getCsv(t);
                            case 8:
                                r = e.sent,
                                a = window.URL.createObjectURL(new Blob([r])),
                                (n = document.createElement("a")).href = a,
                                n.setAttribute("download", "".concat(f.name, " Campaign Media Plan by Blindspot.csv")),
                                document.body.appendChild(n),
                                n.click(),
                                V(!1);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , dt = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t, r, a, n;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (P(!0),
                                !0 !== T) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 3:
                                return e.next = 5,
                                it();
                            case 5:
                                return t = e.sent,
                                r = JSON.parse(String(t.get("campaignData"))).campaignId,
                                e.next = 9,
                                ur.i.saveMediaPlan(t);
                            case 9:
                                a = e.sent,
                                P(!1),
                                a && ((n = document.createElement("a")).href = "/media-plan/" + r,
                                n.target = "_blank",
                                document.body.appendChild(n),
                                n.click());
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , ut = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t, r, a, n;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (S(!0),
                                !0 !== N) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 3:
                                return e.next = 5,
                                it();
                            case 5:
                                return t = e.sent,
                                e.next = 8,
                                ur.i.getPdf(t);
                            case 8:
                                r = e.sent,
                                S(!1),
                                a = window.URL.createObjectURL(new Blob([r])),
                                (n = document.createElement("a")).href = a,
                                n.setAttribute("download", "".concat(f.name, " Campaign Media Plan by Blindspot.pdf")),
                                document.body.appendChild(n),
                                n.click();
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , mt = {
                buttonText: "Publish Campaign",
                action: function() {
                    var e = (0,
                    i.Z)(o().mark((function e() {
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    ht(!0);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }
              , ht = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r, n, s;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!F) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 2:
                                return R(!0),
                                e.next = 5,
                                it();
                            case 5:
                                return r = e.sent,
                                e.prev = 6,
                                e.next = 9,
                                ur.i.saveCampaign(r);
                            case 9:
                                (n = e.sent).errorMessage ? "your campaign is beeing published." === n.errorMessage.message ? Je(n.errorMessage.message.charAt(0).toUpperCase() + n.errorMessage.message.slice(1), "warning") : Je(n.errorMessage.message, "error") : (me && (s = Oe / 100 * (me.totalValue - f.usedCredits),
                                t && (0,
                                Y.vy)(f, g, Ge ? Ge.tpsRegion.currency : "USD", me.totalValue, JSON.parse(String(r.get("campaignData"))).budget.tax, Oe, s)),
                                Je("Campaign submitted successfuly", "success"),
                                localStorage.removeItem("searchMaxPrice"),
                                localStorage.removeItem("searchMinPrice"),
                                localStorage.removeItem("searchText"),
                                localStorage.removeItem("searchCheckbox"),
                                localStorage.removeItem("searchTags"),
                                localStorage.removeItem("coming_soon"),
                                localStorage.removeItem("has_image"),
                                a.push("/mycampaigns")),
                                e.next = 18;
                                break;
                            case 13:
                                e.prev = 13,
                                e.t0 = e.catch(6),
                                Je(e.t0.message, "info"),
                                R(!1),
                                _(!1);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[6, 13]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , pt = {
                buttonText: "Cancel",
                action: function() {
                    _(!1)
                }
            }
              , xt = {
                buttonText: "Publish WITHOUT Analytics",
                action: function() {
                    ht(!1)
                }
            }
              , vt = {
                buttonText: "Provide details",
                action: function() {
                    window.open("/profile/organization", "_blank"),
                    K(!1)
                }
            }
              , gt = {
                buttonText: "Cancel",
                action: function() {
                    K(!1)
                }
            }
              , bt = function(e) {
                var r = me ? me.subTotalValue - Pe : 0
                  , a = je < r ? je : r
                  , s = n.current;
                s && (s.style.background = "linear-gradient(90deg, #f53d3f 0%, #f53d3f ".concat(e / a * 1e4 * 100, "%,\n      #dedede ").concat(e / a * 1e4 * 100, "% ,#dedede 100%)")),
                Se(e);
                try {
                    var i = e
                      , l = 0;
                    i = Math.ceil(1e4 * Number(i));
                    var o = 0;
                    if ((l = i) >= je) {
                        if (l > je)
                            throw s && (s.style.background = "linear-gradient(90deg, #f53d3f 0%, #f53d3f ".concat(Math.round(i / 100) / 100 / a * 1e4 * 100, "%, #dedede ").concat(Math.round(i / 100) / 100 / a * 1e4 * 100, "% ,#dedede 100%)")),
                            Se(Math.round(je / 100) / 100),
                            o = 0,
                            new Error("The credits value must be less than or equal to ".concat((0,
                            mr.Z)({
                                amount: je,
                                precision: 4,
                                currency: t.tpsRegion.currency
                            }).toFormat()));
                        if (l < 0)
                            throw new Error("The value must be greater then zero");
                        me && me.subTotalValue - i - Pe < 0 && (i = me.subTotalValue,
                        l = 0,
                        l = i + (o = 0),
                        Je("You can only use ".concat((0,
                        mr.Z)({
                            amount: me.subTotalValue,
                            precision: 4,
                            currency: t.tpsRegion.currency
                        }).toFormat(), " of credits for this campaign"), "info")),
                        s && (s.style.background = "linear-gradient(90deg, #f53d3f 0%, #f53d3f ".concat(Math.round(i / 100) / 100 / a * 1e4 * 100, "%, #dedede ").concat(Math.round(i / 100) / 100 / a * 1e4 * 100, "% ,#dedede 100%)")),
                        Se(Math.round(i / 100) / 100),
                        h({
                            type: Wt.df.setCredit,
                            payload: {
                                usedCredits: l,
                                vatCredits: o,
                                credit: i
                            }
                        })
                    } else
                        s && (s.style.background = "linear-gradient(90deg, #f53d3f 0%, #f53d3f ".concat(Math.round(i / 100) / 100 / a * 1e4 * 100, "%, #dedede ").concat(Math.round(i / 100) / 100 / a * 1e4 * 100, "% ,#dedede 100%)")),
                        Se(Math.round(i / 100) / 100),
                        h({
                            type: Wt.df.setCredit,
                            payload: {
                                usedCredits: l,
                                vatCredits: o,
                                credit: i
                            }
                        })
                } catch (c) {
                    Je(c.message, "info")
                }
            }
              , yt = ((null === me || void 0 === me ? void 0 : me.totalValue) || 0) - f.usedCredits - Oe / 100 * (((null === me || void 0 === me ? void 0 : me.totalValue) || 0) - f.usedCredits) - Pe;
            return (0,
            p.jsxs)("div", {
                className: "z-10 page-section pb-14",
                children: [U && (0,
                p.jsx)(u.Vq, {
                    title: "Final Check",
                    loading: F,
                    primaryButton: mt,
                    secondaryButton: pt,
                    thirdButton: "admin" === Ke.role ? xt : void 0,
                    description: "You're about to create a campaign running in <strong>".concat(ee, " locations</strong>, on <strong>").concat(ne, " screens</strong>, for a total of <strong>").concat(oe, " hours</strong>.<br /><Br />\n          Your credit card will be charged <strong>").concat((0,
                    mr.Z)({
                        amount: me ? Math.ceil(me.totalValue - f.usedCredits - Oe / 100 * (me.totalValue - f.usedCredits) - Pe) < 0 ? 0 : Math.ceil(me.totalValue - f.usedCredits - Oe / 100 * (me.totalValue - f.usedCredits) - Pe) : 0,
                        precision: 4,
                        currency: t.tpsRegion.currency
                    }).toFormat(), "</strong> when the campaign is approved.")
                }, "1"), J && (0,
                p.jsx)(u.Vq, {
                    title: "Just one more step...",
                    primaryButton: vt,
                    secondaryButton: gt,
                    description: "<strong>Hei! It seems like  we're missing some billing details required to publish your campaign. <br><br> Simply provide the necessary information, and you'll be all set to launch your campaign.</strong>"
                }, "2"), (0,
                p.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 flex items-center pl-4 pr-24 bg-white dark:bg-dark-200 dark:text-dark-400 md:hidden h-21 z-101 shadow-mob",
                    children: "Review your campaign"
                }), (0,
                p.jsxs)("div", {
                    className: "mt-20 md:mt-0",
                    children: [(0,
                    p.jsx)(u.bu, {}), (0,
                    p.jsx)("div", {
                        className: "flex flex-col-reverse flex-wrap justify-between px-4 py-4 md:py-6 md:space-x-7 md:flex-row md:px-7 ",
                        children: (0,
                        p.jsx)("div", {
                            className: "flex justify-between w-full md:space-x-7",
                            children: (0,
                            p.jsx)(ft.Z, {
                                otherClasses: "hidden md:flex-1 md:flex items-center justify-between h-21 md:h-16 rounded-20 mt-6 md:mt-0",
                                children: (0,
                                p.jsxs)("div", {
                                    className: "text-sm font-semibold tracking-tighter text-dark-default dark:text-white px-7",
                                    children: ["Review your campaign PO #: TPS- ", f.uuid.slice(0, 8).toUpperCase()]
                                })
                            })
                        })
                    })]
                }), (0,
                p.jsx)("div", {
                    className: "px-4 md:px-7",
                    children: (0,
                    p.jsxs)("div", {
                        className: "w-full",
                        children: [(0,
                        p.jsx)("div", {
                            className: (0,
                            m.f9)(Xr || (Xr = (0,
                            s.Z)([""]))),
                            children: g.length > 0 ? (0,
                            p.jsxs)("div", {
                                id: "review-table",
                                className: "pb-4 md:pb-7",
                                children: [(0,
                                p.jsx)("div", {
                                    className: "hidden overflow-hidden md:block rounded-t-3xl",
                                    children: (0,
                                    p.jsx)(pr.ZP, {
                                        noHeader: !0,
                                        pagination: !0,
                                        paginationPerPage: 15,
                                        columns: rt,
                                        data: g,
                                        className: "table-review"
                                    })
                                }), (0,
                                p.jsx)(ra.c, {
                                    header: rt,
                                    tableData: g
                                })]
                            }) : (0,
                            p.jsx)("div", {
                                className: "flex items-center w-full mx-auto",
                                children: (0,
                                p.jsx)("img", {
                                    src: "/images/loading.svg",
                                    className: " pointer-events-none w-40 block mx-auto "
                                })
                            })
                        }), (0,
                        p.jsxs)("div", {
                            className: "flex flex-col items-stretch justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-7",
                            children: [(0,
                            p.jsx)(ft.Z, {
                                divId: "review-download",
                                otherClasses: "flex-1 p-6 shadow-publishCard",
                                children: (0,
                                p.jsxs)("div", {
                                    className: "flex flex-col items-center justify-center space-y-5",
                                    children: [(0,
                                    p.jsx)("img", {
                                        src: "/images/review.svg",
                                        className: "block dark:hidden"
                                    }), (0,
                                    p.jsx)("img", {
                                        src: "/images/review-dark.svg",
                                        className: "hidden dark:block"
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "font-medium text-center text-lightGrey dark:text-dark-300",
                                        children: "Before publishing your campaign, don\u2019t forget to download your media plan as an overview of the campaign"
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0,
                                        p.jsx)(w.zx, {
                                            fill: "outlinedark",
                                            loading: W,
                                            onClick: ct,
                                            type: "submit",
                                            color: "primary",
                                            fullWidth: !0,
                                            children: r.formatMessage({
                                                defaultMessage: "Download media plan as csv",
                                                id: "Button.DownloadMediaPlanAsCsv"
                                            })
                                        }), (0,
                                        p.jsx)(w.zx, {
                                            fill: "outlinedark",
                                            loading: N,
                                            onClick: ut,
                                            type: "submit",
                                            color: "primary",
                                            fullWidth: !0,
                                            children: r.formatMessage({
                                                defaultMessage: "Download media plan as pdf",
                                                id: "Button.DownloadMediaPlanAsPdf"
                                            })
                                        }), (0,
                                        p.jsx)(w.zx, {
                                            fill: "outlinedark",
                                            loading: T,
                                            onClick: dt,
                                            type: "submit",
                                            color: "primary",
                                            fullWidth: !0,
                                            children: "Share Campaign Details"
                                        })]
                                    })]
                                })
                            }), (0,
                            p.jsx)(ft.Z, {
                                divId: "review-summary",
                                otherClasses: "flex-1 p-6 shadow-publishCard",
                                children: (0,
                                p.jsx)("div", {
                                    className: "w-full",
                                    children: (0,
                                    p.jsxs)("div", {
                                        className: "w-full space-y-6 totals",
                                        children: [me && (0,
                                        p.jsxs)(p.Fragment, {
                                            children: [(0,
                                            p.jsx)("div", {
                                                className: "text-lg font-bold dark:text-white",
                                                children: "Your bill summary"
                                            }), (0,
                                            p.jsxs)("ul", {
                                                className: "pb-2 border-b review-steps border-bordercolor",
                                                children: [(0,
                                                p.jsxs)("li", {
                                                    className: "flex items-center justify-between",
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "text-sm font-bold text-dark-default dark:text-dark-400",
                                                        children: "Subtotal"
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "text-sm font-semibold dark:text-dark-400",
                                                        children: [" ", me.subTotal]
                                                    })]
                                                }), (0,
                                                p.jsxs)("li", {
                                                    className: "flex items-center justify-between",
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "text-sm font-bold text-dark-default dark:text-dark-400",
                                                        children: "Tax"
                                                    }), (0,
                                                    p.jsx)("div", {
                                                        className: "text-sm font-semibold dark:text-dark-400",
                                                        children: (0,
                                                        mr.Z)({
                                                            amount: Math.ceil(me.vatValue) >= 0 ? Math.ceil(me.vatValue) : 0,
                                                            precision: 4,
                                                            currency: t.tpsRegion.currency
                                                        }).toFormat()
                                                    })]
                                                }), 0 !== me.tlpValue && (0,
                                                p.jsxs)("li", {
                                                    className: "flex items-center justify-between",
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "text-sm font-bold text-dark-default dark:text-dark-400",
                                                        children: "Local Advertisement TAX"
                                                    }), (0,
                                                    p.jsx)("div", {
                                                        className: "text-sm font-semibold dark:text-dark-400",
                                                        children: me.tlp
                                                    })]
                                                }), me && 0 !== me.handleFee && (0,
                                                p.jsxs)("li", {
                                                    className: "flex items-center justify-between",
                                                    children: [(0,
                                                    p.jsx)("div", {
                                                        className: "text-sm font-bold text-dark-default dark:text-dark-400",
                                                        children: "Handling fee"
                                                    }), (0,
                                                    p.jsx)("div", {
                                                        className: "text-sm font-semibold dark:text-dark-400",
                                                        children: me.handleFeeVal
                                                    })]
                                                })]
                                            }), "\u20ac0.00" !== xe && "$0.00" !== xe && (0,
                                            p.jsxs)(p.Fragment, {
                                                children: [(0,
                                                p.jsx)("div", {
                                                    className: "flex items-center justify-center",
                                                    children: (0,
                                                    p.jsxs)("div", {
                                                        className: "text-sm font-medium text-dark-default dark:text-dark-300",
                                                        children: ["You have ", (0,
                                                        p.jsxs)("span", {
                                                            className: "text-sm font-bold",
                                                            children: [" ", xe]
                                                        }), " worth in credits, use them right here"]
                                                    })
                                                }), (0,
                                                p.jsxs)("div", {
                                                    className: "pb-8 mt-4 border-b border-bordercolor range",
                                                    children: [(0,
                                                    p.jsx)(ta(), {
                                                        ref: n,
                                                        value: Ce,
                                                        max: je < me.subTotalValue - Pe ? je / 1e4 : (me.subTotalValue - Pe) / 1e4,
                                                        onChange: function(e) {
                                                            return bt(parseInt(e.target.value))
                                                        },
                                                        tooltip: "auto",
                                                        tooltipPlacement: "bottom",
                                                        variant: "danger",
                                                        tooltipLabel: function(e) {
                                                            return "".concat("EUR" === t.tpsRegion.currency ? "\u20ac " : "$ ", " ").concat(e)
                                                        }
                                                    }), (0,
                                                    p.jsxs)("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [(0,
                                                        p.jsx)("div", {
                                                            className: "text-sm text-lightGrey dark:text-dark-400",
                                                            children: "\u20ac0"
                                                        }), (0,
                                                        p.jsx)("div", {
                                                            className: "text-sm text-lightGrey dark:text-dark-400",
                                                            children: je < me.subTotalValue - Pe ? xe : me.total
                                                        })]
                                                    })]
                                                })]
                                            }) || "", 0 !== f.credit && (0,
                                            p.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0,
                                                p.jsx)("div", {
                                                    className: "text-sm font-bold text-dark-default dark:text-dark-400",
                                                    children: "Used Credit"
                                                }), (0,
                                                p.jsx)("div", {
                                                    className: "text-sm font-semibold dark:text-dark-400",
                                                    children: t.tpsRegion && (0,
                                                    mr.Z)({
                                                        amount: f.credit,
                                                        precision: 4,
                                                        currency: t.tpsRegion.currency
                                                    }).toFormat()
                                                })]
                                            }), (0 !== Oe || 0 !== Pe) && (0,
                                            p.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0,
                                                p.jsx)("div", {
                                                    className: "text-sm font-bold text-dark-default dark:text-dark-400",
                                                    children: "Subtotal with used credit"
                                                }), (0,
                                                p.jsx)("div", {
                                                    className: "text-sm font-semibold dark:text-dark-400",
                                                    children: t.tpsRegion && (0,
                                                    mr.Z)({
                                                        amount: me.totalValue - f.usedCredits,
                                                        precision: 4,
                                                        currency: t.tpsRegion.currency
                                                    }).toFormat()
                                                })]
                                            }), (0 !== Oe || 0 !== Pe) && (0,
                                            p.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0,
                                                p.jsxs)("div", {
                                                    className: "text-sm font-bold text-dark-default dark:text-dark-400",
                                                    children: ['Discount voucher "', Re, '" (', " ", 0 !== Oe ? Oe : (0,
                                                    mr.Z)({
                                                        amount: Math.ceil(Pe),
                                                        precision: 4,
                                                        currency: t.tpsRegion.currency
                                                    }).toFormat(), " ", 0 !== Oe ? "%" : "", ")", " "]
                                                }), (0,
                                                p.jsxs)("div", {
                                                    className: "text-sm font-semibold dark:text-dark-400",
                                                    children: ["-", t.tpsRegion && 0 !== Oe ? (0,
                                                    mr.Z)({
                                                        amount: Math.ceil(Oe / 100 * (me.totalValue - f.usedCredits)),
                                                        precision: 4,
                                                        currency: t.tpsRegion.currency
                                                    }).toFormat() : (0,
                                                    mr.Z)({
                                                        amount: Math.ceil(Pe),
                                                        precision: 4,
                                                        currency: t.tpsRegion.currency
                                                    }).toFormat()]
                                                })]
                                            }), (0,
                                            p.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0,
                                                p.jsx)("div", {
                                                    className: "text-md font-bold text-dark-default dark:text-dark-400",
                                                    children: "Total"
                                                }), (0,
                                                p.jsx)("div", {
                                                    className: "text-md font-semibold dark:text-dark-400",
                                                    children: (0,
                                                    mr.Z)({
                                                        amount: Math.ceil(me.totalValue - f.usedCredits) < 0 ? 0 : Math.ceil(yt),
                                                        precision: 4,
                                                        currency: t.tpsRegion.currency
                                                    }).toFormat()
                                                })]
                                            })]
                                        }), (0,
                                        p.jsxs)("div", {
                                            className: "flex flex-col items-center justify-center",
                                            children: [(0,
                                            p.jsx)("div", {
                                                className: "px-4 pb-2 pt-8 mb-8 border border-dashed border-lightGrey dark:border-bordercolordark rounded-xl w-full",
                                                children: (0,
                                                p.jsx)(u.Pm, {
                                                    labelName: "Discount code",
                                                    isPercentage: !0,
                                                    clearErrorsTrigger: Ve,
                                                    campaignValue: null === me || void 0 === me ? void 0 : me.totalValue,
                                                    onComplete: function(e, t, r) {
                                                        !function(e, t, r) {
                                                            h(0 !== e ? {
                                                                type: Wt.df.setPercentageVoucher,
                                                                payload: {
                                                                    coupon: t
                                                                }
                                                            } : {
                                                                type: Wt.df.removePercentageVoucher
                                                            }),
                                                            Be(t),
                                                            "percentage" === r ? (Le(e),
                                                            Ie(0)) : (Ie(e),
                                                            Le(0))
                                                        }(e, t, r)
                                                    }
                                                })
                                            }), (0,
                                            p.jsxs)("div", {
                                                className: "relative",
                                                id: "review-publish",
                                                children: [(0,
                                                p.jsx)(w.zx, {
                                                    onClick: function() {
                                                        "1b5a9446-1e0e-498c-8bed-ee7e31e55b17" !== f.uuid && (ze(Math.random()),
                                                        null !== Ge && void 0 !== Ge && Ge.isNew ? K(!0) : _(!0))
                                                    },
                                                    type: "submit",
                                                    color: "primary",
                                                    fullWidth: !1,
                                                    loading: F,
                                                    children: r.formatMessage({
                                                        defaultMessage: "Publish your campaign",
                                                        id: "Button.Publish"
                                                    })
                                                }), (null === Ge || void 0 === Ge ? void 0 : Ge.isNew) && (0,
                                                p.jsxs)("div", {
                                                    className: "flex justify-center",
                                                    children: [(0,
                                                    p.jsx)($.Z, {
                                                        id: "profile-alert",
                                                        place: "left",
                                                        className: "custom-tooltip",
                                                        children: (0,
                                                        p.jsxs)("div", {
                                                            className: "flex flex-col items-center justify-center preview-media-tooltip",
                                                            children: [(0,
                                                            p.jsx)("div", {
                                                                className: "mb-1",
                                                                children: "Your account is not completed yet."
                                                            }), (0,
                                                            p.jsx)("div", {
                                                                children: "You will not be able to publish a campaign until you complete your billing details."
                                                            })]
                                                        })
                                                    }), (0,
                                                    p.jsx)("div", {
                                                        "data-tip": !0,
                                                        "data-for": "profile-alert",
                                                        className: "absolute cursor-pointer -top-2 -right-2 excl-mark-footer pulse-disclaimer",
                                                        children: "?"
                                                    })]
                                                })]
                                            })]
                                        }), (0,
                                        p.jsx)("p", {
                                            className: "text-xs text-center text-lightGrey dark:text-dark-300",
                                            children: "*Final number of ad plays and budget may vary slightly due to each location\u2019s audience data."
                                        })]
                                    })
                                })
                            })]
                        })]
                    })
                }), (0,
                p.jsx)(u._l, {
                    backFn: function() {
                        a.push("/publish/media?campaignId=".concat(f.uuid))
                    },
                    nextFn: function() {},
                    mainPage: "Dashboard",
                    links: [f.name],
                    back: "1",
                    next: "",
                    hasNext: !1
                })]
            })
        }, ua = r(33729), ma = r.n(ua), fa = r(73732), ha = at()((function() {
            return r.e(7672).then(r.bind(r, 27672))
        }
        ), {
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [27672]
                }
            }
        }), pa = function(e) {
            var t = e.chartTitle
              , r = e.screen
              , a = e.uuid
              , n = e.tz
              , s = e.filterType
              , l = e.type
              , d = c.useState([])
              , u = (0,
            b.Z)(d, 2)
              , m = u[0]
              , f = u[1]
              , h = c.useState(0)
              , x = (0,
            b.Z)(h, 2)
              , v = x[0]
              , g = x[1];
            (0,
            c.useEffect)((function() {
                return y(),
                function() {}
            }
            ), [s, r]);
            var y = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t, i;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!a) {
                                    e.next = 13;
                                    break
                                }
                                if (f([]),
                                !l || "group" !== l) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 5,
                                L.hJ.getPerformanceGroupReach(a, n, s, r);
                            case 5:
                                e.t0 = e.sent,
                                e.next = 11;
                                break;
                            case 8:
                                return e.next = 10,
                                L.hJ.getPerformanceReach(a, n, s, r);
                            case 10:
                                e.t0 = e.sent;
                            case 11:
                                (t = e.t0).performance && (i = t.performance.reduce((function(e, t) {
                                    return e + t.reach
                                }
                                ), 0),
                                g(i),
                                f(t.performance));
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            p.jsxs)("div", {
                className: "w-full p-6 space-y-5 rounded-2xl bg-chartBgGrey dark:bg-dark-200 dark:border-2 dark:border-bordercolordark dark:border-opacity-40 rounded-2xl p-6",
                children: [(0,
                p.jsxs)("div", {
                    className: "flex flex-col ".concat(v ? "" : "chart-no-data"),
                    children: [(0,
                    p.jsx)("h3", {
                        className: "text-base dark:text-dark-400 font-semibold tracking-tighter  md:text-sm text-chartTitleGrey",
                        children: t
                    }), (0,
                    p.jsx)("div", {
                        className: "pt-2 text-lg dark:text-white font-bold text-dark-default md:text-2xl",
                        children: wt()(v).format("0,0")
                    })]
                }), v > 0 ? (0,
                p.jsx)("div", {
                    className: "",
                    children: m && m.length > 0 ? (0,
                    p.jsx)(ha, {
                        chartData: m,
                        isHourlyDisplay: "hour" === s
                    }) : (0,
                    p.jsx)("div", {})
                }) : (0,
                p.jsxs)("div", {
                    className: "flex flex-col justify-center items-center",
                    children: [(0,
                    p.jsx)("img", {
                        src: "/images/audience.png",
                        className: "max-w-sm",
                        loading: "lazy"
                    }), (0,
                    p.jsx)("h3", {
                        className: "py-5 text-chartTitleGrey dark:text-white text-sm font-semibold",
                        children: "This location does not provide impression data."
                    })]
                })]
            })
        }, xa = r(96696);
        function va(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, a)
            }
            return r
        }
        function ga(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? va(Object(r), !0).forEach((function(t) {
                    (0,
                    g.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : va(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function ba(e, t) {
            var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return ya(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return ya(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    r && (e = r);
                    var a = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, i = !0, l = !1;
            return {
                s: function() {
                    r = r.call(e)
                },
                n: function() {
                    var e = r.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    s = e
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (l)
                            throw s
                    }
                }
            }
        }
        function ya(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, a = new Array(t); r < t; r++)
                a[r] = e[r];
            return a
        }
        var ja = at()((function() {
            return Promise.all([r.e(2344), r.e(8422)]).then(r.bind(r, 8422))
        }
        ), {
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [8422]
                }
            }
        })
          , wa = [{
            name: "Slots",
            value: "slots"
        }, {
            name: "Est. Plays",
            value: "plays"
        }, {
            name: "Est. Impressions",
            value: "reach"
        }, {
            name: "Cost",
            value: "cost"
        }]
          , ka = [{
            name: "Thumbnails",
            value: "no"
        }, {
            name: "Name",
            value: "name"
        }, {
            name: "Network",
            value: "network"
        }, {
            name: "Type",
            value: "type"
        }, {
            name: "Venue Type",
            value: "venue"
        }, {
            name: "Plays per hour",
            value: "plays/hour"
        }, {
            name: "Resolution",
            value: "resolution"
        }, {
            name: "Screens",
            value: "screens"
        }, {
            name: "Country, City",
            value: "country/city"
        }]
          , Na = function(e) {
            var t = e.filters
              , r = e.setFilters
              , a = e.shareableInfo;
            return (0,
            p.jsx)("ul", {
                className: "flex flex-col gap-2",
                children: (a ? [].concat(ka, wa) : [].concat(ka)).map((function(e, a) {
                    return (0,
                    p.jsx)("li", {
                        children: (0,
                        p.jsx)(w.XZ, {
                            name: "primary",
                            defaultChecked: (n = e.value,
                            t.indexOf(n) > -1),
                            onChange: function(a) {
                                var n = (0,
                                lt.Z)(t);
                                if (a.target.checked)
                                    n.push(e.value);
                                else {
                                    var s = n.indexOf(e.value);
                                    s > -1 && n.splice(s, 1)
                                }
                                r(n)
                            },
                            labelColor: "dark",
                            label: e.name
                        })
                    }, a);
                    var n
                }
                ))
            })
        }
          , Ca = function(e) {
            var t, r, a, n, l, d, h, x, v, g = e.campaign, y = e.campaignBudget, j = e.shareableInfo, k = ((0,
            C.Z)(),
            c.useState("day")), N = (0,
            b.Z)(k, 2), S = N[0], M = N[1], Z = c.useState("0"), O = (0,
            b.Z)(Z, 2), T = O[0], E = O[1], I = c.useState([]), D = (0,
            b.Z)(I, 2), F = D[0], R = D[1], B = c.useState(), A = (0,
            b.Z)(B, 2), W = A[0], V = A[1], H = c.useState("0"), z = (0,
            b.Z)(H, 2), U = z[0], _ = z[1], G = c.useState("0"), q = (0,
            b.Z)(G, 2), J = q[0], K = q[1], X = c.useState("0"), Y = (0,
            b.Z)(X, 2), $ = Y[0], Q = Y[1], ee = c.useState("0"), te = (0,
            b.Z)(ee, 2), re = te[0], ae = te[1], ne = c.useState("PAUSED"), se = (0,
            b.Z)(ne, 2), ie = se[0], le = se[1], oe = c.useState(null), ce = (0,
            b.Z)(oe, 2), de = ce[0], ue = ce[1], me = c.useState("0"), fe = (0,
            b.Z)(me, 2), he = fe[0], pe = fe[1], xe = c.useState(null), ve = (0,
            b.Z)(xe, 2), ge = ve[0], ye = ve[1], je = c.useState(""), we = (0,
            b.Z)(je, 2), ke = we[0], Ne = we[1], Ce = c.useState(!1), Se = (0,
            b.Z)(Ce, 2), Me = Se[0], Ze = Se[1], Oe = c.useState(j ? ["slots", "plays", "reach", "cost", "no", "name", "network", "type", "venue", "plays/hour", "resolution", "contentType", "screens", "country/city"] : ["no", "name", "network", "type", "venue", "plays/hour", "resolution", "screens", "country/city"]), Le = (0,
            b.Z)(Oe, 2), Te = Le[0], Ee = Le[1];
            c.useEffect((function() {
                var e = g.campaignStatus ? g.campaignStatus : g.status;
                g.campaignStatus || ("running" === e && g.startDate > Date.now() && (e = "ready"),
                "running" === ie && g.startDate < Date.now() && (e = "completed"));
                var t = g.formats.reduce((function(e, t) {
                    return e + t.media.length
                }
                ), 0);
                "APPROVED_CONTENT" === e && 1 === t && (e = "ALL_APPROVED_CONTENT"),
                le(e)
            }
            ), []);
            var Pe = (0,
            m.f9)(la || (la = (0,
            s.Z)(["\n  flex md:flex-col\n  justify-between md:justify-start\n  pb-3 md:pb-0\n\n  "])))
              , Ie = (0,
            m.f9)(oa || (oa = (0,
            s.Z)(["\n  text-base md:text-xs\n  dark:text-dark-400\n  font-medium\n  tracking-tighter\n  pb-1\n  "])))
              , De = (0,
            m.f9)(ca || (ca = (0,
            s.Z)(["\n  text-lg md:text-sm\n  text-dark-default\n  dark:text-white\n  font-semibold md:font-bold\n  text-right md:text-left\n  "])));
            (0,
            c.useEffect)((function() {
                var e, t = 0, r = 0, a = 0, n = 0, s = [], i = ba(g.schedules);
                try {
                    for (i.s(); !(e = i.n()).done; ) {
                        var l = e.value;
                        if (a += l.slots.length,
                        l.screens) {
                            var o, c = ba(l.screens);
                            try {
                                for (c.s(); !(o = c.n()).done; ) {
                                    var d = o.value;
                                    s.includes(d.uid) || (s.push(d.uid),
                                    t += 1,
                                    r += d.circuit)
                                }
                            } catch (k) {
                                c.e(k)
                            } finally {
                                c.f()
                            }
                        }
                    }
                } catch (k) {
                    i.e(k)
                } finally {
                    i.f()
                }
                var u, m = ba(g.screens);
                try {
                    for (m.s(); !(u = m.n()).done; ) {
                        var f = u.value;
                        f && f.reach && (n += f.reach)
                    }
                } catch (k) {
                    m.e(k)
                } finally {
                    m.f()
                }
                E("".concat(t)),
                _("".concat(r)),
                K("".concat(a)),
                Q("".concat(n));
                var h, p = [], x = JSON.parse(JSON.stringify(g.schedules)), v = ba(x);
                try {
                    for (v.s(); !(h = v.n()).done; ) {
                        var b = h.value;
                        b.slots = b.slots.sort((function(e, t) {
                            return e - t
                        }
                        ))
                    }
                } catch (k) {
                    v.e(k)
                } finally {
                    v.f()
                }
                var y, j = ba(x = x.sort((function(e, t) {
                    return e.slots[0] - t.slots[0]
                }
                )));
                try {
                    for (j.s(); !(y = j.n()).done; ) {
                        var w = y.value;
                        w.screens && (w.locations = w.screens),
                        w.slots = (0,
                        lt.Z)(w.slots).map((function(e) {
                            be.ou.local();
                            return be.ou.fromMillis(e, {
                                zone: "utc"
                            }).valueOf() / 1e3
                        }
                        )),
                        w.readOnly = !0,
                        w.notSelectedPartial = [],
                        w.title = "daily" === w.type ? "Daily" : "Hourly",
                        w.locations = w.locations.map((function(e) {
                            return ga(ga({}, e), {}, {
                                restriction: []
                            })
                        }
                        )),
                        p.push(w)
                    }
                } catch (k) {
                    j.e(k)
                } finally {
                    j.f()
                }
                R(x),
                V(p[0]),
                Fe()
            }
            ), []);
            var Fe = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                y && (ae(y.displayPrice),
                                pe(y.costPerScreenVal));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , Re = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                L.hJ.getMediaPlan("".concat(t));
                            case 2:
                                r = e.sent,
                                ma()(r, "".concat(g.name, " Campaign Media Plan by Blindspot.pdf"), "application/pdf");
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Be = function() {
                var e = (0,
                i.Z)(o().mark((function e(t) {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                L.hJ.getInvoice("".concat(null === g || void 0 === g || null === (r = g.invoice) || void 0 === r ? void 0 : r.uuid));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ae = g.schedules.map((function(e, t) {
                var r;
                return {
                    label: null === (r = e.screens) || void 0 === r ? void 0 : r[0].name,
                    value: null === e || void 0 === e ? void 0 : e.uid
                }
            }
            ))
              , We = Ae.find((function(e) {
                return e.value === (null === W || void 0 === W ? void 0 : W.uid)
            }
            ));
            return (0,
            p.jsxs)("div", {
                className: "space-y-7 px-7 pb-7",
                children: [(0,
                p.jsxs)("div", {
                    className: "flex flex-col md:flex-row md:space-x-7",
                    children: [(0,
                    p.jsxs)("div", {
                        className: "flex flex-col md:w-8/12 space-y-7 pt-7 md:pt-0",
                        children: [(0,
                        p.jsxs)(ft.Z, {
                            otherClasses: "px-7  py-6 shadow-card",
                            children: [(0,
                            p.jsx)("div", {
                                className: "",
                                children: (0,
                                p.jsx)("h3", {
                                    className: "pb-4 text-lg font-bold tracking-tighter dark:text-dark-400",
                                    children: "Basic Info"
                                })
                            }), (0,
                            p.jsx)("div", {
                                className: "",
                                children: (0,
                                p.jsxs)("div", {
                                    className: "list-details md:grid md:grid-cols-3 gap-7",
                                    children: [(0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: Ie,
                                            children: "Campaign name"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: De,
                                            children: g.name
                                        })]
                                    }), j && (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: Ie,
                                            children: "Campaign PO #"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: De,
                                            children: "BS-" + g.poNumber
                                        })]
                                    }), !j && (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: Ie,
                                            children: "Campaign status"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: De,
                                            children: (0,
                                            p.jsx)(w.Nj, {
                                                text: ie,
                                                status: ie
                                            })
                                        })]
                                    }), j && (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: Ie,
                                            children: "Campaign status"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: De,
                                            children: (0,
                                            p.jsx)(w.Nj, {
                                                text: g.hasCampaign ? "Published" : "Draft",
                                                status: g.hasCampaign ? "Published" : "Draft"
                                            })
                                        })]
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: Ie,
                                            children: "Promoted industry"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: De,
                                            children: g.industry.label
                                        })]
                                    }), !j && "group" !== g.campaignType && (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("p", {
                                            className: Ie,
                                            children: "Media Plan"
                                        }), (0,
                                        p.jsx)("p", {
                                            className: "flex  items-center space-x-2 ".concat(De),
                                            children: g.hasMediaPlan && (0,
                                            p.jsxs)(p.Fragment, {
                                                children: [(0,
                                                p.jsx)("a", {
                                                    className: "underline cursor-pointer text-primary-500",
                                                    onClick: function() {
                                                        return Re(g.uuid)
                                                    },
                                                    children: "Download Media Plan"
                                                }), (0,
                                                p.jsx)("div", {
                                                    children: (0,
                                                    p.jsx)(f.UW, {
                                                        set: "light",
                                                        primaryColor: "#F53D3F",
                                                        size: "small"
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("p", {
                                            className: Ie,
                                            children: "Invoice"
                                        }), !g.invoice && (0,
                                        p.jsx)("p", {
                                            className: De,
                                            children: "Pending"
                                        }), g.invoice && (0,
                                        p.jsx)("p", {
                                            className: De,
                                            children: (0,
                                            p.jsxs)("a", {
                                                className: "underline cursor-pointer",
                                                onClick: function() {
                                                    return Be(g.uuid)
                                                },
                                                children: [g.invoice.series, "-", g.invoice.number, " (", (0,
                                                Qr.Z)(g.invoice.createdAt, "yyyy-MM-dd"), ")"]
                                            })
                                        })]
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: Ie,
                                            children: "Start date"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: De,
                                            children: g.startDate ? be.ou.fromMillis(g.startDate, {
                                                zone: "utc",
                                                locale: "utc"
                                            }).toFormat("dd-MM-yyyy HH:mm") : "N/A"
                                        })]
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: Ie,
                                            children: "End date"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: De,
                                            children: g.endDate ? be.ou.fromMillis(g.endDate, {
                                                zone: "utc",
                                                locale: "utc"
                                            }).toFormat("dd-MM-yyyy HH:mm") : "N/A"
                                        })]
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: Ie,
                                            children: "Created on"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: De,
                                            children: be.ou.fromMillis(g.createdAt, {
                                                zone: "utc",
                                                locale: "utc"
                                            }).toFormat("dd-MM-yyyy HH:mm")
                                        })]
                                    }), (0,
                                    p.jsxs)("div", {
                                        className: Pe,
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: Ie,
                                            children: "Last modified on"
                                        }), g.modifiedAt && (0,
                                        p.jsx)("div", {
                                            className: De,
                                            children: be.ou.fromMillis(g.modifiedAt, {
                                                zone: "utc",
                                                locale: "utc"
                                            }).toFormat("dd-MM-yyyy HH:mm")
                                        })]
                                    })]
                                })
                            })]
                        }), (0,
                        p.jsx)(ft.Z, {
                            otherClasses: "px-7  py-6  shadow-card h-full",
                            children: (0,
                            p.jsx)(P.Z, ga(ga({}, {
                                dots: !1,
                                infinite: !1,
                                speed: 500,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }), {}, {
                                className: "arrows narrow",
                                children: g.formats.map((function(e, t) {
                                    return (0,
                                    p.jsx)(u.S_, {
                                        index: t,
                                        total: g.formats.length,
                                        format: e
                                    }, t)
                                }
                                ))
                            }))
                        })]
                    }), !j && (0,
                    p.jsx)("div", {
                        className: "md:w-4/12 ",
                        children: (0,
                        p.jsxs)("div", {
                            className: "flex flex-row flex-wrap h-full md:flex-col md:space-y-7 campaign-kpis",
                            children: [(0,
                            p.jsx)(w.e9, {
                                title: "Total Locations",
                                value: T,
                                icon: "Location"
                            }), (0,
                            p.jsx)(w.e9, {
                                title: "Total Screens",
                                value: U,
                                icon: "Activity"
                            }), (0,
                            p.jsx)(w.e9, {
                                title: "Total Hourly Slots",
                                value: J,
                                icon: "TimeCircle"
                            }), "group" !== g.campaignType ? (0,
                            p.jsxs)(p.Fragment, {
                                children: [(0,
                                p.jsx)(w.e9, {
                                    title: "Total Budget",
                                    value: re,
                                    icon: "Wallet"
                                }), (0,
                                p.jsx)(w.e9, {
                                    title: "Min. Cost per Location",
                                    value: he,
                                    icon: "Chart"
                                })]
                            }) : (0,
                            p.jsx)(w.e9, {
                                title: "Campaign Spent",
                                value: (null === (t = g.budgetData) || void 0 === t ? void 0 : t.totalMargin) || "",
                                icon: "Chart"
                            })]
                        })
                    }), j && (0,
                    p.jsx)("div", {
                        className: "md:w-4/12 mt-7 md:mt-0",
                        children: (0,
                        p.jsxs)("div", {
                            className: "flex flex-col h-full space-y-7",
                            children: [(0,
                            p.jsxs)("div", {
                                className: "flex flex-col flex-wrap h-full space-y-7",
                                children: [(0,
                                p.jsxs)("div", {
                                    className: "flex flex-row space-x-7",
                                    children: [(0,
                                    p.jsx)(w.e9, {
                                        otherClass: "w-6/12",
                                        title: "Total Locations",
                                        value: T
                                    }), (0,
                                    p.jsx)(w.e9, {
                                        otherClass: "w-6/12",
                                        title: "Total Screens",
                                        value: U
                                    })]
                                }), (0,
                                p.jsxs)("div", {
                                    className: "flex flex-row space-x-7",
                                    children: [(0,
                                    p.jsx)(w.e9, {
                                        otherClass: "w-6/12",
                                        title: "Total Est. Plays",
                                        value: g.plays
                                    }), (0,
                                    p.jsx)(w.e9, {
                                        otherClass: "w-6/12",
                                        title: "Total Est. Impressions",
                                        value: $
                                    })]
                                }), (0,
                                p.jsxs)("div", {
                                    className: "flex flex-row space-x-7",
                                    children: [(0,
                                    p.jsx)(w.e9, {
                                        otherClass: "w-6/12",
                                        title: "Total Hourly Slots",
                                        value: J
                                    }), (0,
                                    p.jsx)(w.e9, {
                                        otherClass: "w-6/12",
                                        title: "Min. Cost per Location",
                                        value: he
                                    })]
                                })]
                            }), "group" !== g.campaignType ? (0,
                            p.jsxs)(ft.Z, {
                                otherClasses: "px-5 py-4 shadow-card bg-gradient-red dark:bg-gradient-red-dark h-full",
                                children: [(0,
                                p.jsx)("div", {
                                    className: "",
                                    children: (0,
                                    p.jsx)("h3", {
                                        className: "pb-4 text-lg font-bold tracking-tighter dark:text-dark-400",
                                        children: "Bill summary"
                                    })
                                }), (0,
                                p.jsxs)("ul", {
                                    className: "pb-4 border-b review-steps border-bordercolor",
                                    children: [(0,
                                    p.jsxs)("li", {
                                        className: "flex items-center justify-between",
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: "font-bold text-dark-default dark:text-dark-400",
                                            children: "Subtotal"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "font-semibold dark:text-dark-400",
                                            children: (null === y || void 0 === y ? void 0 : y.subTotalRoundVal) || (null === g || void 0 === g || null === (r = g.budget) || void 0 === r ? void 0 : r.subTotal)
                                        })]
                                    }), (0,
                                    p.jsxs)("li", {
                                        className: "flex items-center justify-between",
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: "font-bold text-dark-default dark:text-dark-400",
                                            children: "Tax"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "font-semibold dark:text-dark-400",
                                            children: (null === y || void 0 === y ? void 0 : y.vat) || (null === g || void 0 === g || null === (a = g.budget) || void 0 === a ? void 0 : a.tax)
                                        })]
                                    }), 0 !== g.budget.tlpValue && (0,
                                    p.jsxs)("li", {
                                        className: "flex items-center justify-between",
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: "font-bold text-dark-default dark:text-dark-400",
                                            children: "Local Advertisement TAX"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "font-semibold dark:text-dark-400",
                                            children: (null === y || void 0 === y ? void 0 : y.tlp) || (null === g || void 0 === g || null === (n = g.budget) || void 0 === n ? void 0 : n.tlp)
                                        })]
                                    }), 0 !== g.budget.handleFee && (0,
                                    p.jsxs)("li", {
                                        className: "flex items-center justify-between",
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: "font-bold text-dark-default dark:text-dark-400",
                                            children: "Handling fee"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "font-semibold dark:text-dark-400",
                                            children: (null === y || void 0 === y ? void 0 : y.handleFeeVal) || (null === g || void 0 === g || null === (l = g.budget) || void 0 === l ? void 0 : l.handleFeeVal)
                                        })]
                                    }), g.budget.usedCredits && 0 !== g.budget.usedCredits && (0,
                                    p.jsxs)("li", {
                                        className: "flex items-center justify-between",
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: "font-bold text-dark-default dark:text-dark-400",
                                            children: "Used Credit"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "font-semibold dark:text-dark-400",
                                            children: (null === y || void 0 === y ? void 0 : y.credits) || (null === g || void 0 === g || null === (d = g.budget) || void 0 === d ? void 0 : d.usedCredits)
                                        })]
                                    }), 0 !== g.budget.percentDiscount && (0,
                                    p.jsxs)("li", {
                                        className: "flex items-center justify-between",
                                        children: [(0,
                                        p.jsx)("div", {
                                            className: "font-bold text-dark-default dark:text-dark-400",
                                            children: "Subtotal with used credit"
                                        }), (0,
                                        p.jsx)("div", {
                                            className: "font-semibold dark:text-dark-400",
                                            children: (null === y || void 0 === y ? void 0 : y.credits) || (null === g || void 0 === g || null === (h = g.budget) || void 0 === h ? void 0 : h.subtotalWithUsedCredit)
                                        })]
                                    }), 0 !== g.budget.percentDiscount && (0,
                                    p.jsxs)("li", {
                                        className: "flex items-center justify-between",
                                        children: [(0,
                                        p.jsxs)("div", {
                                            className: "font-bold text-dark-default dark:text-dark-400",
                                            children: ["Discount voucher (", g.budget.percentDiscount, "%)", " "]
                                        }), (0,
                                        p.jsxs)("div", {
                                            className: "text-sm font-semibold dark:text-dark-400",
                                            children: ["-", (null === y || void 0 === y ? void 0 : y.virtualcredits) || (null === (x = g.budget) || void 0 === x ? void 0 : x.valuePercentDiscount)]
                                        })]
                                    })]
                                }), (0,
                                p.jsxs)("div", {
                                    className: "flex items-center justify-between mt-4",
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: "font-bold text-dark-default dark:text-dark-400",
                                        children: "Total"
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "font-semibold dark:text-dark-400",
                                        children: y.totalRoundCurrency || (null === (v = g.budget) || void 0 === v ? void 0 : v.totalWithCalcApplied)
                                    })]
                                })]
                            }) : null]
                        })
                    })]
                }), !j && "group" !== g.campaignType && !g.hideSpend && (0,
                p.jsx)(u.bH, {
                    campaignId: g.uuid,
                    budget: re,
                    campaignType: g.campaignType
                }), (0,
                p.jsxs)(ft.Z, {
                    otherClasses: "px-7  py-6  shadow-card",
                    children: [(0,
                    p.jsxs)("div", {
                        className: "flex flex-row flex-nowrap justify-between",
                        children: [(0,
                        p.jsx)("h3", {
                            className: "pb-4 text-lg font-bold tracking-tighter dark:text-dark-400",
                            children: "Locations"
                        }), (0,
                        p.jsx)(dr.Z, {
                            className: "rightbottom",
                            handler: (0,
                            p.jsx)(p.Fragment, {
                                children: (0,
                                p.jsxs)("div", {
                                    className: "input-simulate cursor-pointer flex items-center justify-between text-body dark:text-dark-300  flex-1 ".concat(Me ? "active" : ""),
                                    onClick: function() {
                                        Ze(!Me)
                                    },
                                    children: [(0,
                                    p.jsxs)("label", {
                                        className: "cursor-pointer dark:text-dark-400",
                                        children: ["Shown columns:", (0,
                                        p.jsxs)("span", {
                                            className: "mr-2 text-primary-500 text-bold capitalize-fl",
                                            children: ["\xa0", Te ? Te.toString().split(",").length <= 1 ? Te.toString().split(",") : Te.toString().split(",").length + " columns" : "All columns"]
                                        })]
                                    }), (0,
                                    p.jsx)(f._M, {
                                        set: "light",
                                        size: "small"
                                    })]
                                })
                            }),
                            content: (0,
                            p.jsx)(Na, {
                                shareableInfo: j,
                                filters: Te,
                                setFilters: function(e) {
                                    Ee(e)
                                }
                            })
                        })]
                    }), (0,
                    p.jsx)(u.Sx, {
                        screens: g.screens,
                        shareableInfo: j,
                        visibleColumns: Te
                    })]
                }), (0,
                p.jsxs)(ft.Z, {
                    otherClasses: "px-7 py-6  shadow-card",
                    children: [(0,
                    p.jsxs)("div", {
                        className: "flex flex-row flex-wrap justify-between items-center mb-4",
                        children: [(0,
                        p.jsx)("h3", {
                            className: "text-lg font-bold tracking-tighter dark:text-dark-400 whitespace-nowrap",
                            children: "Locations Map"
                        }), (0,
                        p.jsx)("div", {
                            className: "flex flex-row search-map-inputs",
                            children: (0,
                            p.jsx)(xa.Z, {
                                fromCampaignPage: !0,
                                popoverMobile: !1,
                                defaultValueLocName: "",
                                showList: !0,
                                onChangeLocName: function(e) {
                                    Ne(e)
                                },
                                onChange: function(e) {
                                    ye(e)
                                },
                                countryArea: ""
                            })
                        })]
                    }), (0,
                    p.jsx)(ja, {
                        isBillboard: !0,
                        isShareMap: !0,
                        searchLocation: ge,
                        searchBillboard: ke,
                        screens: g.screens
                    })]
                }), j && (0,
                p.jsxs)(ft.Z, {
                    otherClasses: "flex-1 flex-col items-stretch md:w-auto py-6 pr-6 flex mx-4 md:m-0 items-center border-light",
                    children: [(0,
                    p.jsxs)("div", {
                        className: "flex flex-row pb-4",
                        children: [(0,
                        p.jsx)("div", {
                            children: (0,
                            p.jsx)("div", {
                                className: "cursor-pointer excl-mark mx-7",
                                "data-tip": !0,
                                "data-for": "error",
                                children: "!"
                            })
                        }), (0,
                        p.jsx)("div", {
                            className: "md:text-sm md:font-semibold md:tracking-tighter md:text-dark-default dark:text-dark-400",
                            children: "Final number of ad plays and budget may vary slightly due to each location\u2019s audience data"
                        })]
                    }), (0,
                    p.jsxs)("div", {
                        className: "flex flex-row",
                        children: [(0,
                        p.jsx)("div", {
                            children: (0,
                            p.jsx)("div", {
                                className: "cursor-pointer excl-mark mx-7",
                                "data-tip": !0,
                                "data-for": "error",
                                children: "!"
                            })
                        }), (0,
                        p.jsx)("div", {
                            className: "md:text-sm md:font-semibold md:tracking-tighter md:text-dark-default dark:text-dark-400",
                            children: "The pricing and availability of the locations are subject to change. Blindspot and its partners do their best to provide your selection, however it cannot be guaranteed until the campaign is approved"
                        })]
                    })]
                }), !j && (0,
                p.jsxs)(ft.Z, {
                    otherClasses: "px-7  py-6  shadow-card",
                    children: [(0,
                    p.jsxs)("div", {
                        className: "flex flex-wrap items-center justify-between pb-4",
                        children: [(0,
                        p.jsxs)("h3", {
                            className: "flex flex-col text-lg font-bold tracking-tighter dark:text-dark-400 align-center",
                            children: ["Performance", (0,
                            p.jsxs)("div", {
                                className: "flex flex-row items-center justify-center",
                                children: [(0,
                                p.jsx)("div", {
                                    className: "flex items-center justify-center cursor-pointer",
                                    "data-tip": !0,
                                    "data-for": "utc",
                                    children: (0,
                                    p.jsx)(f.Zd, {
                                        set: "bold",
                                        primaryColor: "#FDA53F",
                                        size: "small"
                                    })
                                }), (0,
                                p.jsx)("p", {
                                    className: "text-sm font-semibold text-center text-dark-500 dark:text-dark-300 md:text-left",
                                    children: de ? (0,
                                    p.jsxs)(p.Fragment, {
                                        children: ["The data is displayed in the location's timezone (UTC ", de.tz, ")"]
                                    }) : (0,
                                    p.jsxs)(p.Fragment, {
                                        children: ["The data is displayed in your browser timezone (UTC", be.ou.local().offset / 60 > 0 ? " + ".concat(be.ou.local().offset / 60) : be.ou.local().offset / 60, ")"]
                                    })
                                })]
                            })]
                        }), (0,
                        p.jsx)(w.X, {
                            boxSize: "big",
                            type: "radio",
                            name: "primary",
                            flexClass: "flex-1 is-center-box",
                            onChange: function(e) {
                                M(e.target.value)
                            },
                            options: [{
                                value: "day",
                                label: "Day",
                                checked: !0
                            }, {
                                value: "hour",
                                label: "Hour",
                                checked: !1
                            }]
                        }, "1"), g.screens.length > 1 && (0,
                        p.jsx)("div", {
                            className: "flex-1 mt-5 md:flex-none md:mt-0",
                            children: (0,
                            p.jsx)(dr.Z, {
                                className: "bottom chevron-transform",
                                handler: (0,
                                p.jsxs)("div", {
                                    className: "flex items-center justify-center space-x-2 cursor-pointer",
                                    children: [(0,
                                    p.jsx)("div", {
                                        className: "text-lg font-semibold dark:text-dark-400 md:text-sm md:font-bold text-lightGrey",
                                        children: de ? de.label : "Overall performance"
                                    }), (0,
                                    p.jsx)("div", {
                                        className: "chevron dark:text-dark-400 text-body",
                                        children: (0,
                                        p.jsx)(f._M, {
                                            set: "light",
                                            size: "small"
                                        })
                                    })]
                                }),
                                content: (0,
                                p.jsxs)("div", {
                                    className: "flex flex-col p-2 space-y-2 w-72",
                                    children: [(0,
                                    p.jsx)(w.Y8, {
                                        onChange: function(e) {
                                            ue(null)
                                        },
                                        name: "performanceDash",
                                        label: "Overall",
                                        value: "-1",
                                        defaultChecked: null === de,
                                        labelColor: "dark"
                                    }, "radio--1"), g.screens.map((function(e, t) {
                                        return (0,
                                        p.jsx)(w.Y8, {
                                            onChange: function(e) {
                                                var t = g.screens[e.target.value];
                                                ue({
                                                    label: t.name,
                                                    value: t.uuid,
                                                    tz: t.tz,
                                                    externalIds: t.externalIds ? "".concat(t.externalIds.join(","), ",").concat(t.uuid) : ""
                                                })
                                            },
                                            defaultChecked: (null === de || void 0 === de ? void 0 : de.label) === g.screens[t].name,
                                            name: "performanceDash",
                                            label: e.name,
                                            value: t,
                                            labelColor: "dark"
                                        }, "radio-".concat(t))
                                    }
                                    ))]
                                })
                            })
                        }) || (0,
                        p.jsx)(p.Fragment, {})]
                    }), (0,
                    p.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0,
                        p.jsx)(fa.Z, {
                            chartTitle: "Plays",
                            screen: de || "",
                            uuid: g.uuid,
                            tz: de ? de.tz : be.ou.local().zoneName,
                            filterType: S,
                            type: g.campaignType
                        }), (0,
                        p.jsx)(pa, {
                            chartTitle: "Optimized reach",
                            screen: de || "",
                            uuid: g.uuid,
                            tz: de ? de.tz : be.ou.local().zoneName,
                            filterType: S,
                            type: g.campaignType
                        })]
                    })]
                }), W && "group" !== g.campaignType ? (0,
                p.jsxs)(ft.Z, {
                    otherClasses: "px-7  py-6 overflow-hidden  shadow-card",
                    children: [(0,
                    p.jsx)("div", {
                        className: "flex flex-wrap items-center justify-between md:pb-4",
                        children: (0,
                        p.jsxs)("h3", {
                            className: "flex-1 text-lg font-bold tracking-tighter dark:text-dark-400 md:flex-none ",
                            children: ["Schedule ", "daily" === W.type ? "Daily" : "Hourly"]
                        })
                    }), (0,
                    p.jsx)("div", {
                        children: W && "group" !== g.campaignType && (0,
                        p.jsxs)("div", {
                            children: [(0,
                            p.jsxs)(ft.Z, {
                                children: [(0,
                                p.jsx)("div", {
                                    className: "py-4 text-base font-bold md:py-5 md:text-sm text-dark-default dark:text-dark-400",
                                    children: "Select the location for which you want to view the schedule"
                                }), (0,
                                p.jsx)("div", {
                                    className: "flex flex-wrap space-x-2 md:space-x-4",
                                    children: (0,
                                    p.jsx)(w.lq, {
                                        options: Ae,
                                        defaultValue: We,
                                        onChange: function(e) {
                                            var t = F.find((function(t) {
                                                return (null === t || void 0 === t ? void 0 : t.uid) === e.value
                                            }
                                            ));
                                            V(t)
                                        },
                                        label: "Location",
                                        "data-cy": "Location",
                                        dataCy: "Location",
                                        isMulti: !1,
                                        fullWidth: !0,
                                        isClearable: !1,
                                        selName: "Location"
                                    })
                                })]
                            }), (0,
                            p.jsx)(or.Z, {
                                readOnly: !0,
                                iconLeft: "bi:arrow-left-circle-fill",
                                iconRight: "bi:arrow-right-circle-fill",
                                scheduler: [W]
                            }, W.uid)]
                        })
                    })]
                }) : ""]
            })
        };
        function Sa(e, t) {
            var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = function(e, t) {
                    if (!e)
                        return;
                    if ("string" === typeof e)
                        return Ma(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return Ma(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    r && (e = r);
                    var a = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, i = !0, l = !1;
            return {
                s: function() {
                    r = r.call(e)
                },
                n: function() {
                    var e = r.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    s = e
                },
                f: function() {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (l)
                            throw s
                    }
                }
            }
        }
        function Ma(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, a = new Array(t); r < t; r++)
                a[r] = e[r];
            return a
        }
        var Za = function(e) {
            var t = e.value
              , r = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var r;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                L.FT.getInvoice(t.uuid);
                            case 2:
                                r = e.sent,
                                ma()(r, "TPSENGAGE_".concat(t.number, "-").concat(be.ou.now().toFormat("yyyy MM dd"), ".pdf"), "application/pdf");
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            p.jsx)("div", {
                className: "flex justify-between w-32 space-x-4",
                children: (0,
                p.jsx)("div", {
                    className: "flex items-center justify-center w-8 h-8 px-2 rounded-lg bg-dark-500 bg-opacity-5 ",
                    children: (0,
                    p.jsx)("button", {
                        onClick: function() {
                            r()
                        },
                        children: (0,
                        p.jsx)(f.UW, {
                            set: "light"
                        })
                    })
                })
            })
        }
          , Oa = function(e) {
            var t = e.invoices
              , r = c.useState([])
              , a = (0,
            b.Z)(r, 2)
              , n = a[0]
              , s = a[1];
            return (0,
            c.useEffect)((function() {
                var e, r = [], a = Sa(t);
                try {
                    for (a.s(); !(e = a.n()).done; ) {
                        var n = e.value;
                        r.push({
                            invoice: n.number,
                            amount: "".concat(n.amount, " ").concat(n.currency),
                            status: n.status,
                            download: n
                        })
                    }
                } catch (i) {
                    a.e(i)
                } finally {
                    a.f()
                }
                s(r)
            }
            ), []),
            (0,
            p.jsx)("div", {
                className: "w-10/12 mx-auto  flex flex-column items-center justify-center flex-1",
                children: (0,
                p.jsx)(u.iA, {
                    header: [{
                        Header: "Invoice",
                        accessor: "invoice"
                    }, {
                        Header: "Status",
                        accessor: "status"
                    }, {
                        Header: "Total sum",
                        accessor: "amount"
                    }, {
                        Header: "Actions",
                        accessor: "download",
                        Cell: Za
                    }],
                    tableData: n
                })
            })
        }
          , La = function(e) {
            var t = e.cards
              , r = c.useState(!1)
              , a = (0,
            b.Z)(r, 2)
              , n = a[0]
              , s = a[1]
              , l = c.useState(t)
              , d = (0,
            b.Z)(l, 2)
              , m = d[0]
              , f = d[1]
              , h = c.useState(0)
              , x = (0,
            b.Z)(h, 2)
              , v = x[0]
              , g = x[1]
              , y = c.useState(null)
              , j = (0,
            b.Z)(y, 2)
              , k = j[0]
              , N = j[1];
            (0,
            c.useEffect)((function() {
                C()
            }
            ), []);
            var C = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                X.F.getUserCompanyData();
                            case 2:
                                t = e.sent,
                                N(t);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , S = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return s(!1),
                                e.next = 3,
                                X.F.getUserPayment();
                            case 3:
                                t = e.sent,
                                (0,
                                U.destroyCookie)(null, "invalid_payment_methods"),
                                f(t),
                                g(v + 1);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            p.jsxs)(p.Fragment, {
                children: [(0,
                p.jsx)(ft.Z, {
                    otherClasses: "flex w-full p-7 h-full",
                    children: 0 === m.length ? (0,
                    p.jsx)("div", {
                        className: "flex items-center w-full ",
                        children: (0,
                        p.jsxs)("div", {
                            className: "mx-auto space-y-8 text-center ",
                            children: [(0,
                            p.jsx)("h3", {
                                className: "text-xl font-medium text-body font-display dark:text-dark-400",
                                children: "You have no payment methods."
                            }), (0,
                            p.jsx)("p", {
                                className: "dark:text-dark-400",
                                children: "In order to create a campaign you must add a primary payment method."
                            }), (0,
                            p.jsx)("div", {
                                children: (0,
                                p.jsx)(w.zx, {
                                    onClick: function() {
                                        s(!0)
                                    },
                                    color: "tertiary",
                                    className: "mx-auto",
                                    children: "Add payment method"
                                })
                            })]
                        })
                    }) : (0,
                    p.jsx)("div", {
                        className: "w-full ",
                        children: (0,
                        p.jsxs)("div", {
                            className: "w-full space-y-5",
                            children: [(0,
                            p.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0,
                                p.jsx)("h3", {
                                    className: "text-xl font-bold tracking-tighter text-body dark:text-white",
                                    children: "Cards"
                                }), (0,
                                p.jsx)("div", {
                                    children: (0,
                                    p.jsx)(w.zx, {
                                        onClick: function() {
                                            s(!0)
                                        },
                                        color: "primary",
                                        fill: "none",
                                        className: "p-0 mx-auto underline",
                                        children: "Add new payment method"
                                    })
                                })]
                            }), (0,
                            p.jsx)(u.pH, {
                                cards: m,
                                getCards: (0,
                                i.Z)(o().mark((function e() {
                                    return o().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                S();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )))
                            }, "".concat(m.length, "-").concat(v))]
                        })
                    })
                }), k && n && (0,
                p.jsx)(p.Fragment, {
                    children: (0,
                    p.jsx)(w.de, {
                        user: k,
                        onCardSubmitSuccess: S,
                        open: n,
                        closePopup: function() {
                            return s(!1)
                        }
                    })
                })]
            })
        }
          , Ta = function() {
            var e = (0,
            c.useState)(!1);
            e[0],
            e[1];
            (0,
            c.useEffect)((function() {
                s()
            }
            ), []);
            var t = c.useState("0")
              , r = (0,
            b.Z)(t, 2)
              , a = r[0]
              , n = r[1]
              , s = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    var t;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                X.F.getUserCredit();
                            case 2:
                                t = e.sent,
                                n(t.creditValue);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , l = function() {
                var e = (0,
                i.Z)(o().mark((function e() {
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                s();
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            p.jsx)(p.Fragment, {
                children: (0,
                p.jsx)(ft.Z, {
                    otherClasses: "flex w-full p-4 h-full",
                    children: (0,
                    p.jsxs)("div", {
                        className: "w-full flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0",
                        children: [(0,
                        p.jsxs)("div", {
                            className: "flex flex-col items-center md:items-start md:mr-4",
                            children: [(0,
                            p.jsx)("h3", {
                                className: "text-md font-bold  dark:text-white",
                                children: "Blindspot Credits"
                            }), (0,
                            p.jsx)("p", {
                                className: "text-sm font-semibold text-dark-500 dark:text-dark-300 mt-2 text-center md:text-left",
                                children: "Blindspot credits are basically cash! You can use them to fund your future campaigns (or just brag about how many you have)."
                            })]
                        }), (0,
                        p.jsxs)("div", {
                            className: "flex flex-col md:flex-row justify-end space-y-6 md:space-y-0",
                            children: [(0,
                            p.jsxs)("div", {
                                className: "text-center flex flex-row items-center justify-center md:border-r border-dark-300 border-opacity-30 md:pr-8 md:mr-8",
                                children: [(0,
                                p.jsx)("div", {
                                    className: "w-5 h-5 border border-[#2ECC71] rounded-2xl flex items-center justify-center mr-4",
                                    children: (0,
                                    p.jsx)("div", {
                                        className: "w-2 h-2 bg-[#2ECC71] rounded-2xl"
                                    })
                                }), (0,
                                p.jsx)("h3", {
                                    className: "text-2xl font-bold  dark:text-white mr-2 whitespace-nowrap",
                                    children: a
                                }), (0,
                                p.jsx)("p", {
                                    className: "text-sm font-semibold text-dark-500 text-center whitespace-nowrap dark:text-dark-400",
                                    children: "active credits"
                                })]
                            }), (0,
                            p.jsx)("div", {
                                className: "min-w-[230px]",
                                children: (0,
                                p.jsx)(u.Pm, {
                                    isPercentage: !1,
                                    labelName: "Voucher code",
                                    onComplete: function() {
                                        l()
                                    }
                                })
                            })]
                        })]
                    })
                })
            })
        }
          , Ea = function(e) {
            var t = e.notifications
              , r = (0,
            E.q)().notify
              , a = c.useState([{
                value: "never",
                label: "Never",
                checked: !1
            }, {
                value: "digest",
                label: "Daily Digest",
                checked: !1
            }, {
                value: "immediate",
                label: "Immediate",
                checked: !1
            }])
              , n = (0,
            b.Z)(a, 2)
              , s = n[0]
              , l = n[1];
            return (0,
            c.useEffect)((function() {
                var e = s.map((function(e) {
                    return e.value === t ? e.checked = !0 : e.checked = !1,
                    e
                }
                ));
                l(e)
            }
            ), []),
            (0,
            p.jsx)("div", {
                className: "flex items-center justify-center flex-1",
                children: (0,
                p.jsxs)("div", {
                    className: "w-fit space-y-7",
                    children: [(0,
                    p.jsx)("div", {
                        className: "px-2 text-base dark:text-dark-400 font-medium text-center md:text-sm md:text-left",
                        children: "Notification frequency"
                    }), (0,
                    p.jsx)("div", {
                        className: "flex flex-col items-center justify-center md:flex-row space-y-7 md:space-y-0 md:space-x-4",
                        children: null === s || void 0 === s ? void 0 : s.map((function(e, t) {
                            return (0,
                            p.jsx)(w.Y8, {
                                justText: !0,
                                onChange: function() {
                                    var e = (0,
                                    i.Z)(o().mark((function e(t) {
                                        return o().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    X.F.setUserNotifications(t.target.value);
                                                case 2:
                                                    r("Notifications settings updated", "success");
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                checked: e.checked,
                                name: "primary",
                                defaultBg: "bg-white",
                                label: e.label,
                                value: e.value,
                                labelColor: "dark"
                            }, "1")
                        }
                        ))
                    }), (0,
                    p.jsxs)("div", {
                        className: "pt-4 text-lg font-medium dark:text-dark-300 text-center text-dark-default md:text-base",
                        children: ["You will only receive one email per day with a summary of the day's events.", " "]
                    })]
                })
            })
        }
          , Pa = (r(60654),
        r(87650));
        r(89947),
        r(72895),
        r(43587),
        (0,
        Pa.ZP)({
            accessToken: "pk.eyJ1IjoidHBzZW5nYWdlIiwiYSI6ImNqZGluMGcyazEybGcycW4wdnhwanR3cXcifQ.XpvUi6PLguDLfYrksmcDxw"
        })
    }
}]);
//# sourceMappingURL=6618-4367b8c915a0c9f4.js.map

