import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../assets/css/Header.css";
import { Link } from 'react-router-dom';

initMDB({ Dropdown, Collapse });

const Header = ({ mainContainerContent }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showDashboardDropdown, setShowDashboardDropdown] = useState(false);
  
    const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const handleNotificationClick = () => {
      setShowNotifications(!showNotifications);
    };
  
    const handleDashboardClick = () => {
      setShowDashboardDropdown(!showDashboardDropdown);
    };
  
    const mainContainerStyle = {
      marginLeft: isSidebarOpen ? '0px' : '0px',
      transition: 'margin-left 0.3s ease-in-out',
      width: 'calc(100% - 0px)',
    };




  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="#">SMA</Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link className="nav-link mx-2 dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  User Name
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="#">Profile</Link></li>
                  <li><Link className="dropdown-item" to="#">Logout</Link></li>
                </ul>
              </li>
              {/* Notification Icon */}
              <li className="nav-item">
                <Link className="nav-link mx-2" to="#" onClick={handleNotificationClick}>
                  <FaBell />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex-container">
      <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
    <header>
      <div class="image-text">
        <span class="image">
          <img src="logo.png" alt="" />
        </span>

        <div class="text logo-text">
          <span class="name">SMA</span>
        </div>
      </div>

      <i class='bx bx-chevron-right toggle' onClick={handleToggleSidebar}></i>
    </header>

    <div class="menu-bar">
      <div class="menu">


        <ul class="menu-links">
       
        <li className={`nav-link dropdown-btn ${showDashboardDropdown ? 'active' : ''}`}>
        <Link to="#" onClick={handleDashboardClick}>
          <i className='bx bx-home-alt icon'></i>
          <span className="text nav-text">Dashboard</span>
        </Link>
        </li>
        {showDashboardDropdown && (
          <div className="dropdown-container">
             <li>
             <Link to="facebook_dashboard">
             <i className='fab fa-facebook icon'></i>
              <span class="text nav-text">Facebook</span>
            </Link>
             </li>
           <li>
           <Link to="googleads_dashboard">
           <i className='fab fa-google icon'></i>
              <span class="text nav-text">Google Ads</span>
            </Link>
           </li>
           <li>
           <Link to="instagram_dashboard">
           <i className='fab fa-instagram icon'></i>
              <span class="text nav-text">Instagram</span>
            </Link>
           </li>
           <li>
           <Link to="#">
           <i className='fab fa-linkedin icon'></i>
              <span class="text nav-text">LinkedIn</span>
            </Link>
           </li>
           <li>
           <Link to="#">
           <i className='fab fa-twitter icon'></i>
              <span class="text nav-text">Twitter</span>
            </Link>
           </li>
          </div>
        )}
     


          <li class="nav-link">
            <Link to="#">
              <i class='bx bx-bar-chart-alt-2 icon'></i>
              <span class="text nav-text">Automation</span>
            </Link>
          </li>

          <li class="nav-link">
            <Link to="#">
              <i class='bx bx-bell icon'></i>
              <span class="text nav-text">Search Engine</span>
            </Link>
          </li>

          <li class="nav-link">
            <Link to="#">
              <i class='bx bx-user icon'></i>
              <span class="text nav-text">Users</span>
            </Link>
          </li>

          <li class="nav-link">
            <Link to="#">
            <i class='bx bx-wallet icon'></i>
              <span class="text nav-text">Management</span>
            </Link>
          </li>

          <li class="nav-link">
            <Link to="#">
            <i class='bx bx-heart icon'></i>
              <span class="text nav-text">Support</span>
            </Link>
          </li>

          <li class="nav-link">
            <Link to="#">
              <i class='bx bx-wallet icon'></i>
              <span class="text nav-text">Logs</span>
            </Link>
          </li>

             
          <li class="nav-link">
            <Link to="#">
            <i class='bx bx-bar-chart-alt-2 icon'></i>
              <span class="text nav-text">Analytics</span>
            </Link>
          </li>

          <li class="nav-link">
            <Link to="#">
              <i class='bx bx-wallet icon'></i>
              <span class="text nav-text">Reccomendation</span>
            </Link>
          </li>
        </ul>
      </div>

      <div class="bottom-content">
        <li class="">
          <Link to="#">
            <i class='bx bx-log-out icon'></i>
            <span class="text nav-text">Logout</span>
          </Link>
        </li>

        <li class="mode">
          <div class="sun-moon">
            <i class='bx bx-moon icon moon'></i>
            <i class='bx bx-sun icon sun'></i>
          </div>
          <span class="mode-text text">Dark mode</span>

          <div class="toggle-switch">
            <span class="switch"></span>
          </div>
        </li>

      </div>
    </div>

  </nav>

  <div className="main-container" style={mainContainerStyle}>
          {mainContainerContent}
        </div>
  
</div>
   
  
      {showNotifications && (
        <div className="notification-sidebar">
          <p>Notification 1</p>
          <p>Notification 2</p>
        </div>
      )}
    </div>
  );
};

export default Header;