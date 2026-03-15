import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='h-[90vh] flex items-center justify-between gap-3'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1content