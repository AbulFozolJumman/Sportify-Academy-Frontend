import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';

const ManageUsers = () => {
  const [usersData, setUsersData] = useState([]);

  //   Using axios to fetch data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sportify-academy-server.vercel.app/users');
        setUsersData(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  //   Using tanstack query
  const makeInstructorMutation = useMutation((userId) =>
  fetch(`https://sportify-academy-server.vercel.app/users/${userId}/role`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ role: 'instructor' }),
  })
);

  //   Using tanstack query
const makeAdminMutation = useMutation((userId) =>
  fetch(`https://sportify-academy-server.vercel.app/users/${userId}/role`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ role: 'admin' }),
  })
);

const handleMakeInstructor = (userId) => {
  makeInstructorMutation.mutate(userId);
};

const handleMakeAdmin = (userId) => {
  makeAdminMutation.mutate(userId);
};

  return (
    <div className='bg-green-100 mb-12 max-w-7xl mx-auto'>
      <table className="table-auto w-full bg-green-100">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user?.id}>
              <td className="border px-4 py-2">{user?.name}</td>
              <td className="border px-4 py-2">
                <img src={user?.image} alt={user?.name} className="h-16 w-16 object-cover" />
              </td>
              <td className="border px-4 py-2">{user?.role}</td>
              <td className="border px-4 py-2">{user?.email}</td>
              <td className="border px-4 py-2 flex">
                <button
                  className={`${
                    (user?.role === 'admin' || user?.role === 'instructor') ? 'bg-black text-white' : 'bg-green-500 hover:bg-green-700 text-white'
                  } font-bold py-2 px-4 rounded mr-2`}
                  onClick={() => handleMakeInstructor(user?.id)}
                  disabled={user?.role === 'instructor' || user?.role === 'admin'}
                >
                  Make Instructor
                </button>
                <button
                  className={`${
                    user?.role === 'admin' ? 'bg-black text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'
                  } font-bold py-2 px-4 rounded`}
                  onClick={() => handleMakeAdmin(user?.id)}
                  disabled={user?.role === 'admin'}
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
