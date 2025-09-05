import { NavLink, Link } from "react-router-dom"
import Eventlist from "../components/Eventlist"
import { useEffect, useState } from "react"
import CategoryCard from "../components/CategoryCard"
import Subhead from "../components/Subhead"
import Error from "../components/Error"
import Loading from "../components/Loading"
import { FaSearch } from "react-icons/fa"

const Dashboard = () => {
    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:4000/admin')
                const data = await response.json()

                const today = new Date()
                today.setHours(0,0,0,0)

                const updatedData = data.map((item) => {
                    const itemDate = new Date(item.date)
                    itemDate.getHours(0,0,0,0)

                    return {...item, isPast: itemDate < today}
                })
                setEvent(updatedData.slice(0,3))
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchdata()
    }, [])

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }
    
    return (
        <div className="dashboard-container">
            <div className="top-container" >
                <div className="user-detail" style={{color: 'white', marginLeft: '1rem'}}>
                    <div style={{marginBottom: '0.5rem'}}>Hi Welcome 👋🏼</div>
                    <p style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Balogun Israel</p>
                </div>
                <div style={{display: 'flex', marginRight: '1rem'}}>
                    <div style={{position: 'relative'}}>
                        <input type="text" placeholder={`Find amazing events`} />
                        <FaSearch style={{position: 'absolute', right: '30', top: '15', color: 'white'}} />
                    </div>
                    <Link to='/admin' className="admin">Admin</Link>
                </div>
            </div>

            {/* bottom container */}
            <div className="bottom-container" style={{padding: '1.5rem'}}>
            <Subhead title='Popular Events 🔥' link='View all' />
            <Eventlist events={event} />
            <Subhead title='Choose By Category✨' link='View all' />
            <div className="filters">
                <NavLink to='/' className={({isActive}) => isActive ? 'category activecom' : 'category'}>🎨Design</NavLink>
                <NavLink to='oo' className="category">🎭Art</NavLink>
                <NavLink className="category">Sports</NavLink>
                <NavLink className="category">Music</NavLink>
            </div>
            <CategoryCard events={event} />
            </div>
        </div>
    )
}

export default Dashboard