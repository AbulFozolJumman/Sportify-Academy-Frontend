import { useContext } from "react";
import Class from "../Home/Classes/Class/Class";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Fade, Slide } from "react-awesome-reveal";

const AllClasses = () => {
    const { classes } = useContext(AuthContext);

    return (
        <div className="py-12">
            <Slide>
                <h2 className="text-4xl font-bold text-center text-blue-500 pb-12">All Classes</h2>
            </Slide>
            <Fade>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-auto max-w-7xl px-5 md:px-0">
                    {classes.map((course, index) => (
                        <Class key={index} course={course} />
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default AllClasses;