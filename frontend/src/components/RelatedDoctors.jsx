import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const docData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(docData);
    }
  }, [docId, doctors, speciality]);

  useEffect(() => {
    console.log(relDoc); 
  }, [relDoc]);

  return (
    <div>
      <h2 className="w-full text-center my-10 text-4xl font-semibold text-gray-800 mb-4">Related Doctors</h2>
      {relDoc.length > 0 ? (
        <div className="space-y-3 flex">
          {relDoc.map((data,index) => (
            <div
            key={index}
            className='border border-blue-300 shadow-lg rounded-xl mx-4 my-4 overflow-hidden cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500 bg-white' onClick={()=>navigate(`/appointment/${data._id}`)}
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
      ) : (
        <p className="text-gray-500">No related doctors available.</p>
      )}
    </div>
  );
};

export default RelatedDoctors;
