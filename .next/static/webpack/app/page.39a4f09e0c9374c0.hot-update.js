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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/app/componentes/Spinner.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.module.css */ \"(app-pages-browser)/./src/app/componentes/components.module.css\");\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Main() {\n    _s();\n    const [listaProduto, setListaProduto] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [listComplete, setListComplete] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [textSearch, setTextSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const response = await fetch(\"https://fakestoreapi.com/products/\");\n            const data = await response.json();\n            setListaProduto(data);\n            setListComplete(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setListaProduto(listAux);\n    };\n    const orderZa = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>b.title.localeCompare(a.title));\n        setListaProduto(listAux);\n    };\n    const orderPriceMm = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>a.price - b.price);\n        setListaProduto(listAux);\n    };\n    const orderPricemM = ()=>{\n        const listAux = [\n            ...listaProduto\n        ].sort((a, b)=>b.price - a.price);\n        setListaProduto(listAux);\n    };\n    const search = (text)=>{\n        setTextSearch(text);\n        if (textSearch.trim() == \"\") {\n            setListaProduto(listComplete);\n            return;\n        }\n        const newList = listaProduto.filter((product)=>product.title.toUpperCase().includes(textSearch.toUpperCase()));\n        setListComplete(newList);\n    };\n    if (listComplete[0] == null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_components_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 61,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n            lineNumber: 60,\n            columnNumber: 9\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderAz,\n                            children: \"Ordenar de A a Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderZa,\n                            children: \"Ordenar de Z a A\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPriceMm,\n                            children: \"Ordenar Maior pro Menor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPricemM,\n                            children: \"Ordenar Menor pro Maior\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: textSearch,\n                            placeholder: \"Pesquisar produto\",\n                            onChange: (event)=>search(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_components_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: listaProduto.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: products.title.slice(0, 16) + \"...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                width: 300,\n                                height: 300,\n                                src: products.image\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"R$ \",\n                                    products.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"R$ \",\n                                    products.description.slice(0, 40) + \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jppeg_nl9d74j\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\IF\\\\PTAC_17_05\\\\shop\\\\src\\\\app\\\\componentes\\\\Main.js\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"aNOUi7EJIIR3ue02wgExlIfjwk4=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50ZXMvTWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ0M7QUFDWTtBQUNBO0FBRTdCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLGFBQWE7WUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ1QsZ0JBQWdCUTtZQUNoQk4sZ0JBQWdCTTtRQUNsQjtRQUNBSDtJQUNGLEdBQ0EsRUFBRTtJQUVGLE1BQU1LLFVBQVU7UUFDZCxNQUFNQyxVQUFVO2VBQUlaO1NBQWEsQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQzFDRCxFQUFFRSxLQUFLLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsS0FBSztRQUM3QmYsZ0JBQWdCVztJQUNsQjtJQUNBLE1BQU1NLFVBQVU7UUFDZCxNQUFNTixVQUFVO2VBQUlaO1NBQWEsQ0FBQ2EsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQzFDQSxFQUFFQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0gsRUFBRUUsS0FBSztRQUM3QmYsZ0JBQWdCVztJQUNsQjtJQUVBLE1BQU1PLGVBQWU7UUFDbkIsTUFBTVAsVUFBVTtlQUFJWjtTQUFhLENBQUNhLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUMxQ0QsRUFBRU0sS0FBSyxHQUFHTCxFQUFFSyxLQUFLO1FBQ2pCbkIsZ0JBQWdCVztJQUNsQjtJQUNBLE1BQU1TLGVBQWU7UUFDbkIsTUFBTVQsVUFBVTtlQUFJWjtTQUFhLENBQUNhLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUMxQ0EsRUFBRUssS0FBSyxHQUFHTixFQUFFTSxLQUFLO1FBQ2pCbkIsZ0JBQWdCVztJQUNsQjtJQUVBLE1BQU1VLFNBQVMsQ0FBQ0M7UUFDZGxCLGNBQWNrQjtRQUVkLElBQUduQixXQUFXb0IsSUFBSSxNQUFNLElBQUc7WUFDekJ2QixnQkFBZ0JDO1lBQ2hCO1FBQ0Y7UUFDQSxNQUFNdUIsVUFBVXpCLGFBQWEwQixNQUFNLENBQUMsQ0FBQ0MsVUFDbkNBLFFBQVFYLEtBQUssQ0FBQ1ksV0FBVyxHQUFHQyxRQUFRLENBQUN6QixXQUFXd0IsV0FBVztRQUU3RHpCLGdCQUFnQnNCO0lBQ2xCO0lBRUEsSUFBR3ZCLFlBQVksQ0FBQyxFQUFFLElBQUksTUFBSztRQUN6QixxQkFDRSw4REFBQzRCO1lBQUtDLFdBQVdqQyxvRUFBVztzQkFDMUIsNEVBQUNILGdEQUFPQTs7Ozs7Ozs7OztJQUlkO0lBRUYscUJBQ0U7OzBCQUNBLDhEQUFDcUM7MEJBQ0MsNEVBQUNBOztzQ0FDQyw4REFBQ0M7NEJBQU9DLFNBQVV2QjtzQ0FBVTs7Ozs7O3NDQUM1Qiw4REFBQ3NCOzRCQUFPQyxTQUFVaEI7c0NBQVU7Ozs7OztzQ0FDNUIsOERBQUNlOzRCQUFPQyxTQUFVZjtzQ0FBZTs7Ozs7O3NDQUNqQyw4REFBQ2M7NEJBQU9DLFNBQVViO3NDQUFlOzs7Ozs7c0NBQ2pDLDhEQUFDYzs0QkFBTUMsTUFBSzs0QkFBT0MsT0FBT2pDOzRCQUFZa0MsYUFBWTs0QkFDbERDLFVBQVUsQ0FBQ0MsUUFBVWxCLE9BQU9rQixNQUFNQyxNQUFNLENBQUNKLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsRCw4REFBQ1A7Z0JBQUtDLFdBQVdqQyxvRUFBVzswQkFDekJFLGFBQWEwQyxHQUFHLENBQUMsQ0FBQ0MseUJBQ2pCLDhEQUFDWDt3QkFBSUQsV0FBV2pDLG9FQUFXOzswQ0FDekIsOERBQUMrQzswQ0FDRUYsU0FBUzNCLEtBQUssQ0FBQzhCLEtBQUssQ0FBQyxHQUFHLE1BQUk7Ozs7OzswQ0FFL0IsOERBQUNwRCxrREFBS0E7Z0NBQ05xRCxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFLTixTQUFTTyxLQUFLOzs7Ozs7MENBRW5CLDhEQUFDTDs7b0NBQUU7b0NBQ0dGLFNBQVN2QixLQUFLOzs7Ozs7OzBDQUVwQiw4REFBQ3lCOztvQ0FBRTtvQ0FDR0YsU0FBU1EsV0FBVyxDQUFDTCxLQUFLLENBQUMsR0FBRyxNQUFJOzs7Ozs7Ozt1QkFiUkgsU0FBU1MsRUFBRTs7Ozs7Ozs7Ozs7O0FBb0JyRDtHQTlGd0JyRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudGVzL01haW4uanM/MmUwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IEltYWdlIGZyb20gIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbXBvbmVudHMubW9kdWxlLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gIGNvbnN0IFtsaXN0YVByb2R1dG8sIHNldExpc3RhUHJvZHV0b10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3RDb21wbGV0ZSwgc2V0TGlzdENvbXBsZXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdGV4dFNlYXJjaCwgc2V0VGV4dFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0TGlzdGFQcm9kdXRvKGRhdGEpO1xyXG4gICAgICAgIHNldExpc3RDb21wbGV0ZShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBnZXRQcm9kdWN0KClcclxuICAgIH0sIFxyXG4gICAgW10pXHJcblxyXG4gICAgY29uc3Qgb3JkZXJBeiA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbGlzdEF1eCA9IFsuLi5saXN0YVByb2R1dG9dLnNvcnQoKGEsYikgPT5cclxuICAgICAgYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpKVxyXG4gICAgICBzZXRMaXN0YVByb2R1dG8obGlzdEF1eClcclxuICAgIH1cclxuICAgIGNvbnN0IG9yZGVyWmEgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RBdXggPSBbLi4ubGlzdGFQcm9kdXRvXS5zb3J0KChhLGIpID0+XHJcbiAgICAgIGIudGl0bGUubG9jYWxlQ29tcGFyZShhLnRpdGxlKSlcclxuICAgICAgc2V0TGlzdGFQcm9kdXRvKGxpc3RBdXgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3JkZXJQcmljZU1tID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RhUHJvZHV0b10uc29ydCgoYSxiKSA9PiBcclxuICAgICAgYS5wcmljZSAtIGIucHJpY2UgKVxyXG4gICAgICBzZXRMaXN0YVByb2R1dG8obGlzdEF1eClcclxuICAgIH1cclxuICAgIGNvbnN0IG9yZGVyUHJpY2VtTSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbGlzdEF1eCA9IFsuLi5saXN0YVByb2R1dG9dLnNvcnQoKGEsYikgPT4gXHJcbiAgICAgIGIucHJpY2UgLSBhLnByaWNlIClcclxuICAgICAgc2V0TGlzdGFQcm9kdXRvKGxpc3RBdXgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoID0gKHRleHQpID0+IHtcclxuICAgICAgc2V0VGV4dFNlYXJjaCh0ZXh0KVxyXG5cclxuICAgICAgaWYodGV4dFNlYXJjaC50cmltKCkgPT0gXCJcIil7XHJcbiAgICAgICAgc2V0TGlzdGFQcm9kdXRvKGxpc3RDb21wbGV0ZSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXdMaXN0ID0gbGlzdGFQcm9kdXRvLmZpbHRlcigocHJvZHVjdCkgPT4gXHJcbiAgICAgICAgcHJvZHVjdC50aXRsZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRleHRTZWFyY2gudG9VcHBlckNhc2UoKSlcclxuICAgICAgKVxyXG4gICAgICBzZXRMaXN0Q29tcGxldGUobmV3TGlzdClcclxuICAgIH1cclxuICBcclxuICAgIGlmKGxpc3RDb21wbGV0ZVswXSA9PSBudWxsKXtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPFNwaW5uZXIvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBvcmRlckF6IH0+T3JkZW5hciBkZSBBIGEgWjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17IG9yZGVyWmEgfT5PcmRlbmFyIGRlIFogYSBBPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgb3JkZXJQcmljZU1tIH0+T3JkZW5hciBNYWlvciBwcm8gTWVub3I8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBvcmRlclByaWNlbU0gfT5PcmRlbmFyIE1lbm9yIHBybyBNYWlvcjwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0ZXh0U2VhcmNofSBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhciBwcm9kdXRvXCIgXHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAge2xpc3RhUHJvZHV0by5tYXAoKHByb2R1Y3RzKT0+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0ga2V5PXtwcm9kdWN0cy5pZH0+IFxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy50aXRsZS5zbGljZSgwLCAxNikrXCIuLi5cIn0gXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICB3aWR0aD17MzAwfSBcclxuICAgICAgICAgIGhlaWdodD17MzAwfSBcclxuICAgICAgICAgIHNyYz17cHJvZHVjdHMuaW1hZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFIkIHtwcm9kdWN0cy5wcmljZX0gXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgUiQge3Byb2R1Y3RzLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDQwKStcIi4uLlwifSBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlNwaW5uZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIk1haW4iLCJsaXN0YVByb2R1dG8iLCJzZXRMaXN0YVByb2R1dG8iLCJsaXN0Q29tcGxldGUiLCJzZXRMaXN0Q29tcGxldGUiLCJ0ZXh0U2VhcmNoIiwic2V0VGV4dFNlYXJjaCIsImdldFByb2R1Y3QiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvcmRlckF6IiwibGlzdEF1eCIsInNvcnQiLCJhIiwiYiIsInRpdGxlIiwibG9jYWxlQ29tcGFyZSIsIm9yZGVyWmEiLCJvcmRlclByaWNlTW0iLCJwcmljZSIsIm9yZGVyUHJpY2VtTSIsInNlYXJjaCIsInRleHQiLCJ0cmltIiwibmV3TGlzdCIsImZpbHRlciIsInByb2R1Y3QiLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm1hcCIsInByb2R1Y3RzIiwiY2FyZCIsInAiLCJzbGljZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componentes/Main.js\n"));

/***/ })

});