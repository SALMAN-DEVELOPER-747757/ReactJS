import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {

     const navigate=useNavigate()
  return (
    <div className='py-5 px-3 bg-cyan-950'>
       <button onClick={()=>{
        navigate('/')
      }} className='bg-fuchsia-900 cursor-pointer rounded-2xl px-5 py-2 font-medium active:scale-95'>Go To Home Page</button>

        <button onClick={()=>{
          navigate(-1)
        }} className='bg-fuchsia-900 cursor-pointer rounded-2xl px-5 py-2 font-medium active:scale-95'>BACK</button>

          <button onClick={()=>{
          navigate(+1)
        }} className='bg-fuchsia-900 cursor-pointer rounded-2xl px-5 py-2 font-medium active:scale-95'>Next</button>

    </div>
  )
}

export default Navbar2
