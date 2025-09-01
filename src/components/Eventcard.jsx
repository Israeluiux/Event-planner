import { Link } from "react-router-dom"
import { FaCalendar, FaLocationArrow } from 'react-icons/fa'


export default function({ event }) {
    const titlee = event.title.substring(0, 20) + '...'
    const locations  = event.location.substring(0, 15) + '...'

    return(
            <div className="event-card">
                <img src={event.imageUrl} alt="" />
                <div className="title">{titlee}</div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: '#4A4D55'}}>
                    <div className="date"><FaCalendar size={13} color="#F76B10" /> {event.date}</div>
                    <div className="location"><FaLocationArrow color="#F76B10" size={13} /> {locations}</div>
                </div>
                <div className="btn">
                <Link to={`/event/${event.id}`}>Join Now</Link>
                </div>
        </div>
    )
}