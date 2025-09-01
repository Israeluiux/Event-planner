const Morecard = ({ name, amount }) => {
    return (
        <>
        <div className="more-card" style={{marginTop: '2rem'}}>
                    <div style={{fontWeight: 'bold'}}>{name}</div>
                    <div style={{fontWeight: 'bold', fontSize: '1.5rem', marginTop: '2rem'}}>{amount}</div>
        </div>
        </>
    )
}

export default Morecard