import React from 'react';

import VaultItemForm from '../vaultitemform/VaultItemForm';
import VaultItemDetail from '../vaultitemdetail/VaultItemDetail';
import './VaultRightPane.css';

import VaultEmptyState from './VaultEmptyState';
import { useVaultFormCtx } from '../../../context/VaultFormContext';

const VaultRightPane = () => {
  const { selectedItem, isEditing } = useVaultFormCtx();

  return (
    <div className="right-pane">
      {!selectedItem && !isEditing ? (
        <VaultEmptyState />
      ) : isEditing ? (
        <VaultItemForm key={selectedItem ? selectedItem.id : 'new'} />
      ) : (
        <VaultItemDetail key={selectedItem.id} />
      )}
    </div>
  );
};

export default VaultRightPane;
