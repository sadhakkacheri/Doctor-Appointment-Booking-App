import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='relative bottom-0'>
        <div className='flex items-center justify-between relative bottom-0 mt-30 my-5'>
            <div className='w-2/5 leading-7'>
                    <img className='py-3 mb-3' src={assets.logo} alt="" />
                    <p className='font-serif'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className='font-semibold'>
                 <h1 className='text-2xl font-bold mb-4'>COMPANY</h1>
                 <ul className='leading-8'>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/home'>Privacy policy</Link></li>
                 </ul>
            </div>
            <div className='w-1/4 leading-10'> 
                <h1 className='font-bold text-[16px]'>GET IN TOUCH</h1>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li> <Link></Link>sadhak@gmail.com</li>
                </ul>
                
            </div>
        </div>
        <hr />
        <h3 className='text-center my-2 '>Copyright © 2024 GreatStack - All Right Reserved.</h3>
    </div>
  )
}

export default Footer
