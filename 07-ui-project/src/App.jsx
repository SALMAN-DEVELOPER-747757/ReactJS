import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users=[
  {   img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'red',
      tag:'Satisfied'
  },
  {   img:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'yellow',
      tag:'Underserved'
  },
  {  img:'https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'black',
      tag:'Underbanked'
  },
  {  img:'https://media.istockphoto.com/id/2233679886/photo/young-programmer-analyzing-code-on-laptop-and-large-screen-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=jqJvXU0lDyVsal-0BnE8MlDVP4aOSUpt0qzxR-RJzbM=',
      intro:'',
      color:'pink',
      tag:'UnderBrand'
  },
  {
    img:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'amber',
    tag:'UndeNear'

  }
  ]
  return (
    <div>
      <Section1 users={users  }/>
      <Section2/>
    </div>
  )
}

export default App
