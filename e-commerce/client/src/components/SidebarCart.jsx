import React from 'react'
import "../styles/SidebarCart.css"
import ShoppingCartItem from './ShoppingCartItem'
function SidebarCart({cartList}) {
  return (
    <div className='SidebarCart'>
        <div className='title'>
            <h3>Cart</h3>
        </div>
        <div className='list-items'>
            {cartList.map((element, index) => {
              return <ShoppingCartItem key={index} itemName={element[0]} itemImg={element[1]}/>
            })}
        </div>
    </div>
  )
}

export default SidebarCart