import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FacebookDashboard from './pages/FacebookDashboard';
import GoogleAdsDashboard from './pages/GoogleAdsDashboard';
import InstagramDashboard from './pages/InstagramDashboard';
import Profile from './pages/Profile';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={ <Dashboard /> } />
      <Route path='profile' element={ <Profile /> } />
      <Route path='facebook_dashboard' element={ <FacebookDashboard /> } />
      <Route path='googleads_dashboard' element={ <GoogleAdsDashboard /> } />
      <Route path='instagram_dashboard' element={ <InstagramDashboard /> } />
    </Routes>
   </Router>
  );
}

export default App;
