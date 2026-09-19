import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h3>Berlin & Tokyo</h3>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/Products'>Product</Link>
        </div>
      </div>
  )
}

export default Navbar