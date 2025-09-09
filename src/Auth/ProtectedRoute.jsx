import { AuthContext } from "./AuthContext"
import { Navigate, useNavigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import AdminLayout from "../Admin/Pages/AdminLayout"

const ProtectedRoute = () => {
    const { auth, loading } = useContext(AuthContext)

    if(loading) {
        return <p>Loading....⌛</p>
    }
    if(!auth){
        return <Navigate to='/' replace />
    }

    return <AdminLayout />
}

export default ProtectedRoute