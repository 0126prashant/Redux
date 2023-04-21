import { useEffect } from "react";
import TodoInput from "./TodoInput";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/todos/action";
// import { FailureAction, RequestAction, todogetSucessAction } from "../redux/actionTypes";


const Todos = () => {
  const {todo,loading} = useSelector((store)=>{
    return {
      todo : store.todosReducer.todos,
      loading : store.todosReducer.isLoading,
    }
  },shallowEqual)
  const dispatch = useDispatch()

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
