import React from 'react'
import "../styles/ShoppingPage.css"
import Card from './Card'
function ShoppingPage({addToCart}) {
  return (
    <div className='Shopping-Page'>
        <div className='left-position-wrapper'>
            <div className="big-display-container">
                <div className="item item1"></div>
                <div className="item item2"></div>
                <div className="item item3"></div>
            </div>
        </div>
        
        <h4 className='heading-title'>Items for Sale</h4>
        <div className='items-display-container'>
            <div className='cards-container'>
                <Card itemName="Item Name - Any additional info associated with item" itemImg='https://placeholder.co/280x296' addToCart={addToCart}/>
                <Card itemName="Testing" itemImg='https://placeholder.co/280x296' addToCart={addToCart}/>
                <Card itemName="Item Name - Any additional info associated with item" itemImg='https://placeholder.co/280x296' addToCart={addToCart}/>
                <Card itemName="Testing" itemImg='https://placeholder.co/280x296' addToCart={addToCart}/>
                <Card itemName="Item Name - Any additional info associated with item" itemImg='https://placeholder.co/280x296' addToCart={addToCart}/>
                <Card itemName="Testing" itemImg='https://placeholder.co/280x296' addToCart={addToCart}/>
            </div>
        </div>
    </div>
  )
}

export default ShoppingPage