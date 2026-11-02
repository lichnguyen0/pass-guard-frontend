import React, { createContext, useContext } from 'react';
import { useDialogs } from '../hooks/useDialogs';
import { useVaultFormCtx } from './VaultFormContext';

const DialogContext = createContext(null);

export const DialogProvider = ({ children }) => {
  const { hasUnsavedChanges } = useVaultFormCtx(); //lấy hàm
  const dialogs = useDialogs(hasUnsavedChanges);// đưa hàm đó cho useDialogs  sử dụng

  return (
    <DialogContext.Provider value={dialogs}>
      {children}
    </DialogContext.Provider>
  );
};
//chỉ đọc dữ liệu mà DialogProvider cung cấp
export const useDialogCtx = () => {
  const context = useContext(DialogContext);
  if (!context) throw new Error('useDialogCtx must be used within a DialogProvider');
  return context;
};
