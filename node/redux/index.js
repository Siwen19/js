const { createStore, combineReducers } = require('redux');
let isLogin = false;
let posts = [];
const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-posts-status');
// 状态 reducer(纯函数)
function loginReducer(state = isLogin, action) {
    console.log(333)
    switch (action.type) {
        case LOGIN_STATUS:
            // state 上一次的状态
            // state = !state ×
            return !state;          // 返回 新的state，不是修改原来的那个变量
        default:
            return state;
    } 
}
function postsReducer(state = posts, action) {
    switch (action.type) {
        case POSTS_STATUS:
            return action.newPosts;
        default:
            return state;
    }
}
// action: 纯对象({}), type 字段: 区分这个action干啥的，常量，整个应用唯一
const loginAction = {
    type: LOGIN_STATUS,
    a: 1
}
const postAction = {
    type: POSTS_STATUS,
    newPosts: [{ a: 1 }, { a: 2 }]
}
// combineReducers把所有模块集合在一起
const rootReducer = combineReducers({
    login: loginReducer,
    posts: postsReducer
})
// 状态存到 store
// createStore 需要返回值，也调用了loginReducer, postsReducer
const store = createStore(rootReducer);
// mapStateToProps = store.getState
console.log(store);
console.log('now', store.getState());
// action -> reducer

// mapDispatchToprops
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('now', store.getState());
// 去到 loginReducer 、postsReducer