
import thunk from "redux-thunk";
import { reducer } from "../Redux/reducer";
import { applyMiddleware, legacy_createStore } from "redux";

// const myMiddleware = (store) => (next) => (action) =>{
//     // store => reduc store
//     // next => dispatch
//     // Action => action is coming from user
//     if(typeof action==="function"){
//         return action(next)
//     }
//     return next(action)
// }

export const store = legacy_createStore(reducer,applyMiddleware(thunk)) 