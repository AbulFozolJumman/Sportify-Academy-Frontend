import { useContext } from "react";
import Class from "../Home/Classes/Class/Class";
import { AuthContext } from "../../../Provider/AuthProvider";

const AllClasses = () => {
    const { classes } = useContext(AuthContext);

    return (
        <div className="py-12">
            <h2 className="text-4xl font-bold text-center text-blue-500 pb-12">All Classes</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mx-auto max-w-7xl">
                {classes.map((course, index) => (
                    <Class key={index} course={course} />
                ))}
            </div>
        </div>
    );
};

export default AllClasses;