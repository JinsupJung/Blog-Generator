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
exports.id = "pages/api/getPosts";
exports.ids = ["pages/api/getPosts"];
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

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXVEO0FBQ3pFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFFbkMsSUFBSUc7QUFDSixJQUFJQztBQUVKLElBQUlOLElBQXlCLEVBQWU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNPLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSCxTQUFTLElBQUlOLGdEQUFXQSxDQUFDSztRQUN6QkcsT0FBT0MsbUJBQW1CLEdBQUdILE9BQU9JLE9BQU87SUFDN0MsQ0FBQztJQUNESCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW9wZW5haS1zdGFydGVyLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKTtcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/getPosts.js":
/*!*******************************!*\
  !*** ./pages/api/getPosts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.withApiAuthRequired)(async function handler(req, res) {\n    try {\n        const { user: { sub  }  } = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getSession)(req, res);\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"BlogStandard\");\n        const userProfile = await db.collection(\"users\").findOne({\n            auth0Id: sub\n        });\n        const { lastPostDate , getNewerPosts  } = req.body;\n        const posts = await db.collection(\"posts\").find({\n            userId: userProfile._id,\n            created: {\n                [getNewerPosts ? \"$gt\" : \"$lt\"]: new Date(lastPostDate)\n            }\n        }).limit(getNewerPosts ? 0 : 5).sort({\n            created: -1\n        }).toArray();\n        res.status(200).json({\n            posts\n        });\n        return;\n    } catch (e) {}\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzRTtBQUN4QjtBQUU5QyxpRUFBZUMsd0VBQW1CQSxDQUFDLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2xFLElBQUk7UUFDRixNQUFNLEVBQ0pDLE1BQU0sRUFBRUMsSUFBRyxFQUFFLEdBQ2QsR0FBRyxNQUFNUCwrREFBVUEsQ0FBQ0ksS0FBS0M7UUFDMUIsTUFBTUcsU0FBUyxNQUFNTixvREFBYUE7UUFDbEMsTUFBTU8sS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1FBQ3JCLE1BQU1DLGNBQWMsTUFBTUQsR0FBR0UsVUFBVSxDQUFDLFNBQVNDLE9BQU8sQ0FBQztZQUN2REMsU0FBU047UUFDWDtRQUVBLE1BQU0sRUFBRU8sYUFBWSxFQUFFQyxjQUFhLEVBQUUsR0FBR1gsSUFBSVksSUFBSTtRQUVoRCxNQUFNQyxRQUFRLE1BQU1SLEdBQ2pCRSxVQUFVLENBQUMsU0FDWE8sSUFBSSxDQUFDO1lBQ0pDLFFBQVFULFlBQVlVLEdBQUc7WUFDdkJDLFNBQVM7Z0JBQUUsQ0FBQ04sZ0JBQWdCLFFBQVEsS0FBSyxDQUFDLEVBQUUsSUFBSU8sS0FBS1I7WUFBYztRQUNyRSxHQUNDUyxLQUFLLENBQUNSLGdCQUFnQixJQUFJLENBQUMsRUFDM0JTLElBQUksQ0FBQztZQUFFSCxTQUFTLENBQUM7UUFBRSxHQUNuQkksT0FBTztRQUVWcEIsSUFBSXFCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVY7UUFBTTtRQUM3QjtJQUNGLEVBQUUsT0FBT1csR0FBRyxDQUFDO0FBQ2YsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW9wZW5haS1zdGFydGVyLy4vcGFnZXMvYXBpL2dldFBvc3RzLmpzP2Q0ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgd2l0aEFwaUF1dGhSZXF1aXJlZCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vbGliL21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBpQXV0aFJlcXVpcmVkKGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyOiB7IHN1YiB9LFxuICAgIH0gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcSwgcmVzKTtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCdCbG9nU3RhbmRhcmQnKTtcbiAgICBjb25zdCB1c2VyUHJvZmlsZSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZmluZE9uZSh7XG4gICAgICBhdXRoMElkOiBzdWIsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGxhc3RQb3N0RGF0ZSwgZ2V0TmV3ZXJQb3N0cyB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbigncG9zdHMnKVxuICAgICAgLmZpbmQoe1xuICAgICAgICB1c2VySWQ6IHVzZXJQcm9maWxlLl9pZCxcbiAgICAgICAgY3JlYXRlZDogeyBbZ2V0TmV3ZXJQb3N0cyA/ICckZ3QnIDogJyRsdCddOiBuZXcgRGF0ZShsYXN0UG9zdERhdGUpIH0sXG4gICAgICB9KVxuICAgICAgLmxpbWl0KGdldE5ld2VyUG9zdHMgPyAwIDogNSlcbiAgICAgIC5zb3J0KHsgY3JlYXRlZDogLTEgfSlcbiAgICAgIC50b0FycmF5KCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHBvc3RzIH0pO1xuICAgIHJldHVybjtcbiAgfSBjYXRjaCAoZSkge31cbn0pO1xuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJ3aXRoQXBpQXV0aFJlcXVpcmVkIiwiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VyIiwic3ViIiwiY2xpZW50IiwiZGIiLCJ1c2VyUHJvZmlsZSIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiYXV0aDBJZCIsImxhc3RQb3N0RGF0ZSIsImdldE5ld2VyUG9zdHMiLCJib2R5IiwicG9zdHMiLCJmaW5kIiwidXNlcklkIiwiX2lkIiwiY3JlYXRlZCIsIkRhdGUiLCJsaW1pdCIsInNvcnQiLCJ0b0FycmF5Iiwic3RhdHVzIiwianNvbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getPosts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getPosts.js"));
module.exports = __webpack_exports__;

})();