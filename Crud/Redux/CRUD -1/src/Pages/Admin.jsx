import React from 'react'
import styled from "styled-components"

function Admin() {
  return (
    <div>
        <form>
        <label>Product Name</label>
            <input type='text' placeholder='Product Name'/>
        <label>Product Image</label>
            <input type='text' placeholder='Product Image'/>
        <label>Brand</label>
            <input type='text' placeholder='Brand'/>
        <label>Price</label>
            <input type='text' placeholder='Price'/>
        <label>Category</label>
        <select name='category'>
            <option value=""></option>
            <option value="shirts"></option>
            <option value="pants"></option>
            <option value="shoes"></option>
        </select>

        <label>Gender</label>
        <select name='gender'>
            <option value=""></option>
            <option value="male"></option>
            <option value="female"></option>
            <option value="kids"></option>
        </select>
        <button type='submit'> Submit</button>
        </form>
    </div>
  )
}

export default Admin