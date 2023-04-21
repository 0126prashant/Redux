import React from 'react'
import  { memo } from 'react';
const heavyTask = (delay)=>{
    let start = Date.now();
    while(start = Date.now() - start < delay){
        continue;
    }
}


export const TodoItem = memo(({id,title,status}) => {
    heavyTask(2000)
  return (
    <div>
        <h2>{title}</h2>
        <h2>{status ? "complete" : "pending"}</h2>

    </div>
  )
})
