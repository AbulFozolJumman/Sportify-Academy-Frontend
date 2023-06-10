import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Instructor from "../Home/Instructors/Instructor/Instructor";
import { Fade, Slide } from "react-awesome-reveal";


const AllInstructors = () => {
    const { instructors } = useContext(AuthContext);

    return (
        <div className="py-12">
            <Slide>
                <h2 className="text-4xl font-bold text-center text-blue-500 pb-12">All Instructors</h2>
            </Slide>
            <Fade>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mx-auto max-w-7xl">
                    {instructors.map((coach, index) => (
                        <Instructor key={index} coach={coach} />
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default AllInstructors;