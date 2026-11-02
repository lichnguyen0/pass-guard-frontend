import React from 'react';
import { FileText } from 'lucide-react';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const DetailNotesCard = () => {
  const { selectedItem } = useVaultFormCtx();

  return (
    <div className="detail-card">
      <div className="detail-row no-border">
        <div className="detail-row-left">
          <FileText className="detail-row-icon" size={20} />
          <div className="detail-row-content">
            <div className="detail-row-label">Ghi chú</div>
            <div className="detail-row-value">{selectedItem.notes || '-'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNotesCard;
