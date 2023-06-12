import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import {  useNavigate } from "react-router-dom";

const Class = ({ course }) => {
  const { image, name, instructor, price, seats } = course;
  const [userEmail, setUserEmail] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://sportify-academy-server.vercel.app/user?email=${user?.email}`
      );
      const newData = await response.json();
      setUserEmail(newData);
    };

    fetchData();
  }, [user?.email]);

  const role = userEmail[0]?.role;

  const cardBgColor = seats === 0 ? "bg-red-500" : "bg-green-100";
  const isButtonDisabled = seats === 0 || role === "admin" || role === "instructor";
  const buttonTextColor = seats === 0 ? "text-white" : "text-white";
  const buttonBgColor = seats === 0 ? "bg-black" : "bg-blue-500";
  const buttonHoverBgColor = seats === 0 ? "" : "";

  const handleSelect = () => {
    if (!user) {
      // User is not logged in, navigate to login page
      navigate("/login");
      return;
    }

    if (role === "student") {
      // Store selected class data in localStorage
      const selectedClassData = { image, name, instructor, price, seats };
      const existingSelectedClasses = localStorage.getItem("selectedClasses");
      const selectedClasses = existingSelectedClasses ? JSON.parse(existingSelectedClasses) : [];

      // Check if the user has already selected this class
      const isAlreadySelected = selectedClasses.some((classData) => classData.name === name);
      if (isAlreadySelected) {
        return; // Do not allow selecting the same class again
      }

      selectedClasses.push(selectedClassData);
      localStorage.setItem("selectedClasses", JSON.stringify(selectedClasses));
    }
  };

  return (
    <div className={`w-full md:max-w-[400px] rounded shadow-lg mx-auto mb-3 ${cardBgColor}`}>
      <img className="w-full md:w-[400px] h-[250px] rounded" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">Instructor: {instructor}</p>
        <p className="text-gray-700 text-base mb-2">Available Seats: {seats}</p>
        <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
      </div>
      <div className="px-6 py-4">
        {isButtonDisabled ? (
          <button
            className={`font-bold py-2 px-4 rounded ${buttonTextColor} ${buttonBgColor} ${buttonHoverBgColor}`}
            disabled={isButtonDisabled}
          >
            Select
          </button>
        ) : (
            <button
              className={`font-bold py-2 px-4 rounded ${buttonTextColor} ${buttonBgColor} ${buttonHoverBgColor}`}
              onClick={handleSelect}
            >
              Select
            </button>
        )}
      </div>
    </div>
  );
};

export default Class;
