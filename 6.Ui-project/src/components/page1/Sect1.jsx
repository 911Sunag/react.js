import React from 'react'
import Navvbar from './Navvbar'
import PageContent from './PageContent'

const Sect1 = (props) => {
  return (
   <div className='h-screen w-full '>
        <Navvbar />
        <PageContent users={props.users} />
    </div>
  )
}

export default Sect1