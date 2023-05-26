import React from 'react'
import img1 from '../Assets/beach1.jpg'
import img2 from '../Assets/beach2.jpg'
import img3 from '../Assets/beach3.jpg'
import img4 from '../Assets/beach4.jpeg'
import img5 from '../Assets/maldives3.jpg'
const Destination = () => {
  return (
    <div className='max-w-[1240px] h-full p-10 mx-auto '>
      <div className='grid place-items-center gap-3'>
        <h1 className='text-center  font-bold text-3xl'>All-Inclusive Resorts</h1>
        <h1 className='text-center font-semibold text-lg '>On the Caribbean's Best Beaches</h1>
        <div className='grid  gap-2 md:grid-cols-5 md:gap-5'>
          <img className='w-full h-full col-span-2 object-cover md:col-span-3 row-span-2 rounded-2xl hover:scale-95 duration-300' src={img1} alt="/" />
          <img className='w-full h-full object-cover rounded-2xl hover:scale-95 duration-300' src={img2} alt="" />
          <img className='w-full hover:scale-95 duration-300 h-full object-cover rounded-2xl' src={img3} alt="" />
          <img className='w-full hover:scale-95 duration-300 h-full object-cover rounded-2xl' src={img4} alt="" />
          <img className='w-full hover:scale-95 duration-300 h-full object-cover rounded-2xl' src={img5} alt="" />


        </div>

      </div>
    </div>
  )
}

export default Destination
