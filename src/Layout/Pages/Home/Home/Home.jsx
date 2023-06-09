import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Facilities from "../Facilities/Facilities";
import Instructors from "../Instructors/Instructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;