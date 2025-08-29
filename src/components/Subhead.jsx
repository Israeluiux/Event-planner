import { Link } from "react-router-dom"

const Subhead = ({ title, link }) => {
    return(
        <>
            <div className="popular" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', marginTop: '1.5rem'}}>
            <div style={{fontSize: '1.4rem', fontWeight: 'bold'}}>{title}</div>
            <Link to='event' style={{textDecoration: 'none', color: '#F76B10'}}>{link}</Link>
            </div>
        </>
    )
}

export default Subhead