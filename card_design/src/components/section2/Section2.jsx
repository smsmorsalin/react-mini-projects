import React from 'react'
import Page1content from './Page1content'

const Section2 = (props) => {
  return (
    <div >
        <Page1content users={props.users} />
    </div>
  )
}

export default Section2
