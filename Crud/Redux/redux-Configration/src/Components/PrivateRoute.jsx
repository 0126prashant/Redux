import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Pages/Login';

function PrivateRoute({children}) {
  const auth = useSelector((store)=>store.authReducer.isAuth);


  return (
    auth ? children : <Login/>
  )
}

export default PrivateRoute