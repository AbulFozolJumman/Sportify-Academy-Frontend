import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

// This is default AuthContext file to share value
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const authInfo = {
        auth
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;