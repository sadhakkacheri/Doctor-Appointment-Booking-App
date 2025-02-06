import React, { useState } from 'react'
import {assets} from "../assets/assets";
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate();
    const [showMenu,setShowMenu]=useState(false);
    const [token,setToken]=useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 border-b border-b-gray-300'>
       <img className='w-44 cursor-pointer' src={assets.logo} alt="logo"/>
       <ul className='hidden md:flex items-start gap-5 font-medium'>
         <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#6f7fff] hidden'/>
         </NavLink>
         <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#6f7fff] hidden'/>
         </NavLink>
         <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#6f7fff] hidden'/>
         </NavLink>
         <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#6f7fff] hidden'/>
         </NavLink>
       </ul>
       <div className='flex items-center gap-4'>
        {
            token?
            <div className='flex items-center gap-2 cursor-pointer group relative'>
               <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile" />
               <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown" />
               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-stone-100 rounded flex-col gap-4 p-4'>
                    <p  onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p  onClick={()=>navigate('/my-appointments')}className='hover:text-black cursor-pointer'>My Appointments</p>
                    <p  onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                   </div>
               </div>
            </div>
            :
            <button onClick={()=>navigate('/login')} className='bg-[#6f7fff] text-white px-6 py-4 rounded-full font-light hidden md:block cursor-pointer '>create account</button>

        }
           
       </div>
    </div>
  )
}

export default Navbar
