import { useState, useEffect } from 'react'
import './App.css'
import Box from './components/Box'
function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // const [boxes, setBoxes] = useState([{posX: 0, posY: 0}]);
  const [boxes, setBoxes] = useState([]);

  // Handle Bounds
  useEffect(() => {
    const width = window.innerWidth * .5;
    const height = window.innerHeight * .5;
    setContainerWidth(width);
    setContainerHeight(height);
  }, []);

  const handleRunning = () => {
    setIsRunning(true);
  }
  useEffect (() => {
    if (isRunning) {
      
      const interval = setInterval(() => {
        setBoxes(prev => {
          let X = Math.floor(Math.random() * containerWidth);
          let Y = Math.floor(Math.random() * containerHeight);
          const newBoxes = [...prev, {posX: X, posY: Y}];
          // const newBoxes = [{posX: X, posY: Y}];
          return newBoxes;
        });
        // const deletionInterval = setTimeout(() => {
        //   setBoxes(prev => {
        //     const newBoxes = prev.slice(1);
        //     return newBoxes;
        //   })
        // }, 3000)
        return () => clearInterval(interval);
        // Pop up boxes
      }, 1000)
      return () => clearInterval(interval);
    }
  }, [isRunning])
  return (
    <>
      <div className='bg-slate-50 w-screen h-screen overflow-hidden'>
        <div className='flex flex-col items-center sm:flex-row justify-center gap-5 font-mono my-3'>
          <h1 className='text-5xl text-center font-mono text-teal-600 hover:text-teal-500'>Tailwind Pop</h1>
          <button className='bg-green-300 p-3 rounded-lg hover:bg-teal-400 w-fit' onClick={handleRunning}>Play</button>

        </div>
        {!isRunning ? (<div className='flex h-full justify-center items-center'><div className='bg-green-500 w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-3xl'></div></div>) : <></>}
        <div className='container relative mx-16 my-16 h-full w-full overflow-hidden'>
          {boxes.map((e, i) => {
            return <Box key={i} color={'bg-green-500'} posX={e.posX} posY={e.posY} className='absolute z-10 transition-all duration-500'/>
          })}
        </div>

      </div>
    </>
  )
}

export default App
