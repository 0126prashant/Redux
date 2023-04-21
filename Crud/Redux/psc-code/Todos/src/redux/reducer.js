import { ADD, GET_TODO_SUCESS, POST_TODO_SUCESS, REDUCE, TODO_FAILURE, TODO_REQUEST } from "./action";

export const reducer = (state,{type,payload})=>{
    // console.log(state)
    switch (type) {
         case ADD :
            return {...state,counter:state.counter +payload}
         case REDUCE :
            return {...state,counter:state.counter - payload}
         case TODO_REQUEST :
            return {...state,isLoading:true}
         case GET_TODO_SUCESS :
            return {...state,isLoading:false,
                todos:[...payload]}
         case TODO_FAILURE :
            return {...state,isLoading:false,isError:true}



         case POST_TODO_SUCESS :
            return {...state,isLoading:false,
                todos:[...state.todos,payload]}
    
        default:
            return state;
    }
}