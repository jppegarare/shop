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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.module.css */ \"(app-pages-browser)/./src/app/componentes/components.module.css\");\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [listaProduto, setListaProduto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [listComplete, setListComplete] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [textSearch, setTextSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products/\");\n            const data = await response.json();\n            setListaProduto(data);\n            setListComplete(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListaProduto(listAux);\n    };\n    const orderZa = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>b.title.localeCompare(a.title));\n        setListaProduto(listAux);\n    };\n    const orderPriceMm = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>a.price - b.price);\n        setListaProduto(listAux);\n    };\n    const orderPricemM = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>b.price - a.price);\n        setListaProduto(listAux);\n    };\n    const search = (text)=>{\n        setTextSearch(text);\n        if (text == \"\") {\n            setListaProduto(listComplete);\n            return;\n        }\n        const newList = listaProduto;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderAz,\n                            children: \"Ordenar de A a Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderZa,\n                            children: \"Ordenar de Z a A\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPriceMm,\n                            children: \"Ordenar Maior pro Menor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPricemM,\n                            children: \"Ordenar Menor pro Maior\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: textSearch,\n                            placeholder: \"Pesquisar produto\",\n                            onChange: (event)=>search(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 58,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_components_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: listaProduto.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: products.title.slice(0, 16) + \"...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                width: 300,\n                                height: 300,\n                                src: products.image\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"R$ \",\n                                    products.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"R$ \",\n                                    products.description.slice(0, 40) + \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"aNOUi7EJIIR3ue02wgExlIfjwk4=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDYTtBQUNBO0FBRTdCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLGFBQWE7WUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ1QsZ0JBQWdCUTtZQUNoQk4sZ0JBQWdCTTtRQUNsQjtRQUNBSDtJQUNGLEdBQ0EsRUFBRTtJQUVGLE1BQU1LLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlaO1NBQWEsQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQzFDRCxFQUFFRSxLQUFLLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsS0FBSztRQUM3QmYsZ0JBQWdCVztJQUNsQjtJQUNBLE1BQU1NLFVBQVU7UUFDZCxNQUFNTixVQUFVO2VBQUlaO1NBQWEsQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQzFDQSxFQUFFQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0gsRUFBRUUsS0FBSztRQUM3QmYsZ0JBQWdCVztJQUNsQjtJQUVBLE1BQU1PLGVBQWU7UUFDbkIsTUFBTVAsVUFBVTtlQUFJWjtTQUFhLENBQUNhLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUMxQ0QsRUFBRU0sS0FBSyxHQUFHTCxFQUFFSyxLQUFLO1FBQ2pCbkIsZ0JBQWdCVztJQUNsQjtJQUNBLE1BQU1TLGVBQWU7UUFDbkIsTUFBTVQsVUFBVTtlQUFJWjtTQUFhLENBQUNhLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUMxQ0EsRUFBRUssS0FBSyxHQUFHTixFQUFFTSxLQUFLO1FBQ2pCbkIsZ0JBQWdCVztJQUNsQjtJQUVBLE1BQU1VLFNBQVMsQ0FBQ0M7UUFDZGxCLGNBQWNrQjtRQUVkLElBQUdBLFFBQVEsSUFBRztZQUNadEIsZ0JBQWdCQztZQUNoQjtRQUNGO1FBQ0EsTUFBTXNCLFVBQVV4QjtJQUNsQjtJQUlGLHFCQUNFOzswQkFDQSw4REFBQ3lCOzBCQUNDLDRFQUFDQTs7c0NBQ0MsOERBQUNDOzRCQUFPQyxTQUFVaEI7c0NBQVU7Ozs7OztzQ0FDNUIsOERBQUNlOzRCQUFPQyxTQUFVVDtzQ0FBVTs7Ozs7O3NDQUM1Qiw4REFBQ1E7NEJBQU9DLFNBQVVSO3NDQUFlOzs7Ozs7c0NBQ2pDLDhEQUFDTzs0QkFBT0MsU0FBVU47c0NBQWU7Ozs7OztzQ0FDakMsOERBQUNPOzRCQUFNQyxNQUFLOzRCQUFPQyxPQUFPMUI7NEJBQVkyQixhQUFZOzRCQUNsREMsVUFBVSxDQUFDQyxRQUFVWCxPQUFPVyxNQUFNQyxNQUFNLENBQUNKLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsRCw4REFBQ0s7Z0JBQUtDLFdBQVd0QyxvRUFBVzswQkFDekJFLGFBQWFxQyxHQUFHLENBQUMsQ0FBQ0MseUJBQ2pCLDhEQUFDYjt3QkFBSVcsV0FBV3RDLG9FQUFXOzswQ0FDekIsOERBQUMwQzswQ0FDRUYsU0FBU3RCLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQyxHQUFHLE1BQUk7Ozs7OzswQ0FFL0IsOERBQUM5QyxrREFBS0E7Z0NBQ04rQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFLTixTQUFTTyxLQUFLOzs7Ozs7MENBRW5CLDhEQUFDTDs7b0NBQUU7b0NBQ0dGLFNBQVNsQixLQUFLOzs7Ozs7OzBDQUVwQiw4REFBQ29COztvQ0FBRTtvQ0FDR0YsU0FBU1EsV0FBVyxDQUFDTCxLQUFLLENBQUMsR0FBRyxNQUFJOzs7Ozs7Ozt1QkFiUkgsU0FBU1MsRUFBRTs7Ozs7Ozs7Ozs7O0FBb0JyRDtHQXBGd0JoRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudGVzL01haW4uanM/MmUwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IEltYWdlIGZyb20gIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb21wb25lbnRzLm1vZHVsZS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCBbbGlzdGFQcm9kdXRvLCBzZXRMaXN0YVByb2R1dG9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0Q29tcGxldGUsIHNldExpc3RDb21wbGV0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RleHRTZWFyY2gsIHNldFRleHRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgZ2V0UHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL1wiKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldExpc3RhUHJvZHV0byhkYXRhKTtcclxuICAgICAgICBzZXRMaXN0Q29tcGxldGUoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgZ2V0UHJvZHVjdCgpXHJcbiAgICB9LCBcclxuICAgIFtdKVxyXG5cclxuICAgIGNvbnN0IG9yZGVyQXogPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RBdXggPSBbLi4ubGlzdGFQcm9kdXRvXS5zb3J0KChhLGIpID0+XHJcbiAgICAgIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKSlcclxuICAgICAgc2V0TGlzdGFQcm9kdXRvKGxpc3RBdXgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmRlclphID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RhUHJvZHV0b10uc29ydCgoYSxiKSA9PlxyXG4gICAgICBiLnRpdGxlLmxvY2FsZUNvbXBhcmUoYS50aXRsZSkpXHJcbiAgICAgIHNldExpc3RhUHJvZHV0byhsaXN0QXV4KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9yZGVyUHJpY2VNbSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbGlzdEF1eCA9IFsuLi5saXN0YVByb2R1dG9dLnNvcnQoKGEsYikgPT4gXHJcbiAgICAgIGEucHJpY2UgLSBiLnByaWNlIClcclxuICAgICAgc2V0TGlzdGFQcm9kdXRvKGxpc3RBdXgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmRlclByaWNlbU0gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RBdXggPSBbLi4ubGlzdGFQcm9kdXRvXS5zb3J0KChhLGIpID0+IFxyXG4gICAgICBiLnByaWNlIC0gYS5wcmljZSApXHJcbiAgICAgIHNldExpc3RhUHJvZHV0byhsaXN0QXV4KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlYXJjaCA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgIHNldFRleHRTZWFyY2godGV4dClcclxuXHJcbiAgICAgIGlmKHRleHQgPT0gXCJcIil7XHJcbiAgICAgICAgc2V0TGlzdGFQcm9kdXRvKGxpc3RDb21wbGV0ZSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXdMaXN0ID0gbGlzdGFQcm9kdXRvXHJcbiAgICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBvcmRlckF6IH0+T3JkZW5hciBkZSBBIGEgWjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17IG9yZGVyWmEgfT5PcmRlbmFyIGRlIFogYSBBPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgb3JkZXJQcmljZU1tIH0+T3JkZW5hciBNYWlvciBwcm8gTWVub3I8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBvcmRlclByaWNlbU0gfT5PcmRlbmFyIE1lbm9yIHBybyBNYWlvcjwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0ZXh0U2VhcmNofSBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhciBwcm9kdXRvXCIgXHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAge2xpc3RhUHJvZHV0by5tYXAoKHByb2R1Y3RzKT0+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0ga2V5PXtwcm9kdWN0cy5pZH0+IFxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy50aXRsZS5zbGljZSgwLCAxNikrXCIuLi5cIn0gXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICB3aWR0aD17MzAwfSBcclxuICAgICAgICAgIGhlaWdodD17MzAwfSBcclxuICAgICAgICAgIHNyYz17cHJvZHVjdHMuaW1hZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFIkIHtwcm9kdWN0cy5wcmljZX0gXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgUiQge3Byb2R1Y3RzLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDQwKStcIi4uLlwifSBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTWFpbiIsImxpc3RhUHJvZHV0byIsInNldExpc3RhUHJvZHV0byIsImxpc3RDb21wbGV0ZSIsInNldExpc3RDb21wbGV0ZSIsInRleHRTZWFyY2giLCJzZXRUZXh0U2VhcmNoIiwiZ2V0UHJvZHVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9yZGVyQXoiLCJsaXN0QXV4Iiwic29ydCIsImEiLCJiIiwidGl0bGUiLCJsb2NhbGVDb21wYXJlIiwib3JkZXJaYSIsIm9yZGVyUHJpY2VNbSIsInByaWNlIiwib3JkZXJQcmljZW1NIiwic2VhcmNoIiwidGV4dCIsIm5ld0xpc3QiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYWluIiwiY2xhc3NOYW1lIiwibWFwIiwicHJvZHVjdHMiLCJjYXJkIiwicCIsInNsaWNlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});