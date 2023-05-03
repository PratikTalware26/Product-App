import React, { useContext, useEffect, useState } from 'react'
import "./Products.css"
import axios from 'axios'
import { globalData } from '../App'

const Products = () => {
    const [data, setData]= useState([])
    const [category, setCategory]= useContext(globalData)
    // console.log(category)

    const fetchProducts= async ()=>{
        if(!category){
            const response= await axios.get(`https://dummyjson.com/products`)
        // console.log(response)
        setData(response.data.products)
        }else{
             const response= await axios.get(`https://dummyjson.com/products/category/${category}`)
        // console.log(response)
        setData(response.data.products)
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[category])
    if(!data){
        return <h1>Loading....</h1>
    }
  return (
    <div className='prod-cont-parent'>
        {data.map((prod, i)=>{
            return(
                <div key={i} className='prod-card'> 
                    <div className='prod-img-cont'><img src={prod.thumbnail} alt="" /></div>
                    <div className='prod-details'>
                        <h3>{prod.title.slice(0, 25)}</h3>
                        <h3 className='prod-brand'>{prod.brand}</h3>
                        <p className='prod-desc'>{prod.description.slice(0, 50)}</p>
                        <h2>&#x20b9; {prod.price}</h2>
                        {/* <h3>{prod.brand}</h3> */}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Products