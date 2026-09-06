import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>

        <Card user="berlin" age='31' img='https://plus.unsplash.com/premium_photo-1747679550439-2f2a3bf49803?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8'/>
          <Card user="Tokyo" age='25' img='https://plus.unsplash.com/premium_photo-1746888841928-69b3c2970b1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8'/>
          <Card user="Kheyam" age={22} img="https://images.unsplash.com/photo-1672870691319-89338dc04642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8"/>
    </div>

    
  )
}

export default App
