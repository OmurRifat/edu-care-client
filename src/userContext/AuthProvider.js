import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = { user, setUser, googleSignIn }

    console.log(user)
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;