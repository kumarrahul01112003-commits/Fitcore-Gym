import React from 'react'

const Card = (props) => {
  return (
    <>
     <div className='card'>
        <img src={props.img}></img>
        <p className='p'>{props.name}</p>
      </div>

      
       




    </>
  )
}

export default Card