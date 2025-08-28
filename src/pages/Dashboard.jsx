import { Link } from "react-router-dom"
import Eventlist from "../components/Eventlist"
import { useEffect, useState } from "react"

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
                    <p style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Guest</p>
                </div>
                <div>
                    <input type="text" placeholder="Find amazing events" />
                </div>
            </div>

            {/* bottom container */}
            <div className="bottom-container" style={{padding: '1.5rem'}}>
                <div className="popular" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                    <div style={{fontSize: '1.4rem', fontWeight: 'bold'}}>Popular Events🔥</div>
                    <Link to='popularevent' style={{textDecoration: 'none', color: '#F76B10'}}>View all</Link>
                </div>

                <Eventlist events={event} />
            </div>
        </div>
    )
}

export default Dashboard