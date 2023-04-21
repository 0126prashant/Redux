import React, { useState } from 'react'
import { TodoItem } from './TodoItem'

const initstate = [
    {id:1 , title : "task-1" , status: true},
    {id:2 , title : "task-2" , status: true},
    {id:3 , title : "task-3" , status: true},
    {id:4 , title : "task-4" , status: true},
]

export const Todo = () => {

    const [todos,setTodos] = useState(initstate)
    const [title,setTitle] = useState("")

    const handleAddTodo = ()=>{
        const newTodo = {
            id: Date.now() + title,
            title,
            status : false
        }

        setTodos([...todos,newTodo])
    }


  return (
    <div>Todo
    <input type="text" placeholder='Add todo' value={title} 
        onChange={(e)=>setTitle(e.target.value)}
    />
    <button onClick={handleAddTodo}>Add todo</button>
    {todos.length >0 && 
    todos.map((ele)=>{
        return <TodoItem key={ele.id} {...ele} />
    })}
    </div>
  )
}
