import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "../actionTypes"


export const addLogin =(payload) => (dispatch)=>{
    dispatch({type : LOGIN_REQUEST})
    axios.post(`https://reqres.in/api/login`,payload)
    .then((res)=>{
        console.log(res.data.token);
        dispatch({type : LOGIN_SUCESS,payload})
        
    })
    .catch((err)=>{

        dispatch({type : LOGIN_FAILURE})
    })
}