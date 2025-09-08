import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null)

    const login = async (username, password) => {
        let response = await fetch(`http://localhost:4000/users?username=${username}`)
        let data = await response.json()
        console.log(response)
        console.log(data)
        if(data.length > 0 && data[0].password === password){
            setAuth({ id: data[0].id, username: data[0].username })
            console.log('cool')
        } else {
            console.log('invalid credentials')
        }
        // console.log(username, password)
    }

    return(
    <AuthContext.Provider value={{auth, login}}>
            {children}
        </AuthContext.Provider>
    )
}
