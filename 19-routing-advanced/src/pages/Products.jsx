import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div >
      <div  className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/Products/Men'>Men</Link>
        <Link className='text-xl font-semibold' to='/Products/Women'>Women</Link>
            <Link className='text-xl font-semibold' to='/Products/Kids'>Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Products