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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _walletconnect_sign_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/sign-client */ \"./node_modules/@walletconnect/sign-client/dist/index.es.js\");\n/* harmony import */ var _web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/standalone */ \"./node_modules/@web3modal/standalone/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// 1. Get projectID at https://cloud.walletconnect.com\nif (false) {}\n// 2. Configure web3Modal\nconst web3Modal = new _web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__.Web3Modal({\n    projectId: \"5f6555e0280fe983cec01d84e22bd086\"\n});\nfunction HomePage() {\n    _s();\n    const [signClient, setSignClient] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    // 3. Initialize sign client\n    async function onInitializeSignClient() {\n        const client = await _walletconnect_sign_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init({\n            projectId: \"5f6555e0280fe983cec01d84e22bd086\"\n        });\n        setSignClient(client);\n    }\n    // 4. Initiate connection and pass pairing uri to the modal\n    async function onOpenModal() {\n        if (signClient) {\n            const namespaces = {\n                eip155: {\n                    methods: [\n                        \"eth_sign\"\n                    ],\n                    chains: [\n                        \"eip155:1\"\n                    ],\n                    events: [\n                        \"accountsChanged\"\n                    ]\n                }\n            };\n            const { uri , approval  } = await signClient.connect({\n                requiredNamespaces: namespaces\n            });\n            if (uri) {\n                await web3Modal.openModal({\n                    uri,\n                    standaloneChains: namespaces.eip155.chains\n                });\n                await approval();\n                web3Modal.closeModal();\n            }\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        onInitializeSignClient();\n    }, []);\n    return signClient ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onOpenModal,\n        children: \"Connect Wallet\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\nextjs-standalone\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 42,\n        columnNumber: 23\n    }, this) : \"Initializing...\";\n}\n_s(HomePage, \"Tcz5hGCuZWOi/Es/EhmWKaH9y+U=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNGO0FBQ047QUFHM0Msc0RBQXNEO0FBQ3RELElBQUksS0FBbUMsRUFBRSxFQUV4QztBQUVELHlCQUF5QjtBQUN6QixNQUFNUSxZQUFZLElBQUlQLDREQUFTQSxDQUFDO0lBQUVRLFdBQVdMLGtDQUFrQztBQUFDO0FBRWpFLFNBQVNNLFdBQVc7O0lBQ2pDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBeUJVO0lBRXJFLDRCQUE0QjtJQUM1QixlQUFlQyx5QkFBeUI7UUFDdEMsTUFBTUMsU0FBUyxNQUFNZix1RUFBZSxDQUFDO1lBQUVTLFdBQVdMLGtDQUFrQztRQUFDO1FBQ3JGUSxjQUFjRztJQUNoQjtJQUVBLDJEQUEyRDtJQUMzRCxlQUFlRSxjQUFjO1FBQzNCLElBQUlOLFlBQVk7WUFDZCxNQUFNTyxhQUFhO2dCQUNqQkMsUUFBUTtvQkFBRUMsU0FBUzt3QkFBQztxQkFBVztvQkFBRUMsUUFBUTt3QkFBQztxQkFBVztvQkFBRUMsUUFBUTt3QkFBQztxQkFBa0I7Z0JBQUM7WUFDckY7WUFDQSxNQUFNLEVBQUVDLElBQUcsRUFBRUMsU0FBUSxFQUFFLEdBQUcsTUFBTWIsV0FBV2MsT0FBTyxDQUFDO2dCQUFFQyxvQkFBb0JSO1lBQVc7WUFDcEYsSUFBSUssS0FBSztnQkFDUCxNQUFNZixVQUFVbUIsU0FBUyxDQUFDO29CQUFFSjtvQkFBS0ssa0JBQWtCVixXQUFXQyxNQUFNLENBQUNFLE1BQU07Z0JBQUM7Z0JBQzVFLE1BQU1HO2dCQUNOaEIsVUFBVXFCLFVBQVU7WUFDdEIsQ0FBQztRQUNILENBQUM7SUFDSDtJQUVBM0IsZ0RBQVNBLENBQUMsSUFBTTtRQUNkWTtJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU9ILDJCQUFhLDhEQUFDbUI7UUFBT0MsU0FBU2Q7a0JBQWE7Ozs7O2VBQTBCLGlCQUFpQjtBQUMvRixDQUFDO0dBN0J1QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduQ2xpZW50IGZyb20gJ0B3YWxsZXRjb25uZWN0L3NpZ24tY2xpZW50J1xuaW1wb3J0IHsgV2ViM01vZGFsIH0gZnJvbSAnQHdlYjNtb2RhbC9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5cbi8vIDEuIEdldCBwcm9qZWN0SUQgYXQgaHR0cHM6Ly9jbG91ZC53YWxsZXRjb25uZWN0LmNvbVxuaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEKSB7XG4gIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gcHJvdmlkZSBORVhUX1BVQkxJQ19QUk9KRUNUX0lEIGVudiB2YXJpYWJsZScpXG59XG5cbi8vIDIuIENvbmZpZ3VyZSB3ZWIzTW9kYWxcbmNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoeyBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQgfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtzaWduQ2xpZW50LCBzZXRTaWduQ2xpZW50XSA9IHVzZVN0YXRlPFNpZ25DbGllbnQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcblxuICAvLyAzLiBJbml0aWFsaXplIHNpZ24gY2xpZW50XG4gIGFzeW5jIGZ1bmN0aW9uIG9uSW5pdGlhbGl6ZVNpZ25DbGllbnQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgU2lnbkNsaWVudC5pbml0KHsgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEIH0pXG4gICAgc2V0U2lnbkNsaWVudChjbGllbnQpXG4gIH1cblxuICAvLyA0LiBJbml0aWF0ZSBjb25uZWN0aW9uIGFuZCBwYXNzIHBhaXJpbmcgdXJpIHRvIHRoZSBtb2RhbFxuICBhc3luYyBmdW5jdGlvbiBvbk9wZW5Nb2RhbCgpIHtcbiAgICBpZiAoc2lnbkNsaWVudCkge1xuICAgICAgY29uc3QgbmFtZXNwYWNlcyA9IHtcbiAgICAgICAgZWlwMTU1OiB7IG1ldGhvZHM6IFsnZXRoX3NpZ24nXSwgY2hhaW5zOiBbJ2VpcDE1NToxJ10sIGV2ZW50czogWydhY2NvdW50c0NoYW5nZWQnXSB9XG4gICAgICB9XG4gICAgICBjb25zdCB7IHVyaSwgYXBwcm92YWwgfSA9IGF3YWl0IHNpZ25DbGllbnQuY29ubmVjdCh7IHJlcXVpcmVkTmFtZXNwYWNlczogbmFtZXNwYWNlcyB9KVxuICAgICAgaWYgKHVyaSkge1xuICAgICAgICBhd2FpdCB3ZWIzTW9kYWwub3Blbk1vZGFsKHsgdXJpLCBzdGFuZGFsb25lQ2hhaW5zOiBuYW1lc3BhY2VzLmVpcDE1NS5jaGFpbnMgfSlcbiAgICAgICAgYXdhaXQgYXBwcm92YWwoKVxuICAgICAgICB3ZWIzTW9kYWwuY2xvc2VNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbkluaXRpYWxpemVTaWduQ2xpZW50KClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIHNpZ25DbGllbnQgPyA8YnV0dG9uIG9uQ2xpY2s9e29uT3Blbk1vZGFsfT5Db25uZWN0IFdhbGxldDwvYnV0dG9uPiA6ICdJbml0aWFsaXppbmcuLi4nXG59XG4iXSwibmFtZXMiOlsiU2lnbkNsaWVudCIsIldlYjNNb2RhbCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1BST0pFQ1RfSUQiLCJFcnJvciIsIndlYjNNb2RhbCIsInByb2plY3RJZCIsIkhvbWVQYWdlIiwic2lnbkNsaWVudCIsInNldFNpZ25DbGllbnQiLCJ1bmRlZmluZWQiLCJvbkluaXRpYWxpemVTaWduQ2xpZW50IiwiY2xpZW50IiwiaW5pdCIsIm9uT3Blbk1vZGFsIiwibmFtZXNwYWNlcyIsImVpcDE1NSIsIm1ldGhvZHMiLCJjaGFpbnMiLCJldmVudHMiLCJ1cmkiLCJhcHByb3ZhbCIsImNvbm5lY3QiLCJyZXF1aXJlZE5hbWVzcGFjZXMiLCJvcGVuTW9kYWwiLCJzdGFuZGFsb25lQ2hhaW5zIiwiY2xvc2VNb2RhbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});