import React from 'react'

const RightCardContent = (props) => {
    console.log(props.color);
    
  return (
    <div>
         <div className='absolute top-0 left-0 h-full w-ful p-8 flex flex-col justify-between'>
        <h2 className='rounded-full bg-white text-xl font-semibold h-12 w-12 flex justify-center items-center '>{props.id+1}</h2>
        <div>
            <p className='text-lg leading-relaxed text-gray-600 mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero repudiandae dolore corrupti ipsam rem quos.</p>
            <div className='flex justify-between'> 
                <button style={{backgroundColor:props.color}} className='px-8 py-2 rounded-full text-white  font-medium'>{props.tag}</button>
                <button className='px-4 py-2 rounded-full text-white  font-medium'><i className="ri-arrow-right-long-fill"></i></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default RightCardContent