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

/***/ "./components/Table/Table.tsx":
/*!************************************!*\
  !*** ./components/Table/Table.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Table.module.scss */ \"./styles/Table.module.scss\");\n/* harmony import */ var _styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/samuelwags/Documents/gauche-ltd/easy-biz/components/Table/Table.tsx\",\n    _this = undefined;\n\n\n\n\nvar defaultTable = {\n  rows: [{\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n    index: 0,\n    cells: []\n  }],\n  columns: [{\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n    title: \"No Data\",\n    index: 0\n  }],\n  id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n  title: \"Default Table\"\n};\n\nvar Table = function Table(_ref) {\n  var _ref$data = _ref.data,\n      data = _ref$data === void 0 ? defaultTable : _ref$data;\n\n  var mapRows = function mapRows() {\n    return data.rows.map(function (row) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default().row),\n        children: \"hi\"\n      }, row.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, _this);\n    });\n  };\n\n  var mapHead = function mapHead() {\n    return;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default().table),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default().head),\n      children: mapHead()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data),\n      children: mapRows()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\nvar _c;\n\n$RefreshReg$(_c, \"Table\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhYmxlL1RhYmxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFNQSxJQUFNRyxZQUFvQixHQUFHO0FBQ3pCQyxFQUFBQSxJQUFJLEVBQUUsQ0FBQztBQUNIQyxJQUFBQSxFQUFFLEVBQUVILHdDQUFJLEVBREw7QUFFSEksSUFBQUEsS0FBSyxFQUFFLENBRko7QUFHSEMsSUFBQUEsS0FBSyxFQUFFO0FBSEosR0FBRCxDQURtQjtBQU16QkMsRUFBQUEsT0FBTyxFQUFFLENBQUM7QUFDTkgsSUFBQUEsRUFBRSxFQUFFSCx3Q0FBSSxFQURGO0FBRU5PLElBQUFBLEtBQUssRUFBRSxTQUZEO0FBR05ILElBQUFBLEtBQUssRUFBRTtBQUhELEdBQUQsQ0FOZ0I7QUFXekJELEVBQUFBLEVBQUUsRUFBRUgsd0NBQUksRUFYaUI7QUFZekJPLEVBQUFBLEtBQUssRUFBRTtBQVprQixDQUE3Qjs7QUFnQkEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBd0M7QUFBQSx1QkFBckNDLElBQXFDO0FBQUEsTUFBckNBLElBQXFDLDBCQUE5QlIsWUFBOEI7O0FBRWxELE1BQU1TLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEIsV0FBT0QsSUFBSSxDQUFDUCxJQUFMLENBQVVTLEdBQVYsQ0FBZSxVQUFBQyxHQUFHLEVBQUk7QUFDekIsMEJBQ0k7QUFBSyxpQkFBUyxFQUFFZCxzRUFBaEI7QUFBQTtBQUFBLFNBQWlDYyxHQUFHLENBQUNULEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILEtBTk0sQ0FBUDtBQU9ILEdBUkQ7O0FBVUEsTUFBTVUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVmLHdFQUFoQjtBQUFBLDRCQUNJO0FBQUEsZ0JBQUtXLElBQUksQ0FBQ0Y7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBRVQsdUVBQWhCO0FBQUEsZ0JBQ0tlLE9BQU87QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFLSTtBQUFLLGVBQVMsRUFBRWYsdUVBQWhCO0FBQUEsZ0JBQ0tZLE9BQU87QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFXSCxDQTNCRDs7S0FBTUY7QUE2Qk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS9UYWJsZS50c3g/NTZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9UYWJsZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBpVGFibGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL1RhYmxlJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcblxuaW50ZXJmYWNlIFRhYmxlUHJvcHMge1xuICAgIGRhdGE/OiBpVGFibGVcbn1cblxuY29uc3QgZGVmYXVsdFRhYmxlOiBpVGFibGUgPSB7XG4gICAgcm93czogW3tcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGNlbGxzOiBbXVxuICAgIH1dLFxuICAgIGNvbHVtbnM6IFt7XG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIHRpdGxlOiBcIk5vIERhdGFcIixcbiAgICAgICAgaW5kZXg6IDBcbiAgICB9XSxcbiAgICBpZDogdXVpZCgpLFxuICAgIHRpdGxlOiBcIkRlZmF1bHQgVGFibGVcIlxufVxuXG5cbmNvbnN0IFRhYmxlID0gKCB7ZGF0YSA9IGRlZmF1bHRUYWJsZX06IFRhYmxlUHJvcHMpID0+IHtcblxuICAgIGNvbnN0IG1hcFJvd3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnJvd3MubWFwKCByb3cgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30ga2V5PXtyb3cuaWR9PlxuICAgICAgICAgICAgICAgICAgICBoaVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH0gXG5cbiAgICBjb25zdCBtYXBIZWFkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gXG4gICAgfVxuIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxuICAgICAgICAgICAgICAgIHttYXBIZWFkKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YX0+XG4gICAgICAgICAgICAgICAge21hcFJvd3MoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ2NCIsInV1aWQiLCJkZWZhdWx0VGFibGUiLCJyb3dzIiwiaWQiLCJpbmRleCIsImNlbGxzIiwiY29sdW1ucyIsInRpdGxlIiwiVGFibGUiLCJkYXRhIiwibWFwUm93cyIsIm1hcCIsInJvdyIsIm1hcEhlYWQiLCJ0YWJsZSIsImhlYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Table/Table.tsx\n");

/***/ })

});