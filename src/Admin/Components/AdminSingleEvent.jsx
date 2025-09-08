import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Error from "../../components/States/Error"
import Loading from "../../components/States/Loading"

export default function AdminSingleEvent () {
    const [event, setEvent] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const { id } = useParams()
    const navigate = useNavigate()


        useEffect(() => {
        const fetchdata = async () => {
            try {
                const [response1, response2] = await Promise.all([
                    fetch(`http://localhost:4000/admin/${id}`),
                    fetch(`http://localhost:4000/event/${id}`),   
                ])
                const adminevent = response1.ok ? await response1.json() : null
                const myevent = response2.ok ?  await response2.json() : null
                setEvent(adminevent || myevent)
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
            const [response, response1] = [await fetch(`http://localhost:4000/event/${id}`, {
                                            method: 'DELETE'
                                            }),
                                           await fetch(`http://localhost:4000/admin/${id}`, {
                                            method: 'DELETE'
                                            })]

            navigate('/admin/all-event')
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

