import { useState } from 'react';
//quan lý trang thai hanh vi
export function useDialogs(hasUnsavedChanges) {
  const [showDiscardDialog, setShowDiscardDialog] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleActionWithDiscardCheck = (action) => {
    if (hasUnsavedChanges()) {
      setPendingAction(() => action);// luu hđ
      setShowDiscardDialog(true);
    } else {
      action();
    }
  };

  const handleConfirmDiscard = () => {
    if (pendingAction) {
      pendingAction();
    }
    setShowDiscardDialog(false);
    setPendingAction(null);
  };

  const handleCancelDiscard = () => {
    setShowDiscardDialog(false);
    setPendingAction(null);
  };

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const executeDelete = async (deleteFn) => {
    try {
      await deleteFn();
      setShowDeleteDialog(false);
    } catch (e) {
      // Xử lý lỗi bên trong deleteFn, nên không cần làm gì ở đây
    }
  };

  return { //tra ve để Component sử dụng hook sẽ nhận được:
    showDiscardDialog,
    showDeleteDialog,
    handleActionWithDiscardCheck,
    handleConfirmDiscard,
    handleCancelDiscard,
    handleDeleteClick,
    handleCancelDelete,
    executeDelete
  };
}
