import { useContext } from "react";
import Class from "../Home/Classes/Class/Class";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Fade, Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AllClasses = () => {
  const { classes } = useContext(AuthContext);

  // Filter classes by approved status
  const approvedClasses = classes.filter((course) => course.status === "approved");

  return (
    <div className="py-12">
      <Helmet>
        <title>Sportify Academy | All Classes</title>
      </Helmet>
      <hr className="border-dotted border-2 border-green-300 w-[280px] mx-auto"></hr>
      <Slide>
        <h2 className="text-4xl font-bold text-center text-blue-500">All Classes</h2>
      </Slide>
      <hr className="border-dotted border-2 border-green-300 w-[280px] mx-auto mb-8 mt-2"></hr>
      <Fade duration={4000}>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-auto max-w-7xl px-5 md:px-0">
          {approvedClasses.map((course, index) => (
            <Class key={index} course={course} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default AllClasses;
