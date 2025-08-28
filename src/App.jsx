import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomeLayout';
import Dashboard from './pages/Dashboard';
import PopularEvent from './pages/PopularEvent';
import SingleEvent from './pages/SingleEvent';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='event' element={<PopularEvent />} />
            <Route path='event/:id' element={<SingleEvent />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;