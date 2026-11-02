import React from 'react';
import { X } from 'lucide-react';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const FormHeader = () => {
  const { selectedItem, setIsEditing, setSelectedItem } = useVaultFormCtx();
  const { handleActionWithDiscardCheck } = useDialogCtx();

  return (
    <div className="side-modal-header">
      <button type="button" className="action-btn-circle" onClick={() => {
        handleActionWithDiscardCheck(() => {
          setIsEditing(false);
          if(!selectedItem) setSelectedItem(null);
        });
      }} style={{ cursor: 'pointer' }}>
        <X size={20} />
      </button>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button type="submit" form="edit-form-new" className="create-login-btn">
          {selectedItem ? 'Lưu đăng nhập' : 'Tạo đăng nhập'}
        </button>
      </div>
    </div>
  );
};

export default FormHeader;
