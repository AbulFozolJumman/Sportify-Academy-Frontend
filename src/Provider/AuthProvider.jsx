import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

// This is default AuthContext file to share value
export const AuthContext = createContext();
const auth = getAuth(app);
// Firebase googleProvider
const googleProvider = new GoogleAuthProvider();
// Firebase githubProvider
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    // Firebase createUser by email and password
    const userSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Firebase updateUserData for update displayName and photoURL
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // Firebase user auth state change observer
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

    // Firebase signInWithEmailAndPassword by email and password
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // Firebase Google sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Firebase Github sign in
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // Firebase user signOut
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // Fetching data by useEffect for classes
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5000/classes");
            const newData = await response.json();
            setClasses(newData);
        };
        fetchData();
    }, []);

    // Fetching data by useEffect for classes
    const [topClasses, setTopClasses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5000/topClasses");
            const newData = await response.json();
            setTopClasses(newData);
        };
        fetchData();
    }, []);

    // Fetching data by useEffect for instructors
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5000/users?role=instructor");
            const newData = await response.json();
            setInstructors(newData);
        };

        fetchData();
    }, []);

    // All the context value
    const authInfo = {
        user,
        setUser,
        loading,
        setReload,
        userSignUp,
        updateUserProfile,
        userSignIn,
        googleSignIn,
        githubSignIn,
        userSignOut,
        classes,
        topClasses,
        instructors
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;