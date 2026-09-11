// import React from 'react'

// const App = () => {
//   // function btnClicked(){
//   //   console.log("Button Clicked");
//   // }

//   // function mouse(){
//   //   console.log("Mouse Entered");
    
//   // }
//   // function name(val){
//   // console.log(val);
//   //   }
//   return (
//     <div className='box' onMouseMove={(elem)=>{
//       console.log(elem.screenX);
      
//     }}>
      
//       {/* <button onMouseEnter={mouse} onClick={btnClicked}>Click me!</button>
//       <button onDoubleClick={btnClicked} onMouseLeave={mouse}>explore this</button> */}
//       {/* <input onChange={function(){
//         console.log('user is typing your name ');
        
//       }} type="text" placeholder='Enter yrs name' /> */}

//       {/* <input onChange={function(elem){
//         console.log(elem.target.value);
        
//       }} type="text"  placeholder='Enter age'/> */}
//     </div>
    
//   )
// }

// export default App


// import React from 'react'

// const App = () => {

//   const scrollingFtn=(elem)=>{
//     // console.log('Page is scrolling...at speed',elem);
//     if(elem>0){
//       console.log("seedha scrolling");
      
//     }
//     else{
//     console.log("Ulta scrolling");
    
//     }
    
//   }
//   return (
//     <div onWheel={(elem)=>{
//       scrollingFtn(elem.deltaY)
      
//     }}>
//       {/* <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div> */}
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("Helloooo");
    
  return (
    <div>
      <button>Clicked</button>
    </div>
  )
}

export default App
}