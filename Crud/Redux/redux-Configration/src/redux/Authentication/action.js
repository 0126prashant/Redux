// import { LOGIN_FAILURE, LOGIN_REQUSET, LOGIN_SUCESS } from "./actionTypes"

import { LOGIN_FAILURE, LOGIN_REQUSET, LOGIN_SUCESS } from "../actionTypes"


export const loginSucessAction = (payload)=>{
    return {type : LOGIN_SUCESS,payload}
}
export const loginFailureAction = ()=>{
    return {type : LOGIN_FAILURE}
    
}
export const loginRequestAction = ()=>{
    return {type : LOGIN_REQUSET}
    

}