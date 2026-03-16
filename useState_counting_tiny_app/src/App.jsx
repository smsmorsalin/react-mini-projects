import React, { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <div className="display_counter">
        <h2>Counter</h2>
        <h1>{counter}</h1>
      </div>
      <div className="buttons">
        <button className="btn" onClick={increment}>+</button>
        <button className="btn" onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default App
