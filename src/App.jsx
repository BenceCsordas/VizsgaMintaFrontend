import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Foods from './components/Foods'

function App() {
  

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/foodsbycategory/:categId'} element={<Foods/>}/>
        <Route path={'/foodsbysearch/:searchedWord'} element={<Foods/>}/>
      </Routes>
    </>
  )
}

export default App
