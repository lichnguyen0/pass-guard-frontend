import React, { useState } from 'react';
import { Users, Key, Eye, EyeOff } from 'lucide-react';
import PasswordStrengthBadge from '../PasswordStrengthBadge';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const FormCredentialsFields = () => {
  const { formData, setFormData } = useVaultFormCtx();
  const [showFormPassword, setShowFormPassword] = useState(false);

  return (
    <div className="detail-card">
      <div className="detail-row">
        <div className="detail-row-left" style={{ flex: 1 }}>
          <Users className="detail-row-icon" size={20} style={{ color: '#865fc2' }} />
          <div className="detail-row-content" style={{ flex: 1 }}>
            <div className="detail-row-label">Email hoặc tên người dùng</div>
            <input 
              type="text" 
              className="edit-input-field"
              placeholder="Nhập email hoặc tên người dùng" 
              value={formData.username} 
              onChange={e => setFormData({...formData, username: e.target.value})} 
            />
          </div>
        </div>
      </div>

      <div className="detail-row">
        <div className="detail-row-left" style={{ flex: 1 }}>
          <Key className="detail-row-icon" size={20} style={{ color: '#865fc2' }} />
          <div className="detail-row-content" style={{ flex: 1 }}>
            <div className="detail-row-label">Mật khẩu</div>
            <input 
              type={showFormPassword ? "text" : "password"} 
              className="edit-input-field"
              placeholder="Nhập mật khẩu" 
              value={formData.encryptedPassword} 
              onChange={e => setFormData({...formData, encryptedPassword: e.target.value})} 
              required 
            />
          </div>
        </div>
        <div className="detail-row-right">
          <PasswordStrengthBadge password={formData.encryptedPassword} />
          <button 
            type="button" 
            className="icon-btn-purple" 
            onClick={() => setShowFormPassword(!showFormPassword)}
            title={showFormPassword ? "Hide password" : "Show password"}
          >
            {showFormPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormCredentialsFields;
