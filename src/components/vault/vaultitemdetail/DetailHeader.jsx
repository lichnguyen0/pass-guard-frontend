import React from 'react';
import { Edit2, Trash2, MoreVertical, Star } from 'lucide-react';
import SiteIcon from '../../ui/siteicon/SiteIcon';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const DetailHeader = () => {
  const { selectedItem, handleToggleFavorite, handleEdit } = useVaultFormCtx();
  const { handleDeleteClick } = useDialogCtx();

  return (
    <div className="detail-header">
      <div className="detail-title-area" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <SiteIcon name={selectedItem.websiteName} url={selectedItem.websiteUrl ? selectedItem.websiteUrl.split(',')[0].trim() : ''} className="detail-site-icon" />
        <h2>{selectedItem.websiteName}</h2>
      </div>
      <div className="detail-actions">
        <button 
          className="icon-btn" 
          onClick={handleToggleFavorite} 
          title={selectedItem.favorite ? "Bỏ yêu thích" : "Yêu thích"}
          style={{ color: selectedItem.favorite ? '#f59e0b' : 'var(--text-muted)' }}
        >
          <Star size={20} fill={selectedItem.favorite ? '#f59e0b' : 'none'} />
        </button>
        <button className="edit-btn" onClick={handleEdit}><Edit2 size={16}/> Chỉnh sửa</button>
        <button className="icon-btn action-btn-circle" onClick={handleDeleteClick} title="Xóa" style={{ color: 'var(--danger)' }}><Trash2 size={18}/></button>
        <button className="icon-btn" title="Thêm"><MoreVertical size={20}/></button>
      </div>
    </div>
  );
};

export default DetailHeader;
