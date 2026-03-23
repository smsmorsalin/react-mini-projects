import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center pt-10 w-full pb-10 bg-black text-white'>Notes App</h1>
      <div className='bg-black h-screen w-screen text-white flex justify-between'>

        <div className='p-10 border-2 lg:h-3/5 lg:w-2/5 rounded-2xl'>
          <form>
            <input
            className='border-2 p-3 mt-5 w-full rounded-xl' 
            type="text" 
            placeholder='Note title' /> <br/>

            <textarea
            className='border-2 p-5 mt-5 w-full rounded-xl' 
            placeholder='Note content' 
            rows={10} /> <br/>

            <button className='bg-blue-500 text-white px-4 py-2 mt-5 hover:bg-blue-600 rounded-xl'>Add Note</button>
          </form>
        </div>

        <div className='p-10 border-2 lg:h-full lg:w-full rounded-2xl mx-3 bg-gray-800'>

<div className='p-4 h-300 w-200 border-2'>card</div>

        </div>
      </div>
    </div>
  )
}

export default App
