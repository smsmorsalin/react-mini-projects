import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Title from './Title'
import Paragraph from './Paragraph'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full w-2/8 p-2 rounded-2xl ml-2 mt-2 flex flex-col justify-between'>
      <div>
        <Title />
        <Paragraph />
      </div>
      <Arrow />
    </div>
  )
}

export default LeftContent
