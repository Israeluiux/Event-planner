import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomeLayout';
import Dashboard from './pages/Dashboard';
import PopularEvent from './pages/PopularEvent';
import SingleEvent from './pages/SingleEvent';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/MyEvents';
import Profile from './pages/Profile';
import ManageEvent from './pages/ManageEvent';
import EditEventPage from './pages/EditEventPage';

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
            <Route path='create-event' element={<CreateEvent />} />
            <Route path='myevents/manage-event/:id' element={<ManageEvent />} />
            <Route path='myevents' element={<MyEvents />} />
            <Route path='profile' element={<Profile />} />
            <Route path='myevents/manage-event/:id/edit-event' element={<EditEventPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;