
import { LOGIN_FAILURE, LOGIN_REQUSET, LOGIN_SUCESS } from "../actionTypes"

const initialState = {
   isAuth : false,
   token : "",
   isLoading : false,
   isError : false,
}

export const reducer = (state = initialState,{type,payload})=>{
    // console.log(state)
    switch (type) {
         case LOGIN_REQUSET :
            return {...state,isLoading:true}
            
            case LOGIN_SUCESS :
                return {...state,isLoading:false,isAuth : true,token:payload}
                
        case LOGIN_FAILURE :
         return {...state,isError:true,isLoading:false}

        default:
            return state;
    }
}