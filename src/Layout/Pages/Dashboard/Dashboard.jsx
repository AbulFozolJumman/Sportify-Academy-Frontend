import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Dashboard = () => {
  const {user} = useContext(AuthContext);

    // Fetching data by useEffect for getting user by email
    const [userEmail, setUserEmail] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/user?email=${user?.email}`);
            const newData = await response.json();
            setUserEmail(newData);
        };

        fetchData();
    }, [user?.email]);

    const role = userEmail[0]?.role;
  const renderButtons = () => {
    switch (role) {
      case 'student':
        return (
          <>
            <button>My Selected Classes</button>
            <button>My Enrolled Classes</button>
          </>
        );
      case 'instructor':
        return (
          <>
            <button>Add a Class</button>
            <button>My Classes</button>
          </>
        );
      case 'admin':
        return (
          <>
            <button>Manage Classes</button>
            <button>Manage Users</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <div>{renderButtons()}</div>
      {/* Render relevant information based on the selected button */}
      {/* Additional components or logic here */}
    </div>
  );
};

export default Dashboard;
