



// TODOS

import { GET_TODO_SUCESS, POST_TODO_SUCESS, TODO_FAILURE, TODO_REQUEST } from "../actionTypes"

export const RequestAction = ()=>{
    return {type :TODO_REQUEST }
}
export const todogetSucessAction = (payload)=>{
    // console.log("payload",payload)
    return {type :GET_TODO_SUCESS,payload }
}
export const FailureAction = ()=>{
    return {type :TODO_FAILURE }
}


export const todoPostSucessAction = (payload)=>{
    // console.log("payload",payload)
    return {type :POST_TODO_SUCESS,payload }
}
