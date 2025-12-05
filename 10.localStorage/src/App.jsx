import React, { use } from 'react'

const App = () => {

  const userD = {
    name:'sunag',
    age: 24, 
  }

  localStorage.setItem('user', JSON.stringify(userD));
  localStorage.removeItem('userD',userD);

  return (
    <div>
      App
    </div>
  )
}

export default App