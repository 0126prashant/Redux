import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import { addProduct } from '../Redux/productReducer/action';
import {  POST_PRODUCT_SUCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from '../Redux/actionTypes';
import axios from 'axios';

const initState = {
    name:"",
    image:"",
    brand:"",
    price:"",
    category:"",
    gender:"",
}

function Admin() {
    const [product,setProduct] = useState(initState);
    const dispatch = useDispatch();

    const handleChange =(e)=>{
        const {name,value} = e.target
   setProduct((prev)=>{
    return {...prev,[name] : name== "price" ? +value : value}
   })
    }

    //  const addProduct=(newProduct)=> (dispatch)=>{
    

     const addProduct=()=>{
       
        console.log(product,"prd")
        dispatch({type : PRODUCT_REQUEST})
        axios.post(`http://localhost:8080/products`,product)
        .then((res)=>{
            console.log(res.data)
            dispatch({type : POST_PRODUCT_SUCESS})
        })
        .catch((err)=>{
            console.log(err)
            dispatch({type :PRODUCT_FAILURE })
        })
    }

    const handleSubmit=(e)=>{
        
     e.preventDefault()
     addProduct()
    //  dispatch(addProduct(product))
    //  console.log(product)
    }
  return (
    <DIV>
        <form onSubmit={handleSubmit}>
        <label>Product Name</label>
            <input type='text' name='name' onChange={(e)=> handleChange(e)} value={product.name} placeholder='Product Name'/>
        <label>Product Image</label>
            <input type='text' name='image' onChange={(e)=> handleChange(e)} value={product.image} placeholder='Product Image'/>
        <label>Brand</label>
            <input type='text' name='brand' onChange={(e)=> handleChange(e)} value={product.brand} placeholder='Brand'/>
        <label>Price</label>
            <input type='text' name='price' onChange={(e)=> handleChange(e)} value={product.price} placeholder='Price'/>
        <label>Category</label>
        <select name='category' value={product.category}>
            <option value="">Category</option>
            <option value="shirts">Shirts</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
        </select>

        <label>Gender</label>
        <select name='gender' value={product.gender}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="kids">Kids</option>
        </select>
        <button type='submit'> Submit</button>
        </form>
    </DIV>
  )
}

export default Admin;

const DIV = styled.div`
border: 1px solid ;
width: 50%;
margin: auto;
margin-top: 20px;
form{
  display: flex;
  flex-direction: column;
}

`