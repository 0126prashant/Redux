import { reducer } from "./Reducer";    
const { legacy_createStore } = require("redux");

const initialState={
    counter : 0,
    todos :[]
}
export const  store = legacy_createStore(reducer,initialState)
