import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null)

    return(
    <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider