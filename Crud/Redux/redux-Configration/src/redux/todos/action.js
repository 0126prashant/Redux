import axios from "axios";
import { FailureAction, RequestAction, todoPostSucessAction, todogetSucessAction } from "./actionTypes";


// export const TODO_REQUEST = "TODO_REQUEST";
// export const GET_TODO_SUCESS = "GET_TODO_SUCESS";
// export const TODO_FAILURE = "TODO_FAILURE";


// export const POST_TODO_SUCESS = "POST_TODO_SUCESS";


// todo input
export const getPost = (title,dispatch)=>{
    dispatch(RequestAction())
    const newTodo={
      title,
      status:false
    }
    axios.post("http://localhost:8080/todos",newTodo)
    .then((res)=>{
      dispatch(todoPostSucessAction(res.data))
    })
    .catch((err)=>{
      console.log(err)
      dispatch(FailureAction())
    })
  }

//   todo
export const fetchData = (dispatch)=>{
    dispatch(RequestAction())
    axios.get("http://localhost:8080/todos")
    .then((res)=> dispatch(todogetSucessAction(res.data)))
    
    .catch((err)=>{
      console.log("errror")
    dispatch(FailureAction())})
  }
