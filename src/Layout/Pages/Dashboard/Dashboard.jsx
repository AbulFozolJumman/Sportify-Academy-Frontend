import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import ManageClasses from './ManageClasses/ManageClasses';
import ManageUsers from './ManageUsers/ManageUsers';
import EnrolledClasses from './EnrolledClasses/EnrolledClasses';
import AddAClass from './AddAClass/AddAClass';
import MyClasses from './MyClasses/MyClasses';
import { Slide } from 'react-awesome-reveal';
import SelectedClasses from './SelectedClasses/SelectedClasses';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://sportify-academy-server.vercel.app/user?email=${user?.email}`);
      const newData = await response.json();
      setUserEmail(newData);
    };

    fetchData();
  }, [user?.email]);

  const role = userEmail[0]?.role;

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  const renderButtons = () => {
    switch (role) {
      case 'student':
        return (
          <div className="flex justify-center gap-5 mb-12">
            <button
              className="block font-bold py-2 px-4 rounded text-white hover:bg-blue-700 bg-blue-500"
              onClick={() => handleButtonClick(<SelectedClasses />)}
            >
              My Selected Classes
            </button>
            <button
              className="block font-bold py-2 px-4 rounded text-white hover:bg-blue-700 bg-blue-500"
              onClick={() => handleButtonClick(<EnrolledClasses />)}
            >
              My Enrolled Classes
            </button>
          </div>
        );
      case 'instructor':
        return (
          <div className="flex justify-center gap-5 mb-12">
            <button
              className="block font-bold py-2 px-4 rounded text-white hover:bg-blue-700 bg-blue-500"
              onClick={() => handleButtonClick(<AddAClass />)}
            >
              Add a Class
            </button>
            <button
              className="block font-bold py-2 px-4 rounded text-white hover:bg-blue-700 bg-blue-500"
              onClick={() => handleButtonClick(<MyClasses />)}
            >
              My Classes
            </button>
          </div>
        );
      case 'admin':
        return (
          <div className="flex justify-center gap-5 mb-12">
            <button
              className="block font-bold py-2 px-4 rounded text-white hover:bg-blue-700 bg-blue-500"
              onClick={() => handleButtonClick(<ManageClasses />)}
            >
              Manage Classes
            </button>
            <button
              className="block font-bold py-2 px-4 rounded text-white hover:bg-blue-700 bg-blue-500"
              onClick={() => handleButtonClick(<ManageUsers />)}
            >
              Manage Users
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen'>
      <Helmet>
          <title>Sportify Academy | Dashboard</title>
        </Helmet>
      <Slide>
        <h2 className="text-4xl font-bold text-center text-blue-500 py-12">Welcome to the Dashboard!</h2>
      </Slide>
      <div>{renderButtons()}</div>
      {selectedComponent && <div>{selectedComponent}</div>}
    </div>
  );
};

export default Dashboard;
