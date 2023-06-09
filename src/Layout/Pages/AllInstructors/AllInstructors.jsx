import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Instructor from "../Home/Instructors/Instructor/Instructor";


const AllInstructors = () => {
    const { instructors } = useContext(AuthContext);

    return (
        <div className="py-12">
            <h2 className="text-4xl font-bold text-center text-blue-500 pb-12">All Instructors</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mx-auto max-w-7xl">
                {instructors.map((coach, index) => (
                    <Instructor key={index} coach={coach} />
                ))}
            </div>
        </div>
    );
};

export default AllInstructors;