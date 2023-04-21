import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginFailureAction, loginRequestAction, loginSucessAction } from '../redux/Authentication/action'

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const   dispatch = useDispatch();

  // eve.holt@reqres.in
  const handleLogin = ()=>{
    dispatch(loginRequestAction())
    const userData = {
      email,
      password,
    }
    
    
    axios.post("https://reqres.in/api/login",userData)
    .then((res)=>{
      dispatch(loginSucessAction(res.data))
      console.log(res.data);
    })
    
     .catch((err)=>{
      // console.log("error")
      dispatch(loginFailureAction())
     })
  }
  return (
    <div>
        <h1>Login</h1>
        <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login