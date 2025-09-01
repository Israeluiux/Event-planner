import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

export default function EditEvent() {
    const navigate = useNavigate()
    const [userdata, setUserdata] = useState({title: '',location: '',date: '',price: '',host: '',position: '',imageUrl: '',desc: ''})
    const { id } = useParams()
    
    
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`http://localhost:4000/event/${id}`)
                const data = await response.json()
                if(!response.ok){
                    throw new Error('Unable to fetch events')
                }
                console.log(data)
                setUserdata(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [id])
    
    const handleChange = (e) => {
    let { name, value } = e.target;
    setUserdata(prevEvent => ({ ...prevEvent, [name]: value }));
    };

    const hey = async (e) => {
        e.preventDefault()
        console.log('Triggered');

        try {
            const response = await fetch(`http://localhost:4000/event/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(userdata),})

        if (!response.ok) {
            throw new Error('Failed to update post');
        }
        navigate(`/myevents`)
        const data = await response.json()
        console.log('newdata', data)
        } catch (error) {
        console.error(error)
        } finally {
            console.log('hello')
        }

    }

    return (
        <>
        <div className="create-container" style={{padding: '1rem'}}>
            <div className="create-card">
                <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '2rem'}}>Edit Event Details</div>
        <form onSubmit={hey} className="form">
            <div className="form-group">
                <label>Event Name</label>
                <input 
                type="text"
                name="title"
                placeholder="Type your event name"
                value={userdata.title}
                onChange={handleChange}
                required
                    />
            </div>
            
            <div className="form-group">
                <label>Event Location</label>
                <input 
                type="text"
                name="location"
                value={userdata.location}
                onChange={handleChange}
                placeholder="Choose event location"
                required
                    />
            </div>

            <div className="form-group">
                <label>Select Event Date</label>
                <input 
                type="date"
                name="date"
                value={userdata.date}
                placeholder="Choose Event Date"
                onChange={handleChange}
                required
                    />
            </div>

            <div className="form-group">
                <label>Select Event Price</label>
                <input 
                type="text"
                name="price"
                value={userdata.price}
                placeholder="Choose Event Price"
                onChange={handleChange}
                required
                    />
            </div>

            <div className="form-group">
                <label>Event Host Name</label>
                <input 
                type="text"
                name="host"
                value={userdata.host}
                placeholder="Enter event host name"
                onChange={handleChange}
                required
                    />
            </div>

            <div className="form-group">
                <label>Select Event Position</label>
                <input 
                type="text"
                name="position"
                value={userdata.position}
                placeholder="Enter position"
                onChange={handleChange}
                required
                    />
            </div>

            <div className="form-group">
                <label>Event Url</label>
                <input 
                type="text"
                name="imageUrl"
                value={userdata.imageUrl}
                placeholder="Enter event url"
                onChange={handleChange}
                required
                    />
            </div>

            <div className="form-group">
                <label>Event Description</label>
                <textarea 
                type="text"
                name="desc"
                value={userdata.desc}
                placeholder="Type your event description"
                onChange={handleChange}
                required
                    />
            </div>
        <button type="submit" className="btn">Update Post</button>
    </form>
            </div>
        </div>
        </>
    )
}