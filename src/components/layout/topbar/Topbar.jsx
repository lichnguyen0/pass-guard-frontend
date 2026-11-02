import React from 'react';
import { Search, Plus } from 'lucide-react';
import { useVaultDataCtx } from '../../../context/VaultDataContext';
import { useVaultFormCtx } from '../../../context/VaultFormContext';
import { useDialogCtx } from '../../../context/DialogContext';

const Topbar = () => {
  const { searchTerm, setSearchTerm } = useVaultDataCtx();
  const { handleCreateNew } = useVaultFormCtx();
  const { handleActionWithDiscardCheck } = useDialogCtx();

  return (
    <div className="topbar">
      <div className="search-bar">
        <Search size={16} color="var(--text-muted)" />
        <input 
          type="text" 
          placeholder="Tìm kiếm..." 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      
      <button className="primary" onClick={() => handleActionWithDiscardCheck(handleCreateNew)}>
        <Plus size={16} /> Tạo mới đăng nhập
      </button>
    </div>
  );
};

export default Topbar;
