"use strict";
(() => {
var exports = {};
exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 93:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

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

/***/ 2214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generatePost)
});

// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(93);
;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(6198);
;// CONCATENATED MODULE: ./pages/api/generatePost.js



/* harmony default export */ const generatePost = ((0,nextjs_auth0_.withApiAuthRequired)(async function handler(req, res) {
    const { user  } = await (0,nextjs_auth0_.getSession)(req, res);
    const client = await mongodb/* default */.Z;
    const db = client.db("BlogStandard");
    const userProfile = await db.collection("users").findOne({
        auth0Id: user.sub
    });
    if (!userProfile?.availableTokens) {
        res.status(403);
        return;
    }
    const config = new external_openai_namespaceObject.Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new external_openai_namespaceObject.OpenAIApi(config);
    const { topic , keywords  } = req.body;
    if (!topic || !keywords) {
        res.status(422);
        return;
    }
    if (topic.length > 80 || keywords.length > 80) {
        res.status(422);
        return;
    }
    /*const response = await openai.createCompletion({
    model: 'text-davinci-003',
    temperature: 0,
    max_tokens: 3600,
    prompt: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}.
    The content should be formatted in SEO-friendly HTML.
    The response must also include appropriate HTML title and meta description content.
    The return format must be stringified JSON in the following format:
    {
      "postContent": post content here
      "title": title goes here
      "metaDescription": meta description goes here
    }`,
  });*/ const postContentResult = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a blog post generator."
            },
            {
                role: "user",
                content: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}. 
      The response should be formatted in SEO-friendly HTML, 
      limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`
            }
        ],
        temperature: 0
    });
    const postContent = postContentResult.data.choices[0]?.message.content;
    const titleResult = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a blog post generator."
            },
            {
                role: "user",
                content: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}. 
      The response should be formatted in SEO-friendly HTML, 
      limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`
            },
            {
                role: "assistant",
                content: postContent
            },
            {
                role: "user",
                content: "Generate appropriate title tag text for the above blog post"
            }
        ],
        temperature: 0
    });
    const metaDescriptionResult = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a blog post generator."
            },
            {
                role: "user",
                content: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}. 
      The response should be formatted in SEO-friendly HTML, 
      limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`
            },
            {
                role: "assistant",
                content: postContent
            },
            {
                role: "user",
                content: "Generate SEO-friendly meta description content for the above blog post"
            }
        ],
        temperature: 0
    });
    const title = titleResult.data.choices[0]?.message.content;
    const metaDescription = metaDescriptionResult.data.choices[0]?.message.content;
    console.log("POST CONTENT: ", postContent);
    console.log("TITLE: ", title);
    console.log("META DESCRIPTION: ", metaDescription);
    /*await db.collection('users').updateOne(
  {
    auth0Id: user.sub,
  },
  {
    $inc: {
      availableTokens: -1,
    },
  }
);*/ const post = await db.collection("posts").insertOne({
        postContent: postContent || "",
        title: title || "",
        metaDescription: metaDescription || "",
        topic,
        keywords,
        userId: userProfile._id,
        created: new Date()
    });
    res.status(200).json({
        postId: post.insertedId
    });
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2214));
module.exports = __webpack_exports__;

})();