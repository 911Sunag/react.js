import React from 'react'

const Cards = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>We are learning react js and we in now props topic which means properties</p>
        <button>View profile</button>
    </div>
  )
}

export default Cards