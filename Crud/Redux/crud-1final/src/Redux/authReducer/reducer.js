import { GET_PRODUCT_REQUEST, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "../actionTypes";

const initState = {
    isLoading : "",
    isError : "",
    isAuth : false,
    token:""
}


export const loginfunc =(state=initState,{type,payload})=>{
switch (type) {
    case LOGIN_REQUEST:{
        return {...state,isLoading:true}
    };

    case LOGIN_SUCESS:{
        return {...state,isLoading:false,token : payload,isAuth:true}
    };
    case LOGIN_FAILURE:{
        return {...state,isLoading:false,isError:true}
    };

    default:
        return state ;
}
}