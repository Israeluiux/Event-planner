import { NavLink, Link } from "react-router-dom"
import Eventlist from "../components/Eventlist"
import { useEffect, useState } from "react"
import CategoryCard from "../components/CategoryCard"
import Subhead from "../components/Subhead"

const Dashboard = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:4000/event')
                const data = await response.json()
                setEvent(data.slice(0,3))
            } catch (error) {
                console.error(error)
            }
        }

        fetchdata()
    }, [])

    return (
        <div className="dashboard-container">
            <div className="top-container" >
                <div className="user-detail" style={{color: 'white', marginLeft: '1rem'}}>
                    <div style={{marginBottom: '0.5rem'}}>Hi Welcome 👋🏼</div>
                    <p style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Balogun Israel</p>
                </div>
                <div>
                    <input type="text" placeholder="Find amazing events" />
                </div>
            </div>

            {/* bottom container */}
            <div className="bottom-container" style={{padding: '1.5rem'}}>
            <Subhead title='Popular Events 🔥' link='View all' />
            <Eventlist events={event} />
            <Subhead title='Choose By Category✨' link='View all' />
            <div className="filters">
                <NavLink to='/' className={({isActive}) => isActive ? 'category activecom' : 'category'}>Design</NavLink>
                <NavLink to='oo' className="category">Art</NavLink>
                <NavLink className="category">Sports</NavLink>
                <NavLink className="category">Music</NavLink>
            </div>
            <CategoryCard events={event} />
            </div>
        </div>
    )
}

export default Dashboard