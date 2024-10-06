import React from 'react'
import "../styles/ShoppingCartItem.css"
function ShoppingCartItem({itemName, itemImg}) {
  return (
    <div className='ShoppingCartItem'>
        <img className='shopping-cart-item-icon' src={itemImg} />
        <div className='cart-item-description'>
            <p>{itemName}</p>
            <div className='quantity-container'>
                <p className='quantity'>Qty: 1</p> 
                <div className='quantity-btns'>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCartItem