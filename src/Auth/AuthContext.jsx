import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedUser = localStorage.getItem("userdetails");
        if(storedUser){
            setAuth(JSON.parse(storedUser))
        }
        setLoading(false)
    }, [])

    const login = async (username, password) => {
        let response = await fetch(`http://localhost:4000/users?username=` + username)
        let data = await response.json()

        if(data.length === 0){
            throw new Error('User not found')
        } else if(data[0].password !== password){
            throw new Error('Wrong password')
        }else if(data.length > 0 && data[0].password === password){
            const details = { id: data[0].id, username: data[0].username }
            setAuth(details)
            console.log('cool')
            localStorage.setItem("userdetails", JSON.stringify(details))
            return true
        } else {
            throw new Error('Something went wrong')
        }
        // console.log(username, password)
    }

    const logout = () => {
        setAuth(null)
        localStorage.removeItem("userdetails")
    }

    return(
    <AuthContext.Provider value={{auth, login, loading, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
