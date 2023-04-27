"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922,682,791];
exports.modules = {

/***/ 8542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9961);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4818);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9847);
/* harmony import */ var rehype_code_titles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(567);
/* harmony import */ var rehype_prism_plus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(483);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7752);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6809);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8491);
/* harmony import */ var _utils_mdxUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_5__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_11__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_12__, rehype_slug__WEBPACK_IMPORTED_MODULE_13__, remark_gfm__WEBPACK_IMPORTED_MODULE_14__]);
([next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_5__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__, rehype_code_titles__WEBPACK_IMPORTED_MODULE_11__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_12__, rehype_slug__WEBPACK_IMPORTED_MODULE_13__, remark_gfm__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    Head: (next_head__WEBPACK_IMPORTED_MODULE_6___default()),
    Image: (next_image__WEBPACK_IMPORTED_MODULE_7___default()),
    Link: (next_link__WEBPACK_IMPORTED_MODULE_8___default())
};
const PostPage = ({ source , frontMatter  })=>{
    const customMeta = {
        title: `${frontMatter.title} - Hunter Chang`,
        description: frontMatter.description,
        image: `${_components_Layout__WEBPACK_IMPORTED_MODULE_15__/* .WEBSITE_HOST_URL */ .Y}${frontMatter.image}`,
        date: frontMatter.date,
        type: "article"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        customMeta: customMeta,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mb-3 text-gray-900 dark:text-white",
                    children: frontMatter.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mb-10 text-sm text-gray-500 dark:text-gray-400",
                    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(frontMatter.date), "MMMM dd, yyyy")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "prose dark:prose-dark",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__.MDXRemote, {
                        ...source,
                        components: components
                    })
                })
            ]
        })
    });
};
const getStaticProps = async ({ params  })=>{
    const postFilePath = path__WEBPACK_IMPORTED_MODULE_9___default().join(_utils_mdxUtils__WEBPACK_IMPORTED_MODULE_16__/* .POSTS_PATH */ .j, `${params.slug}.mdx`);
    const source = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(postFilePath);
    const { content , data  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(source);
    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_5__.serialize)(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [
                remark_gfm__WEBPACK_IMPORTED_MODULE_14__["default"]
            ],
            rehypePlugins: [
                rehype_slug__WEBPACK_IMPORTED_MODULE_13__["default"],
                rehype_code_titles__WEBPACK_IMPORTED_MODULE_11__["default"],
                rehype_prism_plus__WEBPACK_IMPORTED_MODULE_12__["default"],
                [
                    rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_10__["default"],
                    {
                        properties: {
                            className: [
                                "anchor"
                            ]
                        }
                    }, 
                ], 
            ],
            format: "mdx"
        },
        scope: data
    });
    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    };
};
const getStaticPaths = async ()=>{
    const paths = _utils_mdxUtils__WEBPACK_IMPORTED_MODULE_16__/* .postFilePaths.map */ .B.map((path)=>path.replace(/\.mdx?$/, ""))// Map the path into the static paths object required by Next.js
    .map((slug)=>({
            params: {
                slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ postFilePaths),
/* harmony export */   "j": () => (/* binding */ POSTS_PATH)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "posts");
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const postFilePaths = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(POSTS_PATH)// Only include md(x) files
.filter((path)=>/\.mdx?$/.test(path));


/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = import("rehype-code-titles");;

/***/ }),

/***/ 483:
/***/ ((module) => {

module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,491], () => (__webpack_exec__(8542)));
module.exports = __webpack_exports__;

})();