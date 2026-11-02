import React from 'react';
import { FileText } from 'lucide-react';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const FormNotesField = () => {
  const { formData, setFormData } = useVaultFormCtx();

  return (
    <div className="detail-card">
      <div className="detail-row no-border" style={{ height: 'auto', minHeight: '62px', padding: '0.8rem 0', alignItems: 'flex-start' }}>
        <div className="detail-row-left" style={{ flex: 1, alignItems: 'flex-start' }}>
          <FileText className="detail-row-icon" size={20} style={{ color: '#865fc2', marginTop: '2px' }} />
          <div className="detail-row-content" style={{ flex: 1 }}>
            <div className="detail-row-label">Ghi chú</div>
            <textarea 
              className="edit-input-field notes-textarea"
              placeholder="Thêm ghi chú" 
              value={formData.notes}
              onChange={e => {
                setFormData({...formData, notes: e.target.value});
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
              }}
              rows={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNotesField;
