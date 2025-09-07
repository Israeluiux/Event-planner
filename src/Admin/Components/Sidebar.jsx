import { NavLink } from 'react-router-dom';
import { FaCalendar, FaUser, FaMapMarkedAlt, FaStar, FaDashcube, FaPlusCircle } from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="logo" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem', color: '#F76B10'}}>Event Planner</NavLink>
      <div className='side-links'>
        <ul style={{listStyle: 'none'}}>
          <li><NavLink className={({isActive}) => isActive ? 'navlink active linkactive' : 'navlink'} to='/admin'><FaUser style={{marginRight: '.5rem'}}/>Dashboard</NavLink></li>
          <li><NavLink className='navlink' to='all-event'><FaStar style={{marginRight: '.5rem'}}/>All Events</NavLink></li>
          <li><NavLink className='navlink' to='create-event'><FaPlusCircle style={{marginRight: '.5rem'}}/>Create Events</NavLink></li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;