import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-100 bg-red-500 shrink-0 m-4 overflow-hidden relative rounded-3xl'>
      <img className='h-full w-full rounded-3xl object-cover' src={props.img} alt='picture' />
      <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8'>
        <h1 className='bg-white text-3xl font-bold h-10 w-10 rounded-full flex justify-center items-center'>1</h1>
        <div>
            <RightCardContent paragraph={props.paragraph} tag={props.tag} />     
        </div>
      </div>
    </div>
  )
}

export default RightCard
