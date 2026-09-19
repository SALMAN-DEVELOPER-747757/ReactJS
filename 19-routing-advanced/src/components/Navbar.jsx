import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4  justify-between items-center px-8  bg-cyan-900'>
      <h2 className='text-2xl font-bold'>Berlin&Tokyo</h2>
      <div className='flex gap-10 '>
        <Link className='text-lg font-medium'  to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/About'>About</Link>
         <Link className='text-lg font-medium'  to='/Course'>Course</Link>
        <Link className='text-lg font-medium' to='/Products'>Products</Link>
        
      </div>
    </div>
  )
}

export default Navbar