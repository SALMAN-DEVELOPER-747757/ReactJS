import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const btnClick=()=>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    // console.log(newArr);

  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App