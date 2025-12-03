import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='parent'>
      <Cards user='sunag' age={24} img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Cards user='arigala' age={44} img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Cards user='cow' age={4} img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App