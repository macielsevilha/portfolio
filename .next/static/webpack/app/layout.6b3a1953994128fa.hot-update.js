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

/***/ "(app-client)/./src/app/components/_ui/Navbar.jsx":
/*!*******************************************!*\
  !*** ./src/app/components/_ui/Navbar.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ \"(app-client)/./src/app/components/_ui/Buttons.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const toggle = (e)=>{\n        const brand = \"portfolio-navbar\";\n        e.target.classList.toggle(\"\".concat(brand, \"__active\"));\n        setId(e);\n    };\n    let t = id.target.className.replace(\"__active\", \"__ropdown\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"portfolio-navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"portfolio-navbar__icon\",\n                onClick: toggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                    fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: t\n            }, void 0, false, {\n                fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                lineNumber: 21,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex my-2\",\n                id: \"portfolio-navbar__ropdown\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"portfolio-border__none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons__WEBPACK_IMPORTED_MODULE_2__.Links, {\n                            name: \"Contato\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons__WEBPACK_IMPORTED_MODULE_2__.Links, {\n                            name: \"Projetos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(Navbar, \"hkqVtHCCUaWibjBuaJfUsxUFROc=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL191aS9OYXZiYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFaUM7QUFDQztBQUMzQixTQUFTRSxTQUFTOztJQUNyQixNQUFNLENBQUNDLElBQUlDLE1BQU0sR0FBR0osK0NBQVFBO0lBRTVCLE1BQU1LLFNBQVMsQ0FBQ0MsSUFBTTtRQUNsQixNQUFNQyxRQUFRO1FBQ2RELEVBQUVFLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDSixNQUFNLENBQUMsR0FBUyxPQUFORSxPQUFNO1FBQ25DSCxNQUFNRTtJQUNWO0lBRUEsSUFBSUksSUFBSVAsR0FBR0ssTUFBTSxDQUFDRyxTQUFTLENBQUNDLE9BQU8sQ0FBQyxZQUFZO0lBRWhELHFCQUNJLDhEQUFDQztRQUFJRixXQUFVOzswQkFDWCw4REFBQ0c7Z0JBQUlILFdBQVU7Z0JBQXlCSSxTQUFTVjswQkFDN0MsNEVBQUNXOzs7Ozs7Ozs7OzBCQUVOLDhEQUFDRjtnQkFBSUgsV0FBV0Q7Ozs7OzswQkFDZiw4REFBQ087Z0JBQUdOLFdBQVU7Z0JBQVlSLElBQUc7O2tDQUN6Qiw4REFBQ2U7d0JBQUdQLFdBQVU7a0NBQ1YsNEVBQUNWLDJDQUFLQTs0QkFBQ2tCLE1BQUs7Ozs7Ozs7Ozs7O2tDQUVoQiw4REFBQ0Q7a0NBQ0csNEVBQUNqQiwyQ0FBS0E7NEJBQUNrQixNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQyxDQUFDO0dBM0JlakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL191aS9OYXZiYXIuanN4P2VhYzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmtzIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgpXHJcbiAgICBcclxuICAgIGNvbnN0IHRvZ2dsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnJhbmQgPSAncG9ydGZvbGlvLW5hdmJhcic7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShgJHticmFuZH1fX2FjdGl2ZWApO1xyXG4gICAgICAgIHNldElkKGUpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHQgPSBpZC50YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoJ19fYWN0aXZlJywgJ19fcm9wZG93bicpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1uYXZiYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbmF2YmFyX19pY29uXCIgb25DbGljaz17dG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R9PjwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBteS0yXCIgaWQ9XCJwb3J0Zm9saW8tbmF2YmFyX19yb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWJvcmRlcl9fbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rcyBuYW1lPVwiQ29udGF0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rcyBuYW1lPVwiUHJvamV0b3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmtzIiwiTmF2YmFyIiwiaWQiLCJzZXRJZCIsInRvZ2dsZSIsImUiLCJicmFuZCIsInRhcmdldCIsImNsYXNzTGlzdCIsInQiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwibmF2IiwiZGl2Iiwib25DbGljayIsInNwYW4iLCJ1bCIsImxpIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/_ui/Navbar.jsx\n"));

/***/ })

});