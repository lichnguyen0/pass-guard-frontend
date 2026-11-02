import React from 'react';

const SidebarNavItem = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <div 
      className={`nav-item ${isActive ? 'active' : ''}`} 
      onClick={onClick}
    >
      <Icon size={16} /> {label}
    </div>
  );
};

export default SidebarNavItem;
