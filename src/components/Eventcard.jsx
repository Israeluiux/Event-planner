import { Link } from "react-router-dom"

export default function({ event }) {
    const titlee = event.title.substring(0, 20) + '...'
    const locations  = event.location.substring(0, 15) + '...'


    return(
            <div className="event-card">
                <img src={event.imageUrl} alt="" />
                <div className="title">{titlee}</div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: '#4A4D55'}}>
                    <div className="date">{event.date}</div>
                    <div className="location">{locations}</div>
                </div>
                <div className="btn">
                <Link to={`${event.id}`}>Join Now</Link>
                </div>
        </div>
    )
}