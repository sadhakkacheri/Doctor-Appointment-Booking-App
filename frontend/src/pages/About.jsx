import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-row justify-between my-10'>

      {/*---------Left side -----------*/}
      <div className='w-1/4 h-auto'>
        <img src={assets.about_image} alt="" className='rounded my-3' />
      </div>
      {/*---------Right side -----------*/}
      <div>
        <h1 className='text-2xl font-bold mb-2'>About Us</h1>
        <p className='text-md' >Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.<br/> At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor <br/> appointments and managing their health records.</p>
        <br />
      <p className='text-md'>
      Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform,<br /> integrating the latest advancements to improve user experience and deliver superior service. <br /> Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you <br /> every step of the way.
      </p>
      <br />
      <h1 className='text-lg font-extrabold'>Our vision</h1>
      <p className='text-md'>


Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the <br /> gap between patients and healthcare providers, making it easier for you to access the care you need, when <br /> you need it.
      </p>
      </div>
    </div>
  )
}

export default About