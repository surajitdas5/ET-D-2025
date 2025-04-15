import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ isSignedIn, setIsSignedIn ] = useState(false)
    const toggleSignedIn = () => {
      setIsSignedIn(!isSignedIn)
    }

     return (
        <AuthContext.Provider value={{ isSignedIn, toggleSignedIn }}>
            { children }
        </AuthContext.Provider>
     )
}

export const useAuth = () => {
    return useContext(AuthContext)
}