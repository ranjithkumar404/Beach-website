import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navBar = () => {
    setNav(!nav);
  };
  return (
    <div className='p-5 absolute  w-full  z-10'>
      <div className=' flex justify-between items-center text-white'>
        <h1 className='font-bold text-2xl md:text-3xl'>Beaches.</h1>
        <ul className='hidden md:flex space-x-10 text-lg'>
          <li className='cursor-pointer hover:border-b-2 hover:border-b-slate-100 '>Home</li>
          <li className='cursor-pointer  hover:border-b-2 hover:border-b-slate-100'>Destination</li>
          <li className='cursor-pointer  hover:border-b-2 hover:border-b-slate-100'>Travel</li>
          <li className='cursor-pointer  hover:border-b-2 hover:border-b-slate-100'>Views</li>
          <li className='cursor-pointer  hover:border-b-2 hover:border-b-slate-100'>Book</li>
        </ul>
        <div className='hidden md:flex space-x-3'>
          < BiSearch className='cursor-pointer hover:text-slate-500' size={20} />
          < BsPerson className='cursor-pointer hover:text-slate-500' size={20} />
        </div>
        <div onClick={navBar} className='md:hidden'>

          {nav ? <AiOutlineClose className='text-white' size={20} /> : <HiOutlineMenuAlt4 size={30} />}
        </div>
        <div onClick={navBar} className={nav ? 'rounded-md bg-gray-100/90 absolute top-4 text-black -left-2 w-full mt-2 ml-2' : 'hidden'}>

          <ul className='  text-lg p-10 space-y-7 w-full '>
            <h1 className='font-bold text-2xl'>Beaches.</h1>
            <li className='border-b border-slate-300 '>Home</li>
            <li className='border-b border-slate-300 '>Destination</li>
            <li className='border-b border-slate-300 '>Travel</li>
            <li className='border-b border-slate-300 '>Views</li>
            <li className='border-b border-slate-300 '>Book</li>
            <button className='w-full text-white hover:text-black rounded-md py-2  bg-gradient-to-r from-[#5651e5] to-[#709dff]'>Search</button>
            <button className='w-full text-white hover:text-black rounded-md py-2  bg-gradient-to-r from-[#5651e5] to-[#709dff]'>Account</button>
            <div className='flex text-2xl justify-between text-[#5651e5]'>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaPinterest />
              <FaYoutube />
            </div>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Navbar
