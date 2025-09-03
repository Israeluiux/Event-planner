import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { FaCalendar, FaLocationArrow } from 'react-icons/fa'
import Loading from "../components/Loading"
import Error from "../components/Error"

const MyEvents = () => {
    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState([])
    const [error, setError] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
    const fetchdata = async () => {
        try {
            const response = await fetch('http://localhost:4000/event')
            const data = await response.json()

            const today = new Date()
                today.setHours(0,0,0,0)

            const updatedData = data.map((item) => {
                const itemDate = new Date(item.date)
                itemDate.getHours(0,0,0,0)

                return {...item, isPast: itemDate < today}
            })
            setEvent(updatedData)
            // setEvent(data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    fetchdata()
    }, [])

    if(loading){ return <Loading /> }
    if(error){ return <Error /> }

    
    return (
        <>
           <div className="popular-container">
                <div style={{fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem'}}>Manage my events</div>
             <div className="event-container">
            {
                event.map((events) =>  ( 
                    
                <div className="event-card" key={events.id}>
                <img src={events.imageUrl} alt="" />
                <div className="title">{events.title.substring(0, 20)}...</div>
                {/* <div className="title">{events.title}...</div> */}
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: '#4A4D55'}}>
                    <div className="date"><FaCalendar size={13} color="#F76B10" /> {events.date}</div>
                    {/* <div className="location">{events.location}</div> */}
                    <div className="location"><FaLocationArrow size={13} color="#F76B10" /> {events.location.substring(0, 15)}</div>
                </div>
                <div className="btn">
                <Link className="edit" to={`manage-event/${events.id}`}>Manage event</Link>
                </div>
                 </div>
                ))
            }
            </div>
           </div>
        </>
    )
}

export default MyEvents