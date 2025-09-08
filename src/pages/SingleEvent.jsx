import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import SingleEventCard from "../components/SingleEventCard"
import Error from "../components/States/Error"
import Loading from "../components/States/Loading"

export default function SingleEvent () {
    const [event, setEvent] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const { id } = useParams()


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
    
    
    if(loading == true){ return <Loading />}
    if(error){ return <Error />}

    return(
        <>
            <div className="single-container">
                <SingleEventCard event={event} />
                {/* END OF SINGLE CARD */}
            </div>
        </>
    )
}

