import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ShoppingPage from './components/ShoppingPage'
import Filter from './components/Filter'
import SidebarCart from './components/SidebarCart'
import ItemPage from './components/ItemPage'

function App() {
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [filterOn, setFilterOn] = useState(false);
  const [cartList, setCartList] = useState([]);
  
  const handleCartHover = (hovered) => {
    setIsCartHovered(hovered);
  }
  const handleToggleFilter = () => {
    setFilterOn(prev => !prev);
  }

  const handleAddToCart = (itemName, itemImg) => {
    setCartList(prev => [...prev, [itemName, itemImg]]);
    console.log(cartList);
  }
  return (
    <>
      <div className='App'>
        <Header onCartHover={handleCartHover} toggleFilter={handleToggleFilter}/>
        {isCartHovered ?
          (
          <div className='cart-hover'>
            <SidebarCart cartList={cartList}/>
          </div>)
          :
          <></>
        }
        <div className='page-layout'>
          <div>
            {
              filterOn?
              (
                <Filter/>
              )
              : <></>                
            }
          </div>
          <div>
            <ShoppingPage addToCart={handleAddToCart}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
