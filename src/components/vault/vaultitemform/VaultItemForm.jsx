import React from 'react';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';
import './VaultItemForm.css';

import FormHeader from './FormHeader';
import FormTitleField from './FormTitleField';
import FormCredentialsFields from './FormCredentialsFields';
import FormWebsiteFields from './FormWebsiteFields';
import FormCategoryField from './FormCategoryField';
import FormNotesField from './FormNotesField';

const VaultItemForm = () => {
  const { selectedItem, setIsEditing, setSelectedItem, handleSave } = useVaultFormCtx();
  const { handleActionWithDiscardCheck } = useDialogCtx();

  return (
    <div className="side-modal-overlay" onClick={() => {
      handleActionWithDiscardCheck(() => {
        setIsEditing(false);
        if(!selectedItem) setSelectedItem(null);
      });
    }}>
      <div className="side-modal-content" onClick={e => e.stopPropagation()}>
        <FormHeader />
        
        <form id="edit-form-new" onSubmit={handleSave} className="edit-form-new">
          <FormTitleField />
          <FormCredentialsFields />
          <FormWebsiteFields />
          <FormCategoryField />
          <FormNotesField />
        </form>
      </div>
    </div>
  );
};

export default VaultItemForm;
