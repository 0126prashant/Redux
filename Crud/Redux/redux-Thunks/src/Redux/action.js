import axios from "axios"
import {  GET_SUCESS, POST_SUCESS, TODO_FAILURE, TODO_REQUEST } from "./actioTypes"

export const todoRequestAction = ()=>{
    return {type:TODO_REQUEST}
}
export const todoSucessAction = (payload)=>{
    return {type:GET_SUCESS,payload}
}
export const todoFailuretAction = ()=>{
    return {type:TODO_FAILURE}
}
export const posttAction = (payload)=>{
    return {type: POST_SUCESS,payload}
}

//post Data
export const postData = (title) => (dispatch) =>{
   
// export function postData(title,dispatch){
    dispatch(todoRequestAction())
    const newTodo = {
      title,
      status : false
    }
   axios.post(`http://localhost:8080/todos`,newTodo)
   .then((res) => {
    dispatch(posttAction(res.data))
   } )
   .catch((err=>{
   dispatch(todoFailuretAction())
   }))
  }

//   get Todos

export const getTodos = (dispatch)=>{
    dispatch(todoRequestAction())
    axios.get(`http://localhost:8080/todos`)
    .then((res)=>dispatch(todoSucessAction(res.data)))

    .catch((err)=>{
        dispatch(todoFailuretAction())
        console.log("error")
    })
}