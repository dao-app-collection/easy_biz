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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Table.module.scss */ \"./styles/Table.module.scss\");\n/* harmony import */ var _styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/samuelwags/Documents/gauche-ltd/easy-biz/components/Table/Table.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar defaultTable = {\n  rows: [{\n    id: \"defaultId\",\n    index: 0,\n    cells: [{\n      columnID: \"defaultColumn\",\n      value: \"one\"\n    }]\n  }],\n  columns: [{\n    id: \"defaultColumn\",\n    title: \"No Data\",\n    index: 0\n  }],\n  id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n  title: \"Default Table\"\n};\n\nvar Table = function Table(_ref) {\n  var _ref$data = _ref.data,\n      data = _ref$data === void 0 ? defaultTable : _ref$data;\n\n  var mapRows = function mapRows() {\n    return data.columns.sort(function (a, b) {\n      return a.index - b.index;\n    }).map(function (column) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    });\n  };\n\n  var mapCells = function mapCells(cells) {\n    return cells.map(function (cell) {\n      /*#__PURE__*/\n      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cell),\n        children: cell.value\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, _this);\n    });\n  };\n\n  var mapHead = function mapHead() {\n    return data.columns.sort().map(function (column) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cell),\n        children: column.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default().table),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default().head),\n      children: mapHead()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Table_module_scss__WEBPACK_IMPORTED_MODULE_2___default().data),\n      children: mapRows()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\nvar _c;\n\n$RefreshReg$(_c, \"Table\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhYmxlL1RhYmxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTs7O0FBT0EsSUFBTUcsWUFBb0IsR0FBRztBQUN6QkMsRUFBQUEsSUFBSSxFQUFFLENBQUM7QUFDSEMsSUFBQUEsRUFBRSxFQUFFLFdBREQ7QUFFSEMsSUFBQUEsS0FBSyxFQUFFLENBRko7QUFHSEMsSUFBQUEsS0FBSyxFQUFFLENBQUM7QUFDSkMsTUFBQUEsUUFBUSxFQUFFLGVBRE47QUFFSkMsTUFBQUEsS0FBSyxFQUFFO0FBRkgsS0FBRDtBQUhKLEdBQUQsQ0FEbUI7QUFTekJDLEVBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ05MLElBQUFBLEVBQUUsRUFBRSxlQURFO0FBRU5NLElBQUFBLEtBQUssRUFBRSxTQUZEO0FBR05MLElBQUFBLEtBQUssRUFBRTtBQUhELEdBQUQsQ0FUZ0I7QUFjekJELEVBQUFBLEVBQUUsRUFBRUgsd0NBQUksRUFkaUI7QUFlekJTLEVBQUFBLEtBQUssRUFBRTtBQWZrQixDQUE3Qjs7QUFtQkEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBd0M7QUFBQSx1QkFBckNDLElBQXFDO0FBQUEsTUFBckNBLElBQXFDLDBCQUE5QlYsWUFBOEI7O0FBRWxELE1BQU1XLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFFbEIsV0FBT0QsSUFBSSxDQUFDSCxPQUFMLENBQWFLLElBQWIsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBUUQsQ0FBQyxDQUFDVixLQUFGLEdBQVVXLENBQUMsQ0FBQ1gsS0FBcEI7QUFBQSxLQUFsQixFQUE2Q1ksR0FBN0MsQ0FBa0QsVUFBQUMsTUFBTSxFQUFJO0FBQy9ELDBCQUNJLDZJQURKO0FBS0gsS0FOTSxDQUFQO0FBT0gsR0FURDs7QUFXQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDYixLQUFELEVBQW9CO0FBQ2pDLFdBQU9BLEtBQUssQ0FBQ1csR0FBTixDQUFXLFVBQUFHLElBQUksRUFBSTtBQUN0QjtBQUFBO0FBQUssaUJBQVMsRUFBRXJCLHVFQUFoQjtBQUFBLGtCQUE4QnFCLElBQUksQ0FBQ1o7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNILEtBRk0sQ0FBUDtBQUdILEdBSkQ7O0FBTUEsTUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixXQUFPVCxJQUFJLENBQUNILE9BQUwsQ0FBYUssSUFBYixHQUFvQkcsR0FBcEIsQ0FBeUIsVUFBQUMsTUFBTSxFQUFJO0FBQ3RDLDBCQUNJO0FBQUssaUJBQVMsRUFBRW5CLHVFQUFoQjtBQUFBLGtCQUE4Qm1CLE1BQU0sQ0FBQ1I7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsS0FKTSxDQUFQO0FBS0gsR0FORDs7QUFRQSxzQkFDSTtBQUFLLGFBQVMsRUFBRVgsd0VBQWhCO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS2EsSUFBSSxDQUFDRjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFFWCx1RUFBaEI7QUFBQSxnQkFDS3NCLE9BQU87QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFLSTtBQUFLLGVBQVMsRUFBRXRCLHVFQUFoQjtBQUFBLGdCQUNLYyxPQUFPO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBV0gsQ0F0Q0Q7O0tBQU1GO0FBd0NOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFibGUvVGFibGUudHN4PzU2ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvVGFibGUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgaVRhYmxlLCBpQ2VsbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvVGFibGUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgaW5kZXhTb3J0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXJyYXlzJztcblxuaW50ZXJmYWNlIFRhYmxlUHJvcHMge1xuICAgIGRhdGE/OiBpVGFibGVcbn1cblxuY29uc3QgZGVmYXVsdFRhYmxlOiBpVGFibGUgPSB7XG4gICAgcm93czogW3tcbiAgICAgICAgaWQ6IFwiZGVmYXVsdElkXCIsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBjZWxsczogW3tcbiAgICAgICAgICAgIGNvbHVtbklEOiBcImRlZmF1bHRDb2x1bW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBcIm9uZVwiXG4gICAgICAgIH1dXG4gICAgfV0sXG4gICAgY29sdW1uczogW3tcbiAgICAgICAgaWQ6IFwiZGVmYXVsdENvbHVtblwiLFxuICAgICAgICB0aXRsZTogXCJObyBEYXRhXCIsXG4gICAgICAgIGluZGV4OiAwXG4gICAgfV0sXG4gICAgaWQ6IHV1aWQoKSxcbiAgICB0aXRsZTogXCJEZWZhdWx0IFRhYmxlXCJcbn1cblxuXG5jb25zdCBUYWJsZSA9ICgge2RhdGEgPSBkZWZhdWx0VGFibGV9OiBUYWJsZVByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBtYXBSb3dzID0gKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBkYXRhLmNvbHVtbnMuc29ydCgoYSwgYik9PmEuaW5kZXggLSBiLmluZGV4KS5tYXAoIGNvbHVtbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtYXBDZWxscyA9IChjZWxsczogaUNlbGxbXSkgPT4ge1xuICAgICAgICByZXR1cm4gY2VsbHMubWFwKCBjZWxsID0+IHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0+e2NlbGwudmFsdWV9PC9kaXY+XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcEhlYWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLmNvbHVtbnMuc29ydCgpLm1hcCggY29sdW1uID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsfT57Y29sdW1uLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH1cbiBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cbiAgICAgICAgICAgICAgICB7bWFwSGVhZCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGF9PlxuICAgICAgICAgICAgICAgIHttYXBSb3dzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTsiXSwibmFtZXMiOlsic3R5bGVzIiwidjQiLCJ1dWlkIiwiZGVmYXVsdFRhYmxlIiwicm93cyIsImlkIiwiaW5kZXgiLCJjZWxscyIsImNvbHVtbklEIiwidmFsdWUiLCJjb2x1bW5zIiwidGl0bGUiLCJUYWJsZSIsImRhdGEiLCJtYXBSb3dzIiwic29ydCIsImEiLCJiIiwibWFwIiwiY29sdW1uIiwibWFwQ2VsbHMiLCJjZWxsIiwibWFwSGVhZCIsInRhYmxlIiwiaGVhZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Table/Table.tsx\n");

/***/ })

});