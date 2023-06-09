import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

// This is default AuthContext file to share value
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const userSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("currentUser", currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [reload])

    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // Fetching data by useEffect for classes
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("classes.json");
            const newData = await response.json();
            setClasses(newData);
        };

        fetchData();
    }, []);

    // Fetching data by useEffect for instructors
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("instructors.json");
            const newData = await response.json();
            setInstructors(newData);
        };

        fetchData();
    }, []);

    const authInfo = {
        user,
        loading,
        setReload,
        userSignUp,
        updateUserProfile,
        userSignIn,
        userSignOut,
        classes,
        instructors
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;