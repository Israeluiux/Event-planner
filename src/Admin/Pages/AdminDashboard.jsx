import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import Morecard from "../../components/Morecard"
import Loading from "../../components/States/Loading"
import Error from "../../components/States/Error"
import { AuthContext } from "../../Auth/AuthContext"

const AdminDashboard = () => {

    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState(0)
    const [user, setUser] = useState(0)
    const [error, setError] = useState('')
    const { auth } = useContext(AuthContext)

    useEffect(() => {
    const fetchdata = async () => {
        try {
            const [response1, response2, response3] = await Promise.all([  fetch('http://localhost:4000/admin'),
                                                                fetch('http://localhost:4000/event'),
                                                                fetch('http://localhost:4000/users')
            ])
            const data = await response1.json()
            const data1 = await response2.json()
            const data2 = await response3.json()

            const data3 = [...data, ...data1]
            setEvent(data3.length)
            setUser(data2.length)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
            console.log(error)
        }
    }

    fetchdata()
    }, [])

    if(loading){ return <Loading /> }
    if(error){ return <Error /> }

    return(
        <>
            <div className="dashboard-container">
                <div className="top-container" >
                    <div className="user-detail" style={{color: 'white', marginLeft: '1rem'}}>
                        <div style={{marginBottom: '0.5rem'}}>Hi Welcome 👋🏼</div>
                        {auth ?<p style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{auth.username}(admin)</p>:  <p style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Admin</p>}
                    </div>
                    <div style={{display: 'flex', marginRight: '1rem'}}>
                        <div style={{position: 'relative'}}>
                            <input type="text" placeholder={`Find amazing events`} />
                            <FaSearch style={{position: 'absolute', right: '30', top: '15', color: 'white'}} />
                        </div>
                        <Link to='/' className="admin">User</Link>
                    </div>
                </div>

            <div className="popular-container" style={{padding: '1rem'}}>
                <div className="create-card">
                    <p style={{fontSize: '1.4rem', fontWeight: 'bold'}}>Statistics</p>
                    <div style={{display: 'flex', gap:'1rem'}}>
                        <Morecard name='Events Created' amount={event} />
                        <Morecard name='Total Users' amount={user} />
                        <Morecard name='Upcoming Events' amount={0} />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default AdminDashboard