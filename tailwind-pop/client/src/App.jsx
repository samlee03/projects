import { useState, useEffect } from 'react'
import './App.css'
import Box from './components/Box'
function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const [boxes, setBoxes] = useState([]);

  // Handle Bounds
  useEffect(() => {
    const width = window.innerWidth * 0.8;
    const height = window.innerHeight * 0.8;
    setContainerWidth(width);
    setContainerHeight(height);
  }, []);

  const handleRunning = () => {
    setIsRunning(true);
  }
  useEffect (() => {
    if (isRunning) {
      const interval = setInterval = (() => {
        // Pop up boxes
      }, 1000)
      return () => clearInterval(interval);
    }
  }, [isRunning])
  return (
    <>
      <div className='bg-slate-50 w-screen h-screen'>
        <div className='flex justify-center gap-5 font-mono my-3'>
          <h1 className='text-5xl text-center font-mono text-teal-600'>Tailwind Pop</h1>
          <button className='bg-green-300 p-3 rounded-lg' onClick={handleRunning}>Play</button>

        </div>
        <div className='container mx-10 my-10'>
       
        </div>

      </div>
    </>
  )
}

export default App
