import { GET_TODO_SUCESS, POST_TODO_SUCESS, TODO_FAILURE, TODO_REQUEST } from "../actionTypes"


const initialState = {
    todos : [],
    isLoading :false,
    isError : false
}
export const reducer = (state= initialState,{type,payload})=>{
    // console.log(state)
    switch (type) {
         case TODO_REQUEST :
            return {...state,isLoading:true}
         case GET_TODO_SUCESS :
            return {...state,isLoading:false,todos:[...payload]}
         case TODO_FAILURE :
            return {...state,isLoading:false,isError:true}



         case POST_TODO_SUCESS :
            return {...state,isLoading:false,todos:[...state.todos,payload]}
    
        default:
            return state;
    }
}