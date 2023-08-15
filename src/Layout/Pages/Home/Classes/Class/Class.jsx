import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

  const cursor = seats === 0 ? "cursor-no-drop" : "";
  const cardBgColor = seats === 0 ? "bg-green-100" : "bg-green-100";
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
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Selected',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className={`w-full md:max-w-[400px] rounded overflow-hidden shadow-lg mx-auto mb-3 ${cardBgColor}`}>
      <img className="w-full md:w-[400px] h-[250px] rounded hover:scale-110" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-green-600 shadow-lg text-base mb-2"><span className="font-bold">Instructor:</span> {instructor}</p>
        <p className="text-green-600 shadow-lg text-base mb-2"><span className="font-bold">Available Seats:</span> {seats}</p>
        <p className="text-green-600 shadow-lg text-base mb-2"><span className="font-bold">Price: </span>${price}</p>
      </div>
      <div className="px-6 py-4 text-right">
        {isButtonDisabled ? (
          <button
            className={`font-bold py-2 px-4 rounded ${cursor} ${buttonTextColor} ${buttonBgColor} ${buttonHoverBgColor}`}
            disabled={isButtonDisabled}
          >
            Select
          </button>
        ) : (
            <button
              className={`font-bold py-2 px-4 rounded ${cursor} ${buttonTextColor} ${buttonBgColor} ${buttonHoverBgColor}`}
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
