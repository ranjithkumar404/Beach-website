import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import vdo from '../Assets/beachVid.mp4'
const Hero = () => {
  return (
    <div className='w-full  h-full '>
      <video className='w-full h-screen object-cover' src={vdo} autoPlay loop  muted></video>
    <div className='absolute w-full h-full top-0 left-0  bg-gray-900/30'></div>
    <div className='absolute text-white top-0 left-0 w-full h-full space-y-4 flex flex-col items-center justify-center '>
        <h1 className='font-bold text-4xl'>First Class Travel</h1>
        <h1 className='font-bold text-2xl'>Top 1% Location Worldwide</h1>
        <div className=' flex items-center justify-center bg-gray-200/20 p-2 rounded-md space-x-3'>
        <input className=' text-slate-800 focus:outline-none bg-gray-200/0  placeholder-slate-700'  type="text" placeholder='Search Destination'/>
    <AiOutlineSearch size={30} className='p-1 rounded-md  bg-gradient-to-r from-[#5651e5] to-[#709dff]'/>
        </div>
    </div>
    </div>
  )
}

export default Hero
