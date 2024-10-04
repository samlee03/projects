import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ShoppingPage from './components/ShoppingPage'
import Filter from './components/Filter'
import SidebarCart from './components/SidebarCart'
import ItemPage from './components/ItemPage'

function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        {/* <ItemPage/> */}
        <div className='page-layout'>
          <div>
            <Filter/>
          </div>
          <div>
            <ShoppingPage/>
          </div>
          {/* <div className='cart-hover'>
            <SidebarCart/>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
