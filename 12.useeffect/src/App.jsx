import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aValue(){
    console.log('a is happening')
  }
  function bValue(){
    console.log('b is happening')
  }
  useEffect(function(){
    aValue()
  },[]);
  useEffect(function(){
    bValue()
  },[b]);

  return (
    <div>
      <h1>A value {a}</h1>
      <h1>B value {b}</h1>
      <button onClick={() => {
         setA(a+1);
      }}>click a</button>
      <button onClick={() => {
        setB(b -1);
      }}>click b</button>
    </div>
  )
}

export default App