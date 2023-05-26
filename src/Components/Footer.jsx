import React from 'react'

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';
const footer = () => {
    return (


        <div className='flex-col bg-slate-300 space-y-5 p-5 '>
            <div className='flex justify-between'>
                <p className='text-xl font-bold'>BEACHES.</p>
                <div className='flex space-x-5 text-[#5651e5]'>
                    < FaFacebook size={30} />
                    < FaTwitter size={30} />
                    <FaInstagram size={30} />
                    < FaPinterest size={30} />
                    <FaYoutube size={30} />
                </div>
            </div>
            <div className='flex p-3 justify-between font-semibold'>
                <div className='lg:flex lg:space-x-10 '>
                    <p>About</p>
                    <p>Partnerships</p>
                    <p>Careers</p>
                    <p>Newsroom</p>
                    <p>Advertising</p>
                </div>

                <div className='lg:flex lg:space-x-10'>
                    <p>Home</p>
                    <p>Destination</p>
                    <p>Travel</p>
                    <p>Views</p>
                    <p>Book</p>
                </div>
            </div>
        </div>
    )
}



export default footer
