"use strict";
exports.id = 307;
exports.ids = [307];
exports.modules = {

/***/ 9307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "o": () => (/* binding */ PostsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const PostsContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsContext);
function postsReducer(state, action) {
    switch(action.type){
        case "addPosts":
            {
                const newPosts = [
                    ...state
                ];
                action.posts.forEach((post)=>{
                    const exists = newPosts.find((p)=>p._id === post._id);
                    if (!exists) {
                        newPosts.push(post);
                    }
                });
                return newPosts;
            }
        case "deletePost":
            {
                const newPosts = [];
                state.forEach((post)=>{
                    if (post._id !== action.postId) {
                        newPosts.push(post);
                    }
                });
                return newPosts;
            }
        default:
            return state;
    }
}
const PostsProvider = ({ children  })=>{
    const [posts, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(postsReducer, []);
    const [noMorePosts, setNoMorePosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const deletePost = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((postId)=>{
        dispatch({
            type: "deletePost",
            postId
        });
    }, []);
    const setPostsFromSSR = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((postsFromSSR = [])=>{
        dispatch({
            type: "addPosts",
            posts: postsFromSSR
        });
    }, []);
    const getPosts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ({ lastPostDate , getNewerPosts =false  })=>{
        const result = await fetch(`/api/getPosts`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                lastPostDate,
                getNewerPosts
            })
        });
        const json = await result.json();
        const postsResult = json.posts || [];
        if (postsResult.length < 5) {
            setNoMorePosts(true);
        }
        dispatch({
            type: "addPosts",
            posts: postsResult
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostsContext.Provider, {
        value: {
            posts,
            setPostsFromSSR,
            getPosts,
            noMorePosts,
            deletePost
        },
        children: children
    });
};


/***/ })

};
;