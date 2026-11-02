import React from 'react';
import SiteIcon from '../../ui/siteicon/SiteIcon';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const FormTitleField = () => {
  const { formData, setFormData } = useVaultFormCtx();

  return (
    <div className="detail-card">
      <div className="detail-row no-border" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <SiteIcon name={formData.websiteName || 'New'} url={formData.websiteUrls[0]} className="detail-site-icon" />
        <div className="detail-row-content" style={{ flex: 1 }}>
          <div className="detail-row-label">Tiêu đề</div>
          <input 
            type="text" 
            className="edit-title-input"
            placeholder="Không có tiêu đề" 
            value={formData.websiteName} 
            onChange={e => setFormData({...formData, websiteName: e.target.value})} 
            required 
          />
        </div>
      </div>
    </div>
  );
};

export default FormTitleField;
