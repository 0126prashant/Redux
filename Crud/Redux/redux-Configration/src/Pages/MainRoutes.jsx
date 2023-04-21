import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './HomePage'
import { Counter } from '../Components/Counter'
import Todos from '../Components/Todo'
import Login from './Login'
import PrivateRoute from '../Components/PrivateRoute'
function MainRoutes() {
  return (
   <>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/counter' element={
    <PrivateRoute>
    <Counter/>
    </PrivateRoute>
    }/>
    <Route path='/todos' element={<Todos/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
   </>
  )
}

export default MainRoutes