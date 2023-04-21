import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { getPost } from '../redux/todos/action';

function TodoInput() {
  const [title,setTitle] = useState("");
  const dispatch = useDispatch();


  const handleClick = ()=>{
    getPost(title,dispatch)
    setTitle("")
  }
  return (
    <div>
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value) }/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoInput  