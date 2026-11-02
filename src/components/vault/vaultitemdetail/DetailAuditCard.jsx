import React from 'react';
import { Edit2, Zap } from 'lucide-react';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${day} thg ${month} năm ${year} at ${hours}:${minutes} ${ampm}`;
};

const DetailAuditCard = () => {
  const { selectedItem } = useVaultFormCtx();

  return (
    <div className="detail-card audit-card">
      <div className="detail-row no-border">
        <div className="detail-row-left">
          <Edit2 className="detail-row-icon audit-icon" size={18} />
          <div className="detail-row-content">
            <div className="detail-row-title">Chỉnh sửa đổi lần cuối</div>
            <div className="detail-row-subtitle">{formatDate(selectedItem.updatedAt)}</div>
          </div>
        </div>
      </div>

      <div className="detail-row no-border">
        <div className="detail-row-left">
          <Zap className="detail-row-icon audit-icon" size={18} />
          <div className="detail-row-content">
            <div className="detail-row-title">Đã tạo</div>
            <div className="detail-row-subtitle">{formatDate(selectedItem.createdAt)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAuditCard;
