import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Instructor from "./Instructor/Instructor";
import { Fade, Slide } from "react-awesome-reveal";

const Instructors = () => {
  const { instructors } = useContext(AuthContext);
  const topInstructors = instructors.slice(0, 6);

  return (
    <div className="py-10">
    <hr className="border-dotted border-2 border-green-300 w-[330px] mx-auto"></hr>
    <Slide>
        <h2 className="text-4xl font-bold text-center text-blue-500">Popular Instructors</h2>
    </Slide>
    <hr className="border-dotted border-2 border-green-300 w-[330px] mx-auto mb-8 mt-2"></hr>
      <Fade duration={4000}>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-auto max-w-7xl px-5 md:px-0">
          {topInstructors.map((coach, index) => (
            <Instructor key={index} coach={coach} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Instructors;
