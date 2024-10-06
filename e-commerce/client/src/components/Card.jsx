import React from 'react'
import "../styles/Card.css"
import AddToCart from "../assets/Card/AddToCart.png"
function Card({itemName, itemImg, addToCart}) {
  return (
    <div className='card'>
      <div>
        <img className='card-image' src={itemImg}/>
        <div className='card-title-container'>
          <p className='card-title'>{itemName}</p>
        </div>
      </div>
      <div className='card-btns'>
        {/* <img src='https://placeholder.co/34x34'/> */}
        <img src={AddToCart}
          onClick={() => addToCart(itemName, itemImg)}
        />
      </div>
    </div>
  )
}

export default Card