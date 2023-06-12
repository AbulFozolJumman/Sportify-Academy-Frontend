import { useEffect, useState } from "react";

const MyClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const storedClasses = JSON.parse(localStorage.getItem("selectedClasses")) || [];
      setSelectedClasses(storedClasses);
    };

    fetchData();
  }, []);

  const handlePay = (index) => {
    const updatedClasses = [...selectedClasses];
    updatedClasses.splice(index, 1);
    setSelectedClasses(updatedClasses);
    localStorage.setItem("selectedClasses", JSON.stringify(updatedClasses));
  };

  const handleDelete = (index) => {
    const updatedClasses = [...selectedClasses];
    updatedClasses.splice(index, 1);
    setSelectedClasses(updatedClasses);
    localStorage.setItem("selectedClasses", JSON.stringify(updatedClasses));
  };

  return (
    <div className="pb-12">
      {selectedClasses.length > 0 ? (
        <div className="mx-auto max-w-7xl">
          <table className="min-w-full bg-green-100 border">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Instructor</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Seats</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses.map((course, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">
                    <img src={course.image} alt={course.name} className="h-16 w-16 object-cover" />
                  </td>
                  <td className="border px-4 py-2">{course.name}</td>
                  <td className="border px-4 py-2">{course.instructor}</td>
                  <td className="border px-4 py-2">${course.price}</td>
                  <td className="border px-4 py-2">{course.seats}</td>
                  <td className="border px-4 py-2 flex">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handlePay(index)}
                    >
                      Pay
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">You haven&#39;t selected any classes yet.</p>
      )}
    </div>
  );
};

export default MyClasses;
