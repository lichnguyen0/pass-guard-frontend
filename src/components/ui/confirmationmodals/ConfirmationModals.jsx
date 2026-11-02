// pt xac nhan
import React from 'react';
import { X } from 'lucide-react'; //icon nut X trong library dung lam nut dong modal
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';
import './ConfirmationModals.css';

const ConfirmationModals = () => {
  const { selectedItem } = useVaultFormCtx();
  const {
    showDiscardDialog,
    showDeleteDialog,
    handleCancelDiscard,
    handleConfirmDiscard,
    handleCancelDelete,
    executeDelete,
    handleDeleteConfirm
  } = useDialogCtx();

  const handleConfirmDelete = () => executeDelete(handleDeleteConfirm);

  return (
    <>
      {/* Hộp thoại xác nhận loại bỏ */}
      {showDiscardDialog && (
        <div className="discard-dialog-overlay" onClick={handleCancelDiscard}>
          <div className="discard-dialog" onClick={e => e.stopPropagation()}>
            <div className="discard-dialog-header">
              <h3>Hủy bỏ thay đổi?</h3>
              <button className="close-btn" onClick={handleCancelDiscard}>
                <X size={18} />
              </button>
            </div>
            
            <div className="discard-dialog-body">
              <div className="discard-dialog-accent-line"></div>
              <span className="discard-dialog-text">Có thay đổi chưa được lưu.</span>
            </div>
            
            <div className="discard-dialog-footer">
              <button className="discard-btn-cancel" onClick={handleCancelDiscard}>
                Hủy
              </button>
              <button className="discard-btn-confirm" onClick={handleConfirmDiscard}>
                Bỏ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Xóa hộp thoại xác nhận*/}
      {showDeleteDialog && (
        <div className="discard-dialog-overlay" onClick={handleCancelDelete}>
          <div className="discard-dialog" onClick={e => e.stopPropagation()}>
            <div className="discard-dialog-header">
              <h3>Xóa mục này?</h3>
              <button className="close-btn" onClick={handleCancelDelete}>
                <X size={18} />
              </button>
            </div>
            
            <div className="discard-dialog-body" style={{ display: 'block', paddingTop: '0.5rem' }}>
              <span className="discard-dialog-text">Bạn có chắc chắn muốn xóa vĩnh viễn mục <strong>{selectedItem?.websiteName || 'này'}</strong> không? Hành động này không thể hoàn tác.</span>
            </div>
            
            <div className="discard-dialog-footer">
              <button className="discard-btn-cancel" onClick={handleCancelDelete}>
                Hủy
              </button>
              <button className="delete-btn-confirm" onClick={handleConfirmDelete}>
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModals;
