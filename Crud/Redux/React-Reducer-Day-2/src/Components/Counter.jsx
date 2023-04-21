import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
    const data = useSelector((store)=>store); //store.counter etc
    console.log(data)
  return (
    <div>
    <h1>Counter:{data}</h1>
    <button >Add</button>
    <button>Reduce</button>
    </div>
  )
}

export default Counter