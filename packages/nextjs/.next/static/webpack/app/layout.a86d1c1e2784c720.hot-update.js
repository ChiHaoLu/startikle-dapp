"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"db82d2bced07\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2U4MTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkYjgyZDJiY2VkMDdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_CurrencyDollarIcon_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=CurrencyDollarIcon,MagnifyingGlassIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CurrencyDollarIcon_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=CurrencyDollarIcon,MagnifyingGlassIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js\");\n/* harmony import */ var _barrel_optimize_names_HeartIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=HeartIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/HeartIcon.js\");\n/* harmony import */ var _components_SwitchTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~~/components/SwitchTheme */ \"(app-pages-browser)/./components/SwitchTheme.tsx\");\n/* harmony import */ var _hooks_scaffold_stark_useTargetNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~~/hooks/scaffold-stark/useTargetNetwork */ \"(app-pages-browser)/./hooks/scaffold-stark/useTargetNetwork.ts\");\n/* harmony import */ var _services_store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~~/services/store/store */ \"(app-pages-browser)/./services/store/store.ts\");\n/* harmony import */ var _starknet_react_chains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @starknet-react/chains */ \"(app-pages-browser)/./node_modules/@starknet-react/chains/dist/index.js\");\n/* harmony import */ var _components_scaffold_stark_Faucet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~~/components/scaffold-stark/Faucet */ \"(app-pages-browser)/./components/scaffold-stark/Faucet.tsx\");\n/* harmony import */ var _utils_scaffold_stark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~~/utils/scaffold-stark */ \"(app-pages-browser)/./utils/scaffold-stark/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n/**\n * Site footer\n */ const Footer = ()=>{\n    _s();\n    const nativeCurrencyPrice = (0,_services_store_store__WEBPACK_IMPORTED_MODULE_5__.useGlobalState)((state)=>state.nativeCurrencyPrice);\n    const { targetNetwork } = (0,_hooks_scaffold_stark_useTargetNetwork__WEBPACK_IMPORTED_MODULE_4__.useTargetNetwork)();\n    const isLocalNetwork = targetNetwork.id === _starknet_react_chains__WEBPACK_IMPORTED_MODULE_6__.devnet.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-0 py-5 px-1 mb-11 lg:mb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col md:flex-row gap-2 pointer-events-auto\",\n                            children: [\n                                nativeCurrencyPrice > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"btn btn-primary btn-sm font-normal gap-1 cursor-auto\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CurrencyDollarIcon_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                className: \"h-4 w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: nativeCurrencyPrice\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined),\n                                isLocalNetwork && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_scaffold_stark_Faucet__WEBPACK_IMPORTED_MODULE_7__.Faucet, {}, void 0, false, {\n                                            fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: (0,_utils_scaffold_stark__WEBPACK_IMPORTED_MODULE_8__.getBlockExplorerLink)(targetNetwork),\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            passHref: true,\n                                            className: \"btn btn-primary btn-sm font-normal gap-1\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CurrencyDollarIcon_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                    className: \"h-4 w-4\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Block Explorer\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SwitchTheme__WEBPACK_IMPORTED_MODULE_3__.SwitchTheme, {\n                            className: \"pointer-events-auto \".concat(isLocalNetwork ? \"self-end md:self-auto\" : \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"menu menu-horizontal w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center gap-2 text-sm w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://github.com/ChiHaoLu/starticle\",\n                                    target: \"_blank\",\n                                    rel: \"noreferrer\",\n                                    className: \"link\",\n                                    children: \"Github\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\xb7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center items-center gap-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"m-0 text-center\",\n                                    children: [\n                                        \"Author with \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HeartIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            className: \"inline-block h-4 w-4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        \" by\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chihaolu/Desktop/project/starticle/starticle/packages/nextjs/components/Footer.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Footer, \"JM9o3Hd4Ah/zb/m+nZqCec3YX7I=\", false, function() {\n    return [\n        _services_store_store__WEBPACK_IMPORTED_MODULE_5__.useGlobalState,\n        _hooks_scaffold_stark_useTargetNetwork__WEBPACK_IMPORTED_MODULE_4__.useTargetNetwork\n    ];\n});\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFLUTtBQUNtQjtBQUNBO0FBRW9CO0FBQ25CO0FBQ1Q7QUFDYTtBQUNFO0FBRS9EOztDQUVDLEdBQ00sTUFBTVcsU0FBUzs7SUFDcEIsTUFBTUMsc0JBQXNCTCxxRUFBY0EsQ0FDeEMsQ0FBQ00sUUFBVUEsTUFBTUQsbUJBQW1CO0lBRXRDLE1BQU0sRUFBRUUsYUFBYSxFQUFFLEdBQUdSLHdGQUFnQkE7SUFDMUMsTUFBTVMsaUJBQWlCRCxjQUFjRSxFQUFFLEtBQUtSLDBEQUFNQSxDQUFDUSxFQUFFO0lBRXJELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7MEJBQ0MsNEVBQUNBO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNaTixzQkFBc0IsbUJBQ3JCLDhEQUFDSzs4Q0FDQyw0RUFBQ0E7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDaEIsZ0lBQWtCQTtnREFBQ2dCLFdBQVU7Ozs7OzswREFDOUIsOERBQUNDOzBEQUFNUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBSVpHLGdDQUNDOztzREFDRSw4REFBQ04scUVBQU1BOzs7OztzREFDUCw4REFBQ1IsaURBQUlBOzRDQUNIbUIsTUFBTVYsMkVBQW9CQSxDQUFDSTs0Q0FDM0JPLFFBQVE7NENBQ1JDLEtBQUs7NENBQ0xDLFFBQVE7NENBQ1JMLFdBQVU7OzhEQUVWLDhEQUFDZixpSUFBbUJBO29EQUFDZSxXQUFVOzs7Ozs7OERBQy9CLDhEQUFDQzs4REFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS2QsOERBQUNkLGdFQUFXQTs0QkFDVmEsV0FBVyx1QkFFVixPQURDSCxpQkFBaUIsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbkQsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDTTtvQkFBR04sV0FBVTs4QkFDWiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ087b0NBQ0NMLE1BQUs7b0NBQ0xDLFFBQU87b0NBQ1BDLEtBQUk7b0NBQ0pKLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7OzBDQUlILDhEQUFDQzswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDRjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1E7b0NBQUVSLFdBQVU7O3dDQUFrQjtzREFDakIsOERBQUNkLG9HQUFTQTs0Q0FBQ2MsV0FBVTs7Ozs7O3dDQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExRSxFQUFFO0dBbkVXUDs7UUFDaUJKLGlFQUFjQTtRQUdoQkQsb0ZBQWdCQTs7O0tBSi9CSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci50c3g/YTc5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7XG4gIEN1cnJlbmN5RG9sbGFySWNvbixcbiAgTWFnbmlmeWluZ0dsYXNzSWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IHsgSGVhcnRJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IHsgU3dpdGNoVGhlbWUgfSBmcm9tIFwifn4vY29tcG9uZW50cy9Td2l0Y2hUaGVtZVwiO1xuaW1wb3J0IHsgQnVpZGxHdWlkbExvZ28gfSBmcm9tIFwifn4vY29tcG9uZW50cy9hc3NldHMvQnVpZGxHdWlkbExvZ29cIjtcbmltcG9ydCB7IHVzZVRhcmdldE5ldHdvcmsgfSBmcm9tIFwifn4vaG9va3Mvc2NhZmZvbGQtc3RhcmsvdXNlVGFyZ2V0TmV0d29ya1wiO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tIFwifn4vc2VydmljZXMvc3RvcmUvc3RvcmVcIjtcbmltcG9ydCB7IGRldm5ldCB9IGZyb20gXCJAc3RhcmtuZXQtcmVhY3QvY2hhaW5zXCI7XG5pbXBvcnQgeyBGYXVjZXQgfSBmcm9tIFwifn4vY29tcG9uZW50cy9zY2FmZm9sZC1zdGFyay9GYXVjZXRcIjtcbmltcG9ydCB7IGdldEJsb2NrRXhwbG9yZXJMaW5rIH0gZnJvbSBcIn5+L3V0aWxzL3NjYWZmb2xkLXN0YXJrXCI7XG5cbi8qKlxuICogU2l0ZSBmb290ZXJcbiAqL1xuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgbmF0aXZlQ3VycmVuY3lQcmljZSA9IHVzZUdsb2JhbFN0YXRlKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUubmF0aXZlQ3VycmVuY3lQcmljZSxcbiAgKTtcbiAgY29uc3QgeyB0YXJnZXROZXR3b3JrIH0gPSB1c2VUYXJnZXROZXR3b3JrKCk7XG4gIGNvbnN0IGlzTG9jYWxOZXR3b3JrID0gdGFyZ2V0TmV0d29yay5pZCA9PT0gZGV2bmV0LmlkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC0wIHB5LTUgcHgtMSBtYi0xMSBsZzptYi0wXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgei0xMCBwLTQgYm90dG9tLTAgbGVmdC0wIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTIgcG9pbnRlci1ldmVudHMtYXV0b1wiPlxuICAgICAgICAgICAge25hdGl2ZUN1cnJlbmN5UHJpY2UgPiAwICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc20gZm9udC1ub3JtYWwgZ2FwLTEgY3Vyc29yLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeURvbGxhckljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bmF0aXZlQ3VycmVuY3lQcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtpc0xvY2FsTmV0d29yayAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEZhdWNldCAvPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPXtnZXRCbG9ja0V4cGxvcmVyTGluayh0YXJnZXROZXR3b3JrKX1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cbiAgICAgICAgICAgICAgICAgIHJlbD17XCJub29wZW5lciBub3JlZmVycmVyXCJ9XG4gICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBmb250LW5vcm1hbCBnYXAtMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1hZ25pZnlpbmdHbGFzc0ljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5CbG9jayBFeHBsb3Jlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U3dpdGNoVGhlbWVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHBvaW50ZXItZXZlbnRzLWF1dG8gJHtcbiAgICAgICAgICAgICAgaXNMb2NhbE5ldHdvcmsgPyBcInNlbGYtZW5kIG1kOnNlbGYtYXV0b1wiIDogXCJcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51IG1lbnUtaG9yaXpvbnRhbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DaGlIYW9MdS9zdGFydGljbGVcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHaXRodWJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgQXV0aG9yIHdpdGggPEhlYXJ0SWNvbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC00IHctNFwiIC8+IGJ5XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkN1cnJlbmN5RG9sbGFySWNvbiIsIk1hZ25pZnlpbmdHbGFzc0ljb24iLCJIZWFydEljb24iLCJTd2l0Y2hUaGVtZSIsInVzZVRhcmdldE5ldHdvcmsiLCJ1c2VHbG9iYWxTdGF0ZSIsImRldm5ldCIsIkZhdWNldCIsImdldEJsb2NrRXhwbG9yZXJMaW5rIiwiRm9vdGVyIiwibmF0aXZlQ3VycmVuY3lQcmljZSIsInN0YXRlIiwidGFyZ2V0TmV0d29yayIsImlzTG9jYWxOZXR3b3JrIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInBhc3NIcmVmIiwidWwiLCJhIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Footer.tsx\n"));

/***/ })

});