"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/componentes/Main.js":
/*!*************************************!*\
  !*** ./src/app/componentes/Main.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.module.css */ \"(app-pages-browser)/./src/app/componentes/components.module.css\");\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [listaProduto, setListaproduto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products/\");\n            const data = await response.json();\n            setListaproduto(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a1, b1)=>a1.title.localeCompare(b1.title));\n        setListaproduto(listAux);\n    };\n    const orderZa = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a1, b1)=>b1.title.localeCompare(a1.title));\n        setListaproduto(listAux);\n    };\n    const orderPriceMm = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderAz,\n                            children: \"Ordenar de A a Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderZa,\n                            children: \"Ordenar de Z a A\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_components_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: listaProduto.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: products.title.slice(0, 16) + \"...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                width: 300,\n                                height: 300,\n                                src: products.image\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"R$ \",\n                                    products.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"R$ \",\n                                    products.description.slice(0, 40) + \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"X4XAGHwvS0OKPVVdnTxAXVx19GM=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDYTtBQUNBO0FBRTdCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGFBQWE7WUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsZ0JBQWdCSTtRQUNsQjtRQUNBSDtJQUNGLEdBQ0EsRUFBRTtJQUVGLE1BQU1LLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlSO1NBQWEsQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLElBQUVDLEtBQzFDRCxHQUFFRSxLQUFLLENBQUNDLGFBQWEsQ0FBQ0YsR0FBRUMsS0FBSztRQUM3QlgsZ0JBQWdCTztJQUNsQjtJQUNBLE1BQU1NLFVBQVU7UUFDZCxNQUFNTixVQUFVO2VBQUlSO1NBQWEsQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLElBQUVDLEtBQzFDQSxHQUFFQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0gsR0FBRUUsS0FBSztRQUM3QlgsZ0JBQWdCTztJQUNsQjtJQUVBLE1BQU1PLGVBQWU7UUFDbkIsTUFBTVAsVUFBVTtlQUFJUjtTQUFhLENBQUNTLElBQUksQ0FBRUMsQ0FBQUEsR0FBRUMsQ0FBQUE7SUFDNUM7SUFJRixxQkFDRTs7MEJBQ0EsOERBQUNLOzBCQUNDLDRFQUFDQTs7c0NBQ0MsOERBQUNDOzRCQUFPQyxTQUFVWDtzQ0FBVTs7Ozs7O3NDQUM1Qiw4REFBQ1U7NEJBQU9DLFNBQVVKO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHaEMsOERBQUNLO2dCQUFLQyxXQUFXdEIsb0VBQVc7MEJBQ3pCRSxhQUFhcUIsR0FBRyxDQUFDLENBQUNDLHlCQUNqQiw4REFBQ047d0JBQUlJLFdBQVd0QixvRUFBVzs7MENBQ3pCLDhEQUFDMEI7MENBQ0VGLFNBQVNWLEtBQUssQ0FBQ2EsS0FBSyxDQUFDLEdBQUcsTUFBSTs7Ozs7OzBDQUUvQiw4REFBQzlCLGtEQUFLQTtnQ0FDTitCLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLEtBQUtOLFNBQVNPLEtBQUs7Ozs7OzswQ0FFbkIsOERBQUNMOztvQ0FBRTtvQ0FDR0YsU0FBU1EsS0FBSzs7Ozs7OzswQ0FFcEIsOERBQUNOOztvQ0FBRTtvQ0FDR0YsU0FBU1MsV0FBVyxDQUFDTixLQUFLLENBQUMsR0FBRyxNQUFJOzs7Ozs7Ozt1QkFiUkgsU0FBU1UsRUFBRTs7Ozs7Ozs7Ozs7O0FBb0JyRDtHQTNEd0JqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudGVzL01haW4uanM/MmUwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IEltYWdlIGZyb20gIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb21wb25lbnRzLm1vZHVsZS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCBbbGlzdGFQcm9kdXRvLCBzZXRMaXN0YXByb2R1dG9dID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0TGlzdGFwcm9kdXRvKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGdldFByb2R1Y3QoKVxyXG4gICAgfSwgXHJcbiAgICBbXSlcclxuXHJcbiAgICBjb25zdCBvcmRlckF6ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RhUHJvZHV0b10uc29ydCgoYSxiKSA9PlxyXG4gICAgICBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSkpXHJcbiAgICAgIHNldExpc3RhcHJvZHV0byhsaXN0QXV4KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JkZXJaYSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbGlzdEF1eCA9IFsuLi5saXN0YVByb2R1dG9dLnNvcnQoKGEsYikgPT5cclxuICAgICAgYi50aXRsZS5sb2NhbGVDb21wYXJlKGEudGl0bGUpKVxyXG4gICAgICBzZXRMaXN0YXByb2R1dG8obGlzdEF1eClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcmRlclByaWNlTW0gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RBdXggPSBbLi4ubGlzdGFQcm9kdXRvXS5zb3J0KChhLGIpIClcclxuICAgIH1cclxuICBcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17IG9yZGVyQXogfT5PcmRlbmFyIGRlIEEgYSBaPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgb3JkZXJaYSB9Pk9yZGVuYXIgZGUgWiBhIEE8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICB7bGlzdGFQcm9kdXRvLm1hcCgocHJvZHVjdHMpPT4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBrZXk9e3Byb2R1Y3RzLmlkfT4gXHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge3Byb2R1Y3RzLnRpdGxlLnNsaWNlKDAsIDE2KStcIi4uLlwifSBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgIHdpZHRoPXszMDB9IFxyXG4gICAgICAgICAgaGVpZ2h0PXszMDB9IFxyXG4gICAgICAgICAgc3JjPXtwcm9kdWN0cy5pbWFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgUiQge3Byb2R1Y3RzLnByaWNlfSBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBSJCB7cHJvZHVjdHMuZGVzY3JpcHRpb24uc2xpY2UoMCwgNDApK1wiLi4uXCJ9IFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNYWluIiwibGlzdGFQcm9kdXRvIiwic2V0TGlzdGFwcm9kdXRvIiwiZ2V0UHJvZHVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9yZGVyQXoiLCJsaXN0QXV4Iiwic29ydCIsImEiLCJiIiwidGl0bGUiLCJsb2NhbGVDb21wYXJlIiwib3JkZXJaYSIsIm9yZGVyUHJpY2VNbSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIiwiY2xhc3NOYW1lIiwibWFwIiwicHJvZHVjdHMiLCJjYXJkIiwicCIsInNsaWNlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});