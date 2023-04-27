"use strict";
exports.id = 491;
exports.ids = [491];
exports.modules = {

/***/ 8491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ Layout_WEBSITE_HOST_URL),
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Head.tsx




const WEBSITE_HOST_URL = "https://foodchain.eth.xyz";
const Head = ({ customMeta  })=>{
    const router = (0,router_.useRouter)();
    const meta = {
        title: "Foodchain1028 \uD83C\uDFDD️ Portfolio",
        description: "Blockchain Developer and Researcher. Ditto Lover. Jazz Lover.",
        image: `https://imgur.com/HeZOusW`,
        type: "website",
        ...customMeta
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                content: meta.description,
                name: "description"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: `${WEBSITE_HOST_URL}${router.asPath}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: `${WEBSITE_HOST_URL}${router.asPath}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: meta.type
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: "Hunter Chang - Website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: meta.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: "@huntarosan"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: meta.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: meta.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: meta.image
            }),
            meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "article:published_time",
                content: meta.date
            })
        ]
    });
};
/* harmony default export */ const components_Head = (Head);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navigation.tsx



const Navigation = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-gray-900 dark:text-yellow-200 pr-6 py-4",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/projects",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-gray-900 dark:text-yellow-200 px-6 py-4",
                    children: "Projects"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/posts",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-gray-900 dark:text-yellow-200 px-6 py-4",
                    children: "Posts"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navigation = (Navigation);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./components/ThemeSwitch.tsx




