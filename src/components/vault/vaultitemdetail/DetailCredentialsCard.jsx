import React, { useState } from 'react';
import { Mail, Key, Copy, Eye, EyeOff } from 'lucide-react';
import PasswordStrengthBadge from '../PasswordStrengthBadge';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const DetailCredentialsCard = () => {
  const { selectedItem, handleCopy } = useVaultFormCtx();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="detail-card">
      <div className="detail-row">
        <div className="detail-row-left">
          <Mail className="detail-row-icon" size={20} />
          <div className="detail-row-content">
            <div className="detail-row-label">Email</div>
            <div className="detail-row-value">{selectedItem.username || '-'}</div>
          </div>
        </div>
        <div className="detail-row-right">
          {selectedItem.username && (
            <button className="icon-btn" onClick={() => handleCopy(selectedItem.username)} title="Copy Username"><Copy size={16}/></button>
          )}
        </div>
      </div>

      <div className="detail-row">
        <div className="detail-row-left">
          <Key className="detail-row-icon" size={20} />
          <div className="detail-row-content">
            <div className="detail-row-label">Mật khẩu</div>
            <div className="detail-row-value password-dots">
              {showPassword ? selectedItem.encryptedPassword : '••••••••••••••••'}
            </div>
          </div>
        </div>
        <div className="detail-row-right">
          <PasswordStrengthBadge password={selectedItem.encryptedPassword} />
          <button className="icon-btn" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
          </button>
          <button className="icon-btn" onClick={() => handleCopy(selectedItem.encryptedPassword)} title="Copy Password"><Copy size={16}/></button>
        </div>
      </div>
    </div>
  );
};

export default DetailCredentialsCard;
