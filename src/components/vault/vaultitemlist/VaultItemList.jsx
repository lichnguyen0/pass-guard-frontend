import React from 'react';

import './VaultItemList.css';

import VaultItem from './VaultItem';
import { useVaultDataCtx } from '../../../context/VaultDataContext';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const VaultItemList = () => {
  const { filteredItems } = useVaultDataCtx();
  const { selectedItem, isEditing, setSelectedItem, setIsEditing } = useVaultFormCtx();
  const { handleActionWithDiscardCheck } = useDialogCtx();

  return (
    <div className="middle-pane">
      <div className="item-list">
        {filteredItems.map(item => (
          <VaultItem 
            key={item.id}
            item={item}
            isSelected={(selectedItem && selectedItem.id === item.id) && !isEditing}
            onClick={() => {
              handleActionWithDiscardCheck(() => {
                setSelectedItem(item);
                setIsEditing(false);
              });
            }}
          />
        ))}
        {filteredItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            No items found.
          </div>
        )}
      </div>
    </div>
  );
};

export default VaultItemList;
