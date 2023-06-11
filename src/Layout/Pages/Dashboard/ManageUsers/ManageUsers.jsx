import { useEffect, useState } from 'react';

const ManageUsers = () => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/users');
            const data = await response.json();
            setUsersData(data);
        };

        fetchData();
    }, []);
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
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Make Instructor
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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