import { useState, useEffect } from "react"
import Eventcard from "../components/Eventcard"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function PopularEvent () {
    const [event, setEvent] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const [response1, response2] = await Promise.all([
                    fetch('http://localhost:4000/admin'),
                    fetch('http://localhost:4000/event'),   
                ])
                const adminevent = await response1.json()
                const myevent = await response2.json()
                const allEvent = [...adminevent, ...myevent]
                setEvent(allEvent)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        fetchdata()
    }, [])

    if(loading === true){
        return <div>Loading</div>
    }

    return (
        <div className="popular-container">
            <div style={{fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem'}}>Popular Events🔥</div>
            <div className="input"><input type="text" placeholder="Seach amazing events" onChange={(e) => setSearch(e.target.value)} /></div>
            <div className="filters">
                <Link className="upcoming" style={{color: '#F76B10', background: '#fff'}}>All</Link>
                <Link className="upcoming">Upcoming</Link>
                <Link className="upcoming">Past Event</Link>
            </div>

            <div className="event-container">
            {
                event.filter((event) =>  {return search === '' ? event : event.title.includes(search)}
                ).map(event => (
                    <Eventcard key={event.id} event={event} />
                ))
                
            }
            
            </div>
        </div>
    )
}