import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <h1>Products</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/admin"}>Admin</Link>
    </div>
  )
}

export default Navbar