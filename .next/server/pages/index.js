"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _walletconnect_sign_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/sign-client */ \"@walletconnect/sign-client\");\n/* harmony import */ var _walletconnect_sign_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_sign_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/standalone */ \"@web3modal/standalone\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__]);\n_web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// 1. Get projectID at https://cloud.walletconnect.com\nif (false) {}\n// 2. Configure web3Modal\nconst web3Modal = new _web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__.Web3Modal({\n    projectId: \"5f6555e0280fe983cec01d84e22bd086\"\n});\nfunction HomePage() {\n    const [signClient, setSignClient] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    // 3. Initialize sign client\n    async function onInitializeSignClient() {\n        const client = await _walletconnect_sign_client__WEBPACK_IMPORTED_MODULE_1___default().init({\n            projectId: \"5f6555e0280fe983cec01d84e22bd086\"\n        });\n        setSignClient(client);\n    }\n    // 4. Initiate connection and pass pairing uri to the modal\n    async function onOpenModal() {\n        if (signClient) {\n            const namespaces = {\n                eip155: {\n                    methods: [\n                        \"eth_sign\"\n                    ],\n                    chains: [\n                        \"eip155:1\"\n                    ],\n                    events: [\n                        \"accountsChanged\"\n                    ]\n                }\n            };\n            const { uri , approval  } = await signClient.connect({\n                requiredNamespaces: namespaces\n            });\n            if (uri) {\n                await web3Modal.openModal({\n                    uri,\n                    standaloneChains: namespaces.eip155.chains\n                });\n                await approval();\n                console.log(signClient);\n                web3Modal.closeModal();\n            }\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        onInitializeSignClient();\n    }, []);\n    return signClient ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onOpenModal,\n        children: \"Connect Wallet\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\nextjs-standalone\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 42,\n        columnNumber: 23\n    }, this) : \"Initializing...\";\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNGO0FBQ047QUFFM0Msc0RBQXNEO0FBQ3RELElBQUksS0FBbUMsRUFBRSxFQUV4QztBQUVELHlCQUF5QjtBQUN6QixNQUFNUSxZQUFZLElBQUlQLDREQUFTQSxDQUFDO0lBQUVRLFdBQVdMLGtDQUFrQztBQUFDO0FBRWpFLFNBQVNNLFdBQVc7SUFDakMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUF5QlU7SUFFckUsNEJBQTRCO0lBQzVCLGVBQWVDLHlCQUF5QjtRQUN0QyxNQUFNQyxTQUFTLE1BQU1mLHNFQUFlLENBQUM7WUFBRVMsV0FBV0wsa0NBQWtDO1FBQUM7UUFDckZRLGNBQWNHO0lBQ2hCO0lBRUEsMkRBQTJEO0lBQzNELGVBQWVFLGNBQWM7UUFDM0IsSUFBSU4sWUFBWTtZQUNkLE1BQU1PLGFBQWE7Z0JBQ2pCQyxRQUFRO29CQUFFQyxTQUFTO3dCQUFDO3FCQUFXO29CQUFFQyxRQUFRO3dCQUFDO3FCQUFXO29CQUFFQyxRQUFRO3dCQUFDO3FCQUFrQjtnQkFBQztZQUNyRjtZQUNBLE1BQU0sRUFBRUMsSUFBRyxFQUFFQyxTQUFRLEVBQUUsR0FBRyxNQUFNYixXQUFXYyxPQUFPLENBQUM7Z0JBQUVDLG9CQUFvQlI7WUFBVztZQUNwRixJQUFJSyxLQUFLO2dCQUNQLE1BQU1mLFVBQVVtQixTQUFTLENBQUM7b0JBQUVKO29CQUFLSyxrQkFBa0JWLFdBQVdDLE1BQU0sQ0FBQ0UsTUFBTTtnQkFBQztnQkFDNUUsTUFBTUc7Z0JBQ05LLFFBQVFDLEdBQUcsQ0FBQ25CO2dCQUNaSCxVQUFVdUIsVUFBVTtZQUN0QixDQUFDO1FBQ0gsQ0FBQztJQUNIO0lBRUE3QixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RZO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FBT0gsMkJBQWEsOERBQUNxQjtRQUFPQyxTQUFTaEI7a0JBQWE7Ozs7O2VBQTBCLGlCQUFpQjtBQUMvRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YW5kYWxvbmUtZXhhbXBsZS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbkNsaWVudCBmcm9tICdAd2FsbGV0Y29ubmVjdC9zaWduLWNsaWVudCdcbmltcG9ydCB7IFdlYjNNb2RhbCB9IGZyb20gJ0B3ZWIzbW9kYWwvc3RhbmRhbG9uZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuLy8gMS4gR2V0IHByb2plY3RJRCBhdCBodHRwczovL2Nsb3VkLndhbGxldGNvbm5lY3QuY29tXG5pZiAoIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBwcm92aWRlIE5FWFRfUFVCTElDX1BST0pFQ1RfSUQgZW52IHZhcmlhYmxlJylcbn1cblxuLy8gMi4gQ29uZmlndXJlIHdlYjNNb2RhbFxuY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCh7IHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW3NpZ25DbGllbnQsIHNldFNpZ25DbGllbnRdID0gdXNlU3RhdGU8U2lnbkNsaWVudCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKVxuXG4gIC8vIDMuIEluaXRpYWxpemUgc2lnbiBjbGllbnRcbiAgYXN5bmMgZnVuY3Rpb24gb25Jbml0aWFsaXplU2lnbkNsaWVudCgpIHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBTaWduQ2xpZW50LmluaXQoeyBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQgfSlcbiAgICBzZXRTaWduQ2xpZW50KGNsaWVudClcbiAgfVxuXG4gIC8vIDQuIEluaXRpYXRlIGNvbm5lY3Rpb24gYW5kIHBhc3MgcGFpcmluZyB1cmkgdG8gdGhlIG1vZGFsXG4gIGFzeW5jIGZ1bmN0aW9uIG9uT3Blbk1vZGFsKCkge1xuICAgIGlmIChzaWduQ2xpZW50KSB7XG4gICAgICBjb25zdCBuYW1lc3BhY2VzID0ge1xuICAgICAgICBlaXAxNTU6IHsgbWV0aG9kczogWydldGhfc2lnbiddLCBjaGFpbnM6IFsnZWlwMTU1OjEnXSwgZXZlbnRzOiBbJ2FjY291bnRzQ2hhbmdlZCddIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgdXJpLCBhcHByb3ZhbCB9ID0gYXdhaXQgc2lnbkNsaWVudC5jb25uZWN0KHsgcmVxdWlyZWROYW1lc3BhY2VzOiBuYW1lc3BhY2VzIH0pXG4gICAgICBpZiAodXJpKSB7XG4gICAgICAgIGF3YWl0IHdlYjNNb2RhbC5vcGVuTW9kYWwoeyB1cmksIHN0YW5kYWxvbmVDaGFpbnM6IG5hbWVzcGFjZXMuZWlwMTU1LmNoYWlucyB9KVxuICAgICAgICBhd2FpdCBhcHByb3ZhbCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHNpZ25DbGllbnQpXG4gICAgICAgIHdlYjNNb2RhbC5jbG9zZU1vZGFsKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9uSW5pdGlhbGl6ZVNpZ25DbGllbnQoKVxuICB9LCBbXSlcblxuICByZXR1cm4gc2lnbkNsaWVudCA/IDxidXR0b24gb25DbGljaz17b25PcGVuTW9kYWx9PkNvbm5lY3QgV2FsbGV0PC9idXR0b24+IDogJ0luaXRpYWxpemluZy4uLidcbn1cbiJdLCJuYW1lcyI6WyJTaWduQ2xpZW50IiwiV2ViM01vZGFsIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCIsIkVycm9yIiwid2ViM01vZGFsIiwicHJvamVjdElkIiwiSG9tZVBhZ2UiLCJzaWduQ2xpZW50Iiwic2V0U2lnbkNsaWVudCIsInVuZGVmaW5lZCIsIm9uSW5pdGlhbGl6ZVNpZ25DbGllbnQiLCJjbGllbnQiLCJpbml0Iiwib25PcGVuTW9kYWwiLCJuYW1lc3BhY2VzIiwiZWlwMTU1IiwibWV0aG9kcyIsImNoYWlucyIsImV2ZW50cyIsInVyaSIsImFwcHJvdmFsIiwiY29ubmVjdCIsInJlcXVpcmVkTmFtZXNwYWNlcyIsIm9wZW5Nb2RhbCIsInN0YW5kYWxvbmVDaGFpbnMiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VNb2RhbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@walletconnect/sign-client":
/*!*********************************************!*\
  !*** external "@walletconnect/sign-client" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@walletconnect/sign-client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/standalone":
/*!****************************************!*\
  !*** external "@web3modal/standalone" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@web3modal/standalone");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();