import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function SingleEvent () {
    const [event, setEvent] = useState()
    const [Loading, setLoading] = useState(true)
    const { id } = useParams()
    
    useEffect(() => {
    const fetchdata = async () => {
        try {
            const response = await fetch(`http://localhost:4000/event/${id}`)
            const data = await response.json()
            setEvent(data)
            setLoading(false)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    fetchdata()
    }, [])

    if(Loading == true){ return <div>Loading...</div>}

    return(
        <>
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
                            <div className="username">{event.username}</div>
                            <div className="position">{event.position}</div>
                        </div>
                    </div>
                    <div className="desc">Description</div>
                    <p>{event.desc}</p>
                    <div className="btns" style={{marginBottom: '2rem', marginTop: '2rem'}}>
                        <Link>Save for later</Link>
                        <Link className="buy">Buy a ticket</Link>
                    </div>
                </div>
                {/* END OF SINGLE CARD */}
            </div>
        </>
    )
}

