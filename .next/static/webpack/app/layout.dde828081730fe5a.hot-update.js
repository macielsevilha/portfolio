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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ \"(app-client)/./src/app/components/_ui/Buttons.jsx\");\n\n\nfunction Navbar() {\n    const active = false;\n    const toggle = (e)=>{\n        const brand = \"portfolio-navbar\";\n        e.target.classList.toggle(\"\".concat(brand, \"__active\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"portfolio-navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"portfolio-navbar__icon\",\n                onClick: toggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                    fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex my-2\",\n                id: \"portfolio-navbar__ropdown\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"portfolio-border__none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons__WEBPACK_IMPORTED_MODULE_1__.Links, {\n                            name: \"Contato\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons__WEBPACK_IMPORTED_MODULE_1__.Links, {\n                            name: \"Projetos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL191aS9OYXZiYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFa0M7QUFDM0IsU0FBU0MsU0FBUztJQUVyQixNQUFNQyxTQUFTLEtBQUs7SUFFcEIsTUFBTUMsU0FBUyxDQUFDQyxJQUFNO1FBQ2xCLE1BQU1DLFFBQVE7UUFDWkQsRUFBRUUsTUFBTSxDQUFDQyxTQUFTLENBQUNKLE1BQU0sQ0FBQyxHQUFTLE9BQU5FLE9BQU07SUFFekM7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFJRCxXQUFVO2dCQUF5QkUsU0FBU1I7MEJBQzdDLDRFQUFDUzs7Ozs7Ozs7OzswQkFFTCw4REFBQ0M7Z0JBQUdKLFdBQVU7Z0JBQVlLLElBQUc7O2tDQUN6Qiw4REFBQ0M7d0JBQUdOLFdBQVU7a0NBQ1YsNEVBQUNULDJDQUFLQTs0QkFBQ2dCLE1BQUs7Ozs7Ozs7Ozs7O2tDQUVoQiw4REFBQ0Q7a0NBQ0csNEVBQUNmLDJDQUFLQTs0QkFBQ2dCLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDLENBQUM7S0F6QmVmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9fdWkvTmF2YmFyLmpzeD9lYWM4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBMaW5rcyB9IGZyb20gXCIuL0J1dHRvbnNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuXHJcbiAgICBjb25zdCBhY3RpdmUgPSBmYWxzZVxyXG4gICAgXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJyYW5kID0gJ3BvcnRmb2xpby1uYXZiYXInO1xyXG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShgJHticmFuZH1fX2FjdGl2ZWApO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1uYXZiYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbmF2YmFyX19pY29uXCIgb25DbGljaz17dG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IG15LTJcIiBpZD1cInBvcnRmb2xpby1uYXZiYXJfX3JvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3J0Zm9saW8tYm9yZGVyX19ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtzIG5hbWU9XCJDb250YXRvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtzIG5hbWU9XCJQcm9qZXRvc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkxpbmtzIiwiTmF2YmFyIiwiYWN0aXZlIiwidG9nZ2xlIiwiZSIsImJyYW5kIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsInNwYW4iLCJ1bCIsImlkIiwibGkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/_ui/Navbar.jsx\n"));

/***/ })

});