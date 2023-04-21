import { POST_PRODUCT_SUCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes"


const initState = {
    isLoading :false,
    isError : false,
    products : [],
}

export const reducer = (state = initState,{type,payload})=>{
  switch (type) {
    case PRODUCT_REQUEST:{
        return {...state,isLoading:true}
    }
    case POST_PRODUCT_SUCESS:{
        return {...state,isLoading:false,products:payload}
    }
   
    case PRODUCT_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
        
  
    default:
        return state;
  }
}