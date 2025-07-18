import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import Package from './Pages/CardDeatil.jsx/Package';
import Trending from './Pages/Trending/Trending';
import CustomizedPackage from './Pages/CustomizedPackage/CustomizedPackage';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/package/:id' element={<Package/>}/>
        <Route path='/trending/:id' element={<Trending/>}/>
        <Route path='/cutompage' element={<CustomizedPackage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App