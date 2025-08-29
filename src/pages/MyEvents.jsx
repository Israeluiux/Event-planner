import { useState, useEffect } from "react"
import Eventcard from "../components/Eventcard"
import { Link, useNavigate, useParams } from "react-router-dom"

const MyEvents = () => {
    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
    const fetchdata = async () => {
        try {
            const response = await fetch('http://localhost:4000/event')
            const data = await response.json()
            setEvent(data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    fetchdata()
    }, [])

    const handleDelete = async () => {
        if(window.confirm('are you sure you want to delete?'))
        try {
            const response = await fetch(`http://localhost:4000/event/${id}`, {
                method: 'DELETE'
            })
            if(!response.ok){
                return 'Failed to fetch events'
            }

            navigate('/myevents')
        } catch (error) {
            console.error(error)
        }
    }

    if(loading === true){
        return <div>Loading</div>
    }

    
    return (
        <>
           <div className="popular-container">
             <div className="event-container">
            {
                event.map(events => ( 

                <div className="event-card">
                <img src={events.imageUrl} alt="" />
                <div className="title">{events.title.substring(0, 20)}...</div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: '#4A4D55'}}>
                    <div className="date">{events.date}</div>
                    <div className="location">{events.location.substring(0, 15)}</div>
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