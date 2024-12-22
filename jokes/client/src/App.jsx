import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const Categories = ["Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"];
  const [categoriesSelected, setCategoriesSelected] = useState([false, true, false, false, false, false]); // Programming, Misc, Dark, Pun, Spooky, Christmas
  const [type, setType] = useState("single");
  const [amount, setAmount] = useState(1);
  
  const toggle = (i) => {
    let copy = categoriesSelected;
    copy[i] = !categoriesSelected[i];
    setCategoriesSelected(copy);
    console.log(categoriesSelected);
  }
  return (
    <>
      <div>
        <div>
          <h1>Title</h1>
        </div>
        <div className='categories-container'>
          {Categories.map((e, i) => {
            return <button key={i} onClick={() => toggle(i)}>{e}</button>
          })}
        </div>
      </div>
    </>
  )
}

export default App
