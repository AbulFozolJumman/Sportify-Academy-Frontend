import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

// Private Route to protect Routes by user
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;
    }
    else {
        Swal.fire('You have to Login first')
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;