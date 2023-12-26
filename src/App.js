// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FacebookDashboard from './pages/FacebookDashboard';
import GoogleAdsDashboard from './pages/GoogleAdsDashboard';
import InstagramDashboard from './pages/InstagramDashboard';
import Profile from './pages/Profile';
import LinkedInDashboard from './pages/LinkedInDashboard';
import TwitterDashboard from './pages/TwitterDashboard';
import Automation from './pages/Automation';
import SearchEngine from './pages/SearchEngine';
import Users from './pages/Users';
import Tasks from './pages/Tasks';
import Creatives from './pages/Creatives';
import Logs from './pages/Logs';
import Support from './pages/Support';
import Analytics from './pages/Analytics';
import Recommendation from './pages/Recommendation';
import Wallet from './pages/Wallet';
import BusinessName from './pages/BusinessName';
import AllInOne from './pages/AllInOne';
import Testing from './pages/Testing';
import Registration from './pages/Registration';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Register from './pages/Register';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="facebook_dashboard" element={<FacebookDashboard />} />
      <Route path="googleads_dashboard" element={<GoogleAdsDashboard />} />
      <Route path="instagram_dashboard" element={<InstagramDashboard />} />
      <Route path="linkedin_dashboard" element={<LinkedInDashboard />} />
      <Route path="twitter_dashboard" element={<TwitterDashboard />} />
      <Route path="automation" element={<Automation />} />
      <Route path="search_engine" element={<SearchEngine />} />
      <Route path="users" element={<Users />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="creatives" element={<Creatives />} />
      <Route path="logs" element={<Logs />} />
      <Route path="support" element={<Support />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="recommendation" element={<Recommendation />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="business" element={<BusinessName />} />
      <Route path="all_in_one" element={<AllInOne />} />
      <Route path="testing" element={<Testing />} />
      <Route path="login" element={<Login />} />
      <Route path="uprofile" element={<UserProfile />} />
      <Route path="uregister" element={<Register />} />
    </Routes>
  );
}

export default App;
