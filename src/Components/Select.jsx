import React from 'react'
import one from '../Assets/1.jpg'
import two from '../Assets/2.jpeg'
import three from '../Assets/3.jpg'
import four from '../Assets/4-1.jpg'
import five from '../Assets/5-1.jpg'
import six from '../Assets/6.jpg'

const Select = () => {
  return (
    <div className='max-w-[1240px] w-full h-full mx-auto gap-5  grid p-10 sm:grid-cols-2 lg:grid-cols-3'>
      <div className='hover:scale-110 duration-500 relative'>
        <img className='rounded-md w-full h-full' src={one} alt="" />
        <div className='rounded-md absolute top-0 left-0 w-full  h-full bg-gray-800/20'>
            <p className='text-white font-semibold text-2xl absolute left-2 bottom-2'>Maldives</p>
        </div>
      </div>
      <div className='hover:scale-110 duration-500 relative'>
        <img className='rounded-md' src={two} alt="" />
        <div className='absolute  top-0 left-0 w-full  h-full bg-gray-800/20'>
            <p className='text-white font-semibold text-2xl absolute left-2 bottom-2'>Kovalam</p>
        </div>
      </div>
      <div className='hover:scale-110 duration-500 relative'>
        <img className='rounded-md w-full h-full' src={three} alt="" />
        <div className='rounded-md absolute top-0 left-0 w-full  h-full bg-gray-800/20'>
            <p className='text-white font-semibold text-2xl absolute left-2 bottom-2'>Candolim</p>
        </div>
      </div>
      <div className='hover:scale-110 duration-500 relative'>
        <img className='rounded-md  ' src={four} alt="" />
        <div className='absolute rounded-md top-0 left-0 w-full  h-full bg-gray-800/20'>
            <p className='text-white font-semibold text-2xl absolute left-2 bottom-2'>Cavelossim</p>
        </div>
      </div>
      <div className='hover:scale-110 duration-500 relative'>
        <img className='rounded-md w-full  h-full' src={five} alt="" />
        <div className='rounded-md absolute top-0 left-0 w-full  h-full bg-gray-800/20'>
            <p className='text-white font-semibold text-2xl absolute left-2 bottom-2'>Bora Bora</p>
        </div>
      </div>
      <div className='hover:scale-110 duration-500 relative'>
        <img className='rounded-md h-full' src={six} alt="" />
        <div className='absolute top-0 left-0 w-full rounded-md  h-full bg-gray-800/20'>
            <p className='text-white font-semibold text-2xl absolute left-2 bottom-2'>Maldives</p>
        </div>
      </div>
    </div>
  )
}

export default Select
