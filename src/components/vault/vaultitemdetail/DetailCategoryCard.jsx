import React from 'react';
import { Folder } from 'lucide-react';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const DetailCategoryCard = () => {
  const { selectedItem } = useVaultFormCtx();

  return (
    <div className="detail-card">
      <div className="detail-row no-border">
        <div className="detail-row-left">
          <Folder className="detail-row-icon" size={20} />
          <div className="detail-row-content">
            <div className="detail-row-label">Danh mục</div>
            <div className="detail-row-value">{selectedItem.category || 'Không có'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCategoryCard;
