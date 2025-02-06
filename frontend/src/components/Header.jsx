import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-[#6f7fff] rounded-lg md:px-10 lg:px-20 md:my-3 lg:my-4 sm:my-1'>
       {/*-------left side--------- */}
       <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto py-10 md:py-[10vw] md:mb-[-30px]'>
           <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br />  
           With Trusted Doctors</p>
        <div className='flex justify-around items-center'>
           <img className='h-7 inline mx-4' src={assets.group_profiles} alt="" />
           <p className='text-sm'>Simply browse through our extensive list of trusted doctors,<br /> 
           schedule your appointment hassle-free.</p>
        </div>
        <div className='w-40 flex flex-row justify-between items-center border border-black-200 bg-white px-2 rounded-xl cursor-pointer hover:scale(105) transition-all duration-300'>
              <a href="#speciality" className='text-sm'>Book appointment</a>
              <img className='w-3 h-10' src={assets.arrow_icon} alt="" />
        </div>
       </div>
       {/*--------right side-----------*/}
       <div className='w-1/2 relative'>
        <img className='absolute bottom-0 right-0' src={assets.header_img} alt="" />
       </div>
    </div>
  )
}

export default Header
