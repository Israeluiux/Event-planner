import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Loading from "../components/Loading"
import Error from "../components/Error"

export default function ManageEvent(){
    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`http://localhost:4000/event/${id}`)
                const data = await response.json()
                if(!response.ok){
                    throw new Error('Failed to fetch events')
                }
                setEvent(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchdata()
    }, [id])

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

    if(loading === true){  return <Loading />  }
    if(error){  return <Error />  }

    return(
        <div className="single-container">
            <div className="single-card">
                    <img src={event.imageUrl} alt='' />
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                        <div>
                            <div className="title">{event.title}</div>
                            <div className="location">{event.location}</div>
                        </div>
                        <div>
                            <div className="price">{event.price} USD</div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="user-detail" style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
                        <div className="image"><img src="" alt="" /></div>
                        <div>
                            <div className="username">{event.host}</div>
                            <div className="position">{event.position}</div>
                        </div>
                    </div>
                    <div className="desc">Description</div>
                    <p>{event.desc}</p>
                    <div className="btns" style={{marginBottom: '2rem', marginTop: '2rem'}}>
                        <Link to='edit-event' className="edit">Edit</Link>
                        <button className="delete" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
        </div>
    )
}