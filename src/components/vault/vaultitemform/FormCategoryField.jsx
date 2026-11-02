import React from 'react';
import { Folder } from 'lucide-react';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const FormCategoryField = () => {
  const { formData, setFormData } = useVaultFormCtx();

  return (
    <div className="detail-card">
      <div className="detail-row no-border">
        <div className="detail-row-left" style={{ flex: 1 }}>
          <Folder className="detail-row-icon" size={20} style={{ color: '#865fc2' }} />
          <div className="detail-row-content" style={{ flex: 1 }}>
            <div className="detail-row-label">Danh mục</div>
            <input 
              type="text" 
              className="edit-input-field"
              placeholder="Nhập danh mục (vd: Logins, Social...)" 
              value={formData.category} 
              onChange={e => setFormData({...formData, category: e.target.value})} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCategoryField;
