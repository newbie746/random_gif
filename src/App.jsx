import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
const App = () => {
  return (
    <div className='w-full h-screen flex flex-col relative background overflow-x-hidden'>
      <h1 className='absolute bg-white rounded-lg w-[1200px] text-center 
      mt-[40px] ml-[35px]   px-10 py-2 text-4xl font-bold '>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[100px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App