import React, { useEffect, useState } from 'react'
import { getCategories } from '../utils'
import { FaHouse } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";

const Home = () => {
  const [categories, setCategories] = useState([])
  const [searchedWord, setSearchedWord] = useState("")
  const navigate = useNavigate()
  useEffect(()=>{
          getCategories(setCategories)
      }, [])

  console.log(categories)

  return (
    <div className='Home'>
      <header><span><FaHouse size={30} color='cyan' style={{cursor:"pointer"}} onClick={()=>navigate("/")}/></span><h1>Catering service</h1></header>
      <div className='inputHolder' style={{}}>
        <input  type="text" placeholder='search...' value={searchedWord} onChange={(e)=>setSearchedWord(e.target.value)}/>
        <button onClick={()=>navigate("foodsbysearch/"+searchedWord)}><IoSearchSharp/></button>
      </div>
      <div className='content'>

    <div className="cardsHolder">
      {categories && categories.map(obj=>
        <div style={{height:"500px"}} className='card' key={obj.id} onClick={()=>navigate("/foodsbycategory/"+obj.id)}>
          <img src={obj.photo} alt="" />
          <h2>{obj.name}</h2>
          <p>{obj.descr}</p>
        </div>
      )}
    </div>
      

      </div>
      <footer>catering@gmail.com</footer>
      home
    </div>
  )
}

export default Home
