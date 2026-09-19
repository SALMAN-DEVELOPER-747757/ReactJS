import React from 'react'

const App = () => {
localStorage.setItem('user',JSON.stringify('usera'))

 const user=JSON.parse(localStorage.getItem('user'))
 console.log(user);
 
 
  return (
    <div>
      App
      
    </div>
  )
}

export default App
