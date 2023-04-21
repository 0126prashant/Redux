
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postData } from '../Redux/action';


function TodoInput() {
    const [title,setTitle] = useState("")
    const dispatch = useDispatch();

    const handleClick =()=>{
      // postData(title,dispatch);
      // console.log("hello")
      dispatch(postData(title))
      setTitle("")
    }

  return (
    <>
    <input value={title} type='text' onChange={(e)=>setTitle(e.target.value)}/>
    <button onClick={handleClick}>ADD</button>
    </>
  )
}

export default TodoInput