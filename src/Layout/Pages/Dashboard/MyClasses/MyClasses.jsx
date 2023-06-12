import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const MyClasses = () => {
  const { user, classes } = useContext(AuthContext);

  // Filter the classes based on the user's email
  const userClasses = classes.filter((classItem) => classItem.email === user.email);

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-green-100 border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border text-left">Class Name</th>
              <th className="py-2 px-4 border text-left">Class Image</th>
              <th className="py-2 px-4 border text-left">Students</th>
              <th className="py-2 px-4 border text-left">Status</th>
              <th className="py-2 px-4 border text-left">Feedback</th>
              <th className="py-2 px-4 border text-left">Update</th>
            </tr>
          </thead>
          <tbody>
            {userClasses.map((classItem) => (
              <tr key={classItem.id}>
                <td className="py-2 px-4 border">{classItem.name}</td>
                <td className="py-2 px-4 border">
                  <img src={classItem.image} alt={classItem.name} className="h-16 w-16 object-cover" />
                </td>
                <td className="py-2 px-4 border">{classItem.students}</td>
                <td className="py-2 px-4 border">{classItem.status}</td>
                <td className="py-2 px-4 border">{classItem.feedback}</td>
                <td className="py-2 px-4 border">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
