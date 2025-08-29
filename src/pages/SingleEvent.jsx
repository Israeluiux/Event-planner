import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import SingleEventCard from "../components/SingleEventCard"

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
        } catch (error) {
            console.error(error)
        }
    }

    fetchdata()
    }, [id])

    if(Loading == true){ return <div>Loading...</div>}

    return(
        <>
            <div className="single-container">
                <SingleEventCard event={event} />
                {/* END OF SINGLE CARD */}
            </div>
        </>
    )
}

