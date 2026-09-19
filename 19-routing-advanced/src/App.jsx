import React from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

import Notfound from './pages/Notfound'
import { Route, Routes } from 'react-router-dom';
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Course from './pages/Course'
import Coursedetail from './pages/Coursedetail'
import Navbar2 from './pages/Navbar2'
const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
         <Route path='/Course' element={<Course/>} />
          <Route path='/Course/:id' element={<Coursedetail/>} />
        
        
        
        <Route path='/Products' element={<Products/>} >
        <Route path='Men' element={<Men/>} />
        <Route path='Women' element={<Women/>} />
        <Route path='Kids' element={<Kids/>} />
      
        </Route>

        <Route path='*' element={<Notfound/>} /> 
      </Routes>
      <Navbar />
      <Navbar2 />
      <Footer/>
    </div>
  )
}

export default App