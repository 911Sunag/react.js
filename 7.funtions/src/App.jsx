import React from 'react'

const App = () => {
  
  function pageScrolling(){
   console.log("Hello user")
  }

  return (
    <div>
      <input onChange={function(){
        pageScrolling();
      }} type="text" placeholder='enter' /> 
    </div>
  )
}

export default App