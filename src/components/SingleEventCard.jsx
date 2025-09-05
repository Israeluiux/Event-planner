import { Link, useParams } from "react-router-dom"
import { FaCalendar, FaLocationArrow } from 'react-icons/fa'
import { useState } from "react"

export default function SingleEventCard({ event }){
    const [bookmark, setBookmark] = useState(false)
    const { id } = useParams()

    const Bookmarked = () => {
        setBookmark(!bookmark)
    }
    
    return (
        <>
                <div className="single-card">
                    <img src={event.imageUrl} alt='' />
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                        <div>
                            <div className="title">{event.title}</div>
                            <div className="location"><FaLocationArrow color="#F76B10" size={13} /> {event.location}</div>
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
                        <Link onClick={Bookmarked}>{bookmark === true ? 'Saved' : 'Save for later'}</Link>
                        <Link className="buy">Buy a ticket</Link>
                    </div>
                </div>
        </>
    )
}