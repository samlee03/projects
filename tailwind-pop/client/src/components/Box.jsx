import React from 'react'
import { useState } from 'react'

function Box() {
	const [clicked, setClicked] = useState(false);
  return (
    <div className='w-32 h-32 bg-emerald-500 rounded-3xl'></div>
  )
}

export default Box