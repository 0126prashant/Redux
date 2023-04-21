import { ADD, REDUCE } from "../actionTypes";
import { loadData, saveData } from "../utils/accessLocalStorage";

const initialState = {
   counter: loadData("counter") || 0,
}

export const reducer = (state = initialState,{type,payload})=>{
    // console.log(state)
    switch (type) {
         case ADD :
            saveData("counter",state.counter +payload)
            return {...state,counter:state.counter +payload}
            case REDUCE :
            saveData("counter",state.counter -payload)
            return {...state,counter:state.counter - payload}
        default:
            return state;
    }
}