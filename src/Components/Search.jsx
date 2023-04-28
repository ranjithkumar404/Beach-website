import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';
const Search = () => {
  return (
    <div className='max-w-[1240px] gap-2 p-5 grid mx-auto md:grid-cols-3'>
        
        <div className='md:col-span-2 gap-3 grid place-content-evenly'>
        <h1 className='font-bold text-2xl'>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
            <p> Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.</p>
           
            <div className='grid place-items-center gap-5 sm:grid-cols-2'>
                <div className='p-2 flex flex-col lg:flex-row items-center text-center space-y-2 lg:space-x-2'>
<button className='rounded-md p-2 bg-gradient-to-r from-[#5651e5] to-[#709dff]'><RiCustomerService2Fill size={40}/></button>
<div>
<p className='font-bold text-lg'>LEADING SERVICE</p>
<p>ALL-INLCUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
</div>

            </div>
            <div className='p-2 flex flex-col lg:flex-row items-center text-center space-y-2 lg:space-x-2'>
            <button className='rounded-md  p-2 bg-gradient-to-r from-[#5651e5] to-[#709dff]'><MdOutlineTravelExplore size={40}/></button>
            <div>
            <p className='font-bold text-lg'>AUTOMATED BOOKINGS</p>
<p>ALL-INLCUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>  
          
            </div>
            </div>
            
        </div>
    
      <div className='p-2  space-y-5'>
       <div className='text-center space-y-3 px-8'>
        <p>GET AN ADDITIONAL 10% OFF</p>
        <p>12 HOURS LEFT</p>
        <p className='bg-slate-800  rounded-sm text-white p-2'>BOOK NOW AND SAVE</p>
       </div>
       <div>
        <div className='flex flex-col'>
          <label htmlFor="">Destination</label>
          <select className='p-2 rounded-md border focus:outline-slate-400' >
            <option>Grande Antiqua</option>
            <option>Key West</option>
            <option>Maldives</option>
            <option>Cozumel</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Check-In</label>
          <input className='p-2 rounded-md border' type="date" />
        </div>
        <div className='flex flex-col'>
        <label htmlFor="">Check-Out</label>
          <input className='p-2 rounded-md border' type="date" />
        </div>
        
       </div>
       <button className='rounded-md text-white hover:text-black w-full  p-2 bg-gradient-to-r from-[#5651e5] to-[#709dff]'>Rates & Availabilities</button>
      </div>
       
   
    </div>
  )
}

export default Search
