import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.color);
    
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl shrink-0'>
        <img className=' object-cover h-full w-full' src={props.img} alt="" />
       <RightCardContent id={props.id} tag={props.tag} color={props.color}/>
    </div> 
  )
}

export default RightCard
