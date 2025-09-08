import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { FaCalendar, FaLocationArrow } from 'react-icons/fa'
import Error from "../../components/States/Error"
import Loading from "../../components/States/Loading"

const Adminevent = () => {
    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState([])
    const [error, setError] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
    const fetchdata = async () => {
        try {
            const [response1, response2] =  [ await fetch('http://localhost:4000/admin'),
                                              await fetch('http://localhost:4000/event')
            ] 
            const data = await response1.json()
            const data1 = await response2.json()

            const data3 = [...data, ...data1]
            setEvent(data3)
            // setEvent(data)
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

    
    return (
        <>
           <div className="popular-container">
                <div style={{fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem'}}>Manage events</div>
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
                {/* <Link className="edit" to={`manage-event/${events.id}`}>Manage event</Link> */}
                </div>
                 </div>
                ))
            }
            </div>
           </div>
        </>
    )
}

export default Adminevent