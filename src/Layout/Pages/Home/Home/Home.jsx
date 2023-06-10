import { useState } from "react";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Facilities from "../Facilities/Facilities";
import Instructors from "../Instructors/Instructors";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={` ${isDarkMode ? "dark" : ""}`}>
      <input
        type="checkbox"
        className="toggle toggle-lg absolute top-8 right-[60px] lg:left-1/4"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className={`transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Banner></Banner>
        <Classes></Classes>
        <Instructors></Instructors>
        <Facilities></Facilities>
      </div>
    </div>
  );
};

export default Home;
