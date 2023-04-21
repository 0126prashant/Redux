import React, { useState } from 'react'
// import axios from "axios";
import {useDispatch} from "react-redux"
// import { FailureAction, RequestAction, todoPostSucessAction } from '../redux/actionTypes';
import { getPost } from '../redux/action';

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