import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/" className="logo" style={{textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem', color: '#F76B10'}}>Event Planner</Link>
      <div className='side-links'>
        <ul style={{listStyle: 'none'}}>
          <li><Link to='dashboard'>Dashboard</Link></li>
          <li><Link to='event'>Popular Events</Link></li>
          <li><Link to='create-event'>Create Events</Link></li>
          <li><Link to='calendar'>Calendar</Link></li>
          <li><Link to='map'>Map</Link></li>
          <li><Link to='profile'>Profile</Link></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
