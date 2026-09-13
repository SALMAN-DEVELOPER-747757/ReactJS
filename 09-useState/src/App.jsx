// import React from 'react'
// import { useState } from 'react'
// const App = () => {

// const [num, setNum] = useState(40)
// const [username, setUsername] = useState("Salman&kheyam")
// const [array, setArray] = useState([12,23,34,45,66,77])

// function changeNum(){
//   setNum(60)
//   setUsername("Berlin&TOkyo")
//   setArray([12,23,45,56,78,99,0])
// }
//   return (
    
//    <div>
//     <h1>The value of num is {num} <br /> and username is {username} and array is {array}</h1>
// <button onClick={changeNum}>Click</button>
//    </div>
//   )
// }

// export default App


import React, { useState } from 'react'


const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
    
  }

   function decreaseNum(){
    setNum(num-1)
    
  }

  function jumpBy10Num(){
    setNum(num+10)
    
  }

   function decreaseBy10Num(){
    setNum(num-10)
    
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button><br />
       <button onClick={jumpBy10Num}>IncreaseBy 10</button>
       <button onClick={decreaseBy10Num}>DecreaseBy 10</button>
    </div>
  )
}

export default App