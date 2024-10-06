import React from 'react'
import "../styles/Header.css"
import Logo from "../assets/Header/Logo.png"
import ShoppingCartIcon from "../assets/Header/ShoppingCartIcon.png"
import SideBarToggle from "../assets/Header/SideBarToggle.png"
function Header({onCartHover, toggleFilter}) {
  return (
    <div className='header-container'>
        <div className='header light-brown'>
            <div className='main-component-wrapper'>
                {/* <img src='https://placehold.co/42x42'/> */}
                <img src={Logo}/>
                <input 
                type='text'
                placeholder='Search for your item here..'
                className='search-field'
                />
            </div>
            <div className='other-navigations-wrapper'>
                {/* <img src='https://placehold.co/52x52'/> */}
                <img src={ShoppingCartIcon}
                 onMouseEnter={() => onCartHover(true)} 
                 onMouseLeave={() => onCartHover(false)} 
                />
            </div>
        </div>
        <div className='subheader dark-brown'>
            <div className='subheader-nav-wrapper'>
                {/* <img src='https://placeholder.co/31x31'/> */}
                <img 
                src={SideBarToggle}
                onClick={toggleFilter}
                />
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