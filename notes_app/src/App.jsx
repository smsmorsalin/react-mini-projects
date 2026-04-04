import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notes, setNotes] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setNotes([...notes, { title, content }])
    setTitle('')
    setContent('')
  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-center pt-10 w-full pb-10 bg-black text-white'>Notes App</h1>
      <div className='bg-black h-screen w-screen text-white flex justify-between'>

        <div className='p-10 border-2 lg:h-4/5 lg:w-2/5 rounded-2xl'>
          <form onSubmit={(e) => submitHandler(e)}>
            <input
            className='border-2 p-3 mt-5 w-full rounded-xl' 
            type="text" 
            placeholder='Note title'
            value={title}
            onChange={ (e) => { setTitle(e.target.value) } }
            />

            <textarea
            className='border-2 p-5 mt-5 w-full rounded-xl' 
            placeholder='Note content' 
            value={content}
            onChange={ (e) => { setContent(e.target.value) } }
            rows={10} />

            <button className='bg-blue-500 text-white px-4 py-2 mt-5 hover:bg-blue-600 rounded-xl'>Add Note</button>
          </form>
        </div>

        <div className='p-2 border-2 lg:h-full lg:w-full rounded-2xl mx-3 bg-gray-800 flex gap-3 flex-wrap justify-start items-start overflow-y-scroll'>
          {notes.map(function(elem, index) {

          return <div key={index} className='p-4 h-1/2 w-1/3 border-2 flex gap-2 rounded-2xl bg-white text-black'>
            <h2 className='text-xl font-bold'>{elem.title}</h2>
            <p>{elem.content}</p>
          </div>
})}
        </div>
      </div>
    </div>
  )
}

export default App
