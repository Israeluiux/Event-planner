import { Link } from "react-router-dom"

export default function CategoryCard({ events }){
    return(
        <>
        {
            events.map((each) => (

            <div className="category-card">
                {/* right side of the container */}
                <div style={{display: 'flex', gap: '1rem'}}>
                    <div className="categoryImg"><img src={each.imageUrl} alt="" /></div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div className="title" style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '.5rem'}}>{each.title}</div>
                        <div style={{display: 'flex', gap: '3rem'}}>
                            <div className="date">{each.date}</div>
                            <div className="location">{each.location}</div>
                        </div>
                    </div>
                </div>
                {/* right side of the container */}
                <div className="left-card">
                    <div className="price">{each.price} USD</div>
                    <Link to={`${each.id}`}>Join Now</Link>
                </div>
            </div>
            ))
        }
        </>
    )
}