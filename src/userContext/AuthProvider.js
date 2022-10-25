import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const registerEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPassSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    const gitHubSignIn = (gitProvider) => {
        return signInWithPopup(auth, gitProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = { user, setUser, registerEmailPass, emailPassSignIn, googleSignIn, gitHubSignIn, logOut }

    console.log(user)
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;