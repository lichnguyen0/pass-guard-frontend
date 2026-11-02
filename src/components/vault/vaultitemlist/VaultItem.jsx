import React from 'react';
import SiteIcon from '../../ui/siteicon/SiteIcon';

const VaultItem = ({ item, isSelected, onClick }) => {
  return (
    <div 
      className={`list-item ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <SiteIcon name={item.websiteName} url={item.websiteUrl ? item.websiteUrl.split(',')[0].trim() : ''} />
      <div className="item-info">
        <div className="item-title">{item.websiteName}</div>
        <div className="item-subtitle">{item.username || 'No username'}</div>
      </div>
    </div>
  );
};

export default VaultItem;
