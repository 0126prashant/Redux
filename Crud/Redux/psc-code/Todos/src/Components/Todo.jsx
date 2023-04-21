import { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { FailureAction, RequestAction, todogetSucessAction } from "../redux/actionTypes";
import { fetchData } from "../redux/action";

const Todos = () => {
  const todo = useSelector((store)=>store.todos)
  const loading = useSelector((store)=>store.isLoading)
  const dispatch = useDispatch()
  // console.log(todo)
  
 
  useEffect(()=>{
    fetchData(dispatch)
  },[])

  return (
    <div>
     <h1>Add Todo</h1>
     <TodoInput/>
     {loading && <h1>Loading</h1>}
     {todo && todo.map((ele)=>{
      return <div key={ele.id}>
        <p>{ele.title}---{ele.status ? "true" : "false"}</p>
      </div>
     })}
    </div>
  );
};

export default Todos;