/**
 * Based off of gatsby-theme-novela
 * https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx
 */ const ThemeSwitch = ()=>{
    const [mounted, setMounted] = external_react_default().useState(false);
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    // After mounting, we have access to the theme
    external_react_default().useEffect(()=>setMounted(true), []);
    if (!mounted) {
        return null;
    }
    const isDark = theme === "dark";
    const color = isDark ? "#fff" : "#000";
    const maskColor = isDark ? "#000" : "#fff";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        "aria-label": "Toggle Dark Mode",
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
        className: style_default().dynamic([
            [
                "c65c1fbb4a576cce",
                [
                    isDark ? "4px" : "2px",
                    color,
                    color,
                    isDark ? 0.5 : 1,
                    isDark ? "visible" : "hidden",
                    color,
                    isDark ? "14px, -14px" : "0, 0",
                    isDark ? 0 : 1,
                    color,
                    color,
                    color,
                    color,
                    color,
                    color,
                    color,
                    color,
                    isDark ? 1 : 0,
                    maskColor,
                    isDark ? "4px, -4px" : "0, 0",
                    isDark ? 0 : 1
                ]
            ]
        ]) + " " + "theme-button",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: style_default().dynamic([
                    [
                        "c65c1fbb4a576cce",
                        [
                            isDark ? "4px" : "2px",
                            color,
                            color,
                            isDark ? 0.5 : 1,
                            isDark ? "visible" : "hidden",
                            color,
                            isDark ? "14px, -14px" : "0, 0",
                            isDark ? 0 : 1,
                            color,
                            color,
                            color,
                            color,
                            color,
                            color,
                            color,
                            color,
                            isDark ? 1 : 0,
                            maskColor,
                            isDark ? "4px, -4px" : "0, 0",
                            isDark ? 0 : 1
                        ]
                    ]
                ]) + " " + "moon-or-sun"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: style_default().dynamic([
                    [
                        "c65c1fbb4a576cce",
                        [
                            isDark ? "4px" : "2px",
                            color,
                            color,
                            isDark ? 0.5 : 1,
                            isDark ? "visible" : "hidden",
                            color,
                            isDark ? "14px, -14px" : "0, 0",
                            isDark ? 0 : 1,
                            color,
                            color,
                            color,
                            color,
                            color,
                            color,
                            color,
                            color,
                            isDark ? 1 : 0,
                            maskColor,
                            isDark ? "4px, -4px" : "0, 0",
                            isDark ? 0 : 1
                        ]
                    ]
                ]) + " " + "moon-mask"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "c65c1fbb4a576cce",
                dynamic: [
                    isDark ? "4px" : "2px",
                    color,
                    color,
                    isDark ? 0.5 : 1,
                    isDark ? "visible" : "hidden",
                    color,
                    isDark ? "14px, -14px" : "0, 0",
                    isDark ? 0 : 1,
                    color,
                    color,
                    color,
                    color,
                    color,
                    color,
                    color,
                    color,
                    isDark ? 1 : 0,
                    maskColor,
                    isDark ? "4px, -4px" : "0, 0",
                    isDark ? 0 : 1
                ],
                children: `.theme-button.__jsx-style-dynamic-selector{opacity:.5;position:relative;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;width:42px;height:42px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:opacity.3s ease;-moz-transition:opacity.3s ease;-o-transition:opacity.3s ease;transition:opacity.3s ease}.theme-button.__jsx-style-dynamic-selector:hover{opacity:1}.moon-or-sun.__jsx-style-dynamic-selector{position:relative;width:20px;height:20px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:${isDark ? "4px" : "2px"} solid;border-color:${color};background:${color};-webkit-transform:scale(${isDark ? 0.5 : 1});-moz-transform:scale(${isDark ? 0.5 : 1});-ms-transform:scale(${isDark ? 0.5 : 1});-o-transform:scale(${isDark ? 0.5 : 1});transform:scale(${isDark ? 0.5 : 1});-webkit-transition:all.45s ease;-moz-transition:all.45s ease;-o-transition:all.45s ease;transition:all.45s ease;overflow:${isDark ? "visible" : "hidden"}}.moon-or-sun.__jsx-style-dynamic-selector::before{content:"";position:absolute;right:-9px;top:-9px;height:20px;width:20px;border:2px solid;border-color:${color};-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-transform:translate(${isDark ? "14px, -14px" : "0, 0"});-moz-transform:translate(${isDark ? "14px, -14px" : "0, 0"});-ms-transform:translate(${isDark ? "14px, -14px" : "0, 0"});-o-transform:translate(${isDark ? "14px, -14px" : "0, 0"});transform:translate(${isDark ? "14px, -14px" : "0, 0"});opacity:${isDark ? 0 : 1};-webkit-transition:-webkit-transform.45s ease;-moz-transition:-moz-transform.45s ease;-o-transition:-o-transform.45s ease;transition:-webkit-transform.45s ease;transition:-moz-transform.45s ease;transition:-o-transform.45s ease;transition:transform.45s ease}.moon-or-sun.__jsx-style-dynamic-selector::after{content:"";width:8px;height:8px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;margin:-4px 0 0 -4px;position:absolute;top:50%;left:50%;-webkit-box-shadow:0 -23px 0 ${color},0 23px 0 ${color},23px 0 0 ${color},-23px 0 0 ${color},15px 15px 0 ${color},-15px 15px 0 ${color},15px -15px 0 ${color},-15px -15px 0 ${color};-moz-box-shadow:0 -23px 0 ${color},0 23px 0 ${color},23px 0 0 ${color},-23px 0 0 ${color},15px 15px 0 ${color},-15px 15px 0 ${color},15px -15px 0 ${color},-15px -15px 0 ${color};box-shadow:0 -23px 0 ${color},0 23px 0 ${color},23px 0 0 ${color},-23px 0 0 ${color},15px 15px 0 ${color},-15px 15px 0 ${color},15px -15px 0 ${color},-15px -15px 0 ${color};-webkit-transform:scale(${isDark ? 1 : 0});-moz-transform:scale(${isDark ? 1 : 0});-ms-transform:scale(${isDark ? 1 : 0});-o-transform:scale(${isDark ? 1 : 0});transform:scale(${isDark ? 1 : 0});-webkit-transition:all.35s ease;-moz-transition:all.35s ease;-o-transition:all.35s ease;transition:all.35s ease}.moon-mask.__jsx-style-dynamic-selector{position:absolute;right:4px;top:4px;height:20px;width:20px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:0;background:${maskColor};-webkit-transform:translate(${isDark ? "4px, -4px" : "0, 0"});-moz-transform:translate(${isDark ? "4px, -4px" : "0, 0"});-ms-transform:translate(${isDark ? "4px, -4px" : "0, 0"});-o-transform:translate(${isDark ? "4px, -4px" : "0, 0"});transform:translate(${isDark ? "4px, -4px" : "0, 0"});opacity:${isDark ? 0 : 1};-webkit-transition:-webkit-transform.45s ease;-moz-transition:-moz-transform.45s ease;-o-transition:-o-transform.45s ease;transition:-webkit-transform.45s ease;transition:-moz-transform.45s ease;transition:-o-transform.45s ease;transition:transform.45s ease}`
            })
        ]
    });
};
/* harmony default export */ const components_ThemeSwitch = (ThemeSwitch);

;// CONCATENATED MODULE: ./components/Layout.tsx





const Layout_WEBSITE_HOST_URL = "https:foochain1028.eth.xyz";
const Layout = ({ children , customMeta  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Head, {
                customMeta: customMeta
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-5xl px-8 mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between py-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitch, {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-5xl px-8 py-4 mx-auto",
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "py-8 flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-5xl px-8 mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                        children: [
                            " ",
                            "Shout out to author of this template -",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-gray-900 dark:text-white",
                                href: "https://twitter.com/hunterhchang",
                                children: "Hunter Chang"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;