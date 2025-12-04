import React from 'react'

const App = () => {
  
 const btnClick = () => {
    console.log("Hello Button")
 }
 const inputChange = (e) => {
   console.log(e.target.value)
 }

  return (
    <div>
       <button className='px-10 py-5 rounded-b-md bg-blue-500 text-2xl font-bold' onClick={btnClick}>Hello Console</button>
       <input type="text" placeholder='Hello input' onChange={inputChange} />
    </div>
  )
}

export default App