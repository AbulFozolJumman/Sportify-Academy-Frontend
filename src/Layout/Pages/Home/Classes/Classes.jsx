import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Class from "./Class/Class";
import { Fade, Slide } from "react-awesome-reveal";

const Classes = () => {
    const { topClasses } = useContext(AuthContext);

    return (
        <div className="py-10">
            <hr className="border-dotted border-2 border-green-300 w-[280px] mx-auto"></hr>
            <Slide duration={1300}>
                <h2 className="text-4xl font-bold text-center text-blue-500">Popular Classes</h2>
            </Slide>
            <hr className="border-dotted border-2 border-green-300 w-[280px] mx-auto mb-8 mt-2"></hr>
            <Fade duration={4000}>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-auto max-w-7xl px-5 md:px-0">
                    {topClasses.map((course, index) => (
                        <Class key={index} course={course} />
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default Classes;