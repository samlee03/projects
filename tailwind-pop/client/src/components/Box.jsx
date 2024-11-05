import React from 'react'
import { useState } from 'react'

function Box({posX, posY, color}) {
	const [clicked, setClicked] = useState(false);
  const [opacity, setOpacity] = useState('opacity-1');
  const [height, setHeight] = useState('h-20');
  const [width, setWidth] = useState('w-20');
  const [anim, setAnim] = useState('');

  const [invis, setInvis] = useState(false);
  const handleClick = () => {
    console.log('opacity change');
    setOpacity('opacity-0');
    setWidth('w-30');
    setHeight('h-30');
    setAnim('animate-spin');

    setTimeout(() => {
      console.log('invis');
      setInvis(true);
    }, 2000);
  }
  return (
    <>
      {!invis ? 
        (
          <div className={`${anim} w-20 h-20 rounded-3xl absolute md:w-24 md:h-24 lg:w-32 lg:h-32 transition-all duration-3000 ease-in ${color} ${opacity}`} style={{ top: `${posY}px`, left: `${posX}px`}} onClick={handleClick}></div>
        )
        :
        (<></>)
      }

    </>
  )
}

export default Box