import React from 'react'
import Herotext from './HeroText'   
import Arrowr from './Arrowr'

const Leftcontent = () => {
  return (
      <div className='h-full flex flex-col justify-between w-1/3 '>
            <Herotext />
            <Arrowr />
        </div>
    )
}

export default Leftcontent