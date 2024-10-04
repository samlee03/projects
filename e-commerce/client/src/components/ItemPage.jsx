import React from 'react'
import "../styles/ItemPage.css"
import ColoredStar from "../assets/ItemPage/yellow-star.png"
import UncoloredStar from "../assets/ItemPage/uncolored-star.png"
function ItemPage() {
  return (
    <div className='ItemPage'>
        <div className='item-preview-container'>
            <div className='preview-boxes'>
                <img className='preview-img' src="https://placeholder.co/64x64"/>
                <img className='preview-img' src="https://placeholder.co/64x64"/>
                <img className='preview-img' src="https://placeholder.co/64x64"/>
                <img className='preview-img' src="https://placeholder.co/64x64"/>
            </div>
            <div>
                <img className='big-display' src='https://placeholder.co/500x480'/>
            </div>
        </div>
        <div className='item-description-container'>
            <h2 className='item-title'>Brand Name, Full Name of the Item, Includes All Information Provided By Seller. Including Everything Included</h2>
            <div className='rating-container'>
                <span className='rating-number'>4.0</span>
                <img className='star-icon' src={ColoredStar}/>
                <img className='star-icon' src={ColoredStar}/>
                <img className='star-icon' src={ColoredStar}/>
                <img className='star-icon' src={ColoredStar}/>
                <img className='star-icon' src={UncoloredStar}/>
            </div>
            <div className='price-container'>
                <span>$</span>
                <h1 className='price-text'>99.99</h1>
            </div>
            <div>
                <h3>Additional information</h3>
                <ul className='info-list'>
                    <li>it is a good product</li>
                    <li>it is a good product</li>
                    <li>it is a good product</li>
                </ul>
            </div>
            <div>
                <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ItemPage