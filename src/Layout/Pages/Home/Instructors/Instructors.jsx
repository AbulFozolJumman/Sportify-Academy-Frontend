import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Instructor from "./Instructor/Instructor";
import { Fade, Slide } from "react-awesome-reveal";


const Instructors = () => {
    const { instructors } = useContext(AuthContext)
    return (
        <div className="py-12">
            <Slide><h2 className="text-4xl font-bold text-center text-blue-500 pb-12">Popular Instructors</h2></Slide>
            <Fade>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-auto max-w-7xl px-5 md:px-0">
                    {instructors.map((coach, index) => (
                        <Instructor key={index} coach={coach} />
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default Instructors;