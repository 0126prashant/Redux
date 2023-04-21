import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { addAction, reduceAction } from '../redux/actionTypes';

export const Counter = () => {
    const data = useSelector((store) => store.counter);
    const dispatch = useDispatch();
  console.log(data)

const handleAdd =()=>{
    dispatch(addAction(1))
}
const handleReduce =()=>{
    dispatch(reduceAction(1))

}
  return (
    <div>
        <h1>Counter :{data} </h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}
