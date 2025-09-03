import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function () {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')
    const [host, setHost] = useState('')
    const [desc, setDesc] = useState('')
    const [position, setPosition] = useState('')
    const [isPast, setIsPast] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const eventData = {
            title,
            location,
            imageUrl,
            date,
            price,
            host,
            desc,
            position,
            isPast
        }
        try {
            const response = await fetch('http://localhost:4000/event', {
                method: 'POST',
                body: JSON.stringify(eventData)
            })
            setLoading(false)
            navigate('/event')
        } catch (error) {
            setError(error)
            setTimeout(() => {
                setError('')
            }, 6000);
        }
    }

    const handleDate = (e) => {
        const input = e.target.value
        const inputDate = new Date(input)
        const today = new Date()
        setDate(input)
        // setDate(input)
        inputDate.setHours(0,0,0,0)
        today.setHours(0,0,0,0)

        if(inputDate < today){
            setIsPast(true)
        } else{
            setIsPast(false)
        }
    }
    
    {loading && <div>Creating event...</div>}

    return (
        <>
        <div className="create-container" style={{padding: '1rem'}}>
                <div style={{fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem'}}>Create New Events</div>
            <div className="create-card">
                <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '2rem'}}>Event Details</div>
                <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label>Event Name</label>
                <input 
                type="text"
                placeholder="Type your event name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                    />
            </div>
            
            <div className="form-group">
                <label>Event Location</label>
                <input 
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Choose event location"
                required
                    />
            </div>

            <div className="form-group">
                <label>Select Event Date</label>
                <input 
                type="date"
                placeholder="Choose Event Date"
                onChange={handleDate}
                required
                    />
            </div>

            <div className="form-group">
                <label>Select Event Price</label>
                <input 
                type="value"
                placeholder="Choose Event Price"
                onChange={(e) => setPrice(e.target.value)}
                required
                    />
            </div>

            <div className="form-group">
                <label>Event Host Name</label>
                <input 
                type="value"
                placeholder="Enter event host name"
                onChange={(e) => setHost(e.target.value)}
                required
                    />
            </div>

            <div className="form-group">
                <label>Select Event Position</label>
                <input 
                type="text"
                placeholder="Enter position"
                onChange={(e) => setPosition(e.target.value)}
                required
                    />
            </div>

            <div className="form-group">
                <label>Event Url</label>
                <input 
                type="text"
                placeholder="Enter event url"
                onChange={(e) => setImageUrl(e.target.value)}
                required
                    />
            </div>

            <div className="form-group">
                <label>Event Description</label>
                <textarea 
                type="text"
                placeholder="Type your event description"
                onChange={(e) => setDesc(e.target.value)}
                required
                    />
            </div>
            {error && <p style={{marginBottom: '1rem', color: 'red', fontWeight: 'bold'}}>Error submitting form</p>}
        <button type="submit" className="btn">Create events</button>
    </form>
            </div>
        </div>
        </>
    )
}
