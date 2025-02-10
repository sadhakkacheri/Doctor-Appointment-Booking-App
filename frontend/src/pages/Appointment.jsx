import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docID } = useParams();
  const { doctors } = useContext(AppContext);
  const [doctdata, setDoctdata] = useState(null);
  const [docSlots, setDocSlots] = useState([]); // Stores slots grouped by date
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(null);

  // Fetch Doctor Information
  useEffect(() => {
    if (doctors.length > 0) {
      const data = doctors.find((doc) => doc._id === docID);
      setDoctdata(data);
    }
  }, [docID, doctors]);

  // Log speciality only after doctdata updates
  useEffect(() => {
    if (doctdata) console.log(doctdata.speciality);
  }, [doctdata]);

  // Generate Available Slots
  useEffect(() => {
    const availableSlots = () => {
      let today = new Date();
      let allSlots = [];
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      for (let i = 0; i < 7; i++) {
        let currDate = new Date(today);
        currDate.setDate(today.getDate() + i);

        let dateStr = currDate.toISOString().split("T")[0];
        let dayStr = daysOfWeek[currDate.getDay()];

        let endTime = new Date(currDate);
        endTime.setHours(21, 0, 0, 0);

        if (i === 0) {
          // Adjust the start time for today
          let now = new Date();
          currDate.setHours(now.getHours() >= 10 ? now.getHours() + 1 : 10, 0, 0, 0);
        } else {
          currDate.setHours(10, 0, 0, 0);
        }

        let slotTimes = [];
        while (currDate < endTime) {
          let formattedTime = currDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          slotTimes.push(formattedTime);
          currDate.setMinutes(currDate.getMinutes() + 30);
        }

        allSlots.push({ date: dateStr, day: dayStr, slots: slotTimes });
      }

      setDocSlots(allSlots);
    };

    availableSlots();
   
  }, []);
  

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])
  return (
    doctdata && (
      <div className="my-20">
        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <img
              className="bg-[#6f7fff] w-full sm:max-w-80 rounded-lg h-70"
              src={doctdata.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-xl p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <h1 className="flex items-center gap-4 text-2xl font-medium text-gray-900">
              {doctdata.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </h1>
            <div className="flex items-center gap-2 font-medium text-gray-700 text-sm mt-2">
              <p>
                {doctdata.degree} - {doctdata.speciality}
              </p>
              <p className="py-0.5 px-1 border border-gray-300 rounded-2xl text-xs">
                {doctdata.experience}
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-1 text-md font-medium text-gray-700 mt-3">
                about <img src={assets.info_icon} alt="" />
              </h3>
              <p className="text-sm max-w-[700px] mt-1">{doctdata.about}</p>
            </div>
            <p className="mt-4 text-gray-500 font-medium">
              Appointment fee:{" "}
              <span className="text-gray-600">$ {doctdata.fees} </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>

          {/* Date Selection */}
          <div className="flex gap-5 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots.map((doc, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer 
                    ${slotIndex === index ? "bg-[#6f7fff] text-white" : "border border-gray-200"}`}
                >
                  <p>{doc.day}</p>
                  <p>{doc.date.slice(8, 10)}</p>
                </div>
              ))}
          </div>

          {/* Time Slots for Selected Date */}
          <div className="flex items-center overflow-x-scroll gap-4 w-full mt-4">
            {docSlots.length > 0 && (
              <div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {docSlots[slotIndex].slots.map((time, index) => (
                    <span
                      key={index}
                      className={`text-sm font-light flex flex-shrink-0 px-5 py-2 rounded-md cursor-pointer transition-all duration-200 
                        ${slotTime === index ? "bg-[#6f7fff] text-white" : "bg-gray-200 text-gray-600"}`}
                      onClick={() => setSlotTime(index)}
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className="bg-[#6f7fff] text-white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer">
            Book Appointment
          </button>
        </div>

        {/* Related Doctors */}
        <RelatedDoctors docId={docID} speciality={doctdata.speciality} />
      </div>
    )
  );
};

export default Appointment;
