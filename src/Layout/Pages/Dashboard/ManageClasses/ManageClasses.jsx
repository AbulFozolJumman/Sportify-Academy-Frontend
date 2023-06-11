import { useEffect, useState } from 'react';

const ManageClasses = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/classes');
      const data = await response.json();
      setClassesData(data);
    };

    fetchData();
  }, []);

  const handleApprove = () => {
    // Logic for approving the class with the given classId
  };

  const handleDeny = () => {
    // Logic for denying the class with the given classId
  };

  return (
    <div className='bg-green-100 mb-12 max-w-7xl mx-auto'>
      <table className="table-auto w-full bg-green-100">
        <thead>
          <tr>
            <th className="px-4 py-2">Class Name</th>
            <th className="px-4 py-2">Class Image</th>
            <th className="px-4 py-2">Instructor Name</th>
            <th className="px-4 py-2">Instructor Email</th>
            <th className="px-4 py-2">Available Seats</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classesData.map((classItem) => (
            <tr key={classItem?.id}>
              <td className="border px-4 py-2">{classItem?.name}</td>
              <td className="border px-4 py-2">
                <img src={classItem?.image} alt={classItem?.name} className="h-16 w-16 object-cover" />
              </td>
              <td className="border px-4 py-2">{classItem?.instructor}</td>
              <td className="border px-4 py-2">{classItem?.email}</td>
              <td className="border px-4 py-2">{classItem?.seats}</td>
              <td className="border px-4 py-2">{classItem?.price}</td>
              <td className="border px-4 py-2">{classItem?.status}</td>
              <td className="border px-4 py-2 flex">
                <button
                  className={`${
                    classItem?.status === 'approved' ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-700'
                  } text-white font-bold py-2 px-4 rounded mr-2`}
                  disabled={classItem?.status === 'approved' || classItem?.status === 'denied'}
                  onClick={() => handleApprove(classItem?.id)}
                >
                  Approve
                </button>
                <button
                  className={`${
                    classItem?.status === 'approved' ? 'bg-gray-500' : 'bg-red-500 hover:bg-red-700'
                  } text-white font-bold py-2 px-4 rounded mr-2`}
                  disabled={classItem?.status === 'approved' || classItem?.status === 'denied'}
                  onClick={() => handleDeny(classItem?.id)}
                >
                  Deny
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
