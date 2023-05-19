"use strict";
(() => {
var exports = {};
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 6198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
let client;
let clientPromise;
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ }),

/***/ 7646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ webhooks_stripe)
});

;// CONCATENATED MODULE: external "micro-cors"
const external_micro_cors_namespaceObject = require("micro-cors");
var external_micro_cors_default = /*#__PURE__*/__webpack_require__.n(external_micro_cors_namespaceObject);
// EXTERNAL MODULE: external "stripe"
var external_stripe_ = __webpack_require__(8174);
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_);
;// CONCATENATED MODULE: external "@webdeveducation/next-verify-stripe"
const next_verify_stripe_namespaceObject = require("@webdeveducation/next-verify-stripe");
var next_verify_stripe_default = /*#__PURE__*/__webpack_require__.n(next_verify_stripe_namespaceObject);
// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(6198);
;// CONCATENATED MODULE: ./pages/api/webhooks/stripe.js




const cors = external_micro_cors_default()({
    allowMethods: [
        "POST",
        "HEAD"
    ]
});
const config = {
    api: {
        bodyParser: false
    }
};
const stripe = external_stripe_default()(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const handler = async (req, res)=>{
    if (req.method === "POST") {
        let event;
        try {
            event = await next_verify_stripe_default()({
                req,
                stripe,
                endpointSecret
            });
        } catch (e) {
            console.log("ERROR: ", e);
        }
        switch(event.type){
            case "payment_intent.succeeded":
                {
                    const client = await mongodb/* default */.Z;
                    const db = client.db("BlogStandard");
                    const paymentIntent = event.data.object;
                    const auth0Id = paymentIntent.metadata.sub;
                    console.log("AUTH 0 ID: ", paymentIntent);
                    const userProfile = await db.collection("users").updateOne({
                        auth0Id
                    }, {
                        $inc: {
                            availableTokens: 10
                        },
                        $setOnInsert: {
                            auth0Id
                        }
                    }, {
                        upsert: true
                    });
                }
            default:
                console.log("UNHANDLED EVENT: ", event.type);
        }
        res.status(200).json({
            received: true
        });
    }
};
/* harmony default export */ const webhooks_stripe = (cors(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7646));
module.exports = __webpack_exports__;

})();