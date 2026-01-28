import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getFoodsFiltered } from '../utils'
import { FaHouse } from "react-icons/fa6";

const baseUrl = "http://localhost:8000/api/"

const Foods = () => {

    const {categId, searchedWord} = useParams()
    const [foods, setFoods] = useState([])
    let url = baseUrl
    const navigate = useNavigate()
    if(categId) url += `foodsbycateg/${categId}`
    else url += `foodsbysearch/${searchedWord}`

    console.log(url)
    console.log(foods)
    useEffect(()=>{
        getFoodsFiltered(url, setFoods)
    }, [])

  return (
    <div>
     <div className='Home'>
           <header><span><FaHouse size={30} color='cyan' style={{cursor:"pointer"}} onClick={()=>navigate("/")}/></span><h1>Our <span style={{color:"cyan"}}>{foods[0]?.name}</span></h1></header>
           <div className='content'>
     
           {foods && foods.map(obj=>
             <div className='card' key={obj.id} onClick={()=>navigate("/foodsbycategory/"+obj.id)}>
               <img src={obj.photo} alt="" />
               <h2>{obj.title}</h2>
               <p>Price: {obj.price}€</p>
             </div>
           )}
     
           </div>
           <footer>catering@gmail.com</footer>
           home
         </div>
    </div>
  )
}

export default Foods
