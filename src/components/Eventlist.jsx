import Eventcard from "./Eventcard"

export default function Eventlist({ events }) {

    return (
        <div className="event-container">
            {
                events.map(event => <Eventcard key={event.id} event={event} />)
            }
        </div>
    )
}