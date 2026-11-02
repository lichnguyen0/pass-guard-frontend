import React, { createContext, useContext } from 'react';
import { useVaultData } from '../hooks/useVaultData';

const VaultDataContext = createContext(null);

export const VaultDataProvider = ({ children }) => {
  //goi custom
  const vaultData = useVaultData();

  return (
      //đưa vualtData vào VaultDataContext để tất cả component con (children) có thể truy cập mà không cần truyền props.
    <VaultDataContext.Provider value={vaultData}>
      {children}
    </VaultDataContext.Provider>
  );
};

export const  useVaultDataCtx = () => {
  const context = useContext(VaultDataContext);
  if (!context) throw new Error('useVaultDataCtx must be used within a VaultDataProvider');
  return context;
};
