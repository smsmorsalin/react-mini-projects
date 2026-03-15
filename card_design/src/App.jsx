import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'


const users = [
  {
    img : "https://plus.unsplash.com/premium_photo-1663011378846-f1787ad938bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph: "She was disgusted he couldnt tell the difference between lemonade and limeade.",
    tag: "Satisfied"
  },
  {
    img : "https://images.unsplash.com/photo-1631034527597-2d46ad65e09c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph: "I only enjoy window shopping when the windows are transparent.",
    tag: "Underserved"
  },
  {
    img : "https://images.unsplash.com/photo-1619947663603-9eac34f2230f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph: "The father handed each child a roadmap at the beginning of the 2-day road trip and explained it was so they could find their way home.",
    tag: "Satisfied"
  },
  {
    img : "https://images.unsplash.com/photo-1681569685377-dd0dba4b0414?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    paragraph: "Mom didnt understand why no one else wanted a hot tub full of jello.",
    tag: "Underserved"
  }
]

const App = () => {
  return (
    <div>
      <Section1 />
      <Section2 users={users} />
    </div>
  )
}

export default App
