import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <p className='text-lg leading-normal px-2 py-4 text-white pb-10'>{props.paragraph}</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white px-4 text-medium font-bold rounded-full hover:bg-blue-400'>{props.tag}</button>
                <i className="bg-blue-600 text-white px-4 rounded-full ri-arrow-right-line ri-3x"></i>
            </div>
    </div>
  )
}

export default RightCardContent
