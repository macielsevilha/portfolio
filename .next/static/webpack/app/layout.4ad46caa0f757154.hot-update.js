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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ \"(app-client)/./src/app/components/_ui/Buttons.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        console.log(fetch(menuRef, {\n            cache: \"force-cache\"\n        }));\n    });\n    const toggle = (e)=>{\n        const brand = \"portfolio-navbar\";\n        const active = e.target.classList.toggle(\"\".concat(brand, \"__active\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"portfolio-navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"portfolio-navbar__icon\",\n                onClick: toggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                    fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex my-2\",\n                id: \"portfolio-navbar__ropdown\",\n                ref: menuRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"portfolio-border__none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons__WEBPACK_IMPORTED_MODULE_2__.Links, {\n                            name: \"Contato\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons__WEBPACK_IMPORTED_MODULE_2__.Links, {\n                            name: \"Projetos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\github\\\\portfolio\\\\src\\\\app\\\\components\\\\_ui\\\\Navbar.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Navbar, \"UQPEdrMndW4nJ1Hlp23pBjfKDLg=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL191aS9OYXZiYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFK0Q7QUFDN0I7QUFDM0IsU0FBU0ssU0FBUzs7SUFDckIsTUFBTUMsVUFBVUosNkNBQU1BO0lBQ3RCLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUE7SUFFaENGLHNEQUFlQSxDQUFDLElBQU07UUFFbEJRLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTUwsU0FBUztZQUFDTSxPQUFPO1FBQWE7SUFDcEQ7SUFNQSxNQUFNQyxTQUFTLENBQUNDLElBQU07UUFDbEIsTUFBTUMsUUFBUTtRQUNkLE1BQU1DLFNBQVNGLEVBQUVHLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDTCxNQUFNLENBQUMsR0FBUyxPQUFORSxPQUFNO0lBS3REO0lBRUEscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBSUQsV0FBVTtnQkFBeUJFLFNBQVNUOzBCQUM3Qyw0RUFBQ1U7Ozs7Ozs7Ozs7MEJBRUwsOERBQUNDO2dCQUFHSixXQUFVO2dCQUFZSyxJQUFHO2dCQUE0QkMsS0FBS3BCOztrQ0FDMUQsOERBQUNxQjt3QkFBR1AsV0FBVTtrQ0FDViw0RUFBQ2hCLDJDQUFLQTs0QkFBQ3dCLE1BQUs7Ozs7Ozs7Ozs7O2tDQUVoQiw4REFBQ0Q7a0NBQ0csNEVBQUN2QiwyQ0FBS0E7NEJBQUN3QixNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQyxDQUFDO0dBckNldkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL191aS9OYXZiYXIuanN4P2VhYzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmtzIH0gZnJvbSBcIi4vQnV0dG9uc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgbWVudVJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW21lbnUsIHNldE1lbnVdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZmV0Y2gobWVudVJlZiwge2NhY2hlOiAnZm9yY2UtY2FjaGUnfSkpXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgdG9nZ2xlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBicmFuZCA9ICdwb3J0Zm9saW8tbmF2YmFyJztcclxuICAgICAgICBjb25zdCBhY3RpdmUgPSBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKGAke2JyYW5kfV9fYWN0aXZlYCk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1uYXZiYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tbmF2YmFyX19pY29uXCIgb25DbGljaz17dG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IG15LTJcIiBpZD1cInBvcnRmb2xpby1uYXZiYXJfX3JvcGRvd25cIiByZWY9e21lbnVSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcnRmb2xpby1ib3JkZXJfX25vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua3MgbmFtZT1cIkNvbnRhdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua3MgbmFtZT1cIlByb2pldG9zXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMaW5rcyIsIk5hdmJhciIsIm1lbnVSZWYiLCJtZW51Iiwic2V0TWVudSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImNhY2hlIiwidG9nZ2xlIiwiZSIsImJyYW5kIiwiYWN0aXZlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsInNwYW4iLCJ1bCIsImlkIiwicmVmIiwibGkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/_ui/Navbar.jsx\n"));

/***/ })

});