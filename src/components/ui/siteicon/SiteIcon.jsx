import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import './SiteIcon.css';

export const getFaviconUrl = (url) => { //Hàm lấy bieu tuong favicon
  if (!url) return null;
  try {
    let cleanUrl = url.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) {
      cleanUrl = 'https://' + cleanUrl;
    }
    const urlObj = new URL(cleanUrl);
    return `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=64`;
  } catch (e) {
    const domainRegex = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    if (domainRegex.test(url.trim())) {
      return `https://www.google.com/s2/favicons?domain=${url.trim()}&sz=64`;
    }
    return null;
  }
};

const SiteIcon = ({ name, url, className = "site-icon" }) => { //hien thi bt
  const [imgError, setImgError] = useState(false);
  const faviconUrl = getFaviconUrl(url);

  useEffect(() => {
    setImgError(false);
  }, [url]);

  if (faviconUrl && !imgError) {
    return (
      <img 
        src={faviconUrl} 
        alt={name} 
        className={`${className} favicon-img`} 
        onError={() => setImgError(true)}
      />
    );
  }

  const size = className.includes("detail-site-icon") ? 22 : 18;
  return (
    <div className={`${className} fallback-icon`}>
      <User size={size} className="fallback-svg" />
    </div>
  );
};

export default SiteIcon;
