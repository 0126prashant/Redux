import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {  todoFailuretAction, todoRequestAction, todoSucessAction } from '../Redux/action';
import TodoInput from './TodoInput';
import { getTodos } from '../Redux/action';

function TodoList() {
    const todos = useSelector((store) => store.todos)
    const dispatch = useDispatch();

    

    useEffect(()=>{
        dispatch(getTodos)
        // getTodos(dispatch)
    },[]);


  return (
    <>
        <h1>Todo App</h1>
        <TodoInput/>
        {
            todos.length>0 && todos.map((ele)=>{
                return <div key={ele.id}>
                    <p>{ele.title} -- {ele.status ? "true" : "false"}</p>
                </div>
            })
        }
        </>
  )
}

export default TodoList