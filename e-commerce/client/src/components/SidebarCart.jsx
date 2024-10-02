import React from 'react'
import "../styles/SidebarCart.css"
import ShoppingCartItem from './ShoppingCartItem'
function SidebarCart() {
  return (
    <div className='SidebarCart'>
        <div className='title'>
            <h3>Cart</h3>
        </div>
        <div className='list-items'>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
        </div>
    </div>
  )
}

export default SidebarCart