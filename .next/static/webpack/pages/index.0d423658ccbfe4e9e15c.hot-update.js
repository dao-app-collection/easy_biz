"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/QtyList/QtyList.tsx":
/*!****************************************!*\
  !*** ./components/QtyList/QtyList.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_QtyList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/QtyList.module.scss */ \"./styles/QtyList.module.scss\");\n/* harmony import */ var _styles_QtyList_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_QtyList_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _QtyListRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QtyListRow */ \"./components/QtyList/QtyListRow.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/samuelwags/Documents/gauche-ltd/easy-biz/components/QtyList/QtyList.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar QtyList = function QtyList(_ref) {\n  var data = _ref.data;\n\n  var mapRows = function mapRows() {\n    return data.map(function (row) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_QtyListRow__WEBPACK_IMPORTED_MODULE_0__.default, {\n        data: row\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 20\n      }, _this);\n    });\n  };\n\n  var sumRow = function sumRow() {\n    var sum = data.reduce(function (total, current) {\n      return total += current.qty;\n    }, 0);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_QtyList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sumRow),\n      children: sum\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_styles_QtyList_module_scss__WEBPACK_IMPORTED_MODULE_2___default().qtyList),\n    children: [sumRow(), mapRows()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = QtyList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QtyList);\n\nvar _c;\n\n$RefreshReg$(_c, \"QtyList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F0eUxpc3QvUXR5TGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQ0E7OztBQU1BLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTBCO0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3Qjs7QUFFdEMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixXQUFPRCxJQUFJLENBQUNFLEdBQUwsQ0FBVSxVQUFBQyxHQUFHLEVBQUk7QUFDcEIsMEJBQU8sOERBQUMsZ0RBQUQ7QUFBWSxZQUFJLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRk0sQ0FBUDtBQUdILEdBSkQ7O0FBTUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixRQUFJQyxHQUFHLEdBQUdMLElBQUksQ0FBQ00sTUFBTCxDQUFhLFVBQUNDLEtBQUQsRUFBUUMsT0FBUjtBQUFBLGFBQW9CRCxLQUFLLElBQUlDLE9BQU8sQ0FBQ0MsR0FBckM7QUFBQSxLQUFiLEVBQXVELENBQXZELENBQVY7QUFDQSx3QkFDSTtBQUFLLGVBQVMsRUFBRVosMkVBQWhCO0FBQUEsZ0JBQ0tRO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBS0gsR0FQRDs7QUFTQSxzQkFDSTtBQUFLLGFBQVMsRUFBRVIsNEVBQWhCO0FBQUEsZUFDS08sTUFBTSxFQURYLEVBRUtILE9BQU8sRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBdkJEOztLQUFNRjtBQXlCTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F0eUxpc3QvUXR5TGlzdC50c3g/NTgxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpV29ya0NodW5rLCBmYWtlV29ya0NodW5rIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Xb3JrQ2h1bmsnO1xuaW1wb3J0IHsgYXJyT2YgfSBmcm9tICcuLi8uLi91dGlscy9hcnJheXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvUXR5TGlzdC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUXR5TGlzdFJvdyBmcm9tICcuL1F0eUxpc3RSb3cnO1xuXG5pbnRlcmZhY2UgUXR5TGlzdFByb3BzIHtcbiAgICBkYXRhOiBpV29ya0NodW5rW11cbn1cblxuY29uc3QgUXR5TGlzdCA9ICh7ZGF0YX06IFF0eUxpc3RQcm9wcykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1hcFJvd3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLm1hcCggcm93ID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8UXR5TGlzdFJvdyBkYXRhPXtyb3d9IC8+XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3VtUm93ID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3VtID0gZGF0YS5yZWR1Y2UoICh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwgKz0gY3VycmVudC5xdHksIDApO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1Sb3d9PlxuICAgICAgICAgICAgICAgIHtzdW19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF0eUxpc3R9PlxuICAgICAgICAgICAge3N1bVJvdygpfVxuICAgICAgICAgICAge21hcFJvd3MoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdHlMaXN0Il0sIm5hbWVzIjpbInN0eWxlcyIsIlF0eUxpc3RSb3ciLCJRdHlMaXN0IiwiZGF0YSIsIm1hcFJvd3MiLCJtYXAiLCJyb3ciLCJzdW1Sb3ciLCJzdW0iLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnQiLCJxdHkiLCJxdHlMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QtyList/QtyList.tsx\n");

/***/ })

});