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
exports.id = "pages/api/addTokens";
exports.ids = ["pages/api/addTokens"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXVEO0FBQ3pFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFFbkMsSUFBSUc7QUFDSixJQUFJQztBQUVKLElBQUlOLElBQXlCLEVBQWU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNPLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSCxTQUFTLElBQUlOLGdEQUFXQSxDQUFDSztRQUN6QkcsT0FBT0MsbUJBQW1CLEdBQUdILE9BQU9JLE9BQU87SUFDN0MsQ0FBQztJQUNESCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW9wZW5haS1zdGFydGVyLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKTtcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/addTokens.js":
/*!********************************!*\
  !*** ./pages/api/addTokens.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst stripe = stripe__WEBPACK_IMPORTED_MODULE_2___default()(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    const { user  } = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n    const lineItems = [\n        {\n            price: process.env.STRIPE_PRODUCT_PRICE_ID,\n            quantity: 1\n        }\n    ];\n    const protocol =  true ? \"http://\" : 0;\n    const host = req.headers.host;\n    const checkoutSession = await stripe.checkout.sessions.create({\n        line_items: lineItems,\n        mode: \"payment\",\n        success_url: `${protocol}${host}/success`,\n        payment_intent_data: {\n            metadata: {\n                sub: user.sub\n            }\n        },\n        metadata: {\n            sub: user.sub\n        }\n    });\n    console.log(\"user: \", user);\n    res.status(200).json({\n        session: checkoutSession\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVG9rZW5zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNIO0FBQ2Q7QUFFaEMsTUFBTUcsU0FBU0QsNkNBQVVBLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBRXhDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUcsTUFBTVYsK0RBQVVBLENBQUNRLEtBQUtDO0lBRXZDLE1BQU1FLFlBQVk7UUFDaEI7WUFDRUMsT0FBT1IsUUFBUUMsR0FBRyxDQUFDUSx1QkFBdUI7WUFDMUNDLFVBQVU7UUFDWjtLQUNEO0lBRUQsTUFBTUMsV0FDSlgsS0FBeUIsR0FBZ0IsWUFBWSxDQUFVO0lBQ2pFLE1BQU1ZLE9BQU9SLElBQUlTLE9BQU8sQ0FBQ0QsSUFBSTtJQUU3QixNQUFNRSxrQkFBa0IsTUFBTWYsT0FBT2dCLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7UUFDNURDLFlBQVlYO1FBQ1pZLE1BQU07UUFDTkMsYUFBYSxDQUFDLEVBQUVULFNBQVMsRUFBRUMsS0FBSyxRQUFRLENBQUM7UUFDekNTLHFCQUFxQjtZQUNuQkMsVUFBVTtnQkFDUkMsS0FBS2pCLEtBQUtpQixHQUFHO1lBQ2Y7UUFDRjtRQUNBRCxVQUFVO1lBQ1JDLEtBQUtqQixLQUFLaUIsR0FBRztRQUNmO0lBQ0Y7SUFFQUMsUUFBUUMsR0FBRyxDQUFDLFVBQVVuQjtJQUV0QkQsSUFBSXFCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsU0FBU2Q7SUFBZ0I7QUFDbEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1vcGVuYWktc3RhcnRlci8uL3BhZ2VzL2FwaS9hZGRUb2tlbnMuanM/OTRjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi9saWIvbW9uZ29kYic7XG5pbXBvcnQgc3RyaXBlSW5pdCBmcm9tICdzdHJpcGUnO1xuXG5jb25zdCBzdHJpcGUgPSBzdHJpcGVJbml0KHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IGdldFNlc3Npb24ocmVxLCByZXMpO1xuXG4gIGNvbnN0IGxpbmVJdGVtcyA9IFtcbiAgICB7XG4gICAgICBwcmljZTogcHJvY2Vzcy5lbnYuU1RSSVBFX1BST0RVQ1RfUFJJQ0VfSUQsXG4gICAgICBxdWFudGl0eTogMSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHByb3RvY29sID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/ICdodHRwOi8vJyA6ICdodHRwczovLyc7XG4gIGNvbnN0IGhvc3QgPSByZXEuaGVhZGVycy5ob3N0O1xuXG4gIGNvbnN0IGNoZWNrb3V0U2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgIGxpbmVfaXRlbXM6IGxpbmVJdGVtcyxcbiAgICBtb2RlOiAncGF5bWVudCcsXG4gICAgc3VjY2Vzc191cmw6IGAke3Byb3RvY29sfSR7aG9zdH0vc3VjY2Vzc2AsXG4gICAgcGF5bWVudF9pbnRlbnRfZGF0YToge1xuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgc3ViOiB1c2VyLnN1YixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRhZGF0YToge1xuICAgICAgc3ViOiB1c2VyLnN1YixcbiAgICB9LFxuICB9KTtcblxuICBjb25zb2xlLmxvZygndXNlcjogJywgdXNlcik7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uOiBjaGVja291dFNlc3Npb24gfSk7XG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsImNsaWVudFByb21pc2UiLCJzdHJpcGVJbml0Iiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXIiLCJsaW5lSXRlbXMiLCJwcmljZSIsIlNUUklQRV9QUk9EVUNUX1BSSUNFX0lEIiwicXVhbnRpdHkiLCJwcm90b2NvbCIsImhvc3QiLCJoZWFkZXJzIiwiY2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsImxpbmVfaXRlbXMiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJwYXltZW50X2ludGVudF9kYXRhIiwibWV0YWRhdGEiLCJzdWIiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTokens.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addTokens.js"));
module.exports = __webpack_exports__;

})();