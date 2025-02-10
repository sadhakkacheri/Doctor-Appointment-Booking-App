import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  console.log(speciality);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);
  const [fliteredDoc, setFilteredDoc] = useState([]);

  useEffect(() => {
    if (speciality) {
      setFilteredDoc(doctors.filter((doc) => doc.speciality == speciality));
    } else {
      setFilteredDoc(doctors);
    }
  }, [speciality]);

  return (
    <div>
      <p className="text-2xl mb-3 flex-wrap mt-5">
        Browse through the doctors speciality
      </p>
      <div className="flex justify-between">
        <div className="w-[30%]">
          <p
            className={`border rounded-2xl p-3 mb-2 mr-5 cursor-pointer  ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
          >
            General physician
          </p>
          <p
            className={`border rounded-2xl p-3 mb-2 mr-5 cursor-pointer  ${
              speciality === "Gynecologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
          >
            Gynecologist
          </p>
          <p
            className={`border rounded-2xl p-3 mb-2 mr-5 cursor-pointer  ${
              speciality === "Dermatologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
          >
            Dermatologist
          </p>
          <p
            className={`border rounded-2xl p-3 mb-2 mr-5 cursor-pointer  ${
              speciality === "Pediatricians"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
          >
            pediatricians
          </p>
          <p
            className={`border rounded-2xl p-3 mb-2 mr-5 cursor-pointer  ${
              speciality === "Neurologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
          >
            Neurologist
          </p>
          <p
            className={`border rounded-2xl p-3 mb-2 mr-5 cursor-pointer  ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
          >
            Gastroenterologists
          </p>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6 px-4 sm:px-0">
          {fliteredDoc.map((data, index) => (
            <div
              key={index}
              className="border border-blue-300 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500 bg-white"
              onClick={() => navigate(`/appointment/${data._id}`)}
            >
              <img
                className="w-full h-56 object-cover"
                src={data.image}
                alt={data.name}
              />
              <div className="p-5">
                <div className="flex flex-row gap-2">
                  <p className="w-2 h-2 rounded-full bg-green-600 my-2"></p>
                  <p className="text-sm text-green-500 font-medium">
                    Available
                  </p>
                </div>
                <p>{data.name}</p>
                <p className="text-gray-600 text-sm mt-2">{data.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
