import React, { createContext, useContext } from 'react';
import { useVaultForm } from '../hooks/useVaultForm';
import { useVaultDataCtx } from './VaultDataContext';

const VaultFormContext = createContext(null);

export const VaultFormProvider = ({ children }) => {
  const { fetchItems } = useVaultDataCtx();
  const vaultForm = useVaultForm(fetchItems);

  return (
    <VaultFormContext.Provider value={vaultForm}>
      {children}
    </VaultFormContext.Provider>
  );
};

export const useVaultFormCtx = () => {
  const context = useContext(VaultFormContext);
  if (!context) throw new Error('useVaultFormCtx must be used within a VaultFormProvider');
  return context;
};
