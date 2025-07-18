import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Add from './Pages/Add'
import { useState,useEffect } from 'react';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
function App() {

  const [token, settoken] = useState(localStorage.getItem('token') || '');
  

   useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div>
      <Routes>
        <Route path='' element ={<Add token ={token}/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
