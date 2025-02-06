import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate();
  return (
    <div className='flex flex-row items-center bg-[#6f7fff] justify-around h-100 rounded-4xl'>
       {/* ----------left side ---------*/}
       <div>
           <h1 className='md:text-4xl font-bold p-2 text-white'>Book Appointment</h1>
           <h1 className='md:text-4xl font-bold p-2 text-white '>With 100+ Trusted Doctors</h1>
           <button onClick={()=>navigate('/login')} className='bg-white rounded-2xl p-4 my-5 cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>create account</button>
       </div>
       {/* ----------right side ---------*/}
       <div  className=''>
          <img className='h-110 pb-5' src={assets.appointment_img} alt="" />
       </div>
    </div>
  )
}

export default Banner;
