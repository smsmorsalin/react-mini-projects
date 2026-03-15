import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-6/8 flex flex-nowrap overflow-x-auto mr-3 mt-2 rounded-2xl'>
      {props.users.map((user, index) => (
        <RightCard key={index} img={user.img} paragraph={user.paragraph} tag={user.tag} />
      ))}
    </div>
  )
}

export default RightContent
