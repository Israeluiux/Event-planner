import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import React, { useState, useEffect } from 'react';


const Home = () => {
  
  return (
    <div>
      <aside>

      <Sidebar />
      </aside>
      <main style={{marginLeft: '285px'}}>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
