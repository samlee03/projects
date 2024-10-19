import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import ShoppingPage from './components/ShoppingPage'
import Filter from './components/Filter'
import SidebarCart from './components/SidebarCart'
import ItemPage from './components/ItemPage'
import CartPage from './components/CartPage'

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000');
      const data = await res.json();
      setItems(data.items);
      console.log(data.items);
    }
    fetchData();
  }, [])


  const [isCartHovered, setIsCartHovered] = useState(false);
  const [filterOn, setFilterOn] = useState(false);
  const [cartList, setCartList] = useState([["Some Item", "https://placeholder.co/100x100"]]);
  
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
        {
          items.length > 0 ? (
            <div>{items[0].name}</div>
          ) : (
            <div>No items available</div>
          )
        }
        {/* {
          items.map((e, i) => {
            return <h1>{e.name}</h1>
          })
        } */}
        <Header onCartHover={handleCartHover} toggleFilter={handleToggleFilter}/>
        {isCartHovered ? (<div className='cart-hover'><SidebarCart cartList={cartList}/></div>) : <></>}
        <div className='page-layout'>
          <div>
            {
              filterOn?(<Filter/>): <></>                
            }
          </div>
          <div>
            <ShoppingPage addToCart={handleAddToCart}/>
          </div>
        </div>
        {/* <CartPage cartList={cartList}/> */}
      </div>
    </>
  )
}

export default App
