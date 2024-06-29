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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.module.css */ \"(app-pages-browser)/./src/app/componentes/components.module.css\");\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [listaProduto, setListaProduto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [listComplete, setListComplete] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [textSearch, setTextSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products/\");\n            const data = await response.json();\n            setListaProduto(data);\n            setListComplete(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListaProduto(listAux);\n    };\n    const orderZa = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>b.title.localeCompare(a.title));\n        setListaProduto(listAux);\n    };\n    const orderPriceMm = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>a.price - b.price);\n        setListaProduto(listAux);\n    };\n    const orderPricemM = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>b.price - a.price);\n        setListaProduto(listAux);\n    };\n    const search = (text)=>{\n        setTextSearch(text);\n        if (text == \"\") {\n            setListComplete(listComplete);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderAz,\n                            children: \"Ordenar de A a Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderZa,\n                            children: \"Ordenar de Z a A\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPriceMm,\n                            children: \"Ordenar Maior pro Menor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPricemM,\n                            children: \"Ordenar Menor pro Maior\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: textSearch,\n                            placeholder: \"Pesquisar produto\",\n                            onChange: (event)=>search(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 56,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_components_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: listaProduto.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: products.title.slice(0, 16) + \"...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                width: 300,\n                                height: 300,\n                                src: products.image\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"R$ \",\n                                    products.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"R$ \",\n                                    products.description.slice(0, 40) + \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 66,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"aNOUi7EJIIR3ue02wgExlIfjwk4=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDYTtBQUNBO0FBRTdCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLGFBQWE7WUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ1QsZ0JBQWdCUTtZQUNoQk4sZ0JBQWdCTTtRQUNsQjtRQUNBSDtJQUNGLEdBQ0EsRUFBRTtJQUVGLE1BQU1LLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlaO1NBQWEsQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQzFDRCxFQUFFRSxLQUFLLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsS0FBSztRQUM3QmYsZ0JBQWdCVztJQUNsQjtJQUNBLE1BQU1NLFVBQVU7UUFDZCxNQUFNTixVQUFVO2VBQUlaO1NBQWEsQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQzFDQSxFQUFFQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0gsRUFBRUUsS0FBSztRQUM3QmYsZ0JBQWdCVztJQUNsQjtJQUVBLE1BQU1PLGVBQWU7UUFDbkIsTUFBTVAsVUFBVTtlQUFJWjtTQUFhLENBQUNhLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUMxQ0QsRUFBRU0sS0FBSyxHQUFHTCxFQUFFSyxLQUFLO1FBQ2pCbkIsZ0JBQWdCVztJQUNsQjtJQUNBLE1BQU1TLGVBQWU7UUFDbkIsTUFBTVQsVUFBVTtlQUFJWjtTQUFhLENBQUNhLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUMxQ0EsRUFBRUssS0FBSyxHQUFHTixFQUFFTSxLQUFLO1FBQ2pCbkIsZ0JBQWdCVztJQUNsQjtJQUVBLE1BQU1VLFNBQVMsQ0FBQ0M7UUFDZGxCLGNBQWNrQjtRQUVkLElBQUdBLFFBQVEsSUFBRztZQUNacEIsZ0JBQWdCRDtRQUNsQjtJQUNGO0lBSUYscUJBQ0U7OzBCQUNBLDhEQUFDc0I7MEJBQ0MsNEVBQUNBOztzQ0FDQyw4REFBQ0M7NEJBQU9DLFNBQVVmO3NDQUFVOzs7Ozs7c0NBQzVCLDhEQUFDYzs0QkFBT0MsU0FBVVI7c0NBQVU7Ozs7OztzQ0FDNUIsOERBQUNPOzRCQUFPQyxTQUFVUDtzQ0FBZTs7Ozs7O3NDQUNqQyw4REFBQ007NEJBQU9DLFNBQVVMO3NDQUFlOzs7Ozs7c0NBQ2pDLDhEQUFDTTs0QkFBTUMsTUFBSzs0QkFBT0MsT0FBT3pCOzRCQUFZMEIsYUFBWTs0QkFDbERDLFVBQVUsQ0FBQ0MsUUFBVVYsT0FBT1UsTUFBTUMsTUFBTSxDQUFDSixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbEQsOERBQUNLO2dCQUFLQyxXQUFXckMsb0VBQVc7MEJBQ3pCRSxhQUFhb0MsR0FBRyxDQUFDLENBQUNDLHlCQUNqQiw4REFBQ2I7d0JBQUlXLFdBQVdyQyxvRUFBVzs7MENBQ3pCLDhEQUFDeUM7MENBQ0VGLFNBQVNyQixLQUFLLENBQUN3QixLQUFLLENBQUMsR0FBRyxNQUFJOzs7Ozs7MENBRS9CLDhEQUFDN0Msa0RBQUtBO2dDQUNOOEMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkMsS0FBS04sU0FBU08sS0FBSzs7Ozs7OzBDQUVuQiw4REFBQ0w7O29DQUFFO29DQUNHRixTQUFTakIsS0FBSzs7Ozs7OzswQ0FFcEIsOERBQUNtQjs7b0NBQUU7b0NBQ0dGLFNBQVNRLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDLEdBQUcsTUFBSTs7Ozs7Ozs7dUJBYlJILFNBQVNTLEVBQUU7Ozs7Ozs7Ozs7OztBQW9CckQ7R0FsRndCL0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRlcy9NYWluLmpzPzJlMDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29tcG9uZW50cy5tb2R1bGUuY3NzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgW2xpc3RhUHJvZHV0bywgc2V0TGlzdGFQcm9kdXRvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdENvbXBsZXRlLCBzZXRMaXN0Q29tcGxldGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0ZXh0U2VhcmNoLCBzZXRUZXh0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy9cIik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRMaXN0YVByb2R1dG8oZGF0YSk7XHJcbiAgICAgICAgc2V0TGlzdENvbXBsZXRlKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGdldFByb2R1Y3QoKVxyXG4gICAgfSwgXHJcbiAgICBbXSlcclxuXHJcbiAgICBjb25zdCBvcmRlckF6ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RhUHJvZHV0b10uc29ydCgoYSxiKSA9PlxyXG4gICAgICBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSkpXHJcbiAgICAgIHNldExpc3RhUHJvZHV0byhsaXN0QXV4KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JkZXJaYSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbGlzdEF1eCA9IFsuLi5saXN0YVByb2R1dG9dLnNvcnQoKGEsYikgPT5cclxuICAgICAgYi50aXRsZS5sb2NhbGVDb21wYXJlKGEudGl0bGUpKVxyXG4gICAgICBzZXRMaXN0YVByb2R1dG8obGlzdEF1eClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcmRlclByaWNlTW0gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RBdXggPSBbLi4ubGlzdGFQcm9kdXRvXS5zb3J0KChhLGIpID0+IFxyXG4gICAgICBhLnByaWNlIC0gYi5wcmljZSApXHJcbiAgICAgIHNldExpc3RhUHJvZHV0byhsaXN0QXV4KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JkZXJQcmljZW1NID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RhUHJvZHV0b10uc29ydCgoYSxiKSA9PiBcclxuICAgICAgYi5wcmljZSAtIGEucHJpY2UgKVxyXG4gICAgICBzZXRMaXN0YVByb2R1dG8obGlzdEF1eClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWFyY2ggPSAodGV4dCkgPT4ge1xyXG4gICAgICBzZXRUZXh0U2VhcmNoKHRleHQpXHJcblxyXG4gICAgICBpZih0ZXh0ID09IFwiXCIpe1xyXG4gICAgICAgIHNldExpc3RDb21wbGV0ZShsaXN0Q29tcGxldGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17IG9yZGVyQXogfT5PcmRlbmFyIGRlIEEgYSBaPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgb3JkZXJaYSB9Pk9yZGVuYXIgZGUgWiBhIEE8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBvcmRlclByaWNlTW0gfT5PcmRlbmFyIE1haW9yIHBybyBNZW5vcjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17IG9yZGVyUHJpY2VtTSB9Pk9yZGVuYXIgTWVub3IgcHJvIE1haW9yPC9idXR0b24+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RleHRTZWFyY2h9IHBsYWNlaG9sZGVyPVwiUGVzcXVpc2FyIHByb2R1dG9cIiBcclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKSB9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICB7bGlzdGFQcm9kdXRvLm1hcCgocHJvZHVjdHMpPT4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBrZXk9e3Byb2R1Y3RzLmlkfT4gXHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge3Byb2R1Y3RzLnRpdGxlLnNsaWNlKDAsIDE2KStcIi4uLlwifSBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgIHdpZHRoPXszMDB9IFxyXG4gICAgICAgICAgaGVpZ2h0PXszMDB9IFxyXG4gICAgICAgICAgc3JjPXtwcm9kdWN0cy5pbWFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgUiQge3Byb2R1Y3RzLnByaWNlfSBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBSJCB7cHJvZHVjdHMuZGVzY3JpcHRpb24uc2xpY2UoMCwgNDApK1wiLi4uXCJ9IFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNYWluIiwibGlzdGFQcm9kdXRvIiwic2V0TGlzdGFQcm9kdXRvIiwibGlzdENvbXBsZXRlIiwic2V0TGlzdENvbXBsZXRlIiwidGV4dFNlYXJjaCIsInNldFRleHRTZWFyY2giLCJnZXRQcm9kdWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib3JkZXJBeiIsImxpc3RBdXgiLCJzb3J0IiwiYSIsImIiLCJ0aXRsZSIsImxvY2FsZUNvbXBhcmUiLCJvcmRlclphIiwib3JkZXJQcmljZU1tIiwicHJpY2UiLCJvcmRlclByaWNlbU0iLCJzZWFyY2giLCJ0ZXh0IiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibWFpbiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3RzIiwiY2FyZCIsInAiLCJzbGljZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});