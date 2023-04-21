import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from "./Home"
import Admin from './Admin'
import { Login } from './Login'
export const MainRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<h1>Page not found</h1>}/>
       </Routes>
    </div>
  )
}
