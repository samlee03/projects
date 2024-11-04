import React from 'react'
import { useState } from 'react'

function Box({posX, posY, color}) {
	const [clicked, setClicked] = useState(false);
  return (
    <div className={`w-20 h-20 rounded-3xl absolute md:w-24 md:h-24 lg:w-32 lg:h-32 ${color}`} style={{ top: `${posY}px`, left: `${posX}px`}}></div>
  )
}

export default Box