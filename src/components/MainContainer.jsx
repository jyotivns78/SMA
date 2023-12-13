// MainContainer.js
import React from 'react';
import "../assets/css/FacebookDashboard.css";

const MainContainer = ({ isSidebarOpen, children }) => {
  const mainContainerStyle = {
    marginLeft: isSidebarOpen ? '60px' : '0px',
    transition: 'margin-left 0.3s ease-in-out',
    width: 'calc(100% - 60px)',
    
  };

  return (
    <div className="main-container" style={mainContainerStyle}>
      {children}
    </div>
  );
};

export default MainContainer;
