import { GET_SUCESS, POST_SUCESS, TODO_FAILURE, TODO_REQUEST } from "./actioTypes";

const initialState = {
    todos : [] ,
    isLoading : false,
    isError : false,
}

export const reducer = (state = initialState,{type,payload})=>{
    switch(type){
        case TODO_REQUEST:{
            return {...state,isLoading:true}
        }
   case GET_SUCESS:{
    //    console.log(payload)
       return {...state,isLoading:false , todos:payload}
    }
    case POST_SUCESS:{
        return {...state,isLoading:false , todos:[...state.todos,payload]}
    }
    case TODO_FAILURE:{
        return {...state,isError:true,isLoading:false}
    }
    
    default : return state;
}

} 