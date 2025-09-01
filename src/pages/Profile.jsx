import { useEffect, useState } from "react"
import Morecard from "../components/Morecard"
import dp from '../assets/dp.jpg'

export default function Profile(){
    const [eventAvail, setEventAvail] = useState(0)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`http://localhost:4000/event`)
                const data = await response.json()
                setEventAvail(data.length)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    })
    return (
        <>
        <section className="popular-container">
            <div className="create-card">
                <div style={{fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem'}}>My Profile👤</div>
                <div className="images"><img style={{objectFit: 'cover', width: '100%', height: '100%', borderRadius: '12rem'}} src={dp} alt="" /></div>
                <div style={{fontSize: '1.3rem', fontWeight: 'bold'}}>Balogun Israel</div>
                <div style={{display: 'flex', gap:'1rem'}}>
                    <Morecard name='Events Created' amount={eventAvail} />
                    <Morecard name='Past Events' amount={0} />
                    <Morecard name='Upcoming Events' amount={eventAvail} />
                </div>
            </div>
        </section>
        </>
    )
}