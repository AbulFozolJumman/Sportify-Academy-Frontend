import { useState } from "react";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Facilities from "../Facilities/Facilities";
import Instructors from "../Instructors/Instructors";
import { Helmet } from "react-helmet";
import Sponsors from "../Sponsors/Sponsors";
import Gallery from "../Gallery/Gallery";
import Location from "../Location/Location";
import Tips from "../Tips/Tips";
import DownloadApp from "../DownloadApp/DownloadApp";
import SubscribeUs from "../SubscribeUs/SubscribeUs";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={` ${isDarkMode ? "dark" : ""}`}>
      <input
        type="checkbox"
        className="toggle hidden toggle-lg absolute top-8 right-[60px] md:left-1/4"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className={`transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Helmet>
          <title>Sportify Academy | Home</title>
        </Helmet>
        <Banner></Banner>
        <Classes></Classes>
        <Instructors></Instructors>
        <Gallery></Gallery>
        <Facilities></Facilities>
        <Tips></Tips>
        <Location></Location>
        <DownloadApp></DownloadApp>
        <SubscribeUs></SubscribeUs>
        <FAQ></FAQ>
        <Sponsors></Sponsors>
      </div>
    </div>
  );
};

export default Home;
