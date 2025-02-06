import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    const navigate=useNavigate();
    const {doctors}=useContext(AppContext)
  return (
    <div className='flex flex-col items-center text-gray-700 my-10 gap-6 md:mx-20'>
      <h1 className='text-4xl font-semibold text-blue-600'>Top Doctors to Book</h1>
      <p className='text-lg text-gray-500 text-center max-w-2xl'>Browse our curated list of top-rated doctors and book your appointment with ease.</p>
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6 px-4 sm:px-0'>
        {doctors.slice(0, 10).map((data,index) => (
          <div
            key={index}
            className='border border-blue-300 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500 bg-white' onClick={()=>navigate(`/appointment/${data._id}`)}
          >
            <img className='w-full h-56 object-cover' src={data.image} alt={data.name} />
            <div className='p-5'>
              <div className='flex flex-row gap-2'>
                <p className='w-2 h-2 rounded-full bg-green-600 my-2'></p>
                <p className='text-sm text-green-500 font-medium'>Available</p>
              </div>
              <p>{data.name}</p>
              <p className='text-gray-600 text-sm mt-2'>{data.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>navigate('/doctors')} className='bg-blue-50  text-gray-600 px-12 py-4 rounded-full mt-10 cursor-pointer'>more</button>
    </div>
  );
};

export default TopDoctors;