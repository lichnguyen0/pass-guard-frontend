import React from 'react';
import { Globe, X } from 'lucide-react';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const FormWebsiteFields = () => {
  const { formData, setFormData } = useVaultFormCtx();

  return (
    <div className="detail-card">
      {formData.websiteUrls.map((url, index) => (
        <div className="detail-row no-border" key={index}>
          <div className="detail-row-left" style={{ flex: 1 }}>
            <Globe className="detail-row-icon" size={20} style={{ color: '#865fc2', visibility: index === 0 ? 'visible' : 'hidden' }} />
            <div className="detail-row-content" style={{ flex: 1 }}>
              {index === 0 && <div className="detail-row-label">Trang web</div>}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input 
                  type="url" 
                  className="edit-input-field"
                  placeholder="https://" 
                  value={url} 
                  onChange={e => {
                    const newUrls = [...formData.websiteUrls];
                    newUrls[index] = e.target.value;
                    setFormData({...formData, websiteUrls: newUrls});
                  }} 
                />
                {formData.websiteUrls.length > 1 && (
                  <button 
                    type="button" 
                    className="icon-btn" 
                    style={{ padding: '4px', color: 'var(--text-muted)' }}
                    onClick={() => {
                      const newUrls = formData.websiteUrls.filter((_, i) => i !== index);
                      setFormData({...formData, websiteUrls: newUrls});
                    }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="add-more-link" onClick={() => setFormData({...formData, websiteUrls: [...formData.websiteUrls, '']})} style={{ cursor: 'pointer' }}>
        <span>+ Thêm</span>
      </div>
    </div>
  );
};

export default FormWebsiteFields;
