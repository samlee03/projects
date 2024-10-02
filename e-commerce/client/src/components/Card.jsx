import React from 'react'
import "../styles/Card.css"
function Card({itemName, itemImg}) {
  return (
    <div className='card'>
      <div>
        <img className='card-image' src={itemImg}/>
        <div className='card-title-container'>
          <p className='card-title'>{itemName}</p>
        </div>
      </div>
      <div className='card-btns'>
        <img src='https://placeholder.co/34x34'/>
      </div>
    </div>
  )
}

export default Card