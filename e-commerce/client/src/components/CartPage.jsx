import React from 'react'
import "../styles/CartPage.css"
import Card from './Card'
function CartPage({cartList}) {
  return (
    <div className="CartPage">
      <h3>Your Cart</h3>
      <div className='cart-list-container'>
        {cartList.map((e, i) => {
          return <Card key={i} cardType="CartPage" itemName={e[0]} itemImg={e[1]}/>
        })}
      </div>
    </div>
  )
}

export default CartPage