import React from 'react'
import "../styles/Header.css"
function Header() {
  return (
    <div className='header-container'>
        <div className='header light-brown'>
            <div className='main-component-wrapper'>
                <img src='https://placehold.co/42x42'/>
                <input 
                type='text'
                placeholder='Search for your item here..'
                className='search-field'
                />
            </div>
            <div className='other-navigations-wrapper'>
                <img src='https://placehold.co/52x52'/>
            </div>
        </div>
        <div className='subheader dark-brown'>
            <div className='subheader-nav-wrapper'>
                <img src='https://placeholder.co/31x31'/>
                <h3 className='subheader-navigations-links'>Top Sellers</h3>
                <h3 className='subheader-navigations-links'>Category #1</h3>
                <h3 className='subheader-navigations-links'>Category #2</h3>
                <h3 className='subheader-navigations-links'>Category #3</h3>
            </div>
        </div>
    </div>
  )
}

export default Header