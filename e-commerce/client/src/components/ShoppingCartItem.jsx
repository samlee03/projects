import React from 'react'
import "../styles/ShoppingCartItem.css"
function ShoppingCartItem() {
  return (
    <div className='ShoppingCartItem'>
        <img className='shopping-cart-item-icon' src='https://placeholder.co/60x62' />
        <div className='cart-item-description'>
            <p>Item Name</p>
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