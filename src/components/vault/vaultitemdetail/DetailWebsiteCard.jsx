import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const DetailWebsiteCard = () => {
  const { selectedItem } = useVaultFormCtx();

  if (!selectedItem.websiteUrl) return null;

  return (
    <div className="detail-card">
      {selectedItem.websiteUrl.split(',').map(s => s.trim()).filter(Boolean).map((url, index) => (
        <div className="detail-row no-border" key={index}>
          <div className="detail-row-left">
            <ExternalLink className="detail-row-icon" size={20} style={{ visibility: index === 0 ? 'visible' : 'hidden' }} />
            <div className="detail-row-content">
              {index === 0 && <div className="detail-row-label">Website</div>}
              <div className="detail-row-value">
                <a href={url} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                  {url}
                </a>
              </div>
            </div>
          </div>
          <div className="detail-row-right">
            <button className="icon-btn" onClick={() => window.open(url, '_blank')}><ExternalLink size={16}/></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailWebsiteCard;
