import { Outlet } from "react-router-dom"
import AdminSidebar from "../Components/Sidebar"

const AdminLayout = () => {
    return (
        <>
            <aside>
                <AdminSidebar />
            </aside>

            <main style={{marginLeft: '285px'}}>
                <Outlet />
            </main>
        </>
    )
}

export default AdminLayout