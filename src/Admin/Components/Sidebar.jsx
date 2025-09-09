import { NavLink, Link } from 'react-router-dom';
import { FaUser, FaStar, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa'
import { AuthContext } from '../../Auth/AuthContext';
import { useContext } from 'react';

const AdminSidebar = () => {
  const { logout } = useContext(AuthContext)

  const handleLogOut = () => {
    window.confirm('Are you sure you want to logout?')
    logout()
  }


  return (
    <aside className="sidebar">
      <NavLink to="/" className="logo" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem', color: '#F76B10'}}>Event Planner</NavLink>
      <div className='side-links'>
        <ul style={{listStyle: 'none'}}>
          <li><NavLink className={({isActive}) => isActive ? 'navlink active linkactive' : 'navlink'} to='/admin'><FaUser style={{marginRight: '.5rem'}}/>Dashboard</NavLink></li>
          <li><NavLink className='navlink' to='all-event'><FaStar style={{marginRight: '.5rem'}}/>All Events</NavLink></li>
          <li><NavLink className='navlink' to='create-event'><FaPlusCircle style={{marginRight: '.5rem'}}/>Create Events</NavLink></li>
          <li><Link className='navlink' onClick={handleLogOut} style={{color: 'red'}} to='/'><FaSignOutAlt style={{marginRight: '.5rem', color: 'red'}}/>Log out</Link></li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;