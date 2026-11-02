import React from 'react';
import { Lock, Star, Folder } from 'lucide-react';
import './Sidebar.css';

import SidebarBrand from './SidebarBrand';
import SidebarNavItem from './SidebarNavItem';
import { useVaultDataCtx } from '../../../context/VaultDataContext';
import { useDialogCtx } from '../../../context/DialogContext';

const Sidebar = () => {
  const { selectedCategory, categories, setSelectedCategory } = useVaultDataCtx();
  const { handleActionWithDiscardCheck } = useDialogCtx();

  return (
    <div className="sidebar">
      <SidebarBrand />

      <div className="nav-section-title">Kho</div>
      <SidebarNavItem 
        icon={Lock} 
        label="Tất cả các mục" 
        isActive={selectedCategory === 'All'} 
        onClick={() => handleActionWithDiscardCheck(() => setSelectedCategory('All'))} 
      />
      <SidebarNavItem 
        icon={Star} 
        label="Yêu thích" 
        isActive={selectedCategory === 'Favorites'} 
        onClick={() => handleActionWithDiscardCheck(() => setSelectedCategory('Favorites'))} 
      />

      <div className="nav-section-title">Danh mục</div>
      {categories.map(cat => (
        <SidebarNavItem 
          key={cat}
          icon={Folder} 
          label={cat} 
          isActive={selectedCategory === cat} 
          onClick={() => handleActionWithDiscardCheck(() => setSelectedCategory(cat))} 
        />
      ))}
    </div>
  );
};

export default Sidebar;
