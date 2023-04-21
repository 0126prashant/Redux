import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addLogin } from '../Redux/authReducer/action';

export const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  const dispatch = useDispatch()


    

    const handleInput = ()=>{
     const newLogin = {
        email,
        password
      }
     dispatch(addLogin(newLogin)) 
    }

  return (
    <div>
        <label>Email</label>
        <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleInput}>Submit</button>
    </div>
  )
}
