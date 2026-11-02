import { useState } from 'react';
import { vaultAPI } from '../api/api';

const defaultFormData = {
  websiteName: '', 
  username: '', 
  encryptedPassword: '', 
  websiteUrls: [''], 
  category: 'Logins', 
  favorite: false, 
  notes: ''
};

export function useVaultForm(fetchItems) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  const hasUnsavedChanges = () => {
    if (!isEditing) return false;
    if (selectedItem) {
      return (
        formData.websiteName !== selectedItem.websiteName ||
        formData.username !== (selectedItem.username || '') ||
        formData.encryptedPassword !== selectedItem.encryptedPassword ||
        JSON.stringify(formData.websiteUrls) !== JSON.stringify(selectedItem.websiteUrl ? selectedItem.websiteUrl.split(',').map(s => s.trim()) : ['']) ||
        formData.notes !== (selectedItem.notes || '') ||
        formData.category !== selectedItem.category ||
        formData.favorite !== selectedItem.favorite
      );
    } else {
      return (
        formData.websiteName !== '' ||
        formData.username !== '' ||
        formData.encryptedPassword !== '' ||
        formData.websiteUrls.some(u => u !== '') ||
        formData.notes !== '' ||
        formData.category !== 'Logins' ||
        formData.favorite !== false
      );
    }
  };

  const handleCreateNew = () => {
    setSelectedItem(null);
    setFormData(defaultFormData);
    setIsEditing(true);
  };

  const handleEdit = () => {// lấy dữ liệu đã chọn đưa vào form và chuyển giao diện sang chế độ chỉnh sửa
    if (!selectedItem) return;
    setFormData({
      websiteName: selectedItem.websiteName,
      username: selectedItem.username,
      encryptedPassword: selectedItem.encryptedPassword,
      websiteUrls: selectedItem.websiteUrl ? selectedItem.websiteUrl.split(',').map(s => s.trim()) : [''],
      notes: selectedItem.notes || '',
      category: selectedItem.category,
      favorite: selectedItem.favorite
    });
    setIsEditing(true);
  };

  const handleSave = async (e) => { // xl lưu
    if(e) e.preventDefault(); // ngăn chăn form reload trang
    try {
      const payload = {
        ...formData,
        websiteUrl: formData.websiteUrls.filter(u => u.trim() !== '').join(',')
      };
      delete payload.websiteUrls;

      let res;
      if (selectedItem) {
        res = await vaultAPI.update(selectedItem.id, payload);
      } else {
        res = await vaultAPI.create(payload);
      }
      setSelectedItem(res.data);
      setIsEditing(false);
      fetchItems();
    } catch (err) {
      alert("Failed to save item.");
    }
  };

  const handleToggleFavorite = async () => {
    if (!selectedItem) return;
    try {
      const updatedItem = { ...selectedItem, favorite: !selectedItem.favorite };
      const res = await vaultAPI.update(selectedItem.id, updatedItem);
      setSelectedItem(res.data);
      fetchItems();
    } catch (error) {
      console.error("Error toggling favorite", error);
      alert("Failed to update favorite status.");
    }
  };

  const handleDeleteConfirm = async () => {
    if (!selectedItem) return;
    try {
      await vaultAPI.delete(selectedItem.id);
      setSelectedItem(null);
      setIsEditing(false);
      fetchItems();
    } catch (err) {
      console.error("Error deleting item", err);
      alert("Failed to delete item.");
      throw err;
    }
  };

  return {
    selectedItem,
    setSelectedItem,
    isEditing,
    setIsEditing,
    formData,
    setFormData,
    hasUnsavedChanges,
    handleCreateNew,
    handleEdit,
    handleSave,
    handleToggleFavorite,
    handleDeleteConfirm
  };
}
