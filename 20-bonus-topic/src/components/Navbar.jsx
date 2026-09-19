import React from 'react'

const Navbar = (props) => {
    function changetheme(){
        // console.log("Theme changed");
        props.setTheme('YellowAndPink')
    }
  return (
    
    <div>
        <button onClick={changetheme}>Change</button>
    </div>
  )
}

export default Navbar