import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);// setting AuthContext
const auth = getAuth(app)//getting auth from firebase

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //Register
    const createUser = (name, email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //signOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = { user, setUser, createUser, logOut, login, loading }

    //load the current user while loading the page
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {   //ei function current user er info collectkore auth theke
            console.log('current user', currentUser)
            setUser(currentUser) //collect kora info user e set kore deya hocce
            setLoading(false)
        })
        return () => {
            unsubscribe()   //just remember its cleaning the listner of useEffect
        }

    }, [])

    return (
        // AuthContext.Provider er vitor router er sob jinis ache "children" hisebe 
        // so children sobai "authInfo" access korte parbe
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;